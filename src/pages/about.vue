<script setup lang="ts">
import { definePageMeta } from '#imports';
import Footer from '@/layouts/footer.vue';

useHead({
  title: 'About us',
  meta: [
    { name: 'description', content: 'About Synohunt' }
  ]
});

definePageMeta({
  auth: false
});
</script>

<template>
  <!--  todo figure out mb no layout-->
  <!--  <NuxtLayout name="header-n-sidebar">-->
  <div>
    <LandingHeader />
    <div class="2xl:!t-px-64 2xl:t-mx-20 t-px-3 max-w-full h-full">
      <div class="mt-5">
        <h1 class="text-6xl font-bold text-center">
          About Synohunt
        </h1>
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
          <div class="mb-3 font-bold text-2xl">
            <span class="text-900">One Game, </span>
            <span class="text-indigo-600">Many Advantages</span>
          </div>
          <div class="text-700 text-sm mb-6">
            This engaging and educational game offers an immersive experience where players can explore the richness of language, enhance their word knowledge, and compete with friends and players from around the world
          </div>
          <div class="grid">
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-user text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                Built for People
              </div>
              <span class="text-700 text-sm line-height-3">Explore a library of user-generated challenges, where players can post their own creations for others to enjoy. Challenge your friends or take on the best challenges from the SynoHunt community.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                End-to-End Encryption
              </div>
              <span class="text-700 text-sm line-height-3">We are providing strong server encryption for your data, so yo can feel save about your data</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                Easy to Use
              </div>
              <span class="text-700 text-sm line-height-3">With a user-friendly interface and a vast database of words and synonyms, our online browser game offers endless hours of fun and learning. Join a vibrant community of language enthusiasts, compete for the top spot on the leaderboard, and discover just how expansive your vocabulary can be.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                Fast & Global Support
              </div>
              <span class="text-700 text-sm line-height-3">Synohunt supports 2 languages, and we are goin up for more</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                Open Source
              </div>
              <span class="text-700 text-sm line-height-3">We are opened to your contributions. Feel free to open issues and pull requests via Github</span>
            </div>
            <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-book text-4xl text-indigo-500" />
              </span>
              <div class="text-900 mb-3 font-medium">
                Educational gaming
              </div>
              <span class="text-700 text-sm line-height-3">In this immersive online gaming experience, you'll have the opportunity to not only enhance your language skills but also showcase your creativity. Create custom challenges with words of your choice and post them for other users to solve. </span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
