<script setup lang="ts"></script>

<template>
  <div class="flex flex-row flex-wrap items-center gap-4">
    <ZAvatar>
      <ZAvatarImage
        src="https://github.com/trinhdinhtai.png"
        alt="@trinhdinhtai"
      />
      <ZAvatarFallback>TĐ</ZAvatarFallback>
    </ZAvatar>

    <ZAvatar>
      <ZAvatarFallback>TĐ</ZAvatarFallback>
    </ZAvatar>

    <ZAvatar class="size-12">
      <ZAvatarImage
        src="https://github.com/trinhdinhtai.png"
        alt="@trinhdinhtai"
      />
      <ZAvatarFallback>TĐ</ZAvatarFallback>
    </ZAvatar>

    <ZAvatar class="rounded-lg">
      <ZAvatarImage
        src="https://github.com/trinhdinhtai.png"
        alt="@trinhdinhtai"
      />
      <ZAvatarFallback>TĐ</ZAvatarFallback>
    </ZAvatar>

    <div
      class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/trinhdinhtai.png"
          alt="@trinhdinhtai"
        />
        <ZAvatarFallback>TĐ</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <ZAvatarFallback>LR</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <ZAvatarFallback>ER</ZAvatarFallback>
      </ZAvatar>
    </div>

    <div
      class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/trinhdinhtai.png"
          alt="@trinhdinhtai"
        />
        <ZAvatarFallback>TĐ</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <ZAvatarFallback>LR</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <ZAvatarFallback>ER</ZAvatarFallback>
      </ZAvatar>
    </div>

    <div
      class="*:data-[slot=avatar]:ring-background flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out"
    >
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/trinhdinhtai.png"
          alt="@trinhdinhtai"
        />
        <ZAvatarFallback>TĐ</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <ZAvatarFallback>LR</ZAvatarFallback>
      </ZAvatar>
      <ZAvatar>
        <ZAvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <ZAvatarFallback>ER</ZAvatarFallback>
      </ZAvatar>
    </div>
  </div>
</template>
