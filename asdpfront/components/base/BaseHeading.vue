<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
    default: "Heading"
  }
})
</script>

<template>
  <div class="flex gap-1 items-center ">
    <h5 class="text-xl font-semibold dark:text-white">{{ text }}</h5>
  </div>
</template>

<style scoped>

</style>