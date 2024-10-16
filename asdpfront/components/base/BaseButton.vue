<script setup lang="ts">
defineProps({
  icon: {

  },
  text: {
    type: String,
    required: true,
    default: "Text Button"
  }
})
</script>

<template>
  <button type="button"
          class="flex items-center justify-center px-4 py-3 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    <component :is="icon"/>
      {{ text }}
  </button>
</template>

<style scoped>

</style>