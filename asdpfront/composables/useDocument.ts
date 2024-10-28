
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

  const fetchDocument = async (docName, documentId: string) => {
    try {
      const response = await getDocument(documentId);
      const blob = response.data;

      const fileData = new File([blob], docName, { type: blob.type });

      console.log('File downloaded successfully:', fileData);
      return fileData;
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchTemplate = async (templateName, templateId: string) => {
    try {
      const response =  await getTemplate(templateId);
      const blob = response.data;

      const fileData = new File([blob], templateName, { type: blob.type });

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

  const handleGenerateDocument = async (data, filename) => {
    try {
      const response = await generateDocument(data);
      console.log(response)
      const blob = response.data;
      // const contentDisposition = response.headers['content-disposition'];
      //
      // if (contentDisposition) {
      //   // Ищем имя файла в заголовке
      //   const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
      //   if (filenameMatch.length > 1) {
      //     filename = filenameMatch[1];
      //   }
      // }

      const fileData = new File([blob], filename, { type: blob.type });

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
