<script setup lang="ts">
import { Level, User } from '@prisma/client';
import { reactive } from 'vue';

type Props = {
  limit: number
}
const props = defineProps<Props>();
const limit = props.limit;

type Leader = Pick<User, 'name' | 'image' | 'points' | {level: Level}>;

const { pending, data: pointLeaders } = await useLazyFetch(`/api/leaders?quantity=${limit}`, {
  server: false
});

const positionSeverities = {
  1: 'success',
  2: 'info',
  3: 'warning'
};
</script>

<template>
  <div v-if="pending">
    <div class="border-round border-1 surface-border p-4 surface-card">
      <ul class="m-0 p-0 list-none">
        <li class="mb-3">
          <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2" />
            <div class="align-self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2" />
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2" />
            <div class="align-self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2" />
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2" />
            <div class="align-self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2" />
            </div>
          </div>
        </li>
        <li>
          <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2" />
            <div class="align-self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    <DataTable :value="pointLeaders">
      <Column style="width: 25%;" header="Position" class="max-md:!t-p-0">
        <template #body="data: {index: number, data: Leader}">
          <Badge :value="data.index + 1" :severity=" positionSeverities[data.index + 1] " :class="{'surface-500': !positionSeverities[data.index + 1]}" />
        </template>
      </Column>
      <Column header="User" style="width: 100%;" class="max-md:!t-p-0">
        <template #body="data: { data: Leader}">
          <div class="flex align-items-center">
            <div class="mr-3 t-w-[30px]">
              <UserLevelBadge :value="+data.data.Level.value" />
            </div>
            <span class="mr-3 max-md:t-block">{{ data.data.name }}</span>
            <div>
              <img class="t-w-[30px] t-h-[30px]" :src="data.data.image" :alt="data.data.name">
            </div>
          </div>
        </template>
      </Column>
      <Column header="Completed challenge" field="tasks.length" style="width: 25%;" class="max-md:!t-p-0" />
      <!--      todo realize this-->
      <Column header="Points" style="width: 25%;" class="max-md:!t-p-0">
        <template #body="data: { data: Leader}">
          <span>{{ data.data.points }}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped lang="sass">

</style>
