(()=>{"use strict";const e="http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=4&aqi=yes&alerts=yes";console.log("Forecast Loaded"),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=(e.current.is_day,e.current.last_updated),r=e.current.temp_f,o=e.current.temp_c,a=e.current.feelslike_f,c=e.current.feelslike_c,i=e.current.humidity,s=(e.current.wind_dir,e.current.gust_mph,e.current.gust_kph,e.location.name),l=e.location.region,d=e.location.lat,u=e.location.lon;document.querySelector(".weatherUpdateTime").innerHTML=`${n}`,document.querySelector(".weatherState").innerHTML=l,document.querySelector(".weatherCity").innerHTML=s,document.querySelector(".weatherLatitude").innerHTML=`Lat: ${d}`,document.querySelector(".weatherLongitude").innerHTML=`Lon: ${u}`;const y=document.querySelector(".weatherUnitF");y.innerHTML=`${r}°F`;const h=document.querySelector(".weatherUnitC");h.innerHTML=`${o}°C`;const m=document.querySelector(".weatherFeelsLikeF");m.innerHTML=`Feels Like: ${a}°F`;const w=document.querySelector(".weatherFeelsLikeC");return w.innerHTML=`Feels Like: ${c}°C`,(r>90||o>32.2)&&(y.style.color="red",y.style.textShadow="0 0 5px orange"),(a>90||c>32.2)&&(m.style.color="red",m.style.textShadow="0 0 5px orange"),o>32.2&&(h.style.color="red",h.style.textShadow="0 0 5px orange"),c>32.2&&(w.style.color="red",w.style.textShadow="0 0 5px orange"),document.querySelector("#weatherHumidity").innerHTML=`Humidity: ${i}`,e}alert("Something went wrong.")}(),async function(){const t=await fetch(e);if(200===t.status){const e=await t.json(),n=e.forecast.forecastday,r=document.querySelector(".weatherForecast"),o=new Date;for(let t=0;t<3;t++){const a=new Date(n[t].date);if(a>o){const o=a.getDay(),c=a.getDate(),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o];r.innerHTML+=`\n        <h2>${i} ${c}</h2>\n        <h4> in ${e.location.name} </h4>\n        <ul>\n            <li>High: ${n[t].day.maxtemp_f}°F</li>\n            <li>Low: ${n[t].day.mintemp_f}°F</li>\n            <li>Conditions: ${n[t].day.condition.text}</li>\n        </ul>\n        `}}console.log(e),e.forecast.forecastday}}()})();