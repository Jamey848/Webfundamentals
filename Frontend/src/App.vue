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

  /*function gotoProductlist() {
    if (currentUserID.value) {
      router.push('/productlist')
    } else {
      alert("You must log in first!")
    }
  }*/
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