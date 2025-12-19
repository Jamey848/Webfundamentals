import {createRouter, createWebHistory } from 'vue-router';

// --------- Pages
import Home from "@/pages/Home.vue";
import AddReceipt from "@/pages/AddReceipt.vue";
import Receipts from "@/pages/Receipts.vue";
import Productlist from "@/Pages/Productlist.vue";
import Metrics from "@/pages/Metrics.vue";
import Recommendations from "@/pages/Recommendations.vue";
import Userdashboard from "@/pages/Userdashboard.vue";
import Admin from "@/pages/Admin.vue";


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
    },
    {
        path: '/recommendations',
        name: 'recommendations',
        component: Recommendations
    },
    {
        path: '/userdashboard',
        name: 'userdashboard',
        component: Userdashboard
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;