import { defu } from 'defu';
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addVitePlugin,
  installModule,
  hasNuxtModule,
} from '@nuxt/kit';
import { name, version } from '../package.json';
import { defaultOptions, getDefaultUiConfig } from './defaults';
import { addTemplates } from './templates';
import type { NuxtOptions } from 'nuxt/schema';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix for components
   * @defaultValue `U`
   * @link https://ui.nuxt.com/getting-started/installation/nuxt#prefix
   */
  prefix?: string;

  /**
   * Enable or disable `@nuxt/fonts` module
   * @defaultValue `true`
   * @link https://ui.nuxt.com/getting-started/installation/nuxt#fonts
   */
  fonts?: boolean;

  /**
   * Customize how the theme is generated
   * @link https://ui.nuxt.com/getting-started/theme
   */
  theme?: {
    /**
     * Define the color aliases available for components
     * @defaultValue `['primary', 'secondary', 'success', 'info', 'warning', 'error']`
     * @link https://ui.nuxt.com/getting-started/installation/nuxt#themecolors
     */
    colors?: string[];

    /**
     * Enable or disable transitions on components
     * @defaultValue `true`
     * @link https://ui.nuxt.com/getting-started/installation/nuxt#themetransitions
     */
    transitions?: boolean;
  };
}

async function registerModule(
  name: string,
  key: string,
  options: Record<string, any>,
  nuxtOptions: NuxtOptions
) {
  if (!hasNuxtModule(name)) {
    await installModule(name, options);
  } else {
    (nuxtOptions as any)[key] = defu((nuxtOptions as any)[key], options);
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'zedUI',
  },
  // Default configuration options of the Nuxt module
  defaults: defaultOptions,
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    options.theme = options.theme || {};
    options.theme.colors = [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
    ];

    // Lưu trữ các tùy chọn của module vào nuxt.options
    // User có thể override các tùy chọn này trong nuxt.config.ts
    nuxt.options.zedUI = options;

    nuxt.options.appConfig.ui = defu(
      nuxt.options.appConfig.ui || {},
      getDefaultUiConfig(options.theme.colors)
    );

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then((r) => r.default);
      addVitePlugin(plugin());
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {};
    }

    // Cài đặt module @nuxt/fonts
    if (options.fonts) {
      await registerModule(
        '@nuxt/fonts',
        'fonts',
        {
          experimental: { processCSSVariables: true },
        },
        nuxt.options
      );
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'));

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
    });

    addTemplates(options, nuxt, resolve);
  },
});
