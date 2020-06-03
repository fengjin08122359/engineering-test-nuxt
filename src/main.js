import Vue from 'vue'
import App from './App.vue'
import {getInstance, mount} from './layout'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var target = getInstance('engineering-test')
if (target) {
  mount(target, 'appid')
}

