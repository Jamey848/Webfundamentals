<!--
    Settings van de pagina
--->

<script setup>
    import { currentUserID } from "../sessiondata/sessionID"
    import{ ref, onMounted, provide } from "vue";

    const CU_ID = currentUserID.value;

    const storelist = ref([]);
    const categorylist = ref([]);
    const unitlist = ref([]);

    const receiptName = ref('');
    const receiptDate = ref('');
    const receiptStore = ref('');

    const insertedID = ref(-999);

    const productname = ref('');
    const price = ref('');
    const quantity = ref('');
    const amount = ref('');
    const unit = ref('');
    const category = ref('');

    const itemList = ref([]);

    const Rmessage = ref('');
    const RImessage = ref('');

    onMounted(async () => {
        const res = await fetch("http://localhost:3000/receiptitems/permanentValues");
        const data = await res.json();

        categorylist.value = data.allcategories;
        unitlist.value = data.allunits;
        storelist.value = data.allstores;
    });

    async function addNewReceipt(){
        if(!receiptName.value || !receiptDate.value || !receiptStore.value){
            Rmessage.value = "Missing values. Please fill in all textboxes";
        }
        else{
            const rdate = new Date(receiptDate.value);
            const dateOnly = rdate.toISOString().split('T')[0]; 
            const rname = receiptName.value;
            const rstore = receiptStore.value;
            let future;

            if(rdate > new Date()){
                future = true;
            }
            else{
                future = false;
            }

            const insertReceipt = await fetch("http://localhost:3000/receipt", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: 1,
                    storeID: parseInt(rstore),
                    receiptname: rname,
                    futurepurchase: future,
                    date: dateOnly
                })
            })

            const data = await insertReceipt.json();

            if(data.error){
                Rmessage.value = data.error;
            }
            else{
                Rmessage.value = "Receipt succesfully added. Please enter receiptitems to your receipt";
                insertedID.value = parseInt(data.receiptID);
            }
        }
    }

    async function addItem(){
        if(insertedID.value < 0){
            RImessage.value = "Create a new receipt first";
        }
        else if(!productname.value || !price.value || !unit.value || !quantity.value || !amount.value || !category.value){
            RImessage.value = "Missing values. Please fill in all textboxes";
        }
        else{
            RImessage.value = "";
            console.log(insertedID.value, productname.value, parseFloat(price.value), unit.value, quantity.value, amount.value, category.value);
            const insertItem = await fetch("http://localhost:3000/receiptitems/" + insertedID.value, {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProductName: productname.value,
                    RIprice: parseFloat(price.value),
                    RIquantity: parseInt(quantity.value),
                    RIunit: unit.value,
                    RIamount: parseFloat(amount.value),
                    ProductCategory: category.value
                })
            })
            const data = await insertItem.json();
            if(data.error){
                RImessage.value = data.error;
            }
            else{
                RImessage.value = "Succesfully added new receiptitem";

                const displayString = `${productname.value} x ${quantity.value} | €${parseFloat(amount.value)}`;
                itemList.value.push([displayString, data.receiptitemsID]);

                console.log(data.receiptitemsID);

                productname.value = "";
                category.value = "";
                price.value = "";
                quantity.value = "";
                amount.value = "";
                unit.value = "";
            }
        }
    }

</script>

<!--
    Template
--->
<template>
    <div class="page-layout">
        <div class="receipt-textboxes">
            <h2>Enter new receipt</h2>
            <div class="receipt-textbox">
                <label>Receiptname</label>
                <input v-model="receiptName">
            </div>
            <div class="receipt-textbox">
                <label>Date</label>
                <input v-model="receiptDate" type="date">
            </div>
            <div class="receipt-textbox">
                <label>Store</label>
                <select v-model="receiptStore">
                    <option v-for="store in storelist" :key="store.storeID" :value="store.storeID"> {{ store.storename }}</option>
                </select>
            </div>
            <div class="confirm-button" @click="addNewReceipt()">
                <button>Confirm</button>
            </div>
            <p> {{ Rmessage }} </p>
        </div>
        <div class="receipt-textboxes">
            <h2>Enter new receiptitem</h2>
            <div class="receipt-textbox">
                <label>Productname</label>
                <input v-model="productname">
            </div>
            <div class="receipt-textbox">
                <label>Price</label>
                <input v-model="price" style="width:70px">
            </div>
            <div class="receipt-textbox">
                <label>Quantity</label>
                <input v-model="quantity" style="width:70px">
            </div>
            <div class="receipt-textbox">
                <label>Units</label>
                <select v-model="unit">
                    <option v-for="unit in unitlist" :key="unit.unitID" :value="unit.unitname"> {{ unit.unitname }}</option>
                </select>
            </div>
            <div class="receipt-textbox">
                <label>Amount</label>
                <input v-model="amount" style="width:70px">
            </div>
            <div class="receipt-textbox">
                <label>Category</label>
                <select v-model="category">
                    <option v-for="category in categorylist" :key="category.categoryID" :value="category.categoryname"> {{ category.categoryname }}</option>
                </select>
            </div>
            <div class="confirm-button-plus">
                <button @click="addItem()">+</button>
            </div>
            <p> {{ RImessage }} </p>
        </div>
        <div class="grid-container">
            <h2>Receiptitems</h2>
            <div v-for="([stringItem, receiptitemID]) in itemList" :key="receiptitemID" class="grid-item">
                {{ stringItem }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .page-layout{
        display: flex;
        flex-direction: row;   /* <-- makes the TWO BIG DIVS side by side */
        align-items: flex-start;
    }
    .receipt-textboxes {
        display: flex;
        flex-direction: column;
        gap: 10px;                 /* space between textboxes */
        width: 350px;              /* adjust to your layout */
        padding: 20px;
        background: #fafafa;
        border-radius: 12px;
        border: 1px solid #e0e0e0;
        margin-left:50px;
        margin-top:40px;
    }

    .receipt-textbox {
        display: flex;
        flex-direction: column;
        gap: 6px;                  /* space between label + input */
    }

    .receipt-textbox label {
        font-size: 15px;
        font-weight: 600;
        color: #444;
    }

    .receipt-textbox input {
        padding: 12px 14px;
        font-size: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background: white;
        width: 100%;
        box-sizing: border-box;

        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .receipt-textbox select{
        padding: 12px 14px;
        font-size: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background: white;
        width: 50%;
        box-sizing: border-box;

        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .confirm-button{
        display:flex;
        justify-content: flex-end; 
    }

    .confirm-button-plus{
        display:flex;
        justify-content: flex-end; 
    }

    .confirm-button-plus button{
        font-size: 30px;
        background-color: rgb(18, 17, 17);
        color:white;
        border-radius: 5px;
    }

    .confirm-button button{
        background-color: rgb(18, 17, 17);
        color:white;
        border-radius: 5px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(1fr); /* 2 columns of equal width */
        gap: 10px; /* spacing between grid items */
        margin-top: 40px;
        margin-left:150px;
        max-height: 650px;
        overflow:auto;
    }

    .grid-item {
        background-color: #f0f0f0;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        width:350px;
    }
</style>