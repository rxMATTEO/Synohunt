<script setup lang="ts">
import { reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLevelStore } from '../stores/levelStore';
import { usePointsStore } from '../stores/pointsStore';
import UserLevelBadge from '@/components/UserLevelBadge.vue';

defineProps({
  onMouseOver: {
    type: Function,
    default: () => {}
  },
  onMouseLeave: Function,
  overlays: Object,
  onlyBadge: Boolean
});
const { data: { value: { user: { account } } } } = useAuth();
const pointsStore = usePointsStore();
const { currentPoints, progress, getPointsToNextLvl } = storeToRefs(pointsStore);
await pointsStore.calculatePercentOfPointsProgress();
const pointsToNextLvl = (await getPointsToNextLvl.value);
const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

watch(currentPoints, async (newPoints, oldPoints) => { // todo move in store and add toast
  progress.value = await pointsStore.calculatePercentOfPointsProgress();
  if (oldPoints + 5 >= pointsToNextLvl.need) {
    levelStore.upgradeLvl();
  }
});

const lvlBreakPoints = [[0, 'bg-bluegray-600'], [10, 'bg-orange-500'], [20, 'bg-indigo-400']];
const userLvlColor = lvlBreakPoints.findLast(([breakPoint, color]) => breakPoint <= +level.value.value);
</script>

<template>
  <div class="badges">
    <div @mouseover="(e) => onMouseOver(e, 'levelOp')">
      <UserLevelBadge :value="+level.value" class="mr-2" />
    </div>
    <OverlayPanel v-if="!onlyBadge" :ref="overlays.levelOp" dismissable class="t-w-[300px]" @mouseleave="() => onMouseLeave('levelOp')">
      <div class="flex t-flex-col w-full">
        <div>
          <p>У вас <span class="text-primary">{{ currentPoints }}</span> очков</p>
          <p class="mt-3">
            Для следующего уровня нужно: {{ pointsToNextLvl.need }}
          </p>
        </div>
        <div class="flex flex-row mt-1">
          <ProgressBar
            :value="+progress"
            class="w-full text-center"
            :pt="{
              value: {
                class: ['animated-gradient-rainbow', 'static'],
              },
              label: {
                class: ['absolute', 't-left-[42%]', 'text-color']
              }
            }"
          />
          <Badge :value="+level.value + 1" severity="danger" class="ml-2" />
        </div>
      </div>
    </OverlayPanel>
    <!--          <Badge :value="8" severity="success" class="mr-2"></Badge>-->
    <!--          <Badge :value="4" severity="info" class="mr-2"></Badge>-->
    <!--          <Badge :value="12" severity="warning" class="mr-2"></Badge>-->
    <!--          <Badge :value="3" severity="danger"></Badge>-->
  </div>
</template>

<style scoped lang="sass">

</style>
