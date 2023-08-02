<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
});
import {Ref, ref} from 'vue';

// const session = await useFetch('/api/session', {method: 'POST'});
// const headers = useRequestHeaders(['cookie']) as HeadersInit;
// const {data: token} = await useFetch('/api/token', {headers});
// console.log(session);

const selectedDiff = ref();
const diffs = ref([
  {level: 'Easy'},
  {level: 'Medium'},
  {level: 'Hard'},
]);

const selectedLanguage = ref();
const langs = ref([{name: 'EN'}, {name: 'RU'}]);
const tags = ref(['games', 'arrays', 'puzzles']);

// todo move this to types :)
type User = {
  name: string,
  imgPath: string
}
type Leader = {
  position: number,
  user: User,
  lvl: number,
  points: number,
  tasks: number[],
}
const pointLeaders: Ref<readonly Leader[]> = ref(
  [
    {
      lvl: 228,
      user: {
        name: 'Ivan',
        imgPath: '/img/placeholder',
      },
      points: 228,
      position: 1,
      tasks: [1,2,3],
    },
    {
      lvl: 228,
      user: {
        name: 'Ivan',
        imgPath: '/img/placeholder',
      },
      points: 228,
      position: 2,
      tasks: [1,2,3],
    },
    {
      lvl: 228,
      user: {
        name: 'Ivan',
        imgPath: '/img/placeholder',
      },
      points: 228,
      position: 3,
      tasks: [1,2,3],
    },
    {
      lvl: 228,
      user: {
        name: 'Ivan',
        imgPath: '/img/placeholder',
      },
      points: 228,
      position: 4,
      tasks: [1,2,3],
    },
  ]
);

const positionSeverities = {
  1: 'success',
  2: 'info',
  3: 'warning',
};
</script>

<template>
  <div>
  <NuxtLayout name="header-n-sidebar">
<div class="lg:px-8 lg:mx-8 px-3">
          <GradientBox>
           <div class="flex flex-column md:flex-row t-text-white">
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
       <div class="t-p-3 h-full relative">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, aperiam autem, consequuntur culpa debitis, ducimus earum esse excepturi ipsam labore modi odio perspiciatis provident quisquam rem repellat sint unde.
         <div class="t-h-8">
           <div class="absolute t-bottom-3 unset flex flex-row">
             <div v-for="(tag) in tags" class="vertical-align-middle text-center mr-5 surface-ground text-sm px-1 t-rounded-md">
               <p class="flex">
                 <span class="vertical-align-top p-1">{{tag}}</span>
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  </GradientBox>
  <div class="mt-5">
    <div class="flex t-flex-col md:flex-row align-items-stretch">
      <div class="w-full md:t-w-3/4">
        <div class="p-3 surface-ground t-rounded-md h-full flex">
          <div class="t-w-1/3 md:t-w-1/5">
            <img src="/img/placeholder.png" class="block h-full" alt="todo" />
          </div>
          <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
            <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3"/></div>
          </div>
        </div>
      </div>
      <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
        <div class="p-3 surface-ground t-rounded-md h-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</div>
      </div>
    </div>

    <div class="flex t-flex-col md:flex-row align-items-stretch mt-5">
      <div class="w-full md:t-w-3/4">
        <div class="p-3 gradient-black-white t-rounded-md h-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</div>
      </div>
      <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
        <div class="p-3 surface-ground t-rounded-md h-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <p class="text-3xl">Leaderboard</p>
    <p class="my-3">
      You are automatically given an allegiance with anyone who is in the same clan as you. You can also become allies with other warriors by following each other or inviting new warriors to join.
    </p>
    <DataTable :value="pointLeaders" >
      <Column style="width: 3%" header="Position">
        <template #body="data: {data: Leader}">
          <Badge :value="data.data.position" :severity=" positionSeverities[data.data.position] " :class="{'surface-500': !positionSeverities[data.data.position]}" />
        </template>
      </Column>
      <Column header="User">
        <template #body="data: { data: Leader}">
          <Badge class="mr-3" :value="data.data.lvl" severity="success" />
          <span class="mr-3 max-md:t-block">{{data.data.user.name}}</span>
          <span>{{data.data.user.imgPath}}</span>
        </template>
      </Column>
      <Column header="Completed tasks" field="tasks.length"/>
      <Column header="Points">
        <template #body="data: { data: Leader}">
          <span>{{data.data.points}}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</div>
</NuxtLayout>
</div>
</template>

<style scoped lang="sass">
.unset
  color: initial

</style>