<script setup>
    // Imports
    import { currentUserID } from '@/sessiondata/sessionID';
    import { onMounted, ref } from 'vue';

    const gmail = ref('');
    const username = ref('');

    const newname = ref('');
    const newmail = ref('');
    const newpermission = ref('');

    const emit = defineEmits(["close"]);

    const prop = defineProps({
        userID: Number
    });

    function close(){
        emit("close");
    }

    async function append(){
        const userchange = await fetch("http://localhost:3000/dashboard/users/" + prop.userID, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newname.value,
                gmail: newmail.value,
                permission: newpermission.value
            })
        })

        const data = await userchange.json();

        if(data.error){
            alert("Change was not succesful. Error: " + data.error);
        }
        else{
            alert("User appended succesfully");
        }
    }

</script>

<!--
    Template
-->
<template>
    <div class="page-layout" style="
    width: 320px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: Arial, sans-serif;
">
    <h3>Append user #{{prop.userID}}</h3>

    <label style="display:block; margin-top:10px;">Username</label>
    <input v-model="newname" type="text" placeholder="Enter username" style="width:100%; padding:6px;">

    <label style="display:block; margin-top:10px;">Gmail</label>
    <input v-model="newmail" type="email" placeholder="Enter Gmail" style="width:100%; padding:6px;">

    <label style="display:block; margin-top:10px;">Permission</label>
    <select v-model="newpermission">
        <option :value=1>Permission: 1</option>
        <option :value=2>Permission: 2</option>
        <option :value=3>Permission: 3</option>
    </select>
    
    <button @click="append()" class="button-style">Confirm</button>

    <button @click="close()" class="button-style">Close</button>
</div>
</template>

<style scoped>
    .page-layout {
        display: flex;
        position:absolute;
        top: 20%;
        left: 40%;
        margin-top: -50px;
        margin-left: -30px;
        flex-direction: column; /* stack children vertically */
        gap: 20px;              /* spacing between h3, form, and return button */
        width: 400px;   
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: #333;

        justify-content: center;     /* vertical centering inside modal */
        align-items: center;         /* horizontal centering inside modal */
        gap: 20px; 
        border:1px solid black;                  
    }

    .button-style{
        margin-top:15px;
        width: 100%;
        padding: 8px;
        background:#333;
        color:white;
        border:none;
        border-radius:4px;
        cursor:pointer;
    }
</style>