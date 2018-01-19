import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import orgView from '@/components/orgView'

import projectView from '@/components/projectView'

import user from '@/components/user'
import userView from '@/components/userView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/org/:id',
    name: 'orgView',
    component: orgView
  },
  {
    path: '/project/:id',
    name: 'projectView',
    component: projectView
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/user/:id',
    name: 'userView',
    component: userView
  }
  ]
})
