<script setup lang="ts">

defineProps({
  name: {
    type: String
  },
  defaultOption: {
    type: String
  },
  options: {
    type: Array
  }
})
</script>

<template>
  <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{name}}</label>
  <select :id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>{{ defaultOption }}</option>
    <option v-for="o in options"
            :value="o.шв">{{o.name}}</option>
  </select>
</template>

<style scoped>

</style>