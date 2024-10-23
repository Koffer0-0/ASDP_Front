
import { ref } from 'vue';
import {getSignPipelines, signDocument, registerSignPipeline, getDocumentsToSign} from '@/server/signApi';

export function useSign() {
  const documents = ref([]);
  const pipelines = ref([]);
  const error = ref(null);

  const fetchPipelines = async () => {
    try {
      pipelines.value = await getSignPipelines();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchDocumentsToSign = async () => {
    try {
      documents.value = await getDocumentsToSign();
    } catch (err) {
      error.value = err.message;
    }
  };

  const handleSignDocument = async (newTemplate: FormData) => {
    try {
      await signDocument(newTemplate);
    } catch (err) {
      error.value = err.message;
    }
  };

  const registerPipeline = async (newTemplate: FormData) => {
    try {
      await registerSignPipeline(newTemplate);
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    pipelines,
    documents,
    error,
    fetchPipelines,
    registerPipeline,
    handleSignDocument,
    fetchDocumentsToSign
  };
}
