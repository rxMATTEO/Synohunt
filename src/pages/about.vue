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
    <div class="xl:!t-px-64 xl:t-mx-20 t-px-3">
      <div class="mt-5">
        <h1 class="text-4xl font-bold text-center">
          About us
        </h1>
        <div>
          <div>
            <div class="flex mt-5 gap-3">
              <div class="t-w-3/4 bg-yellow-500 p-3">
                <h1 class="text-2xl font-bold">
                  Mission statement
                </h1>
                <div class="mt-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi consectetur debitis dignissimos doloremque earum iste libero nam pariatur, porro rem, reprehenderit totam. Accusantium enim eos iusto vel voluptatem.</p>
                </div>
              </div>
              <div class="t-w-1/4 bg-green-400 p-3">
                <h1 class="text-2xl font-bold">
                  Vision statement
                </h1>
                <div class="mt-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-3 mt-5">
            <div class="t-w-2/5 bg-blue-100 p-3">
              a
            </div>
            <div class="t-w-3/5">
              <div class="surface-ground p-3">
                b
              </div>
              <div class="bg-red-400 mt-3 p-3">
                c
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
