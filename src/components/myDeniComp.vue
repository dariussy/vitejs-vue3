<template>
    <h2>ici{{ name }}</h2>
    <h2>iciddd-{{ name2 }}</h2>
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