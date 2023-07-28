<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';

const { toggleMenu, isExpanded: expanded } = useSidebarStore();
onMounted(() => {
  if(window.document.documentElement.offsetWidth >= 768) toggleMenu();
});
</script>

<template>
  <div class="flex">
      <Sidebar :isExpanded="expanded" :toggle="toggleMenu" />
<!--      todo add suspense sceletone or some load shit cuz it's loading too long-->
    <div class="main w-full flex-1">
      <div  class="t-ml-0 h-4rem">
          <Header :expanded="toggleMenu" />
      </div>
      <div class="max-w-full surface-overlay">
        <div class="lg:px-8 lg:mx-8 px-3">
          <div class="gradient">
            asdasads
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@tailwind base
@tailwind components
@tailwind utilities

.gradient
  background-image: linear-gradient(to right, $gradient-stops)
</style>