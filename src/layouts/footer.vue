<script setup lang="ts">

</script>

<template>
  <div>
    <slot />
    <div class="flex t-items-center t-justify-center mt-5 flex-wrap gap-3">
      <a href="https://github.com/rxMATTEO/Synohunt/" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out" target="_blank">
        <span>Contribute on Github</span>
        <i class="pi pi-fw pi-github" />
      </a>
      <NuxtLink to="/about" class="hover:text-primary transition-colors t-duration-200 t-ease-in-out">
        About
      </NuxtLink>
      <a href="/" class="hover:text-primary transition-colors t-duration-200 t-ease-in-out">Privacy</a>
      <a href="/" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out">Contact</a>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
