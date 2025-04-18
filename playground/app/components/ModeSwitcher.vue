<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <ZButton
    variant="outline"
    size="icon"
    @click="
      colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
    "
  >
    <ZIcon name="i-lucide-sun" class="hidden [html.dark_&]:block" />
    <ZIcon name="i-lucide-moon" class="hidden [html.light_&]:block" />
    <span class="sr-only"> Toggle theme</span></ZButton
  >
</template>
`
