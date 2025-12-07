<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted, provide } from "vue"; // Automatic refresh of value.

    const emit = defineEmits(["close"]);

    const message = ref('');

    const itemname = ref('');

    function close(){
        emit("close");
    }

    const prop = defineProps({
        itemID: Number,
        itemtype: String,
        method: String
    })

    onMounted(async() => {
        if(prop.method === "PUT"){
            message.value = `Append ${prop.itemtype} #${prop.itemID}`
        }
        else if(prop.method === "POST"){
            message.value = `Add new ${prop.itemtype}`
        }
    })

    async function item(){
        console.log(prop.method);
        console.log(prop.itemID);
        console.log(itemname.value);
        console.log(prop.itemtype);
        const methoditem = await fetch("http://localhost:3000/permavalues", {
            method: prop.method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: prop.itemID,
                name: itemname.value,
                type: prop.itemtype
            })
        })

        const data = await methoditem.json();

        if(data.error){
            alert("Error: " + data.error);
        }
        else{
            alert("Operation succesfull");
        }
        
        console.log(data);
    }
</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div class="overlay">
        <div class="modal">
            <h3>{{ message }}</h3>
            <div v-if="method !== 'DELETE'">
                <label for="itemName">Item name</label>
                <input v-model="itemname" id="itemName" type="text" placeholder="Enter name" />
            </div>

            <p v-else>Are you sure you want to delete this {{ itemtype }}?</p>

            <div class="buttons">
                <button class="confirm" @click="item()">Confirm</button>
                <button class="close" @click="close()">Return</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* Overlay covers entire screen */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); /* dim background */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Modal box */
    .modal {
        width: 300px;
        padding: 20px;
        background: #fff;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        font-family: sans-serif;
    }

    /* Input styling */
    input {
        width: 90%;
        padding: 8px;
        margin: 10px 0 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
    }

    /* Buttons container */
    .buttons {
        display: flex;
        justify-content: space-around;
    }

    /* Buttons styling */
    button {
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button.confirm {
        background-color: #4CAF50;
        color: white;
    }

    button.close {
        background-color: #ccc;
        color: #333;
    }
</style>