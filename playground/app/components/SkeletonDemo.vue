<script setup lang="ts">
// No imports needed for this demo
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-4">
    <div class="flex items-center gap-4">
      <ZSkeleton class="size-10 shrink-0 rounded-full" />
      <div class="grid gap-2">
        <ZSkeleton class="h-4 w-[150px]" />
        <ZSkeleton class="h-4 w-[100px]" />
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full items-start gap-4"
    >
      <ZCard
        v-for="index in 3"
        :key="index"
        class="w-full @md:w-auto @md:min-w-sm"
      >
        <ZCardHeader>
          <ZSkeleton class="h-4 w-2/3" />
          <ZSkeleton class="h-4 w-1/2" />
        </ZCardHeader>
        <ZCardContent>
          <ZSkeleton class="aspect-square w-full" />
        </ZCardContent>
      </ZCard>
    </div>
  </div>
</template>
