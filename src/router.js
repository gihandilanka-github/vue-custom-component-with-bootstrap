import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List'
import Create from './components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },

    {
      path: '/*',
      redirect: { name: 'list' }
    }
  ],
  mode: 'abstract',
  linkActiveClass: 'active'
})
