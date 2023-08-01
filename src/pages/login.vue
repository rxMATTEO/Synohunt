<script setup lang="ts">
import {definePageMeta, useAuth} from '../../.nuxt/imports';
import {ref} from 'vue';

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  }
});

const { status, data, signIn, signOut } = useAuth();
const isRememberingMe = ref(false);

async function auth(){
  await signIn('github', {callbackUrl: 'http://localhost:3000/dashboard'});
}
</script>

<template>
  <div class="t-h-screen flex justify-content-center align-items-center">
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <div class="t-h-32 relative top-0 flex justify-content-center">
        <img src="/img/biglogo.png" alt="Image" class="text-center mb-3 h-full overflow-hidden absolute top-0">
      </div>
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <NuxtLink to="register" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</NuxtLink>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email1" type="text" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password1" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="rememberme1" :binary="true" v-model="isRememberingMe" class="mr-2"></Checkbox>
          <label for="rememberme1">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>

      <Button label="Sign In" icon="pi pi-user" type="null" class="w-full" @click="auth"></Button>
    </div>
  </div>
  </div>
</template>

<style scoped lang="sass">

</style>