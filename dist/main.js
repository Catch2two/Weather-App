(()=>{"use strict";const e=document.querySelector("form"),t=document.querySelector("#cityInput");e.addEventListener("submit",(e=>{e.preventDefault();const r=`http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=${t.value}&days=3&aqi=yes&alerts=yes`;console.log(r)}));const r=document.querySelector(".weatherUpdateTime"),n=document.querySelector(".weatherDescription"),o=document.querySelector(".weatherState"),c=document.querySelector(".weatherCity"),i=document.querySelector(".weatherLatitude"),u=document.querySelector(".weatherLongitude"),a=document.querySelector(".weatherUnitF"),l=document.querySelector(".weatherUnitC"),s=document.querySelector(".weatherFeelsLikeF"),d=document.querySelector(".weatherFeelsLikeC"),y=document.querySelector("#weatherHumidity"),m=document.querySelector(".weatherWindDir"),h=document.querySelector(".weatherWindGust"),L=(document.querySelector(".weatherAlert"),document.querySelector(".alertDiv"),document.querySelector(".isDay")),q=["day.png","night.png"];(()=>{const e=Number(L.innerHTML),t=q[e];document.querySelector(".isDay").src=`./assets/${t}`})();console.log("Current Weather Loaded"),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6fe5d9b89c10408d90d143901232806&q=06067&days=3&aqi=yes&alerts=yes");if(200===e.status){const q=await e.json();t=q,r.innerHTML=t.current.last_updated,n.innerHTML=t.current.condition.text,o.innerHTML=t.location.region,c.innerHTML=t.location.name,i.innerHTML=`Lat: ${t.location.lat}`,u.innerHTML=`Lon: ${t.location.lon}`,a.innerHTML=`${t.current.temp_f}°F`,l.innerHTML=`${t.current.temp_c}°C`,s.innerHTML=`Feels Like: ${t.current.feelslike_f}°F`,d.innerHTML=`Feels Like: ${t.current.feelslike_c}°C`,y.innerHTML=`Humidity: ${t.current.humidity}`,m.innerHTML=`Wind Direction: ${t.current.wind_dir}`,h.innerHTML=`${t.current.gust_mph} Mph / ${t.current.gust_kph} Kph`,L.innerHTML=t.current.is_day,console.log(q)}else console.log("Something went wrong.");var t}()})();