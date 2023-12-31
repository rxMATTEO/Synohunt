<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import CompletedTasks from '@/components/CompletedTasks.vue';
import TabmenuLoader from '@/components/loading/TabmenuLoader.vue';
import ProfileSettings from '@/components/ProfileSettings.vue';
import CreatedTasks from '@/components/CreatedTasks.vue';
import CircleLoader from '@/components/CircleLoader.vue';

useHead({
  title: 'My profile'
});
const props = defineProps<ProfileProps>();
type ProfileProps = {
  account: object;
  foreign: boolean;
};

useSeoMeta({
  title: `Player profile ${props.account.name}`,
  ogTitle: `Player profile ${props.account.name}`,
  description: `Profile of ${props.account.name} Synohunt player`,
  ogDescription: `Profile of ${props.account.name} Synohunt player`,
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}profile/`
});

type TabItem = {
  label: string,
  icon: string,
};
const tabItems = ref<TabItem[]>([
  {
    label: 'Stats',
    icon: 'pi pi-fw pi-chart-bar'
  },
  {
    label: 'Solutions',
    icon: 'pi pi-fw pi-calendar'
  },
  {
    label: 'Created challenges',
    icon: 'pi-file-edit pi'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }
]);
const { hash } = useRoute();
const router = useRouter();
const indexByHash = hash ? tabItems.value.findIndex(tab => tab.label.toLowerCase() === hash.slice(1)) : 0;

const AsyncProfileStats = defineAsyncComponent({
  loader: async () => await import('@/components/ProfileStats.vue')
});

const AsyncCompletedTasks = defineAsyncComponent({
  loader: async () => await import('@/components/CompletedTasks.vue')
});

const AsyncCreatedTasks = defineAsyncComponent({
  loader: async () => await import('@/components/CreatedTasks.vue')
});

const AsyncProfileSettings = defineAsyncComponent({
  loader: async () => await import('@/components/ProfileSettings.vue')
});

const allowedToGuest = [AsyncProfileStats];
const allowedToOwner = [AsyncProfileStats, AsyncCompletedTasks, AsyncCreatedTasks, AsyncProfileSettings];
const tabs = props.foreign ? allowedToGuest : allowedToOwner;
const selectedTabIndex = ref<number>(0);

const pending = ref(true);
onMounted(() => {
  selectedTabIndex.value = indexByHash;
  pending.value = false;
});

function changeTab () {
  const selectedTabHash = tabItems.value[selectedTabIndex.value];
  router.push({ hash: '#' + selectedTabHash.label.toLowerCase() });
}
</script>

<template>
  <div>
    <PaddingBox>
      <div class="surface-200 t-rounded-md p-3">
        <div class="flex flex-column md:flex-row md:gap-5 md:flex-wrap">
          <div class="flex align-items-center w-full">
            <UserLevelBadge :value="+account.Level.value" />
            <div>{{ account.name }}</div>
          </div>
          <div class="max-md:mt-3">
            <div>
              <b>Member since: </b>
              <span class="white-space-nowrap">{{
                new Date(+account.registrationDate).toLocaleString()
              }}</span>
            </div>
            <div>
              <b>Last seen: </b>
              <!--              todo do this-->
              <span class="white-space-nowrap">{{ "Aug 2023" }}</span>
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

      <div v-if="!foreign" class="flex gap-5 mt-5 t-max-h-full block max-md:t-flex-wrap overflow-hidden">
        <div class="t-w-full md:t-w-2/3">
          <div class="p-3 t-min-h-full gradient-black-white t-rounded-md flex flex-column">
            <h1 class="font-bold text-xl mb-3">
              Welcome to your word playground!
            </h1>
            <div class="">
              <p>
                We are providing detailed statistics about the player's performance in the game, such as the number of games played, synonyms guessed correctly, and their success rate.
              </p>
              <div />
            </div>
          </div>
        </div>

        <div
          class="t-w-full md:t-w-1/3 p-3 surface-ground t-rounded-md h-full flex flex-column"
        >
          <h1 class="font-bold text-xl mb-3">
            Apperence
          </h1>
          <div class="">
            <p>
              You can change couple themes by your choise on <span class="gradient-easy text-white">Settings</span> tab
            </p>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div v-if="pending">
          <TabmenuLoader />
        </div>
        <div v-else-if="!foreign">
          <TabMenu
            v-model:activeIndex="selectedTabIndex"
            :model="tabItems"
            class="t-whitespace-nowrap"
            @tab-change="changeTab"
          />
        </div>
        <div class="surface-ground border-round-bottom-xl">
          <div v-if="pending">
            <Skeleton height="300px" />
          </div>
          <div v-else>
            <div class="md:p-5 p-3">
              <Suspense>
                <template #default>
                  <component :is="tabs[selectedTabIndex]" v-bind="props" />
                </template>
                <template #fallback>
                  <div class="w-full relative h-full">
                    <CircleLoader :on-load-message="{header: 'Wait', bottomText: 'Please'}" :visible="true" :completed="false" />
                  </div>
                </template>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </PaddingBox>
  </div>
</template>
