<script setup>
    import ApexCharts from "vue3-apexcharts";
    import { ref, onMounted } from "vue";
    import { currentUserID } from "../sessiondata/sessionID"

    const dates = ref([]); // => Y-AXIS
    const prices = ref([]); // => X-AXIS

    const generalmetrics = ref([]);
    const ratios = ref([]);
    const topthree = ref([]);

    const categorylist = ref([]);

    const category = ref('');
    const timefilter = ref('');

    const chartOptions = ref({ // Remember this is REACTIVE. xaxis & yaxis are both reactive because they are in refs.
        chart: {
            id: "price-line-chart", // => Unique identifier of the chart (usefull if you would be working with multiple charts).
            toolbar: { show: true } // allow download as PNG
        },
        xaxis: {
            categories: [] // Datalabels of x-axis! [jan, feb, ...]
                           // Datalabels align with series.data. 
        },
        stroke: { curve: "smooth" }, // Makes the line smooootthhh
        title: { text: "Total Price per Date" },
        yaxis: {
            title: { text: "Price (€)" }
        }
    });

    const series = ref([
        { name: "Total Price", data: [] } // HERE IS THE Y-AXIS VALUE STORED!
    ]);                                   // Why a seperate ref? Because the data has to be reactive! If your data changes, so must this then also change to create a new chart.

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
                userID: currentUserID.value
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
                userID: currentUserID.value
            })
        });

        const data = await response.json();

        if(data.error){
            alert(data.error);
        }
        else{
            // Fill reactive refs. .map function = loop through all items of json; take properties (and optionally convert them). Result = new array with only those specified items.
            dates.value = data.map(item => new Date(item.receiptdate).toLocaleDateString()); // => To local datestring, again because javascript by default takes DateTime.
            prices.value = data.map(item => parseFloat(item.Totalprice));

            // Update chartOptions and series dynamically
            chartOptions.value.xaxis.categories = dates.value; // ASSIGN ARRAY OF DATESTRING TO XAXIS
            series.value[0].data = prices.value; // ASSIGN ARRAY OF PRICES TO YAXIS
        }
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
                <p>#1. {{ topthree[0]?.categoryname ?? 'N/A' }}</p>
                <p>#2. {{ topthree[1]?.categoryname ?? 'N/A' }}</p>
                <p>#3. {{ topthree[2]?.categoryname ?? 'N/A' }}</p>
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
                        :value="cat.categoryname">
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
                <!-- v-if at apexcharts: yes it is possible to not have data to visualize. If you detect it, don't try it then!  -->
                <ApexCharts
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

<style scoped>
.page-layout {
    display: flex;
    gap:30px;
}

.user-metrics {
    width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 18px;
}

.user-metrics h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    border-bottom: 1px solid #eee;
}

.user-metrics p {
    margin: 5px 0;
    color: #444;
}

.category-ratios p {
    font-size: 18px;
    padding: 6px 10px;
    background: #fafafa;
    border-radius: 8px;
    margin-bottom: 6px;
    width: 300px;
    overflow: auto;
}

.category-ratios p:hover {
    background: #f0f0f0;
}

.greater-graph-settings {
    width: 950px;
    padding: 15px;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.graph-settings {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.graph-settings h3 {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
}

.graph-settings select {
    font-size: 13px;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 200px;
}

.annoying-button {
    display: flex;
    justify-content: center;
}

.annoying-button button {
    width: 535px;
    padding: 20px;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #121111;
    background-color: #121111;
    color: #fff;
    cursor: pointer;
}

.annoying-button button:hover {
    background-color: #333;
}

.graph {
    width: 900px;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #ddd;
}
</style>
