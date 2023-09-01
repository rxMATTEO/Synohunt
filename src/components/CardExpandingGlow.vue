<script setup lang="ts">
type CardExpandingGlowProps = {
  header: string,
  mainText: string,
  buttonText: string,
  buttonHref: string,
};
defineProps<CardExpandingGlowProps>();
const isOpened = ref(false);
</script>

<template>
  <div class="container">
    <div class="card" :class="{'opened': isOpened}" @pointerdown="isOpened = !isOpened" @mouseenter="isOpened = true" @mouseleave="isOpened = false">
      <div class="face face1">
        <div class="content">
          <i class="fab fa-apple" />
          <h3>{{ header }}</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>{{ mainText }}</p>
          <a :href="buttonHref" type="button">{{ buttonText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.card
  position: relative
  margin-bottom: -100px
  .face
    width: 100%
    height: 200px
    transition: .4s
    &.face2
      position: relative
      background: whitesmoke
      display: flex
      align-items: center
      justify-content: center
      padding: 20px
      box-sizing: border-box
      box-shadow: 0 20px 50px rgba(0,0,0,.8)
      transform: translateY(-100px)
      .content p, a
        font-size: 10pt
        margin: 0
        padding: 0
        color: #333
      .content a
        text-decoration: none
        color: black
        box-sizing: border-box
        outline : 1px solid #333
        padding: 10px
        margin: 15px 0 0
        display: inline-block
        &:hover
          background: #333
          color: whitesmoke
          box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5)
    &.face1
      position: relative
      background: #333
      display: flex
      justify-content: center
      align-content: center
      align-items: center
      z-index: 1
      transform: translateY(100px)

  &:hover:is(.opened)
    .face.face1
      transform: translateY(0)
      box-shadow: inset 0 0 60px whitesmoke,inset 20px 0 80px #f0f,inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff
    .face.face1 .content
      opacity: 1
    .face.face2
      transform: translateY(0)

  .face.face1
    .content
      opacity: .2
      transition:  0.5s
      text-align: center
      i
        font-size: 3em
        color: white
        display: inline-block
      h3
        font-size: 1em
        color: white
        text-align: center
      a
        transition: .5s
</style>
