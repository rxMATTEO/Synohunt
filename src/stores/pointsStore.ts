import { reactive } from 'vue';
import { defineStore, useFetch } from '../../.nuxt/imports';

export const useSidebarStore = defineStore('sidebarStore', () => {
  const currentPoints = reactive({ value: 0 });

  function getPoints () {
    currentPoints.value = useFetch();
    return currentPoints.value;
  }
  function setPoints (isVisible: boolean) {
    currentPoints.value = isVisible;
    return currentPoints.value;
  }
  return ({
    isExpanded: currentPoints,
    toggleMenu: getPoints,
    setMenuVisibility: setPoints
  });
});
