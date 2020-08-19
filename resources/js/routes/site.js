export default {
  mode: 'history',
  linkActiveClass: 'underline',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import(/* webpackChunkName: "js/pages/home" */'../pages/home')
    },
    {
      name: 'About',
      path: '/about',
      component: () => import(/* webpackChunkName: "js/pages/about" */'../pages/about')
    },
    {
      name: 'Article',
      path: '/article',
      component: () => import(/* webpackChunkName: "js/pages/article" */'../pages/article')
    },

    /**
     * Global
     */
    {
      path: '*',
      component: () => import(/* webpackChunkName: "js/pages/404" */'../pages/not-found')
    }
  ]
}