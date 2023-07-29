<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';

const {isExpanded} = useSidebarStore();
defineProps({
  expanded: Function,
});
</script>

<template>
  <div :class="{expanded: isExpanded.value}" class="t-transition-all t-ease-in-out t-duration-200 fixed surface-card shadow-8 right-0 header">
    <div class="flex align-items-center justify-content-between w-full py-2">
      <div>
        <Button @click="expanded" unstyled class="">
          <i class="pi pi-align-justify text-2xl vertical-align-middle"></i>
        </Button>
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