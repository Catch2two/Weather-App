(()=>{"use strict";var e,r,t,o,n={138:(e,r,t)=>{t.a(e,(async(e,r)=>{try{var o=t(575);const e=await(0,o.t)();e?console.log(e):console.log("Error fetching weather data"),console.log("src JS's loaded."),r()}catch(e){r(e)}}),1)},575:(e,r,t)=>{t.d(r,{t:()=>n});const o="6fe5d9b89c10408d90d143901232806";async function n(){const e=`http://api.weatherapi.com/v1/current.json?key=${o}&q=Hartford&aqi=no`,r=await fetch(e);if(200===r.status){const e=await r.json(),t=(e.current.is_day,e.current.last_updated,e.current.temp_f),o=e.current.temp_c,n=e.current.feelslike_f,a=(e.current.feelslike_c,e.current.feelslike_c,e.location.name),c=e.location.region,u=e.location.lat,i=e.location.lon;return document.querySelector(".weatherState").innerHTML=c,document.querySelector(".weatherCity").innerHTML=a,document.querySelector(".weatherLatitude").innerHTML=u,document.querySelector(".weatherLongitude").innerHTML=i,document.querySelector(".weatherUnitF").innerHTML=`${t}°F`,document.querySelector(".weatherUnitC").innerHTML=`${o}°C`,document.querySelector(".weatherFeelsLikeF").innerHTML=n,e}return null}n()}},a={};function c(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return n[e](t,t.exports,c),t.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,a,c)=>{var u;c&&((u=[]).d=-1);var i,l,s,d=new Set,p=n.exports,f=new Promise(((e,r)=>{s=r,l=e}));f[r]=p,f[e]=e=>(u&&e(u),d.forEach(e),f.catch((e=>{}))),n.exports=f,a((n=>{var a;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{c[r]=e,o(a)}),(e=>{c[t]=e,o(a)}));var c={};return c[e]=e=>e(a),c}}var u={};return u[e]=e=>{},u[r]=n,u})))(n);var c=()=>i.map((e=>{if(e[t])throw e[t];return e[r]})),l=new Promise((r=>{(a=()=>r(c)).r=0;var t=e=>e!==u&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((r=>r[e](t)))}));return a.r?l:c()}),(e=>(e?s(f[t]=e):l(p),o(u)))),u&&u.d<0&&(u.d=0)},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c(138)})();