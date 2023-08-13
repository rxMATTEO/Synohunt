<script setup lang="ts">
import { onMounted } from 'vue';
import { useSidebarStore } from '@/stores/sidebarStore';
import { useAppConfig } from '#imports';
import { Platforms } from '@/app.config';

const { toggleMenu, setMenuVisibility, isExpanded: expanded } = useSidebarStore();

onMounted(() => {
  const { platform } = useAppConfig();
  if (platform == Platforms.pc) {
    setMenuVisibility(true);
  }
});
</script>

<template>
  <div class="flex">
    <Sidebar :is-expanded="expanded" :toggle="toggleMenu" />
    <!--      todo add suspense sceletone or some load shit cuz it's loading too long-->
    <div class="w-full flex-1">
      <div class="t-ml-0 h-4rem">
        <Header :expanded="toggleMenu" />
      </div>
      <div class="max-w-full relative">
        <NuxtLayout name="footer">
          <slot />
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
