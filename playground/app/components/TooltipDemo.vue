<script setup lang="ts">
import { Info, Mail, Plus, Settings } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic Tooltip -->
    <ZComponentWrapper name="Basic Tooltip">
      <div class="flex items-center justify-center gap-4">
        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline" size="icon">
              <Info class="size-4" />
            </ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent>
            <p>Add to library</p>
          </ZTooltipContent>
        </ZTooltip>
      </div>
    </ZComponentWrapper>

    <!-- Tooltip with Different Positions -->
    <ZComponentWrapper name="Tooltip Positions">
      <div class="grid grid-cols-4 gap-4 items-center justify-center">
        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline">Top</ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent side="top">
            <p>This tooltip appears on top</p>
          </ZTooltipContent>
        </ZTooltip>

        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline">Right</ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent side="right">
            <p>This tooltip appears on the right</p>
          </ZTooltipContent>
        </ZTooltip>

        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline">Bottom</ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent side="bottom">
            <p>This tooltip appears at the bottom</p>
          </ZTooltipContent>
        </ZTooltip>

        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline">Left</ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent side="left">
            <p>This tooltip appears on the left</p>
          </ZTooltipContent>
        </ZTooltip>
      </div>
    </ZComponentWrapper>

    <!-- Tooltip with Icons -->
    <ZComponentWrapper name="Tooltip with Icons">
      <div class="flex items-center justify-center gap-4">
        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline" size="icon">
              <Settings class="size-4" />
            </ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent>
            <div class="flex items-center gap-2">
              <Settings class="size-4" />
              <span>Settings</span>
            </div>
          </ZTooltipContent>
        </ZTooltip>

        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline" size="icon">
              <Mail class="size-4" />
            </ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent>
            <div class="flex items-center gap-2">
              <Mail class="size-4" />
              <span>Messages</span>
            </div>
          </ZTooltipContent>
        </ZTooltip>

        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline" size="icon">
              <Plus class="size-4" />
            </ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent>
            <div class="flex items-center gap-2">
              <Plus class="size-4" />
              <span>Add New Item</span>
            </div>
          </ZTooltipContent>
        </ZTooltip>
      </div>
    </ZComponentWrapper>

    <!-- Tooltip with Custom Content -->
    <ZComponentWrapper name="Tooltip with Custom Content">
      <div class="flex items-center justify-center">
        <ZTooltip>
          <ZTooltipTrigger as-child>
            <ZButton variant="outline">Profile Settings</ZButton>
          </ZTooltipTrigger>
          <ZTooltipContent class="p-0 w-80">
            <div class="flex flex-col">
              <div class="bg-muted p-2 font-medium border-b">User Settings</div>
              <div class="p-4 space-y-2">
                <p class="text-sm text-muted-foreground">
                  Configure your profile settings, including privacy options and
                  notification preferences.
                </p>
                <div class="flex justify-end">
                  <ZButton variant="outline" size="sm" class="text-xs"
                    >Learn more</ZButton
                  >
                </div>
              </div>
            </div>
          </ZTooltipContent>
        </ZTooltip>
      </div>
    </ZComponentWrapper>
  </div>
</template>
