<script setup lang="ts"></script>

<template>
  <div class="p-4 space-y-6">
    <div>
      <h2 class="text-lg font-bold mb-2">Module Buttons</h2>
      <div class="flex gap-2">
        <ZButton $dynamic-slots>Default Button</ZButton>
        <ZButton variant="outline" $dynamic-slots>Outline Button</ZButton>
        <ZButton variant="destructive" $dynamic-slots
          >Destructive Button</ZButton
        >
        <ZButton variant="ghost" $dynamic-slots>Ghost Button</ZButton>
        <ZButton variant="link" $dynamic-slots>Link Button</ZButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>
