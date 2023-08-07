<script setup lang="ts">
const { data: { value: { user: { account } } } } = useAuth();
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-200 t-rounded-md p-5">
          <div class="flex flex-column">
            <div class="flex">
              <Badge />
              <div>{{ account.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
</style>
