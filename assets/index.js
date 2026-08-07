var vm=Object.defineProperty;var _m=(s,e,t)=>e in s?vm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Il=(s,e,t)=>_m(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const wm="modulepreload",Em=function(s,e){return new URL(s,e).href},Tl={},O=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(t.map(h=>{if(h=Em(h,n),h in Tl)return;Tl[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(!!n)for(let L=l.length-1;L>=0;L--){const x=l[L];if(x.href===h&&(!m||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${g}`))return;const C=document.createElement("link");if(C.rel=m?"stylesheet":wm,m||(C.as="script"),C.crossOrigin="",C.href=h,d&&C.setAttribute("nonce",d),document.head.appendChild(C),m)return new Promise((L,x)=>{C.addEventListener("load",L),C.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},Xs=(s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Oe={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},select:{icon:"❓",shortLabel:"select",longLabel:"Opciones",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,style:!0}},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},percentage:{icon:"%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0}},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4,color:"warning",settings:{width:!0,visibility:!0,style:!0}},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6,color:"warning",settings:{width:!0,visibility:!0}},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},chart:{icon:"📊",shortLabel:"Gráfico",longLabel:"Gráfico Visual",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12,color:"dark",settings:{width:!0,visibility:!0,style:!0}}},Im=()=>{};var Al={};/**
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
 */const id=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tm=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=s[t++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=s[t++],o=s[t++],l=s[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=s[t++],o=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const r=s[i],o=i+1<s.length,l=o?s[i+1]:0,c=i+2<s.length,d=c?s[i+2]:0,h=r>>2,m=(r&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;c||(_=64,o||(g=64)),n.push(t[h],t[m],t[g],t[_])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(id(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Tm(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const r=t[s.charAt(i++)],l=i<s.length?t[s.charAt(i)]:0;++i;const d=i<s.length?t[s.charAt(i)]:64;++i;const m=i<s.length?t[s.charAt(i)]:64;if(++i,r==null||l==null||d==null||m==null)throw new Am;const g=r<<2|l>>4;if(n.push(g),d!==64){const _=l<<4&240|d>>2;if(n.push(_),m!==64){const C=d<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sm=function(s){const e=id(s);return rd.encodeByteArray(e,!0)},wi=function(s){return Sm(s).replace(/\./g,"")},od=function(s){try{return rd.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xm=()=>Cm().__FIREBASE_DEFAULTS__,Pm=()=>{if(typeof process>"u"||typeof Al>"u")return;const s=Al.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Rm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&od(s[1]);return e&&JSON.parse(e)},Gi=()=>{try{return Im()||xm()||Pm()||Rm()}catch(s){`${s}`;return}},ad=s=>{var e,t;return(t=(e=Gi())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Lm=s=>{const e=ad(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},ld=()=>{var s;return(s=Gi())==null?void 0:s.config},cd=s=>{var e;return(e=Gi())==null?void 0:e[`_${s}`]};/**
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
 */class km{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Vn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dd(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Vm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,r=s.sub||s.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...s};return[wi(JSON.stringify(t)),wi(JSON.stringify(o)),""].join(".")}const cs={};function Dm(){const s={prod:[],emulator:[]};for(const e of Object.keys(cs))cs[e]?s.emulator.push(e):s.prod.push(e);return s}function Mm(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Sl=!1;function ud(s,e){if(typeof window>"u"||typeof document>"u"||!Vn(window.location.host)||cs[s]===e||cs[s]||Sl)return;cs[s]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",r=Dm().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Sl=!0,o()},g}function h(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Mm(n),_=t("text"),C=document.getElementById(_)||document.createElement("span"),L=t("learnmore"),x=document.getElementById(L)||document.createElement("a"),M=t("preprendIcon"),F=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;l(H),h(x,L);const te=d();c(F,M),H.append(F,C,x,te),document.body.appendChild(H)}r?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Nm(){var e;const s=(e=Gi())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $m(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fm(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bm(){const s=Ce();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function jm(){return!Nm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hm(){try{return typeof indexedDB=="object"}catch{return!1}}function qm(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const zm="FirebaseError";class mt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=zm,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wm(r,n):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new mt(i,l,n)}}function Wm(s,e){return s.replace(Gm,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Gm=/\{\$([^}]+)}/g;function Km(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Xt(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const r=s[i],o=e[i];if(Cl(r)&&Cl(o)){if(!Xt(r,o))return!1}else if(r!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Cl(s){return s!==null&&typeof s=="object"}/**
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
 */function As(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ss(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function is(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Qm(s,e){const t=new Jm(s,e);return t.subscribe.bind(t)}class Jm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ym(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ur),i.error===void 0&&(i.error=Ur),i.complete===void 0&&(i.complete=Ur);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ym(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Ur(){}/**
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
 */function ce(s){return s&&s._delegate?s._delegate:s}class Zt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Xm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new km;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ef(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);n===l&&o.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zm(s){return s===Qt?void 0:s}function ef(s){return s.instantiationMode==="EAGER"}/**
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
 */class tf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(K||(K={}));const nf={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},sf=K.INFO,rf={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},of=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=rf[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=sf,this._logHandler=of,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const af=(s,e)=>e.some(t=>s instanceof t);let xl,Pl;function lf(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cf(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hd=new WeakMap,Zr=new WeakMap,pd=new WeakMap,Br=new WeakMap,Ro=new WeakMap;function df(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",r),s.removeEventListener("error",o)},r=()=>{t(Pt(s.result)),i()},o=()=>{n(s.error),i()};s.addEventListener("success",r),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hd.set(t,s)}).catch(()=>{}),Ro.set(e,s),e}function uf(s){if(Zr.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",o),s.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",r),s.addEventListener("error",o),s.addEventListener("abort",o)});Zr.set(s,e)}let eo={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Zr.get(s);if(e==="objectStoreNames")return s.objectStoreNames||pd.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function hf(s){eo=s(eo)}function pf(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(jr(this),e,...t);return pd.set(n,e.sort?e.sort():[e]),Pt(n)}:cf().includes(s)?function(...e){return s.apply(jr(this),e),Pt(hd.get(this))}:function(...e){return Pt(s.apply(jr(this),e))}}function mf(s){return typeof s=="function"?pf(s):(s instanceof IDBTransaction&&uf(s),af(s,lf())?new Proxy(s,eo):s)}function Pt(s){if(s instanceof IDBRequest)return df(s);if(Br.has(s))return Br.get(s);const e=mf(s);return e!==s&&(Br.set(s,e),Ro.set(e,s)),e}const jr=s=>Ro.get(s);function ff(s,e,{blocked:t,upgrade:n,blocking:i,terminated:r}={}){const o=indexedDB.open(s,e),l=Pt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const gf=["get","getKey","getAll","getAllKeys","count"],yf=["put","add","delete","clear"],Hr=new Map;function Rl(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Hr.get(e))return Hr.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=yf.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||gf.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return Hr.set(e,r),r}hf(s=>({...s,get:(e,t,n)=>Rl(e,t)||s.get(e,t,n),has:(e,t)=>!!Rl(e,t)||s.has(e,t)}));/**
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
 */class bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vf(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function vf(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const to="@firebase/app",Ll="0.14.6";/**
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
 */const dt=new Po("@firebase/app"),_f="@firebase/app-compat",wf="@firebase/analytics-compat",Ef="@firebase/analytics",If="@firebase/app-check-compat",Tf="@firebase/app-check",Af="@firebase/auth",Sf="@firebase/auth-compat",Cf="@firebase/database",xf="@firebase/data-connect",Pf="@firebase/database-compat",Rf="@firebase/functions",Lf="@firebase/functions-compat",kf="@firebase/installations",Vf="@firebase/installations-compat",Df="@firebase/messaging",Mf="@firebase/messaging-compat",Of="@firebase/performance",Nf="@firebase/performance-compat",$f="@firebase/remote-config",Ff="@firebase/remote-config-compat",Uf="@firebase/storage",Bf="@firebase/storage-compat",jf="@firebase/firestore",Hf="@firebase/ai",qf="@firebase/firestore-compat",zf="firebase",Wf="12.6.0";/**
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
 */const no="[DEFAULT]",Gf={[to]:"fire-core",[_f]:"fire-core-compat",[Ef]:"fire-analytics",[wf]:"fire-analytics-compat",[Tf]:"fire-app-check",[If]:"fire-app-check-compat",[Af]:"fire-auth",[Sf]:"fire-auth-compat",[Cf]:"fire-rtdb",[xf]:"fire-data-connect",[Pf]:"fire-rtdb-compat",[Rf]:"fire-fn",[Lf]:"fire-fn-compat",[kf]:"fire-iid",[Vf]:"fire-iid-compat",[Df]:"fire-fcm",[Mf]:"fire-fcm-compat",[Of]:"fire-perf",[Nf]:"fire-perf-compat",[$f]:"fire-rc",[Ff]:"fire-rc-compat",[Uf]:"fire-gcs",[Bf]:"fire-gcs-compat",[jf]:"fire-fst",[qf]:"fire-fst-compat",[Hf]:"fire-vertex","fire-js":"fire-js",[zf]:"fire-js-all"};/**
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
 */const Ei=new Map,Kf=new Map,so=new Map;function kl(s,e){try{s.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function An(s){const e=s.name;if(so.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,s);for(const t of Ei.values())kl(t,s);for(const t of Kf.values())kl(t,s);return!0}function Lo(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ue(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Qf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Ts("app","Firebase",Qf);/**
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
 */class Jf{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=Wf;function md(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:no,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=ld()),!t)throw Rt.create("no-options");const r=Ei.get(i);if(r){if(Xt(t,r.options)&&Xt(n,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new tf(i);for(const c of so.values())o.addComponent(c);const l=new Jf(t,n,o);return Ei.set(i,l),l}function fd(s=no){const e=Ei.get(s);if(!e&&s===no&&ld())return md();if(!e)throw Rt.create("no-app",{appName:s});return e}function Lt(s,e,t){let n=Gf[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(o.join(" "));return}An(new Zt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Yf="firebase-heartbeat-database",Xf=1,gs="firebase-heartbeat-store";let qr=null;function gd(){return qr||(qr=ff(Yf,Xf,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(gs)}catch(t){console.warn(t)}}}}).catch(s=>{throw Rt.create("idb-open",{originalErrorMessage:s.message})})),qr}async function Zf(s){try{const t=(await gd()).transaction(gs),n=await t.objectStore(gs).get(yd(s));return await t.done,n}catch(e){if(e instanceof mt)dt.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Vl(s,e){try{const n=(await gd()).transaction(gs,"readwrite");await n.objectStore(gs).put(e,yd(s)),await n.done}catch(t){if(t instanceof mt)dt.warn(t.message);else{const n=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function yd(s){return`${s.name}!${s.options.appId}`}/**
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
 */const eg=1024,tg=30;class ng{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ig(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>tg){const o=rg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dl(),{heartbeatsToSend:n,unsentEntries:i}=sg(this._heartbeatsCache.heartbeats),r=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return dt.warn(t),""}}}function Dl(){return new Date().toISOString().substring(0,10)}function sg(s,e=eg){const t=[];let n=s.slice();for(const i of s){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ml(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ml(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ig{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hm()?qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ml(s){return wi(JSON.stringify({version:2,heartbeats:s})).length}function rg(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function og(s){An(new Zt("platform-logger",e=>new bf(e),"PRIVATE")),An(new Zt("heartbeat",e=>new ng(e),"PRIVATE")),Lt(to,Ll,s),Lt(to,Ll,"esm2020"),Lt("fire-js","")}og("");var ag="firebase",lg="12.7.0";/**
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
 */Lt(ag,lg,"app");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kt,bd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.F=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(I,w,A){for(var b=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)b[Le-2]=arguments[Le];return y.prototype[w].apply(I,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);const I=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)I[w]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(w=0;w<16;++w)I[w]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],w=E.g[2];let A=E.g[3],b;b=y+(A^v&(w^A))+I[0]+3614090360&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(w^y&(v^w))+I[1]+3905402710&4294967295,A=y+(b<<12&4294967295|b>>>20),b=w+(v^A&(y^v))+I[2]+606105819&4294967295,w=A+(b<<17&4294967295|b>>>15),b=v+(y^w&(A^y))+I[3]+3250441966&4294967295,v=w+(b<<22&4294967295|b>>>10),b=y+(A^v&(w^A))+I[4]+4118548399&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(w^y&(v^w))+I[5]+1200080426&4294967295,A=y+(b<<12&4294967295|b>>>20),b=w+(v^A&(y^v))+I[6]+2821735955&4294967295,w=A+(b<<17&4294967295|b>>>15),b=v+(y^w&(A^y))+I[7]+4249261313&4294967295,v=w+(b<<22&4294967295|b>>>10),b=y+(A^v&(w^A))+I[8]+1770035416&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(w^y&(v^w))+I[9]+2336552879&4294967295,A=y+(b<<12&4294967295|b>>>20),b=w+(v^A&(y^v))+I[10]+4294925233&4294967295,w=A+(b<<17&4294967295|b>>>15),b=v+(y^w&(A^y))+I[11]+2304563134&4294967295,v=w+(b<<22&4294967295|b>>>10),b=y+(A^v&(w^A))+I[12]+1804603682&4294967295,y=v+(b<<7&4294967295|b>>>25),b=A+(w^y&(v^w))+I[13]+4254626195&4294967295,A=y+(b<<12&4294967295|b>>>20),b=w+(v^A&(y^v))+I[14]+2792965006&4294967295,w=A+(b<<17&4294967295|b>>>15),b=v+(y^w&(A^y))+I[15]+1236535329&4294967295,v=w+(b<<22&4294967295|b>>>10),b=y+(w^A&(v^w))+I[1]+4129170786&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^w&(y^v))+I[6]+3225465664&4294967295,A=y+(b<<9&4294967295|b>>>23),b=w+(y^v&(A^y))+I[11]+643717713&4294967295,w=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(w^A))+I[0]+3921069994&4294967295,v=w+(b<<20&4294967295|b>>>12),b=y+(w^A&(v^w))+I[5]+3593408605&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^w&(y^v))+I[10]+38016083&4294967295,A=y+(b<<9&4294967295|b>>>23),b=w+(y^v&(A^y))+I[15]+3634488961&4294967295,w=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(w^A))+I[4]+3889429448&4294967295,v=w+(b<<20&4294967295|b>>>12),b=y+(w^A&(v^w))+I[9]+568446438&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^w&(y^v))+I[14]+3275163606&4294967295,A=y+(b<<9&4294967295|b>>>23),b=w+(y^v&(A^y))+I[3]+4107603335&4294967295,w=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(w^A))+I[8]+1163531501&4294967295,v=w+(b<<20&4294967295|b>>>12),b=y+(w^A&(v^w))+I[13]+2850285829&4294967295,y=v+(b<<5&4294967295|b>>>27),b=A+(v^w&(y^v))+I[2]+4243563512&4294967295,A=y+(b<<9&4294967295|b>>>23),b=w+(y^v&(A^y))+I[7]+1735328473&4294967295,w=A+(b<<14&4294967295|b>>>18),b=v+(A^y&(w^A))+I[12]+2368359562&4294967295,v=w+(b<<20&4294967295|b>>>12),b=y+(v^w^A)+I[5]+4294588738&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^w)+I[8]+2272392833&4294967295,A=y+(b<<11&4294967295|b>>>21),b=w+(A^y^v)+I[11]+1839030562&4294967295,w=A+(b<<16&4294967295|b>>>16),b=v+(w^A^y)+I[14]+4259657740&4294967295,v=w+(b<<23&4294967295|b>>>9),b=y+(v^w^A)+I[1]+2763975236&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^w)+I[4]+1272893353&4294967295,A=y+(b<<11&4294967295|b>>>21),b=w+(A^y^v)+I[7]+4139469664&4294967295,w=A+(b<<16&4294967295|b>>>16),b=v+(w^A^y)+I[10]+3200236656&4294967295,v=w+(b<<23&4294967295|b>>>9),b=y+(v^w^A)+I[13]+681279174&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^w)+I[0]+3936430074&4294967295,A=y+(b<<11&4294967295|b>>>21),b=w+(A^y^v)+I[3]+3572445317&4294967295,w=A+(b<<16&4294967295|b>>>16),b=v+(w^A^y)+I[6]+76029189&4294967295,v=w+(b<<23&4294967295|b>>>9),b=y+(v^w^A)+I[9]+3654602809&4294967295,y=v+(b<<4&4294967295|b>>>28),b=A+(y^v^w)+I[12]+3873151461&4294967295,A=y+(b<<11&4294967295|b>>>21),b=w+(A^y^v)+I[15]+530742520&4294967295,w=A+(b<<16&4294967295|b>>>16),b=v+(w^A^y)+I[2]+3299628645&4294967295,v=w+(b<<23&4294967295|b>>>9),b=y+(w^(v|~A))+I[0]+4096336452&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~w))+I[7]+1126891415&4294967295,A=y+(b<<10&4294967295|b>>>22),b=w+(y^(A|~v))+I[14]+2878612391&4294967295,w=A+(b<<15&4294967295|b>>>17),b=v+(A^(w|~y))+I[5]+4237533241&4294967295,v=w+(b<<21&4294967295|b>>>11),b=y+(w^(v|~A))+I[12]+1700485571&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~w))+I[3]+2399980690&4294967295,A=y+(b<<10&4294967295|b>>>22),b=w+(y^(A|~v))+I[10]+4293915773&4294967295,w=A+(b<<15&4294967295|b>>>17),b=v+(A^(w|~y))+I[1]+2240044497&4294967295,v=w+(b<<21&4294967295|b>>>11),b=y+(w^(v|~A))+I[8]+1873313359&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~w))+I[15]+4264355552&4294967295,A=y+(b<<10&4294967295|b>>>22),b=w+(y^(A|~v))+I[6]+2734768916&4294967295,w=A+(b<<15&4294967295|b>>>17),b=v+(A^(w|~y))+I[13]+1309151649&4294967295,v=w+(b<<21&4294967295|b>>>11),b=y+(w^(v|~A))+I[4]+4149444226&4294967295,y=v+(b<<6&4294967295|b>>>26),b=A+(v^(y|~w))+I[11]+3174756917&4294967295,A=y+(b<<10&4294967295|b>>>22),b=w+(y^(A|~v))+I[2]+718787259&4294967295,w=A+(b<<15&4294967295|b>>>17),b=v+(A^(w|~y))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(w+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,y){y===void 0&&(y=E.length);const v=y-this.blockSize,I=this.C;let w=this.h,A=0;for(;A<y;){if(w==0)for(;A<=v;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(I[w++]=E.charCodeAt(A++),w==this.blockSize){i(this,I),w=0;break}}else for(;A<y;)if(I[w++]=E[A++],w==this.blockSize){i(this,I),w=0;break}}this.h=w,this.o+=y},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)E[y++]=this.g[v]>>>I&255;return E};function r(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;const v=[];let I=!0;for(let w=E.length-1;w>=0;w--){const A=E[w]|0;I&&A==y||(v[w]=A,I=!1)}this.g=v}var l={};function c(E){return-128<=E&&E<128?r(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(d(-E));const y=[];let v=1;for(let I=0;E>=v;I++)y[I]=E/v|0,v*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return x(h(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(y,8));let I=m;for(let A=0;A<E.length;A+=8){var w=Math.min(8,E.length-A);const b=parseInt(E.substring(A,A+w),y);w<8?(w=d(Math.pow(y,w)),I=I.j(w).add(d(b))):(I=I.j(v),I=I.add(d(b)))}return I}var m=c(0),g=c(1),_=c(16777216);s=o.prototype,s.m=function(){if(L(this))return-x(this).m();let E=0,y=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);E+=(I>=0?I:4294967296+I)*y,y*=4294967296}return E},s.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(L(this))return"-"+x(this).toString(E);const y=d(Math.pow(E,6));var v=this;let I="";for(;;){const w=te(v,y).g;v=M(v,w.j(y));let A=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=w,C(v))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},s.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function L(E){return E.h==-1}s.l=function(E){return E=M(this,E),L(E)?-1:C(E)?0:1};function x(E){const y=E.g.length,v=[];for(let I=0;I<y;I++)v[I]=~E.g[I];return new o(v,~E.h).add(g)}s.abs=function(){return L(this)?x(this):this},s.add=function(E){const y=Math.max(this.g.length,E.g.length),v=[];let I=0;for(let w=0;w<=y;w++){let A=I+(this.i(w)&65535)+(E.i(w)&65535),b=(A>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);I=b>>>16,A&=65535,b&=65535,v[w]=b<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(E,y){return E.add(x(y))}s.j=function(E){if(C(this)||C(E))return m;if(L(this))return L(E)?x(this).j(x(E)):x(x(this).j(E));if(L(E))return x(this.j(x(E)));if(this.l(_)<0&&E.l(_)<0)return d(this.m()*E.m());const y=this.g.length+E.g.length,v=[];for(var I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let w=0;w<E.g.length;w++){const A=this.i(I)>>>16,b=this.i(I)&65535,Le=E.i(w)>>>16,Ht=E.i(w)&65535;v[2*I+2*w]+=b*Ht,F(v,2*I+2*w),v[2*I+2*w+1]+=A*Ht,F(v,2*I+2*w+1),v[2*I+2*w+1]+=b*Le,F(v,2*I+2*w+1),v[2*I+2*w+2]+=A*Le,F(v,2*I+2*w+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function F(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function H(E,y){this.g=E,this.h=y}function te(E,y){if(C(y))throw Error("division by zero");if(C(E))return new H(m,m);if(L(E))return y=te(x(E),y),new H(x(y.g),x(y.h));if(L(y))return y=te(E,x(y)),new H(x(y.g),y.h);if(E.g.length>30){if(L(E)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,I=y;I.l(E)<=0;)v=pe(v),I=pe(I);var w=ie(v,1),A=ie(I,1);for(I=ie(I,2),v=ie(v,2);!C(I);){var b=A.add(I);b.l(E)<=0&&(w=w.add(v),A=b),I=ie(I,1),v=ie(v,1)}return y=M(E,w.j(y)),new H(w,y)}for(w=m;E.l(y)>=0;){for(v=Math.max(1,Math.floor(E.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(v),b=A.j(y);L(b)||b.l(E)>0;)v-=I,A=d(v),b=A.j(y);C(A)&&(A=g),w=w.add(A),E=M(E,b)}return new H(w,E)}s.B=function(E){return te(this,E).h},s.and=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)&E.i(I);return new o(v,this.h&E.h)},s.or=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)|E.i(I);return new o(v,this.h|E.h)},s.xor=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)^E.i(I);return new o(v,this.h^E.h)};function pe(E){const y=E.g.length+1,v=[];for(let I=0;I<y;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(v,E.h)}function ie(E,y){const v=y>>5;y%=32;const I=E.g.length-v,w=[];for(let A=0;A<I;A++)w[A]=y>0?E.i(A+v)>>>y|E.i(A+v+1)<<32-y:E.i(A+v);return new o(w,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,bd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,kt=o}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vd,rs,_d,ai,io,wd,Ed,Id;(function(){var s,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var p=n;a=a.split(".");for(var f=0;f<a.length-1;f++){var T=a[f];if(!(T in p))break e;p=p[T]}a=a[a.length-1],f=p[a],u=u(f),u!=f&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var p=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&p.push([f,u[f]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,p){return a.call.apply(a.bind,arguments)}function d(a,u,p){return d=c,d.apply(null,arguments)}function h(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var f=p.slice();return f.push.apply(f,arguments),a.apply(this,f)}}function m(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(f,T,S){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return u.prototype[T].apply(f,k)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const p=Array(u);for(let f=0;f<u;f++)p[f]=a[f];return p}return[]}function C(a,u){for(let f=1;f<arguments.length;f++){const T=arguments[f];var p=typeof T;if(p=p!="object"?p:T?Array.isArray(T)?"array":p:"null",p=="array"||p=="object"&&typeof T.length=="number"){p=a.length||0;const S=T.length||0;a.length=p+S;for(let k=0;k<S;k++)a[p+k]=T[k]}else a.push(T)}}class L{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(a){o.setTimeout(()=>{throw a},0)}function M(){var a=E;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class F{constructor(){this.h=this.g=null}add(u,p){const f=H.get();f.set(u,p),this.h?this.h.next=f:this.g=f,this.h=f}}var H=new L(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,ie=!1,E=new F,y=()=>{const a=Promise.resolve(void 0);pe=()=>{a.then(v)}};function v(){for(var a;a=M();){try{a.h.call(a.g)}catch(p){x(p)}var u=H;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ie=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function Le(a,u){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(Le,w),Le.prototype.init=function(a,u){const p=this.type=a.type,f=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ht="closure_listenable_"+(Math.random()*1e6|0),Bp=0;function jp(a,u,p,f,T){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!f,this.ha=T,this.key=++Bp,this.da=this.fa=!1}function Ns(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $s(a,u,p){for(const f in a)u.call(p,a[f],f,a)}function Hp(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Ea(a){const u={};for(const p in a)u[p]=a[p];return u}const Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(a,u){let p,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(p in f)a[p]=f[p];for(let S=0;S<Ia.length;S++)p=Ia[S],Object.prototype.hasOwnProperty.call(f,p)&&(a[p]=f[p])}}function Fs(a){this.src=a,this.g={},this.h=0}Fs.prototype.add=function(a,u,p,f,T){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const k=yr(a,u,f,T);return k>-1?(u=a[k],p||(u.fa=!1)):(u=new jp(u,this.src,S,!!f,T),u.fa=p,a.push(u)),u};function gr(a,u){const p=u.type;if(p in a.g){var f=a.g[p],T=Array.prototype.indexOf.call(f,u,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&(Ns(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function yr(a,u,p,f){for(let T=0;T<a.length;++T){const S=a[T];if(!S.da&&S.listener==u&&S.capture==!!p&&S.ha==f)return T}return-1}var br="closure_lm_"+(Math.random()*1e6|0),vr={};function Aa(a,u,p,f,T){if(Array.isArray(u)){for(let S=0;S<u.length;S++)Aa(a,u[S],p,f,T);return null}return p=xa(p),a&&a[Ht]?a.J(u,p,l(f)?!!f.capture:!1,T):qp(a,u,p,!1,f,T)}function qp(a,u,p,f,T,S){if(!u)throw Error("Invalid event type");const k=l(T)?!!T.capture:!!T;let W=wr(a);if(W||(a[br]=W=new Fs(a)),p=W.add(u,p,f,k,S),p.proxy)return p;if(f=zp(),p.proxy=f,f.src=a,f.listener=p,a.addEventListener)A||(T=k),T===void 0&&(T=!1),a.addEventListener(u.toString(),f,T);else if(a.attachEvent)a.attachEvent(Ca(u.toString()),f);else if(a.addListener&&a.removeListener)a.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return p}function zp(){function a(p){return u.call(a.src,a.listener,p)}const u=Wp;return a}function Sa(a,u,p,f,T){if(Array.isArray(u))for(var S=0;S<u.length;S++)Sa(a,u[S],p,f,T);else f=l(f)?!!f.capture:!!f,p=xa(p),a&&a[Ht]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],p=yr(u,p,f,T),p>-1&&(Ns(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=wr(a))&&(u=a.g[u.toString()],a=-1,u&&(a=yr(u,p,f,T)),(p=a>-1?u[a]:null)&&_r(p))}function _r(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ht])gr(u.i,a);else{var p=a.type,f=a.proxy;u.removeEventListener?u.removeEventListener(p,f,a.capture):u.detachEvent?u.detachEvent(Ca(p),f):u.addListener&&u.removeListener&&u.removeListener(f),(p=wr(u))?(gr(p,a),p.h==0&&(p.src=null,u[br]=null)):Ns(a)}}}function Ca(a){return a in vr?vr[a]:vr[a]="on"+a}function Wp(a,u){if(a.da)a=!0;else{u=new Le(u,this);const p=a.listener,f=a.ha||a.src;a.fa&&_r(a),a=p.call(f,u)}return a}function wr(a){return a=a[br],a instanceof Fs?a:null}var Er="__closure_events_fn_"+(Math.random()*1e9>>>0);function xa(a){return typeof a=="function"?a:(a[Er]||(a[Er]=function(u){return a.handleEvent(u)}),a[Er])}function Ee(){I.call(this),this.i=new Fs(this),this.M=this,this.G=null}m(Ee,I),Ee.prototype[Ht]=!0,Ee.prototype.removeEventListener=function(a,u,p,f){Sa(this,a,u,p,f)};function xe(a,u){var p,f=a.G;if(f)for(p=[];f;f=f.G)p.push(f);if(a=a.M,f=u.type||u,typeof u=="string")u=new w(u,a);else if(u instanceof w)u.target=u.target||a;else{var T=u;u=new w(f,a),Ta(u,T)}T=!0;let S,k;if(p)for(k=p.length-1;k>=0;k--)S=u.g=p[k],T=Us(S,f,!0,u)&&T;if(S=u.g=a,T=Us(S,f,!0,u)&&T,T=Us(S,f,!1,u)&&T,p)for(k=0;k<p.length;k++)S=u.g=p[k],T=Us(S,f,!1,u)&&T}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let f=0;f<p.length;f++)Ns(p[f]);delete a.g[u],a.h--}}this.G=null},Ee.prototype.J=function(a,u,p,f){return this.i.add(String(a),u,!1,p,f)},Ee.prototype.K=function(a,u,p,f){return this.i.add(String(a),u,!0,p,f)};function Us(a,u,p,f){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let S=0;S<u.length;++S){const k=u[S];if(k&&!k.da&&k.capture==p){const W=k.listener,me=k.ha||k.src;k.fa&&gr(a.i,k),T=W.call(me,f)!==!1&&T}}return T&&!f.defaultPrevented}function Gp(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Pa(a){a.g=Gp(()=>{a.g=null,a.i&&(a.i=!1,Pa(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Kp extends I{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Pa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(a){I.call(this),this.h=a,this.g={}}m(Un,I);var Ra=[];function La(a){$s(a.g,function(u,p){this.g.hasOwnProperty(p)&&_r(u)},a),a.g={}}Un.prototype.N=function(){Un.Z.N.call(this),La(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=o.JSON.stringify,Qp=o.JSON.parse,Jp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ka(){}function Va(){}var Bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tr(){w.call(this,"d")}m(Tr,w);function Ar(){w.call(this,"c")}m(Ar,w);var qt={},Da=null;function Bs(){return Da=Da||new Ee}qt.Ia="serverreachability";function Ma(a){w.call(this,qt.Ia,a)}m(Ma,w);function jn(a){const u=Bs();xe(u,new Ma(u))}qt.STAT_EVENT="statevent";function Oa(a,u){w.call(this,qt.STAT_EVENT,a),this.stat=u}m(Oa,w);function Pe(a){const u=Bs();xe(u,new Oa(u,a))}qt.Ja="timingevent";function Na(a,u){w.call(this,qt.Ja,a),this.size=u}m(Na,w);function Hn(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function Yp(a,u,p,f,T,S){a.info(function(){if(a.g)if(S){var k="",W=S.split("&");for(let Z=0;Z<W.length;Z++){var me=W[Z].split("=");if(me.length>1){const ge=me[0];me=me[1];const Qe=ge.split("_");k=Qe.length>=2&&Qe[1]=="type"?k+(ge+"="+me+"&"):k+(ge+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+p+`
`+k})}function Xp(a,u,p,f,T,S,k){a.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+p+`
`+S+" "+k})}function cn(a,u,p,f){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+em(a,p)+(f?" "+f:"")})}function Zp(a,u){a.info(function(){return"TIMEOUT: "+u})}qn.prototype.info=function(){};function em(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var p=S[a];if(!(p.length<2)){var f=p[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Ir(S)}catch{return u}}var js={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fa;function Sr(){}m(Sr,ka),Sr.prototype.g=function(){return new XMLHttpRequest},Fa=new Sr;function zn(a){return encodeURIComponent(String(a))}function tm(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function gt(a,u,p,f){this.j=a,this.i=u,this.l=p,this.S=f||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var Ba={},Cr={};function xr(a,u,p){a.M=1,a.A=qs(Ke(u)),a.u=p,a.R=!0,ja(a,null)}function ja(a,u){a.F=Date.now(),Hs(a),a.B=Ke(a.A);var p=a.B,f=a.S;Array.isArray(f)||(f=[String(f)]),tl(p.i,"t",f),a.C=0,p=a.j.L,a.h=new Ua,a.g=vl(a.j,p?u:null,!a.u),a.P>0&&(a.O=new Kp(d(a.Y,a,a.g),a.P)),u=a.V,p=a.g,f=a.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ra[0]=T.toString()),T=Ra);for(let S=0;S<T.length;S++){const k=Aa(p,T[S],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=a.J?Ea(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),jn(),Yp(a.i,a.v,a.B,a.l,a.S,a.u)}gt.prototype.ba=function(a){a=a.target;const u=this.O;u&&vt(a)==3?u.j():this.Y(a)},gt.prototype.Y=function(a){try{if(a==this.g)e:{const W=vt(this.g),me=this.g.ya(),Z=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||ll(this.g)))){this.K||W!=4||me==7||(me==8||Z<=0?jn(3):jn(2)),Pr(this);var u=this.g.ca();this.X=u;var p=nm(this);if(this.o=u==200,Xp(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(f)){var S=f;break t}}S=null}if(a=S)cn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rr(this,a);else{this.o=!1,this.m=3,Pe(12),zt(this),Wn(this);break e}}if(this.R){a=!0;let ge;for(;!this.K&&this.C<p.length;)if(ge=sm(this,p),ge==Cr){W==4&&(this.m=4,Pe(14),a=!1),cn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Ba){this.m=4,Pe(15),cn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else cn(this.i,this.l,ge,null),Rr(this,ge);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||p.length!=0||this.h.h||(this.m=1,Pe(16),a=!1),this.o=this.o&&a,!a)cn(this.i,this.l,p,"[Invalid Chunked Response]"),zt(this),Wn(this);else if(p.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),$r(k),k.P=!0,Pe(11))}}else cn(this.i,this.l,p,null),Rr(this,p);W==4&&zt(this),this.o&&!this.K&&(W==4?fl(this.j,this):(this.o=!1,Hs(this)))}else ym(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),zt(this),Wn(this)}}}catch{}finally{}};function nm(a){if(!Ha(a))return a.g.la();const u=ll(a.g);if(u==="")return"";let p="";const f=u.length,T=vt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zt(a),Wn(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<f;S++)a.h.h=!0,p+=a.h.i.decode(u[S],{stream:!(T&&S==f-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Ha(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function sm(a,u){var p=a.C,f=u.indexOf(`
`,p);return f==-1?Cr:(p=Number(u.substring(p,f)),isNaN(p)?Ba:(f+=1,f+p>u.length?Cr:(u=u.slice(f,f+p),a.C=f+p,u)))}gt.prototype.cancel=function(){this.K=!0,zt(this)};function Hs(a){a.T=Date.now()+a.H,qa(a,a.H)}function qa(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hn(d(a.aa,a),u)}function Pr(a){a.D&&(o.clearTimeout(a.D),a.D=null)}gt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Zp(this.i,this.B),this.M!=2&&(jn(),Pe(17)),zt(this),this.m=2,Wn(this)):qa(this,this.T-a)};function Wn(a){a.j.I==0||a.K||fl(a.j,a)}function zt(a){Pr(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,La(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Rr(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||Lr(p.h,a))){if(!a.L&&Lr(p.h,a)&&p.I==3){try{var f=p.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Qs(p),Gs(p);else break e;Nr(p),Pe(18)}}else p.xa=T[1],0<p.xa-p.K&&T[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Hn(d(p.Va,p),6e3));Ga(p.h)<=1&&p.ta&&(p.ta=void 0)}else Gt(p,11)}else if((a.L||p.g==a)&&Qs(p),!b(u))for(T=p.Ba.g.parse(u),u=0;u<T.length;u++){let Z=T[u];const ge=Z[0];if(!(ge<=p.K))if(p.K=ge,Z=Z[1],p.I==2)if(Z[0]=="c"){p.M=Z[1],p.ba=Z[2];const Qe=Z[3];Qe!=null&&(p.ka=Qe,p.j.info("VER="+p.ka));const Kt=Z[4];Kt!=null&&(p.za=Kt,p.j.info("SVER="+p.za));const _t=Z[5];_t!=null&&typeof _t=="number"&&_t>0&&(f=1.5*_t,p.O=f,p.j.info("backChannelRequestTimeoutMs_="+f)),f=p;const wt=a.g;if(wt){const Ys=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var S=f.h;S.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(kr(S,S.h),S.h=null))}if(f.G){const Fr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fr&&(f.wa=Fr,ne(f.J,f.G,Fr))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),f=p;var k=a;if(f.na=bl(f,f.L?f.ba:null,f.W),k.L){Ka(f.h,k);var W=k,me=f.O;me&&(W.H=me),W.D&&(Pr(W),Hs(W)),f.g=k}else pl(f);p.i.length>0&&Ks(p)}else Z[0]!="stop"&&Z[0]!="close"||Gt(p,7);else p.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Gt(p,7):Or(p):Z[0]!="noop"&&p.l&&p.l.qa(Z),p.A=0)}}jn(4)}catch{}}var im=class{constructor(a,u){this.g=a,this.map=u}};function za(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wa(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ga(a){return a.h?1:a.g?a.g.size:0}function Lr(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function kr(a,u){a.g?a.g.add(u):a.h=u}function Ka(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}za.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qa(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return _(a.i)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rm(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const f=a[p].indexOf("=");let T,S=null;f>=0?(T=a[p].substring(0,f),S=a[p].substring(f+1)):T=a[p],u(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function yt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof yt?(this.l=a.l,Gn(this,a.j),this.o=a.o,this.g=a.g,Kn(this,a.u),this.h=a.h,Vr(this,nl(a.i)),this.m=a.m):a&&(u=String(a).match(Ja))?(this.l=!1,Gn(this,u[1]||"",!0),this.o=Qn(u[2]||""),this.g=Qn(u[3]||"",!0),Kn(this,u[4]),this.h=Qn(u[5]||"",!0),Vr(this,u[6]||"",!0),this.m=Qn(u[7]||"")):(this.l=!1,this.i=new Yn(null,this.l))}yt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Jn(u,Ya,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Jn(u,Ya,!0),"@"),a.push(zn(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Jn(p,p.charAt(0)=="/"?lm:am,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Jn(p,dm)),a.join("")},yt.prototype.resolve=function(a){const u=Ke(this);let p=!!a.j;p?Gn(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var f=a.h;if(p)Kn(u,a.u);else if(p=!!a.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=u.h.lastIndexOf("/");T!=-1&&(f=u.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let k=0;k<T.length;){const W=T[k++];W=="."?f&&k==T.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&k==T.length&&S.push("")):(S.push(W),f=!0)}f=S.join("/")}else f=T}return p?u.h=f:p=a.i.toString()!=="",p?Vr(u,nl(a.i)):p=!!a.m,p&&(u.m=a.m),u};function Ke(a){return new yt(a)}function Gn(a,u,p){a.j=p?Qn(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Kn(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Vr(a,u,p){u instanceof Yn?(a.i=u,um(a.i,a.l)):(p||(u=Jn(u,cm)),a.i=new Yn(u,a.l))}function ne(a,u,p){a.i.set(u,p)}function qs(a){return ne(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Qn(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Jn(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,om),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function om(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ya=/[#\/\?@]/g,am=/[#\?:]/g,lm=/[#\?]/g,cm=/[#\?@]/g,dm=/#/g;function Yn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Wt(a){a.g||(a.g=new Map,a.h=0,a.i&&rm(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}s=Yn.prototype,s.add=function(a,u){Wt(this),this.i=null,a=dn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function Xa(a,u){Wt(a),u=dn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Za(a,u){return Wt(a),u=dn(a,u),a.g.has(u)}s.forEach=function(a,u){Wt(this),this.g.forEach(function(p,f){p.forEach(function(T){a.call(u,T,f,this)},this)},this)};function el(a,u){Wt(a);let p=[];if(typeof u=="string")Za(a,u)&&(p=p.concat(a.g.get(dn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}s.set=function(a,u){return Wt(this),this.i=null,a=dn(this,a),Za(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},s.get=function(a,u){return a?(a=el(this,a),a.length>0?String(a[0]):u):u};function tl(a,u,p){Xa(a,u),p.length>0&&(a.i=null,a.g.set(dn(a,u),_(p)),a.h+=p.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var p=u[f];const T=zn(p);p=el(this,p);for(let S=0;S<p.length;S++){let k=T;p[S]!==""&&(k+="="+zn(p[S])),a.push(k)}}return this.i=a.join("&")};function nl(a){const u=new Yn;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function dn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function um(a,u){u&&!a.j&&(Wt(a),a.i=null,a.g.forEach(function(p,f){const T=f.toLowerCase();f!=T&&(Xa(this,f),tl(this,T,p))},a)),a.j=u}function hm(a,u){const p=new qn;if(o.Image){const f=new Image;f.onload=h(bt,p,"TestLoadImage: loaded",!0,u,f),f.onerror=h(bt,p,"TestLoadImage: error",!1,u,f),f.onabort=h(bt,p,"TestLoadImage: abort",!1,u,f),f.ontimeout=h(bt,p,"TestLoadImage: timeout",!1,u,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=a}else u(!1)}function pm(a,u){const p=new qn,f=new AbortController,T=setTimeout(()=>{f.abort(),bt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?bt(p,"TestPingServer: ok",!0,u):bt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),bt(p,"TestPingServer: error",!1,u)})}function bt(a,u,p,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(p)}catch{}}function mm(){this.g=new Jp}function Dr(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Dr,ka),Dr.prototype.g=function(){return new zs(this.i,this.h)};function zs(a,u){Ee.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(zs,Ee),s=zs.prototype,s.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Zn(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},s.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}s.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xn(this):Zn(this),this.readyState==3&&sl(this)}},s.Oa=function(a){this.g&&(this.response=this.responseText=a,Xn(this))},s.Na=function(a){this.g&&(this.response=a,Xn(this))},s.ga=function(){this.g&&Xn(this)};function Xn(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Zn(a)}s.setRequestHeader=function(a,u){this.A.append(a,u)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Zn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function il(a){let u="";return $s(a,function(p,f){u+=f,u+=":",u+=p,u+=`\r
`}),u}function Mr(a,u,p){e:{for(f in p){var f=!1;break e}f=!0}f||(p=il(p),typeof a=="string"?p!=null&&zn(p):ne(a,u,p))}function oe(a){Ee.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(oe,Ee);var fm=/^https?$/i,gm=["POST","PUT"];s=oe.prototype,s.Fa=function(a){this.H=a},s.ea=function(a,u,p,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fa.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){rl(this,S);return}if(a=p||"",p=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)p.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())p.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(p.keys()).find(S=>S.toLowerCase()=="content-type"),T=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gm,u,void 0)>=0)||f||T||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of p)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){rl(this,S)}};function rl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ol(a),Ws(a)}function ol(a){a.A||(a.A=!0,xe(a,"complete"),xe(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,xe(this,"complete"),xe(this,"abort"),Ws(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),oe.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?al(this):this.Xa())},s.Xa=function(){al(this)};function al(a){if(a.h&&typeof r<"u"){if(a.v&&vt(a)==4)setTimeout(a.Ca.bind(a),0);else if(xe(a,"readystatechange"),vt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var f;if(f=S===0){let k=String(a.D).match(Ja)[1]||null;!k&&o.self&&o.self.location&&(k=o.self.location.protocol.slice(0,-1)),f=!fm.test(k?k.toLowerCase():"")}p=f}if(p)xe(a,"complete"),xe(a,"success");else{a.o=6;try{var T=vt(a)>2?a.g.statusText:""}catch{T=""}a.l=T+" ["+a.ca()+"]",ol(a)}}finally{Ws(a)}}}}function Ws(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||xe(a,"ready");try{p.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function vt(a){return a.g?a.g.readyState:0}s.ca=function(){try{return vt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Qp(u)}};function ll(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ym(a){const u={};a=(a.g&&vt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<a.length;f++){if(b(a[f]))continue;var p=tm(a[f]);const T=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const S=u[T]||[];u[T]=S,S.push(p)}Hp(u,function(f){return f.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function cl(a){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=es("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=es("baseRetryDelayMs",5e3,a),this.Za=es("retryDelaySeedMs",1e4,a),this.Ta=es("forwardChannelMaxRetries",2,a),this.va=es("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new za(a&&a.concurrentRequestLimit),this.Ba=new mm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=cl.prototype,s.ka=8,s.I=1,s.connect=function(a,u,p,f){Pe(0),this.W=a,this.H=u||{},p&&f!==void 0&&(this.H.OSID=p,this.H.OAID=f),this.F=this.X,this.J=bl(this,null,this.W),Ks(this)};function Or(a){if(dl(a),a.I==3){var u=a.V++,p=Ke(a.J);if(ne(p,"SID",a.M),ne(p,"RID",u),ne(p,"TYPE","terminate"),ts(a,p),u=new gt(a,a.j,u),u.M=2,u.A=qs(Ke(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=vl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Hs(u)}yl(a)}function Gs(a){a.g&&($r(a),a.g.cancel(),a.g=null)}function dl(a){Gs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ks(a){if(!Wa(a.h)&&!a.m){a.m=!0;var u=a.Ea;pe||y(),ie||(pe(),ie=!0),E.add(u,a),a.D=0}}function bm(a,u){return Ga(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hn(d(a.Ea,a,u),gl(a,a.D)),a.D++,!0)}s.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const T=new gt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=Ea(S),Ta(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var f=this.i[p];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=hl(this,T,u),p=Ke(this.J),ne(p,"RID",a),ne(p,"CVER",22),this.G&&ne(p,"X-HTTP-Session-Id",this.G),ts(this,p),S&&(this.R?u="headers="+zn(il(S))+"&"+u:this.u&&Mr(p,this.u,S)),kr(this.h,T),this.Ra&&ne(p,"TYPE","init"),this.S?(ne(p,"$req",u),ne(p,"SID","null"),T.U=!0,xr(T,p,null)):xr(T,p,u),this.I=2}}else this.I==3&&(a?ul(this,a):this.i.length==0||Wa(this.h)||ul(this))};function ul(a,u){var p;u?p=u.l:p=a.V++;const f=Ke(a.J);ne(f,"SID",a.M),ne(f,"RID",p),ne(f,"AID",a.K),ts(a,f),a.u&&a.o&&Mr(f,a.u,a.o),p=new gt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=hl(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),kr(a.h,p),xr(p,f,u)}function ts(a,u){a.H&&$s(a.H,function(p,f){ne(u,f,p)}),a.l&&$s({},function(p,f){ne(u,f,p)})}function hl(a,u,p){p=Math.min(a.i.length,p);const f=a.l?d(a.l.Ka,a.l,a):null;e:{var T=a.i;let W=-1;for(;;){const me=["count="+p];W==-1?p>0?(W=T[0].g,me.push("ofs="+W)):W=0:me.push("ofs="+W);let Z=!0;for(let ge=0;ge<p;ge++){var S=T[ge].g;const Qe=T[ge].map;if(S-=W,S<0)W=Math.max(0,T[ge].g-100),Z=!1;else try{S="req"+S+"_"||"";try{var k=Qe instanceof Map?Qe:Object.entries(Qe);for(const[Kt,_t]of k){let wt=_t;l(_t)&&(wt=Ir(_t)),me.push(S+Kt+"="+encodeURIComponent(wt))}}catch(Kt){throw me.push(S+"type="+encodeURIComponent("_badmap")),Kt}}catch{f&&f(Qe)}}if(Z){k=me.join("&");break e}}k=void 0}return a=a.i.splice(0,p),u.G=a,k}function pl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;pe||y(),ie||(pe(),ie=!0),E.add(u,a),a.A=0}}function Nr(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hn(d(a.Da,a),gl(a,a.A)),a.A++,!0)}s.Da=function(){if(this.v=null,ml(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hn(d(this.Wa,this),a)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),Gs(this),ml(this))};function $r(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ml(a){a.g=new gt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Ke(a.na);ne(u,"RID","rpc"),ne(u,"SID",a.M),ne(u,"AID",a.K),ne(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ne(u,"TO",a.ia),ne(u,"TYPE","xmlhttp"),ts(a,u),a.u&&a.o&&Mr(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=qs(Ke(u)),p.u=null,p.R=!0,ja(p,a)}s.Va=function(){this.C!=null&&(this.C=null,Gs(this),Nr(this),Pe(19))};function Qs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function fl(a,u){var p=null;if(a.g==u){Qs(a),$r(a),a.g=null;var f=2}else if(Lr(a.h,u))p=u.G,Ka(a.h,u),f=1;else return;if(a.I!=0){if(u.o)if(f==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var T=a.D;f=Bs(),xe(f,new Na(f,p)),Ks(a)}else pl(a);else if(T=u.m,T==3||T==0&&u.X>0||!(f==1&&bm(a,u)||f==2&&Nr(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),T){case 1:Gt(a,5);break;case 4:Gt(a,10);break;case 3:Gt(a,6);break;default:Gt(a,2)}}}function gl(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Gt(a,u){if(a.j.info("Error code "+u),u==2){var p=d(a.bb,a),f=a.Ua;const T=!f;f=new yt(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gn(f,"https"),qs(f),T?hm(f.toString(),p):pm(f.toString(),p)}else Pe(2);a.I=0,a.l&&a.l.pa(u),yl(a),dl(a)}s.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function yl(a){if(a.I=0,a.ja=[],a.l){const u=Qa(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ja,u),C(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function bl(a,u,p){var f=p instanceof yt?Ke(p):new yt(p);if(f.g!="")u&&(f.g=u+"."+f.g),Kn(f,f.u);else{var T=o.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const S=new yt(null);f&&Gn(S,f),u&&(S.g=u),T&&Kn(S,T),p&&(S.h=p),f=S}return p=a.G,u=a.wa,p&&u&&ne(f,p,u),ne(f,"VER",a.ka),ts(a,f),f}function vl(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new oe(new Dr({ab:p})):new oe(a.ma),u.Fa(a.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function _l(){}s=_l.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Js(){}Js.prototype.g=function(a,u){return new Me(a,u)};function Me(a,u){Ee.call(this),this.g=new cl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!b(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new un(this)}m(Me,Ee),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Or(this.g)},Me.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Ir(a),a=p);u.i.push(new im(u.Ya++,a)),u.I==3&&Ks(u)},Me.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,Me.Z.N.call(this)};function wl(a){Tr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(wl,Tr);function El(){Ar.call(this),this.status=1}m(El,Ar);function un(a){this.g=a}m(un,_l),un.prototype.ra=function(){xe(this.g,"a")},un.prototype.qa=function(a){xe(this.g,new wl(a))},un.prototype.pa=function(a){xe(this.g,new El)},un.prototype.oa=function(){xe(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Id=function(){return new Js},Ed=function(){return Bs()},wd=qt,io={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,ai=js,$a.COMPLETE="complete",_d=$a,Va.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,rs=Va,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,vd=oe}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore",$l="4.9.3";/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let Mn="12.7.0";/**
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
 */const en=new Po("@firebase/firestore");function hn(){return en.logLevel}function D(s,...e){if(en.logLevel<=K.DEBUG){const t=e.map(ko);en.debug(`Firestore (${Mn}): ${s}`,...t)}}function ut(s,...e){if(en.logLevel<=K.ERROR){const t=e.map(ko);en.error(`Firestore (${Mn}): ${s}`,...t)}}function Sn(s,...e){if(en.logLevel<=K.WARN){const t=e.map(ko);en.warn(`Firestore (${Mn}): ${s}`,...t)}}function ko(s){if(typeof s=="string")return s;try{/**
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
 */function j(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Td(s,n,t)}function Td(s,e,t){let n=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ut(n),new Error(n)}function X(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Td(e,i,n)}function z(s,e){return s}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class dg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ug{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let r=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new lt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new lt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string",31837,{l:n}),new Ad(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class hg{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pg{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new hg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const n=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>n(r)))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Fl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fg(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Vo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=fg(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%62))}return n}}function Q(s,e){return s<e?-1:s>e?1:0}function ro(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),r=e.charAt(n);if(i!==r)return zr(i)===zr(r)?Q(i,r):zr(i)?1:-1}return Q(s.length,e.length)}const gg=55296,yg=57343;function zr(s){const e=s.charCodeAt(0);return e>=gg&&e<=yg}function Cn(s,e,t){return s.length===e.length&&s.every(((n,i)=>t(n,e[i])))}/**
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
 */const Ul="__name__";class Ye{constructor(e,t,n){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&j(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const r=Ye.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Q(e.length,t.length)}static compareSegments(e,t){const n=Ye.isNumericId(e),i=Ye.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):ro(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kt.fromString(e.substring(4,e.length-2))}}class ee extends Ye{construct(e,t,n){return new ee(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Ye{construct(e,t,n){return new _e(e,t,n)}static isValidIdentifier(e){return bg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ul}static keyField(){return new _e([Ul])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(n+=l,i++):(r(),i++)}if(r(),o)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ee.fromString(e))}static fromName(e){return new N(ee.fromString(e).popFirst(5))}static empty(){return new N(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ee(e.slice()))}}/**
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
 */function Sd(s,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function vg(s,e,t,n){if(e===!0&&n===!0)throw new V(P.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Bl(s){if(!N.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function jl(s){if(N.isDocumentKey(s))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Cd(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Ki(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":j(12329,{type:typeof s})}function ze(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ki(s);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function he(s,e){const t={typeString:s};return e&&(t.value=e),t}function Ss(s,e){if(!Cd(s))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,r="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${n}' field to equal '${r.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const Hl=-62135596800,ql=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ql);return new se(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ql}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ss(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:he("string",se._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new se(0,0))}static max(){return new q(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ys=-1;function _g(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=q.fromTimestamp(n===1e9?new se(t+1,0):new se(t,n));return new Dt(i,N.empty(),e)}function wg(s){return new Dt(s.readTime,s.key,ys)}class Dt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Dt(q.min(),N.empty(),ys)}static max(){return new Dt(q.max(),N.empty(),ys)}}function Eg(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(s.documentKey,e.documentKey),t!==0?t:Q(s.largestBatchId,e.largestBatchId))}/**
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
 */const Ig="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function On(s){if(s.code!==P.FAILED_PRECONDITION||s.message!==Ig)throw s;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((n,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(n,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,n)=>{t(e)}))}static reject(e){return new R(((t,n)=>{n(e)}))}static waitFor(e){return new R(((t,n)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&t()}),(c=>n(c)))})),o=!0,r===i&&t()}))}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next((i=>i?R.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,r)=>{n.push(t.call(this,i,r))})),this.waitFor(n)}static mapArray(e,t){return new R(((n,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const d=c;t(e[d]).next((h=>{o[d]=h,++l,l===r&&n(o)}),(h=>i(h)))}}))}static doWhile(e,t){return new R(((n,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):n()};r()}))}}function Ag(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nn(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Qi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qi.ce=-1;/**
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
 */const Do=-1;function Ji(s){return s==null}function Ii(s){return s===0&&1/s==-1/0}function Sg(s){return typeof s=="number"&&Number.isInteger(s)&&!Ii(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const xd="";function Cg(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=zl(e)),e=xg(s.get(t),e);return zl(e)}function xg(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const r=s.charAt(i);switch(r){case"\0":t+="";break;case xd:t+="";break;default:t+=r}}return t}function zl(s){return s+xd+""}/**
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
 */function Wl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Ut(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Pd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=n??ve.RED,this.left=i??ve.EMPTY,this.right=r??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new ve(e??this.key,t??this.value,n??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,n,i,r){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gl(this.data.getIterator())}getIteratorFrom(e){return new Gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=n.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new fe(_e.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Rd("Invalid base64 string: "+r):r}})(e);return new we(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(s){if(X(!!s,39018),typeof s=="string"){let e=0;const t=Pg.exec(s);if(X(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ae(s.seconds),nanos:ae(s.nanos)}}function ae(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ot(s){return typeof s=="string"?we.fromBase64String(s):we.fromUint8Array(s)}/**
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
 */const Ld="server_timestamp",kd="__type__",Vd="__previous_value__",Dd="__local_write_time__";function Mo(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[kd])==null?void 0:n.stringValue)===Ld}function Yi(s){const e=s.mapValue.fields[Vd];return Mo(e)?Yi(e):e}function bs(s){const e=Mt(s.mapValue.fields[Dd].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Rg{constructor(e,t,n,i,r,o,l,c,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=h}}const Ti="(default)";class vs{constructor(e,t){this.projectId=e,this.database=t||Ti}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database===Ti}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Md="__type__",Lg="__max__",ti={mapValue:{}},Od="__vector__",Ai="value";function Nt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Mo(s)?4:Vg(s)?9007199254740991:kg(s)?10:11:j(28295,{value:s})}function it(s,e){if(s===e)return!0;const t=Nt(s);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return bs(s).isEqual(bs(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Mt(i.timestampValue),l=Mt(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,r){return Ot(i.bytesValue).isEqual(Ot(r.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,r){return ae(i.geoPointValue.latitude)===ae(r.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(r.geoPointValue.longitude)})(s,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return ae(i.integerValue)===ae(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=ae(i.doubleValue),l=ae(r.doubleValue);return o===l?Ii(o)===Ii(l):isNaN(o)&&isNaN(l)}return!1})(s,e);case 9:return Cn(s.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Wl(o)!==Wl(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!it(o[c],l[c])))return!1;return!0})(s,e);default:return j(52216,{left:s})}}function _s(s,e){return(s.values||[]).find((t=>it(t,e)))!==void 0}function xn(s,e){if(s===e)return 0;const t=Nt(s),n=Nt(e);if(t!==n)return Q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(s.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=ae(r.integerValue||r.doubleValue),c=ae(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(s,e);case 3:return Kl(s.timestampValue,e.timestampValue);case 4:return Kl(bs(s),bs(e));case 5:return ro(s.stringValue,e.stringValue);case 6:return(function(r,o){const l=Ot(r),c=Ot(o);return l.compareTo(c)})(s.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const h=Q(l[d],c[d]);if(h!==0)return h}return Q(l.length,c.length)})(s.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Q(ae(r.latitude),ae(o.latitude));return l!==0?l:Q(ae(r.longitude),ae(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return Ql(s.arrayValue,e.arrayValue);case 10:return(function(r,o){var g,_,C,L;const l=r.fields||{},c=o.fields||{},d=(g=l[Ai])==null?void 0:g.arrayValue,h=(_=c[Ai])==null?void 0:_.arrayValue,m=Q(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return m!==0?m:Ql(d,h)})(s.mapValue,e.mapValue);case 11:return(function(r,o){if(r===ti.mapValue&&o===ti.mapValue)return 0;if(r===ti.mapValue)return 1;if(o===ti.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),d=o.fields||{},h=Object.keys(d);c.sort(),h.sort();for(let m=0;m<c.length&&m<h.length;++m){const g=ro(c[m],h[m]);if(g!==0)return g;const _=xn(l[c[m]],d[h[m]]);if(_!==0)return _}return Q(c.length,h.length)})(s.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function Kl(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Q(s,e);const t=Mt(s),n=Mt(e),i=Q(t.seconds,n.seconds);return i!==0?i:Q(t.nanos,n.nanos)}function Ql(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const r=xn(t[i],n[i]);if(r)return r}return Q(t.length,n.length)}function Pn(s){return oo(s)}function oo(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=Mt(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return Ot(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return N.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",i=!0;for(const r of t.values||[])i?i=!1:n+=",",n+=oo(r);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of n)r?r=!1:i+=",",i+=`${o}:${oo(t.fields[o])}`;return i+"}"})(s.mapValue):j(61005,{value:s})}function li(s){switch(Nt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yi(s);return e?16+li(e):16;case 5:return 2*s.stringValue.length;case 6:return Ot(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,r)=>i+li(r)),0)})(s.arrayValue);case 10:case 11:return(function(n){let i=0;return Ut(n.fields,((r,o)=>{i+=r.length+li(o)})),i})(s.mapValue);default:throw j(13486,{value:s})}}function Jl(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function ao(s){return!!s&&"integerValue"in s}function Oo(s){return!!s&&"arrayValue"in s}function Yl(s){return!!s&&"nullValue"in s}function Xl(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function ci(s){return!!s&&"mapValue"in s}function kg(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Md])==null?void 0:n.stringValue)===Od}function ds(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Ut(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ds(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ds(s.arrayValue.values[t]);return e}return{...s}}function Vg(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Lg}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(t)}setAll(e){let t=_e.emptyPath(),n={},i=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}o?n[l.lastSegment()]=ds(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ut(t,((i,r)=>e[i]=r));for(const i of n)delete e[i]}clone(){return new De(ds(this.value))}}function Nd(s){const e=[];return Ut(s.fields,((t,n)=>{const i=new _e([t]);if(ci(n)){const r=Nd(n.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Fe(e)}/**
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
 */class Se{constructor(e,t,n,i,r,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Se(e,0,q.min(),q.min(),q.min(),De.empty(),0)}static newFoundDocument(e,t,n,i){return new Se(e,1,t,q.min(),n,i,0)}static newNoDocument(e,t){return new Se(e,2,t,q.min(),q.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,q.min(),q.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Si{constructor(e,t){this.position=e,this.inclusive=t}}function Zl(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const r=e[i],o=s.position[i];if(r.field.isKeyField()?n=N.comparator(N.fromName(o.referenceValue),t.key):n=xn(o,t.data.field(r.field)),r.dir==="desc"&&(n*=-1),n!==0)break}return n}function ec(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!it(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dg(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class $d{}class ue extends $d{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Og(e,t,n):t==="array-contains"?new Fg(e,n):t==="in"?new Ug(e,n):t==="not-in"?new Bg(e,n):t==="array-contains-any"?new jg(e,n):new ue(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ng(e,n):new $g(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xn(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends $d{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new We(e,t)}matches(e){return Fd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fd(s){return s.op==="and"}function Ud(s){return Mg(s)&&Fd(s)}function Mg(s){for(const e of s.filters)if(e instanceof We)return!1;return!0}function lo(s){if(s instanceof ue)return s.field.canonicalString()+s.op.toString()+Pn(s.value);if(Ud(s))return s.filters.map((e=>lo(e))).join(",");{const e=s.filters.map((t=>lo(t))).join(",");return`${s.op}(${e})`}}function Bd(s,e){return s instanceof ue?(function(n,i){return i instanceof ue&&n.op===i.op&&n.field.isEqual(i.field)&&it(n.value,i.value)})(s,e):s instanceof We?(function(n,i){return i instanceof We&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((r,o,l)=>r&&Bd(o,i.filters[l])),!0):!1})(s,e):void j(19439)}function jd(s){return s instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Pn(t.value)}`})(s):s instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(jd).join(" ,")+"}"})(s):"Filter"}class Og extends ue{constructor(e,t,n){super(e,t,n),this.key=N.fromName(n.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ng extends ue{constructor(e,t){super(e,"in",t),this.keys=Hd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $g extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Hd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hd(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>N.fromName(n.referenceValue)))}class Fg extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oo(t)&&_s(t.arrayValue,this.value)}}class Ug extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_s(this.value.arrayValue,t)}}class Bg extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_s(this.value.arrayValue,t)}}class jg extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>_s(this.value.arrayValue,n)))}}/**
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
 */class Hg{constructor(e,t=null,n=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function tc(s,e=null,t=[],n=[],i=null,r=null,o=null){return new Hg(s,e,t,n,i,r,o)}function No(s){const e=z(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>lo(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(r){return r.field.canonicalString()+r.dir})(n))).join(","),Ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Pn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Pn(n))).join(",")),e.Te=t}return e.Te}function $o(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Dg(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Bd(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!ec(s.startAt,e.startAt)&&ec(s.endAt,e.endAt)}function co(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Cs{constructor(e,t=null,n=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qg(s,e,t,n,i,r,o,l){return new Cs(s,e,t,n,i,r,o,l)}function Fo(s){return new Cs(s)}function nc(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function qd(s){return s.collectionGroup!==null}function us(s){const e=z(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new fe(_e.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ci(r,n))})),t.has(_e.keyField().canonicalString())||e.Ie.push(new Ci(_e.keyField(),n))}return e.Ie}function Xe(s){const e=z(s);return e.Ee||(e.Ee=zg(e,us(s))),e.Ee}function zg(s,e){if(s.limitType==="F")return tc(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Ci(i.field,r)}));const t=s.endAt?new Si(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Si(s.startAt.position,s.startAt.inclusive):null;return tc(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function uo(s,e){const t=s.filters.concat([e]);return new Cs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function ho(s,e,t){return new Cs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Xi(s,e){return $o(Xe(s),Xe(e))&&s.limitType===e.limitType}function zd(s){return`${No(Xe(s))}|lt:${s.limitType}`}function pn(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>jd(i))).join(", ")}]`),Ji(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>Pn(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>Pn(i))).join(",")),`Target(${n})`})(Xe(s))}; limitType=${s.limitType})`}function Zi(s,e){return e.isFoundDocument()&&(function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):N.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)})(s,e)&&(function(n,i){for(const r of us(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(s,e)&&(function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0})(s,e)&&(function(n,i){return!(n.startAt&&!(function(o,l,c){const d=Zl(o,l,c);return o.inclusive?d<=0:d<0})(n.startAt,us(n),i)||n.endAt&&!(function(o,l,c){const d=Zl(o,l,c);return o.inclusive?d>=0:d>0})(n.endAt,us(n),i))})(s,e)}function Wg(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Wd(s){return(e,t)=>{let n=!1;for(const i of us(s)){const r=Gg(i,e,t);if(r!==0)return r;n=n||i.field.isKeyField()}return 0}}function Gg(s,e,t){const n=s.field.isKeyField()?N.comparator(e.key,t.key):(function(r,o,l){const c=o.data.field(r),d=l.data.field(r);return c!==null&&d!==null?xn(c,d):j(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:s.dir})}}/**
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
 */class rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,r]of n)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return Pd(this.inner)}size(){return this.innerSize}}/**
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
 */const Kg=new re(N.comparator);function ht(){return Kg}const Gd=new re(N.comparator);function os(...s){let e=Gd;for(const t of s)e=e.insert(t.key,t);return e}function Kd(s){let e=Gd;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Jt(){return hs()}function Qd(){return hs()}function hs(){return new rn((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Qg=new re(N.comparator),Jg=new fe(N.comparator);function J(...s){let e=Jg;for(const t of s)e=e.add(t);return e}const Yg=new fe(Q);function Xg(){return Yg}/**
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
 */function Uo(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Jd(s){return{integerValue:""+s}}function Zg(s,e){return Sg(e)?Jd(e):Uo(s,e)}/**
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
 */class er{constructor(){this._=void 0}}function ey(s,e,t){return s instanceof xi?(function(i,r){const o={fields:{[kd]:{stringValue:Ld},[Dd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Mo(r)&&(r=Yi(r)),r&&(o.fields[Vd]=r),{mapValue:o}})(t,e):s instanceof ws?Xd(s,e):s instanceof Es?Zd(s,e):(function(i,r){const o=Yd(i,r),l=sc(o)+sc(i.Ae);return ao(o)&&ao(i.Ae)?Jd(l):Uo(i.serializer,l)})(s,e)}function ty(s,e,t){return s instanceof ws?Xd(s,e):s instanceof Es?Zd(s,e):t}function Yd(s,e){return s instanceof Pi?(function(n){return ao(n)||(function(r){return!!r&&"doubleValue"in r})(n)})(e)?e:{integerValue:0}:null}class xi extends er{}class ws extends er{constructor(e){super(),this.elements=e}}function Xd(s,e){const t=eu(e);for(const n of s.elements)t.some((i=>it(i,n)))||t.push(n);return{arrayValue:{values:t}}}class Es extends er{constructor(e){super(),this.elements=e}}function Zd(s,e){let t=eu(e);for(const n of s.elements)t=t.filter((i=>!it(i,n)));return{arrayValue:{values:t}}}class Pi extends er{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function sc(s){return ae(s.integerValue||s.doubleValue)}function eu(s){return Oo(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function ny(s,e){return s.field.isEqual(e.field)&&(function(n,i){return n instanceof ws&&i instanceof ws||n instanceof Es&&i instanceof Es?Cn(n.elements,i.elements,it):n instanceof Pi&&i instanceof Pi?it(n.Ae,i.Ae):n instanceof xi&&i instanceof xi})(s.transform,e.transform)}class sy{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class tr{}function tu(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Bo(s.key,je.none()):new xs(s.key,s.data,je.none());{const t=s.data,n=De.empty();let i=new fe(_e.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?n.delete(r):n.set(r,o),i=i.add(r)}return new Bt(s.key,n,new Fe(i.toArray()),je.none())}}function iy(s,e,t){s instanceof xs?(function(i,r,o){const l=i.value.clone(),c=rc(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(s,e,t):s instanceof Bt?(function(i,r,o){if(!di(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=rc(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(nu(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(s,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ps(s,e,t,n){return s instanceof xs?(function(r,o,l,c){if(!di(r.precondition,o))return l;const d=r.value.clone(),h=oc(r.fieldTransforms,c,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(s,e,t,n):s instanceof Bt?(function(r,o,l,c){if(!di(r.precondition,o))return l;const d=oc(r.fieldTransforms,c,o),h=o.data;return h.setAll(nu(r)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((m=>m.field)))})(s,e,t,n):(function(r,o,l){return di(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(s,e,t)}function ry(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),r=Yd(n.transform,i||null);r!=null&&(t===null&&(t=De.empty()),t.set(n.field,r))}return t||null}function ic(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Cn(n,i,((r,o)=>ny(r,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class xs extends tr{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bt extends tr{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nu(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function rc(s,e,t){const n=new Map;X(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let i=0;i<t.length;i++){const r=s[i],o=r.transform,l=e.data.field(r.field);n.set(r.field,ty(o,l,t[i]))}return n}function oc(s,e,t){const n=new Map;for(const i of s){const r=i.transform,o=t.data.field(i.field);n.set(i.field,ey(r,o,e))}return n}class Bo extends tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oy extends tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ay{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&iy(r,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ps(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ps(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Qd();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(i.key)?null:l;const c=tu(o,l);c!==null&&n.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Cn(this.mutations,e.mutations,((t,n)=>ic(t,n)))&&Cn(this.baseMutations,e.baseMutations,((t,n)=>ic(t,n)))}}class jo{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){X(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=(function(){return Qg})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,n[o].version);return new jo(e,t,n,i)}}/**
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
 */class ly{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,Y;function dy(s){switch(s){case P.OK:return j(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return j(15467,{code:s})}}function su(s){if(s===void 0)return ut("GRPC error has no .code"),P.UNKNOWN;switch(s){case de.OK:return P.OK;case de.CANCELLED:return P.CANCELLED;case de.UNKNOWN:return P.UNKNOWN;case de.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case de.INTERNAL:return P.INTERNAL;case de.UNAVAILABLE:return P.UNAVAILABLE;case de.UNAUTHENTICATED:return P.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case de.NOT_FOUND:return P.NOT_FOUND;case de.ALREADY_EXISTS:return P.ALREADY_EXISTS;case de.PERMISSION_DENIED:return P.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case de.ABORTED:return P.ABORTED;case de.OUT_OF_RANGE:return P.OUT_OF_RANGE;case de.UNIMPLEMENTED:return P.UNIMPLEMENTED;case de.DATA_LOSS:return P.DATA_LOSS;default:return j(39323,{code:s})}}(Y=de||(de={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uy(){return new TextEncoder}/**
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
 */const hy=new kt([4294967295,4294967295],0);function ac(s){const e=uy().encode(s),t=new bd;return t.update(e),new Uint8Array(t.digest())}function lc(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new kt([t,n],0),new kt([i,r],0)]}class Ho{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new as(`Invalid padding: ${t}`);if(n<0)throw new as(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new as(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=kt.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(kt.fromNumber(n)));return i.compare(hy)===1&&(i=new kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ac(e),[n,i]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(n,i,r);if(!this.we(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ho(r,i,t);return n.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=ac(e),[n,i]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(n,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nr{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ps.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nr(q.min(),i,new re(Q),ht(),J())}}class Ps{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ps(n,t,J(),J(),J())}}/**
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
 */class ui{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class iu{constructor(e,t){this.targetId=e,this.Ce=t}}class ru{constructor(e,t,n=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class cc{constructor(){this.ve=0,this.Fe=dc(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),n=J();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:j(38017,{changeType:r})}})),new Ps(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=dc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class py{constructor(e){this.Ge=e,this.ze=new Map,this.je=ht(),this.Je=ni(),this.He=ni(),this.Ye=new re(Q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:j(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(co(r))if(n===0){const o=new N(r.path);this.et(t,o,Se.newNoDocument(o,q.min()))}else X(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=t;let o,l;try{o=Ot(n).toUint8Array()}catch(c){if(c instanceof Rd)return Sn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ho(o,i,r)}catch(c){return Sn(c instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&co(l.target)){const c=new N(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Se.newNoDocument(c,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let n=J();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new nr(e,t,this.Ye,this.je,n);return this.je=ht(),this.Je=ni(),this.He=ni(),this.Ye=new re(Q),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new cc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(Q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ni(){return new re(N.comparator)}function dc(){return new re(N.comparator)}const my={asc:"ASCENDING",desc:"DESCENDING"},fy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gy={and:"AND",or:"OR"};class yy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function po(s,e){return s.useProto3Json||Ji(e)?e:{value:e}}function Ri(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ou(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function by(s,e){return Ri(s,e.toTimestamp())}function Ze(s){return X(!!s,49232),q.fromTimestamp((function(t){const n=Mt(t);return new se(n.seconds,n.nanos)})(s))}function qo(s,e){return mo(s,e).canonicalString()}function mo(s,e){const t=(function(i){return new ee(["projects",i.projectId,"databases",i.database])})(s).child("documents");return e===void 0?t:t.child(e)}function au(s){const e=ee.fromString(s);return X(hu(e),10190,{key:e.toString()}),e}function fo(s,e){return qo(s.databaseId,e.path)}function Wr(s,e){const t=au(e);if(t.get(1)!==s.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new N(cu(t))}function lu(s,e){return qo(s.databaseId,e)}function vy(s){const e=au(s);return e.length===4?ee.emptyPath():cu(e)}function go(s){return new ee(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function cu(s){return X(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function uc(s,e,t){return{name:fo(s,e),fields:t.value.mapValue.fields}}function _y(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,h){return d.useProto3Json?(X(h===void 0||typeof h=="string",58123),we.fromBase64String(h||"")):(X(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),we.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(d){const h=d.code===void 0?P.UNKNOWN:su(d.code);return new V(h,d.message||"")})(o);t=new ru(n,i,r,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Wr(s,n.document.name),r=Ze(n.document.updateTime),o=n.document.createTime?Ze(n.document.createTime):q.min(),l=new De({mapValue:{fields:n.document.fields}}),c=Se.newFoundDocument(i,r,o,l),d=n.targetIds||[],h=n.removedTargetIds||[];t=new ui(d,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Wr(s,n.document),r=n.readTime?Ze(n.readTime):q.min(),o=Se.newNoDocument(i,r),l=n.removedTargetIds||[];t=new ui([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Wr(s,n.document),r=n.removedTargetIds||[];t=new ui([],r,i,null)}else{if(!("filter"in e))return j(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:r}=n,o=new cy(i,r),l=n.targetId;t=new iu(l,o)}}return t}function wy(s,e){let t;if(e instanceof xs)t={update:uc(s,e.key,e.value)};else if(e instanceof Bo)t={delete:fo(s,e.key)};else if(e instanceof Bt)t={update:uc(s,e.key,e.data),updateMask:Ry(e.fieldMask)};else{if(!(e instanceof oy))return j(16599,{Vt:e.type});t={verify:fo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(r,o){const l=o.transform;if(l instanceof xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ws)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Es)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw j(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:by(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j(27497)})(s,e.precondition)),t}function Ey(s,e){return s&&s.length>0?(X(e!==void 0,14353),s.map((t=>(function(i,r){let o=i.updateTime?Ze(i.updateTime):Ze(r);return o.isEqual(q.min())&&(o=Ze(r)),new sy(o,i.transformResults||[])})(t,e)))):[]}function Iy(s,e){return{documents:[lu(s,e.path)]}}function Ty(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=lu(s,i);const r=(function(d){if(d.length!==0)return uu(We.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((h=>(function(g){return{field:mn(g.field),direction:Cy(g.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=po(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function Ay(s){let e=vy(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){X(n===1,65062);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=(function(m){const g=du(m);return g instanceof We&&Ud(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((g=>(function(C){return new Ci(fn(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let g;return g=typeof m=="object"?m.value:m,Ji(g)?null:g})(t.limit));let c=null;t.startAt&&(c=(function(m){const g=!!m.before,_=m.values||[];return new Si(_,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,_=m.values||[];return new Si(_,g)})(t.endAt)),qg(e,i,o,r,l,"F",c,d)}function Sy(s,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function du(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=fn(t.unaryFilter.field);return ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=fn(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fn(t.unaryFilter.field);return ue.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fn(t.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(s):s.fieldFilter!==void 0?(function(t){return ue.create(fn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((n=>du(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(t.compositeFilter.op))})(s):j(30097,{filter:s})}function Cy(s){return my[s]}function xy(s){return fy[s]}function Py(s){return gy[s]}function mn(s){return{fieldPath:s.canonicalString()}}function fn(s){return _e.fromServerFormat(s.fieldPath)}function uu(s){return s instanceof ue?(function(t){if(t.op==="=="){if(Xl(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NAN"}};if(Yl(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xl(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NAN"}};if(Yl(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(t.field),op:xy(t.op),value:t.value}}})(s):s instanceof We?(function(t){const n=t.getFilters().map((i=>uu(i)));return n.length===1?n[0]:{compositeFilter:{op:Py(t.op),filters:n}}})(s):j(54877,{filter:s})}function Ry(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hu(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,n,i,r=q.min(),o=q.min(),l=we.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ly{constructor(e){this.yt=e}}function ky(s){const e=Ay({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
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
 */class Vy{constructor(){this.Cn=new Dy}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Dt.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Dy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new fe(ee.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new fe(ee.comparator)).toArray()}}/**
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
 */const hc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pu=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(pu,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
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
 */class Rn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Rn(0)}static cr(){return new Rn(-1)}}/**
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
 */const pc="LruGarbageCollector",My=1048576;function mc([s,e],[t,n]){const i=Q(s,t);return i===0?Q(e,n):i}class Oy{constructor(e){this.Ir=e,this.buffer=new fe(mc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();mc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ny{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(pc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nn(t)?D(pc,"Ignoring IndexedDB error during garbage collection: ",t):await On(t)}await this.Vr(3e5)}))}}class $y{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Qi.ce);const n=new Oy(t);return this.mr.forEachTarget(e,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(hc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,r,o,l,c,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(n=m,l=Date.now(),this.removeTargets(e,n,t)))).next((m=>(r=m,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(d=Date.now(),hn()<=K.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(d-c)+`ms
Total Duration: ${d-h}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:m}))))}}function Fy(s,e){return new $y(s,e)}/**
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
 */class Uy{constructor(){this.changes=new rn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class By{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jy{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&ps(n.mutation,i,Fe.empty(),se.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,J()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=J()){const i=Jt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((r=>{let o=os();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Jt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,J())))}populateOverlays(e,t,n){const i=[];return n.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,n,i){let r=ht();const o=hs(),l=(function(){return hs()})();return t.forEach(((c,d)=>{const h=n.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Bt)?r=r.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),ps(h.mutation,d,h.mutation.getFieldMask(),se.now())):o.set(d.key,Fe.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((d,h)=>o.set(d,h))),t.forEach(((d,h)=>l.set(d,new By(h,o.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const n=hs();let i=new re(((o,l)=>o-l)),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const d=t.get(c);if(d===null)return;let h=n.get(c)||Fe.empty();h=l.applyToLocalView(d,h),n.set(c,h);const m=(i.get(l.batchId)||J()).add(c);i=i.insert(l.batchId,m)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,h=c.value,m=Qd();h.forEach((g=>{if(!r.has(g)){const _=tu(t.get(g),n.get(g));_!==null&&m.set(g,_),r=r.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return R.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):R.resolve(Jt());let l=ys,c=r;return o.next((d=>R.forEach(d,((h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(h)?R.resolve():this.remoteDocumentCache.getEntry(e,h).next((g=>{c=c.insert(h,g)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,c,d,J()))).next((h=>({batchId:l,changes:Kd(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next((n=>{let i=os();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let o=os();return this.indexManager.getCollectionParents(e,r).next((l=>R.forEach(l,(c=>{const d=(function(m,g){return new Cs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next((h=>{h.forEach(((m,g)=>{o=o.insert(m,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i)))).next((o=>{r.forEach(((c,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,Se.newInvalidDocument(h)))}));let l=os();return o.forEach(((c,d)=>{const h=r.get(c);h!==void 0&&ps(h.mutation,d,Fe.empty(),se.now()),Zi(t,d)&&(l=l.insert(c,d))})),l}))}}/**
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
 */class Hy{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Ze(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:ky(i.bundledQuery),readTime:Ze(i.readTime)}})(t)),R.resolve()}}/**
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
 */class qy{constructor(){this.overlays=new re(N.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Jt();return R.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&n.set(i,r)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,r)=>{this.St(e,t,r)})),R.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const i=Jt(),r=t.length+1,o=new N(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&c.largestBatchId>n&&i.set(c.getKey(),c)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new re(((d,h)=>d-h));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let h=r.get(d.largestBatchId);h===null&&(h=Jt(),r=r.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const l=Jt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,h)=>l.set(d,h))),!(l.size()>=i)););return R.resolve(l)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ly(t,n));let r=this.qr.get(t);r===void 0&&(r=J(),this.qr.set(t,r)),this.qr.set(t,r.add(n.key))}}/**
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
 */class zy{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class zo{constructor(){this.Qr=new fe(ye.$r),this.Ur=new fe(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new ye(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new N(new ee([])),n=new ye(t,e),i=new ye(t,e+1),r=[];return this.Ur.forEachInRange([n,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new N(new ee([])),n=new ye(t,e),i=new ye(t,e+1);let r=J();return this.Ur.forEachInRange([n,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new ye(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return N.comparator(e.key,t.key)||Q(e.Yr,t.Yr)}static Kr(e,t){return Q(e.Yr,t.Yr)||N.comparator(e.key,t.key)}}/**
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
 */class Wy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ye.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ay(r,t,n,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ye(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Do:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([n,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fe(Q);return t.forEach((i=>{const r=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{n=n.add(l.Yr)}))})),R.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;N.isDocumentKey(r)||(r=r.child(""));const o=new ye(new N(r),0);let l=new fe(Q);return this.Zr.forEachWhile((c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Yr)),!0)}),o),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((n=>{const i=this.Xr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){X(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return R.forEach(t.mutations,(i=>{const r=new ye(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new ye(t,0),i=this.Zr.firstAfterOrEqual(n);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gy{constructor(e){this.ri=e,this.docs=(function(){return new re(N.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let n=ht();return t.forEach((i=>{const r=this.docs.get(i);n=n.insert(i,r?r.document.mutableCopy():Se.newInvalidDocument(i))})),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=ht();const o=t.path,l=new N(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:h}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Eg(wg(h),n)<=0||(i.has(h.key)||Zi(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,t,n,i){j(9500)}ii(e,t){return R.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Ky(this)}getSize(e){return R.resolve(this.size)}}class Ky extends Uy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Qy{constructor(e){this.persistence=e,this.si=new rn((t=>No(t)),$o),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new zo,this.targetCount=0,this.ai=Rn.ur()}forEachTarget(e,t){return this.si.forEach(((n,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),R.waitFor(r).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),R.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class mu{constructor(e,t){this.ui={},this.overlays={},this.ci=new Qi(0),this.li=!1,this.li=!0,this.hi=new zy,this.referenceDelegate=e(this),this.Pi=new Qy(this),this.indexManager=new Vy,this.remoteDocumentCache=(function(i){return new Gy(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new Ly(t),this.Ii=new Hy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Wy(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const i=new Jy(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return R.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class Jy extends Tg{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Ri=new zo,this.Vi=null}static mi(e){return new Wo(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(n=>{const i=N.fromPath(n);return this.gi(e,i).next((r=>{r||t.removeEntry(i,q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Li{constructor(e,t){this.persistence=e,this.pi=new rn((n=>Cg(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Fy(this,t)}static mi(e,t){return new Li(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((n,i)=>this.br(e,n,i).next((r=>r?R.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((l=>{l||(n++,r.removeEntry(o,q.min()))})))).next((()=>r.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=li(e.data.value)),t}br(e,t,n){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return R.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Go{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=J(),i=J();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Go(e,t.fromCache,n,i)}}/**
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
 */class Yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jm()?8:Ag(Ce())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,i,n).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Yy;return this.Ss(e,t,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,t,o,l.size)}))})).next((()=>r.result))}bs(e,t,n,i){return n.documentReadCount<this.fs?(hn()<=K.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(hn()<=K.DEBUG&&D("QueryEngine","Query:",pn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(hn()<=K.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):R.resolve())}ys(e,t){if(nc(t))return R.resolve(null);let n=Xe(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ho(t,null,"F"),n=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=J(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,n).next((c=>{const d=this.Ds(t,l);return this.Cs(t,d,o,c.readTime)?this.ys(e,ho(t,null,"F")):this.vs(e,d,t,c)}))))})))))}ws(e,t,n,i){return nc(t)||i.isEqual(q.min())?R.resolve(null):this.ps.getDocuments(e,n).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,n,i)?R.resolve(null):(hn()<=K.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pn(t)),this.vs(e,o,t,_g(i,ys)).next((l=>l)))}))}Ds(e,t){let n=new fe(Wd(e));return t.forEach(((i,r)=>{Zi(e,r)&&(n=n.add(r))})),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,n){return hn()<=K.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",pn(t)),this.ps.getDocumentsMatchingQuery(e,t,Dt.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const Ko="LocalStore",Zy=3e8;class eb{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new re(Q),this.xs=new rn((r=>No(r)),$o),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jy(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function tb(s,e,t,n){return new eb(s,e,t,n)}async function fu(s,e){const t=z(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((r=>{const o=[],l=[];let c=J();for(const d of i){o.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}for(const d of r){l.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next((d=>({Ls:d,removedBatchIds:o,addedBatchIds:l})))}))}))}function nb(s,e){const t=z(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,d,h){const m=d.batch,g=m.keys();let _=R.resolve();return g.forEach((C=>{_=_.next((()=>h.getEntry(c,C))).next((L=>{const x=d.docVersions.get(C);X(x!==null,48541),L.version.compareTo(x)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),h.addEntry(L)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,m)))})(t,n,e,r).next((()=>r.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let c=J();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function gu(s){const e=z(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function sb(s,e){const t=z(s),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach(((h,m)=>{const g=i.get(m);if(!g)return;l.push(t.Pi.removeMatchingKeys(r,h.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(r,h.addedDocuments,m))));let _=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(we.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,n)),i=i.insert(m,_),(function(L,x,M){return L.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Zy?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(g,_,h)&&l.push(t.Pi.updateTargetData(r,_))}));let c=ht(),d=J();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))})),l.push(ib(r,o,e.documentUpdates).next((h=>{c=h.ks,d=h.qs}))),!n.isEqual(q.min())){const h=t.Pi.getLastRemoteSnapshotVersion(r).next((m=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,n)));l.push(h)}return R.waitFor(l).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,c,d))).next((()=>c))})).then((r=>(t.Ms=i,r)))}function ib(s,e,t){let n=J(),i=J();return t.forEach((r=>n=n.add(r))),e.getEntries(s,n).next((r=>{let o=ht();return t.forEach(((l,c)=>{const d=r.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):D(Ko,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function rb(s,e){const t=z(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Do),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function ob(s,e){const t=z(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.Pi.getTargetData(n,e).next((r=>r?(i=r,R.resolve(i)):t.Pi.allocateTargetId(n).next((o=>(i=new xt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function yo(s,e,t){const n=z(s),i=n.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",r,(o=>n.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Nn(o))throw o;D(Ko,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function fc(s,e,t){const n=z(s);let i=q.min(),r=J();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,d,h){const m=z(c),g=m.xs.get(h);return g!==void 0?R.resolve(m.Ms.get(g)):m.Pi.getTargetData(d,h)})(n,o,Xe(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?r:J()))).next((l=>(ab(n,Wg(e),l),{documents:l,Qs:r})))))}function ab(s,e,t){let n=s.Os.get(e)||q.min();t.forEach(((i,r)=>{r.readTime.compareTo(n)>0&&(n=r.readTime)})),s.Os.set(e,n)}class gc{constructor(){this.activeTargetIds=Xg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lb{constructor(){this.Mo=new gc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new gc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cb{Oo(e){}shutdown(){}}/**
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
 */const yc="ConnectivityMonitor";class bc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(yc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(yc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let si=null;function bo(){return si===null?si=(function(){return 268435456+Math.round(2147483648*Math.random())})():si++,"0x"+si.toString(16)}/**
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
 */const Gr="RestConnection",db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ub{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Ti?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,r){const o=bo(),l=this.zo(e,t.toUriEncodedString());D(Gr,`Sending RPC '${e}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:d}=new URL(l),h=Vn(d);return this.Jo(e,l,c,n,h).then((m=>(D(Gr,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw Sn(Gr,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",n),m}))}Ho(e,t,n,i,r,o){return this.Go(e,t,n,i,r)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),n&&n.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const n=db[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class hb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ie="WebChannelConnection";class pb extends ub{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,r){const o=bo();return new Promise(((l,c)=>{const d=new vd;d.setWithCredentials(!0),d.listenOnce(_d.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case ai.NO_ERROR:const m=d.getResponseJson();D(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ai.TIMEOUT:D(Ie,`RPC '${e}' ${o} timed out`),c(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const g=d.getStatus();if(D(Ie,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const L=(function(M){const F=M.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN})(C.status);c(new V(L,C.message))}else c(new V(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new V(P.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(Ie,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(i);D(Ie,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",h,n,15)}))}T_(e,t,n){const i=bo(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Id(),l=Ed(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const h=r.join("");D(Ie,`Creating RPC '${e}' stream ${i}: ${h}`,c);const m=o.createWebChannel(h,c);this.I_(m);let g=!1,_=!1;const C=new hb({Yo:x=>{_?D(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(g||(D(Ie,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),D(Ie,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Zo:()=>m.close()}),L=(x,M,F)=>{x.listen(M,(H=>{try{F(H)}catch(te){setTimeout((()=>{throw te}),0)}}))};return L(m,rs.EventType.OPEN,(()=>{_||(D(Ie,`RPC '${e}' stream ${i} transport opened.`),C.o_())})),L(m,rs.EventType.CLOSE,(()=>{_||(_=!0,D(Ie,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(m))})),L(m,rs.EventType.ERROR,(x=>{_||(_=!0,Sn(Ie,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new V(P.UNAVAILABLE,"The operation could not be completed")))})),L(m,rs.EventType.MESSAGE,(x=>{var M;if(!_){const F=x.data[0];X(!!F,16349);const H=F,te=(H==null?void 0:H.error)||((M=H[0])==null?void 0:M.error);if(te){D(Ie,`RPC '${e}' stream ${i} received error:`,te);const pe=te.status;let ie=(function(v){const I=de[v];if(I!==void 0)return su(I)})(pe),E=te.message;ie===void 0&&(ie=P.INTERNAL,E="Unknown error status: "+pe+" with message "+te.message),_=!0,C.a_(new V(ie,E)),m.close()}else D(Ie,`RPC '${e}' stream ${i} received:`,F),C.u_(F)}})),L(l,wd.STAT_EVENT,(x=>{x.stat===io.PROXY?D(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===io.NOPROXY&&D(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Kr(){return typeof document<"u"?document:null}/**
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
 */function sr(s){return new yy(s,!0)}/**
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
 */class yu{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const vc="PersistentStream";class bu{constructor(e,t,n,i,r,o,l,c){this.Mi=e,this.S_=n,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===t&&this.G_(n,i)}),(n=>{e((()=>{const i=new V(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(vc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(D(vc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mb extends bu{constructor(e,t,n,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_y(this.serializer,e),n=(function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Ze(o.readTime):q.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=go(this.serializer),t.addTarget=(function(r,o){let l;const c=o.target;if(l=co(c)?{documents:Iy(r,c)}:{query:Ty(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ou(r,o.resumeToken);const d=po(r,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(q.min())>0){l.readTime=Ri(r,o.snapshotVersion.toTimestamp());const d=po(r,o.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const n=Sy(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=go(this.serializer),t.removeTarget=e,this.q_(t)}}class fb extends bu{constructor(e,t,n,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ey(e.writeResults,e.commitTime),n=Ze(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=go(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>wy(this.serializer,n)))};this.q_(t)}}/**
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
 */class gb{}class yb extends gb{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,mo(t,n),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(P.UNKNOWN,r.toString())}))}Ho(e,t,n,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,mo(t,n),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ut(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const tn="RemoteStore";class vb{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{on(this)&&(D(tn,"Restarting streams for network reachability change."),await(async function(c){const d=z(c);d.Ea.add(4),await Rs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ir(d)})(this))}))})),this.Ra=new bb(n,i)}}async function ir(s){if(on(s))for(const e of s.da)await e(!0)}async function Rs(s){for(const e of s.da)await e(!1)}function vu(s,e){const t=z(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xo(t)?Yo(t):$n(t).O_()&&Jo(t,e))}function Qo(s,e){const t=z(s),n=$n(t);t.Ia.delete(e),n.O_()&&_u(t,e),t.Ia.size===0&&(n.O_()?n.L_():on(t)&&t.Ra.set("Unknown"))}function Jo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$n(s).Y_(e)}function _u(s,e){s.Va.Ue(e),$n(s).Z_(e)}function Yo(s){s.Va=new py({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),$n(s).start(),s.Ra.ua()}function Xo(s){return on(s)&&!$n(s).x_()&&s.Ia.size>0}function on(s){return z(s).Ea.size===0}function wu(s){s.Va=void 0}async function _b(s){s.Ra.set("Online")}async function wb(s){s.Ia.forEach(((e,t)=>{Jo(s,e)}))}async function Eb(s,e){wu(s),Xo(s)?(s.Ra.ha(e),Yo(s)):s.Ra.set("Unknown")}async function Ib(s,e,t){if(s.Ra.set("Online"),e instanceof ru&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(s,e)}catch(n){D(tn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ki(s,n)}else if(e instanceof ui?s.Va.Ze(e):e instanceof iu?s.Va.st(e):s.Va.tt(e),!t.isEqual(q.min()))try{const n=await gu(s.localStore);t.compareTo(n)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.Ia.get(d);h&&r.Ia.set(d,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,d)=>{const h=r.Ia.get(c);if(!h)return;r.Ia.set(c,h.withResumeToken(we.EMPTY_BYTE_STRING,h.snapshotVersion)),_u(r,c);const m=new xt(h.target,c,d,h.sequenceNumber);Jo(r,m)})),r.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){D(tn,"Failed to raise snapshot:",n),await ki(s,n)}}async function ki(s,e,t){if(!Nn(e))throw e;s.Ea.add(1),await Rs(s),s.Ra.set("Offline"),t||(t=()=>gu(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{D(tn,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await ir(s)}))}function Eu(s,e){return e().catch((t=>ki(s,t,e)))}async function rr(s){const e=z(s),t=$t(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Do;for(;Tb(e);)try{const i=await rb(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,Ab(e,i)}catch(i){await ki(e,i)}Iu(e)&&Tu(e)}function Tb(s){return on(s)&&s.Ta.length<10}function Ab(s,e){s.Ta.push(e);const t=$t(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Iu(s){return on(s)&&!$t(s).x_()&&s.Ta.length>0}function Tu(s){$t(s).start()}async function Sb(s){$t(s).ra()}async function Cb(s){const e=$t(s);for(const t of s.Ta)e.ea(t.mutations)}async function xb(s,e,t){const n=s.Ta.shift(),i=jo.from(n,e,t);await Eu(s,(()=>s.remoteSyncer.applySuccessfulWrite(i))),await rr(s)}async function Pb(s,e){e&&$t(s).X_&&await(async function(n,i){if((function(o){return dy(o)&&o!==P.ABORTED})(i.code)){const r=n.Ta.shift();$t(n).B_(),await Eu(n,(()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i))),await rr(n)}})(s,e),Iu(s)&&Tu(s)}async function _c(s,e){const t=z(s);t.asyncQueue.verifyOperationInProgress(),D(tn,"RemoteStore received new credentials");const n=on(t);t.Ea.add(3),await Rs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ir(t)}async function Rb(s,e){const t=z(s);e?(t.Ea.delete(2),await ir(t)):e||(t.Ea.add(2),await Rs(t),t.Ra.set("Unknown"))}function $n(s){return s.ma||(s.ma=(function(t,n,i){const r=z(t);return r.sa(),new mb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(s.datastore,s.asyncQueue,{Xo:_b.bind(null,s),t_:wb.bind(null,s),r_:Eb.bind(null,s),H_:Ib.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Xo(s)?Yo(s):s.Ra.set("Unknown")):(await s.ma.stop(),wu(s))}))),s.ma}function $t(s){return s.fa||(s.fa=(function(t,n,i){const r=z(t);return r.sa(),new fb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sb.bind(null,s),r_:Pb.bind(null,s),ta:Cb.bind(null,s),na:xb.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await rr(s)):(await s.fa.stop(),s.Ta.length>0&&(D(tn,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
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
 */class Zo{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const o=Date.now()+n,l=new Zo(e,t,o,i,r);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(s,e){if(ut("AsyncQueue",`${e}: ${s}`),Nn(s))return new V(P.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class yn{static emptySet(e){return new yn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||N.comparator(t.key,n.key):(t,n)=>N.comparator(t.key,n.key),this.keyedMap=os(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=n.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new yn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class wc{constructor(){this.ga=new re(N.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ln{constructor(e,t,n,i,r,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,r){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Ln(e,t,yn.emptySet(t),o,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Lb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class kb{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=z(t),r=i.queries;i.queries=Ec(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(n)}))})(this,new V(P.ABORTED,"Firestore shutting down"))}}function Ec(){return new rn((s=>zd(s)),Xi)}async function Au(s,e){const t=z(s);let n=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(n=2):(r=new Lb,n=e.Da()?0:1);try{switch(n){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=ea(o,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&ta(t)}async function Su(s,e){const t=z(s),n=e.query;let i=3;const r=t.queries.get(n);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Vb(s,e){const t=z(s);let n=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(n=!0);o.wa=i}}n&&ta(t)}function Db(s,e,t){const n=z(s),i=n.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);n.queries.delete(e)}function ta(s){s.Ca.forEach((e=>{e.next()}))}var vo,Ic;(Ic=vo||(vo={})).Ma="default",Ic.Cache="cache";class Cu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Ln(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vo.Cache}}/**
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
 */class xu{constructor(e){this.key=e}}class Pu{constructor(e){this.key=e}}class Mb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=Wd(e),this.tu=new yn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new wc,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((h,m)=>{const g=i.get(h),_=Zi(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),L=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;g&&_?g.data.isEqual(_.data)?C!==L&&(n.track({type:3,doc:_}),x=!0):this.su(g,_)||(n.track({type:2,doc:_}),x=!0,(c&&this.eu(_,c)>0||d&&this.eu(_,d)<0)&&(l=!0)):!g&&_?(n.track({type:0,doc:_}),x=!0):g&&!_&&(n.track({type:1,doc:g}),x=!0,(c||d)&&(l=!0)),x&&(_?(o=o.add(_),r=L?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,Cs:l,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,m)=>(function(_,C){const L=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:x})}};return L(_)-L(C)})(h.type,m.type)||this.eu(h.doc,m.doc))),this.ou(n),i=i??!1;const l=t&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,d=c!==this.Za;return this.Za=c,o.length!==0||d?{snapshot:new Ln(this.query,e.tu,r,o,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Pu(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new xu(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ln.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const na="SyncEngine";class Ob{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Nb{constructor(e){this.key=e,this.hu=!1}}class $b{constructor(e,t,n,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new rn((l=>zd(l)),Xi),this.Iu=new Map,this.Eu=new Set,this.du=new re(N.comparator),this.Au=new Map,this.Ru=new zo,this.Vu={},this.mu=new Map,this.fu=Rn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fb(s,e,t=!0){const n=Mu(s);let i;const r=n.Tu.get(e);return r?(n.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Ru(n,e,t,!0),i}async function Ub(s,e){const t=Mu(s);await Ru(t,e,!0,!1)}async function Ru(s,e,t,n){const i=await ob(s.localStore,Xe(e)),r=i.targetId,o=s.sharedClientState.addLocalQueryTarget(r,t);let l;return n&&(l=await Bb(s,e,r,o==="current",i.resumeToken)),s.isPrimaryClient&&t&&vu(s.remoteStore,i),l}async function Bb(s,e,t,n,i){s.pu=(m,g,_)=>(async function(L,x,M,F){let H=x.view.ru(M);H.Cs&&(H=await fc(L.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,H))));const te=F&&F.targetChanges.get(x.targetId),pe=F&&F.targetMismatches.get(x.targetId)!=null,ie=x.view.applyChanges(H,L.isPrimaryClient,te,pe);return Ac(L,x.targetId,ie.au),ie.snapshot})(s,m,g,_);const r=await fc(s.localStore,e,!0),o=new Mb(e,r.Qs),l=o.ru(r.documents),c=Ps.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),d=o.applyChanges(l,s.isPrimaryClient,c);Ac(s,t,d.au);const h=new Ob(e,t,o);return s.Tu.set(e,h),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function jb(s,e,t){const n=z(s),i=n.Tu.get(e),r=n.Iu.get(i.targetId);if(r.length>1)return n.Iu.set(i.targetId,r.filter((o=>!Xi(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await yo(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Qo(n.remoteStore,i.targetId),_o(n,i.targetId)})).catch(On)):(_o(n,i.targetId),await yo(n.localStore,i.targetId,!0))}async function Hb(s,e){const t=z(s),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Qo(t.remoteStore,n.targetId))}async function qb(s,e,t){const n=Yb(s);try{const i=await(function(o,l){const c=z(o),d=se.now(),h=l.reduce(((_,C)=>_.add(C.key)),J());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=ht(),L=J();return c.Ns.getEntries(_,h).next((x=>{C=x,C.forEach(((M,F)=>{F.isValidDocument()||(L=L.add(M))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,C))).next((x=>{m=x;const M=[];for(const F of l){const H=ry(F,m.get(F.key).overlayedDocument);H!=null&&M.push(new Bt(F.key,H,Nd(H.value.mapValue),je.exists(!0)))}return c.mutationQueue.addMutationBatch(_,d,M,l)})).next((x=>{g=x;const M=x.applyToLocalDocumentSet(m,L);return c.documentOverlayCache.saveOverlays(_,x.batchId,M)}))})).then((()=>({batchId:g.batchId,changes:Kd(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let d=o.Vu[o.currentUser.toKey()];d||(d=new re(Q)),d=d.insert(l,c),o.Vu[o.currentUser.toKey()]=d})(n,i.batchId,t),await Ls(n,i.changes),await rr(n.remoteStore)}catch(i){const r=ea(i,"Failed to persist write");t.reject(r)}}async function Lu(s,e){const t=z(s);try{const n=await sb(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?X(o.hu,14607):i.removedDocuments.size>0&&(X(o.hu,42227),o.hu=!1))})),await Ls(t,n,e)}catch(n){await On(n)}}function Tc(s,e,t){const n=z(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=z(o);c.onlineState=l;let d=!1;c.queries.forEach(((h,m)=>{for(const g of m.Sa)g.va(l)&&(d=!0)})),d&&ta(c)})(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function zb(s,e,t){const n=z(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),r=i&&i.key;if(r){let o=new re(N.comparator);o=o.insert(r,Se.newNoDocument(r,q.min()));const l=J().add(r),c=new nr(q.min(),new Map,new re(Q),o,l);await Lu(n,c),n.du=n.du.remove(r),n.Au.delete(e),sa(n)}else await yo(n.localStore,e,!1).then((()=>_o(n,e,t))).catch(On)}async function Wb(s,e){const t=z(s),n=e.batch.batchId;try{const i=await nb(t.localStore,e);Vu(t,n,null),ku(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ls(t,i)}catch(i){await On(i)}}async function Gb(s,e,t){const n=z(s);try{const i=await(function(o,l){const c=z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let h;return c.mutationQueue.lookupMutationBatch(d,l).next((m=>(X(m!==null,37113),h=m.keys(),c.mutationQueue.removeMutationBatch(d,m)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h))).next((()=>c.localDocuments.getDocuments(d,h)))}))})(n.localStore,e);Vu(n,e,t),ku(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ls(n,i)}catch(i){await On(i)}}function ku(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Vu(s,e,t){const n=z(s);let i=n.Vu[n.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function _o(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Du(s,n)}))}function Du(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Qo(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),sa(s))}function Ac(s,e,t){for(const n of t)n instanceof xu?(s.Ru.addReference(n.key,e),Kb(s,n)):n instanceof Pu?(D(na,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Du(s,n.key)):j(19791,{wu:n})}function Kb(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(D(na,"New document in limbo: "+t),s.Eu.add(n),sa(s))}function sa(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new N(ee.fromString(e)),n=s.fu.next();s.Au.set(n,new Nb(t)),s.du=s.du.insert(t,n),vu(s.remoteStore,new xt(Xe(Fo(t.path)),n,"TargetPurposeLimboResolution",Qi.ce))}}async function Ls(s,e,t){const n=z(s),i=[],r=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,c)=>{o.push(n.pu(c,e,t).then((d=>{var h;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Go.As(c.targetId,d);r.push(m)}})))})),await Promise.all(o),n.Pu.H_(i),await(async function(c,d){const h=z(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(d,(g=>R.forEach(g.Es,(_=>h.persistence.referenceDelegate.addReference(m,g.targetId,_))).next((()=>R.forEach(g.ds,(_=>h.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))))))}catch(m){if(!Nn(m))throw m;D(Ko,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const _=h.Ms.get(g),C=_.snapshotVersion,L=_.withLastLimboFreeSnapshotVersion(C);h.Ms=h.Ms.insert(g,L)}}})(n.localStore,r))}async function Qb(s,e){const t=z(s);if(!t.currentUser.isEqual(e)){D(na,"User change. New user:",e.toKey());const n=await fu(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new V(P.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ls(t,n.Ls)}}function Jb(s,e){const t=z(s),n=t.Au.get(e);if(n&&n.hu)return J().add(n.key);{let i=J();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Mu(s){const e=z(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.Pu.H_=Vb.bind(null,e.eventManager),e.Pu.yu=Db.bind(null,e.eventManager),e}function Yb(s){const e=z(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class Vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tb(this.persistence,new Xy,e.initialUser,this.serializer)}Cu(e){return new mu(Wo.mi,this.serializer)}Du(e){return new lb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vi.provider={build:()=>new Vi};class Xb extends Vi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof Li,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ny(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new mu((n=>Li.mi(n,t)),this.serializer)}}class wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Tc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qb.bind(null,this.syncEngine),await Rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kb})()}createDatastore(e){const t=sr(e.databaseInfo.databaseId),n=(function(r){return new pb(r)})(e.databaseInfo);return(function(r,o,l,c){return new yb(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,r,o,l){return new vb(n,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Tc(this.syncEngine,t,0)),(function(){return bc.v()?new bc:new cb})())}createSyncEngine(e,t){return(function(i,r,o,l,c,d,h){const m=new $b(i,r,o,l,c,d);return h&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=z(i);D(tn,"RemoteStore shutting down."),r.Ea.add(5),await Rs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}wo.provider={build:()=>new wo};/**
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
 */class Ou{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ft="FirestoreClient";class Zb{constructor(e,t,n,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=Vo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,(async o=>{D(Ft,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(D(Ft,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ea(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Qr(s,e){s.asyncQueue.verifyOperationInProgress(),D(Ft,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async i=>{n.isEqual(i)||(await fu(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function Sc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await ev(s);D(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>_c(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,i)=>_c(e.remoteStore,i))),s._onlineComponents=e}async function ev(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){D(Ft,"Using user provided OfflineComponentProvider");try{await Qr(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Sn("Error using user provided cache. Falling back to memory cache: "+t),await Qr(s,new Vi)}}else D(Ft,"Using default OfflineComponentProvider"),await Qr(s,new Xb(void 0));return s._offlineComponents}async function Nu(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(D(Ft,"Using user provided OnlineComponentProvider"),await Sc(s,s._uninitializedComponentsProvider._online)):(D(Ft,"Using default OnlineComponentProvider"),await Sc(s,new wo))),s._onlineComponents}function tv(s){return Nu(s).then((e=>e.syncEngine))}async function $u(s){const e=await Nu(s),t=e.eventManager;return t.onListen=Fb.bind(null,e.syncEngine),t.onUnlisten=jb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ub.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hb.bind(null,e.syncEngine),t}function nv(s,e,t={}){const n=new lt;return s.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new Ou({next:g=>{h.Nu(),o.enqueueAndForget((()=>Su(r,m)));const _=g.docs.has(l);!_&&g.fromCache?d.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new Cu(Fo(l.path),h,{includeMetadataChanges:!0,qa:!0});return Au(r,m)})(await $u(s),s.asyncQueue,e,t,n))),n.promise}function sv(s,e,t={}){const n=new lt;return s.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new Ou({next:g=>{h.Nu(),o.enqueueAndForget((()=>Su(r,m))),g.fromCache&&c.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new Cu(l,h,{includeMetadataChanges:!0,qa:!0});return Au(r,m)})(await $u(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Fu(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Cc=new Map;/**
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
 */const Uu="firestore.googleapis.com",xc=!0;class Pc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uu,this.ssl=xc}else this.host=e.host,this.ssl=e.ssl??xc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<My)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fu(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class or{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new cg;switch(n.type){case"firstParty":return new pg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Cc.get(t);n&&(D("ComponentProvider","Removing Datastore"),Cc.delete(t),n.terminate())})(this),Promise.resolve()}}function iv(s,e,t,n={}){var d;s=ze(s,or);const i=Vn(e),r=s._getSettings(),o={...r,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;i&&(dd(`https://${l}`),ud("Firestore",!0)),r.host!==Uu&&r.host!==l&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:n};if(!Xt(c,o)&&(s._setSettings(c),n.mockUserToken)){let h,m;if(typeof n.mockUserToken=="string")h=n.mockUserToken,m=Ae.MOCK_USER;else{h=Vm(n.mockUserToken,(d=s._app)==null?void 0:d.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ae(g)}s._authCredentials=new dg(new Ad(h,m))}}/**
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
 */class Fn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ss(t,le._jsonSchema))return new le(e,n||null,new N(ee.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:he("string",le._jsonSchemaVersion),referencePath:he("string")};class Vt extends Fn{constructor(e,t,n){super(e,t,Fo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new N(e))}withConverter(e){return new Vt(this.firestore,e,this._path)}}function Di(s,e,...t){if(s=ce(s),Sd("collection","path",e),s instanceof or){const n=ee.fromString(e,...t);return jl(n),new Vt(s,null,n)}{if(!(s instanceof le||s instanceof Vt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ee.fromString(e,...t));return jl(n),new Vt(s.firestore,null,n)}}function Ve(s,e,...t){if(s=ce(s),arguments.length===1&&(e=Vo.newId()),Sd("doc","path",e),s instanceof or){const n=ee.fromString(e,...t);return Bl(n),new le(s,null,new N(n))}{if(!(s instanceof le||s instanceof Vt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ee.fromString(e,...t));return Bl(n),new le(s.firestore,s instanceof Vt?s.converter:null,new N(n))}}/**
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
 */const Rc="AsyncQueue";class Lc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yu(this,"async_queue_retry"),this._c=()=>{const n=Kr();n&&D(Rc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Kr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Kr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new lt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Nn(e))throw e;D(Rc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,ut("INTERNAL UNHANDLED ERROR: ",kc(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Zo.createAndSchedule(this,e,t,n,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:kc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function kc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class an extends or{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Lc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lc(e),this._firestoreClient=void 0,await e}}}function rv(s,e){const t=typeof s=="object"?s:fd(),n=typeof s=="string"?s:Ti,i=Lo(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const r=Lm("firestore");r&&iv(i,...r)}return i}function ia(s){if(s._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||ov(s),s._firestoreClient}function ov(s){var n,i,r;const e=s._freezeSettings(),t=(function(l,c,d,h){return new Rg(l,c,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Fu(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new Zb(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(s._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(we.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ss(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:he("string",Be._jsonSchemaVersion),bytes:he("string")};/**
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
 */class ar{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ra{constructor(e){this._methodName=e}}/**
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
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(Ss(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:he("string",et._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let r=0;r<n.length;++r)if(n[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ss(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:he("string",tt._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const av=/^__.*__$/;class lv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new xs(e,this.data,t,this.fieldTransforms)}}class Bu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ju(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:s})}}class oa{constructor(e,t,n,i,r,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new oa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ju(this.Ac)&&av.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sr(e)}Cc(e,t,n,i=!1){return new oa({Ac:e,methodName:t,Dc:n,path:_e.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lr(s){const e=s._freezeSettings(),t=sr(s._databaseId);return new cv(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Hu(s,e,t,n,i,r={}){const o=s.Cc(r.merge||r.mergeFields?2:0,e,t,i);aa("Data must be an object, but it was:",o,n);const l=qu(n,o);let c,d;if(r.merge)c=new Fe(o.fieldMask),d=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const m of r.mergeFields){const g=Eo(e,m,t);if(!o.contains(g))throw new V(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Wu(h,g)||h.push(g)}c=new Fe(h),d=o.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,d=o.fieldTransforms;return new lv(new De(l),c,d)}class cr extends ra{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cr}}function dv(s,e,t,n){const i=s.Cc(1,e,t);aa("Data must be an object, but it was:",i,n);const r=[],o=De.empty();Ut(n,((c,d)=>{const h=la(e,c,t);d=ce(d);const m=i.yc(h);if(d instanceof cr)r.push(h);else{const g=ks(d,m);g!=null&&(r.push(h),o.set(h,g))}}));const l=new Fe(r);return new Bu(o,l,i.fieldTransforms)}function uv(s,e,t,n,i,r){const o=s.Cc(1,e,t),l=[Eo(e,n,t)],c=[i];if(r.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)l.push(Eo(e,r[g])),c.push(r[g+1]);const d=[],h=De.empty();for(let g=l.length-1;g>=0;--g)if(!Wu(d,l[g])){const _=l[g];let C=c[g];C=ce(C);const L=o.yc(_);if(C instanceof cr)d.push(_);else{const x=ks(C,L);x!=null&&(d.push(_),h.set(_,x))}}const m=new Fe(d);return new Bu(h,m,o.fieldTransforms)}function hv(s,e,t,n=!1){return ks(t,s.Cc(n?4:3,e))}function ks(s,e){if(zu(s=ce(s)))return aa("Unsupported field value:",e,s),qu(s,e);if(s instanceof ra)return(function(n,i){if(!ju(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,i){const r=[];let o=0;for(const l of n){let c=ks(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(s,e)}return(function(n,i){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zg(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=se.fromDate(n);return{timestampValue:Ri(i.serializer,r)}}if(n instanceof se){const r=new se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ri(i.serializer,r)}}if(n instanceof et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:ou(i.serializer,n._byteString)};if(n instanceof le){const r=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qo(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof tt)return(function(o,l){return{mapValue:{fields:{[Md]:{stringValue:Od},[Ai]:{arrayValue:{values:o.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Uo(l.serializer,d)}))}}}}}})(n,i);throw i.Sc(`Unsupported field value: ${Ki(n)}`)})(s,e)}function qu(s,e){const t={};return Pd(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(s,((n,i)=>{const r=ks(i,e.mc(n));r!=null&&(t[n]=r)})),{mapValue:{fields:t}}}function zu(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof se||s instanceof et||s instanceof Be||s instanceof le||s instanceof ra||s instanceof tt)}function aa(s,e,t){if(!zu(t)||!Cd(t)){const n=Ki(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Eo(s,e,t){if((e=ce(e))instanceof ar)return e._internalPath;if(typeof e=="string")return la(s,e);throw Mi("Field path arguments must be of type string or ",s,!1,void 0,t)}const pv=new RegExp("[~\\*/\\[\\]]");function la(s,e,t){if(e.search(pv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ar(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Mi(s,e,t,n,i){const r=n&&!n.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new V(P.INVALID_ARGUMENT,l+s+c)}function Wu(s,e){return s.some((t=>t.isEqual(e)))}/**
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
 */class Gu{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ca("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mv extends Gu{data(){return super.data()}}function ca(s,e){return typeof e=="string"?la(s,e):e instanceof ar?e._internalPath:e._delegate._internalPath}/**
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
 */function fv(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class da{}class gv extends da{}function Io(s,e,...t){let n=[];e instanceof da&&n.push(e),n=n.concat(t),(function(r){const o=r.filter((c=>c instanceof ua)).length,l=r.filter((c=>c instanceof dr)).length;if(o>1||o>0&&l>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)s=i._apply(s);return s}class dr extends gv{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new dr(e,t,n)}_apply(e){const t=this._parse(e);return Ku(e._query,t),new Fn(e.firestore,e.converter,uo(e._query,t))}_parse(e){const t=lr(e.firestore);return(function(r,o,l,c,d,h,m){let g;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Dc(m,h);const C=[];for(const L of m)C.push(Vc(c,r,L));g={arrayValue:{values:C}}}else g=Vc(c,r,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Dc(m,h),g=hv(l,o,m,h==="in"||h==="not-in");return ue.create(d,h,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hi(s,e,t){const n=e,i=ca("where",s);return dr._create(i,n,t)}class ua extends da{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ua(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let o=i;const l=r.getFlattenedFilters();for(const c of l)Ku(o,c),o=uo(o,c)})(e._query,t),new Fn(e.firestore,e.converter,uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vc(s,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qd(e)&&t.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ee.fromString(t));if(!N.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Jl(s,new N(n))}if(t instanceof le)return Jl(s,t._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ki(t)}.`)}function Dc(s,e){if(!Array.isArray(s)||s.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ku(s,e){const t=(function(i,r){for(const o of i)for(const l of o.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null})(s.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yv{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ut(e,((i,r)=>{n[i]=this.convertValue(r,t)})),n}convertVectorValue(e){var n,i,r;const t=(r=(i=(n=e.fields)==null?void 0:n[Ai].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>ae(o.doubleValue)));return new tt(t)}convertGeoPoint(e){return new et(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Yi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ee.fromString(e);X(hu(n),9688,{name:e});const i=new vs(n.get(1),n.get(3)),r=new N(n.popFirst(5));return i.isEqual(t)||ut(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function Qu(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends Gu{constructor(e,t,n,i,r,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ca("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yt._jsonSchema={type:he("string",Yt._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class pi extends Yt{data(e={}){return super.data(e)}}class bn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ls(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new pi(this._firestore,this._userDataWriter,n.key,n,new ls(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new pi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new pi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:bv(l.type),doc:c,oldIndex:d,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),n.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bv(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:s})}}/**
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
 */function mi(s){s=ze(s,le);const e=ze(s.firestore,an);return nv(ia(e),s._key).then((t=>_v(e,s,t)))}bn._jsonSchemaVersion="firestore/querySnapshot/1.0",bn._jsonSchema={type:he("string",bn._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class Ju extends yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function To(s){s=ze(s,Fn);const e=ze(s.firestore,an),t=ia(e),n=new Ju(e);return fv(s._query),sv(t,s._query).then((i=>new bn(e,n,s,i)))}function Oi(s,e,t){s=ze(s,le);const n=ze(s.firestore,an),i=Qu(s.converter,e);return ur(n,[Hu(lr(n),"setDoc",s._key,i,s.converter!==null,t).toMutation(s._key,je.none())])}function Mc(s,e,t,...n){s=ze(s,le);const i=ze(s.firestore,an),r=lr(i);let o;return o=typeof(e=ce(e))=="string"||e instanceof ar?uv(r,"updateDoc",s._key,e,t,n):dv(r,"updateDoc",s._key,e),ur(i,[o.toMutation(s._key,je.exists(!0))])}function fi(s){return ur(ze(s.firestore,an),[new Bo(s._key,je.none())])}function vv(s,e){const t=ze(s.firestore,an),n=Ve(s),i=Qu(s.converter,e);return ur(t,[Hu(lr(s.firestore),"addDoc",n._key,i,s.converter!==null,{}).toMutation(n._key,je.exists(!1))]).then((()=>n))}function ur(s,e){return(function(n,i){const r=new lt;return n.asyncQueue.enqueueAndForget((async()=>qb(await tv(n),i,r))),r.promise})(ia(s),e)}function _v(s,e,t){const n=t.docs.get(e._key),i=new Ju(s);return new Yt(s,i,e._key,n,new ls(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Mn=i})(Dn),An(new Zt("firestore",((n,{instanceIdentifier:i,options:r})=>{const o=n.getProvider("app").getImmediate(),l=new an(new ug(n.getProvider("auth-internal")),new mg(o,n.getProvider("app-check-internal")),(function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(d.options.projectId,h)})(o,i),o);return r={useFetchStreams:t,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Lt(Nl,$l,e),Lt(Nl,$l,"esm2020")})();function Yu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wv=Yu,Xu=new Ts("auth","Firebase",Yu());/**
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
 */const Ni=new Po("@firebase/auth");function Ev(s,...e){Ni.logLevel<=K.WARN&&Ni.warn(`Auth (${Dn}): ${s}`,...e)}function gi(s,...e){Ni.logLevel<=K.ERROR&&Ni.error(`Auth (${Dn}): ${s}`,...e)}/**
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
 */function Ge(s,...e){throw ha(s,...e)}function nt(s,...e){return ha(s,...e)}function Zu(s,e,t){const n={...wv(),[e]:t};return new Ts("auth","Firebase",n).create(e,{appName:s.name})}function ct(s){return Zu(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ha(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Xu.create(s,...e)}function U(s,e,...t){if(!s)throw ha(e,...t)}function ot(s){const e="INTERNAL ASSERTION FAILED: "+s;throw gi(e),new Error(e)}function pt(s,e){s||ot(e)}/**
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
 */function Ao(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Iv(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function Tv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iv()||Fm()||"connection"in navigator)?navigator.onLine:!0}function Av(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Vs{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Om()||Um()}get(){return Tv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pa(s,e){pt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class eh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xv=new Vs(3e4,6e4);function ft(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function rt(s,e,t,n,i={}){return th(s,i,async()=>{let r={},o={};n&&(e==="GET"?o=n:r={body:JSON.stringify(n)});const l=As({key:s.config.apiKey,...o}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:c,...r};return $m()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&Vn(s.emulatorConfig.host)&&(d.credentials="include"),eh.fetch()(await nh(s,s.config.apiHost,t,l),d)})}async function th(s,e,t){s._canInitEmulator=!1;const n={...Sv,...e};try{const i=new Rv(s),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ii(s,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ii(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw ii(s,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zu(s,h,d);Ge(s,h)}}catch(i){if(i instanceof mt)throw i;Ge(s,"network-request-failed",{message:String(i)})}}async function Ds(s,e,t,n,i={}){const r=await rt(s,e,t,n,i);return"mfaPendingCredential"in r&&Ge(s,"multi-factor-auth-required",{_serverResponse:r}),r}async function nh(s,e,t,n){const i=`${e}${t}?${n}`,r=s,o=r.config.emulator?pa(s.config,i):`${s.config.apiScheme}://${i}`;return Cv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Pv(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(nt(this.auth,"network-request-failed")),xv.get())})}}function ii(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=nt(s,e,n);return i.customData._tokenResponse=t,i}function Nc(s){return s!==void 0&&s.enterprise!==void 0}class Lv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Pv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kv(s,e){return rt(s,"GET","/v2/recaptchaConfig",ft(s,e))}/**
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
 */async function Vv(s,e){return rt(s,"POST","/v1/accounts:delete",e)}async function $i(s,e){return rt(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function ms(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dv(s,e=!1){const t=ce(s),n=await t.getIdToken(e),i=ma(n);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:ms(Jr(i.auth_time)),issuedAtTime:ms(Jr(i.iat)),expirationTime:ms(Jr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Jr(s){return Number(s)*1e3}function ma(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const i=od(t);return i?JSON.parse(i):(gi("Failed to decode base64 JWT payload"),null)}catch(i){return gi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $c(s){const e=ma(s);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof mt&&Mv(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Mv({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class So{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fi(s){var m;const e=s.auth,t=await s.getIdToken(),n=await kn(s,$i(e,{idToken:t}));U(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];s._notifyReloadListener(i);const r=(m=i.providerUserInfo)!=null&&m.length?sh(i.providerUserInfo):[],o=$v(s.providerData,r),l=s.isAnonymous,c=!(s.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(s,h)}async function Nv(s){const e=ce(s);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $v(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function sh(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Fv(s,e){const t=await th(s,{},async()=>{const n=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=s.config,o=await nh(s,i,"/v1/token",`key=${r}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:n};return s.emulatorConfig&&Vn(s.emulatorConfig.host)&&(c.credentials="include"),eh.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Uv(s,e){return rt(s,"POST","/v2/accounts:revokeToken",ft(s,e))}/**
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
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=$c(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await Fv(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new vn;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function Et(s,e){U(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class He{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new So(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await kn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dv(this,e)}reload(){return Nv(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await kn(this,Vv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:_,providerData:C,stsTokenManager:L}=t;U(m&&L,e,"internal-error");const x=vn.fromJSON(this.name,L);U(typeof m=="string",e,"internal-error"),Et(n,e.name),Et(i,e.name),U(typeof g=="boolean",e,"internal-error"),U(typeof _=="boolean",e,"internal-error"),Et(r,e.name),Et(o,e.name),Et(l,e.name),Et(c,e.name),Et(d,e.name),Et(h,e.name);const M=new He({uid:m,auth:e,email:i,emailVerified:g,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:h});return C&&Array.isArray(C)&&(M.providerData=C.map(F=>({...F}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,t,n=!1){const i=new vn;i.updateFromServerResponse(t);const r=new He({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fi(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];U(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?sh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new vn;l.updateFromIdToken(n);const c=new He({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,d),c}}/**
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
 */const Fc=new Map;function at(s){pt(s instanceof Function,"Expected a class definition");let e=Fc.get(s);return e?(pt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Fc.set(s,e),e)}/**
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
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ih.type="NONE";const Uc=ih;/**
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
 */function yi(s,e,t){return`firebase:${s}:${e}:${t}`}class _n{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=yi(this.userKey,i.apiKey,r),this.fullPersistenceKey=yi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $i(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _n(at(Uc),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||at(Uc);const o=yi(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const h=await d._get(o);if(h){let m;if(typeof h=="string"){const g=await $i(e,{idToken:h}).catch(()=>{});if(!g)break;m=await He._fromGetAccountInfoResponse(e,g,h)}else m=He._fromJSON(e,h);d!==r&&(l=m),r=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new _n(r,e,n):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new _n(r,e,n))}}/**
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
 */function Bc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dh(e))return"Blackberry";if(uh(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||ah(e))&&!e.includes("edge/"))return"Chrome";if(ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function rh(s=Ce()){return/firefox\//i.test(s)}function oh(s=Ce()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ah(s=Ce()){return/crios\//i.test(s)}function lh(s=Ce()){return/iemobile/i.test(s)}function ch(s=Ce()){return/android/i.test(s)}function dh(s=Ce()){return/blackberry/i.test(s)}function uh(s=Ce()){return/webos/i.test(s)}function fa(s=Ce()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Bv(s=Ce()){var e;return fa(s)&&!!((e=window.navigator)!=null&&e.standalone)}function jv(){return Bm()&&document.documentMode===10}function hh(s=Ce()){return fa(s)||ch(s)||uh(s)||dh(s)||/windows phone/i.test(s)||lh(s)}/**
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
 */function ph(s,e=[]){let t;switch(s){case"Browser":t=Bc(Ce());break;case"Worker":t=`${Bc(Ce())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${n}`}/**
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
 */class Hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function qv(s,e={}){return rt(s,"GET","/v2/passwordPolicy",ft(s,e))}/**
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
 */const zv=6;class Wv{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??zv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Gv{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new Hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $i(this,{idToken:e}),n=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(n=c.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ct(this));const t=e?ce(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qv(this),t=new Wv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Uv(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ev(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jt(s){return ce(s)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qm(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kv(s){hr=s}function mh(s){return hr.loadJS(s)}function Qv(){return hr.recaptchaEnterpriseScript}function Jv(){return hr.gapiScript}function Yv(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Xv{constructor(){this.enterprise=new Zv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Zv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const e_="recaptcha-enterprise",fh="NO_RECAPTCHA";class t_{constructor(e){this.type=e_,this.auth=jt(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{kv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Lv(c);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(r,o,l){const c=window.grecaptcha;Nc(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(fh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{n(this.auth).then(l=>{if(!t&&Nc(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Qv();c.length!==0&&(c+=l),mh(c).then(()=>{i(l,r,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Hc(s,e,t,n=!1,i=!1){const r=new t_(s);let o;if(i)o=fh;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ui(s,e,t,n,i){var r;if((r=s._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hc(s,e,t,t==="getOobCode");return n(s,o)}else return n(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){`${t}`;const l=await Hc(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(o)})}/**
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
 */function n_(s,e){const t=Lo(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Xt(r,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function s_(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function i_(s,e,t){const n=jt(s);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=gh(e),{host:o,port:l}=r_(e),c=l===null?"":`:${l}`,d={url:`${r}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Xt(d,n.config.emulator)&&Xt(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Vn(o)?(dd(`${r}//${o}${c}`),ud("Auth",!0)):o_()}function gh(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function r_(s){const e=gh(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:qc(n.substr(r.length+1))}}else{const[r,o]=n.split(":");return{host:r,port:qc(o)}}}function qc(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function o_(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function a_(s,e){return rt(s,"POST","/v1/accounts:update",e)}async function l_(s,e){return rt(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function c_(s,e){return Ds(s,"POST","/v1/accounts:signInWithPassword",ft(s,e))}async function yh(s,e){return rt(s,"POST","/v1/accounts:sendOobCode",ft(s,e))}async function d_(s,e){return yh(s,e)}async function u_(s,e){return yh(s,e)}/**
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
 */async function h_(s,e){return Ds(s,"POST","/v1/accounts:signInWithEmailLink",ft(s,e))}async function p_(s,e){return Ds(s,"POST","/v1/accounts:signInWithEmailLink",ft(s,e))}/**
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
 */class Is extends ga{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Is(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Is(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ui(e,t,"signInWithPassword",c_);case"emailLink":return h_(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ui(e,n,"signUpPassword",l_);case"emailLink":return p_(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wn(s,e){return Ds(s,"POST","/v1/accounts:signInWithIdp",ft(s,e))}/**
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
 */const m_="http://localhost";class nn extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=t;if(!n||!i)return null;const o=new nn(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return wn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wn(e,t)}buildRequest(){const e={requestUri:m_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}}/**
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
 */function f_(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g_(s){const e=ss(is(s)).link,t=e?ss(is(e)).deep_link_id:null,n=ss(is(s)).deep_link_id;return(n?ss(is(n)).link:null)||n||t||e||s}class ya{constructor(e){const t=ss(is(e)),n=t.apiKey??null,i=t.oobCode??null,r=f_(t.mode??null);U(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=g_(e);try{return new ya(t)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,t){return Is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ya.parseLink(t);return U(n,"argument-error"),Is._fromEmailAndCode(e,n.code,n.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends bh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends Ms{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class At extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return At.credential(t,n)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class St extends Ms{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Ct extends Ms{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ct.credential(t,n)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
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
 */async function y_(s,e){return Ds(s,"POST","/v1/accounts:signUp",ft(s,e))}/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await He._fromIdTokenResponse(e,n,i),o=zc(n);return new sn({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=zc(n);return new sn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function zc(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Bi extends mt{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Bi(e,t,n,i)}}function vh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(s,r,e,n):r})}async function b_(s,e,t=!1){const n=await kn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return sn._forOperation(s,"link",n)}/**
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
 */async function _h(s,e,t=!1){const{auth:n}=s;if(Ue(n.app))return Promise.reject(ct(n));const i="reauthenticate";try{const r=await kn(s,vh(n,i,e,s),t);U(r.idToken,n,"internal-error");const o=ma(r.idToken);U(o,n,"internal-error");const{sub:l}=o;return U(s.uid===l,n,"user-mismatch"),sn._forOperation(s,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ge(n,"user-mismatch"),r}}/**
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
 */async function wh(s,e,t=!1){if(Ue(s.app))return Promise.reject(ct(s));const n="signIn",i=await vh(s,n,e),r=await sn._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(r.user),r}async function v_(s,e){return wh(jt(s),e)}async function __(s,e){return _h(ce(s),e)}/**
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
 */async function Eh(s){const e=jt(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w_(s,e,t){const n=jt(s);await Ui(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",u_)}async function Ih(s,e,t){if(Ue(s.app))return Promise.reject(ct(s));const n=jt(s),o=await Ui(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Eh(s),c}),l=await sn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(l.user),l}function Th(s,e,t){return Ue(s.app)?Promise.reject(ct(s)):v_(ce(s),ln.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Eh(s),n})}async function Ah(s,e){const t=ce(s),i={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()},{email:r}=await d_(t.auth,i);r!==s.email&&await s.reload()}function E_(s,e){return I_(ce(s),null,e)}async function I_(s,e,t){const{auth:n}=s,r={idToken:await s.getIdToken(),returnSecureToken:!0};t&&(r.password=t);const o=await kn(s,a_(n,r));await s._updateTokensIfNecessary(o,!0)}function T_(s,e,t,n){return ce(s).onIdTokenChanged(e,t,n)}function A_(s,e,t){return ce(s).beforeAuthStateChanged(e,t)}function Sh(s,e,t,n){return ce(s).onAuthStateChanged(e,t,n)}function fs(s){return ce(s).signOut()}const ji="__sak";/**
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
 */class Ch{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const S_=1e3,C_=10;class xh extends Ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},r=this.storage.getItem(n);jv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,C_):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xh.type="LOCAL";const x_=xh;/**
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
 */class Ph extends Ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ph.type="SESSION";const Rh=Ph;/**
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
 */function P_(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new pr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,r)),c=await P_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pr.receivers=[];/**
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
 */function ba(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class R_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const d=ba("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function L_(s){st().location.href=s}/**
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
 */function Lh(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function k_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V_(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function D_(){return Lh()?self:null}/**
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
 */const kh="firebaseLocalStorageDb",M_=1,Hi="firebaseLocalStorage",Vh="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mr(s,e){return s.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function O_(){const s=indexedDB.deleteDatabase(kh);return new Os(s).toPromise()}function Co(){const s=indexedDB.open(kh,M_);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Hi,{keyPath:Vh})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Hi)?e(n):(n.close(),await O_(),e(await Co()))})})}async function Wc(s,e,t){const n=mr(s,!0).put({[Vh]:e,value:t});return new Os(n).toPromise()}async function N_(s,e){const t=mr(s,!1).get(e),n=await new Os(t).toPromise();return n===void 0?null:n.value}function Gc(s,e){const t=mr(s,!0).delete(e);return new Os(t).toPromise()}const $_=800,F_=3;class Dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>F_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(D_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await k_(),!this.activeServiceWorker)return;this.sender=new R_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Co();return await Wc(e,ji,"1"),await Gc(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>N_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=mr(i,!1).getAll();return new Os(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dh.type="LOCAL";const U_=Dh;new Vs(3e4,6e4);/**
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
 */function B_(s,e){return e?at(e):(U(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class va extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function j_(s){return wh(s.auth,new va(s),s.bypassAuthState)}function H_(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),_h(t,new va(s),s.bypassAuthState)}async function q_(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),b_(t,new va(s),s.bypassAuthState)}/**
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
 */class Mh{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j_;case"linkViaPopup":case"linkViaRedirect":return q_;case"reauthViaPopup":case"reauthViaRedirect":return H_;default:Ge(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const z_=new Vs(2e3,1e4);class gn extends Mh{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z_.get())};e()}}gn.currentPopupAction=null;/**
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
 */const W_="pendingRedirect",bi=new Map;class G_ extends Mh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const n=await K_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K_(s,e){const t=Y_(e),n=J_(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Q_(s,e){bi.set(s._key(),e)}function J_(s){return at(s._redirectPersistence)}function Y_(s){return yi(W_,s.config.apiKey,s.name)}async function X_(s,e,t=!1){if(Ue(s.app))return Promise.reject(ct(s));const n=jt(s),i=B_(n,e),o=await new G_(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const Z_=600*1e3;class ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Oh(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(e))}saveEventToCache(e){this.cachedEventUids.add(Kc(e)),this.lastProcessedEventTime=Date.now()}}function Kc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Oh({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tw(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(s);default:return!1}}/**
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
 */async function nw(s,e={}){return rt(s,"GET","/v1/projects",e)}/**
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
 */const sw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iw=/^https?/;async function rw(s){if(s.config.emulator)return;const{authorizedDomains:e}=await nw(s);for(const t of e)try{if(ow(t))return}catch{}Ge(s,"unauthorized-domain")}function ow(s){const e=Ao(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!iw.test(t))return!1;if(sw.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const aw=new Vs(3e4,6e4);function Qc(){const s=st().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function lw(s){return new Promise((e,t)=>{var i,r,o;function n(){Qc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qc(),t(nt(s,"network-request-failed"))},timeout:aw.get()})}if((r=(i=st().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=st().gapi)!=null&&o.load)n();else{const l=Yv("iframefcb");return st()[l]=()=>{gapi.load?n():t(nt(s,"network-request-failed"))},mh(`${Jv()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw vi=null,e})}let vi=null;function cw(s){return vi=vi||lw(s),vi}/**
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
 */const dw=new Vs(5e3,15e3),uw="__/auth/iframe",hw="emulator/auth/iframe",pw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fw(s){const e=s.config;U(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?pa(e,hw):`https://${s.config.authDomain}/${uw}`,n={apiKey:e.apiKey,appName:s.name,v:Dn},i=mw.get(s.config.apiHost);i&&(n.eid=i);const r=s._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${As(n).slice(1)}`}async function gw(s){const e=await cw(s),t=st().gapi;return U(t,s,"internal-error"),e.open({where:document.body,url:fw(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pw,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const o=nt(s,"network-request-failed"),l=st().setTimeout(()=>{r(o)},dw.get());function c(){st().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const yw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bw=500,vw=600,_w="_blank",ww="http://localhost";class Jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ew(s,e,t,n=bw,i=vw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c={...yw,width:n.toString(),height:i.toString(),top:r,left:o},d=Ce().toLowerCase();t&&(l=ah(d)?_w:t),rh(d)&&(e=e||ww,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(Bv(d)&&l!=="_self")return Iw(e||"",l),new Jc(null);const m=window.open(e||"",l,h);U(m,s,"popup-blocked");try{m.focus()}catch{}return new Jc(m)}function Iw(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Tw="__/auth/handler",Aw="emulator/auth/handler",Sw=encodeURIComponent("fac");async function Yc(s,e,t,n,i,r){U(s.config.authDomain,s,"auth-domain-config-required"),U(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:Dn,eventId:i};if(e instanceof bh){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Km(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Ms){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await s._getAppCheckToken(),d=c?`#${Sw}=${encodeURIComponent(c)}`:"";return`${Cw(s)}?${As(l).slice(1)}${d}`}function Cw({config:s}){return s.emulator?pa(s,Aw):`https://${s.authDomain}/${Tw}`}/**
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
 */const Yr="webStorageSupport";class xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rh,this._completeRedirectFn=X_,this._overrideRedirectResult=Q_}async _openPopup(e,t,n,i){var o;pt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Yc(e,t,n,Ao(),i);return Ew(e,r,ba())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await Yc(e,t,n,Ao(),i);return L_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(pt(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await gw(e),n=new ew(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yr,{type:Yr},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Yr];r!==void 0&&t(!!r),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hh()||oh()||fa()}}const Pw=xw;var Xc="@firebase/auth",Zc="1.12.0";/**
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
 */class Rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(s){An(new Zt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ph(s)},d=new Gv(n,i,r,c);return s_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),An(new Zt("auth-internal",e=>{const t=jt(e.getProvider("auth").getImmediate());return(n=>new Rw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Xc,Zc,Lw(s)),Lt(Xc,Zc,"esm2020")}/**
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
 */const Vw=300,Dw=cd("authIdTokenMaxAge")||Vw;let ed=null;const Mw=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Dw)return;const i=t==null?void 0:t.token;ed!==i&&(ed=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ow(s=fd()){const e=Lo(s,"auth");if(e.isInitialized())return e.getImmediate();const t=n_(s,{popupRedirectResolver:Pw,persistence:[U_,x_,Rh]}),n=cd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const o=Mw(r.toString());A_(t,o,()=>o(t.currentUser)),T_(t,l=>o(l))}}const i=ad("auth");return i&&i_(t,`http://${i}`),t}function Nw(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Kv({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const r=nt("internal-error");r.customData=i,t(r)},n.type="text/javascript",n.charset="UTF-8",Nw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");const $w={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},Nh=md($w),be=rv(Nh),Re=Ow(Nh),Ne={validatePassword(s){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(s)},getCurrentUser(){return Re.currentUser},onAuthStateChanged(s){return Sh(Re,s)},async login(s,e){try{const n=(await Th(Re,s,e)).user;if(!n.emailVerified)throw await fs(Re),new Error("Debes verificar tu correo electrónico antes de entrar.");return n}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(s,e){if(!this.validatePassword(e))throw new Error("La contraseña no cumple los requisitos mínimos.");try{const n=(await Ih(Re,s,e)).user;return await Ah(n),await Oi(Ve(be,"users",n.uid),{email:s,createdAt:new Date().toISOString(),emailVerified:!1}),await fs(Re),{requiresVerification:!0}}catch(t){throw console.error("Error en registro:",t),t.code==="auth/email-already-in-use"?new Error("Este correo ya está registrado."):new Error("Error en registro: "+t.message)}},async recoverPassword(s){if(!s)throw new Error("Por favor ingresa tu correo electrónico.");try{return await w_(Re,s),!0}catch(e){let t="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(t="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(t="El correo no es válido."),new Error(t)}},async logout(){return fs(Re)}},$h={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const s=document.getElementById("user-none"),e=document.getElementById("pass-none");s&&(s.style.display="none"),e&&(e.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const t=document.getElementById("theme-link").getAttribute("href"),n=`./manual.html?theme=${encodeURIComponent(t)}`;this.container.innerHTML=`
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
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const s=document.getElementById("btn-login");s&&(s.onclick=async()=>{const n=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value;if(!n||!i)return this._showError("Ingrese correo y contraseña.");try{await Ne.login(n,i),location.reload()}catch(r){this._showError(r.message)}});const e=document.getElementById("btn-signup");e&&(e.onclick=async()=>{const n=document.getElementById("email-s").value.trim(),i=document.getElementById("pass-s").value;if(!Ne.validatePassword(i))return this._showError("La contraseña no cumple los requisitos.");const r=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',e.disabled=!0;try{await Ne.signup(n,i),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${n}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
            `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(o){this._showError(o.message)}finally{e.innerHTML=r,e.disabled=!1}});const t=document.getElementById("btn-forgot");t&&(t.onclick=async n=>{n.preventDefault();const i=document.getElementById("email-l"),r=i.value.trim();if(!r)return i.classList.add("is-invalid"),i.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");i.classList.remove("is-invalid");const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',t.style.pointerEvents="none";try{await Ne.recoverPassword(r),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${r} para restablecer la clave.`)}catch(l){this._showError(l.message)}finally{t.innerHTML=o,t.style.pointerEvents="auto"}})},initLogout(){const s=document.getElementById("btn-logout-link");s&&(s.onclick=async e=>{e.preventDefault();try{await Ne.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},_showError(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");e&&(e.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${s}`,e.style.display="block"),t&&(t.style.display="none")},_showSuccess(s){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");t&&(t.innerHTML=s,t.style.display="block"),e&&(e.style.display="none")}},Te={masterKey:null,async generateKey(s){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(s),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async setMasterKey(s){this.masterKey=await this.generateKey(s)},async encryptData(s,e=null){const t=e||this.masterKey;if(!t)throw new Error("Frase maestra no inicializada.");const n=new TextEncoder,i=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:i},t,n.encode(JSON.stringify(s)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(r))),iv:btoa(String.fromCharCode(...i))}},async decryptData(s){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");try{if(!s||!s.iv||!s.ciphertext)throw new Error("El objeto cifrado está incompleto o corrupto.");const e=l=>{if(typeof l!="string")return"";let c=l.replace(/[\s\n\r]/g,"");for(c=c.replace(/-/g,"+").replace(/_/g,"/");c.length%4;)c+="=";return c},t=e(s.iv),n=e(s.ciphertext),i=new Uint8Array(atob(t).split("").map(l=>l.charCodeAt(0))),r=new Uint8Array(atob(n).split("").map(l=>l.charCodeAt(0))),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:i},this.masterKey,r);return JSON.parse(new TextDecoder().decode(o))}catch(e){if(e.name==="InvalidCharacterError")console.error("[CRYPTO] Error de formato Base64. IV Recibido:",s.iv);else if(e.name==="OperationError")throw e;throw console.error("[CRYPTO] Fallo técnico al decodificar:",e),e}}},B={_toastContainer:null,init(){this._injectToastContainer(),this._injectModals()},toast(s,e="success"){this._toastContainer||this.init();const t=`toast-${Date.now()}`,i=`
      <div id="${t}" class="toast align-items-center text-bg-light border-0 shadow-sm mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2 fw-medium">
            <i class="fa-solid ${e==="success"?"fa-check-circle text-success":e==="danger"?"fa-circle-exclamation text-danger":"fa-info-circle text-info"} fs-5"></i>
            ${s}
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;this._toastContainer.insertAdjacentHTML("beforeend",i);const r=document.getElementById(t),o=new bootstrap.Toast(r,{delay:3500});r.addEventListener("hidden.bs.toast",()=>r.remove()),o.show()},confirm(s,e){return document.getElementById("ds-modal-confirm")||this.init(),new Promise(t=>{document.getElementById("ds-confirm-title").innerText=s,document.getElementById("ds-confirm-msg").innerHTML=e;const n=document.getElementById("ds-modal-confirm"),i=new bootstrap.Modal(n),r=document.getElementById("ds-btn-confirm-ok"),o=document.getElementById("ds-btn-confirm-cancel"),l=()=>{r.onclick=null,o.onclick=null,n.removeEventListener("hidden.bs.modal",c)},c=()=>{l(),t(!1)};r.onclick=()=>{i.hide(),l(),t(!0)},o.onclick=()=>{i.hide(),l(),t(!1)},n.addEventListener("hidden.bs.modal",c),i.show()})},promptPassword(s,e){return document.getElementById("ds-modal-password")||this.init(),new Promise(t=>{document.getElementById("ds-pwd-title").innerText=s,document.getElementById("ds-pwd-msg").innerText=e;const n=document.getElementById("ds-pwd-input");n.value="";const i=document.getElementById("ds-modal-password"),r=new bootstrap.Modal(i);document.getElementById("ds-btn-pwd-ok");const o=document.getElementById("ds-btn-pwd-cancel"),l=document.getElementById("ds-pwd-form"),c=()=>{l.onsubmit=null,o.onclick=null,i.removeEventListener("hidden.bs.modal",d)},d=()=>{c(),t(null)};l.onsubmit=h=>{h.preventDefault();const m=n.value.trim();r.hide(),c(),t(m===""?null:m)},o.onclick=()=>{r.hide(),c(),t(null)},i.addEventListener("hidden.bs.modal",d),r.show(),i.addEventListener("shown.bs.modal",()=>n.focus(),{once:!0})})},_injectToastContainer(){document.getElementById("ds-toast-container")||(this._toastContainer=document.createElement("div"),this._toastContainer.id="ds-toast-container",this._toastContainer.className="toast-container position-fixed bottom-0 end-0 p-3",this._toastContainer.style.zIndex="1090",document.body.appendChild(this._toastContainer))},_injectModals(){if(document.getElementById("ds-modal-confirm"))return;document.body.insertAdjacentHTML("beforeend",`
      <!-- Modal Confirmación -->
      <div class="modal fade" id="ds-modal-confirm" tabindex="-1" aria-hidden="true" style="z-index: 1100;">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content shadow">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title fw-bold text-danger" id="ds-confirm-title">Confirmar</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-secondary" id="ds-confirm-msg">¿Estás seguro?</div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-light" id="ds-btn-confirm-cancel">Cancelar</button>
              <button type="button" class="btn btn-danger px-4" id="ds-btn-confirm-ok">Sí, proceder</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Contraseña -->
      <div class="modal fade" id="ds-modal-password" tabindex="-1" aria-hidden="true" style="z-index: 1100;">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content shadow border-warning">
            <div class="modal-header text-bg-warning border-0">
              <h5 class="modal-title fw-bold" id="ds-pwd-title"><i class="fa-solid fa-lock me-2"></i>Seguridad</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="ds-pwd-form">
              <div class="modal-body">
                <p class="text-secondary mb-3" id="ds-pwd-msg">Ingrese su contraseña:</p>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-light"><i class="fa-solid fa-key"></i></span>
                  <input type="text" class="form-control form-control-lg" id="ds-pwd-input" placeholder="Frase Maestra" required autocomplete="current-password">
                </div>
              </div>
              <div class="modal-footer border-0 bg-light">
                <button type="button" class="btn btn-outline-secondary" id="ds-btn-pwd-cancel">Cancelar</button>
                <button type="submit" class="btn btn-warning px-4 fw-bold">Desbloquear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `)}},G={get _masterKey(){return Te.masterKey},async initDB(){return!0},async save(s,e){const t=Ne.getCurrentUser();if(!t&&s!=="users")throw new Error("Usuario no autenticado.");const n=JSON.parse(JSON.stringify(e));if(n.userId=t?t.uid:s==="users"?n.id:null,n.isEncrypted&&n.content){if(!Te.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");n.content=await Te.encryptData(n.content)}!n.isEncrypted&&n.content&&Array.isArray(n.content)&&n.content.forEach(i=>{if(Array.isArray(i.value)&&i.value.length>0&&Array.isArray(i.value[0])){const r={};i.value.forEach((o,l)=>{r[l]=o}),i.value=r,i.storageMode="nested_map"}});try{return await Oi(Ve(be,s,n.id),n),!0}catch(i){throw console.error("Error Firestore:",i),new Error("Error al guardar en la nube: "+i.message)}},async getOne(s,e){if(!e)return null;const t=s==="doc";try{const n=Ve(be,s,e),i=await mi(n);if(!i.exists())return null;let r={id:i.id,...i.data()};if(r.isEncrypted&&r.content){if(!Te.masterKey)return t&&console.warn("[STORAGE] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...r,content:null,decryptionError:!0};try{const o=await Te.decryptData(r.content);let l={...r,content:o,decryptionError:!1};return this._hydrateDocument(l)}catch(o){return t&&console.error("[STORAGE] ⛔ Error al descifrar:",o),{...r,content:null,decryptionError:!0}}}return this._hydrateDocument(r)}catch(n){throw console.error(`[STORAGE] Error obteniendo ${s}/${e}:`,n),n}},async getAll(s){const e=Ne.getCurrentUser();if(!e)return[];try{const t=Io(Di(be,s),hi("userId","==",e.uid)),n=await To(t),i=[];for(const r of n.docs){let o=r.data();if(o.isEncrypted&&Te.masterKey)try{o.content=await Te.decryptData(o.content)}catch{o.decryptionError=!0}o=this._hydrateDocument(o),i.push(o)}return i.sort((r,o)=>o.id.localeCompare(r.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(s,e){try{await fi(Ve(be,s,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(s){return s&&Array.isArray(s.content)&&s.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,n)=>Number(t)-Number(n)).map(t=>e.value[t]),delete e.storageMode)}),s},async hasSecurityConfigured(){const s=Ne.getCurrentUser();return s?(await mi(Ve(be,"security",s.uid))).exists():!1},async saveSecurityVerifier(s){const e=Ne.getCurrentUser();if(!e)throw new Error("No hay una sesión de usuario activa.");try{return await Oi(Ve(be,"security",e.uid),{userId:e.uid,verifier:s,updatedAt:new Date().toISOString()}),!0}catch(t){throw console.error("[STORAGE] Error guardando verificado:",t),t}},async changeMasterPhrase(s,e){try{if(!await this.verifyMasterPhrase(s))throw new Error("La frase maestra anterior es incorrecta.");await Te.setMasterKey(e);const n=await Te.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(n),!0}catch(t){throw console.error("[STORAGE] ❌ Error en changeMasterPhrase:",t),t}},async hardResetSecurity(){const s=Ne.getCurrentUser();if(!s)throw new Error("No hay sesión activa.");try{const e=Io(Di(be,"doc"),hi("userId","==",s.uid),hi("isEncrypted","==",!0)),t=await To(e),n=[];t.forEach(r=>n.push(fi(r.ref))),await Promise.all(n);const i=Ve(be,"security",s.uid);return await fi(i),Te.masterKey=null,!0}catch(e){throw console.error("[STORAGE] Error en Hard Reset:",e),new Error("No se pudo completar el borrado masivo: "+e.message)}},async verifyMasterPhrase(s){const e=Ne.getCurrentUser();if(!e)return!1;try{const t=Ve(be,"security",e.uid),n=await mi(t);if(!n.exists())return!1;const i=n.data();if(!i||!i.verifier)return!1;const{verifier:r}=i,o=Te.masterKey;try{await Te.setMasterKey(s);const l=await Te.decryptData(r);return!!(l&&l.check==="VERIFIED")}catch{return Te.masterKey=o,!1}}catch(t){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRÍTICO:",t),B.toast("Error de conexión o sistema: "+t.message,"danger"),!1}}},xo={async saveTemplate(s){if(!s.title.trim())throw new Error("Título obligatorio");if(s.elements.length===0)throw new Error("Diseño vacío");s.updatedAt=new Date().toISOString(),await G.save("tpl",s)},async deleteTemplate(s){await G.delete("tpl",s)},async loadTemplates(){return await G.getAll("tpl")}};class _a{constructor(e){this.tableBody=e.tableBody,this.tableHeaders=e.tableHeaders,this.paginationContainer=e.paginationContainer,this.renderRowHTML=e.renderRowHTML,this.extractSearchString=e.extractSearchString,this.onRenderComplete=e.onRenderComplete,this.customSort=e.customSort,this.dummyRowHTML=e.dummyRowHTML,this.marginBot=e.marginBot!==void 0?e.marginBot:40,this.data=[],this.state={currentPage:1,itemsPerPage:10,totalPages:1,searchTerm:"",filters:{},sortColumn:"updatedAt",sortAsc:!1},this._resizeTimer=null,this._bindWindowResize(),this._bindHeaders(),this._bindPaginationEvents()}setData(e){this.data=e||[],this.state.currentPage=1,this.render()}setSearchTerm(e){this.state.searchTerm=this._normalizeText(e),this.state.currentPage=1,this.render()}setFilter(e,t){this.state.filters[e]=t,this.state.currentPage=1,this.render()}setSort(e){this.state.sortColumn===e?this.state.sortAsc=!this.state.sortAsc:(this.state.sortColumn=e,this.state.sortAsc=!0),this.state.currentPage=1,this._updateHeaderIcons(),this.render()}_bindHeaders(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const n=t.dataset.column;n&&this.setSort(n)})}),this._updateHeaderIcons()}_updateHeaderIcons(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{let n=t.querySelector("i");n||(n=document.createElement("i"),t.appendChild(n));const i=t.dataset.column;n.className="fa-solid fa-sort text-muted ms-1 opacity-50",this.state.sortColumn===i&&(n.className=this.state.sortAsc?"fa-solid fa-sort-up text-primary ms-1":"fa-solid fa-sort-down text-primary ms-1")})}_processData(){let e=[...this.data];if(Object.entries(this.state.filters).forEach(([t,n])=>{n&&n!=="all"&&(e=e.filter(i=>i[t]===n))}),this.state.searchTerm){const t=this.state.searchTerm.split(/\s+/).filter(n=>n.length>0);e=e.filter(n=>{const i=this._normalizeText(this.extractSearchString(n));return t.every(r=>i.includes(r))})}return this.state.sortColumn&&e.sort((t,n)=>{if(this.customSort)return this.customSort(t,n,this.state);let i=t[this.state.sortColumn],r=n[this.state.sortColumn];return this.state.sortColumn.toLowerCase().includes("date")||this.state.sortColumn.includes("At")?(i=new Date(i||0).getTime(),r=new Date(r||0).getTime()):(i=this._normalizeText(i),r=this._normalizeText(r)),i<r?this.state.sortAsc?-1:1:i>r?this.state.sortAsc?1:-1:0}),e}render(){if(!this.tableBody)return;const e=this._processData();this.state.totalPages=Math.max(1,Math.ceil(e.length/this.state.itemsPerPage)),this.state.currentPage>this.state.totalPages&&(this.state.currentPage=1);const t=(this.state.currentPage-1)*this.state.itemsPerPage,n=e.slice(t,t+this.state.itemsPerPage);if(this._renderPaginationControls(e.length),n.length===0){this.tableBody.innerHTML='<tr><td colspan="100%" class="text-center p-4 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=n.map(i=>this.renderRowHTML(i)).join(""),this.onRenderComplete&&this.onRenderComplete(this.tableBody,n)}_renderPaginationControls(e){this.paginationContainer&&(this.paginationContainer.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.state.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left pointer-events-none"></i></button>
      <span class="small fw-bold px-1">Pág ${this.state.currentPage} de ${this.state.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.state.currentPage===this.state.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right pointer-events-none"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${e} en total</span>
    `)}_bindPaginationEvents(){this.paginationContainer&&this.paginationContainer.addEventListener("click",e=>{const t=e.target.closest("button");t&&(t.classList.contains("btn-prev-page")&&this.state.currentPage>1?(this.state.currentPage--,this.render()):t.classList.contains("btn-next-page")&&this.state.currentPage<this.state.totalPages&&(this.state.currentPage++,this.render()))})}calculatePaginationSpace(){if(!this.tableBody)return;let e=55;if(this.dummyRowHTML){const r=document.createElement("tr");r.style.visibility="hidden",r.innerHTML=this.dummyRowHTML,this.tableBody.appendChild(r),e=r.getBoundingClientRect().height||55,this.tableBody.removeChild(r)}const t=this.tableBody.getBoundingClientRect().top,n=t>0?t:250,i=window.innerHeight-n-this.marginBot;this.state.itemsPerPage=Math.max(5,Math.floor(i/e))}_bindWindowResize(){window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.tableBody&&this.tableBody.offsetParent!==null&&(this.calculatePaginationSpace(),this.render())},300)})}_normalizeText(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}const td={handlers:{},currentTemplates:[],init(s){this.handlers=s;const e=document.getElementById("designer-list-view");e&&(e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents())},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-pen-ruler text-danger"></i> Gestor de Plantillas</h2>
            <div class="d-flex gap-2">
                <input type="file" id="input-import-tpl" accept=".json" class="d-none">
                <button class="btn btn-outline-dark shadow-sm" id="btn-import-tpl">
                    <i class="fa-solid fa-file-import me-2"></i> Importar
                </button>
                <button class="btn btn-primary shadow-sm" id="btn-go-create-tpl">
                    <i class="fa-solid fa-plus me-2"></i> Nueva Plantilla
                </button>
            </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="tpl-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Plantillas (Cargando...)</span>
            </div>
            <div class="row g-2 align-items-center justify-content-end">
              <div class="col-auto" id="tpl-category-filter-container">
                <select id="tpl-category-select" class="form-select">
                  <option value="all">Todas las categorías</option>
                </select>
              </div>
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="tpl-search-input" class="form-control" placeholder="Buscar..." autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="tpl-table-head">
                  <tr>
                    <th class="sortable" data-column="category">Categoría</th>
                    <th class="sortable" data-column="title">Título de la Plantilla</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="tpl-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando plantillas...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.tableBody=document.getElementById("tpl-table-body"),this.tableHead=document.getElementById("tpl-table-head"),this.pagination=document.getElementById("tpl-pagination-controls"),this.searchInput=document.getElementById("tpl-search-input"),this.btnCreate=document.getElementById("btn-go-create-tpl"),this.btnImport=document.getElementById("btn-import-tpl"),this.inputFile=document.getElementById("input-import-tpl"),this.categoryContainer=document.getElementById("tpl-category-filter-container")},initTableEngine(){this.tableEngine=new _a({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td class="text-center fs-4">📄</td>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">General</span></td>
        <td>
          <div class="fw-bold text-nowrap">Test</div>
          <div class="text-muted small text-truncate" style="max-width: 250px;">Desc</div>
        </td>
        <td class="text-muted small text-nowrap">01/01/2026</td>
        <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-success"><i class="fa-solid fa-file-circle-plus"></i></button></td>
      `,marginBot:90,extractSearchString:s=>`${s.title} ${s.category} ${s.description||""}`,renderRowHTML:s=>this._renderRow(s),onRenderComplete:(s,e)=>this._bindListActions(s,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.btnImport&&this.inputFile&&(this.btnImport.onclick=()=>this.inputFile.click(),this.inputFile.onchange=s=>this._handleImport(s)),this.searchInput.addEventListener("input",s=>{this.tableEngine.setSearchTerm(s.target.value)})},async render(){try{const s=await G.getAll("tpl")||[];this.currentTemplates=s.map(e=>({...e,category:e.category||"General"})),this.renderCategoryFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentTemplates)}catch(s){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${s.message}</td></tr>`)}},renderCategoryFilter(){if(!this.categoryContainer)return;const s=[...new Set(this.currentTemplates.map(e=>e.category))];if(s.length>1){const e=document.getElementById("tpl-category-select"),t=e?e.value:"all",n=`<option value="all" ${t==="all"?"selected":""}>Todas las categorías</option>`+s.sort().map(i=>`<option value="${i}" ${t===i?"selected":""}>${i}</option>`).join("");this.categoryContainer.innerHTML=`<select id="tpl-category-select" class="form-select">${n}</select>`,document.getElementById("tpl-category-select").addEventListener("change",i=>{this.tableEngine.setFilter("category",i.target.value)})}else this.categoryContainer.innerHTML="",this.tableEngine.setFilter("category","all")},_renderRow(s){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">${s.category}</span></td>
        <td>
          <div class="d-flex align-items-center">
            <div class="fs-4 me-3 text-center" style="width: 32px;">
              ${s.icon||"📄"}
            </div>
            <div style="min-width: 0;">
              <div class="fw-bold text-nowrap text-truncate">
                 ${s.title} 
                ${s.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
              </div>
              <div class="text-muted small text-truncate" style="max-width: 250px;">
                ${s.description||"Sin descripción"}
              </div>
            </div>
          </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-success btn-create-doc me-1" data-id="${s.id}" title="Crear Documento">
               <i class="fa-solid fa-file-circle-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-id="${s.id}" title="Editar Plantilla">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-export me-1" data-id="${s.id}" title="Descargar JSON">
                <i class="fa-solid fa-download"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del" data-id="${s.id}" title="Eliminar Plantilla">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(s,e){s.querySelectorAll(".btn-create-doc").forEach(t=>{t.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:t.dataset.id}}))}}),s.querySelectorAll(".btn-edit").forEach(t=>{t.onclick=()=>this.handlers.onEditTemplate(t.dataset.id)}),s.querySelectorAll(".btn-del").forEach(t=>{t.onclick=async()=>{await B.confirm("Eliminar Plantilla","¿Estás seguro de eliminar esta plantilla? Se borrarán sus documentos vinculados.")&&(await xo.deleteTemplate(t.dataset.id),B.toast("Plantilla eliminada exitosamente","success"),this.render())}}),s.querySelectorAll(".btn-export").forEach(t=>{t.onclick=()=>{const n=e.find(i=>i.id===t.dataset.id);n&&this._downloadJSON(n)}})},_downloadJSON(s){const e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t;const i=s.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`tpl_${i}_${s.id}.json`,n.click(),URL.revokeObjectURL(t)},_handleImport(s){const e=s.target.files[0];if(!e)return;const t=new FileReader;t.onload=async n=>{try{const i=JSON.parse(n.target.result);if(!i.title||!Array.isArray(i.elements))throw new Error("Plantilla inválida");i.id=`tpl_${Date.now()}`,i.title=`${i.title} (Importada)`,i.updatedAt=new Date().toISOString(),await xo.saveTemplate(i),B.toast("Plantilla importada correctamente.","success"),this.render()}catch(i){B.toast("Error al importar: "+i.message,"danger")}s.target.value=""},t.readAsText(e)}},wa={dragSrcEl:null,init(s,e=null,t=null){s.setAttribute("draggable","false"),s.addEventListener("mousedown",n=>{if(e){const i=n.target.closest(e);s.setAttribute("draggable",i?"true":"false")}else s.setAttribute("draggable","true")}),s.addEventListener("mouseup",()=>{s.setAttribute("draggable","false")}),s.addEventListener("dragstart",n=>this._handleDragStart(n,s)),s.addEventListener("dragend",n=>this._handleDragEnd(n,s)),s.addEventListener("dragover",n=>this._handleDragOver(n,s)),s.addEventListener("dragenter",n=>this._handleDragEnter(n,s)),s.addEventListener("dragleave",n=>this._handleDragLeave(n,s)),s.addEventListener("drop",n=>this._handleDrop(n,s,t))},_handleDragStart(s,e){if(e.getAttribute("draggable")==="false"){s.preventDefault();return}this.dragSrcEl=e,s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(s,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(s,e){return s.preventDefault&&s.preventDefault(),s.dataTransfer.dropEffect="move",!1},_handleDragEnter(s,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(s,e){e.classList.remove("border-top-primary-3")},_handleDrop(s,e,t){if(s.stopPropagation&&s.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const n=e.parentNode,i=e.getBoundingClientRect(),r=s.clientY-i.top,o=e.clientHeight/2;r>o?n.insertBefore(this.dragSrcEl,e.nextSibling):n.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(s){s&&Array.from(s.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},ri={handlers:{},currentId:null,init(s){this.handlers=s,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.catInput&&(this.catInput.onchange=s=>{const e=s.target.options[s.target.selectedIndex].dataset.icon;this.iconInput.value=e})},renderSidebar(){const s=document.getElementById("tpl-elements");s.innerHTML=Object.entries(Oe).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-fill px-4 py-2" id="add-${e}">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
         </button>`).join(""),Object.keys(Oe).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._addToCanvas(t)}})},_addToCanvas(s){const e=document.createElement("div");e.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",e.innerHTML=`
      <!-- ELIMINADO: style="width: 40px;" -->
      <!-- AÑADIDO: px-3 y flex-shrink-0 -->
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab px-3 flex-shrink-0">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2 w-100" id="comp-content" style="min-width: 0;"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp flex-shrink-0"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(s),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),wa.init(e,".drag-handle"),this.canvas.appendChild(e)},async load(s){const e=await G.getOne("tpl",s);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.relatedDocsInput.value=e.relatedDocIds||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,this.canvas.innerHTML="",e.elements.forEach(t=>{const n=document.createElement(t.tag);n.setData&&n.setData(t),this._addToCanvas(n)}))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.encInput.checked=!1},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(n=>{const i=n.querySelector("#comp-content");return i?i.firstElementChild:null}).filter(n=>n&&typeof n.getData=="function"),t={id:this.currentId||`tpl_${Date.now()}`,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(n=>n.getData())};try{await xo.saveTemplate(t),B.toast("Plantilla guardada correctamente","success"),this.handlers.onSaveSuccess()}catch(n){B.toast("Error al guardar: "+n.message,"danger")}},getAvailableVariables(s,e=null){const t=[];if(this.canvas.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(i=>{if(!i.closest("setting-table")&&typeof i.getData=="function"){const r=i.getData();t.push({id:r.id,title:r.title||"(Sin Título)",type:"general"})}}),s==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const r=i.getData();r.columns&&r.columns.forEach(o=>{["setting-number","setting-currency","setting-percentage"].includes(o.tag)&&t.push({id:o.id,title:`[Col] ${o.title}`,type:"column"})})}}return s==="general"&&this.canvas.querySelectorAll("setting-table").forEach(r=>{const o=r.getData();o.columns&&o.columns.forEach(l=>{l.total&&t.push({id:`TOTAL_${r.id}_${l.id}`,title:`SUM: ${o.title} > ${l.title}`,type:"total"})})}),t}},qi={init(){td.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:s=>{this.showEditor(),ri.load(s)}}),ri.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){td.render()},showEditor(){const s=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");s&&(s.style.display="none"),e&&(e.style.display="block"),ri.reset()},showList(){const s=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");s&&(s.style.display="block"),e&&(e.style.display="none")},getAvailableVariables(s,e){return ri.getAvailableVariables(s,e)}},ns={handlers:{},currentDocs:[],currentTemplates:[],init(s){this.handlers=s;const e=document.getElementById("doc-list-view");if(!e){console.error("❌ [DocumentList] Error crítico: No se encontró #doc-list-view en el DOM.");return}e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents()},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-file-lines text-primary"></i> Gestor de Documentos</h2>
            <button class="btn btn-primary shadow-sm" id="btn-go-create-doc">
                <i class="fa-solid fa-plus me-2"></i> Nuevo Documento
            </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="doc-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Documentos (Cargando...)</span>
            </div>
            
            <div class="d-flex gap-2 align-items-center flex-grow-1 justify-content-end" style="max-width: 550px;">
              <select id="doc-template-filter" class="form-select" style="max-width: 200px;">
                <option value="">Todas las plantillas</option>
              </select>
              <div class="input-group" style="max-width: 350px;">
                <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" id="doc-search-input" class="form-control" placeholder="Buscar... (ej. reporte)" autocomplete="off">
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="doc-table-head">
                  <tr>
                    <th class="sortable" data-column="templateTitle">Plantilla Base</th>
                    <th class="sortable" data-column="title">Título del Documento</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="doc-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando documentos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.tableHead=document.getElementById("doc-table-head"),this.pagination=document.getElementById("doc-pagination-controls"),this.searchInput=document.getElementById("doc-search-input"),this.templateFilter=document.getElementById("doc-template-filter"),this.btnCreate=document.getElementById("btn-go-create-doc")},initTableEngine(){this.tableEngine=new _a({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td><span class="badge bg-secondary px-2 py-1">Plantilla</span></td>
        <td><div class="fw-bold">Test</div></td>
        <td class="text-end"><button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-eye"></i></button></td>
      `,marginBot:40,extractSearchString:s=>`${s.title} ${s.templateTitle||""}`,renderRowHTML:s=>this._renderRow(s),onRenderComplete:(s,e)=>this._bindListActions(s,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput.addEventListener("input",s=>{this.tableEngine.setSearchTerm(s.target.value)}),this.templateFilter&&this.templateFilter.addEventListener("change",s=>{this.tableEngine.setFilter("templateId",s.target.value)})},async render(){try{this.currentDocs=await G.getAll("doc")||[],this.currentTemplates=await G.getAll("tpl")||[],this.populateTemplateFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentDocs)}catch(s){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando documentos: ${s.message}</td></tr>`)}},populateTemplateFilter(){if(!this.templateFilter)return;const s=this.templateFilter.value,e=new Set(this.currentDocs.map(i=>i.templateId)),t=this.currentTemplates.filter(i=>e.has(i.id)).sort((i,r)=>i.title.localeCompare(r.title,void 0,{sensitivity:"base"}));let n='<option value="">Todas las plantillas</option>';t.forEach(i=>{const r=i.icon||"📄";n+=`<option value="${i.id}">${r} ${i.title}</option>`}),this.templateFilter.innerHTML=n,t.some(i=>i.id===s)?this.templateFilter.value=s:this.templateFilter.value=""},_renderRow(s){let e="";s.isEncrypted&&(e=G._masterKey&&!s.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Desbloqueado"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado"><i class="fa-solid fa-lock"></i></span>');const t=this.currentTemplates.find(i=>i.id===s.templateId);return`
      <tr>
        <td>
          <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
            <span class="me-1 fs-6">${t&&t.icon?t.icon:"📄"}</span>${s.templateTitle||"General"}
          </span>
        </td>
        <td>
           <div class="fw-bold text-nowrap d-flex align-items-center">
               ${s.title} ${e}
           </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-primary btn-view-doc me-1" data-id="${s.id}" title="Visualizar">
               <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-copy-id me-1" data-id="${s.id}" title="Copiar ID">
               <i class="fa-regular fa-copy"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del-doc" data-id="${s.id}" title="Eliminar Documento">
               <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(s){s.querySelectorAll(".btn-view-doc").forEach(e=>{e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)}),s.querySelectorAll(".btn-del-doc").forEach(e=>{e.onclick=async()=>{await B.confirm("Eliminar Documento","¿Estás seguro de eliminar este documento definitivamente? Esta acción no se puede deshacer.")&&(await G.delete("doc",e.dataset.id),B.toast("Documento eliminado correctamente","success"),this.render())}}),s.querySelectorAll(".btn-copy-id").forEach(e=>{e.onclick=async t=>{t.stopPropagation();const n=e.dataset.id,i=e.querySelector("i");try{await navigator.clipboard.writeText(n);const r=i.className;i.className="fa-solid fa-check text-success",setTimeout(()=>{i.className=r},1500)}catch(r){console.error("Error al copiar ID:",r),alert("No se pudo copiar el ID al portapapeles.")}}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},oi={async print(s,e){let t=await G.getOne("doc",s);if(!t)return alert("Documento no encontrado.");if(t.isEncrypted&&t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const n=await G.getOne("tpl",t.templateId);if(!n)return alert("La plantilla base no se encuentra.");let i=document.getElementById("print-iframe");i||(i=document.createElement("iframe"),i.id="print-iframe",i.style.position="fixed",i.style.left="-10000px",i.style.top="0",i.style.width="100%",i.style.height="100%",document.body.appendChild(i));const r=i.contentWindow.document,o=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let l="";for(let c=1;c<=12;c++){const d=c/12*100;l+=`.col-${c} { width: ${d}%; } `}r.open(),r.write(`
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
    `),r.close(),i.onload=()=>{const c=r.getElementById("print-content");n.elements.forEach(d=>{if(d.hidePrint)return;const h=t.content.find(x=>x.fieldId===d.id);if(d.tag==="setting-section"){const x=r.createElement("div");x.className="col-12 mt-3 mb-2",x.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">${d.title}</h4>`,c.appendChild(x);return}if(!h)return;const m=h.value,g=d.tag.replace("setting-","printer-"),_=document.createElement(g);_.setAttribute("title",d.title),d.currency&&_.setAttribute("currency",d.currency),d.options&&_.setAttribute("options",d.options),d.columns&&_.setAttribute("columns",JSON.stringify(d.columns)),_.setAttribute("edit-value",Array.isArray(m)?JSON.stringify(m):m),_.setAttribute("type",e);const C=d.spanP||12;_.setAttribute("span-print",C),h.bold&&_.setAttribute("bold",""),h.italic&&_.setAttribute("italic",""),_.setAttribute("color",h.color||"black");const L=r.createElement("div");L.className=`col-${C}`,L.appendChild(_),c.appendChild(L)}),setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print()},500)}},async copyToWhatsApp(s){let e=await G.getOne("doc",s);if(!e)return alert("Error recuperando documento.");if(e.isEncrypted&&e.decryptionError)return alert("El documento está cifrado. Debe abrirlo primero en el visor.");const t=await G.getOne("tpl",e.templateId);let n=`*${e.title.toUpperCase()}*
_${t.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`;t.elements.forEach(i=>{if(i.hideWhatsapp)return;if(i.tag==="setting-section"){n+=`
*--- ${i.title.toUpperCase()} ---*
`;return}const r=e.content.find(d=>d.fieldId===i.id);if(!r)return;const o=r.value,l=i.tag.replace("setting-","viewer-"),c=document.createElement(l);if(i.currency&&c.setAttribute("currency",i.currency),i.columns&&(c.columns=i.columns),c.setAttribute("title",i.title),c.setAttribute("edit-value",typeof o=="object"?JSON.stringify(o):o),l==="viewer-table"&&i.columns&&(c.columns=i.columns,c.rows=Array.isArray(o)?o:[]),typeof c.getWhatsapp=="function"){const d=c.getWhatsapp();d&&d.trim()!==""&&(n+=d+`
`)}}),n+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(n).then(()=>alert(`📋 ¡Contenido copiado al portapapeles!
Listo para pegar en WhatsApp.`)).catch(()=>alert("Error al acceder al portapapeles."))}},_i={handlers:{},currentDocId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(s){if(!s)return;`${s}`;let e=await G.getOne("doc",s);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&(e.isEncrypted,e.decryptionError,e.content),e.isEncrypted&&e.decryptionError){const n=await B.promptPassword("Acceso Seguro Requerido","Este documento está cifrado. Ingrese su Frase Maestra para visualizarlo:");if(!n)return this.handlers.onBack();try{if(`${n.length}`,await G.setMasterKey(n),e=await G.getOne("doc",s),e.decryptionError,e.content,e.decryptionError)return console.error("[VIEWER-DEBUG] ⛔ FALLO: El Storage devolvió error de descifrado nuevamente."),B.toast("Frase incorrecta. Acceso denegado.","danger"),this.handlers.onBack();B.toast("Documento descifrado con éxito","success")}catch(i){return console.error("[VIEWER-DEBUG] ❌ ERROR CRÍTICO durante el desbloqueo:",i),B.toast("Error del sistema al intentar desbloquear.","danger"),this.handlers.onBack()}}const t=await G.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this._renderContent(e,t,this.canvas)},async renderReadOnly(s,e){e.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let t=await G.getOne("doc",s);if(!t){e.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(t.isEncrypted&&t.decryptionError){e.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const n=await G.getOne("tpl",t.templateId);if(!n){e.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}e.innerHTML="";const i=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(t,n,e,i)},_renderContent(s,e,t,n=""){e.elements.some(r=>r.tag==="setting-section")?(t.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(s,e,t,n)):(t.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(s,e,t))},_renderFlatView(s,e,t){s.content&&s.content.forEach(n=>{const i=e.elements.find(o=>o.id===n.fieldId);if(!i)return;const r=this._createViewerComponent(i,n);t.appendChild(r)})},_renderStructuredView(s,e,t,n=""){const i=[];let r={title:"Principal",elements:[]};e.elements.forEach(d=>{if(d.tag==="setting-section")(r.elements.length>0||r.title!=="Principal")&&i.push(r),r={title:d.title||"Sección",elements:[]};else{const h=s.content.find(m=>m.fieldId===d.id);h&&r.elements.push({def:d,data:h})}}),i.push(r);const o=`nav-viewer-${s.id}${n}`;let l=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${o}" role="tablist">`,c=`<div class="tab-content tab-content-custom" id="${o}Content">`;i.forEach((d,h)=>{const m=`view-sec-${h}-${s.id}${n}`,g=h===0;l+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${g?"active":""}" data-bs-toggle="tab" data-bs-target="#v-tab-${m}" type="button">
            ${d.title}
          </button>
        </li>`,c+=`
        <div class="tab-pane fade ${g?"show active":""}" id="v-tab-${m}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#v-coll-${m}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${d.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${m}" class="collapse d-md-block ${g?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),t.innerHTML=l+"</ul>"+c+"</div>",i.forEach((d,h)=>{const m=`view-sec-${h}-${s.id}${n}`,g=t.querySelector(`#v-coll-${m} .row`);d.elements.forEach(_=>{const C=this._createViewerComponent(_.def,_.data);g.appendChild(C)})})},_createViewerComponent(s,e){const t=s.tag.replace("setting-","viewer-"),n=document.createElement(t);return s.currency&&n.setAttribute("currency",s.currency),s.options&&n.setAttribute("options",s.options),n.setData&&n.setData({...e,value:e.value,title:s.title,spanEV:s.spanEV,columns:s.columns||[],currency:s.currency,options:s.options}),n},_renderHeaderActions(s){this.headerActions&&(this.headerActions.innerHTML=`
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
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(s.id),document.getElementById("btn-whatsapp").onclick=()=>oi.copyToWhatsApp(s.id),document.getElementById("print-v").onclick=e=>{e.preventDefault(),oi.print(s.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),oi.print(s.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),oi.print(s.id,"Facil Lectura")})}},Fw={container:null,init(s){s&&(this.container=s,this._bindEvents(),setTimeout(()=>this.run(),200))},run(){if(!this.container)return;const s=Array.from(this.container.querySelectorAll("[is-calculated]"));s.length!==0&&s.forEach(e=>{const t=e.getAttribute("formula");if(t)try{const n=t.replace(/@\{([^}]+)\}/g,(r,o)=>this._getVariableValue(o)),i=new Function(`"use strict"; return (${n})`)();if(isFinite(i)&&!isNaN(i)){const r=e.querySelector("input");if(r){const o=Math.round(i*100)/100;r.value!=o&&(r.value=o,e.setAttribute("edit-value",o),r.dispatchEvent(new Event("input",{bubbles:!0})))}}}catch(n){console.warn(`[CalculationEngine] Error en ${e.id}:`,n.message)}})},_getVariableValue(s){if(s.startsWith("TOTAL_")){const n=document.getElementById(s);return n&&parseFloat(n.dataset.rawValue)||0}const e=document.getElementById(`input-${s}`);if(!e)return 0;let t=e.value;return typeof t=="string"&&(t=t.replace(/,/g,".")),parseFloat(t)||0},_bindEvents(){this.container.addEventListener("input",s=>{s.target.readOnly||this.run()}),this.container.addEventListener("table-change",()=>{setTimeout(()=>this.run(),50)}),this.container.addEventListener("paste",()=>{setTimeout(()=>this.run(),50)})}},Xr={handlers:{},currentDocId:null,currentTplId:null,init(s){this.handlers=s,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(s){const e=await G.getOne("tpl",s);if(!e)return alert("Error: La plantilla seleccionada no existe."),this.handlers.onBack();if(e.encrypted&&!G._masterKey){const n=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!n)return this.handlers.onBack();if(!await G.verifyMasterPhrase(n))return alert("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla."),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=s,this.titleInput.value="",this.titleInput.readOnly=!1;const t=document.getElementById("doc-template-selector");t&&(t.style.display="none"),await this.renderCanvas(s,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(s){const e=await G.getOne("doc",s);e&&(this.currentDocId=s,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(s,e){const t=await G.getOne("tpl",s);if(!t)return;this.canvas.innerHTML="",t.elements.filter(r=>r.tag==="setting-section").length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(t.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),t.elements.forEach(r=>{const o=this._createComponent(r,e);this.canvas.appendChild(o)})),Fw.init(this.canvas)},_renderStructuredUI(s,e){const t=[];let n={title:"Principal",elements:[]};s.forEach(l=>{l.tag==="setting-section"?((n.elements.length>0||n.title!=="Principal")&&t.push(n),n={title:l.title||"Sección",elements:[]}):n.elements.push(l)}),t.push(n);const i=`nav-tabs-${this.currentTplId}`;let r=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${i}" role="tablist">`,o=`<div class="tab-content tab-content-custom" id="${i}Content">`;t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=c===0;r+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${h?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${d}" type="button">
            ${l.title}
          </button>
        </li>`,o+=`
        <div class="tab-pane fade ${h?"show active":""} group-pane" id="tab-pane-${d}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${d}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${l.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${d}" class="collapse d-md-block ${h?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=r+"</ul>"+o+"</div>",t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=this.canvas.querySelector(`#collapse-${d} .row`);l.elements.forEach(m=>{const g=this._createComponent(m,e);h.appendChild(g)})})},_createComponent(s,e){const t=s.tag.replace("setting-","editor-"),n=document.createElement(t);n.setAttribute("field-id",s.id),s.formula&&n.setAttribute("formula",s.formula),s.isCalculated&&n.setAttribute("is-calculated","true");const i=e.find(l=>l.fieldId===s.id),r=i?i.value:"",o={id:s.id,title:s.title,spanEV:s.spanEV||12,options:s.options,value:r,bold:i?i.bold:!1,italic:i?i.italic:!1,color:i?i.color:"black",columns:s.columns,currency:s.currency,formula:s.formula,isCalculated:s.isCalculated,prependRows:s.prependRows,apiUrl:s.apiUrl,apiPath:s.apiPath};return n.setData&&n.setData(o),n},setupSaveButton(s){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary"><i class="fa-solid fa-save"></i> ${s}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const s=document.getElementById("btn-save-document"),e=this.titleInput.value.trim();if(!e){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert("⚠️ Imposible Guardar: El documento requiere un Título.");return}const t=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{const n=this.currentDocId||`doc_${Date.now()}`,i=await G.getOne("tpl",this.currentTplId),r=Array.from(this.canvas.querySelectorAll("[field-id]")),o=[];let l=!0;if(r.forEach(d=>{typeof d.validate=="function"&&!d.validate()&&(l=!1),typeof d.getData=="function"&&o.push(d.getData())}),!l)throw new Error("Revise los campos marcados en rojo.");const c={id:n,title:e,templateId:this.currentTplId,templateTitle:i?i.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:o,isEncrypted:i&&i.encrypted||!1};await G.save("doc",c),this.handlers.onSave()}catch(n){alert("Error al guardar: "+n.message),s&&(s.disabled=!1,s.innerHTML=t)}}},En={init(){ns.init({onViewDocument:async s=>{ns.hide(),this.showEditorView(),await _i.render(s)},onNavigateToDesigner:()=>{const s=document.getElementById("nav-designer");s?s.click():alert("Navegue al diseñador para crear una plantilla.")}}),_i.init({onEdit:async s=>{await Xr.loadForEditing(s),await this._checkAndRenderRelatedDocs(s,!1)},onBack:()=>{this.showListView()}}),Xr.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),ns.render()},async createFromTemplate(s){ns.hide(),this.showEditorView(),await Xr.loadForCreation(s),await this._checkAndRenderRelatedDocs(s,!0)},async _checkAndRenderRelatedDocs(s,e){let t;if(e)t=await G.getOne("tpl",s);else{const n=await G.getOne("doc",s);n&&(t=await G.getOne("tpl",n.templateId))}if(t&&t.relatedDocIds){const n=t.relatedDocIds.split(",").map(i=>i.trim()).filter(i=>i);n.length>0&&this._renderRelatedBar(n)}},async _renderRelatedBar(s){this._clearRelatedBar();const e=document.createElement("div");e.id="related-docs-wrapper",e.className="no-print",e.style.position="fixed",e.style.bottom="20px",e.style.left="20px",e.style.zIndex="1050",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";const t=document.createElement("button");t.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",t.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${s.length}</span>
    `,t.title="Ver documentos relacionados";const n=document.createElement("div");n.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",n.style.position="absolute",n.style.minWidth="250px",n.style.maxWidth="300px",n.style.maxHeight="300px",n.style.overflowY="auto",n.style.transition="all 0.2s ease";const i=document.createElement("div");i.className="d-flex flex-column gap-1";let r=0;for(const o of s){const l=await G.getOne("doc",o);if(l){r++;const c=document.createElement("button");c.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",c.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,c.title=l.title,c.onclick=()=>{this._toggleDrawer(n,t,!1);const d=document.getElementById("modal-related-doc"),h=document.getElementById("modal-related-body");new bootstrap.Modal(d).show(),_i.renderReadOnly(l.id,h)},i.appendChild(c)}}n.appendChild(i),r!==0&&(t.onclick=o=>{o.stopPropagation(),n.classList.contains("d-none")?(this._positionDrawer(e,n),n.classList.remove("d-none"),t.classList.remove("rounded-pill"),t.classList.add("rounded-start")):this._toggleDrawer(n,t,!1)},e.appendChild(n),e.appendChild(t),document.body.appendChild(e))},_toggleDrawer(s,e,t){t?s.classList.remove("d-none"):(s.classList.add("d-none"),e.classList.add("rounded-pill"),e.classList.remove("rounded-start"))},_positionDrawer(s,e){const t=s.getBoundingClientRect(),n=260,r=window.innerWidth-t.right;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",r>n?(e.style.left="100%",e.style.bottom="0",e.style.marginLeft="10px"):(e.style.bottom="100%",e.style.left="0",e.style.marginBottom="10px")},_clearRelatedBar(){const s=document.getElementById("related-docs-wrapper");s&&s.remove();const e=document.getElementById("related-docs-bar");e&&e.remove()},showListView(){this._clearRelatedBar();const s=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");s&&(s.style.display="block"),e&&(e.style.display="none"),ns.render()},showEditorView(){this._clearRelatedBar();const s=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");s&&(s.style.display="none"),e&&(e.style.display="block")}},nd={async exportData(){try{const s=await G.getAll("tpl"),e=await G.getAll("doc"),t={templates:s,documents:e,exportDate:new Date().toISOString(),version:"2.0 (Firebase)"},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`respaldo_mg_cloud_${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(i),B.toast("Respaldo exportado correctamente","success")}catch(s){console.error("Error exportando:",s),B.toast("Error al generar el respaldo: "+s.message,"danger")}},async importData(s){const e=new FileReader;e.onload=async t=>{try{const n=JSON.parse(t.target.result);if(!n.templates&&!n.documents&&!n.tpl&&!n.doc)throw new Error("Formato de archivo no reconocido.");const i=n.templates||[],r=n.documents||[];let o=0;for(const c of i)c.updatedAt||(c.updatedAt=new Date().toISOString()),await G.save("tpl",c),o++;let l=0;for(const c of r)await G.save("doc",c),l++;B.toast(`Proceso finalizado. Plantillas: ${o} | Documentos: ${l}. Recargando...`,"success"),setTimeout(()=>{location.reload()},2500)}catch(n){console.error(n),B.toast("Error crítico al importar: "+n.message,"danger")}},e.readAsText(s)}},In={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
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
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const n=document.getElementById("setup-master-phrase").value.trim(),i=document.getElementById("setup-error");if(n.length<15){i.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",i.style.display="block";return}try{await Te.setMasterKey(n);const r=await Te.encryptData({check:"VERIFIED"});await G.saveSecurityVerifier(r),t.hide(),e.remove(),B.toast("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.","success")}catch(r){console.error("Error al inicializar seguridad:",r),i.textContent="Error al inicializar el motor de seguridad.",i.style.display="block"}}},renderChangePhraseUI(s){const e=`
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
    `;s.innerHTML=e,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const s=document.getElementById("btn-reencrypt");s&&(s.onclick=async()=>{const e=document.getElementById("old-phrase").value.trim(),t=document.getElementById("new-phrase").value.trim();if(!e||t.length<15)return B.toast("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.","warning");if(await B.confirm("Confirmar Cambio","¿Estás seguro de que deseas cambiar tu Frase Maestra? Este proceso actualizará tus datos de seguridad."))try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await G.changeMasterPhrase(e,t),B.toast("¡Éxito! Frase actualizada. Recargando...","success"),setTimeout(()=>location.reload(),2e3)}catch(i){console.error(i),B.toast("Error: "+i.message,"danger"),s.disabled=!1,s.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const s=document.getElementById("reset-confirm-input"),e=document.getElementById("btn-execute-reset");!s||!e||(s.addEventListener("input",t=>{t.target.value==="ELIMINAR"?e.disabled=!1:e.disabled=!0}),e.onclick=async()=>{if(await B.confirm("ÚLTIMA ADVERTENCIA","Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await G.hardResetSecurity(),B.toast("Sistema de seguridad reiniciado. La página se recargará...","success"),setTimeout(()=>window.location.reload(),3e3)}catch(n){console.error(n),B.toast("Error al reiniciar seguridad: "+n.message,"danger"),e.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},Fh={getCurrentUser(){return Re.currentUser},onAuthStateChanged(s){return Sh(Re,s)},async login(s,e){try{const n=(await Th(Re,s,e)).user;if(!n.emailVerified)throw await fs(Re),new Error("Debes verificar tu correo electrónico antes de entrar.");return n}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(s,e){try{const n=(await Ih(Re,s,e)).user;return await Ah(n),await Oi(Ve(be,"users",n.uid),{email:s,createdAt:new Date().toISOString(),emailVerified:!1}),n}catch(t){throw new Error("Error en registro: "+t.message)}},async logout(){return fs(Re)}},qe={async saveUserConfig(s,e){const t=Ve(be,"users",s);await Mc(t,{githubConfig:e}).catch(async n=>{throw console.error("Error guardando config github",n),n})},async getUserConfig(s){const e=Ve(be,"users",s),t=await mi(e);return t.exists()&&t.data().githubConfig||null},async addFileRecord(s){const e=Di(be,"github_files");return(await vv(e,s)).id},async listFiles(s){const e=Di(be,"github_files"),t=Io(e,hi("userId","==",s)),n=await To(t),i=[];return n.forEach(r=>i.push({id:r.id,...r.data()})),i},async deleteFileRecord(s){await fi(Ve(be,"github_files",s))},async updateLastUsedSettings(s,e,t){const n=Ve(be,"users",s);await Mc(n,{"githubConfig.lastUsedRepo":e,"githubConfig.lastUsedFolder":t}).catch(i=>console.error("Error actualizando última config",i))}},$e={async validateCredentials(s,e){if(!(await fetch("https://api.github.com/user",{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales inválidas o token sin permisos.");return!0},async getUserRepos(s){const t=await fetch("https://api.github.com/user/repos?per_page=100&sort=updated",{headers:{Authorization:`Bearer ${s}`,Accept:"application/vnd.github.v3+json"}});if(!t.ok)throw new Error("No se pudieron cargar los repositorios de GitHub.");const i=(await t.json()).map(o=>({name:o.name,isPrivate:o.private,hasPages:o.has_pages,owner:o.owner.login})),r=i.map(async o=>{if(o.hasPages&&!o.isPrivate)try{const l=await fetch(`https://api.github.com/repos/${o.owner}/${o.name}/pages`,{headers:{Authorization:`Bearer ${s}`,Accept:"application/vnd.github.v3+json"}});if(l.ok){const c=await l.json();o.pagesUrl=c.html_url}}catch{console.warn(`No se pudo obtener el site de ${o.name}`)}});return await Promise.all(r),i},async uploadFile(s,e,t,n,i){const r=await this._toBase64(e),o=t.replace(/^\//,"").replace(/\/$/,""),l=o?`${o}/${n}`:n,c=`https://api.github.com/repos/${s.githubUser}/${i}/contents/${l}`,d={message:`Subido desde DocEngine: ${n}`,content:r},h=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(d)});if(!h.ok){const m=await h.json();throw new Error(m.message||"Error al subir archivo a GitHub")}return await h.json()},async deleteFile(s,e,t,n){const i=`https://api.github.com/repos/${s.githubUser}/${n}/contents/${e}`,r={message:"Eliminado desde DocEngine",sha:t};if(!(await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${s.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(s){return new Promise((e,t)=>{const n=new FileReader;n.readAsDataURL(s),n.onload=()=>e(n.result.split(",")[1]),n.onerror=i=>t(i)})},async fetchSecureFile(s,e,t){const n=`https://api.github.com/repos/${s.githubUser}/${t}/contents/${e}`,i=await fetch(n,{headers:{Authorization:`Bearer ${s.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!i.ok)throw new Error(`Error descargando archivo (${i.status})`);return await i.blob()}},Uh={init(){this.container=document.getElementById("view-settings"),this.render()},render(){const s=document.getElementById("theme-link").getAttribute("href"),e=`./manual.html?theme=${encodeURIComponent(s)}`;this.container.innerHTML=`
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
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader();const t=document.getElementById("security-config-wrapper");In&&In.renderChangePhraseUI&&In.renderChangePhraseUI(t),this.renderGithubSettings("github-settings-wrapper")},_initThemeLoader(){const s=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(t=>t.json()).then(t=>{const n=t.themes;s.innerHTML="";const i=document.createElement("option");i.value="default",i.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(i.selected=!0),s.append(i),n.forEach((r,o)=>{const l=document.createElement("option");l.value=o,l.textContent=r.name+(r.description?` (${r.description})`:"");const c=r.cssCdn||r.css;e===c&&(l.selected=!0),s.append(l)}),s.addEventListener("change",r=>{let o="";if(r.target.value==="default")o="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=n[r.target.value];o=l.cssCdn||l.css}this._applyThemeWithPreload(o,s)})}).catch(t=>{console.error("Error cargando temas:",t),s.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(s,e){e.options[e.selectedIndex].text,e.disabled=!0;const t=document.createElement("div");t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,t.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"});const n=document.createElement("link");n.rel="stylesheet",n.href=s,n.onload=()=>{document.getElementById("theme-link").setAttribute("href",s),localStorage.setItem("doc_engine_theme_url",s),setTimeout(()=>{e.disabled=!1,t.style.opacity="0",setTimeout(()=>{t.remove(),n.remove()},300)},200)},n.onerror=()=>{B.toast("Error al descargar el tema seleccionado.","danger"),e.disabled=!1,t.remove(),n.remove()},document.head.appendChild(n)},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),B.toast("Preferencias guardadas.","success")},document.getElementById("btn-export").onclick=()=>nd.exportData(),document.getElementById("import-file").onchange=e=>{e.target.files.length>0&&nd.importData(e.target.files[0])};const s=document.getElementById("btn-change-pass");s.onclick=async()=>{const e=document.getElementById("current-pass").value,t=document.getElementById("new-pass").value;if(!e||!t)return B.toast("Complete ambos campos.","warning");if(!Ne.validatePassword(t))return B.toast("La contraseña no cumple requisitos (8+ chars, Mayús, Num).","warning");const n=s.innerHTML;s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const i=Re.currentUser;if(!i)throw new Error("Sin sesión.");const r=ln.credential(i.email,e);await __(i,r),await E_(i,t),B.toast("Contraseña actualizada correctamente.","success"),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(i){console.error(i),B.toast(i.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+i.message,"danger")}finally{s.disabled=!1,s.innerHTML=n}}},_loadCurrentPrefs(){const s=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=s||"35"},renderGithubSettings(s){const e=document.getElementById(s);if(!e)return;const t=`
      <div class="card mb-4 mt-4">
        <div class="card-header bg-dark text-white">
          <i class="fa-brands fa-github"></i> Integración GitHub (Cuenta)
        </div>
        <div class="card-body">
          <p class="small text-muted">Configura tu cuenta para acceder a todos tus repositorios.</p>
          <form id="github-config-form">
            <div class="mb-3">
              <label class="form-label">Usuario GitHub</label>
              <input autocomplete="off" spellcheck="false" type="text" id="set-gh-user" class="form-control" placeholder="Ej: miusuario" required>
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
    `,n=document.createElement("div");n.innerHTML=t,e.appendChild(n);let i=null;const r=Fh.getCurrentUser();r&&qe.getUserConfig(r.uid).then(o=>{o&&(document.getElementById("set-gh-user").value=o.githubUser||"",document.getElementById("set-gh-token").value=o.githubToken||"",i=o.lastUsedRepo||null,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))}),document.getElementById("github-config-form").addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("gh-config-msg"),c=o.target.querySelector('button[type="submit"]'),d=document.getElementById("set-gh-user").value.trim(),h=document.getElementById("set-gh-token").value.trim();try{c.disabled=!0,l.innerHTML='<span class="text-info">Verificando cuenta...</span>',await $e.validateCredentials(d,h),await qe.saveUserConfig(r.uid,{githubUser:d,githubToken:h,lastUsedRepo:i}),l.innerHTML='<span class="text-success fw-bold">¡Conexión Exitosa! Recarga la página para ver el menú.</span>',window.location.reload()}catch(m){l.innerHTML=`<span class="text-danger">Error: ${m.message}</span>`}finally{c.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{await B.confirm("Desvincular Cuenta","¿Estás seguro de que deseas desvincular tu cuenta de GitHub?")&&(await qe.saveUserConfig(r.uid,null),B.toast("Cuenta desvinculada exitosamente. Recargando...","info"),setTimeout(()=>window.location.reload(),1500))})}},It={setupListeners(){var s,e,t;(s=document.getElementById("ghPdfModal"))==null||s.addEventListener("hidden.bs.modal",()=>{const n=document.getElementById("gh-preview-pdf");n.src&&(URL.revokeObjectURL(n.src.split("#")[0]),n.src="")}),(e=document.getElementById("ghVideoModal"))==null||e.addEventListener("hidden.bs.modal",()=>{const n=document.getElementById("gh-preview-video");n.pause(),n.src&&(URL.revokeObjectURL(n.src),n.src="")}),(t=document.getElementById("gh-close-audio"))==null||t.addEventListener("click",()=>{const n=document.getElementById("gh-audio-player");n.pause(),n.src="",document.getElementById("gh-audio-container").classList.add("d-none")})},async viewImage(s,e){const{path:t,title:n,repo:i}=e,r=document.getElementById("ghImageModal"),o=document.getElementById("gh-preview-img"),l=document.getElementById("gh-loading-img");document.getElementById("ghImageModalLabel").textContent=n,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await $e.fetchSecureFile(s,t,i);o.src=URL.createObjectURL(d),o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){B.toast("Error cargando imagen: "+d.message,"danger"),c.hide()}},async viewVideo(s,e){const{path:t,title:n,repo:i}=e,r=document.getElementById("ghVideoModal"),o=document.getElementById("gh-preview-video"),l=document.getElementById("gh-loading-video");document.getElementById("ghVideoModalLabel").textContent=n,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await $e.fetchSecureFile(s,t,i);o.src=URL.createObjectURL(d),l.classList.add("d-none"),o.classList.remove("d-none"),o.play().catch(h=>console.log("Autoplay bloqueado",h))}catch(d){B.toast("Error cargando video: "+d.message,"danger"),c.hide()}},async viewPdf(s,e){const{path:t,title:n,repo:i}=e,r=document.getElementById("ghPdfModal"),o=document.getElementById("gh-preview-pdf"),l=document.getElementById("gh-loading-pdf");document.getElementById("ghPdfModalLabel").textContent=n,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await $e.fetchSecureFile(s,t,i),h=new Blob([d],{type:"application/pdf"});o.src=URL.createObjectURL(h)+"#toolbar=0&navpanes=0",o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){B.toast("Error cargando PDF: "+d.message,"danger"),c.hide()}},async playAudio(s,e){const{path:t,title:n,repo:i}=e,r=document.getElementById("gh-audio-container"),o=document.getElementById("gh-audio-player"),l=document.getElementById("gh-loading-audio");r.classList.remove("d-none"),document.getElementById("gh-audio-title").textContent="Cargando "+n+"...",l.classList.remove("d-none"),o.classList.add("d-none"),o.pause();try{const c=await $e.fetchSecureFile(s,t,i);o.src=URL.createObjectURL(c),o.classList.remove("d-none"),l.classList.add("d-none"),document.getElementById("gh-audio-title").textContent=n,o.play().catch(d=>console.log("Autoplay bloqueado",d))}catch(c){B.toast("Error cargando audio: "+c.message,"danger"),r.classList.add("d-none")}},async downloadFile(s,e,t){const{path:n,name:i,repo:r}=e,o=t.innerHTML;t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await $e.fetchSecureFile(s,n,r),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=i,document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(l){B.toast("Error en la descarga: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=o}},async openPdfMobile(s,e,t){const{path:n,repo:i}=e,r=t.innerHTML,o=window.open("","_blank");o&&o.document.write("<h3 style='text-align: center; margin-top: 20%;'>Cargando...</h3>"),t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await $e.fetchSecureFile(s,n,i),c=new Blob([l],{type:"application/pdf"}),d=URL.createObjectURL(c);o?o.location.href=d:window.location.href=d,setTimeout(()=>URL.revokeObjectURL(d),6e4)}catch(l){o&&o.close(),B.toast("Error abriendo el documento: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=r}},copyLink(s){navigator.clipboard.writeText(s).then(()=>B.toast("Enlace público copiado al portapapeles.","success")).catch(()=>B.toast("No se pudo copiar el enlace.","danger"))}},Je={getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-brands fa-github"></i> Gestor de Archivos GitHub</h2>
            <button class="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#ghUploadModal">
                <i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Nuevo Archivo
            </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="gh-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Archivos (Cargando...)</span>
            </div>
            
            <div class="row g-2 align-items-center justify-content-end flex-grow-1">
              <div class="col-auto">
                <select id="gh-filter-repo" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <select id="gh-filter-folder" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="gh-search-input" class="form-control" placeholder="Buscar..." autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="gh-table-head">
                  <tr>
                    <th class="sortable" data-column="repoName">Ubicación</th>
                    <th class="sortable" data-column="title">Título del Archivo</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="gh-files-list">
                  <tr><td colspan="3" class="text-center p-3 text-muted">Cargando archivos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales (Subir y Copiar) -->
      <div class="modal fade" id="ghUploadModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title"><i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Archivo</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-upload-form" class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio</label>
                  <select id="gh-repo" class="form-select" required><option value="" disabled selected>Cargando repos...</option></select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta</label>
                  <input type="text" id="gh-folder" class="form-control" placeholder="Ej: media (opcional)" autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos</label>
                  <input type="file" id="gh-file" class="form-control" multiple required>
                </div>
                <div class="col-12 d-none" id="gh-batch-preview-container">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos a subir (Modifica el título si lo deseas)</label>
                  <div id="gh-batch-preview-list" class="list-group mb-2 border rounded" style="max-height: 45vh; overflow-y: auto;"></div>
                  <div style="min-height: 36px;">
                    <div class="progress mt-3 shadow-sm d-none" style="height: 20px;" id="gh-upload-progress-container">
                      <div id="gh-upload-progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 0%;">0%</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-success" id="gh-btn-upload">Subir Todos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghCopyModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-warning text-dark">
              <h5 class="modal-title"><i class="fa-solid fa-copy me-2"></i> Copiar Archivo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-copy-form" class="row g-3">
                <input type="hidden" id="gh-copy-orig-path"><input type="hidden" id="gh-copy-orig-repo"><input type="hidden" id="gh-copy-orig-filename">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio Destino</label>
                  <select id="gh-copy-repo" class="form-select" required></select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta Destino</label>
                  <input type="text" id="gh-copy-folder" class="form-control" placeholder="Ej: media" autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Título</label>
                  <input type="text" id="gh-copy-new-title" class="form-control" required autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Tiempo de Expiración</label>
                  <select id="gh-copy-timer" class="form-select">
                    <option value="0" selected>Siempre (Sin expiración)</option>
                    <option value="15">15 Minutos</option>
                    <option value="60">1 Hora</option>
                    <option value="480">8 Horas</option>
                  </select>
                </div>
                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-warning" id="gh-btn-copy">Confirmar Copia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales Multimedia (Inyectados directamente en el base HTML) -->
      <div class="modal fade" id="ghImageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="ghImageModalLabel">Vista Previa</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
              <div id="gh-loading-img" class="spinner-border text-primary d-none"></div>
              <img id="gh-preview-img" src="" class="img-fluid rounded shadow-sm d-none" style="max-height: 70vh;">
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghPdfModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="ghPdfModalLabel">Vista Previa PDF</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center p-0" style="height: 80vh;">
              <div id="gh-loading-pdf" class="spinner-border text-danger d-none"></div>
              <iframe id="gh-preview-pdf" src="" class="w-100 h-100 border-0 d-none"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghVideoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white"><h5 class="modal-title" id="ghVideoModalLabel">Vista Previa</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-black position-relative d-flex align-items-center justify-content-center p-0" style="min-height: 250px;">
              <div id="gh-loading-video" class="spinner-border text-light d-none"></div>
              <video id="gh-preview-video" controls class="w-100 d-none" style="max-height: 75vh;"></video>
            </div>
          </div>
        </div>
      </div>

      <div id="gh-audio-container" class="card shadow-lg border-0 position-fixed bottom-0 end-0 m-3 d-none" style="z-index: 1050; width: 320px;">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
          <small class="fw-bold text-truncate" id="gh-audio-title" style="max-width: 240px;">Cargando...</small>
          <button type="button" class="btn-close btn-close-white btn-sm" id="gh-close-audio"></button>
        </div>
        <div class="card-body bg-secondary p-2 text-center">
            <div id="gh-loading-audio" class="spinner-border spinner-border-sm text-light mb-2 d-none"></div>
            <audio id="gh-audio-player" controls class="w-100" style="height: 30px;"></audio>
        </div>
      </div>
    `},injectStyles(){const s=document.createElement("style");s.innerHTML=".cursor-pointer { cursor: pointer; user-select: none; }",document.head.appendChild(s)},setupFilterListeners(s){var e,t;(e=document.getElementById("gh-filter-repo"))==null||e.addEventListener("change",n=>s.tableEngine.setFilter("repoName",n.target.value)),(t=document.getElementById("gh-filter-folder"))==null||t.addEventListener("change",n=>s.tableEngine.setFilter("folder",n.target.value))},buildFilters(s){const e=document.getElementById("gh-filter-repo"),t=document.getElementById("gh-filter-folder");if(!e||!t)return;const n=[...new Set(s.currentFiles.map(l=>l.repoName))].filter(Boolean),i=[...new Set(s.currentFiles.map(l=>l.folder))].filter(Boolean),r=e.value,o=t.value;n.length>1?(e.innerHTML='<option value="">📁 Todos los Repos</option>'+n.map(l=>`<option value="${l}">${l}</option>`).join(""),e.value=n.includes(r)?r:"",e.classList.remove("d-none")):(e.classList.add("d-none"),e.value=""),i.length>1?(t.innerHTML='<option value="">📂 Todas las Carpetas</option>'+i.map(l=>`<option value="${l}">${l}</option>`).join(""),t.value=i.includes(o)?o:"",t.classList.remove("d-none")):(t.classList.add("d-none"),t.value="")},getDummyRowHTML(){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border px-2 py-1">Repo / Folder</span></td>
        <td class="fw-bold text-nowrap"><i class="fa-regular fa-image me-2"></i> Test File</td>
        <td class="text-end"><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `},renderRowHTML(s,e){const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=s.fileName.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","webp","svg"].includes(n),r=["mp3","wav","ogg","m4a"].includes(n),o=n==="pdf",l=["mp4","webm","ogg","mov"].includes(n);let c=i?'<i class="fa-regular fa-image text-primary me-2"></i>':r?'<i class="fa-solid fa-music text-info me-2"></i>':o?'<i class="fa-solid fa-file-pdf text-danger me-2"></i>':l?'<i class="fa-solid fa-video text-success me-2"></i>':`<span class="text-muted small fw-normal me-2">(${n})</span>`;const d=s.isPrivate?"fa-lock text-danger":"fa-globe text-success",h=s.expiresAt?'<span class="badge bg-warning text-dark ms-2"><i class="fa-regular fa-clock"></i> Temporal</span>':"",m=`data-id="${s.id}" data-sha="${s.sha}" data-path="${s.path}" data-title="${s.title}" data-repo="${s.repoName}" data-folder="${s.folder}" data-filename="${s.fileName}"`;let g="";if(i?g+=`<button class="btn btn-sm btn-outline-primary btn-view-img me-1" ${m}><i class="fa-regular fa-eye"></i></button>`:r?g+=`<button class="btn btn-sm btn-outline-info btn-play-audio me-1" ${m}><i class="fa-solid fa-play"></i></button>`:o?g+=`<button class="btn btn-sm btn-outline-danger ${t?"btn-open-pdf-mobile":"btn-view-pdf"} me-1" ${m}><i class="fa-solid ${t?"fa-arrow-up-right-from-square":"fa-file-pdf"}"></i></button>`:l&&(g+=`<button class="btn btn-sm btn-outline-success btn-play-video me-1" ${m}><i class="fa-solid fa-video"></i></button>`),g+=`<button class="btn btn-sm btn-outline-warning btn-copy-trigger me-1" ${m} title="Copiar Archivo"><i class="fa-solid fa-copy"></i></button>`,g+=`<button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" ${m} data-name="${s.originalName||s.fileName}"><i class="fa-solid fa-download"></i></button>`,!s.isPrivate){const _=e.repoPages[s.repoName],C=_?(_.endsWith("/")?_:_+"/")+(s.path.startsWith("/")?s.path.substring(1):s.path):s.htmlUrl;g+=`<button class="btn btn-sm ${_?"btn-outline-success":"btn-outline-secondary"} btn-copy-link me-1" data-url="${C}"><i class="fa-solid ${_?"fa-link":"fa-github"}"></i></button>`}return g+=`<button class="btn btn-sm btn-danger btn-delete-gh" ${m}><i class="fa-solid fa-trash"></i></button>`,`
      <tr>
        <td>
           <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
             <i class="fa-solid ${d} me-1"></i> ${s.repoName} <i class="fa-solid fa-chevron-right mx-1" style="font-size:0.7em;"></i> ${s.folder}
           </span>
        </td>
        <td class="fw-bold text-nowrap">
          ${c}${s.title} ${h}
        </td>
        <td class="text-end text-nowrap">
          ${g}
        </td>
      </tr>
    `},attachTableListeners(s,e,t){s.querySelectorAll(".btn-copy-trigger").forEach(n=>{n.addEventListener("click",()=>{document.getElementById("gh-copy-orig-path").value=n.dataset.path,document.getElementById("gh-copy-orig-repo").value=n.dataset.repo,document.getElementById("gh-copy-orig-filename").value=n.dataset.filename,document.getElementById("gh-copy-folder").value=n.dataset.folder,document.getElementById("gh-copy-new-title").value=n.dataset.title+" (Copia)",document.getElementById("gh-copy-repo").value=n.dataset.repo,new bootstrap.Modal(document.getElementById("ghCopyModal")).show()})}),s.querySelectorAll(".btn-view-img").forEach(n=>n.addEventListener("click",()=>It.viewImage(e.config,n.dataset))),s.querySelectorAll(".btn-view-pdf").forEach(n=>n.addEventListener("click",()=>It.viewPdf(e.config,n.dataset))),s.querySelectorAll(".btn-play-audio").forEach(n=>n.addEventListener("click",()=>It.playAudio(e.config,n.dataset))),s.querySelectorAll(".btn-download-gh").forEach(n=>n.addEventListener("click",()=>It.downloadFile(e.config,n.dataset,n))),s.querySelectorAll(".btn-open-pdf-mobile").forEach(n=>n.addEventListener("click",()=>It.openPdfMobile(e.config,n.dataset,n))),s.querySelectorAll(".btn-copy-link").forEach(n=>n.addEventListener("click",()=>It.copyLink(n.dataset.url))),s.querySelectorAll(".btn-delete-gh").forEach(n=>n.addEventListener("click",()=>Je.handleDelete(t,n.dataset,e))),s.querySelectorAll(".btn-play-video").forEach(n=>n.addEventListener("click",()=>It.viewVideo(e.config,n.dataset)))},async handleCopy(s,e,t){var L;s.preventDefault();const n=document.getElementById("gh-btn-copy"),i=document.getElementById("gh-copy-orig-path").value,r=document.getElementById("gh-copy-orig-repo").value,o=document.getElementById("gh-copy-orig-filename").value,l=document.getElementById("gh-copy-repo"),c=l.value,d=l.options[l.selectedIndex].dataset.isPrivate==="true",h=document.getElementById("gh-copy-folder").value.trim()||"root",m=document.getElementById("gh-copy-new-title").value.trim(),g=parseInt(document.getElementById("gh-copy-timer").value),_=o.split(".").pop(),C=m.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+_;try{n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Copiando...';const x=await $e.fetchSecureFile(t.config,i,r),M=await $e.uploadFile(t.config,x,h,C,c),F=g>0?Date.now()+g*60*1e3:null;await qe.addFileRecord({userId:e.uid,title:m,folder:h,fileName:C,originalName:o,path:M.content.path,sha:M.content.sha,htmlUrl:M.content.html_url,downloadUrl:M.content.download_url,createdAt:new Date().toISOString(),repoName:c,isPrivate:d,expiresAt:F}),(L=bootstrap.Modal.getInstance(document.getElementById("ghCopyModal")))==null||L.hide(),B.toast(`Archivo copiado correctamente${F?" (Con autodestrucción)":""}.`,"success"),t.loadFilesList(e.uid)}catch(x){B.toast("Error en la copia: "+x.message,"danger")}finally{n.disabled=!1,n.innerHTML="Confirmar Copia"}},async handleDelete(s,e,t){if(await B.confirm("Eliminar Archivo","¿Estás seguro de eliminar este archivo permanentemente?"))try{await $e.deleteFile(t.config,e.path,e.sha,e.repo),await qe.deleteFileRecord(e.id),t.loadFilesList(s),B.toast("Archivo eliminado.","success")}catch(i){B.toast("Error eliminando: "+i.message,"danger")}},async handleSilentDelete(s,e){try{await $e.deleteFile(e.config,s.path,s.sha,s.repoName),await qe.deleteFileRecord(s.id)}catch(t){console.error(`Error al eliminar archivo expirado: ${s.fileName}`,t)}}},sd={handleFileSelection(s){const e=s.target.files,t=document.getElementById("gh-batch-preview-container"),n=document.getElementById("gh-batch-preview-list");if(n.innerHTML="",e.length===0){t.classList.add("d-none");return}t.classList.remove("d-none"),Array.from(e).forEach((i,r)=>{const o=i.name.substring(0,i.name.lastIndexOf("."))||i.name,l=document.createElement("div");l.className="list-group-item bg-light p-2",l.innerHTML=`
        <div class="d-flex align-items-center mb-1">
          <i class="fa-regular fa-file me-2 text-secondary"></i>
          <span class="small fw-bold text-truncate" style="max-width: 70%;">${i.name}</span>
          <span class="badge bg-secondary ms-auto">${(i.size/(1024*1024)).toFixed(2)} MB</span>
        </div>
        <input type="text" class="form-control form-control-sm gh-batch-title" data-index="${r}" value="${o}" required placeholder="Título para este archivo">
      `,n.appendChild(l)})},async processSingleFileUpload(s,e,t,n,i,r,o){const l=e.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+s.name.split(".").pop(),c=await $e.uploadFile(o.config,s,t,l,n);await qe.addFileRecord({userId:r.uid,title:e,folder:t,fileName:l,originalName:s.name,path:c.content.path,sha:c.content.sha,htmlUrl:c.content.html_url,downloadUrl:c.content.download_url,createdAt:new Date().toISOString(),repoName:n,isPrivate:i})},async handleUpload(s,e,t){var C;s.preventDefault();const n=document.getElementById("gh-btn-upload"),i=document.getElementById("gh-repo"),r=i.value,o=i.options[i.selectedIndex].dataset.isPrivate==="true",l=document.getElementById("gh-folder").value.trim()||"root",c=document.getElementById("gh-file"),d=c.files;if(d.length===0||!r)return;const h=15;for(let L of d)if(L.size>h*1024*1024){B.toast(`El archivo ${L.name} supera el límite de ${h} MB.`,"warning");return}const m=document.querySelectorAll(".gh-batch-title"),g=document.getElementById("gh-upload-progress-container"),_=document.getElementById("gh-upload-progress-bar");try{n.disabled=!0,g.classList.remove("d-none"),_.style.width="0%",_.textContent="0%",_.classList.remove("bg-danger"),_.classList.add("bg-success");let L=0;const x=d.length;for(let M=0;M<x;M++){const F=d[M],H=m[M].value.trim()||F.name;n.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Subiendo (${M+1}/${x})...`,await this.processSingleFileUpload(F,H,l,r,o,e,t),L++;const te=Math.round(L/x*100);_.style.width=`${te}%`,_.textContent=`${te}%`}await qe.updateLastUsedSettings(e.uid,r,l),t.config.lastUsedRepo=r,t.config.lastUsedFolder=l,c.value="",document.getElementById("gh-batch-preview-container").classList.add("d-none"),g.classList.add("d-none"),(C=bootstrap.Modal.getInstance(document.getElementById("ghUploadModal")))==null||C.hide(),B.toast(`Se subieron ${x} archivo(s) correctamente.`,"success"),t.loadFilesList(e.uid)}catch(L){B.toast("Error en la subida por lotes: "+L.message,"danger"),_.classList.replace("bg-success","bg-danger")}finally{n.disabled=!1,n.innerHTML="Subir Todos"}}},Uw={config:null,repoPages:{},currentFiles:[],tableEngine:null,async init(s){const e=document.getElementById(s);if(!e)return;const t=Fh.getCurrentUser();if(t){if(this.config=await qe.getUserConfig(t.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=Je.getBaseHTML(),Je.injectStyles(),It.setupListeners(),this.config.lastUsedFolder&&(document.getElementById("gh-folder").value=this.config.lastUsedFolder),document.getElementById("gh-upload-form").addEventListener("submit",n=>sd.handleUpload(n,t,this)),document.getElementById("gh-copy-form").addEventListener("submit",n=>Je.handleCopy(n,t,this)),document.getElementById("gh-file").addEventListener("change",n=>sd.handleFileSelection(n)),this.initTableEngine(t),Je.setupFilterListeners(this),this.populateRepos(),this.loadFilesList(t.uid)}},initTableEngine(s){this.tableEngine=new _a({tableBody:document.getElementById("gh-files-list"),tableHeaders:document.getElementById("gh-table-head"),paginationContainer:document.getElementById("gh-pagination-controls"),dummyRowHTML:Je.getDummyRowHTML(),marginBot:40,extractSearchString:e=>`${e.title} ${e.folder} ${e.fileName} ${e.repoName}`,renderRowHTML:e=>Je.renderRowHTML(e,this),onRenderComplete:e=>Je.attachTableListeners(e,this,s.uid)}),document.getElementById("gh-search-input").addEventListener("input",e=>{this.tableEngine.setSearchTerm(e.target.value)})},async loadFilesList(s){const e=document.getElementById("gh-files-list");try{const t=await qe.listFiles(s),n=Date.now(),i=[];for(const r of t)r.expiresAt&&n>r.expiresAt?Je.handleSilentDelete(r,this):i.push(r);this.currentFiles=i,Je.buildFilters(this),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentFiles)}catch(t){e&&(e.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${t.message}</td></tr>`)}},async populateRepos(){const s=document.getElementById("gh-repo"),e=document.getElementById("gh-copy-repo");try{const t=await $e.getUserRepos(this.config.githubToken);s.innerHTML="",e.innerHTML="",this.repoPages={},t.forEach(n=>{const i=document.createElement("option");i.value=n.name,i.textContent=`${n.isPrivate?"🔒":"🌐"} ${n.name}`,i.dataset.isPrivate=n.isPrivate,n.pagesUrl&&(this.repoPages[n.name]=n.pagesUrl);const r=i.cloneNode(!0);this.config.lastUsedRepo===n.name&&(i.selected=!0),s.appendChild(i),e.appendChild(r)}),!s.value&&s.options.length>0&&(s.selectedIndex=0),!e.value&&e.options.length>0&&(e.selectedIndex=0)}catch(t){s.innerHTML=e.innerHTML="<option disabled>Error cargando repositorios</option>",console.error(t)}}};async function Bw(){const e=Object.keys(Oe).flatMap(t=>[Xs(Object.assign({"./components/boolean/setting-boolean.js":()=>O(()=>Promise.resolve().then(()=>Yw),void 0,import.meta.url),"./components/chart/setting-chart.js":()=>O(()=>Promise.resolve().then(()=>Xw),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>O(()=>Promise.resolve().then(()=>Zw),void 0,import.meta.url),"./components/date/setting-date.js":()=>O(()=>Promise.resolve().then(()=>eE),void 0,import.meta.url),"./components/email/setting-email.js":()=>O(()=>Promise.resolve().then(()=>tE),void 0,import.meta.url),"./components/number/setting-number.js":()=>O(()=>Promise.resolve().then(()=>nE),void 0,import.meta.url),"./components/password/setting-password.js":()=>O(()=>Promise.resolve().then(()=>sE),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>O(()=>Promise.resolve().then(()=>iE),void 0,import.meta.url),"./components/section/setting-section.js":()=>O(()=>Promise.resolve().then(()=>rE),void 0,import.meta.url),"./components/select/setting-select.js":()=>O(()=>Promise.resolve().then(()=>oE),void 0,import.meta.url),"./components/string/setting-string.js":()=>O(()=>Promise.resolve().then(()=>aE),void 0,import.meta.url),"./components/table/setting-table.js":()=>O(()=>Promise.resolve().then(()=>lE),void 0,import.meta.url),"./components/text/setting-text.js":()=>O(()=>Promise.resolve().then(()=>cE),void 0,import.meta.url),"./components/url/setting-url.js":()=>O(()=>Promise.resolve().then(()=>dE),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),Xs(Object.assign({"./components/boolean/editor-boolean.js":()=>O(()=>Promise.resolve().then(()=>uE),void 0,import.meta.url),"./components/chart/editor-chart.js":()=>O(()=>Promise.resolve().then(()=>hE),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>O(()=>Promise.resolve().then(()=>mE),void 0,import.meta.url),"./components/date/editor-date.js":()=>O(()=>Promise.resolve().then(()=>fE),void 0,import.meta.url),"./components/email/editor-email.js":()=>O(()=>Promise.resolve().then(()=>gE),void 0,import.meta.url),"./components/number/editor-number.js":()=>O(()=>Promise.resolve().then(()=>pE),void 0,import.meta.url),"./components/password/editor-password.js":()=>O(()=>Promise.resolve().then(()=>yE),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>O(()=>Promise.resolve().then(()=>bE),void 0,import.meta.url),"./components/section/editor-section.js":()=>O(()=>Promise.resolve().then(()=>vE),void 0,import.meta.url),"./components/select/editor-select.js":()=>O(()=>Promise.resolve().then(()=>_E),void 0,import.meta.url),"./components/string/editor-string.js":()=>O(()=>Promise.resolve().then(()=>wE),void 0,import.meta.url),"./components/table/editor-table.js":()=>O(()=>Promise.resolve().then(()=>EE),void 0,import.meta.url),"./components/text/editor-text.js":()=>O(()=>Promise.resolve().then(()=>IE),void 0,import.meta.url),"./components/url/editor-url.js":()=>O(()=>Promise.resolve().then(()=>TE),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),Xs(Object.assign({"./components/boolean/viewer-boolean.js":()=>O(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),"./components/chart/viewer-chart.js":()=>O(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>O(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),"./components/date/viewer-date.js":()=>O(()=>Promise.resolve().then(()=>xE),void 0,import.meta.url),"./components/email/viewer-email.js":()=>O(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url),"./components/number/viewer-number.js":()=>O(()=>Promise.resolve().then(()=>RE),void 0,import.meta.url),"./components/password/viewer-password.js":()=>O(()=>Promise.resolve().then(()=>LE),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>O(()=>Promise.resolve().then(()=>kE),void 0,import.meta.url),"./components/section/viewer-section.js":()=>O(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url),"./components/select/viewer-select.js":()=>O(()=>Promise.resolve().then(()=>DE),void 0,import.meta.url),"./components/string/viewer-string.js":()=>O(()=>Promise.resolve().then(()=>ME),void 0,import.meta.url),"./components/table/viewer-table.js":()=>O(()=>Promise.resolve().then(()=>OE),void 0,import.meta.url),"./components/text/viewer-text.js":()=>O(()=>Promise.resolve().then(()=>NE),void 0,import.meta.url),"./components/url/viewer-url.js":()=>O(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),Xs(Object.assign({"./components/boolean/printer-boolean.js":()=>O(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url),"./components/chart/printer-chart.js":()=>O(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>O(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url),"./components/date/printer-date.js":()=>O(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url),"./components/email/printer-email.js":()=>O(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url),"./components/number/printer-number.js":()=>O(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),"./components/password/printer-password.js":()=>O(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>O(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url),"./components/section/printer-section.js":()=>O(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/select/printer-select.js":()=>O(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),"./components/string/printer-string.js":()=>O(()=>Promise.resolve().then(()=>QE),void 0,import.meta.url),"./components/table/printer-table.js":()=>O(()=>Promise.resolve().then(()=>JE),void 0,import.meta.url),"./components/text/printer-text.js":()=>O(()=>Promise.resolve().then(()=>YE),void 0,import.meta.url),"./components/url/printer-url.js":()=>O(()=>Promise.resolve().then(()=>XE),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e)}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{const s=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),t="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";s&&(s.onerror=()=>{console.error("[THEME] ❌ Error. Revertiendo a Default."),s.href=t,localStorage.setItem("doc_engine_theme_url",t)},s.href=e&&e.includes("http")?e:t);try{await G.initDB()}catch(n){console.error("[ERROR] APP: Error de inicialización:",n);return}await Bw(),zw(),Ne.onAuthStateChanged(async n=>{n&&n.emailVerified?(n.email,await jw(n)):(document.getElementById("app-content").style.display="none",$h.renderLogin())})});async function jw(s){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${s.email}`),$h.initLogout(),qi.init(),En.init(),Uh.init(),!await G.hasSecurityConfigured()&&In&&In.renderSetupModal&&In.renderSetupModal(),await qe.getUserConfig(s.uid)&&Hw(),qw(),Tn("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",i=>{Tn("documents"),En.createFromTemplate(i.detail.tplId)}),window._eventCreateDocRegistered=!0)}function Hw(){const s=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,s.appendChild(e),document.getElementById("nav-github").addEventListener("click",t=>{t.preventDefault(),Tn("github"),Uw.init("view-github")})}function qw(){document.getElementById("nav-designer").onclick=s=>{s.preventDefault(),Tn("designer")},document.getElementById("nav-documents").onclick=s=>{s.preventDefault(),Tn("documents")},document.getElementById("nav-settings").onclick=s=>{s.preventDefault(),Tn("settings")}}function Tn(s){const e={designer:document.getElementById("view-designer"),documents:document.getElementById("view-documents"),settings:document.getElementById("view-settings"),github:document.getElementById("view-github")},t={designer:document.getElementById("nav-designer"),documents:document.getElementById("nav-documents"),settings:document.getElementById("nav-settings"),github:document.getElementById("nav-github")};Object.values(e).forEach(n=>{n&&(n.style.display="none")}),Object.values(t).forEach(n=>{n&&n.classList.remove("active"),n&&(n.style.fontWeight="normal")}),e[s]&&(e[s].style.display="block"),t[s]&&(t[s].classList.add("active"),t[s].style.fontWeight="bold"),s==="designer"&&qi.renderList(),s==="documents"&&En.renderList(),s==="settings"&&Uh.render()}function zw(){document.addEventListener("click",t=>{const n=t.target.closest(".toggle-password");if(n){t.preventDefault();const i=document.getElementById(n.dataset.target),r=n.querySelector("i");if(i&&r){const o=i.type==="password";i.type=o?"text":"password",r.classList.toggle("fa-eye",!o),r.classList.toggle("fa-eye-slash",o)}}});const s=document.querySelector(".navbar"),e=document.querySelector(".app-container");s&&e&&new ResizeObserver(n=>{for(let i of n){const r=s.offsetHeight;e.style.marginTop=`${r+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{En&&En.renderList&&En.renderList()},250)}}).observe(s)}const Ww=s=>class extends s{getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),n=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${t?"italic":"normal"};
        color: ${n};`}renderStyleControls(e=[]){const t=this.hasAttribute("bold"),n=this.hasAttribute("italic"),i=this.getAttribute("color")||"black",r=!e.includes("bold"),o=!e.includes("italic"),l=!e.includes("color");let c="";(r||o)&&(c=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${r?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${o?`<button class="btn btn-sm btn-outline-secondary ${n?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let d="";return l&&(d=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(h=>`<button class="btn btn-sm rounded-circle p-0 border ${i===h?"border-dark":"border-light"}" data-color="${h}" style="background-color: ${h}; width: 22px; height: 22px;" title="${h}"></button>`).join("")}
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
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const t=this.querySelector(`#btn-opts-${this.id}`);t&&(t.addEventListener("show.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="visible")}),t.addEventListener("hidden.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="hidden")}));const n=(r,o)=>{const l=this.querySelector(`#${r}-${this.id}`);l&&(l.onclick=c=>{c.preventDefault(),o(c)})};n("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),n("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const i=this.querySelector(`#color-grid-${this.id}`);i&&i.querySelectorAll("button").forEach(r=>{r.onclick=o=>{o.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",r.dataset.color),this._isInternalUpdate=!1,this.render()}}),n("btn-copy",()=>{const r=this.querySelector(`#btn-copy-${this.id}`),o=r.innerHTML;let l="";if(typeof this.getData=="function"){const c=this.getData();l=typeof c.value=="object"?JSON.stringify(c.value):c.value||""}else l=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",l),r.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{r.innerHTML=o},1200)}),n("btn-paste",()=>{const r=this.querySelector(`#btn-paste-${this.id}`),o=sessionStorage.getItem("doc_clipboard_value");if(o!==null){typeof this.setData=="function"?this.setData({value:o}):this.setAttribute("edit-value",o);const l=r.innerHTML;r.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{r.innerHTML=l},1200)}})}};class Gw{constructor(e,t=""){this.container=e,this.tokens=[],this.availableVars=[],this.draggedIndex=null,this._parseFormulaString(t),this._initDragEvents(),this.render()}setContextVariables(e){this.availableVars=e||[],this.render()}addToken(e,t,n){this.tokens.push({type:e,value:t,label:n||t}),this.render()}removeToken(e){this.tokens.splice(e,1),this.render()}clear(){this.tokens=[],this.render()}getFormulaString(){return this.tokens.map(e=>e.type==="var"?`@{${e.value}}`:e.value).join(" ")}validate(){if(this.tokens.some(n=>n.type==="var"&&!this.availableVars.find(i=>i.id===n.value)))return{valid:!1,msg:"Existen variables no válidas (rojas). Elimínalas para continuar."};if(this.tokens.length===0)return{valid:!1,msg:"La fórmula está vacía."};const t=this.tokens.map(n=>n.type==="var"?"1":n.value).join(" ");try{if(/[^0-9+\-*/().\s]/.test(t))throw new Error("Caracteres no permitidos");const n=new Function(`return ${t}`)();if(isNaN(n)||!isFinite(n))throw new Error("Resultado matemático inválido");return{valid:!0,msg:"Fórmula válida."}}catch(n){return{valid:!1,msg:"Error de sintaxis: "+n.message}}}_parseFormulaString(e){if(!e)return;const t=/@\{([^}]+)\}|([0-9]+(\.[0-9]+)?)|([+\-*/()])|([a-zA-Z0-9_]+)/g;let n;for(;(n=t.exec(e))!==null;)n[1]?this.tokens.push({type:"var",value:n[1],label:n[1]}):n[0].trim()&&this.tokens.push({type:"op",value:n[0],label:n[0]})}render(){if(this.container.innerHTML="",this.container.className="formula-editor-container",this.tokens.length===0){this.container.innerHTML='<span class="text-muted opacity-50 small fst-italic w-100 text-center user-select-none">Arrastra variables u operadores aquí...</span>';return}this.tokens.forEach((e,t)=>{const n=document.createElement("div");n.className=`formula-token ${e.type}`,n.draggable=!0;let i=e.label;if(e.type==="var"){const o=this.availableVars.find(l=>l.id===e.value);o?i=o.title:(n.classList.add("broken"),i=`¿${e.value}?`,n.title="Variable no encontrada"),n.innerHTML=`<i class="fa-solid fa-cube me-1 opacity-50 small"></i>${i}`}else n.innerHTML=i;const r=document.createElement("span");r.className="btn-del-token",r.innerHTML='<i class="fa-solid fa-trash"></i>',r.onclick=o=>{o.stopPropagation(),this.removeToken(t)},n.appendChild(r),this._addDragEvents(n,t),this.container.appendChild(n)})}_addDragEvents(e,t){e.addEventListener("dragstart",n=>{this.draggedIndex=t,n.dataTransfer.effectAllowed="move",setTimeout(()=>e.classList.add("dragging"),0)}),e.addEventListener("dragend",()=>{this.draggedIndex=null,e.classList.remove("dragging"),this.container.querySelectorAll(".formula-token").forEach(n=>n.classList.remove("drop-target-active"))}),e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("drop-target-active")}),e.addEventListener("dragleave",()=>e.classList.remove("drop-target-active")),e.addEventListener("drop",n=>{if(n.preventDefault(),e.classList.remove("drop-target-active"),this.draggedIndex===null||this.draggedIndex===t)return;const i=this.tokens.splice(this.draggedIndex,1)[0];let r=t;this.draggedIndex<t&&r--,this.tokens.splice(r,0,i),this.render()})}_initDragEvents(){this.container.addEventListener("dragover",e=>e.preventDefault()),this.container.addEventListener("drop",e=>{if(e.preventDefault(),e.target===this.container&&this.draggedIndex!==null){const t=this.tokens.splice(this.draggedIndex,1)[0];this.tokens.push(t),this.render()}})}}const Kw=s=>class extends s{isCalculable(){const e=this.tagName.toLowerCase().split("-")[1];return["number","currency","percentage"].includes(e)}getFormulaSettingsHTML(){if(!this.isCalculable())return"";this.hasAttribute("table");const e=this.hasAttribute("is-calculated");return`
      
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
      `}initFormulaWidget(e){if(!this.isCalculable())return;const t=e.querySelector(`#formula-widget-${this.id}`);if(!t)return;const n=this._gatherCalculationVariables(),i=this.getAttribute("formula")||"";this._tempFormulaWidget=new Gw(t,i),this._tempFormulaWidget.setContextVariables(n);const r=e.querySelector(`#formula-vars-${this.id}`);r.innerHTML="",n.length===0?r.innerHTML='<span class="text-muted small fst-italic text-center w-100">No hay variables disponibles en este contexto.</span>':n.forEach(c=>{const d=document.createElement("button");d.type="button";const h=c.type==="column";d.className=`btn btn-xs ${h?"btn-white border-primary text-primary":"btn-light border-info text-info"} border shadow-sm small`,d.style.fontSize="0.7rem",d.innerHTML=`<i class="fa-solid ${h?"fa-table-columns":"fa-cube"} me-1 opacity-50"></i>${c.title}`,d.onclick=()=>this._tempFormulaWidget.addToken("var",c.id,c.title),r.appendChild(d)}),e.querySelectorAll(".btn-op-formula").forEach(c=>{c.onclick=()=>this._tempFormulaWidget.addToken("op",c.dataset.op,c.innerText)});const o=e.querySelector(`#btn-add-manual-${this.id}`),l=e.querySelector(`#formula-manual-${this.id}`);o&&l&&(o.onclick=()=>{l.value&&(this._tempFormulaWidget.addToken("op",l.value,l.value),l.value="",l.focus())})}saveFormulaChanges(){if(!this._tempFormulaWidget)return{valid:!0};const e=this._tempFormulaWidget.validate(),t=this._tempFormulaWidget.getFormulaString();if(!e.valid&&t.trim().length>0){const n=document.getElementById(`formula-msg-${this.id}`);return n&&(n.textContent=e.msg,n.classList.remove("d-none")),{valid:!1}}return this.setAttribute("formula",t),t.trim().length>0?this.setAttribute("is-calculated","true"):this.removeAttribute("is-calculated"),this._tempFormulaWidget=null,{valid:!0}}_gatherCalculationVariables(){const e=this.hasAttribute("table");let t=[];if(e){this.closest(".designer-item-wrapper"),t=[...qi.getAvailableVariables("general")];const n=this.closest(".modal-body");n&&n.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(r=>{r.id!==this.id&&t.push({id:r.id,title:`[Col] ${r.getAttribute("title")||"Sin título"}`,type:"column"})})}else t=qi.getAvailableVariables("general");return t.filter(n=>n.id!==this.id)}},Qw=s=>class extends s{async _initApiFetch(e=!1){const t=this.getAttribute("api-url"),n=this.getAttribute("id")||this.id;if(!t)return;if(!e&&this._hasValue&&this._hasValue()){`${n}`;return}`${n}`;let i=null;const r=async o=>{if(!o.ok)throw new Error(`Status ${o.status}`);let l=await o.json();if(l.contents)try{return JSON.parse(l.contents)}catch{return l.contents}return l};try{const o=await fetch(t);i=await r(o)}catch{if(console.warn("[API] Fallo directo. Intentando Proxy..."),t.includes("corsproxy.io")){this._markError();return}else try{const l="https://corsproxy.io/?"+encodeURIComponent(t),c=await fetch(l);i=await r(c)}catch(l){console.error("[API] Error total:",l),this._markError();return}}if(i){const o=this.getAttribute("api-path");if(Array.isArray(i))this._openApiSelectionModal(i,o);else{const l=o?this._resolvePath(i,o):i;this._applyApiValue(l)}}}_resolvePath(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}_applyApiValue(e){this.setAttribute("edit-value",e),this.render&&this.render(),this.dispatchEvent(new Event("input",{bubbles:!0}))}_markError(){const e=this.querySelector("input, select, textarea");e&&(e.classList.add("is-invalid"),e.title="Error de conexión API")}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""&&e!=="---"}_openApiSelectionModal(e,t){var l;const n=`modal-api-${this.id}`;(l=document.getElementById(n))==null||l.remove();const i=`
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
      </div>`;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(n),o=new bootstrap.Modal(r);o.show(),r.querySelector(`#search-${this.id}`).oninput=c=>{const d=c.target.value.toLowerCase().split(" ").filter(m=>m),h=e.filter(m=>{const g=Object.values(m).join(" ").toLowerCase();return d.every(_=>g.includes(_))});r.querySelector(`#list-${this.id}`).innerHTML=this._renderApiListItems(h,t),this._bindApiListClicks(r,o)},this._bindApiListClicks(r,o),r.addEventListener("hidden.bs.modal",()=>r.remove())}_renderApiListItems(e,t){return e.map(n=>{const i=t?this._resolvePath(n,t):"Seleccionar",r=Object.entries(n).slice(0,3).map(([o,l])=>`<span class="badge bg-white text-dark border me-1 fw-normal">${o}: <b>${l}</b></span>`).join("");return`
        <button class="list-group-item list-group-item-action border-light" data-value="${i}">
          <div class="d-flex justify-content-between align-items-center">
            <div class="small text-truncate me-2">${r}</div>
            <i class="fa-solid fa-chevron-right text-muted small"></i>
          </div>
        </button>`}).join("")}_bindApiListClicks(e,t){e.querySelectorAll(".list-group-item").forEach(n=>{n.onclick=()=>{this._applyApiValue(n.dataset.value),t.hide()}})}renderApiRefreshButton(){return this.getAttribute("api-url")?`
        <button class="btn btn-sm btn-outline-info ms-2 p-0" 
                id="refresh-api-${this.id}"
                title="Actualizar desde API"
                style="width: 24px; height: 24px; font-size: 0.8rem;">
          <i class="fa-solid fa-cloud-arrow-down"></i>
        </button>
      `:""}},Jw=s=>class extends s{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${Oe[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=t=>{t.preventDefault(),t.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var o;const e=this.tagName.toLowerCase().split("-")[1],t=this.hasAttribute("table"),n=((o=Oe[e])==null?void 0:o.settings)||{width:!0,visibility:!0},i={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let r="";if(n.visibility&&(r+=this._buildAccordionItem("vis","Visibilidad",!0,`
            <div class="row g-3">
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-print" ${i.hidePrint?"checked":""}>
                        <label class="form-check-label small">Ocultar al Imprimir</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-whatsapp" ${i.hideWhatsapp?"checked":""}>
                        <label class="form-check-label small">Ocultar en WhatsApp</label>
                    </div>
                </div>
            </div>
        `)),n.width||n.style){const l=n.width?`
            <div class="row g-2 mb-2">
                <div class="col-6">
                    <label class="small text-muted">Ancho Pantalla</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-ev" value="${i.spanEV}" min="1" max="12">
                </div>
                <div class="col-6">
                    <label class="small text-muted">Ancho Impresión</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-p" value="${i.spanP}" min="1" max="12">
                </div>
            </div>`:"",c=t?`
            <div class="mb-0">
                 <label class="small text-muted">Alineación</label>
                 <select class="form-select form-select-sm" id="modal-align">
                    <option value="left" ${i.align==="left"?"selected":""}>Izquierda</option>
                    <option value="center" ${i.align==="center"?"selected":""}>Centro</option>
                    <option value="right" ${i.align==="right"?"selected":""}>Derecha</option>
                 </select>
            </div>`:"";r+=this._buildAccordionItem("design","Diseño y Ancho",!1,l+c)}if(n.api&&(r+=this._buildAccordionItem("api","Auto-Completar (API)",!1,`
            <div class="mb-2">
                <label class="small text-muted">URL Endpoint</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" id="modal-api-url" value="${i.apiUrl}">
            </div>
            <div>
                <label class="small text-muted">Ruta JSON (ej: data.precio)</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm font-monospace" id="modal-api-path" value="${i.apiPath}">
            </div>
        `)),n.calculation){const l=this.getFormulaSettingsHTML?this.getFormulaSettingsHTML():"",c=t?`<div class="form-check form-switch mb-3 border-bottom pb-2">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-total" ${i.total?"checked":""}>
                <label class="form-check-label small fw-bold">Sumar en Totales</label>
        </div>`:"";r+=this._buildAccordionItem("calc","Cálculos y Fórmulas",!1,c+l)}this._renderAndShowModal(r)}_buildAccordionItem(e,t,n,i){return`
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${e}">
            <button class="accordion-button ${n?"":"collapsed"} py-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${e}">
                <span class="fw-bold small text-info">${t}</span>
            </button>
            </h2>
            <div id="collapse-${e}" class="accordion-collapse collapse ${n?"show":""}" data-bs-parent="#settingsAccordion">
            <div class="accordion-body bg-light p-3">
                ${i}
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
        </div>`;document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById("advanced-settings-modal"),r=new bootstrap.Modal(i);r.show(),i.addEventListener("shown.bs.modal",()=>{this.initFormulaWidget&&this.initFormulaWidget(i)}),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&r.hide()}}_saveSettingsFromModal(){const e=i=>{var r;return(r=document.getElementById(i))==null?void 0:r.value},t=i=>{var r;return(r=document.getElementById(i))==null?void 0:r.checked};if(this.saveFormulaChanges&&!this.saveFormulaChanges().valid)return!1;this.setInternalUpdate(!0),t("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),t("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align"))),document.getElementById("modal-api-url")&&(this.setAttribute("api-url",e("modal-api-url")),this.setAttribute("api-path",e("modal-api-path")));const n=document.getElementById("modal-total");return n&&(n.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}};class $ extends Qw(Jw(Kw(Ww(HTMLElement)))){constructor(){super(),this._isInternalUpdate=!1}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this._initApiFetch&&setTimeout(()=>this._initApiFetch(),100),this._attachApiRefreshEvents(),this.addEventListener("dblclick",e=>{this.tagName.startsWith("EDITOR-")||(e.preventDefault(),e.stopPropagation(),this._handleDoubleClickCopy(e))})}static get observedAttributes(){return["title","options","currency","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","formula","is-calculated","hide-print","hide-whatsapp","api-url","api-path"]}attributeChangedCallback(e,t,n){this._isInternalUpdate||t!==n&&this.render()}getData(){const e=this.tagName.toLowerCase();return e.startsWith("setting-")?{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),formula:this.getAttribute("formula"),isCalculated:this.hasAttribute("is-calculated"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",options:this.getAttribute("options")||"",currency:this.getAttribute("currency")||"$"}:{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id),e.fieldId&&this.setAttribute("field-id",e.fieldId),["title","options","currency","alignment","api-url","api-path","formula","color"].forEach(i=>{const r=e[i]||e[this._toCamel(i)];r&&this.setAttribute(i,r)}),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.value!==void 0&&this.setAttribute("edit-value",e.value);const n={total:e.total,bold:e.bold,italic:e.italic,"hide-print":e.hidePrint,"hide-whatsapp":e.hideWhatsapp,"is-calculated":e.isCalculated};Object.entries(n).forEach(([i,r])=>{r?this.setAttribute(i,r===!0?"":r):this.removeAttribute(i)}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",n=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${n} mb-3`,`
      <div class="viewer-container">
        <label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">
            ${t}
        </label>
        ${e}
      </div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const n=this.getAttribute("title")||"",i=this.tagName.toLowerCase()==="printer-table",r={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",titleSize:"0.65rem",contentSize:"0.75rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",titleSize:"0.75rem",contentSize:"0.95rem"},"Facil Lectura":{m:"4px",p:"4px",b:"1px solid #000",titleSize:"1.1rem",contentSize:"1.3rem"}},o=r[t]||r.Visual;let l=o.titleSize;return i&&(t==="Compacto"?l="0.85rem":t==="Facil Lectura"?l="1.3rem":l="0.95rem"),`
      <div style="margin-bottom: ${o.m}; border-bottom: ${o.b}; padding-bottom: ${o.p}; page-break-inside: avoid; font-size: ${o.contentSize};">
          <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${l}; line-height: 1.1; margin-bottom: 4px;">${n}</div>
          ${e}
      </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];Oe[e]&&(this.icon=Oe[e].icon,this.shortLabel=Oe[e].shortLabel,this.longLabel=Oe[e].longLabel,this.spanEV=Oe[e].spanEV,this.spanP=Oe[e].spanP,this.uiColor=Oe[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,t=>t[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async t=>{t.preventDefault(),t.stopPropagation();const n=e.querySelector("i");if(n){const i=n.className;n.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{n.className=i,e.disabled=!1}}})}render(){this.innerHTML=""}async _handleDoubleClickCopy(e){try{let n=this.getData().value;if(typeof n=="object"&&n!==null&&(n=JSON.stringify(n)),!n&&n!==0&&n!=="0")return;sessionStorage.setItem("doc_clipboard_value",n);try{await navigator.clipboard.writeText(n)}catch{console.warn("No se pudo copiar al portapapeles del sistema, pero sí al interno.")}this._showFloatingFeedback(e.pageX,e.pageY)}catch(t){console.error("Error al copiar:",t)}}_showFloatingFeedback(e,t){const n=document.createElement("div");n.textContent="¡Copiado!",n.style.position="absolute",n.style.left=`${e}px`,n.style.top=`${t-20}px`,n.style.background="#198754",n.style.color="white",n.style.padding="2px 8px",n.style.borderRadius="4px",n.style.fontSize="0.75rem",n.style.pointerEvents="none",n.style.zIndex="9999",n.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",n.style.opacity="1",n.style.transition="all 0.8s ease-out",n.style.transform="translate(-50%, 0)",document.body.appendChild(n),requestAnimationFrame(()=>{n.style.top=`${t-40}px`,n.style.opacity="0"}),setTimeout(()=>{document.body.contains(n)&&document.body.removeChild(n)},800)}}class Bh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-boolean",Bh);const Yw=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:Bh},Symbol.toStringTag,{value:"Module"}));class jh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-chart",jh);const Xw=Object.freeze(Object.defineProperty({__proto__:null,SettingChart:jh},Symbol.toStringTag,{value:"Module"}));class Hh extends ${render(){const e=this.getAttribute("title")||"",t=this.getAttribute("currency")||"$",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0;const r=i.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",r.trim()==="")},this.querySelector('input[data-prop="currency"]').oninput=i=>{this._isInternalUpdate=!0;const r=i.target.value;this.setAttribute("currency",r),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-currency",Hh);const Zw=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:Hh},Symbol.toStringTag,{value:"Module"}));class qh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-date",qh);const eE=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:qh},Symbol.toStringTag,{value:"Module"}));class zh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-email",zh);const tE=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:zh},Symbol.toStringTag,{value:"Module"}));class Wh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-number",Wh);const nE=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:Wh},Symbol.toStringTag,{value:"Module"}));class Gh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-password",Gh);const sE=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:Gh},Symbol.toStringTag,{value:"Module"}));class Kh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-percentage",Kh);const iE=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:Kh},Symbol.toStringTag,{value:"Module"}));class Qh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-section",Qh);const rE=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:Qh},Symbol.toStringTag,{value:"Module"}));class Jh extends ${render(){const e=this.getAttribute("title")||"",t=this.getAttribute("options")||"",n=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelectorAll("input, textarea").forEach(i=>{i.oninput=r=>{this._isInternalUpdate=!0;const o=r.target.dataset.prop;this.setAttribute(o,r.target.value),this._isInternalUpdate=!1,o==="title"&&r.target.classList.toggle("is-invalid",r.target.value.trim()==="")}})}}customElements.define("setting-select",Jh);const oE=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:Jh},Symbol.toStringTag,{value:"Module"}));class Yh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-string",Yh);const aE=Object.freeze(Object.defineProperty({__proto__:null,SettingString:Yh},Symbol.toStringTag,{value:"Module"}));class Xh extends ${constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",n=this._tempColumnsData?this._tempColumnsData.length:0,i=this.hasAttribute("prepend-rows");this.innerHTML=`
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
                    <input class="form-check-input cursor-pointer" type="checkbox" id="check-prepend-${this.id}" data-prop="prepend-rows" ${i?"checked":""}>
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=o=>{this._isInternalUpdate=!0;const l=o.target.value;this.setAttribute("title",l),this._isInternalUpdate=!1,o.target.classList.toggle("is-invalid",l.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal();const r=this.querySelector('input[data-prop="prepend-rows"]');r&&(r.onchange=o=>{o.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",n=this.hasAttribute("prepend-rows");return`
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
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const n=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",n),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",n.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const i=`
      
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
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`toolbox-${this.id}`);Object.entries(Oe).forEach(([d,h])=>{if(d==="table")return;const m=document.createElement("button");m.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",m.style.minWidth="60px",m.title=h.longLabel,m.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${h.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${h.shortLabel}</span>
        `,m.onclick=()=>this._addChildComponent(d),r.appendChild(m)});const o=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(d=>{const h=this._createWrapper(d.tag.replace("setting-","")),m=h.querySelector(d.tag);m&&m.setData&&(m.setAttribute("table",""),m.setData(d)),o.appendChild(h)}):o.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const l=document.getElementById(e),c=new bootstrap.Modal(l);c.show(),l.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(o),this._updateCounter(),c.dispose(),l.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),n=t.querySelector("#empty-msg");n&&n.remove();const i=this._createWrapper(e);t.appendChild(i),i.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const n=document.createElement(`setting-${e}`);return n.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(n),t.querySelector(".btn-del-col").onclick=()=>t.remove(),wa.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(i=>{i.tagName.toLowerCase().startsWith("setting-")&&typeof i.getData=="function"&&t.push(i.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",Xh);const lE=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:Xh},Symbol.toStringTag,{value:"Module"}));class Zh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-text",Zh);const cE=Object.freeze(Object.defineProperty({__proto__:null,SettingText:Zh},Symbol.toStringTag,{value:"Module"}));class ep extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=n=>{this._isInternalUpdate=!0;const i=n.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-url",ep);const dE=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:ep},Symbol.toStringTag,{value:"Module"}));class tp extends ${render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const n=`
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
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",tp);const uE=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:tp},Symbol.toStringTag,{value:"Module"}));class np extends ${constructor(){super(),this._tempConfig={},this.chartInstance=null}render(){const e=this.getAttribute("title")||"Gráfico",t=this.getAttribute("edit-value");let n={type:"column",source:"manual",series:[]};try{t&&(n=JSON.parse(t))}catch{}const r={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",pie:"fa-chart-pie"}[n.type]||"fa-chart-simple",o=`chart-editor-${this.id}`,l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid ${r} me-1 text-${this.uiColor}"></i> ${e}
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
    `;this.innerHTML=this.renderViewerStructure(l);const c={addEventListener:()=>{},value:""};if(this._attachStyleEventListeners(c),this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(n),t&&n.series&&n.series.length>0)setTimeout(()=>{this._renderChart(o,n)},200);else{const d=this.querySelector(`#${o}`);if(d){const h=d.getContext("2d");h.fillStyle="#f8f9fa",h.fillRect(0,0,d.width,d.height),h.fillStyle="#6c757d",h.font="14px Arial",h.textAlign="center",h.fillText('Haga clic en "Configurar Gráfico" para añadir datos',d.width/2,d.height/2)}}}_renderChart(e,t){const n=document.getElementById(e);if(!n)return;this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null);const{labels:i,datasets:r}=this._processData(t);if(!r.length||!window.Chart)return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const o=t.type==="pie"?"pie":t.type==="line"?"line":"bar",l=t.type==="bar"?"y":"x",c=n.parentElement;let d=350;if(t.type==="bar"){const h=100+i.length*45;d=Math.max(350,h)}else t.type==="pie"&&(d=400);c.style.height=`${d}px`;try{this.chartInstance=new Chart(n,{type:o,data:{labels:i,datasets:r},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:t.type!=="pie",color:"#000",font:{weight:"bold",size:9},formatter:h=>Math.round(h*100)/100,anchor:"end",align:l==="y"?"end":"top"}}}})}catch(h){console.error("Error al renderizar gráfico en editor:",h)}}_processData(e){let t=[],n=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"}];if(e.source==="manual")t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r),Array.isArray(e.series)&&(n=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"&&c.length>0?i.slice(0,Math.min(c.length,i.length)).map(d=>d.bg):l.bg,borderColor:e.type==="pie"&&c.length>0?i.slice(0,Math.min(c.length,i.length)).map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0));else if(e.source==="table"&&e.tableId){const r=document.querySelector(`editor-table[field-id="${e.tableId}"]`);r&&r.rows&&r.rows.length>0?(e.labelColumnId?t=r.rows.map(o=>{const l=o.find(c=>c.fieldId===e.labelColumnId);return l?String(l.value):""}):t=r.rows.map((o,l)=>`${l+1}`),Array.isArray(e.series)&&(n=e.series.map((o,l)=>{const c=i[l%i.length],d=r.rows.map(h=>{const m=h.find(_=>_.fieldId===o.columnId),g=String(m?m.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(g)||0});return{label:o.name||`Serie ${l+1}`,data:d,backgroundColor:e.type==="pie"?i.map(h=>h.bg):c.bg,borderColor:e.type==="pie"?i.map(h=>h.border):c.border,borderWidth:1}}))):(t=["Sin Datos"],n=[{label:"Esperando datos...",data:[0],backgroundColor:"#e9ecef",borderColor:"#ced4da",borderWidth:1}])}return{labels:t,datasets:n}}_openConfigModal(e){var c;this._tempConfig=JSON.parse(JSON.stringify(e)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const t=`modal-chart-${this.id}`;(c=document.getElementById(t))==null||c.remove();const n=`
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
    `;document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById(t),r=new bootstrap.Modal(i),o=document.getElementById(`cfg-type-${this.id}`);o.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),o.onchange=d=>{this._tempConfig.type=d.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(d=>d.onchange=h=>{this._tempConfig.source=h.target.value,this._tempConfig.series=[],this._renderDynamicArea(h.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),r.hide()},i.addEventListener("hidden.bs.modal",()=>i.remove()),r.show()}_renderDynamicArea(e){const t=document.getElementById(`cfg-area-${this.id}`);t.innerHTML="",e==="manual"?this._renderManualConfig(t):this._renderTableConfig(t)}_renderManualConfig(e){const t=this._tempConfig.type==="pie";e.innerHTML+=`
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
            `;const d=c.querySelectorAll("input");d[0].oninput=h=>this._tempConfig.series[l].name=h.target.value,d[1].oninput=h=>this._tempConfig.series[l].data=h.target.value,c.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(l,1),this._renderDynamicArea("manual")},n.appendChild(c)})})();const r=e.querySelector(`#btn-add-serie-${this.id}`);r&&(r.onclick=()=>{this._tempConfig.series.push({name:t?"Datos":"",data:""}),this._renderDynamicArea("manual")}),e.querySelector(`#input-labels-${this.id}`).oninput=o=>{this._tempConfig.manualLabels=o.target.value}}_renderTableConfig(e){const t=document.getElementById("document-canvas"),n=Array.from(t.querySelectorAll("editor-table"));if(n.length===0){e.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let i='<option value="">-- Seleccionar Tabla --</option>';n.forEach(l=>{let c=l.getAttribute("title")||`Tabla ${l.getAttribute("field-id")}`;if(l.getData){const h=l.getData();h.title&&(c=h.title)}const d=this._tempConfig.tableId===l.getAttribute("field-id")?"selected":"";i+=`<option value="${l.getAttribute("field-id")}" ${d}>${c}</option>`}),e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">
                ${i}
            </select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const r=e.querySelector(`#select-table-${this.id}`),o=()=>{const l=this._tempConfig.tableId,c=e.querySelector(`#table-cols-area-${this.id}`);if(c.innerHTML="",!l)return;const d=n.find(x=>x.getAttribute("field-id")===l);if(!d||!d.columns)return;const h=d.columns,m=h.filter(x=>["setting-number","setting-currency","setting-percentage"].includes(x.tag));let g='<option value="">-- (Fila #) --</option>';h.forEach(x=>{const M=this._tempConfig.labelColumnId===x.id?"selected":"";g+=`<option value="${x.id}" ${M}>${x.title}</option>`}),c.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">
                    ${g}
                </select>
            </div>
        `;const _=this._tempConfig.type==="pie";c.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!_||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const C=c.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((x,M)=>{let F='<option value="">-- Seleccionar Columna --</option>';m.forEach(pe=>{const ie=x.columnId===pe.id?"selected":"";F+=`<option value="${pe.id}" ${ie}>${pe.title}</option>`});const H=document.createElement("div");H.className="input-group input-group-sm",H.innerHTML=`
                <span class="input-group-text bg-white"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select">${F}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `;const te=H.querySelector("select");te.onchange=pe=>{const ie=pe.target.value,E=m.find(y=>y.id===ie);this._tempConfig.series[M].columnId=ie,this._tempConfig.series[M].name=E?E.title:"Serie "+(M+1)},H.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(M,1),o()},C.appendChild(H)});const L=c.querySelector(`#btn-add-tbl-serie-${this.id}`);L&&(L.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),o()}),c.querySelector(`#select-label-col-${this.id}`).onchange=x=>{this._tempConfig.labelColumnId=x.target.value}};this._tempConfig.tableId&&o(),r.onchange=l=>{this._tempConfig.tableId=l.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",o()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const e=document.getElementById(`input-labels-${this.id}`);e&&(this._tempConfig.manualLabels=e.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const e=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(e&&e.rows){if(this._tempConfig.labelColumnId){const t=e.rows.map(n=>{const i=n.find(r=>r.fieldId===this._tempConfig.labelColumnId);return i?String(i.value).replace(/,/g," "):""});this._tempConfig.manualLabels=t.join(", ")}else this._tempConfig.manualLabels=e.rows.map((t,n)=>n+1).join(", ");this._tempConfig.series.forEach(t=>{const n=e.rows.map(i=>{const r=i.find(l=>l.fieldId===t.columnId),o=String(r?r.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(o)||0});t.data=n.join(", ")})}}}}customElements.define("editor-chart",np);const hE=Object.freeze(Object.defineProperty({__proto__:null,EditorChart:np},Symbol.toStringTag,{value:"Module"}));class fr extends ${_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`form-control form-control-sm shadow-none ${i?"bg-light text-muted":""}`,l=i?"readonly":"",c=i?"Calculado...":"0.00",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${r}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                 id="input-${this.id}" value="${t}" style="${n}" 
                 placeholder="${c}"
                 ${l}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let n=e.value.trim();if(n!=="")try{const i=n.replace(/,/g,"."),r=new Function(`"use strict"; return (${i})`)();!isNaN(r)&&isFinite(r)&&(e.value=r,this.setAttribute("edit-value",r),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=n=>{n.key==="Enter"&&(n.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",fr);const pE=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:fr},Symbol.toStringTag,{value:"Module"}));class sp extends fr{render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",n=this.getAttribute("currency")||"$",i=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),o=`form-control shadow-none border-1 ${r?"bg-light text-muted":""}`,l=r?"readonly":"",c=this.getAttribute("api-url")?this.renderApiRefreshButton():"",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${this.uiColor}"></i> ${e}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${c}
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${n}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                   id="input-${this.id}" value="${t}" style="${i}" 
                   placeholder="0.00"
                   ${l}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e))}}customElements.define("editor-currency",sp);const mE=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:sp},Symbol.toStringTag,{value:"Module"})),Wi=class Wi extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||Wi.getToday(),n=this.getCommonStyles(),i=`
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
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};Il(Wi,"getToday",()=>new Date().toISOString().split("T")[0]);let zi=Wi;customElements.define("editor-date",zi);const fE=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:zi},Symbol.toStringTag,{value:"Module"}));class ip extends ${render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),i=`
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
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",ip);const gE=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:ip},Symbol.toStringTag,{value:"Module"}));class rp extends ${render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",n=`
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
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",rp);const yE=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:rp},Symbol.toStringTag,{value:"Module"}));class op extends fr{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${r}
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${i?"bg-light text-muted":""}" 
                   id="input-${this.id}" value="${t}" style="${n}" 
                   placeholder="0.00"
                   ${i?"readonly":""}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",op);const bE=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:op},Symbol.toStringTag,{value:"Module"}));class ap extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",ap);const vE=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:ap},Symbol.toStringTag,{value:"Module"}));class lp extends ${render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",i=(this.getAttribute("options")||"").split(",").map(c=>c.trim()).filter(c=>c!==""),r=this.getCommonStyles(),o=this.getAttribute("api-url")?this.renderApiRefreshButton():"",l=`
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
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${r}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${i.map(c=>`<option value="${c}" ${t===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",lp);const _E=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:lp},Symbol.toStringTag,{value:"Module"}));class cp extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-font text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${n}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",cp);const wE=Object.freeze(Object.defineProperty({__proto__:null,EditorString:cp},Symbol.toStringTag,{value:"Module"}));class dp extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_applyApiValue(e){let t=[];if(Array.isArray(e))t=e;else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=[]}else typeof e=="object"&&e!==null&&(t=[e]);if(t.length===0)return;Array.isArray(t[0])?this.rows=t:this.rows=this._mapExternalDataToRows(t),this.setAttribute("edit-value",JSON.stringify(this.rows)),this._renderRows(),this._dispatchChange()}_mapExternalDataToRows(e){return e.map(t=>this.columns.map(n=>{let i=t[n.title];if(i===void 0){const r=Object.keys(t).find(o=>o.toLowerCase()===n.title.toLowerCase());r&&(i=t[r])}return i===void 0&&(i=t[n.id]),i==null&&(i=""),typeof i=="object"&&(i=JSON.stringify(i)),{fieldId:n.id,value:i}}))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=`
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
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>this._exportCSV();const t=this.querySelector(`#file-import-${this.id}`);this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>t.click(),t.onchange=n=>this._importCSV(n)}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this.columns.forEach(n=>{const i=n.alignment||"left",r=this._sortFieldId===n.id;let o='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';r&&(o=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),t+=`
      <th class="fw-bold px-3 py-2 border-bottom col-sortable" 
          data-col-id="${n.id}" 
          style="text-align: ${i}; cursor: pointer; user-select: none;">
          ${n.title} ${o}
      </th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t,e.querySelectorAll(".col-sortable").forEach(n=>{n.onclick=()=>{const i=n.dataset.colId;this._sortFieldId===i?this._sortAsc=!this._sortAsc:(this._sortFieldId=i,this._sortAsc=!0),this._renderHeader(),this._renderRows()}})}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;if(e.innerHTML="",this._sortFieldId){const n=this.columns.find(r=>r.id===this._sortFieldId),i=n?["setting-number","setting-currency","setting-percentage"].includes(n.tag):!1;this.rows.sort((r,o)=>{const l=r.find(g=>g.fieldId===this._sortFieldId),c=o.find(g=>g.fieldId===this._sortFieldId);let d=l?l.value:"",h=c?c.value:"",m=0;return i?m=(parseFloat(d)||0)-(parseFloat(h)||0):m=String(d).localeCompare(String(h)),this._sortAsc?m:m*-1}),this._dispatchChange()}let t=this.rows.map((n,i)=>({data:n,originalIndex:i}));if(this._searchTerm.trim()){const n=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);t=t.filter(i=>{const r=i.data.map(o=>String(o.value).toLowerCase()).join(" ");return n.every(o=>r.includes(o))})}t.forEach(n=>{const{data:i,originalIndex:r}=n,o=document.createElement("tr");o.setAttribute("data-original-index",r);const l=document.createElement("td"),c=!this._searchTerm&&!this._sortFieldId;c?(l.className="drag-handle text-center text-muted align-middle cursor-grab py-2",l.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(l.className="text-center text-muted align-middle py-2 small opacity-50",l.innerHTML=this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',l.title="Orden automático activo"),o.appendChild(l),this.columns.forEach(h=>{const m=document.createElement("td"),g=h.alignment||"left";m.className="px-3 py-2",m.style.textAlign=g;const _=i.find(M=>M.fieldId===h.id),C=h.tag.replace("setting-","viewer-"),L=document.createElement(C);L.setAttribute("table","");const x={..._,title:"",spanEV:12};L.setData&&L.setData(x),m.appendChild(L),o.appendChild(m)});const d=document.createElement("td");d.className="text-end px-3 py-2",d.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,d.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(r),d.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(r,1),this._renderRows(),this._dispatchChange())},o.appendChild(d),e.appendChild(o),c&&wa.init(o,".drag-handle",()=>this._handleReorder())}),this._renderFooter(t.map(n=>n.data))}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(i=>{const r=parseInt(i.getAttribute("data-original-index"));!isNaN(r)&&this.rows[r]&&t.push(this.rows[r])}),t.length===this.rows.length&&(this.rows=t)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(r=>r.total)||!e||e.length===0))return;let i="<tr><td></td>";this.columns.forEach(r=>{const o=r.alignment||"left";let l="";if(r.total){const c=e.reduce((m,g)=>{const _=g.find(L=>L.fieldId===r.id),C=parseFloat(_?_.value:0);return m+(isNaN(C)?0:C)},0),h=`id="${`TOTAL_${this.id}_${r.id}`}" data-raw-value="${c}"`;if(r.tag==="setting-currency"){const m=r.currency||"$";l=`<span ${h}>${m} ${c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`}else r.tag==="setting-percentage"?l=`<span ${h}>${c}%</span>`:l=`<span ${h}>${c}</span>`}i+=`<td class="px-3 py-2" style="text-align: ${o};">${l}</td>`}),i+="<td></td></tr>",t.innerHTML=i}_dispatchChange(){setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_exportCSV(){if(this.rows.length===0)return alert("No hay datos para exportar.");let e=[];this.columns.forEach(c=>{c.tag==="setting-url"?(e.push(`"${c.title} (Texto)"`),e.push(`"${c.title} (URL)"`)):e.push(`"${c.title}"`)});const n=this.rows.map(c=>this.columns.map(d=>{const h=c.find(g=>g.fieldId===d.id);let m=h?h.value:"";if(d.tag==="setting-url"){let g="",_="";try{const C=JSON.parse(m);g=C.text||"",_=C.url||""}catch{}return{isUrl:!0,text:g,url:_}}return m=String(m).replace(/"/g,'""'),{isUrl:!1,val:m}})).map(c=>c.map(d=>d.isUrl?`"${d.text.replace(/"/g,'""')}","${d.url.replace(/"/g,'""')}"`:`"${d.val}"`).join(",")).join(`
`),i=e.join(",")+`
`+n,r=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(r),l=document.createElement("a");l.setAttribute("href",o),l.setAttribute("download",`tabla_export_${Date.now()}.csv`),document.body.appendChild(l),l.click(),document.body.removeChild(l)}_importCSV(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=i=>{this._parseAndLoadCSV(i.target.result),e.target.value=""},n.readAsText(t)}_parseAndLoadCSV(e){const t=e.split(/\r?\n/).filter(o=>o.trim()!=="");if(t.length<2)return alert("El archivo CSV no tiene datos válidos.");const n=o=>{const l=[];let c=0,d=!1;for(let m=0;m<o.length;m++)if(o[m]==='"')d=!d;else if(o[m]===","&&!d){let g=o.substring(c,m);g.startsWith('"')&&g.endsWith('"')&&(g=g.slice(1,-1)),l.push(g.replace(/""/g,'"')),c=m+1}let h=o.substring(c);return h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),l.push(h.replace(/""/g,'"')),l},i=[];this.columns.forEach(o=>{o.tag==="setting-url"?(i.push({colDef:o,type:"url-text"}),i.push({colDef:o,type:"url-url"})):i.push({colDef:o,type:"normal"})});const r=[];for(let o=1;o<t.length;o++){const l=n(t[o]);if(l.length!==i.length)continue;const c={};l.forEach((h,m)=>{const g=i[m];if(!g)return;const _=g.colDef.id;c[_]||(c[_]={fieldId:_,tag:g.colDef.tag}),g.type==="normal"?c[_].value=h:g.type==="url-text"?c[_].tempText=h:g.type==="url-url"&&(c[_].tempUrl=h)});const d=Object.values(c).map(h=>h.tag==="setting-url"?{fieldId:h.fieldId,value:JSON.stringify({text:h.tempText||"",url:h.tempUrl||""})}:{fieldId:h.fieldId,value:h.value});r.push(d)}r.length>0?(this.hasAttribute("prepend-rows")?this.rows=[...r.reverse(),...this.rows]:this.rows=[...this.rows,...r],this._renderRows(),this._dispatchChange(),alert(`Se importaron ${r.length} registros correctamente.`)):alert("No se pudieron importar registros. Verifique formato.")}_openFormModal(e=null){var d;const t=e!==null,n=`modal-form-${this.id}`;(d=document.getElementById(n))==null||d.remove();const i=`
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
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`form-container-${this.id}`);this.columns.forEach(h=>{const m=h.tag.replace("setting-","editor-"),g=document.createElement(m);g.setAttribute("table",""),g.setAttribute("field-id",h.id);let _={title:h.title,spanEV:12,options:h.options,currency:h.currency,formula:h.formula,isCalculated:h.isCalculated};if(t){const C=this.rows[e].find(L=>L.fieldId===h.id);C&&(_={..._,...C})}g.setData&&g.setData(_),r.appendChild(g)});const o=()=>{const h=Array.from(r.children);h.forEach(m=>{if(!m.hasAttribute("is-calculated"))return;const g=m.getAttribute("formula");if(g)try{const _=g.replace(/@\{([^}]+)\}/g,(L,x)=>{const M=h.find(H=>H.getAttribute("field-id")===x);if(M){const H=M.querySelector("input");if(H){const te=H.value.replace(/,/g,".");return parseFloat(te)||0}}const F=document.getElementById(`input-${x}`);if(F){const H=F.value.replace(/,/g,".");return parseFloat(H)||0}if(x.startsWith("TOTAL_")){const H=document.getElementById(x);return H&&parseFloat(H.dataset.rawValue)||0}return 0}),C=new Function(`"use strict"; return (${_})`)();if(isFinite(C)&&!isNaN(C)){const L=m.querySelector("input");if(L){const x=Math.round(C*100)/100;L.value=x,m.setAttribute("edit-value",x)}}}catch(_){console.warn("[Table Calculation Error]",_)}})};r.addEventListener("input",o),setTimeout(o,100);const l=document.getElementById(n),c=new bootstrap.Modal(l);c.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const m=Array.from(r.children).map(g=>{const _=g.getData();return _.fieldId=g.getAttribute("field-id"),_});t?this.rows[e]=m:this.hasAttribute("prepend-rows")?this.rows.unshift(m):this.rows.push(m),this._renderRows(),this._dispatchChange(),c.hide(),l.addEventListener("hidden.bs.modal",()=>l.remove())}}}customElements.define("editor-table",dp);const EE=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:dp},Symbol.toStringTag,{value:"Module"}));class up extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",n=this.getCommonStyles(),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <textarea class="form-control form-control-sm shadow-none border-1" 
                    id="input-${this.id}" rows="4" style="${n}" 
                    placeholder="Escriba el contenido de ${e}...">${t}</textarea>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-text",up);const IE=Object.freeze(Object.defineProperty({__proto__:null,EditorText:up},Symbol.toStringTag,{value:"Module"}));class hp extends ${connectedCallback(){super.connectedCallback(),this._initApiFetch()}_applyApiValue(e){const t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}n.url=e,this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(n)),this._isInternalUpdate=!1,this.render()}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let n={url:"",text:""};try{t&&(n=JSON.parse(t))}catch{}const i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
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
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#text-${this.id}`),t=this.querySelector(`#url-${this.id}`);this._attachStyleEventListeners(e);const n=()=>{this._isInternalUpdate=!0;const i=JSON.stringify({text:e.value,url:t.value});this.setAttribute("edit-value",i),this._isInternalUpdate=!1};e.oninput=n,t.oninput=n}}customElements.define("editor-url",hp);const TE=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:hp},Symbol.toStringTag,{value:"Module"}));class pp extends ${render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",pp);const AE=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:pp},Symbol.toStringTag,{value:"Module"}));class mp extends ${constructor(){super(),this.chartInstance=null}render(){const e=this.getAttribute("edit-value");if(!e){this.innerHTML="";return}let t={};try{t=JSON.parse(e)}catch{return}const n=`chart-canvas-${this.id}`,i=`
      <div style="position: relative; height: 350px; width: 100%;">
        <canvas id="${n}"></canvas>
      </div>`;this.innerHTML=this.renderViewerStructure(i),setTimeout(()=>{this._buildChart(n,t)},100)}async _buildChart(e,t){const n=document.getElementById(e);if(!n)return;window.Chart||await O(()=>import("https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"),[],import.meta.url),window.ChartDataLabels||await O(()=>import("https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"),[],import.meta.url),this.chartInstance&&this.chartInstance.destroy();const{labels:i,datasets:r}=this._processData(t);if(!r.length){console.warn("[ViewerChart] No hay datos para renderizar");return}let o="bar",l="x";t.type==="bar"?(o="bar",l="y"):t.type==="column"?(o="bar",l="x"):t.type==="line"?o="line":t.type==="pie"&&(o="pie");const c=n.parentElement;let d=350;if(o==="bar"&&l==="y"){const h=80+i.length*40;d=Math.max(350,h)}else o==="pie"&&(d=400);c&&(c.style.height=`${d}px`),Chart.register(ChartDataLabels),this.chartInstance=new Chart(n,{type:o,data:{labels:i,datasets:r},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom"},datalabels:{color:h=>t.type==="pie"?"#fff":"#000",font:{weight:"bold",size:10},formatter:h=>Math.round(h*100)/100,display:h=>h.dataset.data[h.dataIndex]!==0,anchor:"end",align:l==="y"?"end":"top",offset:4}},scales:o==="pie"?{}:{y:{beginAtZero:!0},x:{beginAtZero:!0}}}})}_processData(e){let t=[],n=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"},{bg:"rgba(255, 159, 64, 0.7)",border:"rgba(255, 159, 64, 1)"}];return t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r!==""),Array.isArray(e.series)&&(n=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?i.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?i.map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0)),{labels:t,datasets:n}}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value");if(!t)return"";let n=JSON.parse(t);const{labels:i,datasets:r}=this._processData(n);let o=`*📊 ${e}*
`;return r.length?(r.forEach(l=>{o+=`
*${l.label}*:
`,l.data.forEach((c,d)=>{o+=`- ${i[d]||"Item"}: ${c}
`})}),o):o+"_(Sin datos)_"}}customElements.define("viewer-chart",mp);const SE=Object.freeze(Object.defineProperty({__proto__:null,ViewerChart:mp},Symbol.toStringTag,{value:"Module"}));class fp extends ${render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),r=`<div class="py-1" style="${n}"> 
          <span class="opacity-75 me-1">${t}</span>${i}
        </div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),n=this.getAttribute("currency")||"$",i=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${n} ${i}`}}customElements.define("viewer-currency",fp);const CE=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:fp},Symbol.toStringTag,{value:"Module"}));class gp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let n="---";e&&(n=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`<div class="py-1" style="${t}">${n}</div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),n=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${n}`}}customElements.define("viewer-date",gp);const xE=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:gp},Symbol.toStringTag,{value:"Module"}));class yp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),n=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-email",yp);const PE=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:yp},Symbol.toStringTag,{value:"Module"}));class bp extends ${render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-number",bp);const RE=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:bp},Symbol.toStringTag,{value:"Module"}));class vp extends ${render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
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
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",vp);const LE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:vp},Symbol.toStringTag,{value:"Module"}));class _p extends ${render(){const e=this.getAttribute("edit-value")||"0",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",_p);const kE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:_p},Symbol.toStringTag,{value:"Module"}));class wp extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong class="mt-3">${e}</strong><hr>`}}customElements.define("viewer-section",wp);const VE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:wp},Symbol.toStringTag,{value:"Module"}));class Ep extends ${render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}}customElements.define("viewer-select",Ep);const DE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:Ep},Symbol.toStringTag,{value:"Module"}));class Ip extends ${render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}customElements.define("viewer-string",Ip);const ME=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:Ip},Symbol.toStringTag,{value:"Module"}));class Tp extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
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
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],n=(this.columns||[]).filter(d=>!d.hideWhatsapp);if(n.length===0)return`*${e}:* (Sin columnas visibles)`;if(t.length===0)return`*${e}:* (Sin datos)`;const i=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),r=(d,h)=>{const m=d.find(_=>_.fieldId===h.id);let g=m?String(m.value):"";if((g==="null"||g==="undefined")&&(g=""),h.tag==="setting-currency")g=`$ ${parseFloat(g||0).toFixed(2)}`;else if(h.tag==="setting-percentage")g=`${g}%`;else if(h.tag==="setting-boolean")g=g==="true"?"SI":"NO";else if(h.tag==="setting-url")try{const _=JSON.parse(g);let C=_.url||"";if(C){C.startsWith("http")||(C="https://"+C);try{C=encodeURI(decodeURI(C))}catch{C=encodeURI(C)}}g=_.text?`${_.text} (${C})`:C}catch{}return g},o=n.map(d=>{let h=d.title.length;return t.forEach(m=>{const g=r(m,d);g.length>h&&(h=g.length)}),h}),l=o.reduce((d,h)=>d+h,0)+n.length*3;let c=`
*${e}*:
`;return l>i?t.forEach((d,h)=>{c+=`_Item ${h+1}_
`,n.forEach(m=>{const g=r(d,m);c+=`${m.title}: ${g}
`}),c+=`
`}):(c+="```\n",c+=n.map((d,h)=>d.title.padEnd(o[h])).join(" | ")+`
`,c+=n.map((d,h)=>"-".repeat(o[h])).join("-|-")+`
`,t.forEach(d=>{c+=n.map((h,m)=>r(d,h).padEnd(o[m])).join(" | ")+`
`}),c+="```\n"),c}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=n=>{this._searchTerm=n.target.value,this._renderRows();const i=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!i){this.render();const r=this.querySelector(`#search-${this.id}`);r.focus(),r.setSelectionRange(r.value.length,r.value.length)}else!this._searchTerm&&i&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(e){if(this.columns.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",this.columns.forEach(t=>{const n=document.createElement("th"),i=t.alignment||(this._isNumeric(t.tag)?"right":"left");n.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",n.style.textAlign=i==="right"?"right":i==="center"?"center":"left",n.style.cursor="pointer",n.title="Click para ordenar";let r='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===t.id&&(this._sortAsc?r='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':r='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),n.innerHTML=`<span>${t.title}</span>${r}`,n.onclick=()=>{this._sortFieldId===t.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=t.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(n)})}}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let n=[...this.rows];if(this._searchTerm.trim()){const i=this._searchTerm.toLowerCase().split(/\s+/).filter(r=>r);n=n.filter(r=>{const o=r.map(l=>{let c=l.value;if(typeof c=="string"&&c.startsWith("{")&&c.includes('"url"'))try{c=JSON.parse(c).text}catch{}return String(c||"").toLowerCase()}).join(" ");return i.every(l=>o.includes(l))})}if(this._sortFieldId){const i=this.columns.find(o=>o.id===this._sortFieldId),r=i?this._isNumeric(i.tag):!1;n.sort((o,l)=>{const c=o.find(_=>_.fieldId===this._sortFieldId),d=l.find(_=>_.fieldId===this._sortFieldId);let h=c?c.value:"",m=d?d.value:"",g=0;if(r){const _=parseFloat(h)||0,C=parseFloat(m)||0;g=_-C}else{if(i&&i.tag==="setting-url"){try{h=JSON.parse(h).text||""}catch{}try{m=JSON.parse(m).text||""}catch{}}g=String(h).localeCompare(String(m))}return this._sortAsc?g:g*-1})}if(n.length===0){t&&(t.style.display="block"),this._renderFooter(n);return}t&&(t.style.display="none"),n.forEach(i=>{const r=document.createElement("tr");this.columns.forEach(o=>{const l=document.createElement("td"),c=o.alignment||(this._isNumeric(o.tag)?"right":"left");l.style.textAlign=c==="right"?"right":c==="center"?"center":"left",l.className="px-3 py-2";const d=i.find(_=>_.fieldId===o.id),h=o.tag.replace("setting-","viewer-"),m=document.createElement(h);m.setAttribute("table","");const g={...d,title:"",spanEV:12,options:o.options,currency:o.currency};m.setData&&m.setData(g),l.appendChild(m),r.appendChild(l)}),e.appendChild(r)}),this._renderFooter(n)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(r=>r.total)||!e||e.length===0))return;let i="<tr>";this.columns.forEach(r=>{const o=r.alignment||(this._isNumeric(r.tag)?"right":"left"),l=o==="right"?"right":o==="center"?"center":"left";let c="";if(r.total){const d=e.reduce((h,m)=>{const g=m.find(C=>C.fieldId===r.id),_=parseFloat(g?g.value:0);return h+(isNaN(_)?0:_)},0);r.tag==="setting-currency"?c=`${r.currency||"$"} ${d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:r.tag==="setting-percentage"?c=`${d}%`:c=d}i+=`<td class="px-3 py-2" style="text-align: ${l};">${c}</td>`}),i+="</tr>",t.innerHTML=i}}customElements.define("viewer-table",Tp);const OE=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:Tp},Symbol.toStringTag,{value:"Module"}));class Ap extends ${render(){const e=this.getAttribute("edit-value")||"---",n=`<div class="py-1" style="${this.getCommonStyles()} white-space: pre-wrap;">${e}</div>`;this.innerHTML=this.renderViewerStructure(n)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`
*${e}*
> ${t.replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",Ap);const NE=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:Ap},Symbol.toStringTag,{value:"Module"}));class Sp extends ${render(){const e=this.getAttribute("edit-value");let t={url:"#",text:"---"};try{e&&(t=JSON.parse(e))}catch{}let n=t.url||"#";n&&n!=="#"&&(n=n.trim(),n.startsWith("http")||(n="https://"+n));const i=this._checkExtension(n,["mp3","wav","ogg","m4a"]),r=this._checkExtension(n,["jpg","jpeg","png","gif","webp","svg"]),o=this._checkVideo(n),l=this._checkInternalDoc(n),c=`<div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(i,r,o,l)}
          <a href="${n}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
            <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${t.text||t.url||"---"}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(c),this._attachEvents(n,t.text,i,r,o,l)}_checkExtension(e,t){if(!e||e==="#")return!1;const n=e.split("?")[0].toLowerCase();return t.some(i=>n.endsWith("."+i))}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],n=e.split("?")[0].toLowerCase();if(t.some(l=>n.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}_checkInternalDoc(e){if(!e||e==="#")return null;const t=/\/document\/(doc_\d+)/,n=e.match(t);return n&&n[1]?{isInternal:!0,docId:n[1]}:null}_renderActionButton(e,t,n,i){if(i&&i.isInternal)return`<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento">
                <i class="fa-solid fa-file-contract"></i>
              </button>`;if(e)return`<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
              </button>`;if(t)return`<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen">
                <i class="fa-regular fa-image"></i>
              </button>`;if(n&&n.isVideo){const r=n.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${n.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video">
                <i class="${r}"></i>
              </button>`}return""}_attachEvents(e,t,n,i,r,o){if(o&&o.isInternal){const l=this.querySelector(".btn-view-doc");l&&(l.onclick=()=>this._showDocModal(o.docId,t))}if(n){const l=this.querySelector(".btn-play-audio");l&&(l.onclick=()=>this._playAudio(e,t))}if(i){const l=this.querySelector(".btn-view-image");l&&(l.onclick=()=>this._showImageModal(e,t))}if(r&&r.isVideo){const l=this.querySelector(".btn-view-video");l&&(l.onclick=()=>this._showVideoModal(e,t,r))}}async _showDocModal(e,t){const n=document.getElementById("internal-doc-modal");n&&n.remove();const i="internal-doc-title-lbl",r=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${i}" style="max-width: 90%;">
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
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById("internal-doc-modal"),l=document.getElementById("internal-doc-body");new bootstrap.Modal(o).show();const d=_i.renderReadOnly(e,l);try{const h=await G.getOne("doc",e);if(h&&h.title){const m=document.getElementById(i);m&&(m.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${h.title}`)}}catch(h){console.error("Error recuperando título:",h)}await d,o.addEventListener("hidden.bs.modal",()=>o.remove())}_showVideoModal(e,t,n){const i=document.getElementById("media-preview-modal");i&&i.remove();let r="";n.type==="youtube"?r=`
        <div class="ratio ratio-16x9 shadow rounded overflow-hidden">
            <iframe src="${`https://www.youtube.com/embed/${n.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>`:r=`
        <video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;">
            <source src="${e}">
            Tu navegador no soporta video.
        </video>`;const o=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" aria-label="Close" style="filter: invert(1);"></button>
              ${r}
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
    `;const i=n.querySelector("audio"),r=n.querySelector("#audio-loading");i.onloadstart=()=>{r.style.display="block"},i.oncanplay=()=>{r.style.display="none"},i.load(),i.play().catch(o=>console.log("Autoplay bloqueado:",o)),n.querySelector("#close-audio").onclick=()=>n.remove()}_showImageModal(e,t){const n=document.getElementById("media-preview-modal");n&&n.remove();const i=`
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
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById("media-preview-modal");new bootstrap.Modal(r).show(),r.addEventListener("hidden.bs.modal",()=>r.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const n=JSON.parse(t);let i=n.url||"";if(i){i.startsWith("http")||(i="https://"+i);try{i=encodeURI(decodeURI(i))}catch{i=encodeURI(i)}}t=n.text?`${n.text} (${i})`:i}catch{}return`*${e}:* ${t}`}}customElements.define("viewer-url",Sp);const $E=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:Sp},Symbol.toStringTag,{value:"Module"}));class Cp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=e==="true",o=`
        <div style="color: ${n?"#198754":"#dc3545"}; font-size: inherit; padding: 2px 0; font-weight: bold;">
            ${n?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(o,t)}}customElements.define("printer-boolean",Cp);const FE=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:Cp},Symbol.toStringTag,{value:"Module"}));class xp extends ${constructor(){super(),this.chartInstance=null}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._renderChart(),100)}render(){this.getAttribute("edit-value");const e=this.getAttribute("type")||"Visual",n=`
      <div style="width: 100%; height: 300px; page-break-inside: avoid;">
        <canvas id="${`print-chart-${this.id}`}"></canvas>
      </div>`;this.innerHTML=this.renderPrinterStructure(n,e)}async _renderChart(){const e=this.getAttribute("edit-value");if(!e)return;const t=`print-chart-${this.id}`,n=this.querySelector(`#${t}`);if(!n)return;let i;try{i=JSON.parse(e)}catch(l){console.error("Error parsing chart config:",l);return}window.Chart||await this._loadChartJS(),this.chartInstance&&this.chartInstance.destroy();const{labels:r,datasets:o}=this._processData(i);if(!o.length){this._drawPlaceholder(n,"Sin datos para mostrar");return}try{const l=i.type==="pie"?"pie":i.type==="line"?"line":"bar",c=i.type==="bar"?"y":"x",d=n.parentElement;let h=300;if(i.type==="bar"){const m=80+r.length*35;h=Math.max(300,m)}else i.type==="pie"&&(h=350);d&&(d.style.height=`${h}px`),this.chartInstance=new Chart(n,{type:l,data:{labels:r,datasets:o},options:{indexAxis:c,animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:!0,color:"#000",font:{weight:"bold",size:9},formatter:m=>Math.round(m*100)/100,anchor:"end",align:c==="y"?"end":"top",offset:2}},scales:l==="pie"?{}:{y:{beginAtZero:!0,ticks:{font:{size:9}}},x:{beginAtZero:!0,ticks:{font:{size:9}}}}}})}catch(l){console.error("Error al renderizar gráfico para impresión:",l),this._drawPlaceholder(n,"Error al renderizar gráfico")}}_processData(e){let t=[],n=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"}];return t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r!==""),Array.isArray(e.series)&&(n=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?i.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?i.map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0)),{labels:t,datasets:n}}_drawPlaceholder(e,t){const n=e.getContext("2d");n.fillStyle="#f8f9fa",n.fillRect(0,0,e.width,e.height),n.fillStyle="#6c757d",n.font="14px Arial",n.textAlign="center",n.fillText(t,e.width/2,e.height/2)}async _loadChartJS(){return new Promise(e=>{if(window.Chart){e();return}const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",t.onload=e,document.head.appendChild(t)})}}customElements.define("printer-chart",xp);const UE=Object.freeze(Object.defineProperty({__proto__:null,PrinterChart:xp},Symbol.toStringTag,{value:"Module"}));class Pp extends ${render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",n=this.getAttribute("type")||"Visual",i=this.getCommonStyles(),r=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),o=`
        <div style="${i} font-size: inherit; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${r}
        </div>`;this.innerHTML=this.renderPrinterStructure(o,n)}}customElements.define("printer-currency",Pp);const BE=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:Pp},Symbol.toStringTag,{value:"Module"}));class Rp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let i="---";e&&(i=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`
        <div style="${n} font-size: inherit; padding: 2px 0;">
            ${i}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-date",Rp);const jE=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:Rp},Symbol.toStringTag,{value:"Module"}));class Lp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-email",Lp);const HE=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:Lp},Symbol.toStringTag,{value:"Module"}));class kp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-number",kp);const qE=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:kp},Symbol.toStringTag,{value:"Module"}));class Vp extends ${render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",Vp);const zE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:Vp},Symbol.toStringTag,{value:"Module"}));class Dp extends ${render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",i=`
      <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-percentage",Dp);const WE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:Dp},Symbol.toStringTag,{value:"Module"}));class Mp extends ${render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",Mp);const GE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:Mp},Symbol.toStringTag,{value:"Module"}));class Op extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-select",Op);const KE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:Op},Symbol.toStringTag,{value:"Module"}));class Np extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-string",Np);const QE=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:Np},Symbol.toStringTag,{value:"Module"}));class $p extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns");this.getAttribute("title");const n=this.getAttribute("type")||"Visual";let i=[],r=[];try{e&&(i=JSON.parse(e)),t&&(r=JSON.parse(t))}catch(C){console.warn("Error parseando tabla",C)}const o=r.filter(C=>!C.hidePrint),l=n==="Compacto",c=n==="Facil Lectura",d=l?"0.75rem":c?"1.2rem":"0.95rem",h=l?"0.65rem":c?"1rem":"0.75rem",m=`width: 100%; border-collapse: collapse; font-size: ${d};`,g=l?"2px 4px":c?"8px":"6px 8px",_=`
      <table style="${m}">
        <thead>
          <tr style="background-color: #f8f9fa;">
            ${o.map(C=>`
              <th style="padding: ${g}; border: 1px solid #dee2e6; text-align: ${C.alignment||"left"}; text-transform: uppercase; font-size: ${h};">
                ${C.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${i.length>0?i.map((C,L)=>`
            <tr style="background-color: ${L%2===0?"#fff":"#fcfcfc"};">
               ${o.map(x=>{const M=C.find(F=>F.fieldId===x.id)||{};return`
                  <td style="padding: ${g}; border: 1px solid #dee2e6; text-align: ${x.alignment||"left"};">
                    ${this._generateCellHTML(x,M,n)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${r.length}" style="text-align:center; padding: ${g};">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(i,r,g)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(_,n)}_renderTotalRow(e,t,n){return t.some(r=>r.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(r=>{let o="";if(r.total){const l=e.reduce((c,d)=>{const h=d.find(m=>m.fieldId===r.id);return c+(parseFloat(h==null?void 0:h.value)||0)},0);r.tag==="setting-currency"?o=`${r.currency||"$"} ${l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:o=l}return`<td style="padding: ${n}; border: 1px solid #dee2e6; text-align: ${r.alignment||"left"};">${o}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,n){const i=e.tag.replace("setting-","printer-"),r=document.createElement(i);return r.setAttribute("table",""),r.setAttribute("type",n),r.setAttribute("edit-value",t.value||""),t.bold&&r.setAttribute("bold",""),t.italic&&r.setAttribute("italic",""),t.color&&r.setAttribute("color",t.color),e.currency&&r.setAttribute("currency",e.currency),r.outerHTML}}customElements.define("printer-table",$p);const JE=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:$p},Symbol.toStringTag,{value:"Module"}));class Fp extends ${render(){const e=this.getAttribute("edit-value")||"",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} line-height: 1.2; white-space: pre-wrap; text-align: left; font-size: inherit;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-text",Fp);const YE=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:Fp},Symbol.toStringTag,{value:"Module"}));class Up extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let n={url:"",text:"---"};try{e&&(n=JSON.parse(e))}catch{}let i=n.url||"";try{i&&(i=decodeURI(i))}catch{}const r=`
      <div style="font-size: inherit; color: #000;">
          ${n.text||"---"}
      </div>
      <div style="font-size: 0.85em; color: #888; font-family: monospace; margin-top: 2px; word-break: break-all;">
          ${i}
      </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-url",Up);const XE=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:Up},Symbol.toStringTag,{value:"Module"}));
