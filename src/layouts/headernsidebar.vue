<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';

const { toggleMenu, setMenuVisibility, isExpanded: expanded } = useSidebarStore();
onMounted(() => {
  if(window.document.documentElement.offsetWidth >= 768) {
    setMenuVisibility(true);
  }
});
</script>

<template>
  <div class="flex">
    <Sidebar :isExpanded="expanded" :toggle="toggleMenu" />
    <!--      todo add suspense sceletone or some load shit cuz it's loading too long-->
    <div class="w-full flex-1">
      <div  class="t-ml-0 h-4rem">
        <Header :expanded="toggleMenu" />
      </div>
      <div class="max-w-full surface-overlay">
       <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>