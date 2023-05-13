import { createRouter, createWebHistory } from "vue-router";

import NotFound from '../components/Layouts/NotFound.vue';
import Index from '../views/Index.vue';
import APropos from '../views/APropos.vue';
import Experiences from '../views/Experiences.vue';
import Formations from '../views/Formations.vue';
import Competences from '../views/Competences.vue';
import Langues from '../views/Langues.vue';
import Autres from '../views/Autres.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/a-propos',
            name: 'APropos',
            component: APropos
        },
        {
            path: '/experiences',
            name: 'Experiences',
            component: Experiences
        },
        {
            path: '/formations',
            name: 'Formations',
            component: Formations
        },
        {
            path: '/competences',
            name: 'Competences',
            component: Competences
        },
        {
            path: '/langues',
            name: 'Langues',
            component: Langues
        },
        {
            path: '/autres',
            name: 'Autres',
            component: Autres
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
            meta: {
                title: 'Page Not Found'
            }
        },
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ?? 'Baina'
    next()
})
export default router;