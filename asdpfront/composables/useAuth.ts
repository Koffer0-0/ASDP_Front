
import { ref } from 'vue';
import { getEmployeeByIin } from "@/server/authApi";

export function useAuth() {
  const user = ref(null);
  const error = ref(null);

  const fetchEmployeeByIin = async (name, surname, iin: string) => {
    try {
      const response = await getEmployeeByIin(iin);
      console.log(response)
      if (response.status === 204) {
        await navigateTo({name: 'register', query: {email: "", iin: iin, name: name, surname: surname}});
      }
      if (response.status === 200) {
        user.value = response.data;
        await navigateTo({name: 'index'})
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
