<script setup lang="ts">
defineProps({
  lables: {},
  items: {},
})
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
        <span class="sr-only"> Actions </span>
      </th>
    </tr>
    </thead>

    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
    <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
      <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
        <a href="#" class="hover:underline">{{ item.id }}</a>
      </th>
      <td class="whitespace-nowrap p-4 text-sm font-medium">{{ item.doc_name }}</td>
      <td class="whitespace-nowrap p-4 text-sm font-medium">{{ item.whom }}</td>
      <td class="whitespace-nowrap p-4 text-sm font-medium">{{ item.dueDate }}</td>
      <td class="p-4">
          <span :class="item.statusClass" class="inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
            <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.statusIcon"/>
            </svg>
            {{ item.statusText }}
          </span>
      </td>
      <td class="p-4 text-right">
        <slot name="actions">

        </slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>