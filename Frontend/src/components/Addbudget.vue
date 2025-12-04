<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';
    import { currentUserID } from "../sessiondata/sessionID"

    const emit = defineEmits(["close"]);

    function close(){
        emit("close");
    }

    const budgetamount = ref('');
    const startdate = ref('');
    const enddate = ref('');

    function checkitout(){
        console.log(budgetamount.value);
        console.log(startdate.value);
        console.log(enddate.value);
    }

    async function addBudget(){ 
        const insertBudget = await fetch("http://localhost:3000/dashboard/budget", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usersID: parseInt(currentUserID.value),
                budgetamount: parseInt(budgetamount.value),
                startdate: startdate.value,
                enddate: enddate.value
            })
        })
        const data = await insertBudget.json();

        if(data.error){
            alert("Error. Budget was not inserted");
        }
        else{
            alert("Budget succesfully inserted");
        }
    }

</script>

<!--
    Template
-->
<template>
  <div class="page-layout">
    <div class="budget">
      <h1>Add New Budget</h1>
      <div class="form-group">
        <label>Amount</label>
        <input v-model="budgetamount" type="number" placeholder="Enter amount">

        <label>Start Date</label>
        <input v-model="startdate" type="date">

        <label>End Date</label>
        <input v-model="enddate" type="date">

        <button class="add-btn" @click="addBudget()">Add</button>
      </div>
      <button class="return-btn" @click="close()">Return</button>
    </div>
  </div>
</template>

<style scoped>

    .page-layout{
        display:flex;
        position: absolute;
        top: 25%;
        left: 30%;
        margin-top: -50px;
        margin-left: -30px;
    }

    .budget {
        width: 400px;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
    }

    .budget h1 {
        font-size: 24px;
        margin-bottom: 25px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
    }

    label {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
        text-align: left;
    }

    input {
        padding: 8px 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 6px;
        outline: none;
    }

    input:focus {
        border-color: #007bff;
    }

    .add-btn {
        margin-top: 10px;
        padding: 10px 15px;
        font-size: 14px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s;
    }

    .add-btn:hover {
        background-color: #0056b3;
    }

    .return-btn {
        margin-top: 15px;
        padding: 8px 12px;
        font-size: 14px;
        background-color: #f0f0f0;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    .return-btn:hover {
        background-color: #e0e0e0;
    }
</style>