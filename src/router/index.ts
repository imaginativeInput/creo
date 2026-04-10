import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouterScrollBehavior,
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition

  if (to.hash) {
    // Cross-route navigation
    if (from.name && from.path !== to.path) {
      return new Promise<ScrollToOptions | { el: string; top?: number; behavior?: ScrollBehavior }>((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 32,
            behavior: 'smooth',
          })
        }, 400)
      })
    }

    // Same-route hash navigation
    return {
      el: to.hash,
      top: 32,
      behavior: 'smooth',
    }
  }

  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

export default router