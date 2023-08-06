import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';

export const usePointsStore = defineStore('pointsStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const currentPoints = reactive({ value: account.points });

  function getPoints () {
    return currentPoints.value;
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
    currentPoints.value = fetch.data.value.points;
    return fetch.data;
  }

  async function getPointsToNextLvl () {
    return (await useFetch('/api/points/toNextLevel', {
      method: 'POST',
      body: {
        userId: account.userId
      }
    })).data.value;
  }

  function calculatePercentOfPointsProgress (currentPoints, nextLvlPoints) {
    return (currentPoints / nextLvlPoints) * 100;
  }
  return ({
    currentPoints,
    getPoints,
    setPoints,
    calculatePercentOfPointsProgress,
    getPointsToNextLvl
  });
});
