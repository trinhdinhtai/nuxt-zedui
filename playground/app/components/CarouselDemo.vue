<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col items-center gap-4">
    <ZCarousel
      class="max-w-sm *:data-[slot=carousel-next]:hidden *:data-[slot=carousel-previous]:hidden *:data-[slot=carousel-next]:md:inline-flex *:data-[slot=carousel-previous]:md:inline-flex"
    >
      <ZCarouselContent>
        <ZCarouselItem v-for="index in 5" :key="index">
          <div class="p-1">
            <ZCard>
              <ZCardContent
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-4xl font-semibold">{{ index }}</span>
              </ZCardContent>
            </ZCard>
          </div>
        </ZCarouselItem>
      </ZCarouselContent>
      <ZCarouselPrevious />
      <ZCarouselNext />
    </ZCarousel>

    <ZCarousel
      class="max-w-sm *:data-[slot=carousel-next]:hidden *:data-[slot=carousel-previous]:hidden *:data-[slot=carousel-next]:md:inline-flex *:data-[slot=carousel-previous]:md:inline-flex"
      :opts="{
        align: 'start',
      }"
    >
      <ZCarouselContent>
        <ZCarouselItem
          v-for="index in 5"
          :key="index"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <div class="p-1">
            <ZCard>
              <ZCardContent
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-3xl font-semibold">{{ index }}</span>
              </ZCardContent>
            </ZCard>
          </div>
        </ZCarouselItem>
      </ZCarouselContent>
      <ZCarouselPrevious />
      <ZCarouselNext />
    </ZCarousel>
    <ZCarousel
      class="max-w-sm *:data-[slot=carousel-next]:hidden *:data-[slot=carousel-previous]:hidden *:data-[slot=carousel-next]:md:inline-flex *:data-[slot=carousel-previous]:md:inline-flex"
    >
      <ZCarouselContent class="-ml-1">
        <ZCarouselItem
          v-for="index in 5"
          :key="index"
          class="pl-1 md:basis-1/2"
        >
          <div class="p-1">
            <ZCard>
              <CardContent
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-2xl font-semibold">{{ index }}</span>
              </CardContent>
            </ZCard>
          </div>
        </ZCarouselItem>
      </ZCarouselContent>
      <ZCarouselPrevious />
      <ZCarouselNext />
    </ZCarousel>
  </div>
</template>
