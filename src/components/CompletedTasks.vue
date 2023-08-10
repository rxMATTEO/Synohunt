<script setup lang="ts">
const { data: { value: { user: { account } } } } = useAuth();
const completedTasks = (await useFetch('/api/task/completed', {
  method: 'POST',
  body: {
    userId: account.id
  }
})).data.value;
</script>

<template>
  <DataView
      :value="completedTasks"
      paginator
      :rows="5"
  >
    <template #list="slotProps">
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <div class="text-2xl font-bold text-900">
                <p v-html="slotProps.data.Task.description"></p>
              </div>
              <Rating :model-value="slotProps.data.rating" readonly :cancel="false" />
              <div class="flex align-items-center gap-3">
                        <span class="flex align-items-center gap-2">
                          <i class="pi pi-tag" />
                          <span class="font-semibold">{{ slotProps.data.Task.Word.word }}</span>
                        </span>
                <Tag :value="slotProps.data" severity="" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <div v-for="syno in slotProps.data.Task.Word.Synonym">
                <p>{{ syno.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<style scoped lang="sass">

</style>