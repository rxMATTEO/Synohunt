<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="sass">
.page-enter-active, .page-enter-leave
  transition: all .4s


.page-enter-from, .page-leave-to
  opacity: 0
  filter: blur(1rem)


.spin-enter-active, .spin-enter-leave
  transition: all 1s

.spin-enter-from, .spin-leave-to
  transform: rotate(360deg)

</style>