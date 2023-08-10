import { reactive } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import type { Message } from "@prisma/client";

export const useMessageStore = defineStore('messageStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const messages: {value: Message[]} = reactive({ value: account.Message });

  function getMessages () {
    return messages.value;
  }
  async function addMessage (msgText: string) {
    const postedMessage = await $fetch('/api/messages/create', {
      method: "POST",
      body: {
        userId: account.id,
        text: msgText,
      }
    });
    messages.value = [...messages.value, postedMessage];
    return messages.value;
  }
  return ({
    getMessages,
    messages,
    addMessage
  });
});
