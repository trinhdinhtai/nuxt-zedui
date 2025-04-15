<script setup lang="ts">
const items = [
  {
    title: 'Home',
    url: '#',
    iconName: 'i-lucide-home',
  },
  {
    title: 'Inbox',
    url: '#',
    iconName: 'i-lucide-inbox',
  },
  {
    title: 'Calendar',
    url: '#',
    iconName: 'i-lucide-calendar',
  },
  {
    title: 'Search',
    url: '#',
    iconName: 'i-lucide-search',
  },
  {
    title: 'Settings',
    url: '#',
    iconName: 'i-lucide-settings',
  },
];
</script>

<template>
  <ZSidebar>
    <ZSidebarContent>
      <ZSidebarGroup>
        <ZSidebarMenu>
          <ZSidebarMenuItem v-for="item in items" :key="item.title">
            <ZSidebarMenuButton asChild>
              <a :href="item.url">
                <ZIcon :name="item.iconName" class="size-4" />
                <span>{{ item.title }}</span>
              </a>
            </ZSidebarMenuButton>
          </ZSidebarMenuItem>
        </ZSidebarMenu>
      </ZSidebarGroup>
    </ZSidebarContent>
  </ZSidebar>
</template>
