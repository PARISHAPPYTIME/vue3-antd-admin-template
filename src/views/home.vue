<script lang="ts"  setup>
import { useCounterStore } from '@/store/countStore'
const store = useCounterStore()
const add = () => {
    store.increment()
}
</script>

<template>
    <h1>Home</h1>
    <h2>{{ store.count }}</h2>
    <button @click="add"></button>
</template>