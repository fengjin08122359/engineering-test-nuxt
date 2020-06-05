<template>
  <div id="Main" >
    <div @click="changeRouter">Main</div>
    <div ref='main'></div>
  </div>
</template>

<script>
import {AppendTo} from '@/layout'
export default {
  name: 'Main',
  data () {
    return {}
  },
  mounted() {
    AppendTo('engineering-test', this.$refs.main)

  },
  methods: {
      changeRouter () {
          this.$router.push({
              name: 'Single'
          })
      }
  },
}
</script>

<style>
</style>