import {createStore} from 'vuex';

//store만들기
export default createStore({
    state:{
        //스테이트 저장(데이터 보관/ initial state)
        count:0,
        weatherData:{
            icon:'icon',
            temp:0,
            text:'text',
            location:'location',
            city:'Seoul',
        },
        toggle:false,//true일때 about보여주기
    },
    mutations: {
        //데이터변경
        addCount(state,payload){
            state.count +=1 +payload;
        },
        updateWeather(state,payload){
            state.weatherData =payload;
            state.weatherData.icon =payload.weather[0].icon;
            state.weatherData.temp =payload.main.temp;
            state.weatherData.text =payload.weather[0].description;
            state.weatherData.location =payload.sys.country;
            state.weatherData.city =payload.name;
        },
        onSearchCity(state,payload){
            state.weatherData.city =payload;
        },
        toggleButton(state){
            state.toggle=!state.toggle;
        }
        },
    actions:{
        getWeather(context){
            const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=626fdeeda903618c0c16251a5ce0a94a`
                fetch(API_URL)
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data);
                    //  mutations함수로 날씨 정보 업데이트
                    context.commit('updateWeather',data)
              })
              .catch(err=>{
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
                  })
                }
    }    
})