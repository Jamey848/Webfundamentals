<script setup>
    import ApexCharts from "vue3-apexcharts";
    import { ref, onMounted } from "vue";

    const dates = ref([]);
    const prices = ref([]);

    const generalmetrics = ref([]);
    const ratios = ref([]);
    const topthree = ref([]);

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

        console.log(data);

        categorylist.value = data.allcategories;

        const metricsdata = await fetch("http://localhost:3000/metrics", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: 1
            })
        })

        const datametrics = await metricsdata.json();


        generalmetrics.value = datametrics.generalmetrics;
        ratios.value = datametrics.ratios;
        topthree.value = datametrics.topthree;
    });

    async function getGraph(){
    const response = await fetch("http://localhost:3000/metrics/graph", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        CategoryName: category.value,
        TimeFilter: timefilter.value,
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
        <div class="user-metrics">
            <h3>General Metrics</h3>
            <div class="general-metrics" v-if="generalmetrics.length">
                <p>Your current total: €{{ generalmetrics[0].TotalSum }}</p>
                <p>Your current average: €{{ generalmetrics[0].AverageSum }}</p>
            </div>

            <h3>Top 3 categories</h3>
            <div class="top-categories" v-if="topthree.length">
                <p>#1. {{ topthree[0].categoryname }}</p>
                <p>#2. {{ topthree[1].categoryname }}</p>
                <p>#3. {{ topthree[2].categoryname }}</p>
            </div>

            <h3>Category Ratios</h3>
            <div class="category-ratios" v-if="ratios.length">
                <p v-for="(ratio, index) in ratios" :key="index">
                    {{ ratio.categoryname }}: {{ ratio.percentage }}
                </p>
            </div>
        </div>

        <div class="greater-graph-settings">
            <div class="graph-settings">
                <h3>Category</h3>
                <select v-model="category">
                    <option
                        v-for="cat in categorylist"
                        :key="cat.categoryID"
                        :value="cat.categoryname"
                    >
                        {{ cat.categoryname }}
                    </option>
                </select>

                <h3>Time</h3>
                <select v-model="timefilter">
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                </select>
            </div>
            <div class="annoying-button">
                <button @click="getGraph()">Visualize</button>
            </div>

            <div class="graph">
                <h2>ReceiptChart</h2>

                <apexcharts
                    v-if="series[0].data.length"
                    type="line"
                    :options="chartOptions"
                    :series="series"
                    width="900px"
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
        gap: 30px;
        padding: 20px;
        width:100%;
    }

    .greater-graph-settings {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        background-color: #fafafa;
        border: 1px solid #ddd;
        border-radius: 12px;
        width: 950px;
    }

    .graph-settings {
        display: flex;
        gap: 15px;
        justify-content: center;
    }

    .graph-settings h3 {
        font-size: 14px;
        font-weight: 600;
    }

    .graph-settings select {
        font-size: 13px;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 200px;
    }

    .annoying-button{
        display: flex;
        justify-content: center;
    }

    .annoying-button button {
        padding: 8px 12px;
        font-size: 14px;
        border-radius: 6px;
        border: 1px solid #121111;
        background-color: #121111;
        color: white;
        cursor: pointer;
        width: 535px;
    }

    .greater-graph-settings button:hover {
        background-color: #333;
    }

    /* Right graph panel */
    .graph {
        flex: 1;
        width:900px;
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .user-metrics {
        font-size:18px;
        width: 400px;
        padding: 20px;
        background: #fff;
        border-radius: 12px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .user-metrics h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
    }

    .user-metrics p {
        margin: 5px 0;
        color: #444;
    }

    .category-ratios p {
        font-size:18px;
        display: flex;
        padding: 6px 10px;
        background: #fafafa;
        border-radius: 8px;
        margin-bottom: 6px;
        width:300px;
        overflow:auto;
    }

    .category-ratios p:hover {
        background: #f0f0f0;
    }

</style>
