<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '../../libs/cn';
import { ScrollArea } from '../scroll-area';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <ScrollArea
    data-sidebar="content"
    :class="
      cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        props.class
      )
    "
  >
    <slot />
  </ScrollArea>
</template>
