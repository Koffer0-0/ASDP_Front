
import axios from 'axios';
import {API_EMPLOYEES_ENDPOINT} from "~/constants/consts";

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_EMPLOYEES_ENDPOINT}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerEmployee = async (employeeData: any) => {
  try {
    const response = await axios.post(`${API_EMPLOYEES_ENDPOINT}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDirectors = async () => {
  try {
    const response = await axios.get(`${API_EMPLOYEES_ENDPOINT}/directors`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPermissions = async () => {
  try {
    const response = await axios.get(`${API_EMPLOYEES_ENDPOINT}/permissions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get(`${API_EMPLOYEES_ENDPOINT}/positions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTeamleaders = async () => {
  try {
    const response = await axios.get(`${API_EMPLOYEES_ENDPOINT}/teamleaders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

