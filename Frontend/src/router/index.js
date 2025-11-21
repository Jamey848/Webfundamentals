import {createRouter, createWebHistory } from 'vue-router';

// --------- Pages
import Home from "@/pages/Home.vue";
import Artists from "@/pages/Artists.vue";
import Ranking from "@/pages/Ranking.vue";
import Receipts from "@/pages/Receipts.vue";
import Voting from "@/Pages/Voting.vue";


const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path: '/receipts',
        name:'receipts',
        component: Receipts
    },
    {
        path: '/artists',
        name:'artists',
        component: Artists
    },
    {
        path: '/voting',
        name:'voting',
        component: Voting
    },
    {
        path: '/ranking',
        name:'ranking',
        component: Ranking
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;