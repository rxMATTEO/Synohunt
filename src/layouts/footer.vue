<script setup lang="ts">

</script>

<template>
  <div>
    <slot />
    <footer>
      <div>
        <nav>
          <ul class="flex t-items-center t-justify-center mt-5 flex-wrap gap-3">
            <li>
              <a href="https://github.com/rxMATTEO/Synohunt/" rel="external" class=" hover:text-primary transition-colors t-duration-200 t-ease-in-out" target="_blank">
                <span>Contribute on Github</span>
                <i class="pi pi-fw pi-github" />
              </a>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-primary transition-colors t-duration-200 t-ease-in-out">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-primary transition-colors t-duration-200 t-ease-in-out">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="sass">

</style>
