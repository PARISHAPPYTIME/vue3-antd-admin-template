<script lang="ts" setup>
import { server } from '@/utils/http/simple'

interface Res<T> {
    code: number
    message: string
    data: T
}

server<Res<any[]>>({
    url: 'api/test',
    method: 'post',
    params: {}
}).then(res => {
    console.log(res.data)
    console.log(res.code)
    console.log(res.message)
})
</script>

<template>
    <h1>About</h1>
</template>