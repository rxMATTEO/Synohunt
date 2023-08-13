<script setup lang="ts">
import { ref } from 'vue';
import { usePointsStore } from '../../stores/pointsStore';
import ProfileStats from '../../components/ProfileStats.vue';
import CoinSpin from '@/components/CoinSpin.vue';

const { data: { value: { user: { account } } } } = useAuth();

const active = ref(0);
const items = ref([
  {
    label: 'Stats',
    icon: 'pi pi-fw pi-chart-bar'
  },
  {
    label: 'Solutions',
    icon: 'pi pi-fw pi-calendar'
  },
  {
    label: 'Comments',
    icon: 'pi pi-fw pi-pencil'
  },
  {
    label: 'Documentation',
    icon: 'pi pi-fw pi-file'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }
]);

function changeTab (e) {

}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <CoinSpin />
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-200 t-rounded-md p-3">
          <div class="flex flex-column md:flex-row md:gap-5 md:flex-wrap">
            <div class="flex align-items-center w-full">
              <UserLevel :only-badge="true" />
              <div>{{ account.name }}</div>
            </div>
            <div class="max-md:mt-3">
              <div>
                <b>Member since: </b>
                <span class="white-space-nowrap">{{ new Date().toLocaleString() }}</span>
              </div>
              <div>
                <b>Last seen: </b>
                <span class="white-space-nowrap">{{ 'Aug 2023' }}</span>
              </div>
            </div>

            <div class="max-md:mt-3">
              <div>
                <b>Following: </b>
                <span class="white-space-nowrap">{{ 0 }}</span>
              </div>
              <div>
                <b>Followers: </b>
                <span class="white-space-nowrap">{{ 0 }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-5 mt-5 h-max max-md:t-flex-wrap">
          <div class="t-w-full md:t-w-2/3">
            <div class="p-3 t-min-h-full gradient-black-white t-rounded-md flex">
              <div class="t-w-1/3 md:t-w-1/5">
                <img src="/img/placeholder.png" class="block h-full" alt="todo">
              </div>
              <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
              </div>
            </div>
          </div>

          <div class="t-w-full md:t-w-1/3 p-3 surface-ground t-rounded-md h-full flex">
            <div class="t-w-1/3 md:t-w-1/5">
              <img src="/img/placeholder.png" class="block h-full" alt="todo">
            </div>
            <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
              <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <TabMenu v-model:activeIndex="active" :model="items" @tab-change="changeTab" />
          <div class="surface-ground">
            <div v-if="active === 0">
              <ProfileStats />
            </div>
          </div>
          <div class="surface-ground">
            <div v-if="active === 1">
              <CompletedTasks />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
