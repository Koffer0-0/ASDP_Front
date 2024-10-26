<script setup lang="ts">

import {API_DOCUMENTS_ENDPOINT} from "~/constants/consts";

defineProps({
  template: {}
})

</script>

<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img width="360" height="280" class="max-w-lg max-h-72 w-full h-auto object-contain rounded-t-lg" src="https://amzirlodp-prd-s3.s3.amazonaws.com/documents/images/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg" alt="" />
    </a>
    <div class="p-5 flex flex-col items-center justify-center text-center">
      <a href="/form_document">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ template.name }}</h5>
      </a>
<!--      <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Описание Шаблона</p>-->
     <div class="flex gap-2">
<!--       <button @click=""-->
<!--               class="px-5 py-2 font-medium text-center text-gray-500 border-2 border-gray-400 rounded-md hover:text-gray-800 hover:border-gray-800 focus:ring-4 focus:outline-none ">-->
<!--         Использовать-->
<!--       </button>-->
       <a :href="`${API_DOCUMENTS_ENDPOINT}/getTemplate/${template.id}`"
          target="_blank"
               class="px-5 py-2 font-medium text-center text-gray-500 border-2 border-gray-400 rounded-md hover:text-gray-800 hover:border-gray-800 focus:ring-4 focus:outline-none ">
         <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
         </svg>
       </a>
     </div>
    </div>
  </div>
</template>

<style scoped>

</style>