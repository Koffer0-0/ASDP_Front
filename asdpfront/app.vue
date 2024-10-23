<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const userStore = useUserStore();

onMounted(() => {
  localStorage.setItem('theme', 'light');

  userStore.loadUser(); // Load user data into Pinia store on startup
})

</script>
