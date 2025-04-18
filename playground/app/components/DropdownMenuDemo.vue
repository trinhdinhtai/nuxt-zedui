<script setup lang="ts">
const showStatusBar = ref(true);
const showActivityBar = ref(false);
const showPanel = ref(false);

const position = ref('bottom');
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton variant="outline"> Open </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent align="start" class="w-56">
        <ZDropdownMenuLabel>My Account</ZDropdownMenuLabel>
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            Profile
            <ZDropdownMenuShortcut>⇧⌘P</ZDropdownMenuShortcut>
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            Billing
            <ZDropdownMenuShortcut>⌘B</ZDropdownMenuShortcut>
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            Settings
            <ZDropdownMenuShortcut>⌘S</ZDropdownMenuShortcut>
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            Keyboard shortcuts
            <ZDropdownMenuShortcut>⌘K</ZDropdownMenuShortcut>
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>Team</ZDropdownMenuItem>
          <ZDropdownMenuSub>
            <ZDropdownMenuSubTrigger>Invite users</ZDropdownMenuSubTrigger>
            <ZDropdownMenuPortal>
              <ZDropdownMenuSubContent>
                <ZDropdownMenuItem>Email</ZDropdownMenuItem>
                <ZDropdownMenuItem>Message</ZDropdownMenuItem>
                <ZDropdownMenuSeparator />
                <ZDropdownMenuItem>More...</ZDropdownMenuItem>
              </ZDropdownMenuSubContent>
            </ZDropdownMenuPortal>
          </ZDropdownMenuSub>
          <ZDropdownMenuItem>
            New Team
            <ZDropdownMenuShortcut>⌘+T</ZDropdownMenuShortcut>
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuItem>GitHub</ZDropdownMenuItem>
        <ZDropdownMenuItem>Support</ZDropdownMenuItem>
        <ZDropdownMenuItem disabled> API </ZDropdownMenuItem>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuItem>
          Log out
          <ZDropdownMenuShortcut>⇧⌘Q</ZDropdownMenuShortcut>
        </ZDropdownMenuItem>
      </ZDropdownMenuContent>
    </ZDropdownMenu>

    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton variant="outline"> Checkboxes </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent align="start" class="w-56">
        <ZDropdownMenuGroup>
          <ZDropdownMenuLabel>Account</ZDropdownMenuLabel>
          <ZDropdownMenuItem> <UserIcon /> Profile </ZDropdownMenuItem>
          <ZDropdownMenuItem> <CreditCardIcon /> Billing </ZDropdownMenuItem>
          <ZDropdownMenuItem> <Settings2Icon /> Settings </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuLabel>Appearance</ZDropdownMenuLabel>
          <ZDropdownMenuCheckboxItem v-model="showStatusBar">
            Status Bar
          </ZDropdownMenuCheckboxItem>
          <ZDropdownMenuCheckboxItem v-model="showActivityBar" disabled>
            Activity Bar
          </ZDropdownMenuCheckboxItem>
          <ZDropdownMenuCheckboxItem v-model="showPanel">
            Panel
          </ZDropdownMenuCheckboxItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-log-out" />
            Sign Out
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
      </ZDropdownMenuContent>
    </ZDropdownMenu>

    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton variant="outline"> Radio Group </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent align="start" class="w-56">
        <ZDropdownMenuLabel inset> Panel Position </ZDropdownMenuLabel>
        <ZDropdownMenuGroup>
          <ZDropdownMenuRadioGroup v-model="position">
            <ZDropdownMenuRadioItem value="top"> Top </ZDropdownMenuRadioItem>
            <ZDropdownMenuRadioItem value="bottom">
              Bottom
            </ZDropdownMenuRadioItem>
            <ZDropdownMenuRadioItem value="right" disabled>
              Right
            </ZDropdownMenuRadioItem>
          </ZDropdownMenuRadioGroup>
        </ZDropdownMenuGroup>
      </ZDropdownMenuContent>
    </ZDropdownMenu>

    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton
          variant="outline"
          class="h-12 justify-start px-2 md:max-w-[200px]"
        >
          <ZAvatar>
            <ZAvatarImage
              src="https://github.com/trinhdinhtai.png"
              alt="Shadcn"
            />
            <ZAvatarFallback class="rounded-lg">TĐ</ZAvatarFallback>
          </ZAvatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">Trịnh Đình Tài</span>
            <span class="text-muted-foreground truncate text-xs">
              taitd@example.com
            </span>
          </div>
          <ChevronsUpDownIcon class="text-muted-foreground ml-auto" />
        </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent
        class="w-(--reka-dropdown-menu-trigger-width) min-w-56"
        align="start"
      >
        <ZDropdownMenuLabel class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <ZAvatar>
              <ZAvatarImage
                src="https://github.com/trinhdinhtai.png"
                alt="taitd"
              />
              <ZAvatarFallback class="rounded-lg"> TĐ </ZAvatarFallback>
            </ZAvatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">Trịnh Đình Tài</span>
              <span class="text-muted-foreground truncate text-xs">
                taitd@example.com
              </span>
            </div>
          </div>
        </ZDropdownMenuLabel>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-sparkles" />
            Upgrade to Pro
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-badge-check" />
            Account
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-credit-card" />
            Billing
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-bell" />
            Notifications
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuItem>
          <ZIcon name="i-lucide-log-out" />
          Sign Out
        </ZDropdownMenuItem>
      </ZDropdownMenuContent>
    </ZDropdownMenu>

    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton variant="outline" class="size-8 rounded-full border-none p-0">
          <ZAvatar>
            <ZAvatarImage
              src="https://github.com/trinhdinhtai.png"
              alt="taitd"
            />
            <ZAvatarFallback class="rounded-lg"> TĐ </ZAvatarFallback>
          </ZAvatar>
        </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent
        class="w-(--reka-dropdown-menu-trigger-width) min-w-56"
        align="start"
      >
        <ZDropdownMenuLabel class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <ZAvatar>
              <ZAvatarImage
                src="https://github.com/trinhdinhtai.png"
                alt="taitd"
              />
              <ZAvatarFallback class="rounded-lg"> TĐ </ZAvatarFallback>
            </ZAvatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">Trịnh Đình Tài</span>
              <span class="text-muted-foreground truncate text-xs">
                taitd@example.com
              </span>
            </div>
          </div>
        </ZDropdownMenuLabel>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-sparkles" />
            Upgrade to Pro
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <ZDropdownMenuSeparator />
        <ZDropdownMenuGroup>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-badge-check" />
            Account
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-credit-card" />
            Billing
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-bell" />
            Notifications
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
        <DropdownMenuSeparator />
        <ZDropdownMenuItem>
          <ZIcon name="i-lucide-log-out" />
          Sign Out
        </ZDropdownMenuItem>
      </ZDropdownMenuContent>
    </ZDropdownMenu>

    <ZDropdownMenu>
      <ZDropdownMenuTrigger as-child>
        <ZButton variant="ghost" size="icon">
          <ZIcon name="i-lucide-more-horizontal" />
          <span class="sr-only">Toggle menu</span>
        </ZButton>
      </ZDropdownMenuTrigger>
      <ZDropdownMenuContent align="start">
        <ZDropdownMenuGroup
          class="*:data-[slot=dropdown-menu-item]:[&>svg]:text-muted-foreground"
        >
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-pencil" />
            Edit
          </ZDropdownMenuItem>
          <ZDropdownMenuItem>
            <ZIcon name="i-lucide-share" />
            Share
          </ZDropdownMenuItem>
          <ZDropdownMenuSeparator />
          <ZDropdownMenuItem variant="destructive">
            <ZIcon name="i-lucide-trash" />
            Delete
          </ZDropdownMenuItem>
        </ZDropdownMenuGroup>
      </ZDropdownMenuContent>
    </ZDropdownMenu>
  </div>
</template>
