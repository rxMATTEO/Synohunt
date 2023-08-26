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
  <h1 class="text-4xl font-bold mb-5">
    Completed tasks
  </h1>
  <DataView
    :value="completedTasks"
    paginator
    :rows="5"
  >
    <!--    todo remember solved synonyms on plaay page pls-->
    <template #list="slotProps">
      <NuxtLink :to="`/play/${slotProps.data.Task.id}`" class="block w-full">
        <GradientBox :gradient-name="slotProps.data.Task.Difficulity.name.toLowerCase()" class="mb-5">
          <template #left-side>
            <div class="col-12 relative">
              <div class="flex flex-column xl:flex-row xl:align-items-start px-4 py-2 gap-4">
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      <p>{{ slotProps.data.Task.Word.word }}</p>
                    </div>
                    <p v-html="slotProps.data.Task.description" />
                  </div>
                </div>
              </div>
              <div class="relative t-bottom-0 t-left-5">
                <Tag :value="slotProps.data.Task.Language.langFull" />
                <Tag class="ml-3" :value="slotProps.data.Task.Difficulity.name" />
              </div>
            </div>
          </template>
          <template #right-side>
            <div class="p-4">
              <div class="flex max-lg:t-flex-col align-items-center sm:align-items-end gap-3 sm:gap-2">
                <div v-for="syno in slotProps.data.Task.Word.Synonym">
                  <Tag class="bg-gray-300 hover:bg-gray-500 transition-all animation-ease-in-out transition-duration-300">
                    {{ syno.value }}
                  </Tag>
                </div>
              </div>
            </div>
          </template>
        </GradientBox>
      </NuxtLink>
    </template>
  </DataView>
</template>

<style scoped lang="sass">

</style>
