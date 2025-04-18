<script setup lang="ts"></script>

<template>
  <div class="flex flex-col flex-wrap gap-6 md:flex-row">
    <div class="grid gap-2">
      <ZLabel for="simple">Simple</ZLabel>
      <ZInputOTP id="simple" :max-length="6">
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="0" />
          <ZInputOTPSlot :index="1" />
          <ZInputOTPSlot :index="2" />
        </ZInputOTPGroup>
        <ZInputOTPSeparator />
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="3" />
          <ZInputOTPSlot :index="4" />
          <ZInputOTPSlot :index="5" />
        </ZInputOTPGroup>
      </ZInputOTP>
    </div>

    <div class="grid gap-2">
      <ZLabel for="digits-only">Digits Only</ZLabel>
      <ZInputOTP id="digits-only" :max-length="6" :type="'number'">
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="0" />
          <ZInputOTPSlot :index="1" />
          <ZInputOTPSlot :index="2" />
          <ZInputOTPSlot :index="3" />
          <ZInputOTPSlot :index="4" />
          <ZInputOTPSlot :index="5" />
        </ZInputOTPGroup>
      </ZInputOTP>
    </div>

    <div class="grid gap-2">
      <ZLabel for="with-separator">With Separator</ZLabel>
      <ZInputOTP id="with-separator" :max-length="6">
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="0" />
          <ZInputOTPSlot :index="1" />
        </ZInputOTPGroup>
        <ZInputOTPSeparator />
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="2" />
          <ZInputOTPSlot :index="3" />
        </ZInputOTPGroup>
        <ZInputOTPSeparator />
        <ZInputOTPGroup>
          <ZInputOTPSlot :index="4" />
          <ZInputOTPSlot :index="5" />
        </ZInputOTPGroup>
      </ZInputOTP>
    </div>

    <div class="grid gap-2">
      <ZLabel for="with-spacing">With Spacing</ZLabel>
      <ZInputOTP id="with-spacing" :max-length="6">
        <ZInputOTPGroup
          class="gap-2 *:data-[slot=pin-input-slot]:rounded-md *:data-[slot=pin-input-slot]:border"
        >
          <ZInputOTPSlot :index="0" aria-invalid="true" />
          <ZInputOTPSlot :index="1" aria-invalid="true" />
          <ZInputOTPSlot :index="2" aria-invalid="true" />
          <ZInputOTPSlot :index="3" aria-invalid="true" />
        </ZInputOTPGroup>
      </ZInputOTP>
    </div>
  </div>
</template>
