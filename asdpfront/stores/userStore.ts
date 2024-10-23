// stores/user.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null); // Initial state for user data

    const saveUser = (userData) => {
        user.value = userData;
        // Optionally, save to localStorage for persistence
        if (process.client) {
            localStorage.setItem('user', JSON.stringify(userData));
        }
    };

    const loadUser = () => {
        // Load user data from localStorage if it exists
        if (process.client) {
            const userData = localStorage.getItem('user');
            if (userData) {
                user.value = JSON.parse(userData);
            }
        }
    };

    const clearUser = () => {
        user.value = null;
        // Optionally, remove from localStorage
        if (process.client) {
            localStorage.removeItem('user');
        }
    };

    return {
        user,
        saveUser,
        loadUser,
        clearUser,
    };
});
