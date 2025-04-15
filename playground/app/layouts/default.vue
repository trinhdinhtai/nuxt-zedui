<script setup lang="ts"></script>

<template>
  <ZSidebarProvider default-open>
    <AppSidebar />
    <ZSidebarInset>
      <AppHeader />
      <slot />
    </ZSidebarInset>
  </ZSidebarProvider>
</template>
