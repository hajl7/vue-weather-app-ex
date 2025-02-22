<template >
    <div class="weather-info">
        <p>{{ $store.state.weatherData.icon }}</p>
        <div class="icon">
            <!-- {{props.weatherData.icon}} -->
            <img 
            :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`" 
            :alt="$store.state.weatherData.icon">
        </div>
        <div class="temp">{{($store.state.weatherData.temp -273.15).toFixed(1)}}&deg;</div>
        <div class="text">{{$store.state.weatherData.text}}</div>
        <div class="location">{{$store.state.weatherData.city}},{{$store.state.weatherData.location}}</div>
    </div>
</template>
<script setup>
    // const props =defineProps({
    //     weatherData: Object,
    // })
    // console.log(props.weatherData);
</script>
<style scoped lang="scss">
    .weather-info{
        padding: 20px;
        &>div{
            margin-top:20px;
            border: 1px solid #ccc;
            padding: 20px;
        }
        
    }
    .icon img{
        width: 140px;
    }
    .temp{
        font-size: 4em;
    }
    .text{
        font-size: 2em;
    }
</style>