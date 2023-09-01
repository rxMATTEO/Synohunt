<script setup lang="ts">

</script>

<template>
  <div class="pointer-events-none absolute z-2 t-right-[0] left-0 overflow-hidden top-0 bottom-0" style="float: right">
    <div class="gradient">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">
@use '../assets/main' as main

@keyframes rotate
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.gradient
  float: right
  --size: 35rem
  --speed: 120s
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8)

  width: var(--size)
  height: var(--size)
  filter: blur(calc(var(--size) / 5))
  @extend .gradient-primary
  animation: rotate var(--speed) var(--easing) alternate infinite
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%
  transition: all 0.1s ease-out

/* This is just to transition when you change the viewport size. */
</style>
