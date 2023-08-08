<script lang="tsx">
import { defineComponent, createElementVNode } from 'vue';

export default defineComponent({
  name: 'GradientBox',
  props: {
    gradientName: String
  },
  setup (props, { slots }) {
    return () => (
      createElementVNode('div', {
        class: [
          `gradient-${props.gradientName} t-rounded p-1`
        ]
      }, [createElementVNode('div', {
        class: ['t-rounded t-background-blur-sm t-bg-black t-bg-opacity-30']
      }, slots.default())])
    );
  }
});
</script>
<style scoped>
</style>
