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
          class="surface-ground t-rounded-md p-5"
        >
          <CompletedTasks />
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
