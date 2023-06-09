import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/servicios',
        name: 'Servicios',
        component: () => import(/* webpackChunkName: "nosotros" */ '@/components/Servicios.vue'),
      },
      {
        path: '/conductores',
        name: 'Conductores',
        component: () => import(/* webpackChunkName: "nosotros" */ '@/components/Conductores.vue'),
      },
      {
        path: '/nosotros',
        name: 'Nosotros',
        component: () => import(/* webpackChunkName: "nosotros" */ '@/components/Nosotros.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
