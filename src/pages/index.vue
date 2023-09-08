<template>
  <div class="surface-ground">
    <main>
      <GradientBlur class="md:!t-hidden" />
      <div class="h-screen t-max-h-screen">
        <div class="text-color py-3 absolute right-0 left-0" />
        <LandingHeader class="fixed left-0 right-0 top-0 t-z-50" />
        <div class="2xl:!t-px-64 2xl:t-mx-20 t-px-3 max-w-full h-full surface-ground">
          <div class="h-full">
            <div class="flex h-full align-items-center">
              <div class="md:t-w-1/2 relative t-z-30">
                <div
                  class="main z-1 flex flex-column align-items-start justify-content-center"
                >
                  <section>
                    <h1 class="t-uppercase t-tracking-wider text-indigo-300">
                      Online browser game
                    </h1>
                    <article>
                      <p
                        class="welcome-text text-2xl md:text-6xl text-left font-bold capitalize mt-3"
                      >
                        Unleash your word wizardry and conquer synonyms with
                        <span class="gradient-primary text">Synohunt</span>
                      </p>
                    </article>
                    <div class="mt-5">
                      <article>
                        <p>
                          Get ready to embark on a thrilling journey through the world
                          of synonyms and unleash your inner linguist, and dive into a
                          realm of words and wonders with SynoHunt.
                        </p>
                      </article>
                    </div>
                    <div class="mt-5">
                      <nav>
                        <ul class="flex">
                          <li>
                            <NuxtLink to="/dashboard">
                              <Button
                                label="Play Now"
                                class="mr-3 gradient-indigo t-border-transparent text-white"
                              />
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/about" target="_blank">
                              <Button
                                label="More about us"
                                class="t-border-0"
                                :type="null"
                                outlined
                              />
                            </NuxtLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </section>
                </div>
              </div>
              <div
                class="logo-holder absolute inline-block z-1 max-w-full overflow-hidden right-0"
              >
                <LazyModelLoader3D v-if="!isMobile" class="max-md:!t-hidden t-z-[20] relative right-0 top-20" />
              </div>
            </div>
          </div>
        </div>
        <div class="t-px-3 max-w-full surface-ground">
          <div class="2xl:!t-px-64 2xl:t-mx-20">
            <div class="flex gap-5 max-md:t-flex-wrap">
              <article class="flex-1">
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
              </article>
              <article class="flex-1">
                <div
                  class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
                >
                  <p class="text-center vertical-align-top text-3xl font-bold">
                    2
                  </p>
                  <p class="text-center uppercase text-color-secondary">
                    Languages
                  </p>
                </div>
              </article>
              <article class="flex-1">
                <div
                  class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
                >
                  <p class="text-center vertical-align-top text-3xl font-bold">
                    ~200
                  </p>
                  <p class="text-center uppercase text-color-secondary">
                    Players
                  </p>
                </div>
              </article>
              <article class="flex-1">
                <div
                  class="shadow-6 w-full surface-card px-5 py-3 t-rounded-lg relative up-hover"
                >
                  <p class="text-center vertical-align-top text-3xl font-bold">
                    100%
                  </p>
                  <p class="text-center uppercase text-color-secondary">
                    Fun
                  </p>
                </div>
              </article>
            </div>

            <div
              class="flex gap-5 t-mt-40 t-place-content-between flex-column md:flex-row max-md:t-items-center"
            >
              <div class="t-w-1/2">
                <NuxtImg
                  format="webp"
                  alt="Logo"
                  class="block w-full md:t-max-w-[66%] max-h-full"
                  src="/img/biglogo.png"
                  width="380"
                  height="380"
                />
              </div>
              <div class="md:t-w-1/2 max-md:t-text-center">
                <article>
                  <p class="uppercase text-primary font-bold">
                    Explore your word creativity!
                  </p>
                </article>
                <article>
                  <h1 class="capitalize text-5xl mt-3 font-bold">
                    <span class="gradient-primary text">Welcome to</span> the ultimate online browser game for word enthusiasts!
                  </h1>
                  <div class="mt-5 text-left">
                    <section>
                      Dive into the world of words and synonyms as you challenge your vocabulary skills in our exciting and engaging game. In this captivating online experience, users can choose from a variety of languages, earn points and coins, and compete on the leaderboard while sharpening their synonym-finding abilities.
                    </section>
                    <br>
                    <section>
                      Our game is designed to keep you engaged, entertained, and continuously learning as you guess synonyms for words. With a wide range of languages to choose from, you can put your linguistic prowess to the test and earn points and coins to climb to the top of the global leaderboard.
                    </section>
                    <div class="mt-5">
                      <nav>
                        <ul>
                          <li>
                            <NuxtLink to="/register">
                              <Button
                                label="Start playing"
                                class="animated-gradient-rainbow t-border-0 text-white"
                                :type="null"
                              />
                            </NuxtLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="flex gap-5 relative justify-content-between md:flex-row flex-column align-items-center">
              <CardExpandingGlow class="flex-1" header="Multilingual" main-text="We are allow users to choose from a wide range of languages to play in, enhancing their language skills while enjoying the game." button-text="About us" button-href="/about" />
              <CardExpandingGlow class="flex-1" header="Points and Coins" main-text="We got a rewarding system where players earn points and coins for each correctly guessed synonym. These can be used to unlock new features or purchase in-game items." button-text="About us" button-href="/about" />
              <CardExpandingGlow class="flex-1" header="Challenge Creation" main-text="Enable users to create their own synonym challenges by inputting a word and selecting synonyms from the database. They can then share these challenges with friends or the gaming community." button-text="About us" button-href="/about" />
            </div>

            <div
              class="flex sm:justify-content-between flex-column align-items-center t-py-24"
            >
              <div class="sm:w-5">
                <article class="flex flex-column sm">
                  <h1
                    class="block font-bold text-center uppercase text-primary"
                  >
                    Your ultimate challenge!
                  </h1>
                  <article class="block ">
                    <h1 class="text-center">
                      <span class="block sm:text-6xl text-4xl font-bold text-center">SynoHunt: The <span class="gradient-primary">Ultimate</span> Word
                        Challenge!</span>
                    </h1>
                  </article>
                  <section class="block">
                    <span class="block text-lg mt-5 md:text-center">Get ready to embark on a thrilling journey through the world of
                      synonyms and unleash your inner linguist, and dive into a realm of
                      words and wonders with SynoHunt.</span>
                  </section>
                </article>
              </div>
            </div>

            <div v-for="(link) in beautyLinks" :key="link.mainText">
              <div
                class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-2 lg:mt-0"
              >
                <div style="padding: 2px; border-radius: 10px" class="beauty-link">
                  <div
                    class="p-3 surface-card h-full flex align-items-center"
                    style="border-radius: 8px"
                  >
                    <div
                      class="flex align-items-center justify-content-center bg-indigo-200 beauty-icon max-md:t-p-3"
                      style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                    >
                      <i :class="`pi pi-fw pi-${link.picon} text-2xl`" />
                    </div>
                    <div class="flex-column ml-4">
                      <article>
                        <h1 class="text-900 block">
                          {{ link.mainText }}
                        </h1>
                        <section>
                          <span class="text-600">{{ link.header }}</span>
                        </section>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 flex md:flex-row flex-column">
              <div class="sm:w-full sm:pr-1">
                <div class="w-full surface-card border-round-3xl pb-1 h-full">
                  <div class="img overflow-hidden h-16rem relative border-round-top-3xl">
                    <NuxtImg
                      format="webp"
                      src="/img/guessword.png"
                      class="block w-full t-top-[-40px] absolute"
                      alt="words"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div class="desc px-3">
                    <article>
                      <h1 class="text-900 text-4xl font-bold">
                        Create your word challenges
                      </h1>
                      <section>
                        <p class="mt-3">
                          Create custom challenges with words of your choice and post them for other users to solve. Challenge your friends, family, and fellow word enthusiasts to see who can guess the most synonyms correctly and earn bragging rights as the ultimate wordsmith.
                        </p>
                      </section>
                    </article>
                  </div>
                </div>
              </div>
              <div class="sm:w-full sm:pl-1 md:t-mt-0 t-mt-3">
                <div class="w-full surface-card border-round-3xl pb-1 h-full">
                  <div class="img overflow-hidden h-16rem relative border-round-top-3xl">
                    <NuxtImg
                      format="webp"
                      class="aspect-1/1 block w-full absolute"
                      src="/img/coins.png"
                      alt="words"
                      width="626"
                      height="300"
                    />
                  </div>
                  <div class="desc px-3">
                    <article>
                      <h1 class="text-900 text-4xl font-bold">
                        Points and Coins
                      </h1>
                      <section>
                        <p class="mt-3">
                          Solve challenges, get points and coins for correctly guessing synonyms. Points can be used for leveling up, and coins can be spent on in-game items or power-ups.
                        </p>
                      </section>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <article>
                <h1 class="text-900 text-6xl sm:text-7xl font-bold mb-5">
                  Have <span class="gradient-hard text-white">questions?</span>
                </h1>
                <div class="flex justify-content-between flex-column sm:flex-row gap-3">
                  <div class="sm:pr-5 border-round-3xl flex-1 surface-overlay p-3">
                    <article>
                      <h1 class="text-900 text-4xl font-bold">
                        How do I start playing Synohunt?
                      </h1>
                      <Divider />
                      <section class="mt-3">
                        To <span class="gradient-medium text-white">play the game</span>, simply <NuxtLink class="text-primary" to="/register">
                          register new account
                        </NuxtLink>, choose a language, and you'll be presented with a word for which you need to guess synonyms. Type in your answers, and if correct, you'll earn points and coins.
                      </section>
                    </article>
                  </div>
                  <div class="sm:px-5 border-round-3xl flex-1 surface-overlay p-3">
                    <article>
                      <h1 class="text-900 text-4xl font-bold">
                        How can I create my own synonym challenge?
                      </h1>
                      <Divider />
                      <section class="mt-3">
                        To <span class="gradient-easy text-white">create a challenge</span>, go to the <NuxtLink to="/create/task" class="text-primary">
                          Create Challenge
                        </NuxtLink> section in dashboard, input the word and its synonyms, set the difficulty level, and add any specific instructions. Once created, you can share it with friends or the community.
                      </section>
                    </article>
                  </div>
                  <div class="sm:pl-5 border-round-3xl flex-1 surface-overlay p-3">
                    <article>
                      <h1 class="text-900 text-4xl font-bold">
                        Can I compete with others in the game?
                      </h1>
                      <Divider />
                      <article class="mt-3">
                        Yes! We have a <span class="gradient-indigo text-white">real-time leaderboard</span> where you can compete with other players based on your total points. Rise through the ranks and earn recognition as one of the top players.
                      </article>
                    </article>
                  </div>
                </div>
              </article>
            </div>
            <div class="t-py-10">
              <NuxtLayout name="footer" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { PrimeIconsOptions } from 'primevue/api';
import { storeToRefs } from 'pinia';
import { usePlatformStore } from '../stores/platformStore';
import LandingHeader from '@/components/LandingHeader.vue';

definePageMeta({ auth: false });

useHead({
  link: [{
    rel: 'canonical', href: `${import.meta.env.VITE_AUTH_ORIGIN}`
  }]
});

useSeoMeta({
  title: 'Ultimate language challenge',
  ogTitle: 'Synohunt',
  description: 'Synohunt is ultimate word challenge that will train your knowledge of the languages. Solve challenges and get points',
  ogDescription: 'Synohunt is ultimate word challenge that will train your knowledge of the languages. Solve challenges and get points',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}`
});

const platformStore = usePlatformStore();
const { platform } = storeToRefs(platformStore);
const isMobile = computed(() => platform.value === 'mobile');

export type PrimeIcon = Lowercase<keyof PrimeIconsOptions>;

type BeatyLink = {
  header: string,
  mainText: string,
  picon: PrimeIcon
}
const beautyLinks = ref<BeatyLink[]>([
  {
    header: 'Include a hint system for players who may find certain challenges too difficult. ',
    mainText: 'Hints and tips',
    picon: 'ticket'
  },
  {
    header: 'Create a competitive element by displaying a leaderboard that ranks players based on their scores',
    mainText: 'Leaderboard',
    picon: 'users'
  },
  {
    header: ' Provide players with detailed statistics on their gameplay, such as the number of synonyms guessed correctly, success rates, and progress over time.',
    mainText: 'Word Statistics',
    picon: 'camera'
  }
]);
</script>

<style scoped lang="sass">
@use '../assets/main' as main

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
