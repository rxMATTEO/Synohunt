<script setup lang="ts">
const { statusCode, statusMessage, message } = useError().value;
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 top-0">
    <div class="w-full h-full flex align-items-center justify-content-center">
      <div class="text-center">
        <div class=" font-bold">
          <p class="text-8xl">
            Oops!
          </p>
          <div class="t-my-5">
            <span class="">{{ statusCode }}</span>
            <span>{{ ' ' + statusMessage }}</span>
          </div>
          <p>{{ message }}</p>
          <NuxtLink to="/" class="mt-5 block">
            Goto homepage
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
