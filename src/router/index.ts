import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/about.vue')
    },
    {
        path: '/table',
        component: () => import('@/views/table.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory('/')
})

export const setupRouter = (app: App) => {
    app.use(router)
}

export default router


