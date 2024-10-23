<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Heading"
  }
})
</script>

<template>
  <header class="border-b border-gray-200 mb-3 pb-4">
    <div class="mx-auto max-w-screen-xl px-3">
      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <BaseHeading :text="title"/>
        <slot name="button"/>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>