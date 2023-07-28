<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';

const {isExpanded} = useSidebarStore();
const props = defineProps({
  expanded: Function,
});
</script>

<template>
  <div :class="{expanded: isExpanded.value}" class="fixed surface-card shadow-8 right-0 header">
    <div class="flex justify-content-between w-full">
      <div>
        <Button @click="expanded">Hi</Button>
      </div>
      <div>hiaasddsasadsadsdsa</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.header
  left: 0
  &.expanded
    left: 14rem // todo remove hardcode plz

</style>