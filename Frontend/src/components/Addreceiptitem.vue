<!--
    -> Settings van de component
--->
<script setup>
    // ------------ Import
    import{ ref, onMounted, provide } from "vue"; // Automatic refresh of value.
    import { currentUserID } from "../sessiondata/sessionID"

    const emit = defineEmits(['close', 'login']) // defineEmits = Vue3 API. Declare a function to be "emitted" (send) to the parent page. The parent page can listen to these functions.


    function close(){
        emit('close')
    }

</script>

<!--
    Wat de gebruiker zal zien en gelinkt is aan script
--->

<template>
    <div class="overlay" @click.self="close">
        <div class="window">
            <h2 style="text-align:center">Add a new receipt item</h2>
            <div class="add-boxes">
                <div class="enter-productname">
                    <label>productname</label><br>
                    <input size="40" required />
                </div>
                <div>
                    <label>Price</label><br>
                    <input size="20" required />
                </div>
                <div>
                    <label>Quantity (how much of 1 unit)</label>
                    <br>
                    <input size="20" required />
                    <br>
                    <label>Units</label>
                    <br>
                    <input size="20" required />
                    <br>
                    <label>Amount</label>
                    <br>
                    <input size="20" required />
                </div>
                <div>
                    <label>Category</label>
                    <br>
                    <input size="20" required />
                </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
/* SUBWINDOW STYLE */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.window {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 800px;
  height: 550px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
/* SUBWINDOW STYLE */
</style>