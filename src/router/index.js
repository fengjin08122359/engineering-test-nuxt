import Vue from 'vue'
import Router from 'vue-router'


const Main = () => import('../pages/Main.vue')
const Single = () => import('../pages/Single.vue')

Vue.use(Router);

var router = new Router({
    mode:'history',
    routes: [
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
            path: '/Single',
            name: 'Single',
            component: Single
        },
        {
            path: '/Error',
            name: 'Error',
            component: Main
        }
    ],
})

export default router