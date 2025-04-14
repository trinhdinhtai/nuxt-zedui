<template>
  <div class="p-4 space-y-6">
    <div>
      <h2 class="text-lg font-bold mb-2">Module Buttons</h2>
      <div class="flex gap-2">
        <ZButton>Default Button</ZButton>
        <ZButton variant="outline">Outline Button</ZButton>
        <ZButton variant="soft">Soft Button</ZButton>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-bold mb-2">Tailwind CSS Buttons</h2>
      <div class="flex gap-2">
        <button class="bg-primary text-white px-4 py-2 rounded">
          bg-primary
        </button>
        <button class="bg-primary-400 text-white px-4 py-2 rounded">
          bg-primary-400
        </button>
        <button class="bg-[#00dc82] text-white px-4 py-2 rounded">
          Hardcoded Green
        </button>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-bold mb-2">CSS Custom Property</h2>
      <div class="flex gap-2">
        <button class="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded">
          CSS Custom Property
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
