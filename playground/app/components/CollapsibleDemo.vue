<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div class="flex max-w-2xl">
    <ZCollapsible
      v-model:open="open"
      class="flex w-full flex-col gap-2 md:w-[350px]"
    >
      <div class="flex items-center justify-between gap-4 px-4">
        <h4 class="line-clamp-1 text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <ZCollapsibleTrigger as-child>
          <ZButton variant="ghost" size="sm">
            <ZIcon name="i-lucide-chevrons-up-down" />
            <span class="sr-only">Toggle</span>
          </ZButton>
        </ZCollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
        @radix-ui/primitives
      </div>
      <ZCollapsibleContent class="flex flex-col gap-2">
        <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @radix-ui/colors
        </div>
        <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @stitches/react
        </div>
      </ZCollapsibleContent>
    </ZCollapsible>
  </div>
</template>
