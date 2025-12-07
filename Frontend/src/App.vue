<script setup>
  import { currentUserID } from "./sessiondata/sessionID"
  import { useRouter } from 'vue-router'

  const router = useRouter()

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
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/artists">Artists</router-link>
      <!--<router-link to="/addreceipt">AddReceipt</router-link>-->
      <router-link to="/receipts">Receipts</router-link>
      <!--<button @click="gotoProductlist" to="/productlist">Productlist</button>-->
      <button @click="gotoReceipts">Receipts</button>
      <button @click="gotoMetrics">Metrics</button>
      <button @click="gotoRecommendations">Recommendations</button>
      <button @click="gotoUserdashboard">userdashboard</button>
    </nav>

    <!-- This renders your pages -->
    <router-view />
  </div>
</template>

<!--<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>-->