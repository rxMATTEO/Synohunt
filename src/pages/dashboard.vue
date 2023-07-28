<script setup lang="ts">
import {ref} from 'vue';

const selectedDiff = ref();
const diffs = ref([
  {level: 'Easy'},
  {level: 'Medium'},
  {level: 'Hard'},
]);

const selectedLanguage = ref();
const langs = ref([{name: 'EN'}, {name: 'RU'}]);
</script>

<template>
  <NuxtLayout name="headernsidebar">
<div class="lg:px-8 lg:mx-8 px-3">
          <GradientBox>
           <div class="flex flex-column md:flex-row">
     <div class="t-w-full md:t-w-1/3">
       <div class="t-p-3">
         <p class="text-sm">Suggested Challenge</p>
         <div class="mt-5">
           <Dropdown v-model="selectedDiff" :options="diffs" optionLabel="level" placeholder="Select a difficulty" class="w-full">
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
           <Dropdown v-model="selectedLanguage" :options="langs" optionLabel="name" placeholder="Select a language" class="w-full mt-3">
             <template #value="slotProps">
               <div v-if="slotProps.value" class="flex align-items-center">
                 <div>{{ slotProps.value.name }}</div>
               </div>
               <span v-else>
            {{ slotProps.placeholder }}
        </span>
             </template>
             <template #option="slotProps">
               <div class="flex align-items-center">
                 <div>{{ slotProps.option.name }}</div>
               </div>
             </template>
           </Dropdown>
         </div>
         <div class="mt-5">

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
</NuxtLayout>
</template>

<style scoped lang="sass">
@tailwind base
@tailwind components
@tailwind utilities

.gradient
  background-image: linear-gradient(to right, $gradient-stops)
</style>