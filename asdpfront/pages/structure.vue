<script setup lang="ts">

import BaseTable from "~/components/base/BaseTable.vue";

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
  <ContentHeader title="Структура"/>
  <BaseTable :items="items" :labels="labels">
    <!--        <template #actions="{item}">-->
    <!--          <button @click="toggleActions(item.id)" class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">-->
    <!--            <span class="sr-only"> Actions </span>-->
    <!--            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">-->
    <!--              <path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M6 12h.01m6 0h.01m5.99 0h.01"/>-->
    <!--            </svg>-->
    <!--          </button>-->
    <!--        </template>-->
  </BaseTable>
</template>

<style scoped>

</style>