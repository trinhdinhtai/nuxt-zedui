<script setup lang="ts">
import { ref } from 'vue';
import {
  LayoutDashboard,
  LucideHome,
  BarChart2,
  Users,
  FileText,
  Settings,
  MoonStar,
  LogOut,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-vue-next';

const demoSidebarOpen = ref(true);

const SIDEBAR_WIDTH = '240px';
const SIDEBAR_WIDTH_COLLAPSED = '56px';
</script>

<template>
  <div class="space-y-12">
    <div class="flex flex-col gap-4">
      <div
        class="border rounded-lg overflow-hidden h-[500px] relative bg-background"
      >
        <div class="flex h-full w-full">
          <div
            class="h-full bg-sidebar text-sidebar-foreground border-r flex flex-col transition-all duration-300"
            :style="{
              width: demoSidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED,
            }"
          >
            <!-- Header -->
            <div class="flex items-center p-4 gap-2 border-b">
              <LayoutDashboard class="h-6 w-6 flex-shrink-0" />
              <span
                class="font-semibold text-xl whitespace-nowrap overflow-hidden transition-opacity"
                :class="{ 'opacity-0': !demoSidebarOpen }"
              >
                App
              </span>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-hidden flex flex-col">
              <!-- Menu 1 -->
              <div class="px-2 py-2">
                <!-- Menu Items -->
                <div
                  v-for="(item, i) in [
                    { icon: LucideHome, label: 'Home', active: true },
                    { icon: BarChart2, label: 'Analytics' },
                    { icon: Users, label: 'Users' },
                    { icon: FileText, label: 'Documents' },
                  ]"
                  :key="i"
                  class="flex items-center rounded-md px-2 py-2 mb-1 cursor-pointer"
                  :class="
                    item.active
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted'
                  "
                >
                  <component :is="item.icon" class="h-4 w-4 flex-shrink-0" />
                  <span
                    class="ml-2 text-sm transition-opacity whitespace-nowrap overflow-hidden"
                    :class="{
                      'opacity-0': !demoSidebarOpen,
                      'w-0': !demoSidebarOpen,
                    }"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>

              <!-- Separator -->
              <div class="mx-2 h-px bg-border my-2" />

              <!-- Menu 2 -->
              <div class="px-2 py-2">
                <div
                  class="flex items-center rounded-md px-2 py-2 cursor-pointer hover:bg-muted"
                >
                  <Settings class="h-4 w-4 flex-shrink-0" />
                  <span
                    class="ml-2 text-sm transition-opacity whitespace-nowrap overflow-hidden"
                    :class="{
                      'opacity-0': !demoSidebarOpen,
                      'w-0': !demoSidebarOpen,
                    }"
                  >
                    Settings
                  </span>
                </div>
              </div>

              <!-- Bottom Menu -->
              <div class="px-2 py-2 mt-auto border-t">
                <div
                  v-for="(item, i) in [
                    { icon: MoonStar, label: 'Theme' },
                    { icon: LogOut, label: 'Logout' },
                  ]"
                  :key="i"
                  class="flex items-center rounded-md px-2 py-2 mb-1 cursor-pointer hover:bg-muted"
                >
                  <component :is="item.icon" class="h-4 w-4 flex-shrink-0" />
                  <span
                    class="ml-2 text-sm transition-opacity whitespace-nowrap overflow-hidden"
                    :class="{
                      'opacity-0': !demoSidebarOpen,
                      'w-0': !demoSidebarOpen,
                    }"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="flex-1 overflow-auto h-full">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h1 class="text-2xl font-bold">Dashboard</h1>
                <div class="flex items-center gap-4">
                  <ZButton
                    variant="outline"
                    size="sm"
                    class="gap-2"
                    @click="demoSidebarOpen = !demoSidebarOpen"
                  >
                    <component
                      :is="demoSidebarOpen ? PanelLeftClose : PanelLeft"
                      class="h-4 w-4"
                    />
                    {{ demoSidebarOpen ? 'Hide' : 'Show' }} Sidebar
                  </ZButton>
                </div>
              </div>

              <div class="border rounded-lg p-4">
                <h3 class="font-medium mb-2">Main Content Area</h3>
                <p class="text-sm text-muted-foreground">
                  This is the main content area of your application. When the
                  sidebar is collapsed, this area expands to use the available
                  space.
                </p>
                <p class="text-sm text-muted-foreground mt-2">
                  The sidebar can be toggled between expanded and collapsed
                  states. On mobile, it uses an offcanvas approach.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div class="border rounded-lg p-4 bg-muted/30">
                    <h4 class="font-medium text-sm mb-2">Sidebar Features</h4>
                    <ul class="text-xs space-y-1 text-muted-foreground">
                      <li>• Collapsible navigation</li>
                      <li>• Icon-only mode for compact viewing</li>
                      <li>• Mobile-friendly offcanvas variant</li>
                      <li>• Customizable width and appearance</li>
                    </ul>
                  </div>
                  <div class="border rounded-lg p-4 bg-muted/30">
                    <h4 class="font-medium text-sm mb-2">Usage Examples</h4>
                    <ul class="text-xs space-y-1 text-muted-foreground">
                      <li>• Admin dashboards</li>
                      <li>• Application navigation</li>
                      <li>• Settings panels</li>
                      <li>• Document management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
