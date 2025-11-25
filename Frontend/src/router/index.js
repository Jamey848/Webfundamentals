import {createRouter, createWebHistory } from 'vue-router';

// --------- Pages
import Home from "@/pages/Home.vue";
import Artists from "@/pages/Artists.vue";
import AddReceipt from "@/pages/AddReceipt.vue";
import Receipts from "@/pages/Receipts.vue";
import Productlist from "@/Pages/Productlist.vue";
import Metrics from "@/pages/Metrics.vue";


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
        path: '/addreceipt',
        name:'addreceipt',
        component: AddReceipt
    },
    {
        path: '/metrics',
        name: 'metrics',
        component: Metrics
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;