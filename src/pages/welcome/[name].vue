<template>
  <div>
    <div class="flex">cum</div>
    <p>{{`Hello ${$route.params.name}`}}</p>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  created() {
  },
  data() {
    return {color: 'red'};
  }
};
</script>

<style scoped lang="sass">
.flex
  color: $secondary
  background-color: v-bind(color)
</style>