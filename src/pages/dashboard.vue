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
  <div>
  <NuxtLayout name="headernsidebar">
<div class="lg:px-8 lg:mx-8 px-3 t-text-white">
          <GradientBox>
           <div class="flex flex-column md:flex-row">
     <div class="t-w-full md:t-w-1/3">
       <div class="t-p-3">
         <p class="text-sm">Suggested Challenge</p>
         <div class="mt-5">
           <div class="p-float-label">
             <Dropdown input-id="dd-diff" v-model="selectedDiff" :options="diffs" optionLabel="level" placeholder="Select difficulty" class="w-full">
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
             <label for="dd-diff" class="">Select difficulty</label>
           </div>
           <div class="p-float-label mt-5">
           <Dropdown v-model="selectedLanguage" input-id="dd-lang" :options="langs" optionLabel="name" placeholder="Select language" class="w-full">
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
           <label for="dd-lang" class="">Select Language</label>
           </div>
         </div>
         <div class="mt-5 flex">
           <div class="t-mx-auto">
             <Button type="null" label="TRAIN" class="text-sm p-2 mr-2 bg-blue-300 border-1 border-white hover:bg-blue-800 text-white" />
             <Button type="null" label="SKIP" class="text-sm p-2 bg-indigo-400 border-1 border-white hover:bg-indigo-800 text-white" />
           </div>
         </div>
       </div>
     </div>
     <div class="t-w-full md:t-w-2/3 t-backdrop-blur-sm t-bg-black t-bg-opacity-50">
       <div class="p-3">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, aperiam autem, consequuntur culpa debitis, ducimus earum esse excepturi ipsam labore modi odio perspiciatis provident quisquam rem repellat sint unde.
       </div>
     </div>
   </div>
  </GradientBox>
</div>
</NuxtLayout>
</div>
</template>

<style scoped lang="sass">
.gradient
  background-image: linear-gradient(to right, $gradient-stops)
</style>