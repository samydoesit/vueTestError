const extendRouter = (router, compMap) => {
  router.setQueryParams = function (params, push = false) {
    const query = Object.assign({}, this.currentRoute.query, params)
    Object.keys(query).forEach(k => (query[k] === undefined) && delete query[k])
    push ? this.push({ query }) : this.replace({ query })
  }
  
  router.afterEach((to, from) => {
    if (!document.title) {
      document.title = to.meta.pageTitle
    }
  })

  router.setUpRoutes = (config) => {
    var routes = []

    Object.keys(config).forEach(key => {
      if (routes.length === 0) {
        routes.push({
          path: '*',
          redirect: '/' + key
        })
      }

      routes.push({
        name: key,
        path: '/' + key,
        component: compMap[key],
        props: config[key].props,
        meta: {
          pageTitle: config[key].pageTitle
        }

      })
    })

    return routes
  }
}

export default {
  extendRouter
}
