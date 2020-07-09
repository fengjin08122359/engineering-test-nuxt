<script>
import {
  AppendTo
} from '../../sdk/index'
export default {
  asyncData ({ params, env, error }) {
    return params
  },
  mounted() {
    AppendTo(this.id, this.$refs.main)
  },
  render(h, data){
    return (
        <div>
            <div ref='main'></div>
            <div>{this.id}</div>
        </div>
    )
  }
}
</script>