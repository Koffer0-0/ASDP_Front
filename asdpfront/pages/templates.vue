<script setup lang="ts">
import { useDocument } from "~/composables/useDocument";

const {fetchTemplates, templates, createTemplate} = useDocument()

const fileInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  fetchTemplates()
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
      <BaseButton text="Добавить Шаблон" @click="handleUploadTemplate"/>
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