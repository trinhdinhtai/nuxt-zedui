<script lang="ts">
import type { HTMLAttributes } from 'vue';
import { type ButtonVariants, buttonVariants } from '.';
import { cn } from '../../libs/cn';
import { Primitive, type PrimitiveProps } from 'reka-ui';

export interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
