import {createRouter, createWebHistory } from 'vue-router';

// --------- Pages
import Home from "@/pages/Home.vue";
import Artists from "@/pages/Artists.vue";
import Ranking from "@/pages/Ranking.vue";
import Songs from "@/pages/Songs.vue";
import Voting from "@/Pages/Voting.vue";


const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path: '/songs',
        name:'songs',
        component: Songs
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