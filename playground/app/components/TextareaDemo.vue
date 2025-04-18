<script setup lang="ts"></script>

<template>
  <div class="flex w-full flex-col gap-10">
    <ZTextarea placeholder="Type your message here." />
    <ZTextarea placeholder="Type your message here." aria-invalid="true" />
    <div class="grid gap-3">
      <ZLabel for="textarea-demo-message">Label</ZLabel>
      <ZTextarea
        id="textarea-demo-message"
        placeholder="Type your message here."
        :rows="6"
      />
    </div>
    <div class="grid gap-3">
      <ZLabel for="textarea-demo-message-2">
        With label and description
      </ZLabel>
      <ZTextarea
        id="textarea-demo-message-2"
        placeholder="Type your message here."
        :rows="6"
      />
      <div class="text-muted-foreground text-sm">
        Type your message and press enter to send.
      </div>
    </div>
    <div class="grid gap-3">
      <ZLabel for="textarea-demo-disabled">Disabled</ZLabel>
      <ZTextarea
        id="textarea-demo-disabled"
        placeholder="Type your message here."
        disabled
      />
    </div>
  </div>
</template>
