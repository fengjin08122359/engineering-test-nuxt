<template>
  <div class="container">
    <div class="left">
      <ul class="players">
        <li v-for="(item, index) in engineerList" :key="index">
          <NuxtLink :to="'/'+item.name">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="right">
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
import {
  engineerList,
  loadIncludeFolders,
} from '../sdk/index'


export default {
  data() {
    return {
      engineerList: []
    }
  },
  mounted() {
    loadIncludeFolders()
    this.engineerList = engineerList
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
