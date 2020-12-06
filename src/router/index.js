import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage/component.vue'
import Login from '../components/Login/component.vue'
import Password from '../components/Password/component.vue'
import NewAccount from '../components/NewAccount/component.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/login',
    name: 'Password',
    component: Password
  },
  {
    path: '/CreateAccount',
    name: 'NewAccount',
    component: NewAccount
  }
]

const router = new VueRouter({
  routes
})

export default router
