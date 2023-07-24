<template>
<div class="surface-ground w-full h-full">
  <div class="lg:px-8 lg:mx-8 px-3">
    <div class="h-screen text-color main-screen pt-3">
      <p>SynoHunt</p>
    <div class="main z-1 flex flex-column align-items-center justify-center relative">
      <p class="welcome-text text-3xl text-center font-bold">Unleash your word wizardry. Conquer synonyms.</p>
      <div>
        <Button label="Play Now" rounded class="mr-3"/>
        <Button label="Learn More" rounded/>
      </div>
    </div>
    <div class="logo-holder absolute top-0 z-0">
      <img src="/img/biglogo.png" class="logo" alt="logo" />
    </div>
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
.main
.logo-holder
  $offset: 20%
  left: -$offset
  .logo
    width: 100% + $offset
    height: 100%
    display: block
    object-fit: cover
    object-position: center
</style>