<script setup lang="ts">
import { ref } from 'vue';

// Separate state for each stepper
const basicStep = ref(1);
const verticalStep = ref(1);
const customStep = ref(1);

// Handlers for basic stepper
function handleBasicNext() {
  if (basicStep.value < 3) {
    basicStep.value++;
  }
}

function handleBasicPrevious() {
  if (basicStep.value > 1) {
    basicStep.value--;
  }
}

function handleBasicComplete() {
  alert('Basic demo completed!');
  basicStep.value = 1;
}

// Handlers for vertical stepper
function handleVerticalNext() {
  if (verticalStep.value < 3) {
    verticalStep.value++;
  }
}

function handleVerticalPrevious() {
  if (verticalStep.value > 1) {
    verticalStep.value--;
  }
}

// Handlers for custom stepper
function handleCustomNext() {
  if (customStep.value < 3) {
    customStep.value++;
  }
}

function handleCustomPrevious() {
  if (customStep.value > 1) {
    customStep.value--;
  }
}

function handleCustomComplete() {
  alert('Account creation completed!');
  customStep.value = 1;
}
</script>

<template>
  <div class="flex flex-col gap-16">
    <!-- Basic Stepper -->
    <div class="space-y-5">
      <ZStepper v-model="basicStep" class="max-w-md">
        <ZStepperItem v-for="step in 3" :key="step" :step="step">
          <ZStepperIndicator>{{ step }}</ZStepperIndicator>
          <div class="flex flex-col gap-0.5">
            <ZStepperTitle>Step {{ step }}</ZStepperTitle>
            <ZStepperDescription>{{
              step === 1
                ? 'Personal information'
                : step === 2
                ? 'Account details'
                : 'Review'
            }}</ZStepperDescription>
          </div>
        </ZStepperItem>
      </ZStepper>

      <div class="flex items-center gap-2">
        <ZButton
          variant="outline"
          size="sm"
          :disabled="basicStep === 1"
          @click="handleBasicPrevious"
        >
          Previous
        </ZButton>
        <ZButton size="sm" :disabled="basicStep === 3" @click="handleBasicNext">
          Next
        </ZButton>
        <ZButton
          size="sm"
          variant="default"
          :disabled="basicStep !== 3"
          @click="handleBasicComplete"
        >
          Complete
        </ZButton>
      </div>
    </div>

    <!-- Vertical Stepper -->
    <div class="space-y-5">
      <ZStepper v-model="verticalStep" class="flex-col items-start gap-2">
        <ZStepperItem
          v-for="step in 3"
          :key="step"
          :step="step"
          class="flex-row"
        >
          <ZStepperIndicator>
            <span v-if="step < verticalStep">
              <ZIcon name="i-lucide-check" class="size-4" />
            </span>
            <span v-else>{{ step }}</span>
          </ZStepperIndicator>
          <div class="flex flex-col gap-0.5">
            <ZStepperTitle>Step {{ step }}</ZStepperTitle>
            <ZStepperDescription>{{
              step === 1
                ? 'Personal information'
                : step === 2
                ? 'Account details'
                : 'Review'
            }}</ZStepperDescription>
          </div>
          <ZStepperSeparator v-if="step < 3" class="h-8 ml-3.5 mt-1" />
        </ZStepperItem>
      </ZStepper>

      <div class="flex items-center gap-2">
        <ZButton
          variant="outline"
          size="sm"
          :disabled="verticalStep === 1"
          @click="handleVerticalPrevious"
        >
          Previous
        </ZButton>
        <ZButton
          size="sm"
          :disabled="verticalStep === 3"
          @click="handleVerticalNext"
        >
          Next
        </ZButton>
      </div>
    </div>

    <!-- Custom Stepper -->
    <div class="space-y-5">
      <ZCard class="max-w-xl">
        <ZCardHeader>
          <ZCardTitle>Create your account</ZCardTitle>
          <ZCardDescription
            >Complete all steps to set up your account</ZCardDescription
          >
        </ZCardHeader>
        <ZCardContent>
          <ZStepper v-model="customStep">
            <ZStepperItem v-for="step in 3" :key="step" :step="step">
              <ZStepperIndicator
                class="bg-muted group-data-[state=active]:bg-primary group-data-[state=completed]:bg-green-500"
              >
                <span v-if="step < customStep">
                  <ZIcon name="i-lucide-check" class="size-4" />
                </span>
                <span v-else>{{ step }}</span>
              </ZStepperIndicator>
              <div class="flex flex-col gap-0.5">
                <ZStepperTitle>{{
                  step === 1 ? 'Profile' : step === 2 ? 'Settings' : 'Confirm'
                }}</ZStepperTitle>
                <ZStepperDescription class="text-xs">
                  {{
                    step === 1
                      ? 'Your personal details'
                      : step === 2
                      ? 'Configure options'
                      : 'Review and submit'
                  }}
                </ZStepperDescription>
              </div>
            </ZStepperItem>
          </ZStepper>

          <div class="mt-8 space-y-4">
            <div v-if="customStep === 1">
              <h4 class="text-sm font-medium mb-3">Personal Information</h4>
              <div class="space-y-3">
                <ZInput placeholder="Name" />
                <ZInput placeholder="Email" type="email" />
              </div>
            </div>
            <div v-else-if="customStep === 2">
              <h4 class="text-sm font-medium mb-3">Account Settings</h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-2">
                  <ZCheckbox id="notifications" />
                  <label for="notifications" class="text-sm"
                    >Enable notifications</label
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <ZCheckbox id="newsletter" />
                  <label for="newsletter" class="text-sm"
                    >Subscribe to newsletter</label
                  >
                </div>
              </div>
            </div>
            <div v-else>
              <h4 class="text-sm font-medium mb-3">Confirmation</h4>
              <p class="text-sm text-muted-foreground">
                Please review your information before submitting.
              </p>
            </div>
          </div>
        </ZCardContent>
        <ZCardFooter class="flex justify-between">
          <ZButton
            variant="outline"
            size="sm"
            :disabled="customStep === 1"
            @click="handleCustomPrevious"
          >
            Back
          </ZButton>
          <ZButton v-if="customStep < 3" size="sm" @click="handleCustomNext">
            Continue
          </ZButton>
          <ZButton
            v-else
            size="sm"
            variant="default"
            @click="handleCustomComplete"
          >
            Submit
          </ZButton>
        </ZCardFooter>
      </ZCard>
    </div>
  </div>
</template>
