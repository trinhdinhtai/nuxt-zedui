<script setup lang="ts"></script>

<template>
  <ZSidebarProvider default-open>
    <ZSidebarInset>
      <AppHeader />
      <slot />
    </ZSidebarInset>
  </ZSidebarProvider>
</template>
