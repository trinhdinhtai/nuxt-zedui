<script setup lang="ts">
import { ref } from 'vue';
import {
  CircleDashed,
  ChartLineIcon,
  ChartBarIcon,
  ChartPieIcon,
} from 'lucide-vue-next';

const selectedFruit = ref('');
const selectedFramework = ref('');
const selectedColor = ref('');
const selectedCountry = ref('');
const selectedPlan = ref('');

const selectedChart = ref<keyof typeof chartOptions>();
const chartOptions = {
  line: h(() => [h(ChartLineIcon), 'Line']),
  bar: h(() => [h(ChartBarIcon), 'Bar']),
  pie: h(() => [h(ChartPieIcon), 'Pie']),
};
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic Select -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedFruit">
        <ZSelectTrigger>
          <ZSelectValue placeholder="Select a fruit" />
        </ZSelectTrigger>
        <ZSelectContent>
          <ZSelectGroup>
            <ZSelectLabel>Fruits</ZSelectLabel>
            <ZSelectItem value="apple">Apple</ZSelectItem>
            <ZSelectItem value="banana">Banana</ZSelectItem>
            <ZSelectItem value="orange">Orange</ZSelectItem>
            <ZSelectItem value="strawberry">Strawberry</ZSelectItem>
            <ZSelectItem value="watermelon">Watermelon</ZSelectItem>
          </ZSelectGroup>
        </ZSelectContent>
      </ZSelect>
    </div>

    <!-- Multiple Groups -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedFramework">
        <ZSelectTrigger class="w-[280px]">
          <ZSelectValue placeholder="Select a framework" />
        </ZSelectTrigger>
        <ZSelectContent>
          <ZSelectGroup>
            <ZSelectLabel>Frontend</ZSelectLabel>
            <ZSelectItem value="react">React</ZSelectItem>
            <ZSelectItem value="vue">Vue</ZSelectItem>
            <ZSelectItem value="angular">Angular</ZSelectItem>
            <ZSelectItem value="svelte">Svelte</ZSelectItem>
          </ZSelectGroup>
          <ZSelectGroup>
            <ZSelectLabel>Backend</ZSelectLabel>
            <ZSelectItem value="nodejs">Node.js</ZSelectItem>
            <ZSelectItem value="django">Django</ZSelectItem>
            <ZSelectItem value="laravel">Laravel</ZSelectItem>
            <ZSelectItem value="express">Express</ZSelectItem>
          </ZSelectGroup>
        </ZSelectContent>
      </ZSelect>
    </div>

    <!-- Select with Disabled Items -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedColor">
        <ZSelectTrigger>
          <ZSelectValue placeholder="Select a color" />
        </ZSelectTrigger>
        <ZSelectContent>
          <ZSelectItem value="red">Red</ZSelectItem>
          <ZSelectItem value="green">Green</ZSelectItem>
          <ZSelectItem value="blue">Blue</ZSelectItem>
          <ZSelectItem value="yellow" disabled
            >Yellow (Out of stock)</ZSelectItem
          >
          <ZSelectItem value="purple">Purple</ZSelectItem>
          <ZSelectItem value="orange" disabled
            >Orange (Out of stock)</ZSelectItem
          >
        </ZSelectContent>
      </ZSelect>
    </div>

    <!-- Scrollable Select -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedCountry">
        <ZSelectTrigger class="w-[280px]">
          <ZSelectValue placeholder="Select a country" />
        </ZSelectTrigger>
        <ZSelectContent class="max-h-[200px]">
          <ZSelectItem value="vn">Vietnam</ZSelectItem>
          <ZSelectItem value="us">United States</ZSelectItem>
          <ZSelectItem value="jp">Japan</ZSelectItem>
          <ZSelectItem value="kr">South Korea</ZSelectItem>
          <ZSelectItem value="fr">France</ZSelectItem>
          <ZSelectItem value="de">Germany</ZSelectItem>
          <ZSelectItem value="uk">United Kingdom</ZSelectItem>
          <ZSelectItem value="ca">Canada</ZSelectItem>
          <ZSelectItem value="au">Australia</ZSelectItem>
          <ZSelectItem value="sg">Singapore</ZSelectItem>
          <ZSelectItem value="my">Malaysia</ZSelectItem>
          <ZSelectItem value="th">Thailand</ZSelectItem>
        </ZSelectContent>
      </ZSelect>
    </div>

    <!-- Select with Descriptions -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedPlan">
        <ZSelectTrigger class="w-[280px]">
          <ZSelectValue placeholder="Select a plan" />
        </ZSelectTrigger>
        <ZSelectContent>
          <ZSelectItem value="free">
            <div class="flex flex-col">
              <span>Free</span>
              <span class="text-xs text-muted-foreground">
                Limited to 10 users
              </span>
            </div>
          </ZSelectItem>
          <ZSelectItem value="pro">
            <div class="flex flex-col">
              <span>Pro</span>
              <span class="text-xs text-muted-foreground">
                Unlimited users, 24/7 support
              </span>
            </div>
          </ZSelectItem>
          <ZSelectItem value="enterprise">
            <div class="flex flex-col">
              <span>Enterprise</span>
              <span class="text-xs text-muted-foreground">
                All features, dedicated support
              </span>
            </div>
          </ZSelectItem>
        </ZSelectContent>
      </ZSelect>
    </div>

    <!-- Select with Icon -->
    <div class="flex flex-col gap-4 max-w-md">
      <ZSelect v-model="selectedChart">
        <ZSelectTrigger class="w-[180px]">
          <ZSelectValue>
            <template v-if="selectedChart">
              <component :is="chartOptions[selectedChart]" />
            </template>
            <template v-else>
              <CircleDashed class="text-muted-foreground" />
              With Icon
            </template>
          </ZSelectValue>
        </ZSelectTrigger>
        <ZSelectContent>
          <ZSelectItem
            v-for="(children, value) of chartOptions"
            :key="value"
            :value
          >
            <component :is="children" />
          </ZSelectItem>
        </ZSelectContent>
      </ZSelect>
    </div>
  </div>
</template>
