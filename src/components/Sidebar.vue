<script setup lang="ts">
const props = defineProps({
  isExpanded: Object,
  toggle: Function
});
</script>

<template>
  <div class="t-relative t-top-10 t-z-[11] t-transition-[width] t-ease-in-out t-duration-200" :class="{'md:t-w-56 t-w-full': isExpanded.value, 't-w-0': !isExpanded.value}">
    <div class="z-1 md:t-block lg:flex-auto flex-none left-0 md:t-top-0 t-top-10 bottom-0 fixed surface-card shadow-8 sidebar">
      <div class="logo">
        <!--         todo center this shit */-->
        <NuxtLink to="/dashboard" class="w-6 mx-auto block">
          <img src="/img/download.webp" class="block mx-auto w-full" alt="logo" draggable="false">
        </NuxtLink>
      </div>
      <div v-if="isExpanded.value" class="mt-5 text-secondary t-text-sm t-w-1/">
        <p class="px-2 uppercase text-color-secondary">
          Training
        </p>
        <div class="mt-1">
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>

          <p class="px-2 uppercase text-color-secondary mt-3">
            CAREER
          </p>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
          <p class="px-2 uppercase text-color-secondary mt-3">
            Community
          </p>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
          <p class="px-2 uppercase text-color-secondary mt-3">
            About
          </p>
          <NuxtLink to="/" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200">
            <div class="flex px-1">
              <div class="t-w-1/6">
                a
              </div>
              <div class="t-w-5/6">
                <p class="t-font-bold">
                  Practice
                </p>
                <p class="text-sm text-color-secondary">
                  Complete tasks and shit
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.sidebar
  width: inherit
</style>
