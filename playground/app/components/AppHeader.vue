<script setup lang="ts"></script>

<template>
  <header
    class="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b"
  >
    <div class="flex h-14 w-full items-center gap-2 px-4">
      <ZSidebarTrigger class="-ml-1.5" />
      <ZSeparator
        orientation="vertical"
        class="mr-2 data-[orientation=vertical]:h-4"
      />

      <div class="ml-auto flex items-center gap-2">
        <ModeSwitcher />
      </div>
    </div>
  </header>
</template>
