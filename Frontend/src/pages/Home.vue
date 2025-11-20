<!--
    Settings van de pagina
--->

<script setup>
    import { onMounted, ref } from 'vue';

    import RegisterWindow from '../components/Register.vue';

    const showRegister = ref(false);
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
    <p>Create a new account!</p>
    <button @click="showRegister = true">Register</button>

    <RegisterWindow
      v-if="showRegister"
      @close="showRegister = false"
      @login="handleRegister"
    />
</template>