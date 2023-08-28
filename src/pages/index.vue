<template>
  <div class="surface-ground">
    <div class="h-screen t-max-h-screen">
      <div class="text-color py-3 absolute right-0 left-0" />
      <LandingHeader class="fixed left-0 right-0 top-0 t-z-50" />
      <div class="lg:!t-px-64 lg:t-mx-20 t-px-3 max-w-full h-full surface-ground">
        <div class="h-full">
          <div class="flex h-full align-items-center">
            <div class="md:t-w-1/2 relative t-z-30">
              <div
                class="main z-1 flex flex-column align-items-start justify-content-center"
              >
                <p class="t-uppercase t-tracking-wider text-indigo-300">
                  somelabel!
                </p>
                <p
                  class="welcome-text text-2xl md:text-6xl text-left font-bold capitalize mt-3"
                >
                  Unleash your word wizardry and conquer synonyms with
                  <span class="gradient-primary text">Synohunt</span>
                </p>
                <div class="mt-5">
                  <p>
                    Get ready to embark on a thrilling journey through the world
                    of synonyms and unleash your inner linguist, and dive into a
                    realm of words and wonders with SynoHunt.
                  </p>
                </div>
                <div class="mt-5">
                  <Button
                    label="Play Now"
                    class="mr-3 gradient-indigo t-border-transparent text-white"
                    @click="() => navigateTo('/dashboard')"
                  />
                  <Button
                    label="Learn More"
                    class="t-border-0"
                    :type="null"
                    outlined
                  />
                </div>
              </div>
            </div>
            <div
              class="logo-holder absolute inline-block z-1 max-w-full overflow-hidden right-0"
            >
              <LazyModelLoader3D class="t-z-[20] relative right-0 top-20" />
            </div>
          </div>
        </div>
      </div>
      <div class=" t-px-3 max-w-full surface-ground">
        <div class="lg:!t-px-64 lg:t-mx-20">
          <div class="flex gap-5 max-md:t-flex-wrap">
            <div
              class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
            >
              <p class="text-center vertical-align-top text-3xl font-bold">
                100
              </p>
              <p class="text-center uppercase text-color-secondary">
                Challenges
              </p>
            </div>
            <div
              class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
            >
              <p class="text-center vertical-align-top text-3xl font-bold">
                100
              </p>
              <p class="text-center uppercase text-color-secondary">
                Challenges
              </p>
            </div>
            <div
              class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
            >
              <p class="text-center vertical-align-top text-3xl font-bold">
                100
              </p>
              <p class="text-center uppercase text-color-secondary">
                Challenges
              </p>
            </div>
            <div
              class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
            >
              <p class="text-center vertical-align-top text-3xl font-bold">
                100
              </p>
              <p class="text-center uppercase text-color-secondary">
                Challenges
              </p>
            </div>
          </div>

          <div
            class="flex gap-5 t-mt-40 t-place-content-between flex-column md:flex-row"
          >
            <div class="md:t-w-1/2">
              <img
                class="block w-full md:t-max-w-[66%] max-h-full"
                src="/img/biglogo.png"
              >
            </div>
            <div class="md:t-w-1/2 max-md:t-text-center">
              <p class="uppercase text-primary font-bold">
                Explore latest vision!
              </p>
              <p class="capitalize text-5xl mt-3 font-bold">
                <span class="gradient-primary text">Launch your</span> brand to
                new heights.
              </p>
              <div class="mt-5 text-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur autem consectetur harum incidunt libero quis
                  voluptates voluptatibus? Alias, aperiam blanditiis deserunt
                  dolores, ducimus eum natus, optio rem repellat vel voluptatem.
                </p>
                <br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur autem consectetur harum incidunt libero quis
                  voluptates voluptatibus? Alias, aperiam blanditiis deserunt
                  dolores, ducimus eum natus, optio rem repellat vel voluptatem.
                </p>
                <div class="mt-5">
                  <Button
                    label="Upcoming sales"
                    class="animated-gradient-rainbow t-border-0 text-white"
                    :type="null"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-5 relative justify-content-between md:flex-row flex-column align-items-center">
            <CardExpandingGlow header="Advantages" main-text="loremlorasddddd dddddddddddddddd demloremloreml oremloremloloremlo remloremremlorem" button-text="Click" button-href="/" />
            <CardExpandingGlow header="Advantages" main-text="loremlorasddddd dddddddddddddddd demloremloreml oremloremloloremlo remloremremlorem" button-text="Click" button-href="/" />
            <CardExpandingGlow header="Advantages" main-text="loremlorasddddd dddddddddddddddd demloremloreml oremloremloloremlo remloremremlorem" button-text="Click" button-href="/" />
          </div>

          <div
            class="flex sm:justify-content-between flex-column align-items-center t-py-24"
          >
            <span
              class="block sm:w-5 font-bold text-center uppercase text-primary"
            >Our challenge!</span>
            <span class="block sm:w-5 sm:text-6xl text-4xl font-bold text-center">SynoHunt: The <span class="gradient-primary">Ultimate</span> Word
              Challenge!</span>
            <span class="block sm:w-5 text-lg mt-5 md:text-center">Get ready to embark on a thrilling journey through the world of
              synonyms and unleash your inner linguist, and dive into a realm of
              words and wonders with SynoHunt.</span>
          </div>

          <div v-for="(link) in beautyLinks">
            <div
              class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-2 lg:mt-0"
            >
              <div style="padding: 2px; border-radius: 10px" class="beauty-link">
                <div
                  class="p-3 surface-card h-full flex align-items-center"
                  style="border-radius: 8px"
                >
                  <div
                    class="flex align-items-center justify-content-center bg-indigo-200 beauty-icon"
                    style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                  >
                    <i :class="`pi pi-fw pi-${link.picon} text-2xl`" />
                  </div>
                  <div class="flex-column ml-4">
                    <span class="text-900 block">{{ link.mainText }}</span>
                    <span class="text-600">{{ link.header }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <div class="inline-block sm:w-6 sm:pr-1">
              <div class="w-full surface-card border-round-3xl pb-1">
                <div class="img overflow-hidden h-16rem relative">
                  <img
                    class="aspect-1/1 block w-full border-round-3xl absolute"
                    src="/img/words.png"
                    alt="words"
                  >
                </div>
                <div class="desc px-3">
                  <h1 class="text-900 text-4xl font-bold">
                    Master synonyms
                  </h1>
                  <p>Expand your vocabulary and dominate the leaderboard</p>
                </div>
              </div>
            </div>
            <div class="inline-block sm:w-6 sm:pl-1 mt-3 sm:mt-0">
              <div class="w-full surface-card border-round-3xl pb-1">
                <div class="img overflow-hidden h-16rem relative">
                  <img
                    class="aspect-1/1 block w-full border-round-3xl absolute"
                    src="/img/words.png"
                    alt="words"
                  >
                </div>
                <div class="desc px-3">
                  <h1 class="text-900 text-4xl font-bold">
                    Master synonyms
                  </h1>
                  <p>Expand your vocabulary and dominate the leaderboard</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <h1 class="text-900 text-6xl sm:text-7xl font-bold mb-5">
              Have qustions?
            </h1>
            <div class="flex justify-content-between flex-column sm:flex-row">
              <div class="sm:pr-5 border-round-3xl">
                <h1 class="text-900 text-4xl font-bold">
                  How do i start playing?
                </h1>
                <p>
                  Get started by clicking the “Play” button, choose your
                  difficulty level, and you’re ready to take on SynoHunt.
                </p>
              </div>
              <div class="sm:px-5 border-round-3xl mt-2 sm:mt-0">
                <h1 class="text-900 text-4xl font-bold">
                  How do i start playing?
                </h1>
                <p>
                  Get started by clicking the “Play” button, choose your
                  difficulty level, and you’re ready to take on SynoHunt.
                </p>
              </div>
              <div class="sm:pl-5 border-round-3xl mt-2 sm:mt-0">
                <h1 class="text-900 text-4xl font-bold">
                  How do i start playing?
                </h1>
                <p>
                  Get started by clicking the “Play” button, choose your
                  difficulty level, and you’re ready to take on SynoHunt.
                </p>
              </div>
            </div>
          </div>
          <div class="t-py-10">
            <NuxtLayout name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PrimeIconsOptions } from 'primevue/api';
import LandingHeader from '@/components/LandingHeader.vue';

definePageMeta({ auth: false });

type BeatyLink = {
  header: string,
  mainText: string,
  picon: Lowercase<keyof PrimeIconsOptions>
}
const beautyLinks = ref<BeatyLink[]>([
  {
    header: 'Epic Synonyms',
    mainText: 'Conquer word battles',
    picon: 'amazon'
  },
  {
    header: 'Epic Synonyms',
    mainText: 'Conquer word battles',
    picon: 'users'
  },
  {
    header: 'Epic Synonyms',
    mainText: 'Conquer word battles',
    picon: 'camera'
  }
]);
</script>

<style scoped lang="sass">
.beauty-link, .beauty-icon
  transition: all ease-in-out .3s
.beauty-link:hover::before
  transform: scale(1.1)
  box-shadow: 0 0 15px var(--primary-500)

.beauty-link:hover
  color: var(--primary-200)
  box-shadow: 0 0 50px var(--primary-500)
  text-shadow: 0 0 5px var(--primary-500)
  & .beauty-icon
    background-color: violet !important

.main div
  flex-basis: max-content

.logo-holder
  overflow: hidden
  .logo
    max-width: 100%
    max-height: 100%
    display: inline-block
    object-fit: contain
    object-position: center
</style>
