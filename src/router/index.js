import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import dataList from '@/components/dataList'
import dataView from '@/components/dataView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/:type',
    name: 'dataList',
    component: dataList
  },
  {
    path: '/:type/:id',
    name: 'dataView',
    component: dataView
  }
  ]
})
