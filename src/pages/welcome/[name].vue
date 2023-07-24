<template>
  <div>
    <NuxtLayout name="orange"/>
    <div class="flex">cum</div>
    <p>{{`Hello ${$route.params.name}`}}</p>
    <p v-if="pending">Loading</p>
    <p v-else>Here is username: {{delayed}}</p>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const color = ref('red');
const {data: delayed, pending} = useLazyFetch('https://hub.dummyapis.com/delay?seconds=5', {server: false});
</script>

<style scoped lang="sass">
.flex
  color: $secondary
  background-color: v-bind(color)
</style>