import { onMounted, onUnmounted } from 'vue';
import { useState } from '#imports';

export default function useMouse () {
  const x = useState('x', () => 0);
  const y = useState('y', () => 0);

  function update (event: MouseEvent) {
    x.value = event.x;
    y.value = event.y;
  }

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));
  return { x, y };
}
