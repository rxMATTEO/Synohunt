import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';

export const usePointsStore = defineStore('pointsStore', {
  state: () => {
    const { data: { value: { user: { account } } } } = useAuth();
    return {
      currentPoints: account.points,
      progress: 0
    };
  },
  getters: {
    async getPointsToNextLvl () {
      const { data: { value: { user: { account } } } } = useAuth();
      return (await useFetch('/api/points/toNextLevel', {
        method: 'POST',
        body: {
          userId: account.userId
        }
      })).data.value;
    }
  },
  actions: {
    async calculatePercentOfPointsProgress () {
      const { data: { value: { user: { account } } } } = useAuth();
      const pointsToNextLvl = await $fetch('/api/points/toNextLevel', {
        method: 'POST',
        body: {
          userId: account.id
        }
      });
      const currentPoints = this.currentPoints;
      const nextLvlPoints = pointsToNextLvl.need;
      this.progress = (currentPoints / nextLvlPoints) * 100;
      return (currentPoints / nextLvlPoints) * 100;
    },
    async setPoints (amount: number) {
      const { data: { value: { user: { account } } } } = useAuth();
      const fetch = await useFetch('/api/points/add', {
        method: 'POST',
        body: {
          userId: account.id,
          amount
        }
      }); // todo add toast
      this.currentPoints = fetch.data.value.points;
      this.progress = await this.calculatePercentOfPointsProgress();
      return fetch.data;
    }
  }
});
