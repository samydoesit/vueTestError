import Vue from 'vue'
import Router from 'vue-router'
import VueHelper from './vue-helper.es6'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/home.vue'

const compMap = {
  '/': Home,
  helloworld: HelloWorld
}

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL
})
VueHelper.extendRouter(router, compMap)

export default router
