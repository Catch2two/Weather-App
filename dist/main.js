(()=>{"use strict";const e="http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06021&days=4&aqi=yes&alerts=yes";console.log("Forecast Loaded"),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=e.current.is_day,r=e.current.last_updated,o=e.current.temp_f,a=e.current.temp_c,c=e.current.feelslike_f,i=e.current.feelslike_c,u=e.current.humidity,d=e.current.wind_dir,l=e.current.gust_mph,s=e.current.gust_kph,y=e.location.name,m=e.location.region,h=e.location.lat,w=e.location.lon;document.querySelector(".weatherUpdateTime").innerHTML=`${r}`,document.querySelector(".isDay").innerHTML=`${n}`,document.querySelector(".weatherState").innerHTML=m,document.querySelector(".weatherCity").innerHTML=y,document.querySelector(".weatherLatitude").innerHTML=`Lat: ${h}`,document.querySelector(".weatherLongitude").innerHTML=`Lon: ${w}`,document.querySelector(".weatherUnitF").innerHTML=`${o}°F`,document.querySelector(".weatherUnitC").innerHTML=`${a}°C`;const L=document.querySelector(".weatherFeelsLikeF");L.innerHTML=`Feels Like: ${c}°F`;const S=document.querySelector(".weatherFeelsLikeC");return S.innerHTML=`Feels Like: ${i}°C`,(o>90||a>32.2)&&(temperatureELement_F.style.color="red",temperatureELement_F.style.textShadow="0 0 5px orange"),(c>90||i>32.2)&&(L.style.color="red",L.style.textShadow="0 0 5px orange"),a>32.2&&(temperatureELement_C.style.color="red",temperatureELement_C.style.textShadow="0 0 5px orange"),i>32.2&&(S.style.color="red",S.style.textShadow="0 0 5px orange"),document.querySelector("#weatherHumidity").innerHTML=`Humidity: ${u}`,document.querySelector(".weatherWindDir").innerHTML=`Wind Direction: ${d}`,document.querySelector(".weatherWindGust").innerHTML=`${l} Mph / ${s} Kph`,e}alert("Something went wrong.")}(),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=e.forecast.forecastday,r=document.querySelector(".weatherForecast"),o=new Date;for(let t=0;t<3;t++){const a=new Date(n[t].date);if(a>o){const o=a.getDay(),c=a.getDate(),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o];r.innerHTML+=`\n        <div>\n        <h2>${i} ${c}</h2>\n        <h4> in ${e.location.name} </h4>\n        <ul>\n            <li>High: ${n[t].day.maxtemp_f}°F</li>\n            <li>Low: ${n[t].day.mintemp_f}°F</li>\n            <li>Conditions: ${n[t].day.condition.text}</li>\n        </ul>\n        </div>`}}console.log(e),e.forecast.forecastday}}()})();