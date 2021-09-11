<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { ref, reactive, onBeforeUpdate, watchEffect } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const list = reactive([1, 2, 3])
const divs = ref<any[]>([])

// 确保在每次更新之前重置ref
onBeforeUpdate(() => {
  console.log(divs.value)
  divs.value = []
})

const showCode = (id: number, value: string) => {
  console.log(id, value)
  list.splice(1, 1)
}

const root = ref(null)

watchEffect(
  () => {
    console.log(root.value) // => <div>This is a root element</div>
  },
  { flush: 'post' }
)
</script>

<template>
  <div v-permission="['1826709444']">这个部分只会在具有权限的时候会被看见</div>
  <div v-localhost>只会在本地开发的时候看见的元素1</div>
  <div v-localhost="false">只会在本地开发的时候看见的元素2</div>
  <Button ref="root">测试按需导入</Button>
  <router-view />
  <HelloWorld msg="YOU AE OK?" @show-code="showCode" />
  <div v-for="(item, i) in list" :ref="el => { if (el) { divs[i] = el } }">{{ item }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
