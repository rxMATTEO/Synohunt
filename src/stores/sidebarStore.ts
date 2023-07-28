import {reactive} from 'vue';

export const useSidebarStore = defineStore('sidebarStore', () => {
  const isExpanded = reactive({value: false});

  function toggleMenu(){
    isExpanded.value = !isExpanded.value;
    return isExpanded.value;
  }
  function setMenuVisibility(isVisible: boolean){
    isExpanded.value = isVisible;
    return isExpanded.value;
  }
  return ({
    isExpanded,
    toggleMenu,
    setMenuVisibility
  });
});