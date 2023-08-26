<script setup lang="ts">
useHead({
  title: 'My challenges'
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
