import {createRouter, createWebHistory } from 'vue-router';

// --------- Pages
import Home from "@/pages/Home.vue";
import Artists from "@/pages/Artists.vue";
import Ranking from "@/pages/Ranking.vue";
import Receipts from "@/pages/Receipts.vue";
import Productlist from "@/Pages/Productlist.vue";


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
        path: '/productlist/:receiptID',
        name:'productlist',
        component: Productlist
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