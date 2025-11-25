<script setup>
import ApexCharts from "vue3-apexcharts";
import { ref, onMounted } from "vue";

const dates = ref([]);
const prices = ref([]);

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
});
</script>

<template>
  <div>
    <h2>Test ApexCharts</h2>
    <apexcharts
      v-if="series[0].data.length"
      type="line"
      :options="chartOptions"
      :series="series"
      width="700px"
      height="500px"
    />
  </div>
</template>

<script>
export default {
  components: {
    apexcharts: ApexCharts
  }
};
</script>
