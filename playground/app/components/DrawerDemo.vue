<script setup lang="ts">
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];

const goal = ref(350);

const directions = ['top', 'right', 'bottom', 'left'] as const;
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <ZDrawer>
      <ZDrawerTrigger as-child>
        <ZButton variant="outline"> Open Drawer </ZButton>
      </ZDrawerTrigger>
      <ZDrawerContent>
        <div class="mx-auto w-full max-w-sm">
          <ZDrawerHeader>
            <ZDrawerTitle>Move Goal</ZDrawerTitle>
            <ZDrawerDescription
              >Set your daily activity goal.</ZDrawerDescription
            >
          </ZDrawerHeader>
          <div class="p-4 pb-0">
            <div class="flex items-center justify-center space-x-2">
              <ZButton
                variant="outline"
                size="icon"
                class="h-8 w-8 shrink-0 rounded-full"
                :disabled="goal <= 200"
                @click="goal -= 10"
              >
                <ZIcon name="i-lucide-minus" />
                <span class="sr-only">Decrease</span>
              </ZButton>
              <div class="flex-1 text-center">
                <div class="text-7xl font-bold tracking-tighter">
                  {{ goal }}
                </div>
                <div class="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
              <ZButton
                variant="outline"
                size="icon"
                class="h-8 w-8 shrink-0 rounded-full"
                :disabled="goal >= 400"
                @click="goal += 10"
              >
                <ZIcon name="i-lucide-plus" />
                <span class="sr-only">Increase</span>
              </ZButton>
            </div>
            <div class="mt-3 h-[120px]">
              <!-- <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer> -->
            </div>
          </div>
          <ZDrawerFooter>
            <ZButton>Submit</ZButton>
            <ZDrawerClose as-child>
              <ZButton variant="outline"> Cancel </ZButton>
            </ZDrawerClose>
          </ZDrawerFooter>
        </div>
      </ZDrawerContent>
    </ZDrawer>

    <ZDrawer direction="right">
      <ZDrawerTrigger as-child>
        <ZButton variant="outline"> Scrollable Content </ZButton>
      </ZDrawerTrigger>
      <ZDrawerContent>
        <ZDrawerHeader>
          <ZDrawerTitle>Move Goal</ZDrawerTitle>
          <ZDrawerDescription>Set your daily activity goal.</ZDrawerDescription>
        </ZDrawerHeader>
        <div class="overflow-y-auto px-4 text-sm">
          <h4 class="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ZDrawerFooter>
          <ZButton>Submit</ZButton>
          <ZDrawerClose as-child>
            <ZButton variant="outline"> Cancel </ZButton>
          </ZDrawerClose>
        </ZDrawerFooter>
      </ZDrawerContent>
    </ZDrawer>

    <ZDrawer v-for="direction in directions" :key="direction" :direction>
      <ZDrawerTrigger as-child>
        <ZButton variant="outline" class="capitalize">
          {{ direction }}
        </ZButton>
      </ZDrawerTrigger>
      <ZDrawerContent>
        <ZDrawerHeader>
          <ZDrawerTitle>Move Goal</ZDrawerTitle>
          <ZDrawerDescription>
            Set your daily activity goal.
          </ZDrawerDescription>
        </ZDrawerHeader>
        <div class="overflow-y-auto px-4 text-sm">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ZDrawerFooter>
          <ZButton>Submit</ZButton>
          <ZDrawerClose as-child>
            <ZButton variant="outline"> Cancel </ZButton>
          </ZDrawerClose>
        </ZDrawerFooter>
      </ZDrawerContent>
    </ZDrawer>
  </div>
</template>
