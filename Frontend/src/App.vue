<script setup>
  import { currentUserID } from "./sessiondata/sessionID"
  import { useRouter } from 'vue-router'
  import{ ref, onMounted, provide } from "vue";
  import { watch } from 'vue'

  const router = useRouter()

  const currentusername = ref('');
  const currentpermission = ref('');

  function gotoHome(){
    router.push('/');
  }

  function gotoReceipts() {
    if (currentUserID.value) {
      router.push('/receipts')
    } else {
      alert("You must log in first!")
    }
  }
  function gotoMetrics() {
    if (currentUserID.value) {
      router.push('/metrics')
    } else {
      alert("You must log in first!")
    }
  }
  function gotoRecommendations() {
    if (currentUserID.value) {
      router.push('/recommendations')
    } else {
      alert("You must log in first!")
    }
  }
  async function gotoUserdashboard(){
    console.log(currentUserID.value);
    if (currentUserID.value) {
      const permissioncheck = await fetch("http://localhost:3000/dashboard/permissioncheck/" + currentUserID.value);

      const data = await permissioncheck.json();

      if(data.permission == 1){
        router.push('/userdashboard')
      }
      else{
        router.push('/admin')
      }
    } 
    else {
      alert("You must log in first!")
    }
  }

  watch(currentUserID, async (newVal, oldVal) => {
    if (newVal != null) {
      const permissioncheck = await fetch("http://localhost:3000/dashboard/permissioncheck/" + currentUserID.value);
      const data = await permissioncheck.json();

      if(data.permission == 1){
        currentpermission.value = "Logged in as: ";
        currentusername.value = `Shopper ${data.username}`;
      }
      else if(data.permission == 2){
        currentpermission.value = "Logged in as: ";
        currentusername.value = `Admin ${data.username}`;
      }
    }
    else{
      currentusername.value = "";
      currentpermission.value = "";
    }
  }, {immediate: true})

</script>

<template>
  <div>
    <nav class="nav">
      <div class="nav-left">
        <button @click="gotoHome">Home</button>
        <button @click="gotoReceipts">Receipts</button>
        <button @click="gotoMetrics">Metrics</button>
        <button @click="gotoRecommendations">Recommendations</button>
        <button @click="gotoUserdashboard">Userdashboard</button>
      </div>

      <div class="nav-right">
        <span>{{ currentpermission }}</span>
        <span>{{ currentusername }}</span>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Put child items to left, last child item all the way to the right */
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.nav-left button {
  margin-right: 10px;
  padding: 6px 12px;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
}

.nav-left button:hover {
  background: #f0f0f0;
}
</style>