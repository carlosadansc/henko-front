import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Properties from '../views/Properties.vue'
import PropertyProfile from '../views/PropertyProfile.vue'
import Terms from '../views/Terms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties
  },
  {
    path: '/property/:id',
    name: 'PropertyProfile',
    component: PropertyProfile
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
