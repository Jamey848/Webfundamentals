<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted } from "vue"; // Automatic refresh of value.

    const emit = defineEmits(['close', 'login']) // defineEmits = Vue3 API. Declare a function to be "emitted" (send) to the parent page. The parent page can listen to these functions.

    const password = ref('');
    const email = ref('');

    function close(){
        emit('close')
    }

    function logcheck(){
        const emailvalue = email.value;
        const passwordvalue = password.value;

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UN: "[TEST NAME]",
                UG: emailvalue,
                UP: passwordvalue
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
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
                <button type="submit" @click="logcheck()">Log In</button>
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