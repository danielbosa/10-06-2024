import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFound from './pages/NotFound.vue';
import AboutComponent from './pages/AboutComponent.vue';
import ContactComponent from './pages/ContactComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectList,
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: ProjectComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactComponent,
        },
        {
            //fallback route --> qualunque cosa non abbia matchato con path di rotte precedenti, allora matcha qui e rimanda alla not found
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },
    ]
});

export { router };