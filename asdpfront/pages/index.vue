<script setup lang="ts">
import BaseTable from "~/components/base/BaseTable.vue";
import {useDocument} from "~/composables/useDocument";

const cardLinks = [
  {link: "/", name: "Документы"},
  {link: "/templates", name: "Шаблоны"},
  {link: "/profile", name: "Профиль"},
  {link: "/structure", name: "Структура"},
]

const labels = [
  { key: 'signPipelineId', text: 'ID', sortable: false },
  { key: 'name', text: 'Название Документа', sortable: false },
  { key: 'createdDate', text: 'Время', sortable: false },
  { key: 'status', text: 'Статус', sortable: false },
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

const data = ref({
  templateId: "",
  directorId: "",
  teamlidId: "",
})

const {fetchTemplates, templates, handleGenerateDocument, fetchDocument} = useDocument()
const {fetchDocumentsToSign, fetchPipelines, handleSignDocument, documents, pipelines, registerPipeline} = useSign()
const {registerDocument, documentFixation, addSignToDocument} = useSigex()
const {
  directors,
  teamleaders,
  fetchDirectors,
  fetchTeamleaders,
} = useEmployee()

const userStore = useUserStore()

onMounted(() => {
  fetchPipelines(userStore.user.id)
  fetchDocumentsToSign(userStore.user.id)
})

function findTemplateNameById(templateId) {
  const template = templates.value.find(item => item.id === templateId);
  return template ? template.name : null; // Вернем name, если найдено, иначе null
}

// Использование функции

const startProcess = async () => {
  const payload = {
    templateId: data.value.templateId,
    creatorEmployeeId: userStore.user.id,
    directorId: data.value.directorId,
    teamlidId: data.value.teamlidId,
  }
  const templateName = findTemplateNameById(data.value.templateId);
  const generatedDocument = await handleGenerateDocument(payload, templateName)
  const {documentId, signId} = await registerDocument(generatedDocument, userStore.user.iin)
  await documentFixation(generatedDocument, userStore.user.iin, documentId)
  const response = await registerPipeline(userStore.user.id, generatedDocument, data.value.teamlidId, data.value.directorId, documentId, signId)
  closeModal()
  await fetchPipelines(userStore.user.id)
}

const isModalOpen = ref(false);

const openModal = async () => {
  isModalOpen.value = true;
  await fetchDirectors()
  await fetchTeamleaders()
  await fetchTemplates()
};

const closeModal = () => {
  isModalOpen.value = false;
};

const downloadDoc = () => {
  isModalOpen.value = false;
};

const rejectDoc = async (item) => {
  const payload = {
    signPipelineId: item.signPipelineId,
    creatorUserId: userStore.user.id,
    isSign: false
  }
  await handleSignDocument(payload)
  await fetchDocumentsToSign(userStore.user.id)
  await fetchPipelines(userStore.user.id)
}

const signDoc = async (item) => {
  const payload = {
    signPipelineId: item.signPipelineId,
    creatorUserId: userStore.user.id,
    isSign: true
  }
  const doc = await fetchDocument(item.name, item.documentId)
  await addSignToDocument(doc, userStore.user.iin, item.sigexDocumentId)
  const response = await handleSignDocument(payload)
  if (response.IsSuccess) {
    await fetchDocumentsToSign(userStore.user.id)
    await fetchPipelines(userStore.user.id)
  }
}
</script>

<template>
  <section class="grid grid-rows-1 gap-5">
    <div class="text-left mb-4 mt-6 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-4">
      <a v-for="l in cardLinks"
          :href="l.link"
         class="grid place-content-start pl-5 pb-20 space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p class="text-left text-xs text-gray-500">
          {{ l.name }}
        </p>
        <p class="text-xl font-semibold text-gray-900 dark:text-white">{{ l.name }}</p>
      </a>
    </div>

    <div class="" v-if="userStore.user?.positionId !== 3">
      <ContentHeader title="Мои документы">
        <template #button>
          <BaseButton text="Запустить процесс" @click="openModal"/>
        </template>
      </ContentHeader>
      <BaseTable :items="pipelines" :labels="labels" v-if="pipelines.length > 0">
        <template #actions="{item}" >
          <button v-if="item.statusCode === 4" @click="downloadDoc(item.id)" class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
            </svg>
          </button>
        </template>
      </BaseTable>
      <div v-else class="no-data flex items-center justify-center text-gray-500 dark:text-gray-400 h-32">
        <p>На данный момент нету документов</p>
      </div>
    </div>
    <div class="" v-if="userStore.user?.positionId !== 1">
      <ContentHeader title="Документы на Подписания"/>
      <BaseTable :items="documents" :labels="labels" v-if="documents.length > 0">
        <template #actions="{item}">
          <div class="flex gap-1 w-1/2">
            <BaseButton text="Подписать" @click="signDoc(item)" class="bg-primary-500 hover:bg-primary-600"/>
            <BaseButton text="Отклонить" @click="rejectDoc(item)" class="bg-red-500 hover:bg-red-600"/>
          </div>
        </template>
      </BaseTable>
      <div v-else class="no-data flex items-center justify-center text-gray-500 dark:text-gray-400 h-32">
        <p>На данный момент нету документов для подписания</p>
      </div>
    </div>
  </section>
  <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white w-1/3 rounded-lg shadow-lg p-6">
      <!-- Заголовок модального окна -->
      <h2 class="text-lg font-bold mb-4">Форма</h2>
      <form @submit.prevent="startProcess">
        <BaseSelect :options="directors"
                    v-model="data.directorId"
                    defaultOption="Выберите Директора" />
        <BaseSelect :options="teamleaders"
                    v-model="data.teamlidId"
                    defaultOption="Выберите Тимлида" />
        <BaseSelect :options="templates"
                    v-model="data.templateId"
                    defaultOption="Выберите Шаблон" />
        <!-- Кнопки -->
        <div class="flex justify-end space-x-4 my-4">
          <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg">Закрыть</button>
          <button type="submit" @clist="startProcess" class="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg">Запустить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>