<script setup lang="ts">
definePageMeta({
  layout: 'full-screen'  // Specify the full-screen layout
});
</script>

<template>
  <div class="blob-bg w-full flex items-center justify-center">
    <div class="mx-auto max-w-2xl">
      <form action="#" class="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-10 lg:p-12">
        <h1 class="text-center text-2xl font-bold text-black sm:text-3xl">Create an Account</h1>
        <p class="mx-auto px-10 max-w-md text-sm text-center text-gray-500">Create account to continue </p>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
          <div class="relative">
            <input
                type="email"
                class="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
            />
          </div>
        </div>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Username</label>
          <div class="relative">
            <input
                type="text"
                class="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
            />
          </div>
        </div>

        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Password</label>

          <div class="relative">
            <input
                type="password"
                class="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
            />
          </div>
        </div>

        <button
            type="submit"
            class="block w-full rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>

        <p class="text-center text-gray-500">
          Have account?
          <a class="underline text-blue-500" href="/login">Login</a>
        </p>
      </form>
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