<script setup lang="ts">
import { ref } from 'vue';
import { OAuthProviderType } from 'next-auth/providers/oauth-types';
import Buffer from 'buffer/';
import rsa from 'js-crypto-rsa';
import { useField, useForm } from 'vee-validate';
import type { PublicKeyResponse } from '@/server/api/publicKey.post';
import validateWeakness, { emailRegex } from '@/composables/validator';

useHead({
  title: 'Login'
});

const config = useRuntimeConfig();
const { signIn, status, data } = useAuth();

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard'
  }
});

const isRememberingMe = ref(false);

const { setErrors, handleSubmit, resetForm } = useForm();
const { value: email, errorMessage: errorMailMessage } = useField(
  'email1',
  value => validateWeakness(value, 'Email')
);
const { value: password, errorMessage: errorPasswordMessage } = useField(
  'password1',
  value => validateWeakness(value, 'Password')
);

type Credentials = {
  email: string;
  password: string;
};
async function authViaProvider (
  provider: OAuthProviderType,
  extraOptions?: Credentials
) {
  isLoading.value = true;
  if (provider === 'credentials') {
    const { publicKey }: PublicKeyResponse = await $fetch('/api/publicKey', {
      method: 'POST',
      body: {
        email: email.value
      }
    });
    if (!publicKey) {
      // here like errors or validate :D
      setErrors({ email1: 'Invalid email/password', password1: 'Invalid email/password' });
    } else {
      const buffer = Buffer.Buffer.from(JSON.stringify({ email: email.value, password: password.value }));
      const parsedPublicKey = JSON.parse(publicKey);
      const encrypted = JSON.stringify(await rsa.encrypt(buffer, parsedPublicKey));

      await signIn(provider, {
        callbackUrl: config.public.AUTH_ORIGIN + 'dashboard',
        email: email.value,
        creds: encrypted
      });
    }
  } else {
    await signIn(provider, {
      callbackUrl: config.public.AUTH_ORIGIN + 'dashboard'
    });
  }
  isLoading.value = false;
}
// todo WTH IS THAT BRUH
const a = handleSubmit((e, params) => {
  params.evt.callback();
});
const isLoading = ref(false);
</script>

<template>
  <div class="t-h-screen flex justify-content-center align-items-center">
    <div class="surface-card p-4 shadow-2 border-round lg:w-4">
      <div class="text-center mb-5">
        <div class="t-h-32 relative top-0 flex justify-content-center">
          <img
            src="/img/biglogo.png"
            alt="Image"
            class="text-center mb-3 h-full overflow-hidden absolute top-0"
          >
        </div>
        <div class="text-900 text-3xl font-medium mb-3">
          Welcome Back
        </div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <NuxtLink
          to="register"
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >
          Create today!
        </NuxtLink>
      </div>

      <div class="auth-method">
        <Button
          label="Login via Github"
          icon="pi pi-github"
          type="null"
          @click="authViaProvider('github')"
        />
      </div>

      <Divider align="center">
        <b>OR</b>
      </Divider>

      <form
        @submit.prevent="a({callback: () => authViaProvider('credentials', { email, password })})"
      >
        <div>
          <label
            for="email1"
            class="block text-900 font-medium mb-2"
          >Email</label>
          <InputText
            id="email1"
            v-model="email"
            type="text"
            :class="{ 'p-invalid': errorMailMessage }"
            class="w-full"
          />
          <small id="text-error" class="p-error">{{
            errorMailMessage || "&nbsp;"
          }}</small>

          <label
            for="password1"
            class="block text-900 font-medium mb-2"
          >Password</label>
          <InputText
            id="password1"
            v-model="password"
            type="password"
            class="w-full"
            :class="{ 'p-invalid': errorPasswordMessage }"
            aria-describedby="text-error"
          />
          <small id="text-error" class="p-error">{{
            errorPasswordMessage || "&nbsp;"
          }}</small>

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <Checkbox
                id="rememberme1"
                v-model="isRememberingMe"
                :binary="true"
                class="mr-2"
              />
              <label for="rememberme1">Remember me</label>
            </div>
            <!--            <a-->
            <!--              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"-->
            <!--            >Forgot password?</a>-->
          </div>

          <div class="prevent-tw">
            <Button
              label="Sign In"
              icon="pi pi-user"
              :loading="isLoading"
              type="submit"
              class="w-full"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
