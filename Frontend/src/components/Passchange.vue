<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { currentUserID } from '@/sessiondata/sessionID';
    import { onMounted, ref } from 'vue';

    const emit = defineEmits(["close"]);

    const viewchange = ref(false);
    
    const oldpassword = ref('');
    const newpassword = ref('');

    function close(){
        emit("close");
    }

    function show(){
        viewchange.value = true;
    }

    async function changepass(){

        const passchange = await fetch("http://localhost:3000/users/changepass", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: currentUserID.value,
                oldPassword: oldpassword.value,
                newPassword: newpassword.value
            })
        })

        const data = await passchange.json();

        if(data.error){
            alert("Error " + data.error);
        }
        else{
            alert("Password changed succesfully");
        }
    }

</script>

<!--
    Template
-->
<template>
    <div class="page-layout">
        <div class="annoying-button">
            <button class="return" @click="close()">Return</button>
        </div>
        <div class="check-box">
            <h3>Enter old password</h3>
            <input v-model="oldpassword" type="password"/>

        </div>

        <div class="change-box">
            <h3>Enter new password</h3>
            <input v-model="newpassword" type="password"/>
        </div>

        <button @click="changepass()" class="confirm">Confirm</button>
    </div>
</template>

<style scoped>
    
    .page-layout {
        display: flex;
        position:absolute;
        top: 35%;
        left: 37%;
        margin-top: -50px;
        margin-left: -30px;
        flex-direction: column; /* stack children vertically */
        gap: 20px;              /* spacing between h3, form, and return button */
        width: 600px;   
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: #333;
        flex-direction: column;

        justify-content: center;     /* vertical centering inside modal */
        align-items: center;         /* horizontal centering inside modal */ 
        border:1px solid black;                  
    }

    h3 {
        margin-top:20px;
    }

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-bottom:10px;
        width:200px;
    }

    /* Confirm button near input */
    .confirm {
        padding: 10px;
        border: none;
        border-radius: 6px;
        background: #0077ff;
        color: white;
        cursor: pointer;
        margin-left:15px;
        margin-top:50px;
    }

    .confirm:hover {
        background: #0066dd;
    }

    /* Return button bottom-right */
    .return {
        align-self: flex-end; /* pushes to bottom-right */
        padding: 10px 14px;
        border: none;
        border-radius: 6px;
        background: #f0f0f0;
        cursor: pointer;
        margin-top:50px;
        margin-right:5px;
        margin-bottom:100px;

        position: absolute;
        top: -40px;
        right: 0px;
    }

    .return:hover {
        background: #e0e0e0;
    }

</style>