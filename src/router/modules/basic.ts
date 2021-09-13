import { RouteRecordRaw } from 'vue-router'
import BaseLayout from '@/layout/index.vue'

export const basicRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        component: BaseLayout,
        children: [
            {
                path: 'login',
                component: () => import('@/views/home.vue'),
            },
            {
                path: 'table',
                component: () => import('@/views/table.vue'),
            },
        ],
    },
]
