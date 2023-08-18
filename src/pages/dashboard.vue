<script setup lang="ts">
import { Difficulity, Language, Task } from '@prisma/client';
import { reactive, ref } from 'vue';
import ChallengeBox from '@/components/ChallengeBox.vue';
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <!--        todo remove this to slots-->
        <ChallengeBox />
        <div class="mt-5">
          <div class="flex t-flex-col md:flex-row align-items-stretch">
            <div class="w-full md:t-w-3/4">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="t-w-1/3 md:t-w-1/5">
                  <img src="/img/placeholder.png" class="block h-full" alt="todo">
                </div>
                <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                  <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
                </div>
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
          </div>

          <div class="flex t-flex-col md:flex-row align-items-stretch mt-5">
            <div class="w-full md:t-w-3/4">
              <div class="p-3 gradient-black-white t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p class="text-3xl">
            Leaderboard
          </p>
          <p class="my-3">
            You are automatically given an allegiance with anyone who is in the same clan as you. You can also become allies with other warriors by following each other or inviting new warriors to join.
          </p>
          <Leaderboard :limit="5" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
.unset
  color: initial

</style>
