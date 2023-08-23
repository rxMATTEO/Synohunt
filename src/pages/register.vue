<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard'
  }
});

async function registerUser () {
  return await $fetch('/api/register', {
    method: 'POST',
    body: {
      username: username.value,
      password: password.value,
      email: email.value
    }
  });
}

const username = ref('');
const password = ref('');
const email = ref('');

</script>

<template>
  <div class="t-h-screen flex justify-content-center align-items-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
      <div class="text-center mb-5">
        <div class="t-h-32 relative top-0 flex justify-content-center">
          <img src="/img/biglogo.png" alt="Image" class="text-center mb-3 h-full overflow-hidden absolute top-0">
        </div>
        <div class="text-900 text-3xl font-medium mb-3">
          Register
        </div>
        <span class="text-600 font-medium line-height-3">Already have an account?</span>
        <NuxtLink to="login" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
          Login now!
        </NuxtLink>
      </div>

      <div>
        <label for="username" class="block text-900 font-medium mb-2">Username</label>
        <InputText id="username" v-model="username" type="text" class="w-full mb-3" />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" v-model="password" type="password" class="w-full mb-3" />

        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" v-model="email" type="text" class="w-full mb-3" />

        <div class="mt-6">
          <Button label="Register" icon="pi pi-user-plus" type="null" class="w-full" @click="registerUser" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
