import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';

export const usePointsStore = defineStore('pointsStore', {
  state: () => {
    const { data: { value: { user: { account } } } } = useAuth();
    return {
      currentPoints: account.points,
      progress: 0,
      toNextLvl: 0
    };
  },
  getters: {
    async getPointsToNextLvl (state) {
      const { data: { value: { user: { account } } } } = useAuth();
      state.toNextLvl = (await useFetch('/api/points/toNextLevel', {
        method: 'POST',
        body: {
          userId: account.userId
        }
      })).data.value;
      return state.toNextLvl;
    }
  },
  actions: {
    async calculatePercentOfPointsProgress () {
      const pointsToNextLvl = this.toNextLvl;
      const currentPoints = this.currentPoints;
      const nextLvlPoints = pointsToNextLvl.need;
      this.progress = +((currentPoints / nextLvlPoints) * 100).toFixed(1);
      return this.progress;
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
