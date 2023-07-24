<template>
  <div>
    <NuxtLayout name="orange"/>
    <div class="flex">cum</div>
    <p>{{`Hello ${$route.params.name}`}}</p>
    <p v-if="pending">Loading</p>
    <p v-else>Here is username: {{delayed}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'welcome',
  mounted() {
    useLazyFetch('https://hub.dummyapis.com/delay?seconds=5').then((data) => { // TODO mb turn into watch or smthg?
      data.execute().then((response) => {
        console.log(data);
        this.delayed = data.data.value;
        this.pending = false;
      });
    });
  },
  data() {
    return {
      color: 'red',
      delayed: {},
      pending: true,
    };
  }
};
</script>

<style scoped lang="sass">
.flex
  color: $secondary
  background-color: v-bind(color)
</style>