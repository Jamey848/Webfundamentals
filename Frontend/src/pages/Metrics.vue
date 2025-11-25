<script setup>
import ApexCharts from "vue3-apexcharts";
import { ref, onMounted } from "vue";

const dates = ref([]);
const prices = ref([]);

const categorylist = ref([]);

const category = ref('');
const timefilter = ref('');

const chartOptions = ref({
  chart: {
    id: "price-line-chart",
    toolbar: { show: true } // allows download as PNG
  },
  xaxis: {
    categories: [] // start empty
  },
  stroke: { curve: "smooth" },
  title: { text: "Total Price per Date" },
  yaxis: {
    title: { text: "Price (€)" }
  }
});

const series = ref([
  { name: "Total Price", data: [] } // start empty
]);

onMounted(async () => {
    const res = await fetch("http://localhost:3000/receiptitems/permanentValues");
    const data = await res.json();

    categorylist.value = data.allcategories;
});

async function getGraph(){
  const response = await fetch("http://localhost:3000/metrics/graph", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      CategoryName: "alcohol",
      TimeFilter: "year",
      userID: 1
    })
  });

  const data = await response.json();

  // Fill reactive refs
  dates.value = data.map(item => new Date(item.receiptdate).toLocaleDateString());
  prices.value = data.map(item => parseFloat(item.Totalprice));

  // Update chartOptions and series dynamically
  chartOptions.value.xaxis.categories = dates.value;
  series.value[0].data = prices.value;

  console.log(dates.value, prices.value);
};
</script>

<template>
    <div class="page-layout">
        <div class="graph-items">
            <div class="greater-graph-settings">
                <div class="graph-settings">
                    <h3>Category</h3>
                    <select v-model="category">
                        <option v-for="cat in categorylist" :key="cat.categoryID"> {{ cat.categoryname }} </option>
                    </select>
                    <h3>Time</h3>
                    <select v-model="timefilter">
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                    </select>
                </div>
                <button @click="getGraph()">Visualize</button>
            </div>
            
            <div class="graph">
                <h2>Test ApexCharts</h2>
                
                <apexcharts
                v-if="series[0].data.length"
                type="line"
                :options="chartOptions"
                :series="series"
                width="700px"
                height="400px"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    apexcharts: ApexCharts
  }
};
</script>

<style scoped>
    .page-layout {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 30px;
        padding: 20px;
    }

    .greater-graph-settings {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        background-color: #fafafa;
        border: 1px solid #ddd;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        width: 500px;
    }

    .graph-settings {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .graph-settings .col {
        display: flex;
        flex-direction: column;
        flex: 1; /* equal width columns */
    }

    .graph-settings h3 {
        margin: 0 0 5px 0;
        font-size: 14px;
        font-weight: 600;
    }

    .graph-settings select {
        padding: 6px 10px;
        font-size: 13px;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 100%;
        box-sizing: border-box;
    }

    .greater-graph-settings button {
        padding: 8px 12px;
        font-size: 14px;
        border-radius: 6px;
        border: 1px solid #121111;
        background-color: #121111;
        color: white;
        cursor: pointer;
        width: 100%;
    }

    .greater-graph-settings button:hover {
        background-color: #333;
    }

    /* Right graph panel */
    .graph {
        flex: 1;
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

</style>
