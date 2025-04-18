<script setup lang="ts">
import { ref } from 'vue';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-vue-next';

const boldToggle = ref(false);
const italicToggle = ref(false);
const underlineToggle = ref(false);
const alignment = ref('left');
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Basic Toggle -->
    <ZComponentWrapper name="Basic Toggle">
      <div class="flex flex-col gap-4">
        <div class="flex items-center space-x-2">
          <ZToggle aria-label="Toggle bold">
            <Bold class="size-4" />
          </ZToggle>
          <span class="text-sm text-muted-foreground">Toggle</span>
        </div>
      </div>
    </ZComponentWrapper>

    <!-- Toggle with Outline Variant -->
    <ZComponentWrapper name="Toggle Variants">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <ZToggle variant="default" aria-label="Toggle default">
            Default
          </ZToggle>
          <ZToggle variant="outline" aria-label="Toggle outline">
            Outline
          </ZToggle>
        </div>
      </div>
    </ZComponentWrapper>

    <!-- Toggle Sizes -->
    <ZComponentWrapper name="Toggle Sizes">
      <div class="flex items-center gap-4">
        <ZToggle size="sm" aria-label="Toggle small">
          <Bold class="size-3" />
          Small
        </ZToggle>
        <ZToggle size="default" aria-label="Toggle default">
          <Bold class="size-4" />
          Default
        </ZToggle>
        <ZToggle size="lg" aria-label="Toggle large">
          <Bold class="size-4" />
          Large
        </ZToggle>
      </div>
    </ZComponentWrapper>

    <!-- Disabled Toggle -->
    <ZComponentWrapper name="Disabled Toggle">
      <div class="flex items-center gap-4">
        <ZToggle disabled aria-label="Toggle disabled">
          <Bold class="size-4" />
          Disabled
        </ZToggle>
        <ZToggle
          disabled
          variant="outline"
          aria-label="Toggle disabled outline"
        >
          <Italic class="size-4" />
          Disabled
        </ZToggle>
      </div>
    </ZComponentWrapper>

    <!-- Toggle with State Binding -->
    <ZComponentWrapper name="Toggle with State">
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <ZToggle
            :pressed="boldToggle"
            aria-label="Toggle bold"
            @update:pressed="boldToggle = $event"
          >
            <Bold class="size-4" />
            Bold
          </ZToggle>
          <ZToggle
            :pressed="italicToggle"
            aria-label="Toggle italic"
            @update:pressed="italicToggle = $event"
          >
            <Italic class="size-4" />
            Italic
          </ZToggle>
          <ZToggle
            :pressed="underlineToggle"
            aria-label="Toggle underline"
            @update:pressed="underlineToggle = $event"
          >
            <Underline class="size-4" />
            Underline
          </ZToggle>
        </div>
      </div>
    </ZComponentWrapper>

    <!-- Toggle Group -->
    <ZComponentWrapper name="Toggle Group">
      <div class="space-y-4">
        <ZToggleGroup
          type="single"
          :value="alignment"
          variant="outline"
          class="justify-center"
          @update:value="alignment = $event"
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
    </ZComponentWrapper>
  </div>
</template>
