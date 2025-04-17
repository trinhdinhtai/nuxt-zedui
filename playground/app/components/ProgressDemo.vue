<script setup lang="ts">
import { ref, onMounted } from 'vue';

const indeterminateProgress = ref(0);
const determinateProgress = ref(0);
const steppedProgress = ref(0);
const coloredProgress = ref(60);

// For animated progress
onMounted(() => {
  const interval = setInterval(() => {
    indeterminateProgress.value = (indeterminateProgress.value + 5) % 100;
  }, 500);

  return () => clearInterval(interval);
});
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <div class="w-80">
      <h3 class="font-medium mb-4">Basic Progress</h3>
      <div class="flex flex-col gap-4 max-w-md mx-auto">
        <div class="flex items-center gap-4">
          <div class="w-8 font-mono text-sm">0%</div>
          <ZProgress :model-value="0" class="w-full" />
        </div>

        <div class="flex items-center gap-4">
          <div class="w-8 text-right font-mono text-sm">25%</div>
          <ZProgress :model-value="25" class="w-full" />
        </div>

        <div class="flex items-center gap-4">
          <div class="w-8 text-right font-mono text-sm">50%</div>
          <ZProgress :model-value="50" class="w-full" />
        </div>

        <div class="flex items-center gap-4">
          <div class="w-8 text-right font-mono text-sm">75%</div>
          <ZProgress :model-value="75" class="w-full" />
        </div>

        <div class="flex items-center gap-4">
          <div class="w-8 text-right font-mono text-sm">100%</div>
          <ZProgress :model-value="100" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Interactive Progress -->
    <div class="w-80">
      <h3 class="font-medium mb-4">Interactive Progress</h3>
      <div class="flex flex-col gap-6 max-w-md mx-auto">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between font-mono text-sm">
            <span>Progress: {{ determinateProgress }}%</span>
            <span>{{ determinateProgress.toFixed(0) }}/100</span>
          </div>
          <ZProgress :model-value="determinateProgress" class="w-full" />
          <div class="flex justify-between mt-2">
            <ZButton
              variant="outline"
              size="sm"
              @click="
                determinateProgress = Math.max(0, determinateProgress - 10)
              "
            >
              Decrease
            </ZButton>
            <ZButton
              variant="outline"
              size="sm"
              @click="
                determinateProgress = Math.min(100, determinateProgress + 10)
              "
            >
              Increase
            </ZButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Progress -->
    <div class="w-80">
      <h3 class="font-medium mb-4">Animated Progress (Indeterminate)</h3>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <div class="w-20 text-right font-mono text-sm">Loading...</div>
          <ZProgress :model-value="indeterminateProgress" class="w-full" />
        </div>
        <div class="text-sm text-muted-foreground">
          This progress bar is automatically animated to simulate loading
        </div>
      </div>
    </div>

    <!-- Stepped Progress -->
    <div class="w-80">
      <h3 class="font-medium mb-4">Stepped Progress</h3>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between font-mono text-sm">
          <span>Step {{ Math.floor(steppedProgress / 25) + 1 }} of 5</span>
          <span>{{ steppedProgress }}%</span>
        </div>
        <ZProgress :model-value="steppedProgress" class="w-full" />
        <div class="flex justify-between mt-2">
          <ZButton
            variant="outline"
            size="sm"
            :disabled="steppedProgress === 0"
            @click="steppedProgress = Math.max(0, steppedProgress - 25)"
          >
            Previous Step
          </ZButton>
          <ZButton
            variant="outline"
            size="sm"
            :disabled="steppedProgress === 100"
            @click="steppedProgress = Math.min(100, steppedProgress + 25)"
          >
            Next Step
          </ZButton>
        </div>
      </div>
    </div>

    <!-- Custom Styled Progress -->
    <div class="w-80">
      <h3 class="font-medium mb-4">Custom Styled Progress</h3>
      <div class="flex flex-col gap-4 max-w-md mx-auto">
        <div class="space-y-3">
          <div class="font-mono text-sm">Custom Height</div>
          <ZProgress :model-value="coloredProgress" class="w-full h-3" />
        </div>

        <div class="space-y-3">
          <div class="font-mono text-sm">Custom Border Radius</div>
          <ZProgress
            :model-value="coloredProgress"
            class="w-full rounded-none"
          />
        </div>

        <div class="space-y-3">
          <div class="font-mono text-sm">Custom Background</div>
          <ZProgress
            :model-value="coloredProgress"
            class="w-full bg-secondary"
          />
        </div>

        <div class="space-y-3">
          <div class="font-mono text-sm">Custom Indicator Color</div>
          <ZProgress
            :model-value="coloredProgress"
            class="w-full [&>div]:bg-green-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>
