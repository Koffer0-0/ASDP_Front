
import axios from 'axios';
import {API_SIGN_ENDPOINT} from "~/constants/consts";

export const getSignPipelines = async () => {
    try {
        const response = await axios.get(`${API_SIGN_ENDPOINT}/createdSignPipelines`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signDocument = async (templateData: FormData) => {
    try {
        const response = await axios.post(`${API_SIGN_ENDPOINT}/signDocument`, templateData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerSignPipeline = async (templateData: FormData) => {
    try {
        const response = await axios.post(`${API_SIGN_ENDPOINT}/registerSignPipeline`, templateData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsToSign = async () => {
    try {
        const response = await axios.get(`${API_SIGN_ENDPOINT}/documentsToSign`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
