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
const pointsStore = usePointsStore();
const { currentPoints, progress, getPointsToNextLvl } = storeToRefs(pointsStore);
pointsStore.calculatePercentOfPointsProgress();
const { data: pointsToNextLvl } = await useAsyncData('ptsNextLvl', () => getPointsToNextLvl.value);
const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);
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
            :value="progress"
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
