
import { ref } from 'vue';
import {getSignPipelines, signDocument, registerSignPipeline, getDocumentsToSign} from '@/server/signApi';

export function useSign() {
  const documents = ref([]);
  const pipelines = ref([]);
  const error = ref(null);

  const fetchPipelines = async (userId) => {
    try {
      pipelines.value = await getSignPipelines(userId);
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

  const registerPipeline = async (UserId, GeneratedDocument, TeamleadId, DirectorId, SigexDocumentId, SigexSignId) => {
    try {
      await registerSignPipeline(UserId, GeneratedDocument, TeamleadId, DirectorId, SigexDocumentId, SigexSignId);
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
