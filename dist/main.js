(()=>{"use strict";document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("input[name='input']").value;city=t,console.log((city,"http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=3&aqi=yes&alerts=yes"))}));const e=function(){return"http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=Hartford&days=3&aqi=yes&alerts=yes"},t=document.querySelector(".weatherUpdateTime"),n=document.querySelector(".isDay"),r=document.querySelector(".weatherState"),o=document.querySelector(".weatherCity"),a=document.querySelector(".weatherLatitude"),c=document.querySelector(".weatherLongitude"),i=document.querySelector(".weatherUnitF"),s=document.querySelector(".weatherUnitC"),u=document.querySelector(".weatherFeelsLikeF"),l=document.querySelector(".weatherFeelsLikeC"),d=document.querySelector("#weatherHumidity"),y=document.querySelector(".weatherWindDir"),m=document.querySelector(".weatherWindGust");const h=e();console.log("Current Weather Loaded");const f=e(),w=document.querySelector(".weatherForecast"),L=new Date;!async function(){const e=await fetch(h);if(200===e.status){const h=await e.json();f=h,t.innerHTML=f.current.last_updated,n.innerHTML=f.current.is_day,r.innerHTML=f.location.region,o.innerHTML=f.location.name,a.innerHTML=`Lat: ${f.location.lat}`,c.innerHTML=`Lon: ${f.location.lon}`,i.innerHTML=`${f.current.temp_f}°F`,s.innerHTML=`${f.current.temp_c}°C`,u.innerHTML=`Feels Like: ${f.current.feelslike_f}°F`,l.innerHTML=`Feels Like: ${f.current.feelslike_c}°C`,d.innerHTML=`Humidity: ${f.current.humidity}`,y.innerHTML=`Wind Direction: ${f.current.wind_dir}`,m.innerHTML=`${f.current.gust_mph} Mph / ${f.current.gust_kph} Kph`,function(){const e=document.querySelector("#weatherAlert"),t=e.offsetWidth,n=.1*t;setInterval((function(){e.scrollLeft+=n,e.scrollLeft>=t&&(e.scrollLeft=10)}),100)}(),console.log(h)}else console.log("Something went wrong.");var f}(),async function(){const e=await fetch(f);if(200===e.status){const t=(await e.json()).forecast.forecastday;for(let e=0;e<3;e++){const n=new Date(t[e].date);if(n>L&&n<=(new Date).setDate(L.getDate()+3)){const r=n.getDay(),o=n.getDate(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r];w.innerHTML+=`\n            <div class="forecastDiv">\n              <h2>\n              ${a} ${o}</h2>\n              <ul>\n              <li>\n              High: <span class="highSpan">${t[e].day.maxtemp_f}°F</span> \n              Low: <span class="lowSpan">${t[e].day.mintemp_f}°F</span>\n              </li>\n                <li id="forecastConditions">${t[e].day.condition.text}</li>\n              </ul>\n            </div>`}}}else console.log("Something went wrong.")}()})();