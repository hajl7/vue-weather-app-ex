<script setup>
 
  import Navbar from './components/Navbar.vue';
  // import SearchBar from './components/SearchBar.vue';
  import MainComp from './components/MainComp.vue';
  import {ref, onMounted} from 'vue';
  import { useStore } from 'vuex';
  import About from './components/About.vue';


 const store =useStore();
   
  //앱이 실행되면 날씨 데이터 가져오기
  onMounted(()=>{
    console.log('mounted')
    store.dispatch('getWeather');
      })


  const onSearchCity=(city)=>{
    console.log(city);
    weatherData.value.city =city;
    getWeather();
}
</script>

<template>
  <!-- <p>count:{{ $store.state.count }}</p>
  <button @click="$store.commit('addCount',10)">count++</button>
  <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar/>
   <div v-if="!$store.state.toggle">
    <MainComp/>
   </div>
   <div v-else>
      <about/>
   </div>
 
  <!-- <MainComp 
  :weatherData="weatherData"
  @onSearchCity="onSearchCity"/> -->

  <!-- <p>{{ weatherData.icon }}</p>
  <p>{{ weatherData.temp }}</p>
  <p>{{ weatherData.location }}</p>
  <p>{{ weatherData.city }}</p>
  <p>{{ weatherData.text }}</p> -->
  
</template>

<style scoped lang="scss">

</style>
