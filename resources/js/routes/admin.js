export default {
  mode: 'history',
  linkActiveClass: 'underline',
  routes: [
    {
      name: 'Admin',
      path: '/admin',
      component: () => import(/* webpackChunkName: "js/pages/admin.home" */'../pages/admin/home')
    },
    {
      name: 'Pages',
      path: '/admin/pages',
      component: () => import(/* webpackChunkName: "js/pages/admin.pages" */'../pages/admin/pages/index'),
    },
    {
      name: 'Create Page',
      path: '/admin/pages/create',
      component: () => import(/* webpackChunkName: "js/pages/admin.pages" */'../pages/admin/pages/create')
    },
    {
      name: 'Posts',
      path: '/admin/posts',
      component: () => import(/* webpackChunkName: "js/pages/admin.posts" */'../pages/admin/posts/index'),
    },
    {
      name: 'Create Post',
      path: '/admin/posts/create',
      component: () => import(/* webpackChunkName: "js/pages/admin.posts" */'../pages/admin/posts/create')
    },

    {
      path: '*',
      component: () => import(/* webpackChunkName: "js/pages/404" */'../pages/not-found')
    }
  ]
}
