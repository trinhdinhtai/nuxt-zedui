<script setup lang="ts">
// Label demonstration component
</script>

<template>
  <div class="grid max-w-2xl gap-8">
    <!-- Basic Label Usage -->
    <div class="grid gap-4">
      <h2 class="text-xl font-semibold">Basic Labels</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="grid gap-2">
          <ZLabel for="basic-input">Regular Label</ZLabel>
          <ZInput id="basic-input" placeholder="Enter your name" />
        </div>

        <div class="grid gap-2">
          <ZLabel
            for="required-input"
            class="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Required Field
          </ZLabel>
          <ZInput id="required-input" placeholder="This field is required" />
        </div>
      </div>
    </div>

    <!-- Form Element Labels -->
    <div class="grid gap-4">
      <h2 class="text-xl font-semibold">Labels with Form Elements</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="grid gap-2">
          <ZLabel for="checkbox-demo">Checkbox Label</ZLabel>
          <div class="flex items-center gap-2">
            <ZCheckbox id="checkbox-demo" />
            <span class="text-sm">Remember me</span>
          </div>
        </div>

        <div class="grid gap-2">
          <ZLabel for="switch-demo">Switch Label</ZLabel>
          <div class="flex items-center gap-2">
            <ZSwitch id="switch-demo" />
            <span class="text-sm">Enable notifications</span>
          </div>
        </div>

        <div class="grid gap-2">
          <ZLabel for="select-demo">Select Menu</ZLabel>
          <ZSelect id="select-demo">
            <ZSelectTrigger>
              <ZSelectValue placeholder="Select an option" />
            </ZSelectTrigger>
            <ZSelectContent>
              <ZSelectGroup>
                <ZSelectLabel>Fruits</ZSelectLabel>
                <ZSelectItem value="apple">Apple</ZSelectItem>
                <ZSelectItem value="banana">Banana</ZSelectItem>
                <ZSelectItem value="orange">Orange</ZSelectItem>
              </ZSelectGroup>
            </ZSelectContent>
          </ZSelect>
        </div>

        <div class="grid gap-2">
          <ZLabel for="radio-demo">Radio Options</ZLabel>
          <ZRadioGroup id="radio-demo">
            <div class="flex items-center gap-2">
              <ZRadioGroupItem id="option1" value="option1" />
              <ZLabel for="option1" class="text-sm font-normal"
                >Option 1</ZLabel
              >
            </div>
            <div class="flex items-center gap-2">
              <ZRadioGroupItem id="option2" value="option2" />
              <ZLabel for="option2" class="text-sm font-normal"
                >Option 2</ZLabel
              >
            </div>
          </ZRadioGroup>
        </div>
      </div>
    </div>

    <!-- Variant States -->
    <div class="grid gap-4">
      <h2 class="text-xl font-semibold">Label States</h2>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="grid gap-2">
          <ZLabel for="disabled-input" class="text-muted-foreground"
            >Disabled Label</ZLabel
          >
          <ZInput id="disabled-input" disabled placeholder="Disabled input" />
        </div>

        <div class="grid gap-2">
          <ZLabel for="error-input" class="text-destructive"
            >Error Label</ZLabel
          >
          <ZInput
            id="error-input"
            placeholder="Invalid input"
            aria-invalid="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
