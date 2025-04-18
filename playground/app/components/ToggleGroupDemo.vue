<script setup lang="ts">
import { ref } from 'vue';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-vue-next';

const textAlignment = ref('left');
const textFormat = ref(['bold']);
const viewType = ref('desktop');
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic Toggle Group (Single Value) -->
    <div class="flex flex-col gap-4">
      <ZLabel>Text Alignment</ZLabel>
      <ZToggleGroup
        type="single"
        :value="textAlignment"
        variant="outline"
        class="justify-start"
        @update:value="textAlignment = $event"
      >
        <ZToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft class="size-4" />
        </ZToggleGroupItem>
        <ZToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter class="size-4" />
        </ZToggleGroupItem>
        <ZToggleGroupItem value="right" aria-label="Align right">
          <AlignRight class="size-4" />
        </ZToggleGroupItem>
        <ZToggleGroupItem value="justify" aria-label="Align justify">
          <AlignJustify class="size-4" />
        </ZToggleGroupItem>
      </ZToggleGroup>
    </div>

    <!-- Toggle Group (Multiple Values) -->
    <div class="flex flex-col gap-4">
      <ZLabel>Text Formatting</ZLabel>
      <ZToggleGroup
        type="multiple"
        variant="outline"
        class="justify-start"
        :value="textFormat"
        @update:value="textFormat = $event"
      >
        <ZToggleGroupItem value="bold" aria-label="Bold">
          <Bold class="size-4" />
        </ZToggleGroupItem>
        <ZToggleGroupItem value="italic" aria-label="Italic">
          <Italic class="size-4" />
        </ZToggleGroupItem>
        <ZToggleGroupItem value="underline" aria-label="Underline">
          <Underline class="size-4" />
        </ZToggleGroupItem>
      </ZToggleGroup>
    </div>

    <!-- Toggle Group with Labels -->
    <div class="flex flex-col gap-4">
      <ZLabel>Type</ZLabel>
      <ZToggleGroup
        variant="outline"
        type="single"
        default-value="all"
        class="*:data-[slot=toggle-group-item]:w-20"
      >
        <ZToggleGroupItem value="all" aria-label="Toggle all">
          All
        </ZToggleGroupItem>
        <ZToggleGroupItem value="missed" aria-label="Toggle missed">
          Missed
        </ZToggleGroupItem>
      </ZToggleGroup>
    </div>

    <!-- Toggle Group Sizes -->
    <ZComponentWrapper name="Toggle Group Sizes">
      <div class="flex flex-col gap-6">
        <div class="space-y-2">
          <ZLabel>Small Size</ZLabel>
          <ZToggleGroup
            type="single"
            :value="viewType"
            variant="outline"
            size="sm"
            @update:value="viewType = $event"
          >
            <ZToggleGroupItem value="mobile" aria-label="Mobile view">
              <Smartphone class="size-3" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="tablet" aria-label="Tablet view">
              <Tablet class="size-3" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="desktop" aria-label="Desktop view">
              <Monitor class="size-3" />
            </ZToggleGroupItem>
          </ZToggleGroup>
        </div>

        <div class="space-y-2">
          <ZLabel>Default Size</ZLabel>
          <ZToggleGroup
            type="single"
            :value="viewType"
            variant="outline"
            @update:value="viewType = $event"
          >
            <ZToggleGroupItem value="mobile" aria-label="Mobile view">
              <Smartphone class="size-4" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="tablet" aria-label="Tablet view">
              <Tablet class="size-4" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="desktop" aria-label="Desktop view">
              <Monitor class="size-4" />
            </ZToggleGroupItem>
          </ZToggleGroup>
        </div>

        <div class="space-y-2">
          <ZLabel>Large Size</ZLabel>
          <ZToggleGroup
            type="single"
            :value="viewType"
            variant="outline"
            size="lg"
            @update:value="viewType = $event"
          >
            <ZToggleGroupItem value="mobile" aria-label="Mobile view">
              <Smartphone class="size-5" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="tablet" aria-label="Tablet view">
              <Tablet class="size-5" />
            </ZToggleGroupItem>
            <ZToggleGroupItem value="desktop" aria-label="Desktop view">
              <Monitor class="size-5" />
            </ZToggleGroupItem>
          </ZToggleGroup>
        </div>
      </div>
    </ZComponentWrapper>
  </div>
</template>
