<script setup lang="ts">
import { ref } from 'vue';
import ProfileStats from '@/components/ProfileStats.vue';
import CompletedTasks from '@/components/CompletedTasks.vue';
import TabmenuLoader from '@/components/loading/TabmenuLoader.vue';
import ProfileSettings from '@/components/ProfileSettings.vue'; // to lazy

useHead({
  title: 'My profile'
});
type ProfileProps = {
  account: object;
  foreign: boolean;
};
const props = defineProps<ProfileProps>();

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
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }
]);
const { hash } = useRoute();
const router = useRouter();
const indexByHash = hash ? tabItems.value.findIndex(tab => tab.label.toLowerCase() === hash.slice(1)) : 0;
const tabs = [ProfileStats, CompletedTasks, ProfileSettings];
const selectedTabIndex = ref<number>(0);

const pending = ref(true);
onMounted(() => {
  pending.value = false;
  selectedTabIndex.value = indexByHash;
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

      <div class="flex gap-5 mt-5 h-max max-md:t-flex-wrap">
        <div class="t-w-full md:t-w-2/3">
          <div class="p-3 t-min-h-full gradient-black-white t-rounded-md flex">
            <div class="t-w-1/3 md:t-w-1/5">
              <img src="/img/placeholder.png" class="block h-full" alt="todo">
            </div>
            <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium animi atque autem cum eos est eum exercitationem
                expedita explicabo labore maxime, nobis quasi sit suscipit ut.
                Accusamus culpa perspiciatis quisquam.
              </p>
              <div>
                <Button
                  label="LEARN MORE"
                  severity="secondary"
                  type="null"
                  class="p-1 text-sm t-mt-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="t-w-full md:t-w-1/3 p-3 surface-ground t-rounded-md h-full flex"
        >
          <div class="t-w-1/3 md:t-w-1/5">
            <img src="/img/placeholder.png" class="block h-full" alt="todo">
          </div>
          <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium animi atque autem cum eos est eum exercitationem
              expedita explicabo labore maxime, nobis quasi sit suscipit ut.
              Accusamus culpa perspiciatis quisquam.
            </p>
            <div>
              <Button
                label="LEARN MORE"
                severity="secondary"
                type="null"
                class="p-1 text-sm t-mt-3"
              />
            </div>
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
            @tab-change="changeTab"
          />
        </div>
        <div class="surface-ground border-round-bottom-xl">
          <div v-if="pending">
            <Skeleton height="300px" />
          </div>
          <div v-else>
            <component :is="tabs[selectedTabIndex]" v-bind="props" />
          </div>
        </div>
      </div>
    </PaddingBox>
  </div>
</template>
