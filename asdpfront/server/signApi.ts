
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API + 'Sign';

export const getSignPipelines = async () => {
    try {
        const response = await axios.get(`${API_URL}/createdSignPipelines`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signDocument = async (templateData: FormData) => {
    try {
        const response = await axios.post(`${API_URL}/signDocument`, templateData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerSignPipeline = async (templateData: FormData) => {
    try {
        const response = await axios.post(`${API_URL}/registerSignPipeline`, templateData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsToSign = async () => {
    try {
        const response = await axios.get(`${API_URL}/documentsToSign`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
