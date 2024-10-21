<script setup lang="ts">
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const iin = ref('');
const documentNumber = ref('');
const issueDate = ref('');
</script>

<template>
  <ContentHeader title="Профиль"/>
  <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
<!--    <div class="flex flex-col text-center justify-center items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">-->
<!--      <img class="mb-10 ml-5 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"-->
<!--             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">-->
<!--      <a class="mt-5   text-sm font-semibold text-blue-500 dark:text-white">-->
<!--        Upload Photo-->
<!--      </a>-->
<!--    </div>-->
    <form action="#">
      <div class="grid gap-10 mb-4 sm:grid-cols-2 px-40 justify-center">
        <BaseInput
          label="Имя"
          name="first_name"
          id="first_name"
          v-model:value="firstName"
          placeholder="Arman"
      />

        <BaseInput
            label="Фамилия"
            name="last_name"
            id="last_name"
            v-model:value="lastName"
            placeholder="Armankulov"
        />

        <BaseInput
            label="Email"
            type="email"
            name="email"
            id="email"
            v-model:value="email"
            placeholder="arman@gmail.com"
        />

        <BaseInput
            label="ИИН"
            type="number"
            name="iin"
            id="iin"
            v-model:value="iin"
            placeholder="777777777"
        />

        <BaseInput
            label="№ Документа"
            type="number"
            name="document_number"
            id="document_number"
            v-model:value="documentNumber"
            placeholder="10/10/2024"
        />

        <BaseInput
            label="Дата Выдачи"
            type="date"
            name="issue_date"
            id="issue_date"
            v-model:value="issueDate"
            placeholder="10/10/2024"
        /></div>
      <div class="flex items-center space-x-4 my-10 justify-center">
        <BaseButton text="Сохранить Изменения"/>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>