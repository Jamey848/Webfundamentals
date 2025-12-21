<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted, provide } from "vue"; // Automatic refresh of value.
    import { currentUserID } from "../sessiondata/sessionID"

    const emit = defineEmits(['close', 'login']) // defineEmits = Vue3 API. Declare a function to be "emitted" (send) to the parent page. The parent page can listen to these functions.

    //Data
    const email = ref('');
    const password = ref('');

    const message = ref('');

    async function checklogin(){
        const checkdata = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UG: email.value,
                UP: password.value
            })
        })

        const data = await checkdata.json();

        if(data.error){
            message.value = data.error
        }
        else{
            message.value = "Login succesfull!"

            email.value = "";
            password.value = "";

            currentUserID.value = data[0].usersID;
            localStorage.setItem('currentUserID', data[0].usersID)
        }
    }

    function close(){
        emit('close')
    }

</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div class="overlay" @click.self="close">
        <div class="window">
            <h2 style="text-align:center">Login to your account</h2>

            <div class="profile-pic">
                <img style="width:200px; height:200px; display:block; margin: 0 auto" src="@/assets/defaultpfp.png" alt="Profile" />
            </div>

            <form @submit.prevent="submit">
                
                <label>Email</label><br>
                <input v-model="email" type="email" size="40" required />
                
                <br>
                <br>
                <label>Password</label><br>
                <input v-model="password" type="password" size="40" required />

                <br>
                <br>
                <button type="button" @click="checklogin">Login</button>

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
    display:flex;
    position: absolute;
    top: 25%;
    left: 40%;
    margin-top: -50px;
    margin-left: -30px;
}
.window {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  height: 450px;
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