<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import useMouse from '../composables/useMouse';
import { useThemeStore } from '@/stores/themeStore';

const vue3dloader = defineAsyncComponent(async () => (await import('vue-3d-loader')).vue3dLoader);
const rotation = ref({
  x: 220,
  y: 0,
  z: 0
});

const loaded = ref(false);
function onLoad () {
  if (!loaded.value) {
    rotate();
    loaded.value = true;
  }
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
// todo figure out wtf is happenning if theme chaning it's speeding up
const height = ref(0);
const width = ref(0);

const background = ref('');

function setBackground (delay: number) {
  setTimeout(() => {
    const globalStyle = getComputedStyle(document.body);
    background.value = globalStyle.getPropertyValue('--surface-b');
  }, delay);
}

const { x, y } = useMouse();

watch([x, y], ([newX, newY]: [number, number]) => {
  lights[0].position.x = newX;
  lights[0].position.y = newY;
});
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

onMounted(() => {
  setBackground(200);
  watch(currentTheme, () => setBackground(50));
  width.value = window.innerWidth / 2;
  height.value = window.innerHeight / 2;
});
function rotate () {
  rotation.value.y -= 0.007;
  requestAnimationFrame(() => rotate());
}

const filePath = computed(() => '/img/models/synohunt.obj');
</script>

<template>
  <div>
    <vue3dloader
      :height="height"
      :width="width"
      :camera-position="{ x: 10, y: 10, z: 100 }"
      :background-color="background"
      :web-g-l-renderer-options="{ antialias: true, alpha: true }"
      :file-path="filePath"
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
  </div>
</template>

<style scoped lang="sass">

</style>
