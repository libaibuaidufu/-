import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jd from '@/components/JD'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Jd',
      component: Jd
    }
  ]
})
