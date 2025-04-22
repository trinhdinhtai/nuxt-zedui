<script setup lang="ts">
const { theme, isDarkMode, setTheme } = useTheme()
</script>

<template>
  <div class="flex flex-col gap-6 items-center">
    <ZComponentWrapper name="Theme Switcher">
      <div class="flex flex-col gap-4">
        <p>
          Current theme:
          <span class="font-medium">{{ theme }}</span> (isDarkMode:
          <span class="font-medium">{{ isDarkMode }}</span
          >)
        </p>

        <div class="flex gap-3">
          <ZButton
            variant="outline"
            :class="{ 'bg-accent': theme === 'light' }"
            @click="setTheme('light')"
          >
            <ZIcon name="i-lucide-sun" class="mr-2" />
            Light
          </ZButton>
          <ZButton
            variant="outline"
            :class="{ 'bg-accent': theme === 'dark' }"
            @click="setTheme('dark')"
          >
            <ZIcon name="i-lucide-moon" class="mr-2" />
            Dark
          </ZButton>
          <ZButton
            variant="outline"
            :class="{ 'bg-accent': theme === 'system' }"
            @click="setTheme('system')"
          >
            <ZIcon name="i-lucide-laptop" class="mr-2" />
            System
          </ZButton>
        </div>
      </div>
    </ZComponentWrapper>

    <ZComponentWrapper name="Theme Affected Components">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border rounded-md p-4 space-y-4">
          <h3 class="text-lg font-semibold">Light/Dark Mode Cards</h3>
          <ZCard>
            <ZCardHeader>
              <ZCardTitle>Card Title</ZCardTitle>
              <ZCardDescription>This card adapts to the theme</ZCardDescription>
            </ZCardHeader>
            <ZCardContent>
              <p>Card content changes colors based on the current theme</p>
            </ZCardContent>
            <ZCardFooter>
              <ZButton size="sm">Action</ZButton>
            </ZCardFooter>
          </ZCard>
        </div>

        <div class="border rounded-md p-4 space-y-4">
          <h3 class="text-lg font-semibold">Form Controls</h3>
          <div class="space-y-3">
            <ZInput placeholder="Input field" />
            <ZSelect>
              <ZSelectTrigger>
                <ZSelectValue placeholder="Select an option" />
              </ZSelectTrigger>
              <ZSelectContent>
                <ZSelectItem value="1">Option 1</ZSelectItem>
                <ZSelectItem value="2">Option 2</ZSelectItem>
              </ZSelectContent>
            </ZSelect>
            <div class="flex items-center gap-2">
              <ZSwitch id="theme-switch" />
              <ZLabel for="theme-switch">Toggle switch</ZLabel>
            </div>
          </div>
        </div>
      </div>
    </ZComponentWrapper>
  </div>
</template>
