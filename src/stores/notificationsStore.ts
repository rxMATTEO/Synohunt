import { ref } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import type { NotificationProps, NotificationsObject } from '@/components/Notification.vue';
import { useMessageStore } from '@/stores/messageStore';

type NotificationsStore = {
  () :{
    addNotification<T extends NotificationProps>(notification: T): T
    deleteNotification<T extends NotificationProps>(id: NotificationProps['id']): T
  }
}

export const useNotificationsStore: NotificationsStore = defineStore('notificationsStore', {
  state: () => {
    const { data: { value: { user: { account } } } } = useAuth();
    return {
      notifications: {} as NotificationsObject
    };
  },
  actions: {
    addNotification (notification: NotificationProps) {
      const msgStore = useMessageStore();
      msgStore.addMessage({
        value: notification.title,
        topic: notification.description,
        imgPath: notification.image
      });
      this.notifications[notification.id] = notification;
      return notification;
    },
    deleteNotification (id : NotificationProps['id']): NotificationsObject {
      delete this.notifications[id];
      return this.notifications;
    }
  }
});
