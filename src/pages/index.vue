<template>
<div class="surface-ground">
  <div class="logo-holder absolute inline-block z-1 max-w-full overflow-hidden">
    <img src="/img/biglogo.png" class="logo relative max-w-full overflow-hidden" alt="logo" />
  </div>
  <div class="main z-1 flex flex-column align-items-center justify-content-center absolute h-screen w-screen">
    <p class="welcome-text text-3xl text-center font-bold">Unleash your word wizardry. Conquer synonyms.</p>
    <div>
      <Button label="Play Now" rounded class="mr-3"/>
      <Button label="Learn More" rounded/>
    </div>
  </div>
  <div class="lg:px-8 lg:mx-8 px-3">
    <div class="h-screen text-color main-screen pt-3">
      <p>SynoHunt</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'index.vue'
};
</script>

<style scoped lang="sass">
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