
import { ref } from 'vue';
import {loadTemplates, addTemplate, getDocument, getTemplate, generateDocument} from '@/server/documentApi';

export function useDocument() {
  const templates = ref([]);
  const document = ref(null);
  const template = ref(null);
  const error = ref(null);

  const fetchTemplates = async () => {
    try {
      templates.value = await loadTemplates();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchDocument = async (documentId: string) => {
    try {
      document.value = await getDocument(documentId);
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchTemplate = async (templateId: string) => {
    try {
      const response =  await getTemplate(templateId);
      const blob = response.data;
      const fileData = new File([blob], 'template.docx', { type: blob.type });

      console.log('File downloaded successfully:', fileData);
      return fileData;
    } catch (err) {
      error.value = err.message;
    }
  };

  const createTemplate = async (newTemplate: FormData) => {
    try {
      await addTemplate(newTemplate);
      await fetchTemplates();
    } catch (err) {
      error.value = err.message;
    }
  };

  const handleGenerateDocument = async (data) => {
    try {
      const response = await generateDocument(data);
      const blob = response.data;
      const fileData = new File([blob], 'template.docx', { type: blob.type });

      console.log('File downloaded successfully:', fileData);
      return fileData;
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    templates,
    document,
    template,
    error,
    fetchTemplates,
    fetchDocument,
    fetchTemplate,
    createTemplate,
    handleGenerateDocument
  };
}
