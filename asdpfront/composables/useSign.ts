
import { ref } from 'vue';
import {getSignPipelines, signDocument, registerSignPipeline, getDocumentsToSign} from '@/server/signApi';
import {formatDate} from "compatx";

export function useSign() {
  const documents = ref([]);
  const pipelines = ref([]);
  const error = ref(null);

  const fetchPipelines = async (userId) => {
    try {
      const response = await getSignPipelines(userId);
      pipelines.value = response.map(item => ({
        ...item,
        createdDate: formatDate(item.createdDate),
      }));
    } catch (err) {
      error.value = err.message;
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }) + ' г.';
  }

  const fetchDocumentsToSign = async (userId) => {
    try {
      const response = await getDocumentsToSign(userId);
      documents.value = response.map(item => ({
        ...item,
        createdDate: formatDate(item.createdDate),
      }));
    } catch (err) {
      error.value = err.message;
    }
  };

  const handleSignDocument = async (payload) => {
    try {
      return await signDocument(payload);
    } catch (err) {
      error.value = err.message;
    }
  };

  const registerPipeline = async (UserId, GeneratedDocument, TeamleadId, DirectorId, SigexDocumentId, SigexSignId) => {
    try {
      return await registerSignPipeline(UserId, GeneratedDocument, TeamleadId, DirectorId, SigexDocumentId, SigexSignId);
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
