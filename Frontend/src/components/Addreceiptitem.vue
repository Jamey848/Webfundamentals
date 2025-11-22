<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted, provide } from "vue"; // Automatic refresh of value.
    import { currentUserID } from "../sessiondata/sessionID"

    const prop = defineProps({
        receiptID: String
    })

    const emit = defineEmits(['close', 'login']) // defineEmits = Vue3 API. Declare a function to be "emitted" (send) to the parent page. The parent page can listen to these functions.
    const units = ref([]);
    const categories = ref([]);

    const productname = ref('');
    const price = ref('');
    const quantity = ref('');
    const amount = ref('');
    const unit = ref('');
    const category = ref('');

    const message = ref('');

    onMounted(async () => {
        const res = await fetch("http://localhost:3000/receiptitems/categories&units");
        const data = await res.json();

        categories.value = data.allcategories;
        units.value = data.allunits;
    });

    async function addItem(productname, price, quantity, unit, amount, category){
        const insertItem = await fetch("http://localhost:3000/receiptitems/" + prop.receiptID, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ProductName: productname,
                RIprice: parseFloat(price),
                RIquantity: parseInt(quantity),
                RIunit: unit,
                RIamount: parseFloat(amount),
                ProductCategory: category
            })
        })
        const data = insertItem.json();
        if(data.error){
            message.value = data.error;
        }
        else{
            message.value = "Succesfully added new receiptitem";
        }
    }

    function close(){
        emit('close')
    }

</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div class="overlay" @click.self="close">
        <div class="window">
            <h2 style="text-align:center">Add a new receipt item</h2>
            <div class="add-boxes">
                <!-- Product Name -->
                <div class="enter-productname">
                    <label>Product Name</label><br>
                    <input v-model="productname" size="40" required />
                </div>

                <!-- Price -->
                <div>
                    <label>Price</label><br>
                    <input v-model="price" size="20" required />
                </div>

                <!-- Quantity / Units / Amount side by side -->
                <div class="flex-row">
                    <div class="flex-item">
                    <label>Quantity</label><br>
                    <input v-model="quantity" size="10" required />
                    </div>

                    <div class="flex-item">
                        <label>Units</label><br>
                        <select v-model="unit" required>
                            <option value="">Select unit</option>
                            <option v-for="unit in units" :key="unit.unitID" :value="unit.unitname">
                                {{ unit.unitname }}
                            </option>
                        </select>
                    </div>

                    <div class="flex-item">
                    <label>Amount</label><br>
                    <input v-model="amount" size="10" required />
                    </div>
                </div>

                <!-- Category dropdown -->
                <div>
                    <label>Category</label><br>
                    <select v-model="category" required>
                        <option value="">Select category</option>
                            <option v-for="cat in categories" :key="cat.categoryname" :value="cat.categoryname">
                                {{ cat.categoryname }}
                            </option>
                    </select>
                </div>
            </div>
            <p v-bind="message"> {{ message.value }} </p>
            <div class="confirm-button">
                <button @click="addItem(productname, price, quantity, unit, amount, category)">Confirm</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* SUBWINDOW STYLE */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.window {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  height: 350px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.add-boxes {
  display: flex;
  flex-direction: column;
  gap: 16px; /* spacing between form sections */
}

.flex-row {
  display: flex;
  gap: 12px; /* spacing between quantity, units, amount */
}

.flex-item {
  display: flex;
  flex-direction: column;
}

.confirm-button{
    position: absolute;
    bottom:16px;
    right:16px;
}
/* SUBWINDOW STYLE */
</style>