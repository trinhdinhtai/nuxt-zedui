<script setup lang="ts">
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <ZScrollArea class="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
        <template v-for="tag in tags" :key="tag">
          <div class="text-sm">
            {{ tag }}
          </div>
          <ZSeparator class="my-2" />
        </template>
      </div>
    </ZScrollArea>

    <!-- Horizontal ScrollArea -->
    <div class="flex flex-col gap-4 max-w-xl">
      <ZScrollArea class="w-full rounded-md border">
        <div class="flex p-4 gap-4">
          <div
            v-for="card in 10"
            :key="card"
            class="h-40 w-40 flex-shrink-0 rounded-md border p-4"
          >
            <div class="font-medium">Card {{ card }}</div>
            <div class="text-sm text-muted-foreground">
              This is a scrollable card
            </div>
          </div>
        </div>
        <ZScrollBar orientation="horizontal" />
      </ZScrollArea>
    </div>
  </div>
</template>
