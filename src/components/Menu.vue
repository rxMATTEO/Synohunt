<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'GradientBox',
  props: {
    pages: Array,
    index: Number
  },
  setup (props, { slots }) {
    return  function () {
      console.log('hi')
      return (<div>
      {props.pages[props.index]}
    </div>)};
  }
});
</script>

<style scoped lang="sass">

</style>
