
import axios from 'axios';
import {API_DOCUMENTS_ENDPOINT} from "~/constants/consts";

export const loadTemplates = async () => {
  try {
    const response = await axios.get(`${API_DOCUMENTS_ENDPOINT}/loadTemplates`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTemplate = async (templateData: FormData) => {
  try {
    const response = await axios.post(`${API_DOCUMENTS_ENDPOINT}/addTemplate`, templateData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const generateDocument = async (data) => {
  try {
    const response = await axios.post(`${API_DOCUMENTS_ENDPOINT}/generateDocument`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getDocument = async (documentId: string) => {
  try {
    const response = await axios.get(`${API_DOCUMENTS_ENDPOINT}/getDocument/${documentId}`, {
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTemplate = async (templateId: string) => {
  try {
    const response = await axios.get(`${API_DOCUMENTS_ENDPOINT}/getTemplate/${templateId}`, {
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTags = async () => {
  try {
    return await axios.get(`${API_DOCUMENTS_ENDPOINT}/tags`)
  } catch (error) {
    throw error;
  }
};
