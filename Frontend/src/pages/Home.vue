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

    onMounted(async() => { 
        const temp = currentUserID.value;
        currentUserID.value = null;
        currentUserID.value = temp;

        console.log(currentUserID.value);
    });

    function RestID(){
        currentUserID.value = null;
    }

    function reset(){
        currentUserID.value = 1;
    }
</script>

<!--
    Template
--->
<template>
    <div class="page">
        <div class="card">
            <h1>ShopChap</h1>
            <h2>Your simple shopping companion</h2>

            <h3 style="margin-top: 30px">What is ShopChap?</h3>
            <p class="description">
                ShopChap is a usefull node.js webapplication that allows you to moniter your shoppinghabits and create insightfull 
                conclusions from visualisations such as charts, recommendations, and so much more!
            </p>

            <div class="actions">
                <button class="primary" @click="showLogin = true">
                Login
                </button>

                <button class="secondary" @click="showRegister = true">
                Register
                </button>
            </div>

            <button class="ghost" @click="RestID()">
                Delete stored ID
            </button>
            <button class="ghost" @click="reset()">
                Reset User ID to 1
            </button>
        </div>

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
  </div>
</template>

<style scoped>
.page {
    display: flex;
    height:90vh;
    align-items: center;
    justify-content: center;
    background: #dedede;
    font-family: system-ui, sans-serif;
}

.card {
    background: white;
    padding: 40px;
    border-radius: 12px;
    width: 420px;
    text-align: center;
    margin-top:50px;
    margin-bottom:50px;
}

h1 {
    margin-bottom: 4px;
    font-size: 32px;
}

h2 {
    font-weight: 400;
    font-size: 16px;
    color: #666666;
}

.description {
    margin-bottom: 50px;
    color: #444444;
    font-size: 15px;
}

.actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 24px;
}

button {
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    font-size: 15px;
    cursor: pointer;
}

.primary {
    background: #111111;
    color: #ffffff;
}

.secondary {
    background: #eaeaea;
    color: #111111;
}

.ghost {
    background: none;
    color: #888888;
    font-size: 13px;
}
</style>