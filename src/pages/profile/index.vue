<script setup lang="ts">
import { ref } from 'vue';
import ProfileStats from '../../components/ProfileStats.vue';
import CompletedTasks from '../../components/CompletedTasks.vue';
import TabmenuLoader from '../../components/loading/TabmenuLoader.vue'; // to lazy

useHead({
  title: 'My profile'
});

const tabs = [
  ProfileStats,
  CompletedTasks
];
const { data: { value: { user: { account } } } } = useAuth();

const selectedTabIndex = ref(0);
const items = ref([
  {
    label: 'Stats',
    icon: 'pi pi-fw pi-chart-bar'
  },
  {
    label: 'Solutions',
    icon: 'pi pi-fw pi-calendar'
  },
  {
    label: 'Comments',
    icon: 'pi pi-fw pi-pencil'
  },
  {
    label: 'Documentation',
    icon: 'pi pi-fw pi-file'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }
]);

const pending = ref(true);
onMounted(() => {
  pending.value = false;
});

function changeTab (e) {

}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <Profile :account="account" />
    </NuxtLayout>
  </div>
</template>
