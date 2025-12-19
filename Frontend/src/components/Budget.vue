<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';

    const emit = defineEmits(["close"]);

    const budget = ref('');
    const receiptlinks = ref('');

    const prop = defineProps({
        budgetID: Number
    });

    onMounted(async () => {
        const budgetinfo = await fetch(`http://localhost:3000/dashboard/budgetinfo/${parseInt(prop.budgetID)}`);
        const linkedreceipts = await fetch(`http://localhost:3000/dashboard/budget_to_receipts/${parseInt(prop.budgetID)}`);

        const budgetdata = await budgetinfo.json();
        const receiptdata = await linkedreceipts.json();

        budget.value = budgetdata;
        receiptlinks.value = receiptdata;

        console.log(budget.value);
        console.log(receiptdata);
    })

    function close(){
        emit("close");
    }
</script>

<!--
    Template
-->
<template>
    <div class="center-wrapper">
        <div class="budget" v-if="budget.length">
            <h1>
                Budget {{ prop.budgetID }}
            </h1>
            <p>Amount: {{ budget[0].budgetamount }}</p>
            <p>Spent budget: {{ budget[0].spent_budget }}%</p>
            <p style="border-bottom:3px solid #000; padding-bottom:10px">Allocated time: {{ new Date(budget[0].startdate).toLocaleDateString() }} - {{ new Date(budget[0].enddate).toLocaleDateString() }}</p>

            <div class="linked-receipts" v-for="receipt in receiptlinks" :key="receipt.receiptID">
                <p> Receipt: {{ receipt.receiptname }} </p>
            </div>
            <button @click="close()">Return</button>
        </div>
    </div>
</template>

<style scoped>
    .center-wrapper {
        display:flex;
        position: absolute;
        top: 35%;
        left: 32%;
        margin-top: -50px;
        margin-left: -30px;
    }
    /*.budget{
        width:800px;
        height:500px;
    }*/

    .budget {
        width: 500px;
        max-height: 300px;
        overflow-y:auto;
        background-color: #fff;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
    }

    .budget h1 {
        font-size: 1.8rem;
        margin-bottom: 10px;
        color: #000dff;
    }

    .budget p {
        font-size: 20px;
        margin: 5px;
    }

    .budget button {
        margin-top: 15px;
        padding: 8px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: black;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        float:right;
    }

    .linked-receipts{
        background-color: #dedede;
        width:400px;
        border-radius: 10%;
        margin:0 auto;
        margin-top:10px;
    }
</style>