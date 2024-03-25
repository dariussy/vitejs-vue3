import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Home.vue'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import('@/views/About.vue'),
        meta: { layout: 'empty' },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;