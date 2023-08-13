import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import {useNotificationsStore} from "@/stores/notificationsStore";

export const useLevelStore = defineStore('levelStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const level = reactive({ value: account.Level.value });
  const notificationsStore = useNotificationsStore();

  function getLvl () {
    return level.value;
  }
  function upgradeLvl () {
    notificationsStore.addNotification({description: 'Congratz', title: 'Hi', secondaryText: 'u like level upgrade and shit'});
    level.value = +level.value + 1;
  }
  return ({
    getLvl,
    upgradeLvl,
    level
  });
});
