import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index'
import Foot from '../components/foot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'foot',
      component: Foot
    }
  ]
})
