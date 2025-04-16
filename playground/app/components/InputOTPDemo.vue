<script setup lang="ts"></script>

<template>
  <div class="grid gap-8">
    <div class="grid gap-4">
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
    </div>
  </div>
</template>
