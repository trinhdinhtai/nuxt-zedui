<script setup lang="ts">
import { ref } from 'vue';

// Basic tags
const basicTags = ref(['Apple', 'Orange', 'Banana']);

// Tech stack tags
const techTags = ref(['Vue', 'TypeScript', 'Tailwind CSS']);

// Email tags with validation
const emailTags = ref(['john@example.com', 'jane@example.com']);
const invalidEmail = ref(false);

function validateEmail(email: string) {
  const regex = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;
  return regex.test(email);
}

function addEmailTag(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value.trim();

  if (value && validateEmail(value)) {
    emailTags.value.push(value);
    target.value = '';
    invalidEmail.value = false;
  } else if (value) {
    invalidEmail.value = true;
  }
}

// Custom tags with suggested options
const frameworkTags = ref(['Vue', 'React']);
const frameworkOptions = [
  'Vue',
  'React',
  'Angular',
  'Svelte',
  'Nuxt',
  'Next.js',
  'Astro',
  'SolidJS',
];
const filteredFrameworks = ref<string[]>([]);
const searchTerm = ref('');

function updateFilteredFrameworks(term: string) {
  searchTerm.value = term;
  if (!term) {
    filteredFrameworks.value = [];
    return;
  }

  filteredFrameworks.value = frameworkOptions
    .filter((option) => !frameworkTags.value.includes(option))
    .filter((option) => option.toLowerCase().includes(term.toLowerCase()))
    .slice(0, 5);
}

function addFrameworkTag(tag: string) {
  if (tag && !frameworkTags.value.includes(tag)) {
    frameworkTags.value.push(tag);
  }
  searchTerm.value = '';
  filteredFrameworks.value = [];
}
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <!-- Basic Tags Input -->
    <div class="space-y-4 w-full max-w-xl">
      <ZTagsInput v-model="basicTags" placeholder="Add fruit..." class="w-full">
        <ZTagsInputItem
          v-for="tag in basicTags"
          :key="tag"
          :value="tag"
          class="bg-primary/10 text-primary"
        >
          <ZTagsInputItemText>{{ tag }}</ZTagsInputItemText>
          <ZTagsInputItemDelete />
        </ZTagsInputItem>
        <ZTagsInputInput placeholder="Add a tag..." />
      </ZTagsInput>
    </div>

    <!-- Tech Stack Tags -->
    <div class="space-y-4 w-full max-w-xl">
      <ZTagsInput
        id="tech-stack"
        v-model="techTags"
        placeholder="Add technologies..."
        class="w-full"
      >
        <ZTagsInputItem
          v-for="tag in techTags"
          :key="tag"
          :value="tag"
          variant="secondary"
        >
          <ZTagsInputItemText>{{ tag }}</ZTagsInputItemText>
          <ZTagsInputItemDelete />
        </ZTagsInputItem>
        <ZTagsInputInput placeholder="Add a technology..." />
      </ZTagsInput>
    </div>

    <!-- Email Tags with Validation -->
    <div class="space-y-4 w-full max-w-xl">
      <ZLabel for="email-tags">Email Tags with Validation</ZLabel>
      <ZTagsInput
        id="email-tags"
        v-model="emailTags"
        placeholder="Add email addresses..."
        class="w-full"
        :class="{
          'border-destructive focus-within:ring-destructive': invalidEmail,
        }"
      >
        <ZTagsInputItem
          v-for="tag in emailTags"
          :key="tag"
          :value="tag"
          variant="outline"
        >
          <ZTagsInputItemText>{{ tag }}</ZTagsInputItemText>
          <ZTagsInputItemDelete />
        </ZTagsInputItem>
        <ZTagsInputInput
          placeholder="Add email address..."
          @keydown.enter.prevent="addEmailTag"
        />
      </ZTagsInput>
      <div v-if="invalidEmail" class="text-sm text-destructive">
        Please enter a valid email address
      </div>
    </div>

    <!-- Framework Tags with Autocomplete -->
    <div class="space-y-4 w-full max-w-xl">
      <ZLabel for="framework-tags">Framework Tags with Autocomplete</ZLabel>
      <div class="relative">
        <ZTagsInput
          id="framework-tags"
          v-model="frameworkTags"
          placeholder="Add frameworks..."
          class="w-full"
        >
          <ZTagsInputItem v-for="tag in frameworkTags" :key="tag" :value="tag">
            <ZTagsInputItemText>{{ tag }}</ZTagsInputItemText>
            <ZTagsInputItemDelete />
          </ZTagsInputItem>
          <ZTagsInputInput
            placeholder="Search framework..."
            :value="searchTerm"
            @input="(e) => updateFilteredFrameworks((e.target as HTMLInputElement).value)"
          />
        </ZTagsInput>

        <div
          v-if="filteredFrameworks.length > 0"
          class="absolute z-10 mt-1 w-full bg-popover border rounded-md shadow-md"
        >
          <ul class="py-1">
            <li
              v-for="framework in filteredFrameworks"
              :key="framework"
              class="px-3 py-2 hover:bg-accent cursor-pointer"
              @click="addFrameworkTag(framework)"
            >
              {{ framework }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
