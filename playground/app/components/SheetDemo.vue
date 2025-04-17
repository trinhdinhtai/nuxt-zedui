<script setup lang="ts">
import { ref } from 'vue';

const rightSheetOpen = ref(false);
const leftSheetOpen = ref(false);
const topSheetOpen = ref(false);
const bottomSheetOpen = ref(false);
</script>

<template>
  <div class="space-y-12">
    <div class="flex flex-col gap-4 max-w-3xl">
      <h3 class="text-lg font-medium">Sheets - Slideover Panels</h3>
      <div class="text-sm text-muted-foreground mb-4">
        Sheets provide a way to display additional content that slides in from
        the edge of the screen.
      </div>

      <div class="flex flex-wrap gap-4">
        <!-- Right Sheet (Default) -->
        <div>
          <ZButton variant="outline" @click="rightSheetOpen = true">
            Open Right Sheet
          </ZButton>
          <ZSheet v-model:open="rightSheetOpen">
            <ZSheetContent>
              <ZSheetHeader>
                <ZSheetTitle>Right Sheet</ZSheetTitle>
                <ZSheetDescription>
                  This sheet slides in from the right side of the screen.
                </ZSheetDescription>
              </ZSheetHeader>
              <div class="py-6">
                <p class="text-sm text-muted-foreground">
                  This is the default sheet position. It's commonly used for
                  settings panels, details views, or any secondary content.
                </p>
              </div>
              <div class="flex justify-end">
                <ZButton @click="rightSheetOpen = false">Close</ZButton>
              </div>
            </ZSheetContent>
          </ZSheet>
        </div>

        <!-- Left Sheet -->
        <div>
          <ZButton variant="outline" @click="leftSheetOpen = true">
            Open Left Sheet
          </ZButton>
          <ZSheet v-model:open="leftSheetOpen">
            <ZSheetContent side="left">
              <ZSheetHeader>
                <ZSheetTitle>Left Sheet</ZSheetTitle>
                <ZSheetDescription>
                  This sheet slides in from the left side of the screen.
                </ZSheetDescription>
              </ZSheetHeader>
              <div class="py-6">
                <p class="text-sm text-muted-foreground">
                  Left sheets are often used for navigation menus, especially on
                  mobile devices.
                </p>
              </div>
              <div class="flex justify-end">
                <ZButton @click="leftSheetOpen = false">Close</ZButton>
              </div>
            </ZSheetContent>
          </ZSheet>
        </div>

        <!-- Top Sheet -->
        <div>
          <ZButton variant="outline" @click="topSheetOpen = true">
            Open Top Sheet
          </ZButton>
          <ZSheet v-model:open="topSheetOpen">
            <ZSheetContent side="top" class="h-48">
              <ZSheetHeader>
                <ZSheetTitle>Top Sheet</ZSheetTitle>
                <ZSheetDescription>
                  This sheet slides in from the top of the screen.
                </ZSheetDescription>
              </ZSheetHeader>
              <div class="py-4">
                <p class="text-sm text-muted-foreground">
                  Top sheets are good for notifications, alerts or quick
                  actions.
                </p>
              </div>
              <div class="flex justify-end">
                <ZButton @click="topSheetOpen = false">Close</ZButton>
              </div>
            </ZSheetContent>
          </ZSheet>
        </div>

        <!-- Bottom Sheet -->
        <div>
          <ZButton variant="outline" @click="bottomSheetOpen = true">
            Open Bottom Sheet
          </ZButton>
          <ZSheet v-model:open="bottomSheetOpen">
            <ZSheetContent side="bottom" class="h-64">
              <ZSheetHeader>
                <ZSheetTitle>Bottom Sheet</ZSheetTitle>
                <ZSheetDescription>
                  This sheet slides in from the bottom of the screen.
                </ZSheetDescription>
              </ZSheetHeader>
              <div class="py-4">
                <p class="text-sm text-muted-foreground">
                  Bottom sheets are commonly used in mobile interfaces for
                  contextual actions, filters, or selection menus.
                </p>
              </div>
              <div class="flex justify-end">
                <ZButton @click="bottomSheetOpen = false">Close</ZButton>
              </div>
            </ZSheetContent>
          </ZSheet>
        </div>
      </div>
    </div>

    <!-- Form in Sheet Example -->
    <div class="flex flex-col gap-4 max-w-3xl">
      <h3 class="text-lg font-medium">Sheet with Form</h3>
      <div class="border rounded-lg p-4">
        <p class="text-sm mb-4">
          Sheets are perfect for forms that don't need a full page.
        </p>
        <ZButton @click="rightSheetOpen = true">Edit Profile</ZButton>
        <ZSheet v-model:open="rightSheetOpen">
          <ZSheetContent>
            <ZSheetHeader>
              <ZSheetTitle>Edit Profile</ZSheetTitle>
              <ZSheetDescription>
                Make changes to your profile here. Click save when you're done.
              </ZSheetDescription>
            </ZSheetHeader>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <ZLabel for="name" class="text-right">Name</ZLabel>
                <ZInput id="name" value="John Doe" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <ZLabel for="username" class="text-right">Username</ZLabel>
                <ZInput id="username" value="@johndoe" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <ZLabel for="bio" class="text-right">Bio</ZLabel>
                <ZTextarea
                  id="bio"
                  class="col-span-3"
                  placeholder="Write a short bio about yourself"
                />
              </div>
            </div>
            <ZSheetFooter>
              <ZButton type="submit" @click="rightSheetOpen = false"
                >Save changes</ZButton
              >
            </ZSheetFooter>
          </ZSheetContent>
        </ZSheet>
      </div>
    </div>
  </div>
</template>
