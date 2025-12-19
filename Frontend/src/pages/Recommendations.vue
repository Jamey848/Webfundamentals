<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';
    import { currentUserID } from "../sessiondata/sessionID"

    const Wisdom = ref([]);

    async function geminiwisdom() {
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

        console.log(Wisdom.value);
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
            <button class="action-button" @click="geminiwisdom()">
                Ask Gemini
            </button>

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
        width:900px;
        margin: 2rem auto; /* Put div in the center */
        padding: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #fdfdfd;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    header {
        text-align: center;
        margin-bottom: 2rem;
    }

    header h1 {
        margin-bottom: 0.5rem;
        color: #333;
    }

    header p {
        color: #666;
        font-size: 1.1rem;
    }

    .content {
        text-align: center;
    }

    .action-button {
        margin-bottom: 2rem;
        padding:20px;
        font-weight: bold;
        color: #fff;
        background: linear-gradient(#6b73ff, #000dff);
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .wisdom-container {
        background-color: #f5f7ff;
        border-radius: 10px;
        text-align: left;
    }

    .wisdom-container h2 {
        margin-bottom: 1rem;
        color: #222;
    }

    .wisdom-line {
        margin-bottom: 1em;
        padding: 0.5rem;
        background-color: #e4e9ff;
        border-radius: 6px;
        color: #333;
    }
</style>