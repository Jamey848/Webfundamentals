<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';
    import { currentUserID } from "../sessiondata/sessionID"

    const Wisdom = ref([]);
    const isloading = ref(false);

    async function geminiwisdom() {
        isloading.value = true;
        const chattyresponse = await fetch("http://localhost:3000/recommendations", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usersID: parseInt(currentUserID.value)
            })
        });

        const data = await chattyresponse.json();

        Wisdom.value = data;

        isloading.value = false;

        //console.log(Wisdom.value);
    }
    
</script>

<!--
    Template
-->
<template>
    <div class="container">
        <header>
        <h1>Recommendations</h1>
        <p>Get useful recommendations with the Gemini API!</p>
        </header>

        <div class="content">
            <div v-if="!isloading">
                <button class="action-button" @click="geminiwisdom()">
                    Ask Gemini
                </button>
            </div>
            <div v-else style="margin-top:40px">
                <p style="font-size:20px">LOADING...</p>
            </div>

            <div class="wisdom-container" v-if="Wisdom.length">
                <div class="wisdom-line">
                    <strong>{{ Wisdom[0].Titel }}:</strong>
                    <p>{{ Wisdom[0].Recommendation }}</p>
                </div>

                <div class="wisdom-line">
                    <strong>{{ Wisdom[1].Titel }}:</strong>
                    <p>{{ Wisdom[1]["Price comparisons"] }}</p>
                </div>

                <div class="wisdom-line">
                    <strong>{{ Wisdom[2].Titel }}:</strong>
                    <p>{{ Wisdom[2]["Recommended change of shopping habits"] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 900px;
    margin: 20px auto; /* center horizontally with px */
    padding: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fdfdfd;
    border-radius: 12px;
    border: 1px solid #ddd;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin-bottom: 8px;
    color: #333;
}

header p {
    color: #666;
    font-size: 18px;
}

.content {
    text-align: center;
}

.action-button {
    margin-bottom: 20px;
    padding: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #000dff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.wisdom-container {
    background-color: #f5f7ff;
    border-radius: 10px;
    padding: 15px;
}

.wisdom-container h2 {
    margin-bottom: 15px;
    color: #222;
}

.wisdom-line {
    margin-bottom: 15px;
    padding: 8px;
    background-color: #e4e9ff;
    border-radius: 6px;
    color: #333;
}
</style>