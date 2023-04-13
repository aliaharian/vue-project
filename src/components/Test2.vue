<script setup>
import { watch,ref } from 'vue';

const props = defineProps({
    family: {
        type: Number,
        required: false
    }
})
// const family = ref(family)

watch(()=>props.family, (newName, oldName) => {
    console.log('newFam', newName)
    console.log('oldFam', oldName)
})

</script>
<template>
    <div>ok22222!!!!</div>
    <div>{{ props.family }}</div>
</template>