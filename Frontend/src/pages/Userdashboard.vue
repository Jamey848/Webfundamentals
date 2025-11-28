<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';

    const totalamount = ref('');
    const budgets = ref([]);
    const username = ref('');
    const gmail = ref('');

    onMounted(async () => {
        const dashboardinfo = await fetch("http://localhost:3000/dashboard/dashboardcheck/1");
        const data = await dashboardinfo.json();

        totalamount.value = data.totalamount[0].TotalAmount; // already the value
        budgets.value = data.budgets;
        username.value = data.userinfo.username;
        gmail.value = data.userinfo.gmail;

        console.log(totalamount.value, budgets.value, username.value, gmail.value);
    });

</script>

<!--
    Template
-->
<template>
    <div class="user-budgets">
        <h1>Welcome Back!</h1>
        <div class="total-spent">
            <p v-if="totalamount.length">Your current total spend is: {{ totalamount }}</p>
        </div>
        <h2>Your current budgets</h2>
        <div v-for="budget in budgets" :key="budget.budgetID" class="budgets">
            <p> Amount: {{ budget.budgetamount }}.</p>
            <p style="position:relative; right:100px" v-if="budget.startdate">Timeslot: {{ budget.startdate.slice(0, 10) }} | {{ budget.enddate.slice(0, 10) }}</p>
            <img src="@/assets/trash.png" style="width:30px; height:30px">
        </div>
        <button>Add budget</button>
    </div>
</template>

<style scoped>
    .user-budgets {
        width: 700px;
        margin-left:50px;
        margin-top: 50px;
        background-color: #fdfdfd;
        padding:40px;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
    }

    .user-budgets h1 {
        text-align: center;
        color: #1a1a1a;
    }

    .user-budgets .total-spent {
        display:flex;
        align-items: center;
        text-align: center;
        padding: 10px;
        margin-bottom:30px;
        background-color: #e4e9ff;
        border-radius: 10px;
    }

    .user-budgets .total-spent p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #000dff;
    }

    .user-budgets h2 {
        color: #222;
        border-bottom: 2px solid #ddd;
    }

    .user-budgets .budgets {
        background-color: #f5f7ff;
        padding:20px;
        margin-bottom: 1rem;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }

    .user-budgets .budgets p {
        margin: 0;
        font-size: 1rem;
        color: #333;
    }

    .user-budgets button {
        display:block;
        margin-left:auto;
        justify-items: right;
        padding: 15px;
        font-weight: bold;
        color: #fff;
        background: linear-gradient(135deg, #6b73ff, #000dff);
        border-radius: 8px;
        cursor: pointer;
    }
</style>