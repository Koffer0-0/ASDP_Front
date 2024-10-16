<!-- layouts/full-screen.vue -->
<template>
  <div class="h-screen bg-gray-100 flex items-center justify-center">
    <!-- NuxtPage renders the specific page content -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  localStorage.setItem('theme', 'light');
});
</script>
