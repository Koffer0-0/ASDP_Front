
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API;

export const getEmployeeByIin = async (iin: string) => {
  try {
    const response = await axios.get(`${API_URL}Authorize/getEmployeeByIin?iin=${iin}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
