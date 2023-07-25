<template>
<div class="surface-ground">
  <div class="logo-holder absolute inline-block z-1 max-w-full overflow-hidden">
    <img src="/img/biglogo.png" class="logo relative max-w-full overflow-hidden" alt="logo" />
  </div>
  <div class="lg:px-8 lg:mx-8 px-3 max-w-full">
    <div class="absolute left-0 right-0">
      <div class="w-full relative z-1">
        <div class="main z-1 flex flex-column align-items-center justify-content-center h-screen">
          <p class="welcome-text text-3xl text-center font-bold">Unleash your word wizardry. Conquer synonyms.</p>
          <div>
            <Button label="Play Now" rounded class="mr-3"/>
            <Button label="Learn More" rounded/>
          </div>
        </div>
      </div>
    </div>
    <div class="h-screen text-color main-screen pt-3">
      <p>SynoHunt</p>
    </div>
    <div>
      <div class="flex sm:justify-content-between sm:flex-row flex-column">
        <p class="sm:text-6xl text-4xl font-bold">SynoHunt: The Ultimate Word Challenge!</p>
        <p class="text-lg">Get ready to embark on a thrilling journey through the world of synonyms. Unleash your inner linguist, and dive into a realm of words and wonders with SynoHunt.</p>
      </div>

      <div class="col-12 md:col-12 lg:col-12 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
        <div
            style="height: 160px; padding: 2px; border-radius: 10px"
        >
          <div class="p-3 surface-card h-full" style="border-radius: 8px">
            <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi-users text-2xl"></i>
            </div>
            <h5 class="mb-2 text-900">Easy to Use</h5>
            <span class="text-600">Posuere morbi leo urna molestie.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.main div
  flex-basis: max-content

.logo-holder
  overflow: hidden
  width: 100%
  height: 100%
  .logo
    max-width: 100%
    max-height: 100%
    display: inline-block
    object-fit: contain
    object-position: center
</style>