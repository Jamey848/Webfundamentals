<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';

    const Wisdom = ref({});

    async function chattywisdow(){
        Wisdom.value = {};

        const chattyresponse = await fetch("http://localhost:3000/recommendations", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usersID: 1
            })
        });

        const data = await chattyresponse.json();

        if(data.advice.Line1.includes("The model does not exist in our api at the moment.")){
            alert("The ChatGPT API crashed. Please try again");
        }
        else{
            Wisdom.value = data.advice;

            console.log(data);
        }
    }
    
</script>

<!--
    Template
-->
<template>
    <h1>Recommendations</h1>
    <button @click="chattywisdow()">CHECK IT OUT</button>
    <br><br>
    <div>
        <p v-for="(line, index) in Wisdom" :key="index" style="margin-bottom: 1em;">
            {{ line }}
        </p>
    </div>
</template>