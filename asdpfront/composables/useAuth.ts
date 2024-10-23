
import { ref } from 'vue';
import { getEmployeeByIin } from "@/server/employeeApi";

export function useAuth() {
  const user = ref(null);
  const error = ref(null);

  const fetchEmployeeByIin = async (iin: string) => {
    try {
      user.value = await getEmployeeByIin(iin);
    } catch (err) {
      error.value = err.message;
    }
  };

  const logoutUser = async () => {
    try {
      user.value = null;
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    user,
    error,
    logoutUser,
    fetchEmployeeByIin
  };
}
