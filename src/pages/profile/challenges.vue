<script setup lang="ts">
useHead({
  title: 'My challenges'
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div class="py-3 text-4xl">
          Your created challenges
        </div>
        <CreatedTasks />
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
