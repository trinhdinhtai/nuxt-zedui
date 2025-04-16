<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex w-full flex-wrap gap-2">
      <ZBadge>Default</ZBadge>
      <ZBadge variant="secondary"> Secondary </ZBadge>
      <ZBadge variant="destructive"> Destructive </ZBadge>
      <ZBadge variant="outline"> Outline </ZBadge>
      <ZBadge variant="outline">
        <ZIcon name="i-lucide-check" />
        Badge with icon
      </ZBadge>
      <ZBadge variant="destructive">
        <ZIcon name="i-lucide-triangle-alert" />
        Alert
      </ZBadge>
      <ZBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </ZBadge>
      <ZBadge
        class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
      >
        99
      </ZBadge>
      <ZBadge
        class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="outline"
      >
        20+
      </ZBadge>
    </div>

    <div class="flex w-full flex-wrap gap-2">
      <ZBadge as-child>
        <a href="#"> Link <ZIcon name="i-lucide-arrow-right" /> </a>
      </ZBadge>
      <ZBadge as-child variant="secondary">
        <a href="#"> Link <ZIcon name="i-lucide-arrow-right" /> </a>
      </ZBadge>
      <ZBadge as-child variant="destructive">
        <a href="#"> Link <ZIcon name="i-lucide-arrow-right" /> </a>
      </ZBadge>
      <ZBadge as-child variant="outline">
        <a href="#"> Link <ZIcon name="i-lucide-arrow-right" /> </a>
      </ZBadge>
    </div>
  </div>
</template>
