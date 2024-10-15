<template>
  <div>
    <the-navbar/>
    <the-sidebar/>
    <main class="p-4 md:ml-64 h-full pt-20 bg-gray-100">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  localStorage.setItem('theme', 'light');
})
</script>
