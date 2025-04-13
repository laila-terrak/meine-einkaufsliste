<script setup lang="ts">
import { useShoppingListStore } from '~/store/shoppingListStore'
const open = ref(false)
const inputValue = ref("")
const store = useShoppingListStore()
const createShoppingList = () => {
    if (inputValue.value == "") {
        return
    }
    console.log('Eingegebener Wert:', inputValue.value)
    store.setName(inputValue.value)
    inputValue.value = ""
    open.value = false
}
</script>
<template>
    <UModal v-model:open="open" title="Neue Einkaufsliste erstellen"
        description="Bitte gib den Namen deiner neuen Einkaufsliste ein" :ui="{ footer: 'justify-end' }">
        <UButton class="cursor-pointer " variant="subtle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
            </svg></UButton>
        <template #body>
            <div class="flex justify-center">
                <UInput v-model="inputValue" />
            </div>
        </template>
        <template #footer>
            <UButton label="abrechen" color="neutral" variant="outline" @click="open = false" />
            <UButton label="anlegen" color="neutral" @click="createShoppingList" />
        </template>
    </UModal>
</template>
<style></style>