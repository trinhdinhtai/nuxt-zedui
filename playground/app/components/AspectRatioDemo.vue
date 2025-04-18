<script setup lang="ts"></script>

<template>
  <div class="grid w-full max-w-sm items-start gap-4">
    <ZAspectRatio :ratio="16 / 9" class="bg-muted rounded-lg">
      <div
        alt="Photo by Drew Beamer"
        class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale flex items-center justify-center"
      >
        <span class="text-muted-foreground font-mono text-2xl">16/9</span>
      </div>
    </ZAspectRatio>
    <ZAspectRatio :ratio="1 / 1" class="bg-muted rounded-lg">
      <div
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale flex items-center justify-center"
      >
        <span class="text-muted-foreground font-mono text-2xl">1/1</span>
      </div>
    </ZAspectRatio>
  </div>
</template>
