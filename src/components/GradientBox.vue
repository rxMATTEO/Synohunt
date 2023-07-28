<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'GradientBox',
  setup(props, { slots }){
    return () => (
      <div class="gradient t-rounded p-1">
        <div class="t-rounded t-background-blur-sm t-bg-black t-bg-opacity-30">
          {slots.default()}
        </div>
      </div>
  )
  }
});
</script>
<style scoped lang="sass">

</style>