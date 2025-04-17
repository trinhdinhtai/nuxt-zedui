<script setup lang="ts">
import { ref } from 'vue';

// Dialog state management
const basicDialog = ref(false);
const complexDialog = ref(false);
const scrollDialog = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic Dialog -->
    <ZButton variant="outline" @click="basicDialog = true">Open Dialog</ZButton>
    <ZDialog v-model:open="basicDialog">
      <ZDialogContent>
        <p>
          This is a basic dialog with a close button in the top-right corner.
        </p>
        <div class="mt-4 flex justify-end">
          <ZButton @click="basicDialog = false">Close</ZButton>
        </div>
      </ZDialogContent>
    </ZDialog>

    <!-- Complex Dialog -->
    <ZButton variant="outline" @click="complexDialog = true"
      >Open Dialog With Header</ZButton
    >
    <ZDialog v-model:open="complexDialog">
      <ZDialogContent class="sm:max-w-md">
        <ZDialogHeader>
          <ZDialogTitle>Share Document</ZDialogTitle>
          <ZDialogDescription>
            Share this document with your team members.
          </ZDialogDescription>
        </ZDialogHeader>
        <div class="py-4">
          <div class="flex items-center space-x-2">
            <div class="grid flex-1 gap-2">
              <ZLabel for="link" class="sr-only">Link</ZLabel>
              <ZInput
                id="link"
                value="https://example.com/shared-document"
                readonly
              />
            </div>
            <ZButton variant="outline" size="sm" class="px-3">
              <span>Copy</span>
            </ZButton>
          </div>
          <div class="mt-4">
            <ZLabel>Permission Level</ZLabel>
            <ZSelect>
              <ZSelectTrigger class="w-full">
                <ZSelectValue placeholder="Select permission" />
              </ZSelectTrigger>
              <ZSelectContent>
                <ZSelectItem value="view">Can view</ZSelectItem>
                <ZSelectItem value="comment">Can comment</ZSelectItem>
                <ZSelectItem value="edit">Can edit</ZSelectItem>
              </ZSelectContent>
            </ZSelect>
          </div>
        </div>
        <ZDialogFooter class="justify-end">
          <ZButton variant="secondary" @click="complexDialog = false">
            Close
          </ZButton>
          <ZButton @click="complexDialog = false"> Share </ZButton>
        </ZDialogFooter>
      </ZDialogContent>
    </ZDialog>

    <!-- Scrolling Content Dialog -->
    <ZButton variant="outline" @click="scrollDialog = true"
      >Open Scrolling Dialog</ZButton
    >
    <ZDialog v-model:open="scrollDialog">
      <ZDialogContent class="sm:max-w-md">
        <ZDialogHeader>
          <ZDialogTitle>Terms of Service</ZDialogTitle>
          <ZDialogDescription>
            Please read our terms of service agreement
          </ZDialogDescription>
        </ZDialogHeader>
        <ZScrollArea class="max-h-[60vh] overflow-y-auto p-4 border rounded">
          <div class="space-y-4 text-sm">
            <h4 class="font-medium">1. Introduction</h4>
            <p>
              Welcome to our service. By using our service, you agree to these
              terms.
            </p>
            <h4 class="font-medium">2. Using Our Service</h4>
            <p>
              You must follow any policies made available to you within the
              Services.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>
            <h4 class="font-medium">3. Privacy and Copyright Protection</h4>
            <p>
              Our privacy policies explain how we treat your personal data and
              protect your privacy when you use our Services.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>
            <h4 class="font-medium">4. Your Content in our Services</h4>
            <p>
              Some of our Services allow you to upload, submit, store, send or
              receive content.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>
          </div>
        </ZScrollArea>
        <ZDialogFooter>
          <ZButton variant="outline" @click="scrollDialog = false">
            Decline
          </ZButton>
          <ZButton @click="scrollDialog = false"> Accept </ZButton>
        </ZDialogFooter>
      </ZDialogContent>
    </ZDialog>
  </div>
</template>
