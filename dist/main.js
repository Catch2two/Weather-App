(()=>{"use strict";const e=document.querySelector(".weatherUpdateTime"),t=document.querySelector(".weatherDescription"),n=document.querySelector(".weatherState"),r=document.querySelector(".weatherCity"),o=document.querySelector(".weatherLatitude"),a=document.querySelector(".weatherLongitude"),c=document.querySelector(".weatherUnitF"),i=document.querySelector(".weatherUnitC"),s=document.querySelector(".weatherFeelsLikeF"),u=document.querySelector(".weatherFeelsLikeC"),d=document.querySelector("#weatherHumidity"),l=document.querySelector(".weatherWindDir"),y=document.querySelector(".weatherWindGust"),h=(document.querySelector(".weatherAlert"),document.querySelector(".alertDiv"),document.querySelector(".isDay")),m=["day.png","night.png"];(()=>{const e=Number(h.innerHTML),t=m[e];document.querySelector(".isDay").src=`./assets/${t}`})();console.log("Current Weather Loaded");const w=document.querySelector(".weatherForecast"),L=new Date;!async function(){const m=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06067&days=3&aqi=yes&alerts=yes");if(200===m.status){const L=await m.json();w=L,e.innerHTML=w.current.last_updated,t.innerHTML=w.current.condition.text,n.innerHTML=w.location.region,r.innerHTML=w.location.name,o.innerHTML=`Lat: ${w.location.lat}`,a.innerHTML=`Lon: ${w.location.lon}`,c.innerHTML=`${w.current.temp_f}°F`,i.innerHTML=`${w.current.temp_c}°C`,s.innerHTML=`Feels Like: ${w.current.feelslike_f}°F`,u.innerHTML=`Feels Like: ${w.current.feelslike_c}°C`,d.innerHTML=`Humidity: ${w.current.humidity}`,l.innerHTML=`Wind Direction: ${w.current.wind_dir}`,y.innerHTML=`${w.current.gust_mph} Mph / ${w.current.gust_kph} Kph`,h.innerHTML=w.current.is_day,console.log(L)}else console.log("Something went wrong.");var w}(),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06067&days=3&aqi=yes&alerts=yes");if(200===e.status){const t=await e.json(),n=t.forecast.forecastday,r=t.location.name;for(let e=0;e<3;e++){const t=new Date(n[e].date);if(t>L&&t<=(new Date).setDate(L.getDate()+3)){const o=t.getDay(),a=t.getDate(),c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o];w.innerHTML+=`\n            <div class="forecastDiv">\n              <h2>\n              ${c} ${a}</h2>\n              <ul>\n              <li> \n              <li>In ${r}</li>\n              High: <span class="highSpan">${n[e].day.maxtemp_f}°F</span> \n              Low: <span class="lowSpan">${n[e].day.mintemp_f}°F</span>\n              </li>\n                <li id="forecastConditions">${n[e].day.condition.text}</li>\n              </ul>\n            </div>`}}}else console.log("Something went wrong.")}()})();