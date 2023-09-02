<script setup lang="ts">
import { Difficulity, Language, Task } from '@prisma/client';
import { reactive, ref } from 'vue';
import ChallengeBox from '@/components/ChallengeBox.vue';
useHead({
  title: 'Dashboard',
  meta: [
    { name: 'description', content: 'Synohunt dashboard. Solve synonyms, train your languages skills and get points!' }
  ]
});

useSeoMeta({
  title: 'Dashboard',
  ogTitle: 'Synohunt',
  description: 'Synohunt dashboard. Solve synonyms, train your languages skills and get points!',
  ogDescription: 'Synohunt dashboard. Solve synonyms, train your languages skills and get points!',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <ChallengeBox />
        <div class="mt-5">
          <div class="flex t-flex-col md:flex-row align-items-stretch">
            <div class="w-full md:t-w-3/4">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="t-w-1/3 md:t-w-1/5 h-min">
                  <NuxtImg src="/img/biglogo.png" class="block md:h-full" alt="synohunt" height="139" width="122" />
                </div>
                <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                  <h1 class="font-bold text-xl mb-1">
                    About Synohunt
                  </h1>
                  <p>Discover the thrill of words and synonyms with our engaging online browser game! Challenge your vocabulary, compete with players from around the world, and have a blast while learning new words.</p>

                  <div>
                    <NuxtLink to="/about">
                      <Button label="LEARN SYNOHUNT" severity="secondary" type="null" class="p-1 text-sm t-mt-3" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="">
                  <h1 class="font-bold text-xl mb-1">
                    How to Play
                  </h1>
                  <p>
                    It's easy to get started! Simply select your preferred language, choose a challenge, and start guessing synonyms. Earn points and coins for each correct answer and climb the leaderboard to become a word master.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex t-flex-col md:flex-row align-items-stretch mt-5">
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="">
                  <h1 class="font-bold text-xl mb-1">
                    Challenge Creation
                  </h1>
                  <p>
                    Put your creativity to the test by creating your own synonym challenges. Share them with friends and the gaming community, and watch as others take on your word puzzles.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="">
                  <h1 class="font-bold text-xl mb-1">
                    Rewards and Achievements
                  </h1>
                  <p>
                    Unlock exciting rewards, achievements, and badges as you progress through the game. Compete against your friends to see who can earn the most coveted accolades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p class="text-3xl">
            Leaderboard
          </p>
          <p class="my-3">
            With every synonym you successfully guess, you earn valuable points that propel you higher on the leaderboard. Compete against players from all corners of the globe and see who can reach the coveted top spot.
          </p>
          <p>
            But it's not just about bragging rights. Our leaderboard is a testament to your dedication and wordplay excellence. Whether you're a casual wordsmith or a die-hard vocabulary aficionado, the leaderboard offers a level playing field where everyone has a chance to excel.
          </p>
          <Leaderboard :limit="5" />
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
.unset
  color: initial

</style>
