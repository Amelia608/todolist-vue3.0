import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                meta: { title: "首页", icon: "dashboard" },
                component: () => import("@/views/dashboard/index.vue"),
            },
        ],
    },
    {
        path: "/example",
        component: Layout,
        redirect: "/example/todolist",
        name: "Example",
        meta: { title: 'Example', icon: 'nested' },
        children: [
            {
                path: "todolist",
                name: "Todolist",
                component: () => import("@/views/todolist/index"),
                meta: { title: "任务列表", icon: "link" },
            },
            {
                path: "table",
                name: "Table",
                component: () => import("@/views/table/index"),
                meta: { title: "表格", icon: "table" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
