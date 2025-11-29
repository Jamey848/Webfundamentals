<!--
    Settings van de pagina
--->

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { currentUserID } from "../sessiondata/sessionID"
    import AdditemWindow from '../components/Addreceiptitem.vue';

    const showAdditem = ref(false); // Ref() = 
    const receiptID = ref('');

    const route = useRoute();
    const rItems = ref([]);
    const totalprice = ref('');
    const budgets = ref('');

    onMounted(async() => { // onMounted = 
      
      const allbudgets = await fetch(`http://localhost:3000/dashboard/budget/1`, {
        method: "GET"
      });

      const data = await allbudgets.json();
      budgets.value = data;

      console.log(budgets.value);

      const R_ID = route.params.receiptID;
      if (R_ID) {
          receiptID.value = R_ID;
          getReceiptitems(R_ID);
      } 
      else {
          console.warn('No receiptID in route params');
      }
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
        //console.log(data);
    }
    
    async function deleteItem(itemID){
        const delitem = await fetch("http://localhost:3000/receiptitems/" + itemID, {
            method: "DELETE"
        });
        console.log(delitem.json());

        getReceiptitems(receiptID.value);
    }
</script>

<!--
    Template
--->
<template>
    <div class="page-layout">
        <div class="header-row">
            <h1>Productlist</h1>
            <img @click="showAdditem = true" src="@/assets/Add.png" class="add-icon">
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
/* AI, MAKE IT LOOK BEAUTIFUL! */
.header-row {
  display: flex;
  align-items: center;   /* vertically center H1 and icon */
  gap: 12px;             /* space between H1 and icon */
  margin-bottom:20px;
  margin-top:20px;
}

.header-row h1 {
  font-size: 1.8rem;
  margin: 0;             /* remove default margin */
}

.add-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s;
}

.add-icon:hover {
  transform: scale(1.1); /* tiny hover effect */
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr; 
  max-height: 500px;          /* limits height so scrollbar appears if too many items */
  overflow-y: auto;            /* vertical scroll for many rows */
  border-collapse: collapse;   /* optional: makes borders look tighter */
  background-color: #f9f9f9;  /* light background for the table */
  font-size: 16px;             /* larger, easier-to-read text */
  border-radius: 8px;          /* rounded corners for the whole grid */
}

/* headers */
.grid-header div {
  font-weight: bold;
  background-color: #4CAF50;   /* nice green header */
  color: white;
  padding: 12px 8px;
  border: 1px solid #ccc;
  text-align: center;
}

/* rows */
.grid-items div {
  padding: 10px 8px;
  border-bottom: 1px solid #eee;
  text-align: center;
  transition: background-color 0.2s;
}

/* keep header as grid items so columns align properly */
.grid-header {
  display: contents; /* children align with grid columns */
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
  display: contents; /* allows children to align with columns */
}

.grid-items div {
  padding: 10px 8px;
  border-bottom: 1px solid #eee;
  text-align: center;
  transition: background-color 0.2s;
}

/* alternate row coloring */
.grid-items:nth-child(even) div {
  background-color: #fcfcfc;
}

/* hover effect */
.grid-items div:hover {
  background-color: #f1f1f1;
}

/* trash icon */
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

.trash-icon img:hover {
  transform: scale(1.2);
}

.totalprice-card {
    background: #4CAF50;           
    color: white;                   
    padding: 6px 12px;             
    border-radius: 12px;            
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
    font-size: 30px;             
    font-weight: bold;
    text-align: center;             
    margin: 16px 0;                 
    transition: transform 0.2s, box-shadow 0.2s;
}
    /*.grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr;  Define the number of columns to match your header 
         Make the whole container align like a table 
    }

    .grid-header,
    .grid-items {
        display: contents;  Optional: allows children divs to align with grid columns 
    }

    .grid-header div,
    .grid-items div {
        padding: 8px;
        border: 1px solid #ccc;
    }

    .trash-icon {
        display: flex;           makes the div a flex container 
        justify-content: center;  horizontal centering 
        align-items: center;      vertical centering 
    }
    .trash-icon img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }*/
    
</style>