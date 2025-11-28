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

    async function deleteBudget(budgetID){
        const deletedBudget = await fetch("http://localhost:3000/dashboard/budget/" + parseInt(budgetID), {
            method: "DELETE"
        });
        const data = await deletedBudget.json();
        if(data.error){
            alert("Unable to remove the item. Please try again later");
        }

        budgets.value = budgets.value.filter(b => b.budgetID !== budgetID);
    }

    function getBudgetColor(percentage) {
        if (percentage > 70) return '#d4edda';  // green-ish for high remaining
        if (percentage > 30) return '#fff3cd';  // yellow-ish for medium remaining
        return '#f8d7da';                        // red-ish for low remaining
    }

</script>

<!--
    Template
-->
<template>
    <div class="page-layout">
        <div class="user-budgets">
            <h1>Welcome Back!</h1>
            <div class="total-spent">
                <p v-if="totalamount.length">Your current total spend is: €{{ totalamount }}</p>
            </div>
            <h2>Your current budgets</h2>
            <div v-for="budget in budgets" :key="budget.budgetID" class="budgets" :style="{ backgroundColor: getBudgetColor(parseInt(budget.spent_budget)) }">
                <p>Budget #{{ budget.budgetID }}. Amount: {{ budget.budgetamount }}. Percentage left: {{ budget.spent_budget }}%</p>
                <!--<p style="position:relative; right:100px" v-if="budget.startdate">Timeslot: {{ budget.startdate.slice(0, 10) }} | {{ budget.enddate.slice(0, 10) }}</p>-->
                <img @click="deleteBudget(budget.budgetID)" class="trash-icon" src="@/assets/trash.png" style="width:30px; height:30px">
            </div>
            <button>Add budget</button>
        </div>
        <div class="user-card">
            <h3>Your Account</h3>

            <img src="@/assets/defaultpfp.png" style="width:300px; height:300px">
            <p>{{ username }}</p>
            <p>{{ gmail }}</p>

            <button>Change your account settings</button>
        </div>
    </div>
</template>

<style scoped>
    .page-layout{
        display: flex;
        flex-direction: row;
    }
    .user-budgets {
        width: 750px;
        max-height: 500px;
        overflow-y: auto;
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

    .user-card{
        display:block;
        margin-left:40px;
        margin-top: 50px;
        background-color: red;
    }

    .user-card {
        width: 500px;
        background: linear-gradient(145deg, #f7f9fc, #eef1f7);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .user-card h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #1a1a1a;
    }

    .user-card img {
        height: 180px;
        border-radius: 50%;
        margin-bottom: 20px;
        border: 5px solid #fff;
    }

    .user-card p {
        margin: 8px 0;
        font-size: 1.1rem;
        color: #333;
        font-weight: 500;
    }

    .user-card p:first-of-type {
        font-size: 1.3rem;
        font-weight: 600;
        color: #000dff;
    }

    .user-card p:last-of-type {
        color: #555;
        font-size: 1rem;
    }

    .trash-icon{
        cursor:pointer;
    }

    .trash-icon:hover{
        transform: scale(1.02)
    }
</style>