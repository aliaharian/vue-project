<script setup>
import { onMounted, ref, onUpdated, nextTick, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import Test2 from './Test2.vue';

const name = ref(0)
const family = ref(0)
onMounted(() => {
    console.log('mounted');
    // console.log('params', $route.params)
});
onUpdated((e) => {
    console.log('ok!', e)
});
const increment = () => {
    name.value++
}
const increment2 = () => {
    family.value++
}
watch(name, (newName, oldName) => {
    console.log('newName', newName)
    console.log('oldName', oldName)
})


</script>

<template>
    <div>dynamic!!!!</div>
    <div>{{ $route.params.id }}</div>
    <div>{{ name }}</div>
    <button @click="increment">
        {{ name }}
    </button>
    <div>{{ family }}</div>
    <button @click="increment2">
        {{ family }}
    </button>
    <Test2 :family="family" />
    <RouterLink to="/">home</RouterLink>
</template>

