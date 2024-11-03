<script setup lang="ts">
import BaseTable from "~/components/base/BaseTable.vue";
import {useDocument} from "~/composables/useDocument";
import {API_DOCUMENTS_ENDPOINT} from "~/constants/consts";
import * as fs from "node:fs";

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

const { fetchDocument} = useDocument()
const {fetchDocumentsToSign, fetchPipelines, handleSignDocument, documents} = useSign()
const { addSignToDocument} = useSigex()

const userStore = useUserStore()

onMounted(() => {
  fetchDocumentsToSign(userStore.user.id)
})

const route = useRoute();
const requiredRole = route.meta.requiredRole;

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
  const success = await addSignToDocument(doc, item.sigexDocumentId)
  if (success) {
    const response = await handleSignDocument(payload)
    if (response.IsSuccess) {
      await fetchDocumentsToSign(userStore.user.id)
      await fetchPipelines(userStore.user.id)
    }
  }
}
</script>

<template>
  <section class="grid grid-rows-1 gap-5">
<!--    {{userStore.user}}-->
<!--    required role {{requiredRole}}-->
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
</template>

<style scoped>

</style>