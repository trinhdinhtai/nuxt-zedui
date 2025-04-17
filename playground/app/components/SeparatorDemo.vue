<script setup lang="ts">
// No imports needed for this demo
</script>

<template>
  <div class="flex flex-wrap gap-16">
    <div>
      <div class="flex flex-col gap-1">
        <div class="text-sm leading-none font-medium">Tailwind CSS</div>
        <div class="text-muted-foreground text-sm">
          A utility-first CSS framework.
        </div>
      </div>
      <ZSeparator class="my-4" />
      <div class="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <ZSeparator orientation="vertical" />
        <div>Docs</div>
        <ZSeparator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>

    <!-- Separator with Label -->
    <div class="flex flex-col gap-4 max-w-3xl">
      <div>
        <div class="text-sm text-muted-foreground mb-2">
          Separator can contain a label in the middle
        </div>
        <div class="py-2">
          <ZSeparator label="OR" class="my-4" />
        </div>
        <div class="py-2">
          <ZSeparator label="SECTION" class="my-4" />
        </div>
      </div>
    </div>

    <!-- Styled Separators -->
    <div class="flex flex-col gap-4 max-w-3xl">
      <div>
        <div class="text-sm text-muted-foreground mb-2">
          Separators can be styled with different colors and thicknesses
        </div>
        <ZSeparator class="my-4 h-0.5 bg-primary" />
        <ZSeparator class="my-4 h-0.5 bg-destructive" />
        <ZSeparator class="my-4 bg-muted-foreground" />
        <ZSeparator class="my-4 border-dashed border-t border-border" />
      </div>
    </div>

    <!-- Contextual Usage Example -->
    <div class="flex flex-col gap-4 w-80 max-w-3xl">
      <div class="border rounded-lg p-4 space-y-4">
        <div class="flex justify-between items-center">
          <h4 class="font-medium">Profile Settings</h4>
          <ZButton variant="outline" size="sm">Edit</ZButton>
        </div>
        <ZSeparator />
        <div class="space-y-2">
          <p class="text-sm font-medium">Name</p>
          <p class="text-sm text-muted-foreground">John Doe</p>
        </div>
        <ZSeparator />
        <div class="space-y-2">
          <p class="text-sm font-medium">Email</p>
          <p class="text-sm text-muted-foreground">john.doe@example.com</p>
        </div>
        <ZSeparator />
        <div class="space-y-2">
          <p class="text-sm font-medium">Role</p>
          <p class="text-sm text-muted-foreground">Administrator</p>
        </div>
      </div>
    </div>
  </div>
</template>
