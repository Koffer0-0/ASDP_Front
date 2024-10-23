
import { ref } from 'vue';
import {loadTemplates, addTemplate, getDocument, getTemplate} from '@/server/documentApi';

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
      template.value = await getTemplate(templateId);
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

  return {
    templates,
    document,
    template,
    error,
    fetchTemplates,
    fetchDocument,
    fetchTemplate,
    createTemplate
  };
}
