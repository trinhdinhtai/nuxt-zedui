<script setup lang="ts"></script>

<template>
  <div class="space-y-12">
    <ZPagination
      v-slot="{ page }"
      :items-per-page="10"
      :total="30"
      :default-page="2"
    >
      <ZPaginationContent v-slot="{ items }">
        <ZPaginationPrevious href="#" />
        <template v-for="(item, index) in items" :key="index">
          <ZPaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </ZPaginationItem>
        </template>

        <ZPaginationEllipsis :index="4" />

        <ZPaginationNext />
      </ZPaginationContent>
    </ZPagination>
  </div>
</template>
