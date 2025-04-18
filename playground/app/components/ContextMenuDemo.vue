<script setup lang="ts"></script>

<template>
  <ZContextMenu>
    <ZContextMenuTrigger
      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
    >
      Right click here
    </ZContextMenuTrigger>
    <ZContextMenuContent class="w-64">
      <ZContextMenuItem inset>
        Back
        <ZContextMenuShortcut>⌘[</ZContextMenuShortcut>
      </ZContextMenuItem>
      <ZContextMenuItem inset disabled>
        Forward
        <ZContextMenuShortcut>⌘]</ZContextMenuShortcut>
      </ZContextMenuItem>
      <ZContextMenuItem inset>
        Reload
        <ZContextMenuShortcut>⌘R</ZContextMenuShortcut>
      </ZContextMenuItem>
      <ZContextMenuSub>
        <ZContextMenuSubTrigger inset> More Tools </ZContextMenuSubTrigger>
        <ZContextMenuSubContent class="w-48">
          <ZContextMenuItem inset>
            Save As...
            <ZContextMenuShortcut>⇧⌘S</ZContextMenuShortcut>
          </ZContextMenuItem>
          <ZContextMenuItem>
            <ZIcon name="i-lucide-plus" />
            Create Shortcut...
          </ZContextMenuItem>
          <ZContextMenuItem inset> Name Window... </ZContextMenuItem>
          <ZContextMenuSeparator />
          <ZContextMenuItem>
            <ZIcon name="i-lucide-code" />
            Developer Tools
          </ZContextMenuItem>
          <ContextMenuSeparator />
          <ZContextMenuItem variant="destructive">
            <ZIcon name="i-lucide-trash" />
            Delete
          </ZContextMenuItem>
        </ZContextMenuSubContent>
      </ZContextMenuSub>
      <ZContextMenuSeparator />
      <ZContextMenuCheckboxItem :model-value="true">
        Show Bookmarks Bar
        <ZContextMenuShortcut>⌘⇧B</ZContextMenuShortcut>
      </ZContextMenuCheckboxItem>
      <ZContextMenuCheckboxItem>Show Full URLs</ZContextMenuCheckboxItem>
      <ZContextMenuSeparator />
      <ZContextMenuRadioGroup model-value="pedro">
        <ZContextMenuLabel inset> People </ZContextMenuLabel>
        <ZContextMenuRadioItem value="taitd">
          Trịnh Đình Tài
        </ZContextMenuRadioItem>
        <ZContextMenuRadioItem value="trangttq">
          Trịnh Thị Quỳnh Trang
        </ZContextMenuRadioItem>
      </ZContextMenuRadioGroup>
    </ZContextMenuContent>
  </ZContextMenu>
</template>
