(()=>{"use strict";const e="http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=4&aqi=yes&alerts=yes";console.log("Forecast Loaded"),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=e.current.condition.text,r=e.current.last_updated,o=e.current.temp_f,a=e.current.temp_c,c=e.current.feelslike_f,i=e.current.feelslike_c,l=e.current.humidity,s=(e.current.wind_dir,e.current.gust_mph,e.current.gust_kph,e.location.name),d=e.location.region,u=e.location.lat,y=e.location.lon;document.querySelector(".weatherUpdateTime").innerHTML=`${r}`,document.querySelector(".weatherState").innerHTML=d,document.querySelector(".weatherCity").innerHTML=s,document.querySelector(".weatherLatitude").innerHTML=`Lat: ${u}`,document.querySelector(".weatherLongitude").innerHTML=`Lon: ${y}`,document.querySelector(".condition").innerHTML=`Currently ${n}`;const h=document.querySelector(".weatherUnitF");h.innerHTML=`${o}°F`;const m=document.querySelector(".weatherUnitC");m.innerHTML=`${a}°C`;const w=document.querySelector(".weatherFeelsLikeF");w.innerHTML=`Feels Like: ${c}°F`;const L=document.querySelector(".weatherFeelsLikeC");return L.innerHTML=`Feels Like: ${i}°C`,(o>90||a>32.2)&&(h.style.color="red",h.style.textShadow="0 0 5px orange"),(c>90||i>32.2)&&(w.style.color="red",w.style.textShadow="0 0 5px orange"),a>32.2&&(m.style.color="red",m.style.textShadow="0 0 5px orange"),i>32.2&&(L.style.color="red",L.style.textShadow="0 0 5px orange"),document.querySelector("#weatherHumidity").innerHTML=`Humidity: ${l}`,e}alert("Something went wrong.")}(),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=e.forecast.forecastday,r=document.querySelector(".weatherForecast"),o=new Date;for(let t=0;t<3;t++){const a=new Date(n[t].date);if(a>o){const o=a.getDay(),c=a.getDate(),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o];r.innerHTML+=`\n        <h2>${i} ${c}</h2>\n        <h4> in ${e.location.name} </h4>\n        <ul>\n            <li>High: ${n[t].day.maxtemp_f}°F</li>\n            <li>Low: ${n[t].day.mintemp_f}°F</li>\n            <li>Conditions: ${n[t].day.condition.text}</li>\n        </ul>\n        `}}console.log(e),e.forecast.forecastday}}()})();