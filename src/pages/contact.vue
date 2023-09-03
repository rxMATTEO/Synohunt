<script setup lang="ts">
import { definePageMeta } from '#imports';
import Footer from '@/layouts/footer.vue';

useHead({
  title: 'About us',
  meta: [
    { name: 'description', content: 'About Synohunt' }
  ],
  link: [{
    rel: 'canonical', href: `${import.meta.env.VITE_AUTH_ORIGIN}about`
  }]
});

definePageMeta({
  auth: false
});

useSeoMeta({
  title: 'About Synohunt',
  ogTitle: 'About Synohunt',
  description: 'Learn more about Synohunt',
  ogDescription: 'Learn more about Synohunt',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}about`
});

const gmailIcon = ref('pi pi-inbox');

function copyMail () {
  window.navigator.clipboard.writeText('synohunt.here@gmail.com');
  gmailIcon.value = 'pi pi-check';
}
</script>

<template>
  <div>
    <LandingHeader />
    <div class="2xl:!t-px-64 2xl:t-mx-20 t-px-3 max-w-full h-full">
      <div class="mt-5">
        <h1 class="text-6xl font-bold text-center">
          Contact Synohunt
        </h1>
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8 text-center mt-5 t-rounded-xl">
          <div class="flex flex-wrap gap-2 align-items-center justify-content-center">
            <Button type="button" class="google" @click="copyMail">
              <span class="flex align-items-center px-2 bg-purple-700 text-white">
                <i :class="gmailIcon" />
              </span>
              <span class="px-3 py-2 flex align-items-center text-white">synohunt.here@gmail.com</span>
            </Button>
            <a href="https://github.com/rxMATTEO/Synohunt" target="_blank">
              <Button type="button" class="github">
                <span class="flex align-items-center px-2 bg-bluegray-800 text-white">
                  <i class="pi pi-github" />
                </span>
                <span class="px-3 py-2 flex align-items-center text-white">Github</span>
              </Button>
            </a>
          </div>
        </div>
        <Footer class="my-5" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.google {
  background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  border-color: var(--purple-700);
  display: flex;
  align-items: stretch;
  padding: 0;

  &:enabled:hover {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    border-color: var(--purple-700);
}

  &:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
}

.twitter {
  background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  border-color: var(--blue-500);
  padding: 0;
  display: flex;
  align-items: stretch;

  &:enabled:hover {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    border-color: var(--blue-500);
}

  &:focus {
    box-shadow: 0 0 0 1px var(--blue-200);
}
}

.github {
  background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  border-color: var(--bluegray-800);
  padding: 0;
  display: flex;
  align-items: stretch;

  &:enabled:hover {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    border-color: var(--bluegray-800);
}

  &:focus {
    box-shadow: 0 0 0 1px var(--purple-500);
}
}
</style>
