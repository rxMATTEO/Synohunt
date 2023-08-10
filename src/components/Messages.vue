<script setup lang="ts">
import type {useFetch} from "nuxt/app";
import {useMessageStore} from "../stores/messageStore";
import {reactive} from "vue";

const messageStore = useMessageStore();
const messages = reactive({ value: messageStore.messages.value });

const buttonItems = [
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
    }
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
    }
  },
  { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];
</script>

<template>
<div>
  <div>
    <SplitButton type="null" label="Update" icon="pi pi-plus" :model="buttonItems" />
    <p v-for="msg in messages">
      {{msg}}
    </p>
  </div>
</div>
</template>

<style scoped lang="sass">

</style>