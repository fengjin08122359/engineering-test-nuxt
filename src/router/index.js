import Vue from 'vue'
import Router from 'vue-router'
import {engineerList} from '@/layout/index' 
import {AppendTo} from '@/layout'
const Main = () => import('../pages/Main.vue')
const Single = () => import('../pages/Single.vue')

console.log()

const generateRouterVue = () =>{
    return engineerList.map(item => {
        return {
            path: `/${item.name}`,
            name: `${item.name}`,
            component:   {
                    mounted() {
                        AppendTo(item.name, this.$refs.main)
                    },
                    render(h, data) {
                        return (
                            <div>
                                <div ref='main'></div>
                                <div>{item.name}</div>
                            </div>
                        )
                    }
                }
        }
    })
}


Vue.use(Router);

var router = new Router({
    mode:'history',
    routes: [
        {
          path: '/Main',
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
    ].concat(generateRouterVue())
})

window.router = router


export default router