import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: () => import('../views/ContactsView.vue')
        },
        {
          path: '/:pathMatch(.+)+',
          redirect: '/'
        }
      ]
    }
  ]
})

export default router
