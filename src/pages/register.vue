<script setup lang="ts">
import * as Buffer from 'buffer/';
import rsa from 'js-crypto-rsa';
import { useField, useForm } from 'vee-validate';
import { definePageMeta } from '#imports';
import type { JwkResponse } from '@/server/api/jwk.post';

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard'
  }
});

const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})	/;
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

const { handleSubmit, resetForm } = useForm();
const { value: password, errorMessage } = useField('value', validateField);

function validateField (value) {
  console.log(value);
  if (value.match(mediumRegex) || value.match(strongRegex)) {
    return true;
  }
  return 'Password is required.';
}

const onSubmit = handleSubmit((values) => {
  if (values.value && values.value.length > 0) {
    toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    resetForm();
  }
});

const registerUser = handleSubmit(async (values) => {
  if (!values.value && !values.value.length > 0) { return false; }
  const result = await $fetch('/api/jwk', {
    method: 'POST'
  }) as Awaited<JwkResponse>;
  const creds = Buffer.Buffer.from(JSON.stringify({ email: email.value, password: password.value, username: username.value }));
  const encrypted = JSON.stringify(await rsa.encrypt(creds, result.publicKey));
  const responseCreds = await $fetch('/api/credentials', {
    method: 'POST',
    body: {
      data: encrypted,
      id: result.id,
      email: email.value
    }
  });
  // return await $fetch('/api/register', {
  //   method: 'POST',
  //   body: {
  //     username: username.value,
  //     password: password.value,
  //     email: email.value
  //   }
  // });
});

const username = ref('');
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
        <form @submit="registerUser">
          <label for="username" class="block text-900 font-medium mb-2">Username</label>
          <InputText id="username" v-model="username" type="text" class="w-full mb-3" />

          <label for="value" class="block text-900 font-medium mb-2">Password</label>
          <Password
            id="value"
            v-model="password"
            type="text"
            :class="{ 'p-invalid': errorMessage }"
            aria-describedby="text-error"
            toggle-mask
            class="w-full mb-3"
            :pt="{
              root: {
                class: 'w-full',
              }
            }"
            input-class="w-full"
          >
            <template #header>
              <h6>Pick a password</h6>
            </template>

            <template #footer>
              <Divider />
              <p class="mt-2">
                Suggestions
              </p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
          <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>

          <label for="email" class="block text-900 font-medium mb-2">Email</label>
          <InputText id="email" v-model="email" type="text" class="w-full mb-3" />

          <div class="mt-6 prevent-tw">
            <Button label="Register" icon="pi pi-user-plus" type="submit" class="w-full" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
