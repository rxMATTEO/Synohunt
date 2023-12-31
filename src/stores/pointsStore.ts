import { reactive, watch } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import { useLevelStore } from '@/stores/levelStore';

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
          userId: account.id
        }
      })).data.value;
      return state.toNextLvl;
    }
  },
  actions: {
    async calculatePercentOfPointsProgress () {
      const pointsToNextLvl = await this.getPointsToNextLvl;
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
      });

      if (this.currentPoints + 5 >= this.toNextLvl.need) {
        const levelStore = useLevelStore();
        levelStore.upgradeLvl();
      }
      this.currentPoints = fetch.data.value.points;
      this.progress = await this.calculatePercentOfPointsProgress();
      return fetch.data;
    }
  }
});
