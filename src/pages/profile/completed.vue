<script lang="ts" setup>
useHead({
  title: 'Completed challenges'
});

useSeoMeta({
  title: 'Synohunt my completed challenges',
  ogTitle: 'Synohunt my completed challenges',
  description: 'Completed and solved synonym words challenges',
  ogDescription: 'Completed and solved synonym words challenges',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}profile/completed`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div
          class="surface-ground t-rounded-md md:p-5 p-2"
        >
          <CompletedTasks />
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
