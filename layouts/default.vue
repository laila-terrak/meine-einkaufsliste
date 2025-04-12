<script setup lang="ts">
const open = ref(false)
</script>
<template>
    <header class="w-full p-8 flex items-center justify-between">
        <h1>Meine Einkaufsliste</h1>
        <UModal v-model:open="open" title="Neue Einkaufsliste erstellen" description="Bitte gib den Namen deiner neuen Einkaufsliste ein" :ui="{ footer: 'justify-end' }">
            <UButton class="cursor-pointer " variant="subtle" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z"/></svg></UButton>
            <template #body>
                <Placeholder class="flex justify-center">
                    <UInput/>
                </Placeholder>
            </template>
            <template #footer>
                <UButton label="abrechen" color="neutral" variant="outline" @click="open = false" />
                <UButton label="anlegen" color="neutral" />
            </template>
        </UModal>
    </header>
    <main class="w-full p-8">
        <slot/>
    </main>
    <footer>
        <h2>this is the footer</h2>
    </footer>
</template>
<style>
</style>