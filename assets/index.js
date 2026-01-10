var Nf=Object.defineProperty;var Mf=(n,e,t)=>e in n?Nf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ya=(n,e,t)=>Mf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const $f="modulepreload",Uf=function(n,e){return new URL(n,e).href},Xa={},N=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),d=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));s=a(t.map(f=>{if(f=Uf(f,r),f in Xa)return;Xa[f]=!0;const m=f.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(!!r)for(let D=l.length-1;D>=0;D--){const x=l[D];if(x.href===f&&(!m||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${_}`))return;const C=document.createElement("link");if(C.rel=m?"stylesheet":$f,m||(C.as="script"),C.crossOrigin="",C.href=f,d&&C.setAttribute("nonce",d),document.head.appendChild(C),m)return new Promise((D,x)=>{C.addEventListener("load",D),C.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Fr=(n,e,t)=>{const r=n[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Ve={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12},select:{icon:"📋",shortLabel:"Opciones",longLabel:"Lista de Opciones",spanEV:6,spanP:6},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4},percentage:{icon:"	%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12}},Ff=()=>{};var Za={};/**
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
 */const kc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(_=64)),r.push(t[f],t[m],t[_],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new Bf;const _=i<<2|l>>4;if(r.push(_),d!==64){const A=l<<4&240|d>>2;if(r.push(A),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qf=function(n){const e=kc(n);return Dc.encodeByteArray(e,!0)},rs=function(n){return qf(n).replace(/\./g,"")},Vc=function(n){try{return Dc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hf=()=>zf().__FIREBASE_DEFAULTS__,Gf=()=>{if(typeof process>"u"||typeof Za>"u")return;const n=Za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vc(n[1]);return e&&JSON.parse(e)},Ss=()=>{try{return Ff()||Hf()||Gf()||Wf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lc=n=>{var e,t;return(t=(e=Ss())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Kf=n=>{const e=Lc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Oc=()=>{var n;return(n=Ss())==null?void 0:n.config},Nc=n=>{var e;return(e=Ss())==null?void 0:e[`_${n}`]};/**
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
 */class Qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[rs(JSON.stringify(t)),rs(JSON.stringify(a)),""].join(".")}const Yn={};function Yf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Yn))Yn[e]?n.emulator.push(e):n.prod.push(e);return n}function Xf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let el=!1;function $c(n,e){if(typeof window>"u"||typeof document>"u"||!vn(window.location.host)||Yn[n]===e||Yn[n]||el)return;Yn[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=Yf().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,A){_.setAttribute("width","24"),_.setAttribute("id",A),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{el=!0,a()},_}function f(_,A){_.setAttribute("id",A),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=Xf(r),A=t("text"),C=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),x=document.getElementById(D)||document.createElement("a"),W=t("preprendIcon"),q=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Y=_.element;l(Y),f(x,D);const de=d();u(q,W),Y.append(q,C,x,de),document.body.appendChild(Y)}i?(C.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function ep(){var e;const n=(e=Ss())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function np(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ip(){return!ep()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function op(){try{return typeof indexedDB=="object"}catch{return!1}}function ap(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const lp="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lp,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?cp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new rt(s,l,r)}}function cp(n,e){return n.replace(up,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const up=/\{\$([^}]+)}/g;function hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(tl(i)&&tl(a)){if(!Ft(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function tl(n){return n!==null&&typeof n=="object"}/**
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
 */function fr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dp(n,e){const t=new fp(n,e);return t.subscribe.bind(t)}class fp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");pp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=mi),s.error===void 0&&(s.error=mi),s.complete===void 0&&(s.complete=mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mi(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class mp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yp(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gp(n){return n===Mt?void 0:n}function yp(n){return n.instantiationMode==="EAGER"}/**
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
 */class _p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const vp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},bp=z.INFO,Ep={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},wp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ep[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class so{constructor(e){this.name=e,this._logLevel=bp,this._logHandler=wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Ip=(n,e)=>e.some(t=>n instanceof t);let nl,rl;function Tp(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ap(){return rl||(rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uc=new WeakMap,xi=new WeakMap,Fc=new WeakMap,gi=new WeakMap,io=new WeakMap;function Sp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Uc.set(t,n)}).catch(()=>{}),io.set(e,n),e}function Pp(n){if(xi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});xi.set(n,e)}let ki={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rp(n){ki=n(ki)}function Cp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yi(this),e,...t);return Fc.set(r,e.sort?e.sort():[e]),gt(r)}:Ap().includes(n)?function(...e){return n.apply(yi(this),e),gt(Uc.get(this))}:function(...e){return gt(n.apply(yi(this),e))}}function xp(n){return typeof n=="function"?Cp(n):(n instanceof IDBTransaction&&Pp(n),Ip(n,Tp())?new Proxy(n,ki):n)}function gt(n){if(n instanceof IDBRequest)return Sp(n);if(gi.has(n))return gi.get(n);const e=xp(n);return e!==n&&(gi.set(n,e),io.set(e,n)),e}const yi=n=>io.get(n);function kp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=gt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(gt(a.result),u.oldVersion,u.newVersion,gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Dp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],_i=new Map;function sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_i.get(e))return _i.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dp.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return _i.set(e,i),i}Rp(n=>({...n,get:(e,t,r)=>sl(e,t)||n.get(e,t,r),has:(e,t)=>!!sl(e,t)||n.has(e,t)}));/**
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
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Op(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Op(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Di="@firebase/app",il="0.14.6";/**
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
 */const Ze=new so("@firebase/app"),Np="@firebase/app-compat",Mp="@firebase/analytics-compat",$p="@firebase/analytics",Up="@firebase/app-check-compat",Fp="@firebase/app-check",jp="@firebase/auth",Bp="@firebase/auth-compat",qp="@firebase/database",zp="@firebase/data-connect",Hp="@firebase/database-compat",Gp="@firebase/functions",Wp="@firebase/functions-compat",Kp="@firebase/installations",Qp="@firebase/installations-compat",Jp="@firebase/messaging",Yp="@firebase/messaging-compat",Xp="@firebase/performance",Zp="@firebase/performance-compat",em="@firebase/remote-config",tm="@firebase/remote-config-compat",nm="@firebase/storage",rm="@firebase/storage-compat",sm="@firebase/firestore",im="@firebase/ai",om="@firebase/firestore-compat",am="firebase",lm="12.6.0";/**
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
 */const Vi="[DEFAULT]",cm={[Di]:"fire-core",[Np]:"fire-core-compat",[$p]:"fire-analytics",[Mp]:"fire-analytics-compat",[Fp]:"fire-app-check",[Up]:"fire-app-check-compat",[jp]:"fire-auth",[Bp]:"fire-auth-compat",[qp]:"fire-rtdb",[zp]:"fire-data-connect",[Hp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Wp]:"fire-fn-compat",[Kp]:"fire-iid",[Qp]:"fire-iid-compat",[Jp]:"fire-fcm",[Yp]:"fire-fcm-compat",[Xp]:"fire-perf",[Zp]:"fire-perf-compat",[em]:"fire-rc",[tm]:"fire-rc-compat",[nm]:"fire-gcs",[rm]:"fire-gcs-compat",[sm]:"fire-fst",[om]:"fire-fst-compat",[im]:"fire-vertex","fire-js":"fire-js",[am]:"fire-js-all"};/**
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
 */const ss=new Map,um=new Map,Li=new Map;function ol(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(Li.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of ss.values())ol(t,n);for(const t of um.values())ol(t,n);return!0}function oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new dr("app","Firebase",hm);/**
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
 */class dm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const bn=lm;function jc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Vi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(t||(t=Oc()),!t)throw yt.create("no-options");const i=ss.get(s);if(i){if(Ft(t,i.options)&&Ft(r,i.config))return i;throw yt.create("duplicate-app",{appName:s})}const a=new _p(s);for(const u of Li.values())a.addComponent(u);const l=new dm(t,r,a);return ss.set(s,l),l}function Bc(n=Vi){const e=ss.get(n);if(!e&&n===Vi&&Oc())return jc();if(!e)throw yt.create("no-app",{appName:n});return e}function _t(n,e,t){let r=cm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}dn(new jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fm="firebase-heartbeat-database",pm=1,rr="firebase-heartbeat-store";let vi=null;function qc(){return vi||(vi=kp(fm,pm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),vi}async function mm(n){try{const t=(await qc()).transaction(rr),r=await t.objectStore(rr).get(zc(n));return await t.done,r}catch(e){if(e instanceof rt)Ze.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function al(n,e){try{const r=(await qc()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,zc(n)),await r.done}catch(t){if(t instanceof rt)Ze.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(r.message)}}}function zc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gm=1024,ym=30;class _m{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ll();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ym){const a=Em(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ll(),{heartbeatsToSend:r,unsentEntries:s}=vm(this._heartbeatsCache.heartbeats),i=rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ze.warn(t),""}}}function ll(){return new Date().toISOString().substring(0,10)}function vm(n,e=gm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),cl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),cl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return op()?ap().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return al(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return al(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cl(n){return rs(JSON.stringify({version:2,heartbeats:n})).length}function Em(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function wm(n){dn(new jt("platform-logger",e=>new Lp(e),"PRIVATE")),dn(new jt("heartbeat",e=>new _m(e),"PRIVATE")),_t(Di,il,n),_t(Di,il,"esm2020"),_t("fire-js","")}wm("");var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,Hc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.F=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(w,b,T){for(var y=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)y[Se-2]=arguments[Se];return g.prototype[b].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,v){v||(v=0);const w=Array(16);if(typeof g=="string")for(var b=0;b<16;++b)w[b]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(b=0;b<16;++b)w[b]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],b=E.g[2];let T=E.g[3],y;y=g+(T^v&(b^T))+w[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(b^g&(v^b))+w[1]+3905402710&4294967295,T=g+(y<<12&4294967295|y>>>20),y=b+(v^T&(g^v))+w[2]+606105819&4294967295,b=T+(y<<17&4294967295|y>>>15),y=v+(g^b&(T^g))+w[3]+3250441966&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(T^v&(b^T))+w[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(b^g&(v^b))+w[5]+1200080426&4294967295,T=g+(y<<12&4294967295|y>>>20),y=b+(v^T&(g^v))+w[6]+2821735955&4294967295,b=T+(y<<17&4294967295|y>>>15),y=v+(g^b&(T^g))+w[7]+4249261313&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(T^v&(b^T))+w[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(b^g&(v^b))+w[9]+2336552879&4294967295,T=g+(y<<12&4294967295|y>>>20),y=b+(v^T&(g^v))+w[10]+4294925233&4294967295,b=T+(y<<17&4294967295|y>>>15),y=v+(g^b&(T^g))+w[11]+2304563134&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(T^v&(b^T))+w[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(b^g&(v^b))+w[13]+4254626195&4294967295,T=g+(y<<12&4294967295|y>>>20),y=b+(v^T&(g^v))+w[14]+2792965006&4294967295,b=T+(y<<17&4294967295|y>>>15),y=v+(g^b&(T^g))+w[15]+1236535329&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(b^T&(v^b))+w[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^b&(g^v))+w[6]+3225465664&4294967295,T=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(T^g))+w[11]+643717713&4294967295,b=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(b^T))+w[0]+3921069994&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^T&(v^b))+w[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^b&(g^v))+w[10]+38016083&4294967295,T=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(T^g))+w[15]+3634488961&4294967295,b=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(b^T))+w[4]+3889429448&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^T&(v^b))+w[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^b&(g^v))+w[14]+3275163606&4294967295,T=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(T^g))+w[3]+4107603335&4294967295,b=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(b^T))+w[8]+1163531501&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^T&(v^b))+w[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^b&(g^v))+w[2]+4243563512&4294967295,T=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(T^g))+w[7]+1735328473&4294967295,b=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(b^T))+w[12]+2368359562&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(v^b^T)+w[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^b)+w[8]+2272392833&4294967295,T=g+(y<<11&4294967295|y>>>21),y=b+(T^g^v)+w[11]+1839030562&4294967295,b=T+(y<<16&4294967295|y>>>16),y=v+(b^T^g)+w[14]+4259657740&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^T)+w[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^b)+w[4]+1272893353&4294967295,T=g+(y<<11&4294967295|y>>>21),y=b+(T^g^v)+w[7]+4139469664&4294967295,b=T+(y<<16&4294967295|y>>>16),y=v+(b^T^g)+w[10]+3200236656&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^T)+w[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^b)+w[0]+3936430074&4294967295,T=g+(y<<11&4294967295|y>>>21),y=b+(T^g^v)+w[3]+3572445317&4294967295,b=T+(y<<16&4294967295|y>>>16),y=v+(b^T^g)+w[6]+76029189&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^T)+w[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^b)+w[12]+3873151461&4294967295,T=g+(y<<11&4294967295|y>>>21),y=b+(T^g^v)+w[15]+530742520&4294967295,b=T+(y<<16&4294967295|y>>>16),y=v+(b^T^g)+w[2]+3299628645&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(b^(v|~T))+w[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~b))+w[7]+1126891415&4294967295,T=g+(y<<10&4294967295|y>>>22),y=b+(g^(T|~v))+w[14]+2878612391&4294967295,b=T+(y<<15&4294967295|y>>>17),y=v+(T^(b|~g))+w[5]+4237533241&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~T))+w[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~b))+w[3]+2399980690&4294967295,T=g+(y<<10&4294967295|y>>>22),y=b+(g^(T|~v))+w[10]+4293915773&4294967295,b=T+(y<<15&4294967295|y>>>17),y=v+(T^(b|~g))+w[1]+2240044497&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~T))+w[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~b))+w[15]+4264355552&4294967295,T=g+(y<<10&4294967295|y>>>22),y=b+(g^(T|~v))+w[6]+2734768916&4294967295,b=T+(y<<15&4294967295|y>>>17),y=v+(T^(b|~g))+w[13]+1309151649&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~T))+w[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~b))+w[11]+3174756917&4294967295,T=g+(y<<10&4294967295|y>>>22),y=b+(g^(T|~v))+w[2]+718787259&4294967295,b=T+(y<<15&4294967295|y>>>17),y=v+(T^(b|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(b+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const v=g-this.blockSize,w=this.C;let b=this.h,T=0;for(;T<g;){if(b==0)for(;T<=v;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<g;)if(w[b++]=E.charCodeAt(T++),b==this.blockSize){s(this,w),b=0;break}}else for(;T<g;)if(w[b++]=E[T++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)E[g++]=this.g[v]>>>w&255;return E};function i(E,g){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function a(E,g){this.h=g;const v=[];let w=!0;for(let b=E.length-1;b>=0;b--){const T=E[b]|0;w&&T==g||(v[b]=T,w=!1)}this.g=v}var l={};function u(E){return-128<=E&&E<128?i(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(d(-E));const g=[];let v=1;for(let w=0;E>=v;w++)g[w]=E/v|0,v*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return x(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let w=m;for(let T=0;T<E.length;T+=8){var b=Math.min(8,E.length-T);const y=parseInt(E.substring(T,T+b),g);b<8?(b=d(Math.pow(g,b)),w=w.j(b).add(d(y))):(w=w.j(v),w=w.add(d(y)))}return w}var m=u(0),_=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-x(this).m();let E=0,g=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);E+=(w>=0?w:4294967296+w)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+x(this).toString(E);const g=d(Math.pow(E,6));var v=this;let w="";for(;;){const b=de(v,g).g;v=W(v,b.j(g));let T=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=b,C(v))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=W(this,E),D(E)?-1:C(E)?0:1};function x(E){const g=E.g.length,v=[];for(let w=0;w<g;w++)v[w]=~E.g[w];return new a(v,~E.h).add(_)}n.abs=function(){return D(this)?x(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),v=[];let w=0;for(let b=0;b<=g;b++){let T=w+(this.i(b)&65535)+(E.i(b)&65535),y=(T>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);w=y>>>16,T&=65535,y&=65535,v[b]=y<<16|T}return new a(v,v[v.length-1]&-2147483648?-1:0)};function W(E,g){return E.add(x(g))}n.j=function(E){if(C(this)||C(E))return m;if(D(this))return D(E)?x(this).j(x(E)):x(x(this).j(E));if(D(E))return x(this.j(x(E)));if(this.l(A)<0&&E.l(A)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,v=[];for(var w=0;w<2*g;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let b=0;b<E.g.length;b++){const T=this.i(w)>>>16,y=this.i(w)&65535,Se=E.i(b)>>>16,xt=E.i(b)&65535;v[2*w+2*b]+=y*xt,q(v,2*w+2*b),v[2*w+2*b+1]+=T*xt,q(v,2*w+2*b+1),v[2*w+2*b+1]+=y*Se,q(v,2*w+2*b+1),v[2*w+2*b+2]+=T*Se,q(v,2*w+2*b+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function q(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function Y(E,g){this.g=E,this.h=g}function de(E,g){if(C(g))throw Error("division by zero");if(C(E))return new Y(m,m);if(D(E))return g=de(x(E),g),new Y(x(g.g),x(g.h));if(D(g))return g=de(E,x(g)),new Y(x(g.g),g.h);if(E.g.length>30){if(D(E)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,w=g;w.l(E)<=0;)v=Re(v),w=Re(w);var b=ce(v,1),T=ce(w,1);for(w=ce(w,2),v=ce(v,2);!C(w);){var y=T.add(w);y.l(E)<=0&&(b=b.add(v),T=y),w=ce(w,1),v=ce(v,1)}return g=W(E,b.j(g)),new Y(b,g)}for(b=m;E.l(g)>=0;){for(v=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=d(v),y=T.j(g);D(y)||y.l(E)>0;)v-=w,T=d(v),y=T.j(g);C(T)&&(T=_),b=b.add(T),E=W(E,y)}return new Y(b,E)}n.B=function(E){return de(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)&E.i(w);return new a(v,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)|E.i(w);return new a(v,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)^E.i(w);return new a(v,this.h^E.h)};function Re(E){const g=E.g.length+1,v=[];for(let w=0;w<g;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(v,E.h)}function ce(E,g){const v=g>>5;g%=32;const w=E.g.length-v,b=[];for(let T=0;T<w;T++)b[T]=g>0?E.i(T+v)>>>g|E.i(T+v+1)<<32-g:E.i(T+v);return new a(b,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Hc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,vt=a}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gc,Wn,Wc,Wr,Oi,Kc,Qc,Jc;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof jr=="object"&&jr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var I=o[p];if(!(I in h))break e;h=h[I]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function f(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,I,S){for(var k=Array(arguments.length-2),B=2;B<arguments.length;B++)k[B-2]=arguments[B];return c.prototype[I].apply(p,k)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const c=o.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function C(o,c){for(let p=1;p<arguments.length;p++){const I=arguments[p];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=o.length||0;const S=I.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=I[k]}else o.push(I)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){a.setTimeout(()=>{throw o},0)}function W(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,h){const p=Y.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new D(()=>new de,o=>o.reset());class de{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,ce=!1,E=new q,g=()=>{const o=Promise.resolve(void 0);Re=()=>{o.then(v)}};function v(){for(var o;o=W();){try{o.h.call(o.g)}catch(h){x(h)}var c=Y;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}ce=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function Se(o,c){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(Se,b),Se.prototype.init=function(o,c){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),rf=0;function sf(o,c,h,p,I){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=I,this.key=++rf,this.da=this.fa=!1}function Ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Sr(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function of(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Jo(o){const c={};for(const h in o)c[h]=o[h];return c}const Yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xo(o,c){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)o[h]=p[h];for(let S=0;S<Yo.length;S++)h=Yo[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Pr(o){this.src=o,this.g={},this.h=0}Pr.prototype.add=function(o,c,h,p,I){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=Gs(o,c,p,I);return k>-1?(c=o[k],h||(c.fa=!1)):(c=new sf(c,this.src,S,!!p,I),c.fa=h,o.push(c)),c};function Hs(o,c){const h=c.type;if(h in o.g){var p=o.g[h],I=Array.prototype.indexOf.call(p,c,void 0),S;(S=I>=0)&&Array.prototype.splice.call(p,I,1),S&&(Ar(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Gs(o,c,h,p){for(let I=0;I<o.length;++I){const S=o[I];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==p)return I}return-1}var Ws="closure_lm_"+(Math.random()*1e6|0),Ks={};function Zo(o,c,h,p,I){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Zo(o,c[S],h,p,I);return null}return h=na(h),o&&o[xt]?o.J(c,h,l(p)?!!p.capture:!1,I):af(o,c,h,!1,p,I)}function af(o,c,h,p,I,S){if(!c)throw Error("Invalid event type");const k=l(I)?!!I.capture:!!I;let B=Js(o);if(B||(o[Ws]=B=new Pr(o)),h=B.add(c,h,p,k,S),h.proxy)return h;if(p=lf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)T||(I=k),I===void 0&&(I=!1),o.addEventListener(c.toString(),p,I);else if(o.attachEvent)o.attachEvent(ta(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function lf(){function o(h){return c.call(o.src,o.listener,h)}const c=cf;return o}function ea(o,c,h,p,I){if(Array.isArray(c))for(var S=0;S<c.length;S++)ea(o,c[S],h,p,I);else p=l(p)?!!p.capture:!!p,h=na(h),o&&o[xt]?(o=o.i,S=String(c).toString(),S in o.g&&(c=o.g[S],h=Gs(c,h,p,I),h>-1&&(Ar(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[S],o.h--)))):o&&(o=Js(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Gs(c,h,p,I)),(h=o>-1?c[o]:null)&&Qs(h))}function Qs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[xt])Hs(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(ta(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Js(c))?(Hs(h,o),h.h==0&&(h.src=null,c[Ws]=null)):Ar(o)}}}function ta(o){return o in Ks?Ks[o]:Ks[o]="on"+o}function cf(o,c){if(o.da)o=!0;else{c=new Se(c,this);const h=o.listener,p=o.ha||o.src;o.fa&&Qs(o),o=h.call(p,c)}return o}function Js(o){return o=o[Ws],o instanceof Pr?o:null}var Ys="__closure_events_fn_"+(Math.random()*1e9>>>0);function na(o){return typeof o=="function"?o:(o[Ys]||(o[Ys]=function(c){return o.handleEvent(c)}),o[Ys])}function _e(){w.call(this),this.i=new Pr(this),this.M=this,this.G=null}m(_e,w),_e.prototype[xt]=!0,_e.prototype.removeEventListener=function(o,c,h,p){ea(this,o,c,h,p)};function Ie(o,c){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new b(c,o);else if(c instanceof b)c.target=c.target||o;else{var I=c;c=new b(p,o),Xo(c,I)}I=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=c.g=h[k],I=Rr(S,p,!0,c)&&I;if(S=c.g=o,I=Rr(S,p,!0,c)&&I,I=Rr(S,p,!1,c)&&I,h)for(k=0;k<h.length;k++)S=c.g=h[k],I=Rr(S,p,!1,c)&&I}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let p=0;p<h.length;p++)Ar(h[p]);delete o.g[c],o.h--}}this.G=null},_e.prototype.J=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},_e.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Rr(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let I=!0;for(let S=0;S<c.length;++S){const k=c[S];if(k&&!k.da&&k.capture==h){const B=k.listener,ue=k.ha||k.src;k.fa&&Hs(o.i,k),I=B.call(ue,p)!==!1&&I}}return I&&!p.defaultPrevented}function uf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ra(o){o.g=uf(()=>{o.g=null,o.i&&(o.i=!1,ra(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class hf extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ra(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(o){w.call(this),this.h=o,this.g={}}m(Pn,w);var sa=[];function ia(o){Sr(o.g,function(c,h){this.g.hasOwnProperty(h)&&Qs(c)},o),o.g={}}Pn.prototype.N=function(){Pn.Z.N.call(this),ia(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xs=a.JSON.stringify,df=a.JSON.parse,ff=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function oa(){}function aa(){}var Rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zs(){b.call(this,"d")}m(Zs,b);function ei(){b.call(this,"c")}m(ei,b);var kt={},la=null;function Cr(){return la=la||new _e}kt.Ia="serverreachability";function ca(o){b.call(this,kt.Ia,o)}m(ca,b);function Cn(o){const c=Cr();Ie(c,new ca(c))}kt.STAT_EVENT="statevent";function ua(o,c){b.call(this,kt.STAT_EVENT,o),this.stat=c}m(ua,b);function Te(o){const c=Cr();Ie(c,new ua(c,o))}kt.Ja="timingevent";function ha(o,c){b.call(this,kt.Ja,o),this.size=c}m(ha,b);function xn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function kn(){this.g=!0}kn.prototype.ua=function(){this.g=!1};function pf(o,c,h,p,I,S){o.info(function(){if(o.g)if(S){var k="",B=S.split("&");for(let X=0;X<B.length;X++){var ue=B[X].split("=");if(ue.length>1){const fe=ue[0];ue=ue[1];const Ue=fe.split("_");k=Ue.length>=2&&Ue[1]=="type"?k+(fe+"="+ue+"&"):k+(fe+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+c+`
`+h+`
`+k})}function mf(o,c,h,p,I,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+c+`
`+h+`
`+S+" "+k})}function Yt(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+yf(o,h)+(p?" "+p:"")})}function gf(o,c){o.info(function(){return"TIMEOUT: "+c})}kn.prototype.info=function(){};function yf(o,c){if(!o.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var I=p[0];if(I!="noop"&&I!="stop"&&I!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Xs(S)}catch{return c}}var xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},da={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fa;function ti(){}m(ti,oa),ti.prototype.g=function(){return new XMLHttpRequest},fa=new ti;function Dn(o){return encodeURIComponent(String(o))}function _f(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function st(o,c,h,p){this.j=o,this.i=c,this.l=h,this.S=p||1,this.V=new Pn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pa}function pa(){this.i=null,this.g="",this.h=!1}var ma={},ni={};function ri(o,c,h){o.M=1,o.A=Dr($e(c)),o.u=h,o.R=!0,ga(o,null)}function ga(o,c){o.F=Date.now(),kr(o),o.B=$e(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Ca(h.i,"t",p),o.C=0,h=o.j.L,o.h=new pa,o.g=Wa(o.j,h?c:null,!o.u),o.P>0&&(o.O=new hf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,p=o.ba;var I="readystatechange";Array.isArray(I)||(I&&(sa[0]=I.toString()),I=sa);for(let S=0;S<I.length;S++){const k=Zo(h,I[S],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.J?Jo(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Cn(),pf(o.i,o.v,o.B,o.l,o.S,o.u)}st.prototype.ba=function(o){o=o.target;const c=this.O;c&&at(o)==3?c.j():this.Y(o)},st.prototype.Y=function(o){try{if(o==this.g)e:{const B=at(this.g),ue=this.g.ya(),X=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Na(this.g)))){this.K||B!=4||ue==7||(ue==8||X<=0?Cn(3):Cn(2)),si(this);var c=this.g.ca();this.X=c;var h=vf(this);if(this.o=c==200,mf(this.i,this.v,this.B,this.l,this.S,B,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,I=this.g;if((p=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var S=p;break t}}S=null}if(o=S)Yt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ii(this,o);else{this.o=!1,this.m=3,Te(12),Dt(this),Vn(this);break e}}if(this.R){o=!0;let fe;for(;!this.K&&this.C<h.length;)if(fe=bf(this,h),fe==ni){B==4&&(this.m=4,Te(14),o=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==ma){this.m=4,Te(15),Yt(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Yt(this.i,this.l,fe,null),ii(this,fe);if(ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||h.length!=0||this.h.h||(this.m=1,Te(16),o=!1),this.o=this.o&&o,!o)Yt(this.i,this.l,h,"[Invalid Chunked Response]"),Dt(this),Vn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),fi(k),k.P=!0,Te(11))}}else Yt(this.i,this.l,h,null),ii(this,h);B==4&&Dt(this),this.o&&!this.K&&(B==4?qa(this.j,this):(this.o=!1,kr(this)))}else Lf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Te(12)):(this.m=0,Te(13)),Dt(this),Vn(this)}}}catch{}finally{}};function vf(o){if(!ya(o))return o.g.la();const c=Na(o.g);if(c==="")return"";let h="";const p=c.length,I=at(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Dt(o),Vn(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(c[S],{stream:!(I&&S==p-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function ya(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function bf(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?ni:(h=Number(c.substring(h,p)),isNaN(h)?ma:(p+=1,p+h>c.length?ni:(c=c.slice(p,p+h),o.C=p+h,c)))}st.prototype.cancel=function(){this.K=!0,Dt(this)};function kr(o){o.T=Date.now()+o.H,_a(o,o.H)}function _a(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=xn(d(o.aa,o),c)}function si(o){o.D&&(a.clearTimeout(o.D),o.D=null)}st.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(gf(this.i,this.B),this.M!=2&&(Cn(),Te(17)),Dt(this),this.m=2,Vn(this)):_a(this,this.T-o)};function Vn(o){o.j.I==0||o.K||qa(o.j,o)}function Dt(o){si(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ia(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function ii(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||oi(h.h,o))){if(!o.L&&oi(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Mr(h),Or(h);else break e;di(h),Te(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=xn(d(h.Va,h),6e3));Ea(h.h)<=1&&h.ta&&(h.ta=void 0)}else Lt(h,11)}else if((o.L||h.g==o)&&Mr(h),!y(c))for(I=h.Ba.g.parse(c),c=0;c<I.length;c++){let X=I[c];const fe=X[0];if(!(fe<=h.K))if(h.K=fe,X=X[1],h.I==2)if(X[0]=="c"){h.M=X[1],h.ba=X[2];const Ue=X[3];Ue!=null&&(h.ka=Ue,h.j.info("VER="+h.ka));const Ot=X[4];Ot!=null&&(h.za=Ot,h.j.info("SVER="+h.za));const lt=X[5];lt!=null&&typeof lt=="number"&&lt>0&&(p=1.5*lt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ct=o.g;if(ct){const Ur=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ur){var S=p.h;S.g||Ur.indexOf("spdy")==-1&&Ur.indexOf("quic")==-1&&Ur.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ai(S,S.h),S.h=null))}if(p.G){const pi=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;pi&&(p.wa=pi,ee(p.J,p.G,pi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=Ga(p,p.L?p.ba:null,p.W),k.L){wa(p.h,k);var B=k,ue=p.O;ue&&(B.H=ue),B.D&&(si(B),kr(B)),p.g=k}else ja(p);h.i.length>0&&Nr(h)}else X[0]!="stop"&&X[0]!="close"||Lt(h,7);else h.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Lt(h,7):hi(h):X[0]!="noop"&&h.l&&h.l.qa(X),h.A=0)}}Cn(4)}catch{}}var Ef=class{constructor(o,c){this.g=o,this.map=c}};function va(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ba(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ea(o){return o.h?1:o.g?o.g.size:0}function oi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ai(o,c){o.g?o.g.add(c):o.h=c}function wa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}va.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ia(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return A(o.i)}var Ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let I,S=null;p>=0?(I=o[h].substring(0,p),S=o[h].substring(p+1)):I=o[h],c(I,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function it(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof it?(this.l=o.l,Ln(this,o.j),this.o=o.o,this.g=o.g,On(this,o.u),this.h=o.h,li(this,xa(o.i)),this.m=o.m):o&&(c=String(o).match(Ta))?(this.l=!1,Ln(this,c[1]||"",!0),this.o=Nn(c[2]||""),this.g=Nn(c[3]||"",!0),On(this,c[4]),this.h=Nn(c[5]||"",!0),li(this,c[6]||"",!0),this.m=Nn(c[7]||"")):(this.l=!1,this.i=new $n(null,this.l))}it.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Mn(c,Aa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Mn(c,Aa,!0),"@"),o.push(Dn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Mn(h,h.charAt(0)=="/"?Af:Tf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Mn(h,Pf)),o.join("")},it.prototype.resolve=function(o){const c=$e(this);let h=!!o.j;h?Ln(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var p=o.h;if(h)On(c,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var I=c.h.lastIndexOf("/");I!=-1&&(p=c.h.slice(0,I+1)+p)}if(I=p,I==".."||I==".")p="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){p=I.lastIndexOf("/",0)==0,I=I.split("/");const S=[];for(let k=0;k<I.length;){const B=I[k++];B=="."?p&&k==I.length&&S.push(""):B==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==I.length&&S.push("")):(S.push(B),p=!0)}p=S.join("/")}else p=I}return h?c.h=p:h=o.i.toString()!=="",h?li(c,xa(o.i)):h=!!o.m,h&&(c.m=o.m),c};function $e(o){return new it(o)}function Ln(o,c,h){o.j=h?Nn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function On(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function li(o,c,h){c instanceof $n?(o.i=c,Rf(o.i,o.l)):(h||(c=Mn(c,Sf)),o.i=new $n(c,o.l))}function ee(o,c,h){o.i.set(c,h)}function Dr(o){return ee(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Nn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Mn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,If),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function If(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Aa=/[#\/\?@]/g,Tf=/[#\?:]/g,Af=/[#\?]/g,Sf=/[#\?@]/g,Pf=/#/g;function $n(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Vt(o){o.g||(o.g=new Map,o.h=0,o.i&&wf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=$n.prototype,n.add=function(o,c){Vt(this),this.i=null,o=Xt(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Sa(o,c){Vt(o),c=Xt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Pa(o,c){return Vt(o),c=Xt(o,c),o.g.has(c)}n.forEach=function(o,c){Vt(this),this.g.forEach(function(h,p){h.forEach(function(I){o.call(c,I,p,this)},this)},this)};function Ra(o,c){Vt(o);let h=[];if(typeof c=="string")Pa(o,c)&&(h=h.concat(o.g.get(Xt(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Vt(this),this.i=null,o=Xt(this,o),Pa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Ra(this,o),o.length>0?String(o[0]):c):c};function Ca(o,c,h){Sa(o,c),h.length>0&&(o.i=null,o.g.set(Xt(o,c),A(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const I=Dn(h);h=Ra(this,h);for(let S=0;S<h.length;S++){let k=I;h[S]!==""&&(k+="="+Dn(h[S])),o.push(k)}}return this.i=o.join("&")};function xa(o){const c=new $n;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Xt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Rf(o,c){c&&!o.j&&(Vt(o),o.i=null,o.g.forEach(function(h,p){const I=p.toLowerCase();p!=I&&(Sa(this,p),Ca(this,I,h))},o)),o.j=c}function Cf(o,c){const h=new kn;if(a.Image){const p=new Image;p.onload=f(ot,h,"TestLoadImage: loaded",!0,c,p),p.onerror=f(ot,h,"TestLoadImage: error",!1,c,p),p.onabort=f(ot,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(ot,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function xf(o,c){const h=new kn,p=new AbortController,I=setTimeout(()=>{p.abort(),ot(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(I),S.ok?ot(h,"TestPingServer: ok",!0,c):ot(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),ot(h,"TestPingServer: error",!1,c)})}function ot(o,c,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function kf(){this.g=new ff}function ci(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ci,oa),ci.prototype.g=function(){return new Vr(this.i,this.h)};function Vr(o,c){_e.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Vr,_e),n=Vr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Fn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ka(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ka(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Un(this):Fn(this),this.readyState==3&&ka(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Na=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Fn(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Fn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Da(o){let c="";return Sr(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ui(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Da(h),typeof o=="string"?h!=null&&Dn(h):ee(o,c,h))}function re(o){_e.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(re,_e);var Df=/^https?$/i,Vf=["POST","PUT"];n=re.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fa.g(),this.g.onreadystatechange=_(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Va(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),I=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Vf,c,void 0)>=0)||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Va(this,S)}};function Va(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,La(o),Lr(o)}function La(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ie(this,"complete"),Ie(this,"abort"),Lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lr(this,!0)),re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Oa(this):this.Xa())},n.Xa=function(){Oa(this)};function Oa(o){if(o.h&&typeof i<"u"){if(o.v&&at(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ie(o,"readystatechange"),at(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=S===0){let k=String(o.D).match(Ta)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!Df.test(k?k.toLowerCase():"")}h=p}if(h)Ie(o,"complete"),Ie(o,"success");else{o.o=6;try{var I=at(o)>2?o.g.statusText:""}catch{I=""}o.l=I+" ["+o.ca()+"]",La(o)}}finally{Lr(o)}}}}function Lr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Ie(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.ca=function(){try{return at(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),df(c)}};function Na(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lf(o){const c={};o=(o.g&&at(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=_f(o[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[I]||[];c[I]=S,S.push(h)}of(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ma(o){this.za=0,this.i=[],this.j=new kn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jn("baseRetryDelayMs",5e3,o),this.Za=jn("retryDelaySeedMs",1e4,o),this.Ta=jn("forwardChannelMaxRetries",2,o),this.va=jn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new va(o&&o.concurrentRequestLimit),this.Ba=new kf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ma.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,p){Te(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Ga(this,null,this.W),Nr(this)};function hi(o){if($a(o),o.I==3){var c=o.V++,h=$e(o.J);if(ee(h,"SID",o.M),ee(h,"RID",c),ee(h,"TYPE","terminate"),Bn(o,h),c=new st(o,o.j,c),c.M=2,c.A=Dr($e(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Wa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),kr(c)}Ha(o)}function Or(o){o.g&&(fi(o),o.g.cancel(),o.g=null)}function $a(o){Or(o),o.v&&(a.clearTimeout(o.v),o.v=null),Mr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Nr(o){if(!ba(o.h)&&!o.m){o.m=!0;var c=o.Ea;Re||g(),ce||(Re(),ce=!0),E.add(c,o),o.D=0}}function Of(o,c){return Ea(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=xn(d(o.Ea,o,c),za(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const I=new st(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Jo(S),Xo(S,this.U)):S=this.U),this.u!==null||this.R||(I.J=S,S=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Fa(this,I,c),h=$e(this.J),ee(h,"RID",o),ee(h,"CVER",22),this.G&&ee(h,"X-HTTP-Session-Id",this.G),Bn(this,h),S&&(this.R?c="headers="+Dn(Da(S))+"&"+c:this.u&&ui(h,this.u,S)),ai(this.h,I),this.Ra&&ee(h,"TYPE","init"),this.S?(ee(h,"$req",c),ee(h,"SID","null"),I.U=!0,ri(I,h,null)):ri(I,h,c),this.I=2}}else this.I==3&&(o?Ua(this,o):this.i.length==0||ba(this.h)||Ua(this))};function Ua(o,c){var h;c?h=c.l:h=o.V++;const p=$e(o.J);ee(p,"SID",o.M),ee(p,"RID",h),ee(p,"AID",o.K),Bn(o,p),o.u&&o.o&&ui(p,o.u,o.o),h=new st(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Fa(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ai(o.h,h),ri(h,p,c)}function Bn(o,c){o.H&&Sr(o.H,function(h,p){ee(c,p,h)}),o.l&&Sr({},function(h,p){ee(c,p,h)})}function Fa(o,c,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var I=o.i;let B=-1;for(;;){const ue=["count="+h];B==-1?h>0?(B=I[0].g,ue.push("ofs="+B)):B=0:ue.push("ofs="+B);let X=!0;for(let fe=0;fe<h;fe++){var S=I[fe].g;const Ue=I[fe].map;if(S-=B,S<0)B=Math.max(0,I[fe].g-100),X=!1;else try{S="req"+S+"_"||"";try{var k=Ue instanceof Map?Ue:Object.entries(Ue);for(const[Ot,lt]of k){let ct=lt;l(lt)&&(ct=Xs(lt)),ue.push(S+Ot+"="+encodeURIComponent(ct))}}catch(Ot){throw ue.push(S+"type="+encodeURIComponent("_badmap")),Ot}}catch{p&&p(Ue)}}if(X){k=ue.join("&");break e}}k=void 0}return o=o.i.splice(0,h),c.G=o,k}function ja(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Re||g(),ce||(Re(),ce=!0),E.add(c,o),o.A=0}}function di(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=xn(d(o.Da,o),za(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ba(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=xn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Te(10),Or(this),Ba(this))};function fi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ba(o){o.g=new st(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=$e(o.na);ee(c,"RID","rpc"),ee(c,"SID",o.M),ee(c,"AID",o.K),ee(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ee(c,"TO",o.ia),ee(c,"TYPE","xmlhttp"),Bn(o,c),o.u&&o.o&&ui(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Dr($e(c)),h.u=null,h.R=!0,ga(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Or(this),di(this),Te(19))};function Mr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function qa(o,c){var h=null;if(o.g==c){Mr(o),fi(o),o.g=null;var p=2}else if(oi(o.h,c))h=c.G,wa(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var I=o.D;p=Cr(),Ie(p,new ha(p,h)),Nr(o)}else ja(o);else if(I=c.m,I==3||I==0&&c.X>0||!(p==1&&Of(o,c)||p==2&&di(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),I){case 1:Lt(o,5);break;case 4:Lt(o,10);break;case 3:Lt(o,6);break;default:Lt(o,2)}}}function za(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Lt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),p=o.Ua;const I=!p;p=new it(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ln(p,"https"),Dr(p),I?Cf(p.toString(),h):xf(p.toString(),h)}else Te(2);o.I=0,o.l&&o.l.pa(c),Ha(o),$a(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Ha(o){if(o.I=0,o.ja=[],o.l){const c=Ia(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ja,c),C(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function Ga(o,c,h){var p=h instanceof it?$e(h):new it(h);if(p.g!="")c&&(p.g=c+"."+p.g),On(p,p.u);else{var I=a.location;p=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;const S=new it(null);p&&Ln(S,p),c&&(S.g=c),I&&On(S,I),h&&(S.h=h),p=S}return h=o.G,c=o.wa,h&&c&&ee(p,h,c),ee(p,"VER",o.ka),Bn(o,p),p}function Wa(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new re(new ci({ab:h})):new re(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ka(){}n=Ka.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function $r(){}$r.prototype.g=function(o,c){return new Ce(o,c)};function Ce(o,c){_e.call(this),this.g=new Ma(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zt(this)}m(Ce,_e),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){hi(this.g)},Ce.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Xs(o),o=h);c.i.push(new Ef(c.Ya++,o)),c.I==3&&Nr(c)},Ce.prototype.N=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Ce.Z.N.call(this)};function Qa(o){Zs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Qa,Zs);function Ja(){ei.call(this),this.status=1}m(Ja,ei);function Zt(o){this.g=o}m(Zt,Ka),Zt.prototype.ra=function(){Ie(this.g,"a")},Zt.prototype.qa=function(o){Ie(this.g,new Qa(o))},Zt.prototype.pa=function(o){Ie(this.g,new Ja)},Zt.prototype.oa=function(){Ie(this.g,"b")},$r.prototype.createWebChannel=$r.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Jc=function(){return new $r},Qc=function(){return Cr()},Kc=kt,Oi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xr.NO_ERROR=0,xr.TIMEOUT=8,xr.HTTP_ERROR=6,Wr=xr,da.COMPLETE="complete",Wc=da,aa.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",_e.prototype.listen=_e.prototype.J,Wn=aa,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,Gc=re}).apply(typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{});const hl="@firebase/firestore",dl="4.9.3";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let En="12.7.0";/**
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
 */const Bt=new so("@firebase/firestore");function tn(){return Bt.logLevel}function L(n,...e){if(Bt.logLevel<=z.DEBUG){const t=e.map(ao);Bt.debug(`Firestore (${En}): ${n}`,...t)}}function et(n,...e){if(Bt.logLevel<=z.ERROR){const t=e.map(ao);Bt.error(`Firestore (${En}): ${n}`,...t)}}function fn(n,...e){if(Bt.logLevel<=z.WARN){const t=e.map(ao);Bt.warn(`Firestore (${En}): ${n}`,...t)}}function ao(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Yc(n,r,t)}function Yc(n,e,t){let r=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw et(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Yc(e,s,r)}function j(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ye{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Xc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Im{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(be.UNAUTHENTICATED)))}shutdown(){}}class Tm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Am{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ye,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ye)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Xc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Sm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Sm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class lo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Cm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Ni(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return bi(s)===bi(i)?H(s,i):bi(s)?1:-1}return H(n.length,e.length)}const xm=55296,km=57343;function bi(n){const e=n.charCodeAt(0);return e>=xm&&e<=km}function pn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const pl="__name__";class Fe{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Fe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=Fe.isNumericId(e),s=Fe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):Ni(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class Z extends Fe{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const Dm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Fe{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return Dm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pl}static keyField(){return new ge([pl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}/**
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
 */function Zc(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Vm(n,e,t,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ml(n){if(!O.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gl(n){if(O.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function eu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Et(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ps(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function pr(n,e){if(!eu(n))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const yl=-62135596800,_l=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_l);return new te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yl)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pr(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ae("string",te._jsonSchemaVersion),seconds:ae("number"),nanoseconds:ae("number")};/**
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new te(0,0))}static max(){return new F(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sr=-1;function Lm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new wt(s,O.empty(),e)}function Om(n){return new wt(n.readTime,n.key,sr)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(F.min(),O.empty(),sr)}static max(){return new wt(F.max(),O.empty(),sr)}}function Nm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const Mm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $m{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function wn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Mm)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((s=>s?R.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++l,l===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new R(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Um(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function In(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Rs.ce=-1;/**
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
 */const co=-1;function Cs(n){return n==null}function is(n){return n===0&&1/n==-1/0}function Fm(n){return typeof n=="number"&&Number.isInteger(n)&&!is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const tu="";function jm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vl(e)),e=Bm(n.get(t),e);return vl(e)}function Bm(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case tu:t+="";break;default:t+=i}}return t}function vl(n){return n+tu+""}/**
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
 */function bl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Le([])}unionWith(e){let t=new he(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class ru extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ru("Invalid base64 string: "+i):i}})(e);return new ye(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const qm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=qm.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
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
 */const su="server_timestamp",iu="__type__",ou="__previous_value__",au="__local_write_time__";function uo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[iu])==null?void 0:r.stringValue)===su}function xs(n){const e=n.mapValue.fields[ou];return uo(e)?xs(e):e}function ir(n){const e=It(n.mapValue.fields[au].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class zm{constructor(e,t,r,s,i,a,l,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const os="(default)";class or{constructor(e,t){this.projectId=e,this.database=t||os}static empty(){return new or("","")}get isDefaultDatabase(){return this.database===os}isEqual(e){return e instanceof or&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lu="__type__",Hm="__max__",qr={mapValue:{}},cu="__vector__",as="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uo(n)?4:Wm(n)?9007199254740991:Gm(n)?10:11:U(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ir(n).isEqual(ir(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=It(s.timestampValue),l=It(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Tt(s.bytesValue).isEqual(Tt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return se(s.geoPointValue.latitude)===se(i.geoPointValue.latitude)&&se(s.geoPointValue.longitude)===se(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return se(s.integerValue)===se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=se(s.doubleValue),l=se(i.doubleValue);return a===l?is(a)===is(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return pn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(bl(a)!==bl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ke(a[u],l[u])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function ar(n,e){return(n.values||[]).find((t=>Ke(t,e)))!==void 0}function mn(n,e){if(n===e)return 0;const t=At(n),r=At(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=se(i.integerValue||i.doubleValue),u=se(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return wl(n.timestampValue,e.timestampValue);case 4:return wl(ir(n),ir(e));case 5:return Ni(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Tt(i),u=Tt(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=H(l[d],u[d]);if(f!==0)return f}return H(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=H(se(i.latitude),se(a.latitude));return l!==0?l:H(se(i.longitude),se(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Il(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var _,A,C,D;const l=i.fields||{},u=a.fields||{},d=(_=l[as])==null?void 0:_.arrayValue,f=(A=u[as])==null?void 0:A.arrayValue,m=H(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return m!==0?m:Il(d,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===qr.mapValue&&a===qr.mapValue)return 0;if(i===qr.mapValue)return 1;if(a===qr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=Ni(u[m],f[m]);if(_!==0)return _;const A=mn(l[u[m]],d[f[m]]);if(A!==0)return A}return H(u.length,f.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=It(n),r=It(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Il(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=mn(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function gn(n){return Mi(n)}function Mi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=It(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Tt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return O.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Mi(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Mi(t.fields[a])}`;return s+"}"})(n.mapValue):U(61005,{value:n})}function Kr(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xs(n);return e?16+Kr(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Kr(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Gt(r.fields,((i,a)=>{s+=i.length+Kr(a)})),s})(n.mapValue);default:throw U(13486,{value:n})}}function Tl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $i(n){return!!n&&"integerValue"in n}function ho(n){return!!n&&"arrayValue"in n}function Al(n){return!!n&&"nullValue"in n}function Sl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function Gm(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[lu])==null?void 0:r.stringValue)===cu}function Xn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Xn(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xn(n.arrayValue.values[t]);return e}return{...n}}function Wm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hm}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Xn(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Qr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Qr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ke(Xn(this.value))}}function uu(n){const e=[];return Gt(n.fields,((t,r)=>{const s=new ge([t]);if(Qr(r)){const i=uu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Le(e)}/**
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
 */class Ee{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,F.min(),F.min(),F.min(),ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,F.min(),F.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,F.min(),F.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ls{constructor(e,t){this.position=e,this.inclusive=t}}function Pl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=mn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Km(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hu{}class oe extends hu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jm(e,t,r):t==="array-contains"?new Zm(e,r):t==="in"?new eg(e,r):t==="not-in"?new tg(e,r):t==="array-contains-any"?new ng(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ym(e,r):new Xm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mn(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends hu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ne(e,t)}matches(e){return du(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function du(n){return n.op==="and"}function fu(n){return Qm(n)&&du(n)}function Qm(n){for(const e of n.filters)if(e instanceof Ne)return!1;return!0}function Ui(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(fu(n))return n.filters.map((e=>Ui(e))).join(",");{const e=n.filters.map((t=>Ui(t))).join(",");return`${n.op}(${e})`}}function pu(n,e){return n instanceof oe?(function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&Ke(r.value,s.value)})(n,e):n instanceof Ne?(function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&pu(a,s.filters[l])),!0):!1})(n,e):void U(19439)}function mu(n){return n instanceof oe?(function(t){return`${t.field.canonicalString()} ${t.op} ${gn(t.value)}`})(n):n instanceof Ne?(function(t){return t.op.toString()+" {"+t.getFilters().map(mu).join(" ,")+"}"})(n):"Filter"}class Jm extends oe{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ym extends oe{constructor(e,t){super(e,"in",t),this.keys=gu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xm extends oe{constructor(e,t){super(e,"not-in",t),this.keys=gu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>O.fromName(r.referenceValue)))}class Zm extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ho(t)&&ar(t.arrayValue,this.value)}}class eg extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ar(this.value.arrayValue,t)}}class tg extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ar(this.value.arrayValue,t)}}class ng extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ar(this.value.arrayValue,r)))}}/**
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
 */class rg{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Cl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new rg(n,e,t,r,s,i,a)}function fo(n){const e=j(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ui(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>gn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>gn(r))).join(",")),e.Te=t}return e.Te}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Km(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rl(n.startAt,e.startAt)&&Rl(n.endAt,e.endAt)}function Fi(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class mr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sg(n,e,t,r,s,i,a,l){return new mr(n,e,t,r,s,i,a,l)}function mo(n){return new mr(n)}function xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yu(n){return n.collectionGroup!==null}function Zn(n){const e=j(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(ge.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new cs(i,r))})),t.has(ge.keyField().canonicalString())||e.Ie.push(new cs(ge.keyField(),r))}return e.Ie}function je(n){const e=j(n);return e.Ee||(e.Ee=ig(e,Zn(n))),e.Ee}function ig(n,e){if(n.limitType==="F")return Cl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new cs(s.field,i)}));const t=n.endAt?new ls(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ls(n.startAt.position,n.startAt.inclusive):null;return Cl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ji(n,e){const t=n.filters.concat([e]);return new mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bi(n,e,t){return new mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ks(n,e){return po(je(n),je(e))&&n.limitType===e.limitType}function _u(n){return`${fo(je(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>mu(s))).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>gn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>gn(s))).join(",")),`Target(${r})`})(je(n))}; limitType=${n.limitType})`}function Ds(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Zn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const d=Pl(a,l,u);return a.inclusive?d<=0:d<0})(r.startAt,Zn(r),s)||r.endAt&&!(function(a,l,u){const d=Pl(a,l,u);return a.inclusive?d>=0:d>0})(r.endAt,Zn(r),s))})(n,e)}function og(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vu(n){return(e,t)=>{let r=!1;for(const s of Zn(n)){const i=ag(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ag(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?mn(u,d):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return nu(this.inner)}size(){return this.innerSize}}/**
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
 */const lg=new ne(O.comparator);function tt(){return lg}const bu=new ne(O.comparator);function Kn(...n){let e=bu;for(const t of n)e=e.insert(t.key,t);return e}function Eu(n){let e=bu;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function $t(){return er()}function wu(){return er()}function er(){return new Wt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const cg=new ne(O.comparator),ug=new he(O.comparator);function G(...n){let e=ug;for(const t of n)e=e.add(t);return e}const hg=new he(H);function dg(){return hg}/**
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
 */function go(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function Iu(n){return{integerValue:""+n}}function fg(n,e){return Fm(e)?Iu(e):go(n,e)}/**
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
 */class Vs{constructor(){this._=void 0}}function pg(n,e,t){return n instanceof us?(function(s,i){const a={fields:{[iu]:{stringValue:su},[au]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uo(i)&&(i=xs(i)),i&&(a.fields[ou]=i),{mapValue:a}})(t,e):n instanceof lr?Au(n,e):n instanceof cr?Su(n,e):(function(s,i){const a=Tu(s,i),l=kl(a)+kl(s.Ae);return $i(a)&&$i(s.Ae)?Iu(l):go(s.serializer,l)})(n,e)}function mg(n,e,t){return n instanceof lr?Au(n,e):n instanceof cr?Su(n,e):t}function Tu(n,e){return n instanceof hs?(function(r){return $i(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class us extends Vs{}class lr extends Vs{constructor(e){super(),this.elements=e}}function Au(n,e){const t=Pu(e);for(const r of n.elements)t.some((s=>Ke(s,r)))||t.push(r);return{arrayValue:{values:t}}}class cr extends Vs{constructor(e){super(),this.elements=e}}function Su(n,e){let t=Pu(e);for(const r of n.elements)t=t.filter((s=>!Ke(s,r)));return{arrayValue:{values:t}}}class hs extends Vs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function kl(n){return se(n.integerValue||n.doubleValue)}function Pu(n){return ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function gg(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof lr&&s instanceof lr||r instanceof cr&&s instanceof cr?pn(r.elements,s.elements,Ke):r instanceof hs&&s instanceof hs?Ke(r.Ae,s.Ae):r instanceof us&&s instanceof us})(n.transform,e.transform)}class yg{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ls{}function Ru(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yo(n.key,Be.none()):new gr(n.key,n.data,Be.none());{const t=n.data,r=ke.empty();let s=new he(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kt(n.key,r,new Le(s.toArray()),Be.none())}}function _g(n,e,t){n instanceof gr?(function(s,i,a){const l=s.value.clone(),u=Vl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Kt?(function(s,i,a){if(!Jr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Vl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Cu(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function tr(n,e,t,r){return n instanceof gr?(function(i,a,l,u){if(!Jr(i.precondition,a))return l;const d=i.value.clone(),f=Ll(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Kt?(function(i,a,l,u){if(!Jr(i.precondition,a))return l;const d=Ll(i.fieldTransforms,u,a),f=a.data;return f.setAll(Cu(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,l){return Jr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function vg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Tu(r.transform,s||null);i!=null&&(t===null&&(t=ke.empty()),t.set(r.field,i))}return t||null}function Dl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pn(r,s,((i,a)=>gg(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gr extends Ls{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kt extends Ls{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Vl(n,e,t){const r=new Map;J(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,mg(a,l,t[s]))}return r}function Ll(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,pg(i,a,e))}return r}class yo extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bg extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Eg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_g(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wu();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Ru(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),G())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,((t,r)=>Dl(t,r)))&&pn(this.baseMutations,e.baseMutations,((t,r)=>Dl(t,r)))}}class _o{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return cg})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new _o(e,t,r,s)}}/**
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
 */class wg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ig{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ie,K;function Tg(n){switch(n){case P.OK:return U(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function xu(n){if(n===void 0)return et("GRPC error has no .code"),P.UNKNOWN;switch(n){case ie.OK:return P.OK;case ie.CANCELLED:return P.CANCELLED;case ie.UNKNOWN:return P.UNKNOWN;case ie.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ie.INTERNAL:return P.INTERNAL;case ie.UNAVAILABLE:return P.UNAVAILABLE;case ie.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ie.NOT_FOUND:return P.NOT_FOUND;case ie.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ie.ABORTED:return P.ABORTED;case ie.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ie.DATA_LOSS:return P.DATA_LOSS;default:return U(39323,{code:n})}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ag(){return new TextEncoder}/**
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
 */const Sg=new vt([4294967295,4294967295],0);function Ol(n){const e=Ag().encode(n),t=new Hc;return t.update(e),new Uint8Array(t.digest())}function Nl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vt([t,r],0),new vt([s,i],0)]}class vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Qn(`Invalid padding: ${t}`);if(r<0)throw new Qn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Qn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(vt.fromNumber(r)));return s.compare(Sg)===1&&(s=new vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ol(e),[r,s]=Nl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new vo(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=Ol(e),[r,s]=Nl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Os{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Os(F.min(),s,new ne(H),tt(),G())}}class yr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yr(r,t,G(),G(),G())}}/**
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
 */class Yr{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class ku{constructor(e,t){this.targetId=e,this.Ce=t}}class Du{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ml{constructor(){this.ve=0,this.Fe=$l(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U(38017,{changeType:i})}})),new yr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=$l()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Pg{constructor(e){this.Ge=e,this.ze=new Map,this.je=tt(),this.Je=zr(),this.He=zr(),this.Ye=new ne(H)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Fi(i))if(r===0){const a=new O(i.path);this.et(t,a,Ee.newNoDocument(a,F.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Tt(r).toUint8Array()}catch(u){if(u instanceof ru)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vo(a,s,i)}catch(u){return fn(u instanceof Qn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Fi(l.target)){const u=new O(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ee.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=G();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Os(e,t,this.Ye,this.je,r);return this.je=tt(),this.Je=zr(),this.He=zr(),this.Ye=new ne(H),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ml,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he(H),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ml),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function zr(){return new ne(O.comparator)}function $l(){return new ne(O.comparator)}const Rg={asc:"ASCENDING",desc:"DESCENDING"},Cg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xg={and:"AND",or:"OR"};class kg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qi(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function ds(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dg(n,e){return ds(n,e.toTimestamp())}function qe(n){return J(!!n,49232),F.fromTimestamp((function(t){const r=It(t);return new te(r.seconds,r.nanos)})(n))}function bo(n,e){return zi(n,e).canonicalString()}function zi(n,e){const t=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Lu(n){const e=Z.fromString(n);return J(Uu(e),10190,{key:e.toString()}),e}function Hi(n,e){return bo(n.databaseId,e.path)}function Ei(n,e){const t=Lu(e);if(t.get(1)!==n.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Nu(t))}function Ou(n,e){return bo(n.databaseId,e)}function Vg(n){const e=Lu(n);return e.length===4?Z.emptyPath():Nu(e)}function Gi(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nu(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ul(n,e,t){return{name:Hi(n,e),fields:t.value.mapValue.fields}}function Lg(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(J(f===void 0||typeof f=="string",58123),ye.fromBase64String(f||"")):(J(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ye.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const f=d.code===void 0?P.UNKNOWN:xu(d.code);return new V(f,d.message||"")})(a);t=new Du(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ei(n,r.document.name),i=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):F.min(),l=new ke({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Yr(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ei(n,r.document),i=r.readTime?qe(r.readTime):F.min(),a=Ee.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Yr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ei(n,r.document),i=r.removedTargetIds||[];t=new Yr([],i,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ig(s,i),l=r.targetId;t=new ku(l,a)}}return t}function Og(n,e){let t;if(e instanceof gr)t={update:Ul(n,e.key,e.value)};else if(e instanceof yo)t={delete:Hi(n,e.key)};else if(e instanceof Kt)t={update:Ul(n,e.key,e.data),updateMask:zg(e.fieldMask)};else{if(!(e instanceof bg))return U(16599,{Vt:e.type});t={verify:Hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof us)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Dg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(n,e.precondition)),t}function Ng(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?qe(s.updateTime):qe(i);return a.isEqual(F.min())&&(a=qe(i)),new yg(a,s.transformResults||[])})(t,e)))):[]}function Mg(n,e){return{documents:[Ou(n,e.path)]}}function $g(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ou(n,s);const i=(function(d){if(d.length!==0)return $u(Ne.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(_){return{field:rn(_.field),direction:jg(_.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=qi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function Ug(n){let e=Vg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const _=Mu(m);return _ instanceof Ne&&fu(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((_=>(function(C){return new cs(sn(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let _;return _=typeof m=="object"?m.value:m,Cs(_)?null:_})(t.limit));let u=null;t.startAt&&(u=(function(m){const _=!!m.before,A=m.values||[];return new ls(A,_)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const _=!m.before,A=m.values||[];return new ls(A,_)})(t.endAt)),sg(e,s,a,i,l,"F",u,d)}function Fg(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Mu(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sn(t.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sn(t.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return oe.create(sn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ne.create(t.compositeFilter.filters.map((r=>Mu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function jg(n){return Rg[n]}function Bg(n){return Cg[n]}function qg(n){return xg[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return ge.fromServerFormat(n.fieldPath)}function $u(n){return n instanceof oe?(function(t){if(t.op==="=="){if(Sl(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(Al(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sl(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(Al(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:Bg(t.op),value:t.value}}})(n):n instanceof Ne?(function(t){const r=t.getFilters().map((s=>$u(s)));return r.length===1?r[0]:{compositeFilter:{op:qg(t.op),filters:r}}})(n):U(54877,{filter:n})}function zg(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Uu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class mt{constructor(e,t,r,s,i=F.min(),a=F.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Hg{constructor(e){this.yt=e}}function Gg(n){const e=Ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bi(e,e.limit,"L"):e}/**
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
 */class Wg{constructor(){this.Cn=new Kg}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(wt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Kg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(Z.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(Z.comparator)).toArray()}}/**
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
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fu=41943040;class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(Fu,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
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
 */class yn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yn(0)}static cr(){return new yn(-1)}}/**
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
 */const jl="LruGarbageCollector",Qg=1048576;function Bl([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class Jg{constructor(e){this.Ir=e,this.buffer=new he(Bl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(jl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){In(t)?L(jl,"Ignoring IndexedDB error during garbage collection: ",t):await wn(t)}await this.Vr(3e5)}))}}class Xg{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Rs.ce);const r=new Jg(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Fl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,l=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),tn()<=z.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Zg(n,e){return new Xg(n,e)}/**
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
 */class ey{constructor(){this.changes=new Wt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ty{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ny{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&tr(r.mutation,s,Le.empty(),te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,G()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=G()){const s=$t();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Kn();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=$t();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,G())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=tt();const a=er(),l=(function(){return er()})();return t.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Kt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),tr(f.mutation,d,f.mutation.getFieldMask(),te.now())):a.set(d.key,Le.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>l.set(d,new ty(f,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=er();let s=new ne(((a,l)=>a-l)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Le.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(s.get(l.batchId)||G()).add(u);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=wu();f.forEach((_=>{if(!i.has(_)){const A=Ru(t.get(_),r.get(_));A!==null&&m.set(_,A),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve($t());let l=sr,u=i;return a.next((d=>R.forEach(d,((f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{u=u.insert(f,_)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,G()))).next((f=>({batchId:l,changes:Eu(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((r=>{let s=Kn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Kn();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(u=>{const d=(function(m,_){return new mr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((m,_)=>{a=a.insert(m,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ee.newInvalidDocument(f)))}));let l=Kn();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&tr(f.mutation,d,Le.empty(),te.now()),Ds(t,d)&&(l=l.insert(u,d))})),l}))}}/**
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
 */class ry{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Gg(s.bundledQuery),readTime:qe(s.readTime)}})(t)),R.resolve()}}/**
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
 */class sy{constructor(){this.overlays=new ne(O.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$t();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=$t(),i=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=$t(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=$t(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>l.set(d,f))),!(l.size()>=s)););return R.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new wg(t,r));let i=this.qr.get(t);i===void 0&&(i=G(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class iy{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class Eo{constructor(){this.Qr=new he(pe.$r),this.Ur=new he(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new O(new Z([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new Z([])),r=new pe(t,e),s=new pe(t,e+1);let i=G();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new pe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||H(e.Yr,t.Yr)}static Kr(e,t){return H(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
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
 */class oy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(pe.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Eg(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new pe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?co:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(H);return t.forEach((s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new pe(new O(i),0);let l=new he(H);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){J(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(t.mutations,(s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new pe(t,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ay{constructor(e){this.ri=e,this.docs=(function(){return new ne(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=tt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=tt();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Nm(Om(f),r)<=0||(s.has(f.key)||Ds(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U(9500)}ii(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new ly(this)}getSize(e){return R.resolve(this.size)}}class ly extends ey{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class cy{constructor(e){this.persistence=e,this.si=new Wt((t=>fo(t)),po),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new Eo,this.targetCount=0,this.ai=yn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new yn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class ju{constructor(e,t){this.ui={},this.overlays={},this.ci=new Rs(0),this.li=!1,this.li=!0,this.hi=new iy,this.referenceDelegate=e(this),this.Pi=new cy(this),this.indexManager=new Wg,this.remoteDocumentCache=(function(s){return new ay(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Hg(t),this.Ii=new ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new oy(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new uy(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class uy extends $m{constructor(e){super(),this.currentSequenceNumber=e}}class wo{constructor(e){this.persistence=e,this.Ri=new Eo,this.Vi=null}static mi(e){return new wo(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=O.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class fs{constructor(e,t){this.persistence=e,this.pi=new Wt((r=>jm(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Zg(this,t)}static mi(e,t){return new fs(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?R.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,i.removeEntry(a,F.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Kr(e.data.value)),t}br(e,t,r){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Io(e,t.fromCache,r,s)}}/**
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
 */class hy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ip()?8:Um(we())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new hy;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(tn()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(tn()<=z.DEBUG&&L("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(tn()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):R.resolve())}ys(e,t){if(xl(t))return R.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Bi(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=G(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,Bi(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ws(e,t,r,s){return xl(t)||s.isEqual(F.min())?R.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?R.resolve(null):(tn()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nn(t)),this.vs(e,a,t,Lm(s,sr)).next((l=>l)))}))}Ds(e,t){let r=new he(vu(e));return t.forEach(((s,i)=>{Ds(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return tn()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",nn(t)),this.ps.getDocumentsMatchingQuery(e,t,wt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const To="LocalStore",fy=3e8;class py{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ne(H),this.xs=new Wt((i=>fo(i)),po),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ny(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function my(n,e,t,r){return new py(n,e,t,r)}async function Bu(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=G();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function gy(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,f){const m=d.batch,_=m.keys();let A=R.resolve();return _.forEach((C=>{A=A.next((()=>f.getEntry(u,C))).next((D=>{const x=d.docVersions.get(C);J(x!==null,48541),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function qu(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function yy(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((f,m)=>{const _=s.get(m);if(!_)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m))));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),(function(D,x,W){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=fy?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(_,A,f)&&l.push(t.Pi.updateTargetData(i,A))}));let u=tt(),d=G();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(_y(i,a,e.documentUpdates).next((f=>{u=f.ks,d=f.qs}))),!r.isEqual(F.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next((m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return R.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function _y(n,e,t){let r=G(),s=G();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=tt();return t.forEach(((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(To,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function vy(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=co),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function by(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,R.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new mt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Wi(n,e,t){const r=j(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!In(a))throw a;L(To,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ql(n,e,t){const r=j(n);let s=F.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const m=j(u),_=m.xs.get(f);return _!==void 0?R.resolve(m.Ms.get(_)):m.Pi.getTargetData(d,f)})(r,a,je(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:G()))).next((l=>(Ey(r,og(e),l),{documents:l,Qs:i})))))}function Ey(n,e,t){let r=n.Os.get(e)||F.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class zl{constructor(){this.activeTargetIds=dg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wy{constructor(){this.Mo=new zl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new zl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Iy{Oo(e){}shutdown(){}}/**
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
 */const Hl="ConnectivityMonitor";class Gl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Hl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(Hl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hr=null;function Ki(){return Hr===null?Hr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hr++,"0x"+Hr.toString(16)}/**
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
 */const wi="RestConnection",Ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ay{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===os?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Ki(),l=this.zo(e,t.toUriEncodedString());L(wi,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),f=vn(d);return this.Jo(e,l,u,r,f).then((m=>(L(wi,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw fn(wi,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+En})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=Ty[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Sy{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ve="WebChannelConnection";class Py extends Ay{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ki();return new Promise(((l,u)=>{const d=new Gc;d.setWithCredentials(!0),d.listenOnce(Wc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Wr.NO_ERROR:const m=d.getResponseJson();L(ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Wr.TIMEOUT:L(ve,`RPC '${e}' ${a} timed out`),u(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:const _=d.getStatus();if(L(ve,`RPC '${e}' ${a} failed with status:`,_,"response text:",d.getResponseText()),_>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const D=(function(W){const q=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN})(C.status);u(new V(D,C.message))}else u(new V(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(P.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(ve,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);L(ve,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=Ki(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Jc(),l=Qc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(ve,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let _=!1,A=!1;const C=new Sy({Yo:x=>{A?L(ve,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(L(ve,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),L(ve,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Zo:()=>m.close()}),D=(x,W,q)=>{x.listen(W,(Y=>{try{q(Y)}catch(de){setTimeout((()=>{throw de}),0)}}))};return D(m,Wn.EventType.OPEN,(()=>{A||(L(ve,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),D(m,Wn.EventType.CLOSE,(()=>{A||(A=!0,L(ve,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(m))})),D(m,Wn.EventType.ERROR,(x=>{A||(A=!0,fn(ve,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new V(P.UNAVAILABLE,"The operation could not be completed")))})),D(m,Wn.EventType.MESSAGE,(x=>{var W;if(!A){const q=x.data[0];J(!!q,16349);const Y=q,de=(Y==null?void 0:Y.error)||((W=Y[0])==null?void 0:W.error);if(de){L(ve,`RPC '${e}' stream ${s} received error:`,de);const Re=de.status;let ce=(function(v){const w=ie[v];if(w!==void 0)return xu(w)})(Re),E=de.message;ce===void 0&&(ce=P.INTERNAL,E="Unknown error status: "+Re+" with message "+de.message),A=!0,C.a_(new V(ce,E)),m.close()}else L(ve,`RPC '${e}' stream ${s} received:`,q),C.u_(q)}})),D(l,Kc.STAT_EVENT,(x=>{x.stat===Oi.PROXY?L(ve,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Oi.NOPROXY&&L(ve,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ii(){return typeof document<"u"?document:null}/**
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
 */function Ns(n){return new kg(n,!0)}/**
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
 */class zu{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wl="PersistentStream";class Hu{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(Wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(L(Wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ry extends Hu{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Lg(this.serializer,e),r=(function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?qe(a.readTime):F.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Gi(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=Fi(u)?{documents:Mg(i,u)}:{query:$g(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Vu(i,a.resumeToken);const d=qi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=ds(i,a.snapshotVersion.toTimestamp());const d=qi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=Fg(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Gi(this.serializer),t.removeTarget=e,this.q_(t)}}class Cy extends Hu{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ng(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Gi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Og(this.serializer,r)))};this.q_(t)}}/**
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
 */class xy{}class ky extends xy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,zi(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(P.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,zi(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Dy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(et(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const qt="RemoteStore";class Vy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Qt(this)&&(L(qt,"Restarting streams for network reachability change."),await(async function(u){const d=j(u);d.Ea.add(4),await _r(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ms(d)})(this))}))})),this.Ra=new Dy(r,s)}}async function Ms(n){if(Qt(n))for(const e of n.da)await e(!0)}async function _r(n){for(const e of n.da)await e(!1)}function Gu(n,e){const t=j(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ro(t)?Po(t):Tn(t).O_()&&So(t,e))}function Ao(n,e){const t=j(n),r=Tn(t);t.Ia.delete(e),r.O_()&&Wu(t,e),t.Ia.size===0&&(r.O_()?r.L_():Qt(t)&&t.Ra.set("Unknown"))}function So(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tn(n).Y_(e)}function Wu(n,e){n.Va.Ue(e),Tn(n).Z_(e)}function Po(n){n.Va=new Pg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Tn(n).start(),n.Ra.ua()}function Ro(n){return Qt(n)&&!Tn(n).x_()&&n.Ia.size>0}function Qt(n){return j(n).Ea.size===0}function Ku(n){n.Va=void 0}async function Ly(n){n.Ra.set("Online")}async function Oy(n){n.Ia.forEach(((e,t)=>{So(n,e)}))}async function Ny(n,e){Ku(n),Ro(n)?(n.Ra.ha(e),Po(n)):n.Ra.set("Unknown")}async function My(n,e,t){if(n.Ra.set("Online"),e instanceof Du&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){L(qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ps(n,r)}else if(e instanceof Yr?n.Va.Ze(e):e instanceof ku?n.Va.st(e):n.Va.tt(e),!t.isEqual(F.min()))try{const r=await qu(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Wu(i,u);const m=new mt(f.target,u,d,f.sequenceNumber);So(i,m)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){L(qt,"Failed to raise snapshot:",r),await ps(n,r)}}async function ps(n,e,t){if(!In(e))throw e;n.Ea.add(1),await _r(n),n.Ra.set("Offline"),t||(t=()=>qu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(qt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ms(n)}))}function Qu(n,e){return e().catch((t=>ps(n,t,e)))}async function $s(n){const e=j(n),t=St(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:co;for(;$y(e);)try{const s=await vy(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Uy(e,s)}catch(s){await ps(e,s)}Ju(e)&&Yu(e)}function $y(n){return Qt(n)&&n.Ta.length<10}function Uy(n,e){n.Ta.push(e);const t=St(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Ju(n){return Qt(n)&&!St(n).x_()&&n.Ta.length>0}function Yu(n){St(n).start()}async function Fy(n){St(n).ra()}async function jy(n){const e=St(n);for(const t of n.Ta)e.ea(t.mutations)}async function By(n,e,t){const r=n.Ta.shift(),s=_o.from(r,e,t);await Qu(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await $s(n)}async function qy(n,e){e&&St(n).X_&&await(async function(r,s){if((function(a){return Tg(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();St(r).B_(),await Qu(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await $s(r)}})(n,e),Ju(n)&&Yu(n)}async function Kl(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),L(qt,"RemoteStore received new credentials");const r=Qt(t);t.Ea.add(3),await _r(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ms(t)}async function zy(n,e){const t=j(n);e?(t.Ea.delete(2),await Ms(t)):e||(t.Ea.add(2),await _r(t),t.Ra.set("Unknown"))}function Tn(n){return n.ma||(n.ma=(function(t,r,s){const i=j(t);return i.sa(),new Ry(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:Ly.bind(null,n),t_:Oy.bind(null,n),r_:Ny.bind(null,n),H_:My.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Ro(n)?Po(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ku(n))}))),n.ma}function St(n){return n.fa||(n.fa=(function(t,r,s){const i=j(t);return i.sa(),new Cy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Fy.bind(null,n),r_:qy.bind(null,n),ta:jy.bind(null,n),na:By.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await $s(n)):(await n.fa.stop(),n.Ta.length>0&&(L(qt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Co{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Co(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xo(n,e){if(et("AsyncQueue",`${e}: ${n}`),In(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class an{static emptySet(e){return new an(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=Kn(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new an;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ql{constructor(){this.ga=new ne(O.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class _n{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new _n(e,t,an.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Hy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Gy{constructor(){this.queries=Jl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=Jl(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new V(P.ABORTED,"Firestore shutting down"))}}function Jl(){return new Wt((n=>_u(n)),ks)}async function Xu(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Hy,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=xo(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ko(t)}async function Zu(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Wy(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&ko(t)}function Ky(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function ko(n){n.Ca.forEach((e=>{e.next()}))}var Qi,Yl;(Yl=Qi||(Qi={})).Ma="default",Yl.Cache="cache";class eh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qi.Cache}}/**
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
 */class th{constructor(e){this.key=e}}class nh{constructor(e){this.key=e}}class Qy{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=vu(e),this.tu=new an(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Ql,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const _=s.get(f),A=Ds(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;_&&A?_.data.isEqual(A.data)?C!==D&&(r.track({type:3,doc:A}),x=!0):this.su(_,A)||(r.track({type:2,doc:A}),x=!0,(u&&this.eu(A,u)>0||d&&this.eu(A,d)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),x=!0):_&&!A&&(r.track({type:1,doc:_}),x=!0,(u||d)&&(l=!0)),x&&(A?(a=a.add(A),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,m)=>(function(A,C){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:x})}};return D(A)-D(C)})(f.type,m.type)||this.eu(f.doc,m.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new _n(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ql,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new nh(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new th(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=G();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _n.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Do="SyncEngine";class Jy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Yy{constructor(e){this.key=e,this.hu=!1}}class Xy{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Wt((l=>_u(l)),ks),this.Iu=new Map,this.Eu=new Set,this.du=new ne(O.comparator),this.Au=new Map,this.Ru=new Eo,this.Vu={},this.mu=new Map,this.fu=yn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Zy(n,e,t=!0){const r=lh(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await rh(r,e,t,!0),s}async function e_(n,e){const t=lh(n);await rh(t,e,!0,!1)}async function rh(n,e,t,r){const s=await by(n.localStore,je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await t_(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Gu(n.remoteStore,s),l}async function t_(n,e,t,r,s){n.pu=(m,_,A)=>(async function(D,x,W,q){let Y=x.view.ru(W);Y.Cs&&(Y=await ql(D.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,Y))));const de=q&&q.targetChanges.get(x.targetId),Re=q&&q.targetMismatches.get(x.targetId)!=null,ce=x.view.applyChanges(Y,D.isPrimaryClient,de,Re);return Zl(D,x.targetId,ce.au),ce.snapshot})(n,m,_,A);const i=await ql(n.localStore,e,!0),a=new Qy(e,i.Qs),l=a.ru(i.documents),u=yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Zl(n,t,d.au);const f=new Jy(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function n_(n,e,t){const r=j(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ks(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wi(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ao(r.remoteStore,s.targetId),Ji(r,s.targetId)})).catch(wn)):(Ji(r,s.targetId),await Wi(r.localStore,s.targetId,!0))}async function r_(n,e){const t=j(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ao(t.remoteStore,r.targetId))}async function s_(n,e,t){const r=h_(n);try{const s=await(function(a,l){const u=j(a),d=te.now(),f=l.reduce(((A,C)=>A.add(C.key)),G());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let C=tt(),D=G();return u.Ns.getEntries(A,f).next((x=>{C=x,C.forEach(((W,q)=>{q.isValidDocument()||(D=D.add(W))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,C))).next((x=>{m=x;const W=[];for(const q of l){const Y=vg(q,m.get(q.key).overlayedDocument);Y!=null&&W.push(new Kt(q.key,Y,uu(Y.value.mapValue),Be.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,W,l)})).next((x=>{_=x;const W=x.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,x.batchId,W)}))})).then((()=>({batchId:_.batchId,changes:Eu(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new ne(H)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await vr(r,s.changes),await $s(r.remoteStore)}catch(s){const i=xo(s,"Failed to persist write");t.reject(i)}}async function sh(n,e){const t=j(n);try{const r=await yy(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?J(a.hu,14607):s.removedDocuments.size>0&&(J(a.hu,42227),a.hu=!1))})),await vr(t,r,e)}catch(r){await wn(r)}}function Xl(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=j(a);u.onlineState=l;let d=!1;u.queries.forEach(((f,m)=>{for(const _ of m.Sa)_.va(l)&&(d=!0)})),d&&ko(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i_(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ne(O.comparator);a=a.insert(i,Ee.newNoDocument(i,F.min()));const l=G().add(i),u=new Os(F.min(),new Map,new ne(H),a,l);await sh(r,u),r.du=r.du.remove(i),r.Au.delete(e),Vo(r)}else await Wi(r.localStore,e,!1).then((()=>Ji(r,e,t))).catch(wn)}async function o_(n,e){const t=j(n),r=e.batch.batchId;try{const s=await gy(t.localStore,e);oh(t,r,null),ih(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vr(t,s)}catch(s){await wn(s)}}async function a_(n,e,t){const r=j(n);try{const s=await(function(a,l){const u=j(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next((m=>(J(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);oh(r,e,t),ih(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vr(r,s)}catch(s){await wn(s)}}function ih(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function oh(n,e,t){const r=j(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ji(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||ah(n,r)}))}function ah(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ao(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Vo(n))}function Zl(n,e,t){for(const r of t)r instanceof th?(n.Ru.addReference(r.key,e),l_(n,r)):r instanceof nh?(L(Do,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||ah(n,r.key)):U(19791,{wu:r})}function l_(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(L(Do,"New document in limbo: "+t),n.Eu.add(r),Vo(n))}function Vo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new O(Z.fromString(e)),r=n.fu.next();n.Au.set(r,new Yy(t)),n.du=n.du.insert(t,r),Gu(n.remoteStore,new mt(je(mo(t.path)),r,"TargetPurposeLimboResolution",Rs.ce))}}async function vr(n,e,t){const r=j(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Io.As(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const f=j(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(d,(_=>R.forEach(_.Es,(A=>f.persistence.referenceDelegate.addReference(m,_.targetId,A))).next((()=>R.forEach(_.ds,(A=>f.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))))))}catch(m){if(!In(m))throw m;L(To,"Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const A=f.Ms.get(_),C=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(_,D)}}})(r.localStore,i))}async function c_(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){L(Do,"User change. New user:",e.toKey());const r=await Bu(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new V(P.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vr(t,r.Ls)}}function u_(n,e){const t=j(n),r=t.Au.get(e);if(r&&r.hu)return G().add(r.key);{let s=G();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function lh(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i_.bind(null,e),e.Pu.H_=Wy.bind(null,e.eventManager),e.Pu.yu=Ky.bind(null,e.eventManager),e}function h_(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a_.bind(null,e),e}class ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ns(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return my(this.persistence,new dy,e.initialUser,this.serializer)}Cu(e){return new ju(wo.mi,this.serializer)}Du(e){return new wy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ms.provider={build:()=>new ms};class d_ extends ms{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){J(this.persistence.referenceDelegate instanceof fs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Yg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new ju((r=>fs.mi(r,t)),this.serializer)}}class Yi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=c_.bind(null,this.syncEngine),await zy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Gy})()}createDatastore(e){const t=Ns(e.databaseInfo.databaseId),r=(function(i){return new Py(i)})(e.databaseInfo);return(function(i,a,l,u){return new ky(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new Vy(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xl(this.syncEngine,t,0)),(function(){return Gl.v()?new Gl:new Iy})())}createSyncEngine(e,t){return(function(s,i,a,l,u,d,f){const m=new Xy(s,i,a,l,u,d);return f&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=j(s);L(qt,"RemoteStore shutting down."),i.Ea.add(5),await _r(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Yi.provider={build:()=>new Yi};/**
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
 */class ch{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Pt="FirestoreClient";class f_{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=lo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(Pt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(Pt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xo(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ti(n,e){n.asyncQueue.verifyOperationInProgress(),L(Pt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bu(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ec(n,e){n.asyncQueue.verifyOperationInProgress();const t=await p_(n);L(Pt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Kl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Kl(e.remoteStore,s))),n._onlineComponents=e}async function p_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(Pt,"Using user provided OfflineComponentProvider");try{await Ti(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await Ti(n,new ms)}}else L(Pt,"Using default OfflineComponentProvider"),await Ti(n,new d_(void 0));return n._offlineComponents}async function uh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(Pt,"Using user provided OnlineComponentProvider"),await ec(n,n._uninitializedComponentsProvider._online)):(L(Pt,"Using default OnlineComponentProvider"),await ec(n,new Yi))),n._onlineComponents}function m_(n){return uh(n).then((e=>e.syncEngine))}async function hh(n){const e=await uh(n),t=e.eventManager;return t.onListen=Zy.bind(null,e.syncEngine),t.onUnlisten=n_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=e_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=r_.bind(null,e.syncEngine),t}function g_(n,e,t={}){const r=new Ye;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,d){const f=new ch({next:_=>{f.Nu(),a.enqueueAndForget((()=>Zu(i,m)));const A=_.docs.has(l);!A&&_.fromCache?d.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new eh(mo(l.path),f,{includeMetadataChanges:!0,qa:!0});return Xu(i,m)})(await hh(n),n.asyncQueue,e,t,r))),r.promise}function y_(n,e,t={}){const r=new Ye;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,d){const f=new ch({next:_=>{f.Nu(),a.enqueueAndForget((()=>Zu(i,m))),_.fromCache&&u.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new eh(l,f,{includeMetadataChanges:!0,qa:!0});return Xu(i,m)})(await hh(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function dh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const tc=new Map;/**
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
 */const fh="firestore.googleapis.com",nc=!0;class rc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fh,this.ssl=nc}else this.host=e.host,this.ssl=e.ssl??nc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qg)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dh(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Us{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Im;switch(r.type){case"firstParty":return new Pm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=tc.get(t);r&&(L("ComponentProvider","Removing Datastore"),tc.delete(t),r.terminate())})(this),Promise.resolve()}}function __(n,e,t,r={}){var d;n=Et(n,Us);const s=vn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Mc(`https://${l}`),$c("Firestore",!0)),i.host!==fh&&i.host!==l&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Ft(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=be.MOCK_USER;else{f=Jf(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(_)}n._authCredentials=new Tm(new Xc(f,m))}}/**
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
 */class An{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(pr(t,le._jsonSchema))return new le(e,r||null,new O(Z.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:ae("string",le._jsonSchemaVersion),referencePath:ae("string")};class bt extends An{constructor(e,t,r){super(e,t,mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function v_(n,e,...t){if(n=Ae(n),Zc("collection","path",e),n instanceof Us){const r=Z.fromString(e,...t);return gl(r),new bt(n,null,r)}{if(!(n instanceof le||n instanceof bt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return gl(r),new bt(n.firestore,null,r)}}function en(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=lo.newId()),Zc("doc","path",e),n instanceof Us){const r=Z.fromString(e,...t);return ml(r),new le(n,null,new O(r))}{if(!(n instanceof le||n instanceof bt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return ml(r),new le(n.firestore,n instanceof bt?n.converter:null,new O(r))}}/**
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
 */const sc="AsyncQueue";class ic{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zu(this,"async_queue_retry"),this._c=()=>{const r=Ii();r&&L(sc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ii();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ii();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ye;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!In(e))throw e;L(sc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,et("INTERNAL UNHANDLED ERROR: ",oc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Co.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:oc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function oc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class br extends Us{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ic,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ic(e),this._firestoreClient=void 0,await e}}}function b_(n,e){const t=typeof n=="object"?n:Bc(),r=typeof n=="string"?n:os,s=oo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kf("firestore");i&&__(s,...i)}return s}function Lo(n){if(n._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||E_(n),n._firestoreClient}function E_(n){var r,s,i;const e=n._freezeSettings(),t=(function(l,u,d,f){return new zm(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dh(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new f_(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(ye.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pr(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:ae("string",De._jsonSchemaVersion),bytes:ae("string")};/**
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
 */class Oo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ph{constructor(e){this._methodName=e}}/**
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
 */class ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ze._jsonSchemaVersion}}static fromJSON(e){if(pr(e,ze._jsonSchema))return new ze(e.latitude,e.longitude)}}ze._jsonSchemaVersion="firestore/geoPoint/1.0",ze._jsonSchema={type:ae("string",ze._jsonSchemaVersion),latitude:ae("number"),longitude:ae("number")};/**
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
 */class He{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:He._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pr(e,He._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new He(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}He._jsonSchemaVersion="firestore/vectorValue/1.0",He._jsonSchema={type:ae("string",He._jsonSchemaVersion),vectorValues:ae("object")};/**
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
 */const w_=/^__.*__$/;class I_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gr(e,this.data,t,this.fieldTransforms)}}function mh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:n})}}class No{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new No({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return gs(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(mh(this.Ac)&&w_.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class T_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ns(e)}Cc(e,t,r,s=!1){return new No({Ac:e,methodName:t,Dc:r,path:ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(n){const e=n._freezeSettings(),t=Ns(n._databaseId);return new T_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function A_(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);vh("Data must be an object, but it was:",a,r);const l=yh(r,a);let u,d;if(i.merge)u=new Le(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=P_(e,m,t);if(!a.contains(_))throw new V(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);C_(f,_)||f.push(_)}u=new Le(f),d=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,d=a.fieldTransforms;return new I_(new ke(l),u,d)}function S_(n,e,t,r=!1){return Mo(t,n.Cc(r?4:3,e))}function Mo(n,e){if(_h(n=Ae(n)))return vh("Unsupported field value:",e,n),yh(n,e);if(n instanceof ph)return(function(r,s){if(!mh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=Mo(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=te.fromDate(r);return{timestampValue:ds(s.serializer,i)}}if(r instanceof te){const i=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ds(s.serializer,i)}}if(r instanceof ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:Vu(s.serializer,r._byteString)};if(r instanceof le){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof He)return(function(a,l){return{mapValue:{fields:{[lu]:{stringValue:cu},[as]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return go(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ps(r)}`)})(n,e)}function yh(n,e){const t={};return nu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gt(n,((r,s)=>{const i=Mo(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function _h(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof ze||n instanceof De||n instanceof le||n instanceof ph||n instanceof He)}function vh(n,e,t){if(!_h(t)||!eu(t)){const r=Ps(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function P_(n,e,t){if((e=Ae(e))instanceof Oo)return e._internalPath;if(typeof e=="string")return bh(n,e);throw gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const R_=new RegExp("[~\\*/\\[\\]]");function bh(n,e,t){if(e.search(R_)>=0)throw gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Oo(...e.split("."))._internalPath}catch{throw gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(P.INVALID_ARGUMENT,l+n+u)}function C_(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Eh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($o("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class x_ extends Eh{data(){return super.data()}}function $o(n,e){return typeof e=="string"?bh(n,e):e instanceof Oo?e._internalPath:e._delegate._internalPath}/**
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
 */function k_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uo{}class D_ extends Uo{}function V_(n,e,...t){let r=[];e instanceof Uo&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Fo)).length,l=i.filter((u=>u instanceof Fs)).length;if(a>1||a>0&&l>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Fs extends D_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Fs(e,t,r)}_apply(e){const t=this._parse(e);return wh(e._query,t),new An(e.firestore,e.converter,ji(e._query,t))}_parse(e){const t=gh(e.firestore);return(function(i,a,l,u,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lc(m,f);const C=[];for(const D of m)C.push(ac(u,i,D));_={arrayValue:{values:C}}}else _=ac(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lc(m,f),_=S_(l,a,m,f==="in"||f==="not-in");return oe.create(d,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function L_(n,e,t){const r=e,s=$o("where",n);return Fs._create(s,r,t)}class Fo extends Uo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fo(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)wh(a,u),a=ji(a,u)})(e._query,t),new An(e.firestore,e.converter,ji(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ac(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yu(e)&&t.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!O.isDocumentKey(r))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tl(n,new O(r))}if(t instanceof le)return Tl(n,t._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ps(t)}.`)}function lc(n,e){if(!Array.isArray(n)||n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wh(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class O_{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[as].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>se(a.doubleValue)));return new He(t)}convertGeoPoint(e){return new ze(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ir(e));default:return null}}convertTimestamp(e){const t=It(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);J(Uu(r),9688,{name:e});const s=new or(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function N_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ut extends Eh{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($o("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ut._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ut._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ut._jsonSchema={type:ae("string",Ut._jsonSchemaVersion),bundleSource:ae("string","DocumentSnapshot"),bundleName:ae("string"),bundle:ae("string")};class Xr extends Ut{data(e={}){return super.data(e)}}class ln{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Xr(this._firestore,this._userDataWriter,r.key,r,new Jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new Xr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new Xr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:M_(l.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function M_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */function cc(n){n=Et(n,le);const e=Et(n.firestore,br);return g_(Lo(e),n._key).then((t=>F_(e,n,t)))}ln._jsonSchemaVersion="firestore/querySnapshot/1.0",ln._jsonSchema={type:ae("string",ln._jsonSchemaVersion),bundleSource:ae("string","QuerySnapshot"),bundleName:ae("string"),bundle:ae("string")};class Ih extends O_{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function $_(n){n=Et(n,An);const e=Et(n.firestore,br),t=Lo(e),r=new Ih(e);return k_(n._query),y_(t,n._query).then((s=>new ln(e,r,n,s)))}function Ai(n,e,t){n=Et(n,le);const r=Et(n.firestore,br),s=N_(n.converter,e);return Th(r,[A_(gh(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Be.none())])}function U_(n){return Th(Et(n.firestore,br),[new yo(n._key,Be.none())])}function Th(n,e){return(function(r,s){const i=new Ye;return r.asyncQueue.enqueueAndForget((async()=>s_(await m_(r),s,i))),i.promise})(Lo(n),e)}function F_(n,e,t){const r=t.docs.get(e._key),s=new Ih(n);return new Ut(n,s,e._key,r,new Jn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){En=s})(bn),dn(new jt("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new br(new Am(r.getProvider("auth-internal")),new Rm(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new or(d.options.projectId,f)})(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),_t(hl,dl,e),_t(hl,dl,"esm2020")})();function Ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j_=Ah,Sh=new dr("auth","Firebase",Ah());/**
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
 */const ys=new so("@firebase/auth");function B_(n,...e){ys.logLevel<=z.WARN&&ys.warn(`Auth (${bn}): ${n}`,...e)}function Zr(n,...e){ys.logLevel<=z.ERROR&&ys.error(`Auth (${bn}): ${n}`,...e)}/**
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
 */function Me(n,...e){throw jo(n,...e)}function Ge(n,...e){return jo(n,...e)}function Ph(n,e,t){const r={...j_(),[e]:t};return new dr("auth","Firebase",r).create(e,{appName:n.name})}function Xe(n){return Ph(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Sh.create(n,...e)}function $(n,e,...t){if(!n)throw jo(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zr(e),new Error(e)}function nt(n,e){n||Qe(e)}/**
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
 */function Xi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function q_(){return uc()==="http:"||uc()==="https:"}function uc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q_()||np()||"connection"in navigator)?navigator.onLine:!0}function H_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Er{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||rp()}get(){return z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bo(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Rh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const W_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],K_=new Er(3e4,6e4);function Rt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ct(n,e,t,r,s={}){return Ch(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=fr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return tp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&vn(n.emulatorConfig.host)&&(d.credentials="include"),Rh.fetch()(await xh(n,n.config.apiHost,t,l),d)})}async function Ch(n,e,t){n._canInitEmulator=!1;const r={...G_,...e};try{const s=new J_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gr(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ph(n,f,d);Me(n,f)}}catch(s){if(s instanceof rt)throw s;Me(n,"network-request-failed",{message:String(s)})}}async function wr(n,e,t,r,s={}){const i=await Ct(n,e,t,r,s);return"mfaPendingCredential"in i&&Me(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function xh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Bo(n.config,s):`${n.config.apiScheme}://${s}`;return W_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Q_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class J_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),K_.get())})}}function Gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function hc(n){return n!==void 0&&n.enterprise!==void 0}class Y_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Q_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function X_(n,e){return Ct(n,"GET","/v2/recaptchaConfig",Rt(n,e))}/**
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
 */async function Z_(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function _s(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function nr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ev(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=qo(r);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:nr(Si(s.auth_time)),issuedAtTime:nr(Si(s.iat)),expirationTime:nr(Si(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Si(n){return Number(n)*1e3}function qo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vc(t);return s?JSON.parse(s):(Zr("Failed to decode base64 JWT payload"),null)}catch(s){return Zr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dc(n){const e=qo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&tv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class nv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vs(n){var m;const e=n.auth,t=await n.getIdToken(),r=await ur(n,_s(e,{idToken:t}));$(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?kh(s.providerUserInfo):[],a=sv(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function rv(n){const e=Ae(n);await vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function iv(n,e){const t=await Ch(n,{},async()=>{const r=fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await xh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&vn(n.emulatorConfig.host)&&(u.credentials="include"),Rh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ov(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",Rt(n,e))}/**
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
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=dc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await iv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new cn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function ut(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ev(this,e)}reload(){return rv(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await ur(this,Z_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:A,providerData:C,stsTokenManager:D}=t;$(m&&D,e,"internal-error");const x=cn.fromJSON(this.name,D);$(typeof m=="string",e,"internal-error"),ut(r,e.name),ut(s,e.name),$(typeof _=="boolean",e,"internal-error"),$(typeof A=="boolean",e,"internal-error"),ut(i,e.name),ut(a,e.name),ut(l,e.name),ut(u,e.name),ut(d,e.name),ut(f,e.name);const W=new Oe({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:f});return C&&Array.isArray(C)&&(W.providerData=C.map(q=>({...q}))),u&&(W._redirectEventId=u),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new cn;s.updateFromServerResponse(t);const i=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new cn;l.updateFromIdToken(r);const u=new Oe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const fc=new Map;function Je(n){nt(n instanceof Function,"Expected a class definition");let e=fc.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fc.set(n,e),e)}/**
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
 */class Dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Dh.type="NONE";const pc=Dh;/**
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
 */function es(n,e,t){return`firebase:${n}:${e}:${t}`}class un{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=es(this.userKey,s.apiKey,i),this.fullPersistenceKey=es("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _s(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new un(Je(pc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Je(pc);const a=es(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const _=await _s(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Oe._fromGetAccountInfoResponse(e,_,f)}else m=Oe._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new un(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new un(i,e,r))}}/**
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
 */function mc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($h(e))return"Blackberry";if(Uh(e))return"Webos";if(Lh(e))return"Safari";if((e.includes("chrome/")||Oh(e))&&!e.includes("edge/"))return"Chrome";if(Mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vh(n=we()){return/firefox\//i.test(n)}function Lh(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oh(n=we()){return/crios\//i.test(n)}function Nh(n=we()){return/iemobile/i.test(n)}function Mh(n=we()){return/android/i.test(n)}function $h(n=we()){return/blackberry/i.test(n)}function Uh(n=we()){return/webos/i.test(n)}function zo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function av(n=we()){var e;return zo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function lv(){return sp()&&document.documentMode===10}function Fh(n=we()){return zo(n)||Mh(n)||Uh(n)||$h(n)||/windows phone/i.test(n)||Nh(n)}/**
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
 */function jh(n,e=[]){let t;switch(n){case"Browser":t=mc(we());break;case"Worker":t=`${mc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bn}/${r}`}/**
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
 */class cv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uv(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",Rt(n,e))}/**
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
 */const hv=6;class dv{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _s(this,{idToken:e}),r=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Xe(this));const t=e?Ae(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uv(this),t=new dv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ov(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&B_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jt(n){return Ae(n)}class gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=dp(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pv(n){js=n}function Bh(n){return js.loadJS(n)}function mv(){return js.recaptchaEnterpriseScript}function gv(){return js.gapiScript}function yv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _v{constructor(){this.enterprise=new vv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bv="recaptcha-enterprise",qh="NO_RECAPTCHA";class Ev{constructor(e){this.type=bv,this.auth=Jt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{X_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Y_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;hc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(qh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _v().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&hc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=mv();u.length!==0&&(u+=l),Bh(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function yc(n,e,t,r=!1,s=!1){const i=new Ev(n);let a;if(s)a=qh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function eo(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await yc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await yc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function wv(n,e){const t=oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ft(i,e??{}))return s;Me(s,"already-initialized")}return t.initialize({options:e})}function Iv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tv(n,e,t){const r=Jt(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zh(e),{host:a,port:l}=Av(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(Ft(d,r.config.emulator)&&Ft(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vn(a)?(Mc(`${i}//${a}${u}`),$c("Auth",!0)):Sv()}function zh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Av(n){const e=zh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_c(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_c(a)}}}function _c(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ho{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function Pv(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Rv(n,e){return wr(n,"POST","/v1/accounts:signInWithPassword",Rt(n,e))}/**
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
 */async function Cv(n,e){return wr(n,"POST","/v1/accounts:signInWithEmailLink",Rt(n,e))}async function xv(n,e){return wr(n,"POST","/v1/accounts:signInWithEmailLink",Rt(n,e))}/**
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
 */class hr extends Ho{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eo(e,t,"signInWithPassword",Rv);case"emailLink":return Cv(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eo(e,r,"signUpPassword",Pv);case"emailLink":return xv(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hn(n,e){return wr(n,"POST","/v1/accounts:signInWithIdp",Rt(n,e))}/**
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
 */const kv="http://localhost";class zt extends Ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new zt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return hn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hn(e,t)}buildRequest(){const e={requestUri:kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fr(t)}return e}}/**
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
 */function Dv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vv(n){const e=Hn(Gn(n)).link,t=e?Hn(Gn(e)).deep_link_id:null,r=Hn(Gn(n)).deep_link_id;return(r?Hn(Gn(r)).link:null)||r||t||e||n}class Go{constructor(e){const t=Hn(Gn(e)),r=t.apiKey??null,s=t.oobCode??null,i=Dv(t.mode??null);$(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Vv(e);try{return new Go(t)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,t){return hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Go.parseLink(t);return $(r,"argument-error"),hr._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Ir{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class dt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ft extends Ir{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */class pt extends Ir{constructor(){super("twitter.com")}static credential(e,t){return zt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
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
 */async function Lv(n,e){return wr(n,"POST","/v1/accounts:signUp",Rt(n,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Oe._fromIdTokenResponse(e,r,s),a=vc(r);return new Ht({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vc(r);return new Ht({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bs extends rt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bs(e,t,r,s)}}function Gh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(n,i,e,r):i})}async function Ov(n,e,t=!1){const r=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",r)}/**
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
 */async function Nv(n,e,t=!1){const{auth:r}=n;if(xe(r.app))return Promise.reject(Xe(r));const s="reauthenticate";try{const i=await ur(n,Gh(r,s,e,n),t);$(i.idToken,r,"internal-error");const a=qo(i.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(n.uid===l,r,"user-mismatch"),Ht._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
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
 */async function Wh(n,e,t=!1){if(xe(n.app))return Promise.reject(Xe(n));const r="signIn",s=await Gh(n,r,e),i=await Ht._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Mv(n,e){return Wh(Jt(n),e)}/**
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
 */async function Kh(n){const e=Jt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $v(n,e,t){if(xe(n.app))return Promise.reject(Xe(n));const r=Jt(n),a=await eo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Kh(n),u}),l=await Ht._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Uv(n,e,t){return xe(n.app)?Promise.reject(Xe(n)):Mv(Ae(n),Sn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kh(n),r})}function Fv(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function jv(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function Bv(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function qv(n){return Ae(n).signOut()}const Es="__sak";/**
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
 */class Qh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zv=1e3,Hv=10;class Jh extends Qh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);lv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jh.type="LOCAL";const Gv=Jh;/**
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
 */class Yh extends Qh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yh.type="SESSION";const Xh=Yh;/**
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
 */function Wv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await Wv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
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
 */function Wo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Wo("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function We(){return window}function Qv(n){We().location.href=n}/**
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
 */function Zh(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Jv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Xv(){return Zh()?self:null}/**
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
 */const ed="firebaseLocalStorageDb",Zv=1,ws="firebaseLocalStorage",td="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qs(n,e){return n.transaction([ws],e?"readwrite":"readonly").objectStore(ws)}function eb(){const n=indexedDB.deleteDatabase(ed);return new Tr(n).toPromise()}function to(){const n=indexedDB.open(ed,Zv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ws,{keyPath:td})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ws)?e(r):(r.close(),await eb(),e(await to()))})})}async function bc(n,e,t){const r=qs(n,!0).put({[td]:e,value:t});return new Tr(r).toPromise()}async function tb(n,e){const t=qs(n,!1).get(e),r=await new Tr(t).toPromise();return r===void 0?null:r.value}function Ec(n,e){const t=qs(n,!0).delete(e);return new Tr(t).toPromise()}const nb=800,rb=3;class nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await to(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(Xv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Jv(),!this.activeServiceWorker)return;this.sender=new Kv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await to();return await bc(e,Es,"1"),await Ec(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ec(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qs(s,!1).getAll();return new Tr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nd.type="LOCAL";const sb=nd;new Er(3e4,6e4);/**
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
 */function ib(n,e){return e?Je(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ko extends Ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ob(n){return Wh(n.auth,new Ko(n),n.bypassAuthState)}function ab(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Nv(t,new Ko(n),n.bypassAuthState)}async function lb(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Ov(t,new Ko(n),n.bypassAuthState)}/**
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
 */class rd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ob;case"linkViaPopup":case"linkViaRedirect":return lb;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:Me(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cb=new Er(2e3,1e4);class on extends rd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cb.get())};e()}}on.currentPopupAction=null;/**
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
 */const ub="pendingRedirect",ts=new Map;class hb extends rd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ts.get(this.auth._key());if(!e){try{const r=await db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ts.set(this.auth._key(),e)}return this.bypassAuthState||ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function db(n,e){const t=mb(e),r=pb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function fb(n,e){ts.set(n._key(),e)}function pb(n){return Je(n._redirectPersistence)}function mb(n){return es(ub,n.config.apiKey,n.name)}async function gb(n,e,t=!1){if(xe(n.app))return Promise.reject(Xe(n));const r=Jt(n),s=ib(r,e),a=await new hb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yb=600*1e3;class _b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(wc(e))}saveEventToCache(e){this.cachedEventUids.add(wc(e)),this.lastProcessedEventTime=Date.now()}}function wc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sd(n);default:return!1}}/**
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
 */async function bb(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
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
 */const Eb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function Ib(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bb(n);for(const t of e)try{if(Tb(t))return}catch{}Me(n,"unauthorized-domain")}function Tb(n){const e=Xi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wb.test(t))return!1;if(Eb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ab=new Er(3e4,6e4);function Ic(){const n=We().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sb(n){return new Promise((e,t)=>{var s,i,a;function r(){Ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ic(),t(Ge(n,"network-request-failed"))},timeout:Ab.get()})}if((i=(s=We().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=We().gapi)!=null&&a.load)r();else{const l=yv("iframefcb");return We()[l]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},Bh(`${gv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw ns=null,e})}let ns=null;function Pb(n){return ns=ns||Sb(n),ns}/**
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
 */const Rb=new Er(5e3,15e3),Cb="__/auth/iframe",xb="emulator/auth/iframe",kb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Db=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bo(e,xb):`https://${n.config.authDomain}/${Cb}`,r={apiKey:e.apiKey,appName:n.name,v:bn},s=Db.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${fr(r).slice(1)}`}async function Lb(n){const e=await Pb(n),t=We().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Vb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=We().setTimeout(()=>{i(a)},Rb.get());function u(){We().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nb=500,Mb=600,$b="_blank",Ub="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fb(n,e,t,r=Nb,s=Mb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ob,width:r.toString(),height:s.toString(),top:i,left:a},d=we().toLowerCase();t&&(l=Oh(d)?$b:t),Vh(d)&&(e=e||Ub,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[A,C])=>`${_}${A}=${C},`,"");if(av(d)&&l!=="_self")return jb(e||"",l),new Tc(null);const m=window.open(e||"",l,f);$(m,n,"popup-blocked");try{m.focus()}catch{}return new Tc(m)}function jb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Bb="__/auth/handler",qb="emulator/auth/handler",zb=encodeURIComponent("fac");async function Ac(n,e,t,r,s,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bn,eventId:s};if(e instanceof Hh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",hp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Ir){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${zb}=${encodeURIComponent(u)}`:"";return`${Hb(n)}?${fr(l).slice(1)}${d}`}function Hb({config:n}){return n.emulator?Bo(n,qb):`https://${n.authDomain}/${Bb}`}/**
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
 */const Pi="webStorageSupport";class Gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xh,this._completeRedirectFn=gb,this._overrideRedirectResult=fb}async _openPopup(e,t,r,s){var a;nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ac(e,t,r,Xi(),s);return Fb(e,i,Wo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ac(e,t,r,Xi(),s);return Qv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Lb(e),r=new _b(e);return t.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pi,{type:Pi},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Pi];i!==void 0&&t(!!i),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ib(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||Lh()||zo()}}const Wb=Gb;var Sc="@firebase/auth",Pc="1.12.0";/**
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
 */class Kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jb(n){dn(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jh(n)},d=new fv(r,s,i,u);return Iv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dn(new jt("auth-internal",e=>{const t=Jt(e.getProvider("auth").getImmediate());return(r=>new Kb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Sc,Pc,Qb(n)),_t(Sc,Pc,"esm2020")}/**
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
 */const Yb=300,Xb=Nc("authIdTokenMaxAge")||Yb;let Rc=null;const Zb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xb)return;const s=t==null?void 0:t.token;Rc!==s&&(Rc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eE(n=Bc()){const e=oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wv(n,{popupRedirectResolver:Wb,persistence:[sb,Gv,Xh]}),r=Nc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zb(i.toString());jv(t,a,()=>a(t.currentUser)),Fv(t,l=>a(l))}}const s=Lc("auth");return s&&Tv(t,`http://${s}`),t}function tE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",tE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jb("Browser");var nE="firebase",rE="12.7.0";/**
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
 */_t(nE,rE,"app");const sE={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},id=jc(sE),Nt=b_(id),qn=eE(id),Q={_masterKey:null,async initDB(){return console.log("[STORAGE] Sistema listo. Usando Firebase Cloud (Adapter v2)."),!0},async authenticate(n,e){try{return(await Uv(qn,n,e)).user}catch(t){throw console.error("[AUTH] Error:",t.code),new Error("Credenciales inválidas o error de conexión.")}},async signup(n,e){try{const t=await $v(qn,n,e);return await Ai(en(Nt,"users",t.user.uid),{email:n,createdAt:new Date().toISOString()}),t.user}catch(t){throw new Error("Error en registro: "+t.message)}},logout(){return this._masterKey=null,qv(qn)},getCurrentUser(){return qn.currentUser},onAuthStateChanged(n){return Bv(qn,n)},async save(n,e){const t=this.getCurrentUser();if(!t)throw new Error("Usuario no autenticado.");const r=JSON.parse(JSON.stringify(e));if(r.userId=t.uid,console.log(`[STORAGE] Procesando guardado en [${n}] ID: ${r.id}`),n==="doc"&&Array.isArray(r.content)&&r.content.forEach(s=>{if(Array.isArray(s.value)&&s.value.some(i=>Array.isArray(i))){console.log(`[STORAGE] Adaptando tabla para Firestore: ${s.fieldId}`);const i={};s.value.forEach((a,l)=>{i[l]=a}),s.value=i,s.storageMode="nested_map"}}),n==="doc"){const s=await this.getOne("tpl",r.templateId);if(s&&s.encrypted){if(!this._masterKey)throw new Error("Se requiere Frase Maestra para guardar este documento.");try{r.content=await this.encryptData(r.content),r.isEncrypted=!0}catch(i){throw new Error("Fallo en el cifrado local: "+i.message)}}}try{return await Ai(en(Nt,n,r.id),r),!0}catch(s){throw console.error("Error Firestore:",s),new Error("Error al guardar en la nube: "+s.message)}},async getOne(n,e){if(!e)return null;try{const t=en(Nt,n,e),r=await cc(t);if(r.exists()){let s=r.data();if(s.isEncrypted)if(this._masterKey)try{s.content=await this.decryptData(s.content)}catch{s.decryptionError=!0,s.content=[]}else s.decryptionError=!0,s.content=[];return s=this._hydrateDocument(s),s}else return null}catch(t){return console.error("[STORAGE] Error getOne:",t),null}},async getAll(n){const e=this.getCurrentUser();if(!e)return[];try{const t=V_(v_(Nt,n),L_("userId","==",e.uid)),r=await $_(t),s=[];for(const i of r.docs){let a=i.data();if(a.isEncrypted&&this._masterKey)try{a.content=await this.decryptData(a.content)}catch{a.decryptionError=!0}a=this._hydrateDocument(a),s.push(a)}return s.sort((i,a)=>a.id.localeCompare(i.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(n,e){try{await U_(en(Nt,n,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(n){return n&&Array.isArray(n.content)&&n.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,r)=>Number(t)-Number(r)).map(t=>e.value[t]),delete e.storageMode)}),n},async setMasterKey(n){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(n),"PBKDF2",!1,["deriveKey"]);this._masterKey=await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async encryptData(n){if(!this._masterKey)throw new Error("Frase maestra no inicializada.");const e=new TextEncoder,t=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:t},this._masterKey,e.encode(JSON.stringify(n)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(r))),iv:btoa(String.fromCharCode(...t))}},async decryptData(n){if(!this._masterKey)throw new Error("Frase maestra no inicializada.");const e=new Uint8Array(atob(n.iv).split("").map(s=>s.charCodeAt(0))),t=new Uint8Array(atob(n.ciphertext).split("").map(s=>s.charCodeAt(0))),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:e},this._masterKey,t);return JSON.parse(new TextDecoder().decode(r))},async hasSecurityConfigured(){const n=this.getCurrentUser();return n?(await cc(en(Nt,"security",n.uid))).exists():!1},async saveSecurityVerifier(n){const e=this.getCurrentUser();return await Ai(en(Nt,"security",e.uid),{userId:e.uid,verifier:n,updatedAt:new Date().toISOString()}),!0},async changeMasterPhrase(n,e){const t=this._masterKey;try{await this.setMasterKey(n);const s=(await this.getAll("doc")).filter(d=>d.isEncrypted),i=new TextEncoder,a=await crypto.subtle.importKey("raw",i.encode(e),"PBKDF2",!1,["deriveKey"]),l=await crypto.subtle.deriveKey({name:"PBKDF2",salt:i.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},a,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"]);for(let d of s){const f=d.content;this._masterKey=l,d.content=await this.encryptData(f),await this.save("doc",d)}this._masterKey=l;const u=await this.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(u),{success:!0}}catch{throw this._masterKey=t,new Error("Fallo en el cambio de frase.")}}},iE={validatePassword(n){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(n)},async signup(n,e){if(console.log("[DEBUG] AUTH: Procesando registro para",n),e.length<8)throw new Error("La contraseña debe tener 8+ caracteres.");const t={id:`usr_${Date.now()}`,email:n,password:e,createdAt:new Date().toISOString()};await Q.save("users",t);const r={id:t.id,email:t.email,name:n.split("@")[0]};return localStorage.setItem("mg_session",JSON.stringify(r)),r},async login(n,e){return await Q.authenticate(n,e)}},no={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){console.log("[DEBUG] AUTH-UI: Renderizando Login Form."),this.appContent.style.display="none",this.container.style.display="block",this.container.innerHTML=`
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
                            <input type="email" id="email-l" class="form-control" placeholder="Correo">
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" id="pass-l" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-l"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <button id="btn-login" class="btn btn-primary w-100">Entrar</button>
                    </div>
                    <div class="tab-pane fade" id="s-pane">
                        <input type="email" id="email-s" class="form-control mb-2" placeholder="Correo">
                        <div class="input-group mb-2">
                            <input type="password" id="pass-s" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-s"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <small class="text-muted d-block mb-3">8+ caracteres, Mayúscula, Número y Símbolo.</small>
                        <button id="btn-signup" class="btn btn-success w-100">Registrarse</button>
                    </div>
                </div>
                <div id="auth-err" class="alert alert-danger mt-3 small" style="display:none;"></div>
            </div>
        </div>`,this._bindAuthEvents()},_bindAuthEvents(){document.getElementById("btn-login").onclick=async()=>{console.log("[DEBUG] AUTH-UI: Click en Login.");const n=document.getElementById("email-l").value,e=document.getElementById("pass-l").value;try{await Q.authenticate(n,e),console.log("[DEBUG] AUTH-UI: Login Exitoso. Recargando..."),location.reload()}catch(t){console.error("[ERROR] AUTH-UI: Login fallido",t),this._showError(t.message)}},document.getElementById("btn-signup").onclick=async()=>{console.log("[DEBUG] AUTH-UI: Click en Signup.");const n=document.getElementById("email-s").value,e=document.getElementById("pass-s").value;if(!iE.validatePassword(e))return this._showError("La contraseña no cumple los requisitos de seguridad.");try{await Q.signup(n,e),console.log("[DEBUG] AUTH-UI: Registro Exitoso. Recargando..."),location.reload()}catch(t){console.error("[ERROR] AUTH-UI: Registro fallido",t),this._showError(t.message)}}},initLogout(){const n=document.getElementById("btn-logout-link");n&&(n.onclick=async e=>{e.preventDefault(),console.log("[AuthUI] Iniciando cierre de sesión...");try{await Q.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},initChangePassword(){const n=document.getElementById("btn-change-pass");n&&(n.onclick=async()=>{alert("Funcionalidad en mantenimiento durante la migración a la nube.")})},_showError(n){const e=document.getElementById("auth-err");e.textContent=n,e.style.display="block"}},Qo={dragSrcEl:null,init(n,e=null,t=null){n.setAttribute("draggable","false"),n.addEventListener("mousedown",r=>{e?r.target.closest(e)?n.setAttribute("draggable","true"):n.setAttribute("draggable","false"):n.setAttribute("draggable","true")}),n.addEventListener("mouseup",()=>{n.setAttribute("draggable","false")}),n.addEventListener("dragstart",r=>this._handleDragStart(r,n)),n.addEventListener("dragend",r=>this._handleDragEnd(r,n)),n.addEventListener("dragover",r=>this._handleDragOver(r,n)),n.addEventListener("dragenter",r=>this._handleDragEnter(r,n)),n.addEventListener("dragleave",r=>this._handleDragLeave(r,n)),n.addEventListener("drop",r=>this._handleDrop(r,n,t))},_handleDragStart(n,e){if(e.getAttribute("draggable")==="false"){n.preventDefault();return}this.dragSrcEl=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/html",e.innerHTML),e.classList.add("opacity-50","border-primary")},_handleDragEnd(n,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(n,e){return n.preventDefault&&n.preventDefault(),n.dataTransfer.dropEffect="move",e.classList.add("border-top-primary-3"),!1},_handleDrop(n,e,t){if(n.stopPropagation&&n.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const r=e.parentNode,s=e.getBoundingClientRect(),i=n.clientY-s.top,a=e.clientHeight/2;i>a?r.insertBefore(this.dragSrcEl,e.nextSibling):r.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(n){n&&Array.from(n.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},od={itemsPerPage:5,currentPage:1,currentSearch:"",canvas:null,currentId:null,init(){this.cacheDOM(),this.bindEvents(),this.renderSidebarElements(),this.renderList()},cacheDOM(){this.listView=document.getElementById("designer-list-view"),this.editorView=document.getElementById("designer-editor-view"),this.tableBody=document.getElementById("tpl-table-body"),this.pagination=document.getElementById("tpl-pagination"),this.searchInput=document.getElementById("tpl-search"),this.canvas=document.getElementById("designer-canvas")},bindEvents(){document.getElementById("btn-go-create-tpl").onclick=()=>this.showEditor(),document.getElementById("btn-back-tpl-list").onclick=()=>this.showList(),this.searchInput.addEventListener("input",e=>{this.currentSearch=e.target.value.toLowerCase(),this.currentPage=1,this.renderList()}),document.getElementById("btn-save-template").onclick=()=>this.saveTemplate();const n=document.getElementById("tpl-category");n&&(n.onchange=e=>{const t=e.target.options[e.target.selectedIndex].dataset.icon;document.getElementById("tpl-icon").value=t})},renderSidebarElements(){const n=document.getElementById("tpl-elements");n.innerHTML=Object.entries(Ve).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-grow-1 py-2" id="add-${e}" style="min-width: 140px;">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
           </button>`).join(""),Object.keys(Ve).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._wrapAndAppend(t)}})},_wrapAndAppend(n){const e=document.createElement("div");return e.className="designer-item-wrapper d-flex align-items-stretch mb-2 bg-white border rounded shadow-sm",e.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="comp-content"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(n),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),Qo.init(e,".drag-handle"),this.canvas.appendChild(e),e},async saveTemplate(){var i;console.log("[DEBUG] DESIGNER: Intentando guardar plantilla..."),this.canvas||this.cacheDOM();const n=document.getElementById("tpl-title").value.trim(),t=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(a=>{const l=a.querySelector("#comp-content");return l?l.firstElementChild:null}).filter(a=>a&&a.tagName.toUpperCase().startsWith("SETTING-")&&typeof a.getData=="function");if(t.length===0)return alert("El diseño está vacío");const r=((i=document.getElementById("tpl-encrypted"))==null?void 0:i.checked)||!1;console.log(`[DEBUG] DESIGNER: Flag de cifrado capturado: ${r}`);const s={id:this.currentId||`tpl_${Date.now()}`,title:n,description:document.getElementById("tpl-description").value,category:document.getElementById("tpl-category").value,icon:document.getElementById("tpl-icon").value,encrypted:document.getElementById("tpl-encrypted").checked,elements:t.map(a=>a.getData())};await Q.save("tpl",s),console.log("[DEBUG] DESIGNER: Plantilla guardada en DB."),alert("Plantilla guardada correctamente"),this.showList(),this.renderList()},async loadTemplate(n){const e=await Q.getOne("tpl",n);e&&(this.showEditor(),this.currentId=e.id,document.getElementById("tpl-title").value=e.title,document.getElementById("tpl-description").value=e.description||"",document.getElementById("tpl-category").value=e.category,document.getElementById("tpl-icon").value=e.icon,document.getElementById("tpl-encrypted").checked=!!e.encrypted,this.canvas.innerHTML="",e.elements.forEach(t=>{const r=document.createElement(t.tag);r.setData&&r.setData(t),this._wrapAndAppend(r)}))},async renderList(){const e=(await Q.getAll("tpl")).filter(t=>t.title.toLowerCase().includes(this.currentSearch));this.tableBody.innerHTML=e.map(t=>`
        <tr class="align-middle">
            <td class="text-center py-3"><h3>${t.icon}</h3></td>
            <td><span class="badge rounded-pill bg-light text-dark border px-3">${t.category}</span></td>
            <td>
              <div class="fw-bold">${t.title} ${t.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" style="font-size: 0.7rem;"></i>':""}</div>
              <div class="text-muted small">${t.description||""}</div>
            </td>
            <td class="text-end pe-3">
              <div class="btn-group shadow-sm border rounded">
                <button class="btn btn-sm btn-white btn-create-doc border-end" data-id="${t.id}" title="Crear Documento">
                    <i class="fa-solid fa-file-circle-plus text-success"></i>
                </button>
                
                <button class="btn btn-sm btn-white btn-edit" data-id="${t.id}" title="Editar Plantilla">
                    <i class="fa-solid fa-pen-to-square text-primary"></i>
                </button>

                <button class="btn btn-sm btn-white btn-del" data-id="${t.id}" title="Eliminar Plantilla">
                    <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
              </div>
            </td>
        </tr>`).join(""),this.tableBody.querySelectorAll(".btn-create-doc").forEach(t=>{t.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:t.dataset.id}}))}}),this.tableBody.querySelectorAll(".btn-edit").forEach(t=>{t.onclick=()=>{this.loadTemplate(t.dataset.id)}}),this.tableBody.querySelectorAll(".btn-del").forEach(t=>{t.onclick=()=>{this.deleteTemplate(t.dataset.id)}})},async deleteTemplate(n){if(confirm("¿Eliminar plantilla? Todos sus documentos asociados se borrarán.")){const e=await Q.getDocumentsByTemplate(n);for(const t of e)await Q.delete("doc",t.id);await Q.delete("tpl",n),this.renderList()}},showEditor(){this.listView.style.display="none",this.editorView.style.display="block",this.resetCanvas()},showList(){this.listView.style.display="block",this.editorView.style.display="none"},resetCanvas(){this.currentId=null,this.canvas.innerHTML="",document.getElementById("tpl-title").value="",document.getElementById("tpl-description").value="",document.getElementById("tpl-encrypted").checked=!1}},zn={itemsPerPage:5,currentPage:1,currentSearch:"",handlers:{},init(n){this.handlers=n,this.cacheDOM(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.pagination=document.getElementById("doc-pagination"),this.searchInput=document.getElementById("doc-search")},bindEvents(){document.getElementById("btn-go-create-doc").onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()},this.searchInput.addEventListener("input",n=>{this.currentSearch=n.target.value.toLowerCase(),this.currentPage=1,this.render()})},async render(){const n=await Q.getAll("doc")||[];if(!Array.isArray(n))return console.error("[DocumentList] Datos inválidos:",n),this.renderTable([]);const e=this.currentSearch.split(" ").filter(a=>a),t=n.filter(a=>{const l=`${a.title} ${a.templateTitle||""}`.toLowerCase();return e.every(u=>l.includes(u))}),r=Math.ceil(t.length/this.itemsPerPage),s=(this.currentPage-1)*this.itemsPerPage,i=t.slice(s,s+this.itemsPerPage);this.renderTable(i),this.renderPagination(r)},renderTable(n){this.tableBody.innerHTML=n.map(e=>{let t="";return e.isEncrypted&&(Q._masterKey&&!e.decryptionError?t=`<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Cifrado y Desbloqueado">
                    <i class="fa-solid fa-lock-open"></i>
                 </span>`:t=`<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado (Bloqueado)">
                    <i class="fa-solid fa-lock"></i>
                 </span>`),`
        <tr class="align-middle border-light-subtle">
            <td class="py-3" style="width: 120px">
              <div class="small text-muted"><i class="fa-regular fa-calendar-alt me-1"></i>${new Date(e.date).toLocaleDateString()}</div>
            </td>
            <td>
              <span class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 px-2 py-1">
                <i class="fa-solid fa-layer-group me-1 small"></i>${e.templateTitle||"General"}
              </span>
            </td>
            <td>
                <div class="text-dark fw-semibold d-flex align-items-center">
                    ${e.title}
                    ${t}
                </div>
            </td>
            <td class="text-end pe-3">
              <div class="btn-group shadow-sm border rounded bg-white">
                <button class="btn btn-sm btn-white border-0 btn-view-doc px-3" data-id="${e.id}" title="Visualizar">
                  <i class="fa-solid fa-eye text-primary"></i>
                </button>
                <button class="btn btn-sm btn-white border-0 border-start btn-del-doc px-3" data-id="${e.id}" title="Eliminar">
                  <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
              </div>
            </td>
        </tr>
    `}).join("")||'<tr><td colspan="4" class="text-center py-5 text-muted">No hay documentos registrados.</td></tr>',this.tableBody.querySelectorAll(".btn-view-doc").forEach(e=>{e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)}),this.tableBody.querySelectorAll(".btn-del-doc").forEach(e=>{e.onclick=async()=>{confirm("¿Eliminar documento definitivamente?")&&(await Q.delete("doc",e.dataset.id),this.render())}})},renderPagination(n){let e="";for(let t=1;t<=n;t++)e+=`<li class="page-item ${t===this.currentPage?"active":""} mx-1">
          <button class="page-link rounded-circle border-0 shadow-sm px-3" data-page="${t}">${t}</button>
        </li>`;this.pagination.innerHTML=e,this.pagination.querySelectorAll("button").forEach(t=>{t.onclick=()=>{this.currentPage=parseInt(t.dataset.page),this.render()}})},show(){this.container.style.display="block"},hide(){this.container.style.display="none"}},Cc={handlers:{},currentDocId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(n){if(!n)return;let e=await Q.getOne("doc",n);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&e.decryptionError){console.warn("[DocViewer] Documento bloqueado. Solicitando frase...");const r=prompt(`🔒 Este documento está cifrado.

Por favor, ingrese su Frase Maestra para visualizarlo:`);if(!r)return this.handlers.onBack();try{if(await Q.setMasterKey(r),e=await Q.getOne("doc",n),e.decryptionError)return alert("⛔ Frase incorrecta. No se pudo descifrar el documento."),this.handlers.onBack()}catch(s){return console.error(s),alert("Error al procesar la seguridad."),this.handlers.onBack()}}const t=await Q.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base de este documento no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this.headerActions&&(this.headerActions.innerHTML=`
            <button id="btn-edit-mode" class="btn btn-warning shadow-sm">
                <i class="fa-solid fa-pen"></i> Editar
            </button>
            <button id="btn-whatsapp" class="btn btn-success shadow-sm text-white">
                <i class="fa-brands fa-whatsapp"></i> WhatsApp
            </button>
            <div class="dropdown d-inline-block">
                 <button class="btn btn-secondary dropdown-toggle shadow-sm" type="button" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-print"></i> Imprimir
                 </button>
                 <ul class="dropdown-menu dropdown-menu-end shadow">
                    <li><a class="dropdown-item" href="#" id="print-v"><i class="fa-solid fa-eye me-2"></i>Visual</a></li>
                    <li><a class="dropdown-item" href="#" id="print-c"><i class="fa-solid fa-compress me-2"></i>Compacto</a></li>
                    <li><a class="dropdown-item" href="#" id="print-f"><i class="fa-solid fa-book-open-reader me-2"></i>Fácil Lectura</a></li>
                 </ul>
            </div>
        `,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(e.id),document.getElementById("btn-whatsapp").onclick=()=>this.copyForWhatsApp(e),document.getElementById("print-v").onclick=r=>{r.preventDefault(),this.print(e.id,"Visual")},document.getElementById("print-c").onclick=r=>{r.preventDefault(),this.print(e.id,"Compacto")},document.getElementById("print-f").onclick=r=>{r.preventDefault(),this.print(e.id,"Facil Lectura")}),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",e.content&&Array.isArray(e.content)&&e.content.forEach(r=>{const s=t.elements.find(l=>l.id===r.fieldId);if(!s)return;const i=s.tag.replace("setting-","viewer-"),a=document.createElement(i);this.canvas.appendChild(a),a.setData&&a.setData({...r,title:s.title,spanEV:s.spanEV,columns:s.columns||[]})})},copyForWhatsApp(n){let e=`*${n.title.toUpperCase()}*
`;e+=`_${n.templateTitle}_
`,e+=`📅 ${new Date(n.date).toLocaleDateString()}
`,e+=`------------------------------
`,Array.from(this.canvas.children).forEach(t=>{typeof t.getWhatsapp=="function"&&(e+=t.getWhatsapp()+`
`)}),e+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(e).then(()=>{alert("📋 ¡Copiado! Listo para pegar en WhatsApp.")}).catch(t=>{console.error("Error al copiar",t),alert("No se pudo copiar automáticamente.")})},async print(n,e){let t=await Q.getOne("doc",n);if(t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const r=await Q.getOne("tpl",t.templateId);if(!t||!r)return alert("Error recuperando datos para impresión.");let s=new URL("../",import.meta.url).href;s+=s.endsWith("/")?"":"/";let i=document.getElementById("print-iframe");i||(i=document.createElement("iframe"),i.id="print-iframe",i.style.display="none",document.body.appendChild(i));const a=i.contentWindow.document,l=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),u=Object.keys(Ve);a.open(),a.write(`
        <html>
          <head>
            <title>${t.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <style>
              * { box-sizing: border-box; }
              body { background: white; font-family: 'Segoe UI', sans-serif; margin: 0; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
              .print-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background-color: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px; position: relative; }
              .print-header::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background-color: #0d6efd; }
              .header-left h1 { margin: 0; font-size: 20px; color: #212529; text-transform: uppercase; font-weight: 800; }
              .header-left p { margin: 2px 0 0; font-size: 11px; color: #6c757d; font-weight: 500; text-transform: uppercase; }
              .header-right { text-align: right; font-size: 11px; color: #495057; }
              .meta-row { margin-bottom: 4px; display: flex; align-items: center; justify-content: flex-end; gap: 6px; }
              .badge-format { background-color: #e9ecef; color: #495057; padding: 2px 8px; border-radius: 10px; font-weight: 700; font-size: 9px; border: 1px solid #ced4da; }
              .row { display: flex; flex-wrap: wrap; margin: 0 -4px; }
              [class^="col-"] { padding: 0 4px; }
              .col-1 { width: 8.33%; } .col-2 { width: 16.66%; } .col-3 { width: 25%; } .col-4 { width: 33.33%; }
              .col-5 { width: 41.66%; } .col-6 { width: 50%; } .col-7 { width: 58.33%; } .col-8 { width: 66.66%; }
              .col-9 { width: 75%; } .col-10 { width: 83.33%; } .col-11 { width: 91.66%; } .col-12 { width: 100%; }
              @page { margin: 10mm; }
              ${e==="Compacto"?'.print-header { padding: 10px; margin-bottom: 10px; } .print-header h1 { font-size: 16px; } .row { margin: 0 -2px; } [class^="col-"] { padding: 0 2px; }':""}
              ${e==="Facil Lectura"?'body { font-size: 16px; } .row { margin: 0 -10px; } [class^="col-"] { padding: 0 10px; margin-bottom: 15px; }':""}
            </style>
            
            ${u.map(d=>`<!-- <script type="module" src="${s}src/components/${d}/printer-${d}.js"><\/script> -->`).join("")}
             <!-- <script type="module" src="${s}src/components/table/printer-table.js"><\/script> -->
             
          </head>
          <body>
            <div class="print-header">
              <div class="header-left"><h1>${t.title}</h1><p><i class="fa-solid fa-layer-group me-1"></i> ${t.templateTitle}</p></div>
              <div class="header-right"><div class="meta-row"><span>${l}</span> <i class="fa-regular fa-calendar-days text-primary"></i></div><div class="meta-row"><span class="badge-format">${e}</span></div></div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),a.close(),i.onload=()=>{const d=a.getElementById("print-content");t.content.forEach(f=>{const m=r.elements.find(D=>D.id===f.fieldId);if(!m)return;const _=m.tag.replace("setting-","printer-"),A=document.createElement(_);A.setAttribute("title",m.title),Array.isArray(f.value)?A.setAttribute("edit-value",JSON.stringify(f.value)):A.setAttribute("edit-value",f.value),A.setAttribute("type",e),A.setAttribute("span-print",m.spanP||12),f.bold&&A.setAttribute("bold",""),f.italic&&A.setAttribute("italic",""),A.setAttribute("color",f.color||"black"),m.columns&&A.setAttribute("columns",JSON.stringify(m.columns));const C=a.createElement("div");C.className=`col-${m.spanP||12}`,C.appendChild(A),d.appendChild(C)}),setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print()},500)}}},Ri={handlers:{},currentDocId:null,currentTplId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(n){this.currentDocId=null,this.currentTplId=n,this.titleInput.value="",this.titleInput.readOnly=!1;const e=document.getElementById("doc-template-selector");e&&(e.style.display="none"),await this.renderCanvas(n,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(n){const e=await Q.getOne("doc",n);e&&(this.currentDocId=n,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(n,e){const t=await Q.getOne("tpl",n);t&&(this.canvas.innerHTML="",t.elements.forEach(r=>{const s=r.tag.replace("setting-","editor-"),i=document.createElement(s);i.setAttribute("field-id",r.id),this.canvas.appendChild(i);const a=e.find(u=>u.fieldId===r.id),l={title:r.title,spanEV:r.spanEV||12,options:r.options,value:a?a.value:"",bold:a?a.bold:!1,italic:a?a.italic:!1,color:a?a.color:"black",columns:r.columns};i.setData&&i.setData(l)}))},setupSaveButton(n){this.headerActions.innerHTML=`
        <button id="btn-save-document" class="btn btn-primary">
            <i class="fa-solid fa-save"></i> ${n}
        </button>
    `,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){console.log("[DEBUG] DOC-EDITOR: Iniciando validación de guardado...");const n=this.titleInput.value.trim();if(n)this.titleInput.classList.remove("is-invalid","border-danger"),this.titleInput.classList.add("is-valid");else{this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert(`⚠️ Imposible Guardar:

El documento no tiene un Título asignado.
Por favor, escriba un nombre para identificar este documento.`);return}const e=this.currentDocId||`doc_${Date.now()}`,t=await Q.getOne("tpl",this.currentTplId);if(t&&t.encrypted&&!Q._masterKey){const l=prompt(`🔒 Cifrado Requerido

Este documento pertenece a una plantilla segura.
Ingrese su Frase Maestra para guardar:`);if(!l)return;try{await Q.setMasterKey(l)}catch{return alert("Error: La frase maestra no es válida.")}}const r=[],s=Array.from(this.canvas.children);let i=!0;if(s.forEach(l=>{typeof l.validate=="function"&&!l.validate()&&(i=!1),typeof l.getData=="function"&&r.push(l.getData())}),!i)return alert("Revise los campos del formulario marcados en rojo.");const a={id:e,title:n,templateId:this.currentTplId,templateTitle:t?t.title:"Desconocida",date:new Date().toISOString(),content:r,isEncrypted:t&&t.encrypted||!1};try{await Q.save("doc",a),console.log(`[DEBUG] DOC-EDITOR: Documento '${n}' guardado con éxito.`),this.handlers.onSave()}catch(l){console.error(l),alert("Error crítico al guardar en base de datos: "+l.message)}}},ro={init(){console.log("[DocumentUI] Initializing modular architecture..."),zn.init({onViewDocument:async n=>{zn.hide(),this.showEditorView(),await Cc.render(n)},onNavigateToDesigner:()=>{const n=document.getElementById("nav-designer");n?n.click():alert("Navegue al diseñador para crear una plantilla.")}}),Cc.init({onEdit:n=>{Ri.loadForEditing(n)},onBack:()=>{this.showListView()}}),Ri.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),zn.render()},async createFromTemplate(n){zn.hide(),this.showEditorView(),await Ri.loadForCreation(n)},showListView(){document.getElementById("doc-list-view").style.display="block",document.getElementById("doc-editor-view").style.display="none",zn.render()},showEditorView(){document.getElementById("doc-list-view").style.display="none",document.getElementById("doc-editor-view").style.display="block"}},xc={exportData(){const n=Q.getCurrentUser().id,e={};for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);a.startsWith(`${n}_`)&&(e[a]=localStorage.getItem(a))}const t=new Blob([JSON.stringify(e)],{type:"application/json"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download=`respaldo_mg_${n}_${new Date().toISOString().slice(0,10)}.json`,s.click()},importData(n){const e=new FileReader;e.onload=t=>{try{const r=JSON.parse(t.target.result);Object.keys(r).forEach(s=>localStorage.setItem(s,r[s])),alert("Respaldo recuperado con éxito. La página se recargará."),location.reload()}catch{alert("Archivo de respaldo no válido.")}},e.readAsText(n)}},oE={init(){const n=document.getElementById("btn-export"),e=document.getElementById("import-file");n&&(n.onclick=()=>xc.exportData()),e&&(e.onchange=t=>{t.target.files.length>0&&xc.importData(t.target.files[0])})}},Ci={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="modal-setup-security" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-dark text-white">
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
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const r=document.getElementById("setup-master-phrase").value.trim(),s=document.getElementById("setup-error");if(r.length<15){s.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",s.style.display="block";return}try{await Q.setMasterKey(r);const i=await Q.encryptData({check:"VERIFIED"});await Q.saveSecurityVerifier(i),t.hide(),e.remove(),alert("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.")}catch{s.textContent="Error al inicializar el motor de seguridad.",s.style.display="block"}}},renderChangePhraseUI(n){const e=`
      <div class="card border-danger mt-4 shadow-sm">
        <div class="card-header bg-danger text-white small fw-bold">
          <i class="fa-solid fa-triangle-exclamation me-1"></i> Zona de Seguridad: Cambiar Frase Maestra
        </div>
        <div class="card-body">
          <p class="text-muted" style="font-size: 0.75rem;">
            Este proceso descifrará sus documentos con la frase vieja y los re-cifrará con la nueva. 
            <strong>No cierre la ventana durante el proceso.</strong>
          </p>
          
          <div class="mb-2">
            <label class="small fw-bold">Frase Maestra Anterior:</label>
            <input type="text" id="old-phrase" class="form-control form-control-sm shadow-none" 
                   autocomplete="off" spellcheck="false">
          </div>
          
          <div class="mb-3">
            <label class="small fw-bold">Nueva Frase Maestra:</label>
            <input type="text" id="new-phrase" class="form-control form-control-sm shadow-none" 
                   autocomplete="off" spellcheck="false" placeholder="Mínimo 15 caracteres">
          </div>

          <div id="reencrypt-progress" class="progress mb-3" style="display:none; height: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%"></div>
          </div>

          <button id="btn-reencrypt" class="btn btn-danger btn-sm w-100 fw-bold">
            RE-CIFRAR DOCUMENTOS Y ACTUALIZAR
          </button>
        </div>
      </div>
    `;n.innerHTML=e,document.getElementById("btn-reencrypt").onclick=async()=>{const t=document.getElementById("old-phrase").value.trim(),r=document.getElementById("new-phrase").value.trim(),s=document.getElementById("btn-reencrypt");if(!t||r.length<15)return alert("La nueva frase debe tener al menos 15 caracteres.");if(confirm("¿Está seguro de cambiar su frase maestra? Se procesarán todos los documentos cifrados."))try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando registros...',document.getElementById("reencrypt-progress").style.display="flex",await Q.changeMasterPhrase(t,r),alert("Éxito: Todos los documentos han sido actualizados con la nueva frase."),location.reload()}catch(i){alert("Error: "+i.message),s.disabled=!1,s.innerHTML="RE-CIFRAR DOCUMENTOS Y ACTUALIZAR",document.getElementById("reencrypt-progress").style.display="none"}}}};async function aE(){console.log("[DEBUG] APP: Cargando componentes dinámicos...");const e=Object.keys(Ve).flatMap(t=>[Fr(Object.assign({"./components/boolean/setting-boolean.js":()=>N(()=>Promise.resolve().then(()=>hE),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>N(()=>Promise.resolve().then(()=>dE),void 0,import.meta.url),"./components/date/setting-date.js":()=>N(()=>Promise.resolve().then(()=>fE),void 0,import.meta.url),"./components/email/setting-email.js":()=>N(()=>Promise.resolve().then(()=>pE),void 0,import.meta.url),"./components/number/setting-number.js":()=>N(()=>Promise.resolve().then(()=>mE),void 0,import.meta.url),"./components/password/setting-password.js":()=>N(()=>Promise.resolve().then(()=>gE),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>N(()=>Promise.resolve().then(()=>yE),void 0,import.meta.url),"./components/section/setting-section.js":()=>N(()=>Promise.resolve().then(()=>_E),void 0,import.meta.url),"./components/select/setting-select.js":()=>N(()=>Promise.resolve().then(()=>vE),void 0,import.meta.url),"./components/string/setting-string.js":()=>N(()=>Promise.resolve().then(()=>bE),void 0,import.meta.url),"./components/table/setting-table.js":()=>N(()=>Promise.resolve().then(()=>EE),void 0,import.meta.url),"./components/text/setting-text.js":()=>N(()=>Promise.resolve().then(()=>wE),void 0,import.meta.url),"./components/url/setting-url.js":()=>N(()=>Promise.resolve().then(()=>IE),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),Fr(Object.assign({"./components/boolean/editor-boolean.js":()=>N(()=>Promise.resolve().then(()=>TE),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>N(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url),"./components/date/editor-date.js":()=>N(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url),"./components/email/editor-email.js":()=>N(()=>Promise.resolve().then(()=>RE),void 0,import.meta.url),"./components/number/editor-number.js":()=>N(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),"./components/password/editor-password.js":()=>N(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>N(()=>Promise.resolve().then(()=>xE),void 0,import.meta.url),"./components/section/editor-section.js":()=>N(()=>Promise.resolve().then(()=>kE),void 0,import.meta.url),"./components/select/editor-select.js":()=>N(()=>Promise.resolve().then(()=>DE),void 0,import.meta.url),"./components/string/editor-string.js":()=>N(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url),"./components/table/editor-table.js":()=>N(()=>Promise.resolve().then(()=>LE),void 0,import.meta.url),"./components/text/editor-text.js":()=>N(()=>Promise.resolve().then(()=>OE),void 0,import.meta.url),"./components/url/editor-url.js":()=>N(()=>Promise.resolve().then(()=>NE),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),Fr(Object.assign({"./components/boolean/viewer-boolean.js":()=>N(()=>Promise.resolve().then(()=>ME),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>N(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url),"./components/date/viewer-date.js":()=>N(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url),"./components/email/viewer-email.js":()=>N(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url),"./components/number/viewer-number.js":()=>N(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url),"./components/password/viewer-password.js":()=>N(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>N(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),"./components/section/viewer-section.js":()=>N(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url),"./components/select/viewer-select.js":()=>N(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url),"./components/string/viewer-string.js":()=>N(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/table/viewer-table.js":()=>N(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url),"./components/text/viewer-text.js":()=>N(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),"./components/url/viewer-url.js":()=>N(()=>Promise.resolve().then(()=>QE),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),Fr(Object.assign({"./components/boolean/printer-boolean.js":()=>N(()=>Promise.resolve().then(()=>JE),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>N(()=>Promise.resolve().then(()=>YE),void 0,import.meta.url),"./components/date/printer-date.js":()=>N(()=>Promise.resolve().then(()=>XE),void 0,import.meta.url),"./components/email/printer-email.js":()=>N(()=>Promise.resolve().then(()=>ZE),void 0,import.meta.url),"./components/number/printer-number.js":()=>N(()=>Promise.resolve().then(()=>ew),void 0,import.meta.url),"./components/password/printer-password.js":()=>N(()=>Promise.resolve().then(()=>tw),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>N(()=>Promise.resolve().then(()=>nw),void 0,import.meta.url),"./components/section/printer-section.js":()=>N(()=>Promise.resolve().then(()=>rw),void 0,import.meta.url),"./components/select/printer-select.js":()=>N(()=>Promise.resolve().then(()=>sw),void 0,import.meta.url),"./components/string/printer-string.js":()=>N(()=>Promise.resolve().then(()=>iw),void 0,import.meta.url),"./components/table/printer-table.js":()=>N(()=>Promise.resolve().then(()=>ow),void 0,import.meta.url),"./components/text/printer-text.js":()=>N(()=>Promise.resolve().then(()=>aw),void 0,import.meta.url),"./components/url/printer-url.js":()=>N(()=>Promise.resolve().then(()=>lw),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e),console.log("[DEBUG] APP: Todos los componentes registrados OK.")}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{console.log("[DEBUG] APP: DOMContentLoaded. Iniciando...");try{await Q.initDB()}catch(n){console.error("[ERROR] APP: Error de inicialización:",n);return}await aE(),uE(),Q.onAuthStateChanged(async n=>{n?(console.log("[DEBUG] APP: Sesión activa detectada ->",n.email),await lE(n)):(console.log("[DEBUG] APP: No hay usuario. Renderizando Login."),document.getElementById("app-content").style.display="none",no.renderLogin())})});async function lE(n){console.log("[DEBUG] APP: Cargando interfaz principal..."),document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${n.email}`),no.initLogout(),no.initChangePassword(),oE.init(),od.init(),ro.init();const t=await Q.hasSecurityConfigured();console.log("[DEBUG] APP: ¿Seguridad configurada?:",t),t||(console.log("[DEBUG] APP: Usuario nuevo/sin frase. Lanzando Setup Modal."),Ci&&Ci.renderSetupModal&&Ci.renderSetupModal()),cE(),Is("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",r=>{console.log("[DEBUG] EVENT: create-doc-from-template",r.detail),Is("documents"),ro.createFromTemplate(r.detail.tplId)}),window._eventCreateDocRegistered=!0)}function cE(){document.getElementById("nav-designer").onclick=n=>{n.preventDefault(),Is("designer")},document.getElementById("nav-documents").onclick=n=>{n.preventDefault(),Is("documents")}}function Is(n){console.log(`[DEBUG] NAV: Cambiando vista a -> ${n}`);const e=document.getElementById("view-designer"),t=document.getElementById("view-documents"),r=document.getElementById("nav-designer"),s=document.getElementById("nav-documents");n==="designer"?(e.style.display="block",t.style.display="none",r.classList.add("active"),s.classList.remove("active"),od.renderList()):(e.style.display="none",t.style.display="block",r.classList.remove("active"),s.classList.add("active"),ro.renderList())}function uE(){document.addEventListener("click",n=>{const e=n.target.closest(".toggle-password");if(e){n.preventDefault();const t=document.getElementById(e.dataset.target),r=e.querySelector("i");if(t&&r){const s=t.type==="password";t.type=s?"text":"password",r.classList.toggle("fa-eye",!s),r.classList.toggle("fa-eye-slash",s)}}})}class M extends HTMLElement{constructor(){super(),this._isInternalUpdate=!1}connectedCallback(){this._ensureId();const e=this.tagName.toLowerCase().split("-")[1];Ve[e]&&(this.icon=Ve[e].icon,this.shortLabel=Ve[e].shortLabel,this.longLabel=Ve[e].longLabel,this.spanEV=Ve[e].spanEV,this.spanP=Ve[e].spanP),this.render()}renderStyleControls(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),r=this.getAttribute("color")||"black";return`
      <div class="btn-group shadow-sm">
        <button class="btn btn-sm btn-outline-secondary border-light-subtle ${e?"active":""}" 
                id="btn-b-${this.id}" title="Negrita">
          <i class="fa-solid fa-bold"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary border-light-subtle ${t?"active":""}" 
                id="btn-i-${this.id}" title="Itálica">
          <i class="fa-solid fa-italic"></i>
        </button>
        <select class="form-select form-select-sm border-light-subtle bg-light" 
                id="btn-c-${this.id}" style="width: auto; font-size: 0.75rem;">
          <option value="black" ${r==="black"?"selected":""}>Negro</option>
          <option value="red" ${r==="red"?"selected":""}>Rojo</option>
          <option value="blue" ${r==="blue"?"selected":""}>Azul</option>
          <option value="green" ${r==="green"?"selected":""}>Verde</option>
          <option value="gray" ${r==="gray"?"selected":""}>Gris</option>
        </select>
      </div>
    `}_attachStyleEventListeners(e){if(!e)return;const t=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1},r=this.querySelector(`#btn-b-${this.id}`);r&&(r.onclick=()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()});const s=this.querySelector(`#btn-i-${this.id}`);s&&(s.onclick=()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const i=this.querySelector(`#btn-c-${this.id}`);i&&(i.onchange=a=>{this._isInternalUpdate=!0,this.setAttribute("color",a.target.value),this._isInternalUpdate=!1,this.render()}),e.addEventListener("input",t)}getExtraSettingsHTML(){if(this.hasAttribute("table")){const r=this.tagName.toLowerCase().split("-")[1],s=["number","currency","percentage"].includes(r),i=this.getAttribute("alignment")||"left",a=this.hasAttribute("total");return`
        <div class="mt-2 border-top pt-2">
          <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
             data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
            <i class="fa-solid fa-gear me-1"></i> CONFIGURACIÓN DE COLUMNA
          </a>
          <div class="collapse" id="extra-${this.id}">
            <div class="row g-2 mt-1">
              <div class="${s?"col-6":"col-12"}">
                <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Alineación</label>
                <select class="form-select form-select-sm" data-prop="alignment" style="font-size: 0.7rem;">
                  <option value="left" ${i==="left"?"selected":""}>Izquierda</option>
                  <option value="center" ${i==="center"?"selected":""}>Centro</option>
                  <option value="right" ${i==="right"?"selected":""}>Derecha</option>
                </select>
              </div>
              ${s?`
              <div class="col-6">
                <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Totalizar</label>
                <div class="form-check form-switch pt-1">
                  <input class="form-check-input" type="checkbox" data-prop="total" ${a?"checked":""}>
                  <label class="form-check-label small" style="font-size: 0.7rem;">Sumar</label>
                </div>
              </div>`:""}
            </div>
          </div>
        </div>
      `}const e=this.getAttribute("span-edit-viewer")||this.spanEV||12,t=this.getAttribute("span-print")||this.spanP||12;return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-arrows-left-right me-1"></i> AJUSTAR ANCHOS (GRID)
        </a>
        <div class="collapse" id="extra-${this.id}">
          <div class="row g-2 mt-1">
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Editor (2-12)</label>
              <input type="number" class="form-control form-control-sm text-center" 
                     value="${e}" data-prop="span-edit-viewer" min="2" max="12">
            </div>
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Impresión (2-12)</label>
              <input type="number" class="form-control form-control-sm text-center" 
                     value="${t}" data-prop="span-print" min="2" max="12">
            </div>
          </div>
        </div>
      </div>
    `}_attachExtraSettingsEvents(){this.querySelectorAll(`#extra-${this.id} input, #extra-${this.id} select`).forEach(e=>{e.addEventListener("input",t=>{const r=t.target.getAttribute("data-prop");this._isInternalUpdate=!0,t.target.type==="checkbox"?t.target.checked?this.setAttribute(r,""):this.removeAttribute(r):this.setAttribute(r,t.target.value),this._isInternalUpdate=!1})})}getData(){const e=this.tagName.toLowerCase(),t=e.split("-")[1];if(e.startsWith("setting-")){const r={tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};return t==="select"&&(r.options=this.getAttribute("options")||""),t==="currency"&&(r.currency=this.getAttribute("currency")||"$"),r}return{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id),e.fieldId&&this.setAttribute("field-id",e.fieldId),e.title&&this.setAttribute("title",e.title),e.options&&this.setAttribute("options",e.options),e.currency&&this.setAttribute("currency",e.currency),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.alignment&&this.setAttribute("alignment",e.alignment),e.total?this.setAttribute("total",""):this.removeAttribute("total"),e.bold?this.setAttribute("bold",""):this.removeAttribute("bold"),e.italic?this.setAttribute("italic",""):this.removeAttribute("italic"),this.setAttribute("color",e.color||"black"),e.value!==void 0&&this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1,this.render()}validate(){const t=(this.getAttribute("title")||"").trim().length>0;return this.classList.toggle("border-danger",!t),t}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}static get observedAttributes(){return["title","options","currency","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total"]}attributeChangedCallback(e,t,r){this._isInternalUpdate||t!==r&&this.render()}getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),r=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"}; font-style: ${t?"italic":"normal"}; color: ${r};`}render(){this.innerHTML=""}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",r=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${r} mb-3`,`<div class="viewer-container"><label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">${t}</label>${e}</div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const r=this.getAttribute("title")||"";let s={margin:"15px",padding:"4px",border:"1px solid #dee2e6",titleSize:"0.7rem"};return t==="Compacto"?s={margin:"6px",padding:"2px",border:"1px dotted #dee2e6",titleSize:"0.65rem"}:t==="Facil Lectura"&&(s={margin:"20px",padding:"8px",border:"2px solid #000",titleSize:"0.85rem"}),`
      <div style="margin-bottom: ${s.margin}; border-bottom: ${s.border}; padding-bottom: ${s.padding}; page-break-inside: avoid;">
          <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${s.titleSize}; line-height: 1.1;">${r}</div>
          ${e}
      </div>`}getWhatsapp(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}class ad extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-success text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-toggle-on text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: ¿Acepta términos?">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this.setAttribute("title",r.target.value)}}}customElements.define("setting-boolean",ad);const hE=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:ad},Symbol.toStringTag,{value:"Module"}));class ld extends M{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("currency")||"$",r=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-success text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-2">
            <div class="col-8">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <input type="text" class="form-control form-control-sm ${r}" 
                     value="${e}" data-prop="title" placeholder="Ej: Precio Unitario">
            </div>
            <div class="col-4">
              <label class="form-label small fw-semibold text-secondary mb-1">Moneda</label>
              <input type="text" class="form-control form-control-sm text-center fw-bold" 
                     value="${t}" data-prop="currency" placeholder="$">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")},this.querySelector('input[data-prop="currency"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("currency",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-currency",ld);const dE=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:ld},Symbol.toStringTag,{value:"Module"}));class cd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-info text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-calendar-day text-muted"></i></span>
              <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Fecha de Nacimiento">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-date",cd);const fE=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:cd},Symbol.toStringTag,{value:"Module"}));class ud extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-envelope text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                      value="${e}" data-prop="title" placeholder="Ej: Correo Corporativo">
              </div>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-email",ud);const pE=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:ud},Symbol.toStringTag,{value:"Module"}));class hd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-danger text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-3">
            <div class="col-12">
                <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-hashtag text-muted"></i></span>
                    <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                           value="${e}" data-prop="title" placeholder="Ej: Edad o Cantidad">
                </div>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-number",hd);const mE=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:hd},Symbol.toStringTag,{value:"Module"}));class dd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-warning text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-lock text-muted"></i></span>
              <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Clave de Acceso">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-password",dd);const gE=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:dd},Symbol.toStringTag,{value:"Module"}));class fd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-success text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-percent text-muted"></i></span>
              <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Impuesto o Descuento">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-percentage",fd);const yE=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:fd},Symbol.toStringTag,{value:"Module"}));class pd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-primary fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-section",pd);const _E=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:pd},Symbol.toStringTag,{value:"Module"}));class md extends M{render(){const e=this.getAttribute("title")||"",t=this.getAttribute("options")||"",r=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-secondary text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-2">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <input type="text" class="form-control form-control-sm ${r}" 
                     value="${e}" data-prop="title" placeholder="Ej: Estado Civil">
            </div>
            <div class="col-12 mt-2">
              <label class="form-label small fw-semibold text-secondary mb-1">Opciones (separadas por coma) *</label>
              <textarea class="form-control form-control-sm" data-prop="options" rows="2" 
                        placeholder="Soltero, Casado, Divorciado">${t}</textarea>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelectorAll("input, textarea").forEach(s=>{s.oninput=i=>{this._isInternalUpdate=!0;const a=i.target.dataset.prop;this.setAttribute(a,i.target.value),this._isInternalUpdate=!1,a==="title"&&i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}})}}customElements.define("setting-select",md);const vE=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:md},Symbol.toStringTag,{value:"Module"}));class gd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-primary fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-string",gd);const bE=Object.freeze(Object.defineProperty({__proto__:null,SettingString:gd},Symbol.toStringTag,{value:"Module"}));class yd extends M{constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",r=this._tempColumnsData?this._tempColumnsData.length:0;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-table"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-secondary fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        
        <div class="card-body bg-white p-3">
          <div class="mb-3">
            <label class="form-label small fw-semibold text-secondary mb-1">Título de la Tabla *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Tabla de Items">
            </div>
          </div>

          <div class="alert alert-light border d-flex justify-content-between align-items-center p-2 mb-3">
            <div class="small fw-bold text-dark">
                <i class="fa-solid fa-columns text-secondary me-2"></i>
                <span id="col-counter-${this.id}">${r} columna${r!==1?"s":""} definida${r!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar
            </button>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal()}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const r=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",r),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",r.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const r=`
      <div class="modal fade" id="${e}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content border-0 shadow">
            
            <div class="modal-header bg-light py-2 border-bottom">
              <h6 class="modal-title fw-bold text-secondary"><i class="fa-solid fa-table-columns me-2"></i>Configurar Columnas</h6>
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
    `;document.body.insertAdjacentHTML("beforeend",r);const s=document.getElementById(`toolbox-${this.id}`);Object.entries(Ve).forEach(([u,d])=>{if(u==="table")return;const f=document.createElement("button");f.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",f.style.minWidth="60px",f.title=d.longLabel,f.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${d.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${d.shortLabel}</span>
        `,f.onclick=()=>this._addChildComponent(u),s.appendChild(f)});const i=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(u=>{const d=this._createWrapper(u.tag.replace("setting-","")),f=d.querySelector(u.tag);f&&f.setData&&(f.setAttribute("table",""),f.setData(u)),i.appendChild(d)}):i.innerHTML='<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed bg-white opacity-75"><i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>';const a=document.getElementById(e);new bootstrap.Modal(a).show(),a.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(i),this._updateCounter(),a.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),r=t.querySelector("#empty-msg");r&&r.remove();const s=this._createWrapper(e);t.appendChild(s),s.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 bg-white border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const r=document.createElement(`setting-${e}`);return r.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(r),t.querySelector(".btn-del-col").onclick=()=>t.remove(),Qo.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(s=>{s.tagName.toLowerCase().startsWith("setting-")&&typeof s.getData=="function"&&t.push(s.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",yd);const EE=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:yd},Symbol.toStringTag,{value:"Module"}));class _d extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-secondary text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 text-dark">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-dark fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-align-left text-muted"></i></span>
              <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Observaciones Generales">
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-text",_d);const wE=Object.freeze(Object.defineProperty({__proto__:null,SettingText:_d},Symbol.toStringTag,{value:"Module"}));class vd extends M{render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-link"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          <span class="badge rounded-pill bg-primary fw-light font-monospace" style="font-size: 0.65rem;">${this.id}</span>
        </div>
        <div class="card-body bg-white p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Sitio Web Oficial">
              </div>
            </div>
          </div>
          ${this.getExtraSettingsHTML()}
        </div>
      </div>
    `,this._attachExtraSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0;const s=r.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-url",vd);const IE=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:vd},Symbol.toStringTag,{value:"Module"}));class bd extends M{render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const r=`
      <div class="card border-0 shadow-sm border-start border-4 border-success h-100">
        <div class="card-body p-3 d-flex align-items-center justify-content-between">
          <label class="form-check-label fw-bold text-dark small mb-0">
            <i class="fa-solid fa-toggle-on me-1 text-success"></i> ${e}
          </label>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="check-${this.id}" 
                   ${t?"checked":""} style="cursor:pointer">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",bd);const TE=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:bd},Symbol.toStringTag,{value:"Module"}));class zs extends M{render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-danger h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-hashtag me-1 text-danger"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input type="number" class="form-control form-control-sm shadow-none" 
                 id="input-${this.id}" value="${t}" style="${r}" placeholder="0.00">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}_setupArithmeticLogic(e){const t=()=>{let r=e.value.trim();if(r!=="")try{const s=r.replace(/,/g,"."),i=new Function(`"use strict"; return (${s})`)();!isNaN(i)&&isFinite(i)&&(e.value=i,this.setAttribute("edit-value",i))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=r=>{r.key==="Enter"&&(r.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",zs);const AE=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:zs},Symbol.toStringTag,{value:"Module"}));class Ed extends zs{render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",r=this.getAttribute("currency")||"$",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-success h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-money-bill-wave me-1 text-success"></i> ${e}
            </label>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text bg-light fw-bold text-success border-1">${r}</span>
            <input type="number" class="form-control shadow-none border-1" 
                   id="input-${this.id}" value="${t}" style="${s}" placeholder="0.00">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}}customElements.define("editor-currency",Ed);const SE=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:Ed},Symbol.toStringTag,{value:"Module"})),As=class As extends M{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||As.getToday(),r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-info h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-calendar-days me-1 text-info"></i> ${e}
            </label>
            ${this.renderStyleControls()}
          </div>
          <input type="date" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${r}">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};Ya(As,"getToday",()=>new Date().toISOString().split("T")[0]);let Ts=As;customElements.define("editor-date",Ts);const PE=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:Ts},Symbol.toStringTag,{value:"Module"}));class wd extends M{render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-primary h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-at me-1 text-primary"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input type="email" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${r}" placeholder="usuario@ejemplo.com">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",wd);const RE=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:wd},Symbol.toStringTag,{value:"Module"}));class Id extends M{render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-warning h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-dark small mb-2">
            <i class="fa-solid fa-key me-1 text-warning"></i> ${e}
          </label>
          <div class="input-group input-group-sm shadow-none">
            <input type="password" class="form-control border-1 shadow-none" 
                   id="input-${this.id}" value="${t}" placeholder="Ingrese contraseña...">
            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="input-${this.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",Id);const CE=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:Id},Symbol.toStringTag,{value:"Module"}));class Td extends zs{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-success h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-percent me-1 text-success"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <div class="input-group input-group-sm">
            <input type="number" class="form-control shadow-none border-1" 
                   id="input-${this.id}" value="${t}" style="${r}" placeholder="0.00">
            <span class="input-group-text bg-light border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",Td);const xE=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:Td},Symbol.toStringTag,{value:"Module"}));class Ad extends M{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",Ad);const kE=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:Ad},Symbol.toStringTag,{value:"Module"}));class Sd extends M{render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",s=(this.getAttribute("options")||"").split(",").map(l=>l.trim()).filter(l=>l!==""),i=this.getCommonStyles(),a=`
      <div class="card border-0 shadow-sm border-start border-4 border-secondary h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
                <i class="fa-solid fa-caret-down me-1 text-secondary"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${i}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${s.map(l=>`<option value="${l}" ${t===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(a),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",Sd);const DE=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:Sd},Symbol.toStringTag,{value:"Module"}));class Pd extends M{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-dark h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0"><i class="fa-solid fa-font"></i> ${e}</label>
            ${this.renderStyleControls()} 
          </div>
          <input type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${r}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",Pd);const VE=Object.freeze(Object.defineProperty({__proto__:null,EditorString:Pd},Symbol.toStringTag,{value:"Module"}));class Rd extends M{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm=""}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e}render(){const t=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-white border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${this.getAttribute("title")||"Tabla de Datos"}</h6>
                <div class="btn-group shadow-sm">
                    <button class="btn btn-sm btn-outline-success" id="btn-export-${this.id}" title="Descargar / Exportar"><i class="fa-solid fa-download"></i></button>
                    <button class="btn btn-sm btn-outline-primary" id="btn-import-trigger-${this.id}" title="Cargar / Importar"><i class="fa-solid fa-upload"></i></button>
                    <button class="btn btn-sm btn-primary" id="btn-add-${this.id}"><i class="fa-solid fa-plus me-1"></i> Agregar</button>
                </div>
            </div>
            <div class="input-group input-group-sm">
                <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-search text-muted"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 shadow-none" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
            </div>
            <input type="file" id="file-import-${this.id}" accept=".csv" style="display: none;" />
        </div>

        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover table-striped align-middle mb-0">
                    <thead class="table-light text-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-primary small"></tfoot>
                </table>
            </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=s=>{this._searchTerm=s.target.value,this._renderRows();const i=this.querySelector(`#btn-clear-search-${this.id}`);i&&(i.style.display=this._searchTerm?"block":"none")};const t=this.querySelector(`#btn-clear-search-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",e.value="",this._renderRows()}),this.querySelector(`#btn-export-${this.id}`).onclick=()=>this._exportCSV();const r=this.querySelector(`#file-import-${this.id}`);this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>r.click(),r.onchange=s=>this._importCSV(s)}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this.columns.forEach(r=>{const s=r.alignment||"left";t+=`<th class="fw-bold px-3 py-2 border-bottom" style="text-align: ${s}">${r.title}</th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";const r=this.rows.map((i,a)=>({data:i,originalIndex:a}));let s=r;if(this._searchTerm.trim()){const i=this._searchTerm.toLowerCase().split(/\s+/).filter(a=>a);s=r.filter(a=>{const l=a.data.map(u=>{if(typeof u.value=="string"&&u.value.startsWith("{")&&u.value.includes('"url"'))try{const d=JSON.parse(u.value);return(d.text+" "+d.url).toLowerCase()}catch{}return String(u.value).toLowerCase()}).join(" ");return i.every(u=>l.includes(u))})}if(s.length===0){t&&(t.style.display="block"),this._renderFooter(s.map(i=>i.data));return}t&&(t.style.display="none"),s.forEach(i=>{const{data:a,originalIndex:l}=i,u=document.createElement("tr");u.setAttribute("data-original-index",l);const d=document.createElement("td");this._searchTerm?(d.className="text-center text-muted align-middle py-2 small",d.innerHTML='<i class="fa-solid fa-filter"></i>'):(d.className="drag-handle text-center text-muted align-middle cursor-grab py-2",d.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'),u.appendChild(d),this.columns.forEach(m=>{const _=document.createElement("td"),A=m.alignment||"left";_.className="px-3 py-2",_.style.textAlign=A;const C=a.find(q=>q.fieldId===m.id),D=m.tag.replace("setting-","viewer-"),x=document.createElement(D);x.setAttribute("table","");const W={...C,title:"",spanEV:12};x.setData&&x.setData(W),_.appendChild(x),u.appendChild(_)});const f=document.createElement("td");f.className="text-end px-3 py-2",f.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,f.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(l),f.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(l,1),this._renderRows())},u.appendChild(f),e.appendChild(u),this._searchTerm||Qo.init(u,".drag-handle",()=>this._handleReorder())}),this._renderFooter(s.map(i=>i.data))}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(s=>{const i=parseInt(s.getAttribute("data-original-index"));!isNaN(i)&&this.rows[i]&&t.push(this.rows[i])}),t.length===this.rows.length&&(this.rows=t,this._renderRows())}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let s="<tr><td></td>";this.columns.forEach(i=>{const a=i.alignment||"left";let l="";if(i.total){const u=e.reduce((d,f)=>{const m=f.find(A=>A.fieldId===i.id),_=parseFloat(m?m.value:0);return d+(isNaN(_)?0:_)},0);i.tag==="setting-currency"?l=`${i.currency||"$"} ${u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:i.tag==="setting-percentage"?l=`${u}%`:l=u}s+=`<td class="px-3 py-2" style="text-align: ${a};">${l}</td>`}),s+="<td></td>",s+="</tr>",t.innerHTML=s}_exportCSV(){if(this.rows.length===0)return alert("No hay datos para exportar.");let e=[];this.columns.forEach(u=>{u.tag==="setting-url"?(e.push(`"${u.title} (Texto)"`),e.push(`"${u.title} (URL)"`)):e.push(`"${u.title}"`)});const r=this.rows.map(u=>this.columns.map(d=>{const f=u.find(_=>_.fieldId===d.id);let m=f?f.value:"";if(d.tag==="setting-url"){let _="",A="";try{const C=JSON.parse(m);_=C.text||"",A=C.url||""}catch{}return{isUrl:!0,text:_,url:A}}return m=String(m).replace(/"/g,'""'),{isUrl:!1,val:m}})).map(u=>u.map(d=>d.isUrl?`"${d.text.replace(/"/g,'""')}","${d.url.replace(/"/g,'""')}"`:`"${d.val}"`).join(",")).join(`
`),s=e.join(",")+`
`+r,i=new Blob([s],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",`tabla_export_${Date.now()}.csv`),document.body.appendChild(l),l.click(),document.body.removeChild(l)}_importCSV(e){const t=e.target.files[0];if(!t)return;const r=new FileReader;r.onload=s=>{const i=s.target.result;this._parseAndLoadCSV(i),e.target.value=""},r.readAsText(t)}_parseAndLoadCSV(e){const t=e.split(/\r?\n/).filter(a=>a.trim()!=="");if(t.length<2)return alert("El archivo CSV no tiene datos válidos.");const r=a=>{const l=[];let u=0,d=!1;for(let m=0;m<a.length;m++)if(a[m]==='"')d=!d;else if(a[m]===","&&!d){let _=a.substring(u,m);_.startsWith('"')&&_.endsWith('"')&&(_=_.slice(1,-1)),l.push(_.replace(/""/g,'"')),u=m+1}let f=a.substring(u);return f.startsWith('"')&&f.endsWith('"')&&(f=f.slice(1,-1)),l.push(f.replace(/""/g,'"')),l};r(t[0]);const s=[];this.columns.forEach(a=>{a.tag==="setting-url"?(s.push({colDef:a,type:"url-text"}),s.push({colDef:a,type:"url-url"})):s.push({colDef:a,type:"normal"})});const i=[];for(let a=1;a<t.length;a++){const l=r(t[a]);if(l.length!==s.length)continue;const u={};l.forEach((f,m)=>{const _=s[m];if(!_)return;const A=_.colDef.id;u[A]||(u[A]={fieldId:A,tag:_.colDef.tag}),_.type==="normal"?u[A].value=f:_.type==="url-text"?u[A].tempText=f:_.type==="url-url"&&(u[A].tempUrl=f)});const d=Object.values(u).map(f=>f.tag==="setting-url"?{fieldId:f.fieldId,value:JSON.stringify({text:f.tempText||"",url:f.tempUrl||""})}:{fieldId:f.fieldId,value:f.value});i.push(d)}i.length>0?(this.rows=[...this.rows,...i],this._renderRows(),alert(`Se importaron ${i.length} registros correctamente.`)):alert("No se pudieron importar registros. Verifique el formato.")}_openFormModal(e=null){const t=e!==null,r=`modal-form-${this.id}`,s=document.getElementById(r);s&&s.remove();const i=`
      <div class="modal fade" id="${r}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white py-2">
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
    `;document.body.insertAdjacentHTML("beforeend",i);const a=document.getElementById(`form-container-${this.id}`);this.columns.forEach(d=>{const f=d.tag.replace("setting-","editor-"),m=document.createElement(f);m.setAttribute("table",""),m.setAttribute("field-id",d.id);let _={title:d.title,spanEV:12,options:d.options,currency:d.currency};if(t){const A=this.rows[e].find(C=>C.fieldId===d.id);A&&(_={..._,...A})}m.setData&&m.setData(_),a.appendChild(m)});const l=document.getElementById(r),u=new bootstrap.Modal(l);u.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const f=Array.from(a.children).map(m=>{const _=m.getData();return _.fieldId=m.getAttribute("field-id"),_});t?this.rows[e]=f:this.rows.push(f),this._renderRows(),u.hide(),l.addEventListener("hidden.bs.modal",()=>l.remove())}}}customElements.define("editor-table",Rd);const LE=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:Rd},Symbol.toStringTag,{value:"Module"}));class Cd extends M{render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",r=this.getCommonStyles(),s=`
      <div class="card border-0 shadow-sm border-start border-4 border-secondary h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-align-left me-1 text-secondary"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <textarea class="form-control form-control-sm shadow-none border-1" 
                    id="input-${this.id}" rows="4" style="${r}" 
                    placeholder="Escriba el contenido de ${e}...">${t}</textarea>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-text",Cd);const OE=Object.freeze(Object.defineProperty({__proto__:null,EditorText:Cd},Symbol.toStringTag,{value:"Module"}));class xd extends M{render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let r={url:"",text:""};try{t&&(r=JSON.parse(t))}catch{}const s=`
      <div class="card border-0 shadow-sm border-start border-4 border-dark h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-dark small mb-0">
              <i class="fa-solid fa-link me-1 text-secondary"></i> ${e}
            </label>
          </div>
          
          <div class="mb-2">
            <label class="small text-muted" style="font-size: 0.7rem;">Texto a mostrar</label>
            <input type="text" class="form-control form-control-sm shadow-none" 
                   id="text-${this.id}" value="${r.text}" placeholder="Ej: Visitar Google">
          </div>

          <div>
            <label class="small text-muted" style="font-size: 0.7rem;">Dirección Web (URL)</label>
            <input type="url" class="form-control form-control-sm shadow-none font-monospace text-primary" 
                   id="url-${this.id}" value="${r.url}" placeholder="https://...">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#text-${this.id}`),t=this.querySelector(`#url-${this.id}`),r=()=>{this._isInternalUpdate=!0;const s=JSON.stringify({text:e.value,url:t.value});this.setAttribute("edit-value",s),this._isInternalUpdate=!1};e.oninput=r,t.oninput=r}}customElements.define("editor-url",xd);const NE=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:xd},Symbol.toStringTag,{value:"Module"}));class kd extends M{render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",kd);const ME=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:kd},Symbol.toStringTag,{value:"Module"}));class Dd extends M{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",r=this.getCommonStyles(),s=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),i=`<div class="py-1" style="${r}"> 
          <span class="opacity-75 me-1">${t}</span>${s}
        </div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),r=this.getAttribute("currency")||"$",s=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${r} ${s}`}}customElements.define("viewer-currency",Dd);const $E=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:Dd},Symbol.toStringTag,{value:"Module"}));class Vd extends M{render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let r="---";e&&(r=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const s=`<div class="py-1" style="${t}">${r}</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),r=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${r}`}}customElements.define("viewer-date",Vd);const UE=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:Vd},Symbol.toStringTag,{value:"Module"}));class Ld extends M{render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),r=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(r)}}customElements.define("viewer-email",Ld);const FE=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:Ld},Symbol.toStringTag,{value:"Module"}));class Od extends M{render(){const e=this.getAttribute("edit-value")||"---",r=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(r)}}customElements.define("viewer-number",Od);const jE=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:Od},Symbol.toStringTag,{value:"Module"}));class Nd extends M{render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
          <input type="password" class="form-control form-control-sm border-0 bg-transparent p-0 shadow-none fw-bold" 
                 id="val-${this.id}" value="${e}" readonly style="width: auto; min-width: 100px;">
          <div class="btn-group">
            <button class="btn btn-sm text-primary p-1 toggle-password" data-target="val-${this.id}" title="Ver/Ocultar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm text-secondary p-1" id="btn-copy-${this.id}" title="Copiar">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",Nd);const BE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:Nd},Symbol.toStringTag,{value:"Module"}));class Md extends M{render(){const e=this.getAttribute("edit-value")||"0",r=`<div class="py-1 fw-bold" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",Md);const qE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:Md},Symbol.toStringTag,{value:"Module"}));class $d extends M{render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("viewer-section",$d);const zE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:$d},Symbol.toStringTag,{value:"Module"}));class Ud extends M{render(){const e=this.getAttribute("edit-value")||"---",r=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(r)}}customElements.define("viewer-select",Ud);const HE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:Ud},Symbol.toStringTag,{value:"Module"}));class Fd extends M{render(){const e=this.getAttribute("edit-value")||"---",r=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(r)}}customElements.define("viewer-string",Fd);const GE=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:Fd},Symbol.toStringTag,{value:"Module"}));class jd extends M{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
      <div class="viewer-container">
        <div class="d-flex justify-content-between align-items-end mb-2">
            <label class="d-block small text-muted text-uppercase fw-semibold mb-0" style="font-size: 0.7rem;">
                ${e}
            </label>
            
            <div class="input-group input-group-sm" style="width: 220px;">
                <span class="input-group-text bg-white border-end-0 text-muted ps-2 pe-1"><i class="fa-solid fa-search"></i></span>
                <input type="text" class="form-control form-control-sm border-start-0 shadow-none ps-1" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
                ${this._searchTerm?`<button class="btn btn-outline-secondary border-start-0 bg-white text-muted" id="btn-clear-${this.id}"><i class="fa-solid fa-times"></i></button>`:""}
            </div>
        </div>
        
        <div class="card shadow-sm border-0 overflow-hidden">
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle mb-0">
                    <thead class="table-light text-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-dark small" style="border-top: 2px solid #dee2e6;"></tfoot>
                </table>
            </div>
            <div id="empty-state-${this.id}" class="text-center py-3 text-muted small bg-light" style="display:none;">
                Sin registros coincidentes.
            </div>
        </div>
      </div>
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],r=this.columns||[];if(t.length===0)return`*${e}:* (Sin datos)`;let s=`
*${e}*:
`;s+="```\n";const i=r.map(a=>{let l=a.title.length;return t.forEach(u=>{const d=u.find(m=>m.fieldId===a.id);let f=d?String(d.value):"";a.tag==="setting-currency"&&(f=`$ ${parseFloat(f||0).toFixed(2)}`),f.length>l&&(l=f.length)}),l});return s+=r.map((a,l)=>a.title.padEnd(i[l])).join(" | ")+`
`,s+=r.map((a,l)=>"-".repeat(i[l])).join("-|-")+`
`,t.forEach(a=>{s+=r.map((l,u)=>{const d=a.find(m=>m.fieldId===l.id);let f=d?String(d.value):"";return l.tag==="setting-currency"?f=`$ ${parseFloat(f||0).toFixed(2)}`:l.tag==="setting-boolean"&&(f=f==="true"?"SI":"NO"),f.padEnd(i[u])}).join(" | ")+`
`}),s+="```\n",s}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=r=>{this._searchTerm=r.target.value,this._renderRows();const s=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!s){this.render();const i=this.querySelector(`#search-${this.id}`);i.focus(),i.setSelectionRange(i.value.length,i.value.length)}else!this._searchTerm&&s&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(e){if(this.columns.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",this.columns.forEach(t=>{const r=document.createElement("th"),s=t.alignment||(this._isNumeric(t.tag)?"right":"left");r.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",r.style.textAlign=s==="right"?"right":s==="center"?"center":"left",r.style.cursor="pointer",r.title="Click para ordenar";let i='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===t.id&&(this._sortAsc?i='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':i='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),r.innerHTML=`<span>${t.title}</span>${i}`,r.onclick=()=>{this._sortFieldId===t.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=t.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(r)})}}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let r=[...this.rows];if(this._searchTerm.trim()){const s=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);r=r.filter(i=>{const a=i.map(l=>{let u=l.value;if(typeof u=="string"&&u.startsWith("{")&&u.includes('"url"'))try{u=JSON.parse(u).text}catch{}return String(u||"").toLowerCase()}).join(" ");return s.every(l=>a.includes(l))})}if(this._sortFieldId){const s=this.columns.find(a=>a.id===this._sortFieldId),i=s?this._isNumeric(s.tag):!1;r.sort((a,l)=>{const u=a.find(A=>A.fieldId===this._sortFieldId),d=l.find(A=>A.fieldId===this._sortFieldId);let f=u?u.value:"",m=d?d.value:"",_=0;if(i){const A=parseFloat(f)||0,C=parseFloat(m)||0;_=A-C}else{if(s&&s.tag==="setting-url"){try{f=JSON.parse(f).text||""}catch{}try{m=JSON.parse(m).text||""}catch{}}_=String(f).localeCompare(String(m))}return this._sortAsc?_:_*-1})}if(r.length===0){t&&(t.style.display="block"),this._renderFooter(r);return}t&&(t.style.display="none"),r.forEach(s=>{const i=document.createElement("tr");this.columns.forEach(a=>{const l=document.createElement("td"),u=a.alignment||(this._isNumeric(a.tag)?"right":"left");l.style.textAlign=u==="right"?"right":u==="center"?"center":"left",l.className="px-3 py-2";const d=s.find(A=>A.fieldId===a.id),f=a.tag.replace("setting-","viewer-"),m=document.createElement(f);m.setAttribute("table","");const _={...d,title:"",spanEV:12,options:a.options,currency:a.currency};m.setData&&m.setData(_),l.appendChild(m),i.appendChild(l)}),e.appendChild(i)}),this._renderFooter(r)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(i=>i.total)||!e||e.length===0))return;let s="<tr>";this.columns.forEach(i=>{const a=i.alignment||(this._isNumeric(i.tag)?"right":"left"),l=a==="right"?"right":a==="center"?"center":"left";let u="";if(i.total){const d=e.reduce((f,m)=>{const _=m.find(C=>C.fieldId===i.id),A=parseFloat(_?_.value:0);return f+(isNaN(A)?0:A)},0);i.tag==="setting-currency"?u=`${i.currency||"$"} ${d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:i.tag==="setting-percentage"?u=`${d}%`:u=d}s+=`<td class="px-3 py-2" style="text-align: ${l};">${u}</td>`}),s+="</tr>",t.innerHTML=s}}customElements.define("viewer-table",jd);const WE=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:jd},Symbol.toStringTag,{value:"Module"}));class Bd extends M{render(){const e=this.getAttribute("edit-value")||"---",r=`<div class="py-1" style="${this.getCommonStyles()} white-space: pre-wrap;">${e}</div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`
*${e}*
> ${t.replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",Bd);const KE=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:Bd},Symbol.toStringTag,{value:"Module"}));class qd extends M{render(){const e=this.getAttribute("edit-value");let t={url:"#",text:"---"};try{e&&(t=JSON.parse(e))}catch{}let r=t.url;r&&!r.startsWith("http")&&r!=="#"&&(r="https://"+r);const s=this._checkExtension(r,["mp3","wav","ogg","m4a"]),i=this._checkExtension(r,["jpg","jpeg","png","gif","webp","svg"]),a=`<div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(s,i)}
          <a href="${r}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
            <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${t.text||t.url||"---"}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(a),this._attachEvents(r,t.text,s,i)}_checkExtension(e,t){if(!e||e==="#")return!1;const r=e.split("?")[0].toLowerCase();return t.some(s=>r.endsWith("."+s))}_renderActionButton(e,t){return e?`<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
              </button>`:t?`<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen">
                <i class="fa-regular fa-image"></i>
              </button>`:""}_attachEvents(e,t,r,s){if(r){const i=this.querySelector(".btn-play-audio");i&&(i.onclick=()=>this._playAudio(e,t))}if(s){const i=this.querySelector(".btn-view-image");i&&(i.onclick=()=>this._showImageModal(e,t))}}_playAudio(e,t){let r=document.getElementById("global-audio-player");if(!r){if(r=document.createElement("div"),r.id="global-audio-player",r.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const a=document.createElement("style");a.id="audio-anim-style",a.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(a)}document.body.appendChild(r)}r.innerHTML=`
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div class="small fw-bold text-dark text-truncate me-2" style="max-width: 280px;" title="${t}">
            <i class="fa-solid fa-music text-success me-2"></i>${t||"Audio Sin Título"}
        </div>
        <button class="btn btn-sm text-secondary p-0" id="close-audio" title="Cerrar" style="line-height: 1;">
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
    `;const s=r.querySelector("audio"),i=r.querySelector("#audio-loading");s.onloadstart=()=>{i.style.display="block"},s.oncanplay=()=>{i.style.display="none"},s.load(),s.play().catch(a=>console.log("Autoplay bloqueado o error:",a)),r.querySelector("#close-audio").onclick=()=>{r.remove()}}_showImageModal(e,t){const r=document.getElementById("img-preview-modal");r&&r.remove();const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById("img-preview-modal");new bootstrap.Modal(i).show(),i.addEventListener("hidden.bs.modal",()=>i.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const r=JSON.parse(t);t=`${r.text} (${r.url})`}catch{}return`*${e}:* ${t}`}}customElements.define("viewer-url",qd);const QE=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:qd},Symbol.toStringTag,{value:"Module"}));class zd extends M{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",r=e==="true",a=`
        <div style="color: ${r?"#198754":"#dc3545"}; font-size: 1.1rem; padding: 2px 0; font-weight: bold;">
            ${r?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(a,t)}}customElements.define("printer-boolean",zd);const JE=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:zd},Symbol.toStringTag,{value:"Module"}));class Hd extends M{render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",r=this.getAttribute("type")||"Visual",s=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),a=`
        <div style="${s} font-size: 1.05rem; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${i}
        </div>`;this.innerHTML=this.renderPrinterStructure(a,r)}}customElements.define("printer-currency",Hd);const YE=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:Hd},Symbol.toStringTag,{value:"Module"}));class Gd extends M{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",r=this.getCommonStyles();let s="---";e&&(s=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`
        <div style="${r} font-size: 1.05rem; padding: 2px 0;">
            ${s}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-date",Gd);const XE=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:Gd},Symbol.toStringTag,{value:"Module"}));class Wd extends M{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-email",Wd);const ZE=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:Wd},Symbol.toStringTag,{value:"Module"}));class Kd extends M{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-number",Kd);const ew=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:Kd},Symbol.toStringTag,{value:"Module"}));class Qd extends M{render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",Qd);const tw=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:Qd},Symbol.toStringTag,{value:"Module"}));class Jd extends M{render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",r=this.getCommonStyles();let s="1.05rem";t==="Facil Lectura"&&(s="1.3rem");const i=`
      <div style="${r} font-size: ${s}; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-percentage",Jd);const nw=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:Jd},Symbol.toStringTag,{value:"Module"}));class Yd extends M{render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",Yd);const rw=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:Yd},Symbol.toStringTag,{value:"Module"}));class Xd extends M{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-select",Xd);const sw=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:Xd},Symbol.toStringTag,{value:"Module"}));class Zd extends M{render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-string",Zd);const iw=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:Zd},Symbol.toStringTag,{value:"Module"}));class ef extends M{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns");this.getAttribute("title");const r=this.getAttribute("type")||"Visual";let s=[],i=[];try{e&&(s=JSON.parse(e)),t&&(i=JSON.parse(t))}catch(m){console.warn("Error parseando tabla",m)}const a=r==="Compacto",l=r==="Facil Lectura",u=`width: 100%; border-collapse: collapse; font-size: ${a?"0.75rem":l?"1rem":"0.85rem"};`,d=a?"4px":l?"12px":"8px",f=`
      <table style="${u}">
        <thead>
          <tr style="background-color: #f8f9fa;">
            ${i.map(m=>`
              <th style="padding: ${d}; border: 1px solid #dee2e6; text-align: ${m.alignment||"left"}; text-transform: uppercase; font-size: 0.7rem;">
                ${m.title}
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${s.length>0?s.map((m,_)=>`
            <tr style="background-color: ${_%2===0?"#fff":"#fcfcfc"};">
              ${i.map(A=>{const C=m.find(D=>D.fieldId===A.id)||{};return`
                  <td style="padding: ${d}; border: 1px solid #dee2e6; text-align: ${A.alignment||"left"};">
                    ${this._generateCellHTML(A,C,r)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${i.length}" style="text-align:center; padding: 20px;">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(s,i,d)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(f,r)}_renderTotalRow(e,t,r){return t.some(i=>i.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(i=>{let a="";if(i.total){const l=e.reduce((u,d)=>{const f=d.find(m=>m.fieldId===i.id);return u+(parseFloat(f==null?void 0:f.value)||0)},0);i.tag==="setting-currency"?a=`${i.currency||"$"} ${l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:a=l}return`<td style="padding: ${r}; border: 1px solid #dee2e6; text-align: ${i.alignment||"left"};">${a}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,r){const s=e.tag.replace("setting-","printer-"),i=document.createElement(s);return i.setAttribute("table",""),i.setAttribute("type",r),i.setAttribute("edit-value",t.value||""),t.bold&&i.setAttribute("bold",""),t.italic&&i.setAttribute("italic",""),t.color&&i.setAttribute("color",t.color),e.currency&&i.setAttribute("currency",e.currency),i.outerHTML}}customElements.define("printer-table",ef);const ow=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:ef},Symbol.toStringTag,{value:"Module"}));class tf extends M{render(){const e=this.getAttribute("edit-value")||"",t=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} line-height: 1.2; white-space: pre-wrap; text-align: left; font-size: 1.05rem;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-text",tf);const aw=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:tf},Symbol.toStringTag,{value:"Module"}));class nf extends M{render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let r={url:"",text:"---"};try{e&&(r=JSON.parse(e))}catch{}let s=r.url||"";try{s&&(s=decodeURI(s))}catch{}const i=`
        <div style="font-size: 1.05rem; color: #000;">
            ${r.text||"---"}
        </div>
        <div style="font-size: 0.75rem; color: #888; font-family: monospace; margin-top: 2px; word-break: break-all;">
            ${s}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-url",nf);const lw=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:nf},Symbol.toStringTag,{value:"Module"}));
