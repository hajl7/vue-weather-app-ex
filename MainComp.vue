<template >
    <div class="container">
        <!-- <SearchBar @onSearchCity="onSearchCity"/>
        <Weather :weatherData="props.weatherData"/>      -->
        <SearchBar />
        <Weather />     
    </div>
</template>
<script setup>
import SearchBar from './SearchBar.vue';
import Weather from './Weather.vue';

//날씨 데이터 상태변수
// const props =defineProps({
//     weatherData: Object,
// })
// console.log(props.weatherData);

// const emits =defineEmits(['onSearchCity']);

// const onSearchCity=(city)=>{
//     console.log(city);
//     emits('onSearchCity',city);
// }
</script>

<style scoped lang="scss">
    .container{
        padding: 20px;
    }
</style>