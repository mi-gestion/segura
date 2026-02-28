var df=Object.defineProperty;var uf=(s,e,t)=>e in s?df(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var vl=(s,e,t)=>uf(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const hf="modulepreload",pf=function(s,e){return new URL(s,e).href},_l={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=o(t.map(h=>{if(h=pf(h,n),h in _l)return;_l[h]=!0;const f=h.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!n)for(let k=l.length-1;k>=0;k--){const x=l[k];if(x.href===h&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${g}`))return;const C=document.createElement("link");if(C.rel=f?"stylesheet":hf,f||(C.as="script"),C.crossOrigin="",C.href=h,u&&C.setAttribute("nonce",u),document.head.appendChild(C),f)return new Promise((k,x)=>{C.addEventListener("load",k),C.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Ks=(s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Ve={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},select:{icon:"❓",shortLabel:"select",longLabel:"Opciones",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,style:!0}},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},percentage:{icon:"%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0}},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4,color:"warning",settings:{width:!0,visibility:!0,style:!0}},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6,color:"warning",settings:{width:!0,visibility:!0}},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},chart:{icon:"📊",shortLabel:"Gráfico",longLabel:"Gráfico Visual",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12,color:"dark",settings:{width:!0,visibility:!0,style:!0}}},ff=()=>{};var wl={};/**
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
 */const Zc=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},mf=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],l=s[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,l=o?s[r+1]:0,c=r+2<s.length,u=c?s[r+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),n.push(t[h],t[f],t[g],t[E])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Zc(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):mf(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],l=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const f=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||l==null||u==null||f==null)throw new gf;const g=i<<2|l>>4;if(n.push(g),u!==64){const E=l<<4&240|u>>2;if(n.push(E),f!==64){const C=u<<6&192|f;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class gf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yf=function(s){const e=Zc(s);return ed.encodeByteArray(e,!0)},br=function(s){return yf(s).replace(/\./g,"")},td=function(s){try{return ed.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const vf=()=>bf().__FIREBASE_DEFAULTS__,_f=()=>{if(typeof process>"u"||typeof wl>"u")return;const s=wl.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},wf=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&td(s[1]);return e&&JSON.parse(e)},qr=()=>{try{return ff()||vf()||_f()||wf()}catch(s){`${s}`;return}},nd=s=>{var e,t;return(t=(e=qr())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Ef=s=>{const e=nd(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},sd=()=>{var s;return(s=qr())==null?void 0:s.config},rd=s=>{var e;return(e=qr())==null?void 0:e[`_${s}`]};/**
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
 */function xn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function id(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Tf(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[br(JSON.stringify(t)),br(JSON.stringify(o)),""].join(".")}const os={};function Af(){const s={prod:[],emulator:[]};for(const e of Object.keys(os))os[e]?s.emulator.push(e):s.prod.push(e);return s}function Sf(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let El=!1;function od(s,e){if(typeof window>"u"||typeof document>"u"||!xn(window.location.host)||os[s]===e||os[s]||El)return;os[s]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",i=Af().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{El=!0,o()},g}function h(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=Sf(n),E=t("text"),C=document.getElementById(E)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),B=t("preprendIcon"),z=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),h(x,k);const re=u();c(z,B),j.append(z,C,x,re),document.body.appendChild(j)}i?(C.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Pf(){var e;const s=(e=qr())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xf(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lf(){const s=Ae();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Vf(){return!Pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Df(){try{return typeof indexedDB=="object"}catch{return!1}}function Of(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mf="FirebaseError";class lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Mf,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Nf(i,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new lt(r,l,n)}}function Nf(s,e){return s.replace($f,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const $f=/\{\$([^}]+)}/g;function Uf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Kt(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(Il(i)&&Il(o)){if(!Kt(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Il(s){return s!==null&&typeof s=="object"}/**
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
 */function ws(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function es(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ts(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Ff(s,e){const t=new Bf(s,e);return t.subscribe.bind(t)}class Bf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");jf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=Mi),r.error===void 0&&(r.error=Mi),r.complete===void 0&&(r.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jf(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Mi(){}/**
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
 */class qf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new If;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zf(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(s){return s===Ht?void 0:s}function zf(s){return s.instantiationMode==="EAGER"}/**
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
 */class Gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(W||(W={}));const Wf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Kf=W.INFO,Qf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Jf=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=Qf[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class So{constructor(e){this.name=e,this._logLevel=Kf,this._logHandler=Jf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Yf=(s,e)=>e.some(t=>s instanceof t);let Tl,Al;function Xf(){return Tl||(Tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zf(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ad=new WeakMap,Qi=new WeakMap,ld=new WeakMap,Ni=new WeakMap,Co=new WeakMap;function em(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(Tt(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ad.set(t,s)}).catch(()=>{}),Co.set(e,s),e}function tm(s){if(Qi.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Qi.set(s,e)}let Ji={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Qi.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ld.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function nm(s){Ji=s(Ji)}function sm(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call($i(this),e,...t);return ld.set(n,e.sort?e.sort():[e]),Tt(n)}:Zf().includes(s)?function(...e){return s.apply($i(this),e),Tt(ad.get(this))}:function(...e){return Tt(s.apply($i(this),e))}}function rm(s){return typeof s=="function"?sm(s):(s instanceof IDBTransaction&&tm(s),Yf(s,Xf())?new Proxy(s,Ji):s)}function Tt(s){if(s instanceof IDBRequest)return em(s);if(Ni.has(s))return Ni.get(s);const e=rm(s);return e!==s&&(Ni.set(s,e),Co.set(e,s)),e}const $i=s=>Co.get(s);function im(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),l=Tt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const om=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],Ui=new Map;function Sl(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=am.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||om.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return Ui.set(e,i),i}nm(s=>({...s,get:(e,t,n)=>Sl(e,t)||s.get(e,t,n),has:(e,t)=>!!Sl(e,t)||s.has(e,t)}));/**
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
 */class lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function cm(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yi="@firebase/app",Cl="0.14.6";/**
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
 */const rt=new So("@firebase/app"),dm="@firebase/app-compat",um="@firebase/analytics-compat",hm="@firebase/analytics",pm="@firebase/app-check-compat",fm="@firebase/app-check",mm="@firebase/auth",gm="@firebase/auth-compat",ym="@firebase/database",bm="@firebase/data-connect",vm="@firebase/database-compat",_m="@firebase/functions",wm="@firebase/functions-compat",Em="@firebase/installations",Im="@firebase/installations-compat",Tm="@firebase/messaging",Am="@firebase/messaging-compat",Sm="@firebase/performance",Cm="@firebase/performance-compat",Pm="@firebase/remote-config",Rm="@firebase/remote-config-compat",xm="@firebase/storage",km="@firebase/storage-compat",Lm="@firebase/firestore",Vm="@firebase/ai",Dm="@firebase/firestore-compat",Om="firebase",Mm="12.6.0";/**
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
 */const Xi="[DEFAULT]",Nm={[Yi]:"fire-core",[dm]:"fire-core-compat",[hm]:"fire-analytics",[um]:"fire-analytics-compat",[fm]:"fire-app-check",[pm]:"fire-app-check-compat",[mm]:"fire-auth",[gm]:"fire-auth-compat",[ym]:"fire-rtdb",[bm]:"fire-data-connect",[vm]:"fire-rtdb-compat",[_m]:"fire-fn",[wm]:"fire-fn-compat",[Em]:"fire-iid",[Im]:"fire-iid-compat",[Tm]:"fire-fcm",[Am]:"fire-fcm-compat",[Sm]:"fire-perf",[Cm]:"fire-perf-compat",[Pm]:"fire-rc",[Rm]:"fire-rc-compat",[xm]:"fire-gcs",[km]:"fire-gcs-compat",[Lm]:"fire-fst",[Dm]:"fire-fst-compat",[Vm]:"fire-vertex","fire-js":"fire-js",[Om]:"fire-js-all"};/**
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
 */const vr=new Map,$m=new Map,Zi=new Map;function Pl(s,e){try{s.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function En(s){const e=s.name;if(Zi.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,s);for(const t of vr.values())Pl(t,s);for(const t of $m.values())Pl(t,s);return!0}function Po(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Me(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new _s("app","Firebase",Um);/**
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
 */const kn=Mm;function cd(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Xi,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});if(t||(t=sd()),!t)throw At.create("no-options");const i=vr.get(r);if(i){if(Kt(t,i.options)&&Kt(n,i.config))return i;throw At.create("duplicate-app",{appName:r})}const o=new Gf(r);for(const c of Zi.values())o.addComponent(c);const l=new Fm(t,n,o);return vr.set(r,l),l}function dd(s=Xi){const e=vr.get(s);if(!e&&s===Xi&&sd())return cd();if(!e)throw At.create("no-app",{appName:s});return e}function St(s,e,t){let n=Nm[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(o.join(" "));return}En(new Qt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Bm="firebase-heartbeat-database",jm=1,hs="firebase-heartbeat-store";let Fi=null;function ud(){return Fi||(Fi=im(Bm,jm,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(hs)}catch(t){console.warn(t)}}}}).catch(s=>{throw At.create("idb-open",{originalErrorMessage:s.message})})),Fi}async function qm(s){try{const t=(await ud()).transaction(hs),n=await t.objectStore(hs).get(hd(s));return await t.done,n}catch(e){if(e instanceof lt)rt.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function Rl(s,e){try{const n=(await ud()).transaction(hs,"readwrite");await n.objectStore(hs).put(e,hd(s)),await n.done}catch(t){if(t instanceof lt)rt.warn(t.message);else{const n=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(n.message)}}}function hd(s){return`${s.name}!${s.options.appId}`}/**
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
 */const Hm=1024,zm=30;class Gm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Km(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>zm){const o=Qm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){rt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xl(),{heartbeatsToSend:n,unsentEntries:r}=Wm(this._heartbeatsCache.heartbeats),i=br(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return rt.warn(t),""}}}function xl(){return new Date().toISOString().substring(0,10)}function Wm(s,e=Hm){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),kl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),kl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Km{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Df()?Of().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function kl(s){return br(JSON.stringify({version:2,heartbeats:s})).length}function Qm(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function Jm(s){En(new Qt("platform-logger",e=>new lm(e),"PRIVATE")),En(new Qt("heartbeat",e=>new Gm(e),"PRIVATE")),St(Yi,Cl,s),St(Yi,Cl,"esm2020"),St("fire-js","")}Jm("");var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,pd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.F=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(I,_,A){for(var b=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)b[Re-2]=arguments[Re];return y.prototype[_].apply(I,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,y,v){v||(v=0);const I=Array(16);if(typeof y=="string")for(var _=0;_<16;++_)I[_]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(_=0;_<16;++_)I[_]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],_=w.g[2];let A=w.g[3],b;b=y+(A^v&(_^A))+I[0]+3614090360&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(_^y&(v^_))+I[1]+3905402710&4294967295,A=y+(b<<12&4294967295|b>>>20),b=_+(v^A&(y^v))+I[2]+606105819&4294967295,_=A+(b<<17&4294967295|b>>>15),b=v+(y^_&(A^y))+I[3]+3250441966&4294967295,v=_+(b<<22&4294967295|b>>>10),b=y+(A^v&(_^A))+I[4]+4118548399&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(_^y&(v^_))+I[5]+1200080426&4294967295,A=y+(b<<12&4294967295|b>>>20),b=_+(v^A&(y^v))+I[6]+2821735955&4294967295,_=A+(b<<17&4294967295|b>>>15),b=v+(y^_&(A^y))+I[7]+4249261313&4294967295,v=_+(b<<22&4294967295|b>>>10),b=y+(A^v&(_^A))+I[8]+1770035416&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(_^y&(v^_))+I[9]+2336552879&4294967295,A=y+(b<<12&4294967295|b>>>20),b=_+(v^A&(y^v))+I[10]+4294925233&4294967295,_=A+(b<<17&4294967295|b>>>15),b=v+(y^_&(A^y))+I[11]+2304563134&4294967295,v=_+(b<<22&4294967295|b>>>10),b=y+(A^v&(_^A))+I[12]+1804603682&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(_^y&(v^_))+I[13]+4254626195&4294967295,A=y+(b<<12&4294967295|b>>>20),b=_+(v^A&(y^v))+I[14]+2792965006&4294967295,_=A+(b<<17&4294967295|b>>>15),b=v+(y^_&(A^y))+I[15]+1236535329&4294967295,v=_+(b<<22&4294967295|b>>>10),b=y+(_^A&(v^_))+I[1]+4129170786&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^_&(y^v))+I[6]+3225465664&4294967295,A=y+(b<<9&4294967295|b>>>23),b=_+(y^v&(A^y))+I[11]+643717713&4294967295,_=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(_^A))+I[0]+3921069994&4294967295,v=_+(b<<20&4294967295|b>>>12),b=y+(_^A&(v^_))+I[5]+3593408605&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^_&(y^v))+I[10]+38016083&4294967295,A=y+(b<<9&4294967295|b>>>23),b=_+(y^v&(A^y))+I[15]+3634488961&4294967295,_=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(_^A))+I[4]+3889429448&4294967295,v=_+(b<<20&4294967295|b>>>12),b=y+(_^A&(v^_))+I[9]+568446438&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^_&(y^v))+I[14]+3275163606&4294967295,A=y+(b<<9&4294967295|b>>>23),b=_+(y^v&(A^y))+I[3]+4107603335&4294967295,_=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(_^A))+I[8]+1163531501&4294967295,v=_+(b<<20&4294967295|b>>>12),b=y+(_^A&(v^_))+I[13]+2850285829&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^_&(y^v))+I[2]+4243563512&4294967295,A=y+(b<<9&4294967295|b>>>23),b=_+(y^v&(A^y))+I[7]+1735328473&4294967295,_=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(_^A))+I[12]+2368359562&4294967295,v=_+(b<<20&4294967295|b>>>12),b=y+(v^_^A)+I[5]+4294588738&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^_)+I[8]+2272392833&4294967295,A=y+(b<<11&4294967295|b>>>21),b=_+(A^y^v)+I[11]+1839030562&4294967295,_=A+(b<<16&4294967295|b>>>16),b=v+(_^A^y)+I[14]+4259657740&4294967295,v=_+(b<<23&4294967295|b>>>9),b=y+(v^_^A)+I[1]+2763975236&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^_)+I[4]+1272893353&4294967295,A=y+(b<<11&4294967295|b>>>21),b=_+(A^y^v)+I[7]+4139469664&4294967295,_=A+(b<<16&4294967295|b>>>16),b=v+(_^A^y)+I[10]+3200236656&4294967295,v=_+(b<<23&4294967295|b>>>9),b=y+(v^_^A)+I[13]+681279174&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^_)+I[0]+3936430074&4294967295,A=y+(b<<11&4294967295|b>>>21),b=_+(A^y^v)+I[3]+3572445317&4294967295,_=A+(b<<16&4294967295|b>>>16),b=v+(_^A^y)+I[6]+76029189&4294967295,v=_+(b<<23&4294967295|b>>>9),b=y+(v^_^A)+I[9]+3654602809&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^_)+I[12]+3873151461&4294967295,A=y+(b<<11&4294967295|b>>>21),b=_+(A^y^v)+I[15]+530742520&4294967295,_=A+(b<<16&4294967295|b>>>16),b=v+(_^A^y)+I[2]+3299628645&4294967295,v=_+(b<<23&4294967295|b>>>9),b=y+(_^(v|~A))+I[0]+4096336452&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~_))+I[7]+1126891415&4294967295,A=y+(b<<10&4294967295|b>>>22),b=_+(y^(A|~v))+I[14]+2878612391&4294967295,_=A+(b<<15&4294967295|b>>>17),b=v+(A^(_|~y))+I[5]+4237533241&4294967295,v=_+(b<<21&4294967295|b>>>11),b=y+(_^(v|~A))+I[12]+1700485571&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~_))+I[3]+2399980690&4294967295,A=y+(b<<10&4294967295|b>>>22),b=_+(y^(A|~v))+I[10]+4293915773&4294967295,_=A+(b<<15&4294967295|b>>>17),b=v+(A^(_|~y))+I[1]+2240044497&4294967295,v=_+(b<<21&4294967295|b>>>11),b=y+(_^(v|~A))+I[8]+1873313359&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~_))+I[15]+4264355552&4294967295,A=y+(b<<10&4294967295|b>>>22),b=_+(y^(A|~v))+I[6]+2734768916&4294967295,_=A+(b<<15&4294967295|b>>>17),b=v+(A^(_|~y))+I[13]+1309151649&4294967295,v=_+(b<<21&4294967295|b>>>11),b=y+(_^(v|~A))+I[4]+4149444226&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~_))+I[11]+3174756917&4294967295,A=y+(b<<10&4294967295|b>>>22),b=_+(y^(A|~v))+I[2]+718787259&4294967295,_=A+(b<<15&4294967295|b>>>17),b=v+(A^(_|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(_+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+_&4294967295,w.g[3]=w.g[3]+A&4294967295}n.prototype.v=function(w,y){y===void 0&&(y=w.length);const v=y-this.blockSize,I=this.C;let _=this.h,A=0;for(;A<y;){if(_==0)for(;A<=v;)r(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(I[_++]=w.charCodeAt(A++),_==this.blockSize){r(this,I),_=0;break}}else for(;A<y;)if(I[_++]=w[A++],_==this.blockSize){r(this,I),_=0;break}}this.h=_,this.o+=y},n.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)w[y++]=this.g[v]>>>I&255;return w};function i(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;const v=[];let I=!0;for(let _=w.length-1;_>=0;_--){const A=w[_]|0;I&&A==y||(v[_]=A,I=!1)}this.g=v}var l={};function c(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return f;if(w<0)return x(u(-w));const y=[];let v=1;for(let I=0;w>=v;I++)y[I]=w/v|0,v*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(h(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(y,8));let I=f;for(let A=0;A<w.length;A+=8){var _=Math.min(8,w.length-A);const b=parseInt(w.substring(A,A+_),y);_<8?(_=u(Math.pow(y,_)),I=I.j(_).add(u(b))):(I=I.j(v),I=I.add(u(b)))}return I}var f=c(0),g=c(1),E=c(16777216);s=o.prototype,s.m=function(){if(k(this))return-x(this).m();let w=0,y=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);w+=(I>=0?I:4294967296+I)*y,y*=4294967296}return w},s.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+x(this).toString(w);const y=u(Math.pow(w,6));var v=this;let I="";for(;;){const _=re(v,y).g;v=B(v,_.j(y));let A=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=_,C(v))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},s.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}s.l=function(w){return w=B(this,w),k(w)?-1:C(w)?0:1};function x(w){const y=w.g.length,v=[];for(let I=0;I<y;I++)v[I]=~w.g[I];return new o(v,~w.h).add(g)}s.abs=function(){return k(this)?x(this):this},s.add=function(w){const y=Math.max(this.g.length,w.g.length),v=[];let I=0;for(let _=0;_<=y;_++){let A=I+(this.i(_)&65535)+(w.i(_)&65535),b=(A>>>16)+(this.i(_)>>>16)+(w.i(_)>>>16);I=b>>>16,A&=65535,b&=65535,v[_]=b<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(w,y){return w.add(x(y))}s.j=function(w){if(C(this)||C(w))return f;if(k(this))return k(w)?x(this).j(x(w)):x(x(this).j(w));if(k(w))return x(this.j(x(w)));if(this.l(E)<0&&w.l(E)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,v=[];for(var I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let _=0;_<w.g.length;_++){const A=this.i(I)>>>16,b=this.i(I)&65535,Re=w.i(_)>>>16,$t=w.i(_)&65535;v[2*I+2*_]+=b*$t,z(v,2*I+2*_),v[2*I+2*_+1]+=A*$t,z(v,2*I+2*_+1),v[2*I+2*_+1]+=b*Re,z(v,2*I+2*_+1),v[2*I+2*_+2]+=A*Re,z(v,2*I+2*_+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function z(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function j(w,y){this.g=w,this.h=y}function re(w,y){if(C(y))throw Error("division by zero");if(C(w))return new j(f,f);if(k(w))return y=re(x(w),y),new j(x(y.g),x(y.h));if(k(y))return y=re(w,x(y)),new j(x(y.g),y.h);if(w.g.length>30){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,I=y;I.l(w)<=0;)v=he(v),I=he(I);var _=ne(v,1),A=ne(I,1);for(I=ne(I,2),v=ne(v,2);!C(I);){var b=A.add(I);b.l(w)<=0&&(_=_.add(v),A=b),I=ne(I,1),v=ne(v,1)}return y=B(w,_.j(y)),new j(_,y)}for(_=f;w.l(y)>=0;){for(v=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=u(v),b=A.j(y);k(b)||b.l(w)>0;)v-=I,A=u(v),b=A.j(y);C(A)&&(A=g),_=_.add(A),w=B(w,b)}return new j(_,w)}s.B=function(w){return re(this,w).h},s.and=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)&w.i(I);return new o(v,this.h&w.h)},s.or=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)|w.i(I);return new o(v,this.h|w.h)},s.xor=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)^w.i(I);return new o(v,this.h^w.h)};function he(w){const y=w.g.length+1,v=[];for(let I=0;I<y;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(v,w.h)}function ne(w,y){const v=y>>5;y%=32;const I=w.g.length-v,_=[];for(let A=0;A<I;A++)_[A]=y>0?w.i(A+v)>>>y|w.i(A+v+1)<<32-y:w.i(A+v);return new o(_,w.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,pd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ct=o}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fd,ns,md,sr,eo,gd,yd,bd;(function(){var s,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var n=t(this);function r(a,d){if(d)e:{var p=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var T=a[m];if(!(T in p))break e;p=p[T]}a=a[a.length-1],m=p[a],d=d(m),d!=m&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(d){var p=[],m;for(m in d)Object.prototype.hasOwnProperty.call(d,m)&&p.push([m,d[m]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,p){return a.call.apply(a.bind,arguments)}function u(a,d,p){return u=c,u.apply(null,arguments)}function h(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function f(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(m,T,S){for(var L=Array(arguments.length-2),G=2;G<arguments.length;G++)L[G-2]=arguments[G];return d.prototype[T].apply(m,L)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const d=a.length;if(d>0){const p=Array(d);for(let m=0;m<d;m++)p[m]=a[m];return p}return[]}function C(a,d){for(let m=1;m<arguments.length;m++){const T=arguments[m];var p=typeof T;if(p=p!="object"?p:T?Array.isArray(T)?"array":p:"null",p=="array"||p=="object"&&typeof T.length=="number"){p=a.length||0;const S=T.length||0;a.length=p+S;for(let L=0;L<S;L++)a[p+L]=T[L]}else a.push(T)}}class k{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(a){o.setTimeout(()=>{throw a},0)}function B(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class z{constructor(){this.h=this.g=null}add(d,p){const m=j.get();m.set(d,p),this.h?this.h.next=m:this.g=m,this.h=m}}var j=new k(()=>new re,a=>a.reset());class re{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ne=!1,w=new z,y=()=>{const a=Promise.resolve(void 0);he=()=>{a.then(v)}};function v(){for(var a;a=B();){try{a.h.call(a.g)}catch(p){x(p)}var d=j;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}ne=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function Re(a,d){_.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}f(Re,_),Re.prototype.init=function(a,d){const p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),kp=0;function Lp(a,d,p,m,T){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!m,this.ha=T,this.key=++kp,this.da=this.fa=!1}function Vs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ds(a,d,p){for(const m in a)d.call(p,a[m],m,a)}function Vp(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function ba(a){const d={};for(const p in a)d[p]=a[p];return d}const va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _a(a,d){let p,m;for(let T=1;T<arguments.length;T++){m=arguments[T];for(p in m)a[p]=m[p];for(let S=0;S<va.length;S++)p=va[S],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function Os(a){this.src=a,this.g={},this.h=0}Os.prototype.add=function(a,d,p,m,T){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const L=pi(a,d,m,T);return L>-1?(d=a[L],p||(d.fa=!1)):(d=new Lp(d,this.src,S,!!m,T),d.fa=p,a.push(d)),d};function hi(a,d){const p=d.type;if(p in a.g){var m=a.g[p],T=Array.prototype.indexOf.call(m,d,void 0),S;(S=T>=0)&&Array.prototype.splice.call(m,T,1),S&&(Vs(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function pi(a,d,p,m){for(let T=0;T<a.length;++T){const S=a[T];if(!S.da&&S.listener==d&&S.capture==!!p&&S.ha==m)return T}return-1}var fi="closure_lm_"+(Math.random()*1e6|0),mi={};function wa(a,d,p,m,T){if(Array.isArray(d)){for(let S=0;S<d.length;S++)wa(a,d[S],p,m,T);return null}return p=Ta(p),a&&a[$t]?a.J(d,p,l(m)?!!m.capture:!1,T):Dp(a,d,p,!1,m,T)}function Dp(a,d,p,m,T,S){if(!d)throw Error("Invalid event type");const L=l(T)?!!T.capture:!!T;let G=yi(a);if(G||(a[fi]=G=new Os(a)),p=G.add(d,p,m,L,S),p.proxy)return p;if(m=Op(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)A||(T=L),T===void 0&&(T=!1),a.addEventListener(d.toString(),m,T);else if(a.attachEvent)a.attachEvent(Ia(d.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Op(){function a(p){return d.call(a.src,a.listener,p)}const d=Mp;return a}function Ea(a,d,p,m,T){if(Array.isArray(d))for(var S=0;S<d.length;S++)Ea(a,d[S],p,m,T);else m=l(m)?!!m.capture:!!m,p=Ta(p),a&&a[$t]?(a=a.i,S=String(d).toString(),S in a.g&&(d=a.g[S],p=pi(d,p,m,T),p>-1&&(Vs(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[S],a.h--)))):a&&(a=yi(a))&&(d=a.g[d.toString()],a=-1,d&&(a=pi(d,p,m,T)),(p=a>-1?d[a]:null)&&gi(p))}function gi(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$t])hi(d.i,a);else{var p=a.type,m=a.proxy;d.removeEventListener?d.removeEventListener(p,m,a.capture):d.detachEvent?d.detachEvent(Ia(p),m):d.addListener&&d.removeListener&&d.removeListener(m),(p=yi(d))?(hi(p,a),p.h==0&&(p.src=null,d[fi]=null)):Vs(a)}}}function Ia(a){return a in mi?mi[a]:mi[a]="on"+a}function Mp(a,d){if(a.da)a=!0;else{d=new Re(d,this);const p=a.listener,m=a.ha||a.src;a.fa&&gi(a),a=p.call(m,d)}return a}function yi(a){return a=a[fi],a instanceof Os?a:null}var bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ta(a){return typeof a=="function"?a:(a[bi]||(a[bi]=function(d){return a.handleEvent(d)}),a[bi])}function we(){I.call(this),this.i=new Os(this),this.M=this,this.G=null}f(we,I),we.prototype[$t]=!0,we.prototype.removeEventListener=function(a,d,p,m){Ea(this,a,d,p,m)};function Se(a,d){var p,m=a.G;if(m)for(p=[];m;m=m.G)p.push(m);if(a=a.M,m=d.type||d,typeof d=="string")d=new _(d,a);else if(d instanceof _)d.target=d.target||a;else{var T=d;d=new _(m,a),_a(d,T)}T=!0;let S,L;if(p)for(L=p.length-1;L>=0;L--)S=d.g=p[L],T=Ms(S,m,!0,d)&&T;if(S=d.g=a,T=Ms(S,m,!0,d)&&T,T=Ms(S,m,!1,d)&&T,p)for(L=0;L<p.length;L++)S=d.g=p[L],T=Ms(S,m,!1,d)&&T}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let m=0;m<p.length;m++)Vs(p[m]);delete a.g[d],a.h--}}this.G=null},we.prototype.J=function(a,d,p,m){return this.i.add(String(a),d,!1,p,m)},we.prototype.K=function(a,d,p,m){return this.i.add(String(a),d,!0,p,m)};function Ms(a,d,p,m){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let T=!0;for(let S=0;S<d.length;++S){const L=d[S];if(L&&!L.da&&L.capture==p){const G=L.listener,pe=L.ha||L.src;L.fa&&hi(a.i,L),T=G.call(pe,m)!==!1&&T}}return T&&!m.defaultPrevented}function Np(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Aa(a){a.g=Np(()=>{a.g=null,a.i&&(a.i=!1,Aa(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class $p extends I{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Aa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(a){I.call(this),this.h=a,this.g={}}f(Nn,I);var Sa=[];function Ca(a){Ds(a.g,function(d,p){this.g.hasOwnProperty(p)&&gi(d)},a),a.g={}}Nn.prototype.N=function(){Nn.Z.N.call(this),Ca(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=o.JSON.stringify,Up=o.JSON.parse,Fp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pa(){}function Ra(){}var $n={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _i(){_.call(this,"d")}f(_i,_);function wi(){_.call(this,"c")}f(wi,_);var Ut={},xa=null;function Ns(){return xa=xa||new we}Ut.Ia="serverreachability";function ka(a){_.call(this,Ut.Ia,a)}f(ka,_);function Un(a){const d=Ns();Se(d,new ka(d))}Ut.STAT_EVENT="statevent";function La(a,d){_.call(this,Ut.STAT_EVENT,a),this.stat=d}f(La,_);function Ce(a){const d=Ns();Se(d,new La(d,a))}Ut.Ja="timingevent";function Va(a,d){_.call(this,Ut.Ja,a),this.size=d}f(Va,_);function Fn(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function Bp(a,d,p,m,T,S){a.info(function(){if(a.g)if(S){var L="",G=S.split("&");for(let X=0;X<G.length;X++){var pe=G[X].split("=");if(pe.length>1){const me=pe[0];pe=pe[1];const He=me.split("_");L=He.length>=2&&He[1]=="type"?L+(me+"="+pe+"&"):L+(me+"=redacted&")}}}else L=null;else L=S;return"XMLHTTP REQ ("+m+") [attempt "+T+"]: "+d+`
`+p+`
`+L})}function jp(a,d,p,m,T,S,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+T+"]: "+d+`
`+p+`
`+S+" "+L})}function rn(a,d,p,m){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Hp(a,p)+(m?" "+m:"")})}function qp(a,d){a.info(function(){return"TIMEOUT: "+d})}Bn.prototype.info=function(){};function Hp(a,d){if(!a.g)return d;if(!d)return null;try{const S=JSON.parse(d);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var p=S[a];if(!(p.length<2)){var m=p[1];if(Array.isArray(m)&&!(m.length<1)){var T=m[0];if(T!="noop"&&T!="stop"&&T!="close")for(let L=1;L<m.length;L++)m[L]=""}}}}return vi(S)}catch{return d}}var $s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Da={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oa;function Ei(){}f(Ei,Pa),Ei.prototype.g=function(){return new XMLHttpRequest},Oa=new Ei;function jn(a){return encodeURIComponent(String(a))}function zp(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function dt(a,d,p,m){this.j=a,this.i=d,this.l=p,this.S=m||1,this.V=new Nn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ma}function Ma(){this.i=null,this.g="",this.h=!1}var Na={},Ii={};function Ti(a,d,p){a.M=1,a.A=Fs(qe(d)),a.u=p,a.R=!0,$a(a,null)}function $a(a,d){a.F=Date.now(),Us(a),a.B=qe(a.A);var p=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Ya(p.i,"t",m),a.C=0,p=a.j.L,a.h=new Ma,a.g=ml(a.j,p?d:null,!a.u),a.P>0&&(a.O=new $p(u(a.Y,a,a.g),a.P)),d=a.V,p=a.g,m=a.ba;var T="readystatechange";Array.isArray(T)||(T&&(Sa[0]=T.toString()),T=Sa);for(let S=0;S<T.length;S++){const L=wa(p,T[S],m||d.handleEvent,!1,d.h||d);if(!L)break;d.g[L.key]=L}d=a.J?ba(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Un(),Bp(a.i,a.v,a.B,a.l,a.S,a.u)}dt.prototype.ba=function(a){a=a.target;const d=this.O;d&&pt(a)==3?d.j():this.Y(a)},dt.prototype.Y=function(a){try{if(a==this.g)e:{const G=pt(this.g),pe=this.g.ya(),X=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||rl(this.g)))){this.K||G!=4||pe==7||(pe==8||X<=0?Un(3):Un(2)),Ai(this);var d=this.g.ca();this.X=d;var p=Gp(this);if(this.o=d==200,jp(this.i,this.v,this.B,this.l,this.S,G,d),this.o){if(this.U&&!this.L){t:{if(this.g){var m,T=this.g;if((m=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(m)){var S=m;break t}}S=null}if(a=S)rn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Si(this,a);else{this.o=!1,this.m=3,Ce(12),Ft(this),qn(this);break e}}if(this.R){a=!0;let me;for(;!this.K&&this.C<p.length;)if(me=Wp(this,p),me==Ii){G==4&&(this.m=4,Ce(14),a=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(me==Na){this.m=4,Ce(15),rn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else rn(this.i,this.l,me,null),Si(this,me);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||p.length!=0||this.h.h||(this.m=1,Ce(16),a=!1),this.o=this.o&&a,!a)rn(this.i,this.l,p,"[Invalid Chunked Response]"),Ft(this),qn(this);else if(p.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Di(L),L.P=!0,Ce(11))}}else rn(this.i,this.l,p,null),Si(this,p);G==4&&Ft(this),this.o&&!this.K&&(G==4?ul(this.j,this):(this.o=!1,Us(this)))}else lf(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Ft(this),qn(this)}}}catch{}finally{}};function Gp(a){if(!Ua(a))return a.g.la();const d=rl(a.g);if(d==="")return"";let p="";const m=d.length,T=pt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ft(a),qn(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<m;S++)a.h.h=!0,p+=a.h.i.decode(d[S],{stream:!(T&&S==m-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function Ua(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Wp(a,d){var p=a.C,m=d.indexOf(`
`,p);return m==-1?Ii:(p=Number(d.substring(p,m)),isNaN(p)?Na:(m+=1,m+p>d.length?Ii:(d=d.slice(m,m+p),a.C=m+p,d)))}dt.prototype.cancel=function(){this.K=!0,Ft(this)};function Us(a){a.T=Date.now()+a.H,Fa(a,a.H)}function Fa(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Fn(u(a.aa,a),d)}function Ai(a){a.D&&(o.clearTimeout(a.D),a.D=null)}dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(qp(this.i,this.B),this.M!=2&&(Un(),Ce(17)),Ft(this),this.m=2,qn(this)):Fa(this,this.T-a)};function qn(a){a.j.I==0||a.K||ul(a.j,a)}function Ft(a){Ai(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Ca(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Si(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||Ci(p.h,a))){if(!a.L&&Ci(p.h,a)&&p.I==3){try{var m=p.Ba.g.parse(d)}catch{m=null}if(Array.isArray(m)&&m.length==3){var T=m;if(T[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)zs(p),qs(p);else break e;Vi(p),Ce(18)}}else p.xa=T[1],0<p.xa-p.K&&T[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Fn(u(p.Va,p),6e3));qa(p.h)<=1&&p.ta&&(p.ta=void 0)}else jt(p,11)}else if((a.L||p.g==a)&&zs(p),!b(d))for(T=p.Ba.g.parse(d),d=0;d<T.length;d++){let X=T[d];const me=X[0];if(!(me<=p.K))if(p.K=me,X=X[1],p.I==2)if(X[0]=="c"){p.M=X[1],p.ba=X[2];const He=X[3];He!=null&&(p.ka=He,p.j.info("VER="+p.ka));const qt=X[4];qt!=null&&(p.za=qt,p.j.info("SVER="+p.za));const ft=X[5];ft!=null&&typeof ft=="number"&&ft>0&&(m=1.5*ft,p.O=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const mt=a.g;if(mt){const Ws=mt.g?mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var S=m.h;S.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Pi(S,S.h),S.h=null))}if(m.G){const Oi=mt.g?mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(m.wa=Oi,ee(m.J,m.G,Oi))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),m=p;var L=a;if(m.na=fl(m,m.L?m.ba:null,m.W),L.L){Ha(m.h,L);var G=L,pe=m.O;pe&&(G.H=pe),G.D&&(Ai(G),Us(G)),m.g=L}else cl(m);p.i.length>0&&Hs(p)}else X[0]!="stop"&&X[0]!="close"||jt(p,7);else p.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?jt(p,7):Li(p):X[0]!="noop"&&p.l&&p.l.qa(X),p.A=0)}}Un(4)}catch{}}var Kp=class{constructor(a,d){this.g=a,this.map=d}};function Ba(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ja(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qa(a){return a.h?1:a.g?a.g.size:0}function Ci(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Pi(a,d){a.g?a.g.add(d):a.h=d}function Ha(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ba.prototype.cancel=function(){if(this.i=za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function za(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return E(a.i)}var Ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qp(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const m=a[p].indexOf("=");let T,S=null;m>=0?(T=a[p].substring(0,m),S=a[p].substring(m+1)):T=a[p],d(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ut(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof ut?(this.l=a.l,Hn(this,a.j),this.o=a.o,this.g=a.g,zn(this,a.u),this.h=a.h,Ri(this,Xa(a.i)),this.m=a.m):a&&(d=String(a).match(Ga))?(this.l=!1,Hn(this,d[1]||"",!0),this.o=Gn(d[2]||""),this.g=Gn(d[3]||"",!0),zn(this,d[4]),this.h=Gn(d[5]||"",!0),Ri(this,d[6]||"",!0),this.m=Gn(d[7]||"")):(this.l=!1,this.i=new Kn(null,this.l))}ut.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Wn(d,Wa,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Wn(d,Wa,!0),"@"),a.push(jn(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Wn(p,p.charAt(0)=="/"?Xp:Yp,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Wn(p,ef)),a.join("")},ut.prototype.resolve=function(a){const d=qe(this);let p=!!a.j;p?Hn(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var m=a.h;if(p)zn(d,a.u);else if(p=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var T=d.h.lastIndexOf("/");T!=-1&&(m=d.h.slice(0,T+1)+m)}if(T=m,T==".."||T==".")m="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){m=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let L=0;L<T.length;){const G=T[L++];G=="."?m&&L==T.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&L==T.length&&S.push("")):(S.push(G),m=!0)}m=S.join("/")}else m=T}return p?d.h=m:p=a.i.toString()!=="",p?Ri(d,Xa(a.i)):p=!!a.m,p&&(d.m=a.m),d};function qe(a){return new ut(a)}function Hn(a,d,p){a.j=p?Gn(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function zn(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Ri(a,d,p){d instanceof Kn?(a.i=d,tf(a.i,a.l)):(p||(d=Wn(d,Zp)),a.i=new Kn(d,a.l))}function ee(a,d,p){a.i.set(d,p)}function Fs(a){return ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Gn(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Wn(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Jp),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wa=/[#\/\?@]/g,Yp=/[#\?:]/g,Xp=/[#\?]/g,Zp=/[#\?@]/g,ef=/#/g;function Kn(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Bt(a){a.g||(a.g=new Map,a.h=0,a.i&&Qp(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}s=Kn.prototype,s.add=function(a,d){Bt(this),this.i=null,a=on(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function Ka(a,d){Bt(a),d=on(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Qa(a,d){return Bt(a),d=on(a,d),a.g.has(d)}s.forEach=function(a,d){Bt(this),this.g.forEach(function(p,m){p.forEach(function(T){a.call(d,T,m,this)},this)},this)};function Ja(a,d){Bt(a);let p=[];if(typeof d=="string")Qa(a,d)&&(p=p.concat(a.g.get(on(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}s.set=function(a,d){return Bt(this),this.i=null,a=on(this,a),Qa(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},s.get=function(a,d){return a?(a=Ja(this,a),a.length>0?String(a[0]):d):d};function Ya(a,d,p){Ka(a,d),p.length>0&&(a.i=null,a.g.set(on(a,d),E(p)),a.h+=p.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let m=0;m<d.length;m++){var p=d[m];const T=jn(p);p=Ja(this,p);for(let S=0;S<p.length;S++){let L=T;p[S]!==""&&(L+="="+jn(p[S])),a.push(L)}}return this.i=a.join("&")};function Xa(a){const d=new Kn;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function on(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function tf(a,d){d&&!a.j&&(Bt(a),a.i=null,a.g.forEach(function(p,m){const T=m.toLowerCase();m!=T&&(Ka(this,m),Ya(this,T,p))},a)),a.j=d}function nf(a,d){const p=new Bn;if(o.Image){const m=new Image;m.onload=h(ht,p,"TestLoadImage: loaded",!0,d,m),m.onerror=h(ht,p,"TestLoadImage: error",!1,d,m),m.onabort=h(ht,p,"TestLoadImage: abort",!1,d,m),m.ontimeout=h(ht,p,"TestLoadImage: timeout",!1,d,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else d(!1)}function sf(a,d){const p=new Bn,m=new AbortController,T=setTimeout(()=>{m.abort(),ht(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:m.signal}).then(S=>{clearTimeout(T),S.ok?ht(p,"TestPingServer: ok",!0,d):ht(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(T),ht(p,"TestPingServer: error",!1,d)})}function ht(a,d,p,m,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),m(p)}catch{}}function rf(){this.g=new Fp}function xi(a){this.i=a.Sb||null,this.h=a.ab||!1}f(xi,Pa),xi.prototype.g=function(){return new Bs(this.i,this.h)};function Bs(a,d){we.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Bs,we),s=Bs.prototype,s.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Jn(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},s.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Za(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Za(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}s.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Qn(this):Jn(this),this.readyState==3&&Za(this)}},s.Oa=function(a){this.g&&(this.response=this.responseText=a,Qn(this))},s.Na=function(a){this.g&&(this.response=a,Qn(this))},s.ga=function(){this.g&&Qn(this)};function Qn(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Jn(a)}s.setRequestHeader=function(a,d){this.A.append(a,d)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Jn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function el(a){let d="";return Ds(a,function(p,m){d+=m,d+=":",d+=p,d+=`\r
`}),d}function ki(a,d,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=el(p),typeof a=="string"?p!=null&&jn(p):ee(a,d,p))}function ie(a){we.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ie,we);var of=/^https?$/i,af=["POST","PUT"];s=ie.prototype,s.Fa=function(a){this.H=a},s.ea=function(a,d,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oa.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(S){tl(this,S);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var T in m)p.set(T,m[T]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())p.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(S=>S.toLowerCase()=="content-type"),T=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(af,d,void 0)>=0)||m||T||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,L]of p)this.g.setRequestHeader(S,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){tl(this,S)}};function tl(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,nl(a),js(a)}function nl(a){a.A||(a.A=!0,Se(a,"complete"),Se(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Se(this,"complete"),Se(this,"abort"),js(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),ie.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?sl(this):this.Xa())},s.Xa=function(){sl(this)};function sl(a){if(a.h&&typeof i<"u"){if(a.v&&pt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Se(a,"readystatechange"),pt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var m;if(m=S===0){let L=String(a.D).match(Ga)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),m=!of.test(L?L.toLowerCase():"")}p=m}if(p)Se(a,"complete"),Se(a,"success");else{a.o=6;try{var T=pt(a)>2?a.g.statusText:""}catch{T=""}a.l=T+" ["+a.ca()+"]",nl(a)}}finally{js(a)}}}}function js(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||Se(a,"ready");try{p.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function pt(a){return a.g?a.g.readyState:0}s.ca=function(){try{return pt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Up(d)}};function rl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lf(a){const d={};a=(a.g&&pt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(b(a[m]))continue;var p=zp(a[m]);const T=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const S=d[T]||[];d[T]=S,S.push(p)}Vp(d,function(m){return m.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function il(a){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yn("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yn("baseRetryDelayMs",5e3,a),this.Za=Yn("retryDelaySeedMs",1e4,a),this.Ta=Yn("forwardChannelMaxRetries",2,a),this.va=Yn("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ba(a&&a.concurrentRequestLimit),this.Ba=new rf,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=il.prototype,s.ka=8,s.I=1,s.connect=function(a,d,p,m){Ce(0),this.W=a,this.H=d||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.J=fl(this,null,this.W),Hs(this)};function Li(a){if(ol(a),a.I==3){var d=a.V++,p=qe(a.J);if(ee(p,"SID",a.M),ee(p,"RID",d),ee(p,"TYPE","terminate"),Xn(a,p),d=new dt(a,a.j,d),d.M=2,d.A=Fs(qe(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=ml(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Us(d)}pl(a)}function qs(a){a.g&&(Di(a),a.g.cancel(),a.g=null)}function ol(a){qs(a),a.v&&(o.clearTimeout(a.v),a.v=null),zs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Hs(a){if(!ja(a.h)&&!a.m){a.m=!0;var d=a.Ea;he||y(),ne||(he(),ne=!0),w.add(d,a),a.D=0}}function cf(a,d){return qa(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Fn(u(a.Ea,a,d),hl(a,a.D)),a.D++,!0)}s.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const T=new dt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=ba(S),_a(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(d+=m,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=ll(this,T,d),p=qe(this.J),ee(p,"RID",a),ee(p,"CVER",22),this.G&&ee(p,"X-HTTP-Session-Id",this.G),Xn(this,p),S&&(this.R?d="headers="+jn(el(S))+"&"+d:this.u&&ki(p,this.u,S)),Pi(this.h,T),this.Ra&&ee(p,"TYPE","init"),this.S?(ee(p,"$req",d),ee(p,"SID","null"),T.U=!0,Ti(T,p,null)):Ti(T,p,d),this.I=2}}else this.I==3&&(a?al(this,a):this.i.length==0||ja(this.h)||al(this))};function al(a,d){var p;d?p=d.l:p=a.V++;const m=qe(a.J);ee(m,"SID",a.M),ee(m,"RID",p),ee(m,"AID",a.K),Xn(a,m),a.u&&a.o&&ki(m,a.u,a.o),p=new dt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=ll(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Pi(a.h,p),Ti(p,m,d)}function Xn(a,d){a.H&&Ds(a.H,function(p,m){ee(d,m,p)}),a.l&&Ds({},function(p,m){ee(d,m,p)})}function ll(a,d,p){p=Math.min(a.i.length,p);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var T=a.i;let G=-1;for(;;){const pe=["count="+p];G==-1?p>0?(G=T[0].g,pe.push("ofs="+G)):G=0:pe.push("ofs="+G);let X=!0;for(let me=0;me<p;me++){var S=T[me].g;const He=T[me].map;if(S-=G,S<0)G=Math.max(0,T[me].g-100),X=!1;else try{S="req"+S+"_"||"";try{var L=He instanceof Map?He:Object.entries(He);for(const[qt,ft]of L){let mt=ft;l(ft)&&(mt=vi(ft)),pe.push(S+qt+"="+encodeURIComponent(mt))}}catch(qt){throw pe.push(S+"type="+encodeURIComponent("_badmap")),qt}}catch{m&&m(He)}}if(X){L=pe.join("&");break e}}L=void 0}return a=a.i.splice(0,p),d.G=a,L}function cl(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;he||y(),ne||(he(),ne=!0),w.add(d,a),a.A=0}}function Vi(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Fn(u(a.Da,a),hl(a,a.A)),a.A++,!0)}s.Da=function(){if(this.v=null,dl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Fn(u(this.Wa,this),a)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),qs(this),dl(this))};function Di(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function dl(a){a.g=new dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=qe(a.na);ee(d,"RID","rpc"),ee(d,"SID",a.M),ee(d,"AID",a.K),ee(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&ee(d,"TO",a.ia),ee(d,"TYPE","xmlhttp"),Xn(a,d),a.u&&a.o&&ki(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Fs(qe(d)),p.u=null,p.R=!0,$a(p,a)}s.Va=function(){this.C!=null&&(this.C=null,qs(this),Vi(this),Ce(19))};function zs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ul(a,d){var p=null;if(a.g==d){zs(a),Di(a),a.g=null;var m=2}else if(Ci(a.h,d))p=d.G,Ha(a.h,d),m=1;else return;if(a.I!=0){if(d.o)if(m==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var T=a.D;m=Ns(),Se(m,new Va(m,p)),Hs(a)}else cl(a);else if(T=d.m,T==3||T==0&&d.X>0||!(m==1&&cf(a,d)||m==2&&Vi(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),T){case 1:jt(a,5);break;case 4:jt(a,10);break;case 3:jt(a,6);break;default:jt(a,2)}}}function hl(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function jt(a,d){if(a.j.info("Error code "+d),d==2){var p=u(a.bb,a),m=a.Ua;const T=!m;m=new ut(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Hn(m,"https"),Fs(m),T?nf(m.toString(),p):sf(m.toString(),p)}else Ce(2);a.I=0,a.l&&a.l.pa(d),pl(a),ol(a)}s.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function pl(a){if(a.I=0,a.ja=[],a.l){const d=za(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ja,d),C(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function fl(a,d,p){var m=p instanceof ut?qe(p):new ut(p);if(m.g!="")d&&(m.g=d+"."+m.g),zn(m,m.u);else{var T=o.location;m=T.protocol,d=d?d+"."+T.hostname:T.hostname,T=+T.port;const S=new ut(null);m&&Hn(S,m),d&&(S.g=d),T&&zn(S,T),p&&(S.h=p),m=S}return p=a.G,d=a.wa,p&&d&&ee(m,p,d),ee(m,"VER",a.ka),Xn(a,m),m}function ml(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new ie(new xi({ab:p})):new ie(a.ma),d.Fa(a.L),d}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}s=gl.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Gs(){}Gs.prototype.g=function(a,d){return new Le(a,d)};function Le(a,d){we.call(this),this.g=new il(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!b(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new an(this)}f(Le,we),Le.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Li(this.g)},Le.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=vi(a),a=p);d.i.push(new Kp(d.Ya++,a)),d.I==3&&Hs(d)},Le.prototype.N=function(){this.g.l=null,delete this.j,Li(this.g),delete this.g,Le.Z.N.call(this)};function yl(a){_i.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}f(yl,_i);function bl(){wi.call(this),this.status=1}f(bl,wi);function an(a){this.g=a}f(an,gl),an.prototype.ra=function(){Se(this.g,"a")},an.prototype.qa=function(a){Se(this.g,new yl(a))},an.prototype.pa=function(a){Se(this.g,new bl)},an.prototype.oa=function(){Se(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,bd=function(){return new Gs},yd=function(){return Ns()},gd=Ut,eo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,sr=$s,Da.COMPLETE="complete",md=Da,Ra.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",we.prototype.listen=we.prototype.J,ns=Ra,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,fd=ie}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const Vl="@firebase/firestore",Dl="4.9.3";/**
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
 */const Jt=new So("@firebase/firestore");function ln(){return Jt.logLevel}function D(s,...e){if(Jt.logLevel<=W.DEBUG){const t=e.map(Ro);Jt.debug(`Firestore (${Ln}): ${s}`,...t)}}function it(s,...e){if(Jt.logLevel<=W.ERROR){const t=e.map(Ro);Jt.error(`Firestore (${Ln}): ${s}`,...t)}}function In(s,...e){if(Jt.logLevel<=W.WARN){const t=e.map(Ro);Jt.warn(`Firestore (${Ln}): ${s}`,...t)}}function Ro(s){if(typeof s=="string")return s;try{/**
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
 */function U(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,vd(s,n,t)}function vd(s,e,t){let n=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw it(n),new Error(n)}function Y(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||vd(e,r,n)}function H(s,e){return s}/**
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
 */class _d{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class Xm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Zm{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nt,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string",31837,{l:n}),new _d(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class eg{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tg{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new eg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ng{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ol(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ol(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class xo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=sg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function K(s,e){return s<e?-1:s>e?1:0}function to(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return Bi(r)===Bi(i)?K(r,i):Bi(r)?1:-1}return K(s.length,e.length)}const rg=55296,ig=57343;function Bi(s){const e=s.charCodeAt(0);return e>=rg&&e<=ig}function Tn(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
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
 */const Ml="__name__";class ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=ze.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const n=ze.isNumericId(e),r=ze.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ze.extractNumericId(e).compare(ze.extractNumericId(t)):to(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class Z extends ze{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends ze{construct(e,t,n){return new ve(e,t,n)}static isValidIdentifier(e){return og.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ml}static keyField(){return new ve([Ml])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(i(),r++)}if(i(),o)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */function wd(s,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function ag(s,e,t,n){if(e===!0&&n===!0)throw new V(P.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Nl(s){if(!M.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function $l(s){if(M.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Ed(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Hr(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":U(12329,{type:typeof s})}function Fe(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hr(s);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function ue(s,e){const t={typeString:s};return e&&(t.value=e),t}function Es(s,e){if(!Ed(s))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ul=-62135596800,Fl=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Fl);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ul)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Es(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ul;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ue("string",te._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};/**
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
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new te(0,0))}static max(){return new q(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ps=-1;function lg(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=q.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new Rt(r,M.empty(),e)}function cg(s){return new Rt(s.readTime,s.key,ps)}class Rt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rt(q.min(),M.empty(),ps)}static max(){return new Rt(q.max(),M.empty(),ps)}}function dg(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(s.documentKey,e.documentKey),t!==0?t:K(s.largestBatchId,e.largestBatchId))}/**
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
 */const ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Vn(s){if(s.code!==P.FAILED_PRECONDITION||s.message!==ug)throw s;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,n)=>{t(e)}))}static reject(e){return new R(((t,n)=>{n(e)}))}static waitFor(e){return new R(((t,n)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&t()}),(c=>n(c)))})),o=!0,i===r&&t()}))}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next((r=>r?R.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new R(((n,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((h=>{o[u]=h,++l,l===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new R(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function pg(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class zr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zr.ce=-1;/**
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
 */const ko=-1;function Gr(s){return s==null}function _r(s){return s===0&&1/s==-1/0}function fg(s){return typeof s=="number"&&Number.isInteger(s)&&!_r(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const Id="";function mg(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Bl(e)),e=gg(s.get(t),e);return Bl(e)}function gg(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case Id:t+="";break;default:t+=i}}return t}function Bl(s){return s+Id+""}/**
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
 */function jl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Ot(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Td(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??be.RED,this.left=r??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new be(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(e){return new ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class De{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new De([])}unionWith(e){let t=new fe(ve.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Ad extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ad("Invalid base64 string: "+i):i}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(s){if(Y(!!s,39018),typeof s=="string"){let e=0;const t=yg.exec(s);if(Y(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(s.seconds),nanos:oe(s.nanos)}}function oe(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function kt(s){return typeof s=="string"?_e.fromBase64String(s):_e.fromUint8Array(s)}/**
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
 */const Sd="server_timestamp",Cd="__type__",Pd="__previous_value__",Rd="__local_write_time__";function Lo(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Cd])==null?void 0:n.stringValue)===Sd}function Wr(s){const e=s.mapValue.fields[Pd];return Lo(e)?Wr(e):e}function fs(s){const e=xt(s.mapValue.fields[Rd].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class bg{constructor(e,t,n,r,i,o,l,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const wr="(default)";class ms{constructor(e,t){this.projectId=e,this.database=t||wr}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===wr}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xd="__type__",vg="__max__",Ys={mapValue:{}},kd="__vector__",Er="value";function Lt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Lo(s)?4:wg(s)?9007199254740991:_g(s)?10:11:U(28295,{value:s})}function Xe(s,e){if(s===e)return!0;const t=Lt(s);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return fs(s).isEqual(fs(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=xt(r.timestampValue),l=xt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(r,i){return kt(r.bytesValue).isEqual(kt(i.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(r,i){return oe(r.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(r.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(s,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return oe(r.integerValue)===oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=oe(r.doubleValue),l=oe(i.doubleValue);return o===l?_r(o)===_r(l):isNaN(o)&&isNaN(l)}return!1})(s,e);case 9:return Tn(s.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(jl(o)!==jl(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Xe(o[c],l[c])))return!1;return!0})(s,e);default:return U(52216,{left:s})}}function gs(s,e){return(s.values||[]).find((t=>Xe(t,e)))!==void 0}function An(s,e){if(s===e)return 0;const t=Lt(s),n=Lt(e);if(t!==n)return K(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(s.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=oe(i.integerValue||i.doubleValue),c=oe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(s,e);case 3:return Hl(s.timestampValue,e.timestampValue);case 4:return Hl(fs(s),fs(e));case 5:return to(s.stringValue,e.stringValue);case 6:return(function(i,o){const l=kt(i),c=kt(o);return l.compareTo(c)})(s.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=K(l[u],c[u]);if(h!==0)return h}return K(l.length,c.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=K(oe(i.latitude),oe(o.latitude));return l!==0?l:K(oe(i.longitude),oe(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return zl(s.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,E,C,k;const l=i.fields||{},c=o.fields||{},u=(g=l[Er])==null?void 0:g.arrayValue,h=(E=c[Er])==null?void 0:E.arrayValue,f=K(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((k=h==null?void 0:h.values)==null?void 0:k.length)||0);return f!==0?f:zl(u,h)})(s.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ys.mapValue&&o===Ys.mapValue)return 0;if(i===Ys.mapValue)return 1;if(o===Ys.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=to(c[f],h[f]);if(g!==0)return g;const E=An(l[c[f]],u[h[f]]);if(E!==0)return E}return K(c.length,h.length)})(s.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Hl(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return K(s,e);const t=xt(s),n=xt(e),r=K(t.seconds,n.seconds);return r!==0?r:K(t.nanos,n.nanos)}function zl(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=An(t[r],n[r]);if(i)return i}return K(t.length,n.length)}function Sn(s){return no(s)}function no(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=xt(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return kt(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return M.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=no(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${no(t.fields[o])}`;return r+"}"})(s.mapValue):U(61005,{value:s})}function rr(s){switch(Lt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wr(s);return e?16+rr(e):16;case 5:return 2*s.stringValue.length;case 6:return kt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+rr(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return Ot(n.fields,((i,o)=>{r+=i.length+rr(o)})),r})(s.mapValue);default:throw U(13486,{value:s})}}function Gl(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function so(s){return!!s&&"integerValue"in s}function Vo(s){return!!s&&"arrayValue"in s}function Wl(s){return!!s&&"nullValue"in s}function Kl(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function ir(s){return!!s&&"mapValue"in s}function _g(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[xd])==null?void 0:n.stringValue)===kd}function as(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Ot(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=as(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=as(s.arrayValue.values[t]);return e}return{...s}}function wg(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===vg}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ir(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(t)}setAll(e){let t=ve.emptyPath(),n={},r=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=l.popLast()}o?n[l.lastSegment()]=as(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ir(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ot(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new ke(as(this.value))}}function Ld(s){const e=[];return Ot(s.fields,((t,n)=>{const r=new ve([t]);if(ir(n)){const i=Ld(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new De(e)}/**
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
 */class Te{constructor(e,t,n,r,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Te(e,0,q.min(),q.min(),q.min(),ke.empty(),0)}static newFoundDocument(e,t,n,r){return new Te(e,1,t,q.min(),n,r,0)}static newNoDocument(e,t){return new Te(e,2,t,q.min(),q.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,q.min(),q.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ir{constructor(e,t){this.position=e,this.inclusive=t}}function Ql(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=M.comparator(M.fromName(o.referenceValue),t.key):n=An(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Jl(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Xe(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Eg(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Vd{}class de extends Vd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Tg(e,t,n):t==="array-contains"?new Cg(e,n):t==="in"?new Pg(e,n):t==="not-in"?new Rg(e,n):t==="array-contains-any"?new xg(e,n):new de(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ag(e,n):new Sg(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(An(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(An(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Vd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Be(e,t)}matches(e){return Dd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dd(s){return s.op==="and"}function Od(s){return Ig(s)&&Dd(s)}function Ig(s){for(const e of s.filters)if(e instanceof Be)return!1;return!0}function ro(s){if(s instanceof de)return s.field.canonicalString()+s.op.toString()+Sn(s.value);if(Od(s))return s.filters.map((e=>ro(e))).join(",");{const e=s.filters.map((t=>ro(t))).join(",");return`${s.op}(${e})`}}function Md(s,e){return s instanceof de?(function(n,r){return r instanceof de&&n.op===r.op&&n.field.isEqual(r.field)&&Xe(n.value,r.value)})(s,e):s instanceof Be?(function(n,r){return r instanceof Be&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,l)=>i&&Md(o,r.filters[l])),!0):!1})(s,e):void U(19439)}function Nd(s){return s instanceof de?(function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`})(s):s instanceof Be?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nd).join(" ,")+"}"})(s):"Filter"}class Tg extends de{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ag extends de{constructor(e,t){super(e,"in",t),this.keys=$d("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Sg extends de{constructor(e,t){super(e,"not-in",t),this.keys=$d("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $d(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>M.fromName(n.referenceValue)))}class Cg extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vo(t)&&gs(t.arrayValue,this.value)}}class Pg extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gs(this.value.arrayValue,t)}}class Rg extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gs(this.value.arrayValue,t)}}class xg extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>gs(this.value.arrayValue,n)))}}/**
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
 */class kg{constructor(e,t=null,n=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Yl(s,e=null,t=[],n=[],r=null,i=null,o=null){return new kg(s,e,t,n,r,i,o)}function Do(s){const e=H(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ro(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Sn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Sn(n))).join(",")),e.Te=t}return e.Te}function Oo(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Eg(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Md(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Jl(s.startAt,e.startAt)&&Jl(s.endAt,e.endAt)}function io(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Is{constructor(e,t=null,n=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Lg(s,e,t,n,r,i,o,l){return new Is(s,e,t,n,r,i,o,l)}function Mo(s){return new Is(s)}function Xl(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Ud(s){return s.collectionGroup!==null}function ls(s){const e=H(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new fe(ve.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Tr(i,n))})),t.has(ve.keyField().canonicalString())||e.Ie.push(new Tr(ve.keyField(),n))}return e.Ie}function Ge(s){const e=H(s);return e.Ee||(e.Ee=Vg(e,ls(s))),e.Ee}function Vg(s,e){if(s.limitType==="F")return Yl(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Tr(r.field,i)}));const t=s.endAt?new Ir(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Ir(s.startAt.position,s.startAt.inclusive):null;return Yl(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function oo(s,e){const t=s.filters.concat([e]);return new Is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function ao(s,e,t){return new Is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Kr(s,e){return Oo(Ge(s),Ge(e))&&s.limitType===e.limitType}function Fd(s){return`${Do(Ge(s))}|lt:${s.limitType}`}function cn(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>Nd(r))).join(", ")}]`),Gr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>Sn(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>Sn(r))).join(",")),`Target(${n})`})(Ge(s))}; limitType=${s.limitType})`}function Qr(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of ls(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,l,c){const u=Ql(o,l,c);return o.inclusive?u<=0:u<0})(n.startAt,ls(n),r)||n.endAt&&!(function(o,l,c){const u=Ql(o,l,c);return o.inclusive?u>=0:u>0})(n.endAt,ls(n),r))})(s,e)}function Dg(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Bd(s){return(e,t)=>{let n=!1;for(const r of ls(s)){const i=Og(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function Og(s,e,t){const n=s.field.isKeyField()?M.comparator(e.key,t.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?An(c,u):U(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:s.dir})}}/**
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
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Td(this.inner)}size(){return this.innerSize}}/**
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
 */const Mg=new se(M.comparator);function ot(){return Mg}const jd=new se(M.comparator);function ss(...s){let e=jd;for(const t of s)e=e.insert(t.key,t);return e}function qd(s){let e=jd;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Gt(){return cs()}function Hd(){return cs()}function cs(){return new en((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Ng=new se(M.comparator),$g=new fe(M.comparator);function Q(...s){let e=$g;for(const t of s)e=e.add(t);return e}const Ug=new fe(K);function Fg(){return Ug}/**
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
 */function No(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(e)?"-0":e}}function zd(s){return{integerValue:""+s}}function Bg(s,e){return fg(e)?zd(e):No(s,e)}/**
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
 */class Jr{constructor(){this._=void 0}}function jg(s,e,t){return s instanceof Ar?(function(r,i){const o={fields:{[Cd]:{stringValue:Sd},[Rd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Lo(i)&&(i=Wr(i)),i&&(o.fields[Pd]=i),{mapValue:o}})(t,e):s instanceof ys?Wd(s,e):s instanceof bs?Kd(s,e):(function(r,i){const o=Gd(r,i),l=Zl(o)+Zl(r.Ae);return so(o)&&so(r.Ae)?zd(l):No(r.serializer,l)})(s,e)}function qg(s,e,t){return s instanceof ys?Wd(s,e):s instanceof bs?Kd(s,e):t}function Gd(s,e){return s instanceof Sr?(function(n){return so(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class Ar extends Jr{}class ys extends Jr{constructor(e){super(),this.elements=e}}function Wd(s,e){const t=Qd(e);for(const n of s.elements)t.some((r=>Xe(r,n)))||t.push(n);return{arrayValue:{values:t}}}class bs extends Jr{constructor(e){super(),this.elements=e}}function Kd(s,e){let t=Qd(e);for(const n of s.elements)t=t.filter((r=>!Xe(r,n)));return{arrayValue:{values:t}}}class Sr extends Jr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Zl(s){return oe(s.integerValue||s.doubleValue)}function Qd(s){return Vo(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function Hg(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof ys&&r instanceof ys||n instanceof bs&&r instanceof bs?Tn(n.elements,r.elements,Xe):n instanceof Sr&&r instanceof Sr?Xe(n.Ae,r.Ae):n instanceof Ar&&r instanceof Ar})(s.transform,e.transform)}class zg{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function or(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Yr{}function Jd(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new $o(s.key,$e.none()):new Ts(s.key,s.data,$e.none());{const t=s.data,n=ke.empty();let r=new fe(ve.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Mt(s.key,n,new De(r.toArray()),$e.none())}}function Gg(s,e,t){s instanceof Ts?(function(r,i,o){const l=r.value.clone(),c=tc(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(s,e,t):s instanceof Mt?(function(r,i,o){if(!or(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=tc(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Yd(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ds(s,e,t,n){return s instanceof Ts?(function(i,o,l,c){if(!or(i.precondition,o))return l;const u=i.value.clone(),h=nc(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof Mt?(function(i,o,l,c){if(!or(i.precondition,o))return l;const u=nc(i.fieldTransforms,c,o),h=o.data;return h.setAll(Yd(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(s,e,t,n):(function(i,o,l){return or(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(s,e,t)}function Wg(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=Gd(n.transform,r||null);i!=null&&(t===null&&(t=ke.empty()),t.set(n.field,i))}return t||null}function ec(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Tn(n,r,((i,o)=>Hg(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Ts extends Yr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mt extends Yr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yd(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function tc(s,e,t){const n=new Map;Y(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,l=e.data.field(i.field);n.set(i.field,qg(o,l,t[r]))}return n}function nc(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,jg(i,o,e))}return n}class $o extends Yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kg extends Yr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qg{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Gg(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ds(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ds(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hd();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(r.key)?null:l;const c=Jd(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Q())}isEqual(e){return this.batchId===e.batchId&&Tn(this.mutations,e.mutations,((t,n)=>ec(t,n)))&&Tn(this.baseMutations,e.baseMutations,((t,n)=>ec(t,n)))}}class Uo{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Y(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=(function(){return Ng})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Uo(e,t,n,r)}}/**
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
 */var ce,J;function Xg(s){switch(s){case P.OK:return U(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U(15467,{code:s})}}function Xd(s){if(s===void 0)return it("GRPC error has no .code"),P.UNKNOWN;switch(s){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return U(39323,{code:s})}}(J=ce||(ce={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ey=new Ct([4294967295,4294967295],0);function sc(s){const e=Zg().encode(s),t=new pd;return t.update(e),new Uint8Array(t.digest())}function rc(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ct([t,n],0),new Ct([r,i],0)]}class Fo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new rs(`Invalid padding: ${t}`);if(n<0)throw new rs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new rs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new rs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ct.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Ct.fromNumber(n)));return r.compare(ey)===1&&(r=new Ct([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=sc(e),[n,r]=rc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,r,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fo(i,r,t);return n.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=sc(e),[n,r]=rc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,r,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Xr(q.min(),r,new se(K),ot(),Q())}}class As{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new As(n,t,Q(),Q(),Q())}}/**
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
 */class ar{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Zd{constructor(e,t){this.targetId=e,this.Ce=t}}class eu{constructor(e,t,n=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ic{constructor(){this.ve=0,this.Fe=oc(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),n=Q();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:U(38017,{changeType:i})}})),new As(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=oc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ty{constructor(e){this.Ge=e,this.ze=new Map,this.je=ot(),this.Je=Xs(),this.He=Xs(),this.Ye=new se(K)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(io(i))if(n===0){const o=new M(i.path);this.et(t,o,Te.newNoDocument(o,q.min()))}else Y(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,l;try{o=kt(n).toUint8Array()}catch(c){if(c instanceof Ad)return In("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fo(o,r,i)}catch(c){return In(c instanceof rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&io(l.target)){const c=new M(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Te.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=Q();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new Xr(e,t,this.Ye,this.je,n);return this.je=ot(),this.Je=Xs(),this.He=Xs(),this.Ye=new se(K),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ic,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(K),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ic),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xs(){return new se(M.comparator)}function oc(){return new se(M.comparator)}const ny={asc:"ASCENDING",desc:"DESCENDING"},sy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ry={and:"AND",or:"OR"};class iy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lo(s,e){return s.useProto3Json||Gr(e)?e:{value:e}}function Cr(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tu(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function oy(s,e){return Cr(s,e.toTimestamp())}function We(s){return Y(!!s,49232),q.fromTimestamp((function(t){const n=xt(t);return new te(n.seconds,n.nanos)})(s))}function Bo(s,e){return co(s,e).canonicalString()}function co(s,e){const t=(function(r){return new Z(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function nu(s){const e=Z.fromString(s);return Y(au(e),10190,{key:e.toString()}),e}function uo(s,e){return Bo(s.databaseId,e.path)}function ji(s,e){const t=nu(e);if(t.get(1)!==s.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new M(ru(t))}function su(s,e){return Bo(s.databaseId,e)}function ay(s){const e=nu(s);return e.length===4?Z.emptyPath():ru(e)}function ho(s){return new Z(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function ru(s){return Y(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function ac(s,e,t){return{name:uo(s,e),fields:t.value.mapValue.fields}}function ly(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Y(h===void 0||typeof h=="string",58123),_e.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),_e.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const h=u.code===void 0?P.UNKNOWN:Xd(u.code);return new V(h,u.message||"")})(o);t=new eu(n,r,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=ji(s,n.document.name),i=We(n.document.updateTime),o=n.document.createTime?We(n.document.createTime):q.min(),l=new ke({mapValue:{fields:n.document.fields}}),c=Te.newFoundDocument(r,i,o,l),u=n.targetIds||[],h=n.removedTargetIds||[];t=new ar(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=ji(s,n.document),i=n.readTime?We(n.readTime):q.min(),o=Te.newNoDocument(r,i),l=n.removedTargetIds||[];t=new ar([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=ji(s,n.document),i=n.removedTargetIds||[];t=new ar([],i,r,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new Yg(r,i),l=n.targetId;t=new Zd(l,o)}}return t}function cy(s,e){let t;if(e instanceof Ts)t={update:ac(s,e.key,e.value)};else if(e instanceof $o)t={delete:uo(s,e.key)};else if(e instanceof Mt)t={update:ac(s,e.key,e.data),updateMask:by(e.fieldMask)};else{if(!(e instanceof Kg))return U(16599,{Vt:e.type});t={verify:uo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const l=o.transform;if(l instanceof Ar)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sr)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:oy(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(s,e.precondition)),t}function dy(s,e){return s&&s.length>0?(Y(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?We(r.updateTime):We(i);return o.isEqual(q.min())&&(o=We(i)),new zg(o,r.transformResults||[])})(t,e)))):[]}function uy(s,e){return{documents:[su(s,e.path)]}}function hy(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=su(s,r);const i=(function(u){if(u.length!==0)return ou(Be.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(g){return{field:dn(g.field),direction:my(g.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=lo(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:r}}function py(s){let e=ay(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){Y(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const g=iu(f);return g instanceof Be&&Od(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((g=>(function(C){return new Tr(un(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(f){let g;return g=typeof f=="object"?f.value:f,Gr(g)?null:g})(t.limit));let c=null;t.startAt&&(c=(function(f){const g=!!f.before,E=f.values||[];return new Ir(E,g)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const g=!f.before,E=f.values||[];return new Ir(E,g)})(t.endAt)),Lg(e,r,o,i,l,"F",c,u)}function fy(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iu(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=un(t.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=un(t.unaryFilter.field);return de.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=un(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=un(t.unaryFilter.field);return de.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(s):s.fieldFilter!==void 0?(function(t){return de.create(un(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Be.create(t.compositeFilter.filters.map((n=>iu(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(s):U(30097,{filter:s})}function my(s){return ny[s]}function gy(s){return sy[s]}function yy(s){return ry[s]}function dn(s){return{fieldPath:s.canonicalString()}}function un(s){return ve.fromServerFormat(s.fieldPath)}function ou(s){return s instanceof de?(function(t){if(t.op==="=="){if(Kl(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kl(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(t.field),op:gy(t.op),value:t.value}}})(s):s instanceof Be?(function(t){const n=t.getFilters().map((r=>ou(r)));return n.length===1?n[0]:{compositeFilter:{op:yy(t.op),filters:n}}})(s):U(54877,{filter:s})}function by(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function au(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class Et{constructor(e,t,n,r,i=q.min(),o=q.min(),l=_e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vy{constructor(e){this.yt=e}}function _y(s){const e=py({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ao(e,e.limit,"L"):e}/**
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
 */class wy{constructor(){this.Cn=new Ey}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Rt.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Ey{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new fe(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new fe(Z.comparator)).toArray()}}/**
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
 */const lc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lu=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(lu,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
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
 */const cc="LruGarbageCollector",Iy=1048576;function dc([s,e],[t,n]){const r=K(s,t);return r===0?K(e,n):r}class Ty{constructor(e){this.Ir=e,this.buffer=new fe(dc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();dc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ay{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(cc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?D(cc,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Vr(3e5)}))}}class Sy{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(zr.ce);const n=new Ty(t);return this.mr.forEachTarget(e,(r=>n.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>n.Ar(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(lc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(n=f,l=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(u=Date.now(),ln()<=W.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f}))))}}function Cy(s,e){return new Sy(s,e)}/**
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
 */class xy{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&ds(n.mutation,r,De.empty(),te.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,Q()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=Q()){const r=Gt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=ss();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Gt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Q())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,n,r){let i=ot();const o=cs(),l=(function(){return cs()})();return t.forEach(((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Mt)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ds(h.mutation,u,h.mutation.getFieldMask(),te.now())):o.set(u.key,De.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>l.set(u,new Ry(h,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,t){const n=cs();let r=new se(((o,l)=>o-l)),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let h=n.get(c)||De.empty();h=l.applyToLocalView(u,h),n.set(c,h);const f=(r.get(l.batchId)||Q()).add(c);r=r.insert(l.batchId,f)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=Hd();h.forEach((g=>{if(!i.has(g)){const E=Jd(t.get(g),n.get(g));E!==null&&f.set(g,E),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return R.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return(function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ud(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):R.resolve(Gt());let l=ps,c=i;return o.next((u=>R.forEach(u,((h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?R.resolve():this.remoteDocumentCache.getEntry(e,h).next((g=>{c=c.insert(h,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Q()))).next((h=>({batchId:l,changes:qd(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((n=>{let r=ss();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=ss();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(c=>{const u=(function(f,g){return new Is(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((f,g)=>{o=o.insert(f,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Te.newInvalidDocument(h)))}));let l=ss();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&ds(h.mutation,u,De.empty(),te.now()),Qr(t,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class ky{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:We(r.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:_y(r.bundledQuery),readTime:We(r.readTime)}})(t)),R.resolve()}}/**
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
 */class Ly{constructor(){this.overlays=new se(M.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Gt();return R.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const r=Gt(),i=t.length+1,o=new M(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new se(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=Gt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Gt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>l.set(u,h))),!(l.size()>=r)););return R.resolve(l)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Jg(t,n));let i=this.qr.get(t);i===void 0&&(i=Q(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
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
 */class jo{constructor(){this.Qr=new fe(ye.$r),this.Ur=new fe(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new ye(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new M(new Z([])),n=new ye(t,e),r=new ye(t,e+1),i=[];return this.Ur.forEachInRange([n,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new Z([])),n=new ye(t,e),r=new ye(t,e+1);let i=Q();return this.Ur.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ye(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
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
 */class Dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ye.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qg(i,t,n,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ko:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ye(t,0),r=new ye(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],(o=>{const l=this.Xr(o.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fe(K);return t.forEach((r=>{const i=new ye(r,0),o=new ye(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{n=n.add(l.Yr)}))})),R.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const o=new ye(new M(i),0);let l=new fe(K);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)}),o),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((n=>{const r=this.Xr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Y(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return R.forEach(t.mutations,(r=>{const i=new ye(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new ye(t,0),r=this.Zr.firstAfterOrEqual(n);return R.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Oy{constructor(e){this.ri=e,this.docs=(function(){return new se(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=ot();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Te.newInvalidDocument(r))})),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ot();const o=t.path,l=new M(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dg(cg(h),n)<=0||(r.has(h.key)||Qr(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,r){U(9500)}ii(e,t){return R.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new My(this)}getSize(e){return R.resolve(this.size)}}class My extends Py{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Ny{constructor(e){this.persistence=e,this.si=new en((t=>Do(t)),Oo),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new jo,this.targetCount=0,this.ai=Cn.ur()}forEachTarget(e,t){return this.si.forEach(((n,r)=>t(r))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Cn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),R.waitFor(i).next((()=>r))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class cu{constructor(e,t){this.ui={},this.overlays={},this.ci=new zr(0),this.li=!1,this.li=!0,this.hi=new Vy,this.referenceDelegate=e(this),this.Pi=new Ny(this),this.indexManager=new wy,this.remoteDocumentCache=(function(r){return new Oy(r)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new vy(t),this.Ii=new ky(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ly,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Dy(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const r=new $y(this.ci.next());return this.referenceDelegate.Ei(),n(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class $y extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.Ri=new jo,this.Vi=null}static mi(e){return new qo(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(n=>{const r=M.fromPath(n);return this.gi(e,r).next((i=>{i||t.removeEntry(r,q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Pr{constructor(e,t){this.persistence=e,this.pi=new en((n=>mg(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=Cy(this,t)}static mi(e,t){return new Pr(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((n,r)=>this.br(e,n,r).next((i=>i?R.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,t).next((l=>{l||(n++,i.removeEntry(o,q.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rr(e.data.value)),t}br(e,t,n){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return R.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ho{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=Q(),r=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ho(e,t.fromCache,n,r)}}/**
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
 */class Fy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Vf()?8:pg(Ae())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Uy;return this.Ss(e,t,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,o,l.size)}))})).next((()=>i.result))}bs(e,t,n,r){return n.documentReadCount<this.fs?(ln()<=W.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(ln()<=W.DEBUG&&D("QueryEngine","Query:",cn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(ln()<=W.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):R.resolve())}ys(e,t){if(Xl(t))return R.resolve(null);let n=Ge(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=ao(t,null,"F"),n=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=Q(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,n).next((c=>{const u=this.Ds(t,l);return this.Cs(t,u,o,c.readTime)?this.ys(e,ao(t,null,"F")):this.vs(e,u,t,c)}))))})))))}ws(e,t,n,r){return Xl(t)||r.isEqual(q.min())?R.resolve(null):this.ps.getDocuments(e,n).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,r)?R.resolve(null):(ln()<=W.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cn(t)),this.vs(e,o,t,lg(r,ps)).next((l=>l)))}))}Ds(e,t){let n=new fe(Bd(e));return t.forEach(((r,i)=>{Qr(e,i)&&(n=n.add(i))})),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return ln()<=W.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",cn(t)),this.ps.getDocumentsMatchingQuery(e,t,Rt.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const zo="LocalStore",By=3e8;class jy{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new se(K),this.xs=new en((i=>Do(i)),Oo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xy(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function qy(s,e,t,n){return new jy(s,e,t,n)}async function du(s,e){const t=H(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],l=[];let c=Q();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function Hy(s,e){const t=H(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,h){const f=u.batch,g=f.keys();let E=R.resolve();return g.forEach((C=>{E=E.next((()=>h.getEntry(c,C))).next((k=>{const x=u.docVersions.get(C);Y(x!==null,48541),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))}))})),E.next((()=>l.mutationQueue.removeMutationBatch(c,f)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let c=Q();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function uu(s){const e=H(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function zy(s,e){const t=H(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((h,f)=>{const g=r.get(f);if(!g)return;l.push(t.Pi.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.Pi.addMatchingKeys(i,h.addedDocuments,f))));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(_e.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,n)),r=r.insert(f,E),(function(k,x,B){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=By?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(g,E,h)&&l.push(t.Pi.updateTargetData(i,E))}));let c=ot(),u=Q();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),l.push(Gy(i,o,e.documentUpdates).next((h=>{c=h.ks,u=h.qs}))),!n.isEqual(q.min())){const h=t.Pi.getLastRemoteSnapshotVersion(i).next((f=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));l.push(h)}return R.waitFor(l).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.Ms=r,i)))}function Gy(s,e,t){let n=Q(),r=Q();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=ot();return t.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):D(zo,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function Wy(s,e){const t=H(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=ko),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ky(s,e){const t=H(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.Pi.getTargetData(n,e).next((i=>i?(r=i,R.resolve(r)):t.Pi.allocateTargetId(n).next((o=>(r=new Et(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function po(s,e,t){const n=H(s),r=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Dn(o))throw o;D(zo,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function uc(s,e,t){const n=H(s);let r=q.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const f=H(c),g=f.xs.get(h);return g!==void 0?R.resolve(f.Ms.get(g)):f.Pi.getTargetData(u,h)})(n,o,Ge(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,e,t?r:q.min(),t?i:Q()))).next((l=>(Qy(n,Dg(e),l),{documents:l,Qs:i})))))}function Qy(s,e,t){let n=s.Os.get(e)||q.min();t.forEach(((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),s.Os.set(e,n)}class hc{constructor(){this.activeTargetIds=Fg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jy{constructor(){this.Mo=new hc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const pc="ConnectivityMonitor";class fc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(pc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(pc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zs=null;function fo(){return Zs===null?Zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zs++,"0x"+Zs.toString(16)}/**
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
 */const qi="RestConnection",Xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===wr?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const o=fo(),l=this.zo(e,t.toUriEncodedString());D(qi,`Sending RPC '${e}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),h=xn(u);return this.Jo(e,l,c,n,h).then((f=>(D(qi,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw In(qi,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",n),f}))}Ho(e,t,n,r,i,o){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ln})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const n=Xy[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */const Ee="WebChannelConnection";class tb extends Zy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const o=fo();return new Promise(((l,c)=>{const u=new fd;u.setWithCredentials(!0),u.listenOnce(md.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case sr.NO_ERROR:const f=u.getResponseJson();D(Ee,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case sr.TIMEOUT:D(Ee,`RPC '${e}' ${o} timed out`),c(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const g=u.getStatus();if(D(Ee,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const C=E==null?void 0:E.error;if(C&&C.status&&C.message){const k=(function(B){const z=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN})(C.status);c(new V(k,C.message))}else c(new V(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new V(P.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{D(Ee,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);D(Ee,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}T_(e,t,n){const r=fo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bd(),l=yd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const h=i.join("");D(Ee,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let g=!1,E=!1;const C=new eb({Yo:x=>{E?D(Ee,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(g||(D(Ee,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),D(Ee,`RPC '${e}' stream ${r} sending:`,x),f.send(x))},Zo:()=>f.close()}),k=(x,B,z)=>{x.listen(B,(j=>{try{z(j)}catch(re){setTimeout((()=>{throw re}),0)}}))};return k(f,ns.EventType.OPEN,(()=>{E||(D(Ee,`RPC '${e}' stream ${r} transport opened.`),C.o_())})),k(f,ns.EventType.CLOSE,(()=>{E||(E=!0,D(Ee,`RPC '${e}' stream ${r} transport closed`),C.a_(),this.E_(f))})),k(f,ns.EventType.ERROR,(x=>{E||(E=!0,In(Ee,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new V(P.UNAVAILABLE,"The operation could not be completed")))})),k(f,ns.EventType.MESSAGE,(x=>{var B;if(!E){const z=x.data[0];Y(!!z,16349);const j=z,re=(j==null?void 0:j.error)||((B=j[0])==null?void 0:B.error);if(re){D(Ee,`RPC '${e}' stream ${r} received error:`,re);const he=re.status;let ne=(function(v){const I=ce[v];if(I!==void 0)return Xd(I)})(he),w=re.message;ne===void 0&&(ne=P.INTERNAL,w="Unknown error status: "+he+" with message "+re.message),E=!0,C.a_(new V(ne,w)),f.close()}else D(Ee,`RPC '${e}' stream ${r} received:`,z),C.u_(z)}})),k(l,gd.STAT_EVENT,(x=>{x.stat===eo.PROXY?D(Ee,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===eo.NOPROXY&&D(Ee,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Hi(){return typeof document<"u"?document:null}/**
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
 */function Zr(s){return new iy(s,!0)}/**
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
 */class hu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const mc="PersistentStream";class pu{constructor(e,t,n,r,i,o,l,c){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new V(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(mc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(D(mc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nb extends pu{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=ly(this.serializer,e),n=(function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?We(o.readTime):q.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=ho(this.serializer),t.addTarget=(function(i,o){let l;const c=o.target;if(l=io(c)?{documents:uy(i,c)}:{query:hy(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=tu(i,o.resumeToken);const u=lo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){l.readTime=Cr(i,o.snapshotVersion.toTimestamp());const u=lo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const n=fy(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=ho(this.serializer),t.removeTarget=e,this.q_(t)}}class sb extends pu{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dy(e.writeResults,e.commitTime),n=We(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=ho(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>cy(this.serializer,n)))};this.q_(t)}}/**
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
 */class rb{}class ib extends rb{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,co(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(P.UNKNOWN,i.toString())}))}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,co(t,n),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ob{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Yt="RemoteStore";class ab{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{tn(this)&&(D(Yt,"Restarting streams for network reachability change."),await(async function(c){const u=H(c);u.Ea.add(4),await Ss(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ei(u)})(this))}))})),this.Ra=new ob(n,r)}}async function ei(s){if(tn(s))for(const e of s.da)await e(!0)}async function Ss(s){for(const e of s.da)await e(!1)}function fu(s,e){const t=H(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qo(t)?Ko(t):On(t).O_()&&Wo(t,e))}function Go(s,e){const t=H(s),n=On(t);t.Ia.delete(e),n.O_()&&mu(t,e),t.Ia.size===0&&(n.O_()?n.L_():tn(t)&&t.Ra.set("Unknown"))}function Wo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}On(s).Y_(e)}function mu(s,e){s.Va.Ue(e),On(s).Z_(e)}function Ko(s){s.Va=new ty({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),On(s).start(),s.Ra.ua()}function Qo(s){return tn(s)&&!On(s).x_()&&s.Ia.size>0}function tn(s){return H(s).Ea.size===0}function gu(s){s.Va=void 0}async function lb(s){s.Ra.set("Online")}async function cb(s){s.Ia.forEach(((e,t)=>{Wo(s,e)}))}async function db(s,e){gu(s),Qo(s)?(s.Ra.ha(e),Ko(s)):s.Ra.set("Unknown")}async function ub(s,e,t){if(s.Ra.set("Online"),e instanceof eu&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))})(s,e)}catch(n){D(Yt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rr(s,n)}else if(e instanceof ar?s.Va.Ze(e):e instanceof Zd?s.Va.st(e):s.Va.tt(e),!t.isEqual(q.min()))try{const n=await uu(s.localStore);t.compareTo(n)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(_e.EMPTY_BYTE_STRING,h.snapshotVersion)),mu(i,c);const f=new Et(h.target,c,u,h.sequenceNumber);Wo(i,f)})),i.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){D(Yt,"Failed to raise snapshot:",n),await Rr(s,n)}}async function Rr(s,e,t){if(!Dn(e))throw e;s.Ea.add(1),await Ss(s),s.Ra.set("Offline"),t||(t=()=>uu(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{D(Yt,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await ei(s)}))}function yu(s,e){return e().catch((t=>Rr(s,t,e)))}async function ti(s){const e=H(s),t=Vt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ko;for(;hb(e);)try{const r=await Wy(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,pb(e,r)}catch(r){await Rr(e,r)}bu(e)&&vu(e)}function hb(s){return tn(s)&&s.Ta.length<10}function pb(s,e){s.Ta.push(e);const t=Vt(s);t.O_()&&t.X_&&t.ea(e.mutations)}function bu(s){return tn(s)&&!Vt(s).x_()&&s.Ta.length>0}function vu(s){Vt(s).start()}async function fb(s){Vt(s).ra()}async function mb(s){const e=Vt(s);for(const t of s.Ta)e.ea(t.mutations)}async function gb(s,e,t){const n=s.Ta.shift(),r=Uo.from(n,e,t);await yu(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await ti(s)}async function yb(s,e){e&&Vt(s).X_&&await(async function(n,r){if((function(o){return Xg(o)&&o!==P.ABORTED})(r.code)){const i=n.Ta.shift();Vt(n).B_(),await yu(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ti(n)}})(s,e),bu(s)&&vu(s)}async function gc(s,e){const t=H(s);t.asyncQueue.verifyOperationInProgress(),D(Yt,"RemoteStore received new credentials");const n=tn(t);t.Ea.add(3),await Ss(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ei(t)}async function bb(s,e){const t=H(s);e?(t.Ea.delete(2),await ei(t)):e||(t.Ea.add(2),await Ss(t),t.Ra.set("Unknown"))}function On(s){return s.ma||(s.ma=(function(t,n,r){const i=H(t);return i.sa(),new nb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Xo:lb.bind(null,s),t_:cb.bind(null,s),r_:db.bind(null,s),H_:ub.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Qo(s)?Ko(s):s.Ra.set("Unknown")):(await s.ma.stop(),gu(s))}))),s.ma}function Vt(s){return s.fa||(s.fa=(function(t,n,r){const i=H(t);return i.sa(),new sb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:fb.bind(null,s),r_:yb.bind(null,s),ta:mb.bind(null,s),na:gb.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await ti(s)):(await s.fa.stop(),s.Ta.length>0&&(D(Yt,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
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
 */class Jo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,l=new Jo(e,t,o,r,i);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(s,e){if(it("AsyncQueue",`${e}: ${s}`),Dn(s))return new V(P.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class yc{constructor(){this.ga=new se(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Pn{constructor(e,t,n,r,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Pn(e,t,fn.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class vb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class _b{constructor(){this.queries=bc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=H(t),i=r.queries;r.queries=bc(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(n)}))})(this,new V(P.ABORTED,"Firestore shutting down"))}}function bc(){return new en((s=>Fd(s)),Kr)}async function _u(s,e){const t=H(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(n=2):(i=new vb,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=Yo(o,`Initialization of query '${cn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Xo(t)}async function wu(s,e){const t=H(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function wb(s,e){const t=H(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(n=!0);o.wa=r}}n&&Xo(t)}function Eb(s,e,t){const n=H(s),r=n.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);n.queries.delete(e)}function Xo(s){s.Ca.forEach((e=>{e.next()}))}var mo,vc;(vc=mo||(mo={})).Ma="default",vc.Cache="cache";class Eu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new Pn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mo.Cache}}/**
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
 */class Iu{constructor(e){this.key=e}}class Tu{constructor(e){this.key=e}}class Ib{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Bd(e),this.tu=new fn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new yc,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,f)=>{const g=r.get(h),E=Qr(this.query,f)?f:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let x=!1;g&&E?g.data.isEqual(E.data)?C!==k&&(n.track({type:3,doc:E}),x=!0):this.su(g,E)||(n.track({type:2,doc:E}),x=!0,(c&&this.eu(E,c)>0||u&&this.eu(E,u)<0)&&(l=!0)):!g&&E?(n.track({type:0,doc:E}),x=!0):g&&!E&&(n.track({type:1,doc:g}),x=!0,(c||u)&&(l=!0)),x&&(E?(o=o.add(E),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(E,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:x})}};return k(E)-k(C)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(n),r=r??!1;const l=t&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Pn(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Q(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Tu(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new Iu(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zo="SyncEngine";class Tb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ab{constructor(e){this.key=e,this.hu=!1}}class Sb{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new en((l=>Fd(l)),Kr),this.Iu=new Map,this.Eu=new Set,this.du=new se(M.comparator),this.Au=new Map,this.Ru=new jo,this.Vu={},this.mu=new Map,this.fu=Cn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cb(s,e,t=!0){const n=xu(s);let r;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Au(n,e,t,!0),r}async function Pb(s,e){const t=xu(s);await Au(t,e,!0,!1)}async function Au(s,e,t,n){const r=await Ky(s.localStore,Ge(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await Rb(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&fu(s.remoteStore,r),l}async function Rb(s,e,t,n,r){s.pu=(f,g,E)=>(async function(k,x,B,z){let j=x.view.ru(B);j.Cs&&(j=await uc(k.localStore,x.query,!1).then((({documents:w})=>x.view.ru(w,j))));const re=z&&z.targetChanges.get(x.targetId),he=z&&z.targetMismatches.get(x.targetId)!=null,ne=x.view.applyChanges(j,k.isPrimaryClient,re,he);return wc(k,x.targetId,ne.au),ne.snapshot})(s,f,g,E);const i=await uc(s.localStore,e,!0),o=new Ib(e,i.Qs),l=o.ru(i.documents),c=As.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(l,s.isPrimaryClient,c);wc(s,t,u.au);const h=new Tb(e,t,o);return s.Tu.set(e,h),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),u.snapshot}async function xb(s,e,t){const n=H(s),r=n.Tu.get(e),i=n.Iu.get(r.targetId);if(i.length>1)return n.Iu.set(r.targetId,i.filter((o=>!Kr(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await po(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Go(n.remoteStore,r.targetId),go(n,r.targetId)})).catch(Vn)):(go(n,r.targetId),await po(n.localStore,r.targetId,!0))}async function kb(s,e){const t=H(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Go(t.remoteStore,n.targetId))}async function Lb(s,e,t){const n=Ub(s);try{const r=await(function(o,l){const c=H(o),u=te.now(),h=l.reduce(((E,C)=>E.add(C.key)),Q());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let C=ot(),k=Q();return c.Ns.getEntries(E,h).next((x=>{C=x,C.forEach(((B,z)=>{z.isValidDocument()||(k=k.add(B))}))})).next((()=>c.localDocuments.getOverlayedDocuments(E,C))).next((x=>{f=x;const B=[];for(const z of l){const j=Wg(z,f.get(z.key).overlayedDocument);j!=null&&B.push(new Mt(z.key,j,Ld(j.value.mapValue),$e.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,B,l)})).next((x=>{g=x;const B=x.applyToLocalDocumentSet(f,k);return c.documentOverlayCache.saveOverlays(E,x.batchId,B)}))})).then((()=>({batchId:g.batchId,changes:qd(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new se(K)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(n,r.batchId,t),await Cs(n,r.changes),await ti(n.remoteStore)}catch(r){const i=Yo(r,"Failed to persist write");t.reject(i)}}async function Su(s,e){const t=H(s);try{const n=await zy(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Au.get(i);o&&(Y(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Y(o.hu,14607):r.removedDocuments.size>0&&(Y(o.hu,42227),o.hu=!1))})),await Cs(t,n,e)}catch(n){await Vn(n)}}function _c(s,e,t){const n=H(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=H(o);c.onlineState=l;let u=!1;c.queries.forEach(((h,f)=>{for(const g of f.Sa)g.va(l)&&(u=!0)})),u&&Xo(c)})(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Vb(s,e,t){const n=H(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),i=r&&r.key;if(i){let o=new se(M.comparator);o=o.insert(i,Te.newNoDocument(i,q.min()));const l=Q().add(i),c=new Xr(q.min(),new Map,new se(K),o,l);await Su(n,c),n.du=n.du.remove(i),n.Au.delete(e),ea(n)}else await po(n.localStore,e,!1).then((()=>go(n,e,t))).catch(Vn)}async function Db(s,e){const t=H(s),n=e.batch.batchId;try{const r=await Hy(t.localStore,e);Pu(t,n,null),Cu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Cs(t,r)}catch(r){await Vn(r)}}async function Ob(s,e,t){const n=H(s);try{const r=await(function(o,l){const c=H(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next((f=>(Y(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);Pu(n,e,t),Cu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Cs(n,r)}catch(r){await Vn(r)}}function Cu(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Pu(s,e,t){const n=H(s);let r=n.Vu[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function go(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Ru(s,n)}))}function Ru(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Go(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),ea(s))}function wc(s,e,t){for(const n of t)n instanceof Iu?(s.Ru.addReference(n.key,e),Mb(s,n)):n instanceof Tu?(D(Zo,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Ru(s,n.key)):U(19791,{wu:n})}function Mb(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(D(Zo,"New document in limbo: "+t),s.Eu.add(n),ea(s))}function ea(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new M(Z.fromString(e)),n=s.fu.next();s.Au.set(n,new Ab(t)),s.du=s.du.insert(t,n),fu(s.remoteStore,new Et(Ge(Mo(t.path)),n,"TargetPurposeLimboResolution",zr.ce))}}async function Cs(s,e,t){const n=H(s),r=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,c)=>{o.push(n.pu(c,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Ho.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),n.Pu.H_(r),await(async function(c,u){const h=H(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>R.forEach(u,(g=>R.forEach(g.Es,(E=>h.persistence.referenceDelegate.addReference(f,g.targetId,E))).next((()=>R.forEach(g.ds,(E=>h.persistence.referenceDelegate.removeReference(f,g.targetId,E)))))))))}catch(f){if(!Dn(f))throw f;D(zo,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const E=h.Ms.get(g),C=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(C);h.Ms=h.Ms.insert(g,k)}}})(n.localStore,i))}async function Nb(s,e){const t=H(s);if(!t.currentUser.isEqual(e)){D(Zo,"User change. New user:",e.toKey());const n=await du(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new V(P.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Cs(t,n.Ls)}}function $b(s,e){const t=H(s),n=t.Au.get(e);if(n&&n.hu)return Q().add(n.key);{let r=Q();const i=t.Iu.get(e);if(!i)return r;for(const o of i){const l=t.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function xu(s){const e=H(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Su.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vb.bind(null,e),e.Pu.H_=wb.bind(null,e.eventManager),e.Pu.yu=Eb.bind(null,e.eventManager),e}function Ub(s){const e=H(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class xr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return qy(this.persistence,new Fy,e.initialUser,this.serializer)}Cu(e){return new cu(qo.mi,this.serializer)}Du(e){return new Jy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xr.provider={build:()=>new xr};class Fb extends xr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Y(this.persistence.referenceDelegate instanceof Pr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ay(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new cu((n=>Pr.mi(n,t)),this.serializer)}}class yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>_c(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _b})()}createDatastore(e){const t=Zr(e.databaseInfo.databaseId),n=(function(i){return new tb(i)})(e.databaseInfo);return(function(i,o,l,c){return new ib(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,l){return new ab(n,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>_c(this.syncEngine,t,0)),(function(){return fc.v()?new fc:new Yy})())}createSyncEngine(e,t){return(function(r,i,o,l,c,u,h){const f=new Sb(r,i,o,l,c,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=H(r);D(Yt,"RemoteStore shutting down."),i.Ea.add(5),await Ss(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yo.provider={build:()=>new yo};/**
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
 */class ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Dt="FirestoreClient";class Bb{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{D(Dt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(D(Dt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Yo(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function zi(s,e){s.asyncQueue.verifyOperationInProgress(),D(Dt,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await du(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function Ec(s,e){s.asyncQueue.verifyOperationInProgress();const t=await jb(s);D(Dt,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>gc(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>gc(e.remoteStore,r))),s._onlineComponents=e}async function jb(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){D(Dt,"Using user provided OfflineComponentProvider");try{await zi(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;In("Error using user provided cache. Falling back to memory cache: "+t),await zi(s,new xr)}}else D(Dt,"Using default OfflineComponentProvider"),await zi(s,new Fb(void 0));return s._offlineComponents}async function Lu(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(D(Dt,"Using user provided OnlineComponentProvider"),await Ec(s,s._uninitializedComponentsProvider._online)):(D(Dt,"Using default OnlineComponentProvider"),await Ec(s,new yo))),s._onlineComponents}function qb(s){return Lu(s).then((e=>e.syncEngine))}async function Vu(s){const e=await Lu(s),t=e.eventManager;return t.onListen=Cb.bind(null,e.syncEngine),t.onUnlisten=xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kb.bind(null,e.syncEngine),t}function Hb(s,e,t={}){const n=new nt;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new ku({next:g=>{h.Nu(),o.enqueueAndForget((()=>wu(i,f)));const E=g.docs.has(l);!E&&g.fromCache?u.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?u.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Eu(Mo(l.path),h,{includeMetadataChanges:!0,qa:!0});return _u(i,f)})(await Vu(s),s.asyncQueue,e,t,n))),n.promise}function zb(s,e,t={}){const n=new nt;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new ku({next:g=>{h.Nu(),o.enqueueAndForget((()=>wu(i,f))),g.fromCache&&c.source==="server"?u.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Eu(l,h,{includeMetadataChanges:!0,qa:!0});return _u(i,f)})(await Vu(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Du(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Ic=new Map;/**
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
 */const Ou="firestore.googleapis.com",Tc=!0;class Ac{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ou,this.ssl=Tc}else this.host=e.host,this.ssl=e.ssl??Tc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iy)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ag("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ni{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Ym;switch(n.type){case"firstParty":return new tg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Ic.get(t);n&&(D("ComponentProvider","Removing Datastore"),Ic.delete(t),n.terminate())})(this),Promise.resolve()}}function Gb(s,e,t,n={}){var u;s=Fe(s,ni);const r=xn(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;r&&(id(`https://${l}`),od("Firestore",!0)),i.host!==Ou&&i.host!==l&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:n};if(!Kt(c,o)&&(s._setSettings(c),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Ie.MOCK_USER;else{h=Tf(n.mockUserToken,(u=s._app)==null?void 0:u.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ie(g)}s._authCredentials=new Xm(new _d(h,f))}}/**
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
 */class Mn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class ae{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Es(t,ae._jsonSchema))return new ae(e,n||null,new M(Z.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:ue("string",ae._jsonSchemaVersion),referencePath:ue("string")};class Pt extends Mn{constructor(e,t,n){super(e,t,Mo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new M(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function kr(s,e,...t){if(s=le(s),wd("collection","path",e),s instanceof ni){const n=Z.fromString(e,...t);return $l(n),new Pt(s,null,n)}{if(!(s instanceof ae||s instanceof Pt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return $l(n),new Pt(s.firestore,null,n)}}function Oe(s,e,...t){if(s=le(s),arguments.length===1&&(e=xo.newId()),wd("doc","path",e),s instanceof ni){const n=Z.fromString(e,...t);return Nl(n),new ae(s,null,new M(n))}{if(!(s instanceof ae||s instanceof Pt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return Nl(n),new ae(s.firestore,s instanceof Pt?s.converter:null,new M(n))}}/**
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
 */const Sc="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hu(this,"async_queue_retry"),this._c=()=>{const n=Hi();n&&D(Sc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Hi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new nt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Dn(e))throw e;D(Sc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,it("INTERNAL UNHANDLED ERROR: ",Pc(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Jo.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&U(47125,{Pc:Pc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Pc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class nn extends ni{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Cc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function Wb(s,e){const t=typeof s=="object"?s:dd(),n=typeof s=="string"?s:wr,r=Po(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Ef("firestore");i&&Gb(r,...i)}return r}function ta(s){if(s._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Kb(s),s._firestoreClient}function Kb(s){var n,r,i;const e=s._freezeSettings(),t=(function(l,c,u,h){return new bg(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Du(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new Bb(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(s._componentsProvider))}/**
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
 */class Ne{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ne(_e.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ne(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ne._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Es(e,Ne._jsonSchema))return Ne.fromBase64String(e.bytes)}}Ne._jsonSchemaVersion="firestore/bytes/1.0",Ne._jsonSchema={type:ue("string",Ne._jsonSchemaVersion),bytes:ue("string")};/**
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
 */class si{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class na{constructor(e){this._methodName=e}}/**
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
 */class Ke{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(e){if(Es(e,Ke._jsonSchema))return new Ke(e.latitude,e.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:ue("string",Ke._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
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
 */class Qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Es(e,Qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Qe(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qe._jsonSchemaVersion="firestore/vectorValue/1.0",Qe._jsonSchema={type:ue("string",Qe._jsonSchemaVersion),vectorValues:ue("object")};/**
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
 */const Qb=/^__.*__$/;class Jb{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class Mu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nu(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:s})}}class sa{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Lr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Nu(this.Ac)&&Qb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zr(e)}Cc(e,t,n,r=!1){return new sa({Ac:e,methodName:t,Dc:n,path:ve.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ri(s){const e=s._freezeSettings(),t=Zr(s._databaseId);return new Yb(s._databaseId,!!e.ignoreUndefinedProperties,t)}function $u(s,e,t,n,r,i={}){const o=s.Cc(i.merge||i.mergeFields?2:0,e,t,r);ra("Data must be an object, but it was:",o,n);const l=Uu(n,o);let c,u;if(i.merge)c=new De(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=bo(e,f,t);if(!o.contains(g))throw new V(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Bu(h,g)||h.push(g)}c=new De(h),u=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,u=o.fieldTransforms;return new Jb(new ke(l),c,u)}class ii extends na{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ii}}function Xb(s,e,t,n){const r=s.Cc(1,e,t);ra("Data must be an object, but it was:",r,n);const i=[],o=ke.empty();Ot(n,((c,u)=>{const h=ia(e,c,t);u=le(u);const f=r.yc(h);if(u instanceof ii)i.push(h);else{const g=Ps(u,f);g!=null&&(i.push(h),o.set(h,g))}}));const l=new De(i);return new Mu(o,l,r.fieldTransforms)}function Zb(s,e,t,n,r,i){const o=s.Cc(1,e,t),l=[bo(e,n,t)],c=[r];if(i.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(bo(e,i[g])),c.push(i[g+1]);const u=[],h=ke.empty();for(let g=l.length-1;g>=0;--g)if(!Bu(u,l[g])){const E=l[g];let C=c[g];C=le(C);const k=o.yc(E);if(C instanceof ii)u.push(E);else{const x=Ps(C,k);x!=null&&(u.push(E),h.set(E,x))}}const f=new De(u);return new Mu(h,f,o.fieldTransforms)}function ev(s,e,t,n=!1){return Ps(t,s.Cc(n?4:3,e))}function Ps(s,e){if(Fu(s=le(s)))return ra("Unsupported field value:",e,s),Uu(s,e);if(s instanceof na)return(function(n,r){if(!Nu(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,r){const i=[];let o=0;for(const l of n){let c=Ps(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(s,e)}return(function(n,r){if((n=le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bg(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=te.fromDate(n);return{timestampValue:Cr(r.serializer,i)}}if(n instanceof te){const i=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cr(r.serializer,i)}}if(n instanceof Ke)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ne)return{bytesValue:tu(r.serializer,n._byteString)};if(n instanceof ae){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bo(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Qe)return(function(o,l){return{mapValue:{fields:{[xd]:{stringValue:kd},[Er]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return No(l.serializer,u)}))}}}}}})(n,r);throw r.Sc(`Unsupported field value: ${Hr(n)}`)})(s,e)}function Uu(s,e){const t={};return Td(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(s,((n,r)=>{const i=Ps(r,e.mc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Fu(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof te||s instanceof Ke||s instanceof Ne||s instanceof ae||s instanceof na||s instanceof Qe)}function ra(s,e,t){if(!Fu(t)||!Ed(t)){const n=Hr(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function bo(s,e,t){if((e=le(e))instanceof si)return e._internalPath;if(typeof e=="string")return ia(s,e);throw Lr("Field path arguments must be of type string or ",s,!1,void 0,t)}const tv=new RegExp("[~\\*/\\[\\]]");function ia(s,e,t){if(e.search(tv)>=0)throw Lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new si(...e.split("."))._internalPath}catch{throw Lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Lr(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new V(P.INVALID_ARGUMENT,l+s+c)}function Bu(s,e){return s.some((t=>t.isEqual(e)))}/**
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
 */class ju{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nv extends ju{data(){return super.data()}}function oa(s,e){return typeof e=="string"?ia(s,e):e instanceof si?e._internalPath:e._delegate._internalPath}/**
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
 */function sv(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aa{}class rv extends aa{}function vo(s,e,...t){let n=[];e instanceof aa&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((c=>c instanceof la)).length,l=i.filter((c=>c instanceof oi)).length;if(o>1||o>0&&l>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class oi extends rv{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new oi(e,t,n)}_apply(e){const t=this._parse(e);return qu(e._query,t),new Mn(e.firestore,e.converter,oo(e._query,t))}_parse(e){const t=ri(e.firestore);return(function(i,o,l,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xc(f,h);const C=[];for(const k of f)C.push(Rc(c,i,k));g={arrayValue:{values:C}}}else g=Rc(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xc(f,h),g=ev(l,o,f,h==="in"||h==="not-in");return de.create(u,h,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lr(s,e,t){const n=e,r=oa("where",s);return oi._create(r,n,t)}class la extends aa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new la(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)qu(o,c),o=oo(o,c)})(e._query,t),new Mn(e.firestore,e.converter,oo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Rc(s,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ud(e)&&t.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!M.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Gl(s,new M(n))}if(t instanceof ae)return Gl(s,t._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hr(t)}.`)}function xc(s,e){if(!Array.isArray(s)||s.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qu(s,e){const t=(function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iv{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ot(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[Er].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>oe(o.doubleValue)));return new Qe(t)}convertGeoPoint(e){return new Ke(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Wr(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=xt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);Y(au(n),9688,{name:e});const r=new ms(n.get(1),n.get(3)),i=new M(n.popFirst(5));return r.isEqual(t)||it(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Hu(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wt extends ju{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(oa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Wt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Wt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wt._jsonSchema={type:ue("string",Wt._jsonSchemaVersion),bundleSource:ue("string","DocumentSnapshot"),bundleName:ue("string"),bundle:ue("string")};class cr extends Wt{data(e={}){return super.data(e)}}class mn{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new is(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new cr(this._firestore,this._userDataWriter,n.key,n,new is(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new cr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new is(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new cr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new is(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:ov(l.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ov(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:s})}}/**
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
 */function dr(s){s=Fe(s,ae);const e=Fe(s.firestore,nn);return Hb(ta(e),s._key).then((t=>cv(e,s,t)))}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:ue("string",mn._jsonSchemaVersion),bundleSource:ue("string","QuerySnapshot"),bundleName:ue("string"),bundle:ue("string")};class zu extends iv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ne(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function _o(s){s=Fe(s,Mn);const e=Fe(s.firestore,nn),t=ta(e),n=new zu(e);return sv(s._query),zb(t,s._query).then((r=>new mn(e,n,s,r)))}function wo(s,e,t){s=Fe(s,ae);const n=Fe(s.firestore,nn),r=Hu(s.converter,e);return ai(n,[$u(ri(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,$e.none())])}function av(s,e,t,...n){s=Fe(s,ae);const r=Fe(s.firestore,nn),i=ri(r);let o;return o=typeof(e=le(e))=="string"||e instanceof si?Zb(i,"updateDoc",s._key,e,t,n):Xb(i,"updateDoc",s._key,e),ai(r,[o.toMutation(s._key,$e.exists(!0))])}function ur(s){return ai(Fe(s.firestore,nn),[new $o(s._key,$e.none())])}function lv(s,e){const t=Fe(s.firestore,nn),n=Oe(s),r=Hu(s.converter,e);return ai(t,[$u(ri(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,$e.exists(!1))]).then((()=>n))}function ai(s,e){return(function(n,r){const i=new nt;return n.asyncQueue.enqueueAndForget((async()=>Lb(await qb(n),r,i))),i.promise})(ta(s),e)}function cv(s,e,t){const n=t.docs.get(e._key),r=new zu(s);return new Wt(s,r,e._key,n,new is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Ln=r})(kn),En(new Qt("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new nn(new Zm(n.getProvider("auth-internal")),new ng(o,n.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(u.options.projectId,h)})(o,r),o);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),St(Vl,Dl,e),St(Vl,Dl,"esm2020")})();var dv="firebase",uv="12.7.0";/**
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
 */St(dv,uv,"app");function Gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hv=Gu,Wu=new _s("auth","Firebase",Gu());/**
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
 */const Vr=new So("@firebase/auth");function pv(s,...e){Vr.logLevel<=W.WARN&&Vr.warn(`Auth (${kn}): ${s}`,...e)}function hr(s,...e){Vr.logLevel<=W.ERROR&&Vr.error(`Auth (${kn}): ${s}`,...e)}/**
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
 */function je(s,...e){throw ca(s,...e)}function Je(s,...e){return ca(s,...e)}function Ku(s,e,t){const n={...hv(),[e]:t};return new _s("auth","Firebase",n).create(e,{appName:s.name})}function st(s){return Ku(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Wu.create(s,...e)}function $(s,e,...t){if(!s)throw ca(e,...t)}function et(s){const e="INTERNAL ASSERTION FAILED: "+s;throw hr(e),new Error(e)}function at(s,e){s||et(e)}/**
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
 */function Eo(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function fv(){return kc()==="http:"||kc()==="https:"}function kc(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function mv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fv()||xf()||"connection"in navigator)?navigator.onLine:!0}function gv(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=Cf()||kf()}get(){return mv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function da(s,e){at(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vv=new Rs(3e4,6e4);function ct(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Ze(s,e,t,n,r={}){return Ju(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=ws({key:s.config.apiKey,...o}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:c,...i};return Rf()||(u.referrerPolicy="no-referrer"),s.emulatorConfig&&xn(s.emulatorConfig.host)&&(u.credentials="include"),Qu.fetch()(await Yu(s,s.config.apiHost,t,l),u)})}async function Ju(s,e,t){s._canInitEmulator=!1;const n={...yv,...e};try{const r=new wv(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw er(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw er(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw er(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw er(s,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ku(s,h,u);je(s,h)}}catch(r){if(r instanceof lt)throw r;je(s,"network-request-failed",{message:String(r)})}}async function xs(s,e,t,n,r={}){const i=await Ze(s,e,t,n,r);return"mfaPendingCredential"in i&&je(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yu(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?da(s.config,r):`${s.config.apiScheme}://${r}`;return bv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function _v(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Je(this.auth,"network-request-failed")),vv.get())})}}function er(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Je(s,e,n);return r.customData._tokenResponse=t,r}function Lc(s){return s!==void 0&&s.enterprise!==void 0}class Ev{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _v(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Iv(s,e){return Ze(s,"GET","/v2/recaptchaConfig",ct(s,e))}/**
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
 */async function Tv(s,e){return Ze(s,"POST","/v1/accounts:delete",e)}async function Dr(s,e){return Ze(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function us(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Av(s,e=!1){const t=le(s),n=await t.getIdToken(e),r=ua(n);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:us(Gi(r.auth_time)),issuedAtTime:us(Gi(r.iat)),expirationTime:us(Gi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gi(s){return Number(s)*1e3}function ua(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const r=td(t);return r?JSON.parse(r):(hr("Failed to decode base64 JWT payload"),null)}catch(r){return hr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Vc(s){const e=ua(s);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof lt&&Sv(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Sv({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(s){var f;const e=s.auth,t=await s.getIdToken(),n=await Rn(s,Dr(e,{idToken:t}));$(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?Xu(r.providerUserInfo):[],o=Rv(s.providerData,i),l=s.isAnonymous,c=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Io(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(s,h)}async function Pv(s){const e=le(s);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rv(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Xu(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function xv(s,e){const t=await Ju(s,{},async()=>{const n=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await Yu(s,r,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:n};return s.emulatorConfig&&xn(s.emulatorConfig.host)&&(c.credentials="include"),Qu.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kv(s,e){return Ze(s,"POST","/v2/accounts:revokeToken",ct(s,e))}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=Vc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await xv(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new gn;return n&&($(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function gt(s,e){$(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Io(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Av(this,e)}reload(){return Pv(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Or(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Rn(this,Tv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:E,providerData:C,stsTokenManager:k}=t;$(f&&k,e,"internal-error");const x=gn.fromJSON(this.name,k);$(typeof f=="string",e,"internal-error"),gt(n,e.name),gt(r,e.name),$(typeof g=="boolean",e,"internal-error"),$(typeof E=="boolean",e,"internal-error"),gt(i,e.name),gt(o,e.name),gt(l,e.name),gt(c,e.name),gt(u,e.name),gt(h,e.name);const B=new Ue({uid:f,auth:e,email:r,emailVerified:g,displayName:n,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:u,lastLoginAt:h});return C&&Array.isArray(C)&&(B.providerData=C.map(z=>({...z}))),c&&(B._redirectEventId=c),B}static async _fromIdTokenResponse(e,t,n=!1){const r=new gn;r.updateFromServerResponse(t);const i=new Ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Or(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Xu(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new gn;l.updateFromIdToken(n);const c=new Ue({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Io(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Dc=new Map;function tt(s){at(s instanceof Function,"Expected a class definition");let e=Dc.get(s);return e?(at(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Dc.set(s,e),e)}/**
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
 */class Zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zu.type="NONE";const Oc=Zu;/**
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
 */function pr(s,e,t){return`firebase:${s}:${e}:${t}`}class yn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pr(this.userKey,r.apiKey,i),this.fullPersistenceKey=pr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Dr(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yn(tt(Oc),e,n);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||tt(Oc);const o=pr(n,e.config.apiKey,e.name);let l=null;for(const u of t)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const g=await Dr(e,{idToken:h}).catch(()=>{});if(!g)break;f=await Ue._fromGetAccountInfoResponse(e,g,h)}else f=Ue._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yn(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new yn(i,e,n))}}/**
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
 */function Mc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ih(e))return"Blackberry";if(oh(e))return"Webos";if(th(e))return"Safari";if((e.includes("chrome/")||nh(e))&&!e.includes("edge/"))return"Chrome";if(rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function eh(s=Ae()){return/firefox\//i.test(s)}function th(s=Ae()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nh(s=Ae()){return/crios\//i.test(s)}function sh(s=Ae()){return/iemobile/i.test(s)}function rh(s=Ae()){return/android/i.test(s)}function ih(s=Ae()){return/blackberry/i.test(s)}function oh(s=Ae()){return/webos/i.test(s)}function ha(s=Ae()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Lv(s=Ae()){var e;return ha(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Vv(){return Lf()&&document.documentMode===10}function ah(s=Ae()){return ha(s)||rh(s)||oh(s)||ih(s)||/windows phone/i.test(s)||sh(s)}/**
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
 */function lh(s,e=[]){let t;switch(s){case"Browser":t=Mc(Ae());break;case"Worker":t=`${Mc(Ae())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${n}`}/**
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
 */class Dv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Ov(s,e={}){return Ze(s,"GET","/v2/passwordPolicy",ct(s,e))}/**
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
 */const Mv=6;class Nv{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Mv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class $v{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new Dv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dr(this,{idToken:e}),n=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(n=c.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(st(this));const t=e?le(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ov(this),t=new Nv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await kv(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nt(s){return le(s)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ff(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uv(s){li=s}function ch(s){return li.loadJS(s)}function Fv(){return li.recaptchaEnterpriseScript}function Bv(){return li.gapiScript}function jv(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class qv{constructor(){this.enterprise=new Hv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Hv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zv="recaptcha-enterprise",dh="NO_RECAPTCHA";class Gv{constructor(e){this.type=zv,this.auth=Nt(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Iv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ev(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Lc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(dh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qv().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(l=>{if(!t&&Lc(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fv();c.length!==0&&(c+=l),ch(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function $c(s,e,t,n=!1,r=!1){const i=new Gv(s);let o;if(r)o=dh;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mr(s,e,t,n,r){var i;if((i=s._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await $c(s,e,t,t==="getOobCode");return n(s,o)}else return n(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){`${t}`;const l=await $c(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(o)})}/**
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
 */function Wv(s,e){const t=Po(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Kt(i,e??{}))return r;je(r,"already-initialized")}return t.initialize({options:e})}function Kv(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Qv(s,e,t){const n=Nt(s);$(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=uh(e),{host:o,port:l}=Jv(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){$(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),$(Kt(u,n.config.emulator)&&Kt(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,xn(o)?(id(`${i}//${o}${c}`),od("Auth",!0)):Yv()}function uh(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Jv(s){const e=uh(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:Uc(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Uc(o)}}}function Uc(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Yv(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Xv(s,e){return Ze(s,"POST","/v1/accounts:update",e)}async function Zv(s,e){return Ze(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function e_(s,e){return xs(s,"POST","/v1/accounts:signInWithPassword",ct(s,e))}async function hh(s,e){return Ze(s,"POST","/v1/accounts:sendOobCode",ct(s,e))}async function t_(s,e){return hh(s,e)}async function n_(s,e){return hh(s,e)}/**
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
 */async function s_(s,e){return xs(s,"POST","/v1/accounts:signInWithEmailLink",ct(s,e))}async function r_(s,e){return xs(s,"POST","/v1/accounts:signInWithEmailLink",ct(s,e))}/**
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
 */class vs extends pa{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new vs(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new vs(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,t,"signInWithPassword",e_);case"emailLink":return s_(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,n,"signUpPassword",Zv);case"emailLink":return r_(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const i_="http://localhost";class Xt extends pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Xt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,bn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:i_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ws(t)}return e}}/**
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
 */function o_(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a_(s){const e=es(ts(s)).link,t=e?es(ts(e)).deep_link_id:null,n=es(ts(s)).deep_link_id;return(n?es(ts(n)).link:null)||n||t||e||s}class fa{constructor(e){const t=es(ts(e)),n=t.apiKey??null,r=t.oobCode??null,i=o_(t.mode??null);$(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=a_(e);try{return new fa(t)}catch{return null}}}/**
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
 */class sn{constructor(){this.providerId=sn.PROVIDER_ID}static credential(e,t){return vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=fa.parseLink(t);return $(n,"argument-error"),vs._fromEmailAndCode(e,n.code,n.tenantId)}}sn.PROVIDER_ID="password";sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vt.credential(t,n)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class _t extends ks{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class wt extends ks{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */async function l_(s,e){return xs(s,"POST","/v1/accounts:signUp",ct(s,e))}/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ue._fromIdTokenResponse(e,n,r),o=Fc(n);return new Zt({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Fc(n);return new Zt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Fc(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Nr extends lt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Nr(e,t,n,r)}}function fh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(s,i,e,n):i})}async function c_(s,e,t=!1){const n=await Rn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Zt._forOperation(s,"link",n)}/**
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
 */async function mh(s,e,t=!1){const{auth:n}=s;if(Me(n.app))return Promise.reject(st(n));const r="reauthenticate";try{const i=await Rn(s,fh(n,r,e,s),t);$(i.idToken,n,"internal-error");const o=ua(i.idToken);$(o,n,"internal-error");const{sub:l}=o;return $(s.uid===l,n,"user-mismatch"),Zt._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(n,"user-mismatch"),i}}/**
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
 */async function gh(s,e,t=!1){if(Me(s.app))return Promise.reject(st(s));const n="signIn",r=await fh(s,n,e),i=await Zt._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function d_(s,e){return gh(Nt(s),e)}async function u_(s,e){return mh(le(s),e)}/**
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
 */async function yh(s){const e=Nt(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h_(s,e,t){const n=Nt(s);await Mr(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n_)}async function p_(s,e,t){if(Me(s.app))return Promise.reject(st(s));const n=Nt(s),o=await Mr(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&yh(s),c}),l=await Zt._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(l.user),l}function f_(s,e,t){return Me(s.app)?Promise.reject(st(s)):d_(le(s),sn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&yh(s),n})}async function m_(s,e){const t=le(s),r={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()},{email:i}=await t_(t.auth,r);i!==s.email&&await s.reload()}function g_(s,e){return y_(le(s),null,e)}async function y_(s,e,t){const{auth:n}=s,i={idToken:await s.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const o=await Rn(s,Xv(n,i));await s._updateTokensIfNecessary(o,!0)}function b_(s,e,t,n){return le(s).onIdTokenChanged(e,t,n)}function v_(s,e,t){return le(s).beforeAuthStateChanged(e,t)}function __(s,e,t,n){return le(s).onAuthStateChanged(e,t,n)}function Bc(s){return le(s).signOut()}const $r="__sak";/**
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
 */class bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const w_=1e3,E_=10;class vh extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ah(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Vv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,E_):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vh.type="LOCAL";const I_=vh;/**
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
 */class _h extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_h.type="SESSION";const wh=_h;/**
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
 */function T_(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ci{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new ci(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await T_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ci.receivers=[];/**
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
 */function ma(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class A_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=ma("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function S_(s){Ye().location.href=s}/**
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
 */function Eh(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function C_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P_(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function R_(){return Eh()?self:null}/**
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
 */const Ih="firebaseLocalStorageDb",x_=1,Ur="firebaseLocalStorage",Th="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function di(s,e){return s.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function k_(){const s=indexedDB.deleteDatabase(Ih);return new Ls(s).toPromise()}function To(){const s=indexedDB.open(Ih,x_);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Ur,{keyPath:Th})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Ur)?e(n):(n.close(),await k_(),e(await To()))})})}async function jc(s,e,t){const n=di(s,!0).put({[Th]:e,value:t});return new Ls(n).toPromise()}async function L_(s,e){const t=di(s,!1).get(e),n=await new Ls(t).toPromise();return n===void 0?null:n.value}function qc(s,e){const t=di(s,!0).delete(e);return new Ls(t).toPromise()}const V_=800,D_=3;class Ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await To(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>D_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ci._getInstance(R_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await C_(),!this.activeServiceWorker)return;this.sender=new A_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await To();return await jc(e,$r,"1"),await qc(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>L_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=di(r,!1).getAll();return new Ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ah.type="LOCAL";const O_=Ah;new Rs(3e4,6e4);/**
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
 */function M_(s,e){return e?tt(e):($(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class ga extends pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function N_(s){return gh(s.auth,new ga(s),s.bypassAuthState)}function $_(s){const{auth:e,user:t}=s;return $(t,e,"internal-error"),mh(t,new ga(s),s.bypassAuthState)}async function U_(s){const{auth:e,user:t}=s;return $(t,e,"internal-error"),c_(t,new ga(s),s.bypassAuthState)}/**
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
 */class Sh{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N_;case"linkViaPopup":case"linkViaRedirect":return U_;case"reauthViaPopup":case"reauthViaRedirect":return $_;default:je(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const F_=new Rs(2e3,1e4);class pn extends Sh{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F_.get())};e()}}pn.currentPopupAction=null;/**
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
 */const B_="pendingRedirect",fr=new Map;class j_ extends Sh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fr.get(this.auth._key());if(!e){try{const n=await q_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}fr.set(this.auth._key(),e)}return this.bypassAuthState||fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q_(s,e){const t=G_(e),n=z_(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function H_(s,e){fr.set(s._key(),e)}function z_(s){return tt(s._redirectPersistence)}function G_(s){return pr(B_,s.config.apiKey,s.name)}async function W_(s,e,t=!1){if(Me(s.app))return Promise.reject(st(s));const n=Nt(s),r=M_(n,e),o=await new j_(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const K_=600*1e3;class Q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ch(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(e))}saveEventToCache(e){this.cachedEventUids.add(Hc(e)),this.lastProcessedEventTime=Date.now()}}function Hc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Ch({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J_(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ch(s);default:return!1}}/**
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
 */async function Y_(s,e={}){return Ze(s,"GET","/v1/projects",e)}/**
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
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function ew(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Y_(s);for(const t of e)try{if(tw(t))return}catch{}je(s,"unauthorized-domain")}function tw(s){const e=Eo(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Z_.test(t))return!1;if(X_.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const nw=new Rs(3e4,6e4);function zc(){const s=Ye().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function sw(s){return new Promise((e,t)=>{var r,i,o;function n(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),t(Je(s,"network-request-failed"))},timeout:nw.get()})}if((i=(r=Ye().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ye().gapi)!=null&&o.load)n();else{const l=jv("iframefcb");return Ye()[l]=()=>{gapi.load?n():t(Je(s,"network-request-failed"))},ch(`${Bv()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw mr=null,e})}let mr=null;function rw(s){return mr=mr||sw(s),mr}/**
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
 */const iw=new Rs(5e3,15e3),ow="__/auth/iframe",aw="emulator/auth/iframe",lw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(s){const e=s.config;$(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?da(e,aw):`https://${s.config.authDomain}/${ow}`,n={apiKey:e.apiKey,appName:s.name,v:kn},r=cw.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ws(n).slice(1)}`}async function uw(s){const e=await rw(s),t=Ye().gapi;return $(t,s,"internal-error"),e.open({where:document.body,url:dw(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lw,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=Je(s,"network-request-failed"),l=Ye().setTimeout(()=>{i(o)},iw.get());function c(){Ye().clearTimeout(l),r(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pw=500,fw=600,mw="_blank",gw="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(s,e,t,n=pw,r=fw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c={...hw,width:n.toString(),height:r.toString(),top:i,left:o},u=Ae().toLowerCase();t&&(l=nh(u)?mw:t),eh(u)&&(e=e||gw,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(Lv(u)&&l!=="_self")return bw(e||"",l),new Gc(null);const f=window.open(e||"",l,h);$(f,s,"popup-blocked");try{f.focus()}catch{}return new Gc(f)}function bw(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const vw="__/auth/handler",_w="emulator/auth/handler",ww=encodeURIComponent("fac");async function Wc(s,e,t,n,r,i){$(s.config.authDomain,s,"auth-domain-config-required"),$(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:kn,eventId:r};if(e instanceof ph){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Uf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ks){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await s._getAppCheckToken(),u=c?`#${ww}=${encodeURIComponent(c)}`:"";return`${Ew(s)}?${ws(l).slice(1)}${u}`}function Ew({config:s}){return s.emulator?da(s,_w):`https://${s.authDomain}/${vw}`}/**
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
 */const Wi="webStorageSupport";class Iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wh,this._completeRedirectFn=W_,this._overrideRedirectResult=H_}async _openPopup(e,t,n,r){var o;at((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wc(e,t,n,Eo(),r);return yw(e,i,ma())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Wc(e,t,n,Eo(),r);return S_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await uw(e),n=new Q_(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wi,{type:Wi},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Wi];i!==void 0&&t(!!i),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ah()||th()||ha()}}const Tw=Iw;var Kc="@firebase/auth",Qc="1.12.0";/**
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
 */class Aw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cw(s){En(new Qt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lh(s)},u=new $v(n,r,i,c);return Kv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),En(new Qt("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(n=>new Aw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Kc,Qc,Sw(s)),St(Kc,Qc,"esm2020")}/**
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
 */const Pw=300,Rw=rd("authIdTokenMaxAge")||Pw;let Jc=null;const xw=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Rw)return;const r=t==null?void 0:t.token;Jc!==r&&(Jc=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kw(s=dd()){const e=Po(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Wv(s,{popupRedirectResolver:Tw,persistence:[O_,I_,wh]}),n=rd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=xw(i.toString());v_(t,o,()=>o(t.currentUser)),b_(t,l=>o(l))}}const r=nd("auth");return r&&Qv(t,`http://${r}`),t}function Lw(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Uv({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Je("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Lw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cw("Browser");const Vw={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},Ph=cd(Vw),Pe=Wb(Ph),yt=kw(Ph),ge={masterKey:null,async generateKey(s){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(s),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async setMasterKey(s){this.masterKey=await this.generateKey(s)},async encryptData(s,e=null){const t=e||this.masterKey;if(!t)throw new Error("Frase maestra no inicializada.");const n=new TextEncoder,r=crypto.getRandomValues(new Uint8Array(12)),i=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},t,n.encode(JSON.stringify(s)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(i))),iv:btoa(String.fromCharCode(...r))}},async decryptData(s){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");try{if(!s||!s.iv||!s.ciphertext)throw new Error("El objeto cifrado está incompleto o corrupto.");const e=l=>{if(typeof l!="string")return"";let c=l.replace(/[\s\n\r]/g,"");for(c=c.replace(/-/g,"+").replace(/_/g,"/");c.length%4;)c+="=";return c},t=e(s.iv),n=e(s.ciphertext),r=new Uint8Array(atob(t).split("").map(l=>l.charCodeAt(0))),i=new Uint8Array(atob(n).split("").map(l=>l.charCodeAt(0))),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},this.masterKey,i);return JSON.parse(new TextDecoder().decode(o))}catch(e){if(e.name==="InvalidCharacterError")console.error("[CRYPTO] Error de formato Base64. IV Recibido:",s.iv);else if(e.name==="OperationError")throw e;throw console.error("[CRYPTO] Fallo técnico al decodificar:",e),e}}},zt={getCurrentUser(){return yt.currentUser},onAuthStateChanged(s){return __(yt,s)},async login(s,e){try{const n=(await f_(yt,s,e)).user;if(!n.emailVerified)throw await Bc(yt),new Error("Debes verificar tu correo electrónico antes de entrar.");return n}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(s,e){try{const n=(await p_(yt,s,e)).user;return await m_(n),await wo(Oe(Pe,"users",n.uid),{email:s,createdAt:new Date().toISOString(),emailVerified:!1}),n}catch(t){throw new Error("Error en registro: "+t.message)}},async logout(){return Bc(yt)}},F={get _masterKey(){return ge.masterKey},async initDB(){return!0},authenticate(s,e){return zt.login(s,e)},signup(s,e){return zt.signup(s,e)},logout(){return ge.masterKey=null,zt.logout()},getCurrentUser(){return zt.getCurrentUser()},onAuthStateChanged(s){return zt.onAuthStateChanged(s)},async setMasterKey(s){return ge.setMasterKey(s)},async encryptData(s){return ge.encryptData(s)},async decryptData(s){return ge.decryptData(s)},async save(s,e){const t=this.getCurrentUser();if(!t&&s!=="users")throw new Error("Usuario no autenticado.");const n=JSON.parse(JSON.stringify(e));if(n.userId=t?t.uid:s==="users"?n.id:null,n.isEncrypted&&n.content){if(!ge.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");n.content=await ge.encryptData(n.content)}!n.isEncrypted&&n.content&&Array.isArray(n.content)&&n.content.forEach(r=>{if(Array.isArray(r.value)&&r.value.length>0&&Array.isArray(r.value[0])){const i={};r.value.forEach((o,l)=>{i[l]=o}),r.value=i,r.storageMode="nested_map"}});try{return await wo(Oe(Pe,s,n.id),n),!0}catch(r){throw console.error("Error Firestore:",r),new Error("Error al guardar en la nube: "+r.message)}},async getOne(s,e){if(!e)return null;const t=s==="doc";t&&`${s}${e}`;try{const n=Oe(Pe,s,e),r=await dr(n);if(!r.exists())return t&&console.warn("[STORAGE-DEBUG] Documento no existe en Firebase."),null;let i={id:r.id,...r.data()};if(i.isEncrypted&&i.content){if(!ge.masterKey)return t&&console.warn("[STORAGE-DEBUG] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...i,content:null,decryptionError:!0};try{const o=await ge.decryptData(i.content);let l={...i,content:o,decryptionError:!1};return this._hydrateDocument(l)}catch(o){return t&&console.error("[STORAGE-DEBUG] ⛔ Error al descifrar (Llave incorrecta o datos corruptos):",o),{...i,content:null,decryptionError:!0}}}return this._hydrateDocument(i)}catch(n){throw console.error(`[STORAGE-DEBUG] Error obteniendo ${s}/${e}:`,n),n}},async getAll(s){const e=this.getCurrentUser();if(!e)return[];try{const t=vo(kr(Pe,s),lr("userId","==",e.uid)),n=await _o(t),r=[];for(const i of n.docs){let o=i.data();if(o.isEncrypted&&ge.masterKey)try{o.content=await ge.decryptData(o.content)}catch{o.decryptionError=!0}o=this._hydrateDocument(o),r.push(o)}return r.sort((i,o)=>o.id.localeCompare(i.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(s,e){try{await ur(Oe(Pe,s,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(s){return s&&Array.isArray(s.content)&&s.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,n)=>Number(t)-Number(n)).map(t=>e.value[t]),delete e.storageMode)}),s},async hasSecurityConfigured(){const s=this.getCurrentUser();return s?(await dr(Oe(Pe,"security",s.uid))).exists():!1},async saveSecurityVerifier(s){const e=this.getCurrentUser();if(!e)throw console.error("[STORAGE] Error: Intento de guardar verificado sin sesión activa."),new Error("No hay una sesión de usuario activa.");try{return await wo(Oe(Pe,"security",e.uid),{userId:e.uid,verifier:s,updatedAt:new Date().toISOString()}),!0}catch(t){throw console.error("[STORAGE] Error guardando verificado:",t),t}},async changeMasterPhrase(s,e){s&&s.length;try{const t=await this.verifyMasterPhrase(s);if(!t)throw console.error("[STORAGE-DEBUG] ⛔ La verificación retornó FALSE. Lanzando error..."),new Error("La frase maestra anterior es incorrecta.");const n=this.getCurrentUser();await ge.setMasterKey(e);const r=await ge.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(r),!0}catch(t){throw console.error("[STORAGE-DEBUG] ❌ Error en changeMasterPhrase:",t),t}},async hardResetSecurity(){const s=this.getCurrentUser();if(!s)throw new Error("No hay sesión activa.");try{const e=vo(kr(Pe,"doc"),lr("userId","==",s.uid),lr("isEncrypted","==",!0)),t=await _o(e),n=[];`${t.size}`,t.forEach(i=>{n.push(ur(i.ref))}),await Promise.all(n);const r=Oe(Pe,"security",s.uid);return await ur(r),ge.masterKey=null,!0}catch(e){throw console.error("[STORAGE] Error en Hard Reset:",e),new Error("No se pudo completar el borrado masivo: "+e.message)}},async verifyMasterPhrase(s){const e=this.getCurrentUser();if(!e)return console.error("[VERIFY] Error: No hay sesión de usuario activa."),!1;try{e.uid;const t=Oe(Pe,"security",e.uid),n=await dr(t);if(!n.exists())return console.error("[VERIFY] Fallo: No existe configuración de seguridad en la base de datos."),console.warn("Posible causa: Es un entorno nuevo y no se ha ejecutado el 'Setup' inicial."),!1;const r=n.data();if(!r||!r.verifier)return console.error("[VERIFY] Fallo: El documento existe pero no tiene el campo 'verifier'."),!1;const{verifier:i}=r,o=ge.masterKey;try{await ge.setMasterKey(s);const l=await ge.decryptData(i);return l&&l.check==="VERIFIED"?!0:(console.warn("[VERIFY] Descifrado exitoso pero el contenido no coincide."),!1)}catch{return console.warn("[VERIFY] La frase es incorrecta (Error de descifrado)."),ge.masterKey=o,!1}}catch(t){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRÍTICO:",t),alert("Error de conexión o sistema: "+t.message),!1}}},gr={validatePassword(s){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(s)},async signup(s,e){if(!this.validatePassword(e))throw new Error("La contraseña no cumple los requisitos.");try{return await F.signup(s,e),{requiresVerification:!0}}catch(t){throw console.error("Error en Auth.signup:",t),t.message.includes("email-already-in-use")?new Error("Este correo ya está registrado."):t}},async login(s,e){return await F.authenticate(s,e)},async recoverPassword(s){if(!s)throw new Error("Por favor ingresa tu correo electrónico.");try{return await h_(yt,s),!0}catch(e){let t="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(t="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(t="El correo no es válido."),new Error(t)}}},Rh={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const s=document.getElementById("user-none"),e=document.getElementById("pass-none");s&&(s.style.display="none"),e&&(e.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const t=document.getElementById("theme-link").getAttribute("href"),n=`./src/views/manual.html?theme=${encodeURIComponent(t)}`;this.container.innerHTML=`
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
                          <i class="fa-solid fa-circle-info me-1"></i>Requisito: 8+ car., 1 Mayúscula, 1 Número y 1 Símbolo (@, #, $, %, &).
                        </small>
                        <button id="btn-signup" class="btn btn-success w-100 fw-bold">Crear Cuenta</button>
                    </div>
                </div>

                <div id="auth-err" class="alert alert-danger mt-3 small shadow-sm border-0" style="display:none;"></div>
                <div id="auth-success" class="alert alert-success mt-3 small shadow-sm border-0" style="display:none;"></div>

                <div class="text-center mt-4 pt-3 border-top">
                    <a href="#" class="text-decoration-none text-body small" data-bs-toggle="modal" data-bs-target="#modal-app-info">
                        <i class="fa-solid fa-circle-question me-1"></i>¿Qué es DocEngine?
                    </a>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modal-app-info" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title"><i class="fa-solid fa-sitemap me-2"></i>¿Cómo funciona mis datos?</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body bg-light">
                    <div class="container-fluid p-0">
                        
                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-primary fw-bold mb-0">1. Tus Documentos y Formularios</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Imagina que DocEngine es tu oficina digital. Aquí es donde creas las facturas, reportes y llenas formularios.
                                </p>
                                
                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3 rounded border text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-primary mb-2"><i class="fa-solid fa-pen-ruler"></i></div>
                                        <div class="fw-bold">Tú Diseñas</div>
                                        <div class="small text-muted">Creas la plantilla</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-success mb-2"><i class="fa-solid fa-keyboard"></i></div>
                                        <div class="fw-bold">Tú Escribes</div>
                                        <div class="small text-muted">Llenas los datos</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-warning bg-opacity-10 border-warning" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-warning mb-2"><i class="fa-solid fa-cloud"></i></div>
                                            <div class="fw-bold">La Nube de Datos</div>
                                            <div class="small text-muted">Tu archivador digital</div>
                                            <div class="badge bg-warning text-dark mt-1"><i class="fa-solid fa-lock me-1"></i>Puede ir Cifrado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-dark fw-bold mb-0">2. Tus Fotos y Archivos Pesados</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Para que la aplicación sea rápida, no guardamos las fotos pesadas junto con los papeles. Las guardamos en una "Bóveda Blindada" separada (usamos tecnología GitHub segura).
                                </p>

                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-dark text-white p-3 rounded text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-info mb-2"><i class="fa-solid fa-images"></i></div>
                                        <div class="fw-bold">Tus Archivos</div>
                                        <div class="small text-white-50">Fotos, Audios, PDFs</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-white mb-2"><i class="fa-solid fa-user-shield"></i></div>
                                        <div class="fw-bold">Verificación</div>
                                        <div class="small text-white-50">¿Eres realmente tú?</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-secondary border-light" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-white mb-2"><i class="fa-solid fa-box-archive"></i></div>
                                            <div class="fw-bold">Bóveda Privada</div>
                                            <div class="badge bg-light text-dark mt-1">Acceso Restringido</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 border-start border-5 border-success">
                            <div class="card-body">
                                <h5 class="card-title text-success fw-bold mb-3"><i class="fa-solid fa-shield-halved me-2"></i>Tu Llave Maestra: Lo más importante</h5>
                                
                                <p class="text-secondary small mb-3">
                                    Nosotros guardamos tus cajas fuertes, <strong>pero solo tú tienes la llave para abrirlas</strong>. 
                                </p>

                                <div class="d-flex align-items-center justify-content-center bg-white border p-3 rounded">
                                    <div class="text-center me-3">
                                        <i class="fa-solid fa-user-lock fs-1 text-secondary"></i>
                                        <div class="small fw-bold mt-1">TÚ</div>
                                    </div>
                                    
                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>

                                    <div class="text-center p-2 bg-warning bg-opacity-10 border border-warning rounded mx-2">
                                        <i class="fa-solid fa-key text-warning fs-3"></i>
                                        <div class="x-small fw-bold text-dark mt-1">Tu Llave Real</div>
                                        <div class="x-small text-danger fw-bold">(Nunca sale de tu PC)</div>
                                    </div>

                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-not-equal"></i>
                                    </div>

                                    <div class="text-center p-2 bg-success bg-opacity-10 border border-success rounded mx-2">
                                        <i class="fa-solid fa-fingerprint text-success fs-3"></i>
                                        <div class="x-small fw-bold text-success">Copia de Seguridad</div>
                                        <div class="x-small text-muted">(Lo que tenemos nosotros)</div>
                                    </div>
                                </div>
                                
                                <div class="alert alert-warning d-flex align-items-center mt-3 mb-0 p-2 small" role="alert">
                                    <i class="fa-solid fa-triangle-exclamation fs-4 me-3"></i>
                                    <div>
                                        <strong>¡Ojo!</strong> Como nosotros solo tenemos la "huella digital" y no la llave real, <strong>si pierdes tu Frase Maestra, no podremos recuperar tus documentos cifrados.</strong> Anótala en un lugar seguro.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="modal-footer bg-light p-2 justify-content-between">
                  <a href="${n}" target="_blank" class="btn btn-outline-secondary btn-sm">
                    <i class="fa-solid fa-book me-2"></i>Ver Manual Completo
                  </a>
                  <button type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal">¡Entendido, todo claro!</button>
                </div>
            </div>
        </div>
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const s=document.getElementById("btn-login");s&&(s.onclick=async()=>{const n=document.getElementById("email-l").value.trim(),r=document.getElementById("pass-l").value;if(!n||!r)return this._showError("Ingrese correo y contraseña.");try{await F.authenticate(n,r),location.reload()}catch(i){this._showError(i.message)}});const e=document.getElementById("btn-signup");e&&(e.onclick=async()=>{const n=document.getElementById("email-s").value.trim(),r=document.getElementById("pass-s").value;if(!gr.validatePassword(r))return this._showError("La contraseña no cumple los requisitos.");const i=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',e.disabled=!0;try{await gr.signup(n,r),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${n}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
            `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(o){this._showError(o.message)}finally{e.innerHTML=i,e.disabled=!1}});const t=document.getElementById("btn-forgot");t&&(t.onclick=async n=>{n.preventDefault();const r=document.getElementById("email-l"),i=r.value.trim();if(!i)return r.classList.add("is-invalid"),r.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");r.classList.remove("is-invalid");const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',t.style.pointerEvents="none";try{await gr.recoverPassword(i),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${i} para restablecer la clave.`)}catch(l){this._showError(l.message)}finally{t.innerHTML=o,t.style.pointerEvents="auto"}})},initLogout(){const s=document.getElementById("btn-logout-link");s&&(s.onclick=async e=>{e.preventDefault();try{await F.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},_showError(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");e&&(e.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${s}`,e.style.display="block"),t&&(t.style.display="none")},_showSuccess(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");t&&(t.innerHTML=s,t.style.display="block"),e&&(e.style.display="none")}},Ao={async saveTemplate(s){if(!s.title.trim())throw new Error("Título obligatorio");if(s.elements.length===0)throw new Error("Diseño vacío");s.updatedAt=new Date().toISOString(),await F.save("tpl",s)},async deleteTemplate(s){await F.delete("tpl",s)},async loadTemplates(){return await F.getAll("tpl")}},Yc={handlers:{},currentSearch:"",itemsPerPage:5,currentPage:1,init(s){this.handlers=s,this.cacheDOM(),this.bindEvents(),this.injectImportButton(),window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.container.offsetParent!==null&&(this.calculateItemsPerPage(),this.render())},100)})},cacheDOM(){this.container=document.getElementById("designer-list-view"),this.tableBody=document.getElementById("tpl-table-body"),this.pagination=document.getElementById("tpl-pagination"),this.searchInput=document.getElementById("tpl-search"),this.btnCreate=document.getElementById("btn-go-create-tpl")},calculateItemsPerPage(){if(this.container.offsetParent===null)return;const s=window.innerHeight;let e=0;const t=this.tableBody.querySelector("tr");if(t)e=t.offsetHeight;else{const c=document.createElement("tr");c.className="align-middle",c.innerHTML='<td class="py-3"><h3>👤</h3></td><td>Badges</td><td>Title</td><td>Actions</td>',c.style.visibility="hidden",c.style.position="absolute",this.tableBody.appendChild(c),e=c.offsetHeight,c.remove()}e<50&&(e=80);const r=this.tableBody.getBoundingClientRect().top,o=s-r-90;let l=Math.floor(o/e);this.itemsPerPage=Math.max(l,4),`${s}${e}${this.itemsPerPage}`},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.searchInput.addEventListener("input",s=>{this.currentSearch=s.target.value.toLowerCase(),this.currentPage=1,this.render()})},async render(){this.calculateItemsPerPage();const s=await F.getAll("tpl");s.sort((i,o)=>{const l=new Date(i.updatedAt||0);return new Date(o.updatedAt||0)-l});const e=s.filter(i=>i.title.toLowerCase().includes(this.currentSearch)),t=Math.ceil(e.length/this.itemsPerPage);this.currentPage>t&&t>0&&(this.currentPage=t),this.currentPage<1&&(this.currentPage=1);const n=(this.currentPage-1)*this.itemsPerPage,r=e.slice(n,n+this.itemsPerPage);this.renderTable(r),this.renderPagination(t)},renderTable(s){this.tableBody.innerHTML=s.map(e=>{const t=e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"";return`
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
              ${t?`<span class="ms-1 fst-italic">(${t})</span>`:""}
            </div>
          </td>
          
          <td class="text-end pe-3">
            <div class="btn-group shadow-sm border rounded">
              <button class="btn btn-sm btn-light btn-create-doc" data-id="${e.id}" title="Crear Documento">
                 <i class="fa-solid fa-file-circle-plus text-success"></i>
              </button>
              <button class="btn btn-sm btn-light btn-edit" data-id="${e.id}" title="Editar Plantilla">
                  <i class="fa-solid fa-pen-to-square text-primary"></i>
              </button>
              <button class="btn btn-sm btn-light btn-export" data-id="${e.id}" title="Descargar JSON">
                  <i class="fa-solid fa-download text-secondary"></i>
              </button>
              <button class="btn btn-sm btn-light btn-del" data-id="${e.id}" title="Eliminar Plantilla">
                  <i class="fa-solid fa-trash-can text-danger"></i>
              </button>
            </div>
          </td>
      </tr>`}).join("")||'<tr><td colspan="4" class="text-center py-5 text-body-secondary">No se encontraron plantillas.</td></tr>',this._bindListActions(s)},renderPagination(s){let e="";if(s>1)for(let t=1;t<=s;t++)e+=`<li class="page-item ${t===this.currentPage?"active":""} mx-1">
            <button class="page-link rounded-circle border-0 shadow-sm px-3" data-page="${t}">${t}</button>
            </li>`;this.pagination.innerHTML=e,this.pagination.querySelectorAll("button").forEach(t=>{t.onclick=()=>{this.currentPage=parseInt(t.dataset.page),this.render()}})},_bindListActions(s){this.tableBody.querySelectorAll(".btn-create-doc").forEach(e=>{e.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:e.dataset.id}}))}}),this.tableBody.querySelectorAll(".btn-edit").forEach(e=>{e.onclick=()=>this.handlers.onEditTemplate(e.dataset.id)}),this.tableBody.querySelectorAll(".btn-del").forEach(e=>{e.onclick=async()=>{confirm("¿Eliminar plantilla? Se borrarán sus documentos.")&&(await Ao.deleteTemplate(e.dataset.id),this.render())}}),this.tableBody.querySelectorAll(".btn-export").forEach(e=>{e.onclick=()=>{const t=s.find(n=>n.id===e.dataset.id);t&&this._downloadJSON(t)}})},_downloadJSON(s){const e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t;const r=s.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`tpl_${r}_${s.id}.json`,n.click(),URL.revokeObjectURL(t)},injectImportButton(){if(this.btnCreate&&!document.getElementById("btn-import-tpl")){const s=document.createElement("div");s.className="d-flex gap-2";const e=document.createElement("input");e.type="file",e.id="input-import-tpl",e.accept=".json",e.style.display="none";const t=document.createElement("button");t.id="btn-import-tpl",t.className="btn btn-outline-dark shadow-sm",t.innerHTML='<i class="fa-solid fa-file-import"></i> Importar',this.btnCreate.parentNode.appendChild(s),s.appendChild(e),s.appendChild(t),s.appendChild(this.btnCreate),t.onclick=()=>e.click(),e.onchange=n=>this._handleImport(n)}},_handleImport(s){const e=s.target.files[0];if(!e)return;const t=new FileReader;t.onload=async n=>{try{const r=JSON.parse(n.target.result);if(!r.title||!Array.isArray(r.elements))throw new Error("Plantilla inválida");r.id=`tpl_${Date.now()}`,r.title=`${r.title} (Importada)`,await Ao.saveTemplate(r),alert("Plantilla importada correctamente."),this.render()}catch(r){alert("Error al importar: "+r.message)}s.target.value=""},t.readAsText(e)}},ya={dragSrcEl:null,init(s,e=null,t=null){s.setAttribute("draggable","false"),s.addEventListener("mousedown",n=>{if(e){const r=n.target.closest(e);s.setAttribute("draggable",r?"true":"false")}else s.setAttribute("draggable","true")}),s.addEventListener("mouseup",()=>{s.setAttribute("draggable","false")}),s.addEventListener("dragstart",n=>this._handleDragStart(n,s)),s.addEventListener("dragend",n=>this._handleDragEnd(n,s)),s.addEventListener("dragover",n=>this._handleDragOver(n,s)),s.addEventListener("dragenter",n=>this._handleDragEnter(n,s)),s.addEventListener("dragleave",n=>this._handleDragLeave(n,s)),s.addEventListener("drop",n=>this._handleDrop(n,s,t))},_handleDragStart(s,e){if(e.getAttribute("draggable")==="false"){s.preventDefault();return}this.dragSrcEl=e,s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(s,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(s,e){return s.preventDefault&&s.preventDefault(),s.dataTransfer.dropEffect="move",!1},_handleDragEnter(s,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(s,e){e.classList.remove("border-top-primary-3")},_handleDrop(s,e,t){if(s.stopPropagation&&s.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const n=e.parentNode,r=e.getBoundingClientRect(),i=s.clientY-r.top,o=e.clientHeight/2;i>o?n.insertBefore(this.dragSrcEl,e.nextSibling):n.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(s){s&&Array.from(s.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},tr={handlers:{},currentId:null,init(s){this.handlers=s,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.catInput&&(this.catInput.onchange=s=>{const e=s.target.options[s.target.selectedIndex].dataset.icon;this.iconInput.value=e})},renderSidebar(){const s=document.getElementById("tpl-elements");s.innerHTML=Object.entries(Ve).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-grow-1 py-2" id="add-${e}" style="min-width: 140px;">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
         </button>`).join(""),Object.keys(Ve).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._addToCanvas(t)}})},_addToCanvas(s){const e=document.createElement("div");e.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",e.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="comp-content"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(s),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),ya.init(e,".drag-handle"),this.canvas.appendChild(e)},async load(s){const e=await F.getOne("tpl",s);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.relatedDocsInput.value=e.relatedDocIds||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,this.canvas.innerHTML="",e.elements.forEach(t=>{const n=document.createElement(t.tag);n.setData&&n.setData(t),this._addToCanvas(n)}))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.encInput.checked=!1},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(n=>{const r=n.querySelector("#comp-content");return r?r.firstElementChild:null}).filter(n=>n&&typeof n.getData=="function"),t={id:this.currentId||`tpl_${Date.now()}`,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(n=>n.getData())};try{await Ao.saveTemplate(t),alert("Plantilla guardada correctamente"),this.handlers.onSaveSuccess()}catch(n){alert("Error al guardar: "+n.message)}},getAvailableVariables(s,e=null){const t=[];if(this.canvas.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(r=>{if(!r.closest("setting-table")&&typeof r.getData=="function"){const i=r.getData();t.push({id:i.id,title:i.title||"(Sin Título)",type:"general"})}}),s==="table"&&e){const r=document.getElementById(e);if(r&&typeof r.getData=="function"){const i=r.getData();i.columns&&i.columns.forEach(o=>{["setting-number","setting-currency","setting-percentage"].includes(o.tag)&&t.push({id:o.id,title:`[Col] ${o.title}`,type:"column"})})}}return s==="general"&&this.canvas.querySelectorAll("setting-table").forEach(i=>{const o=i.getData();o.columns&&o.columns.forEach(l=>{l.total&&t.push({id:`TOTAL_${i.id}_${l.id}`,title:`SUM: ${o.title} > ${l.title}`,type:"total"})})}),t}},Fr={init(){Yc.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:s=>{this.showEditor(),tr.load(s)}}),tr.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){Yc.render()},showEditor(){document.getElementById("designer-list-view").style.display="none",document.getElementById("designer-editor-view").style.display="block",tr.reset()},showList(){document.getElementById("designer-list-view").style.display="block",document.getElementById("designer-editor-view").style.display="none"},getAvailableVariables(s,e){return tr.getAvailableVariables(s,e)}},Zn={itemsPerPage:5,currentPage:1,currentSearch:"",handlers:{},container:null,tableBody:null,pagination:null,searchInput:null,_resizeTimer:null,init(s){this.handlers=s,this.cacheDOM(),this.bindEvents(),window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.container&&this.container.offsetParent!==null&&(this.calculateItemsPerPage(),this.render())},100)})},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.pagination=document.getElementById("doc-pagination"),this.searchInput=document.getElementById("doc-search"),this.tableBody||console.error("❌ [DocumentList] Error crítico: No se encontró #doc-table-body en el DOM.")},calculateItemsPerPage(){if(!this.container||this.container.offsetParent===null)return;const s=window.innerHeight;let e=60;if(this.tableBody){const l=this.tableBody.querySelector("tr");l&&(e=l.offsetHeight)}e<40&&(e=60);const n=(this.tableBody?this.tableBody.getBoundingClientRect():{top:200}).top,i=s-n-90;let o=Math.floor(i/e);this.itemsPerPage=Math.max(o,5)},bindEvents(){const s=document.getElementById("btn-go-create-doc");s&&(s.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput&&this.searchInput.addEventListener("input",e=>{this.currentSearch=e.target.value.toLowerCase(),this.currentPage=1,this.render()})},async render(){if(this.tableBody||this.cacheDOM(),!this.tableBody)return;this.calculateItemsPerPage();const s=await F.getAll("doc")||[];s.sort((o,l)=>{const c=new Date(o.updatedAt||o.date||0);return new Date(l.updatedAt||l.date||0)-c});const e=this.currentSearch.split(" ").filter(o=>o),t=s.filter(o=>{const l=`${o.title} ${o.templateTitle||""}`.toLowerCase();return e.every(c=>l.includes(c))}),n=Math.ceil(t.length/this.itemsPerPage);this.currentPage>n&&n>0&&(this.currentPage=n),this.currentPage<1&&(this.currentPage=1);const r=(this.currentPage-1)*this.itemsPerPage,i=t.slice(r,r+this.itemsPerPage);this.renderTable(i),this.renderPagination(n)},renderTable(s){this.tableBody&&(this.tableBody.innerHTML=s.map(e=>{let t="";return e.isEncrypted&&(t=F._masterKey&&!e.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i></span>'),`
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
                <button class="btn btn-sm btn-body border-0 border-start btn-copy-id px-3" data-id="${e.id}" title="Copiar ID">
                  <i class="fa-regular fa-copy text-secondary"></i>
                </button>
                <button class="btn btn-sm btn-body border-0 border-start btn-del-doc px-3" data-id="${e.id}" title="Eliminar">
                  <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
              </div>
            </td>
        </tr>`}).join("")||'<tr><td colspan="4" class="text-center py-5 text-muted">No hay documentos registrados.</td></tr>',this.tableBody.querySelectorAll(".btn-view-doc").forEach(e=>e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)),this.tableBody.querySelectorAll(".btn-del-doc").forEach(e=>e.onclick=async()=>{confirm("¿Eliminar documento definitivamente?")&&(await F.delete("doc",e.dataset.id),this.render())}),this.tableBody.querySelectorAll(".btn-copy-id").forEach(e=>{e.onclick=async t=>{t.stopPropagation();const n=e.dataset.id,r=e.querySelector("i");try{await navigator.clipboard.writeText(n);const i=r.className;r.className="fa-solid fa-check text-success",setTimeout(()=>{r.className=i},1500)}catch(i){console.error("Error al copiar ID:",i),alert("No se pudo copiar el ID al portapapeles.")}}}))},renderPagination(s){if(!this.pagination)return;let e="";if(s>1)for(let t=1;t<=s;t++)e+=`<li class="page-item ${t===this.currentPage?"active":""} mx-1">
            <button class="page-link rounded-circle border-0 shadow-sm px-3" data-page="${t}">${t}</button>
            </li>`;this.pagination.innerHTML=e,this.pagination.querySelectorAll("button").forEach(t=>{t.onclick=()=>{this.currentPage=parseInt(t.dataset.page),this.render()}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},nr={async print(s,e){let t=await F.getOne("doc",s);if(!t)return alert("Documento no encontrado.");if(t.isEncrypted&&t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const n=await F.getOne("tpl",t.templateId);if(!n)return alert("La plantilla base no se encuentra.");let r=document.getElementById("print-iframe");r||(r=document.createElement("iframe"),r.id="print-iframe",r.style.position="fixed",r.style.left="-10000px",r.style.top="0",r.style.width="100%",r.style.height="100%",document.body.appendChild(r));const i=r.contentWindow.document,o=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let l="";for(let c=1;c<=12;c++){const u=c/12*100;l+=`.col-${c} { width: ${u}%; } `}i.open(),i.write(`
        <html>
          <head>
            <title>${t.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js"><\/script>
            <style>
              body { background: white; font-family: sans-serif; margin: 0; padding: 20px; }
              .print-header { display: flex; justify-content: space-between; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 2px solid #dee2e6; }
              
              .row { display: flex; flex-wrap: wrap; margin: 0 -4px; }
              [class^="col-"] { padding: 4px; box-sizing: border-box; }
              
              ${l}

              h1 { margin: 0; font-size: 1.5rem; color: #212529; }
              p { margin: 0; color: #6c757d; }
            </style>
          </head>
          <body>
            <div class="print-header">
              <div><h1>${t.title}</h1><p>${n.title}</p></div>
              <div style="text-align:right"><div>${o}</div><div style="font-weight:bold; font-size: 0.8rem; text-transform: uppercase;">${e}</div></div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),i.close(),r.onload=()=>{const c=i.getElementById("print-content");n.elements.forEach(u=>{if(u.hidePrint)return;const h=t.content.find(x=>x.fieldId===u.id);if(u.tag==="setting-section"){const x=i.createElement("div");x.className="col-12 mt-3 mb-2",x.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">${u.title}</h4>`,c.appendChild(x);return}if(!h)return;const f=h.value,g=u.tag.replace("setting-","printer-"),E=document.createElement(g);E.setAttribute("title",u.title),u.currency&&E.setAttribute("currency",u.currency),u.options&&E.setAttribute("options",u.options),u.columns&&E.setAttribute("columns",JSON.stringify(u.columns)),E.setAttribute("edit-value",Array.isArray(f)?JSON.stringify(f):f),E.setAttribute("type",e);const C=u.spanP||12;E.setAttribute("span-print",C),h.bold&&E.setAttribute("bold",""),h.italic&&E.setAttribute("italic",""),E.setAttribute("color",h.color||"black");const k=i.createElement("div");k.className=`col-${C}`,k.appendChild(E),c.appendChild(k)}),setTimeout(()=>{r.contentWindow.focus(),r.contentWindow.print()},500)}},async copyToWhatsApp(s){let e=await F.getOne("doc",s);if(!e)return alert("Error recuperando documento.");if(e.isEncrypted&&e.decryptionError)return alert("El documento está cifrado. Debe abrirlo primero en el visor.");const t=await F.getOne("tpl",e.templateId);let n=`*${e.title.toUpperCase()}*
_${t.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`;t.elements.forEach(r=>{if(r.hideWhatsapp)return;if(r.tag==="setting-section"){n+=`
*--- ${r.title.toUpperCase()} ---*
`;return}const i=e.content.find(u=>u.fieldId===r.id);if(!i)return;const o=i.value,l=r.tag.replace("setting-","viewer-"),c=document.createElement(l);if(r.currency&&c.setAttribute("currency",r.currency),r.columns&&(c.columns=r.columns),c.setAttribute("title",r.title),c.setAttribute("edit-value",typeof o=="object"?JSON.stringify(o):o),l==="viewer-table"&&r.columns&&(c.columns=r.columns,c.rows=Array.isArray(o)?o:[]),typeof c.getWhatsapp=="function"){const u=c.getWhatsapp();u&&u.trim()!==""&&(n+=u+`
`)}}),n+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(n).then(()=>alert(`📋 ¡Contenido copiado al portapapeles!
Listo para pegar en WhatsApp.`)).catch(()=>alert("Error al acceder al portapapeles."))}},yr={handlers:{},currentDocId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(s){if(!s)return;`${s}`;let e=await F.getOne("doc",s);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&(e.isEncrypted,e.decryptionError,e.content),e.isEncrypted&&e.decryptionError){const n=prompt("🔒 Documento cifrado. Ingrese su Frase Maestra:");if(!n)return this.handlers.onBack();try{if(`${n.length}`,await F.setMasterKey(n),e=await F.getOne("doc",s),e.decryptionError,e.content,e.decryptionError)return console.error("[VIEWER-DEBUG] ⛔ FALLO: El Storage devolvió error de descifrado nuevamente."),alert("⛔ Frase incorrecta."),this.handlers.onBack()}catch(r){return console.error("[VIEWER-DEBUG] ❌ ERROR CRÍTICO durante el desbloqueo:",r),alert("Error del sistema al intentar desbloquear: "+r.message),this.handlers.onBack()}}const t=await F.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this._renderContent(e,t,this.canvas)},async renderReadOnly(s,e){e.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let t=await F.getOne("doc",s);if(!t){e.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(t.isEncrypted&&t.decryptionError){e.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const n=await F.getOne("tpl",t.templateId);if(!n){e.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}e.innerHTML="";const r=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(t,n,e,r)},_renderContent(s,e,t,n=""){e.elements.some(i=>i.tag==="setting-section")?(t.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(s,e,t,n)):(t.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(s,e,t))},_renderFlatView(s,e,t){s.content&&s.content.forEach(n=>{const r=e.elements.find(o=>o.id===n.fieldId);if(!r)return;const i=this._createViewerComponent(r,n);t.appendChild(i)})},_renderStructuredView(s,e,t,n=""){const r=[];let i={title:"Principal",elements:[]};e.elements.forEach(u=>{if(u.tag==="setting-section")(i.elements.length>0||i.title!=="Principal")&&r.push(i),i={title:u.title||"Sección",elements:[]};else{const h=s.content.find(f=>f.fieldId===u.id);h&&i.elements.push({def:u,data:h})}}),r.push(i);const o=`nav-viewer-${s.id}${n}`;let l=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${o}" role="tablist">`,c=`<div class="tab-content tab-content-custom" id="${o}Content">`;r.forEach((u,h)=>{const f=`view-sec-${h}-${s.id}${n}`,g=h===0;l+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${g?"active":""}" data-bs-toggle="tab" data-bs-target="#v-tab-${f}" type="button">
            ${u.title}
          </button>
        </li>`,c+=`
        <div class="tab-pane fade ${g?"show active":""}" id="v-tab-${f}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#v-coll-${f}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${u.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${f}" class="collapse d-md-block ${g?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),t.innerHTML=l+"</ul>"+c+"</div>",r.forEach((u,h)=>{const f=`view-sec-${h}-${s.id}${n}`,g=t.querySelector(`#v-coll-${f} .row`);u.elements.forEach(E=>{const C=this._createViewerComponent(E.def,E.data);g.appendChild(C)})})},_createViewerComponent(s,e){const t=s.tag.replace("setting-","viewer-"),n=document.createElement(t);return s.currency&&n.setAttribute("currency",s.currency),s.options&&n.setAttribute("options",s.options),n.setData&&n.setData({...e,value:e.value,title:s.title,spanEV:s.spanEV,columns:s.columns||[],currency:s.currency,options:s.options}),n},_renderHeaderActions(s){this.headerActions&&(this.headerActions.innerHTML=`
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
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(s.id),document.getElementById("btn-whatsapp").onclick=()=>nr.copyToWhatsApp(s.id),document.getElementById("print-v").onclick=e=>{e.preventDefault(),nr.print(s.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),nr.print(s.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),nr.print(s.id,"Facil Lectura")})}},Dw={container:null,init(s){s&&(this.container=s,this._bindEvents(),setTimeout(()=>this.run(),200))},run(){if(!this.container)return;const s=Array.from(this.container.querySelectorAll("[is-calculated]"));s.length!==0&&s.forEach(e=>{const t=e.getAttribute("formula");if(t)try{const n=t.replace(/@\{([^}]+)\}/g,(i,o)=>this._getVariableValue(o)),r=new Function(`"use strict"; return (${n})`)();if(isFinite(r)&&!isNaN(r)){const i=e.querySelector("input");if(i){const o=Math.round(r*100)/100;i.value!=o&&(i.value=o,e.setAttribute("edit-value",o),i.dispatchEvent(new Event("input",{bubbles:!0})))}}}catch(n){console.warn(`[CalculationEngine] Error en ${e.id}:`,n.message)}})},_getVariableValue(s){if(s.startsWith("TOTAL_")){const n=document.getElementById(s);return n&&parseFloat(n.dataset.rawValue)||0}const e=document.getElementById(`input-${s}`);if(!e)return 0;let t=e.value;return typeof t=="string"&&(t=t.replace(/,/g,".")),parseFloat(t)||0},_bindEvents(){this.container.addEventListener("input",s=>{s.target.readOnly||this.run()}),this.container.addEventListener("table-change",()=>{setTimeout(()=>this.run(),50)}),this.container.addEventListener("paste",()=>{setTimeout(()=>this.run(),50)})}},Ki={handlers:{},currentDocId:null,currentTplId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(s){const e=await F.getOne("tpl",s);if(!e)return alert("Error: La plantilla seleccionada no existe."),this.handlers.onBack();if(e.encrypted&&!F._masterKey){const n=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!n)return this.handlers.onBack();if(!await F.verifyMasterPhrase(n))return alert("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla."),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=s,this.titleInput.value="",this.titleInput.readOnly=!1;const t=document.getElementById("doc-template-selector");t&&(t.style.display="none"),await this.renderCanvas(s,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(s){const e=await F.getOne("doc",s);e&&(this.currentDocId=s,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(s,e){const t=await F.getOne("tpl",s);if(!t)return;this.canvas.innerHTML="",t.elements.filter(i=>i.tag==="setting-section").length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(t.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),t.elements.forEach(i=>{const o=this._createComponent(i,e);this.canvas.appendChild(o)})),Dw.init(this.canvas)},_renderStructuredUI(s,e){const t=[];let n={title:"Principal",elements:[]};s.forEach(l=>{l.tag==="setting-section"?((n.elements.length>0||n.title!=="Principal")&&t.push(n),n={title:l.title||"Sección",elements:[]}):n.elements.push(l)}),t.push(n);const r=`nav-tabs-${this.currentTplId}`;let i=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${r}" role="tablist">`,o=`<div class="tab-content tab-content-custom" id="${r}Content">`;t.forEach((l,c)=>{const u=`sec-${c}-${this.currentTplId}`,h=c===0;i+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${h?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${u}" type="button">
            ${l.title}
          </button>
        </li>`,o+=`
        <div class="tab-pane fade ${h?"show active":""} group-pane" id="tab-pane-${u}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${u}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${l.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${u}" class="collapse d-md-block ${h?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=i+"</ul>"+o+"</div>",t.forEach((l,c)=>{const u=`sec-${c}-${this.currentTplId}`,h=this.canvas.querySelector(`#collapse-${u} .row`);l.elements.forEach(f=>{const g=this._createComponent(f,e);h.appendChild(g)})})},_createComponent(s,e){const t=s.tag.replace("setting-","editor-"),n=document.createElement(t);n.setAttribute("field-id",s.id),s.formula&&n.setAttribute("formula",s.formula),s.isCalculated&&n.setAttribute("is-calculated","true");const r=e.find(l=>l.fieldId===s.id),i=r?r.value:"",o={id:s.id,title:s.title,spanEV:s.spanEV||12,options:s.options,value:i,bold:r?r.bold:!1,italic:r?r.italic:!1,color:r?r.color:"black",columns:s.columns,currency:s.currency,formula:s.formula,isCalculated:s.isCalculated,prependRows:s.prependRows,apiUrl:s.apiUrl,apiPath:s.apiPath};return n.setData&&n.setData(o),n},setupSaveButton(s){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary"><i class="fa-solid fa-save"></i> ${s}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const s=document.getElementById("btn-save-document"),e=this.titleInput.value.trim();if(!e){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert("⚠️ Imposible Guardar: El documento requiere un Título.");return}const t=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{const n=this.currentDocId||`doc_${Date.now()}`,r=await F.getOne("tpl",this.currentTplId),i=Array.from(this.canvas.querySelectorAll("[field-id]")),o=[];let l=!0;if(i.forEach(u=>{typeof u.validate=="function"&&!u.validate()&&(l=!1),typeof u.getData=="function"&&o.push(u.getData())}),!l)throw new Error("Revise los campos marcados en rojo.");const c={id:n,title:e,templateId:this.currentTplId,templateTitle:r?r.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:o,isEncrypted:r&&r.encrypted||!1};await F.save("doc",c),this.handlers.onSave()}catch(n){alert("Error al guardar: "+n.message),s&&(s.disabled=!1,s.innerHTML=t)}}},vn={init(){Zn.init({onViewDocument:async s=>{Zn.hide(),this.showEditorView(),await yr.render(s)},onNavigateToDesigner:()=>{const s=document.getElementById("nav-designer");s?s.click():alert("Navegue al diseñador para crear una plantilla.")}}),yr.init({onEdit:async s=>{await Ki.loadForEditing(s),await this._checkAndRenderRelatedDocs(s,!1)},onBack:()=>{this.showListView()}}),Ki.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),Zn.render()},async createFromTemplate(s){Zn.hide(),this.showEditorView(),await Ki.loadForCreation(s),await this._checkAndRenderRelatedDocs(s,!0)},async _checkAndRenderRelatedDocs(s,e){let t;if(e)t=await F.getOne("tpl",s);else{const n=await F.getOne("doc",s);n&&(t=await F.getOne("tpl",n.templateId))}if(t&&t.relatedDocIds){const n=t.relatedDocIds.split(",").map(r=>r.trim()).filter(r=>r);n.length>0&&this._renderRelatedBar(n)}},async _renderRelatedBar(s){this._clearRelatedBar();const e=document.createElement("div");e.id="related-docs-wrapper",e.className="no-print",e.style.position="fixed",e.style.bottom="20px",e.style.left="20px",e.style.zIndex="1050",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";const t=document.createElement("button");t.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",t.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${s.length}</span>
    `,t.title="Ver documentos relacionados";const n=document.createElement("div");n.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",n.style.position="absolute",n.style.minWidth="250px",n.style.maxWidth="300px",n.style.maxHeight="300px",n.style.overflowY="auto",n.style.transition="all 0.2s ease";const r=document.createElement("div");r.className="d-flex flex-column gap-1";let i=0;for(const o of s){const l=await F.getOne("doc",o);if(l){i++;const c=document.createElement("button");c.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",c.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,c.title=l.title,c.onclick=()=>{this._toggleDrawer(n,t,!1);const u=document.getElementById("modal-related-doc"),h=document.getElementById("modal-related-body");new bootstrap.Modal(u).show(),yr.renderReadOnly(l.id,h)},r.appendChild(c)}}n.appendChild(r),i!==0&&(t.onclick=o=>{o.stopPropagation(),n.classList.contains("d-none")?(this._positionDrawer(e,n),n.classList.remove("d-none"),t.classList.remove("rounded-pill"),t.classList.add("rounded-start")):this._toggleDrawer(n,t,!1)},e.appendChild(n),e.appendChild(t),document.body.appendChild(e))},_toggleDrawer(s,e,t){t?s.classList.remove("d-none"):(s.classList.add("d-none"),e.classList.add("rounded-pill"),e.classList.remove("rounded-start"))},_positionDrawer(s,e){const t=s.getBoundingClientRect(),n=260,i=window.innerWidth-t.right;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",i>n?(e.style.left="100%",e.style.bottom="0",e.style.marginLeft="10px"):(e.style.bottom="100%",e.style.left="0",e.style.marginBottom="10px")},_clearRelatedBar(){const s=document.getElementById("related-docs-wrapper");s&&s.remove();const e=document.getElementById("related-docs-bar");e&&e.remove()},showListView(){this._clearRelatedBar();const s=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");s&&(s.style.display="block"),e&&(e.style.display="none"),Zn.render()},showEditorView(){this._clearRelatedBar();const s=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");s&&(s.style.display="none"),e&&(e.style.display="block")}},Xc={async exportData(){try{const s=await F.getAll("tpl"),e=await F.getAll("doc"),t={templates:s,documents:e,exportDate:new Date().toISOString(),version:"2.0 (Firebase)"},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=`respaldo_mg_cloud_${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(r)}catch(s){console.error("Error exportando:",s),alert("Error al generar el respaldo: "+s.message)}},async importData(s){const e=new FileReader;e.onload=async t=>{try{const n=JSON.parse(t.target.result);if(!n.templates&&!n.documents&&!n.tpl&&!n.doc)throw new Error("Formato de archivo no reconocido.");const r=n.templates||[],i=n.documents||[];let o=0;for(const c of r)c.updatedAt||(c.updatedAt=new Date().toISOString()),await F.save("tpl",c),o++;let l=0;for(const c of i)await F.save("doc",c),l++;alert(`Proceso finalizado.
Plantillas importadas: ${o}
Documentos importados: ${l}`),location.reload()}catch(n){console.error(n),alert("Error crítico al importar: "+n.message)}},e.readAsText(s)}},_n={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
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
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const n=document.getElementById("setup-master-phrase").value.trim(),r=document.getElementById("setup-error");if(n.length<15){r.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",r.style.display="block";return}try{await F.setMasterKey(n);const i=await F.encryptData({check:"VERIFIED"});await F.saveSecurityVerifier(i),t.hide(),e.remove(),alert("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.")}catch(i){console.error("Error al inicializar seguridad:",i),r.textContent="Error al inicializar el motor de seguridad.",r.style.display="block"}}},renderChangePhraseUI(s){const e=`
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header text-bg-primary small fw-bold">
          <i class="fa-solid fa-key me-1"></i> Cambiar Frase Maestra
        </div>
        <div class="card-body">
          <p class="text-muted" style="font-size: 0.75rem;">
            Si conoces tu frase actual, úsala aquí para actualizarla sin perder datos.
          </p>
          
          <div class="mb-2">
            <label class="small fw-bold">Frase Maestra Anterior:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="old-phrase" class="form-control form-control-sm shadow-none">
            <button class="btn btn-sm btn-outline-secondary border-0 position-absolute end-0 top-0 mt-4 me-3 toggle-pass" data-target="old-phrase" style="z-index:5;"><i class="fa-solid fa-eye"></i></button>
          </div>
          
          <div class="mb-3 position-relative">
            <label class="small fw-bold">Nueva Frase Maestra:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="new-phrase" class="form-control form-control-sm shadow-none" placeholder="Mínimo 15 caracteres">
          </div>

          <div id="reencrypt-progress" class="progress mb-3" style="display:none; height: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%"></div>
          </div>

          <button id="btn-reencrypt" class="btn btn-primary btn-sm w-100 fw-bold">
            Actualizar Frase y Re-Cifrar Datos
          </button>
        </div>
      </div>

      <div class="card border-danger shadow-sm">
        <div class="card-header bg-danger text-white small fw-bold d-flex justify-content-between align-items-center">
            <span><i class="fa-solid fa-radiation me-1"></i> Zona de Peligro</span>
            <span class="badge bg-white text-danger">Irreversible</span>
        </div>
        <div class="card-body">
            <h6 class="text-danger fw-bold small">¿Olvidaste tu Frase Maestra?</h6>
            <p class="small text-muted mb-3">
                Debido a la arquitectura de "Cero Conocimiento", <strong>no podemos recuperar tu frase</strong>. 
                La única opción es reiniciar tu configuración de seguridad.
            </p>
            
            <div class="alert alert-warning d-flex align-items-start small p-2" role="alert">
                <i class="fa-solid fa-triangle-exclamation me-2 mt-1"></i>
                <div>
                    <strong>Advertencia:</strong> Al realizar esta acción, perderás acceso permanentemente a todos los documentos que estén cifrados actualmente. Se volverán ilegibles.
                </div>
            </div>

            <button id="btn-hard-reset-toggle" class="btn btn-outline-danger btn-sm w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResetParams">
                Entiendo los riesgos, quiero reiniciar
            </button>

            <div class="collapse mt-3" id="collapseResetParams">
                <div class="card card-body bg-danger-subtle border-0">
                    <label class="small fw-bold text-danger mb-1">Escribe "ELIMINAR" para confirmar:</label>
                    <input type="text" id="reset-confirm-input" class="form-control form-control-sm mb-2" placeholder="ELIMINAR" autocomplete="off">
                    <button id="btn-execute-reset" class="btn btn-danger btn-sm w-100 fw-bold" disabled>
                        <i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR
                    </button>
                </div>
            </div>
        </div>
      </div>
    `;s.innerHTML=e,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const s=document.getElementById("btn-reencrypt");s&&(s.onclick=async()=>{const e=document.getElementById("old-phrase").value.trim(),t=document.getElementById("new-phrase").value.trim();if(e.length,e.substring(0,3)+"",t.length,!e||t.length<15)return console.warn("[UI-DEBUG] ⛔ Validación UI fallida: Longitud insuficiente o campos vacíos."),alert("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.");if(confirm("¿Confirmar cambio de frase?"))try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await F.changeMasterPhrase(e,t),alert("¡Éxito! Frase actualizada."),location.reload()}catch(n){console.error("[UI-DEBUG] ❌ Error capturado en la UI (vino del Storage):",n),alert("Error: "+n.message),s.disabled=!1,s.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const s=document.getElementById("reset-confirm-input"),e=document.getElementById("btn-execute-reset");!s||!e||(s.addEventListener("input",t=>{t.target.value==="ELIMINAR"?e.disabled=!1:e.disabled=!0}),e.onclick=async()=>{if(confirm("ÚLTIMA ADVERTENCIA: Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await F.hardResetSecurity(),alert(`El sistema de seguridad ha sido reiniciado.

La página se recargará y podrás configurar una nueva Frase Maestra.`),window.location.reload()}catch(t){console.error(t),alert("Error al reiniciar seguridad: "+t.message),e.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},hn={async validateCredentials(s,e,t){const n=`https://api.github.com/repos/${s}/${e}`;if(!(await fetch(n,{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales inválidas o repositorio no encontrado/privado sin acceso.");return!0},async uploadFile(s,e,t,n){const r=await this._toBase64(e),i=t.replace(/^\//,"").replace(/\/$/,""),o=i?`${i}/${n}`:n,l=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${o}`,c={message:`Subido desde DocEngine: ${n}`,content:r},u=await fetch(l,{method:"PUT",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok){const h=await u.json();throw new Error(h.message||"Error al subir archivo a GitHub")}return await u.json()},async deleteFile(s,e,t){const n=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${e}`,r={message:"Eliminado desde DocEngine",sha:t};if(!(await fetch(n,{method:"DELETE",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(s){return new Promise((e,t)=>{const n=new FileReader;n.readAsDataURL(s),n.onload=()=>{const r=n.result.split(",")[1];e(r)},n.onerror=r=>t(r)})},async fetchSecureFile(s,e){const t=`https://api.github.com/repos/${s.githubUser}/${s.githubRepo}/contents/${e}`,n=await fetch(t,{headers:{Authorization:`Bearer ${s.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!n.ok)throw new Error(`Error descargando archivo (${n.status}): Verifique permisos o ruta.`);return await n.blob()}},It={async saveUserConfig(s,e){const t=Oe(Pe,"users",s);await av(t,{githubConfig:e}).catch(async n=>{throw console.error("Error guardando config github",n),n})},async getUserConfig(s){const e=Oe(Pe,"users",s),t=await dr(e);return t.exists()&&t.data().githubConfig||null},async addFileRecord(s){const e=kr(Pe,"github_files");return(await lv(e,s)).id},async listFiles(s){const e=kr(Pe,"github_files"),t=vo(e,lr("userId","==",s)),n=await _o(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r},async deleteFileRecord(s){await ur(Oe(Pe,"github_files",s))}},xh={init(){this.container=document.getElementById("view-settings"),this.render()},render(){const s=document.getElementById("theme-link").getAttribute("href"),e=`./src/views/manual.html?theme=${encodeURIComponent(s)}`;this.container.innerHTML=`
      <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold text-body-secondary"><i class="fa-solid fa-gears me-2"></i>Configuración</h3>
            <div class="card shadow-sm border-info mb-4">
              <div class="card-body d-flex align-items-center justify-content-between bg-info bg-opacity-10">
                  <div class="d-flex align-items-center">
                      <div class="bg-white p-2 rounded-circle me-3 text-info border border-info">
                          <i class="fa-solid fa-book-open fs-4"></i>
                      </div>
                      <div>
                          <h6 class="fw-bold mb-0 text-dark">Manual de Usuario</h6>
                          <small class="text-muted">Dudas sobre plantillas, seguridad o GitHub.</small>
                      </div>
                  </div>
                  <a href="${e}" target="_blank" class="btn btn-info text-white fw-bold">
                    <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Abrir Manual
                </a>
              </div>
          </div>
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
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader();const t=document.getElementById("security-config-wrapper");_n&&_n.renderChangePhraseUI&&_n.renderChangePhraseUI(t),this.renderGithubSettings("github-settings-wrapper")},_initThemeLoader(){const s=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(t=>t.json()).then(t=>{const n=t.themes;s.innerHTML="";const r=document.createElement("option");r.value="default",r.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(r.selected=!0),s.append(r),n.forEach((i,o)=>{const l=document.createElement("option");l.value=o,l.textContent=i.name+(i.description?` (${i.description})`:"");const c=i.cssCdn||i.css;e===c&&(l.selected=!0),s.append(l)}),s.addEventListener("change",i=>{let o="";if(i.target.value==="default")o="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=n[i.target.value];o=l.cssCdn||l.css}this._applyThemeWithPreload(o,s)})}).catch(t=>{console.error("Error cargando temas:",t),s.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(s,e){e.options[e.selectedIndex].text,e.disabled=!0;const t=document.createElement("div");t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,t.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"});const n=document.createElement("link");n.rel="stylesheet",n.href=s,n.onload=()=>{document.getElementById("theme-link").setAttribute("href",s),localStorage.setItem("doc_engine_theme_url",s),setTimeout(()=>{e.disabled=!1,t.style.opacity="0",setTimeout(()=>{t.remove(),n.remove()},300)},200)},n.onerror=()=>{alert("Error al descargar el tema seleccionado."),e.disabled=!1,t.remove(),n.remove()},document.head.appendChild(n)},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),alert("Preferencias guardadas.")},document.getElementById("btn-export").onclick=()=>Xc.exportData(),document.getElementById("import-file").onchange=e=>{e.target.files.length>0&&Xc.importData(e.target.files[0])};const s=document.getElementById("btn-change-pass");s.onclick=async()=>{const e=document.getElementById("current-pass").value,t=document.getElementById("new-pass").value;if(!e||!t)return alert("Complete ambos campos.");if(!gr.validatePassword(t))return alert("La contraseña no cumple requisitos (8+ chars, Mayús, Num).");const n=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const r=yt.currentUser;if(!r)throw new Error("Sin sesión.");const i=sn.credential(r.email,e);await u_(r,i),await g_(r,t),alert("Contraseña actualizada correctamente."),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(r){console.error(r),alert(r.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+r.message)}finally{s.disabled=!1,s.innerHTML=n}}},_loadCurrentPrefs(){const s=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=s||"35"},renderGithubSettings(s){const e=document.getElementById(s);if(!e)return;const t=`
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
    `,n=document.createElement("div");n.innerHTML=t,e.appendChild(n);const r=zt.getCurrentUser();r&&It.getUserConfig(r.uid).then(i=>{i&&(document.getElementById("set-gh-user").value=i.githubUser,document.getElementById("set-gh-repo").value=i.githubRepo,document.getElementById("set-gh-token").value=i.githubToken,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))}),document.getElementById("github-config-form").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("gh-config-msg"),l=i.target.querySelector('button[type="submit"]'),c=document.getElementById("set-gh-user").value.trim(),u=document.getElementById("set-gh-repo").value.trim(),h=document.getElementById("set-gh-token").value.trim();try{l.disabled=!0,o.innerHTML='<span class="text-info">Verificando conexión con GitHub...</span>',await hn.validateCredentials(c,u,h),await It.saveUserConfig(r.uid,{githubUser:c,githubRepo:u,githubToken:h}),o.innerHTML='<span class="text-success fw-bold">¡Conexión Exitosa! Configuración guardada. Recarga la página para ver el menú.</span>',window.location.reload()}catch(f){o.innerHTML=`<span class="text-danger">Error: ${f.message}</span>`}finally{l.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{confirm("¿Desvincular cuenta?")&&(await It.saveUserConfig(r.uid,null),window.location.reload())})}},Ow={config:null,async init(s){const e=document.getElementById(s);if(!e)return;const t=zt.getCurrentUser();if(t){if(this.config=await It.getUserConfig(t.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=`
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
    `,document.getElementById("gh-upload-form").addEventListener("submit",n=>this.handleUpload(n,t)),document.getElementById("gh-close-audio").addEventListener("click",()=>{const n=document.getElementById("gh-audio-player");n.pause(),n.src="",document.getElementById("gh-audio-container").style.display="none"}),this.loadFilesList(t.uid)}},async handleUpload(s,e){s.preventDefault();const t=document.getElementById("gh-btn-upload"),n=document.getElementById("gh-upload-status"),r=document.getElementById("gh-title").value.trim(),i=document.getElementById("gh-folder").value.trim()||"root",l=document.getElementById("gh-file").files[0];if(l)try{t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Subiendo...',n.innerHTML="";const c=r.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+l.name.split(".").pop(),u=await hn.uploadFile(this.config,l,i,c),h={userId:e.uid,title:r,folder:i,fileName:c,originalName:l.name,path:u.content.path,sha:u.content.sha,htmlUrl:u.content.html_url,downloadUrl:u.content.download_url,createdAt:new Date().toISOString()};await It.addFileRecord(h),document.getElementById("gh-upload-form").reset(),n.innerHTML='<div class="alert alert-success">Archivo subido correctamente.</div>',this.loadFilesList(e.uid)}catch(c){console.error(c),n.innerHTML=`<div class="alert alert-danger">Error: ${c.message}</div>`}finally{t.disabled=!1,t.innerHTML='<i class="fa-solid fa-cloud-arrow-up"></i> Subir a GitHub'}},async loadFilesList(s){const e=document.getElementById("gh-files-list");try{const t=await It.listFiles(s);if(t.length===0){e.innerHTML='<tr><td colspan="4" class="text-center p-3 text-muted">No hay archivos subidos aún.</td></tr>';return}e.innerHTML=t.map(n=>{const r=n.fileName.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","webp","svg"].includes(r),o=["mp3","wav","ogg","m4a"].includes(r);let l="";i?l=`
              <button class="btn btn-sm btn-outline-primary btn-view-img me-1" 
                data-path="${n.path}" 
                data-title="${n.title}" title="Ver Imagen">
                <i class="fa-regular fa-eye"></i>
              </button>`:o&&(l=`
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
          `}).join(""),document.querySelectorAll(".btn-view-img").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.title,o=document.getElementById("ghImageModal"),l=document.getElementById("gh-preview-img"),c=document.getElementById("gh-loading-img"),u=document.getElementById("ghImageModalLabel");u.textContent=i,l.style.display="none",c.style.display="block",l.src="";const h=new bootstrap.Modal(o);h.show();try{const f=await hn.fetchSecureFile(this.config,r),g=URL.createObjectURL(f);l.src=g,l.onload=()=>{c.style.display="none",l.style.display="block"}}catch(f){console.error(f),alert("Error cargando imagen: "+f.message),h.hide()}})}),document.querySelectorAll(".btn-play-audio").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.title,o=document.getElementById("gh-audio-container"),l=document.getElementById("gh-audio-player"),c=document.getElementById("gh-audio-title"),u=document.getElementById("gh-loading-audio");o.style.display="block",c.textContent="Cargando "+i+"...",u.style.display="inline-block",l.style.display="none",l.pause();try{const h=await hn.fetchSecureFile(this.config,r),f=URL.createObjectURL(h);l.src=f,l.style.display="block",u.style.display="none",c.textContent=i,l.play().catch(g=>console.log("Autoplay bloqueado",g))}catch(h){console.error(h),alert("Error cargando audio: "+h.message),o.style.display="none"}})}),document.querySelectorAll(".btn-download-gh").forEach(n=>{n.addEventListener("click",async()=>{const r=n.dataset.path,i=n.dataset.name,o=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await hn.fetchSecureFile(this.config,r),c=URL.createObjectURL(l),u=document.createElement("a");u.href=c,u.download=i,document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(l){console.error(l),alert("Error en la descarga: "+l.message)}finally{n.disabled=!1,n.innerHTML=o}})}),document.querySelectorAll(".btn-delete-gh").forEach(n=>{n.addEventListener("click",()=>this.handleDelete(s,n.dataset))})}catch(t){e.innerHTML=`<tr><td colspan="4" class="text-danger">Error cargando lista: ${t.message}</td></tr>`}},async handleDelete(s,e){if(!confirm("¿Estás seguro de eliminar este archivo permanentemente?"))return;const{id:t,path:n,sha:r}=e;try{await hn.deleteFile(this.config,n,r),await It.deleteFileRecord(t),this.loadFilesList(s),alert("Archivo eliminado.")}catch(i){alert("Error eliminando: "+i.message)}}};async function Mw(){const e=Object.keys(Ve).flatMap(t=>[Ks(Object.assign({"./components/boolean/setting-boolean.js":()=>O(()=>Promise.resolve().then(()=>Gw),void 0,import.meta.url),"./components/chart/setting-chart.js":()=>O(()=>Promise.resolve().then(()=>Ww),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>O(()=>Promise.resolve().then(()=>Kw),void 0,import.meta.url),"./components/date/setting-date.js":()=>O(()=>Promise.resolve().then(()=>Qw),void 0,import.meta.url),"./components/email/setting-email.js":()=>O(()=>Promise.resolve().then(()=>Jw),void 0,import.meta.url),"./components/number/setting-number.js":()=>O(()=>Promise.resolve().then(()=>Yw),void 0,import.meta.url),"./components/password/setting-password.js":()=>O(()=>Promise.resolve().then(()=>Xw),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>O(()=>Promise.resolve().then(()=>Zw),void 0,import.meta.url),"./components/section/setting-section.js":()=>O(()=>Promise.resolve().then(()=>eE),void 0,import.meta.url),"./components/select/setting-select.js":()=>O(()=>Promise.resolve().then(()=>tE),void 0,import.meta.url),"./components/string/setting-string.js":()=>O(()=>Promise.resolve().then(()=>nE),void 0,import.meta.url),"./components/table/setting-table.js":()=>O(()=>Promise.resolve().then(()=>sE),void 0,import.meta.url),"./components/text/setting-text.js":()=>O(()=>Promise.resolve().then(()=>rE),void 0,import.meta.url),"./components/url/setting-url.js":()=>O(()=>Promise.resolve().then(()=>iE),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),Ks(Object.assign({"./components/boolean/editor-boolean.js":()=>O(()=>Promise.resolve().then(()=>oE),void 0,import.meta.url),"./components/chart/editor-chart.js":()=>O(()=>Promise.resolve().then(()=>aE),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>O(()=>Promise.resolve().then(()=>cE),void 0,import.meta.url),"./components/date/editor-date.js":()=>O(()=>Promise.resolve().then(()=>dE),void 0,import.meta.url),"./components/email/editor-email.js":()=>O(()=>Promise.resolve().then(()=>uE),void 0,import.meta.url),"./components/number/editor-number.js":()=>O(()=>Promise.resolve().then(()=>lE),void 0,import.meta.url),"./components/password/editor-password.js":()=>O(()=>Promise.resolve().then(()=>hE),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>O(()=>Promise.resolve().then(()=>pE),void 0,import.meta.url),"./components/section/editor-section.js":()=>O(()=>Promise.resolve().then(()=>fE),void 0,import.meta.url),"./components/select/editor-select.js":()=>O(()=>Promise.resolve().then(()=>mE),void 0,import.meta.url),"./components/string/editor-string.js":()=>O(()=>Promise.resolve().then(()=>gE),void 0,import.meta.url),"./components/table/editor-table.js":()=>O(()=>Promise.resolve().then(()=>yE),void 0,import.meta.url),"./components/text/editor-text.js":()=>O(()=>Promise.resolve().then(()=>bE),void 0,import.meta.url),"./components/url/editor-url.js":()=>O(()=>Promise.resolve().then(()=>vE),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),Ks(Object.assign({"./components/boolean/viewer-boolean.js":()=>O(()=>Promise.resolve().then(()=>_E),void 0,import.meta.url),"./components/chart/viewer-chart.js":()=>O(()=>Promise.resolve().then(()=>wE),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>O(()=>Promise.resolve().then(()=>EE),void 0,import.meta.url),"./components/date/viewer-date.js":()=>O(()=>Promise.resolve().then(()=>IE),void 0,import.meta.url),"./components/email/viewer-email.js":()=>O(()=>Promise.resolve().then(()=>TE),void 0,import.meta.url),"./components/number/viewer-number.js":()=>O(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),"./components/password/viewer-password.js":()=>O(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>O(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),"./components/section/viewer-section.js":()=>O(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url),"./components/select/viewer-select.js":()=>O(()=>Promise.resolve().then(()=>RE),void 0,import.meta.url),"./components/string/viewer-string.js":()=>O(()=>Promise.resolve().then(()=>xE),void 0,import.meta.url),"./components/table/viewer-table.js":()=>O(()=>Promise.resolve().then(()=>kE),void 0,import.meta.url),"./components/text/viewer-text.js":()=>O(()=>Promise.resolve().then(()=>LE),void 0,import.meta.url),"./components/url/viewer-url.js":()=>O(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),Ks(Object.assign({"./components/boolean/printer-boolean.js":()=>O(()=>Promise.resolve().then(()=>DE),void 0,import.meta.url),"./components/chart/printer-chart.js":()=>O(()=>Promise.resolve().then(()=>OE),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>O(()=>Promise.resolve().then(()=>ME),void 0,import.meta.url),"./components/date/printer-date.js":()=>O(()=>Promise.resolve().then(()=>NE),void 0,import.meta.url),"./components/email/printer-email.js":()=>O(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url),"./components/number/printer-number.js":()=>O(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url),"./components/password/printer-password.js":()=>O(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>O(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url),"./components/section/printer-section.js":()=>O(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url),"./components/select/printer-select.js":()=>O(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),"./components/string/printer-string.js":()=>O(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url),"./components/table/printer-table.js":()=>O(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url),"./components/text/printer-text.js":()=>O(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/url/printer-url.js":()=>O(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e)}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{const s=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),t="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";s&&(s.onerror=()=>{console.error("[THEME] ❌ Error. Revertiendo a Default."),s.href=t,localStorage.setItem("doc_engine_theme_url",t)},s.href=e&&e.includes("http")?e:t);try{await F.initDB()}catch(n){console.error("[ERROR] APP: Error de inicialización:",n);return}await Mw(),Fw(),F.onAuthStateChanged(async n=>{n?(n.email,await Nw(n)):(document.getElementById("app-content").style.display="none",Rh.renderLogin())})});async function Nw(s){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${s.email}`),Rh.initLogout(),Fr.init(),vn.init(),xh.init(),!await F.hasSecurityConfigured()&&_n&&_n.renderSetupModal&&_n.renderSetupModal(),await It.getUserConfig(s.uid)&&$w(),Uw(),wn("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",r=>{wn("documents"),vn.createFromTemplate(r.detail.tplId)}),window._eventCreateDocRegistered=!0)}function $w(){const s=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,s.appendChild(e),document.getElementById("nav-github").addEventListener("click",t=>{t.preventDefault(),wn("github"),Ow.init("view-github")})}function Uw(){document.getElementById("nav-designer").onclick=s=>{s.preventDefault(),wn("designer")},document.getElementById("nav-documents").onclick=s=>{s.preventDefault(),wn("documents")},document.getElementById("nav-settings").onclick=s=>{s.preventDefault(),wn("settings")}}function wn(s){const e={designer:document.getElementById("view-designer"),documents:document.getElementById("view-documents"),settings:document.getElementById("view-settings"),github:document.getElementById("view-github")},t={designer:document.getElementById("nav-designer"),documents:document.getElementById("nav-documents"),settings:document.getElementById("nav-settings"),github:document.getElementById("nav-github")};Object.values(e).forEach(n=>{n&&(n.style.display="none")}),Object.values(t).forEach(n=>{n&&n.classList.remove("active"),n&&(n.style.fontWeight="normal")}),e[s]&&(e[s].style.display="block"),t[s]&&(t[s].classList.add("active"),t[s].style.fontWeight="bold"),s==="designer"&&Fr.renderList(),s==="documents"&&vn.renderList(),s==="settings"&&xh.render()}function Fw(){document.addEventListener("click",t=>{const n=t.target.closest(".toggle-password");if(n){t.preventDefault();const r=document.getElementById(n.dataset.target),i=n.querySelector("i");if(r&&i){const o=r.type==="password";r.type=o?"text":"password",i.classList.toggle("fa-eye",!o),i.classList.toggle("fa-eye-slash",o)}}});const s=document.querySelector(".navbar"),e=document.querySelector(".app-container");s&&e&&new ResizeObserver(n=>{for(let r of n){const i=s.offsetHeight;e.style.marginTop=`${i+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{vn&&vn.renderList&&vn.renderList()},250)}}).observe(s)}const Bw=s=>class extends s{getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),n=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${t?"italic":"normal"};
        color: ${n};`}renderStyleControls(e=[]){const t=this.hasAttribute("bold"),n=this.hasAttribute("italic"),r=this.getAttribute("color")||"black",i=!e.includes("bold"),o=!e.includes("italic"),l=!e.includes("color");let c="";(i||o)&&(c=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${i?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${o?`<button class="btn btn-sm btn-outline-secondary ${n?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let u="";return l&&(u=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(h=>`<button class="btn btn-sm rounded-circle p-0 border ${r===h?"border-dark":"border-light"}" data-color="${h}" style="background-color: ${h}; width: 22px; height: 22px;" title="${h}"></button>`).join("")}
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
                ${u}
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
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const t=this.querySelector(`#btn-opts-${this.id}`);t&&(t.addEventListener("show.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="visible")}),t.addEventListener("hidden.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="hidden")}));const n=(i,o)=>{const l=this.querySelector(`#${i}-${this.id}`);l&&(l.onclick=c=>{c.preventDefault(),o(c)})};n("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),n("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const r=this.querySelector(`#color-grid-${this.id}`);r&&r.querySelectorAll("button").forEach(i=>{i.onclick=o=>{o.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",i.dataset.color),this._isInternalUpdate=!1,this.render()}}),n("btn-copy",()=>{const i=this.querySelector(`#btn-copy-${this.id}`),o=i.innerHTML;let l="";if(typeof this.getData=="function"){const c=this.getData();l=typeof c.value=="object"?JSON.stringify(c.value):c.value||""}else l=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",l),i.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{i.innerHTML=o},1200)}),n("btn-paste",()=>{const i=this.querySelector(`#btn-paste-${this.id}`),o=sessionStorage.getItem("doc_clipboard_value");if(o!==null){typeof this.setData=="function"?this.setData({value:o}):this.setAttribute("edit-value",o);const l=i.innerHTML;i.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{i.innerHTML=l},1200)}})}};class jw{constructor(e,t=""){this.container=e,this.tokens=[],this.availableVars=[],this.draggedIndex=null,this._parseFormulaString(t),this._initDragEvents(),this.render()}setContextVariables(e){this.availableVars=e||[],this.render()}addToken(e,t,n){this.tokens.push({type:e,value:t,label:n||t}),this.render()}removeToken(e){this.tokens.splice(e,1),this.render()}clear(){this.tokens=[],this.render()}getFormulaString(){return this.tokens.map(e=>e.type==="var"?`@{${e.value}}`:e.value).join(" ")}validate(){if(this.tokens.some(n=>n.type==="var"&&!this.availableVars.find(r=>r.id===n.value)))return{valid:!1,msg:"Existen variables no válidas (rojas). Elimínalas para continuar."};if(this.tokens.length===0)return{valid:!1,msg:"La fórmula está vacía."};const t=this.tokens.map(n=>n.type==="var"?"1":n.value).join(" ");try{if(/[^0-9+\-*/().\s]/.test(t))throw new Error("Caracteres no permitidos");const n=new Function(`return ${t}`)();if(isNaN(n)||!isFinite(n))throw new Error("Resultado matemático inválido");return{valid:!0,msg:"Fórmula válida."}}catch(n){return{valid:!1,msg:"Error de sintaxis: "+n.message}}}_parseFormulaString(e){if(!e)return;const t=/@\{([^}]+)\}|([0-9]+(\.[0-9]+)?)|([+\-*/()])|([a-zA-Z0-9_]+)/g;let n;for(;(n=t.exec(e))!==null;)n[1]?this.tokens.push({type:"var",value:n[1],label:n[1]}):n[0].trim()&&this.tokens.push({type:"op",value:n[0],label:n[0]})}render(){if(this.container.innerHTML="",this.container.className="formula-editor-container",this.tokens.length===0){this.container.innerHTML='<span class="text-muted opacity-50 small fst-italic w-100 text-center user-select-none">Arrastra variables u operadores aquí...</span>';return}this.tokens.forEach((e,t)=>{const n=document.createElement("div");n.className=`formula-token ${e.type}`,n.draggable=!0;let r=e.label;if(e.type==="var"){const o=this.availableVars.find(l=>l.id===e.value);o?r=o.title:(n.classList.add("broken"),r=`¿${e.value}?`,n.title="Variable no encontrada"),n.innerHTML=`<i class="fa-solid fa-cube me-1 opacity-50 small"></i>${r}`}else n.innerHTML=r;const i=document.createElement("span");i.className="btn-del-token",i.innerHTML='<i class="fa-solid fa-trash"></i>',i.onclick=o=>{o.stopPropagation(),this.removeToken(t)},n.appendChild(i),this._addDragEvents(n,t),this.container.appendChild(n)})}_addDragEvents(e,t){e.addEventListener("dragstart",n=>{this.draggedIndex=t,n.dataTransfer.effectAllowed="move",setTimeout(()=>e.classList.add("dragging"),0)}),e.addEventListener("dragend",()=>{this.draggedIndex=null,e.classList.remove("dragging"),this.container.querySelectorAll(".formula-token").forEach(n=>n.classList.remove("drop-target-active"))}),e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("drop-target-active")}),e.addEventListener("dragleave",()=>e.classList.remove("drop-target-active")),e.addEventListener("drop",n=>{if(n.preventDefault(),e.classList.remove("drop-target-active"),this.draggedIndex===null||this.draggedIndex===t)return;const r=this.tokens.splice(this.draggedIndex,1)[0];let i=t;this.draggedIndex<t&&i--,this.tokens.splice(i,0,r),this.render()})}_initDragEvents(){this.container.addEventListener("dragover",e=>e.preventDefault()),this.container.addEventListener("drop",e=>{if(e.preventDefault(),e.target===this.container&&this.draggedIndex!==null){const t=this.tokens.splice(this.draggedIndex,1)[0];this.tokens.push(t),this.render()}})}}const qw=s=>class extends s{isCalculable(){const e=this.tagName.toLowerCase().split("-")[1];return["number","currency","percentage"].includes(e)}getFormulaSettingsHTML(){if(!this.isCalculable())return"";this.hasAttribute("table");const e=this.hasAttribute("is-calculated");return`
      
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
      `}initFormulaWidget(e){if(!this.isCalculable())return;const t=e.querySelector(`#formula-widget-${this.id}`);if(!t)return;const n=this._gatherCalculationVariables(),r=this.getAttribute("formula")||"";this._tempFormulaWidget=new jw(t,r),this._tempFormulaWidget.setContextVariables(n);const i=e.querySelector(`#formula-vars-${this.id}`);i.innerHTML="",n.length===0?i.innerHTML='<span class="text-muted small fst-italic text-center w-100">No hay variables disponibles en este contexto.</span>':n.forEach(c=>{const u=document.createElement("button");u.type="button";const h=c.type==="column";u.className=`btn btn-xs ${h?"btn-white border-primary text-primary":"btn-light border-info text-info"} border shadow-sm small`,u.style.fontSize="0.7rem",u.innerHTML=`<i class="fa-solid ${h?"fa-table-columns":"fa-cube"} me-1 opacity-50"></i>${c.title}`,u.onclick=()=>this._tempFormulaWidget.addToken("var",c.id,c.title),i.appendChild(u)}),e.querySelectorAll(".btn-op-formula").forEach(c=>{c.onclick=()=>this._tempFormulaWidget.addToken("op",c.dataset.op,c.innerText)});const o=e.querySelector(`#btn-add-manual-${this.id}`),l=e.querySelector(`#formula-manual-${this.id}`);o&&l&&(o.onclick=()=>{l.value&&(this._tempFormulaWidget.addToken("op",l.value,l.value),l.value="",l.focus())})}saveFormulaChanges(){if(!this._tempFormulaWidget)return{valid:!0};const e=this._tempFormulaWidget.validate(),t=this._tempFormulaWidget.getFormulaString();if(!e.valid&&t.trim().length>0){const n=document.getElementById(`formula-msg-${this.id}`);return n&&(n.textContent=e.msg,n.classList.remove("d-none")),{valid:!1}}return this.setAttribute("formula",t),t.trim().length>0?this.setAttribute("is-calculated","true"):this.removeAttribute("is-calculated"),this._tempFormulaWidget=null,{valid:!0}}_gatherCalculationVariables(){const e=this.hasAttribute("table");let t=[];if(e){this.closest(".designer-item-wrapper"),t=[...Fr.getAvailableVariables("general")];const n=this.closest(".modal-body");n&&n.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(i=>{i.id!==this.id&&t.push({id:i.id,title:`[Col] ${i.getAttribute("title")||"Sin título"}`,type:"column"})})}else t=Fr.getAvailableVariables("general");return t.filter(n=>n.id!==this.id)}},Hw=s=>class extends s{async _initApiFetch(e=!1){const t=this.getAttribute("api-url"),n=this.getAttribute("id")||this.id;if(!t)return;if(!e&&this._hasValue&&this._hasValue()){`${n}`;return}`${n}`;let r=null;const i=async o=>{if(!o.ok)throw new Error(`Status ${o.status}`);let l=await o.json();if(l.contents)try{return JSON.parse(l.contents)}catch{return l.contents}return l};try{const o=await fetch(t);r=await i(o)}catch{if(console.warn("[API] Fallo directo. Intentando Proxy..."),t.includes("corsproxy.io")){this._markError();return}else try{const l="https://corsproxy.io/?"+encodeURIComponent(t),c=await fetch(l);r=await i(c)}catch(l){console.error("[API] Error total:",l),this._markError();return}}if(r){const o=this.getAttribute("api-path");if(Array.isArray(r))this._openApiSelectionModal(r,o);else{const l=o?this._resolvePath(r,o):r;this._applyApiValue(l)}}}_resolvePath(e,t){return t.split(".").reduce((n,r)=>n&&n[r],e)}_applyApiValue(e){this.setAttribute("edit-value",e),this.render&&this.render(),this.dispatchEvent(new Event("input",{bubbles:!0}))}_markError(){const e=this.querySelector("input, select, textarea");e&&(e.classList.add("is-invalid"),e.title="Error de conexión API")}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""&&e!=="---"}_openApiSelectionModal(e,t){var l;const n=`modal-api-${this.id}`;(l=document.getElementById(n))==null||l.remove();const r=`
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
      </div>`;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById(n),o=new bootstrap.Modal(i);o.show(),i.querySelector(`#search-${this.id}`).oninput=c=>{const u=c.target.value.toLowerCase().split(" ").filter(f=>f),h=e.filter(f=>{const g=Object.values(f).join(" ").toLowerCase();return u.every(E=>g.includes(E))});i.querySelector(`#list-${this.id}`).innerHTML=this._renderApiListItems(h,t),this._bindApiListClicks(i,o)},this._bindApiListClicks(i,o),i.addEventListener("hidden.bs.modal",()=>i.remove())}_renderApiListItems(e,t){return e.map(n=>{const r=t?this._resolvePath(n,t):"Seleccionar",i=Object.entries(n).slice(0,3).map(([o,l])=>`<span class="badge bg-white text-dark border me-1 fw-normal">${o}: <b>${l}</b></span>`).join("");return`
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
      `:""}},zw=s=>class extends s{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${Ve[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=t=>{t.preventDefault(),t.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var o;const e=this.tagName.toLowerCase().split("-")[1],t=this.hasAttribute("table"),n=((o=Ve[e])==null?void 0:o.settings)||{width:!0,visibility:!0},r={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let i="";if(n.visibility&&(i+=this._buildAccordionItem("vis","Visibilidad",!0,`
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
        </div>`;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById("advanced-settings-modal"),i=new bootstrap.Modal(r);i.show(),r.addEventListener("shown.bs.modal",()=>{this.initFormulaWidget&&this.initFormulaWidget(r)}),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&i.hide()}}_saveSettingsFromModal(){const e=r=>{var i;return(i=document.getElementById(r))==null?void 0:i.value},t=r=>{var i;return(i=document.getElementById(r))==null?void 0:i.checked};if(this.saveFormulaChanges&&!this.saveFormulaChanges().valid)return!1;this.setInternalUpdate(!0),t("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),t("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align"))),document.getElementById("modal-api-url")&&(this.setAttribute("api-url",e("modal-api-url")),this.setAttribute("api-path",e("modal-api-path")));const n=document.getElementById("modal-total");return n&&(n.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}};class N extends Hw(zw(qw(Bw(HTMLElement)))){constructor(){super(),this._isInternalUpdate=!1}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this._initApiFetch&&setTimeout(()=>this._initApiFetch(),100),this._attachApiRefreshEvents(),this.addEventListener("dblclick",e=>{this.tagName.startsWith("EDITOR-")||(e.preventDefault(),e.stopPropagation(),this._handleDoubleClickCopy(e))})}static get observedAttributes(){return["title","options","currency","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","formula","is-calculated","hide-print","hide-whatsapp","api-url","api-path"]}attributeChangedCallback(e,t,n){this._isInternalUpdate||t!==n&&this.render()}getData(){const e=this.tagName.toLowerCase();return e.startsWith("setting-")?{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),formula:this.getAttribute("formula"),isCalculated:this.hasAttribute("is-calculated"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",options:this.getAttribute("options")||"",currency:this.getAttribute("currency")||"$"}:{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id),e.fieldId&&this.setAttribute("field-id",e.fieldId),["title","options","currency","alignment","api-url","api-path","formula","color"].forEach(r=>{const i=e[r]||e[this._toCamel(r)];i&&this.setAttribute(r,i)}),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.value!==void 0&&this.setAttribute("edit-value",e.value);const n={total:e.total,bold:e.bold,italic:e.italic,"hide-print":e.hidePrint,"hide-whatsapp":e.hideWhatsapp,"is-calculated":e.isCalculated};Object.entries(n).forEach(([r,i])=>{i?this.setAttribute(r,i===!0?"":i):this.removeAttribute(r)}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",n=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${n} mb-3`,`
      <div class="viewer-container">
        <label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">
            ${t}
        </label>
        ${e}
      </div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const n=this.getAttribute("title")||"",r={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",f:"0.70rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",f:"0.70rem"},"Facil Lectura":{m:"2px",p:"1px",b:"1px solid #000",f:"1rem"}},i=r[t]||r.Visual;return`
      <div style="margin-bottom: ${i.m}; border-bottom: ${i.b}; padding-bottom: ${i.p}; page-break-inside: avoid;">
          <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${i.f}; line-height: 1.1;">${n}</div>
          ${e}
      </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];Ve[e]&&(this.icon=Ve[e].icon,this.shortLabel=Ve[e].shortLabel,this.longLabel=Ve[e].longLabel,this.spanEV=Ve[e].spanEV,this.spanP=Ve[e].spanP,this.uiColor=Ve[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,t=>t[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async t=>{t.preventDefault(),t.stopPropagation();const n=e.querySelector("i");if(n){const r=n.className;n.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{n.className=r,e.disabled=!1}}})}render(){this.innerHTML=""}async _handleDoubleClickCopy(e){try{let n=this.getData().value;if(typeof n=="object"&&n!==null&&(n=JSON.stringify(n)),!n&&n!==0&&n!=="0")return;sessionStorage.setItem("doc_clipboard_value",n);try{await navigator.clipboard.writeText(n)}catch{console.warn("No se pudo copiar al portapapeles del sistema, pero sí al interno.")}this._showFloatingFeedback(e.pageX,e.pageY)}catch(t){console.error("Error al copiar:",t)}}_showFloatingFeedback(e,t){const n=document.createElement("div");n.textContent="¡Copiado!",n.style.position="absolute",n.style.left=`${e}px`,n.style.top=`${t-20}px`,n.style.background="#198754",n.style.color="white",n.style.padding="2px 8px",n.style.borderRadius="4px",n.style.fontSize="0.75rem",n.style.pointerEvents="none",n.style.zIndex="9999",n.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",n.style.opacity="1",n.style.transition="all 0.8s ease-out",n.style.transform="translate(-50%, 0)",document.body.appendChild(n),requestAnimationFrame(()=>{n.style.top=`${t-40}px`,n.style.opacity="0"}),setTimeout(()=>{document.body.contains(n)&&document.body.removeChild(n)},800)}}class kh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this.setAttribute("title",n.target.value)}}}customElements.define("setting-boolean",kh);const Gw=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:kh},Symbol.toStringTag,{value:"Module"}));class Lh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-chart",Lh);const Ww=Object.freeze(Object.defineProperty({__proto__:null,SettingChart:Lh},Symbol.toStringTag,{value:"Module"}));class Vh extends N{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("currency")||"$",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const i=r.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",i.trim()==="")},this.querySelector('input[data-prop="currency"]').oninput=r=>{this._isInternalUpdate=!0;const i=r.target.value;this.setAttribute("currency",i),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-currency",Vh);const Kw=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:Vh},Symbol.toStringTag,{value:"Module"}));class Dh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-date",Dh);const Qw=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:Dh},Symbol.toStringTag,{value:"Module"}));class Oh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-email",Oh);const Jw=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:Oh},Symbol.toStringTag,{value:"Module"}));class Mh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-number",Mh);const Yw=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:Mh},Symbol.toStringTag,{value:"Module"}));class Nh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-password",Nh);const Xw=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:Nh},Symbol.toStringTag,{value:"Module"}));class $h extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-percentage",$h);const Zw=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:$h},Symbol.toStringTag,{value:"Module"}));class Uh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-section",Uh);const eE=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:Uh},Symbol.toStringTag,{value:"Module"}));class Fh extends N{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("options")||"",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelectorAll("input, textarea").forEach(r=>{r.oninput=i=>{this._isInternalUpdate=!0;const o=i.target.dataset.prop;this.setAttribute(o,i.target.value),this._isInternalUpdate=!1,o==="title"&&i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}})}}customElements.define("setting-select",Fh);const tE=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:Fh},Symbol.toStringTag,{value:"Module"}));class Bh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-string",Bh);const nE=Object.freeze(Object.defineProperty({__proto__:null,SettingString:Bh},Symbol.toStringTag,{value:"Module"}));class jh extends N{constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",n=this._tempColumnsData?this._tempColumnsData.length:0,r=this.hasAttribute("prepend-rows");this.innerHTML=`
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
            <div class="d-flex justify-content-between align-items-end mb-1">
                <label class="form-label small fw-semibold text-body-secondary mb-0">Título de la Tabla *</label>
                
                <div class="form-check form-switch mb-0" title="Si se activa, los nuevos registros se agregan arriba">
                    <input class="form-check-input cursor-pointer" type="checkbox" id="check-prepend-${this.id}" data-prop="prepend-rows" ${r?"checked":""}>
                    <label class="form-check-label small fw-bold text-muted cursor-pointer" for="check-prepend-${this.id}" style="font-size: 0.75rem;">
                        Insertar filas al inicio
                    </label>
                </div>
            </div>

            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Tabla de Items">
            </div>
          </div>

          <div class="alert alert-light border d-flex justify-content-between align-items-center p-2 mb-0">
            <div class="small fw-bold text-body">
                <i class="fa-solid fa-columns text-body-secondary me-2"></i>
                <span id="col-counter-${this.id}">${n} columna${n!==1?"s":""} definida${n!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar Columnas
            </button>
          </div>
          
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=o=>{this._isInternalUpdate=!0;const l=o.target.value;this.setAttribute("title",l),this._isInternalUpdate=!1,o.target.classList.toggle("is-invalid",l.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal();const i=this.querySelector('input[data-prop="prepend-rows"]');i&&(i.onchange=o=>{o.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",n=this.hasAttribute("prepend-rows");return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-sliders me-1"></i> MÁS CONFIGURACIÓN
        </a>
        <div class="collapse" id="extra-${this.id}">
          
          <div class="p-2 bg-light border rounded mb-2 mt-2">
            <div class="form-check form-switch mb-0">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" 
                       id="check-prepend-${this.id}" data-prop="prepend-rows" ${n?"checked":""}>
                <label class="form-check-label small fw-bold text-body cursor-pointer" for="check-prepend-${this.id}" style="font-size: 0.75rem;">
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
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const n=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",n),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",n.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const r=`
      
      <style>
        .designer-item-wrapper.gu-mirror, 
        .designer-item-wrapper.is-dragging,
        .draggable-mirror {
            z-index: 1060 !important; 
        }
        .modal-body {
            overflow-x: hidden;
        }
      </style>
    
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
    `;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById(`toolbox-${this.id}`);Object.entries(Ve).forEach(([u,h])=>{if(u==="table")return;const f=document.createElement("button");f.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",f.style.minWidth="60px",f.title=h.longLabel,f.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${h.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${h.shortLabel}</span>
        `,f.onclick=()=>this._addChildComponent(u),i.appendChild(f)});const o=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(u=>{const h=this._createWrapper(u.tag.replace("setting-","")),f=h.querySelector(u.tag);f&&f.setData&&(f.setAttribute("table",""),f.setData(u)),o.appendChild(h)}):o.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const l=document.getElementById(e),c=new bootstrap.Modal(l);c.show(),l.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(o),this._updateCounter(),c.dispose(),l.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),n=t.querySelector("#empty-msg");n&&n.remove();const r=this._createWrapper(e);t.appendChild(r),r.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const n=document.createElement(`setting-${e}`);return n.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(n),t.querySelector(".btn-del-col").onclick=()=>t.remove(),ya.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(r=>{r.tagName.toLowerCase().startsWith("setting-")&&typeof r.getData=="function"&&t.push(r.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",jh);const sE=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:jh},Symbol.toStringTag,{value:"Module"}));class qh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-text",qh);const rE=Object.freeze(Object.defineProperty({__proto__:null,SettingText:qh},Symbol.toStringTag,{value:"Module"}));class Hh extends N{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const r=n.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-url",Hh);const iE=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:Hh},Symbol.toStringTag,{value:"Module"}));class zh extends N{render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const n=`
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
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",zh);const oE=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:zh},Symbol.toStringTag,{value:"Module"}));class Gh extends N{constructor(){super(),this._tempConfig={},this.chartInstance=null}render(){const e=this.getAttribute("title")||"Gráfico",t=this.getAttribute("edit-value");let n={type:"column",source:"manual",series:[]};try{t&&(n=JSON.parse(t))}catch{}const i={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",pie:"fa-chart-pie"}[n.type]||"fa-chart-simple",o=`chart-editor-${this.id}`,l=`
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
            <canvas id="${o}"></canvas>
          </div>

          <button class="btn btn-outline-primary btn-sm w-100 mt-3" id="btn-cfg-${this.id}">
            <i class="fa-solid fa-gear me-1"></i> Configurar Gráfico
          </button>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l);const c={addEventListener:()=>{},value:""};if(this._attachStyleEventListeners(c),this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(n),t&&n.series&&n.series.length>0)setTimeout(()=>{this._renderChart(o,n)},200);else{const u=this.querySelector(`#${o}`);if(u){const h=u.getContext("2d");h.fillStyle="#f8f9fa",h.fillRect(0,0,u.width,u.height),h.fillStyle="#6c757d",h.font="14px Arial",h.textAlign="center",h.fillText('Haga clic en "Configurar Gráfico" para añadir datos',u.width/2,u.height/2)}}}_renderChart(e,t){const n=document.getElementById(e);if(!n)return;this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null);const{labels:r,datasets:i}=this._processData(t);if(!i.length||!window.Chart)return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const o=t.type==="pie"?"pie":t.type==="line"?"line":"bar",l=t.type==="bar"?"y":"x",c=n.parentElement;let u=350;if(t.type==="bar"){const h=100+r.length*45;u=Math.max(350,h)}else t.type==="pie"&&(u=400);c.style.height=`${u}px`;try{this.chartInstance=new Chart(n,{type:o,data:{labels:r,datasets:i},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:t.type!=="pie",color:"#000",font:{weight:"bold",size:9},formatter:h=>Math.round(h*100)/100,anchor:"end",align:l==="y"?"end":"top"}}}})}catch(h){console.error("Error al renderizar gráfico en editor:",h)}}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"}];if(e.source==="manual")t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i),Array.isArray(e.series)&&(n=e.series.map((i,o)=>{const l=r[o%r.length],c=(i.data||"").split(",").map(u=>parseFloat(u)||0);return{label:i.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"&&c.length>0?r.slice(0,Math.min(c.length,r.length)).map(u=>u.bg):l.bg,borderColor:e.type==="pie"&&c.length>0?r.slice(0,Math.min(c.length,r.length)).map(u=>u.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0));else if(e.source==="table"&&e.tableId){const i=document.querySelector(`editor-table[field-id="${e.tableId}"]`);i&&i.rows&&i.rows.length>0?(e.labelColumnId?t=i.rows.map(o=>{const l=o.find(c=>c.fieldId===e.labelColumnId);return l?String(l.value):""}):t=i.rows.map((o,l)=>`${l+1}`),Array.isArray(e.series)&&(n=e.series.map((o,l)=>{const c=r[l%r.length],u=i.rows.map(h=>{const f=h.find(E=>E.fieldId===o.columnId),g=String(f?f.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(g)||0});return{label:o.name||`Serie ${l+1}`,data:u,backgroundColor:e.type==="pie"?r.map(h=>h.bg):c.bg,borderColor:e.type==="pie"?r.map(h=>h.border):c.border,borderWidth:1}}))):(t=["Sin Datos"],n=[{label:"Esperando datos...",data:[0],backgroundColor:"#e9ecef",borderColor:"#ced4da",borderWidth:1}])}return{labels:t,datasets:n}}_openConfigModal(e){var c;this._tempConfig=JSON.parse(JSON.stringify(e)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const t=`modal-chart-${this.id}`;(c=document.getElementById(t))==null||c.remove();const n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById(t),i=new bootstrap.Modal(r),o=document.getElementById(`cfg-type-${this.id}`);o.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),o.onchange=u=>{this._tempConfig.type=u.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(u=>u.onchange=h=>{this._tempConfig.source=h.target.value,this._tempConfig.series=[],this._renderDynamicArea(h.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),i.hide()},r.addEventListener("hidden.bs.modal",()=>r.remove()),i.show()}_renderDynamicArea(e){const t=document.getElementById(`cfg-area-${this.id}`);t.innerHTML="",e==="manual"?this._renderManualConfig(t):this._renderTableConfig(t)}_renderManualConfig(e){const t=this._tempConfig.type==="pie";e.innerHTML+=`
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
    `;const n=e.querySelector(`#series-list-${this.id}`);(()=>{n.innerHTML="",this._tempConfig.series.forEach((o,l)=>{const c=document.createElement("div");c.className="input-group input-group-sm",c.innerHTML=`
                <input autocomplete="off" spellcheck="false" type="text" class="form-control" placeholder="Nombre Serie" value="${o.name||""}" onchange="this.dataset.val = this.value">
                <input autocomplete="off" spellcheck="false" type="text" class="form-control w-50" placeholder="Valores (10, 20, 30...)" value="${o.data||""}" onchange="this.dataset.val = this.value">
                <button class="btn btn-outline-danger btn-del-serie"><i class="fa-solid fa-trash"></i></button>
            `;const u=c.querySelectorAll("input");u[0].oninput=h=>this._tempConfig.series[l].name=h.target.value,u[1].oninput=h=>this._tempConfig.series[l].data=h.target.value,c.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(l,1),this._renderDynamicArea("manual")},n.appendChild(c)})})();const i=e.querySelector(`#btn-add-serie-${this.id}`);i&&(i.onclick=()=>{this._tempConfig.series.push({name:t?"Datos":"",data:""}),this._renderDynamicArea("manual")}),e.querySelector(`#input-labels-${this.id}`).oninput=o=>{this._tempConfig.manualLabels=o.target.value}}_renderTableConfig(e){const t=document.getElementById("document-canvas"),n=Array.from(t.querySelectorAll("editor-table"));if(n.length===0){e.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let r='<option value="">-- Seleccionar Tabla --</option>';n.forEach(l=>{let c=l.getAttribute("title")||`Tabla ${l.getAttribute("field-id")}`;if(l.getData){const h=l.getData();h.title&&(c=h.title)}const u=this._tempConfig.tableId===l.getAttribute("field-id")?"selected":"";r+=`<option value="${l.getAttribute("field-id")}" ${u}>${c}</option>`}),e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">
                ${r}
            </select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const i=e.querySelector(`#select-table-${this.id}`),o=()=>{const l=this._tempConfig.tableId,c=e.querySelector(`#table-cols-area-${this.id}`);if(c.innerHTML="",!l)return;const u=n.find(x=>x.getAttribute("field-id")===l);if(!u||!u.columns)return;const h=u.columns,f=h.filter(x=>["setting-number","setting-currency","setting-percentage"].includes(x.tag));let g='<option value="">-- (Fila #) --</option>';h.forEach(x=>{const B=this._tempConfig.labelColumnId===x.id?"selected":"";g+=`<option value="${x.id}" ${B}>${x.title}</option>`}),c.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">
                    ${g}
                </select>
            </div>
        `;const E=this._tempConfig.type==="pie";c.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!E||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const C=c.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((x,B)=>{let z='<option value="">-- Seleccionar Columna --</option>';f.forEach(he=>{const ne=x.columnId===he.id?"selected":"";z+=`<option value="${he.id}" ${ne}>${he.title}</option>`});const j=document.createElement("div");j.className="input-group input-group-sm",j.innerHTML=`
                <span class="input-group-text bg-white"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select">${z}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `;const re=j.querySelector("select");re.onchange=he=>{const ne=he.target.value,w=f.find(y=>y.id===ne);this._tempConfig.series[B].columnId=ne,this._tempConfig.series[B].name=w?w.title:"Serie "+(B+1)},j.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(B,1),o()},C.appendChild(j)});const k=c.querySelector(`#btn-add-tbl-serie-${this.id}`);k&&(k.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),o()}),c.querySelector(`#select-label-col-${this.id}`).onchange=x=>{this._tempConfig.labelColumnId=x.target.value}};this._tempConfig.tableId&&o(),i.onchange=l=>{this._tempConfig.tableId=l.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",o()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const e=document.getElementById(`input-labels-${this.id}`);e&&(this._tempConfig.manualLabels=e.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const e=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(e&&e.rows){if(this._tempConfig.labelColumnId){const t=e.rows.map(n=>{const r=n.find(i=>i.fieldId===this._tempConfig.labelColumnId);return r?String(r.value).replace(/,/g," "):""});this._tempConfig.manualLabels=t.join(", ")}else this._tempConfig.manualLabels=e.rows.map((t,n)=>n+1).join(", ");this._tempConfig.series.forEach(t=>{const n=e.rows.map(r=>{const i=r.find(l=>l.fieldId===t.columnId),o=String(i?i.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(o)||0});t.data=n.join(", ")})}}}}customElements.define("editor-chart",Gh);const aE=Object.freeze(Object.defineProperty({__proto__:null,EditorChart:Gh},Symbol.toStringTag,{value:"Module"}));class ui extends N{_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`form-control form-control-sm shadow-none ${r?"bg-light text-muted":""}`,l=r?"readonly":"",c=r?"Calculado...":"0.00",u=`
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
          <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                 id="input-${this.id}" value="${t}" style="${n}" 
                 placeholder="${c}"
                 ${l}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(u),r||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let n=e.value.trim();if(n!=="")try{const r=n.replace(/,/g,"."),i=new Function(`"use strict"; return (${r})`)();!isNaN(i)&&isFinite(i)&&(e.value=i,this.setAttribute("edit-value",i),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=n=>{n.key==="Enter"&&(n.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",ui);const lE=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:ui},Symbol.toStringTag,{value:"Module"}));class Wh extends ui{render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",n=this.getAttribute("currency")||"$",r=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),o=`form-control shadow-none border-1 ${i?"bg-light text-muted":""}`,l=i?"readonly":"",c=this.getAttribute("api-url")?this.renderApiRefreshButton():"",u=`
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
            <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                   id="input-${this.id}" value="${t}" style="${r}" 
                   placeholder="0.00"
                   ${l}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(u),i||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}}customElements.define("editor-currency",Wh);const cE=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:Wh},Symbol.toStringTag,{value:"Module"})),jr=class jr extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||jr.getToday(),n=this.getCommonStyles(),r=`
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
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};vl(jr,"getToday",()=>new Date().toISOString().split("T")[0]);let Br=jr;customElements.define("editor-date",Br);const dE=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:Br},Symbol.toStringTag,{value:"Module"}));class Kh extends N{render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=`
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
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",Kh);const uE=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:Kh},Symbol.toStringTag,{value:"Module"}));class Qh extends N{render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",n=`
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
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",Qh);const hE=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:Qh},Symbol.toStringTag,{value:"Module"}));class Jh extends ui{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`
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
    `;this.innerHTML=this.renderViewerStructure(o),r||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",Jh);const pE=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:Jh},Symbol.toStringTag,{value:"Module"}));class Yh extends N{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",Yh);const fE=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:Yh},Symbol.toStringTag,{value:"Module"}));class Xh extends N{render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",r=(this.getAttribute("options")||"").split(",").map(c=>c.trim()).filter(c=>c!==""),i=this.getCommonStyles(),o=this.getAttribute("api-url")?this.renderApiRefreshButton():"",l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-caret-down me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${o}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${i}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${r.map(c=>`<option value="${c}" ${t===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",Xh);const mE=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:Xh},Symbol.toStringTag,{value:"Module"}));class Zh extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
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
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",Zh);const gE=Object.freeze(Object.defineProperty({__proto__:null,EditorString:Zh},Symbol.toStringTag,{value:"Module"}));class ep extends N{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_applyApiValue(e){let t=[];if(Array.isArray(e))t=e;else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=[]}else typeof e=="object"&&e!==null&&(t=[e]);if(t.length===0)return;Array.isArray(t[0])?this.rows=t:this.rows=this._mapExternalDataToRows(t),this.setAttribute("edit-value",JSON.stringify(this.rows)),this._renderRows(),this._dispatchChange()}_mapExternalDataToRows(e){return e.map(t=>this.columns.map(n=>{let r=t[n.title];if(r===void 0){const i=Object.keys(t).find(o=>o.toLowerCase()===n.title.toLowerCase());i&&(r=t[i])}return r===void 0&&(r=t[n.id]),r==null&&(r=""),typeof r=="object"&&(r=JSON.stringify(r)),{fieldId:n.id,value:r}}))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=`
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
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>this._exportCSV();const t=this.querySelector(`#file-import-${this.id}`);this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>t.click(),t.onchange=n=>this._importCSV(n)}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this.columns.forEach(n=>{const r=n.alignment||"left",i=this._sortFieldId===n.id;let o='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';i&&(o=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),t+=`
      <th class="fw-bold px-3 py-2 border-bottom col-sortable" 
          data-col-id="${n.id}" 
          style="text-align: ${r}; cursor: pointer; user-select: none;">
          ${n.title} ${o}
      </th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t,e.querySelectorAll(".col-sortable").forEach(n=>{n.onclick=()=>{const r=n.dataset.colId;this._sortFieldId===r?this._sortAsc=!this._sortAsc:(this._sortFieldId=r,this._sortAsc=!0),this._renderHeader(),this._renderRows()}})}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;if(e.innerHTML="",this._sortFieldId){const n=this.columns.find(i=>i.id===this._sortFieldId),r=n?["setting-number","setting-currency","setting-percentage"].includes(n.tag):!1;this.rows.sort((i,o)=>{const l=i.find(g=>g.fieldId===this._sortFieldId),c=o.find(g=>g.fieldId===this._sortFieldId);let u=l?l.value:"",h=c?c.value:"",f=0;return r?f=(parseFloat(u)||0)-(parseFloat(h)||0):f=String(u).localeCompare(String(h)),this._sortAsc?f:f*-1}),this._dispatchChange()}let t=this.rows.map((n,r)=>({data:n,originalIndex:r}));if(this._searchTerm.trim()){const n=this._searchTerm.toLowerCase().split(/\s+/).filter(r=>r);t=t.filter(r=>{const i=r.data.map(o=>String(o.value).toLowerCase()).join(" ");return n.every(o=>i.includes(o))})}t.forEach(n=>{const{data:r,originalIndex:i}=n,o=document.createElement("tr");o.setAttribute("data-original-index",i);const l=document.createElement("td"),c=!this._searchTerm&&!this._sortFieldId;c?(l.className="drag-handle text-center text-muted align-middle cursor-grab py-2",l.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(l.className="text-center text-muted align-middle py-2 small opacity-50",l.innerHTML=this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',l.title="Orden automático activo"),o.appendChild(l),this.columns.forEach(h=>{const f=document.createElement("td"),g=h.alignment||"left";f.className="px-3 py-2",f.style.textAlign=g;const E=r.find(B=>B.fieldId===h.id),C=h.tag.replace("setting-","viewer-"),k=document.createElement(C);k.setAttribute("table","");const x={...E,title:"",spanEV:12};k.setData&&k.setData(x),f.appendChild(k),o.appendChild(f)});const u=document.createElement("td");u.className="text-end px-3 py-2",u.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,u.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(i),u.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(i,1),this._renderRows(),this._dispatchChange())},o.appendChild(u),e.appendChild(o),c&&ya.init(o,".drag-handle",()=>this._handleReorder())}),this._renderFooter(t.map(n=>n.data))}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(r=>{const i=parseInt(r.getAttribute("data-original-index"));!isNaN(i)&&this.rows[i]&&t.push(this.rows[i])}),t.length===this.rows.length&&(this.rows=t)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let r="<tr><td></td>";this.columns.forEach(i=>{const o=i.alignment||"left";let l="";if(i.total){const c=e.reduce((f,g)=>{const E=g.find(k=>k.fieldId===i.id),C=parseFloat(E?E.value:0);return f+(isNaN(C)?0:C)},0),h=`id="${`TOTAL_${this.id}_${i.id}`}" data-raw-value="${c}"`;if(i.tag==="setting-currency"){const f=i.currency||"$";l=`<span ${h}>${f} ${c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`}else i.tag==="setting-percentage"?l=`<span ${h}>${c}%</span>`:l=`<span ${h}>${c}</span>`}r+=`<td class="px-3 py-2" style="text-align: ${o};">${l}</td>`}),r+="<td></td></tr>",t.innerHTML=r}_dispatchChange(){setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_exportCSV(){if(this.rows.length===0)return alert("No hay datos para exportar.");let e=[];this.columns.forEach(c=>{c.tag==="setting-url"?(e.push(`"${c.title} (Texto)"`),e.push(`"${c.title} (URL)"`)):e.push(`"${c.title}"`)});const n=this.rows.map(c=>this.columns.map(u=>{const h=c.find(g=>g.fieldId===u.id);let f=h?h.value:"";if(u.tag==="setting-url"){let g="",E="";try{const C=JSON.parse(f);g=C.text||"",E=C.url||""}catch{}return{isUrl:!0,text:g,url:E}}return f=String(f).replace(/"/g,'""'),{isUrl:!1,val:f}})).map(c=>c.map(u=>u.isUrl?`"${u.text.replace(/"/g,'""')}","${u.url.replace(/"/g,'""')}"`:`"${u.val}"`).join(",")).join(`
`),r=e.join(",")+`
`+n,i=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(i),l=document.createElement("a");l.setAttribute("href",o),l.setAttribute("download",`tabla_export_${Date.now()}.csv`),document.body.appendChild(l),l.click(),document.body.removeChild(l)}_importCSV(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=r=>{this._parseAndLoadCSV(r.target.result),e.target.value=""},n.readAsText(t)}_parseAndLoadCSV(e){const t=e.split(/\r?\n/).filter(o=>o.trim()!=="");if(t.length<2)return alert("El archivo CSV no tiene datos válidos.");const n=o=>{const l=[];let c=0,u=!1;for(let f=0;f<o.length;f++)if(o[f]==='"')u=!u;else if(o[f]===","&&!u){let g=o.substring(c,f);g.startsWith('"')&&g.endsWith('"')&&(g=g.slice(1,-1)),l.push(g.replace(/""/g,'"')),c=f+1}let h=o.substring(c);return h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),l.push(h.replace(/""/g,'"')),l},r=[];this.columns.forEach(o=>{o.tag==="setting-url"?(r.push({colDef:o,type:"url-text"}),r.push({colDef:o,type:"url-url"})):r.push({colDef:o,type:"normal"})});const i=[];for(let o=1;o<t.length;o++){const l=n(t[o]);if(l.length!==r.length)continue;const c={};l.forEach((h,f)=>{const g=r[f];if(!g)return;const E=g.colDef.id;c[E]||(c[E]={fieldId:E,tag:g.colDef.tag}),g.type==="normal"?c[E].value=h:g.type==="url-text"?c[E].tempText=h:g.type==="url-url"&&(c[E].tempUrl=h)});const u=Object.values(c).map(h=>h.tag==="setting-url"?{fieldId:h.fieldId,value:JSON.stringify({text:h.tempText||"",url:h.tempUrl||""})}:{fieldId:h.fieldId,value:h.value});i.push(u)}i.length>0?(this.hasAttribute("prepend-rows")?this.rows=[...i.reverse(),...this.rows]:this.rows=[...this.rows,...i],this._renderRows(),this._dispatchChange(),alert(`Se importaron ${i.length} registros correctamente.`)):alert("No se pudieron importar registros. Verifique formato.")}_openFormModal(e=null){var u;const t=e!==null,n=`modal-form-${this.id}`;(u=document.getElementById(n))==null||u.remove();const r=`
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
    `;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById(`form-container-${this.id}`);this.columns.forEach(h=>{const f=h.tag.replace("setting-","editor-"),g=document.createElement(f);g.setAttribute("table",""),g.setAttribute("field-id",h.id);let E={title:h.title,spanEV:12,options:h.options,currency:h.currency,formula:h.formula,isCalculated:h.isCalculated};if(t){const C=this.rows[e].find(k=>k.fieldId===h.id);C&&(E={...E,...C})}g.setData&&g.setData(E),i.appendChild(g)});const o=()=>{const h=Array.from(i.children);h.forEach(f=>{if(!f.hasAttribute("is-calculated"))return;const g=f.getAttribute("formula");if(g)try{const E=g.replace(/@\{([^}]+)\}/g,(k,x)=>{const B=h.find(j=>j.getAttribute("field-id")===x);if(B){const j=B.querySelector("input");if(j){const re=j.value.replace(/,/g,".");return parseFloat(re)||0}}const z=document.getElementById(`input-${x}`);if(z){const j=z.value.replace(/,/g,".");return parseFloat(j)||0}if(x.startsWith("TOTAL_")){const j=document.getElementById(x);return j&&parseFloat(j.dataset.rawValue)||0}return 0}),C=new Function(`"use strict"; return (${E})`)();if(isFinite(C)&&!isNaN(C)){const k=f.querySelector("input");if(k){const x=Math.round(C*100)/100;k.value=x,f.setAttribute("edit-value",x)}}}catch(E){console.warn("[Table Calculation Error]",E)}})};i.addEventListener("input",o),setTimeout(o,100);const l=document.getElementById(n),c=new bootstrap.Modal(l);c.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const f=Array.from(i.children).map(g=>{const E=g.getData();return E.fieldId=g.getAttribute("field-id"),E});t?this.rows[e]=f:this.hasAttribute("prepend-rows")?this.rows.unshift(f):this.rows.push(f),this._renderRows(),this._dispatchChange(),c.hide(),l.addEventListener("hidden.bs.modal",()=>l.remove())}}}customElements.define("editor-table",ep);const yE=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:ep},Symbol.toStringTag,{value:"Module"}));class tp extends N{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
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
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-text",tp);const bE=Object.freeze(Object.defineProperty({__proto__:null,EditorText:tp},Symbol.toStringTag,{value:"Module"}));class np extends N{connectedCallback(){super.connectedCallback(),this._initApiFetch()}_applyApiValue(e){const t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}n.url=e,this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(n)),this._isInternalUpdate=!1,this.render()}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}const r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",i=`
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
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#text-${this.id}`),t=this.querySelector(`#url-${this.id}`);this._attachStyleEventListeners(e);const n=()=>{this._isInternalUpdate=!0;const r=JSON.stringify({text:e.value,url:t.value});this.setAttribute("edit-value",r),this._isInternalUpdate=!1};e.oninput=n,t.oninput=n}}customElements.define("editor-url",np);const vE=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:np},Symbol.toStringTag,{value:"Module"}));class sp extends N{render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",sp);const _E=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:sp},Symbol.toStringTag,{value:"Module"}));class rp extends N{constructor(){super(),this.chartInstance=null}render(){const e=this.getAttribute("edit-value");if(!e){this.innerHTML="";return}let t={};try{t=JSON.parse(e)}catch{return}const n=`chart-canvas-${this.id}`,r=`
      <div style="position: relative; height: 350px; width: 100%;">
        <canvas id="${n}"></canvas>
      </div>`;this.innerHTML=this.renderViewerStructure(r),setTimeout(()=>{this._buildChart(n,t)},100)}async _buildChart(e,t){const n=document.getElementById(e);if(!n)return;window.Chart||await O(()=>import("https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"),[],import.meta.url),window.ChartDataLabels||await O(()=>import("https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"),[],import.meta.url),this.chartInstance&&this.chartInstance.destroy();const{labels:r,datasets:i}=this._processData(t);if(!i.length){console.warn("[ViewerChart] No hay datos para renderizar");return}let o="bar",l="x";t.type==="bar"?(o="bar",l="y"):t.type==="column"?(o="bar",l="x"):t.type==="line"?o="line":t.type==="pie"&&(o="pie");const c=n.parentElement;let u=350;if(o==="bar"&&l==="y"){const h=80+r.length*40;u=Math.max(350,h)}else o==="pie"&&(u=400);c&&(c.style.height=`${u}px`),Chart.register(ChartDataLabels),this.chartInstance=new Chart(n,{type:o,data:{labels:r,datasets:i},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom"},datalabels:{color:h=>t.type==="pie"?"#fff":"#000",font:{weight:"bold",size:10},formatter:h=>Math.round(h*100)/100,display:h=>h.dataset.data[h.dataIndex]!==0,anchor:"end",align:l==="y"?"end":"top",offset:4}},scales:o==="pie"?{}:{y:{beginAtZero:!0},x:{beginAtZero:!0}}}})}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"},{bg:"rgba(255, 159, 64, 0.7)",border:"rgba(255, 159, 64, 1)"}];return t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i!==""),Array.isArray(e.series)&&(n=e.series.map((i,o)=>{const l=r[o%r.length],c=(i.data||"").split(",").map(u=>parseFloat(u)||0);return{label:i.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?r.map(u=>u.bg):l.bg,borderColor:e.type==="pie"?r.map(u=>u.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0)),{labels:t,datasets:n}}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value");if(!t)return"";let n=JSON.parse(t);const{labels:r,datasets:i}=this._processData(n);let o=`*📊 ${e}*
`;return i.length?(i.forEach(l=>{o+=`
*${l.label}*:
`,l.data.forEach((c,u)=>{o+=`- ${r[u]||"Item"}: ${c}
`})}),o):o+"_(Sin datos)_"}}customElements.define("viewer-chart",rp);const wE=Object.freeze(Object.defineProperty({__proto__:null,ViewerChart:rp},Symbol.toStringTag,{value:"Module"}));class ip extends N{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getCommonStyles(),r=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),i=`<div class="py-1" style="${n}"> 
          <span class="opacity-75 me-1">${t}</span>${r}
        </div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),n=this.getAttribute("currency")||"$",r=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${n} ${r}`}}customElements.define("viewer-currency",ip);const EE=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:ip},Symbol.toStringTag,{value:"Module"}));class op extends N{render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let n="---";e&&(n=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`<div class="py-1" style="${t}">${n}</div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),n=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${n}`}}customElements.define("viewer-date",op);const IE=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:op},Symbol.toStringTag,{value:"Module"}));class ap extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),n=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-email",ap);const TE=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:ap},Symbol.toStringTag,{value:"Module"}));class lp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-number",lp);const AE=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:lp},Symbol.toStringTag,{value:"Module"}));class cp extends N{render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
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
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",cp);const SE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:cp},Symbol.toStringTag,{value:"Module"}));class dp extends N{render(){const e=this.getAttribute("edit-value")||"0",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",dp);const CE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:dp},Symbol.toStringTag,{value:"Module"}));class up extends N{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong class="mt-3">${e}</strong><hr>`}}customElements.define("viewer-section",up);const PE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:up},Symbol.toStringTag,{value:"Module"}));class hp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-select",hp);const RE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:hp},Symbol.toStringTag,{value:"Module"}));class pp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}customElements.define("viewer-string",pp);const xE=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:pp},Symbol.toStringTag,{value:"Module"}));class fp extends N{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
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
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],n=(this.columns||[]).filter(u=>!u.hideWhatsapp);if(n.length===0)return`*${e}:* (Sin columnas visibles)`;if(t.length===0)return`*${e}:* (Sin datos)`;const r=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),i=(u,h)=>{const f=u.find(E=>E.fieldId===h.id);let g=f?String(f.value):"";if((g==="null"||g==="undefined")&&(g=""),h.tag==="setting-currency")g=`$ ${parseFloat(g||0).toFixed(2)}`;else if(h.tag==="setting-percentage")g=`${g}%`;else if(h.tag==="setting-boolean")g=g==="true"?"SI":"NO";else if(h.tag==="setting-url")try{const E=JSON.parse(g);let C=E.url||"";if(C){C.startsWith("http")||(C="https://"+C);try{C=encodeURI(decodeURI(C))}catch{C=encodeURI(C)}}g=E.text?`${E.text} (${C})`:C}catch{}return g},o=n.map(u=>{let h=u.title.length;return t.forEach(f=>{const g=i(f,u);g.length>h&&(h=g.length)}),h}),l=o.reduce((u,h)=>u+h,0)+n.length*3;let c=`
*${e}*:
`;return l>r?t.forEach((u,h)=>{c+=`_Item ${h+1}_
`,n.forEach(f=>{const g=i(u,f);c+=`${f.title}: ${g}
`}),c+=`
`}):(c+="```\n",c+=n.map((u,h)=>u.title.padEnd(o[h])).join(" | ")+`
`,c+=n.map((u,h)=>"-".repeat(o[h])).join("-|-")+`
`,t.forEach(u=>{c+=n.map((h,f)=>i(u,h).padEnd(o[f])).join(" | ")+`
`}),c+="```\n"),c}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows();const r=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!r){this.render();const i=this.querySelector(`#search-${this.id}`);i.focus(),i.setSelectionRange(i.value.length,i.value.length)}else!this._searchTerm&&r&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(e){if(this.columns.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",this.columns.forEach(t=>{const n=document.createElement("th"),r=t.alignment||(this._isNumeric(t.tag)?"right":"left");n.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",n.style.textAlign=r==="right"?"right":r==="center"?"center":"left",n.style.cursor="pointer",n.title="Click para ordenar";let i='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===t.id&&(this._sortAsc?i='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':i='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),n.innerHTML=`<span>${t.title}</span>${i}`,n.onclick=()=>{this._sortFieldId===t.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=t.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(n)})}}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let n=[...this.rows];if(this._searchTerm.trim()){const r=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);n=n.filter(i=>{const o=i.map(l=>{let c=l.value;if(typeof c=="string"&&c.startsWith("{")&&c.includes('"url"'))try{c=JSON.parse(c).text}catch{}return String(c||"").toLowerCase()}).join(" ");return r.every(l=>o.includes(l))})}if(this._sortFieldId){const r=this.columns.find(o=>o.id===this._sortFieldId),i=r?this._isNumeric(r.tag):!1;n.sort((o,l)=>{const c=o.find(E=>E.fieldId===this._sortFieldId),u=l.find(E=>E.fieldId===this._sortFieldId);let h=c?c.value:"",f=u?u.value:"",g=0;if(i){const E=parseFloat(h)||0,C=parseFloat(f)||0;g=E-C}else{if(r&&r.tag==="setting-url"){try{h=JSON.parse(h).text||""}catch{}try{f=JSON.parse(f).text||""}catch{}}g=String(h).localeCompare(String(f))}return this._sortAsc?g:g*-1})}if(n.length===0){t&&(t.style.display="block"),this._renderFooter(n);return}t&&(t.style.display="none"),n.forEach(r=>{const i=document.createElement("tr");this.columns.forEach(o=>{const l=document.createElement("td"),c=o.alignment||(this._isNumeric(o.tag)?"right":"left");l.style.textAlign=c==="right"?"right":c==="center"?"center":"left",l.className="px-3 py-2";const u=r.find(E=>E.fieldId===o.id),h=o.tag.replace("setting-","viewer-"),f=document.createElement(h);f.setAttribute("table","");const g={...u,title:"",spanEV:12,options:o.options,currency:o.currency};f.setData&&f.setData(g),l.appendChild(f),i.appendChild(l)}),e.appendChild(i)}),this._renderFooter(n)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let r="<tr>";this.columns.forEach(i=>{const o=i.alignment||(this._isNumeric(i.tag)?"right":"left"),l=o==="right"?"right":o==="center"?"center":"left";let c="";if(i.total){const u=e.reduce((h,f)=>{const g=f.find(C=>C.fieldId===i.id),E=parseFloat(g?g.value:0);return h+(isNaN(E)?0:E)},0);i.tag==="setting-currency"?c=`${i.currency||"$"} ${u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:i.tag==="setting-percentage"?c=`${u}%`:c=u}r+=`<td class="px-3 py-2" style="text-align: ${l};">${c}</td>`}),r+="</tr>",t.innerHTML=r}}customElements.define("viewer-table",fp);const kE=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:fp},Symbol.toStringTag,{value:"Module"}));class mp extends N{render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()} white-space: pre-wrap;">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`
*${e}*
> ${t.replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",mp);const LE=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:mp},Symbol.toStringTag,{value:"Module"}));class gp extends N{render(){const e=this.getAttribute("edit-value");let t={url:"#",text:"---"};try{e&&(t=JSON.parse(e))}catch{}let n=t.url||"#";n&&n!=="#"&&(n=n.trim(),n.startsWith("http")||(n="https://"+n));const r=this._checkExtension(n,["mp3","wav","ogg","m4a"]),i=this._checkExtension(n,["jpg","jpeg","png","gif","webp","svg"]),o=this._checkVideo(n),l=this._checkInternalDoc(n),c=`<div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(r,i,o,l)}
          <a href="${n}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
            <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${t.text||t.url||"---"}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(c),this._attachEvents(n,t.text,r,i,o,l)}_checkExtension(e,t){if(!e||e==="#")return!1;const n=e.split("?")[0].toLowerCase();return t.some(r=>n.endsWith("."+r))}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],n=e.split("?")[0].toLowerCase();if(t.some(l=>n.endsWith("."+l)))return{isVideo:!0,type:"file"};const i=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(i);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}_checkInternalDoc(e){if(!e||e==="#")return null;const t=/\/document\/(doc_\d+)/,n=e.match(t);return n&&n[1]?{isInternal:!0,docId:n[1]}:null}_renderActionButton(e,t,n,r){if(r&&r.isInternal)return`<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento">
                <i class="fa-solid fa-file-contract"></i>
              </button>`;if(e)return`<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
              </button>`;if(t)return`<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen">
                <i class="fa-regular fa-image"></i>
              </button>`;if(n&&n.isVideo){const i=n.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${n.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video">
                <i class="${i}"></i>
              </button>`}return""}_attachEvents(e,t,n,r,i,o){if(o&&o.isInternal){const l=this.querySelector(".btn-view-doc");l&&(l.onclick=()=>this._showDocModal(o.docId,t))}if(n){const l=this.querySelector(".btn-play-audio");l&&(l.onclick=()=>this._playAudio(e,t))}if(r){const l=this.querySelector(".btn-view-image");l&&(l.onclick=()=>this._showImageModal(e,t))}if(i&&i.isVideo){const l=this.querySelector(".btn-view-video");l&&(l.onclick=()=>this._showVideoModal(e,t,i))}}async _showDocModal(e,t){const n=document.getElementById("internal-doc-modal");n&&n.remove();const r="internal-doc-title-lbl",i=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${r}" style="max-width: 90%;">
                    <i class="fa-solid fa-file-contract me-2"></i>Cargando...
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light" id="internal-doc-body" style="min-height: 300px;">
                </div>
             ${t?`<div class="modal-footer py-1 bg-white small text-muted justify-content-start">${t}</div>`:""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const o=document.getElementById("internal-doc-modal"),l=document.getElementById("internal-doc-body");new bootstrap.Modal(o).show();const u=yr.renderReadOnly(e,l);try{const h=await F.getOne("doc",e);if(h&&h.title){const f=document.getElementById(r);f&&(f.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${h.title}`)}}catch(h){console.error("Error recuperando título:",h)}await u,o.addEventListener("hidden.bs.modal",()=>o.remove())}_showVideoModal(e,t,n){const r=document.getElementById("media-preview-modal");r&&r.remove();let i="";n.type==="youtube"?i=`
        <div class="ratio ratio-16x9 shadow rounded overflow-hidden">
            <iframe src="${`https://www.youtube.com/embed/${n.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>`:i=`
        <video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;">
            <source src="${e}">
            Tu navegador no soporta video.
        </video>`;const o=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" aria-label="Close" style="filter: invert(1);"></button>
              ${i}
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const l=document.getElementById("media-preview-modal");new bootstrap.Modal(l).show(),l.addEventListener("hidden.bs.modal",()=>l.remove())}_playAudio(e,t){let n=document.getElementById("global-audio-player");if(!n){if(n=document.createElement("div"),n.id="global-audio-player",n.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const o=document.createElement("style");o.id="audio-anim-style",o.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(o)}document.body.appendChild(n)}n.innerHTML=`
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
          </audio>
      </div>
    `;const r=n.querySelector("audio"),i=n.querySelector("#audio-loading");r.onloadstart=()=>{i.style.display="block"},r.oncanplay=()=>{i.style.display="none"},r.load(),r.play().catch(o=>console.log("Autoplay bloqueado:",o)),n.querySelector("#close-audio").onclick=()=>n.remove()}_showImageModal(e,t){const n=document.getElementById("media-preview-modal");n&&n.remove();const r=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
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
    `;document.body.insertAdjacentHTML("beforeend",r);const i=document.getElementById("media-preview-modal");new bootstrap.Modal(i).show(),i.addEventListener("hidden.bs.modal",()=>i.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const n=JSON.parse(t);let r=n.url||"";if(r){r.startsWith("http")||(r="https://"+r);try{r=encodeURI(decodeURI(r))}catch{r=encodeURI(r)}}t=n.text?`${n.text} (${r})`:r}catch{}return`*${e}:* ${t}`}}customElements.define("viewer-url",gp);const VE=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:gp},Symbol.toStringTag,{value:"Module"}));class yp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=e==="true",o=`
        <div style="color: ${n?"#198754":"#dc3545"}; font-size: 1.1rem; padding: 2px 0; font-weight: bold;">
            ${n?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(o,t)}}customElements.define("printer-boolean",yp);const DE=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:yp},Symbol.toStringTag,{value:"Module"}));class bp extends N{constructor(){super(),this.chartInstance=null}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._renderChart(),100)}render(){this.getAttribute("edit-value");const e=this.getAttribute("type")||"Visual",n=`
      <div style="width: 100%; height: 300px; page-break-inside: avoid;">
        <canvas id="${`print-chart-${this.id}`}"></canvas>
      </div>`;this.innerHTML=this.renderPrinterStructure(n,e)}async _renderChart(){const e=this.getAttribute("edit-value");if(!e)return;const t=`print-chart-${this.id}`,n=this.querySelector(`#${t}`);if(!n)return;let r;try{r=JSON.parse(e)}catch(l){console.error("Error parsing chart config:",l);return}window.Chart||await this._loadChartJS(),this.chartInstance&&this.chartInstance.destroy();const{labels:i,datasets:o}=this._processData(r);if(!o.length){this._drawPlaceholder(n,"Sin datos para mostrar");return}try{const l=r.type==="pie"?"pie":r.type==="line"?"line":"bar",c=r.type==="bar"?"y":"x",u=n.parentElement;let h=300;if(r.type==="bar"){const f=80+i.length*35;h=Math.max(300,f)}else r.type==="pie"&&(h=350);u&&(u.style.height=`${h}px`),this.chartInstance=new Chart(n,{type:l,data:{labels:i,datasets:o},options:{indexAxis:c,animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:!0,color:"#000",font:{weight:"bold",size:9},formatter:f=>Math.round(f*100)/100,anchor:"end",align:c==="y"?"end":"top",offset:2}},scales:l==="pie"?{}:{y:{beginAtZero:!0,ticks:{font:{size:9}}},x:{beginAtZero:!0,ticks:{font:{size:9}}}}}})}catch(l){console.error("Error al renderizar gráfico para impresión:",l),this._drawPlaceholder(n,"Error al renderizar gráfico")}}_processData(e){let t=[],n=[];const r=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"}];return t=(e.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i!==""),Array.isArray(e.series)&&(n=e.series.map((i,o)=>{const l=r[o%r.length],c=(i.data||"").split(",").map(u=>parseFloat(u)||0);return{label:i.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?r.map(u=>u.bg):l.bg,borderColor:e.type==="pie"?r.map(u=>u.border):l.border,borderWidth:1}}).filter(i=>i.data.length>0)),{labels:t,datasets:n}}_drawPlaceholder(e,t){const n=e.getContext("2d");n.fillStyle="#f8f9fa",n.fillRect(0,0,e.width,e.height),n.fillStyle="#6c757d",n.font="14px Arial",n.textAlign="center",n.fillText(t,e.width/2,e.height/2)}async _loadChartJS(){return new Promise(e=>{if(window.Chart){e();return}const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",t.onload=e,document.head.appendChild(t)})}}customElements.define("printer-chart",bp);const OE=Object.freeze(Object.defineProperty({__proto__:null,PrinterChart:bp},Symbol.toStringTag,{value:"Module"}));class vp extends N{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getAttribute("type")||"Visual",r=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),o=`
        <div style="${r} font-size: 1.05rem; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${i}
        </div>`;this.innerHTML=this.renderPrinterStructure(o,n)}}customElements.define("printer-currency",vp);const ME=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:vp},Symbol.toStringTag,{value:"Module"}));class _p extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let r="---";e&&(r=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`
        <div style="${n} font-size: 1.05rem; padding: 2px 0;">
            ${r}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-date",_p);const NE=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:_p},Symbol.toStringTag,{value:"Module"}));class wp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-email",wp);const $E=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:wp},Symbol.toStringTag,{value:"Module"}));class Ep extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-number",Ep);const UE=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:Ep},Symbol.toStringTag,{value:"Module"}));class Ip extends N{render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",Ip);const FE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:Ip},Symbol.toStringTag,{value:"Module"}));class Tp extends N{render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let r="1.05rem";t==="Facil Lectura"&&(r="1.3rem");const i=`
      <div style="${n} font-size: ${r}; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-percentage",Tp);const BE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:Tp},Symbol.toStringTag,{value:"Module"}));class Ap extends N{render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",Ap);const jE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:Ap},Symbol.toStringTag,{value:"Module"}));class Sp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-select",Sp);const qE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:Sp},Symbol.toStringTag,{value:"Module"}));class Cp extends N{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-string",Cp);const HE=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:Cp},Symbol.toStringTag,{value:"Module"}));class Pp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns");this.getAttribute("title");const n=this.getAttribute("type")||"Visual";let r=[],i=[];try{e&&(r=JSON.parse(e)),t&&(i=JSON.parse(t))}catch(g){console.warn("Error parseando tabla",g)}const o=i.filter(g=>!g.hidePrint),l=n==="Compacto",c=n==="Facil Lectura",u=`width: 100%; border-collapse: collapse; font-size: ${l?"0.70rem":c?"1rem":"0.0.70rem"};`,h=l||c?"1px":"10px",f=`
      <table style="${u}">
        <thead>
          <tr style="background-color: #f8f9fa;">
            ${o.map(g=>`
              <th style="padding: ${h}; border: 1px solid #dee2e6; text-align: ${g.alignment||"left"}; text-transform: uppercase; font-size: 0.7rem;">
                ${g.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${r.length>0?r.map((g,E)=>`
            <tr style="background-color: ${E%2===0?"#fff":"#fcfcfc"};">
               ${o.map(C=>{const k=g.find(x=>x.fieldId===C.id)||{};return`
                  <td style="padding: ${h}; border: 1px solid #dee2e6; text-align: ${C.alignment||"left"};">
                    ${this._generateCellHTML(C,k,n)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${i.length}" style="text-align:center; padding: 20px;">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(r,i,h)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(f,n)}_renderTotalRow(e,t,n){return t.some(i=>i.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(i=>{let o="";if(i.total){const l=e.reduce((c,u)=>{const h=u.find(f=>f.fieldId===i.id);return c+(parseFloat(h==null?void 0:h.value)||0)},0);i.tag==="setting-currency"?o=`${i.currency||"$"} ${l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:o=l}return`<td style="padding: ${n}; border: 1px solid #dee2e6; text-align: ${i.alignment||"left"};">${o}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,n){const r=e.tag.replace("setting-","printer-"),i=document.createElement(r);return i.setAttribute("table",""),i.setAttribute("type",n),i.setAttribute("edit-value",t.value||""),t.bold&&i.setAttribute("bold",""),t.italic&&i.setAttribute("italic",""),t.color&&i.setAttribute("color",t.color),e.currency&&i.setAttribute("currency",e.currency),i.outerHTML}}customElements.define("printer-table",Pp);const zE=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:Pp},Symbol.toStringTag,{value:"Module"}));class Rp extends N{render(){const e=this.getAttribute("edit-value")||"",t=this.getAttribute("type")||"Visual",r=`
        <div style="${this.getCommonStyles()} line-height: 1.2; white-space: pre-wrap; text-align: left; font-size: 1.05rem;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-text",Rp);const GE=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:Rp},Symbol.toStringTag,{value:"Module"}));class xp extends N{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let n={url:"",text:"---"};try{e&&(n=JSON.parse(e))}catch{}let r=n.url||"";try{r&&(r=decodeURI(r))}catch{}const i=`
        <div style="font-size: 1.05rem; color: #000;">
            ${n.text||"---"}
        </div>
        <div style="font-size: 0.75rem; color: #888; font-family: monospace; margin-top: 2px; word-break: break-all;">
            ${r}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-url",xp);const WE=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:xp},Symbol.toStringTag,{value:"Module"}));
