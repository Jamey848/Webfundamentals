<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';
    import { currentUserID } from "../sessiondata/sessionID"
    import { useRouter } from 'vue-router'
    import budgetwindow from "../components/Budget.vue"
    import addbudgetwindow from "../components/Addbudget.vue"
    import appenduserwindow from "../components/Appenduser.vue"
    import passchangewindow from "../components/Passchange.vue"

    const router = useRouter()

    const totalamount = ref('');
    const budgets = ref([]);
    const username = ref('');
    const gmail = ref('');

    const selectedBudgetID = ref('');

    const blur = ref(false);

    const visibility = ref(false);
    const addvisibility = ref(false);
    const uservisibility = ref(false);
    const passvisibility = ref(false);

    async function loaddashboard() {
        
        const dashboardinfo = await fetch("http://localhost:3000/dashboard/dashboardcheck/" + currentUserID.value);
        const data = await dashboardinfo.json();

        totalamount.value = data.totalamount[0].TotalAmount; // already the value
        budgets.value = data.budgets;
        username.value = data.userinfo.username;
        gmail.value = data.userinfo.gmail;

        //console.log(totalamount.value, budgets.value, username.value, gmail.value);
    };

    onMounted(async () => {
        await loaddashboard();
    });

    async function logout(){
        currentUserID.value = null;
        router.push("/");
        alert("You have succesfully logged out");
    }

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

    function getBudgetColor(percentage, enddate) {
        const today = new Date();
        const end = new Date(enddate);

        //console.log(enddate);

        if(end < today){
            return ['#e0e0e0', "Attention! This budget is overdue!"];
        }
        if (percentage > 70){
            return ['#d4edda', "Less then 30% of budget is in use."];  // green-ish for high remaining
        } 
        if (percentage > 30){
            return ['#fff3cd', "More then 30% of budget is in use!"];  // yellow-ish for medium remaining
        }
        else{
            return ['#f8d7da', "More receipts have been added then the budget can cover!"];                        // red-ish for low remaining
        } 
        
    }

    // OPEN SUBWINDOWS

    function openpass(){
        passvisibility.value = true;
        blur.value = true;
    }

    function openaddbudget(){
        addvisibility.value = true;
        blur.value = true;
    }

    function viewbudget(budgetID){
        selectedBudgetID.value = parseInt(budgetID);
        visibility.value = true;
        blur.value = true;
    }

    function viewappenduser(){
        uservisibility.value = true;
        blur.value = true;
    }

    // CLOSE SUBWINDOWS

    function closewindow(){
        visibility.value = false;
        addvisibility.value = false;
        uservisibility.value = false;
        passvisibility.value = false;

        blur.value = false;

        loaddashboard();
    }

</script>

<!--
    Template
-->
<template>
    <div class="page-layout" :style="{ filter: blur ? 'blur(5px)' : 'none' }">
        <div class="user-budgets">
            <h1>Welcome Back!</h1>
            <div class="total-spent">
                <p v-if="totalamount">Your current total spend is: €{{ totalamount }}</p>
            </div>
            <h2>Your current budgets</h2>
            <div @click="viewbudget(budget.budgetID)" v-for="budget in budgets" :key="budget.budgetID" class="budgets" :style="{ backgroundColor: getBudgetColor(parseInt(budget.spent_budget), budget.enddate)[0] }">
                <p>Budget #{{ budget.budgetID }}.</p>
                <p>{{getBudgetColor(parseInt(budget.spent_budget), budget.enddate)[1]}}</p>
                <!--<p style="position:relative; right:100px" v-if="budget.startdate">Timeslot: {{ budget.startdate.slice(0, 10) }} | {{ budget.enddate.slice(0, 10) }}</p>-->
                <img @click.stop="deleteBudget(budget.budgetID)" class="trash-icon" src="@/assets/trash.png" style="width:30px; height:30px">
            </div>
            <button @click="openaddbudget()">Add budget</button>
        </div>
        <div class="user-card">
            <h3>Your Account</h3>

            <img src="@/assets/defaultpfp.png" style="width:300px; height:300px">
            <p>{{ username }}</p>
            <p>{{ gmail }}</p>

            <button @click="viewappenduser()">Change your account settings</button><br><br>
            <button @click="openpass()">Change your password</button>
            <button @click="logout()">Log out of your account</button>
        </div>
    </div>
    <budgetwindow 
    v-if="visibility"
    :budgetID="selectedBudgetID"
    @close="closewindow()"
    />

    <addbudgetwindow
    v-if="addvisibility"
    @close="closewindow()"/>

    <appenduserwindow
    v-if="uservisibility"
    @close="closewindow()"/>
    
    <passchangewindow 
    v-if="passvisibility"
    @close="closewindow()"/>

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
        font-size: 18px;
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
        margin-bottom: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        cursor:pointer;
    }

    .user-budgets .budgets p {
        margin: 0;
        font-size: 16px;
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

    .user-card p:last-of-type {
        color: #555;
        font-size: 1rem;
    }

    .trash-icon{
        cursor:pointer;
    }
</style>