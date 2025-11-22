<!--
    Settings van de pagina
--->

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const rItems = ref([]);

    onMounted(() => {
        const receiptID = route.params.receiptID;
        if (receiptID) {
            getReceiptitems(receiptID);
        } else {
            console.warn('No receiptID in route params');
        }
    });

    async function getReceiptitems(receiptID) {
        const res = await fetch(`http://localhost:3000/receiptitems/${receiptID}`);
        const data = await res.json();
        rItems.value = data;
        //console.log(data);
    }
</script>

<!--
    Template
--->
<template>
    <div class="page-layout">
        <h1>
            Productlist
        </h1>
        <div class="grid">
            <div class="grid-header">
                <div>ProductitemID</div>
                <div>Productname</div>
                <div>Price</div>
                <div>QUA</div>
                <div>Category</div>
                <div>Delete</div>
            </div>
            <div class="grid-items" v-for="item in rItems" :key="item.receiptitemsID">
                <div>{{ item.receiptitemsID }}</div>
                <div>{{ item.productname }}</div>
                <div>{{ item.price }}</div>
                <div>{{ item.QUA }}</div>
                <div>{{ item.categoryname }}</div>
                <div class="trash-icon"><img src="@/assets/trash.png"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr; /* Define the number of columns to match your header */
        /* Make the whole container align like a table */
    }

    .grid-header,
    .grid-items {
        display: contents; /* Optional: allows children divs to align with grid columns */
    }

    .grid-header div,
    .grid-items div {
        padding: 8px;
        border: 1px solid #ccc;
    }

    .trash-icon {
        display: flex;          /* makes the div a flex container */
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */ 
    }
    .trash-icon img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    
</style>