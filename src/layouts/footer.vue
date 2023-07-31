<script setup lang="ts">

</script>

<template>
<div>
  <slot />
  <div class="lg:px-8 lg:mx-8 px-3 mt-5">
    <div class="flex t-items-center t-justify-center">
        <a href="https://github.com/volodin-artem/Synohunt/" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out" target="_blank">
          <span>Contribute on Github</span>
          <i class="pi pi-fw pi-github"></i>
        </a>
        <a href="/" class="mx-3 hover:text-primary transition-colors t-duration-200 t-ease-in-out">About</a>
        <a href="/" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out">Blog</a>
        <a href="/" class="mx-3  hover:text-primary transition-colors t-duration-200 t-ease-in-out">Privacy</a>
        <a href="/" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out">Contact</a>
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">

</style>