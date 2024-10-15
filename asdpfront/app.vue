<template>
  <div>
    <the-navbar/>
    <the-sidebar/>
    <main class="p-4 md:ml-64 h-screen pt-20 bg-gray-100">
        <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  localStorage.setItem('theme', 'light');
})
</script>
