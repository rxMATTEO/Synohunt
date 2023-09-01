<script setup lang="ts">
import * as Buffer from 'buffer/';
import rsa from 'js-crypto-rsa';
import { useField, useForm } from 'vee-validate';
import { OAuthProviderType } from 'next-auth/providers/oauth-types';
import { definePageMeta } from '#imports';
import type { JwkResponse } from '@/server/api/jwk.post';
import validateWeakness, { emailRegex } from '@/composables/validator';

useHead({
  title: 'Register'
});

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard'
  }
});

const router = useRouter();
const mediumRegex =
  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

const { handleSubmit, resetForm } = useForm();
const { value: password, errorMessage } = useField('password', value =>
  validateWeakness(
    value,
    'Password',
    'Password is weak',
    mediumRegex,
    strongRegex
  )
);
const { value: email, errorMessage: errorMailMessage } = useField(
  'email',
  value => validateWeakness(value, 'Email', 'Email is not valid', emailRegex)
);
const { value: username, errorMessage: errorUsernameMessage } = useField(
  'username',
  value => validateWeakness(value, 'Username')
);
const isCompleted = ref(false);
const isVisible = ref(false);
const registerUser = handleSubmit(async ({ email, password, username }) => {
  isVisible.value = true;
  const result = (await $fetch('/api/jwk', {
    method: 'POST'
  })) as Awaited<JwkResponse>;
  const creds = Buffer.Buffer.from(
    JSON.stringify({ email, password, username })
  );
  const encrypted = JSON.stringify(await rsa.encrypt(creds, result.publicKey));
  const responseCreds = await $fetch('/api/credentials', {
    method: 'POST',
    body: {
      data: encrypted,
      id: result.id,
      email
    }
  }).then(() => {
    isCompleted.value = true;
  });
});

function afterComplete () {
  router.push('/login');
}

const { signIn } = useAuth();
const isLoading = ref(false);
async function authViaProvider (
  provider: OAuthProviderType
) {
  isLoading.value = true;
  await signIn(provider, {
    callbackUrl: import.meta.env.VITE_AUTH_ORIGIN + 'dashboard'
  });
  isLoading.value = false;
}
</script>

<template>
  <div class="t-h-screen flex justify-content-center align-items-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4 relative">
      <LazyCircleLoader
        :on-complete-message="{ bottomText:'You will be redirected to login page', header: 'Success' }"
        :on-load-message="{ bottomText:'Wait a bit', header: 'Processing' }"
        :visible="isVisible"
        :completed="isCompleted"
        @complete="afterComplete"
      />
      <div class="text-center mb-5">
        <div class="t-h-32 relative top-0 flex justify-content-center">
          <img
            src="/img/biglogo.png"
            alt="Image"
            class="text-center mb-3 h-full overflow-hidden absolute top-0"
          >
        </div>
        <div class="text-900 text-3xl font-medium mb-3">
          Register
        </div>
        <span class="text-600 font-medium line-height-3">Already have an account?</span>
        <NuxtLink
          to="login"
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >
          Login now!
        </NuxtLink>
      </div>

      <div class="auth-method">
        <Button
          label="Register via Github"
          icon="pi pi-github"
          type="null"
          :loading="isLoading"
          @click="authViaProvider('github')"
        />
      </div>

      <Divider align="center">
        <b>OR</b>
      </Divider>

      <div>
        <form @submit="registerUser">
          <label
            for="username"
            class="block text-900 font-medium mb-2"
          >Username</label>
          <InputText
            id="username"
            v-model="username"
            :class="{ 'p-invalid': errorUsernameMessage }"
            type="text"
            class="w-full"
          />
          <small id="text-error" class="p-error">{{
            errorUsernameMessage || "&nbsp;"
          }}</small>

          <label
            for="password"
            class="block text-900 font-medium mb-2"
          >Password</label>
          <Password
            id="value"
            v-model="password"
            :medium-regex="'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'"
            :strong-regex="'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'"
            type="text"
            :class="{ 'p-invalid': errorMessage }"
            aria-describedby="text-error"
            toggle-mask
            class="w-full"
            :pt="{
              root: {
                class: 'w-full',
              },
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
          <small id="text-error" class="p-error">{{
            errorMessage || "&nbsp;"
          }}</small>

          <label
            for="email"
            class="block text-900 font-medium mb-2"
          >Email</label>
          <InputText
            id="email"
            v-model="email"
            aria-describedby="text-error"
            :class="{ 'p-invalid': errorMailMessage }"
            type="text"
            class="w-full"
          />
          <small id="text-error" class="p-error">{{
            errorMailMessage || "&nbsp;"
          }}</small>

          <div class="mt-6 prevent-tw">
            <Button
              label="Register"
              icon="pi pi-user-plus"
              type="submit"
              class="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@use '../assets/main' as main

</style>
