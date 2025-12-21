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

  async function gotoReceipts() {
    const checkexistance = await userexists();

    if (currentUserID.value && checkexistance) {
      router.push('/receipts')
    } else {
      alert("You must log in first or create a new account!")
    }
  }
  async function gotoMetrics() {
    const checkexistance = await userexists();

    if (currentUserID.value && checkexistance) {
      router.push('/metrics')
    } else {
      alert("You must log in first or create a new account!")
    }
  }
  async function gotoRecommendations() {
    const checkexistance = await userexists();

    if (currentUserID.value && checkexistance) {
      router.push('/recommendations')
    } else {
      alert("You must log in first or create a new account")
    }
  }
  async function gotoUserdashboard(){
    console.log(currentUserID.value);
    if (currentUserID.value) {
      const permissioncheck = await fetch("http://localhost:3000/dashboard/permissioncheck/" + currentUserID.value);

      const data = await permissioncheck.json();

      if(data != null){
        if(data.permission == 1){
          router.push('/userdashboard')
        }
        else{
          router.push('/admin')
        }
      }
      else{
        alert("You must first make an account!");
      }
    } 
    else {
      alert("You must log in first!")
    }
  }

  async function userexists(){
    const permissioncheck = await fetch("http://localhost:3000/dashboard/permissioncheck/" + currentUserID.value);

    const data = await permissioncheck.json();

    console.log("DATA: " + data);

    if(!data || Object.keys(data).length === 0){
      console.log(data);
      return false;
    }
    else{
      console.log(data);
      return true;
    }
  }

  watch(currentUserID, async (newVal, oldVal) => {
    if (newVal != null) {
      const permissioncheck = await fetch("http://localhost:3000/dashboard/permissioncheck/" + currentUserID.value);
      const data = await permissioncheck.json();

      if(data != null){
        if(data.permission == 1){
          currentpermission.value = "Logged in as: ";
          currentusername.value = `Shopper ${data.username}`;
        }
        else if(data.permission == 2){
          currentpermission.value = "Logged in as: ";
          currentusername.value = `Admin ${data.username}`;
        }
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