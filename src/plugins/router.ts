import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/components/HomePage.vue')
    },
    {
        path: '/#en',
        name: "HomeEn",
        component: () => import('@/components/HomePage.vue'),
    },
    {
        path: "/:catchAll(.*)",
        name: "Other",
        redirect: '/#'
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
