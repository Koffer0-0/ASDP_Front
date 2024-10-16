<script setup lang="ts">
const templates = [
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
  {id: "", name: "", description: "", img: ""},
]
</script>

<template>
  <ContentHeader title="Шаблоны">
    <template #button>
      <BaseButton text="Добавить Шаблон"/>
    </template>
  </ContentHeader>
  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
    <TemplateCard v-for="t in templates"/>
  </main>
</template>

<style scoped>

</style>