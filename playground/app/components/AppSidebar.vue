<script setup lang="ts">
import imageUrl from '~/assets/images/logo.png';
import { splitByCase, upperFirst } from 'scule';

const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'carousel',
  'checkbox',
  'collapsible',
  'context-menu',
  'command',
  'dialog',
  'drawer',
  'dropdown-menu',
  'form',
  'input',
  'input-otp',
  'label',
  'menubar',
  'navigation-menu',
  'pagination',
  'popover',
  'progress',
  'radio-group',
  'resizable',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'sidebar',
  'skeleton',
  'slider',
  'stepper',
  'switch',
  'tabs',
  'tags-input',
  'table',
  'textarea',
  'toggle',
  'toggle-group',
  'toast',
  'tooltip',
];

const items = components.sort().map((component) => ({
  title: upperName(component),
  url: `/components/${component}`,
}));

function upperName(name: string) {
  return splitByCase(name)
    .map((p) => upperFirst(p))
    .join('');
}
</script>

<template>
  <ZSidebar>
    <ZSidebarHeader>
      <div class="flex items-center gap-2 p-2">
        <img :src="imageUrl" alt="Logo" width="24" height="24" />
        <span class="font-mono font-semibold text-lg">VKirinUI</span>
      </div>
    </ZSidebarHeader>

    <ZSidebarContent>
      <ZSidebarGroup>
        <ZSidebarMenu>
          <ZSidebarMenuItem v-for="item in items" :key="item.title">
            <ZSidebarMenuButton as-child>
              <a :href="item.url">
                <span class="capitalize">{{ item.title }}</span>
              </a>
            </ZSidebarMenuButton>
          </ZSidebarMenuItem>
        </ZSidebarMenu>
      </ZSidebarGroup>
    </ZSidebarContent>
  </ZSidebar>
</template>
