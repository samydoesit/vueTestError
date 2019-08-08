import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

const routerConfig = {
  helloworld: {
    pageTitle: 'testProblem',
    props: {
      msg: 'Helloworld'
    }
  },
  '/': {
    pageTitle: 'Home',
    props: {
      msg: 'Hi your are on Home'
    }
  }
}

const routeArray = router.setUpRoutes(routerConfig)
router.addRoutes(routeArray)

// Vue.use(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
