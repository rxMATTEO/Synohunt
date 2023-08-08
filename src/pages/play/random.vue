<script setup lang="ts">
import {useRouter} from "#imports";

const router = useRouter();
const tasksFetched = $fetch('/api/task/random', {
  method: 'POST',
  body: {
    diff: "Easy",
    lang: "English",
    butId: -1
  }
}).then((res) => {
  router.push(`/play/${res.id}`);
});
</script>

<template>

</template>

<style scoped lang="sass">

</style>