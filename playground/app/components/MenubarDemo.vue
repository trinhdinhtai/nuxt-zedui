<script setup lang="ts">
// Menubar Demo Component
</script>

<template>
  <div class="space-y-8">
    <!-- Basic Menubar -->
    <div>
      <h3 class="text-lg font-medium mb-4">Basic Menubar</h3>
      <ZMenubar>
        <ZMenubarMenu>
          <ZMenubarTrigger>File</ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarItem>
              <ZIcon name="i-lucide-file" />
              New Tab
              <ZMenubarShortcut>⌘T</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-file-plus" />
              New Window
              <ZMenubarShortcut>⌘N</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem disabled>
              <ZIcon name="i-lucide-file-x" />
              New Incognito Window
              <ZMenubarShortcut>⌘⇧N</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarSub>
              <ZMenubarSubTrigger>
                <ZIcon name="i-lucide-share" class="mr-2" />
                Share
              </ZMenubarSubTrigger>
              <ZMenubarSubContent>
                <ZMenubarItem>
                  <ZIcon name="i-lucide-mail" />
                  Email
                </ZMenubarItem>
                <ZMenubarItem>
                  <ZIcon name="i-lucide-message-square" />
                  Messages
                </ZMenubarItem>
                <ZMenubarSeparator />
                <ZMenubarItem>
                  <ZIcon name="i-lucide-plus" />
                  More...
                </ZMenubarItem>
              </ZMenubarSubContent>
            </ZMenubarSub>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-printer" />
              Print...
              <ZMenubarShortcut>⌘P</ZMenubarShortcut>
            </ZMenubarItem>
          </ZMenubarContent>
        </ZMenubarMenu>

        <ZMenubarMenu>
          <ZMenubarTrigger>Edit</ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarItem>
              <ZIcon name="i-lucide-undo-2" />
              Undo
              <ZMenubarShortcut>⌘Z</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-redo-2" />
              Redo
              <ZMenubarShortcut>⇧⌘Z</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarSub>
              <ZMenubarSubTrigger>
                <ZIcon name="i-lucide-clipboard" class="mr-2" />
                Find
              </ZMenubarSubTrigger>
              <ZMenubarSubContent>
                <ZMenubarItem>
                  <ZIcon name="i-lucide-search" />
                  Search
                  <ZMenubarShortcut>⌘F</ZMenubarShortcut>
                </ZMenubarItem>
                <ZMenubarItem>
                  <ZIcon name="i-lucide-arrow-right" />
                  Find Next
                  <ZMenubarShortcut>⌘G</ZMenubarShortcut>
                </ZMenubarItem>
                <ZMenubarItem>
                  <ZIcon name="i-lucide-arrow-left" />
                  Find Previous
                  <ZMenubarShortcut>⇧⌘G</ZMenubarShortcut>
                </ZMenubarItem>
              </ZMenubarSubContent>
            </ZMenubarSub>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-scissors" />
              Cut
              <ZMenubarShortcut>⌘X</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-copy" />
              Copy
              <ZMenubarShortcut>⌘C</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-clipboard-check" />
              Paste
              <ZMenubarShortcut>⌘V</ZMenubarShortcut>
            </ZMenubarItem>
          </ZMenubarContent>
        </ZMenubarMenu>

        <ZMenubarMenu>
          <ZMenubarTrigger>View</ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarItem>
              <ZIcon name="i-lucide-plus-circle" />
              Zoom In
              <ZMenubarShortcut>⌘+</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-minus-circle" />
              Zoom Out
              <ZMenubarShortcut>⌘-</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-rotate-cw" />
              Reset Zoom
              <ZMenubarShortcut>⌘0</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-layout" />
              Toggle Fullscreen
              <ZMenubarShortcut>F11</ZMenubarShortcut>
            </ZMenubarItem>
          </ZMenubarContent>
        </ZMenubarMenu>

        <ZMenubarMenu>
          <ZMenubarTrigger>Help</ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarItem>
              <ZIcon name="i-lucide-life-buoy" />
              Documentation
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-github" />
              GitHub Repository
            </ZMenubarItem>
            <ZMenubarItem>
              <ZIcon name="i-lucide-twitter" />
              Twitter
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarItem>
              <ZIcon name="i-lucide-info" />
              About
            </ZMenubarItem>
          </ZMenubarContent>
        </ZMenubarMenu>

        <ZMenubarMenu>
          <ZMenubarTrigger>Actions</ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarItem>
              <ZIcon name="i-lucide-save" class="mr-2 h-4 w-4" />
              Save Changes
            </ZMenubarItem>
            <ZMenubarSeparator />
            <ZMenubarItem variant="destructive">
              <ZIcon name="i-lucide-trash-2" class="mr-2 h-4 w-4" />
              Delete File
              <ZMenubarShortcut>⌘⌫</ZMenubarShortcut>
            </ZMenubarItem>
            <ZMenubarItem variant="destructive">
              <ZIcon name="i-lucide-log-out" class="mr-2 h-4 w-4" />
              Exit Without Saving
            </ZMenubarItem>
          </ZMenubarContent>
        </ZMenubarMenu>
      </ZMenubar>
    </div>

    <!-- Grouped Menubar -->
    <div>
      <h3 class="text-lg font-medium mb-4">Grouped Menubar</h3>
      <ZMenubar>
        <ZMenubarMenu>
          <ZMenubarTrigger>
            <ZIcon name="i-lucide-file" class="mr-2 h-4 w-4" />
            File
          </ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarGroup>
              <ZMenubarLabel>New</ZMenubarLabel>
              <ZMenubarItem>
                Document
                <ZMenubarShortcut>⌘N</ZMenubarShortcut>
              </ZMenubarItem>
              <ZMenubarItem>
                Folder
                <ZMenubarShortcut>⇧⌘N</ZMenubarShortcut>
              </ZMenubarItem>
            </ZMenubarGroup>
            <ZMenubarSeparator />
            <ZMenubarGroup>
              <ZMenubarLabel>Actions</ZMenubarLabel>
              <ZMenubarItem>
                Save
                <ZMenubarShortcut>⌘S</ZMenubarShortcut>
              </ZMenubarItem>
              <ZMenubarItem>
                Save As...
                <ZMenubarShortcut>⇧⌘S</ZMenubarShortcut>
              </ZMenubarItem>
            </ZMenubarGroup>
          </ZMenubarContent>
        </ZMenubarMenu>

        <ZMenubarMenu>
          <ZMenubarTrigger>
            <ZIcon name="i-lucide-edit-3" class="mr-2 h-4 w-4" />
            Edit
          </ZMenubarTrigger>
          <ZMenubarContent>
            <ZMenubarGroup>
              <ZMenubarLabel>Transform</ZMenubarLabel>
              <ZMenubarItem>
                Bold
                <ZMenubarShortcut>⌘B</ZMenubarShortcut>
              </ZMenubarItem>
              <ZMenubarItem>
                Italic
                <ZMenubarShortcut>⌘I</ZMenubarShortcut>
              </ZMenubarItem>
              <ZMenubarItem>
                Underline
                <ZMenubarShortcut>⌘U</ZMenubarShortcut>
              </ZMenubarItem>
            </ZMenubarGroup>
          </ZMenubarContent>
        </ZMenubarMenu>
      </ZMenubar>
    </div>
  </div>
</template>
