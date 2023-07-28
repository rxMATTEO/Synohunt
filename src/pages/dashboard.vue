<script setup>
import { useSidebarStore } from '@/stores/sidebarStore';
import { ref } from 'vue';

const { toggleMenu, isExpanded: expanded } = useSidebarStore();
onMounted(() => {
  if(window.document.documentElement.offsetWidth >= 768) toggleMenu();
});

const selectedDiff = ref();
const diffs = ref([
  {level: 'Easy'},
  {level: 'Medium'},
  {level: 'Hard'},
]);
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
          <GradientBox>
           <div class="flex flex-column md:flex-row">
             <div class="t-w-full md:t-w-1/3">
               <div class="t-p-3">
                 <p class="text-sm">Suggested Challenge</p>
                 <div class="mt-5">
                   <Dropdown v-model="selectedDiff" :options="diffs" optionLabel="level" placeholder="Select a Country" class="w-full md:w-14rem">
                     <template #value="slotProps">
                       <div v-if="slotProps.value" class="flex align-items-center">
                         <div>{{ slotProps.value.level }}</div>
                       </div>
                       <span v-else>
                    {{ slotProps.placeholder }}
                </span>
                     </template>
                     <template #option="slotProps">
                       <div class="flex align-items-center">
                         <div>{{ slotProps.option.level }}</div>
                       </div>
                     </template>
                   </Dropdown>
                 </div>
               </div>
             </div>
             <div class="t-w-full md:t-w-2/3 t-backdrop-blur-sm t-bg-black t-bg-opacity-50">
               <div class="p-3">
                 as
               </div>
             </div>
           </div>
          </GradientBox>
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