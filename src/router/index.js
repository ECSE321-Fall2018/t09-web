import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login/login.vue'
import Fleet from '@/components/fleet-status-overview/Fleet.vue'
import Ranking from '@/components/ranking/ranking.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fleet',
      name: 'Fleet',
      component: Fleet
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})
