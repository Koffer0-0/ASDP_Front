<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useEmployee } from "~/composables/useEmployee";

definePageMeta({
  layout: 'full-screen'
});

const form = ref({
  mail: "",
  name: "",
  surName: "",
  iin: "",
  identityNumber: "",
  identityIssuer: "",
  identityIssueDate: ""
});

const { addEmployee } = useEmployee();
const route = useRoute();

const populateFormFromQuery = () => {
  const query = route.query;
  if (query) {
    form.value.mail = query.email as string || "";
    form.value.name = query.name as string || "";
    form.value.surName = query.surname as string || "";
    form.value.iin = query.iin as string || "";
  }
};

const registerUser = async () => {
  try {
    const payload = { ...form.value };
    await addEmployee(payload);
    alert("Employee added successfully!");
  } catch (error) {
    console.error("Error adding employee:", error);
    alert("Error occurred while adding employee");
  }
};

onMounted(() => {
  populateFormFromQuery();
});
</script>

<template>
  <div class="blob-bg w-full h-screen flex items-center justify-center">
    <div class="mx-auto">
      <form @submit.prevent="registerUser" class="bg-white mt-6 rounded-lg p-3 shadow-lg sm:p-10 lg:p-12">
        <h1 class="text-center text-2xl font-bold text-black sm:text-3xl">Регистрация</h1>
        <p class="mx-auto px-10 max-w-md text-sm text-center text-gray-500">Заполните поля для продолжения</p>

        <!-- Email Field -->
        <div>
          <label for="email" class="block my-1 text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.mail" type="email" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter email" />
        </div>

        <!-- Name Field -->
        <div>
          <label for="name" class="block my-1 text-sm font-medium text-gray-700">Имя</label>
          <input v-model="form.name" type="text" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter name" />
        </div>

        <!-- Surname Field -->
        <div>
          <label for="surname" class="block my-1 text-sm font-medium text-gray-700">Фамилия</label>
          <input v-model="form.surName" type="text" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter surname" />
        </div>

        <!-- IIN Field -->
        <div>
          <label for="iin" class="block my-1 text-sm font-medium text-gray-700">ИИН</label>
          <input v-model="form.iin" type="number" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter IIN" />
        </div>

        <!-- Identity Number Field -->
        <div>
          <label for="identityNumber" class="block my-1 text-sm font-medium text-gray-700">№ Документа</label>
          <input v-model="form.identityNumber" type="number" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter document number" />
        </div>

        <!-- Issuer Field -->
        <div>
          <label for="identityIssuer" class="block my-1 text-sm font-medium text-gray-700">Кем выдан</label>
          <input v-model="form.identityIssuer" type="text" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter issuer" />
        </div>

        <!-- Issue Date Field -->
        <div>
          <label for="identityIssueDate" class="block my-1 text-sm font-medium text-gray-700">Дата выдачи</label>
          <input v-model="form.identityIssueDate" type="date" class="w-full rounded-lg border-gray-200 bg-gray-200 p-2 text-sm shadow-sm" placeholder="Enter issue date" />
        </div>

        <!-- Submit Button -->
        <button type="submit" class="block w-full mt-2 rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white">
          Сохранить
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.blob-bg {
  height: 100%;
  background-color: #5487e3;
}

.blob-bg::before {
  content: "";
  position: absolute;
  width: 100%;
  top: -200px;
  left: -300px;
  background: url('your-blob.svg') no-repeat center;
  background-size: cover;
}
</style>
