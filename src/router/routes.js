const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/posts/:id', component: () => import('pages/id.vue') },
      {
        path: '/news_feeds/:id',
        component: () => import('pages/category.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/admin/index.vue') },
      { path: '/new', component: () => import('pages/admin/new.vue') },
      { path: '/edit/:id', component: () => import('pages/admin/edit.vue') },
      {
        path: '/settings',
        component: () => import('pages/admin/settings.vue'),
      },
      {
        path: '/admin/posts/:id',
        component: () => import('pages/admin/adminPreview.vue'),
      },
    ],
  },
  {
    path: '',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { login: true },
    children: [
      { path: '/admin/login', component: () => import('pages/auth/login.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
