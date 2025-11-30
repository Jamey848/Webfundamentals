<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';

    const prop = defineProps({
        receiptID: Number
    })

    const emit = defineEmits(["close"]);

    function close(){
        emit("close");
    }

</script>

<!--
    Template
-->
<template>
    <div class="page-layout">
        <div class="budget">
            <h1>
                Addbudget
            </h1>
        </div>
        <button @click.self="close()">GO AWAY</button>
    </div>
</template>

<style scoped>
    .page-layout{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -250px;
        margin-left: -50px;
        width: 100px;
        height: 100px;
    }
</style>