<script lang="ts" setup>
useHead({
  title: 'Completed challenges'
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
