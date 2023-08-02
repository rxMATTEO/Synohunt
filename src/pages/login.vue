<script setup lang="ts">
const {signIn, status, data} = useAuth();
import {ref} from 'vue';
import {OAuthProviderType} from 'next-auth/providers/oauth-types';

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  },
});

const isRememberingMe = ref(false);

const email = ref('');
const password = ref('');

function sign(){
  console.log(status, data);
  // return;
  console.log(email, password);
  signIn('credentials', { email: email.value, password: password.value, callbackUrl: '/dashboard' });
}

async function authViaProvider(provider: OAuthProviderType){
  await signIn(provider, {callbackUrl: 'http://localhost:3000/dashboard'});
}
</script>

<template>
  <div class="t-h-screen flex justify-content-center align-items-center">
  <div class="surface-card p-4 shadow-2 border-round lg:w-4">
    <div class="text-center mb-5">
      <div class="t-h-32 relative top-0 flex justify-content-center">
        <img src="/img/biglogo.png" alt="Image" class="text-center mb-3 h-full overflow-hidden absolute top-0">
      </div>
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <NuxtLink to="register" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</NuxtLink>
    </div>

    <div class="auth-method">
      <Button label="Login via Github" icon="pi pi-github" type="null" @click="authViaProvider('github')"/>
    </div>

    <Divider align="center">
      <b>OR</b>
    </Divider>

      <form @submit.prevent>
    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText required v-model="email" id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText required v-model="password" id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="isRememberingMe" class="mr-2"></Checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" type="null" class="w-full" @click="sign"></Button>
    </div>
      </form>
  </div>
  </div>
</template>

<style scoped lang="sass">

</style>