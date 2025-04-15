<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next';
</script>

<template>
  <ZButton variant="outline" size="icon">
    <SunIcon class="hidden [html.dark_&]:block" />
    <MoonIcon class="hidden [html.light_&]:block" />
    <span class="sr-only"> Toggle theme</span></ZButton
  >
</template>
`
