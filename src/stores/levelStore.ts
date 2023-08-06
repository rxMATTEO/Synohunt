import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '../../.nuxt/imports';

export const useLevelStore = defineStore('levelStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const level = reactive({ value: account.Level.value });

  function getLvl () {
    return level.value;
  }
  function upgradeLvl () {
    level.value = +level.value + 1;
  }
  return ({
    getLvl,
    upgradeLvl,
    level
  });
});
