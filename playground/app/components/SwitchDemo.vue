<script setup lang="ts">
import { ref } from 'vue';

// Basic switch state
const basicSwitchEnabled = ref(false);

// Disabled switch
const isDisabledChecked = ref(true);
const isDisabledUnchecked = ref(false);

// Form switch states
const notifications = ref({
  all: true,
  email: false,
  push: true,
  sms: false,
});

// Airplane mode example
const isAirplaneMode = ref(false);

// Trạng thái cho settings list
const wifiEnabled = ref(false);
const bluetoothEnabled = ref(true);
const airplaneModeEnabled = ref(true);

// Với event handler
function handleToggle(enabled: boolean) {
  console.log(`Switch toggled: ${enabled}`);
}
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <!-- Basic Switch -->
    <div class="space-y-5">
      <div class="flex items-center space-x-4">
        <ZSwitch
          v-model="basicSwitchEnabled"
          @update:model-value="handleToggle"
        />
        <span class="ml-2">{{
          basicSwitchEnabled ? 'Enabled' : 'Disabled'
        }}</span>
      </div>
    </div>

    <!-- Disabled Switch -->
    <div class="space-y-5 w-80">
      <div class="flex flex-col gap-3">
        <div class="flex items-center space-x-4">
          <ZSwitch v-model="isDisabledChecked" disabled />
          <span class="text-muted-foreground ml-2">Disabled (checked)</span>
        </div>
        <div class="flex items-center space-x-4">
          <ZSwitch v-model="isDisabledUnchecked" disabled />
          <span class="text-muted-foreground ml-2">Disabled (unchecked)</span>
        </div>
      </div>
    </div>

    <!-- Switch với Label -->
    <div class="space-y-5 w-72">
      <div class="flex flex-col gap-3">
        <div class="flex items-center space-x-2">
          <ZLabel for="airplane-mode" class="cursor-pointer"
            >Airplane Mode</ZLabel
          >
          <ZSwitch id="airplane-mode" v-model="isAirplaneMode" />
        </div>
      </div>
    </div>

    <!-- Colored Switch -->
    <div class="space-y-5">
      <div class="flex items-center space-x-4">
        <ZLabel for="switch-demo-bluetooth" class="cursor-pointer"
          >Custom Color</ZLabel
        >
        <ZSwitch
          id="switch-demo-bluetooth"
          class="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
          :default-value="true"
        />
      </div>
    </div>

    <div class="flex gap-8">
      <div class="space-y-5">
        <ZCard class="w-80">
          <ZCardHeader>
            <ZCardTitle>Notifications</ZCardTitle>
            <ZCardDescription
              >Configure how you receive notifications.</ZCardDescription
            >
          </ZCardHeader>
          <ZCardContent>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <ZLabel for="all-notifications" class="cursor-pointer"
                  >All Notifications</ZLabel
                >
                <ZSwitch id="all-notifications" v-model="notifications.all" />
              </div>
              <div class="flex items-center justify-between">
                <ZLabel for="email-notifications" class="cursor-pointer"
                  >Email Notifications</ZLabel
                >
                <ZSwitch
                  id="email-notifications"
                  v-model="notifications.email"
                  :disabled="!notifications.all"
                />
              </div>
              <div class="flex items-center justify-between">
                <ZLabel for="push-notifications" class="cursor-pointer"
                  >Push Notifications</ZLabel
                >
                <ZSwitch
                  id="push-notifications"
                  v-model="notifications.push"
                  :disabled="!notifications.all"
                />
              </div>
              <div class="flex items-center justify-between">
                <ZLabel for="sms-notifications" class="cursor-pointer"
                  >SMS Notifications</ZLabel
                >
                <ZSwitch
                  id="sms-notifications"
                  v-model="notifications.sms"
                  :disabled="!notifications.all"
                />
              </div>
            </div>
          </ZCardContent>
          <ZCardFooter>
            <ZButton size="sm">Save Preferences</ZButton>
          </ZCardFooter>
        </ZCard>
      </div>

      <!-- Settings List -->
      <div class="space-y-5">
        <ZCard class="max-w-sm w-80">
          <ZCardHeader>
            <ZCardTitle>Settings</ZCardTitle>
          </ZCardHeader>
          <ZCardContent class="p-0">
            <div class="divide-y">
              <div class="flex items-center justify-between px-6 py-4">
                <div class="flex items-center gap-4">
                  <ZIcon
                    name="i-lucide-wifi"
                    class="size-5 text-muted-foreground"
                  />
                  <span>Wi-Fi</span>
                </div>
                <ZSwitch v-model="wifiEnabled" />
              </div>
              <div class="flex items-center justify-between px-6 py-4">
                <div class="flex items-center gap-4">
                  <ZIcon
                    name="i-lucide-bluetooth"
                    class="size-5 text-muted-foreground"
                  />
                  <span>Bluetooth</span>
                </div>
                <ZSwitch v-model="bluetoothEnabled" />
              </div>
              <div class="flex items-center justify-between px-6 py-4">
                <div class="flex items-center gap-4">
                  <ZIcon
                    name="i-lucide-plane"
                    class="size-5 text-muted-foreground"
                  />
                  <span>Airplane Mode</span>
                </div>
                <ZSwitch v-model="airplaneModeEnabled" />
              </div>
            </div>
          </ZCardContent>
        </ZCard>
      </div>
    </div>
  </div>
</template>
