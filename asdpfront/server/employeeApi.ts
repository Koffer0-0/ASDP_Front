
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API + 'Employees';


export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerEmployee = async (employeeData: any) => {
  try {
    const response = await axios.post(`${API_URL}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDirectors = async () => {
  try {
    const response = await axios.get(`${API_URL}/directors`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPermissions = async () => {
  try {
    const response = await axios.get(`${API_URL}/permissions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get(`${API_URL}/positions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTeamleaders = async () => {
  try {
    const response = await axios.get(`${API_URL}/teamleaders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

