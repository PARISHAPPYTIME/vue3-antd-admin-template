import { RouteRecordRaw } from 'vue-router'

export const basicRouter: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/home',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/about',
        component: () => import('@/views/about.vue'),
    },
    {
        path: '/table',
        component: () => import('@/views/table.vue'),
    },
]
