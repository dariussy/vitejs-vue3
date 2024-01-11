<template>
    <div style="border: 1px solid #ccc!important;">
        <h1>myFirstComp</h1>
        <h2>props_name : {{ name }}</h2>
        <h2>props_name2 : {{ name2 }}</h2>
    </div>
</template>
<script setup lang="ts">
    //defineProps({name:String})
    interface props {
        name2:string
        name:string
    }
    const props = withDefaults(defineProps<props>(),{ 
        name2 : 'defaultName2',name : 'defaultName2'}        )
</script>