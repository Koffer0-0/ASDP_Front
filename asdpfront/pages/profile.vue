<script setup lang="ts">

</script>

<template>
  <ContentHeader title="Профиль"/>
  <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
    <!-- Modal header -->
    <div class="flex flex-col text-center justify-center items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
      <img class="mb-10 ml-5 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"
             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">
      <a class="mt-5   text-sm font-semibold text-blue-500 dark:text-white">
        Upload Photo
      </a>
    </div>
    <!-- Modal body -->
    <form action="#">
      <div class="grid gap-10 mb-4 sm:grid-cols-2 px-40 justify-center">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя</label>
          <input type="text" name="first_name" id="first_name" value=""
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="Arman">
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фамилия</label>
          <input type="text" name="last_name" id="last_name" value=""
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="Armankulov">
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" value=""
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="arman@gmail.com">
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ИИН</label>
          <input type="number" value="777777777" name="phone" id="phone"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="777777777">
        </div>
        <div>
          <label for="birth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">№ Документа</label>
          <input type="number" value="10/10/2024" name="birth" id="birth"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="10/10/2024">
        </div>
        <div>
          <label for="birth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Дата Выдачи</label>
          <input type="number" value="10/10/2024" name="birth" id="birth"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                 placeholder="10/10/2024">
        </div>
      </div>
      <div class="flex items-center space-x-4 my-10 justify-center">
        <BaseButton text="Сохранить Изменения"/>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>