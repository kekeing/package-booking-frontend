import Vue from 'vue'
import Router from 'vue-router'
import postpackage from './views/Package.vue'
import reserve from './views/Reserve.vue'
import list from './views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/postpackage',name: postpackage, component : postpackage },
    { path: '/reserve',name: reserve, component : reserve },
    { path: '/list',name: list, component : list },
  ]
})
