import { reactive, ref } from 'vue';
import type { Message, MessageStatus } from '@prisma/client';
import type { MessageStatuses } from '@/server/prisma/seed';
import { defineStore, useAuth, useFetch } from '#imports';

export const useMessageStore = defineStore('messageStore', () => {
  const { data: { value: { user: { account } } } } = useAuth();
  const messages: {value: Message[]} = reactive({ value: account.Message });

  function getMessages () {
    return messages.value;
  }

  async function fetchMessages () {
    const fetchedMessages = await $fetch('/api/messages/get', {
      method: 'POST',
      body: {
        userId: account.id
      }
    });
    messages.value = fetchedMessages.Message;
    return fetchedMessages;
  }

  type SeverityName = 'success' | 'warning' | 'danger';
  function getSeverity (message: Message & { Status: MessageStatus }): SeverityName {
    type MessageSeverities = {
      [k in MessageStatuses]: SeverityName
    }
    const severities: MessageSeverities = {
      Pending: 'danger',
      Read: 'success',
      Send: 'warning'
    };
    const status = message.Status.value as MessageStatuses;
    return severities[status];
  }
  async function addMessage (message: Pick<Message, 'topic' | 'value' | 'imgPath'>) {
    const postedMessage = await $fetch('/api/messages/create', {
      method: 'POST',
      body: {
        userId: account.id,
        text: message.value,
        topic: message.topic,
        imgPath: message.imgPath
      }
    });
    messages.value = [...messages.value, postedMessage];
    return messages.value;
  }

  async function updateMessage (msgs: []) {
    const updatedMessages = await $fetch('/api/messages/update', {
      method: 'POST',
      body: {
        userId: account.id,
        messages: msgs
      }
    }).then(async () => {
      await fetchMessages();
    });
    return messages.value;
  }

  async function removeMessage (msgs: []) {
    const removedMsg = await $fetch('/api/messages/remove', {
      method: 'POST',
      body: {
        userId: account.id,
        messages: msgs
      }
    });
    messages.value = messages.value.concat().filter(msg => !msgs.find(ms => ms.id === msg.id));
    return messages.value;
  }
  return ({
    getMessages,
    messages,
    addMessage,
    getSeverity,
    fetchMessages,
    removeMessage,
    updateMessage
  });
});
