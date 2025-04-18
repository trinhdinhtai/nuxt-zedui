<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMagicKeys } from '@vueuse/core';

const router = useRouter();
const open = ref(false);

interface Demo {
  name: string;
  path: string;
}

// List of all available demos with their paths
const demos: Demo[] = [
  { name: 'Accordion', path: '/components/accordion' },
  { name: 'Alert', path: '/components/alert' },
  { name: 'AlertDialog', path: '/components/alert-dialog' },
  { name: 'AspectRatio', path: '/components/aspect-ratio' },
  { name: 'Avatar', path: '/components/avatar' },
  { name: 'Badge', path: '/components/badge' },
  { name: 'Breadcrumb', path: '/components/breadcrumb' },
  { name: 'Button', path: '/components/button' },
  { name: 'Calendar', path: '/components/calendar' },
  { name: 'Card', path: '/components/card' },
  { name: 'Carousel', path: '/components/carousel' },
  { name: 'Checkbox', path: '/components/checkbox' },
  { name: 'Collapsible', path: '/components/collapsible' },
  { name: 'Command', path: '/components/command' },
  { name: 'ContextMenu', path: '/components/context-menu' },
  { name: 'Drawer', path: '/components/drawer' },
  { name: 'DropdownMenu', path: '/components/dropdown-menu' },
  { name: 'Form', path: '/components/form' },
  { name: 'Input', path: '/components/input' },
  { name: 'InputOTP', path: '/components/input-otp' },
  { name: 'Label', path: '/components/label' },
  { name: 'MenuBar', path: '/components/menubar' },
  { name: 'NavigationMenu', path: '/components/navigation-menu' },
  { name: 'Pagination', path: '/components/pagination' },
  { name: 'Popover', path: '/components/popover' },
  { name: 'Progress', path: '/components/progress' },
  { name: 'RadioGroup', path: '/components/radio-group' },
  { name: 'Resizable', path: '/components/resizable' },
  { name: 'ScrollArea', path: '/components/scroll-area' },
  { name: 'Select', path: '/components/select' },
  { name: 'Separator', path: '/components/separator' },
  { name: 'Sheet', path: '/components/sheet' },
  { name: 'Sidebar', path: '/components/sidebar' },
  { name: 'Skeleton', path: '/components/skeleton' },
  { name: 'Slider', path: '/components/slider' },
  { name: 'Sonner', path: '/components/sonner' },
  { name: 'Stepper', path: '/components/stepper' },
  { name: 'Switch', path: '/components/switch' },
  { name: 'Table', path: '/components/table' },
  { name: 'Tabs', path: '/components/tabs' },
  { name: 'TagsInput', path: '/components/tags-input' },
  { name: 'Textarea', path: '/components/textarea' },
  { name: 'Toggle', path: '/components/toggle' },
  { name: 'ToggleGroup', path: '/components/toggle-group' },
  { name: 'Tooltip', path: '/components/tooltip' },
];

// Group by categories (we can just use the first letter as a group)
const demosByCategory = computed(() => {
  const grouped: Record<string, Demo[]> = {};

  demos.forEach((demo) => {
    const firstLetter = demo.name.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(demo);
  });

  return Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
});

function navigateToDemo(path: string) {
  router.push(path);
  open.value = false;
}

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) handleOpenChange();
});

function handleOpenChange() {
  open.value = !open.value;
}
</script>

<template>
  <div>
    <ZCommandDialog v-model:open="open">
      <ZCommandInput placeholder="Search for a component..." />
      <ZCommandList class="h-[400px]">
        <ZCommandEmpty>No component found.</ZCommandEmpty>

        <div
          v-for="[category, categoryDemos] in demosByCategory"
          :key="category"
        >
          <ZCommandGroup :heading="category">
            <ZCommandItem
              v-for="demo in categoryDemos"
              :key="demo.name"
              :value="demo.name.toLowerCase()"
              @select="() => navigateToDemo(demo.path)"
            >
              <span>{{ demo.name }}</span>
            </ZCommandItem>
          </ZCommandGroup>
        </div>
      </ZCommandList>
    </ZCommandDialog>
  </div>
</template>
