<script setup lang="ts">
import DemoCommandDialog from '../components/DemoCommandDialog.vue';
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-8 flex-1 h-full w-full"
  >
    <div class="flex flex-col gap-2 items-center text-center">
      <h1 class="font-semibold text-2xl mb-1">VKirin UI Playground</h1>
      <p class="text-muted-foreground max-w-md">
        Press
        <kbd class="px-1 py-0.5 text-xs border rounded-md bg-muted">⌘K</kbd> to
        search and navigate between components
      </p>
    </div>

    <DemoCommandDialog />
  </div>
</template>

<script setup></script>
