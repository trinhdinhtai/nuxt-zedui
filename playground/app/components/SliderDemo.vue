<script setup lang="ts">
import { ref } from 'vue';

const singleValue = ref([50]);
const rangeValue = ref([30, 70]);
const steppedValue = ref([25]);
const disabledValue = ref([40]);
const colorValue = ref([60]);
const verticalValue = ref([50]);
const volumeValue = ref([50]);
const priceRangeValue = ref([30, 70]);

// Event handlers
function onValueChange(newValue: number[] | undefined) {
  console.log('Value changed:', newValue);
}
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <!-- Basic Slider -->
    <div class="space-y-4 w-[350px]">
      <h3 class="text-lg font-medium">Basic Slider</h3>
      <div class="space-y-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label for="single-slider" class="text-sm font-medium"
              >Single Value: {{ singleValue[0] }}</label
            >
          </div>
          <ZSlider
            id="single-slider"
            v-model="singleValue"
            :min="0"
            :max="100"
            :step="1"
            @update:model-value="onValueChange"
          />
          <div class="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Range Slider -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">
              Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}
            </label>
          </div>
          <ZSlider
            v-model="rangeValue"
            :min="0"
            :max="100"
            :step="1"
            @update:model-value="onValueChange"
          />
        </div>
      </div>
    </div>

    <!-- Stepped Slider -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium"
              >Step 5: {{ steppedValue[0] }}</label
            >
          </div>
          <ZSlider
            v-model="steppedValue"
            :min="0"
            :max="100"
            :step="5"
            @update:model-value="onValueChange"
          />
          <div class="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Disabled Slider -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium"
              >Disabled: {{ disabledValue[0] }}</label
            >
          </div>
          <ZSlider
            v-model="disabledValue"
            :min="0"
            :max="100"
            :step="1"
            disabled
          />
        </div>
      </div>
    </div>

    <!-- Colored Slider -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium"
              >Custom Color: {{ colorValue[0] }}</label
            >
          </div>
          <ZSlider
            v-model="colorValue"
            :min="0"
            :max="100"
            :step="1"
            class="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-thumb]]:border-green-500"
          />
        </div>
      </div>
    </div>

    <!-- Vertical Slider -->
    <div class="space-y-4">
      <div class="flex items-center gap-8">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium"
              >Vertical: {{ verticalValue[0] }}</label
            >
          </div>
          <div class="h-[200px] flex items-center">
            <ZSlider
              v-model="verticalValue"
              :min="0"
              :max="100"
              :step="1"
              orientation="vertical"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Volume Control Example -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-2 border rounded-lg p-4">
        <div class="flex items-center gap-4">
          <ZIcon name="i-lucide-volume-2" class="size-5" />
          <ZSlider v-model="volumeValue" :min="0" :max="100" :step="1" />
          <span class="text-sm min-w-10 text-right">{{ volumeValue[0] }}%</span>
        </div>
      </div>
    </div>

    <!-- Price Range Filter Example -->
    <div class="space-y-4 w-[350px]">
      <div class="space-y-4 border rounded-lg p-4">
        <div class="flex justify-between">
          <div class="space-y-1">
            <span class="text-sm font-medium">Min Price</span>
            <div class="border rounded-md px-2 py-1">
              ${{ priceRangeValue[0] }}
            </div>
          </div>
          <div class="space-y-1">
            <span class="text-sm font-medium">Max Price</span>
            <div class="border rounded-md px-2 py-1">
              ${{ priceRangeValue[1] }}
            </div>
          </div>
        </div>
        <ZSlider v-model="priceRangeValue" :min="0" :max="100" :step="1" />
        <ZButton class="w-full">Apply Filter</ZButton>
      </div>
    </div>
  </div>
</template>
