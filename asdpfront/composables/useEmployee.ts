
import { ref } from 'vue';
import {
  getDirectors,
  getEmployees,
  getPermissions,
  getPositions,
  getTeamleaders,
  registerEmployee
} from '@/server/employeeApi';

export function useEmployee() {
  const employees = ref([]);
  const positions = ref([]);
  const teamleaders = ref([]);
  const directors = ref([]);
  const permissions = ref([]);
  const error = ref(null);

  const fetchEmployees = async () => {
    try {
      employees.value = await getEmployees();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchPermissions = async () => {
    try {
      permissions.value = await getPermissions();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchPositions = async () => {
    try {
      positions.value = await getPositions();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchTeamleaders = async () => {
    try {
      teamleaders.value = await getTeamleaders();
    } catch (err) {
      error.value = err.message;
    }
  };

  const fetchDirectors = async () => {
    try {
      directors.value = await getDirectors();
    } catch (err) {
      error.value = err.message;
    }
  };

  const addEmployee = async (newEmployee: any) => {
    try {
      await registerEmployee(newEmployee);
      await fetchEmployees();
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    employees,
    permissions,
    directors,
    positions,
    teamleaders,
    error,
    fetchEmployees,
    fetchPositions,
    fetchTeamleaders,
    fetchDirectors,
    fetchPermissions,
    addEmployee
  };
}
