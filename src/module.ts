import { defu } from 'defu';
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addVitePlugin,
} from '@nuxt/kit';
import { name, version } from '../package.json';
import { defaultOptions, getDefaultUiConfig } from './defaults';
import { addTemplates } from './templates';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix for components
   * @defaultValue `U`
   * @link https://ui.nuxt.com/getting-started/installation/nuxt#prefix
   */
  prefix?: string;

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
