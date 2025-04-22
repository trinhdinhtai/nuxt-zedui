<script setup lang="ts">
import imageUrl from '~/assets/images/logo.png'
import { splitByCase, upperFirst } from 'scule'

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
]

const platforms = [
  {
    title: 'Playground',
    url: '#',
    iconName: 'i-lucide-square-terminal',
    isActive: true,
    items: [
      {
        title: 'Theme',
        url: '/playground/theme',
      },
      {
        title: 'Role',
        url: '/playground/role',
      },
    ],
  },
  {
    title: 'Documentation',
    url: '#',
    iconName: 'i-lucide-book-open',
    items: [
      {
        title: 'Introduction',
        url: '#',
      },
      {
        title: 'Get Started',
        url: '#',
      },
      {
        title: 'Tutorials',
        url: '#',
      },
      {
        title: 'Changelog',
        url: '#',
      },
    ],
  },
]

const items = components.sort().map(component => ({
  title: upperName(component),
  url: `/components/${component}`,
}))

function upperName(name: string) {
  return splitByCase(name)
    .map(p => upperFirst(p))
    .join('')
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
        <ZSidebarGroupLabel>Platform</ZSidebarGroupLabel>
        <ZSidebarMenu>
          <ZCollapsible
            v-for="item in platforms"
            :key="item.title"
            as-child
            :default-open="item?.isActive"
            class="group/collapsible"
          >
            <ZSidebarMenuItem>
              <ZCollapsibleTrigger as-child>
                <ZSidebarMenuButton :tooltip="item.title">
                  <ZIcon v-if="item.iconName" :name="item.iconName" />
                  <span>{{ item.title }}</span>
                  <ZIcon
                    name="i-lucide-chevron-right"
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </ZSidebarMenuButton>
              </ZCollapsibleTrigger>
              <ZCollapsibleContent>
                <ZSidebarMenuSub>
                  <ZSidebarMenuSubItem
                    v-for="subItem in item.items"
                    :key="subItem.title"
                  >
                    <ZSidebarMenuSubButton as-child>
                      <NuxtLink :to="subItem.url">
                        <span>{{ subItem.title }}</span>
                      </NuxtLink>
                    </ZSidebarMenuSubButton>
                  </ZSidebarMenuSubItem>
                </ZSidebarMenuSub>
              </ZCollapsibleContent>
            </ZSidebarMenuItem>
          </ZCollapsible>
        </ZSidebarMenu>
      </ZSidebarGroup>

      <ZSidebarGroup>
        <ZSidebarGroupLabel>Components</ZSidebarGroupLabel>
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
