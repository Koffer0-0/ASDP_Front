<script setup lang="ts">
import {ref} from "vue";
import IconEyeClosed from "~/components/icons/IconEyeClosed.vue";
import IconEyeOpen from "~/components/icons/IconEyeOpen.vue";

const form = ref({
  mail: "",
  name: "",
  surName: "",
  iin: "",
  identityNumber: "",
  identityIssuer: "",
  identityIssueDate: "",
  positionId: 1,
});
const showIin = ref(false);
const showIdentityNumber = ref(false);
const showIssueDate = ref(false);

const userStore = useUserStore();

onMounted(() => {
  const user = userStore.user
  form.value = {...user}
})

const positionName = computed(() => {
  switch (form.value.positionId) {
    case 1:
      return 'Сотрудник';
    case 2:
      return 'Тимлид';
    case 3:
      return 'Директор';
    default:
      return 'Неизвестная позиция'; // Если введено что-то другое
  }
});

const formattedDate = computed({
  get() {
    if (!form.value.identityIssueDate) return '';
    const date = new Date(form.value.identityIssueDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  },
  set(newValue) {
    // Optional: Parse the input back to the original format if needed
  }
});
</script>

<template>
  <ContentHeader title="Профиль"/>
  <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
<!--    <div class="flex flex-col text-center justify-center items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">-->
<!--      <img class="mb-10 ml-5 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"-->
<!--             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">-->
<!--      <a class="mt-5   text-sm font-semibold text-blue-500 dark:text-white">-->
<!--        Upload Photo-->
<!--      </a>-->
<!--    </div>-->
    <form action="#">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <strong>Позиция:</strong> {{ positionName }}
      </label>

      <div class="grid gap-10 mb-4 sm:grid-cols-2 px-40 justify-center">
        <BaseInput
            :disabled="true"
            label="Имя"
            name="first_name"
            id="first_name"
            v-model:value="form.name"
            placeholder="Arman"
        />

        <BaseInput
            :disabled="true"
            label="Фамилия"
            name="last_name"
            id="last_name"
            v-model:value="form.surName"
            placeholder="Armankulov"
        />

        <BaseInput
            :disabled="true"
            label="Email"
            type="email"
            name="email"
            id="email"
            v-model:value="form.mail"
            placeholder="arman@gmail.com"
        />

        <BaseInput
            :disabled="true"
            label="ИИН"
            :type="showIin ? 'text' : 'password'"
            name="iin"
            id="iin"
            v-model:value="form.iin"
            placeholder="777777777"
        >
          <span
              class="absolute end-0 top-10 right-5"
              @click="showIin = !showIin"
          >
                  <IconEyeClosed v-if="!showIin"/>
                  <IconEyeOpen v-if="showIin"/>
          </span>
        </BaseInput>

        <BaseInput
            :disabled="true"
            label="№ Документа"
            :type="showIdentityNumber ? 'text' : 'password'"
            name="document_number"
            id="document_number"
            v-model:value=form.identityNumber
            placeholder="10/10/2024"
        >
          <span
              class="absolute end-0 top-10 right-5"
              @click="showIdentityNumber = !showIdentityNumber"
          >
                  <IconEyeClosed v-if="!showIdentityNumber"/>
                  <IconEyeOpen v-if="showIdentityNumber"/>
          </span>
        </BaseInput>
        <BaseInput
            :disabled="true"
            label="Дата Выдачи"
            :type="showIssueDate ? 'text' : 'password'"
            name="issue_date"
            id="issue_date"
            v-model:value="formattedDate"
            placeholder="10/10/2024"
        >
          <span
              class="absolute end-0 top-10 right-5"
              @click="showIssueDate = !showIssueDate"
          >
                  <IconEyeClosed v-if="!showIssueDate"/>
                  <IconEyeOpen v-if="showIssueDate"/>
          </span>
        </BaseInput>
        <BaseInput
            :disabled="true"
            label="Орган Выдачи"
            type="text"
            name="issuer"
            id="issuer"
            v-model:value="form.identityIssuer"
            placeholder="10/10/2024"
        />
      </div>
      <div class="flex items-center space-x-4 my-10 justify-center">
<!--        <BaseButton text="Сохранить Изменения"/>-->
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>