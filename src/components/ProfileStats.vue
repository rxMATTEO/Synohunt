<script setup lang="ts">
import { ref } from 'vue';
import { usePointsStore } from '../stores/pointsStore';
type ProfileStatsProps = {
  account: object
}
const props = defineProps<ProfileStatsProps>();
const account = props.account;
const pointsStore = usePointsStore();
const percents = ref(0);
const { data: percs, pending } = await useAsyncData('points', () => {
  const pointsStore = usePointsStore();
  return pointsStore.calculatePercentOfPointsProgress();
}, { server: false, lazy: true });
const bookmarked = ref(
  (
    await useFetch('/api/task/allBookmarks', {
      method: 'POST',
      body: {
        userId: account.id
      }
    })
  ).data.value || []
);

const completed = ref(
  (
    await useFetch('/api/task/completed', {
      method: 'POST',
      body: {
        userId: account.id
      }
    })
  ).data.value || []
);

const created = ref(
  (
    await useFetch('/api/task/created', {
      method: 'POST',
      body: {
        userId: account.id
      }
    })
  ).data.value || []
);
</script>

<template>
  <div class="relative">
    <h1 class="text-4xl font-bold">
      Stats
    </h1>
    <div class="flex mt-5 max-md:t-flex-col">
      <div class="md:t-w-1/3">
        <p class="text-xl absolute md:t-left-12">
          Progress
        </p>
        <div class="flex mt-5">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-chart-pie pi" style="font-size: 2.5rem" />
          </div>
          <div class="mt-3">
            <div>
              <b>Rank: </b>
              <span>{{ account.Level.value }}</span>
            </div>
            <div>
              <b>Points: </b>
              <span>{{ account.points }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="t-w-1/3 max-md:t-mt-3">
        <div>
          <div>
            <b>Rank name: </b>
            <span>{{ account.Level.Group.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex relative mt-5 max-md:t-flex-col">
      <div class="md:t-w-1/2">
        <p class="relative md:t-left-12 text-xl">
          Honor breakdown
        </p>
        <div class="flex mt-3">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-chart-line pi" style="font-size: 2.5rem" />
          </div>
          <div>
            <div>
              <b>Total completed challenge: </b>
              <span>{{ completed.length }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="md:t-w-1/2 mt-3">
        <p>Rank breakdown</p>
        <div>
          <div v-if="pending">
            <Skeleton shape="circle" size="5rem" />
          </div>
          <div v-else>
            <Knob
              :model-value="percs"
              disabled
              value-color="SlateGray"
              value-template="{value}%"
              range-color="MediumTurquoise"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex relative max-md:mt-5 max-md:t-flex-col">
      <div class="md:t-w-1/2">
        <p class="relative md:t-left-12 text-xl mt-3">
          Contributions
        </p>
        <div class="flex">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-th-large pi" style="font-size: 2.5rem" />
          </div>
          <div>
            <div class="mt-3">
              <b>Created tasks: </b>
              <span>{{ created.length }}</span>
            </div>
            <div>
              <b>Bookmarks: </b>
              <span>{{ bookmarked.length }}</span>
            </div>
          <!--            <div>-->
          <!--              <b>Mb created challenge: </b>-->
          <!--              <span>{{ account.Level.value }}</span>-->
          <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
