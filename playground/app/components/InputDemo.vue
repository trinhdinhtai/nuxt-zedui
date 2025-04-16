<script setup lang="ts"></script>

<template>
  <div class="grid gap-8">
    <div class="grid gap-4">
      <div class="grid gap-4 sm:grid-cols-2">
        <ZInput type="email" placeholder="Email" />
        <ZInput type="text" placeholder="Error" aria-invalid="true" />
        <ZInput type="number" placeholder="Number" />
        <ZInput type="file" placeholder="File" />
        <ZInput type="tel" placeholder="Tel" />
        <ZInput type="text" placeholder="Text" />
        <ZInput type="url" placeholder="URL" />
        <ZInput type="search" placeholder="Search" />
        <ZInput type="date" placeholder="Date" />
        <ZInput type="datetime-local" placeholder="Datetime Local" />
        <ZInput type="month" placeholder="Month" />
        <ZInput type="time" placeholder="Time" />
        <ZInput type="week" placeholder="Week" />
        <ZInput disabled placeholder="Disabled" />

        <div class="grid gap-2">
          <div class="relative">
            <ZIcon
              name="i-lucide-search"
              class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            />
            <ZInput class="pl-10" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
