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

  // Add ui.css file
  templates.push({
    filename: 'ui.css',
    write: true,
    getContents: () => `@source "./ui";

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`,
  });

  // Add index.ts file
  templates.push({
    filename: 'ui/index.ts',
    write: true,
    getContents: () =>
      Object.keys(theme)
        .map(
          (component) =>
            `export { default as ${component} } from './${kebabCase(
              component
            )}'`
        )
        .join('\n'),
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
