<script setup lang="ts"></script>

<template>
  <ZSidebarProvider default-open>
    <AppSidebar />
    <ZSidebarInset>
      <AppHeader />
      <div class="flex-1 gap-4 p-4">
        <slot />
      </div>
    </ZSidebarInset>
  </ZSidebarProvider>
</template>
