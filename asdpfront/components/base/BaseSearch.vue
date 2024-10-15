<script setup lang="ts">

import IconSearch from "~/components/icons/IconSearch.vue";
</script>

<template>
  <form action="#" method="GET" class="hidden md:block md:pl-2">
    <label for="topbar-search" class="sr-only">Search</label>
    <div class="relative md:w-64 md:w-96">
      <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <IconSearch class="text-gray-500"/>
      </div>
      <input
          type="text"
          name="email"
          id="topbar-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
      />
    </div>
  </form>
</template>

<style scoped>

</style>