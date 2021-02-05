
const routes = [
  {
    path: '/',
    component: () => import('../pages/auth.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/dashboard.vue') },
      { path: '/staffs', component: () => import('pages/staff.vue') },
      { path: '/students', component: () => import('pages/students.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
