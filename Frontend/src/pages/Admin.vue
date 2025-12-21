<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';
    import { currentUserID } from "../sessiondata/sessionID";
    import appenduserwindow from "../components/Admin_userappend.vue";
    import constantvaluewindow from "../components/Constantvalue.vue";

    const viewuserappend = ref(false);
    const viewvaluewindow = ref(false);

    const blur = ref(false);

    const users = ref([]);
    const permavalues = ref([]);
    const selectedID = ref('');
    
    const valueID = ref('');
    const method = ref('');
    const type = ref('');

    async function load(){
        const alluserdata = await fetch("http://localhost:3000/dashboard/dashboardcheck/" + currentUserID.value)
        const permvalues = await fetch("http://localhost:3000/receiptitems/permanentValues");

        const data = await alluserdata.json();
        const permdata = await permvalues.json();

        users.value = data;
        permavalues.value = permdata;

        //console.log(users.value);
    };

    onMounted(async () => {
        load();
    })

    function openuserappend(userID){
        selectedID.value = userID;

        viewuserappend.value = true;
        blur.value = true;
    }

    function openconstantvalue(ID, newmethod, selectedtype){
        valueID.value = ID;
        method.value = newmethod;
        type.value = selectedtype;

        viewvaluewindow.value = true;
        blur.value = true;
    }

    function closewindows(){
        viewuserappend.value = false;
        viewvaluewindow.value = false;
        
        blur.value = false;

        load();
    }
</script>

<!--
    Template
-->
<template>
    <div :style="{ filter: blur ? 'blur(5px)' : 'none' }">
        <h1 style="text-align:center">
            Admindashboard
        </h1>
        <div v-if="users" class="user-grid">
            <table v-if="users" class="user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Gmail</th>
                        <th>Permission</th>
                        <th>Append</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="user in users" :key="user.usersID">
                        <td>{{ user.usersID }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.gmail }}</td>
                        <td>{{ user.permission }}</td>
                        <td><img src='@/assets/pencil.png' style="width:25px; height:25px; cursor:pointer" @click="openuserappend(user.usersID)"></td>
                        <td><img src='@/assets/Trash.png' style="width:25px; height:25px; cursor:pointer"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="lower-tables">
            <div>
                <table v-if="permavalues">
                    <thead>
                        <tr>
                            <th>CategoryID</th>
                            <th>Categoryname</th>
                            <th>Append</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="category in permavalues.allcategories" :key="category.categoryID">
                            <td>{{ category.categoryID }}</td>
                            <td>{{ category.categoryname }}</td>
                            <td style="text-align:center"><img src='@/assets/pencil.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(category.categoryID, 'PUT', 'category')"></td>
                            <td style="text-align:center"><img src='@/assets/Trash.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(category.categoryID, 'DELETE', 'category')"></td>
                        </tr>
                    </tbody>
                </table>
                <img src="@/assets/Add.png" @click="openconstantvalue(0, 'POST', 'category')" style="width:30px; height:30px; margin-top:5px;">
            </div>
            <div>
                <table v-if="permavalues">
                    <thead>
                        <tr>
                            <th>StoreID</th>
                            <th>Storename</th>
                            <th>Append</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="store in permavalues.allstores" :key="store.storeID">
                            <td>{{ store.storeID }}</td>
                            <td>{{ store.storename }}</td>
                            <td style="text-align:center"><img src='@/assets/pencil.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(store.storeID, 'PUT', 'store')"></td>
                            <td style="text-align:center"><img src='@/assets/Trash.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(store.storeID, 'DELETE', 'store')"></td>
                        </tr>
                    </tbody>
                </table>
                <img src="@/assets/Add.png" @click="openconstantvalue(0, 'POST', 'store')" style="width:30px; height:30px; margin-top:5px;">
            </div>
            <div>
                <table v-if="permavalues">
                    <thead>
                        <tr>
                            <th>UnitID</th>
                            <th>Unitname</th>
                            <th>Append</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="unit in permavalues.allunits" :key="unit.unitID">
                            <td>{{ unit.unitID }}</td>
                            <td>{{ unit.unitname }}</td>
                            <td style="text-align:center"><img src='@/assets/pencil.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(unit.untiID, 'PUT', 'unit')"></td>
                            <td style="text-align:center"><img src='@/assets/Trash.png' style="width:20px; height:20px; cursor:pointer" @click="openconstantvalue(unit.untiID, 'DELETE', 'unit')"></td>
                        </tr>
                    </tbody>
                </table>
                <img src="@/assets/Add.png" @click="openconstantvalue(0, 'POST', 'unit')" style="width:30px; height:30px; margin-top:5px;">
            </div>
        </div>
    </div>
    <appenduserwindow
        v-if="viewuserappend"
        :userID ="selectedID"
        @close="closewindows()"
        />

    <constantvaluewindow
    v-if="viewvaluewindow"
    :itemID="valueID"
    :method="method"
    :itemtype="type"
    @close="closewindows()"/>
</template>

<style scoped>
    .user-grid {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        max-height:400px;
        overflow-y:auto;
    }

    .user-table {
        width: 76%;
        border-collapse: collapse;
        font-size: 15px;
        background: #fafafa;
    }

    .user-table th,
    .user-table td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }

    .user-table thead {
        background: #f0f0f0;
        font-weight: bold;
    }

    .user-table tr:nth-child(even) {
        background: #f7f7f7;
    }

    h1 {
        margin-bottom: 15px;
    }

    .lower-tables {
        display: flex;
        gap: 90px;
        margin-top: 30px;
        flex-wrap: wrap; /* makes it responsive */
        justify-content: center;
    }

    .lower-tables table {
        border-collapse: collapse;
        min-width: 200px;
    }

    .lower-tables th,
    .lower-tables td {
        border: 1px solid #ccc;
        padding: 6px 10px;
    }
</style>