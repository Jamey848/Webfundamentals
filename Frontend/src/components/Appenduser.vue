<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { currentUserID } from '@/sessiondata/sessionID';
    import { onMounted, ref } from 'vue';

    const gmail = ref('');
    const username = ref('');

    const emit = defineEmits(["close"]);

    function close(){
        emit("close");
    }

    async function changesettings(){
        const mail = gmail.value;
        const name = username.value;

        const userchange = await fetch("http://localhost:3000/dashboard/users/" + currentUserID.value, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                gmail: mail
            })
        })

        const data = await userchange.json();
        if(data.error){
            alert("Error: " + data.error);
        }
        else{
            alert("Settings succesfully changed");
        }
    }

</script>

<!--
    Template
-->
<template>
  <div class="page-layout">
    <div class="form">
      <h3>Append your useraccount</h3>
      <label>Username</label>
      <input v-model="username" type="text" />

      <label>Email</label>
      <input v-model="gmail" type="email" />

      <button @click="changesettings()" class="confirm">Confirm Changes</button>
      <button class="return" @click="close()">Return</button>
    </div>

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
        width: 400px;   
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: #333;

        justify-content: center;     /* vertical centering inside modal */
        align-items: center;         /* horizontal centering inside modal */
        gap: 20px; 
        border:1px solid black;                  
    }
    
    h3 {
        font-weight: 600;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    label {
        font-size: 14px;
        color: #333;
    }

    input {
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
    }

    button {
        padding: 10px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
    }

    /* Confirm button: blue */
    .confirm {
        background: #0077ff;
        color: white;
    }

    .confirm:hover {
        background: #0066dd;
    }

    /* Return button: light gray */
    .return {
        background: #f0f0f0;
        margin-bottom:50px;
    }
</style>