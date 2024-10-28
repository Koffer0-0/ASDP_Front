<script setup lang="ts">

import BaseTable from "~/components/base/BaseTable.vue";

const labels = [
  { key: 'id', text: 'ID', sortable: false },
  { key: 'mail', text: 'Почта', sortable: false },
  { key: 'name', text: 'Имя', sortable: false },
  { key: 'surName', text: 'Фамилия', sortable: false },
  { key: 'iin', text: 'ИИН', sortable: false },
]

const {fetchEmployees, employees} = useEmployee()

onMounted(() => {
  fetchEmployees()
})
</script>

<template>
  <ContentHeader title="Структура"/>
  <BaseTable :items="employees" :labels="labels">
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