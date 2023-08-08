<script setup lang="ts">
import {reactive, watch} from 'vue';
import {useLevelStore} from '../stores/levelStore';
import {usePointsStore} from '../stores/pointsStore';

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
const { currentPoints, calculatePercentOfPointsProgress, getPointsToNextLvl } = usePointsStore();
const levelStore = useLevelStore();
const level = levelStore.level;
const points = currentPoints;
const pointsToNextLvl = await getPointsToNextLvl();
const progress = reactive({ value: 0 });
progress.value = await calculatePercentOfPointsProgress();

watch(points, async (newPoints) => { // todo move in store and add toast
  progress.value = await calculatePercentOfPointsProgress();
  if (newPoints.value >= pointsToNextLvl.need) {
    level.value = +level.value + 1;
  }
});
</script>

<template>
  <div class="badges">
    <Badge :value="level.value" class="mr-2" @mouseover="(e) => onMouseOver(e, 'levelOp')" />
    <OverlayPanel v-if="!onlyBadge" :ref="overlays.levelOp" dismissable class="t-w-[300px]" @mouseleave="() => onMouseLeave('levelOp')">
      <div class="flex t-flex-col w-full">
        <div>
          <p>У вас <span class="text-primary">{{ points.value }}</span> очков</p>
          <p class="mt-3">
            Для следующего уровня нужно: {{ pointsToNextLvl.need }}
          </p>
        </div>
        <div class="flex flex-row mt-1">
          <ProgressBar
            :value="+progress.value.toFixed(1)"
            class="w-full text-center"
            :pt="{
              value: {
                class: ['animated-gradient-rainbow'],
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
