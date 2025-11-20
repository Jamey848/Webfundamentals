<!--
    Settings van de pagina
--->

<script setup>
    import { onMounted, ref } from 'vue';

    import LoginWindow from '../components/Login.vue';

    const showLogin = ref(false);
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
    <p>Login to ShopChap</p>
    <button @click="showLogin = true">Open Login</button>

    <LoginWindow
      v-if="showLogin"
      @close="showLogin = false"
      @login="handleLogin"
    />
</template>