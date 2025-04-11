import { fileURLToPath } from 'node:url';
import type { Nuxt, NuxtTemplate, NuxtTypeTemplate } from '@nuxt/schema';
import { addTemplate, addTypeTemplate } from '@nuxt/kit';
import type { Resolver } from '@nuxt/kit';
import { kebabCase } from 'scule';

import type { ModuleOptions } from './module';
import * as theme from './theme';

/**
 * Tạo các template cho module
 * @param options - The options for the module
 * @param _uiConfig - The ui config for the module
 * @returns The templates for the module
 */
export function getTemplates(
  options: ModuleOptions,
  _uiConfig: Record<string, any>
) {
  const templates: NuxtTemplate[] = [];

  // Tạo các template cho các component
  for (const component in theme) {
    templates.push({
      filename: `ui/${kebabCase(component)}.ts`,
      write: true,
      getContents: async () => {
        const template = (theme as any)[component];
        const result =
          typeof template === 'function' ? template(options) : template;

        const variants = Object.entries(result.variants || {})
          .filter(([_, values]) => {
            const keys = Object.keys(values as Record<string, unknown>);
            return keys.some((key) => key !== 'true' && key !== 'false');
          })
          .map(([key]) => key);

        let json = JSON.stringify(result, null, 2);

        for (const variant of variants) {
          json = json.replace(
            new RegExp(`("${variant}": "[^"]+")`, 'g'),
            `$1 as typeof ${variant}[number]`
          );
          json = json.replace(
            new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g'),
            (_, before, match, after) => {
              const replaced = match.replace(
                /("[^"]+")/g,
                `$1 as typeof ${variant}[number]`
              );
              return `${before}${replaced}${after}`;
            }
          );
        }

        function generateVariantDeclarations(variants: string[]) {
          return variants.map((variant) => {
            const keys = Object.keys(result.variants[variant]);
            return `const ${variant} = ${JSON.stringify(
              keys,
              null,
              2
            )} as const`;
          });
        }

        // For local development, import directly from theme
        const isUiDev = true;
        if (isUiDev) {
          const templatePath = fileURLToPath(
            new URL(`./theme/${kebabCase(component)}`, import.meta.url)
          );
          return [
            `import template from ${JSON.stringify(templatePath)}`,
            ...generateVariantDeclarations(variants),
            `const result = typeof template === 'function' ? (template as Function)(${JSON.stringify(
              options,
              null,
              2
            )}) : template`,
            `const theme = ${json}`,
            `export default result as typeof theme`,
          ].join('\n\n');
        }

        // For production build
        return [
          ...generateVariantDeclarations(variants),
          `export default ${json}`,
        ].join('\n\n');
      },
    });
  }

  // Tạo template cho file css
  templates.push({
    filename: 'ui.css',
    write: true,
    getContents: () => `@source "./ui";`,
  });

  return templates;
}

export function addTemplates(
  options: ModuleOptions,
  nuxt: Nuxt,
  resolve: Resolver['resolve']
) {
  const templates = getTemplates(options, nuxt.options.appConfig.ui);
  for (const template of templates) {
    if (template.filename!.endsWith('.d.ts')) {
      addTypeTemplate(template as NuxtTypeTemplate);
    } else {
      addTemplate(template);
    }
  }

  nuxt.hook('prepare:types', ({ references }) => {
    references.push({ path: resolve('./runtime/types/app.config.d.ts') });
  });
}
