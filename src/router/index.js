import Vue from 'vue'
import VueRouter from 'vue-router'
import CoffeeHome from '../components/CoffeeHome.vue'

Vue.use(VueRouter)

const routes = [
   {
        path: '/',
        name: 'Home',
        component: CoffeeHome
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/CoffeeAbout.vue')
    },

    {
        path: '/store',
        name: 'Store',

        component: () => import('../components/CoffeeStore.vue')
    },
    {
        path: '/products',
        name: 'products',

        component: () => import('../components/CoffeeProducts.vue')
    },
    
    {
        path: '/products/:productId',
        name: 'productsDetails',

        component: () => import('../components/CoffeeProductsDetails.vue')
    }


]

const router = new VueRouter({
  routes
})

export default router
