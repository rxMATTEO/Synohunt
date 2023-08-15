import { defineStore, useAuth, useFetch } from '#imports';
import type { NotificationProps } from '@/components/Notification.vue';

type NotificationsStore = {
  () :{
    notifications: NotificationProps[],
    addNotification<T extends NotificationProps>(notification: T): T
  }
}

export const useNotificationsStore: NotificationsStore = defineStore('notificationsStore', {
  state: () => {
    const { data: { value: { user: { account } } } } = useAuth();
    return {
      notifications: [] as NotificationProps[]
    };
  },
  actions: {
    async addNotification (notification: NotificationProps) {
      this.notifications.push(notification);
      return notification;
    }
  }
});
