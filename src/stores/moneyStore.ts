import { defineStore, useAuth, useFetch } from '#imports';

export const useMoneyStore = defineStore('moneyStore', {
  state: () => {
    const { data: { value: { user: { account } } } } = useAuth();
    return {
      currentMoney: account.Money.value
    };
  },
  actions: {
    async setMoney (amount: number) {
      const { data: { value: { user: { account } } } } = useAuth();
      const fetch = await useFetch('/api/money/add', {
        method: 'POST',
        body: {
          userId: account.id,
          amount
        }
      }); // todo add toast
      this.currentMoney = fetch.data.value.Money.value;
      return fetch.data;
    }
  }
});