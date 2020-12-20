import VueRouter from 'vue-router'
import Vue from 'vue'
import mainview from '../components/mainview.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: mainview
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash', // For Github Pages, use Hash.
})

export default router