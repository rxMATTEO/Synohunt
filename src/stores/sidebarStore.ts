import {reactive} from 'vue';

export const useSidebarStore = defineStore('sidebarStore', () => {
  const isExpanded = reactive({value: false});

  function toggleMenu(){
    isExpanded.value = !isExpanded.value;
    return isExpanded.value;
  }
  return ({
    isExpanded,
    toggleMenu
  });
});