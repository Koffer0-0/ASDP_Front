
import axios from 'axios';
import {API_AUTHORIZE_ENDPOINT} from "~/constants/consts";

export const getEmployeeByIin = async (iin: string) => {
  try {
    const response = await axios.get(`${API_AUTHORIZE_ENDPOINT}/getEmployeeByIin?iin=${iin}`);
    return response;
  } catch (error) {
    throw error;
  }
};
