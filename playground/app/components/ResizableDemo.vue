<script setup lang="ts">
import { ref } from 'vue';

const verticalLayout = ref([25, 75]);
const horizontalLayout = ref([33, 67]);
const gridLayout = ref([33, 67, 50, 50]);
const collapsiblePanels = ref([33, 67]);
const collapsed = ref(false);

function toggleCollapsed() {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <!-- Basic Vertical Resizable -->
    <div class="flex flex-col gap-4">
      <div class="h-[200px] max-w-3xl border rounded-lg">
        <ZResizablePanelGroup v-model="verticalLayout" direction="vertical">
          <ZResizablePanel :default-size="verticalLayout[0]">
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/20"
            >
              <p class="text-sm">Top Panel</p>
            </div>
          </ZResizablePanel>
          <ZResizableHandle with-handle />
          <ZResizablePanel :default-size="verticalLayout[1]">
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/50"
            >
              <p class="text-sm">Bottom Panel</p>
            </div>
          </ZResizablePanel>
        </ZResizablePanelGroup>
      </div>
      <div class="text-sm text-muted-foreground text-center">
        Drag the handle up and down to resize the panels
      </div>
    </div>

    <!-- Basic Horizontal Resizable -->
    <div class="flex flex-col gap-4">
      <div class="h-[200px] max-w-3xl border rounded-lg">
        <ZResizablePanelGroup v-model="horizontalLayout" direction="horizontal">
          <ZResizablePanel :default-size="horizontalLayout[0]">
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/20"
            >
              <p class="text-sm">Left Panel</p>
            </div>
          </ZResizablePanel>
          <ZResizableHandle with-handle />
          <ZResizablePanel :default-size="horizontalLayout[1]">
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/50"
            >
              <p class="text-sm">Right Panel</p>
            </div>
          </ZResizablePanel>
        </ZResizablePanelGroup>
      </div>
      <div class="text-sm text-muted-foreground text-center">
        Drag the handle left and right to resize the panels
      </div>
    </div>

    <!-- Grid Layout Resizable -->
    <div class="flex flex-col gap-4">
      <div class="h-[400px] max-w-3xl border rounded-lg">
        <ZResizablePanelGroup v-model="gridLayout" direction="vertical">
          <ZResizablePanel :default-size="gridLayout[0]">
            <ZResizablePanelGroup direction="horizontal">
              <ZResizablePanel :default-size="gridLayout[2]">
                <div
                  class="p-6 h-full flex items-center justify-center bg-muted/10"
                >
                  <p class="text-sm">Top Left Panel</p>
                </div>
              </ZResizablePanel>
              <ZResizableHandle />
              <ZResizablePanel :default-size="gridLayout[3]">
                <div
                  class="p-6 h-full flex items-center justify-center bg-muted/20"
                >
                  <p class="text-sm">Top Right Panel</p>
                </div>
              </ZResizablePanel>
            </ZResizablePanelGroup>
          </ZResizablePanel>
          <ZResizableHandle />
          <ZResizablePanel :default-size="gridLayout[1]">
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/50"
            >
              <p class="text-sm">Bottom Panel</p>
            </div>
          </ZResizablePanel>
        </ZResizablePanelGroup>
      </div>
      <div class="text-sm text-muted-foreground text-center">
        A more complex grid layout with both vertical and horizontal resizable
        panels
      </div>
    </div>

    <!-- Collapsible Panels -->
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <ZButton variant="outline" @click="toggleCollapsed">
          {{ collapsed ? 'Expand' : 'Collapse' }} Side Panel
        </ZButton>
      </div>
      <div class="h-[300px] w-[480px] border rounded-lg overflow-hidden">
        <ZResizablePanelGroup direction="horizontal">
          <ZResizablePanel
            :default-size="collapsiblePanels[0]"
            :min-size="collapsed ? 0 : 20"
            :size="collapsed ? 0 : collapsiblePanels[0]"
          >
            <div
              class="p-6 h-full flex items-center justify-center bg-muted/20"
            >
              <div v-if="!collapsed" class="w-full space-y-2">
                <p class="text-sm font-medium">Side Panel</p>
                <div class="space-y-1">
                  <div class="h-8 rounded-md bg-muted/70" />
                  <div class="h-8 rounded-md bg-muted/70" />
                  <div class="h-8 rounded-md bg-muted/70" />
                </div>
              </div>
            </div>
          </ZResizablePanel>
          <ZResizableHandle with-handle />
          <ZResizablePanel :default-size="collapsiblePanels[1]">
            <div class="p-6 h-full">
              <div
                class="h-full rounded-md bg-muted/30 flex items-center justify-center"
              >
                <p class="text-sm">Main Content Area</p>
              </div>
            </div>
          </ZResizablePanel>
        </ZResizablePanelGroup>
      </div>
      <div class="text-sm text-muted-foreground text-center">
        Click the button to collapse/expand the side panel
      </div>
    </div>

    <!-- Practical Example: Code Editor Layout -->
    <div class="flex flex-col gap-4 flex-1">
      <div class="h-[400px] border rounded-lg">
        <ZResizablePanelGroup direction="vertical">
          <ZResizablePanel :default-size="75">
            <ZResizablePanelGroup direction="horizontal">
              <ZResizablePanel :default-size="25">
                <div class="h-full bg-muted/20 flex flex-col">
                  <div class="border-b p-2 font-medium text-xs">Explorer</div>
                  <div class="p-2">
                    <div class="text-xs space-y-1">
                      <div
                        class="pl-2 py-1 hover:bg-muted/40 rounded cursor-pointer"
                      >
                        📁 src
                      </div>
                      <div
                        class="pl-4 py-1 hover:bg-muted/40 rounded cursor-pointer"
                      >
                        📁 components
                      </div>
                      <div
                        class="pl-6 py-1 hover:bg-muted/40 rounded cursor-pointer text-primary"
                      >
                        📄 App.vue
                      </div>
                      <div
                        class="pl-4 py-1 hover:bg-muted/40 rounded cursor-pointer"
                      >
                        📁 assets
                      </div>
                      <div
                        class="pl-4 py-1 hover:bg-muted/40 rounded cursor-pointer"
                      >
                        📁 views
                      </div>
                      <div
                        class="pl-2 py-1 hover:bg-muted/40 rounded cursor-pointer"
                      >
                        📄 package.json
                      </div>
                    </div>
                  </div>
                </div>
              </ZResizablePanel>
              <ZResizableHandle />
              <ZResizablePanel :default-size="75">
                <div class="h-full flex flex-col">
                  <div
                    class="border-b p-2 font-medium text-xs flex items-center"
                  >
                    <div class="bg-primary/20 rounded px-2 py-1">App.vue</div>
                  </div>
                  <div
                    class="p-2 flex-1 font-mono text-xs bg-muted/5 overflow-auto"
                  >
                    <pre
                      class="text-xs"
                    ><span class="text-blue-500">&lt;script</span> <span class="text-green-500">setup</span> <span class="text-green-500">lang</span>=<span class="text-yellow-500">"ts"</span><span class="text-blue-500">&gt;</span>
<span class="text-purple-500">import</span> { ref } <span class="text-purple-500">from</span> <span class="text-yellow-500">'vue'</span>;

<span class="text-purple-500">const</span> count = ref(<span class="text-orange-500">0</span>);

<span class="text-purple-500">function</span> <span class="text-blue-500">increment</span>() {
  count.value++;
}
<span class="text-blue-500">&lt;/script&gt;</span>

<span class="text-blue-500">&lt;template&gt;</span>
  <span class="text-blue-500">&lt;div</span> <span class="text-green-500">class</span>=<span class="text-yellow-500">"app"</span><span class="text-blue-500">&gt;</span>
    <span class="text-blue-500">&lt;h1&gt;</span>Example Component<span class="text-blue-500">&lt;/h1&gt;</span>
    <span class="text-blue-500">&lt;button</span> <span class="text-green-500">@click</span>=<span class="text-yellow-500">"increment"</span><span class="text-blue-500">&gt;</span>Increment<span class="text-blue-500">&lt;/button&gt;</span>
  <span class="text-blue-500">&lt;/div&gt;</span>
<span class="text-blue-500">&lt;/template&gt;</span></pre>
                  </div>
                </div>
              </ZResizablePanel>
            </ZResizablePanelGroup>
          </ZResizablePanel>
          <ZResizableHandle />
          <ZResizablePanel :default-size="25">
            <div class="h-full bg-muted/20 flex flex-col">
              <div class="border-b p-2 font-medium text-xs">Terminal</div>
              <div class="p-2 font-mono text-xs">
                <div class="text-green-500">
                  ✓ Project is running at http://localhost:3000/
                </div>
                <div class="text-muted-foreground">Ready in 1.2s.</div>
                <div class="text-primary mt-1">$</div>
              </div>
            </div>
          </ZResizablePanel>
        </ZResizablePanelGroup>
      </div>
    </div>
  </div>
</template>
