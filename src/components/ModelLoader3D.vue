<script setup lang="ts">
import { vue3dLoader } from 'vue-3d-loader';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/themeStore';

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
    groundColor: '#20262e',
    position: { x: 1, y: 1, z: 1 },
    intensity: 0.2
  }
];

const height = ref(0);
const width = ref(0);

const background = ref('');

function setBackground (delay: number) {
  setTimeout(() => {
    const globalStyle = getComputedStyle(document.body);
    background.value = globalStyle.getPropertyValue('--surface-b');
  }, delay);
}

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

onMounted(() => {
  setBackground(200);
  watch(currentTheme.value, () => setBackground(50));
  width.value = window.innerWidth / 2;
  height.value = window.innerHeight / 2;
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
}
</script>

<template>
  <vue3d-loader
    :height="height"
    :width="width"
    :camera-position="{ x: 10, y: 10, z: 100 }"
    :background-color="background"
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
