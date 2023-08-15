<template>
<!--  <div class="surface-ground">-->
    <client-only>
      <vue3d-loader
          :showFps="true"
          :height="1080"
          backgroundColor="#82C6E7"
          filePath="/img/models/ImageToStl.com_biglogo.stl"
          :rotation = "rotation"

          @load="onLoad"
      />
    </client-only>

<!--    <div class="logo-holder absolute inline-block z-1 max-w-full overflow-hidden">-->
<!--      <img src="/img/biglogo.png" class="logo relative max-w-full overflow-hidden" alt="logo">-->
<!--    </div>-->
<!--    <div class="lg:px-8 lg:mx-8 px-3 max-w-full">-->
<!--      <div class="absolute left-0 right-0">-->
<!--        <div class="w-full relative z-1">-->
<!--          <div class="main z-1 flex flex-column align-items-center justify-content-center h-screen">-->
<!--            <p class="welcome-text text-3xl text-center font-bold">-->
<!--              Unleash your word wizardry. Conquer synonyms.-->
<!--            </p>-->
<!--            <div>-->
<!--              <Button label="Play Now" rounded class="mr-3" @click="() => navigateTo('/dashboard')" />-->
<!--              <Button label="Learn More" rounded />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="h-screen text-color main-screen pt-3">-->
<!--        <p>SynoHunt</p>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="flex sm:justify-content-between sm:flex-row flex-column py-6">-->
<!--          <span class="block sm:w-5 sm:text-6xl text-4xl font-bold">SynoHunt: The Ultimate Word Challenge!</span>-->
<!--          <span class="block sm:w-5 text-lg sm:text-right mt-5 sm:mt-0">Get ready to embark on a thrilling journey through the world of synonyms. Unleash your inner linguist, and dive into a realm of words and wonders with SynoHunt.</span>-->
<!--        </div>-->

<!--        <div class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-2 lg:mt-0">-->
<!--          <div-->
<!--            style="padding: 2px; border-radius: 10px"-->
<!--          >-->
<!--            <div class="p-3 surface-card h-full flex align-items-center" style="border-radius: 8px">-->
<!--              <div class="flex align-items-center justify-content-center bg-yellow-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">-->
<!--                <i class="pi pi-fw pi-users text-2xl" />-->
<!--              </div>-->
<!--              <div class="flex-column ml-4">-->
<!--                <span class="text-900 block">Epic Synonyms</span>-->
<!--                <span class="text-600">Conquer word battles</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-2 lg:mt-0">-->
<!--          <div-->
<!--            style="padding: 2px; border-radius: 10px"-->
<!--          >-->
<!--            <div class="p-3 surface-card h-full flex align-items-center" style="border-radius: 8px">-->
<!--              <div class="flex align-items-center justify-content-center bg-yellow-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">-->
<!--                <i class="pi pi-fw pi-users text-2xl" />-->
<!--              </div>-->
<!--              <div class="flex-column ml-4">-->
<!--                <span class="text-900 block">Epic Synonyms</span>-->
<!--                <span class="text-600">Conquer word battles</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-2 lg:mt-0">-->
<!--          <div-->
<!--            style="padding: 2px; border-radius: 10px"-->
<!--          >-->
<!--            <div class="p-3 surface-card h-full flex align-items-center" style="border-radius: 8px">-->
<!--              <div class="flex align-items-center justify-content-center bg-yellow-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">-->
<!--                <i class="pi pi-fw pi-users text-2xl" />-->
<!--              </div>-->
<!--              <div class="flex-column ml-4">-->
<!--                <span class="text-900 block">Epic Synonyms</span>-->
<!--                <span class="text-600">Conquer word battles</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="mt-5">-->
<!--        <div class="inline-block sm:w-6 sm:pr-1">-->
<!--          <div class="w-full surface-card border-round-3xl pb-1">-->
<!--            <div class="img overflow-hidden h-16rem relative">-->
<!--              <img class="aspect-1/1 block w-full border-round-3xl absolute" src="/img/words.png" alt="words">-->
<!--            </div>-->
<!--            <div class="desc px-3">-->
<!--              <h1 class="text-900 text-4xl font-bold">-->
<!--                Master synonyms-->
<!--              </h1>-->
<!--              <p>Expand your vocabulary and dominate the leaderboard</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="inline-block sm:w-6 sm:pl-1 mt-3 sm:mt-0">-->
<!--          <div class="w-full surface-card border-round-3xl pb-1">-->
<!--            <div class="img overflow-hidden h-16rem relative">-->
<!--              <img class="aspect-1/1 block w-full border-round-3xl absolute" src="/img/words.png" alt="words">-->
<!--            </div>-->
<!--            <div class="desc px-3">-->
<!--              <h1 class="text-900 text-4xl font-bold">-->
<!--                Master synonyms-->
<!--              </h1>-->
<!--              <p>Expand your vocabulary and dominate the leaderboard</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="mt-5">-->
<!--        <h1 class="text-900 text-6xl sm:text-7xl font-bold">-->
<!--          Have qustions?-->
<!--        </h1>-->
<!--        <div class="flex justify-content-between flex-column sm:flex-row">-->
<!--          <div class="sm:pr-5 border-round-3xl">-->
<!--            <h1 class="text-900 text-4xl font-bold">-->
<!--              How do i start playing?-->
<!--            </h1>-->
<!--            <p>Get started by clicking the “Play” button, choose your difficulty level, and you’re ready to take on SynoHunt.</p>-->
<!--          </div>-->
<!--          <div class="sm:px-5 border-round-3xl mt-2 sm:mt-0">-->
<!--            <h1 class="text-900 text-4xl font-bold">-->
<!--              How do i start playing?-->
<!--            </h1>-->
<!--            <p>Get started by clicking the “Play” button, choose your difficulty level, and you’re ready to take on SynoHunt.</p>-->
<!--          </div>-->
<!--          <div class="sm:pl-5 border-round-3xl mt-2 sm:mt-0">-->
<!--            <h1 class="text-900 text-4xl font-bold">-->
<!--              How do i start playing?-->
<!--            </h1>-->
<!--            <p>Get started by clicking the “Play” button, choose your difficulty level, and you’re ready to take on SynoHunt.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup>
// todo add from codewars responsive background or maybe logo like nuxt
import {vue3dLoader} from "vue-3d-loader";
const rotation = ref();
rotation.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};
function onLoad() {
  rotate();
}
function rotate() {
  setInterval(() => {
    rotation.value.y -= 0.06;
    console.log('im re')
  }, 40);
}

definePageMeta({ auth: false });

</script>

<!--<style scoped lang="sass">-->
<!--//.main div-->
<!--//  flex-basis: max-content-->
<!--//-->
<!--//.logo-holder-->
<!--//  overflow: hidden-->
<!--//  width: 100%-->
<!--//  height: 100%-->
<!--//  .logo-->
<!--//    max-width: 100%-->
<!--//    max-height: 100%-->
<!--//    display: inline-block-->
<!--//    object-fit: contain-->
<!--//    object-position: center-->
<!--</style>-->
