<!--
    Settings van de pagina
--->

<script setup>
    import { onMounted, ref } from 'vue';

    import RegisterWindow from '../components/Register.vue';
    import LoginWindow from '../components/Login.vue';
    import { currentUserID } from '@/sessiondata/sessionID';

    const showRegister = ref(false);

    const showLogin = ref(false);

    function RestID(){
        currentUserID.value = null;
    }
</script>

<!--
    Template
--->
<template>
    <h1>
        Welcome to ShopChap
    </h1>
    <h2>
        What is ShopChap?
    </h2>
    <p>
        TEXT TEXT TEXT
    </p>
    <br>
    <p>Login to your account!</p>
    <button @click="showLogin = true">Login</button>
    <br>
    <br>
    <p>Create a new account!</p>
    <button @click="showRegister = true">Register</button>
    <br>
    <br>
    <button @click="RestID">reset it!</button>

    <RegisterWindow
      v-if="showRegister"
      @close="showRegister = false"
      @login="handleRegister"
    />

    <LoginWindow
      v-if="showLogin"
      @close="showLogin = false"
      @login="handleLogin"
    />
</template>