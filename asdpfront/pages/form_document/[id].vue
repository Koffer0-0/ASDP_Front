<script setup lang="ts">

const {
  positions,
  directors,
  permissions,
  teamleaders,
  employees,
  fetchPermissions,
  fetchDirectors,
  fetchTeamleaders,
  fetchEmployees,
  fetchPositions
} = useEmployee()

const data = ref({
  position: "",
  director: "",
  permission: "",
  teamlead: "",
  employee: "",
})

onMounted(() => {
  fetchPermissions()
  fetchDirectors()
  fetchTeamleaders()
  fetchEmployees()
  fetchPositions()
})
</script>

<template>
  Вот это Для чего?
  <BaseSelect :options="positions"
              v-model="data.position"
              defaultOption="Выберите Позицию" />
  <BaseSelect :options="directors"
              v-model="data.director"
              defaultOption="Выберите Директора" />
  <BaseSelect :options="permissions"
              v-model="data.permission"
              defaultOption="Выберите Доступ" />
  <BaseSelect :options="teamleaders"
              v-model="data.teamlead"
              defaultOption="Выберите Тимлида" />
  <BaseSelect :options="employees"
              v-model="data.employee"
              defaultOption="Выберите Сотрудника" />
</template>

<style scoped>

</style>