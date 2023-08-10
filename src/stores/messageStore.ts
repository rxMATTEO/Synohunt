import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import type { Message } from "@prisma/client";

export const useMessageStore = defineStore('messageStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const messages: {value: Message[]} = reactive({ value: account.Message });

  function getMessages () {
    return messages.value;
  }
  function addMessage (msgText: string) {
    messages.value.push(msgText);
  }
  return ({
    getLvl,
    upgradeLvl,
    level: messages
  });
});
