(()=>{"use strict";document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("input[name='input']").value;city=t,console.log((city,"http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=3&aqi=yes&alerts=yes"))}));const e=function(){return"http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=3&aqi=yes&alerts=yes"},t=document.querySelector(".weatherUpdateTime"),n=document.querySelector(".weatherDescription"),r=document.querySelector(".weatherState"),o=document.querySelector(".weatherCity"),a=document.querySelector(".weatherLatitude"),c=document.querySelector(".weatherLongitude"),i=document.querySelector(".weatherUnitF"),s=document.querySelector(".weatherUnitC"),u=document.querySelector(".weatherFeelsLikeF"),d=document.querySelector(".weatherFeelsLikeC"),l=document.querySelector("#weatherHumidity"),y=document.querySelector(".weatherWindDir"),m=document.querySelector(".weatherWindGust"),h=(document.querySelector(".weatherAlert"),document.querySelector(".alertDiv"),document.querySelector(".isDay")),w=["day.png","night.png"];(()=>{const e=Number(h.innerHTML),t=w[e];document.querySelector(".isDay").src=`./assets/${t}`})();const p=e();console.log("Current Weather Loaded");const f=e(),L=document.querySelector(".weatherForecast"),S=new Date;!async function(){const e=await fetch(p);if(200===e.status){const p=await e.json();w=p,t.innerHTML=w.current.last_updated,n.innerHTML=w.current.condition.text,r.innerHTML=w.location.region,o.innerHTML=w.location.name,a.innerHTML=`Lat: ${w.location.lat}`,c.innerHTML=`Lon: ${w.location.lon}`,i.innerHTML=`${w.current.temp_f}°F`,s.innerHTML=`${w.current.temp_c}°C`,u.innerHTML=`Feels Like: ${w.current.feelslike_f}°F`,d.innerHTML=`Feels Like: ${w.current.feelslike_c}°C`,l.innerHTML=`Humidity: ${w.current.humidity}`,y.innerHTML=`Wind Direction: ${w.current.wind_dir}`,m.innerHTML=`${w.current.gust_mph} Mph / ${w.current.gust_kph} Kph`,h.innerHTML=w.current.is_day,console.log(p)}else console.log("Something went wrong.");var w}(),async function(){const e=await fetch(f);if(200===e.status){const t=(await e.json()).forecast.forecastday;for(let e=0;e<3;e++){const n=new Date(t[e].date);if(n>S&&n<=(new Date).setDate(S.getDate()+3)){const r=n.getDay(),o=n.getDate(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r];L.innerHTML+=`\n            <div class="forecastDiv">\n              <h2>\n              ${a} ${o}</h2>\n              <ul>\n              <li>\n              High: <span class="highSpan">${t[e].day.maxtemp_f}°F</span> \n              Low: <span class="lowSpan">${t[e].day.mintemp_f}°F</span>\n              </li>\n                <li id="forecastConditions">${t[e].day.condition.text}</li>\n              </ul>\n            </div>`}}}else console.log("Something went wrong.")}()})();