<script setup lang="ts">
import { vue3dLoader } from 'vue-3d-loader';
import { onMounted } from 'vue';

const rotation = ref();
rotation.value = {
  x: 220,
  y: 0,
  z: 0
};

function onLoad () {
  rotate();
}
const lights = [

  {
    type: 'DirectionalLight',
    position: { x: 1, y: 1, z: 1 },
    color: 'white',
    intensity: 0.8
  },
  {
    type: 'DirectionalLight',
    position: { x: 1, y: 1, z: 1 },
    color: 'purple',
    intensity: 1
  },
  {
    type: 'HemisphereLight',
    skyColor: 'purple',
    groundColor: '#af00ff',
    position: { x: 1, y: 1, z: 1 },
    intensity: 0.2
  }
];
onMounted(() => {
  window.addEventListener('mousemove', (e: MouseEvent) => {
    const { x, y } = e;
    lights[0].position.x = x;
    lights[0].position.y = y;
  });
});
// [{ type: 'DirectionalLight', position: { x: 1, y: 1, z: 1 }, color: '#FF3630', intensity: 1, }]
function rotate () {
  rotation.value.y -= 0.007;
  requestAnimationFrame(() => rotate());
}</script>

<template>
  <vue3d-loader
    :height="920"
    :width="960"
    :camera-position="{ x: 10, y: 10, z: 200 }"
    background-color="#20262e"
    :web-g-l-renderer-options="{ antialias: true, alpha: true }"
    file-path="/img/models/synohunt.obj"
    file-type="obj"
    :rotation="rotation"
    :lights="lights"
    output-encoding="linear"
    :controls-options="
      {
        enableZoom: false
      }"
    @load="onLoad"
  />
</template>

<style scoped lang="sass">

</style>
