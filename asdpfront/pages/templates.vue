<script setup lang="ts">
import { useDocument } from "~/composables/useDocument";

const {fetchTemplates, templates, createTemplate, fetchTags, tags} = useDocument()

const fileInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  fetchTemplates()
  fetchTags()
})


const handleUploadTemplate = () => {
  fileInput.value?.click();
};

const onFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target?.files?.[0];

  if (!file) {
    alert("No file selected");
    return;
  }

  try {
    const fileName = file.name.split('.').slice(0, -1).join('.');
    // Create FormData to send the file to the createTemplate function
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", fileName); // Append the file name separately

    // Call createTemplate to upload the file
    await createTemplate(formData);

  } catch (error) {
    console.error("Error during file upload:", error);
    alert("File upload failed");
  }

  // Reset the file input after uploading
  target.value = "";
};
</script>

<template>
  <ContentHeader title="Шаблоны">
    <template #button>
      <div class="flex gap-2 items-center">
        <BaseButton text="Добавить Шаблон" @click="handleUploadTemplate"/>
        <div class="relative group ">
          <svg class="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 10v4m0-8h.01"/>
          </svg>

          <!-- Tooltip -->
          <div class="absolute right-2 top-5 w-64 p-2 rounded-lg text-xs text-white bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Шаблон должен содержать <b>теги</b> перечисленные ниже:
            <ul>
              <li v-for="(description, tag) in tags" :key="tag">
              <strong>{{ tag }} </strong> - {{ description }}
            </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </ContentHeader>
  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
    <TemplateCard v-for="t in templates" :template="t"/>
    <input
        type="file"
        ref="fileInput"
        class="hidden"
        accept=".doc, .docx"
        @change="onFileChange"
    />
  </main>
</template>

<style scoped>

</style>