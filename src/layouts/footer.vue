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
      <NuxtLink to="/contact" class="hover:text-primary transition-colors t-duration-200 t-ease-in-out">Contact</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
