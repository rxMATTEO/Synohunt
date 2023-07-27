<script setup lang="ts">
import {reactive} from 'vue';

const expanded = reactive({value: false});
onMounted(() => {
  if(window.document.documentElement.offsetWidth >= 768) toggleMenu();
});

const toggleMenu = () => {
  console.log('expand', expanded.value);
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="flex">
      <Sidebar :isExpanded="expanded" :toggle="toggleMenu" />
<!--      todo add suspense sceletone or some load shit cuz it's loading too long-->
    <div class="main w-full flex-1">
      <div  class="t-ml-0 h-4rem">
          <Header :expanded="toggleMenu" />
      </div>
      <div class="t-ml-0">
        adssadasdas
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@tailwind base
@tailwind components
@tailwind utilities
</style>