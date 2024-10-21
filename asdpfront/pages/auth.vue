<script setup lang="ts">
import {useSigex} from "~/composables/useSigex";

definePageMeta({
  layout: 'full-screen'  // Specify the full-screen layout
});

const { auth } = useSigex()

const triggerSigexLogin = async () => {
  await auth()
}
</script>

<template>
  <div class="blob-bg w-full flex items-center justify-center">
    <div class="mx-auto max-w-lg">
      <div class="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-10 lg:p-12">
<!--        <h1 class="text-center text-2xl font-bold text-black sm:text-3xl">Login To Account</h1>-->
<!--        <p class="mx-auto mt-4 max-w-md text-sm text-center text-gray-500">Please enter your email and password to continue</p>-->
<!--        <div>-->
<!--          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>-->
<!--          <div class="relative">-->
<!--            <input-->
<!--                type="email"-->
<!--                class="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pe-12 text-sm shadow-sm"-->
<!--                placeholder="Enter email"-->
<!--            />-->

<!--            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">-->
<!--            <svg-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--                class="size-4 text-gray-400"-->
<!--                fill="none"-->
<!--                viewBox="0 0 24 24"-->
<!--                stroke="currentColor"-->
<!--            >-->
<!--              <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"-->
<!--              />-->
<!--            </svg>-->
<!--          </span>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div>-->
<!--          <div class="flex justify-between">-->
<!--            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Password</label>-->
<!--            <a class="block mb-2 text-sm text-gray-700 dark:text-white">Forget Password?</a>-->
<!--          </div>-->

<!--          <div class="relative">-->
<!--            <input-->
<!--                type="password"-->
<!--                class="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pe-12 text-sm shadow-sm"-->
<!--                placeholder="Enter password"-->
<!--            />-->

<!--            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">-->
<!--            <svg-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--                class="size-4 text-gray-400"-->
<!--                fill="none"-->
<!--                viewBox="0 0 24 24"-->
<!--                stroke="currentColor"-->
<!--            >-->
<!--              <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"-->
<!--              />-->
<!--              <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"-->
<!--              />-->
<!--            </svg>-->
<!--          </span>-->
<!--          </div>-->
<!--        </div>-->

<!--        <button-->
<!--            type="submit"-->
<!--            class="block w-full rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white"-->
<!--        >-->
<!--          Sign in-->
<!--        </button>-->

<!--        <p class="text-center text-gray-500">-->
<!--          No account?-->
<!--          <a class="underline text-blue-500" href="/register">Sign up</a>-->
<!--        </p>-->
        <button
            type="button"
            @click="triggerSigexLogin"
            class="block w-full rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white"
        >
          Войти в систему
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blob-bg {
  height: 100%;
  background-color: #5487e3;
}

.blob-bg::before {
  content: "";
  position: absolute;
  width: 100%;
  top: -200px;
  left: -300px;
  background: url('your-blob.svg') no-repeat center;
  background-size: cover;
}
</style>