import Vue from "vue";
import VueRouter from "vue-router";
import CarCatalog from "../views/CarCatalog.vue";
import CarPage from "../views/CarPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "CarCatalog",
        component: CarCatalog,
    },
    {
        path: "/car/:id",
        name: "CarPage",
        component: CarPage,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
