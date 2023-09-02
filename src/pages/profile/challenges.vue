<script setup lang="ts">
useHead({
  title: 'My challenges'
});

useSeoMeta({
  title: 'Synohunt my created challenges',
  ogTitle: 'Synohunt my created challenges',
  description: 'Created synonym words challenges',
  ogDescription: 'Created synonym words challenges',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}profile/completed`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div
          class="surface-ground t-rounded-md p-5"
        >
          <CreatedTasks />
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
