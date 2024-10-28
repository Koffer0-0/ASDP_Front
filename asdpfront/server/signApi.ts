
import axios from 'axios';
import {API_SIGN_ENDPOINT} from "~/constants/consts";

export const getSignPipelines = async (userId) => {
    try {
        const response = await axios.get(`${API_SIGN_ENDPOINT}/createdSignPipelines?userId=${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signDocument = async (payload) => {
    try {
        const response = await axios.post(`${API_SIGN_ENDPOINT}/signDocument`, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerSignPipeline = async (UserId, GeneratedDocument, TeamleadId, DirectorId, SigexDocumentId, SigexSignId) => {
    try {
        // Create a FormData instance to handle multipart data
        const formData = new FormData();
        formData.append('UserId', UserId);
        formData.append('GeneratedDocument', GeneratedDocument); // Pass the binary file directly
        formData.append('TeamleadId', TeamleadId);
        formData.append('DirectorId', DirectorId);
        formData.append('SigexDocumentId', SigexDocumentId);
        formData.append('SigexSignId', SigexSignId);

        // Make the POST request with multipart/form-data
        const response = await axios.post(`${API_SIGN_ENDPOINT}/registerSignPipeline`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsToSign = async (userId) => {
    try {
        const response = await axios.get(`${API_SIGN_ENDPOINT}/documentsToSign?userId=${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
