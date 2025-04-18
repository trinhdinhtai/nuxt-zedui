<script setup lang="ts">
import { ref } from 'vue';

const progress = ref(40);
</script>

<template>
  <div class="flex gap-6 flex-wrap">
    <ZPopover>
      <ZPopoverTrigger>
        <ZButton variant="outline">Open Popover</ZButton>
      </ZPopoverTrigger>
      <ZPopoverContent class="w-80" align="start">
        <div class="grid gap-4">
          <div class="grid gap-1.5">
            <h4 class="leading-none font-medium">Dimensions</h4>
            <p class="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>

          <div class="grid gap-2">
            <div class="grid grid-cols-3 items-center gap-4">
              <ZLabel for="width">Width</ZLabel>
              <ZInput id="width" default-value="100%" class="col-span-2 h-8" />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <ZLabel for="maxWidth">Max. width</ZLabel>
              <ZInput
                id="maxWidth"
                default-value="300px"
                class="col-span-2 h-8"
              />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <ZLabel for="height">Height</ZLabel>
              <ZInput id="height" default-value="25px" class="col-span-2 h-8" />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <ZLabel for="maxHeight">Max. height</ZLabel>
              <ZInput
                id="maxHeight"
                default-value="none"
                class="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </ZPopoverContent>
    </ZPopover>

    <ZPopover>
      <ZPopoverTrigger>
        <ZButton variant="outline">Show Progress</ZButton>
      </ZPopoverTrigger>
      <ZPopoverContent class="w-80">
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Current Progress</h4>
            <p class="text-sm text-muted-foreground">
              {{ progress }}% of tasks completed.
            </p>
          </div>
          <ZProgress :model-value="progress" class="w-full" />
          <div class="flex gap-2 w-full">
            <ZButton
              variant="outline"
              size="sm"
              class="w-full"
              @click="progress = Math.max(0, progress - 10)"
            >
              <ZIcon name="i-lucide-minus" class="mr-2 size-4" />
              Decrease
            </ZButton>
            <ZButton
              variant="outline"
              size="sm"
              class="w-full"
              @click="progress = Math.min(100, progress + 10)"
            >
              <ZIcon name="i-lucide-plus" class="mr-2 size-4" />
              Increase
            </ZButton>
          </div>
        </div>
      </ZPopoverContent>
    </ZPopover>

    <div class="flex gap-4">
      <ZPopover>
        <ZPopoverTrigger>
          <ZButton variant="outline">Top</ZButton>
        </ZPopoverTrigger>
        <ZPopoverContent side="top" class="w-80">
          <div>This popover appears on top</div>
        </ZPopoverContent>
      </ZPopover>

      <ZPopover>
        <ZPopoverTrigger>
          <ZButton variant="outline">Right</ZButton>
        </ZPopoverTrigger>
        <ZPopoverContent side="right" class="w-80">
          <div>This popover appears on the right</div>
        </ZPopoverContent>
      </ZPopover>

      <ZPopover>
        <ZPopoverTrigger>
          <ZButton variant="outline">Bottom</ZButton>
        </ZPopoverTrigger>
        <ZPopoverContent side="bottom" class="w-80">
          <div>This popover appears on the bottom</div>
        </ZPopoverContent>
      </ZPopover>

      <ZPopover>
        <ZPopoverTrigger>
          <ZButton variant="outline">Left</ZButton>
        </ZPopoverTrigger>
        <ZPopoverContent side="left" class="w-80">
          <div>This popover appears on the left</div>
        </ZPopoverContent>
      </ZPopover>
    </div>
  </div>
</template>
