<template>
  <div id="Single" >
    <div @click="changeRouter">Single</div>
    <div ref='single'></div>
  </div>
</template>

<script>
import {AppendTo} from '@/layout'
export default {
  name: 'Single',
  data () {
    return {}
  },
  mounted() {
    AppendTo('engineering-test-test', this.$refs.single)
  },
  methods: {
      changeRouter () {
          this.$router.push({
              name: 'Main'
          })
      }
  },
}
</script>

<style>
</style>