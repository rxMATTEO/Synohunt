<template>
  <div class="flex">cum</div>  <img src="/img/smook.jpg" alt="smook"/>
  <img src="~/assets/quandale.png" alt="goofy ahh"/>
  <p>{{`Hello ${$route.params.name}`}}</p>
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