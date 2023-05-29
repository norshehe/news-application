// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "HeadlineList",
        component: () =>
          import(
            /* webpackChunkName: "headline-list" */ "@/views/HeadlineList.vue"
          ),
        meta: {
          title: "News | Headlines",
        },
      },
      {
        path: ":slug",
        name: "HeadlineDetail",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HeadlineDetail.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
