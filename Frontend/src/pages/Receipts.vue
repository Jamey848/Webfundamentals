<!--
    Settings van de pagina
--->

<script setup>
    import { ref } from "vue";
    import { currentUserID } from '@/sessiondata/sessionID';

    const categories = ref([
    {
        name: "Time",
        items: ["Week", "Month", "Year"],
        selected: []
    },
    {
        name: "Future",
        items: ["Past", "Future"],
        selected: []
    }]);

    const timefilter = ref('year');
    const futurepurchase = ref('0');
    const groupedReceipts = ref({});

    const receipts = ref([]);
    const shopcount = ref('');
    const store = ref('');
    const totalprice = ref('');

    async function receiptData(){
        const receiptdata = await fetch("http://localhost:3000/receipt/data", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: 1,
                timefilter: timefilter.value,
                futurepurchase: 0
            })
        })

        const data = await receiptdata.json();
        receipts.value = data.nodes;
        console.log(data);

        groupedReceipts.value = receipts.value.reduce((acc, r) => {
            const date = new Date(r.receiptdate).toLocaleDateString();
            if (!acc[date]) acc[date] = [];
            acc[date].push(r);
            return acc;
        }, {});
    }
    function selectItem(category, item) {
        category.selected = item; // override previous selection
    }
</script>

<!--
    Template
--->
<template>
<div class="page-layout">
  <div class="receipt-container">
  
    <!-- CURRENT TIME FILTER -->
    <h2 class="filter-title">{{ timefilter }}</h2>

    <!-- DATE GROUPS -->
        <div 
            class="date-group" 
            v-for="(items, date) in groupedReceipts" 
            :key="date"
        >
            <h3 class="date-header">{{ date }}</h3>

            <!-- RECEIPT CARDS -->
            <div 
            class="receipt-card"
            v-for="receipt in items"
            :key="receipt.receiptID"
            >
            <div class="receipt-name">
                {{ receipt.receiptname ?? 'Nameless Receipt' }}
            </div>

            </div>

        </div>
    </div>


<div class="right-content">
  <div v-for="(cat, idx) in categories" :key="idx" class="listbox"> <!-- Loop through all predefined category names -->
    <h3>{{ cat.name }}</h3> <!-- Init categoryname as H3 for each div item -->

    <div class="items">
      <label
        v-for="item in cat.items"
        :key="item"
        class="checkbox-item"
      >
      <!--
        v-for="item in cat.items". cat has "items" (week, month, ...). Each item is initialized as a label containing text + checkbox
      -->
        <!-- checkbox that behaves like a radio -->
        <input
          type="checkbox"
          :checked="cat.selected === item"
          @change="selectItem(cat, item)"
        />
        <!--
            checked=selected item becomes checked
            if not selected: trigger function that makes new item selected
        -->
        {{ item }}
      </label>
    </div>
  </div>
  <div style="margin-left:480px;">
    <button class="button-style" @click="receiptData">Check It Out!</button>
  </div>
  <div>
    Hello where am I?
  </div>
</div>
</div>
</template>

<style scoped>
.listbox {
  width: 260px;
  margin-left: 300px;
  margin-top: 20px;
  margin-bottom: 20px;

  padding: 18px 16px;
  border-radius: 10px;

  background: #ffffff;
  border: 1px solid #d8d8d8;
}

.page-layout {
  display: flex;
  align-items: flex-start; /* Don’t vertically center */
}

.checkbox-item {
  display: flex;
  align-items: center;

  padding: 6px 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button-style{
  background:#0f0f10;
  color:white;
  border:none;
  padding:10px 18px;
  border-radius:6px;
  cursor:pointer;
  font-size:14px;
}


/* RECEIPT LIST STYLE */
.receipt-container {
  max-height: 700px; /* Define max height + overflow-y => Now a scrollbar appears when nodes stretch the list beyond the predefined max-height */
  overflow-y: auto;
  width: 700px;
  margin: 20px auto;
  padding: 10px;
  font-family: Arial, sans-serif;
  margin-left: 100px;
}

.filter-title {
  text-transform: capitalize;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

.right-content {
  flex: 1;         /* Fills remaining space */
}

.date-group {
  margin-bottom: 25px;
}

.date-header {
  background: #f4f4f4;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border-left: 4px solid #007bff;
}

.receipt-card {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.receipt-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
}

.receipt-name {
  font-weight: bold;
  margin-bottom: 6px;
}
/* RECEIPT LIST STYLE */

</style>