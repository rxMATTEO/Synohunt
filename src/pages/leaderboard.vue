<script setup lang="ts">
useHead({
  title: 'Leaderboard',
  meta: [
    { name: 'description', content: 'Leaderboard of Synohunt player' }
  ]
});
// leaderbord 4 point creator most tasks, coins and shit
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:!t-px-52 lg:mx-10 t-px-3">
        <div
          class="surface-ground t-rounded-md p-5"
        >
          <p class="mb-5">
            A user's honor is determined by earning higher ranks (dan/kyu) as well as through other activities such as getting up votes on kata, solutions and comments that they create. Certain activities are worth more honor than others. For example publishing a kata is worth more than solving one.
          </p>
          <Leaderboard :limit="100" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
