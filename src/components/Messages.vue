<script setup lang="ts">
import type {useFetch} from "nuxt/app";
import {useMessageStore} from "../stores/messageStore";
import {reactive} from "vue";

const messageStore = useMessageStore();
const messages = reactive({ value: messageStore.messages.value });
</script>

<template>
<div>
  <div>
    <p v-for="msg in messages">
      {{msg}}
    </p>
  </div>
</div>
</template>

<style scoped lang="sass">

</style>