import { createWebHistory, createRouter } from "vue-router";
import Header from "../layouts/Header.vue";

const routes = [
    {
        path: "/",
        component: Header,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('../views/Test.vue'),
            },

        ],
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;