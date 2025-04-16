<script setup lang="ts">
import imageUrl from '~/assets/images/logo.png';

const components = [
  'accordion',
  'alert',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'button-group',
  'card',
  'calendar',
  'carousel',
  'checkbox',
  'chip',
  'collapsible',
  'color-picker',
  'context-menu',
  'command-palette',
  'drawer',
  'dropdown-menu',
  'form',
  'form-field',
  'input',
  'input-menu',
  'input-number',
  'kbd',
  'link',
  'modal',
  'navigation-menu',
  'pagination',
  'pin-input',
  'popover',
  'progress',
  'radio-group',
  'select',
  'select-menu',
  'separator',
  'shortcuts',
  'skeleton',
  'slideover',
  'slider',
  'stepper',
  'switch',
  'tabs',
  'table',
  'textarea',
  'toast',
  'tooltip',
  'tree',
];

const items = components.map((component) => ({
  title: component,
  url: `/components/${component}`,
}));
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
            <ZSidebarMenuButton asChild>
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
