<!--
    Settings van de pagina
--->

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { currentUserID } from "../sessiondata/sessionID"
    import AdditemWindow from '../components/Addreceiptitem.vue';
    import { useRouter } from 'vue-router'

    const router = useRouter();
    //import AddbudgetWindow from '../components/Addbudget.vue';

    const showAdditem = ref(false); // Ref() = 
    const receiptID = ref('');

    const route = useRoute();
    const rItems = ref([]);
    const totalprice = ref('');

    const budgets = ref('');
    const selectedbudget = ref(null);
    const allocatedbudget = ref('');

    onMounted(async() => { // onMounted = 

      const R_ID = route.params.receiptID;
      if (R_ID) {
        receiptID.value = parseInt(R_ID);
        getReceiptitems(R_ID);
        //console.log(receiptID.value);
      } 
      else {
        console.warn('No receiptID in route params');
      }
      
      const allbudgets = await fetch(`http://localhost:3000/dashboard/budget/` + currentUserID.value, {
        method: "GET"
      });

      const thisbudget = await fetch(`http://localhost:3000/dashboard/budget_linkedreceipts/` + receiptID.value, {
        method: "GET"
      });

      const data = await allbudgets.json();
      const thisdata = await thisbudget.json();

      //console.log(thisdata);

      budgets.value = data;
      allocatedbudget.value = Array.isArray(thisdata)
      ? thisdata[0]?.budgetID
      : thisdata?.budgetID;

      //console.log(budgets.value);
      //console.log(allocatedbudget.value);
    });

    function closeSubwindow(){
      showAdditem.value = false;
      getReceiptitems(receiptID.value); // Refresh the page!
    }

    async function getReceiptitems(receiptID) {
      const res = await fetch(`http://localhost:3000/receiptitems/${receiptID}`);
      const data = await res.json();
      rItems.value = data;
      totalprice.value = rItems.value.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    }
    
    async function deleteItem(itemID){
      const delitem = await fetch("http://localhost:3000/receiptitems/" + itemID, {
          method: "DELETE"
      });
      //console.log(delitem.json());

      getReceiptitems(receiptID.value);
    }

    async function allocateNewBudget(){
      const newbudget = await fetch("http://localhost:3000/receipt/allocatedbudget", {
        method: "PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          budgetID: selectedbudget.value,
          receiptID: receiptID.value
        })
      })

      const data = await newbudget.json();

      allocatedbudget.value = Array.isArray(data)
      ? data[0]?.budgetID
      : data?.budgetID;
    }

    function goBack(){
      router.go(-1);
    }
</script>

<!--
    Template
--->
<template>
    <div class="page-layout">
      <img src="@/assets/GoBack.png" style="width:40px; height:40px; margin-top:10px; margin-left:10px" @click="goBack()">
        <div class="header-row">
            <h1>Productlist</h1>
            <img @click="showAdditem = true" src="@/assets/Add.png" class="add-icon">
            
            <div class="budget-info">
              <p>Currently allocated budget: {{allocatedbudget}}</p>
              <select v-if="budgets.length" v-model="selectedbudget">
                <option value="INVALID">Change allocated budget</option>
                <option v-for="budget in budgets" :key="budget.budgetID" :value="budget.budgetID"> {{budget.budgetID}} </option>
              </select>
              <button @click="allocateNewBudget()">Change budget</button>
            </div>

        </div>
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
                <div @click="deleteItem(item.receiptitemsID)" class="trash-icon"><img src="@/assets/trash.png"></div>
            </div>
        </div>
        <div class="totalprice-card">
            <p>Total price: €{{ totalprice }}</p>
        </div>
    </div>


    <AdditemWindow
  v-if="showAdditem"
  :receiptID="receiptID"
  @close="closeSubwindow"/>
</template>

<style scoped>

  .header-row {
    display: flex;
    align-items: center;   /* vertically center H1 and icon */
    gap: 12px;             /* space between H1 and icon */
    margin-bottom:20px;
  }

  .add-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr; 
    max-height: 500px;          /* limits height so scrollbar appears if too many items */
    overflow-y: auto;            /* vertical scroll for many rows */
    background-color: #f9f9f9;  /* light background for the table */
    font-size: 16px;             /* larger, easier-to-read text */
    border-radius: 8px;          /* rounded corners for the whole grid */
  }

  .grid-header div {
    font-weight: bold;
    background-color: #4CAF50;
    color: white;
    padding: 12px 8px;
    border: 1px solid #ccc;
    text-align: center;
  }

  .grid-items div {
    padding: 10px 8px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .grid-header {
    display: contents;
  }

  .grid-header div {
    font-weight: bold;
    background-color: #4CAF50;
    color: white;
    padding: 12px 8px;
    border: 1px solid #ccc;
    text-align: center;
  }

  .grid-items {
    display: contents;
  }

  .grid-items div {
    padding: 10px 8px;
    border-bottom: 1px solid #eee;
    text-align: center;
    transition: background-color 0.2s;
  }

  .trash-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trash-icon img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .totalprice-card {
    background: #4CAF50;           
    color: white;                   
    padding: 6px 12px;             
    border-radius: 12px;            
    font-size: 30px;             
    font-weight: bold;
    text-align: center;             
    margin: 16px 0;                 
  }

  .budget-info {
    background: #ffffff;
    border-radius: 20px;
    margin-left:20px;
  }

  .budget-info select {
    margin-right:10px;
  }

  .budget-info button {
    background: #4CAF50;
    color: white;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
    
</style>