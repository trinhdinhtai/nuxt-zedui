<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <ZButton>Default</ZButton>
      <ZButton variant="outline">Outline</ZButton>
      <ZButton variant="secondary">Secondary</ZButton>
      <ZButton variant="ghost">Ghost</ZButton>
      <ZButton variant="destructive">Destructive</ZButton>
      <ZButton variant="link">Link</ZButton>
      <ZButton variant="outline"> <ZIcon name="i-lucide-send" /> Send </ZButton>
      <ZButton variant="outline">
        Learn More <ZIcon name="i-lucide-arrow-right" />
      </ZButton>
      <ZButton disabled variant="outline">
        <ZIcon name="i-lucide-loader" class="animate-spin" />
        Please wait
      </ZButton>
    </div>

    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <ZButton size="sm"> Small </ZButton>
      <ZButton variant="outline" size="sm"> Outline </ZButton>
      <ZButton variant="ghost" size="sm"> Ghost </ZButton>
      <ZButton variant="destructive" size="sm"> Destructive </ZButton>
      <ZButton variant="secondary" size="sm"> Secondary </ZButton>
      <ZButton variant="link" size="sm"> Link </ZButton>
      <ZButton variant="outline" size="sm">
        <ZIcon name="i-lucide-send" /> Send
      </ZButton>
      <ZButton variant="outline" size="sm">
        Learn More <ZIcon name="i-lucide-arrow-right" />
      </ZButton>
      <ZButton disabled size="sm" variant="outline">
        <ZIcon name="i-lucide-loader" class="animate-spin" />
        Please wait
      </ZButton>
    </div>

    <div class="flex flex-wrap items-center gap-2 md:flex-row">
      <ZButton size="lg"> Large </ZButton>
      <ZButton variant="outline" size="lg"> Outline </ZButton>
      <ZButton variant="ghost" size="lg"> Ghost </ZButton>
      <ZButton variant="destructive" size="lg"> Destructive </ZButton>
      <ZButton variant="secondary" size="lg"> Secondary </ZButton>
      <ZButton variant="link" size="lg"> Link </ZButton>
      <ZButton variant="outline" size="lg">
        <ZIcon name="i-lucide-send" /> Send
      </ZButton>
      <ZButton variant="outline" size="lg">
        Learn More <ZIcon name="i-lucide-arrow-right" />
      </ZButton>
      <ZButton disabled size="lg" variant="outline">
        <ZIcon name="i-lucide-loader" class="animate-spin" />
        Please wait
      </ZButton>
    </div>
  </div>
</template>
