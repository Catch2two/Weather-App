(()=>{"use strict";const e=document.querySelector("form"),t=document.querySelector("#cityInput");e.addEventListener("submit",(e=>{e.preventDefault();const n=`http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${t.value}&days=3&aqi=yes&alerts=yes`;console.log(n)}));const n=document.querySelector(".weatherUpdateTime"),r=document.querySelector(".weatherDescription"),o=document.querySelector(".weatherState"),a=document.querySelector(".weatherCity"),c=document.querySelector(".weatherLatitude"),i=document.querySelector(".weatherLongitude"),s=document.querySelector(".weatherUnitF"),u=document.querySelector(".weatherUnitC"),d=document.querySelector(".weatherFeelsLikeF"),l=document.querySelector(".weatherFeelsLikeC"),y=document.querySelector("#weatherHumidity"),m=document.querySelector(".weatherWindDir"),h=document.querySelector(".weatherWindGust"),w=(document.querySelector(".weatherAlert"),document.querySelector(".alertDiv"),document.querySelector(".isDay")),p=["day.png","night.png"];(()=>{const e=Number(w.innerHTML),t=p[e];document.querySelector(".isDay").src=`./assets/${t}`})();console.log("Current Weather Loaded");const L=document.querySelector(".weatherForecast"),S=new Date;!async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06067&days=3&aqi=yes&alerts=yes");if(200===e.status){const p=await e.json();t=p,n.innerHTML=t.current.last_updated,r.innerHTML=t.current.condition.text,o.innerHTML=t.location.region,a.innerHTML=t.location.name,c.innerHTML=`Lat: ${t.location.lat}`,i.innerHTML=`Lon: ${t.location.lon}`,s.innerHTML=`${t.current.temp_f}°F`,u.innerHTML=`${t.current.temp_c}°C`,d.innerHTML=`Feels Like: ${t.current.feelslike_f}°F`,l.innerHTML=`Feels Like: ${t.current.feelslike_c}°C`,y.innerHTML=`Humidity: ${t.current.humidity}`,m.innerHTML=`Wind Direction: ${t.current.wind_dir}`,h.innerHTML=`${t.current.gust_mph} Mph / ${t.current.gust_kph} Kph`,w.innerHTML=t.current.is_day,console.log(p)}else console.log("Something went wrong.");var t}(),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06067&days=3&aqi=yes&alerts=yes");if(200===e.status){const t=(await e.json()).forecast.forecastday;for(let e=0;e<3;e++){const n=new Date(t[e].date);if(n>S&&n<=(new Date).setDate(S.getDate()+3)){const r=n.getDay(),o=n.getDate(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r];L.innerHTML+=`\n            <div class="forecastDiv">\n              <h2>\n              ${a} ${o}</h2>\n              <ul>\n              <li>\n              High: <span class="highSpan">${t[e].day.maxtemp_f}°F</span> \n              Low: <span class="lowSpan">${t[e].day.mintemp_f}°F</span>\n              </li>\n                <li id="forecastConditions">${t[e].day.condition.text}</li>\n              </ul>\n            </div>`}}}else console.log("Something went wrong.")}()})();