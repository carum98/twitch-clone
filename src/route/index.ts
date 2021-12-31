import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/MainDashboard.vue'),
        name: 'dashboard',
    },
    {
        path: '/:name',
        component: () => import('../pages/StreamPage.vue'),
        name: 'stream',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
