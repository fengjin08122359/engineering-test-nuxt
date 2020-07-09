<template>
  <div id="Single" >
    
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
    // AppendTo('engineering-test-test', this.$refs.single)
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