(()=>{document.querySelector("form"),document.querySelector("location");const e="http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06111&days=3&aqi=no&alerts=no, {mode: 'cors'}";document.querySelector("body");const t=document.querySelector("#cityInput"),n=document.querySelector(".add"),r=document.querySelector(".weatherUpdateTime"),o=document.querySelector(".weatherDescription"),c=document.querySelector(".weatherState"),a=document.querySelector(".weatherCity"),i=document.querySelector(".weatherLatitude"),u=document.querySelector(".weatherLongitude"),d=document.querySelector(".weatherUnitF"),l=document.querySelector(".weatherUnitC"),s=document.querySelector(".weatherFeelsLikeF"),y=document.querySelector(".weatherFeelsLikeC"),m=document.querySelector("#weatherHumidity"),h=document.querySelector(".weatherWindDir"),L=document.querySelector(".weatherWindGust"),S=(document.querySelector(".weatherAlert"),document.querySelector(".alertDiv"),document.querySelector(".isDay")),p=["day.png","night.png"];n.addEventListener("click",(()=>{!async function(){const t=await fetch(e);if(200===t.status){const e=await t.json();n=e,r.innerHTML=n.current.last_updated,o.innerHTML=n.current.condition.text,c.innerHTML=n.location.region,a.innerHTML=n.location.name,i.innerHTML=`Lat: ${n.location.lat}`,u.innerHTML=`Lon: ${n.location.lon}`,d.innerHTML=`${n.current.temp_f}°F`,l.innerHTML=`${n.current.temp_c}°C`,s.innerHTML=`Feels Like: ${n.current.feelslike_f}°F`,y.innerHTML=`Feels Like: ${n.current.feelslike_c}°C`,m.innerHTML=`Humidity: ${n.current.humidity}`,h.innerHTML=`Wind Direction: ${n.current.wind_dir}`,L.innerHTML=`${n.current.gust_mph} Mph / ${n.current.gust_kph} Kph`,S.innerHTML=n.current.is_day,console.log(e);const p=e.forecast.forecastday,q=e.location.name;for(let e=0;e<3;e++){const t=new Date(p[e].date),n=document.querySelector(".weatherForecast"),r=new Date;if(t>r&&t<=(new Date).setDate(r.getDate()+3)){const r=t.getDay(),o=t.getDate(),c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r];n.innerHTML+=`\n        <div class="forecastDiv">\n          <h2>\n          ${c} ${o}</h2>\n          <ul>\n            <li> \n            <li>In ${q}</li>\n            High: <span class="highSpan">${p[e].day.maxtemp_f}°F</span> \n            Low: <span class="lowSpan">${p[e].day.mintemp_f}°F</span>\n          </li>\n            <li id="forecastConditions">${p[e].day.condition.text}</li>\n          </ul>\n        </div>`}}}var n}(t.value)})),t.addEvenetListener("keyup",(e=>{13===e.keycode&&(e.preventDefault(),n.click())})),t.addEventListener("click",(()=>{t.value=""})),(()=>{const e=Number(S.innerHTML),t=p[e];document.querySelector(".isDay").src=`./assets/${t}`})(),console.log(e)})();