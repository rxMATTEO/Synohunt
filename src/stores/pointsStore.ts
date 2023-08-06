import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '../../.nuxt/imports';

export const usePointsStore = defineStore('pointsStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const currentPoints = reactive({ value: account.points });

  function getPoints () {
    return account.points;
  }
  async function setPoints (amount: number) {
    currentPoints.value = currentPoints.value + amount;
    const fetch = await useFetch('/api/points/add', {
      method: 'POST',
      body: {
        userId: account.id,
        amount
      }
    });
    return fetch.data;
  }
  return ({
    currentPoints,
    getPoints,
    setPoints
  });
});
