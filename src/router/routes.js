const routes = [{
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [

      {
        path: '/',
        component: () => import('pages/NewDrops.vue')
      },
    

  {
    path: '/cart',
    component: () => import('pages/Cart.vue'),
  },
  {
    path: '/apparel',
    component: () => import('pages/Apparel.vue')
  },
  {
    path: '/profile',
    component: () => import('pages/Profile.vue')
  },
    ]
  },
    // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes