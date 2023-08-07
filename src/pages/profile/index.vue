<script setup lang="ts">
const { data: { value: { user: { account } } } } = useAuth();
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-200 t-rounded-md p-3">
          <div class="flex flex-column md:flex-row md:gap-5">
            <div class="flex align-items-center">
              <UserLevel :only-badge="true" />
              <div>{{ account.name }}</div>
            </div>
            <div class="mt-3">
              <div>
                <b>Member since: </b>
                <span class="white-space-nowrap">{{ new Date().toLocaleString() }}</span>
              </div>
              <div>
                <b>Last seen: </b>
                <span class="white-space-nowrap">{{ 'Aug 2023' }}</span>
              </div>
            </div>

            <div class="mt-3">
              <div>
                <b>Following: </b>
                <span class="white-space-nowrap">{{ 0 }}</span>
              </div>
              <div>
                <b>Followers: </b>
                <span class="white-space-nowrap">{{ 0 }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-5 mt-5 h-max">
          <div class="t-w-2/3">
            <div class="p-3 t-min-h-full surface-ground t-rounded-md flex">
              <div class="t-w-1/3 md:t-w-1/5">
                <img src="/img/placeholder.png" class="block h-full" alt="todo">
              </div>
              <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
              </div>
            </div>
          </div>

          <div class="t-w-1/3 p-3 surface-ground t-rounded-md h-full flex">
            <div class="t-w-1/3 md:t-w-1/5">
              <img src="/img/placeholder.png" class="block h-full" alt="todo">
            </div>
            <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
              <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
</style>
