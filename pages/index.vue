<script setup>
import { useShoppingListStore } from '~/store/shoppingListStore';
const store = useShoppingListStore()
console.log("listNmaes ", store.listNames)
</script>
<template>
    <div v-for="listName in store.listNames">
        <p>Neuer Listenname: {{ listName }}</p>
    </div>

</template>
<style></style>