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

const startProcess = (id) => {
  console.log("Gay")
  closeModal()
}

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
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
      <ContentHeader title="Мои документы">
        <template #button>
          <BaseButton text="Запустить процесс" @click="openModal"/>
        </template>
      </ContentHeader>
      <BaseTable :items="items" :labels="labels">
        <template #actions="{item}">
          <button @click="toggleActions(item.id)" class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <span class="sr-only"> Actions </span>
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
            </svg>
          </button>
        </template>
      </BaseTable>
    </div>
  </section>
  <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white w-1/3 rounded-lg shadow-lg p-6">
      <!-- Заголовок модального окна -->
      <h2 class="text-lg font-bold mb-4">Форма</h2>
      <form @submit.prevent="startProcess">
        <div class="mb-4">
          <label for="identityIssueDate" class="block text-sm font-medium text-gray-700">Дата выдачи</label>
          <input type="date" id="identityIssueDate" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
        </div>

        <!-- Кнопки -->
        <div class="flex justify-end space-x-4">
          <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-400 text-white rounded-lg">Закрыть</button>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>