var uf=Object.defineProperty;var df=(s,e,t)=>e in s?uf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var fl=(s,e,t)=>df(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const hf="modulepreload",pf=function(s,e){return new URL(s,e).href},ml={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=a(t.map(p=>{if(p=pf(p,n),p in ml)return;ml[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(!!n)for(let k=l.length-1;k>=0;k--){const x=l[k];if(x.href===p&&(!m||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${g}`))return;const C=document.createElement("link");if(C.rel=m?"stylesheet":hf,m||(C.as="script"),C.crossOrigin="",C.href=p,d&&C.setAttribute("nonce",d),document.head.appendChild(C),m)return new Promise((k,x)=>{C.addEventListener("load",k),C.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Ks=(s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Le={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},percentage:{icon:"%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0}},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4,color:"warning",settings:{width:!0,visibility:!0,style:!0}},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6,color:"warning",settings:{width:!0,visibility:!0}},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},chart:{icon:"📊",shortLabel:"Gráfico",longLabel:"Gráfico Visual",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12,color:"dark",settings:{width:!0,visibility:!0,style:!0}}},ff=()=>{};var gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},mf=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],a=s[t++],l=s[t++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[t++],a=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],a=r+1<s.length,l=a?s[r+1]:0,c=r+2<s.length,d=c?s[r+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,I=d&63;c||(I=64,a||(g=64)),n.push(t[p],t[m],t[g],t[I])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Qc(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):mf(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],l=r<s.length?t[s.charAt(r)]:0;++r;const d=r<s.length?t[s.charAt(r)]:64;++r;const m=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||l==null||d==null||m==null)throw new gf;const g=i<<2|l>>4;if(n.push(g),d!==64){const I=l<<4&240|d>>2;if(n.push(I),m!==64){const C=d<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class gf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yf=function(s){const e=Qc(s);return Jc.encodeByteArray(e,!0)},mr=function(s){return yf(s).replace(/\./g,"")},Yc=function(s){try{return Jc.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=()=>bf().__FIREBASE_DEFAULTS__,vf=()=>{if(typeof process>"u"||typeof gl>"u")return;const s=gl.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ef=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Yc(s[1]);return e&&JSON.parse(e)},Ur=()=>{try{return ff()||_f()||vf()||Ef()}catch(s){`${s}`;return}},Xc=s=>{var e,t;return(t=(e=Ur())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},wf=s=>{const e=Xc(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Zc=()=>{var s;return(s=Ur())==null?void 0:s.config},eu=s=>{var e;return(e=Ur())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tu(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[mr(JSON.stringify(t)),mr(JSON.stringify(a)),""].join(".")}const os={};function Af(){const s={prod:[],emulator:[]};for(const e of Object.keys(os))os[e]?s.emulator.push(e):s.prod.push(e);return s}function Sf(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let yl=!1;function nu(s,e){if(typeof window>"u"||typeof document>"u"||!xn(window.location.host)||os[s]===e||os[s]||yl)return;os[s]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",i=Af().prod.length>0;function a(){const g=document.getElementById(n);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{yl=!0,a()},g}function p(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Sf(n),I=t("text"),C=document.getElementById(I)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),F=t("preprendIcon"),H=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const B=g.element;l(B),p(x,k);const re=d();c(H,F),B.append(H,C,x,re),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Pf(){var e;const s=(e=Ur())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xf(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lf(){const s=Ae();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Vf(){return!Pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Df(){try{return typeof indexedDB=="object"}catch{return!1}}function Of(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="FirebaseError";class lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Mf,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Nf(i,n):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new lt(r,l,n)}}function Nf(s,e){return s.replace($f,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const $f=/\{\$([^}]+)}/g;function Uf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Kt(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],a=e[r];if(bl(i)&&bl(a)){if(!Kt(i,a))return!1}else if(i!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function bl(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function es(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ts(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Ff(s,e){const t=new Bf(s,e);return t.subscribe.bind(t)}class Bf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");jf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=Li),r.error===void 0&&(r.error=Li),r.complete===void 0&&(r.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jf(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Li(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(s){return s&&s._delegate?s._delegate:s}class Qt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new If;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zf(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(s){return s===Ht?void 0:s}function zf(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(W||(W={}));const Gf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Kf=W.INFO,Qf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Jf=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=Qf[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=Kf,this._logHandler=Jf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Yf=(s,e)=>e.some(t=>s instanceof t);let _l,vl;function Xf(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zf(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const su=new WeakMap,zi=new WeakMap,ru=new WeakMap,Vi=new WeakMap,wo=new WeakMap;function em(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",a)},i=()=>{t(Tt(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&su.set(t,s)}).catch(()=>{}),wo.set(e,s),e}function tm(s){if(zi.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",a),s.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",a),s.addEventListener("abort",a)});zi.set(s,e)}let Wi={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return zi.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ru.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function nm(s){Wi=s(Wi)}function sm(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Di(this),e,...t);return ru.set(n,e.sort?e.sort():[e]),Tt(n)}:Zf().includes(s)?function(...e){return s.apply(Di(this),e),Tt(su.get(this))}:function(...e){return Tt(s.apply(Di(this),e))}}function rm(s){return typeof s=="function"?sm(s):(s instanceof IDBTransaction&&tm(s),Yf(s,Xf())?new Proxy(s,Wi):s)}function Tt(s){if(s instanceof IDBRequest)return em(s);if(Vi.has(s))return Vi.get(s);const e=rm(s);return e!==s&&(Vi.set(s,e),wo.set(e,s)),e}const Di=s=>wo.get(s);function im(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(s,e),l=Tt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Tt(a.result),c.oldVersion,c.newVersion,Tt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const om=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],Oi=new Map;function El(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Oi.get(e))return Oi.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=am.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||om.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&c.done]))[0]};return Oi.set(e,i),i}nm(s=>({...s,get:(e,t,n)=>El(e,t)||s.get(e,t,n),has:(e,t)=>!!El(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function cm(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",wl="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Eo("@firebase/app"),um="@firebase/app-compat",dm="@firebase/analytics-compat",hm="@firebase/analytics",pm="@firebase/app-check-compat",fm="@firebase/app-check",mm="@firebase/auth",gm="@firebase/auth-compat",ym="@firebase/database",bm="@firebase/data-connect",_m="@firebase/database-compat",vm="@firebase/functions",Em="@firebase/functions-compat",wm="@firebase/installations",Im="@firebase/installations-compat",Tm="@firebase/messaging",Am="@firebase/messaging-compat",Sm="@firebase/performance",Cm="@firebase/performance-compat",Pm="@firebase/remote-config",Rm="@firebase/remote-config-compat",xm="@firebase/storage",km="@firebase/storage-compat",Lm="@firebase/firestore",Vm="@firebase/ai",Dm="@firebase/firestore-compat",Om="firebase",Mm="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]",Nm={[Gi]:"fire-core",[um]:"fire-core-compat",[hm]:"fire-analytics",[dm]:"fire-analytics-compat",[fm]:"fire-app-check",[pm]:"fire-app-check-compat",[mm]:"fire-auth",[gm]:"fire-auth-compat",[ym]:"fire-rtdb",[bm]:"fire-data-connect",[_m]:"fire-rtdb-compat",[vm]:"fire-fn",[Em]:"fire-fn-compat",[wm]:"fire-iid",[Im]:"fire-iid-compat",[Tm]:"fire-fcm",[Am]:"fire-fcm-compat",[Sm]:"fire-perf",[Cm]:"fire-perf-compat",[Pm]:"fire-rc",[Rm]:"fire-rc-compat",[xm]:"fire-gcs",[km]:"fire-gcs-compat",[Lm]:"fire-fst",[Dm]:"fire-fst-compat",[Vm]:"fire-vertex","fire-js":"fire-js",[Om]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,$m=new Map,Qi=new Map;function Il(s,e){try{s.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function wn(s){const e=s.name;if(Qi.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,s);for(const t of gr.values())Il(t,s);for(const t of $m.values())Il(t,s);return!0}function Io(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Oe(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new vs("app","Firebase",Um);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=Mm;function iu(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Ki,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});if(t||(t=Zc()),!t)throw At.create("no-options");const i=gr.get(r);if(i){if(Kt(t,i.options)&&Kt(n,i.config))return i;throw At.create("duplicate-app",{appName:r})}const a=new Wf(r);for(const c of Qi.values())a.addComponent(c);const l=new Fm(t,n,a);return gr.set(r,l),l}function ou(s=Ki){const e=gr.get(s);if(!e&&s===Ki&&Zc())return iu();if(!e)throw At.create("no-app",{appName:s});return e}function St(s,e,t){let n=Nm[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${n}" with version "${e}":`];r&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(a.join(" "));return}wn(new Qt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="firebase-heartbeat-database",jm=1,hs="firebase-heartbeat-store";let Mi=null;function au(){return Mi||(Mi=im(Bm,jm,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(hs)}catch(t){console.warn(t)}}}}).catch(s=>{throw At.create("idb-open",{originalErrorMessage:s.message})})),Mi}async function qm(s){try{const t=(await au()).transaction(hs),n=await t.objectStore(hs).get(lu(s));return await t.done,n}catch(e){if(e instanceof lt)rt.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function Tl(s,e){try{const n=(await au()).transaction(hs,"readwrite");await n.objectStore(hs).put(e,lu(s)),await n.done}catch(t){if(t instanceof lt)rt.warn(t.message);else{const n=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(n.message)}}}function lu(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=1024,zm=30;class Wm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Km(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Al();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>zm){const a=Qm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){rt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Al(),{heartbeatsToSend:n,unsentEntries:r}=Gm(this._heartbeatsCache.heartbeats),i=mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return rt.warn(t),""}}}function Al(){return new Date().toISOString().substring(0,10)}function Gm(s,e=Hm){const t=[];let n=s.slice();for(const r of s){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Sl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Sl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Km{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Df()?Of().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Tl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Tl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Sl(s){return mr(JSON.stringify({version:2,heartbeats:s})).length}function Qm(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(s){wn(new Qt("platform-logger",e=>new lm(e),"PRIVATE")),wn(new Qt("heartbeat",e=>new Wm(e),"PRIVATE")),St(Gi,wl,s),St(Gi,wl,"esm2020"),St("fire-js","")}Jm("");var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,cu;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function _(){}_.prototype=y.prototype,E.F=y.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(w,v,A){for(var b=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)b[Pe-2]=arguments[Pe];return y.prototype[v].apply(w,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,y,_){_||(_=0);const w=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)w[v]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(v=0;v<16;++v)w[v]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=E.g[0],_=E.g[1],v=E.g[2];let A=E.g[3],b;b=y+(A^_&(v^A))+w[0]+3614090360&4294967295,y=_+(b<<7&4294967295|b>>>25),b=A+(v^y&(_^v))+w[1]+3905402710&4294967295,A=y+(b<<12&4294967295|b>>>20),b=v+(_^A&(y^_))+w[2]+606105819&4294967295,v=A+(b<<17&4294967295|b>>>15),b=_+(y^v&(A^y))+w[3]+3250441966&4294967295,_=v+(b<<22&4294967295|b>>>10),b=y+(A^_&(v^A))+w[4]+4118548399&4294967295,y=_+(b<<7&4294967295|b>>>25),b=A+(v^y&(_^v))+w[5]+1200080426&4294967295,A=y+(b<<12&4294967295|b>>>20),b=v+(_^A&(y^_))+w[6]+2821735955&4294967295,v=A+(b<<17&4294967295|b>>>15),b=_+(y^v&(A^y))+w[7]+4249261313&4294967295,_=v+(b<<22&4294967295|b>>>10),b=y+(A^_&(v^A))+w[8]+1770035416&4294967295,y=_+(b<<7&4294967295|b>>>25),b=A+(v^y&(_^v))+w[9]+2336552879&4294967295,A=y+(b<<12&4294967295|b>>>20),b=v+(_^A&(y^_))+w[10]+4294925233&4294967295,v=A+(b<<17&4294967295|b>>>15),b=_+(y^v&(A^y))+w[11]+2304563134&4294967295,_=v+(b<<22&4294967295|b>>>10),b=y+(A^_&(v^A))+w[12]+1804603682&4294967295,y=_+(b<<7&4294967295|b>>>25),b=A+(v^y&(_^v))+w[13]+4254626195&4294967295,A=y+(b<<12&4294967295|b>>>20),b=v+(_^A&(y^_))+w[14]+2792965006&4294967295,v=A+(b<<17&4294967295|b>>>15),b=_+(y^v&(A^y))+w[15]+1236535329&4294967295,_=v+(b<<22&4294967295|b>>>10),b=y+(v^A&(_^v))+w[1]+4129170786&4294967295,y=_+(b<<5&4294967295|b>>>27),b=A+(_^v&(y^_))+w[6]+3225465664&4294967295,A=y+(b<<9&4294967295|b>>>23),b=v+(y^_&(A^y))+w[11]+643717713&4294967295,v=A+(b<<14&4294967295|b>>>18),b=_+(A^y&(v^A))+w[0]+3921069994&4294967295,_=v+(b<<20&4294967295|b>>>12),b=y+(v^A&(_^v))+w[5]+3593408605&4294967295,y=_+(b<<5&4294967295|b>>>27),b=A+(_^v&(y^_))+w[10]+38016083&4294967295,A=y+(b<<9&4294967295|b>>>23),b=v+(y^_&(A^y))+w[15]+3634488961&4294967295,v=A+(b<<14&4294967295|b>>>18),b=_+(A^y&(v^A))+w[4]+3889429448&4294967295,_=v+(b<<20&4294967295|b>>>12),b=y+(v^A&(_^v))+w[9]+568446438&4294967295,y=_+(b<<5&4294967295|b>>>27),b=A+(_^v&(y^_))+w[14]+3275163606&4294967295,A=y+(b<<9&4294967295|b>>>23),b=v+(y^_&(A^y))+w[3]+4107603335&4294967295,v=A+(b<<14&4294967295|b>>>18),b=_+(A^y&(v^A))+w[8]+1163531501&4294967295,_=v+(b<<20&4294967295|b>>>12),b=y+(v^A&(_^v))+w[13]+2850285829&4294967295,y=_+(b<<5&4294967295|b>>>27),b=A+(_^v&(y^_))+w[2]+4243563512&4294967295,A=y+(b<<9&4294967295|b>>>23),b=v+(y^_&(A^y))+w[7]+1735328473&4294967295,v=A+(b<<14&4294967295|b>>>18),b=_+(A^y&(v^A))+w[12]+2368359562&4294967295,_=v+(b<<20&4294967295|b>>>12),b=y+(_^v^A)+w[5]+4294588738&4294967295,y=_+(b<<4&4294967295|b>>>28),b=A+(y^_^v)+w[8]+2272392833&4294967295,A=y+(b<<11&4294967295|b>>>21),b=v+(A^y^_)+w[11]+1839030562&4294967295,v=A+(b<<16&4294967295|b>>>16),b=_+(v^A^y)+w[14]+4259657740&4294967295,_=v+(b<<23&4294967295|b>>>9),b=y+(_^v^A)+w[1]+2763975236&4294967295,y=_+(b<<4&4294967295|b>>>28),b=A+(y^_^v)+w[4]+1272893353&4294967295,A=y+(b<<11&4294967295|b>>>21),b=v+(A^y^_)+w[7]+4139469664&4294967295,v=A+(b<<16&4294967295|b>>>16),b=_+(v^A^y)+w[10]+3200236656&4294967295,_=v+(b<<23&4294967295|b>>>9),b=y+(_^v^A)+w[13]+681279174&4294967295,y=_+(b<<4&4294967295|b>>>28),b=A+(y^_^v)+w[0]+3936430074&4294967295,A=y+(b<<11&4294967295|b>>>21),b=v+(A^y^_)+w[3]+3572445317&4294967295,v=A+(b<<16&4294967295|b>>>16),b=_+(v^A^y)+w[6]+76029189&4294967295,_=v+(b<<23&4294967295|b>>>9),b=y+(_^v^A)+w[9]+3654602809&4294967295,y=_+(b<<4&4294967295|b>>>28),b=A+(y^_^v)+w[12]+3873151461&4294967295,A=y+(b<<11&4294967295|b>>>21),b=v+(A^y^_)+w[15]+530742520&4294967295,v=A+(b<<16&4294967295|b>>>16),b=_+(v^A^y)+w[2]+3299628645&4294967295,_=v+(b<<23&4294967295|b>>>9),b=y+(v^(_|~A))+w[0]+4096336452&4294967295,y=_+(b<<6&4294967295|b>>>26),b=A+(_^(y|~v))+w[7]+1126891415&4294967295,A=y+(b<<10&4294967295|b>>>22),b=v+(y^(A|~_))+w[14]+2878612391&4294967295,v=A+(b<<15&4294967295|b>>>17),b=_+(A^(v|~y))+w[5]+4237533241&4294967295,_=v+(b<<21&4294967295|b>>>11),b=y+(v^(_|~A))+w[12]+1700485571&4294967295,y=_+(b<<6&4294967295|b>>>26),b=A+(_^(y|~v))+w[3]+2399980690&4294967295,A=y+(b<<10&4294967295|b>>>22),b=v+(y^(A|~_))+w[10]+4293915773&4294967295,v=A+(b<<15&4294967295|b>>>17),b=_+(A^(v|~y))+w[1]+2240044497&4294967295,_=v+(b<<21&4294967295|b>>>11),b=y+(v^(_|~A))+w[8]+1873313359&4294967295,y=_+(b<<6&4294967295|b>>>26),b=A+(_^(y|~v))+w[15]+4264355552&4294967295,A=y+(b<<10&4294967295|b>>>22),b=v+(y^(A|~_))+w[6]+2734768916&4294967295,v=A+(b<<15&4294967295|b>>>17),b=_+(A^(v|~y))+w[13]+1309151649&4294967295,_=v+(b<<21&4294967295|b>>>11),b=y+(v^(_|~A))+w[4]+4149444226&4294967295,y=_+(b<<6&4294967295|b>>>26),b=A+(_^(y|~v))+w[11]+3174756917&4294967295,A=y+(b<<10&4294967295|b>>>22),b=v+(y^(A|~_))+w[2]+718787259&4294967295,v=A+(b<<15&4294967295|b>>>17),b=_+(A^(v|~y))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(v+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,y){y===void 0&&(y=E.length);const _=y-this.blockSize,w=this.C;let v=this.h,A=0;for(;A<y;){if(v==0)for(;A<=_;)r(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(w[v++]=E.charCodeAt(A++),v==this.blockSize){r(this,w),v=0;break}}else for(;A<y;)if(w[v++]=E[A++],v==this.blockSize){r(this,w),v=0;break}}this.h=v,this.o+=y},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)E[y++]=this.g[_]>>>w&255;return E};function i(E,y){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=y(E)}function a(E,y){this.h=y;const _=[];let w=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;w&&A==y||(_[v]=A,w=!1)}this.g=_}var l={};function c(E){return-128<=E&&E<128?i(E,function(y){return new a([y|0],y<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(d(-E));const y=[];let _=1;for(let w=0;E>=_;w++)y[w]=E/_|0,_*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return x(p(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(y,8));let w=m;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const b=parseInt(E.substring(A,A+v),y);v<8?(v=d(Math.pow(y,v)),w=w.j(v).add(d(b))):(w=w.j(_),w=w.add(d(b)))}return w}var m=c(0),g=c(1),I=c(16777216);s=a.prototype,s.m=function(){if(k(this))return-x(this).m();let E=0,y=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);E+=(w>=0?w:4294967296+w)*y,y*=4294967296}return E},s.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+x(this).toString(E);const y=d(Math.pow(E,6));var _=this;let w="";for(;;){const v=re(_,y).g;_=F(_,v.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=v,C(_))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},s.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}s.l=function(E){return E=F(this,E),k(E)?-1:C(E)?0:1};function x(E){const y=E.g.length,_=[];for(let w=0;w<y;w++)_[w]=~E.g[w];return new a(_,~E.h).add(g)}s.abs=function(){return k(this)?x(this):this},s.add=function(E){const y=Math.max(this.g.length,E.g.length),_=[];let w=0;for(let v=0;v<=y;v++){let A=w+(this.i(v)&65535)+(E.i(v)&65535),b=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);w=b>>>16,A&=65535,b&=65535,_[v]=b<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(E,y){return E.add(x(y))}s.j=function(E){if(C(this)||C(E))return m;if(k(this))return k(E)?x(this).j(x(E)):x(x(this).j(E));if(k(E))return x(this.j(x(E)));if(this.l(I)<0&&E.l(I)<0)return d(this.m()*E.m());const y=this.g.length+E.g.length,_=[];for(var w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<E.g.length;v++){const A=this.i(w)>>>16,b=this.i(w)&65535,Pe=E.i(v)>>>16,$t=E.i(v)&65535;_[2*w+2*v]+=b*$t,H(_,2*w+2*v),_[2*w+2*v+1]+=A*$t,H(_,2*w+2*v+1),_[2*w+2*v+1]+=b*Pe,H(_,2*w+2*v+1),_[2*w+2*v+2]+=A*Pe,H(_,2*w+2*v+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new a(_,0)};function H(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function B(E,y){this.g=E,this.h=y}function re(E,y){if(C(y))throw Error("division by zero");if(C(E))return new B(m,m);if(k(E))return y=re(x(E),y),new B(x(y.g),x(y.h));if(k(y))return y=re(E,x(y)),new B(x(y.g),y.h);if(E.g.length>30){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,w=y;w.l(E)<=0;)_=he(_),w=he(w);var v=ne(_,1),A=ne(w,1);for(w=ne(w,2),_=ne(_,2);!C(w);){var b=A.add(w);b.l(E)<=0&&(v=v.add(_),A=b),w=ne(w,1),_=ne(_,1)}return y=F(E,v.j(y)),new B(v,y)}for(v=m;E.l(y)>=0;){for(_=Math.max(1,Math.floor(E.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(_),b=A.j(y);k(b)||b.l(E)>0;)_-=w,A=d(_),b=A.j(y);C(A)&&(A=g),v=v.add(A),E=F(E,b)}return new B(v,E)}s.B=function(E){return re(this,E).h},s.and=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)&E.i(w);return new a(_,this.h&E.h)},s.or=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)|E.i(w);return new a(_,this.h|E.h)},s.xor=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)^E.i(w);return new a(_,this.h^E.h)};function he(E){const y=E.g.length+1,_=[];for(let w=0;w<y;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(_,E.h)}function ne(E,y){const _=y>>5;y%=32;const w=E.g.length-_,v=[];for(let A=0;A<w;A++)v[A]=y>0?E.i(A+_)>>>y|E.i(A+_+1)<<32-y:E.i(A+_);return new a(v,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,cu=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ct=a}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uu,ns,du,sr,Ji,hu,pu,fu;(function(){var s,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function r(o,u){if(u)e:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var h=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&h.push([f,u[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,h){return o.call.apply(o.bind,arguments)}function d(o,u,h){return d=c,d.apply(null,arguments)}function p(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,u){function h(){}h.prototype=u.prototype,o.Z=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,T,S){for(var L=Array(arguments.length-2),z=2;z<arguments.length;z++)L[z-2]=arguments[z];return u.prototype[T].apply(f,L)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const u=o.length;if(u>0){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function C(o,u){for(let f=1;f<arguments.length;f++){const T=arguments[f];var h=typeof T;if(h=h!="object"?h:T?Array.isArray(T)?"array":h:"null",h=="array"||h=="object"&&typeof T.length=="number"){h=o.length||0;const S=T.length||0;o.length=h+S;for(let L=0;L<S;L++)o[h+L]=T[L]}else o.push(T)}}class k{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(o){a.setTimeout(()=>{throw o},0)}function F(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,h){const f=B.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var B=new k(()=>new re,o=>o.reset());class re{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ne=!1,E=new H,y=()=>{const o=Promise.resolve(void 0);he=()=>{o.then(_)}};function _(){for(var o;o=F();){try{o.h.call(o.g)}catch(h){x(h)}var u=B;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ne=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,u),a.removeEventListener("test",h,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function Pe(o,u){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(Pe,v),Pe.prototype.init=function(o,u){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Pe.Z.h.call(this)},Pe.prototype.h=function(){Pe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),kp=0;function Lp(o,u,h,f,T){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=T,this.key=++kp,this.da=this.fa=!1}function Vs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ds(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function Vp(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function pa(o){const u={};for(const h in o)u[h]=o[h];return u}const fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ma(o,u){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let S=0;S<fa.length;S++)h=fa[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Os(o){this.src=o,this.g={},this.h=0}Os.prototype.add=function(o,u,h,f,T){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const L=ci(o,u,f,T);return L>-1?(u=o[L],h||(u.fa=!1)):(u=new Lp(u,this.src,S,!!f,T),u.fa=h,o.push(u)),u};function li(o,u){const h=u.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,u,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&(Vs(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ci(o,u,h,f){for(let T=0;T<o.length;++T){const S=o[T];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==f)return T}return-1}var ui="closure_lm_"+(Math.random()*1e6|0),di={};function ga(o,u,h,f,T){if(Array.isArray(u)){for(let S=0;S<u.length;S++)ga(o,u[S],h,f,T);return null}return h=_a(h),o&&o[$t]?o.J(u,h,l(f)?!!f.capture:!1,T):Dp(o,u,h,!1,f,T)}function Dp(o,u,h,f,T,S){if(!u)throw Error("Invalid event type");const L=l(T)?!!T.capture:!!T;let z=pi(o);if(z||(o[ui]=z=new Os(o)),h=z.add(u,h,f,L,S),h.proxy)return h;if(f=Op(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(T=L),T===void 0&&(T=!1),o.addEventListener(u.toString(),f,T);else if(o.attachEvent)o.attachEvent(ba(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Op(){function o(h){return u.call(o.src,o.listener,h)}const u=Mp;return o}function ya(o,u,h,f,T){if(Array.isArray(u))for(var S=0;S<u.length;S++)ya(o,u[S],h,f,T);else f=l(f)?!!f.capture:!!f,h=_a(h),o&&o[$t]?(o=o.i,S=String(u).toString(),S in o.g&&(u=o.g[S],h=ci(u,h,f,T),h>-1&&(Vs(u[h]),Array.prototype.splice.call(u,h,1),u.length==0&&(delete o.g[S],o.h--)))):o&&(o=pi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ci(u,h,f,T)),(h=o>-1?u[o]:null)&&hi(h))}function hi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[$t])li(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(ba(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=pi(u))?(li(h,o),h.h==0&&(h.src=null,u[ui]=null)):Vs(o)}}}function ba(o){return o in di?di[o]:di[o]="on"+o}function Mp(o,u){if(o.da)o=!0;else{u=new Pe(u,this);const h=o.listener,f=o.ha||o.src;o.fa&&hi(o),o=h.call(f,u)}return o}function pi(o){return o=o[ui],o instanceof Os?o:null}var fi="__closure_events_fn_"+(Math.random()*1e9>>>0);function _a(o){return typeof o=="function"?o:(o[fi]||(o[fi]=function(u){return o.handleEvent(u)}),o[fi])}function ve(){w.call(this),this.i=new Os(this),this.M=this,this.G=null}m(ve,w),ve.prototype[$t]=!0,ve.prototype.removeEventListener=function(o,u,h,f){ya(this,o,u,h,f)};function Se(o,u){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new v(u,o);else if(u instanceof v)u.target=u.target||o;else{var T=u;u=new v(f,o),ma(u,T)}T=!0;let S,L;if(h)for(L=h.length-1;L>=0;L--)S=u.g=h[L],T=Ms(S,f,!0,u)&&T;if(S=u.g=o,T=Ms(S,f,!0,u)&&T,T=Ms(S,f,!1,u)&&T,h)for(L=0;L<h.length;L++)S=u.g=h[L],T=Ms(S,f,!1,u)&&T}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const h=o.g[u];for(let f=0;f<h.length;f++)Vs(h[f]);delete o.g[u],o.h--}}this.G=null},ve.prototype.J=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},ve.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function Ms(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let S=0;S<u.length;++S){const L=u[S];if(L&&!L.da&&L.capture==h){const z=L.listener,pe=L.ha||L.src;L.fa&&li(o.i,L),T=z.call(pe,f)!==!1&&T}}return T&&!f.defaultPrevented}function Np(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function va(o){o.g=Np(()=>{o.g=null,o.i&&(o.i=!1,va(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class $p extends w{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(o){w.call(this),this.h=o,this.g={}}m(Nn,w);var Ea=[];function wa(o){Ds(o.g,function(u,h){this.g.hasOwnProperty(h)&&hi(u)},o),o.g={}}Nn.prototype.N=function(){Nn.Z.N.call(this),wa(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=a.JSON.stringify,Up=a.JSON.parse,Fp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ia(){}function Ta(){}var $n={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gi(){v.call(this,"d")}m(gi,v);function yi(){v.call(this,"c")}m(yi,v);var Ut={},Aa=null;function Ns(){return Aa=Aa||new ve}Ut.Ia="serverreachability";function Sa(o){v.call(this,Ut.Ia,o)}m(Sa,v);function Un(o){const u=Ns();Se(u,new Sa(u))}Ut.STAT_EVENT="statevent";function Ca(o,u){v.call(this,Ut.STAT_EVENT,o),this.stat=u}m(Ca,v);function Ce(o){const u=Ns();Se(u,new Ca(u,o))}Ut.Ja="timingevent";function Pa(o,u){v.call(this,Ut.Ja,o),this.size=u}m(Pa,v);function Fn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function Bp(o,u,h,f,T,S){o.info(function(){if(o.g)if(S){var L="",z=S.split("&");for(let X=0;X<z.length;X++){var pe=z[X].split("=");if(pe.length>1){const me=pe[0];pe=pe[1];const He=me.split("_");L=He.length>=2&&He[1]=="type"?L+(me+"="+pe+"&"):L+(me+"=redacted&")}}}else L=null;else L=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+h+`
`+L})}function jp(o,u,h,f,T,S,L){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+h+`
`+S+" "+L})}function rn(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hp(o,h)+(f?" "+f:"")})}function qp(o,u){o.info(function(){return"TIMEOUT: "+u})}Bn.prototype.info=function(){};function Hp(o,u){if(!o.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let L=1;L<f.length;L++)f[L]=""}}}}return mi(S)}catch{return u}}var $s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ra={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xa;function bi(){}m(bi,Ia),bi.prototype.g=function(){return new XMLHttpRequest},xa=new bi;function jn(o){return encodeURIComponent(String(o))}function zp(o){var u=1;o=o.split(":");const h=[];for(;u>0&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function ut(o,u,h,f){this.j=o,this.i=u,this.l=h,this.S=f||1,this.V=new Nn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var La={},_i={};function vi(o,u,h){o.M=1,o.A=Fs(qe(u)),o.u=h,o.R=!0,Va(o,null)}function Va(o,u){o.F=Date.now(),Us(o),o.B=qe(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Wa(h.i,"t",f),o.C=0,h=o.j.L,o.h=new ka,o.g=ul(o.j,h?u:null,!o.u),o.P>0&&(o.O=new $p(d(o.Y,o,o.g),o.P)),u=o.V,h=o.g,f=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ea[0]=T.toString()),T=Ea);for(let S=0;S<T.length;S++){const L=ga(h,T[S],f||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.J?pa(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Un(),Bp(o.i,o.v,o.B,o.l,o.S,o.u)}ut.prototype.ba=function(o){o=o.target;const u=this.O;u&&pt(o)==3?u.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const z=pt(this.g),pe=this.g.ya(),X=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Za(this.g)))){this.K||z!=4||pe==7||(pe==8||X<=0?Un(3):Un(2)),Ei(this);var u=this.g.ca();this.X=u;var h=Wp(this);if(this.o=u==200,jp(this.i,this.v,this.B,this.l,this.S,z,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(f)){var S=f;break t}}S=null}if(o=S)rn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wi(this,o);else{this.o=!1,this.m=3,Ce(12),Ft(this),qn(this);break e}}if(this.R){o=!0;let me;for(;!this.K&&this.C<h.length;)if(me=Gp(this,h),me==_i){z==4&&(this.m=4,Ce(14),o=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(me==La){this.m=4,Ce(15),rn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else rn(this.i,this.l,me,null),wi(this,me);if(Da(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)rn(this.i,this.l,h,"[Invalid Chunked Response]"),Ft(this),qn(this);else if(h.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),xi(L),L.P=!0,Ce(11))}}else rn(this.i,this.l,h,null),wi(this,h);z==4&&Ft(this),this.o&&!this.K&&(z==4?ol(this.j,this):(this.o=!1,Us(this)))}else lf(this.g),u==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Ft(this),qn(this)}}}catch{}finally{}};function Wp(o){if(!Da(o))return o.g.la();const u=Za(o.g);if(u==="")return"";let h="";const f=u.length,T=pt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ft(o),qn(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<f;S++)o.h.h=!0,h+=o.h.i.decode(u[S],{stream:!(T&&S==f-1)});return u.length=0,o.h.g+=h,o.C=0,o.h.g}function Da(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Gp(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?_i:(h=Number(u.substring(h,f)),isNaN(h)?La:(f+=1,f+h>u.length?_i:(u=u.slice(f,f+h),o.C=f+h,u)))}ut.prototype.cancel=function(){this.K=!0,Ft(this)};function Us(o){o.T=Date.now()+o.H,Oa(o,o.H)}function Oa(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Fn(d(o.aa,o),u)}function Ei(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ut.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qp(this.i,this.B),this.M!=2&&(Un(),Ce(17)),Ft(this),this.m=2,qn(this)):Oa(this,this.T-o)};function qn(o){o.j.I==0||o.K||ol(o.j,o)}function Ft(o){Ei(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,wa(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function wi(o,u){try{var h=o.j;if(h.I!=0&&(h.g==o||Ii(h.h,o))){if(!o.L&&Ii(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)zs(h),qs(h);else break e;Ri(h),Ce(18)}}else h.xa=T[1],0<h.xa-h.K&&T[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Fn(d(h.Va,h),6e3));$a(h.h)<=1&&h.ta&&(h.ta=void 0)}else jt(h,11)}else if((o.L||h.g==o)&&zs(h),!b(u))for(T=h.Ba.g.parse(u),u=0;u<T.length;u++){let X=T[u];const me=X[0];if(!(me<=h.K))if(h.K=me,X=X[1],h.I==2)if(X[0]=="c"){h.M=X[1],h.ba=X[2];const He=X[3];He!=null&&(h.ka=He,h.j.info("VER="+h.ka));const qt=X[4];qt!=null&&(h.za=qt,h.j.info("SVER="+h.za));const ft=X[5];ft!=null&&typeof ft=="number"&&ft>0&&(f=1.5*ft,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const mt=o.g;if(mt){const Gs=mt.g?mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var S=f.h;S.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ti(S,S.h),S.h=null))}if(f.G){const ki=mt.g?mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ki&&(f.wa=ki,ee(f.J,f.G,ki))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var L=o;if(f.na=cl(f,f.L?f.ba:null,f.W),L.L){Ua(f.h,L);var z=L,pe=f.O;pe&&(z.H=pe),z.D&&(Ei(z),Us(z)),f.g=L}else rl(f);h.i.length>0&&Hs(h)}else X[0]!="stop"&&X[0]!="close"||jt(h,7);else h.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?jt(h,7):Pi(h):X[0]!="noop"&&h.l&&h.l.qa(X),h.A=0)}}Un(4)}catch{}}var Kp=class{constructor(o,u){this.g=o,this.map=u}};function Ma(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Na(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $a(o){return o.h?1:o.g?o.g.size:0}function Ii(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ti(o,u){o.g?o.g.add(u):o.h=u}function Ua(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ma.prototype.cancel=function(){if(this.i=Fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fa(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.G);return u}return I(o.i)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qp(o,u){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let T,S=null;f>=0?(T=o[h].substring(0,f),S=o[h].substring(f+1)):T=o[h],u(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function dt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof dt?(this.l=o.l,Hn(this,o.j),this.o=o.o,this.g=o.g,zn(this,o.u),this.h=o.h,Ai(this,Ga(o.i)),this.m=o.m):o&&(u=String(o).match(Ba))?(this.l=!1,Hn(this,u[1]||"",!0),this.o=Wn(u[2]||""),this.g=Wn(u[3]||"",!0),zn(this,u[4]),this.h=Wn(u[5]||"",!0),Ai(this,u[6]||"",!0),this.m=Wn(u[7]||"")):(this.l=!1,this.i=new Kn(null,this.l))}dt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Gn(u,ja,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Gn(u,ja,!0),"@"),o.push(jn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?Xp:Yp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,ef)),o.join("")},dt.prototype.resolve=function(o){const u=qe(this);let h=!!o.j;h?Hn(u,o.j):h=!!o.o,h?u.o=o.o:h=!!o.g,h?u.g=o.g:h=o.u!=null;var f=o.h;if(h)zn(u,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=u.h.lastIndexOf("/");T!=-1&&(f=u.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let L=0;L<T.length;){const z=T[L++];z=="."?f&&L==T.length&&S.push(""):z==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&L==T.length&&S.push("")):(S.push(z),f=!0)}f=S.join("/")}else f=T}return h?u.h=f:h=o.i.toString()!=="",h?Ai(u,Ga(o.i)):h=!!o.m,h&&(u.m=o.m),u};function qe(o){return new dt(o)}function Hn(o,u,h){o.j=h?Wn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function zn(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ai(o,u,h){u instanceof Kn?(o.i=u,tf(o.i,o.l)):(h||(u=Gn(u,Zp)),o.i=new Kn(u,o.l))}function ee(o,u,h){o.i.set(u,h)}function Fs(o){return ee(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Wn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Jp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ja=/[#\/\?@]/g,Yp=/[#\?:]/g,Xp=/[#\?]/g,Zp=/[#\?@]/g,ef=/#/g;function Kn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Bt(o){o.g||(o.g=new Map,o.h=0,o.i&&Qp(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}s=Kn.prototype,s.add=function(o,u){Bt(this),this.i=null,o=on(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function qa(o,u){Bt(o),u=on(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ha(o,u){return Bt(o),u=on(o,u),o.g.has(u)}s.forEach=function(o,u){Bt(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(u,T,f,this)},this)},this)};function za(o,u){Bt(o);let h=[];if(typeof u=="string")Ha(o,u)&&(h=h.concat(o.g.get(on(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)h=h.concat(o[u]);return h}s.set=function(o,u){return Bt(this),this.i=null,o=on(this,o),Ha(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},s.get=function(o,u){return o?(o=za(this,o),o.length>0?String(o[0]):u):u};function Wa(o,u,h){qa(o,u),h.length>0&&(o.i=null,o.g.set(on(o,u),I(h)),o.h+=h.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var h=u[f];const T=jn(h);h=za(this,h);for(let S=0;S<h.length;S++){let L=T;h[S]!==""&&(L+="="+jn(h[S])),o.push(L)}}return this.i=o.join("&")};function Ga(o){const u=new Kn;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function on(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function tf(o,u){u&&!o.j&&(Bt(o),o.i=null,o.g.forEach(function(h,f){const T=f.toLowerCase();f!=T&&(qa(this,f),Wa(this,T,h))},o)),o.j=u}function nf(o,u){const h=new Bn;if(a.Image){const f=new Image;f.onload=p(ht,h,"TestLoadImage: loaded",!0,u,f),f.onerror=p(ht,h,"TestLoadImage: error",!1,u,f),f.onabort=p(ht,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(ht,h,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function sf(o,u){const h=new Bn,f=new AbortController,T=setTimeout(()=>{f.abort(),ht(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?ht(h,"TestPingServer: ok",!0,u):ht(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),ht(h,"TestPingServer: error",!1,u)})}function ht(o,u,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function rf(){this.g=new Fp}function Si(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Si,Ia),Si.prototype.g=function(){return new Bs(this.i,this.h)};function Bs(o,u){ve.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Bs,ve),s=Bs.prototype,s.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Jn(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},s.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ka(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ka(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}s.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Qn(this):Jn(this),this.readyState==3&&Ka(this)}},s.Oa=function(o){this.g&&(this.response=this.responseText=o,Qn(this))},s.Na=function(o){this.g&&(this.response=o,Qn(this))},s.ga=function(){this.g&&Qn(this)};function Qn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Jn(o)}s.setRequestHeader=function(o,u){this.A.append(o,u)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Jn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qa(o){let u="";return Ds(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Ci(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Qa(h),typeof o=="string"?h!=null&&jn(h):ee(o,u,h))}function ie(o){ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ie,ve);var of=/^https?$/i,af=["POST","PUT"];s=ie.prototype,s.Fa=function(o){this.H=o},s.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xa.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Ja(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(af,u,void 0)>=0)||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,L]of h)this.g.setRequestHeader(S,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Ja(this,S)}};function Ja(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Ya(o),js(o)}function Ya(o){o.A||(o.A=!0,Se(o,"complete"),Se(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Se(this,"complete"),Se(this,"abort"),js(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),ie.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Xa(this):this.Xa())},s.Xa=function(){Xa(this)};function Xa(o){if(o.h&&typeof i<"u"){if(o.v&&pt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Se(o,"readystatechange"),pt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=S===0){let L=String(o.D).match(Ba)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),f=!of.test(L?L.toLowerCase():"")}h=f}if(h)Se(o,"complete"),Se(o,"success");else{o.o=6;try{var T=pt(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Ya(o)}}finally{js(o)}}}}function js(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,u||Se(o,"ready");try{h.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function pt(o){return o.g?o.g.readyState:0}s.ca=function(){try{return pt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Up(u)}};function Za(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lf(o){const u={};o=(o.g&&pt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(b(o[f]))continue;var h=zp(o[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[T]||[];u[T]=S,S.push(h)}Vp(u,function(f){return f.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function el(o){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yn("baseRetryDelayMs",5e3,o),this.Za=Yn("retryDelaySeedMs",1e4,o),this.Ta=Yn("forwardChannelMaxRetries",2,o),this.va=Yn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ma(o&&o.concurrentRequestLimit),this.Ba=new rf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=el.prototype,s.ka=8,s.I=1,s.connect=function(o,u,h,f){Ce(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=cl(this,null,this.W),Hs(this)};function Pi(o){if(tl(o),o.I==3){var u=o.V++,h=qe(o.J);if(ee(h,"SID",o.M),ee(h,"RID",u),ee(h,"TYPE","terminate"),Xn(o,h),u=new ut(o,o.j,u),u.M=2,u.A=Fs(qe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=u.A,h=!0),h||(u.g=ul(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Us(u)}ll(o)}function qs(o){o.g&&(xi(o),o.g.cancel(),o.g=null)}function tl(o){qs(o),o.v&&(a.clearTimeout(o.v),o.v=null),zs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Hs(o){if(!Na(o.h)&&!o.m){o.m=!0;var u=o.Ea;he||y(),ne||(he(),ne=!0),E.add(u,o),o.D=0}}function cf(o,u){return $a(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Fn(d(o.Ea,o,u),al(o,o.D)),o.D++,!0)}s.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new ut(this,this.j,o);let S=this.o;if(this.U&&(S?(S=pa(S),ma(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=sl(this,T,u),h=qe(this.J),ee(h,"RID",o),ee(h,"CVER",22),this.G&&ee(h,"X-HTTP-Session-Id",this.G),Xn(this,h),S&&(this.R?u="headers="+jn(Qa(S))+"&"+u:this.u&&Ci(h,this.u,S)),Ti(this.h,T),this.Ra&&ee(h,"TYPE","init"),this.S?(ee(h,"$req",u),ee(h,"SID","null"),T.U=!0,vi(T,h,null)):vi(T,h,u),this.I=2}}else this.I==3&&(o?nl(this,o):this.i.length==0||Na(this.h)||nl(this))};function nl(o,u){var h;u?h=u.l:h=o.V++;const f=qe(o.J);ee(f,"SID",o.M),ee(f,"RID",h),ee(f,"AID",o.K),Xn(o,f),o.u&&o.o&&Ci(f,o.u,o.o),h=new ut(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),u&&(o.i=u.G.concat(o.i)),u=sl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ti(o.h,h),vi(h,f,u)}function Xn(o,u){o.H&&Ds(o.H,function(h,f){ee(u,f,h)}),o.l&&Ds({},function(h,f){ee(u,f,h)})}function sl(o,u,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var T=o.i;let z=-1;for(;;){const pe=["count="+h];z==-1?h>0?(z=T[0].g,pe.push("ofs="+z)):z=0:pe.push("ofs="+z);let X=!0;for(let me=0;me<h;me++){var S=T[me].g;const He=T[me].map;if(S-=z,S<0)z=Math.max(0,T[me].g-100),X=!1;else try{S="req"+S+"_"||"";try{var L=He instanceof Map?He:Object.entries(He);for(const[qt,ft]of L){let mt=ft;l(ft)&&(mt=mi(ft)),pe.push(S+qt+"="+encodeURIComponent(mt))}}catch(qt){throw pe.push(S+"type="+encodeURIComponent("_badmap")),qt}}catch{f&&f(He)}}if(X){L=pe.join("&");break e}}L=void 0}return o=o.i.splice(0,h),u.G=o,L}function rl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;he||y(),ne||(he(),ne=!0),E.add(u,o),o.A=0}}function Ri(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Fn(d(o.Da,o),al(o,o.A)),o.A++,!0)}s.Da=function(){if(this.v=null,il(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Fn(d(this.Wa,this),o)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),qs(this),il(this))};function xi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function il(o){o.g=new ut(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=qe(o.na);ee(u,"RID","rpc"),ee(u,"SID",o.M),ee(u,"AID",o.K),ee(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ee(u,"TO",o.ia),ee(u,"TYPE","xmlhttp"),Xn(o,u),o.u&&o.o&&Ci(u,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Fs(qe(u)),h.u=null,h.R=!0,Va(h,o)}s.Va=function(){this.C!=null&&(this.C=null,qs(this),Ri(this),Ce(19))};function zs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ol(o,u){var h=null;if(o.g==u){zs(o),xi(o),o.g=null;var f=2}else if(Ii(o.h,u))h=u.G,Ua(o.h,u),f=1;else return;if(o.I!=0){if(u.o)if(f==1){h=u.u?u.u.length:0,u=Date.now()-u.F;var T=o.D;f=Ns(),Se(f,new Pa(f,h)),Hs(o)}else rl(o);else if(T=u.m,T==3||T==0&&u.X>0||!(f==1&&cf(o,u)||f==2&&Ri(o)))switch(h&&h.length>0&&(u=o.h,u.i=u.i.concat(h)),T){case 1:jt(o,5);break;case 4:jt(o,10);break;case 3:jt(o,6);break;default:jt(o,2)}}}function al(o,u){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*u}function jt(o,u){if(o.j.info("Error code "+u),u==2){var h=d(o.bb,o),f=o.Ua;const T=!f;f=new dt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hn(f,"https"),Fs(f),T?nf(f.toString(),h):sf(f.toString(),h)}else Ce(2);o.I=0,o.l&&o.l.pa(u),ll(o),tl(o)}s.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function ll(o){if(o.I=0,o.ja=[],o.l){const u=Fa(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ja,u),C(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function cl(o,u,h){var f=h instanceof dt?qe(h):new dt(h);if(f.g!="")u&&(f.g=u+"."+f.g),zn(f,f.u);else{var T=a.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const S=new dt(null);f&&Hn(S,f),u&&(S.g=u),T&&zn(S,T),h&&(S.h=h),f=S}return h=o.G,u=o.wa,h&&u&&ee(f,h,u),ee(f,"VER",o.ka),Xn(o,f),f}function ul(o,u,h){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ie(new Si({ab:h})):new ie(o.ma),u.Fa(o.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function dl(){}s=dl.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Ws(){}Ws.prototype.g=function(o,u){return new ke(o,u)};function ke(o,u){ve.call(this),this.g=new el(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new an(this)}m(ke,ve),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){Pi(this.g)},ke.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=mi(o),o=h);u.i.push(new Kp(u.Ya++,o)),u.I==3&&Hs(u)},ke.prototype.N=function(){this.g.l=null,delete this.j,Pi(this.g),delete this.g,ke.Z.N.call(this)};function hl(o){gi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(hl,gi);function pl(){yi.call(this),this.status=1}m(pl,yi);function an(o){this.g=o}m(an,dl),an.prototype.ra=function(){Se(this.g,"a")},an.prototype.qa=function(o){Se(this.g,new hl(o))},an.prototype.pa=function(o){Se(this.g,new pl)},an.prototype.oa=function(){Se(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,fu=function(){return new Ws},pu=function(){return Ns()},hu=Ut,Ji={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,sr=$s,Ra.COMPLETE="complete",du=Ra,Ta.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",ve.prototype.listen=ve.prototype.J,ns=Ta,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,uu=ie}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const Pl="@firebase/firestore",Rl="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Eo("@firebase/firestore");function ln(){return Jt.logLevel}function D(s,...e){if(Jt.logLevel<=W.DEBUG){const t=e.map(To);Jt.debug(`Firestore (${Ln}): ${s}`,...t)}}function it(s,...e){if(Jt.logLevel<=W.ERROR){const t=e.map(To);Jt.error(`Firestore (${Ln}): ${s}`,...t)}}function In(s,...e){if(Jt.logLevel<=W.WARN){const t=e.map(To);Jt.warn(`Firestore (${Ln}): ${s}`,...t)}}function To(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,mu(s,n,t)}function mu(s,e,t){let n=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw it(n),new Error(n)}function Y(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||mu(e,r,n)}function q(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class Xm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Zm{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string",31837,{l:n}),new gu(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class eg{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tg{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new eg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ng{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=sg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function G(s,e){return s<e?-1:s>e?1:0}function Yi(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return Ni(r)===Ni(i)?G(r,i):Ni(r)?1:-1}return G(s.length,e.length)}const rg=55296,ig=57343;function Ni(s){const e=s.charCodeAt(0);return e>=rg&&e<=ig}function Tn(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="__name__";class ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=ze.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const n=ze.isNumericId(e),r=ze.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ze.extractNumericId(e).compare(ze.extractNumericId(t)):Yi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class Z extends ze{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends ze{construct(e,t,n){return new be(e,t,n)}static isValidIdentifier(e){return og.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kl}static keyField(){return new be([kl])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(n+=l,r++):(i(),r++)}if(i(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(s,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function ag(s,e,t,n){if(e===!0&&n===!0)throw new V(P.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Ll(s){if(!M.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Vl(s){if(M.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function bu(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Fr(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":U(12329,{type:typeof s})}function Fe(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fr(s);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(s,e){const t={typeString:s};return e&&(t.value=e),t}function ws(s,e){if(!bu(s))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(r&&typeof a!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-62135596800,Ol=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Ol);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dl)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ol}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ws(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:de("string",te._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new te(0,0))}static max(){return new j(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=-1;function lg(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=j.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new Rt(r,M.empty(),e)}function cg(s){return new Rt(s.readTime,s.key,ps)}class Rt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rt(j.min(),M.empty(),ps)}static max(){return new Rt(j.max(),M.empty(),ps)}}function ug(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(s.documentKey,e.documentKey),t!==0?t:G(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(s){if(s.code!==P.FAILED_PRECONDITION||s.message!==dg)throw s;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,n)=>{t(e)}))}static reject(e){return new R(((t,n)=>{n(e)}))}static waitFor(e){return new R(((t,n)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(c=>n(c)))})),a=!0,i===r&&t()}))}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next((r=>r?R.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new R(((n,r)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next((p=>{a[d]=p,++l,l===i&&n(a)}),(p=>r(p)))}}))}static doWhile(e,t){return new R(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function pg(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Br.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=-1;function jr(s){return s==null}function yr(s){return s===0&&1/s==-1/0}function fg(s){return typeof s=="number"&&Number.isInteger(s)&&!yr(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="";function mg(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Ml(e)),e=gg(s.get(t),e);return Ml(e)}function gg(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case _u:t+="";break;default:t+=i}}return t}function Ml(s){return s+_u+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Ot(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function vu(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??ye.RED,this.left=r??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ye(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(e){return new $l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class $l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new De([])}unionWith(e){let t=new fe(be.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Eu("Invalid base64 string: "+i):i}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(s){if(Y(!!s,39018),typeof s=="string"){let e=0;const t=yg.exec(s);if(Y(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(s.seconds),nanos:oe(s.nanos)}}function oe(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function kt(s){return typeof s=="string"?_e.fromBase64String(s):_e.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="server_timestamp",Iu="__type__",Tu="__previous_value__",Au="__local_write_time__";function Co(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Iu])==null?void 0:n.stringValue)===wu}function qr(s){const e=s.mapValue.fields[Tu];return Co(e)?qr(e):e}function fs(s){const e=xt(s.mapValue.fields[Au].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t,n,r,i,a,l,c,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=p}}const br="(default)";class ms{constructor(e,t){this.projectId=e,this.database=t||br}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===br}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="__type__",_g="__max__",Ys={mapValue:{}},Cu="__vector__",_r="value";function Lt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Co(s)?4:Eg(s)?9007199254740991:vg(s)?10:11:U(28295,{value:s})}function Xe(s,e){if(s===e)return!0;const t=Lt(s);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return fs(s).isEqual(fs(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=xt(r.timestampValue),l=xt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(r,i){return kt(r.bytesValue).isEqual(kt(i.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(r,i){return oe(r.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(r.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(s,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return oe(r.integerValue)===oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=oe(r.doubleValue),l=oe(i.doubleValue);return a===l?yr(a)===yr(l):isNaN(a)&&isNaN(l)}return!1})(s,e);case 9:return Tn(s.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Nl(a)!==Nl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Xe(a[c],l[c])))return!1;return!0})(s,e);default:return U(52216,{left:s})}}function gs(s,e){return(s.values||[]).find((t=>Xe(t,e)))!==void 0}function An(s,e){if(s===e)return 0;const t=Lt(s),n=Lt(e);if(t!==n)return G(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(s.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=oe(i.integerValue||i.doubleValue),c=oe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(s,e);case 3:return Ul(s.timestampValue,e.timestampValue);case 4:return Ul(fs(s),fs(e));case 5:return Yi(s.stringValue,e.stringValue);case 6:return(function(i,a){const l=kt(i),c=kt(a);return l.compareTo(c)})(s.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const p=G(l[d],c[d]);if(p!==0)return p}return G(l.length,c.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=G(oe(i.latitude),oe(a.latitude));return l!==0?l:G(oe(i.longitude),oe(a.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return Fl(s.arrayValue,e.arrayValue);case 10:return(function(i,a){var g,I,C,k;const l=i.fields||{},c=a.fields||{},d=(g=l[_r])==null?void 0:g.arrayValue,p=(I=c[_r])==null?void 0:I.arrayValue,m=G(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((k=p==null?void 0:p.values)==null?void 0:k.length)||0);return m!==0?m:Fl(d,p)})(s.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ys.mapValue&&a===Ys.mapValue)return 0;if(i===Ys.mapValue)return 1;if(a===Ys.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=a.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const g=Yi(c[m],p[m]);if(g!==0)return g;const I=An(l[c[m]],d[p[m]]);if(I!==0)return I}return G(c.length,p.length)})(s.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Ul(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return G(s,e);const t=xt(s),n=xt(e),r=G(t.seconds,n.seconds);return r!==0?r:G(t.nanos,n.nanos)}function Fl(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=An(t[r],n[r]);if(i)return i}return G(t.length,n.length)}function Sn(s){return Xi(s)}function Xi(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=xt(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return kt(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return M.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Xi(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of n)i?i=!1:r+=",",r+=`${a}:${Xi(t.fields[a])}`;return r+"}"})(s.mapValue):U(61005,{value:s})}function rr(s){switch(Lt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qr(s);return e?16+rr(e):16;case 5:return 2*s.stringValue.length;case 6:return kt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+rr(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return Ot(n.fields,((i,a)=>{r+=i.length+rr(a)})),r})(s.mapValue);default:throw U(13486,{value:s})}}function Bl(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Zi(s){return!!s&&"integerValue"in s}function Po(s){return!!s&&"arrayValue"in s}function jl(s){return!!s&&"nullValue"in s}function ql(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function ir(s){return!!s&&"mapValue"in s}function vg(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Su])==null?void 0:n.stringValue)===Cu}function as(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Ot(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=as(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=as(s.arrayValue.values[t]);return e}return{...s}}function Eg(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===_g}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ir(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(t)}setAll(e){let t=be.emptyPath(),n={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=l.popLast()}a?n[l.lastSegment()]=as(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ir(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ot(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new xe(as(this.value))}}function Pu(s){const e=[];return Ot(s.fields,((t,n)=>{const r=new be([t]);if(ir(n)){const i=Pu(n.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n,r,i,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Te(e,0,j.min(),j.min(),j.min(),xe.empty(),0)}static newFoundDocument(e,t,n,r){return new Te(e,1,t,j.min(),n,r,0)}static newNoDocument(e,t){return new Te(e,2,t,j.min(),j.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,j.min(),j.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.position=e,this.inclusive=t}}function Hl(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],a=s.position[r];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),t.key):n=An(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function zl(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Xe(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t="asc"){this.field=e,this.dir=t}}function wg(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{}class ue extends Ru{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Tg(e,t,n):t==="array-contains"?new Cg(e,n):t==="in"?new Pg(e,n):t==="not-in"?new Rg(e,n):t==="array-contains-any"?new xg(e,n):new ue(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ag(e,n):new Sg(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(An(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(An(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Ru{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Be(e,t)}matches(e){return xu(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xu(s){return s.op==="and"}function ku(s){return Ig(s)&&xu(s)}function Ig(s){for(const e of s.filters)if(e instanceof Be)return!1;return!0}function eo(s){if(s instanceof ue)return s.field.canonicalString()+s.op.toString()+Sn(s.value);if(ku(s))return s.filters.map((e=>eo(e))).join(",");{const e=s.filters.map((t=>eo(t))).join(",");return`${s.op}(${e})`}}function Lu(s,e){return s instanceof ue?(function(n,r){return r instanceof ue&&n.op===r.op&&n.field.isEqual(r.field)&&Xe(n.value,r.value)})(s,e):s instanceof Be?(function(n,r){return r instanceof Be&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,a,l)=>i&&Lu(a,r.filters[l])),!0):!1})(s,e):void U(19439)}function Vu(s){return s instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`})(s):s instanceof Be?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vu).join(" ,")+"}"})(s):"Filter"}class Tg extends ue{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ag extends ue{constructor(e,t){super(e,"in",t),this.keys=Du("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Sg extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Du("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Du(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>M.fromName(n.referenceValue)))}class Cg extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Po(t)&&gs(t.arrayValue,this.value)}}class Pg extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gs(this.value.arrayValue,t)}}class Rg extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gs(this.value.arrayValue,t)}}class xg extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Po(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>gs(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t=null,n=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Wl(s,e=null,t=[],n=[],r=null,i=null,a=null){return new kg(s,e,t,n,r,i,a)}function Ro(s){const e=q(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>eo(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),jr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Sn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Sn(n))).join(",")),e.Te=t}return e.Te}function xo(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!wg(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Lu(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!zl(s.startAt,e.startAt)&&zl(s.endAt,e.endAt)}function to(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,n=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Lg(s,e,t,n,r,i,a,l){return new Is(s,e,t,n,r,i,a,l)}function ko(s){return new Is(s)}function Gl(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Ou(s){return s.collectionGroup!==null}function ls(s){const e=q(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new fe(be.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Er(i,n))})),t.has(be.keyField().canonicalString())||e.Ie.push(new Er(be.keyField(),n))}return e.Ie}function We(s){const e=q(s);return e.Ee||(e.Ee=Vg(e,ls(s))),e.Ee}function Vg(s,e){if(s.limitType==="F")return Wl(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Er(r.field,i)}));const t=s.endAt?new vr(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new vr(s.startAt.position,s.startAt.inclusive):null;return Wl(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function no(s,e){const t=s.filters.concat([e]);return new Is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function so(s,e,t){return new Is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Hr(s,e){return xo(We(s),We(e))&&s.limitType===e.limitType}function Mu(s){return`${Ro(We(s))}|lt:${s.limitType}`}function cn(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>Vu(r))).join(", ")}]`),jr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>Sn(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>Sn(r))).join(",")),`Target(${n})`})(We(s))}; limitType=${s.limitType})`}function zr(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of ls(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(a,l,c){const d=Hl(a,l,c);return a.inclusive?d<=0:d<0})(n.startAt,ls(n),r)||n.endAt&&!(function(a,l,c){const d=Hl(a,l,c);return a.inclusive?d>=0:d>0})(n.endAt,ls(n),r))})(s,e)}function Dg(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Nu(s){return(e,t)=>{let n=!1;for(const r of ls(s)){const i=Og(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function Og(s,e,t){const n=s.field.isKeyField()?M.comparator(e.key,t.key):(function(i,a,l){const c=a.data.field(i),d=l.data.field(i);return c!==null&&d!==null?An(c,d):U(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return vu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new se(M.comparator);function ot(){return Mg}const $u=new se(M.comparator);function ss(...s){let e=$u;for(const t of s)e=e.insert(t.key,t);return e}function Uu(s){let e=$u;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Wt(){return cs()}function Fu(){return cs()}function cs(){return new en((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Ng=new se(M.comparator),$g=new fe(M.comparator);function K(...s){let e=$g;for(const t of s)e=e.add(t);return e}const Ug=new fe(G);function Fg(){return Ug}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(e)?"-0":e}}function Bu(s){return{integerValue:""+s}}function Bg(s,e){return fg(e)?Bu(e):Lo(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function jg(s,e,t){return s instanceof wr?(function(r,i){const a={fields:{[Iu]:{stringValue:wu},[Au]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Co(i)&&(i=qr(i)),i&&(a.fields[Tu]=i),{mapValue:a}})(t,e):s instanceof ys?qu(s,e):s instanceof bs?Hu(s,e):(function(r,i){const a=ju(r,i),l=Kl(a)+Kl(r.Ae);return Zi(a)&&Zi(r.Ae)?Bu(l):Lo(r.serializer,l)})(s,e)}function qg(s,e,t){return s instanceof ys?qu(s,e):s instanceof bs?Hu(s,e):t}function ju(s,e){return s instanceof Ir?(function(n){return Zi(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class wr extends Wr{}class ys extends Wr{constructor(e){super(),this.elements=e}}function qu(s,e){const t=zu(e);for(const n of s.elements)t.some((r=>Xe(r,n)))||t.push(n);return{arrayValue:{values:t}}}class bs extends Wr{constructor(e){super(),this.elements=e}}function Hu(s,e){let t=zu(e);for(const n of s.elements)t=t.filter((r=>!Xe(r,n)));return{arrayValue:{values:t}}}class Ir extends Wr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kl(s){return oe(s.integerValue||s.doubleValue)}function zu(s){return Po(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function Hg(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof ys&&r instanceof ys||n instanceof bs&&r instanceof bs?Tn(n.elements,r.elements,Xe):n instanceof Ir&&r instanceof Ir?Xe(n.Ae,r.Ae):n instanceof wr&&r instanceof wr})(s.transform,e.transform)}class zg{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function or(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Gr{}function Wu(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Vo(s.key,Ne.none()):new Ts(s.key,s.data,Ne.none());{const t=s.data,n=xe.empty();let r=new fe(be.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),r=r.add(i)}return new Mt(s.key,n,new De(r.toArray()),Ne.none())}}function Wg(s,e,t){s instanceof Ts?(function(r,i,a){const l=r.value.clone(),c=Jl(r.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(s,e,t):s instanceof Mt?(function(r,i,a){if(!or(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Jl(r.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Gu(r)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(s,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function us(s,e,t,n){return s instanceof Ts?(function(i,a,l,c){if(!or(i.precondition,a))return l;const d=i.value.clone(),p=Yl(i.fieldTransforms,c,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(s,e,t,n):s instanceof Mt?(function(i,a,l,c){if(!or(i.precondition,a))return l;const d=Yl(i.fieldTransforms,c,a),p=a.data;return p.setAll(Gu(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(s,e,t,n):(function(i,a,l){return or(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(s,e,t)}function Gg(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=ju(n.transform,r||null);i!=null&&(t===null&&(t=xe.empty()),t.set(n.field,i))}return t||null}function Ql(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Tn(n,r,((i,a)=>Hg(i,a)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Ts extends Gr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mt extends Gr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gu(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function Jl(s,e,t){const n=new Map;Y(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const i=s[r],a=i.transform,l=e.data.field(i.field);n.set(i.field,qg(a,l,t[r]))}return n}function Yl(s,e,t){const n=new Map;for(const r of s){const i=r.transform,a=t.data.field(r.field);n.set(r.field,jg(i,a,e))}return n}class Vo extends Gr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kg extends Gr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Wg(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Fu();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const c=Wu(a,l);c!==null&&n.set(r.key,c),a.isValidDocument()||a.convertToNoDocument(j.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Tn(this.mutations,e.mutations,((t,n)=>Ql(t,n)))&&Tn(this.baseMutations,e.baseMutations,((t,n)=>Ql(t,n)))}}class Do{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Y(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=(function(){return Ng})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new Do(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,J;function Xg(s){switch(s){case P.OK:return U(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U(15467,{code:s})}}function Ku(s){if(s===void 0)return it("GRPC error has no .code"),P.UNKNOWN;switch(s){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return U(39323,{code:s})}}(J=ce||(ce={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Ct([4294967295,4294967295],0);function Xl(s){const e=Zg().encode(s),t=new cu;return t.update(e),new Uint8Array(t.digest())}function Zl(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ct([t,n],0),new Ct([r,i],0)]}class Oo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new rs(`Invalid padding: ${t}`);if(n<0)throw new rs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new rs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new rs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ct.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Ct.fromNumber(n)));return r.compare(ey)===1&&(r=new Ct([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xl(e),[n,r]=Zl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);if(!this.we(a))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Oo(i,r,t);return n.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=Xl(e),[n,r]=Zl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Kr(j.min(),r,new se(G),ot(),K())}}class As{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new As(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Qu{constructor(e,t){this.targetId=e,this.Ce=t}}class Ju{constructor(e,t,n=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ec{constructor(){this.ve=0,this.Fe=tc(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),n=K();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:U(38017,{changeType:i})}})),new As(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=tc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ty{constructor(e){this.Ge=e,this.ze=new Map,this.je=ot(),this.Je=Xs(),this.He=Xs(),this.Ye=new se(G)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(to(i))if(n===0){const a=new M(i.path);this.et(t,a,Te.newNoDocument(a,j.min()))}else Y(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=kt(n).toUint8Array()}catch(c){if(c instanceof Eu)return In("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Oo(a,r,i)}catch(c){return In(c instanceof rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&to(l.target)){const c=new M(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,Te.newNoDocument(c,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let n=K();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Kr(e,t,this.Ye,this.je,n);return this.je=ot(),this.Je=Xs(),this.He=Xs(),this.Ye=new se(G),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ec,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ec),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xs(){return new se(M.comparator)}function tc(){return new se(M.comparator)}const ny={asc:"ASCENDING",desc:"DESCENDING"},sy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ry={and:"AND",or:"OR"};class iy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ro(s,e){return s.useProto3Json||jr(e)?e:{value:e}}function Tr(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yu(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function oy(s,e){return Tr(s,e.toTimestamp())}function Ge(s){return Y(!!s,49232),j.fromTimestamp((function(t){const n=xt(t);return new te(n.seconds,n.nanos)})(s))}function Mo(s,e){return io(s,e).canonicalString()}function io(s,e){const t=(function(r){return new Z(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function Xu(s){const e=Z.fromString(s);return Y(sd(e),10190,{key:e.toString()}),e}function oo(s,e){return Mo(s.databaseId,e.path)}function $i(s,e){const t=Xu(e);if(t.get(1)!==s.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new M(ed(t))}function Zu(s,e){return Mo(s.databaseId,e)}function ay(s){const e=Xu(s);return e.length===4?Z.emptyPath():ed(e)}function ao(s){return new Z(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function ed(s){return Y(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function nc(s,e,t){return{name:oo(s,e),fields:t.value.mapValue.fields}}function ly(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string",58123),_e.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),_e.fromUint8Array(p||new Uint8Array))})(s,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?P.UNKNOWN:Ku(d.code);return new V(p,d.message||"")})(a);t=new Ju(n,r,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=$i(s,n.document.name),i=Ge(n.document.updateTime),a=n.document.createTime?Ge(n.document.createTime):j.min(),l=new xe({mapValue:{fields:n.document.fields}}),c=Te.newFoundDocument(r,i,a,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new ar(d,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=$i(s,n.document),i=n.readTime?Ge(n.readTime):j.min(),a=Te.newNoDocument(r,i),l=n.removedTargetIds||[];t=new ar([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=$i(s,n.document),i=n.removedTargetIds||[];t=new ar([],i,r,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,a=new Yg(r,i),l=n.targetId;t=new Qu(l,a)}}return t}function cy(s,e){let t;if(e instanceof Ts)t={update:nc(s,e.key,e.value)};else if(e instanceof Vo)t={delete:oo(s,e.key)};else if(e instanceof Mt)t={update:nc(s,e.key,e.data),updateMask:by(e.fieldMask)};else{if(!(e instanceof Kg))return U(16599,{Vt:e.type});t={verify:oo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,a){const l=a.transform;if(l instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ir)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:oy(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(s,e.precondition)),t}function uy(s,e){return s&&s.length>0?(Y(e!==void 0,14353),s.map((t=>(function(r,i){let a=r.updateTime?Ge(r.updateTime):Ge(i);return a.isEqual(j.min())&&(a=Ge(i)),new zg(a,r.transformResults||[])})(t,e)))):[]}function dy(s,e){return{documents:[Zu(s,e.path)]}}function hy(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Zu(s,r);const i=(function(d){if(d.length!==0)return nd(Be.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((p=>(function(g){return{field:un(g.field),direction:my(g.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ro(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function py(s){let e=ay(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){Y(n===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(m){const g=td(m);return g instanceof Be&&ku(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((g=>(function(C){return new Er(dn(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let g;return g=typeof m=="object"?m.value:m,jr(g)?null:g})(t.limit));let c=null;t.startAt&&(c=(function(m){const g=!!m.before,I=m.values||[];return new vr(I,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,I=m.values||[];return new vr(I,g)})(t.endAt)),Lg(e,r,a,i,l,"F",c,d)}function fy(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function td(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=dn(t.unaryFilter.field);return ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=dn(t.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(s):s.fieldFilter!==void 0?(function(t){return ue.create(dn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Be.create(t.compositeFilter.filters.map((n=>td(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(s):U(30097,{filter:s})}function my(s){return ny[s]}function gy(s){return sy[s]}function yy(s){return ry[s]}function un(s){return{fieldPath:s.canonicalString()}}function dn(s){return be.fromServerFormat(s.fieldPath)}function nd(s){return s instanceof ue?(function(t){if(t.op==="=="){if(ql(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(jl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ql(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(jl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:gy(t.op),value:t.value}}})(s):s instanceof Be?(function(t){const n=t.getFilters().map((r=>nd(r)));return n.length===1?n[0]:{compositeFilter:{op:yy(t.op),filters:n}}})(s):U(54877,{filter:s})}function by(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sd(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,n,r,i=j.min(),a=j.min(),l=_e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.yt=e}}function vy(s){const e=py({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?so(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.Cn=new wy}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Rt.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class wy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new fe(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new fe(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rd=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(rd,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Cn(0)}static cr(){return new Cn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="LruGarbageCollector",Iy=1048576;function ic([s,e],[t,n]){const r=G(s,t);return r===0?G(e,n):r}class Ty{constructor(e){this.Ir=e,this.buffer=new fe(ic),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ic(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ay{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(rc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?D(rc,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Vr(3e5)}))}}class Sy{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Br.ce);const n=new Ty(t);return this.mr.forEachTarget(e,(r=>n.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>n.Ar(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(sc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,a,l,c,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r)))).next((m=>(n=m,l=Date.now(),this.removeTargets(e,n,t)))).next((m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(d=Date.now(),ln()<=W.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(d-c)+`ms
Total Duration: ${d-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m}))))}}function Cy(s,e){return new Sy(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.changes=new en((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&us(n.mutation,r,De.empty(),te.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const r=Wt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let a=ss();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=Wt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,n,r){let i=ot();const a=cs(),l=(function(){return cs()})();return t.forEach(((c,d)=>{const p=n.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof Mt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),us(p.mutation,d,p.mutation.getFieldMask(),te.now())):a.set(d.key,De.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>l.set(d,new Ry(p,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const n=cs();let r=new se(((a,l)=>a-l)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const d=t.get(c);if(d===null)return;let p=n.get(c)||De.empty();p=l.applyToLocalView(d,p),n.set(c,p);const m=(r.get(l.batchId)||K()).add(c);r=r.insert(l.batchId,m)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,p=c.value,m=Fu();p.forEach((g=>{if(!i.has(g)){const I=Wu(t.get(g),n.get(g));I!==null&&m.set(g,I),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return R.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ou(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):R.resolve(Wt());let l=ps,c=i;return a.next((d=>R.forEach(d,((p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?R.resolve():this.remoteDocumentCache.getEntry(e,p).next((g=>{c=c.insert(p,g)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,c,d,K()))).next((p=>({batchId:l,changes:Uu(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((n=>{let r=ss();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=ss();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(c=>{const d=(function(m,g){return new Is(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,r).next((p=>{p.forEach(((m,g)=>{a=a.insert(m,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((a=>{i.forEach(((c,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Te.newInvalidDocument(p)))}));let l=ss();return a.forEach(((c,d)=>{const p=i.get(c);p!==void 0&&us(p.mutation,d,De.empty(),te.now()),zr(t,d)&&(l=l.insert(c,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ge(r.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:vy(r.bundledQuery),readTime:Ge(r.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.overlays=new se(M.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Wt();return R.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const r=Wt(),i=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new se(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=i.get(d.largestBatchId);p===null&&(p=Wt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Wt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=r)););return R.resolve(l)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Jg(t,n));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.Qr=new fe(ge.$r),this.Ur=new fe(ge.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new ge(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new ge(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new M(new Z([])),n=new ge(t,e),r=new ge(t,e+1),i=[];return this.Ur.forEachInRange([n,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new Z([])),n=new ge(t,e),r=new ge(t,e+1);let i=K();return this.Ur.forEachInRange([n,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ge{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||G(e.Yr,t.Yr)}static Kr(e,t){return G(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ge.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qg(i,t,n,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?So:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ge(t,0),r=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],(a=>{const l=this.Xr(a.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fe(G);return t.forEach((r=>{const i=new ge(r,0),a=new ge(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{n=n.add(l.Yr)}))})),R.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new ge(new M(i),0);let l=new fe(G);return this.Zr.forEachWhile((c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===r&&(l=l.add(c.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((n=>{const r=this.Xr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Y(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return R.forEach(t.mutations,(r=>{const i=new ge(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new ge(t,0),r=this.Zr.firstAfterOrEqual(n);return R.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.ri=e,this.docs=(function(){return new se(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=ot();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Te.newInvalidDocument(r))})),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ot();const a=t.path,l=new M(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ug(cg(p),n)<=0||(r.has(p.key)||zr(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,r){U(9500)}ii(e,t){return R.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new My(this)}getSize(e){return R.resolve(this.size)}}class My extends Py{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.persistence=e,this.si=new en((t=>Ro(t)),xo),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new No,this.targetCount=0,this.ai=Cn.ur()}forEachTarget(e,t){return this.si.forEach(((n,r)=>t(r))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Cn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),R.waitFor(i).next((()=>r))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t){this.ui={},this.overlays={},this.ci=new Br(0),this.li=!1,this.li=!0,this.hi=new Vy,this.referenceDelegate=e(this),this.Pi=new Ny(this),this.indexManager=new Ey,this.remoteDocumentCache=(function(r){return new Oy(r)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new _y(t),this.Ii=new ky(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ly,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Dy(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const r=new $y(this.ci.next());return this.referenceDelegate.Ei(),n(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class $y extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class $o{constructor(e){this.persistence=e,this.Ri=new No,this.Vi=null}static mi(e){return new $o(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(n=>{const r=M.fromPath(n);return this.gi(e,r).next((i=>{i||t.removeEntry(r,j.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ar{constructor(e,t){this.persistence=e,this.pi=new en((n=>mg(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=Cy(this,t)}static mi(e,t){return new Ar(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((n,r)=>this.br(e,n,r).next((i=>i?R.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((l=>{l||(n++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rr(e.data.value)),t}br(e,t,n){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return R.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=K(),r=K();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Uo(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Vf()?8:pg(Ae())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,r,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Uy;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,n,r){return n.documentReadCount<this.fs?(ln()<=W.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(ln()<=W.DEBUG&&D("QueryEngine","Query:",cn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(ln()<=W.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):R.resolve())}ys(e,t){if(Gl(t))return R.resolve(null);let n=We(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=so(t,null,"F"),n=We(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const a=K(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,n).next((c=>{const d=this.Ds(t,l);return this.Cs(t,d,a,c.readTime)?this.ys(e,so(t,null,"F")):this.vs(e,d,t,c)}))))})))))}ws(e,t,n,r){return Gl(t)||r.isEqual(j.min())?R.resolve(null):this.ps.getDocuments(e,n).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,n,r)?R.resolve(null):(ln()<=W.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cn(t)),this.vs(e,a,t,lg(r,ps)).next((l=>l)))}))}Ds(e,t){let n=new fe(Nu(e));return t.forEach(((r,i)=>{zr(e,i)&&(n=n.add(i))})),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return ln()<=W.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",cn(t)),this.ps.getDocumentsMatchingQuery(e,t,Rt.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="LocalStore",By=3e8;class jy{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new se(G),this.xs=new en((i=>Ro(i)),xo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xy(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function qy(s,e,t,n){return new jy(s,e,t,n)}async function od(s,e){const t=q(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],l=[];let c=K();for(const d of r){a.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return t.localDocuments.getDocuments(n,c).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Hy(s,e){const t=q(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,d,p){const m=d.batch,g=m.keys();let I=R.resolve();return g.forEach((C=>{I=I.next((()=>p.getEntry(c,C))).next((k=>{const x=d.docVersions.get(C);Y(x!==null,48541),k.version.compareTo(x)<0&&(m.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))}))})),I.next((()=>l.mutationQueue.removeMutationBatch(c,m)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let c=K();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function ad(s){const e=q(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function zy(s,e){const t=q(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((p,m)=>{const g=r.get(m);if(!g)return;l.push(t.Pi.removeMatchingKeys(i,p.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(i,p.addedDocuments,m))));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(_e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,n)),r=r.insert(m,I),(function(k,x,F){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=By?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(g,I,p)&&l.push(t.Pi.updateTargetData(i,I))}));let c=ot(),d=K();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),l.push(Wy(i,a,e.documentUpdates).next((p=>{c=p.ks,d=p.qs}))),!n.isEqual(j.min())){const p=t.Pi.getLastRemoteSnapshotVersion(i).next((m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));l.push(p)}return R.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,d))).next((()=>c))})).then((i=>(t.Ms=r,i)))}function Wy(s,e,t){let n=K(),r=K();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let a=ot();return t.forEach(((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):D(Fo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)})),{ks:a,qs:r}}))}function Gy(s,e){const t=q(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=So),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ky(s,e){const t=q(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.Pi.getTargetData(n,e).next((i=>i?(r=i,R.resolve(r)):t.Pi.allocateTargetId(n).next((a=>(r=new wt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function lo(s,e,t){const n=q(s),r=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!Dn(a))throw a;D(Fo,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function oc(s,e,t){const n=q(s);let r=j.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,d,p){const m=q(c),g=m.xs.get(p);return g!==void 0?R.resolve(m.Ms.get(g)):m.Pi.getTargetData(d,p)})(n,a,We(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>n.Fs.getDocumentsMatchingQuery(a,e,t?r:j.min(),t?i:K()))).next((l=>(Qy(n,Dg(e),l),{documents:l,Qs:i})))))}function Qy(s,e,t){let n=s.Os.get(e)||j.min();t.forEach(((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),s.Os.set(e,n)}class ac{constructor(){this.activeTargetIds=Fg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jy{constructor(){this.Mo=new ac,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ac,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="ConnectivityMonitor";class cc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(lc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(lc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=null;function co(){return Zs===null?Zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zs++,"0x"+Zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="RestConnection",Xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===br?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const a=co(),l=this.zo(e,t.toUriEncodedString());D(Ui,`Sending RPC '${e}' ${a}:`,l,n);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:d}=new URL(l),p=xn(d);return this.Jo(e,l,c,n,p).then((m=>(D(Ui,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw In(Ui,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",n),m}))}Ho(e,t,n,r,i,a){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ln})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const n=Xy[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class tb extends Zy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const a=co();return new Promise(((l,c)=>{const d=new uu;d.setWithCredentials(!0),d.listenOnce(du.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case sr.NO_ERROR:const m=d.getResponseJson();D(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case sr.TIMEOUT:D(Ee,`RPC '${e}' ${a} timed out`),c(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const g=d.getStatus();if(D(Ee,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let I=d.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const k=(function(F){const H=F.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(H)>=0?H:P.UNKNOWN})(C.status);c(new V(k,C.message))}else c(new V(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new V(P.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(Ee,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(r);D(Ee,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,n,15)}))}T_(e,t,n){const r=co(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fu(),l=pu(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const p=i.join("");D(Ee,`Creating RPC '${e}' stream ${r}: ${p}`,c);const m=a.createWebChannel(p,c);this.I_(m);let g=!1,I=!1;const C=new eb({Yo:x=>{I?D(Ee,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(g||(D(Ee,`Opening RPC '${e}' stream ${r} transport.`),m.open(),g=!0),D(Ee,`RPC '${e}' stream ${r} sending:`,x),m.send(x))},Zo:()=>m.close()}),k=(x,F,H)=>{x.listen(F,(B=>{try{H(B)}catch(re){setTimeout((()=>{throw re}),0)}}))};return k(m,ns.EventType.OPEN,(()=>{I||(D(Ee,`RPC '${e}' stream ${r} transport opened.`),C.o_())})),k(m,ns.EventType.CLOSE,(()=>{I||(I=!0,D(Ee,`RPC '${e}' stream ${r} transport closed`),C.a_(),this.E_(m))})),k(m,ns.EventType.ERROR,(x=>{I||(I=!0,In(Ee,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new V(P.UNAVAILABLE,"The operation could not be completed")))})),k(m,ns.EventType.MESSAGE,(x=>{var F;if(!I){const H=x.data[0];Y(!!H,16349);const B=H,re=(B==null?void 0:B.error)||((F=B[0])==null?void 0:F.error);if(re){D(Ee,`RPC '${e}' stream ${r} received error:`,re);const he=re.status;let ne=(function(_){const w=ce[_];if(w!==void 0)return Ku(w)})(he),E=re.message;ne===void 0&&(ne=P.INTERNAL,E="Unknown error status: "+he+" with message "+re.message),I=!0,C.a_(new V(ne,E)),m.close()}else D(Ee,`RPC '${e}' stream ${r} received:`,H),C.u_(H)}})),k(l,hu.STAT_EVENT,(x=>{x.stat===Ji.PROXY?D(Ee,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===Ji.NOPROXY&&D(Ee,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(s){return new iy(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="PersistentStream";class cd{constructor(e,t,n,r,i,a,l,c){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ld(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new V(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(uc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(D(uc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nb extends cd{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=ly(this.serializer,e),n=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?Ge(a.readTime):j.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=ao(this.serializer),t.addTarget=(function(i,a){let l;const c=a.target;if(l=to(c)?{documents:dy(i,c)}:{query:hy(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yu(i,a.resumeToken);const d=ro(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){l.readTime=Tr(i,a.snapshotVersion.toTimestamp());const d=ro(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const n=fy(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=ao(this.serializer),t.removeTarget=e,this.q_(t)}}class sb extends cd{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=uy(e.writeResults,e.commitTime),n=Ge(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=ao(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>cy(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{}class ib extends rb{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,io(t,n),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(P.UNKNOWN,i.toString())}))}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,io(t,n),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ob{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(it(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="RemoteStore";class ab{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{n.enqueueAndForget((async()=>{tn(this)&&(D(Yt,"Restarting streams for network reachability change."),await(async function(c){const d=q(c);d.Ea.add(4),await Ss(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Jr(d)})(this))}))})),this.Ra=new ob(n,r)}}async function Jr(s){if(tn(s))for(const e of s.da)await e(!0)}async function Ss(s){for(const e of s.da)await e(!1)}function ud(s,e){const t=q(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ho(t)?qo(t):On(t).O_()&&jo(t,e))}function Bo(s,e){const t=q(s),n=On(t);t.Ia.delete(e),n.O_()&&dd(t,e),t.Ia.size===0&&(n.O_()?n.L_():tn(t)&&t.Ra.set("Unknown"))}function jo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}On(s).Y_(e)}function dd(s,e){s.Va.Ue(e),On(s).Z_(e)}function qo(s){s.Va=new ty({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),On(s).start(),s.Ra.ua()}function Ho(s){return tn(s)&&!On(s).x_()&&s.Ia.size>0}function tn(s){return q(s).Ea.size===0}function hd(s){s.Va=void 0}async function lb(s){s.Ra.set("Online")}async function cb(s){s.Ia.forEach(((e,t)=>{jo(s,e)}))}async function ub(s,e){hd(s),Ho(s)?(s.Ra.ha(e),qo(s)):s.Ra.set("Unknown")}async function db(s,e,t){if(s.Ra.set("Online"),e instanceof Ju&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.Va.removeTarget(l))})(s,e)}catch(n){D(Yt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Sr(s,n)}else if(e instanceof ar?s.Va.Ze(e):e instanceof Qu?s.Va.st(e):s.Va.tt(e),!t.isEqual(j.min()))try{const n=await ad(s.localStore);t.compareTo(n)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,d)=>{const p=i.Ia.get(c);if(!p)return;i.Ia.set(c,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),dd(i,c);const m=new wt(p.target,c,d,p.sequenceNumber);jo(i,m)})),i.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){D(Yt,"Failed to raise snapshot:",n),await Sr(s,n)}}async function Sr(s,e,t){if(!Dn(e))throw e;s.Ea.add(1),await Ss(s),s.Ra.set("Offline"),t||(t=()=>ad(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{D(Yt,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Jr(s)}))}function pd(s,e){return e().catch((t=>Sr(s,t,e)))}async function Yr(s){const e=q(s),t=Vt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:So;for(;hb(e);)try{const r=await Gy(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,pb(e,r)}catch(r){await Sr(e,r)}fd(e)&&md(e)}function hb(s){return tn(s)&&s.Ta.length<10}function pb(s,e){s.Ta.push(e);const t=Vt(s);t.O_()&&t.X_&&t.ea(e.mutations)}function fd(s){return tn(s)&&!Vt(s).x_()&&s.Ta.length>0}function md(s){Vt(s).start()}async function fb(s){Vt(s).ra()}async function mb(s){const e=Vt(s);for(const t of s.Ta)e.ea(t.mutations)}async function gb(s,e,t){const n=s.Ta.shift(),r=Do.from(n,e,t);await pd(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await Yr(s)}async function yb(s,e){e&&Vt(s).X_&&await(async function(n,r){if((function(a){return Xg(a)&&a!==P.ABORTED})(r.code)){const i=n.Ta.shift();Vt(n).B_(),await pd(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Yr(n)}})(s,e),fd(s)&&md(s)}async function dc(s,e){const t=q(s);t.asyncQueue.verifyOperationInProgress(),D(Yt,"RemoteStore received new credentials");const n=tn(t);t.Ea.add(3),await Ss(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Jr(t)}async function bb(s,e){const t=q(s);e?(t.Ea.delete(2),await Jr(t)):e||(t.Ea.add(2),await Ss(t),t.Ra.set("Unknown"))}function On(s){return s.ma||(s.ma=(function(t,n,r){const i=q(t);return i.sa(),new nb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Xo:lb.bind(null,s),t_:cb.bind(null,s),r_:ub.bind(null,s),H_:db.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Ho(s)?qo(s):s.Ra.set("Unknown")):(await s.ma.stop(),hd(s))}))),s.ma}function Vt(s){return s.fa||(s.fa=(function(t,n,r){const i=q(t);return i.sa(),new sb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:fb.bind(null,s),r_:yb.bind(null,s),ta:mb.bind(null,s),na:gb.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await Yr(s)):(await s.fa.stop(),s.Ta.length>0&&(D(Yt,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,l=new zo(e,t,a,r,i);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(s,e){if(it("AsyncQueue",`${e}: ${s}`),Dn(s))return new V(P.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{static emptySet(e){return new fn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=ss(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new fn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.ga=new se(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Pn{constructor(e,t,n,r,i,a,l,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Pn(e,t,fn.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class vb{constructor(){this.queries=pc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=q(t),i=r.queries;r.queries=pc(),i.forEach(((a,l)=>{for(const c of l.Sa)c.onError(n)}))})(this,new V(P.ABORTED,"Firestore shutting down"))}}function pc(){return new en((s=>Mu(s)),Hr)}async function gd(s,e){const t=q(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(n=2):(i=new _b,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=Wo(a,`Initialization of query '${cn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Go(t)}async function yd(s,e){const t=q(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Eb(s,e){const t=q(s);let n=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(r)&&(n=!0);a.wa=r}}n&&Go(t)}function wb(s,e,t){const n=q(s),r=n.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);n.queries.delete(e)}function Go(s){s.Ca.forEach((e=>{e.next()}))}var uo,fc;(fc=uo||(uo={})).Ma="default",fc.Cache="cache";class bd{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new Pn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==uo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.key=e}}class vd{constructor(e){this.key=e}}class Ib{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=Nu(e),this.tu=new fn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new hc,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((p,m)=>{const g=r.get(p),I=zr(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;g&&I?g.data.isEqual(I.data)?C!==k&&(n.track({type:3,doc:I}),x=!0):this.su(g,I)||(n.track({type:2,doc:I}),x=!0,(c&&this.eu(I,c)>0||d&&this.eu(I,d)<0)&&(l=!0)):!g&&I?(n.track({type:0,doc:I}),x=!0):g&&!I&&(n.track({type:1,doc:g}),x=!0,(c||d)&&(l=!0)),x&&(I?(a=a.add(I),i=k?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((p,m)=>(function(I,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:x})}};return k(I)-k(C)})(p.type,m.type)||this.eu(p.doc,m.doc))),this.ou(n),r=r??!1;const l=t&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,d=c!==this.Za;return this.Za=c,a.length!==0||d?{snapshot:new Pn(this.query,e.tu,i,a,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new vd(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new _d(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ko="SyncEngine";class Tb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ab{constructor(e){this.key=e,this.hu=!1}}class Sb{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new en((l=>Mu(l)),Hr),this.Iu=new Map,this.Eu=new Set,this.du=new se(M.comparator),this.Au=new Map,this.Ru=new No,this.Vu={},this.mu=new Map,this.fu=Cn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cb(s,e,t=!0){const n=Sd(s);let r;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Ed(n,e,t,!0),r}async function Pb(s,e){const t=Sd(s);await Ed(t,e,!0,!1)}async function Ed(s,e,t,n){const r=await Ky(s.localStore,We(e)),i=r.targetId,a=s.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await Rb(s,e,i,a==="current",r.resumeToken)),s.isPrimaryClient&&t&&ud(s.remoteStore,r),l}async function Rb(s,e,t,n,r){s.pu=(m,g,I)=>(async function(k,x,F,H){let B=x.view.ru(F);B.Cs&&(B=await oc(k.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,B))));const re=H&&H.targetChanges.get(x.targetId),he=H&&H.targetMismatches.get(x.targetId)!=null,ne=x.view.applyChanges(B,k.isPrimaryClient,re,he);return gc(k,x.targetId,ne.au),ne.snapshot})(s,m,g,I);const i=await oc(s.localStore,e,!0),a=new Ib(e,i.Qs),l=a.ru(i.documents),c=As.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),d=a.applyChanges(l,s.isPrimaryClient,c);gc(s,t,d.au);const p=new Tb(e,t,a);return s.Tu.set(e,p),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function xb(s,e,t){const n=q(s),r=n.Tu.get(e),i=n.Iu.get(r.targetId);if(i.length>1)return n.Iu.set(r.targetId,i.filter((a=>!Hr(a,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lo(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Bo(n.remoteStore,r.targetId),ho(n,r.targetId)})).catch(Vn)):(ho(n,r.targetId),await lo(n.localStore,r.targetId,!0))}async function kb(s,e){const t=q(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Bo(t.remoteStore,n.targetId))}async function Lb(s,e,t){const n=Ub(s);try{const r=await(function(a,l){const c=q(a),d=te.now(),p=l.reduce(((I,C)=>I.add(C.key)),K());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let C=ot(),k=K();return c.Ns.getEntries(I,p).next((x=>{C=x,C.forEach(((F,H)=>{H.isValidDocument()||(k=k.add(F))}))})).next((()=>c.localDocuments.getOverlayedDocuments(I,C))).next((x=>{m=x;const F=[];for(const H of l){const B=Gg(H,m.get(H.key).overlayedDocument);B!=null&&F.push(new Mt(H.key,B,Pu(B.value.mapValue),Ne.exists(!0)))}return c.mutationQueue.addMutationBatch(I,d,F,l)})).next((x=>{g=x;const F=x.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(I,x.batchId,F)}))})).then((()=>({batchId:g.batchId,changes:Uu(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(a,l,c){let d=a.Vu[a.currentUser.toKey()];d||(d=new se(G)),d=d.insert(l,c),a.Vu[a.currentUser.toKey()]=d})(n,r.batchId,t),await Cs(n,r.changes),await Yr(n.remoteStore)}catch(r){const i=Wo(r,"Failed to persist write");t.reject(i)}}async function wd(s,e){const t=q(s);try{const n=await zy(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(Y(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?Y(a.hu,14607):r.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))})),await Cs(t,n,e)}catch(n){await Vn(n)}}function mc(s,e,t){const n=q(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const c=q(a);c.onlineState=l;let d=!1;c.queries.forEach(((p,m)=>{for(const g of m.Sa)g.va(l)&&(d=!0)})),d&&Go(c)})(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Vb(s,e,t){const n=q(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),i=r&&r.key;if(i){let a=new se(M.comparator);a=a.insert(i,Te.newNoDocument(i,j.min()));const l=K().add(i),c=new Kr(j.min(),new Map,new se(G),a,l);await wd(n,c),n.du=n.du.remove(i),n.Au.delete(e),Qo(n)}else await lo(n.localStore,e,!1).then((()=>ho(n,e,t))).catch(Vn)}async function Db(s,e){const t=q(s),n=e.batch.batchId;try{const r=await Hy(t.localStore,e);Td(t,n,null),Id(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Cs(t,r)}catch(r){await Vn(r)}}async function Ob(s,e,t){const n=q(s);try{const r=await(function(a,l){const c=q(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return c.mutationQueue.lookupMutationBatch(d,l).next((m=>(Y(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(d,m)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>c.localDocuments.getDocuments(d,p)))}))})(n.localStore,e);Td(n,e,t),Id(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Cs(n,r)}catch(r){await Vn(r)}}function Id(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Td(s,e,t){const n=q(s);let r=n.Vu[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function ho(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Ad(s,n)}))}function Ad(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Bo(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),Qo(s))}function gc(s,e,t){for(const n of t)n instanceof _d?(s.Ru.addReference(n.key,e),Mb(s,n)):n instanceof vd?(D(Ko,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Ad(s,n.key)):U(19791,{wu:n})}function Mb(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(D(Ko,"New document in limbo: "+t),s.Eu.add(n),Qo(s))}function Qo(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new M(Z.fromString(e)),n=s.fu.next();s.Au.set(n,new Ab(t)),s.du=s.du.insert(t,n),ud(s.remoteStore,new wt(We(ko(t.path)),n,"TargetPurposeLimboResolution",Br.ce))}}async function Cs(s,e,t){const n=q(s),r=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,c)=>{a.push(n.pu(c,e,t).then((d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){r.push(d);const m=Uo.As(c.targetId,d);i.push(m)}})))})),await Promise.all(a),n.Pu.H_(r),await(async function(c,d){const p=q(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(d,(g=>R.forEach(g.Es,(I=>p.persistence.referenceDelegate.addReference(m,g.targetId,I))).next((()=>R.forEach(g.ds,(I=>p.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))))))}catch(m){if(!Dn(m))throw m;D(Fo,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const I=p.Ms.get(g),C=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(C);p.Ms=p.Ms.insert(g,k)}}})(n.localStore,i))}async function Nb(s,e){const t=q(s);if(!t.currentUser.isEqual(e)){D(Ko,"User change. New user:",e.toKey());const n=await od(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new V(P.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Cs(t,n.Ls)}}function $b(s,e){const t=q(s),n=t.Au.get(e);if(n&&n.hu)return K().add(n.key);{let r=K();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function Sd(s){const e=q(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=wd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vb.bind(null,e),e.Pu.H_=Eb.bind(null,e.eventManager),e.Pu.yu=wb.bind(null,e.eventManager),e}function Ub(s){const e=q(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return qy(this.persistence,new Fy,e.initialUser,this.serializer)}Cu(e){return new id($o.mi,this.serializer)}Du(e){return new Jy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class Fb extends Cr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Y(this.persistence.referenceDelegate instanceof Ar,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ay(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new id((n=>Ar.mi(n,t)),this.serializer)}}class po{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vb})()}createDatastore(e){const t=Qr(e.databaseInfo.databaseId),n=(function(i){return new tb(i)})(e.databaseInfo);return(function(i,a,l,c){return new ib(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,a,l){return new ab(n,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>mc(this.syncEngine,t,0)),(function(){return cc.v()?new cc:new Yy})())}createSyncEngine(e,t){return(function(r,i,a,l,c,d,p){const m=new Sb(r,i,a,l,c,d);return p&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=q(r);D(Yt,"RemoteStore shutting down."),i.Ea.add(5),await Ss(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}po.provider={build:()=>new po};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="FirestoreClient";class Bb{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=Ao.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{D(Dt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(D(Dt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Wo(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Bi(s,e){s.asyncQueue.verifyOperationInProgress(),D(Dt,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await od(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function yc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await jb(s);D(Dt,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>dc(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>dc(e.remoteStore,r))),s._onlineComponents=e}async function jb(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){D(Dt,"Using user provided OfflineComponentProvider");try{await Bi(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;In("Error using user provided cache. Falling back to memory cache: "+t),await Bi(s,new Cr)}}else D(Dt,"Using default OfflineComponentProvider"),await Bi(s,new Fb(void 0));return s._offlineComponents}async function Pd(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(D(Dt,"Using user provided OnlineComponentProvider"),await yc(s,s._uninitializedComponentsProvider._online)):(D(Dt,"Using default OnlineComponentProvider"),await yc(s,new po))),s._onlineComponents}function qb(s){return Pd(s).then((e=>e.syncEngine))}async function Rd(s){const e=await Pd(s),t=e.eventManager;return t.onListen=Cb.bind(null,e.syncEngine),t.onUnlisten=xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kb.bind(null,e.syncEngine),t}function Hb(s,e,t={}){const n=new nt;return s.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,d){const p=new Cd({next:g=>{p.Nu(),a.enqueueAndForget((()=>yd(i,m)));const I=g.docs.has(l);!I&&g.fromCache?d.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&c&&c.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new bd(ko(l.path),p,{includeMetadataChanges:!0,qa:!0});return gd(i,m)})(await Rd(s),s.asyncQueue,e,t,n))),n.promise}function zb(s,e,t={}){const n=new nt;return s.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,d){const p=new Cd({next:g=>{p.Nu(),a.enqueueAndForget((()=>yd(i,m))),g.fromCache&&c.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new bd(l,p,{includeMetadataChanges:!0,qa:!0});return gd(i,m)})(await Rd(s),s.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="firestore.googleapis.com",_c=!0;class vc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kd,this.ssl=_c}else this.host=e.host,this.ssl=e.ssl??_c;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iy)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ag("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xd(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xr{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Ym;switch(n.type){case"firstParty":return new tg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=bc.get(t);n&&(D("ComponentProvider","Removing Datastore"),bc.delete(t),n.terminate())})(this),Promise.resolve()}}function Wb(s,e,t,n={}){var d;s=Fe(s,Xr);const r=xn(e),i=s._getSettings(),a={...i,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;r&&(tu(`https://${l}`),nu("Firestore",!0)),i.host!==kd&&i.host!==l&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:n};if(!Kt(c,a)&&(s._setSettings(c),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=Ie.MOCK_USER;else{p=Tf(n.mockUserToken,(d=s._app)==null?void 0:d.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ie(g)}s._authCredentials=new Xm(new gu(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class ae{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ws(t,ae._jsonSchema))return new ae(e,n||null,new M(Z.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:de("string",ae._jsonSchemaVersion),referencePath:de("string")};class Pt extends Mn{constructor(e,t,n){super(e,t,ko(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new M(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function fo(s,e,...t){if(s=le(s),yu("collection","path",e),s instanceof Xr){const n=Z.fromString(e,...t);return Vl(n),new Pt(s,null,n)}{if(!(s instanceof ae||s instanceof Pt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return Vl(n),new Pt(s.firestore,null,n)}}function $e(s,e,...t){if(s=le(s),arguments.length===1&&(e=Ao.newId()),yu("doc","path",e),s instanceof Xr){const n=Z.fromString(e,...t);return Ll(n),new ae(s,null,new M(n))}{if(!(s instanceof ae||s instanceof Pt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return Ll(n),new ae(s.firestore,s instanceof Pt?s.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="AsyncQueue";class wc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ld(this,"async_queue_retry"),this._c=()=>{const n=Fi();n&&D(Ec,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new nt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Dn(e))throw e;D(Ec,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,it("INTERNAL UNHANDLED ERROR: ",Ic(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=zo.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&U(47125,{Pc:Ic(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ic(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class nn extends Xr{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new wc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wc(e),this._firestoreClient=void 0,await e}}}function Gb(s,e){const t=typeof s=="object"?s:ou(),n=typeof s=="string"?s:br,r=Io(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=wf("firestore");i&&Wb(r,...i)}return r}function Jo(s){if(s._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Kb(s),s._firestoreClient}function Kb(s){var n,r,i;const e=s._freezeSettings(),t=(function(l,c,d,p){return new bg(l,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new Bb(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(_e.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ws(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:de("string",Me._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(e){if(ws(e,Ke._jsonSchema))return new Ke(e.latitude,e.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:de("string",Ke._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ws(e,Qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Qe(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qe._jsonSchemaVersion="firestore/vectorValue/1.0",Qe._jsonSchema={type:de("string",Qe._jsonSchemaVersion),vectorValues:de("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^__.*__$/;class Jb{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class Ld{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vd(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:s})}}class Xo{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vd(this.Ac)&&Qb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qr(e)}Cc(e,t,n,r=!1){return new Xo({Ac:e,methodName:t,Dc:n,path:be.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ei(s){const e=s._freezeSettings(),t=Qr(s._databaseId);return new Yb(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Dd(s,e,t,n,r,i={}){const a=s.Cc(i.merge||i.mergeFields?2:0,e,t,r);Zo("Data must be an object, but it was:",a,n);const l=Od(n,a);let c,d;if(i.merge)c=new De(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=mo(e,m,t);if(!a.contains(g))throw new V(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Nd(p,g)||p.push(g)}c=new De(p),d=a.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,d=a.fieldTransforms;return new Jb(new xe(l),c,d)}class ti extends Yo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ti}}function Xb(s,e,t,n){const r=s.Cc(1,e,t);Zo("Data must be an object, but it was:",r,n);const i=[],a=xe.empty();Ot(n,((c,d)=>{const p=ea(e,c,t);d=le(d);const m=r.yc(p);if(d instanceof ti)i.push(p);else{const g=Ps(d,m);g!=null&&(i.push(p),a.set(p,g))}}));const l=new De(i);return new Ld(a,l,r.fieldTransforms)}function Zb(s,e,t,n,r,i){const a=s.Cc(1,e,t),l=[mo(e,n,t)],c=[r];if(i.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(mo(e,i[g])),c.push(i[g+1]);const d=[],p=xe.empty();for(let g=l.length-1;g>=0;--g)if(!Nd(d,l[g])){const I=l[g];let C=c[g];C=le(C);const k=a.yc(I);if(C instanceof ti)d.push(I);else{const x=Ps(C,k);x!=null&&(d.push(I),p.set(I,x))}}const m=new De(d);return new Ld(p,m,a.fieldTransforms)}function e_(s,e,t,n=!1){return Ps(t,s.Cc(n?4:3,e))}function Ps(s,e){if(Md(s=le(s)))return Zo("Unsupported field value:",e,s),Od(s,e);if(s instanceof Yo)return(function(n,r){if(!Vd(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,r){const i=[];let a=0;for(const l of n){let c=Ps(l,r.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(s,e)}return(function(n,r){if((n=le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bg(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=te.fromDate(n);return{timestampValue:Tr(r.serializer,i)}}if(n instanceof te){const i=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Tr(r.serializer,i)}}if(n instanceof Ke)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Me)return{bytesValue:Yu(r.serializer,n._byteString)};if(n instanceof ae){const i=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mo(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Qe)return(function(a,l){return{mapValue:{fields:{[Su]:{stringValue:Cu},[_r]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Lo(l.serializer,d)}))}}}}}})(n,r);throw r.Sc(`Unsupported field value: ${Fr(n)}`)})(s,e)}function Od(s,e){const t={};return vu(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(s,((n,r)=>{const i=Ps(r,e.mc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Md(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof te||s instanceof Ke||s instanceof Me||s instanceof ae||s instanceof Yo||s instanceof Qe)}function Zo(s,e,t){if(!Md(t)||!bu(t)){const n=Fr(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function mo(s,e,t){if((e=le(e))instanceof Zr)return e._internalPath;if(typeof e=="string")return ea(s,e);throw Pr("Field path arguments must be of type string or ",s,!1,void 0,t)}const t_=new RegExp("[~\\*/\\[\\]]");function ea(s,e,t){if(e.search(t_)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Zr(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Pr(s,e,t,n,r){const i=n&&!n.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${r}`),c+=")"),new V(P.INVALID_ARGUMENT,l+s+c)}function Nd(s,e){return s.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class n_ extends $d{data(){return super.data()}}function ta(s,e){return typeof e=="string"?ea(s,e):e instanceof Zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class na{}class r_ extends na{}function Ud(s,e,...t){let n=[];e instanceof na&&n.push(e),n=n.concat(t),(function(i){const a=i.filter((c=>c instanceof sa)).length,l=i.filter((c=>c instanceof ni)).length;if(a>1||a>0&&l>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class ni extends r_{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ni(e,t,n)}_apply(e){const t=this._parse(e);return Bd(e._query,t),new Mn(e.firestore,e.converter,no(e._query,t))}_parse(e){const t=ei(e.firestore);return(function(i,a,l,c,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ac(m,p);const C=[];for(const k of m)C.push(Tc(c,i,k));g={arrayValue:{values:C}}}else g=Tc(c,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ac(m,p),g=e_(l,a,m,p==="in"||p==="not-in");return ue.create(d,p,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Fd(s,e,t){const n=e,r=ta("where",s);return ni._create(r,n,t)}class sa extends na{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sa(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const l=i.getFlattenedFilters();for(const c of l)Bd(a,c),a=no(a,c)})(e._query,t),new Mn(e.firestore,e.converter,no(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Tc(s,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ou(e)&&t.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!M.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Bl(s,new M(n))}if(t instanceof ae)return Bl(s,t._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(t)}.`)}function Ac(s,e){if(!Array.isArray(s)||s.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bd(s,e){const t=(function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class i_{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ot(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[_r].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>oe(a.doubleValue)));return new Qe(t)}convertGeoPoint(e){return new Ke(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=qr(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=xt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);Y(sd(n),9688,{name:e});const r=new ms(n.get(1),n.get(3)),i=new M(n.popFirst(5));return r.isEqual(t)||it(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gt extends $d{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ta("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gt._jsonSchema={type:de("string",Gt._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class lr extends Gt{data(e={}){return super.data(e)}}class mn{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new is(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new lr(this._firestore,this._userDataWriter,n.key,n,new is(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const c=new lr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new is(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new lr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new is(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:o_(l.type),doc:c,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ao.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function o_(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(s){s=Fe(s,ae);const e=Fe(s.firestore,nn);return Hb(Jo(e),s._key).then((t=>c_(e,s,t)))}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:de("string",mn._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};class qd extends i_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function Hd(s){s=Fe(s,Mn);const e=Fe(s.firestore,nn),t=Jo(e),n=new qd(e);return s_(s._query),zb(t,s._query).then((r=>new mn(e,n,s,r)))}function cr(s,e,t){s=Fe(s,ae);const n=Fe(s.firestore,nn),r=jd(s.converter,e);return si(n,[Dd(ei(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,Ne.none())])}function a_(s,e,t,...n){s=Fe(s,ae);const r=Fe(s.firestore,nn),i=ei(r);let a;return a=typeof(e=le(e))=="string"||e instanceof Zr?Zb(i,"updateDoc",s._key,e,t,n):Xb(i,"updateDoc",s._key,e),si(r,[a.toMutation(s._key,Ne.exists(!0))])}function zd(s){return si(Fe(s.firestore,nn),[new Vo(s._key,Ne.none())])}function l_(s,e){const t=Fe(s.firestore,nn),n=$e(s),r=jd(s.converter,e);return si(t,[Dd(ei(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,Ne.exists(!1))]).then((()=>n))}function si(s,e){return(function(n,r){const i=new nt;return n.asyncQueue.enqueueAndForget((async()=>Lb(await qb(n),r,i))),i.promise})(Jo(s),e)}function c_(s,e,t){const n=t.docs.get(e._key),r=new qd(s);return new Gt(s,r,e._key,n,new is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Ln=r})(kn),wn(new Qt("firestore",((n,{instanceIdentifier:r,options:i})=>{const a=n.getProvider("app").getImmediate(),l=new nn(new Zm(n.getProvider("auth-internal")),new ng(a,n.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(d.options.projectId,p)})(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),St(Pl,Rl,e),St(Pl,Rl,"esm2020")})();var u_="firebase",d_="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(u_,d_,"app");function Wd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h_=Wd,Gd=new vs("auth","Firebase",Wd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Eo("@firebase/auth");function p_(s,...e){Rr.logLevel<=W.WARN&&Rr.warn(`Auth (${kn}): ${s}`,...e)}function ur(s,...e){Rr.logLevel<=W.ERROR&&Rr.error(`Auth (${kn}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(s,...e){throw ra(s,...e)}function Je(s,...e){return ra(s,...e)}function Kd(s,e,t){const n={...h_(),[e]:t};return new vs("auth","Firebase",n).create(e,{appName:s.name})}function st(s){return Kd(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ra(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Gd.create(s,...e)}function $(s,e,...t){if(!s)throw ra(e,...t)}function et(s){const e="INTERNAL ASSERTION FAILED: "+s;throw ur(e),new Error(e)}function at(s,e){s||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function f_(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||xf()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=Cf()||kf()}get(){return m_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(s,e){at(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],__=new Rs(3e4,6e4);function ct(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Ze(s,e,t,n,r={}){return Jd(s,r,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const l=Es({key:s.config.apiKey,...a}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:c,...i};return Rf()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&xn(s.emulatorConfig.host)&&(d.credentials="include"),Qd.fetch()(await Yd(s,s.config.apiHost,t,l),d)})}async function Jd(s,e,t){s._canInitEmulator=!1;const n={...y_,...e};try{const r=new E_(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw er(s,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw er(s,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw er(s,"email-already-in-use",a);if(c==="USER_DISABLED")throw er(s,"user-disabled",a);const p=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Kd(s,p,d);je(s,p)}}catch(r){if(r instanceof lt)throw r;je(s,"network-request-failed",{message:String(r)})}}async function xs(s,e,t,n,r={}){const i=await Ze(s,e,t,n,r);return"mfaPendingCredential"in i&&je(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yd(s,e,t,n){const r=`${e}${t}?${n}`,i=s,a=i.config.emulator?ia(s.config,r):`${s.config.apiScheme}://${r}`;return b_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function v_(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class E_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Je(this.auth,"network-request-failed")),__.get())})}}function er(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Je(s,e,n);return r.customData._tokenResponse=t,r}function Cc(s){return s!==void 0&&s.enterprise!==void 0}class w_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return v_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function I_(s,e){return Ze(s,"GET","/v2/recaptchaConfig",ct(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(s,e){return Ze(s,"POST","/v1/accounts:delete",e)}async function xr(s,e){return Ze(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A_(s,e=!1){const t=le(s),n=await t.getIdToken(e),r=oa(n);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:ds(ji(r.auth_time)),issuedAtTime:ds(ji(r.iat)),expirationTime:ds(ji(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(s){return Number(s)*1e3}function oa(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yc(t);return r?JSON.parse(r):(ur("Failed to decode base64 JWT payload"),null)}catch(r){return ur("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Pc(s){const e=oa(s);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof lt&&S_(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function S_({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(s){var m;const e=s.auth,t=await s.getIdToken(),n=await Rn(s,xr(e,{idToken:t}));$(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(m=r.providerUserInfo)!=null&&m.length?Xd(r.providerUserInfo):[],a=R_(s.providerData,i),l=s.isAnonymous,c=!(s.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new bo(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(s,p)}async function P_(s){const e=le(s);await kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R_(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Xd(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(s,e){const t=await Jd(s,{},async()=>{const n=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,a=await Yd(s,r,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:n};return s.emulatorConfig&&xn(s.emulatorConfig.host)&&(c.credentials="include"),Qd.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function k_(s,e){return Ze(s,"POST","/v2/accounts:revokeToken",ct(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=Pc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await x_(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new gn;return n&&($(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),r&&($(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(s,e){$(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new C_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A_(this,e)}reload(){return P_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await kr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Rn(this,T_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:C,stsTokenManager:k}=t;$(m&&k,e,"internal-error");const x=gn.fromJSON(this.name,k);$(typeof m=="string",e,"internal-error"),gt(n,e.name),gt(r,e.name),$(typeof g=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),gt(i,e.name),gt(a,e.name),gt(l,e.name),gt(c,e.name),gt(d,e.name),gt(p,e.name);const F=new Ue({uid:m,auth:e,email:r,emailVerified:g,displayName:n,isAnonymous:I,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:p});return C&&Array.isArray(C)&&(F.providerData=C.map(H=>({...H}))),c&&(F._redirectEventId=c),F}static async _fromIdTokenResponse(e,t,n=!1){const r=new gn;r.updateFromServerResponse(t);const i=new Ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await kr(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Xd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new gn;l.updateFromIdToken(n);const c=new Ue({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;function tt(s){at(s instanceof Function,"Expected a class definition");let e=Rc.get(s);return e?(at(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Rc.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zd.type="NONE";const xc=Zd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(s,e,t){return`firebase:${s}:${e}:${t}`}class yn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xr(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yn(tt(xc),e,n);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||tt(xc);const a=dr(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const g=await xr(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Ue._fromGetAccountInfoResponse(e,g,p)}else m=Ue._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const c=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yn(i,e,n):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new yn(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ih(e))return"Blackberry";if(oh(e))return"Webos";if(th(e))return"Safari";if((e.includes("chrome/")||nh(e))&&!e.includes("edge/"))return"Chrome";if(rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function eh(s=Ae()){return/firefox\//i.test(s)}function th(s=Ae()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nh(s=Ae()){return/crios\//i.test(s)}function sh(s=Ae()){return/iemobile/i.test(s)}function rh(s=Ae()){return/android/i.test(s)}function ih(s=Ae()){return/blackberry/i.test(s)}function oh(s=Ae()){return/webos/i.test(s)}function aa(s=Ae()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function L_(s=Ae()){var e;return aa(s)&&!!((e=window.navigator)!=null&&e.standalone)}function V_(){return Lf()&&document.documentMode===10}function ah(s=Ae()){return aa(s)||rh(s)||oh(s)||ih(s)||/windows phone/i.test(s)||sh(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(s,e=[]){let t;switch(s){case"Browser":t=kc(Ae());break;case"Worker":t=`${kc(Ae())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(s,e={}){return Ze(s,"GET","/v2/passwordPolicy",ct(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=6;class N_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??M_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lc(this),this.idTokenSubscription=new Lc(this),this.beforeStateQueue=new D_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xr(this,{idToken:e}),n=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(n=c.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(st(this));const t=e?le(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O_(this),t=new N_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await k_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,r);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&p_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nt(s){return le(s)}class Lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ff(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U_(s){ri=s}function ch(s){return ri.loadJS(s)}function F_(){return ri.recaptchaEnterpriseScript}function B_(){return ri.gapiScript}function j_(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class q_{constructor(){this.enterprise=new H_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class H_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const z_="recaptcha-enterprise",uh="NO_RECAPTCHA";class W_{constructor(e){this.type=z_,this.auth=Nt(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{I_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new w_(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(c=>{l(c)})})}function r(i,a,l){const c=window.grecaptcha;Cc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(uh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new q_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{n(this.auth).then(l=>{if(!t&&Cc(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=F_();c.length!==0&&(c+=l),ch(c).then(()=>{r(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Vc(s,e,t,n=!1,r=!1){const i=new W_(s);let a;if(r)a=uh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Lr(s,e,t,n,r){var i;if((i=s._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Vc(s,e,t,t==="getOobCode");return n(s,a)}else return n(s,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){`${t}`;const l=await Vc(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(s,e){const t=Io(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Kt(i,e??{}))return r;je(r,"already-initialized")}return t.initialize({options:e})}function K_(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Q_(s,e,t){const n=Nt(s);$(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=dh(e),{host:a,port:l}=J_(e),c=l===null?"":`:${l}`,d={url:`${i}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){$(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),$(Kt(d,n.config.emulator)&&Kt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,xn(a)?(tu(`${i}//${a}${c}`),nu("Auth",!0)):Y_()}function dh(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function J_(s){const e=dh(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:Dc(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:Dc(a)}}}function Dc(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Y_(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function X_(s,e){return Ze(s,"POST","/v1/accounts:update",e)}async function Z_(s,e){return Ze(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(s,e){return xs(s,"POST","/v1/accounts:signInWithPassword",ct(s,e))}async function hh(s,e){return Ze(s,"POST","/v1/accounts:sendOobCode",ct(s,e))}async function tv(s,e){return hh(s,e)}async function nv(s,e){return hh(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(s,e){return xs(s,"POST","/v1/accounts:signInWithEmailLink",ct(s,e))}async function rv(s,e){return xs(s,"POST","/v1/accounts:signInWithEmailLink",ct(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends la{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new _s(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _s(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lr(e,t,"signInWithPassword",ev);case"emailLink":return sv(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lr(e,n,"signUpPassword",Z_);case"emailLink":return rv(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(s,e){return xs(s,"POST","/v1/accounts:signInWithIdp",ct(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="http://localhost";class Xt extends la{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new Xt(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,bn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:iv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Es(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function av(s){const e=es(ts(s)).link,t=e?es(ts(e)).deep_link_id:null,n=es(ts(s)).deep_link_id;return(n?es(ts(n)).link:null)||n||t||e||s}class ca{constructor(e){const t=es(ts(e)),n=t.apiKey??null,r=t.oobCode??null,i=ov(t.mode??null);$(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=av(e);try{return new ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.providerId=sn.PROVIDER_ID}static credential(e,t){return _s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ca.parseLink(t);return $(n,"argument-error"),_s._fromEmailAndCode(e,n.code,n.tenantId)}}sn.PROVIDER_ID="password";sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends ks{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _t.credential(t,n)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ks{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ks{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Et.credential(t,n)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(s,e){return xs(s,"POST","/v1/accounts:signUp",ct(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ue._fromIdTokenResponse(e,n,r),a=Oc(n);return new Zt({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Oc(n);return new Zt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Oc(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends lt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Vr(e,t,n,r)}}function fh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(s,i,e,n):i})}async function cv(s,e,t=!1){const n=await Rn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Zt._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(s,e,t=!1){const{auth:n}=s;if(Oe(n.app))return Promise.reject(st(n));const r="reauthenticate";try{const i=await Rn(s,fh(n,r,e,s),t);$(i.idToken,n,"internal-error");const a=oa(i.idToken);$(a,n,"internal-error");const{sub:l}=a;return $(s.uid===l,n,"user-mismatch"),Zt._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(s,e,t=!1){if(Oe(s.app))return Promise.reject(st(s));const n="signIn",r=await fh(s,n,e),i=await Zt._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function uv(s,e){return gh(Nt(s),e)}async function dv(s,e){return mh(le(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(s){const e=Nt(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hv(s,e,t){const n=Nt(s);await Lr(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",nv)}async function pv(s,e,t){if(Oe(s.app))return Promise.reject(st(s));const n=Nt(s),a=await Lr(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&yh(s),c}),l=await Zt._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(l.user),l}function fv(s,e,t){return Oe(s.app)?Promise.reject(st(s)):uv(le(s),sn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&yh(s),n})}async function mv(s,e){const t=le(s),r={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()},{email:i}=await tv(t.auth,r);i!==s.email&&await s.reload()}function gv(s,e){return yv(le(s),null,e)}async function yv(s,e,t){const{auth:n}=s,i={idToken:await s.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const a=await Rn(s,X_(n,i));await s._updateTokensIfNecessary(a,!0)}function bv(s,e,t,n){return le(s).onIdTokenChanged(e,t,n)}function _v(s,e,t){return le(s).beforeAuthStateChanged(e,t)}function vv(s,e,t,n){return le(s).onAuthStateChanged(e,t,n)}function Mc(s){return le(s).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1e3,wv=10;class _h extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ah(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);V_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wv):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_h.type="LOCAL";const Iv=_h;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vh.type="SESSION";const Eh=vh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new ii(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,i)),c=await Tv(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const d=ua("",20);r.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function Sv(s){Ye().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Cv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pv(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function Rv(){return wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firebaseLocalStorageDb",xv=1,Or="firebaseLocalStorage",Th="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oi(s,e){return s.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function kv(){const s=indexedDB.deleteDatabase(Ih);return new Ls(s).toPromise()}function _o(){const s=indexedDB.open(Ih,xv);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Or,{keyPath:Th})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Or)?e(n):(n.close(),await kv(),e(await _o()))})})}async function Nc(s,e,t){const n=oi(s,!0).put({[Th]:e,value:t});return new Ls(n).toPromise()}async function Lv(s,e){const t=oi(s,!1).get(e),n=await new Ls(t).toPromise();return n===void 0?null:n.value}function $c(s,e){const t=oi(s,!0).delete(e);return new Ls(t).toPromise()}const Vv=800,Dv=3;class Ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Dv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(Rv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Cv(),!this.activeServiceWorker)return;this.sender=new Av(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await Nc(e,Dr,"1"),await $c(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Lv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=oi(r,!1).getAll();return new Ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ah.type="LOCAL";const Ov=Ah;new Rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(s,e){return e?tt(e):($(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends la{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nv(s){return gh(s.auth,new da(s),s.bypassAuthState)}function $v(s){const{auth:e,user:t}=s;return $(t,e,"internal-error"),mh(t,new da(s),s.bypassAuthState)}async function Uv(s){const{auth:e,user:t}=s;return $(t,e,"internal-error"),cv(t,new da(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nv;case"linkViaPopup":case"linkViaRedirect":return Uv;case"reauthViaPopup":case"reauthViaRedirect":return $v;default:je(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new Rs(2e3,1e4);class pn extends Sh{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fv.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="pendingRedirect",hr=new Map;class jv extends Sh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const n=await qv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qv(s,e){const t=Wv(e),n=zv(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function Hv(s,e){hr.set(s._key(),e)}function zv(s){return tt(s._redirectPersistence)}function Wv(s){return dr(Bv,s.config.apiKey,s.name)}async function Gv(s,e,t=!1){if(Oe(s.app))return Promise.reject(st(s));const n=Nt(s),r=Mv(n,e),a=await new jv(n,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=600*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ch(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(e))}saveEventToCache(e){this.cachedEventUids.add(Uc(e)),this.lastProcessedEventTime=Date.now()}}function Uc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Ch({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jv(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ch(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(s,e={}){return Ze(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function eE(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Yv(s);for(const t of e)try{if(tE(t))return}catch{}je(s,"unauthorized-domain")}function tE(s){const e=yo(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Zv.test(t))return!1;if(Xv.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Rs(3e4,6e4);function Fc(){const s=Ye().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function sE(s){return new Promise((e,t)=>{var r,i,a;function n(){Fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fc(),t(Je(s,"network-request-failed"))},timeout:nE.get()})}if((i=(r=Ye().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Ye().gapi)!=null&&a.load)n();else{const l=j_("iframefcb");return Ye()[l]=()=>{gapi.load?n():t(Je(s,"network-request-failed"))},ch(`${B_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw pr=null,e})}let pr=null;function rE(s){return pr=pr||sE(s),pr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new Rs(5e3,15e3),oE="__/auth/iframe",aE="emulator/auth/iframe",lE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uE(s){const e=s.config;$(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?ia(e,aE):`https://${s.config.authDomain}/${oE}`,n={apiKey:e.apiKey,appName:s.name,v:kn},r=cE.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Es(n).slice(1)}`}async function dE(s){const e=await rE(s),t=Ye().gapi;return $(t,s,"internal-error"),e.open({where:document.body,url:uE(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lE,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const a=Je(s,"network-request-failed"),l=Ye().setTimeout(()=>{i(a)},iE.get());function c(){Ye().clearTimeout(l),r(n)}n.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,fE=600,mE="_blank",gE="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(s,e,t,n=pE,r=fE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c={...hE,width:n.toString(),height:r.toString(),top:i,left:a},d=Ae().toLowerCase();t&&(l=nh(d)?mE:t),eh(d)&&(e=e||gE,c.scrollbars="yes");const p=Object.entries(c).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(L_(d)&&l!=="_self")return bE(e||"",l),new Bc(null);const m=window.open(e||"",l,p);$(m,s,"popup-blocked");try{m.focus()}catch{}return new Bc(m)}function bE(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="__/auth/handler",vE="emulator/auth/handler",EE=encodeURIComponent("fac");async function jc(s,e,t,n,r,i){$(s.config.authDomain,s,"auth-domain-config-required"),$(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:kn,eventId:r};if(e instanceof ph){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",Uf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof ks){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}s.tenantId&&(a.tid=s.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await s._getAppCheckToken(),d=c?`#${EE}=${encodeURIComponent(c)}`:"";return`${wE(s)}?${Es(l).slice(1)}${d}`}function wE({config:s}){return s.emulator?ia(s,vE):`https://${s.authDomain}/${_E}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class IE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=Gv,this._overrideRedirectResult=Hv}async _openPopup(e,t,n,r){var a;at((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await jc(e,t,n,yo(),r);return yE(e,i,ua())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await jc(e,t,n,yo(),r);return Sv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await dE(e),n=new Qv(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qi,{type:qi},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[qi];i!==void 0&&t(!!i),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ah()||th()||aa()}}const TE=IE;var qc="@firebase/auth",Hc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CE(s){wn(new Qt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lh(s)},d=new $_(n,r,i,c);return K_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),wn(new Qt("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(n=>new AE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(qc,Hc,SE(s)),St(qc,Hc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=300,RE=eu("authIdTokenMaxAge")||PE;let zc=null;const xE=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>RE)return;const r=t==null?void 0:t.token;zc!==r&&(zc=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kE(s=ou()){const e=Io(s,"auth");if(e.isInitialized())return e.getImmediate();const t=G_(s,{popupRedirectResolver:TE,persistence:[Ov,Iv,Eh]}),n=eu("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=xE(i.toString());_v(t,a,()=>a(t.currentUser)),bv(t,l=>a(l))}}const r=Xc("auth");return r&&Q_(t,`http://${r}`),t}function LE(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}U_({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Je("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",LE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CE("Browser");const VE={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},Ph=iu(VE),Ve=Gb(Ph),yt=kE(Ph),we={masterKey:null,async generateKey(s){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(s),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async setMasterKey(s){this.masterKey=await this.generateKey(s)},async encryptData(s,e=null){const t=e||this.masterKey;if(!t)throw new Error("Frase maestra no inicializada.");const n=new TextEncoder,r=crypto.getRandomValues(new Uint8Array(12)),i=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},t,n.encode(JSON.stringify(s)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(i))),iv:btoa(String.fromCharCode(...r))}},async decryptData(s){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");const e=new Uint8Array(atob(s.iv).split("").map(r=>r.charCodeAt(0))),t=new Uint8Array(atob(s.ciphertext).split("").map(r=>r.charCodeAt(0))),n=await crypto.subtle.decrypt({name:"AES-GCM",iv:e},this.masterKey,t);return JSON.parse(new TextDecoder().decode(n))}},zt={getCurrentUser(){return yt.currentUser},onAuthStateChanged(s){return vv(yt,s)},async login(s,e){try{const n=(await fv(yt,s,e)).user;if(!n.emailVerified)throw await Mc(yt),new Error("Debes verificar tu correo electrónico antes de entrar.");return n}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(s,e){try{const n=(await pv(yt,s,e)).user;return await mv(n),await cr($e(Ve,"users",n.uid),{email:s,createdAt:new Date().toISOString(),emailVerified:!1}),n}catch(t){throw new Error("Error en registro: "+t.message)}},async logout(){return Mc(yt)}},Q={get _masterKey(){return we.masterKey},async initDB(){return!0},authenticate(s,e){return zt.login(s,e)},signup(s,e){return zt.signup(s,e)},logout(){return we.masterKey=null,zt.logout()},getCurrentUser(){return zt.getCurrentUser()},onAuthStateChanged(s){return zt.onAuthStateChanged(s)},async setMasterKey(s){return we.setMasterKey(s)},async encryptData(s){return we.encryptData(s)},async decryptData(s){return we.decryptData(s)},async save(s,e){const t=this.getCurrentUser();if(!t&&s!=="users")throw new Error("Usuario no autenticado.");const n=JSON.parse(JSON.stringify(e));n.userId=t?t.uid:s==="users"?n.id:null,`${s}${n.id}`;try{return await cr($e(Ve,s,n.id),n),!0}catch(r){throw console.error("Error Firestore:",r),new Error("Error al guardar en la nube: "+r.message)}},async getOne(s,e){if(!e)return null;try{const t=$e(Ve,s,e),n=await go(t);if(n.exists()){let r=n.data();if(r.isEncrypted)if(we.masterKey)try{r.content=await we.decryptData(r.content)}catch{r.decryptionError=!0,r.content=[]}else r.decryptionError=!0,r.content=[];return r=this._hydrateDocument(r),r}else return null}catch(t){return console.error("[STORAGE] Error getOne:",t),null}},async getAll(s){const e=this.getCurrentUser();if(!e)return[];try{const t=Ud(fo(Ve,s),Fd("userId","==",e.uid)),n=await Hd(t),r=[];for(const i of n.docs){let a=i.data();if(a.isEncrypted&&we.masterKey)try{a.content=await we.decryptData(a.content)}catch{a.decryptionError=!0}a=this._hydrateDocument(a),r.push(a)}return r.sort((i,a)=>a.id.localeCompare(i.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(s,e){try{await zd($e(Ve,s,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(s){return s&&Array.isArray(s.content)&&s.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,n)=>Number(t)-Number(n)).map(t=>e.value[t]),delete e.storageMode)}),s},async hasSecurityConfigured(){const s=this.getCurrentUser();return s?(await go($e(Ve,"security",s.uid))).exists():!1},async saveSecurityVerifier(s){const e=this.getCurrentUser();if(!e)throw console.error("[STORAGE] Error: Intento de guardar verificado sin sesión activa."),new Error("No hay una sesión de usuario activa.");try{return await cr($e(Ve,"security",e.uid),{userId:e.uid,verifier:s,updatedAt:new Date().toISOString()}),!0}catch(t){throw console.error("[STORAGE] Error guardando verificado:",t),t}},async changeMasterPhrase(s,e){const t=we.masterKey;try{await we.setMasterKey(s);const r=(await this.getAll("doc")).filter(l=>l.isEncrypted),i=await we.generateKey(e);for(let l of r){const c=l.content;l.content=await we.encryptData(c,i),Array.isArray(l.content),await cr($e(Ve,"doc",l.id),l)}we.masterKey=i;const a=await we.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(a),{success:!0}}catch(n){throw console.error("Error en cambio de frase:",n),we.masterKey=t,new Error("Fallo en el cambio de frase. Intente nuevamente.")}}},fr={validatePassword(s){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(s)},async signup(s,e){if(!this.validatePassword(e))throw new Error("La contraseña no cumple los requisitos.");try{return await Q.signup(s,e),{requiresVerification:!0}}catch(t){throw console.error("Error en Auth.signup:",t),t.message.includes("email-already-in-use")?new Error("Este correo ya está registrado."):t}},async login(s,e){return await Q.authenticate(s,e)},async recoverPassword(s){if(!s)throw new Error("Por favor ingresa tu correo electrónico.");try{return await hv(yt,s),!0}catch(e){let t="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(t="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(t="El correo no es válido."),new Error(t)}}},Rh={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){document.getElementById("user-none").style.display="none",document.getElementById("pass-none").style.display="none",this.appContent.style.display="none",this.container.style.display="block",this.container.innerHTML=`
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow-lg p-4" style="width: 400px;">
                <h3 class="text-center mb-4"><i class="fa-solid fa-shield-halved text-primary"></i> Acceso</h3>
                
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#l-pane">Login</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#s-pane">Registro</button></li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="l-pane">
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-l" class="form-control" placeholder="Correo electrónico">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-l" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-l"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        
                        <div class="text-end mb-3">
                            <a href="#" id="btn-forgot" class="small text-decoration-none text-primary fw-bold">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button id="btn-login" class="btn btn-primary w-100 fw-bold">Entrar</button>
                    </div>

                    <div class="tab-pane fade" id="s-pane">
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-s" class="form-control" placeholder="Correo">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-s" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-s"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <small class="text-muted d-block mb-3" style="font-size: 0.75rem;">
                            <i class="fa-solid fa-circle-info me-1"></i>Requisito: 8+ caracteres, Mayúscula, Número y Símbolo.
                        </small>
                        <button id="btn-signup" class="btn btn-success w-100 fw-bold">Crear Cuenta</button>
                    </div>
                </div>

                <div id="auth-err" class="alert alert-danger mt-3 small shadow-sm border-0" style="display:none;"></div>
                <div id="auth-success" class="alert alert-success mt-3 small shadow-sm border-0" style="display:none;"></div>
            </div>
        </div>`,this._bindAuthEvents()},_bindAuthEvents(){document.getElementById("btn-login").onclick=async()=>{const e=document.getElementById("email-l").value.trim(),t=document.getElementById("pass-l").value;if(!e||!t)return this._showError("Ingrese correo y contraseña.");try{await Q.authenticate(e,t),location.reload()}catch(n){this._showError(n.message)}},document.getElementById("btn-signup").onclick=async()=>{const e=document.getElementById("email-s").value.trim(),t=document.getElementById("pass-s").value;if(!fr.validatePassword(t))return this._showError("La contraseña no cumple los requisitos.");const n=document.getElementById("btn-signup"),r=n.innerHTML;n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',n.disabled=!0;try{await fr.signup(e,t),this._showSuccess(`
          <b>¡Cuenta creada!</b><br>
          Hemos enviado un enlace de confirmación a <b>${e}</b>.<br>
          Por favor verifícalo antes de iniciar sesión.
        `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(i){this._showError(i.message)}finally{n.innerHTML=r,n.disabled=!1}};const s=document.getElementById("btn-forgot");s&&(s.onclick=async e=>{e.preventDefault();const t=document.getElementById("email-l"),n=t.value.trim();if(!n)return t.classList.add("is-invalid"),t.focus(),this._showError("Escribe tu correo en el campo de arriba para enviarte el enlace.");t.classList.remove("is-invalid");const r=s.innerHTML;s.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',s.style.pointerEvents="none";try{await fr.recoverPassword(n),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${n} para restablecer la clave.`)}catch(i){this._showError(i.message)}finally{s.innerHTML=r,s.style.pointerEvents="auto"}})},initLogout(){const s=document.getElementById("btn-logout-link");s&&(s.onclick=async e=>{e.preventDefault();try{await Q.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},_showError(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");e&&(e.textContent=s,e.style.display="block"),t&&(t.style.display="none")},_showSuccess(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");t&&(t.innerHTML=s,t.style.display="block"),e&&(e.style.display="none")}},vo={async saveTemplate(s){if(!s.title.trim())throw new Error("Título obligatorio");if(s.elements.length===0)throw new Error("Diseño vacío");s.updatedAt=new Date().toISOString(),await Q.save("tpl",s)},async deleteTemplate(s){await Q.delete("tpl",s)},async loadTemplates(){return await Q.getAll("tpl")}},Wc={handlers:{},currentSearch:"",itemsPerPage:5,currentPage:1,init(s){this.handlers=s,this.cacheDOM(),this.bindEvents(),this.injectImportButton(),window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.container.offsetParent!==null&&(this.calculateItemsPerPage(),this.render())},100)})},cacheDOM(){this.container=document.getElementById("designer-list-view"),this.tableBody=document.getElementById("tpl-table-body"),this.pagination=document.getElementById("tpl-pagination"),this.searchInput=document.getElementById("tpl-search"),this.btnCreate=document.getElementById("btn-go-create-tpl")},calculateItemsPerPage(){if(this.container.offsetParent===null)return;const s=window.innerHeight;let e=0;const t=this.tableBody.querySelector("tr");if(t)e=t.offsetHeight;else{const c=document.createElement("tr");c.className="align-middle",c.innerHTML='<td class="py-3"><h3>👤</h3></td><td>Badges</td><td>Title</td><td>Actions</td>',c.style.visibility="hidden",c.style.position="absolute",this.tableBody.appendChild(c),e=c.offsetHeight,c.remove()}e<50&&(e=80);const r=this.tableBody.getBoundingClientRect().top,a=s-r-90;let l=Math.floor(a/e);this.itemsPerPage=Math.max(l,4),`${s}${e}${this.itemsPerPage}`},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.searchInput.addEventListener("input",s=>{this.currentSearch=s.target.value.toLowerCase(),this.currentPage=1,this.render()})},async render(){this.calculateItemsPerPage();const s=await Q.getAll("tpl");s.sort((i,a)=>{const l=new Date(i.updatedAt||0);return new Date(a.updatedAt||0)-l});const e=s.filter(i=>i.title.toLowerCase().includes(this.currentSearch)),t=Math.ceil(e.length/this.itemsPerPage);this.currentPage>t&&t>0&&(this.currentPage=t),this.currentPage<1&&(this.currentPage=1);const n=(this.currentPage-1)*this.itemsPerPage,r=e.slice(n,n+this.itemsPerPage);this.renderTable(r),this.renderPagination(t)},renderTable(s){this.tableBody.innerHTML=s.map(e=>{const t=e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"";return`
        <tr class="align-middle">
            <td class="text-center py-3"><h3>${e.icon}</h3></td>
            <td><span class="badge rounded-pill bg-body-secondary text-body border px-3">${e.category}</span></td>
            <td>
              <div class="fw-bold text-body">
                 ${e.title} 
                ${e.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
              </div>
              <div class="text-body-secondary small text-truncate" style="max-width: 250px;">
                ${e.description||""}
                ${t?`<span class="opacity-75 ms-1">(${t})</span>`:""}
              </div>
            </td>
            <td class="text-end pe-3">
              <div class="btn-group shadow-sm border rounded">
                <button class="btn btn-sm btn-body btn-create-doc border-end" data-id="${e.id}" title="Crear Documento">
                   <i class="fa-solid fa-file-circle-plus text-success"></i>
                </button>
                <button class="btn btn-sm btn-body btn-edit" data-id="${e.id}" title="Editar Plantilla">
                    <i class="fa-solid fa-pen-to-square text-primary"></i>
                </button>
                <button class="btn btn-sm btn-body btn-export" data-id="${e.id}" title="Descargar JSON">
                    <i class="fa-solid fa-download text-secondary"></i>
                </button>
                <button class="btn btn-sm btn-body btn-del" data-id="${e.id}" title="Eliminar Plantilla">
                    <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
              </div>
            </td>
        </tr>`}).join("")||'<tr><td colspan="4" class="text-center py-5 text-muted">No se encontraron plantillas.</td></tr>',this._bindListActions(s)},renderPagination(s){let e="";if(s>1)for(let t=1;t<=s;t++)e+=`<li class="page-item ${t===this.currentPage?"active":""} mx-1">
            <button class="page-link rounded-circle border-0 shadow-sm px-3" data-page="${t}">${t}</button>
            </li>`;this.pagination.innerHTML=e,this.pagination.querySelectorAll("button").forEach(t=>{t.onclick=()=>{this.currentPage=parseInt(t.dataset.page),this.render()}})},_bindListActions(s){this.tableBody.querySelectorAll(".btn-create-doc").forEach(e=>{e.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:e.dataset.id}}))}}),this.tableBody.querySelectorAll(".btn-edit").forEach(e=>{e.onclick=()=>this.handlers.onEditTemplate(e.dataset.id)}),this.tableBody.querySelectorAll(".btn-del").forEach(e=>{e.onclick=async()=>{confirm("¿Eliminar plantilla? Se borrarán sus documentos.")&&(await vo.deleteTemplate(e.dataset.id),this.render())}}),this.tableBody.querySelectorAll(".btn-export").forEach(e=>{e.onclick=()=>{const t=s.find(n=>n.id===e.dataset.id);t&&this._downloadJSON(t)}})},_downloadJSON(s){const e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t;const r=s.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`tpl_${r}_${s.id}.json`,n.click(),URL.revokeObjectURL(t)},injectImportButton(){if(this.btnCreate&&!document.getElementById("btn-import-tpl")){const s=document.createElement("div");s.className="d-flex gap-2";const e=document.createElement("input");e.type="file",e.id="input-import-tpl",e.accept=".json",e.style.display="none";const t=document.createElement("button");t.id="btn-import-tpl",t.className="btn btn-outline-dark shadow-sm",t.innerHTML='<i class="fa-solid fa-file-import"></i> Importar',this.btnCreate.parentNode.appendChild(s),s.appendChild(e),s.appendChild(t),s.appendChild(this.btnCreate),t.onclick=()=>e.click(),e.onchange=n=>this._handleImport(n)}},_handleImport(s){const e=s.target.files[0];if(!e)return;const t=new FileReader;t.onload=async n=>{try{const r=JSON.parse(n.target.result);if(!r.title||!Array.isArray(r.elements))throw new Error("Plantilla inválida");r.id=`tpl_${Date.now()}`,r.title=`${r.title} (Importada)`,await vo.saveTemplate(r),alert("Plantilla importada correctamente."),this.render()}catch(r){alert("Error al importar: "+r.message)}s.target.value=""},t.readAsText(e)}},ha={dragSrcEl:null,init(s,e=null,t=null){s.setAttribute("draggable","false"),s.addEventListener("mousedown",n=>{if(e){const r=n.target.closest(e);s.setAttribute("draggable",r?"true":"false")}else s.setAttribute("draggable","true")}),s.addEventListener("mouseup",()=>{s.setAttribute("draggable","false")}),s.addEventListener("dragstart",n=>this._handleDragStart(n,s)),s.addEventListener("dragend",n=>this._handleDragEnd(n,s)),s.addEventListener("dragover",n=>this._handleDragOver(n,s)),s.addEventListener("dragenter",n=>this._handleDragEnter(n,s)),s.addEventListener("dragleave",n=>this._handleDragLeave(n,s)),s.addEventListener("drop",n=>this._handleDrop(n,s,t))},_handleDragStart(s,e){if(e.getAttribute("draggable")==="false"){s.preventDefault();return}this.dragSrcEl=e,s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(s,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(s,e){return s.preventDefault&&s.preventDefault(),s.dataTransfer.dropEffect="move",!1},_handleDragEnter(s,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(s,e){e.classList.remove("border-top-primary-3")},_handleDrop(s,e,t){if(s.stopPropagation&&s.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const n=e.parentNode,r=e.getBoundingClientRect(),i=s.clientY-r.top,a=e.clientHeight/2;i>a?n.insertBefore(this.dragSrcEl,e.nextSibling):n.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(s){s&&Array.from(s.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},tr={handlers:{},currentId:null,init(s){this.handlers=s,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.catInput&&(this.catInput.onchange=s=>{const e=s.target.options[s.target.selectedIndex].dataset.icon;this.iconInput.value=e})},renderSidebar(){const s=document.getElementById("tpl-elements");s.innerHTML=Object.entries(Le).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-grow-1 py-2" id="add-${e}" style="min-width: 140px;">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
         </button>`).join(""),Object.keys(Le).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._addToCanvas(t)}})},_addToCanvas(s){const e=document.createElement("div");e.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",e.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="comp-content"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(s),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),ha.init(e,".drag-handle"),this.canvas.appendChild(e)},async load(s){const e=await Q.getOne("tpl",s);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,this.canvas.innerHTML="",e.elements.forEach(t=>{const n=document.createElement(t.tag);n.setData&&n.setData(t),this._addToCanvas(n)}))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.encInput.checked=!1},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(n=>{const r=n.querySelector("#comp-content");return r?r.firstElementChild:null}).filter(n=>n&&typeof n.getData=="function"),t={id:this.currentId||`tpl_${Date.now()}`,title:this.titleInput.value.trim(),description:this.descInput.value,category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(n=>n.getData())};try{await vo.saveTemplate(t),alert("Plantilla guardada correctamente"),this.handlers.onSaveSuccess()}catch(n){alert("Error al guardar: "+n.message)}},getAvailableVariables(s,e=null){const t=[];if(this.canvas.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(r=>{if(!r.closest("setting-table")&&typeof r.getData=="function"){const i=r.getData();t.push({id:i.id,title:i.title||"(Sin Título)",type:"general"})}}),s==="table"&&e){const r=document.getElementById(e);if(r&&typeof r.getData=="function"){const i=r.getData();i.columns&&i.columns.forEach(a=>{["setting-number","setting-currency","setting-percentage"].includes(a.tag)&&t.push({id:a.id,title:`[Col] ${a.title}`,type:"column"})})}}return s==="general"&&this.canvas.querySelectorAll("setting-table").forEach(i=>{const a=i.getData();a.columns&&a.columns.forEach(l=>{l.total&&t.push({id:`TOTAL_${i.id}_${l.id}`,title:`SUM: ${a.title} > ${l.title}`,type:"total"})})}),t}},Mr={init(){Wc.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:s=>{this.showEditor(),tr.load(s)}}),tr.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){Wc.render()},showEditor(){document.getElementById("designer-list-view").style.display="none",document.getElementById("designer-editor-view").style.display="block",tr.reset()},showList(){document.getElementById("designer-list-view").style.display="block",document.getElementById("designer-editor-view").style.display="none"},getAvailableVariables(s,e){return tr.getAvailableVariables(s,e)}},Zn={itemsPerPage:5,currentPage:1,currentSearch:"",handlers:{},container:null,tableBody:null,pagination:null,searchInput:null,_resizeTimer:null,init(s){this.handlers=s,this.cacheDOM(),this.bindEvents(),window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.container&&this.container.offsetParent!==null&&(this.calculateItemsPerPage(),this.render())},100)})},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.pagination=document.getElementById("doc-pagination"),this.searchInput=document.getElementById("doc-search"),this.tableBody||console.error("❌ [DocumentList] Error crítico: No se encontró #doc-table-body en el DOM.")},calculateItemsPerPage(){if(!this.container||this.container.offsetParent===null)return;const s=window.innerHeight;let e=60;if(this.tableBody){const l=this.tableBody.querySelector("tr");l&&(e=l.offsetHeight)}e<40&&(e=60);const n=(this.tableBody?this.tableBody.getBoundingClientRect():{top:200}).top,i=s-n-90;let a=Math.floor(i/e);this.itemsPerPage=Math.max(a,5)},bindEvents(){const s=document.getElementById("btn-go-create-doc");s&&(s.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput&&this.searchInput.addEventListener("input",e=>{this.currentSearch=e.target.value.toLowerCase(),this.currentPage=1,this.render()})},async render(){if(this.tableBody||this.cacheDOM(),!this.tableBody)return;this.calculateItemsPerPage();const s=await Q.getAll("doc")||[];s.sort((a,l)=>{const c=new Date(a.updatedAt||a.date||0);return new Date(l.updatedAt||l.date||0)-c});const e=this.currentSearch.split(" ").filter(a=>a),t=s.filter(a=>{const l=`${a.title} ${a.templateTitle||""}`.toLowerCase();return e.every(c=>l.includes(c))}),n=Math.ceil(t.length/this.itemsPerPage);this.currentPage>n&&n>0&&(this.currentPage=n),this.currentPage<1&&(this.currentPage=1);const r=(this.currentPage-1)*this.itemsPerPage,i=t.slice(r,r+this.itemsPerPage);this.renderTable(i),this.renderPagination(n)},renderTable(s){this.tableBody&&(this.tableBody.innerHTML=s.map(e=>{let t="";return e.isEncrypted&&(t=Q._masterKey&&!e.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i></span>'),`
        <tr class="align-middle border-light-subtle">
            <td class="py-3" nowrap>
              <div class="small text-body-secondary"><i class="fa-regular fa-calendar-alt me-1"></i>${new Date(e.date).toLocaleDateString()}</div>
            </td>
            <td>
              <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
                <i class="fa-solid fa-layer-group me-1 small"></i>${e.templateTitle||"General"}
              </span>
            </td>
            <td>
                <div class="text-body fw-semibold d-flex align-items-center">
                    ${e.title} ${t}
                </div>
            </td>
            <td class="text-end pe-3">
              <div class="btn-group shadow-sm border rounded">
                <button class="btn btn-sm btn-body border-0 btn-view-doc px-3" data-id="${e.id}" title="Visualizar">
                  <i class="fa-solid fa-eye text-primary"></i>
                </button>
                <button class="btn btn-sm btn-body border-0 border-start btn-del-doc px-3" data-id="${e.id}" title="Eliminar">
                  <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
              </div>
            </td>
        </tr>`}).join("")||'<tr><td colspan="4" class="text-center py-5 text-muted">No hay documentos registrados.</td></tr>',this.tableBody.querySelectorAll(".btn-view-doc").forEach(e=>e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)),this.tableBody.querySelectorAll(".btn-del-doc").forEach(e=>e.onclick=async()=>{confirm("¿Eliminar documento definitivamente?")&&(await Q.delete("doc",e.dataset.id),this.render())}))},renderPagination(s){if(!this.pagination)return;let e="";if(s>1)for(let t=1;t<=s;t++)e+=`<li class="page-item ${t===this.currentPage?"active":""} mx-1">
            <button class="page-link rounded-circle border-0 shadow-sm px-3" data-page="${t}">${t}</button>
            </li>`;this.pagination.innerHTML=e,this.pagination.querySelectorAll("button").forEach(t=>{t.onclick=()=>{this.currentPage=parseInt(t.dataset.page),this.render()}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},nr={async print(s,e){let t=await Q.getOne("doc",s);if(!t)return alert("Documento no encontrado.");if(t.isEncrypted&&t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const n=await Q.getOne("tpl",t.templateId);if(!n)return alert("La plantilla base no se encuentra.");let r=document.getElementById("print-iframe");r||(r=document.createElement("iframe"),r.id="print-iframe",r.style.position="fixed",r.style.left="-10000px",r.style.top="0",r.style.width="100%",r.style.height="100%",document.body.appendChild(r));const i=r.contentWindow.document,a=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let l="";for(let c=1;c<=12;c++){const d=c/12*100;l+=`.col-${c} { width: ${d}%; } `}i.open(),i.write(`
        <html>
          <head>
            <title>${t.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js"><\/script>
            <style>
              body { background: white; font-family: sans-serif; margin: 0; padding: 20px; }
              .print-header { display: flex; justify-content: space-between; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 2px solid #dee2e6; }
              
              /* Sistema de Grid Flexible */
              .row { display: flex; flex-wrap: wrap; margin: 0 -4px; }
              [class^="col-"] { padding: 4px; box-sizing: border-box; }
              
              /* Clases generadas dinámicamente (col-1 a col-12) */
              ${l}

              h1 { margin: 0; font-size: 1.5rem; color: #212529; }
              p { margin: 0; color: #6c757d; }
            </style>
          </head>
          <body>
            <div class="print-header">
              <div><h1>${t.title}</h1><p>${n.title}</p></div>
              <div style="text-align:right"><div>${a}</div><div style="font-weight:bold; font-size: 0.8rem; text-transform: uppercase;">${e}</div></div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),i.close(),r.onload=()=>{const c=i.getElementById("print-content");n.elements.forEach(d=>{if(d.hidePrint)return;const p=t.content.find(k=>k.fieldId===d.id);if(d.tag==="setting-section"){const k=i.createElement("div");k.className="col-12 mt-3 mb-2",k.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">${d.title}</h4>`,c.appendChild(k);return}if(!p)return;const m=d.tag.replace("setting-","printer-"),g=document.createElement(m);g.setAttribute("title",d.title),d.currency&&g.setAttribute("currency",d.currency),d.options&&g.setAttribute("options",d.options),d.columns&&g.setAttribute("columns",JSON.stringify(d.columns)),g.setAttribute("edit-value",Array.isArray(p.value)?JSON.stringify(p.value):p.value),g.setAttribute("type",e);const I=d.spanP||12;g.setAttribute("span-print",I),p.bold&&g.setAttribute("bold",""),p.italic&&g.setAttribute("italic",""),g.setAttribute("color",p.color||"black");const C=i.createElement("div");C.className=`col-${I}`,C.appendChild(g),c.appendChild(C)}),setTimeout(()=>{r.contentWindow.focus(),r.contentWindow.print()},500)}},async copyToWhatsApp(s){let e=await Q.getOne("doc",s);if(!e)return alert("Error recuperando documento.");if(e.isEncrypted&&e.decryptionError)return alert("El documento está cifrado. Debe abrirlo primero en el visor.");const t=await Q.getOne("tpl",e.templateId);let n=`*${e.title.toUpperCase()}*
_${t.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`;t.elements.forEach(r=>{if(r.hideWhatsapp)return;if(r.tag==="setting-section"){n+=`
*--- ${r.title.toUpperCase()} ---*
`;return}const i=e.content.find(c=>c.fieldId===r.id);if(!i)return;const a=r.tag.replace("setting-","viewer-"),l=document.createElement(a);if(r.currency&&l.setAttribute("currency",r.currency),r.columns&&(l.columns=r.columns),l.setAttribute("title",r.title),l.setAttribute("edit-value",typeof i.value=="object"?JSON.stringify(i.value):i.value),a==="viewer-table"&&r.columns&&(l.columns=r.columns,l.rows=Array.isArray(i.value)?i.value:[]),typeof l.getWhatsapp=="function"){const c=l.getWhatsapp();c&&c.trim()!==""&&(n+=c+`
`)}}),n+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(n).then(()=>alert(`📋 ¡Contenido copiado al portapapeles!
Listo para pegar en WhatsApp.`)).catch(()=>alert("Error al acceder al portapapeles."))}},Gc={handlers:{},currentDocId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(s){if(!s)return;let e=await Q.getOne("doc",s);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&e.decryptionError){const r=prompt("🔒 Documento cifrado. Ingrese su Frase Maestra:");if(!r)return this.handlers.onBack();try{if(await Q.setMasterKey(r),e=await Q.getOne("doc",s),e.decryptionError)return alert("⛔ Frase incorrecta."),this.handlers.onBack()}catch{return this.handlers.onBack()}}const t=await Q.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",t.elements.some(r=>r.tag==="setting-section")?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(e,t)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(e,t))},_renderFlatView(s,e){s.content&&s.content.forEach(t=>{const n=e.elements.find(i=>i.id===t.fieldId);if(!n)return;const r=this._createViewerComponent(n,t);this.canvas.appendChild(r)})},_renderStructuredView(s,e){const t=[];let n={title:"Principal",elements:[]};e.elements.forEach(l=>{if(l.tag==="setting-section")(n.elements.length>0||n.title!=="Principal")&&t.push(n),n={title:l.title||"Sección",elements:[]};else{const c=s.content.find(d=>d.fieldId===l.id);c&&n.elements.push({def:l,data:c})}}),t.push(n);const r=`nav-viewer-${s.id}`;let i=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${r}" role="tablist">`,a=`<div class="tab-content tab-content-custom" id="${r}Content">`;t.forEach((l,c)=>{const d=`view-sec-${c}-${s.id}`,p=c===0;i+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${p?"active":""}" data-bs-toggle="tab" data-bs-target="#v-tab-${d}" type="button">
            ${l.title}
          </button>
        </li>`,a+=`
        <div class="tab-pane fade ${p?"show active":""}" id="v-tab-${d}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#v-coll-${d}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${l.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${d}" class="collapse d-md-block ${p?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),this.canvas.innerHTML=i+"</ul>"+a+"</div>",t.forEach((l,c)=>{const d=`view-sec-${c}-${s.id}`,p=this.canvas.querySelector(`#v-coll-${d} .row`);l.elements.forEach(m=>{const g=this._createViewerComponent(m.def,m.data);p.appendChild(g)})})},_createViewerComponent(s,e){const t=s.tag.replace("setting-","viewer-"),n=document.createElement(t);return s.currency&&n.setAttribute("currency",s.currency),s.options&&n.setAttribute("options",s.options),n.setData&&n.setData({...e,title:s.title,spanEV:s.spanEV,columns:s.columns||[],currency:s.currency,options:s.options}),n},_renderHeaderActions(s){this.headerActions&&(this.headerActions.innerHTML=`
        <button id="btn-edit-mode" class="btn btn-warning shadow-sm"><i class="fa-solid fa-pen"></i> Editar</button>
        <button id="btn-whatsapp" class="btn btn-success shadow-sm text-bg-success"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
        <div class="dropdown d-inline-block">
             <button class="btn btn-secondary dropdown-toggle shadow-sm" type="button" data-bs-toggle="dropdown">
                <i class="fa-solid fa-print"></i> Imprimir
             </button>
             <ul class="dropdown-menu dropdown-menu-end shadow">
                <li><a class="dropdown-item" href="#" id="print-v"><i class="fa-solid fa-eye me-2"></i>Visual</a></li>
                <li><a class="dropdown-item" href="#" id="print-c"><i class="fa-solid fa-compress me-2"></i>Compacto</a></li>
                <li><a class="dropdown-item" href="#" id="print-f"><i class="fa-solid fa-book-open-reader me-2"></i>Fácil Lectura</a></li>
             </ul>
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(s.id),document.getElementById("btn-whatsapp").onclick=()=>nr.copyToWhatsApp(s.id),document.getElementById("print-v").onclick=e=>{e.preventDefault(),nr.print(s.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),nr.print(s.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),nr.print(s.id,"Facil Lectura")})}},DE={container:null,init(s){s&&(this.container=s,this._bindEvents(),setTimeout(()=>this.run(),200))},run(){if(!this.container)return;const s=Array.from(this.container.querySelectorAll("[is-calculated]"));s.length!==0&&s.forEach(e=>{const t=e.getAttribute("formula");if(t)try{const n=t.replace(/@\{([^}]+)\}/g,(i,a)=>this._getVariableValue(a)),r=new Function(`"use strict"; return (${n})`)();if(isFinite(r)&&!isNaN(r)){const i=e.querySelector("input");if(i){const a=Math.round(r*100)/100;i.value!=a&&(i.value=a,e.setAttribute("edit-value",a),i.dispatchEvent(new Event("input",{bubbles:!0})))}}}catch(n){console.warn(`[CalculationEngine] Error en ${e.id}:`,n.message)}})},_getVariableValue(s){if(s.startsWith("TOTAL_")){const n=document.getElementById(s);return n&&parseFloat(n.dataset.rawValue)||0}const e=document.getElementById(`input-${s}`);if(!e)return 0;let t=e.value;return typeof t=="string"&&(t=t.replace(/,/g,".")),parseFloat(t)||0},_bindEvents(){this.container.addEventListener("input",s=>{s.target.readOnly||this.run()}),this.container.addEventListener("table-change",()=>{setTimeout(()=>this.run(),50)}),this.container.addEventListener("paste",()=>{setTimeout(()=>this.run(),50)})}},Hi={handlers:{},currentDocId:null,currentTplId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(s){this.currentDocId=null,this.currentTplId=s,this.titleInput.value="",this.titleInput.readOnly=!1;const e=document.getElementById("doc-template-selector");e&&(e.style.display="none"),await this.renderCanvas(s,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(s){const e=await Q.getOne("doc",s);e&&(this.currentDocId=s,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(s,e){const t=await Q.getOne("tpl",s);if(!t)return;this.canvas.innerHTML="",t.elements.filter(i=>i.tag==="setting-section").length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(t.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),t.elements.forEach(i=>{const a=this._createComponent(i,e);this.canvas.appendChild(a)})),DE.init(this.canvas)},_renderStructuredUI(s,e){const t=[];let n={title:"Principal",elements:[]};s.forEach(l=>{l.tag==="setting-section"?((n.elements.length>0||n.title!=="Principal")&&t.push(n),n={title:l.title||"Sección",elements:[]}):n.elements.push(l)}),t.push(n);const r=`nav-tabs-${this.currentTplId}`;let i=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${r}" role="tablist">`,a=`<div class="tab-content tab-content-custom" id="${r}Content">`;t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,p=c===0;i+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${p?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${d}" type="button">
            ${l.title}
          </button>
        </li>`,a+=`
        <div class="tab-pane fade ${p?"show active":""} group-pane" id="tab-pane-${d}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${d}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${l.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${d}" class="collapse d-md-block ${p?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=i+"</ul>"+a+"</div>",t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,p=this.canvas.querySelector(`#collapse-${d} .row`);l.elements.forEach(m=>{const g=this._createComponent(m,e);p.appendChild(g)})})},_createComponent(s,e){const t=s.tag.replace("setting-","editor-"),n=document.createElement(t);n.setAttribute("field-id",s.id),s.formula&&n.setAttribute("formula",s.formula),s.isCalculated&&n.setAttribute("is-calculated","true");const r=e.find(a=>a.fieldId===s.id),i={id:s.id,title:s.title,spanEV:s.spanEV||12,options:s.options,value:r?r.value:"",bold:r?r.bold:!1,italic:r?r.italic:!1,color:r?r.color:"black",columns:s.columns,currency:s.currency,formula:s.formula,isCalculated:s.isCalculated,prependRows:s.prependRows,apiUrl:s.apiUrl,apiPath:s.apiPath};return n.setData&&n.setData(i),n},setupSaveButton(s){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary"><i class="fa-solid fa-save"></i> ${s}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const s=this.titleInput.value.trim();if(!s){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert("⚠️ Imposible Guardar: El documento requiere un Título.");return}const e=this.currentDocId||`doc_${Date.now()}`,t=await Q.getOne("tpl",this.currentTplId),n=Array.from(this.canvas.querySelectorAll("[field-id]")),r=[];let i=!0;if(n.forEach(l=>{typeof l.validate=="function"&&!l.validate()&&(i=!1),typeof l.getData=="function"&&r.push(l.getData())}),!i)return alert("Revise los campos marcados en rojo.");const a={id:e,title:s,templateId:this.currentTplId,templateTitle:t?t.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:r,isEncrypted:t&&t.encrypted||!1};try{await Q.save("doc",a),this.handlers.onSave()}catch(l){alert("Error crítico al guardar: "+l.message)}}},_n={init(){Zn.init({onViewDocument:async s=>{Zn.hide(),this.showEditorView(),await Gc.render(s)},onNavigateToDesigner:()=>{const s=document.getElementById("nav-designer");s?s.click():alert("Navegue al diseñador para crear una plantilla.")}}),Gc.init({onEdit:s=>{Hi.loadForEditing(s)},onBack:()=>{this.showListView()}}),Hi.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),Zn.render()},async createFromTemplate(s){Zn.hide(),this.showEditorView(),await Hi.loadForCreation(s)},showListView(){document.getElementById("doc-list-view").style.display="block",document.getElementById("doc-editor-view").style.display="none",Zn.render()},showEditorView(){document.getElementById("doc-list-view").style.display="none",document.getElementById("doc-editor-view").style.display="block"}},Kc={async exportData(){try{const s=await Q.getAll("tpl"),e=await Q.getAll("doc"),t={templates:s,documents:e,exportDate:new Date().toISOString(),version:"2.0 (Firebase)"},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=`respaldo_mg_cloud_${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(r)}catch(s){console.error("Error exportando:",s),alert("Error al generar el respaldo: "+s.message)}},async importData(s){const e=new FileReader;e.onload=async t=>{try{const n=JSON.parse(t.target.result);if(!n.templates&&!n.documents&&!n.tpl&&!n.doc)throw new Error("Formato de archivo no reconocido.");const r=n.templates||[],i=n.documents||[];let a=0;for(const c of r)c.updatedAt||(c.updatedAt=new Date().toISOString()),await Q.save("tpl",c),a++;let l=0;for(const c of i)await Q.save("doc",c),l++;alert(`Proceso finalizado.
Plantillas importadas: ${a}
Documentos importados: ${l}`),location.reload()}catch(n){console.error(n),alert("Error crítico al importar: "+n.message)}},e.readAsText(s)}},vn={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="modal-setup-security" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-dark">
              <h5 class="modal-title"><i class="fa-solid fa-key me-2"></i>Seguridad de Alta Privacidad</h5>
            </div>
            <div class="modal-body p-4">
              <p class="text-dark fw-bold">Configure su Frase Maestra:</p>
              <p class="text-muted small">
                Esta frase es su llave de cifrado. <strong>No se almacena en ninguna base de datos</strong>. 
                Si la pierde, los documentos cifrados serán irrecuperables.
              </p>
              
              <div class="mb-3">
                <label class="small fw-bold">Escriba su Frase (Mínimo 15 caracteres):</label>
                <textarea id="setup-master-phrase" 
                          class="form-control font-monospace border-primary shadow-none" 
                          rows="2"
                          autocomplete="off" 
                          autocorrect="off" 
                          autocapitalize="none" 
                          spellcheck="false"
                          placeholder="Ej: El sol brilla intensamente sobre la montaña azul..."></textarea>
                <div class="form-text text-primary" style="font-size: 0.7rem;">
                    <i class="fa-solid fa-info-circle"></i> Los gestores de contraseñas no detectarán este campo.
                </div>
              </div>

              <div id="setup-error" class="text-danger small mb-0" style="display:none;"></div>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button id="btn-save-security" class="btn btn-dark w-100 py-2 fw-bold">
                ACTIVAR CIFRADO LOCAL
              </button>
            </div>
          </div>
        </div>
      </div>
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const n=document.getElementById("setup-master-phrase").value.trim(),r=document.getElementById("setup-error");if(n.length<15){r.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",r.style.display="block";return}try{await Q.setMasterKey(n);const i=await Q.encryptData({check:"VERIFIED"});await Q.saveSecurityVerifier(i),t.hide(),e.remove(),alert("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.")}catch(i){console.error("Error al inicializar seguridad:",i),r.textContent="Error al inicializar el motor de seguridad.",r.style.display="block"}}},renderChangePhraseUI(s){const e=`
      <div class="card border-danger mt-4 shadow-sm">
        <div class="card-header text-bg-danger small fw-bold">
          <i class="fa-solid fa-triangle-exclamation me-1"></i> Zona de Seguridad: Cambiar Frase Maestra
        </div>
        <div class="card-body">
          <p class="text-muted" style="font-size: 0.75rem;">
            Este proceso descifrará sus documentos con la frase vieja y los re-cifrará con la nueva. 
            <strong>No cierre la ventana durante el proceso.</strong>
          </p>
          
          <div class="mb-2">
            <label class="small fw-bold">Frase Maestra Anterior:</label>
            <input autocomplete="off" spellcheck="false" type="text" id="old-phrase" class="form-control form-control-sm shadow-none">
          </div>
          
          <div class="mb-3">
            <label class="small fw-bold">Nueva Frase Maestra:</label>
            <input autocomplete="off" spellcheck="false" type="text" id="new-phrase" class="form-control form-control-sm shadow-none" placeholder="Mínimo 15 caracteres">
          </div>

          <div id="reencrypt-progress" class="progress mb-3" style="display:none; height: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%"></div>
          </div>

          <button id="btn-reencrypt" class="btn btn-danger btn-sm w-100 fw-bold">
            RE-CIFRAR DOCUMENTOS Y ACTUALIZAR
          </button>
        </div>
      </div>
    `;s.innerHTML=e,document.getElementById("btn-reencrypt").onclick=async()=>{const t=document.getElementById("old-phrase").value.trim(),n=document.getElementById("new-phrase").value.trim(),r=document.getElementById("btn-reencrypt");if(!t||n.length<15)return alert("La nueva frase debe tener al menos 15 caracteres.");if(confirm("¿Está seguro de cambiar su frase maestra? Se procesarán todos los documentos cifrados."))try{r.disabled=!0,r.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando registros...',document.getElementById("reencrypt-progress").style.display="flex",await Q.changeMasterPhrase(t,n),alert("Éxito: Todos los documentos han sido actualizados con la nueva frase."),location.reload()}catch(i){alert("Error: "+i.message),r.disabled=!1,r.innerHTML="RE-CIFRAR DOCUMENTOS Y ACTUALIZAR",document.getElementById("reencrypt-progress").style.display="none"}}}},hn={async validateCredentials(s,e,t){const n=`https://api.github.com/repos/${s}/${e}`;if(!(await fetch(n,{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales inválidas o repositorio no encontrado/privado sin acceso.");return!0},async uploadFile(s,e,t,n){const r=await this._toBase64(e),i=t.replace(/^\//,"").replace(/\/$/,""),a=i?`${i}/${n}`:n,l=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${a}`,c={message:`Subido desde DocEngine: ${n}`,content:r},d=await fetch(l,{method:"PUT",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(c)});if(!d.ok){const p=await d.json();throw new Error(p.message||"Error al subir archivo a GitHub")}return await d.json()},async deleteFile(s,e,t){const n=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${e}`,r={message:"Eliminado desde DocEngine",sha:t};if(!(await fetch(n,{method:"DELETE",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(s){return new Promise((e,t)=>{const n=new FileReader;n.readAsDataURL(s),n.onload=()=>{const r=n.result.split(",")[1];e(r)},n.onerror=r=>t(r)})},async fetchSecureFile(s,e){const t=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${e}`,n=await fetch(t,{headers:{Authorization:`Bearer ${s.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!n.ok)throw new Error(`Error descargando archivo (${n.status}): Verifique permisos o ruta.`);return await n.blob()}},It={async saveUserConfig(s,e){const t=$e(Ve,"users",s);await a_(t,{githubConfig:e}).catch(async n=>{throw console.error("Error guardando config github",n),n})},async getUserConfig(s){const e=$e(Ve,"users",s),t=await go(e);return t.exists()&&t.data().githubConfig||null},async addFileRecord(s){const e=fo(Ve,"github_files");return(await l_(e,s)).id},async listFiles(s){const e=fo(Ve,"github_files"),t=Ud(e,Fd("userId","==",s)),n=await Hd(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r},async deleteFileRecord(s){await zd($e(Ve,"github_files",s))}},xh={init(){this.container=document.getElementById("view-settings"),this.render()},render(){this.container.innerHTML=`
      <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold text-body-secondary"><i class="fa-solid fa-gears me-2"></i>Configuración</h3>
        </div>

        <div class="row g-4">
            <div class="col-md-6">
                
                <div class="card shadow-sm border-0 mb-4">
                    <div class="card-header text-bg-dark fw-bold py-3">
                        <i class="fa-solid fa-sliders me-2 text-bg-dark"></i>Preferencias Generales
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="small text-muted fw-bold">Tema Visual (Bootswatch API)</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="fa-solid fa-palette"></i></span>
                                <select id="cfg-theme-api" class="form-select form-select-sm">
                                    <option value="" disabled selected>Cargando temas...</option>
                                </select>
                            </div>
                            <div class="form-text small mb-3">Selecciona un estilo para cambiar la apariencia inmediatamente.</div>
                        </div>
                        <label class="small text-muted fw-bold">Máximo Caracteres Whatsapp (MCW)</label>
                        <div class="input-group mb-2">
                            <span class="input-group-text border-end-0"><i class="fa-brands fa-whatsapp text-success"></i></span>
                            <input autocomplete="off" spellcheck="false" type="number" id="cfg-mcw" class="form-control border-start-0" placeholder="35">
                        </div>
                        <div class="form-text small mb-3">Si una tabla supera este ancho, se enviará como lista para facilitar la lectura en móviles.</div>
                        <button id="btn-save-prefs" class="btn btn-dark w-100 btn-sm">Guardar Preferencias (MCW)</button>
                    </div>
                </div>

                <div class="card shadow-sm border-0 mb-4">
                    <div class="card-header bg-warning fw-bold py-3"><i class="fa-solid fa-user-shield me-2 text-bg-warning"></i>Seguridad de Acceso</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="small text-muted">Contraseña Actual</label>
                            <input autocomplete="off" spellcheck="false" type="password" id="current-pass" class="form-control form-control-sm">
                        </div>
                        <div class="mb-3">
                            <label class="small text-muted">Nueva Contraseña</label>
                            <input autocomplete="off" spellcheck="false" type="password" id="new-pass" class="form-control form-control-sm">
                        </div>
                        <button id="btn-change-pass" class="btn btn-warning w-100 btn-sm fw-bold">Actualizar Clave de Acceso</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                
                <div id="security-config-wrapper" class="mb-4"></div>

                <div id="github-settings-wrapper"></div>

                <div class="card shadow-sm border-0 mt-4">
                    <div class="card-header text-bg-primary fw-bold py-3"><i class="fa-solid fa-database me-2 text-bg-primary"></i>Datos y Respaldos</div>
                    <div class="card-body">
                        <button id="btn-export" class="btn btn-outline-primary w-100 mb-3">
                            <i class="fa-solid fa-download me-2"></i>Descargar Respaldo Completo (.json)
                        </button>
                        
                        <div class="border-top pt-3">
                            <label class="small text-muted fw-bold mb-2">Restaurar Datos</label>
                            <input autocomplete="off" spellcheck="false" type="file" id="import-file" class="form-control form-control-sm" accept=".json">
                            <div class="form-text small mt-1 text-danger"><i class="fa-solid fa-exclamation-triangle me-1"></i>Esto sobrescribirá los datos actuales.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader();const s=document.getElementById("security-config-wrapper");vn&&vn.renderChangePhraseUI&&vn.renderChangePhraseUI(s),this.renderGithubSettings("github-settings-wrapper")},_initThemeLoader(){const s=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(t=>t.json()).then(t=>{const n=t.themes;s.innerHTML="";const r=document.createElement("option");r.value="default",r.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(r.selected=!0),s.append(r),n.forEach((i,a)=>{const l=document.createElement("option");l.value=a,l.textContent=i.name+(i.description?` (${i.description})`:"");const c=i.cssCdn||i.css;e===c&&(l.selected=!0),s.append(l)}),s.addEventListener("change",i=>{let a="";if(i.target.value==="default")a="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=n[i.target.value];a=l.cssCdn||l.css}this._applyThemeWithPreload(a,s)})}).catch(t=>{console.error("Error cargando temas:",t),s.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(s,e){e.options[e.selectedIndex].text,e.disabled=!0;const t=document.createElement("div");t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,t.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"});const n=document.createElement("link");n.rel="stylesheet",n.href=s,n.onload=()=>{document.getElementById("theme-link").setAttribute("href",s),localStorage.setItem("doc_engine_theme_url",s),setTimeout(()=>{e.disabled=!1,t.style.opacity="0",setTimeout(()=>{t.remove(),n.remove()},300)},200)},n.onerror=()=>{alert("Error al descargar el tema seleccionado."),e.disabled=!1,t.remove(),n.remove()},document.head.appendChild(n)},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),alert("Preferencias guardadas.")},document.getElementById("btn-export").onclick=()=>Kc.exportData(),document.getElementById("import-file").onchange=e=>{e.target.files.length>0&&Kc.importData(e.target.files[0])};const s=document.getElementById("btn-change-pass");s.onclick=async()=>{const e=document.getElementById("current-pass").value,t=document.getElementById("new-pass").value;if(!e||!t)return alert("Complete ambos campos.");if(!fr.validatePassword(t))return alert("La contraseña no cumple requisitos (8+ chars, Mayús, Num).");const n=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const r=yt.currentUser;if(!r)throw new Error("Sin sesión.");const i=sn.credential(r.email,e);await dv(r,i),await gv(r,t),alert("Contraseña actualizada correctamente."),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(r){console.error(r),alert(r.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+r.message)}finally{s.disabled=!1,s.innerHTML=n}}},_loadCurrentPrefs(){const s=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=s||"35"},renderGithubSettings(s){const e=document.getElementById(s);if(!e)return;const t=`
      <div class="card mb-4 mt-4">
        <div class="card-header bg-dark text-white">
          <i class="fa-brands fa-github"></i> Integración GitHub (Storage)
        </div>
        <div class="card-body">
          <p class="small text-muted">Configura un repositorio personal para almacenar tus archivos externamente.</p>
          <form id="github-config-form">
            <div class="mb-3">
              <label class="form-label">Usuario GitHub</label>
              <input autocomplete="off" spellcheck="false" type="text" id="set-gh-user" class="form-control" placeholder="Ej: miusuario" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Repositorio</label>
              <input autocomplete="off" spellcheck="false" type="text" id="set-gh-repo" class="form-control" placeholder="Ej: mis-documentos-docengine" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Personal Access Token (Classic)</label>
              <input autocomplete="off" spellcheck="false" type="password" id="set-gh-token" class="form-control" placeholder="ghp_xxxxxxxxxxxx" required>
              <div class="form-text">El token debe tener permisos de <code>repo</code> completo.</div>
            </div>
            <div id="gh-config-msg" class="mb-2"></div>
            <button type="submit" class="btn btn-primary">
              <i class="fa-solid fa-check"></i> Verificar y Guardar
            </button>
            <button type="button" id="btn-gh-disconnect" class="btn btn-outline-danger d-none">Desconectar</button>
          </form>
        </div>
      </div>
    `,n=document.createElement("div");n.innerHTML=t,e.appendChild(n);const r=zt.getCurrentUser();r&&It.getUserConfig(r.uid).then(i=>{i&&(document.getElementById("set-gh-user").value=i.githubUser,document.getElementById("set-gh-repo").value=i.githubRepo,document.getElementById("set-gh-token").value=i.githubToken,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))}),document.getElementById("github-config-form").addEventListener("submit",async i=>{i.preventDefault();const a=document.getElementById("gh-config-msg"),l=i.target.querySelector('button[type="submit"]'),c=document.getElementById("set-gh-user").value.trim(),d=document.getElementById("set-gh-repo").value.trim(),p=document.getElementById("set-gh-token").value.trim();try{l.disabled=!0,a.innerHTML='<span class="text-info">Verificando conexión con GitHub...</span>',await hn.validateCredentials(c,d,p),await It.saveUserConfig(r.uid,{githubUser:c,githubRepo:d,githubToken:p}),a.innerHTML='<span class="text-success fw-bold">¡Conexión Exitosa! Configuración guardada. Recarga la página para ver el menú.</span>',window.location.reload()}catch(m){a.innerHTML=`<span class="text-danger">Error: ${m.message}</span>`}finally{l.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{confirm("¿Desvincular cuenta?")&&(await It.saveUserConfig(r.uid,null),window.location.reload())})}},OE={config:null,async init(s){const e=document.getElementById(s);if(!e)return;const t=zt.getCurrentUser();if(t){if(this.config=await It.getUserConfig(t.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=`
      <div class="container py-4">
        <h2 class="mb-4"><i class="fa-brands fa-github"></i> Gestor de Archivos GitHub</h2>
        
        <div class="card shadow-sm mb-4">
          <div class="card-header bg-primary text-white">Subir Nuevo Archivo</div>
          <div class="card-body">
            <form id="gh-upload-form" class="row g-3">
              <div class="col-md-4">
                <label class="form-label">Título</label>
                <input autocomplete="off" spellcheck="false" type="text" id="gh-title" class="form-control" placeholder="Ej: Foto Perfil" required>
              </div>
              <div class="col-md-3">
                <label class="form-label">Carpeta</label>
                <input autocomplete="off" spellcheck="false" type="text" id="gh-folder" class="form-control" placeholder="Ej: media">
              </div>
              <div class="col-md-5">
                <label class="form-label">Archivo</label>
                <input autocomplete="off" spellcheck="false" type="file" id="gh-file" class="form-control" required>
              </div>
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-success" id="gh-btn-upload">
                  <i class="fa-solid fa-cloud-arrow-up"></i> Subir a GitHub
                </button>
              </div>
            </form>
            <div id="gh-upload-status" class="mt-2"></div>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-header">Mis Archivos</div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light">
                  <tr>
                    <th>Título</th>
                    <th>Carpeta</th>
                    <th>Archivo</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="gh-files-list">
                  <tr><td colspan="4" class="text-center p-3">Cargando archivos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghImageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ghImageModalLabel">Vista Previa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center bg-light position-relative" style="min-height: 200px; display:flex; align-items:center; justify-content:center;">
              <div id="gh-loading-img" class="spinner-border text-primary" role="status" style="display:none;"></div>
              <img id="gh-preview-img" src="" class="img-fluid rounded shadow-sm" style="max-height: 70vh; display:none;">
            </div>
          </div>
        </div>
      </div>

      <div id="gh-audio-container" class="card shadow-lg border-0" 
           style="position: fixed; bottom: 20px; right: 20px; z-index: 1050; width: 320px; display: none;">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
          <small class="fw-bold text-truncate" id="gh-audio-title" style="max-width: 240px;">Cargando...</small>
          <button type="button" class="btn-close btn-close-white btn-sm" id="gh-close-audio"></button>
        </div>
        <div class="card-body bg-secondary p-2 text-center">
            <div id="gh-loading-audio" class="spinner-border spinner-border-sm text-light mb-2" style="display:none;"></div>
            <audio id="gh-audio-player" controls class="w-100" style="height: 30px;"></audio>
        </div>
      </div>
    `,document.getElementById("gh-upload-form").addEventListener("submit",n=>this.handleUpload(n,t)),document.getElementById("gh-close-audio").addEventListener("click",()=>{const n=document.getElementById("gh-audio-player");n.pause(),n.src="",document.getElementById("gh-audio-container").style.display="none"}),this.loadFilesList(t.uid)}},async handleUpload(s,e){s.preventDefault();const t=document.getElementById("gh-btn-upload"),n=document.getElementById("gh-upload-status"),r=document.getElementById("gh-title").value.trim(),i=document.getElementById("gh-folder").value.trim()||"root",l=document.getElementById("gh-file").files[0];if(l)try{t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Subiendo...',n.innerHTML="";const c=r.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+l.name.split(".").pop(),d=await hn.uploadFile(this.config,l,i,c),p={userId:e.uid,title:r,folder:i,fileName:c,originalName:l.name,path:d.content.path,sha:d.content.sha,htmlUrl:d.content.html_url,downloadUrl:d.content.download_url,createdAt:new Date().toISOString()};await It.addFileRecord(p),document.getElementById("gh-upload-form").reset(),n.innerHTML='<div class="alert alert-success">Archivo subido correctamente.</div>',this.loadFilesList(e.uid)}catch(c){console.error(c),n.innerHTML=`<div class="alert alert-danger">Error: ${c.message}</div>`}finally{t.disabled=!1,t.innerHTML='<i class="fa-solid fa-cloud-arrow-up"></i> Subir a GitHub'}},async loadFilesList(s){const e=document.getElementById("gh-files-list");try{const t=await It.listFiles(s);if(t.length===0){e.innerHTML='<tr><td colspan="4" class="text-center p-3 text-muted">No hay archivos subidos aún.</td></tr>';return}e.innerHTML=t.map(n=>{const r=n.fileName.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","webp","svg"].includes(r),a=["mp3","wav","ogg","m4a"].includes(r);let l="";i?l=`
              <button class="btn btn-sm btn-outline-primary btn-view-img me-1" 
                data-path="${n.path}" 
                data-title="${n.title}" title="Ver Imagen">
                <i class="fa-regular fa-eye"></i>
              </button>`:a&&(l=`
              <button class="btn btn-sm btn-outline-info btn-play-audio me-1" 
                data-path="${n.path}" 
                data-title="${n.title}" title="Reproducir">
                <i class="fa-solid fa-play"></i>
              </button>`);const c=`
            <button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" 
                data-path="${n.path}" 
                data-name="${n.originalName||n.fileName}" 
                title="Descargar">
                <i class="fa-solid fa-download"></i>
            </button>`;return`
            <tr>
              <td class="fw-bold">${n.title}</td>
              <td><span class="badge bg-secondary">${n.folder}</span></td>
              <td>${n.fileName}</td>
              <td class="text-end">
                ${l}
                ${c}
                <button class="btn btn-sm btn-danger btn-delete-gh" data-id="${n.id}" data-path="${n.path}" data-sha="${n.sha}" title="Eliminar">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          `}).join(""),document.querySelectorAll(".btn-view-img").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.title,a=document.getElementById("ghImageModal"),l=document.getElementById("gh-preview-img"),c=document.getElementById("gh-loading-img"),d=document.getElementById("ghImageModalLabel");d.textContent=i,l.style.display="none",c.style.display="block",l.src="";const p=new bootstrap.Modal(a);p.show();try{const m=await hn.fetchSecureFile(this.config,r),g=URL.createObjectURL(m);l.src=g,l.onload=()=>{c.style.display="none",l.style.display="block"}}catch(m){console.error(m),alert("Error cargando imagen: "+m.message),p.hide()}})}),document.querySelectorAll(".btn-play-audio").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.title,a=document.getElementById("gh-audio-container"),l=document.getElementById("gh-audio-player"),c=document.getElementById("gh-audio-title"),d=document.getElementById("gh-loading-audio");a.style.display="block",c.textContent="Cargando "+i+"...",d.style.display="inline-block",l.style.display="none",l.pause();try{const p=await hn.fetchSecureFile(this.config,r),m=URL.createObjectURL(p);l.src=m,l.style.display="block",d.style.display="none",c.textContent=i,l.play().catch(g=>console.log("Autoplay bloqueado",g))}catch(p){console.error(p),alert("Error cargando audio: "+p.message),a.style.display="none"}})}),document.querySelectorAll(".btn-download-gh").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.name,a=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await hn.fetchSecureFile(this.config,r),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=i,document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(l){console.error(l),alert("Error en la descarga: "+l.message)}finally{n.disabled=!1,n.innerHTML=a}})}),document.querySelectorAll(".btn-delete-gh").forEach(n=>{n.addEventListener("click",()=>this.handleDelete(s,n.dataset))})}catch(t){e.innerHTML=`<tr><td colspan="4" class="text-danger">Error cargando lista: ${t.message}</td></tr>`}},async handleDelete(s,e){if(!confirm("¿Estás seguro de eliminar este archivo permanentemente?"))return;const{id:t,path:n,sha:r}=e;try{await hn.deleteFile(this.config,n,r),await It.deleteFileRecord(t),this.loadFilesList(s),alert("Archivo eliminado.")}catch(i){alert("Error eliminando: "+i.message)}}};async function ME(){const e=Object.keys(Le).flatMap(t=>[Ks(Object.assign({"./components/boolean/setting-boolean.js":()=>O(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url),"./components/chart/setting-chart.js":()=>O(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>O(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),"./components/date/setting-date.js":()=>O(()=>Promise.resolve().then(()=>QE),void 0,import.meta.url),"./components/email/setting-email.js":()=>O(()=>Promise.resolve().then(()=>JE),void 0,import.meta.url),"./components/number/setting-number.js":()=>O(()=>Promise.resolve().then(()=>YE),void 0,import.meta.url),"./components/password/setting-password.js":()=>O(()=>Promise.resolve().then(()=>XE),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>O(()=>Promise.resolve().then(()=>ZE),void 0,import.meta.url),"./components/section/setting-section.js":()=>O(()=>Promise.resolve().then(()=>ew),void 0,import.meta.url),"./components/select/setting-select.js":()=>O(()=>Promise.resolve().then(()=>tw),void 0,import.meta.url),"./components/string/setting-string.js":()=>O(()=>Promise.resolve().then(()=>nw),void 0,import.meta.url),"./components/table/setting-table.js":()=>O(()=>Promise.resolve().then(()=>sw),void 0,import.meta.url),"./components/text/setting-text.js":()=>O(()=>Promise.resolve().then(()=>rw),void 0,import.meta.url),"./components/url/setting-url.js":()=>O(()=>Promise.resolve().then(()=>iw),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),Ks(Object.assign({"./components/boolean/editor-boolean.js":()=>O(()=>Promise.resolve().then(()=>ow),void 0,import.meta.url),"./components/chart/editor-chart.js":()=>O(()=>Promise.resolve().then(()=>aw),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>O(()=>Promise.resolve().then(()=>cw),void 0,import.meta.url),"./components/date/editor-date.js":()=>O(()=>Promise.resolve().then(()=>uw),void 0,import.meta.url),"./components/email/editor-email.js":()=>O(()=>Promise.resolve().then(()=>dw),void 0,import.meta.url),"./components/number/editor-number.js":()=>O(()=>Promise.resolve().then(()=>lw),void 0,import.meta.url),"./components/password/editor-password.js":()=>O(()=>Promise.resolve().then(()=>hw),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>O(()=>Promise.resolve().then(()=>pw),void 0,import.meta.url),"./components/section/editor-section.js":()=>O(()=>Promise.resolve().then(()=>fw),void 0,import.meta.url),"./components/select/editor-select.js":()=>O(()=>Promise.resolve().then(()=>mw),void 0,import.meta.url),"./components/string/editor-string.js":()=>O(()=>Promise.resolve().then(()=>gw),void 0,import.meta.url),"./components/table/editor-table.js":()=>O(()=>Promise.resolve().then(()=>yw),void 0,import.meta.url),"./components/text/editor-text.js":()=>O(()=>Promise.resolve().then(()=>bw),void 0,import.meta.url),"./components/url/editor-url.js":()=>O(()=>Promise.resolve().then(()=>_w),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),Ks(Object.assign({"./components/boolean/viewer-boolean.js":()=>O(()=>Promise.resolve().then(()=>vw),void 0,import.meta.url),"./components/chart/viewer-chart.js":()=>O(()=>Promise.resolve().then(()=>Ew),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>O(()=>Promise.resolve().then(()=>ww),void 0,import.meta.url),"./components/date/viewer-date.js":()=>O(()=>Promise.resolve().then(()=>Iw),void 0,import.meta.url),"./components/email/viewer-email.js":()=>O(()=>Promise.resolve().then(()=>Tw),void 0,import.meta.url),"./components/number/viewer-number.js":()=>O(()=>Promise.resolve().then(()=>Aw),void 0,import.meta.url),"./components/password/viewer-password.js":()=>O(()=>Promise.resolve().then(()=>Sw),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>O(()=>Promise.resolve().then(()=>Cw),void 0,import.meta.url),"./components/section/viewer-section.js":()=>O(()=>Promise.resolve().then(()=>Pw),void 0,import.meta.url),"./components/select/viewer-select.js":()=>O(()=>Promise.resolve().then(()=>Rw),void 0,import.meta.url),"./components/string/viewer-string.js":()=>O(()=>Promise.resolve().then(()=>xw),void 0,import.meta.url),"./components/table/viewer-table.js":()=>O(()=>Promise.resolve().then(()=>kw),void 0,import.meta.url),"./components/text/viewer-text.js":()=>O(()=>Promise.resolve().then(()=>Lw),void 0,import.meta.url),"./components/url/viewer-url.js":()=>O(()=>Promise.resolve().then(()=>Vw),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),Ks(Object.assign({"./components/boolean/printer-boolean.js":()=>O(()=>Promise.resolve().then(()=>Dw),void 0,import.meta.url),"./components/chart/printer-chart.js":()=>O(()=>Promise.resolve().then(()=>Ow),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>O(()=>Promise.resolve().then(()=>Mw),void 0,import.meta.url),"./components/date/printer-date.js":()=>O(()=>Promise.resolve().then(()=>Nw),void 0,import.meta.url),"./components/email/printer-email.js":()=>O(()=>Promise.resolve().then(()=>$w),void 0,import.meta.url),"./components/number/printer-number.js":()=>O(()=>Promise.resolve().then(()=>Uw),void 0,import.meta.url),"./components/password/printer-password.js":()=>O(()=>Promise.resolve().then(()=>Fw),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>O(()=>Promise.resolve().then(()=>Bw),void 0,import.meta.url),"./components/section/printer-section.js":()=>O(()=>Promise.resolve().then(()=>jw),void 0,import.meta.url),"./components/select/printer-select.js":()=>O(()=>Promise.resolve().then(()=>qw),void 0,import.meta.url),"./components/string/printer-string.js":()=>O(()=>Promise.resolve().then(()=>Hw),void 0,import.meta.url),"./components/table/printer-table.js":()=>O(()=>Promise.resolve().then(()=>zw),void 0,import.meta.url),"./components/text/printer-text.js":()=>O(()=>Promise.resolve().then(()=>Ww),void 0,import.meta.url),"./components/url/printer-url.js":()=>O(()=>Promise.resolve().then(()=>Gw),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e)}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{const s=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),t="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";s&&(s.onerror=()=>{console.error("[THEME] ❌ Error. Revertiendo a Default."),s.href=t,localStorage.setItem("doc_engine_theme_url",t)},s.href=e&&e.includes("http")?e:t);try{await Q.initDB()}catch(n){console.error("[ERROR] APP: Error de inicialización:",n);return}await ME(),FE(),Q.onAuthStateChanged(async n=>{n?(n.email,await NE(n)):(document.getElementById("app-content").style.display="none",Rh.renderLogin())})});async function NE(s){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${s.email}`),Rh.initLogout(),Mr.init(),_n.init(),xh.init(),!await Q.hasSecurityConfigured()&&vn&&vn.renderSetupModal&&vn.renderSetupModal(),await It.getUserConfig(s.uid)&&$E(),UE(),En("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",r=>{En("documents"),_n.createFromTemplate(r.detail.tplId)}),window._eventCreateDocRegistered=!0)}function $E(){const s=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,s.appendChild(e),document.getElementById("nav-github").addEventListener("click",t=>{t.preventDefault(),En("github"),OE.init("view-github")})}function UE(){document.getElementById("nav-designer").onclick=s=>{s.preventDefault(),En("designer")},document.getElementById("nav-documents").onclick=s=>{s.preventDefault(),En("documents")},document.getElementById("nav-settings").onclick=s=>{s.preventDefault(),En("settings")}}function En(s){const e={designer:document.getElementById("view-designer"),documents:document.getElementById("view-documents"),settings:document.getElementById("view-settings"),github:document.getElementById("view-github")},t={designer:document.getElementById("nav-designer"),documents:document.getElementById("nav-documents"),settings:document.getElementById("nav-settings"),github:document.getElementById("nav-github")};Object.values(e).forEach(n=>{n&&(n.style.display="none")}),Object.values(t).forEach(n=>{n&&n.classList.remove("active"),n&&(n.style.fontWeight="normal")}),e[s]&&(e[s].style.display="block"),t[s]&&(t[s].classList.add("active"),t[s].style.fontWeight="bold"),s==="designer"&&Mr.renderList(),s==="documents"&&_n.renderList(),s==="settings"&&xh.render()}function FE(){document.addEventListener("click",t=>{const n=t.target.closest(".toggle-password");if(n){t.preventDefault();const r=document.getElementById(n.dataset.target),i=n.querySelector("i");if(r&&i){const a=r.type==="password";r.type=a?"text":"password",i.classList.toggle("fa-eye",!a),i.classList.toggle("fa-eye-slash",a)}}});const s=document.querySelector(".navbar"),e=document.querySelector(".app-container");s&&e&&new ResizeObserver(n=>{for(let r of n){const i=s.offsetHeight;e.style.marginTop=`${i+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{_n&&_n.renderList&&_n.renderList()},250)}}).observe(s)}const BE=s=>class extends s{getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),n=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${t?"italic":"normal"};
        color: ${n};`}renderStyleControls(e=[]){const t=this.hasAttribute("bold"),n=this.hasAttribute("italic"),r=this.getAttribute("color")||"black",i=!e.includes("bold"),a=!e.includes("italic"),l=!e.includes("color");let c="";(i||a)&&(c=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${i?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${a?`<button class="btn btn-sm btn-outline-secondary ${n?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let d="";return l&&(d=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(p=>`<button class="btn btn-sm rounded-circle p-0 border ${r===p?"border-dark":"border-light"}" data-color="${p}" style="background-color: ${p}; width: 22px; height: 22px;" title="${p}"></button>`).join("")}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `),`
          <div class="dropdown">
            <button class="btn btn-sm btn-light text-body-secondary border-0 shadow-none" type="button" id="btn-opts-${this.id}" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" style="min-width: 180px; font-size: 0.85rem;">
                ${c}
                ${d}
                <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Utilidades</h6></li>
                <li>
                    <button class="dropdown-item d-flex align-items-center gap-2 py-2" id="btn-copy-${this.id}">
                        <i class="fa-regular fa-copy text-muted" style="width:16px"></i> Copiar valor
                    </button>
                </li>
                <li>
                    <button class="dropdown-item d-flex align-items-center gap-2 py-2" id="btn-paste-${this.id}">
                        <i class="fa-solid fa-paste text-muted" style="width:16px"></i> Pegar valor
                    </button>
                </li>
            </ul>
          </div>
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const t=this.querySelector(`#btn-opts-${this.id}`);t&&(t.addEventListener("show.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="visible")}),t.addEventListener("hidden.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="hidden")}));const n=(i,a)=>{const l=this.querySelector(`#${i}-${this.id}`);l&&(l.onclick=c=>{c.preventDefault(),a(c)})};n("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),n("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const r=this.querySelector(`#color-grid-${this.id}`);r&&r.querySelectorAll("button").forEach(i=>{i.onclick=a=>{a.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",i.dataset.color),this._isInternalUpdate=!1,this.render()}}),n("btn-copy",()=>{const i=this.querySelector(`#btn-copy-${this.id}`),a=i.innerHTML;let l="";if(typeof this.getData=="function"){const c=this.getData();l=typeof c.value=="object"?JSON.stringify(c.value):c.value||""}else l=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",l),i.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{i.innerHTML=a},1200)}),n("btn-paste",()=>{const i=this.querySelector(`#btn-paste-${this.id}`),a=sessionStorage.getItem("doc_clipboard_value");if(a!==null){typeof this.setData=="function"?this.setData({value:a}):this.setAttribute("edit-value",a);const l=i.innerHTML;i.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{i.innerHTML=l},1200)}})}};class jE{constructor(e,t=""){this.container=e,this.tokens=[],this.availableVars=[],this.draggedIndex=null,this._parseFormulaString(t),this._initDragEvents(),this.render()}setContextVariables(e){this.availableVars=e||[],this.render()}addToken(e,t,n){this.tokens.push({type:e,value:t,label:n||t}),this.render()}removeToken(e){this.tokens.splice(e,1),this.render()}clear(){this.tokens=[],this.render()}getFormulaString(){return this.tokens.map(e=>e.type==="var"?`@{${e.value}}`:e.value).join(" ")}validate(){if(this.tokens.some(n=>n.type==="var"&&!this.availableVars.find(r=>r.id===n.value)))return{valid:!1,msg:"Existen variables no válidas (rojas). Elimínalas para continuar."};if(this.tokens.length===0)return{valid:!1,msg:"La fórmula está vacía."};const t=this.tokens.map(n=>n.type==="var"?"1":n.value).join(" ");try{if(/[^0-9+\-*/().\s]/.test(t))throw new Error("Caracteres no permitidos");const n=new Function(`return ${t}`)();if(isNaN(n)||!isFinite(n))throw new Error("Resultado matemático inválido");return{valid:!0,msg:"Fórmula válida."}}catch(n){return{valid:!1,msg:"Error de sintaxis: "+n.message}}}_parseFormulaString(e){if(!e)return;const t=/@\{([^}]+)\}|([0-9]+(\.[0-9]+)?)|([+\-*/()])|([a-zA-Z0-9_]+)/g;let n;for(;(n=t.exec(e))!==null;)n[1]?this.tokens.push({type:"var",value:n[1],label:n[1]}):n[0].trim()&&this.tokens.push({type:"op",value:n[0],label:n[0]})}render(){if(this.container.innerHTML="",this.container.className="formula-editor-container",this.tokens.length===0){this.container.innerHTML='<span class="text-muted opacity-50 small fst-italic w-100 text-center user-select-none">Arrastra variables u operadores aquí...</span>';return}this.tokens.forEach((e,t)=>{const n=document.createElement("div");n.className=`formula-token ${e.type}`,n.draggable=!0;let r=e.label;if(e.type==="var"){const a=this.availableVars.find(l=>l.id===e.value);a?r=a.title:(n.classList.add("broken"),r=`¿${e.value}?`,n.title="Variable no encontrada"),n.innerHTML=`<i class="fa-solid fa-cube me-1 opacity-50 small"></i>${r}`}else n.innerHTML=r;const i=document.createElement("span");i.className="btn-del-token",i.innerHTML='<i class="fa-solid fa-trash"></i>',i.onclick=a=>{a.stopPropagation(),this.removeToken(t)},n.appendChild(i),this._addDragEvents(n,t),this.container.appendChild(n)})}_addDragEvents(e,t){e.addEventListener("dragstart",n=>{this.draggedIndex=t,n.dataTransfer.effectAllowed="move",setTimeout(()=>e.classList.add("dragging"),0)}),e.addEventListener("dragend",()=>{this.draggedIndex=null,e.classList.remove("dragging"),this.container.querySelectorAll(".formula-token").forEach(n=>n.classList.remove("drop-target-active"))}),e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("drop-target-active")}),e.addEventListener("dragleave",()=>e.classList.remove("drop-target-active")),e.addEventListener("drop",n=>{if(n.preventDefault(),e.classList.remove("drop-target-active"),this.draggedIndex===null||this.draggedIndex===t)return;const r=this.tokens.splice(this.draggedIndex,1)[0];let i=t;this.draggedIndex<t&&i--,this.tokens.splice(i,0,r),this.render()})}_initDragEvents(){this.container.addEventListener("dragover",e=>e.preventDefault()),this.container.addEventListener("drop",e=>{if(e.preventDefault(),e.target===this.container&&this.draggedIndex!==null){const t=this.tokens.splice(this.draggedIndex,1)[0];this.tokens.push(t),this.render()}})}}const qE=s=>class extends s{isCalculable(){const e=this.tagName.toLowerCase().split("-")[1];return["number","currency","percentage"].includes(e)}getFormulaSettingsHTML(){if(!this.isCalculable())return"";this.hasAttribute("table");const e=this.hasAttribute("is-calculated");return`
      
        <div id="formula-msg-${this.id}" class="alert alert-danger d-none p-1 small mb-2 text-center"></div>

        <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="small text-muted fw-bold">Editor de Fórmula</span>
            <span class="badge ${e?"bg-success":"bg-secondary"}">
                ${e?"Activa":"Inactiva"}
            </span>
        </div>

        <div id="formula-widget-${this.id}" class="border rounded bg-white p-2 mb-3 shadow-sm" style="min-height: 60px;"></div>

        <label class="small text-muted fw-bold mb-1">Variables Disponibles</label>
        <div id="formula-vars-${this.id}" class="d-flex flex-wrap gap-2 mb-3 p-2 border rounded bg-light" style="max-height: 120px; overflow-y: auto;">
            <span class="text-muted small w-100 text-center">Cargando variables...</span>
        </div>

        <label class="small text-muted fw-bold mb-1">Operadores y Constantes</label>
        <div class="bg-light p-2 border rounded">
            <div class="d-flex gap-1 flex-wrap justify-content-center mb-2">
                ${["+","-","*","/","(",")"].map(t=>`<button type="button" class="btn btn-sm btn-white border shadow-sm btn-op-formula" data-op="${t}">${t}</button>`).join("")}
            </div>
            <div class="input-group input-group-sm">
                <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="formula-manual-${this.id}" placeholder="Número (ej: 0.16)">
                <button type="button" class="btn btn-outline-secondary" id="btn-add-manual-${this.id}">Agregar</button>
            </div>
        </div>
      `}initFormulaWidget(e){if(!this.isCalculable())return;const t=e.querySelector(`#formula-widget-${this.id}`);if(!t)return;const n=this._gatherCalculationVariables(),r=this.getAttribute("formula")||"";this._tempFormulaWidget=new jE(t,r),this._tempFormulaWidget.setContextVariables(n);const i=e.querySelector(`#formula-vars-${this.id}`);i.innerHTML="",n.length===0?i.innerHTML='<span class="text-muted small fst-italic text-center w-100">No hay variables disponibles en este contexto.</span>':n.forEach(c=>{const d=document.createElement("button");d.type="button";const p=c.type==="column";d.className=`btn btn-xs ${p?"btn-white border-primary text-primary":"btn-light border-info text-info"} border shadow-sm small`,d.style.fontSize="0.7rem",d.innerHTML=`<i class="fa-solid ${p?"fa-table-columns":"fa-cube"} me-1 opacity-50"></i>${c.title}`,d.onclick=()=>this._tempFormulaWidget.addToken("var",c.id,c.title),i.appendChild(d)}),e.querySelectorAll(".btn-op-formula").forEach(c=>{c.onclick=()=>this._tempFormulaWidget.addToken("op",c.dataset.op,c.innerText)});const a=e.querySelector(`#btn-add-manual-${this.id}`),l=e.querySelector(`#formula-manual-${this.id}`);a&&l&&(a.onclick=()=>{l.value&&(this._tempFormulaWidget.addToken("op",l.value,l.value),l.value="",l.focus())})}saveFormulaChanges(){if(!this._tempFormulaWidget)return{valid:!0};const e=this._tempFormulaWidget.validate(),t=this._tempFormulaWidget.getFormulaString();if(!e.valid&&t.trim().length>0){const n=document.getElementById(`formula-msg-${this.id}`);return n&&(n.textContent=e.msg,n.classList.remove("d-none")),{valid:!1}}return this.setAttribute("formula",t),t.trim().length>0?this.setAttribute("is-calculated","true"):this.removeAttribute("is-calculated"),this._tempFormulaWidget=null,{valid:!0}}_gatherCalculationVariables(){const e=this.hasAttribute("table");let t=[];if(e){this.closest(".designer-item-wrapper"),t=[...Mr.getAvailableVariables("general")];const n=this.closest("setting-table");if(`${n}`,n&&n.getData){const r=n.getData();r.columns&&r.columns.forEach(i=>{var a;i.id!==this.id&&["number","currency","percentage"].includes(i.type||((a=i.tag)==null?void 0:a.split("-")[1]))&&t.push({id:i.id,title:`[Col] ${i.title}`,type:"column"})})}}else t=Mr.getAvailableVariables("general");return t.filter(n=>n.id!==this.id)}},HE=s=>class extends s{async _initApiFetch(e=!1){const t=this.getAttribute("api-url"),n=this.getAttribute("id")||this.id;if(!t)return;if(!e&&this._hasValue&&this._hasValue()){`${n}`;return}`${n}`;let r=null;const i=async a=>{if(!a.ok)throw new Error(`Status ${a.status}`);let l=await a.json();if(l.contents)try{return JSON.parse(l.contents)}catch{return l.contents}return l};try{const a=await fetch(t);r=await i(a)}catch{if(console.warn("[API] Fallo directo. Intentando Proxy..."),t.includes("corsproxy.io")){this._markError();return}else try{const l="https://corsproxy.io/?"+encodeURIComponent(t),c=await fetch(l);r=await i(c)}catch(l){console.error("[API] Error total:",l),this._markError();return}}if(r){const a=this.getAttribute("api-path");if(Array.isArray(r))this._openApiSelectionModal(r,a);else{const l=a?this._resolvePath(r,a):r;this._applyApiValue(l)}}}_resolvePath(e,t){return t.split(".").reduce((n,r)=>n&&n[r],e)}_applyApiValue(e){this.setAttribute("edit-value",e),this.render&&this.render(),this.dispatchEvent(new Event("input",{bubbles:!0}))}_markError(){const e=this.querySelector("input, select, textarea");e&&(e.classList.add("is-invalid"),e.title="Error de conexión API")}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""&&e!=="---"}_openApiSelectionModal(e,t){var l;const n=`modal-api-${this.id}`;(l=document.getElementById(n))==null||l.remove();const r=`
      <div class="modal fade" id="${n}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-dark py-2">
              <h6 class="modal-title small fw-bold"><i class="fa-solid fa-cloud-arrow-down me-2"></i>Selección API</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-3 bg-light">
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm mb-3 shadow-none" 
                     id="search-${this.id}" placeholder="Filtrar resultados...">
              <div class="list-group shadow-sm overflow-y-auto" id="list-${this.id}" style="max-height: 300px;">
                ${this._renderApiListItems(e,t)}
              </div>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById(n),a=new bootstrap.Modal(i);a.show(),i.querySelector(`#search-${this.id}`).oninput=c=>{const d=c.target.value.toLowerCase().split(" ").filter(m=>m),p=e.filter(m=>{const g=Object.values(m).join(" ").toLowerCase();return d.every(I=>g.includes(I))});i.querySelector(`#list-${this.id}`).innerHTML=this._renderApiListItems(p,t),this._bindApiListClicks(i,a)},this._bindApiListClicks(i,a),i.addEventListener("hidden.bs.modal",()=>i.remove())}_renderApiListItems(e,t){return e.map(n=>{const r=t?this._resolvePath(n,t):"Seleccionar",i=Object.entries(n).slice(0,3).map(([a,l])=>`<span class="badge bg-white text-dark border me-1 fw-normal">${a}: <b>${l}</b></span>`).join("");return`
        <button class="list-group-item list-group-item-action border-light" data-value="${r}">
          <div class="d-flex justify-content-between align-items-center">
            <div class="small text-truncate me-2">${i}</div>
            <i class="fa-solid fa-chevron-right text-muted small"></i>
          </div>
        </button>`}).join("")}_bindApiListClicks(e,t){e.querySelectorAll(".list-group-item").forEach(n=>{n.onclick=()=>{this._applyApiValue(n.dataset.value),t.hide()}})}renderApiRefreshButton(){return this.getAttribute("api-url")?`
        <button class="btn btn-sm btn-outline-info ms-2 p-0" 
                id="refresh-api-${this.id}"
                title="Actualizar desde API"
                style="width: 24px; height: 24px; font-size: 0.8rem;">
          <i class="fa-solid fa-cloud-arrow-down"></i>
        </button>
      `:""}},zE=s=>class extends s{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${Le[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=t=>{t.preventDefault(),t.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var a;const e=this.tagName.toLowerCase().split("-")[1],t=this.hasAttribute("table"),n=((a=Le[e])==null?void 0:a.settings)||{width:!0,visibility:!0},r={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let i="";if(n.visibility&&(i+=this._buildAccordionItem("vis","Visibilidad",!0,`
            <div class="row g-3">
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-print" ${r.hidePrint?"checked":""}>
                        <label class="form-check-label small">Ocultar al Imprimir</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-whatsapp" ${r.hideWhatsapp?"checked":""}>
                        <label class="form-check-label small">Ocultar en WhatsApp</label>
                    </div>
                </div>
            </div>
        `)),n.width||n.style){const l=n.width?`
            <div class="row g-2 mb-2">
                <div class="col-6">
                    <label class="small text-muted">Ancho Pantalla</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-ev" value="${r.spanEV}" min="1" max="12">
                </div>
                <div class="col-6">
                    <label class="small text-muted">Ancho Impresión</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-p" value="${r.spanP}" min="1" max="12">
                </div>
            </div>`:"",c=t?`
            <div class="mb-0">
                 <label class="small text-muted">Alineación</label>
                 <select class="form-select form-select-sm" id="modal-align">
                    <option value="left" ${r.align==="left"?"selected":""}>Izquierda</option>
                    <option value="center" ${r.align==="center"?"selected":""}>Centro</option>
                    <option value="right" ${r.align==="right"?"selected":""}>Derecha</option>
                 </select>
            </div>`:"";i+=this._buildAccordionItem("design","Diseño y Ancho",!1,l+c)}if(n.api&&(i+=this._buildAccordionItem("api","Auto-Completar (API)",!1,`
            <div class="mb-2">
                <label class="small text-muted">URL Endpoint</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" id="modal-api-url" value="${r.apiUrl}">
            </div>
            <div>
                <label class="small text-muted">Ruta JSON (ej: data.precio)</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm font-monospace" id="modal-api-path" value="${r.apiPath}">
            </div>
        `)),n.calculation){const l=this.getFormulaSettingsHTML?this.getFormulaSettingsHTML():"",c=t?`<div class="form-check form-switch mb-3 border-bottom pb-2">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-total" ${r.total?"checked":""}>
                <label class="form-check-label small fw-bold">Sumar en Totales</label>
        </div>`:"";i+=this._buildAccordionItem("calc","Cálculos y Fórmulas",!1,c+l)}this._renderAndShowModal(i)}_buildAccordionItem(e,t,n,r){return`
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${e}">
            <button class="accordion-button ${n?"":"collapsed"} py-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${e}">
                <span class="fw-bold small text-info">${t}</span>
            </button>
            </h2>
            <div id="collapse-${e}" class="accordion-collapse collapse ${n?"show":""}" data-bs-parent="#settingsAccordion">
            <div class="accordion-body bg-light p-3">
                ${r}
            </div>
            </div>
        </div>`}_renderAndShowModal(e){const t=document.getElementById("advanced-settings-modal");t&&t.remove();const n=`
        <div class="modal fade" id="advanced-settings-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header py-2">
                <h5 class="modal-title fs-6 fw-bold"><i class="fa-solid fa-sliders me-2"></i>Configuración: ${this.getAttribute("title")||"Campo"}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body p-0">
                 <div class="accordion accordion-flush" id="settingsAccordion">
                    ${e}
                 </div>
              </div>
              <div class="modal-footer py-1 bg-light">
                <button type="button" class="btn btn-sm btn-primary fw-bold" id="btn-save-settings">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>`;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById("advanced-settings-modal"),i=new bootstrap.Modal(r);i.show(),r.addEventListener("shown.bs.modal",()=>{this.initFormulaWidget&&this.initFormulaWidget(r)}),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&i.hide()}}_saveSettingsFromModal(){const e=r=>{var i;return(i=document.getElementById(r))==null?void 0:i.value},t=r=>{var i;return(i=document.getElementById(r))==null?void 0:i.checked};if(this.saveFormulaChanges&&!this.saveFormulaChanges().valid)return!1;this.setInternalUpdate(!0),t("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),t("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align"))),document.getElementById("modal-api-url")&&(this.setAttribute("api-url",e("modal-api-url")),this.setAttribute("api-path",e("modal-api-path")));const n=document.getElementById("modal-total");return n&&(n.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}};class N extends HE(zE(qE(BE(HTMLElement)))){constructor(){super(),this._isInternalUpdate=!1}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this._initApiFetch&&setTimeout(()=>this._initApiFetch(),100),this._attachApiRefreshEvents()}static get observedAttributes(){return["title","options","currency","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","formula","is-calculated","hide-print","hide-whatsapp","api-url","api-path"]}attributeChangedCallback(e,t,n){this._isInternalUpdate||t!==n&&this.render()}getData(){const e=this.tagName.toLowerCase();return e.startsWith("setting-")?{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),formula:this.getAttribute("formula"),isCalculated:this.hasAttribute("is-calculated"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",options:this.getAttribute("options")||"",currency:this.getAttribute("currency")||"$"}:{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id),e.fieldId&&this.setAttribute("field-id",e.fieldId),["title","options","currency","alignment","api-url","api-path","formula","color"].forEach(r=>{const i=e[r]||e[this._toCamel(r)];i&&this.setAttribute(r,i)}),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.value!==void 0&&this.setAttribute("edit-value",e.value);const n={total:e.total,bold:e.bold,italic:e.italic,"hide-print":e.hidePrint,"hide-whatsapp":e.hideWhatsapp,"is-calculated":e.isCalculated};Object.entries(n).forEach(([r,i])=>{i?this.setAttribute(r,i===!0?"":i):this.removeAttribute(r)}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",n=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${n} mb-3`,`<div class="viewer-container">${this.tagName.startsWith("EDITOR-")?"":`<label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">${t}</label>`}${e}</div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const n=this.getAttribute("title")||"",r={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",f:"0.70rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",f:"0.70rem"},"Facil Lectura":{m:"2px",p:"1px",b:"1px solid #000",f:"1rem"}},i=r[t]||r.Visual;return`
      <div style="margin-bottom: ${i.m}; border-bottom: ${i.b}; padding-bottom: ${i.p}; page-break-inside: avoid;">
          <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${i.f}; line-height: 1.1;">${n}</div>
          ${e}
      </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];Le[e]&&(this.icon=Le[e].icon,this.shortLabel=Le[e].shortLabel,this.longLabel=Le[e].longLabel,this.spanEV=Le[e].spanEV,this.spanP=Le[e].spanP,this.uiColor=Le[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,t=>t[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async t=>{t.preventDefault(),t.stopPropagation();const n=e.querySelector("i");if(n){const r=n.className;n.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{n.className=r,e.disabled=!1}}})}render(){this.innerHTML=""}}class kh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-toggle-on text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: ¿Acepta términos?">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this.setAttribute("title",n.target.value)}}}customElements.define("setting-boolean",kh);const WE=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:kh},Symbol.toStringTag,{value:"Module"}));class Lh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"info"} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Gráfico *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-chart-simple text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Ventas Mensuales">
              </div>
              <div class="form-text small text-muted mt-1">
                <i class="fa-solid fa-info-circle me-1"></i> La configuración de datos (Series, Ejes, Tablas) se realiza en el editor del documento.
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-chart",Lh);const GE=Object.freeze(Object.defineProperty({__proto__:null,SettingChart:Lh},Symbol.toStringTag,{value:"Module"}));class Vh extends N{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("currency")||"$",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-2">
            <div class="col-8">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm ${n}" 
                     value="${e}" data-prop="title" placeholder="Ej: Precio Unitario">
            </div>
            <div class="col-4">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Moneda</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm text-center fw-bold" 
                     value="${t}" data-prop="currency" placeholder="$">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const i=r.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",i.trim()==="")},this.querySelector('input[data-prop="currency"]').oninput=r=>{this._isInternalUpdate=!0;const i=r.target.value;this.setAttribute("currency",i),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-currency",Vh);const KE=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:Vh},Symbol.toStringTag,{value:"Module"}));class Dh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-${this.uiColor} text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-calendar-day text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Fecha de Nacimiento">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-date",Dh);const QE=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:Dh},Symbol.toStringTag,{value:"Module"}));class Oh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-envelope text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                      value="${e}" data-prop="title" placeholder="Ej: Correo Corporativo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-email",Oh);const JE=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:Oh},Symbol.toStringTag,{value:"Module"}));class Mh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
                <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text border-end-0"><i class="fa-solid fa-hashtag text-muted"></i></span>
                    <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                           value="${e}" data-prop="title" placeholder="Ej: Edad o Cantidad">
                </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-number",Mh);const YE=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:Mh},Symbol.toStringTag,{value:"Module"}));class Nh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-${this.uiColor} text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-lock text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Clave de Acceso">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-password",Nh);const XE=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:Nh},Symbol.toStringTag,{value:"Module"}));class $h extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-percent text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Impuesto o Descuento">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-percentage",$h);const ZE=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:$h},Symbol.toStringTag,{value:"Module"}));class Uh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-section",Uh);const ew=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:Uh},Symbol.toStringTag,{value:"Module"}));class Fh extends N{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("options")||"",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-2">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm ${n}" 
                     value="${e}" data-prop="title" placeholder="Ej: Estado Civil">
            </div>
            <div class="col-12 mt-2">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Opciones (separadas por coma) *</label>
              <textarea class="form-control form-control-sm" data-prop="options" rows="2" 
                        placeholder="Soltero, Casado, Divorciado">${t}</textarea>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelectorAll("input, textarea").forEach(r=>{r.oninput=i=>{this._isInternalUpdate=!0;const a=i.target.dataset.prop;this.setAttribute(a,i.target.value),this._isInternalUpdate=!1,a==="title"&&i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}})}}customElements.define("setting-select",Fh);const tw=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:Fh},Symbol.toStringTag,{value:"Module"}));class Bh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-string",Bh);const nw=Object.freeze(Object.defineProperty({__proto__:null,SettingString:Bh},Symbol.toStringTag,{value:"Module"}));class jh extends N{constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",n=this._tempColumnsData?this._tempColumnsData.length:0;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-table"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="mb-3">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título de la Tabla *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Tabla de Items">
            </div>
          </div>

          <div class="alert alert-light border d-flex justify-content-between align-items-center p-2 mb-3">
            <div class="small fw-bold text-body">
                <i class="fa-solid fa-columns text-body-secondary me-2"></i>
                <span id="col-counter-${this.id}">${n} columna${n!==1?"s":""} definida${n!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar
            </button>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const i=r.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",i.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal()}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",n=this.hasAttribute("prepend-rows");return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-sliders me-1"></i> MÁS CONFIGURACIÓN
        </a>
        <div class="collapse" id="extra-${this.id}">
          
          <div class="p-2 bg-light border rounded mb-2 mt-2">
            <div class="form-check form-switch mb-0">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" data-prop="prepend-rows" ${n?"checked":""}>
                <label class="form-check-label small fw-bold text-body" style="font-size: 0.75rem;">
                    Agregar items al inicio (Arriba)
                </label>
            </div>
            <div class="form-text text-muted" style="font-size: 0.65rem;">
                Por defecto se agregan al final. Actívelo para orden cronológico inverso.
            </div>
          </div>

          <div class="row g-2">
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Editor (2-12)</label>
              <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm text-center" 
                     value="${e}" data-prop="span-edit-viewer" min="2" max="12">
            </div>
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Impresión (2-12)</label>
              <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm text-center" 
                     value="${t}" data-prop="span-print" min="2" max="12">
            </div>
          </div>
        </div>
      </div>
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const n=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",n),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",n.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const n=`
      <div class="modal fade" id="${e}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content border-0 shadow">
            
            <div class="modal-header bg-light py-2 border-bottom">
              <h6 class="modal-title fw-bold text-body-secondary"><i class="fa-solid fa-table-columns me-2"></i>Configurar Columnas</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            
            <div class="modal-body bg-light p-3">
                <div id="col-container-${this.id}" class="d-flex flex-column gap-2" style="min-height: 150px;">
                    </div>
            </div>

            <div class="modal-footer bg-dark p-2 d-block">
                <div class="row align-items-center g-2">
                    <div class="col-md-9">
                        <div class="small text-white-50 mb-1 fw-bold text-uppercase" style="font-size: 0.65rem;">Agregar Elemento</div>
                        <div class="d-flex gap-2 overflow-x-auto pb-1" id="toolbox-${this.id}">
                            </div>
                    </div>
                    <div class="col-md-3 border-start border-secondary ps-3">
                         <button type="button" class="btn btn-success w-100 shadow-sm fw-bold" id="btn-finish-${this.id}" data-bs-dismiss="modal">
                            <i class="fa-solid fa-check me-1"></i> Guardar
                         </button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    `;this.insertAdjacentHTML("beforeend",n);const r=document.getElementById(`toolbox-${this.id}`);Object.entries(Le).forEach(([c,d])=>{if(c==="table")return;const p=document.createElement("button");p.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",p.style.minWidth="60px",p.title=d.longLabel,p.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${d.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${d.shortLabel}</span>
        `,p.onclick=()=>this._addChildComponent(c),r.appendChild(p)});const i=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(c=>{const d=this._createWrapper(c.tag.replace("setting-","")),p=d.querySelector(c.tag);p&&p.setData&&(p.setAttribute("table",""),p.setData(c)),i.appendChild(d)}):i.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const a=document.getElementById(e);new bootstrap.Modal(a).show(),a.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(i),this._updateCounter(),a.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),n=t.querySelector("#empty-msg");n&&n.remove();const r=this._createWrapper(e);t.appendChild(r),r.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const n=document.createElement(`setting-${e}`);return n.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(n),t.querySelector(".btn-del-col").onclick=()=>t.remove(),ha.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(r=>{r.tagName.toLowerCase().startsWith("setting-")&&typeof r.getData=="function"&&t.push(r.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",jh);const sw=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:jh},Symbol.toStringTag,{value:"Module"}));class qh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 text-dark">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-align-left text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Observaciones Generales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-text",qh);const rw=Object.freeze(Object.defineProperty({__proto__:null,SettingText:qh},Symbol.toStringTag,{value:"Module"}));class Hh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-link"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Sitio Web Oficial">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-url",Hh);const iw=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:Hh},Symbol.toStringTag,{value:"Module"}));class zh extends N{render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const n=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3 d-flex align-items-center justify-content-between">
          <label class="form-check-label fw-bold text-body small mb-0">
            <i class="fa-solid fa-toggle-on me-1 text-${this.uiColor}"></i> ${e}
          </label>
          <div class="form-check form-switch">
            <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="check-${this.id}" 
                   ${t?"checked":""} style="cursor:pointer">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",zh);const ow=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:zh},Symbol.toStringTag,{value:"Module"}));class Wh extends N{constructor(){super(),this._tempConfig={},this.chartInstance=null}render(){const e=this.getAttribute("title")||"Gráfico",t=this.getAttribute("edit-value");let n={type:"column",source:"manual",series:[]};try{t&&(n=JSON.parse(t))}catch{}const i={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",pie:"fa-chart-pie"}[n.type]||"fa-chart-simple",a=`chart-editor-${this.id}`,l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid ${i} me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls(["bold","italic","color"])} 
          </div>

          <!-- CONTENEDOR DEL GRÁFICO -->
          <div style="position: relative; height: 250px; width: 100%;">
            <canvas id="${a}"></canvas>
          </div>

          <button class="btn btn-outline-primary btn-sm w-100 mt-3" id="btn-cfg-${this.id}">
            <i class="fa-solid fa-gear me-1"></i> Configurar Gráfico
          </button>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l);const c={addEventListener:()=>{},value:""};if(this._attachStyleEventListeners(c),this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(n),t&&n.series&&n.series.length>0)setTimeout(()=>{this._renderChart(a,n)},200);else{const d=this.querySelector(`#${a}`);if(d){const p=d.getContext("2d");p.fillStyle="#f8f9fa",p.fillRect(0,0,d.width,d.height),p.fillStyle="#6c757d",p.font="14px Arial",p.textAlign="center",p.fillText('Haga clic en "Configurar Gráfico" para añadir datos',d.width/2,d.height/2)}}}_renderChart(e,t){const n=document.getElementById(e);if(!n)return;this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null);const{labels:r,datasets:i}=this._processData(t);if(!i.length||!window.Chart)return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const a=t.type==="pie"?"pie":t.type==="line"?"line":"bar",l=t.type==="bar"?"y":"x",c=n.parentElement;let d=350;if(t.type==="bar"){const p=100+r.length*45;d=Math.max(350,p)}else t.type==="pie"&&(d=400);c.style.height=`${d}px`;try{this.chartInstance=new Chart(n,{type:a,data:{labels:r,datasets:i},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:t.type!=="pie",color:"#000",font:{weight:"bold",size:9},formatter:p=>Math.round(p*100)/100,anchor:"end",align:l==="y"?"end":"top"}}}})}catch(p){console.error("Error al renderizar gráfico en editor:",p)}}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"}];if(e.source==="manual")t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i),Array.isArray(e.series)&&(n=e.series.map((i,a)=>{const l=r[a%r.length],c=(i.data||"").split(",").map(d=>parseFloat(d)||0);return{label:i.name||`Serie ${a+1}`,data:c,backgroundColor:e.type==="pie"&&c.length>0?r.slice(0,Math.min(c.length,r.length)).map(d=>d.bg):l.bg,borderColor:e.type==="pie"&&c.length>0?r.slice(0,Math.min(c.length,r.length)).map(d=>d.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0));else if(e.source==="table"&&e.tableId){const i=document.querySelector(`editor-table[field-id="${e.tableId}"]`);i&&i.rows&&i.rows.length>0?(e.labelColumnId?t=i.rows.map(a=>{const l=a.find(c=>c.fieldId===e.labelColumnId);return l?String(l.value):""}):t=i.rows.map((a,l)=>`${l+1}`),Array.isArray(e.series)&&(n=e.series.map((a,l)=>{const c=r[l%r.length],d=i.rows.map(p=>{const m=p.find(I=>I.fieldId===a.columnId),g=String(m?m.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(g)||0});return{label:a.name||`Serie ${l+1}`,data:d,backgroundColor:e.type==="pie"?r.map(p=>p.bg):c.bg,borderColor:e.type==="pie"?r.map(p=>p.border):c.border,borderWidth:1}}))):(t=["Sin Datos"],n=[{label:"Esperando datos...",data:[0],backgroundColor:"#e9ecef",borderColor:"#ced4da",borderWidth:1}])}return{labels:t,datasets:n}}_openConfigModal(e){var c;this._tempConfig=JSON.parse(JSON.stringify(e)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const t=`modal-chart-${this.id}`;(c=document.getElementById(t))==null||c.remove();const n=`
      <div class="modal fade" id="${t}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-chart-simple me-2"></i>Configurar Gráfico</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body bg-light p-4">
                
                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Tipo de Gráfico</label>
                        <select class="form-select form-select-sm" id="cfg-type-${this.id}">
                            <option value="column">Columnas (Vertical)</option>
                            <option value="bar">Barras (Horizontal)</option>
                            <option value="line">Líneas</option>
                            <option value="pie">Circular (Pie)</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Fuente de Datos</label>
                        <div class="btn-group w-100" role="group">
                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-manual-${this.id}" value="manual">
                            <label class="btn btn-outline-secondary btn-sm" for="src-manual-${this.id}"><i class="fa-solid fa-keyboard me-1"></i> Manual</label>

                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-table-${this.id}" value="table">
                            <label class="btn btn-outline-secondary btn-sm" for="src-table-${this.id}"><i class="fa-solid fa-table me-1"></i> Tabla</label>
                        </div>
                    </div>
                </div>

                <hr>

                <div id="cfg-area-${this.id}"></div>

            </div>
            <div class="modal-footer p-2 bg-light">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success btn-sm px-4" id="btn-save-${this.id}">
                    <i class="fa-solid fa-check me-1"></i> Guardar Configuración
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById(t),i=new bootstrap.Modal(r),a=document.getElementById(`cfg-type-${this.id}`);a.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),a.onchange=d=>{this._tempConfig.type=d.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(d=>d.onchange=p=>{this._tempConfig.source=p.target.value,this._tempConfig.series=[],this._renderDynamicArea(p.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),i.hide()},r.addEventListener("hidden.bs.modal",()=>r.remove()),i.show()}_renderDynamicArea(e){const t=document.getElementById(`cfg-area-${this.id}`);t.innerHTML="",e==="manual"?this._renderManualConfig(t):this._renderTableConfig(t)}_renderManualConfig(e){const t=this._tempConfig.type==="pie";e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Etiquetas (Eje X) / Categorías</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" 
                   id="input-labels-${this.id}" 
                   value="${this._tempConfig.manualLabels||""}" 
                   placeholder="Ej: Enero, Febrero, Marzo">
            <div class="form-text small">Separadas por coma.</div>
        </div>
    `,e.innerHTML+=`
        <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label small fw-bold mb-0">Series de Datos</label>
            ${!t||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar Serie</button>`:""}
        </div>
        <div id="series-list-${this.id}" class="d-flex flex-column gap-2"></div>
    `;const n=e.querySelector(`#series-list-${this.id}`);(()=>{n.innerHTML="",this._tempConfig.series.forEach((a,l)=>{const c=document.createElement("div");c.className="input-group input-group-sm",c.innerHTML=`
                <input autocomplete="off" spellcheck="false" type="text" class="form-control" placeholder="Nombre Serie" value="${a.name||""}" onchange="this.dataset.val = this.value">
                <input autocomplete="off" spellcheck="false" type="text" class="form-control w-50" placeholder="Valores (10, 20, 30...)" value="${a.data||""}" onchange="this.dataset.val = this.value">
                <button class="btn btn-outline-danger btn-del-serie"><i class="fa-solid fa-trash"></i></button>
            `;const d=c.querySelectorAll("input");d[0].oninput=p=>this._tempConfig.series[l].name=p.target.value,d[1].oninput=p=>this._tempConfig.series[l].data=p.target.value,c.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(l,1),this._renderDynamicArea("manual")},n.appendChild(c)})})();const i=e.querySelector(`#btn-add-serie-${this.id}`);i&&(i.onclick=()=>{this._tempConfig.series.push({name:t?"Datos":"",data:""}),this._renderDynamicArea("manual")}),e.querySelector(`#input-labels-${this.id}`).oninput=a=>{this._tempConfig.manualLabels=a.target.value}}_renderTableConfig(e){const t=document.getElementById("document-canvas"),n=Array.from(t.querySelectorAll("editor-table"));if(n.length===0){e.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let r='<option value="">-- Seleccionar Tabla --</option>';n.forEach(l=>{let c=l.getAttribute("title")||`Tabla ${l.getAttribute("field-id")}`;if(l.getData){const p=l.getData();p.title&&(c=p.title)}const d=this._tempConfig.tableId===l.getAttribute("field-id")?"selected":"";r+=`<option value="${l.getAttribute("field-id")}" ${d}>${c}</option>`}),e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">
                ${r}
            </select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const i=e.querySelector(`#select-table-${this.id}`),a=()=>{const l=this._tempConfig.tableId,c=e.querySelector(`#table-cols-area-${this.id}`);if(c.innerHTML="",!l)return;const d=n.find(x=>x.getAttribute("field-id")===l);if(!d||!d.columns)return;const p=d.columns,m=p.filter(x=>["setting-number","setting-currency","setting-percentage"].includes(x.tag));let g='<option value="">-- (Fila #) --</option>';p.forEach(x=>{const F=this._tempConfig.labelColumnId===x.id?"selected":"";g+=`<option value="${x.id}" ${F}>${x.title}</option>`}),c.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">
                    ${g}
                </select>
            </div>
        `;const I=this._tempConfig.type==="pie";c.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!I||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const C=c.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((x,F)=>{let H='<option value="">-- Seleccionar Columna --</option>';m.forEach(he=>{const ne=x.columnId===he.id?"selected":"";H+=`<option value="${he.id}" ${ne}>${he.title}</option>`});const B=document.createElement("div");B.className="input-group input-group-sm",B.innerHTML=`
                <span class="input-group-text bg-white"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select">${H}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `;const re=B.querySelector("select");re.onchange=he=>{const ne=he.target.value,E=m.find(y=>y.id===ne);this._tempConfig.series[F].columnId=ne,this._tempConfig.series[F].name=E?E.title:"Serie "+(F+1)},B.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(F,1),a()},C.appendChild(B)});const k=c.querySelector(`#btn-add-tbl-serie-${this.id}`);k&&(k.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),a()}),c.querySelector(`#select-label-col-${this.id}`).onchange=x=>{this._tempConfig.labelColumnId=x.target.value}};this._tempConfig.tableId&&a(),i.onchange=l=>{this._tempConfig.tableId=l.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",a()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const e=document.getElementById(`input-labels-${this.id}`);e&&(this._tempConfig.manualLabels=e.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const e=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(e&&e.rows){if(this._tempConfig.labelColumnId){const t=e.rows.map(n=>{const r=n.find(i=>i.fieldId===this._tempConfig.labelColumnId);return r?String(r.value).replace(/,/g," "):""});this._tempConfig.manualLabels=t.join(", ")}else this._tempConfig.manualLabels=e.rows.map((t,n)=>n+1).join(", ");this._tempConfig.series.forEach(t=>{const n=e.rows.map(r=>{const i=r.find(l=>l.fieldId===t.columnId),a=String(i?i.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(a)||0});t.data=n.join(", ")})}}}}customElements.define("editor-chart",Wh);const aw=Object.freeze(Object.defineProperty({__proto__:null,EditorChart:Wh},Symbol.toStringTag,{value:"Module"}));class ai extends N{_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",a=`form-control form-control-sm shadow-none ${r?"bg-light text-muted":""}`,l=r?"readonly":"",c=r?"Calculado...":"0.00",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${this.uiColor}"></i> ${e}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${i}
            </div>
            ${r?"":this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="number" class="${a}" 
                 id="input-${this.id}" value="${t}" style="${n}" 
                 placeholder="${c}"
                 ${l}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),r||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let n=e.value.trim();if(n!=="")try{const r=n.replace(/,/g,"."),i=new Function(`"use strict"; return (${r})`)();!isNaN(i)&&isFinite(i)&&(e.value=i,this.setAttribute("edit-value",i),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=n=>{n.key==="Enter"&&(n.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",ai);const lw=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:ai},Symbol.toStringTag,{value:"Module"}));class Gh extends ai{render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",n=this.getAttribute("currency")||"$",r=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),a=`form-control shadow-none border-1 ${i?"bg-light text-muted":""}`,l=i?"readonly":"",c=this.getAttribute("api-url")?this.renderApiRefreshButton():"",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${c}
            </div>
            ${i?"":this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${n}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${a}" 
                   id="input-${this.id}" value="${t}" style="${r}" 
                   placeholder="0.00"
                   ${l}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),i||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}}customElements.define("editor-currency",Gh);const cw=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:Gh},Symbol.toStringTag,{value:"Module"})),$r=class $r extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||$r.getToday(),n=this.getCommonStyles(),r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-calendar-days me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()}
          </div>
          <input autocomplete="off" spellcheck="false" type="date" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${n}">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};fl($r,"getToday",()=>new Date().toISOString().split("T")[0]);let Nr=$r;customElements.define("editor-date",Nr);const uw=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:Nr},Symbol.toStringTag,{value:"Module"}));class Kh extends N{render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-at me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="email" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${n}" placeholder="usuario@ejemplo.com">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",Kh);const dw=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:Kh},Symbol.toStringTag,{value:"Module"}));class Qh extends N{render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",n=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-2">
            <i class="fa-solid fa-key me-1 text-${this.uiColor}"></i> ${e}
          </label>
          <div class="input-group input-group-sm shadow-none">
            <input autocomplete="off" spellcheck="false" type="password" class="form-control border-1 shadow-none" 
                   id="input-${this.id}" value="${t}" placeholder="Ingrese contraseña...">
            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="input-${this.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",Qh);const hw=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:Qh},Symbol.toStringTag,{value:"Module"}));class Jh extends ai{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",a=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${this.uiColor}"></i> ${e}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${i}
            </div>
            ${r?"":this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${r?"bg-light text-muted":""}" 
                   id="input-${this.id}" value="${t}" style="${n}" 
                   placeholder="0.00"
                   ${r?"readonly":""}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(a),r||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",Jh);const pw=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:Jh},Symbol.toStringTag,{value:"Module"}));class Yh extends N{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",Yh);const fw=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:Yh},Symbol.toStringTag,{value:"Module"}));class Xh extends N{render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",r=(this.getAttribute("options")||"").split(",").map(c=>c.trim()).filter(c=>c!==""),i=this.getCommonStyles(),a=this.getAttribute("api-url")?this.renderApiRefreshButton():"",l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-caret-down me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${a}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${i}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${r.map(c=>`<option value="${c}" ${t===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",Xh);const mw=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:Xh},Symbol.toStringTag,{value:"Module"}));class Zh extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-font text-${this.uiColor}"></i> ${e}
              </label>
              ${r}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${n}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",Zh);const gw=Object.freeze(Object.defineProperty({__proto__:null,EditorString:Zh},Symbol.toStringTag,{value:"Module"}));class ep extends N{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm=""}setData(e){if(e.columns&&(this.columns=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_applyApiValue(e){let t=[];if(Array.isArray(e))t=e;else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=[]}else typeof e=="object"&&e!==null&&(t=[e]);if(t.length===0)return;Array.isArray(t[0])?this.rows=t:this.rows=this._mapExternalDataToRows(t),this.setAttribute("edit-value",JSON.stringify(this.rows)),this._renderRows(),this._dispatchChange()}_mapExternalDataToRows(e){return e.map(t=>this.columns.map(n=>{let r=t[n.title];if(r===void 0){const i=Object.keys(t).find(a=>a.toLowerCase()===n.title.toLowerCase());i&&(r=t[i])}return r===void 0&&(r=t[n.id]),r==null&&(r=""),typeof r=="object"&&(r=JSON.stringify(r)),{fieldId:n.id,value:r}}))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-${this.uiColor} border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${e}</h6>
              <div class="d-flex gap-2 align-items-center">
                ${this.renderStyleControls(["bold","italic","color"])}
                <div class="btn-group shadow-sm">
                    <button class="btn btn-sm btn-outline-success" id="btn-export-${this.id}"><i class="fa-solid fa-download"></i></button>
                    <button class="btn btn-sm btn-outline-primary" id="btn-import-trigger-${this.id}"><i class="fa-solid fa-upload"></i></button>
                    <button class="btn btn-sm btn-primary" id="btn-add-${this.id}"><i class="fa-solid fa-plus me-1"></i> Agregar</button>
                </div>
              </div>
            </div>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-search text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
            </div>
            <input autocomplete="off" spellcheck="false" type="file" id="file-import-${this.id}" accept=".csv" style="display: none;" />
        </div>

        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover table-striped align-middle mb-0">
                    <thead class="table-light text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-primary small"></tfoot>
                </table>
            </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>this._exportCSV();const t=this.querySelector(`#file-import-${this.id}`);this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>t.click(),t.onchange=n=>this._importCSV(n)}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this.columns.forEach(n=>{const r=n.alignment||"left";t+=`<th class="fw-bold px-3 py-2 border-bottom" style="text-align: ${r}">${n.title}</th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;e.innerHTML="";const t=this.rows.map((r,i)=>({data:r,originalIndex:i}));let n=t;if(this._searchTerm.trim()){const r=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);n=t.filter(i=>{const a=i.data.map(l=>String(l.value).toLowerCase()).join(" ");return r.every(l=>a.includes(l))})}n.forEach(r=>{const{data:i,originalIndex:a}=r,l=document.createElement("tr");l.setAttribute("data-original-index",a);const c=document.createElement("td");this._searchTerm?(c.className="text-center text-muted align-middle py-2 small",c.innerHTML='<i class="fa-solid fa-filter"></i>'):(c.className="drag-handle text-center text-muted align-middle cursor-grab py-2",c.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'),l.appendChild(c),this.columns.forEach(p=>{const m=document.createElement("td"),g=p.alignment||"left";m.className="px-3 py-2",m.style.textAlign=g;const I=i.find(F=>F.fieldId===p.id),C=p.tag.replace("setting-","viewer-"),k=document.createElement(C);k.setAttribute("table","");const x={...I,title:"",spanEV:12};k.setData&&k.setData(x),m.appendChild(k),l.appendChild(m)});const d=document.createElement("td");d.className="text-end px-3 py-2",d.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,d.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(a),d.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(a,1),this._renderRows(),this._dispatchChange())},l.appendChild(d),e.appendChild(l),this._searchTerm||ha.init(l,".drag-handle",()=>this._handleReorder())}),this._renderFooter(n.map(r=>r.data))}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(r=>{const i=parseInt(r.getAttribute("data-original-index"));!isNaN(i)&&this.rows[i]&&t.push(this.rows[i])}),t.length===this.rows.length&&(this.rows=t)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let r="<tr><td></td>";this.columns.forEach(i=>{const a=i.alignment||"left";let l="";if(i.total){const c=e.reduce((m,g)=>{const I=g.find(k=>k.fieldId===i.id),C=parseFloat(I?I.value:0);return m+(isNaN(C)?0:C)},0),p=`id="${`TOTAL_${this.id}_${i.id}`}" data-raw-value="${c}"`;if(i.tag==="setting-currency"){const m=i.currency||"$";l=`<span ${p}>${m} ${c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`}else i.tag==="setting-percentage"?l=`<span ${p}>${c}%</span>`:l=`<span ${p}>${c}</span>`}r+=`<td class="px-3 py-2" style="text-align: ${a};">${l}</td>`}),r+="<td></td></tr>",t.innerHTML=r}_dispatchChange(){setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_exportCSV(){if(this.rows.length===0)return alert("No hay datos para exportar.");let e=[];this.columns.forEach(c=>{c.tag==="setting-url"?(e.push(`"${c.title} (Texto)"`),e.push(`"${c.title} (URL)"`)):e.push(`"${c.title}"`)});const n=this.rows.map(c=>this.columns.map(d=>{const p=c.find(g=>g.fieldId===d.id);let m=p?p.value:"";if(d.tag==="setting-url"){let g="",I="";try{const C=JSON.parse(m);g=C.text||"",I=C.url||""}catch{}return{isUrl:!0,text:g,url:I}}return m=String(m).replace(/"/g,'""'),{isUrl:!1,val:m}})).map(c=>c.map(d=>d.isUrl?`"${d.text.replace(/"/g,'""')}","${d.url.replace(/"/g,'""')}"`:`"${d.val}"`).join(",")).join(`
`),r=e.join(",")+`
`+n,i=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",`tabla_export_${Date.now()}.csv`),document.body.appendChild(l),l.click(),document.body.removeChild(l)}_importCSV(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=r=>{this._parseAndLoadCSV(r.target.result),e.target.value=""},n.readAsText(t)}_parseAndLoadCSV(e){const t=e.split(/\r?\n/).filter(a=>a.trim()!=="");if(t.length<2)return alert("El archivo CSV no tiene datos válidos.");const n=a=>{const l=[];let c=0,d=!1;for(let m=0;m<a.length;m++)if(a[m]==='"')d=!d;else if(a[m]===","&&!d){let g=a.substring(c,m);g.startsWith('"')&&g.endsWith('"')&&(g=g.slice(1,-1)),l.push(g.replace(/""/g,'"')),c=m+1}let p=a.substring(c);return p.startsWith('"')&&p.endsWith('"')&&(p=p.slice(1,-1)),l.push(p.replace(/""/g,'"')),l},r=[];this.columns.forEach(a=>{a.tag==="setting-url"?(r.push({colDef:a,type:"url-text"}),r.push({colDef:a,type:"url-url"})):r.push({colDef:a,type:"normal"})});const i=[];for(let a=1;a<t.length;a++){const l=n(t[a]);if(l.length!==r.length)continue;const c={};l.forEach((p,m)=>{const g=r[m];if(!g)return;const I=g.colDef.id;c[I]||(c[I]={fieldId:I,tag:g.colDef.tag}),g.type==="normal"?c[I].value=p:g.type==="url-text"?c[I].tempText=p:g.type==="url-url"&&(c[I].tempUrl=p)});const d=Object.values(c).map(p=>p.tag==="setting-url"?{fieldId:p.fieldId,value:JSON.stringify({text:p.tempText||"",url:p.tempUrl||""})}:{fieldId:p.fieldId,value:p.value});i.push(d)}i.length>0?(this.hasAttribute("prepend-rows")?this.rows=[...i.reverse(),...this.rows]:this.rows=[...this.rows,...i],this._renderRows(),this._dispatchChange(),alert(`Se importaron ${i.length} registros correctamente.`)):alert("No se pudieron importar registros. Verifique formato.")}_openFormModal(e=null){var d;const t=e!==null,n=`modal-form-${this.id}`;(d=document.getElementById(n))==null||d.remove();const r=`
      <div class="modal fade" id="${n}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold">
                <i class="fa-solid ${t?"fa-pen-to-square":"fa-plus-circle"} me-2"></i>
                ${t?"Editar Registro":"Nuevo Registro"}
              </h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
                <div id="form-container-${this.id}" class="row g-3"></div>
            </div>
            <div class="modal-footer p-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary btn-sm px-4" id="btn-save-row-${this.id}">
                    <i class="fa-solid fa-save me-1"></i> Guardar
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById(`form-container-${this.id}`);this.columns.forEach(p=>{const m=p.tag.replace("setting-","editor-"),g=document.createElement(m);g.setAttribute("table",""),g.setAttribute("field-id",p.id);let I={title:p.title,spanEV:12,options:p.options,currency:p.currency,formula:p.formula,isCalculated:p.isCalculated};if(t){const C=this.rows[e].find(k=>k.fieldId===p.id);C&&(I={...I,...C})}g.setData&&g.setData(I),i.appendChild(g)});const a=()=>{const p=Array.from(i.children);p.forEach(m=>{if(!m.hasAttribute("is-calculated"))return;const g=m.getAttribute("formula");if(g)try{const I=g.replace(/@\{([^}]+)\}/g,(k,x)=>{const F=p.find(B=>B.getAttribute("field-id")===x);if(F){const B=F.querySelector("input");if(B){const re=B.value.replace(/,/g,".");return parseFloat(re)||0}}const H=document.getElementById(`input-${x}`);if(H){const B=H.value.replace(/,/g,".");return parseFloat(B)||0}if(x.startsWith("TOTAL_")){const B=document.getElementById(x);return B&&parseFloat(B.dataset.rawValue)||0}return 0}),C=new Function(`"use strict"; return (${I})`)();if(isFinite(C)&&!isNaN(C)){const k=m.querySelector("input");if(k){const x=Math.round(C*100)/100;k.value=x,m.setAttribute("edit-value",x)}}}catch(I){console.warn("[Table Calculation Error]",I)}})};i.addEventListener("input",a),setTimeout(a,100);const l=document.getElementById(n),c=new bootstrap.Modal(l);c.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const m=Array.from(i.children).map(g=>{const I=g.getData();return I.fieldId=g.getAttribute("field-id"),I});t?this.rows[e]=m:this.hasAttribute("prepend-rows")?this.rows.unshift(m):this.rows.push(m),this._renderRows(),this._dispatchChange(),c.hide(),l.addEventListener("hidden.bs.modal",()=>l.remove())}}}customElements.define("editor-table",ep);const yw=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:ep},Symbol.toStringTag,{value:"Module"}));class tp extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${r}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <textarea class="form-control form-control-sm shadow-none border-1" 
                    id="input-${this.id}" rows="4" style="${n}" 
                    placeholder="Escriba el contenido de ${e}...">${t}</textarea>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-text",tp);const bw=Object.freeze(Object.defineProperty({__proto__:null,EditorText:tp},Symbol.toStringTag,{value:"Module"}));class np extends N{connectedCallback(){super.connectedCallback(),this._initApiFetch()}_applyApiValue(e){const t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}n.url=e,this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(n)),this._isInternalUpdate=!1,this.render()}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}const r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${r}
            </div>
             ${this.renderStyleControls(["bold","italic","color"])} 
          </div>
          
          <div class="mb-2">
            <label class="small text-muted" style="font-size: 0.7rem;">Texto a mostrar</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none" 
                   id="text-${this.id}" value="${n.text}" placeholder="Ej: Visitar Google">
          </div>

          <div>
            <label class="small text-muted" style="font-size: 0.7rem;">Dirección Web (URL)</label>
            <input autocomplete="off" spellcheck="false" type="url" class="form-control form-control-sm shadow-none font-monospace text-primary" 
                   id="url-${this.id}" value="${n.url}" placeholder="https://...">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#text-${this.id}`),t=this.querySelector(`#url-${this.id}`);this._attachStyleEventListeners(e);const n=()=>{this._isInternalUpdate=!0;const r=JSON.stringify({text:e.value,url:t.value});this.setAttribute("edit-value",r),this._isInternalUpdate=!1};e.oninput=n,t.oninput=n}}customElements.define("editor-url",np);const _w=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:np},Symbol.toStringTag,{value:"Module"}));class sp extends N{render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",sp);const vw=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:sp},Symbol.toStringTag,{value:"Module"}));class rp extends N{constructor(){super(),this.chartInstance=null}render(){const e=this.getAttribute("edit-value");if(!e){this.innerHTML="";return}let t={};try{t=JSON.parse(e)}catch{return}const n=`chart-canvas-${this.id}`,r=`
      <div style="position: relative; height: 350px; width: 100%;">
        <canvas id="${n}"></canvas>
      </div>`;this.innerHTML=this.renderViewerStructure(r),setTimeout(()=>{this._buildChart(n,t)},100)}async _buildChart(e,t){const n=document.getElementById(e);if(!n)return;window.Chart||await O(()=>import("https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"),[],import.meta.url),window.ChartDataLabels||await O(()=>import("https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"),[],import.meta.url),this.chartInstance&&this.chartInstance.destroy();const{labels:r,datasets:i}=this._processData(t);if(!i.length){console.warn("[ViewerChart] No hay datos para renderizar");return}let a="bar",l="x";t.type==="bar"?(a="bar",l="y"):t.type==="column"?(a="bar",l="x"):t.type==="line"?a="line":t.type==="pie"&&(a="pie");const c=n.parentElement;let d=350;if(a==="bar"&&l==="y"){const p=80+r.length*40;d=Math.max(350,p)}else a==="pie"&&(d=400);c&&(c.style.height=`${d}px`),Chart.register(ChartDataLabels),this.chartInstance=new Chart(n,{type:a,data:{labels:r,datasets:i},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom"},datalabels:{color:p=>t.type==="pie"?"#fff":"#000",font:{weight:"bold",size:10},formatter:p=>Math.round(p*100)/100,display:p=>p.dataset.data[p.dataIndex]!==0,anchor:"end",align:l==="y"?"end":"top",offset:4}},scales:a==="pie"?{}:{y:{beginAtZero:!0},x:{beginAtZero:!0}}}})}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"},{bg:"rgba(255, 159, 64, 0.7)",border:"rgba(255, 159, 64, 1)"}];return t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i!==""),Array.isArray(e.series)&&(n=e.series.map((i,a)=>{const l=r[a%r.length],c=(i.data||"").split(",").map(d=>parseFloat(d)||0);return{label:i.name||`Serie ${a+1}`,data:c,backgroundColor:e.type==="pie"?r.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?r.map(d=>d.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0)),{labels:t,datasets:n}}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value");if(!t)return"";let n=JSON.parse(t);const{labels:r,datasets:i}=this._processData(n);let a=`*📊 ${e}*
`;return i.length?(i.forEach(l=>{a+=`
*${l.label}*:
`,l.data.forEach((c,d)=>{a+=`- ${r[d]||"Item"}: ${c}
`})}),a):a+"_(Sin datos)_"}}customElements.define("viewer-chart",rp);const Ew=Object.freeze(Object.defineProperty({__proto__:null,ViewerChart:rp},Symbol.toStringTag,{value:"Module"}));class ip extends N{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getCommonStyles(),r=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),i=`<div class="py-1" style="${n}"> 
          <span class="opacity-75 me-1">${t}</span>${r}
        </div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),n=this.getAttribute("currency")||"$",r=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${n} ${r}`}}customElements.define("viewer-currency",ip);const ww=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:ip},Symbol.toStringTag,{value:"Module"}));class op extends N{render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let n="---";e&&(n=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`<div class="py-1" style="${t}">${n}</div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),n=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${n}`}}customElements.define("viewer-date",op);const Iw=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:op},Symbol.toStringTag,{value:"Module"}));class ap extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),n=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-email",ap);const Tw=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:ap},Symbol.toStringTag,{value:"Module"}));class lp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-number",lp);const Aw=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:lp},Symbol.toStringTag,{value:"Module"}));class cp extends N{render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
          <input autocomplete="off" spellcheck="false" type="password" class="form-control form-control-sm border-0 bg-transparent p-0 shadow-none fw-bold" 
                 id="val-${this.id}" value="${e}" readonly style="width: auto; min-width: 100px;">
          <div class="btn-group">
            <button class="btn btn-sm text-primary p-1 toggle-password" data-target="val-${this.id}" title="Ver/Ocultar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm text-body-secondary p-1" id="btn-copy-${this.id}" title="Copiar">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",cp);const Sw=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:cp},Symbol.toStringTag,{value:"Module"}));class up extends N{render(){const e=this.getAttribute("edit-value")||"0",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",up);const Cw=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:up},Symbol.toStringTag,{value:"Module"}));class dp extends N{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("viewer-section",dp);const Pw=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:dp},Symbol.toStringTag,{value:"Module"}));class hp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-select",hp);const Rw=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:hp},Symbol.toStringTag,{value:"Module"}));class pp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}customElements.define("viewer-string",pp);const xw=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:pp},Symbol.toStringTag,{value:"Module"}));class fp extends N{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
      <div class="viewer-container">
        <div class="d-flex justify-content-between align-items-end mb-2">
            <label class="d-block small text-muted text-uppercase fw-semibold mb-0" style="font-size: 0.7rem;">
                ${e}
            </label>
            
            <div class="input-group input-group-sm" style="width: 220px;">
                <span class="input-group-text border-end-0 text-muted ps-2 pe-1"><i class="fa-solid fa-search"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none ps-1" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
                ${this._searchTerm?`<button class="btn btn-outline-secondary border-start-0 text-muted" id="btn-clear-${this.id}"><i class="fa-solid fa-times"></i></button>`:""}
            </div>
        </div>
        
        <div class="card shadow-sm border-0 overflow-hidden">
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle mb-0">
                    <thead class=" text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class=" fw-bold text-body small" style="border-top: 2px solid #dee2e6;"></tfoot>
                </table>
            </div>
            <div id="empty-state-${this.id}" class="text-center py-3 text-muted small bg-light" style="display:none;">
                Sin registros coincidentes.
            </div>
        </div>
      </div>
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],n=(this.columns||[]).filter(d=>!d.hideWhatsapp);if(n.length===0)return`*${e}:* (Sin columnas visibles)`;if(t.length===0)return`*${e}:* (Sin datos)`;const r=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),i=(d,p)=>{const m=d.find(I=>I.fieldId===p.id);let g=m?String(m.value):"";if((g==="null"||g==="undefined")&&(g=""),p.tag==="setting-currency")g=`$ ${parseFloat(g||0).toFixed(2)}`;else if(p.tag==="setting-percentage")g=`${g}%`;else if(p.tag==="setting-boolean")g=g==="true"?"SI":"NO";else if(p.tag==="setting-url")try{const I=JSON.parse(g);let C=I.url||"";if(C){C.startsWith("http")||(C="https://"+C);try{C=encodeURI(decodeURI(C))}catch{C=encodeURI(C)}}g=I.text?`${I.text} (${C})`:C}catch{}return g},a=n.map(d=>{let p=d.title.length;return t.forEach(m=>{const g=i(m,d);g.length>p&&(p=g.length)}),p}),l=a.reduce((d,p)=>d+p,0)+n.length*3;let c=`
*${e}*:
`;return l>r?t.forEach((d,p)=>{c+=`_Item ${p+1}_
`,n.forEach(m=>{const g=i(d,m);c+=`${m.title}: ${g}
`}),c+=`
`}):(c+="```\n",c+=n.map((d,p)=>d.title.padEnd(a[p])).join(" | ")+`
`,c+=n.map((d,p)=>"-".repeat(a[p])).join("-|-")+`
`,t.forEach(d=>{c+=n.map((p,m)=>i(d,p).padEnd(a[m])).join(" | ")+`
`}),c+="```\n"),c}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows();const r=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!r){this.render();const i=this.querySelector(`#search-${this.id}`);i.focus(),i.setSelectionRange(i.value.length,i.value.length)}else!this._searchTerm&&r&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(e){if(this.columns.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",this.columns.forEach(t=>{const n=document.createElement("th"),r=t.alignment||(this._isNumeric(t.tag)?"right":"left");n.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",n.style.textAlign=r==="right"?"right":r==="center"?"center":"left",n.style.cursor="pointer",n.title="Click para ordenar";let i='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===t.id&&(this._sortAsc?i='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':i='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),n.innerHTML=`<span>${t.title}</span>${i}`,n.onclick=()=>{this._sortFieldId===t.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=t.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(n)})}}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let n=[...this.rows];if(this._searchTerm.trim()){const r=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);n=n.filter(i=>{const a=i.map(l=>{let c=l.value;if(typeof c=="string"&&c.startsWith("{")&&c.includes('"url"'))try{c=JSON.parse(c).text}catch{}return String(c||"").toLowerCase()}).join(" ");return r.every(l=>a.includes(l))})}if(this._sortFieldId){const r=this.columns.find(a=>a.id===this._sortFieldId),i=r?this._isNumeric(r.tag):!1;n.sort((a,l)=>{const c=a.find(I=>I.fieldId===this._sortFieldId),d=l.find(I=>I.fieldId===this._sortFieldId);let p=c?c.value:"",m=d?d.value:"",g=0;if(i){const I=parseFloat(p)||0,C=parseFloat(m)||0;g=I-C}else{if(r&&r.tag==="setting-url"){try{p=JSON.parse(p).text||""}catch{}try{m=JSON.parse(m).text||""}catch{}}g=String(p).localeCompare(String(m))}return this._sortAsc?g:g*-1})}if(n.length===0){t&&(t.style.display="block"),this._renderFooter(n);return}t&&(t.style.display="none"),n.forEach(r=>{const i=document.createElement("tr");this.columns.forEach(a=>{const l=document.createElement("td"),c=a.alignment||(this._isNumeric(a.tag)?"right":"left");l.style.textAlign=c==="right"?"right":c==="center"?"center":"left",l.className="px-3 py-2";const d=r.find(I=>I.fieldId===a.id),p=a.tag.replace("setting-","viewer-"),m=document.createElement(p);m.setAttribute("table","");const g={...d,title:"",spanEV:12,options:a.options,currency:a.currency};m.setData&&m.setData(g),l.appendChild(m),i.appendChild(l)}),e.appendChild(i)}),this._renderFooter(n)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let r="<tr>";this.columns.forEach(i=>{const a=i.alignment||(this._isNumeric(i.tag)?"right":"left"),l=a==="right"?"right":a==="center"?"center":"left";let c="";if(i.total){const d=e.reduce((p,m)=>{const g=m.find(C=>C.fieldId===i.id),I=parseFloat(g?g.value:0);return p+(isNaN(I)?0:I)},0);i.tag==="setting-currency"?c=`${i.currency||"$"} ${d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:i.tag==="setting-percentage"?c=`${d}%`:c=d}r+=`<td class="px-3 py-2" style="text-align: ${l};">${c}</td>`}),r+="</tr>",t.innerHTML=r}}customElements.define("viewer-table",fp);const kw=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:fp},Symbol.toStringTag,{value:"Module"}));class mp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()} white-space: pre-wrap;">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`
*${e}*
> ${t.replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",mp);const Lw=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:mp},Symbol.toStringTag,{value:"Module"}));class gp extends N{render(){const e=this.getAttribute("edit-value");let t={url:"#",text:"---"};try{e&&(t=JSON.parse(e))}catch{}let n=t.url||"#";n&&n!=="#"&&(n=n.trim(),n.startsWith("http")||(n="https://"+n));const r=this._checkExtension(n,["mp3","wav","ogg","m4a"]),i=this._checkExtension(n,["jpg","jpeg","png","gif","webp","svg"]),a=`<div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(r,i)}
          <a href="${n}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
            <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${t.text||t.url||"---"}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(a),this._attachEvents(n,t.text,r,i)}_checkExtension(e,t){if(!e||e==="#")return!1;const n=e.split("?")[0].toLowerCase();return t.some(r=>n.endsWith("."+r))}_renderActionButton(e,t){return e?`<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
              </button>`:t?`<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen">
                <i class="fa-regular fa-image"></i>
              </button>`:""}_attachEvents(e,t,n,r){if(n){const i=this.querySelector(".btn-play-audio");i&&(i.onclick=()=>this._playAudio(e,t))}if(r){const i=this.querySelector(".btn-view-image");i&&(i.onclick=()=>this._showImageModal(e,t))}}_playAudio(e,t){let n=document.getElementById("global-audio-player");if(!n){if(n=document.createElement("div"),n.id="global-audio-player",n.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const a=document.createElement("style");a.id="audio-anim-style",a.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(a)}document.body.appendChild(n)}n.innerHTML=`
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div class="small fw-bold text-body text-truncate me-2" style="max-width: 280px;" title="${t}">
            <i class="fa-solid fa-music text-success me-2"></i>${t||"Audio Sin Título"}
        </div>
        <button class="btn btn-sm text-body-secondary p-0" id="close-audio" title="Cerrar" style="line-height: 1;">
            <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <div class="d-flex align-items-center w-100">
          <div class="spinner-border text-primary spinner-border-sm me-2" role="status" id="audio-loading" style="display:none;"></div>
          <audio controls autoplay style="width: 100%; height: 30px; outline: none;" class="w-100">
            <source src="${e}" type="audio/mpeg">
            Tu navegador no soporta audio.
          </audio>
      </div>
    `;const r=n.querySelector("audio"),i=n.querySelector("#audio-loading");r.onloadstart=()=>{i.style.display="block"},r.oncanplay=()=>{i.style.display="none"},r.load(),r.play().catch(a=>console.log("Autoplay bloqueado o error:",a)),n.querySelector("#close-audio").onclick=()=>{n.remove()}}_showImageModal(e,t){const n=document.getElementById("img-preview-modal");n&&n.remove();const r=`
      <div class="modal fade" id="img-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-white p-2 rounded-circle opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
              <img src="${e}" class="img-fluid rounded shadow" style="max-height: 85vh;" alt="${t||"Vista previa"}">
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById("img-preview-modal");new bootstrap.Modal(i).show(),i.addEventListener("hidden.bs.modal",()=>i.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const n=JSON.parse(t);let r=n.url||"";if(r){r.startsWith("http")||(r="https://"+r);try{r=encodeURI(decodeURI(r))}catch{r=encodeURI(r)}}t=n.text?`${n.text} (${r})`:r}catch{}return`*${e}:* ${t}`}}customElements.define("viewer-url",gp);const Vw=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:gp},Symbol.toStringTag,{value:"Module"}));class yp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=e==="true",a=`
        <div style="color: ${n?"#198754":"#dc3545"}; font-size: 1.1rem; padding: 2px 0; font-weight: bold;">
            ${n?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(a,t)}}customElements.define("printer-boolean",yp);const Dw=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:yp},Symbol.toStringTag,{value:"Module"}));class bp extends N{constructor(){super(),this.chartInstance=null}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._renderChart(),100)}render(){this.getAttribute("edit-value");const e=this.getAttribute("type")||"Visual",n=`
      <div style="width: 100%; height: 300px; page-break-inside: avoid;">
        <canvas id="${`print-chart-${this.id}`}"></canvas>
      </div>`;this.innerHTML=this.renderPrinterStructure(n,e)}async _renderChart(){const e=this.getAttribute("edit-value");if(!e)return;const t=`print-chart-${this.id}`,n=this.querySelector(`#${t}`);if(!n)return;let r;try{r=JSON.parse(e)}catch(l){console.error("Error parsing chart config:",l);return}window.Chart||await this._loadChartJS(),this.chartInstance&&this.chartInstance.destroy();const{labels:i,datasets:a}=this._processData(r);if(!a.length){this._drawPlaceholder(n,"Sin datos para mostrar");return}try{const l=r.type==="pie"?"pie":r.type==="line"?"line":"bar",c=r.type==="bar"?"y":"x",d=n.parentElement;let p=300;if(r.type==="bar"){const m=80+i.length*35;p=Math.max(300,m)}else r.type==="pie"&&(p=350);d&&(d.style.height=`${p}px`),this.chartInstance=new Chart(n,{type:l,data:{labels:i,datasets:a},options:{indexAxis:c,animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:!0,color:"#000",font:{weight:"bold",size:9},formatter:m=>Math.round(m*100)/100,anchor:"end",align:c==="y"?"end":"top",offset:2}},scales:l==="pie"?{}:{y:{beginAtZero:!0,ticks:{font:{size:9}}},x:{beginAtZero:!0,ticks:{font:{size:9}}}}}})}catch(l){console.error("Error al renderizar gráfico para impresión:",l),this._drawPlaceholder(n,"Error al renderizar gráfico")}}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"}];return t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i!==""),Array.isArray(e.series)&&(n=e.series.map((i,a)=>{const l=r[a%r.length],c=(i.data||"").split(",").map(d=>parseFloat(d)||0);return{label:i.name||`Serie ${a+1}`,data:c,backgroundColor:e.type==="pie"?r.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?r.map(d=>d.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0)),{labels:t,datasets:n}}_drawPlaceholder(e,t){const n=e.getContext("2d");n.fillStyle="#f8f9fa",n.fillRect(0,0,e.width,e.height),n.fillStyle="#6c757d",n.font="14px Arial",n.textAlign="center",n.fillText(t,e.width/2,e.height/2)}async _loadChartJS(){return new Promise(e=>{if(window.Chart){e();return}const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",t.onload=e,document.head.appendChild(t)})}}customElements.define("printer-chart",bp);const Ow=Object.freeze(Object.defineProperty({__proto__:null,PrinterChart:bp},Symbol.toStringTag,{value:"Module"}));class _p extends N{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getAttribute("type")||"Visual",r=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),a=`
        <div style="${r} font-size: 1.05rem; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${i}
        </div>`;this.innerHTML=this.renderPrinterStructure(a,n)}}customElements.define("printer-currency",_p);const Mw=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:_p},Symbol.toStringTag,{value:"Module"}));class vp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let r="---";e&&(r=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`
        <div style="${n} font-size: 1.05rem; padding: 2px 0;">
            ${r}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-date",vp);const Nw=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:vp},Symbol.toStringTag,{value:"Module"}));class Ep extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-email",Ep);const $w=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:Ep},Symbol.toStringTag,{value:"Module"}));class wp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-number",wp);const Uw=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:wp},Symbol.toStringTag,{value:"Module"}));class Ip extends N{render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",Ip);const Fw=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:Ip},Symbol.toStringTag,{value:"Module"}));class Tp extends N{render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let r="1.05rem";t==="Facil Lectura"&&(r="1.3rem");const i=`
      <div style="${n} font-size: ${r}; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-percentage",Tp);const Bw=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:Tp},Symbol.toStringTag,{value:"Module"}));class Ap extends N{render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",Ap);const jw=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:Ap},Symbol.toStringTag,{value:"Module"}));class Sp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-select",Sp);const qw=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:Sp},Symbol.toStringTag,{value:"Module"}));class Cp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-string",Cp);const Hw=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:Cp},Symbol.toStringTag,{value:"Module"}));class Pp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns");this.getAttribute("title");const n=this.getAttribute("type")||"Visual";let r=[],i=[];try{e&&(r=JSON.parse(e)),t&&(i=JSON.parse(t))}catch(g){console.warn("Error parseando tabla",g)}const a=i.filter(g=>!g.hidePrint),l=n==="Compacto",c=n==="Facil Lectura",d=`width: 100%; border-collapse: collapse; font-size: ${l?"0.70rem":c?"1rem":"0.0.70rem"};`,p=l||c?"1px":"10px",m=`
      <table style="${d}">
        <thead>
          <tr style="background-color: #f8f9fa;">
            ${a.map(g=>`
              <th style="padding: ${p}; border: 1px solid #dee2e6; text-align: ${g.alignment||"left"}; text-transform: uppercase; font-size: 0.7rem;">
                ${g.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${r.length>0?r.map((g,I)=>`
            <tr style="background-color: ${I%2===0?"#fff":"#fcfcfc"};">
               ${a.map(C=>{const k=g.find(x=>x.fieldId===C.id)||{};return`
                  <td style="padding: ${p}; border: 1px solid #dee2e6; text-align: ${C.alignment||"left"};">
                    ${this._generateCellHTML(C,k,n)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${i.length}" style="text-align:center; padding: 20px;">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(r,i,p)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(m,n)}_renderTotalRow(e,t,n){return t.some(i=>i.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(i=>{let a="";if(i.total){const l=e.reduce((c,d)=>{const p=d.find(m=>m.fieldId===i.id);return c+(parseFloat(p==null?void 0:p.value)||0)},0);i.tag==="setting-currency"?a=`${i.currency||"$"} ${l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:a=l}return`<td style="padding: ${n}; border: 1px solid #dee2e6; text-align: ${i.alignment||"left"};">${a}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,n){const r=e.tag.replace("setting-","printer-"),i=document.createElement(r);return i.setAttribute("table",""),i.setAttribute("type",n),i.setAttribute("edit-value",t.value||""),t.bold&&i.setAttribute("bold",""),t.italic&&i.setAttribute("italic",""),t.color&&i.setAttribute("color",t.color),e.currency&&i.setAttribute("currency",e.currency),i.outerHTML}}customElements.define("printer-table",Pp);const zw=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:Pp},Symbol.toStringTag,{value:"Module"}));class Rp extends N{render(){const e=this.getAttribute("edit-value")||"",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} line-height: 1.2; white-space: pre-wrap; text-align: left; font-size: 1.05rem;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-text",Rp);const Ww=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:Rp},Symbol.toStringTag,{value:"Module"}));class xp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let n={url:"",text:"---"};try{e&&(n=JSON.parse(e))}catch{}let r=n.url||"";try{r&&(r=decodeURI(r))}catch{}const i=`
        <div style="font-size: 1.05rem; color: #000;">
            ${n.text||"---"}
        </div>
        <div style="font-size: 0.75rem; color: #888; font-family: monospace; margin-top: 2px; word-break: break-all;">
            ${r}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-url",xp);const Gw=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:xp},Symbol.toStringTag,{value:"Module"}));
