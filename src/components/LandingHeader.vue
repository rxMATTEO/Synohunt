<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';

const { status } = useAuth();

const StickyElement = defineAsyncComponent(() => import('vue-sticky-element'));
const top = ref(0);
onMounted(async () => {
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
    >
      <div class="2xl:!t-px-64 2xl:t-mx-20 t-px-3">
        <div class="flex t-place-content-between t-items-center gap-1 h-full">
          <div>
            <NuxtLink to="/" class="font-bold t-tracking-wider h-full w-full">
              <div class="md:w-3rem h-full max-md:t-w-16 flex align-items-center max-md:t-flex-col">
                <img class="w-full h-full" src="/favicon.ico" alt="logo">
                <p>SynoHunt</p>
              </div>
            </NuxtLink>
          </div>
          <div class="md:flex">
            <div>
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
            <div>
              <NuxtLink
                to="/"
                class="mr-3 hover:text-primary transition-colors t-duration-300"
              >
                Services
              </NuxtLink>
              <NuxtLink
                to="/"
                class="mr-3 hover:text-primary transition-colors t-duration-300"
              >
                Blog
              </NuxtLink>
            </div>
          </div>
          <div class="flex max-md:t-flex-col">
            <ChangeThemeButton class="mr-5 vertical-align-middle max-md:t-mb-2" />
            <div class="">
              <div v-if="status === 'unauthenticated'" class="flex max-md:t-flex-col">
                <NuxtLink to="/login" class="block md:mr-3">
                  <Button
                    class="text-white t-border-0 bg-blue-400 w-full"
                    label="Login"
                    :type="null"
                  />
                </NuxtLink>
                <NuxtLink to="/register" class="block">
                  <Button
                    class="text-white max-md:t-mt-2 t-border-0 bg-indigo-500"
                    label="Register"
                    :type="null"
                  />
                </NuxtLink>
              </div>
              <div v-else>
                <NuxtLink to="/dashboard" class="block">
                  <Button
                    class="text-white max-md:t-mt-2 t-border-0 bg-indigo-500"
                    label="Play"
                    :type="null"
                  />
                </NuxtLink>
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
