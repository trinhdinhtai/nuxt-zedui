import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix for components
   * @defaultValue `U`
   * @link https://ui.nuxt.com/getting-started/installation/nuxt#prefix
   */
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'));

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
    });
  },
});
