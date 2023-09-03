<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';

const { status, signOut } = useAuth();

const StickyElement = defineAsyncComponent(() => import('vue-sticky-element'));
const top = ref(0);
onMounted(() => {
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      top.value = (window.scrollY);
    });
  });
});
</script>

<template>
  <StickyElement>
    <div
      :class="{
        't-bg-black t-bg-opacity-10 t-backdrop-blur-3xl': top > 0
      }"
      class="md:py-1"
    >
      <div class="2xl:!t-px-64 2xl:t-mx-20 t-px-3">
        <div class="flex t-place-content-between align-items-stretch t-items-center gap-1 h-full">
          <div>
            <NuxtLink to="/" class="font-bold t-tracking-wider h-full w-full">
              <div class="md:w-3rem h-full max-md:t-w-16 t-flex justify-content-center align-items-center max-md:t-flex-col">
                <NuxtImg
                  format="webp"
                  class=""
                  src="/favicon.ico"
                  alt="logo"
                  width="40"
                  height="40"
                />
                <p class="max-md:!t-hidden">
                  SynoHunt
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="flex max-md:t-flex-col md:align-items-center">
            <div class="flex max-md:t-flex-col">
              <NuxtLink
                to="/dashboard"
                class="mr-3 hover:text-primary transition-colors t-duration-300"
              >
                Dashboard
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="mr-3 hover:text-primary transition-colors t-duration-300"
              >
                About us
              </NuxtLink>
            </div>
            <div class="flex max-md:t-flex-col">
              <NuxtLink
                to="/contact"
                class="mr-3 hover:text-primary transition-colors t-duration-300"
              >
                Contact us
              </NuxtLink>
            </div>
          </div>
          <div class="flex align-items-center">
            <ChangeThemeButton class="mr-3 md:mr-5 vertical-align-middle" />
            <div class="">
              <div v-if="status === 'unauthenticated'" class="flex max-md:t-flex-col">
                <NuxtLink to="/login" class="block md:mr-3">
                  <Button
                    class="text-white t-border-0 bg-blue-400 w-full"
                    label="Login"
                    :type="null"
                    size="small"
                  />
                </NuxtLink>
                <NuxtLink to="/register" class="block">
                  <Button
                    size="small"
                    class="text-white max-md:t-mt-2 t-border-0 bg-indigo-500"
                    label="Register"
                    :type="null"
                  />
                </NuxtLink>
              </div>
              <div v-else class="flex align-items-center max-md:t-flex-col">
                <NuxtLink to="/dashboard" class="block max-md:t-w-full">
                  <Button
                    class="text-white t-border-0 bg-indigo-500 w-full"
                    label="Play"
                    :type="null"
                  />
                </NuxtLink>

                <Button
                  class="text-white max-md:t-mt-2 t-border-0 bg-indigo-500 md:ml-3"
                  label="Sign out"
                  :type="null"
                  @click="signOut"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StickyElement>
</template>

<style scoped lang="sass">

</style>
