<script setup lang="ts">

import BaseTable from "~/components/base/BaseTable.vue";
import {useDocument} from "~/composables/useDocument";

const labels = [
  { key: 'signPipelineId', text: 'ID', sortable: false },
  { key: 'name', text: 'Название Документа', sortable: false },
  { key: 'createdDate', text: 'Время', sortable: false },
  { key: 'status', text: 'Статус', sortable: false },
]

const data = ref({
  templateId: "",
  directorId: "",
  teamlidId: "",
})

const isModalOpen = ref(false);

const userStore = useUserStore()

const {fetchTemplates, templates, handleGenerateDocument, fetchDocument} = useDocument()

const {fetchDocumentsToSign, fetchPipelines, handleSignDocument, documents, pipelines, registerPipeline} = useSign()

const {registerDocument, documentFixation, addSignToDocument, formDocument} = useSigex()
const {
  directors,
  teamleaders,
  fetchDirectors,
  fetchTeamleaders,
} = useEmployee()

onMounted(() => {
  fetchPipelines(userStore.user.id)
})

const downloadDoc = async (item) => {
  console.log(item)
  const doc = await fetchDocument(item.name, item.documentId)
  console.log(doc.size)
  const response = await formDocument(doc, item.sigexDocumentId,`${item.name}.pdf`)
  await downloadBase64File(response.data.ddc, `${item.name}.pdf`, "application/pdf")
};

function downloadBase64File(base64Data, fileName, mimeType) {
  // Create a Blob from the base64 data
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });

  // Create a link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;

  // Append the link to the body
  document.body.appendChild(link);

  // Simulate a click to trigger download
  link.click();

  // Remove the link after download
  document.body.removeChild(link);
}

const openModal = async () => {
  isModalOpen.value = true;
  await fetchDirectors()
  await fetchTeamleaders()
  await fetchTemplates()
};

const closeModal = () => {
  isModalOpen.value = false;
};

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

function findTemplateNameById(templateId) {
  const template = templates.value.find(item => item.id === templateId);
  return template ? template.name : null; // Вернем name, если найдено, иначе null
}

</script>

<template>
  <div>
    <div class="" v-if="userStore.user?.positionId !== 3">
      <ContentHeader title="Мои документы">
        <template #button>
          <BaseButton text="Запустить процесс" @click="openModal"/>
        </template>
      </ContentHeader>
      <BaseTable :items="pipelines" :labels="labels" v-if="pipelines.length > 0">
        <template #actions="{item}">
          <!--          <a :href="`${API_DOCUMENTS_ENDPOINT}/getDocument/${item.documentId}`">-->
          <button v-if="item.statusCode === 4" @click="downloadDoc(item)" class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
            </svg>
          </button>
          <!--          </a>-->
        </template>
      </BaseTable>
      <div v-else class="no-data flex items-center justify-center text-gray-500 dark:text-gray-400 h-32">
        <p>На данный момент нету документов</p>
      </div>
    </div>
  </div>
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