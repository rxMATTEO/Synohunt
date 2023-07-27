<script setup lang="ts">
import {reactive, ref} from 'vue';

const visible = reactive({value: true});
const width = ref({mobile: '[100%]', pc: '14rem'});
const expanded = reactive({value: true});
const toggleMenu = () => {
  console.log('expand', expanded.value);
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="flex">
    <client-only>
      <Sidebar :isExpanded="expanded" :toggle="toggleMenu" />
    </client-only>
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