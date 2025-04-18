<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '../../libs/cn';
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <li
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-4', props.class)"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
