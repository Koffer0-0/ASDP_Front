<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  localStorage.setItem('theme', 'light');
})
</script>
