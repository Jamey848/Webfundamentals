<!--
    Settings van de pagina
--->

<script setup>
    import { currentUserID } from "../sessiondata/sessionID"
    function checkID(){
        console.log(currentUserID.value)
    }
</script>

<!--
    Template
--->
<template>
    <h1>
        Ranking
    </h1>
    <button @click="checkID">
        Check
    </button>
</template>