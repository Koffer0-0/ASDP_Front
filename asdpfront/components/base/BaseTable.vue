<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

function statusClass(statusCode) {
  switch (statusCode) {
    case 1:
      return 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300';
    case 2:
      return 'bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300';
    case 3:
      return 'bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300';
    case 4:
      return 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300';
    default:
      return 'bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-red-300';
  }
}
</script>

<template>
  <table class="w-full divide-y divide-gray-200 text-sm text-gray-900 dark:divide-gray-700 dark:text-white">
    <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th v-for="label in labels" :key="label.key" scope="col" class="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
        <div v-if="label.sortable" class="flex items-center gap-1">
          {{ label.text }}
          <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
          </svg>
        </div>
        <span v-else>{{ label.text }}</span>
      </th>
      <th scope="col" class="p-4 text-xs font-semibold uppercase">
        <span class="sr-only">Actions</span>
      </th>
    </tr>
    </thead>

    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
    <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
      <!-- Dynamically render each cell based on the label's key -->
      <td v-for="label in labels" :key="label.key" class="whitespace-nowrap p-4 text-sm font-medium">
          <span v-if="label.key === 'status'">
            <span :class="statusClass(item.statusCode)">{{ item[label.key] }}</span>
          </span>
        <span v-else>{{ item[label.key] }}</span>
      </td>
      <td class="p-4 text-right">
        <slot name="actions" :item="item"></slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Custom styles */
</style>
