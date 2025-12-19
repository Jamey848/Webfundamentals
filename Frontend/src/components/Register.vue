<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted, provide } from "vue"; // Automatic refresh of value.
    import { currentUserID } from "../sessiondata/sessionID"

    const emit = defineEmits(['close', 'register']) // defineEmits = Vue3 API. Declare a function to be "emitted" (send) to the parent page. The parent page can listen to these functions.

    const username = ref('');
    const email = ref('');
    const password = ref('');

    const message = ref('');

    function close(){
        emit('close')
    }

    async function logcheck(){
        const namevalue = username.value;
        const emailvalue = email.value;
        const passwordvalue = password.value;

        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UN: namevalue,
                UG: emailvalue,
                UP: passwordvalue
            })
        })
        
        const data = await res.json();

        if(data.error){
            message.value = data.error
        }
        else{
            message.value = "New account has been created!"

            username.value = "";
            email.value = "";
            password.value = "";

            currentUserID.value = data[0].usersID;
        }
    }
</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div class="overlay" @click.self="close">
        <div class="window">
            <h2 style="text-align:center">Create a new Account</h2>

            <div class="profile-pic">
                <img style="width:200px; height:200px; display:block; margin: 0 auto" src="@/assets/defaultpfp.png" alt="Profile" />
            </div>

            <form @submit.prevent="submit">
                
                <label>Username</label><br>
                <input v-model="username" type="username" size="40" required />
                
                <br>
                <br>

                <label>Email</label><br>
                <input v-model="email" type="email" size="40" required />
                
                <br>
                <br>
                <label>Password</label><br>
                <input v-model="password" type="password" size="40" required />

                <br>
                <br>
                <button type="button" @click="logcheck">Create account</button>

                <br>
                <br>
                <p v-if="message" class="error">{{ message }}</p>
            </form>

            <button class="close-btn" @click="close">✕</button>
        </div>
  </div>
</template>

<style scoped>
/* SUBWINDOW STYLE */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.window {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  height: 500px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
/* SUBWINDOW STYLE */
</style>