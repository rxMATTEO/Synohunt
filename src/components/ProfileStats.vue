<script setup lang="ts">
import { ref } from 'vue';
import { usePointsStore } from '../stores/pointsStore';
const pointsStore = usePointsStore();
const percs = (await pointsStore.calculatePercentOfPointsProgress());
const percents = ref(percs);
const { data: { value: { user: { account } } } } = useAuth();
</script>

<template>
  <div class="p-5 relative">
    <div class="flex mt-3 max-md:t-flex-col">
      <div class="t-w-1/3">
        <p class="text-xl absolute t-top-3 t-left-20">
          Progress
        </p>
        <div class="flex">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-chart-pie pi" style="font-size:2.5rem" />
          </div>
          <div>
            <div>
              <b>Rank: </b>
              <span>{{ account.Level.value }}</span>
            </div>
            <div>
              <b>Points: </b>
              <span>{{ account.points }}</span>
            </div>
            <div>
              <b>Total completed tasks: </b>
              <span>{{ account.Level.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="t-w-1/3 max-md:t-mt-3">
        <div>
          <div>
            <b>Rank: </b>
            <span>{{ account.Level.value }}</span>
          </div>
          <div>
            <b>Points: </b>
            <span>{{ account.points }}</span>
          </div>
          <div>
            <b>Total completed tasks: </b>
            <span>{{ account.Level.value }}</span>
          </div>
        </div>
      </div>
      <div class="t-w-1/3 max-md:t-mt-3">
        <div>
          <div>
            <b>Rank: </b>
            <span>{{ account.Level.value }}</span>
          </div>
          <div>
            <b>Points: </b>
            <span>{{ account.points }}</span>
          </div>
          <div>
            <b>Total completed tasks: </b>
            <span>{{ account.Level.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex relative mt-5 max-md:t-flex-col">
      <div class="t-w-1/2">
        <p class="relative t-left-12">
          Honor breakdown
        </p>
        <div class="flex ">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-chart-pie pi" style="font-size:2.5rem" />
          </div>
          <div>
            <div>
              <b>Rank: </b>
              <span>{{ account.Level.value }}</span>
            </div>
            <div>
              <b>Points: </b>
              <span>{{ account.points }}</span>
            </div>
            <div>
              <b>Total completed tasks: </b>
              <span>{{ account.Level.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="t-w-1/2">
        <p>Rank breakdown</p>
        <Knob v-model="percents" disabled value-color="SlateGray" range-color="MediumTurquoise" />
      </div>
    </div>
    <div class="flex relative mt-5 max-md:t-flex-col">
      <div class="t-w-1/2">
        <p class="relative t-left-12">
          Contributions
        </p>
        <div class="flex ">
          <div class="t-w-12 max-md:t-hidden">
            <i class="pi-chart-pie pi" style="font-size:2.5rem" />
          </div>
          <div>
            <div>
              <b>Comments: </b>
              <span>{{ account.Level.value }}</span>
            </div>
            <div>
              <b>Bookmarks: </b>
              <span>{{ account.points }}</span>
            </div>
            <div>
              <b>Mb created tasks: </b>
              <span>{{ account.Level.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
