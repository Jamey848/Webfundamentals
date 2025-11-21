<!--
    Settings van de pagina
--->

<script setup>
    import { ref } from "vue";
    import { currentUserID } from '@/sessiondata/sessionID';

    const timeSelection = ref("week");   // default selected
    const futureSelection = ref("past");

    const groupedReceipts = ref({});

    const receipts = ref([]);
    const shopcount = ref('');
    const store = ref('');
    const totalprice = ref('');

    async function receiptData(){
      console.log(futureSelection.value);
        const receiptdata = await fetch("http://localhost:3000/receipt/data", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: 1,
                timefilter: timeSelection.value,
                futurepurchase: updateTime(timeSelection)
            })
        })

        const data = await receiptdata.json();

        shopcount.value = data.count[0].shoppingcount; // => KNOW YOUR DATA STRUCTURE
        totalprice.value = data.total[0].totalprice;
        store.value = data.store[0].storename;
        receipts.value = data.nodes;

        groupedReceipts.value = receipts.value.reduce((acc, r) => { // => value.reduce(acc, r) = Accumulator: the thing you're currently building. Default value initialized as {}. r: receiptvalues, go through all receipts
            const date = new Date(r.receiptdate).toLocaleDateString(); // toLocalDateString(), because r.receiptdate is like xxxx/xx/xxT00:00:00. Javascript always makes it datetime; we don't like datetime
            if (!acc[date]) acc[date] = []; // => IF what you already have for dates is not yet in the collection (aka; you have a new date for receipts); then add this date so that receipts with the same dates will be grouped correctly.
            acc[date].push(r); // Push the receipt to the correct group
            return acc; // GROUPED BY DATE! YIPEE!!
        }, {});
    }

    function updateTime(selectedTime){
      if(futureSelection.value == "past"){
        return 0;
      }
      else{
        return 1;
      }
    }
</script>

<!--
    Template
--->
<template>
<div class="page-layout">
  <div class="receipt-container">
  
    <!-- CURRENT TIME FILTER -->
    <h2 class="filter-title">{{ timeSelection }}</h2>

    <!-- DATE GROUPS   => EXPLAIN HOW v-for WORKS -->
      <div class="date-group" v-for="(items, date) in groupedReceipts" :key="date">
        <h3 class="date-header">{{ date }}</h3>
            
          <!-- RECEIPT CARDS  => EXPLAIN HOW LIST ITEMS ARE LISTED-->
        <div class="receipt-card" v-for="receipt in items" :key="receipt.receiptID">
          <div class="receipt-name">
              {{ receipt.receiptname ?? 'Nameless Receipt' }} <!-- ?? = If null or empty = default to this given value-->
          </div>
        </div>
      </div>
  </div>


<div class="right-content">
  <div class="listbox">
    <h3>Time</h3>
    <label>
      <input type="radio" v-model="timeSelection" value="week" /> Week
    </label>
    <label>
      <input type="radio" v-model="timeSelection" value="month" /> Month
    </label>
    <label>
      <input type="radio" v-model="timeSelection" value="year" /> Year
    </label>
  </div>

  <div class="listbox">
    <h3>Future</h3>
    <label>
      <input type="radio" v-model="futureSelection" value="past" /> Past
    </label>
    <label>
      <input type="radio" v-model="futureSelection" value="future" /> Future
    </label>
  </div>
  <div style="margin-left:480px;">
    <button class="button-style" @click="receiptData">Check It Out!</button>
  </div>
  <div class="summary-box">
    <h2>Summary</h2>
    <p v-if="shopcount">Amount of shoppingtrips: {{shopcount}}</p>
    <p v-if="totalprice">Total amount spent: {{totalprice}}</p>
    <p v-if="store">Most visited store: {{store}}</p>
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

.summary-box{
  position:relative;
  margin-left:200px;
  font-size:20px;
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