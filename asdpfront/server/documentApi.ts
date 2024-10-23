
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API + 'Documents';

export const loadTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/loadTemplates`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTemplate = async (templateData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/addTemplate`, templateData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDocument = async (documentId: string) => {
  try {
    const response = await axios.get(`${API_URL}/getDocument/${documentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTemplate = async (templateId: string) => {
  try {
    const response = await axios.get(`${API_URL}/getTemplate/${templateId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
