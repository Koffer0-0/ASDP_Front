
import { ref } from 'vue';
import { getEmployeeByIin } from "@/server/authApi";

export function useAuth() {
  const user = ref(null);
  const error = ref(null);

  const fetchEmployeeByIin = async (iin: string) => {
    try {
      const response = await getEmployeeByIin(iin);
      if (response.status === 204) {
        return null;
      }
      if (response.status === 200) {
        user.value = response.data;
      }
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
