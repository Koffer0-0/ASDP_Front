<script setup lang="ts">
const labels = [
  { key: 'id', text: 'ID', sortable: false },
  { key: 'doc_name', text: 'Название Документа', sortable: true },
  { key: 'whom', text: 'От кого', sortable: true },
  { key: 'dueDate', text: 'Время', sortable: true },
  { key: 'status', text: 'Status', sortable: true },
]

const items = [
  {
    id: '#FWB127364372',
    dueDate: '09 Jan 2024',
    whom: 'Денис Одноуров',
    doc_name: 'Договор от 12 окт',
    statusClass: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
    statusText: 'Ongoing',
    statusIcon: 'M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z',
  },
  {
    id: '#FWB125467980',
    dueDate: '12 Dec 2023',
    whom: 'Аружан Аманова',
    doc_name: 'Договор от 12 окт',
    statusClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    statusText: 'Denied',
    statusIcon: 'M6 18 17.94 6M18 18 6.06 6',
  },
]
</script>

<template>
  <section class="grid grid-rows-1 gap-5">
    <div class="text-left mb-4 mt-6 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-4">
      <a href="/"
         class="grid place-content-start pl-5 pb-20 space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p class="text-left text-xs text-gray-500">
          Документы
        </p>
        <p class="text-xl font-semibold text-gray-900 dark:text-white">Документы</p>
      </a>
      <a href="/documents"
         class="grid place-content-start pl-5 pb-20 space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p class="text-left text-xs text-gray-500">
          Шаблоны
        </p>
        <p class="text-xl font-semibold text-gray-900 dark:text-white">Шаблоны</p>
      </a>
      <a href="/profile"
         class="grid place-content-start pl-5 pb-20 space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p class="text-left text-xs text-gray-500">
          Профиль
        </p>
        <p class="text-xl font-semibold text-gray-900 dark:text-white">Профиль</p>
      </a>
      <a href="/structure"
         class="grid place-content-start pl-5 pb-20 space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p class="text-left text-xs text-gray-500">
          Структура
        </p>
        <p class="text-xl font-semibold text-gray-900 dark:text-white">Структура</p>
      </a>
    </div>

    <div class="relative overflow-x-auto">
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
            <button @click="toggleActions(item.id)" class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <span class="sr-only"> Actions </span>
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
              </svg>
            </button>
            <!-- Dropdown actions for item -->
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

</template>

<style scoped>

</style>