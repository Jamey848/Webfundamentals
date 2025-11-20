<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted } from "vue"; // Automatic refresh of value.

    //------------- Props (gebruiken we als onze parent data moet geven READ ONLY)
    let myprop = defineProps({
        counterName: String,
        initialValue: Number
    });

    // ------------ Data (gebruiken we intern en hierbij kunnen we data aanpassen)
    let counterName = myprop.counterName;
    let counterValue = ref(0);

    //------------- Life cycle
    onMounted(() =>{
        counterValue.value = myprop.initialValue
        console.log("Component rendered " + myprop.initialValue);
    })

    // ------------ Methods
    const increment = () => {
        counterValue.value++;
    }
    const decrease = () => {
        if(counterValue.value < 0){
            console.log("Ehhh is te laag!");
        }
        else{
            counterValue.value--;
        }
    }

    //const showMinButton
</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div>
        <h2>
            Counter {{ counterName }}
        </h2>
        <p>
            {{counterValue}}
        </p>
        
        <button @click="increment"> <!-- YIy cab yse v-on:click, but we use shorthand @click -->
            Add 
        </button>

        <!--
            v-if="counterValue > 0
        -->
        <button @click="decrease" :disabled="counterValue <= 0">
            Decrease 
        </button>
    </div>
</template>