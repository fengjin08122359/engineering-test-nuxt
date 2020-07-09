<template>
  <div id="app">
    <div v-for="(item, index) in engineerList" :key="index" @click="jump(item)">
      {{item.name}}
    </div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import {engineerList} from '@/layout/index' 
export default {
  name: 'App',
  data() {
    return {
      engineerList
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    jump (item) {
      this.$router.push({
        name: item.name
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  opacity: 1;
  
}
::placeholder {
  color: gray;
}
</style>
