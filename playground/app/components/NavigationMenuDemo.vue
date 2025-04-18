<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../../../src/runtime/components/navigation-menu';
</script>

<template>
  <div class="hidden w-full flex-col justify-center gap-6 xl:flex">
    <!-- Basic Navigation Menu -->
    <ZNavigationMenu>
      <ZNavigationMenuList>
        <ZNavigationMenuItem>
          <ZNavigationMenuTrigger> Getting started </ZNavigationMenuTrigger>
          <ZNavigationMenuContent>
            <div
              class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
            >
              <div class="row-span-3">
                <div
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <div class="mb-2 mt-4 text-lg font-medium">
                    Build better UI
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Beautiful, accessible UI components for your Vue
                    applications
                  </p>
                </div>
              </div>
              <a
                href="#"
                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div class="text-sm font-medium leading-none">Introduction</div>
                <p
                  class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </p>
              </a>
              <a
                href="#"
                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div class="text-sm font-medium leading-none">Installation</div>
                <p
                  class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                >
                  How to install dependencies and structure your app.
                </p>
              </a>
              <a
                href="#"
                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div class="text-sm font-medium leading-none">Typography</div>
                <p
                  class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                >
                  Styles for headings, paragraphs, lists...etc
                </p>
              </a>
            </div>
          </ZNavigationMenuContent>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuTrigger> Components </ZNavigationMenuTrigger>
          <ZNavigationMenuContent>
            <div
              class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <div class="grid grid-cols-1 gap-2">
                <div class="text-sm font-semibold">UI Components</div>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-command" class="size-4" />
                  <span>Button</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-text-cursor-input" class="size-4" />
                  <span>Input</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-table" class="size-4" />
                  <span>Table</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-check-square" class="size-4" />
                  <span>Checkbox</span>
                </a>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <div class="text-sm font-semibold">Layout Components</div>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-layout" class="size-4" />
                  <span>Grid</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-layout-template" class="size-4" />
                  <span>Layout</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-sidebar" class="size-4" />
                  <span>Sidebar</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-1 rounded-md p-1 hover:bg-accent hover:text-accent-foreground text-sm"
                >
                  <ZIcon name="i-lucide-panel-top" class="size-4" />
                  <span>Panel</span>
                </a>
              </div>
            </div>
          </ZNavigationMenuContent>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="https://github.com/vuejs"> Github </NuxtLink>
          </ZNavigationMenuLink>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/docs"> Documentation </NuxtLink>
          </ZNavigationMenuLink>
        </ZNavigationMenuItem>
      </ZNavigationMenuList>

      <ZNavigationMenuViewport />
    </ZNavigationMenu>

    <ZNavigationMenu :viewport="false">
      <ZNavigationMenuList>
        <ZNavigationMenuItem>
          <ZNavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/docs"> Documentation </NuxtLink>
          </ZNavigationMenuLink>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuTrigger>List</ZNavigationMenuTrigger>
          <ZNavigationMenuContent>
            <ul class="grid w-[300px] gap-4">
              <li>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#">
                    <div class="font-medium">Components</div>
                    <div class="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#">
                    <div class="font-medium">Documentation</div>
                    <div class="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#">
                    <div class="font-medium">Blog</div>
                    <div class="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </NuxtLink>
                </ZNavigationMenuLink>
              </li>
            </ul>
          </ZNavigationMenuContent>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuTrigger>Simple List</ZNavigationMenuTrigger>
          <ZNavigationMenuContent>
            <ul class="grid w-[200px] gap-4">
              <li>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#"> Components </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#"> Documentation </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#"> Blocks </NuxtLink>
                </ZNavigationMenuLink>
              </li>
            </ul>
          </ZNavigationMenuContent>
        </ZNavigationMenuItem>

        <ZNavigationMenuItem>
          <ZNavigationMenuTrigger>With Icon</ZNavigationMenuTrigger>
          <ZNavigationMenuContent>
            <ul class="grid w-[200px] gap-4">
              <li>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#" class="flex-row items-center gap-2">
                    <ZIcon name="i-lucide-circle-help" class="size-4" />
                    Backlog
                  </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#" class="flex-row items-center gap-2">
                    <ZIcon name="i-lucide-circle" class="size-4" />
                    To Do
                  </NuxtLink>
                </ZNavigationMenuLink>
                <ZNavigationMenuLink as-child>
                  <NuxtLink to="#" class="flex-row items-center gap-2">
                    <ZIcon name="i-lucide-circle-check" class="size-4" />
                    Done
                  </NuxtLink>
                </ZNavigationMenuLink>
              </li>
            </ul>
          </ZNavigationMenuContent>
        </ZNavigationMenuItem>
      </ZNavigationMenuList>
    </ZNavigationMenu>
  </div>
</template>
