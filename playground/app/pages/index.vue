<script setup lang="ts"></script>

<template>
  <div class="p-4 space-y-6">
    <div>
      <h2 class="text-lg font-bold mb-2">Module Buttons</h2>
      <div class="flex gap-2">
        <ZButton>Default Button</ZButton>
        <ZButton variant="outline">Outline Button</ZButton>
        <ZButton variant="destructive">Destructive Button</ZButton>
        <ZButton variant="ghost">Ghost Button</ZButton>
        <ZButton variant="link">Link Button</ZButton>
      </div>
    </div>

    <ZDialog>
      <ZDialogTrigger as-child>
        <ZButton variant="outline">Edit Profile</ZButton>
      </ZDialogTrigger>
      <ZDialogContent class="sm:max-w-[425px]">
        <ZDialogHeader>
          <ZDialogTitle>Edit profile</ZDialogTitle>
          <ZDialogDescription>
            Make changes to your profile here. Click save when you're done.
          </ZDialogDescription>
        </ZDialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <ZLabel for="name" class="text-right">Name</ZLabel>
            <ZInput id="name" default-value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <ZLabel for="username" class="text-right">Username</ZLabel>
            <ZInput
              id="username"
              default-value="@peduarte"
              class="col-span-3"
            />
          </div>
        </div>
        <ZDialogFooter>
          <ZButton type="submit">Save changes</ZButton>
        </ZDialogFooter>
      </ZDialogContent>
    </ZDialog>

    <ZAlert>
      <ZIcon name="i-lucide-circle-check" />
      <ZAlertTitle>Alert Title</ZAlertTitle>
      <ZAlertDescription>
        This is an alert with icon, title and description.
      </ZAlertDescription>
    </ZAlert>
  </div>
</template>

<script setup></script>
