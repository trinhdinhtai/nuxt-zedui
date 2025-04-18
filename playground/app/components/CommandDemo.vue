<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';
import { ref, watch } from 'vue';

const open = ref(false);

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1]) handleOpenChange();
});

function handleOpenChange() {
  open.value = !open.value;
}
</script>

<template>
  <p class="text-muted-foreground text-sm">
    Press
    <kbd
      class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
    >
      <span class="text-xs">⌘</span>J
    </kbd>
    to open the command dialog.
  </p>

  <ZCommandDialog v-model:open="open">
    <ZCommandInput placeholder="Type a command or search..." />
    <ZCommandList>
      <ZCommandEmpty>No results found.</ZCommandEmpty>
      <ZCommandGroup heading="Suggestions">
        <ZCommandItem value="calendar">
          <ZIcon name="i-lucide-calendar" />
          <span>Calendar</span>
        </ZCommandItem>
        <ZCommandItem value="search">
          <ZIcon name="i-lucide-search" />
          <span>Search Emoji</span>
        </ZCommandItem>
        <ZCommandItem value="calculator">
          <ZIcon name="i-lucide-calculator" />
          <span>Calculator</span>
        </ZCommandItem>
      </ZCommandGroup>
      <ZCommandSeparator />
      <ZCommandGroup heading="Settings">
        <ZCommandItem value="profile">
          <ZIcon name="i-lucide-user" />
          <span>Profile</span>
          <ZCommandShortcut>⌘P</ZCommandShortcut>
        </ZCommandItem>
        <ZCommandItem value="billing">
          <ZIcon name="i-lucide-credit-card" />
          <span>Billing</span>
          <ZCommandShortcut>⌘B</ZCommandShortcut>
        </ZCommandItem>
        <ZCommandItem value="settings">
          <ZIcon name="i-lucide-settings" />
          <span>Settings</span>
          <ZCommandShortcut>⌘S</ZCommandShortcut>
        </ZCommandItem>
      </ZCommandGroup>
    </ZCommandList>
  </ZCommandDialog>
</template>
