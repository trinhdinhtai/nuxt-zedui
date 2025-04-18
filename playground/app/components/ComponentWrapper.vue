<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div
    :id="name"
    :data-name="name"
    class="flex w-full scroll-mt-16 flex-col rounded-lg border"
    v-bind="$attrs"
  >
    <div class="border-b px-4 py-3">
      <div class="text-sm font-medium">
        {{ props.name }}
      </div>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
