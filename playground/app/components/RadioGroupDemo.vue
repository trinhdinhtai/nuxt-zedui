<script setup lang="ts">
import { ref } from 'vue';

// Basic RadioGroup
const basicFruit = ref('apple');

// RadioGroup with descriptions
const plan = ref('startup');

// RadioGroup with icons
const notification = ref('all');
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic RadioGroup -->
    <ZRadioGroup v-model="basicFruit" class="flex flex-col gap-4 w-">
      <div class="flex items-center space-x-2">
        <ZRadioGroupItem id="apple" value="apple" />
        <ZLabel for="apple">Apple</ZLabel>
      </div>
      <div class="flex items-center space-x-2">
        <ZRadioGroupItem id="banana" value="banana" />
        <ZLabel for="banana">Banana</ZLabel>
      </div>
      <div class="flex items-center space-x-2">
        <ZRadioGroupItem id="orange" value="orange" />
        <ZLabel for="orange">Orange</ZLabel>
      </div>
      <div class="flex items-center space-x-2">
        <ZRadioGroupItem id="strawberry" value="strawberry" />
        <ZLabel for="strawberry">Strawberry</ZLabel>
      </div>
      <div class="flex items-center space-x-2">
        <ZRadioGroupItem id="pineapple" value="pineapple" disabled />
        <ZLabel for="pineapple" class="text-muted-foreground"
          >Pineapple (disabled)</ZLabel
        >
      </div>
    </ZRadioGroup>

    <!-- RadioGroup with descriptions -->
    <ZRadioGroup v-model="plan" class="flex flex-col gap-4">
      <div class="border rounded-lg p-4">
        <div class="flex items-start gap-3">
          <ZRadioGroupItem id="startup" value="startup" class="mt-1" />
          <div>
            <ZLabel for="startup">Startup</ZLabel>
            <div class="text-sm text-muted-foreground">
              Up to 5 users. Perfect for small teams.
              <span class="font-medium text-foreground">$29/month</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border rounded-lg p-4">
        <div class="flex items-start gap-3">
          <ZRadioGroupItem id="business" value="business" class="mt-1" />
          <div>
            <ZLabel for="business">Business</ZLabel>
            <div class="text-sm text-muted-foreground">
              Up to 20 users. Growing teams with more needs.
              <span class="font-medium text-foreground">$99/month</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border rounded-lg p-4">
        <div class="flex items-start gap-3">
          <ZRadioGroupItem id="enterprise" value="enterprise" class="mt-1" />
          <div>
            <ZLabel for="enterprise">Enterprise</ZLabel>
            <div class="text-sm text-muted-foreground">
              Unlimited users. For large organizations.
              <span class="font-medium text-foreground">$249/month</span>
            </div>
          </div>
        </div>
      </div>
    </ZRadioGroup>

    <!-- RadioGroup with icons -->
    <div class="flex flex-col gap-4 w-full max-w-md">
      <ZRadioGroup class="grid grid-cols-3 gap-4">
        <div
          class="border bg-background rounded-lg p-4 cursor-pointer hover:bg-muted"
          :class="{ 'ring-1 ring-primary': notification === 'all' }"
        >
          <div
            class="flex flex-col items-center gap-2 text-center"
            @click="notification = 'all'"
          >
            <ZIcon name="i-lucide-bell" class="size-6" />
            <ZRadioGroupItem id="all" value="all" class="sr-only" />
            <ZLabel for="all">All</ZLabel>
          </div>
        </div>
        <div
          class="border bg-background rounded-lg p-4 cursor-pointer hover:bg-muted"
          :class="{ 'ring-1 ring-primary': notification === 'mentions' }"
        >
          <div
            class="flex flex-col items-center gap-2 text-center"
            @click="notification = 'mentions'"
          >
            <ZIcon name="i-lucide-at-sign" class="size-6" />
            <ZRadioGroupItem id="mentions" value="mentions" class="sr-only" />
            <ZLabel for="mentions">Mentions</ZLabel>
          </div>
        </div>
        <div
          class="border bg-background rounded-lg p-4 cursor-pointer hover:bg-muted"
          :class="{ 'ring-1 ring-primary': notification === 'none' }"
        >
          <div
            class="flex flex-col items-center gap-2 text-center"
            @click="notification = 'none'"
          >
            <ZIcon name="i-lucide-bell-off" class="size-6" />
            <ZRadioGroupItem id="none" value="none" class="sr-only" />
            <ZLabel for="none">None</ZLabel>
          </div>
        </div>
      </ZRadioGroup>
    </div>
  </div>
</template>
