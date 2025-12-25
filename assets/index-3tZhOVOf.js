import{initializeApp as Le}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getAuth as ke,signOut as qe,signInWithEmailAndPassword as Te,createUserWithEmailAndPassword as Ie,onAuthStateChanged as je}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";import{getFirestore as Me,serverTimestamp as O,updateDoc as _,doc as z,addDoc as oe,collection as Y,deleteDoc as Ae,getDoc as xe,query as de,where as ce,orderBy as ue,getDocs as pe,setDoc as De}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const Pe={apiKey:"AIzaSyDnve1qEFSNLSkwdYcO12ZbGah_ezDlYss",authDomain:"mi-gestion-prod.firebaseapp.com",projectId:"mi-gestion-prod",storageBucket:"mi-gestion-prod.firebasestorage.app",messagingSenderId:"895564471620",appId:"1:895564471620:web:94b548353df049e0138b11",measurementId:void 0},ye=Le(Pe),X=ke(ye),j=Me(ye),ee={async register(a,e){return await Ie(X,a,e)},async login(a,e){return await Te(X,a,e)},async logout(){return await qe(X)}};class K{static async deriveKey(e,t){console.log("🔐 [Crypto] Iniciando derivación de llave (PBKDF2)...");const r=new TextEncoder,n=await crypto.subtle.importKey("raw",r.encode(e),"PBKDF2",!1,["deriveKey"]),s=await crypto.subtle.deriveKey({name:"PBKDF2",salt:r.encode(t),iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"]);return console.log("✅ [Crypto] Llave derivada con éxito."),s}static async encrypt(e,t){console.log("🔒 [Crypto] Cifrando contenido...");const r=new TextEncoder,n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,r.encode(e)),o=new Uint8Array(n.length+s.byteLength);return o.set(n),o.set(new Uint8Array(s),n.length),console.log("✅ [Crypto] Contenido cifrado y codificado en Base64."),btoa(String.fromCharCode(...o))}static async decrypt(e,t){console.log("🔓 [Crypto] Intentando descifrar datos...");const r=new Uint8Array(atob(e).split("").map(l=>l.charCodeAt(0))),n=r.slice(0,12),s=r.slice(12),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:n},t,s);return console.log("✅ [Crypto] Descifrado exitoso."),new TextDecoder().decode(o)}}class be{constructor(e){this.onAuthSubmit=e,this.isLogin=!0,this.passwordVisible=!1}render(){const e=document.createElement("div");return e.className="min-h-screen flex items-center justify-center p-4 bg-gray-50",e.innerHTML=`
            <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 class="text-3xl font-extrabold text-center text-gray-900 mb-8">
                    ${this.isLogin?"Bienvenido de nuevo":"Crear cuenta segura"}
                </h2>
                
                <form id="auth-form" class="space-y-5">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" required 
                               class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                    </div>

                    <div class="relative">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input type="${this.passwordVisible?"text":"password"}" id="password" required 
                               class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                           >
                        <button type="button" id="toggle-password" class="absolute right-3 top-9 text-gray-400 hover:text-gray-600">
                            ${this.passwordVisible?"👁️‍🗨️":"👁️"}
                        </button>
                    </div>

                    ${this.isLogin?"":`
                    <div id="password-requirements" class="text-xs space-y-1 mt-2 p-3 bg-gray-50 rounded-lg">
                        <p id="req-length" class="text-gray-500">• Mínimo 8 caracteres</p>
                        <p id="req-upper" class="text-gray-500">• Una mayúscula y una minúscula</p>
                        <p id="req-number" class="text-gray-500">• Un número y un carácter especial</p>
                    </div>
                    `}

                    <button type="submit" id="submit-btn" class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95 disabled:opacity-50">
                        ${this.isLogin?"Entrar":"Registrar mi gestión"}
                    </button>
                </form>

                <p class="mt-6 text-center text-sm text-gray-500">
                    ${this.isLogin?"¿No tienes cuenta?":"¿Ya eres usuario?"}
                    <button id="toggle-auth" class="text-blue-600 font-bold hover:underline ml-1">
                        ${this.isLogin?"Regístrate":"Inicia sesión"}
                    </button>
                </p>
            </div>
        `,this.addEventListeners(e),e}addEventListeners(e){const t=e.querySelector("#auth-form"),r=e.querySelector("#password"),n=e.querySelector("#email"),s=e.querySelector("#toggle-password"),o=e.querySelector("#submit-btn");s.addEventListener("click",()=>{this.passwordVisible=!this.passwordVisible,r.type=this.passwordVisible?"text":"password",s.innerHTML=this.passwordVisible?"👁️‍🗨️":"👁️",r.focus()}),this.isLogin||r.addEventListener("input",l=>{const i=l.target.value,u={length:i.length>=8,upper:/[A-Z]/.test(i)&&/[a-z]/.test(i),number:/[0-9]/.test(i)&&/[^A-Za-z0-9]/.test(i)};this.updateRequirementUI(e,"req-length",u.length),this.updateRequirementUI(e,"req-upper",u.upper),this.updateRequirementUI(e,"req-number",u.number),o.disabled=!(u.length&&u.upper&&u.number),o.disabled?o.classList.add("opacity-50","cursor-not-allowed"):o.classList.remove("opacity-50","cursor-not-allowed")}),t.addEventListener("submit",async l=>{l.preventDefault();const i=n.value,u=r.value;o.disabled=!0;const p=o.innerText;o.innerText="Procesando...";try{await this.onAuthSubmit(i,u,this.isLogin)}catch(x){console.error("Error en autenticación:",x),o.disabled=!1,o.innerText=p}}),e.querySelector("#toggle-auth").addEventListener("click",()=>{this.isLogin=!this.isLogin,this.passwordVisible=!1;const l=document.getElementById("app");l.innerHTML="",l.appendChild(this.render())})}updateRequirementUI(e,t,r){const n=e.querySelector(`#${t}`);n&&(n.className=r?"text-green-600 font-medium":"text-gray-500",n.innerHTML=r?`✓ ${n.innerText.substring(2)}`:`• ${n.innerText.substring(2)}`)}refresh(e){const t=document.getElementById("app");t.innerHTML="",t.appendChild(this.render())}}class Ne{constructor(e,t,r,n,s,o,l){this.userName=e,this.viewTitle=t,this.vaultIsOpen=r,this.onLogout=n,this.onVaultToggle=s,this.onSearch=o,this.onHome=l}render(){const e=document.createElement("nav");e.className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-sm";const t=this.vaultIsOpen?"bg-green-100 text-green-700 border-green-200":"bg-yellow-50 text-yellow-600 border-yellow-200",r=this.vaultIsOpen?"🔓":"🔒";return e.innerHTML=`
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div class="flex items-center gap-3 cursor-pointer group" id="logo-home">
            <div class="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <div class="flex flex-col">
                <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">Mi Gestión</span>
                <span class="text-xl font-bold text-gray-800 leading-none">${this.viewTitle}</span>
            </div>
        </div>

        <div class="flex-1 w-full md:w-auto max-w-md">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <input type="text" id="search-input"
                    class="block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                    placeholder="Buscar en ${this.viewTitle.toLowerCase()}..." 
                />
            </div>
        </div>

        <div class="flex items-center gap-3">
            <button id="vault-toggle-btn" class="flex items-center gap-2 px-3 py-1.5 rounded-lg border ${t} transition hover:shadow-md active:scale-95 text-sm">
                <span>${r}</span>
                <span class="font-bold hidden sm:inline">${this.vaultIsOpen?"Abierta":"Cerrada"}</span>
            </button>
            <div class="h-6 w-px bg-gray-300 mx-1"></div>
            <button id="logout-btn" class="text-gray-500 hover:text-red-600 font-medium text-sm transition">Salir</button>
        </div>
      </div>
    `,e.querySelector("#search-input").addEventListener("input",n=>this.onSearch(n.target.value)),e.querySelector("#vault-toggle-btn").addEventListener("click",this.onVaultToggle),e.querySelector("#logout-btn").addEventListener("click",this.onLogout),e.querySelector("#logo-home").addEventListener("click",()=>{this.onHome&&this.onHome()}),e}}class M{constructor(e,t,r,n="input"){this.type=e,this.icon=t,this.label=r,this.category=n}static renderLayoutConfig(e,t=4,r=8){const n=e.colSpanEditor||t,s=e.colSpanPrint||r;return`
      <div class="mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-4">
        <div>
          <label class="text-[10px] font-bold uppercase text-gray-500 block mb-1">
            Ancho Edición (Max 4)
          </label>
          <input type="range" name="colSpanEditor" min="1" max="4" step="1" value="${n}" 
            class="w-full accent-blue-600 cursor-pointer" 
            oninput="this.nextElementSibling.innerText = this.value + '/4'">
          <div class="text-right text-xs font-bold text-blue-600">${n}/4</div>
        </div>
        <div>
          <label class="text-[10px] font-bold uppercase text-gray-500 block mb-1">
            Ancho Impresión (Max 8)
          </label>
          <input type="range" name="colSpanPrint" min="1" max="8" step="1" value="${s}" 
            class="w-full accent-gray-600 cursor-pointer" 
            oninput="this.nextElementSibling.innerText = this.value + '/8'">
          <div class="text-right text-xs font-bold text-gray-600">${s}/8</div>
        </div>
      </div>
    `}renderTemplate(e,t={},r="main"){return`
      <div class="p-2 text-gray-400 italic">Sin configuración extra</div>
      ${r==="table"?"":M.renderLayoutConfig(t)}
    `}extractConfig(e){const t=e.querySelector('[name="colSpanEditor"]')?.value,r=e.querySelector('[name="colSpanPrint"]')?.value;return{colSpanEditor:t?parseInt(t):4,colSpanPrint:r?parseInt(r):8}}renderEditor(e,t,r="form"){return""}extractValue(e){return null}renderPrint(e,t,r="normal"){return t?r==="table"?t:`<div><strong>${e.label}:</strong> ${t}</div>`:""}}class ae extends M{constructor(e,t,r){super(e,t,r,"structure")}renderTemplate(e,t={}){return`
            <div>
                <label class="text-xs font-bold text-gray-500 uppercase">Texto / Título</label>
                <input type="text" name="text" value="${t.text||""}" class="w-full p-2 border rounded font-bold" placeholder="Escribe aquí...">
            </div>
            ${M.renderLayoutConfig(t,4,8)}`}extractConfig(e){return{...super.extractConfig(e),text:e.querySelector('[name="text"]').value}}extractValue(){return null}}class Ve extends M{constructor(){super("paragraph","¶","Párrafo","structure")}renderTemplate(e,t){return`<div><label class="text-xs text-gray-500">Contenido</label><textarea name="text" class="w-full p-2 border rounded" rows="3">${t.text||""}</textarea></div>${M.renderLayoutConfig(t,4,8)}`}extractConfig(e){return{...super.extractConfig(e),text:e.querySelector('[name="text"]').value}}renderEditor(e){return`<p class="text-gray-600 mb-4 text-justify leading-relaxed">${e.text}</p>`}renderPrint(e){return`<p class="mb-2 text-justify text-sm">${e.text}</p>`}}class he extends M{constructor(e="list",t="•=",r="Lista"){super(e,t,r,"structure")}renderTemplate(e,t){return`<div><label class="text-xs text-gray-500">Items (uno por línea)</label><textarea name="items" class="w-full p-2 border rounded h-24">${t.items?t.items.join(`
`):""}</textarea></div>${M.renderLayoutConfig(t,4,8)}`}extractConfig(e){return{...super.extractConfig(e),items:e.querySelector('[name="items"]').value.split(`
`).filter(r=>r.trim()!=="")}}renderEditor(e){return`<ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">${(e.items||[]).map(t=>`<li>${t}</li>`).join("")}</ul>`}renderPrint(e){return`<ul class="list-disc pl-5 mb-2 text-sm">${(e.items||[]).map(t=>`<li>${t}</li>`).join("")}</ul>`}}class He extends ae{constructor(){super("section","🟦","Sección")}renderEditor(e){return`<div class="mt-8 mb-4 border-b-2 border-blue-100 pb-1"><h3 class="text-xl font-bold text-blue-800">${e.text}</h3></div>`}renderPrint(e){return`<h2 class="text-lg font-bold mt-6 mb-2 border-b border-gray-300 uppercase">${e.text}</h2>`}}class Fe extends ae{constructor(){super("title","H1","Título")}renderEditor(e){return`<h1 class="text-3xl font-black text-gray-900 mb-4 text-center">${e.text}</h1>`}renderPrint(e){return`<h1 class="text-3xl font-bold text-center mb-6">${e.text}</h1>`}}class Oe extends ae{constructor(){super("subtitle","H2","Subtítulo")}renderEditor(e){return`<h2 class="text-xl font-bold text-gray-700 mb-2">${e.text}</h2>`}renderPrint(e){return`<h3 class="text-lg font-bold text-gray-700 mt-4 mb-2">${e.text}</h3>`}}class Re extends he{constructor(){super("enum-list","123","Lista Enum.")}renderEditor(e){return`<ol class="list-decimal pl-5 mb-4 space-y-1 text-gray-700">${(e.items||[]).map(t=>`<li>${t}</li>`).join("")}</ol>`}renderPrint(e){return`<ol class="list-decimal pl-5 mb-2 text-sm">${(e.items||[]).map(t=>`<li>${t}</li>`).join("")}</ol>`}}class V extends M{constructor(e,t,r){super(e,t,r,"input")}getDefaults(){return["string","number","date","currency","percentage","email","url"].includes(this.type)?{ed:2,pr:4}:{ed:4,pr:8}}renderTemplate(e,t={},r="main"){const n=this.getDefaults();let s;r==="table"?s=`
            <div class="flex items-center pt-5">
                <label class="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition">
                    <input type="checkbox" name="required" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" ${t.required?"checked":""}>
                    <span class="text-[10px] font-bold uppercase text-gray-600">Es Obligatorio</span>
                </label>
            </div>`:s=`
            <div>
                <label class="text-[10px] font-bold uppercase text-gray-500">Requerido</label>
                <select name="required" class="w-full p-2 border rounded text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="false" ${t.required?"":"selected"}>Opcional</option>
                    <option value="true" ${t.required?"selected":""}>Obligatorio (*)</option>
                </select>
            </div>`;const o=r==="table"?"":M.renderLayoutConfig(t,n.ed,n.pr);return`
            <div class="grid grid-cols-2 gap-3">
                <div class="col-span-2">
                    <label class="text-[10px] font-bold uppercase text-gray-500">Etiqueta del Campo</label>
                    <input type="text" name="label" value="${t.label||""}" class="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ej: Nombre del Cliente">
                </div>
                
                ${s}

                <div>
                    <label class="text-[10px] font-bold uppercase text-gray-500">Placeholder / Ayuda</label>
                    <input type="text" name="placeholder" value="${t.placeholder||""}" class="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ayuda visual...">
                </div>
            </div>
            ${o}
            `}extractConfig(e){const t=super.extractConfig(e),r=e.querySelector('[name="required"]');let n=!1;return r&&(r.type==="checkbox"?n=r.checked:n=r.value==="true"),{...t,label:e.querySelector('[name="label"]').value,required:n,placeholder:e.querySelector('[name="placeholder"]').value}}renderInContext(e,t,r){return r==="table"?t:`
            <div class="mb-1">
                <label class="block text-sm font-bold text-gray-700 mb-1">
                    ${e.label} ${e.required?'<span class="text-red-500">*</span>':""}
                </label>
                ${t}
                ${e.placeholder?`<p class="text-[10px] text-gray-400 mt-0.5">${e.placeholder}</p>`:""}
            </div>`}attachListeners(e,t){const r=e.querySelector("input, textarea, select");r&&r.addEventListener("input",n=>{typeof t=="function"&&t(n.target.value)})}}class Be extends V{constructor(){super("string","Abc","Texto Corto")}renderEditor(e,t="",r="form"){const n=r==="table"?"w-full p-1 border rounded text-xs":"w-full p-2 border rounded transition focus:ring-2 focus:ring-blue-100 outline-none border-gray-300";return this.renderInContext(e,`<input type="text" class="${n}" value="${t}" placeholder="${e.placeholder||""}">`,r)}}class Ue extends V{constructor(){super("text","¶¶","Texto Largo")}renderEditor(e,t="",r="form"){return r==="table"?`<input type="text" class="w-full p-1 border rounded text-xs" value="${t}" title="${t}">`:this.renderInContext(e,`<textarea class="w-full p-2 border rounded h-24 focus:ring-2 focus:ring-blue-100 outline-none border-gray-300" placeholder="${e.placeholder||""}">${t}</textarea>`,r)}}class ze extends V{constructor(){super("password","🔑","Sensible")}renderEditor(e,t="",r="form"){const n=r==="table"?"w-full p-1 border rounded text-xs bg-gray-50 pr-6":"w-full p-2 border rounded bg-gray-50 border-gray-300 pr-10",s="safe_field_"+Math.random().toString(36).substring(7),o=`
        <div class="relative">
            <input type="password" 
                class="${n}" 
                value="${t}" 
                autocomplete="new-password" 
                name="${s}"
                id="${s}"
                readonly 
                onfocus="this.removeAttribute('readonly');"
            >
            <button type="button" class="toggle-pass-btn absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none transition z-10" tabindex="-1">
                👁️
            </button>
        </div>
    `;return this.renderInContext(e,o,r)}attachListeners(e){const t=e.querySelector(".toggle-pass-btn"),r=e.querySelector("input");t&&r&&(t.onclick=n=>{n.preventDefault();const s=r.type==="password";r.type=s?"text":"password",t.innerHTML=s?"👁️‍🗨️":"👁️"})}renderPrint(e,t,r){return r==="table"?"***":`<div><strong>${e.label}:</strong> ***</div>`}}class Ke extends V{constructor(){super("number","#","Numérico")}renderPrint(e,t,r){const n=t??"";return r==="table"?`<div class="text-right">${n}</div>`:`<div><strong>${e.label}:</strong> ${n}</div>`}renderEditor(e,t="",r="form"){const n=r==="table"?"w-full p-1 border rounded text-xs text-right focus:text-left transition-all":"w-full p-2 border rounded text-right focus:text-left transition-all";return this.renderInContext(e,`<input type="text" inputmode="decimal" class="${n} math-input" value="${t}" placeholder="${e.placeholder||""}">`,r)}calculateSafe(e){try{return/[^0-9+\-*/().\s]/.test(e)?null:new Function("return "+e)()}catch{return null}}attachListeners(e,t){const r=e.querySelector(".math-input");r&&(r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),r.blur())}),r.addEventListener("blur",()=>{const n=r.value;if(!n){typeof t=="function"&&t("");return}const s=n.replace(/,/g,".").trim();if(!isNaN(s)){const o=parseFloat(s);r.value=o*1,typeof t=="function"&&t(o);return}if(/[+\-*/]/.test(s)){const o=this.calculateSafe(s);if(o!==null&&isFinite(o)){const l=parseFloat(o.toFixed(4));r.value=l*1,typeof t=="function"&&t(l)}}}))}}class Ge extends V{constructor(){super("currency","💲","Moneda")}extractConfig(e){const t=super.extractConfig(e);return t.symbol=e.querySelector('[name="symbol"]')?.value||"$",t}renderEditor(e,t="",r="form"){const n=e.symbol||"$",s="text-right focus:text-left transition-all";return r==="table"?this.renderInContext(e,`<div class="relative">
                <input type="text" inputmode="decimal" class="w-full p-1 pr-6 border rounded text-xs math-input ${s}" value="${t}" placeholder="0.00">
                <span class="absolute right-1 top-1 text-gray-400 text-[10px] font-bold pointer-events-none">${n}</span>
             </div>`,r):this.renderInContext(e,`<div class="relative">
            <input type="text" inputmode="decimal" class="w-full p-2 pr-8 border rounded focus:ring-2 focus:ring-blue-100 outline-none border-gray-300 font-mono math-input ${s}" value="${t}" placeholder="${e.placeholder||"0.00"}">
            <span class="absolute right-3 top-2 text-gray-500 font-bold select-none pointer-events-none">${n}</span>
         </div>`,r)}attachListeners(e,t){const r=e.querySelector(".math-input");r&&(r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),r.blur())}),r.addEventListener("blur",()=>{const n=r.value;if(!n){typeof t=="function"&&t("");return}const s=n.replace(/,/g,".").replace(/[^0-9+\-*/().\s]/g,"");let o=null;if(!isNaN(s))o=parseFloat(s);else if(/[+\-*/]/.test(s))try{o=new Function("return "+s)()}catch{}o!==null&&isFinite(o)&&(r.value=o.toFixed(2),typeof t=="function"&&t(parseFloat(o.toFixed(2))))}))}renderPrint(e,t,r){const n=e.symbol||"$",s=parseFloat(t),o=isNaN(s)?t||"0.00":s.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2}),l=`${n} ${o}`;return r==="table"?`<div class="text-right font-mono">${l}</div>`:`<div><strong>${e.label}:</strong> <span class="font-mono">${l}</span></div>`}}class Je extends V{constructor(){super("percentage","%","Porcentaje")}renderEditor(e,t="",r="form"){return r==="table"?`<div class="relative">
             <input type="text" inputmode="decimal" class="w-full p-1 pr-4 border rounded text-xs text-right focus:text-left math-input" value="${t}" placeholder="0">
             <span class="absolute right-1 top-1 text-gray-400 text-[10px] pointer-events-none">%</span>
        </div>`:this.renderInContext(e,`<div class="relative">
            <input type="text" inputmode="decimal" class="w-full p-2 pr-8 border rounded text-right focus:text-left math-input font-mono" value="${t}" placeholder="${e.placeholder||""}">
            <span class="absolute right-3 top-2 text-gray-500 pointer-events-none">%</span>
        </div>`,r)}attachListeners(e,t){const r=e.querySelector(".math-input");r&&(r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),r.blur())}),r.addEventListener("blur",()=>{const n=r.value;if(!n){typeof t=="function"&&t("");return}const s=n.replace(/,/g,".").replace(/[^0-9+\-*/().\s]/g,"");let o=null;if(!isNaN(s))o=parseFloat(s);else if(/[+\-*/]/.test(s))try{o=new Function("return "+s)()}catch{}o!==null&&isFinite(o)&&(r.value=parseFloat(o.toFixed(2)),typeof t=="function"&&t(parseFloat(o.toFixed(2))))}))}renderPrint(e,t,r){return`<div><strong>${e.label}:</strong> ${t}%</div>`}}class _e extends V{constructor(){super("boolean","☑️","Si/No")}renderEditor(e,t,r="form"){return this.renderInContext(e,'<select class="w-full p-2 border rounded"><option>No</option><option>Si</option></select>',r)}}class We extends V{constructor(){super("select","▼","Opciones")}renderTemplate(e,t,r="main"){const n=this.getDefaults();let s;r==="table"?s=`
            <div class="flex items-center pt-5">
                <label class="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition">
                    <input type="checkbox" name="required" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" ${t.required?"checked":""}>
                    <span class="text-[10px] font-bold uppercase text-gray-600">Es Obligatorio</span>
                </label>
            </div>`:s=`
            <div>
                <label class="text-[10px] font-bold uppercase text-gray-500">Requerido</label>
                <select name="required" class="w-full p-2 border rounded text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="false" ${t.required?"":"selected"}>Opcional</option>
                    <option value="true" ${t.required?"selected":""}>Obligatorio (*)</option>
                </select>
            </div>`;const o=r==="table"?"":M.renderLayoutConfig(t,n.ed,n.pr);return`
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2">
                <label class="text-[10px] font-bold uppercase text-gray-500">Etiqueta</label>
                <input type="text" name="label" value="${t.label||""}" class="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            </div>
            ${s}
            <div>
                 <label class="text-[10px] font-bold uppercase text-gray-500">Placeholder</label>
                 <input type="text" name="placeholder" value="${t.placeholder||""}" class="w-full p-2 border rounded text-sm">
            </div>
             <div class="col-span-2 mt-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase">Opciones (sep. coma)</label>
                <input type="text" name="options" value="${t.options||""}" class="w-full p-2 border rounded text-sm" placeholder="Opción A, Opción B, Opción C">
            </div>
        </div>
        ${o}
    `}extractConfig(e){const t=super.extractConfig(e);return t.options=e.querySelector('[name="options"]').value,t}renderEditor(e,t,r="form"){const n=(e.options||"").split(",").map(l=>l.trim()),o=`<select class="${r==="table"?"w-full p-1 border rounded text-xs":"w-full p-2 border rounded bg-white"}">
        ${e.placeholder?`<option value="" disabled selected>${e.placeholder}</option>`:""}
        ${n.map(l=>`<option value="${l}" ${t===l?"selected":""}>${l}</option>`).join("")}
    </select>`;return this.renderInContext(e,o,r)}}class Ye extends V{constructor(){super("date","📅","Fecha")}renderEditor(e,t="",r="form"){return this.renderInContext(e,`<input type="date" class="w-full p-2 border rounded" value="${t}">`,r)}renderPrint(e,t,r){return`<div><strong>${e.label}:</strong> ${t}</div>`}}class Ze extends V{constructor(){super("email","@","Email")}renderEditor(e,t="",r="form"){return this.renderInContext(e,`<input type="email" class="w-full p-2 border rounded" value="${t}" placeholder="${e.placeholder||""}">`,r)}}window.MediaViewer||(window.MediaViewer={audioPlayer:null,audioContainer:null,init(){if(document.getElementById("global-media-viewer-styles"))return;const a=document.createElement("style");a.id="global-media-viewer-styles",a.innerHTML=`
                @media print {
                    .media-screen-only { display: none !important; }
                    .media-print-only { display: block !important; }
                }
                @media screen {
                    .media-print-only { display: none !important; }
                }
            `,document.head.appendChild(a),this.createAudioPlayer(),this.createImageModal()},createAudioPlayer(){const a=document.createElement("div");a.id="fixed-audio-player",a.className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-2xl rounded-xl p-4 w-80 z-[100] hidden animate-fade-in flex flex-col gap-2 media-screen-only",a.innerHTML=`
                <div class="flex justify-between items-start">
                    <div class="flex items-center gap-2 overflow-hidden">
                        <span class="text-2xl">🎵</span>
                        <div class="flex flex-col overflow-hidden">
                            <span class="text-[10px] font-bold uppercase text-blue-600">Reproduciendo</span>
                            <span id="media-audio-title" class="text-sm font-bold text-gray-800 truncate block w-full">Audio</span>
                        </div>
                    </div>
                    <button onclick="window.MediaViewer.closeAudio()" class="text-gray-400 hover:text-red-500 text-xl leading-none">&times;</button>
                </div>
                <audio id="media-audio-element" controls class="w-full h-8 mt-1 focus:outline-none"></audio>
            `,document.body.appendChild(a),this.audioContainer=a,this.audioPlayer=a.querySelector("audio")},createImageModal(){const a=document.createElement("div");a.id="image-view-modal",a.className="fixed inset-0 z-[110] bg-black/90 hidden flex items-center justify-center p-4 backdrop-blur-sm media-screen-only",a.onclick=e=>{e.target===a&&this.closeImage()},a.innerHTML=`
                <div class="relative max-w-full max-h-full flex flex-col items-center">
                    <img id="media-modal-img" src="" class="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain bg-black">
                    <div id="media-img-caption" class="mt-2 text-white/90 text-sm font-bold bg-black/50 px-3 py-1 rounded-full"></div>
                    <button onclick="window.MediaViewer.closeImage()" class="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300">Cerrar [ESC]</button>
                </div>
            `,document.body.appendChild(a),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeImage()})},playAudio(a,e){this.init(),this.audioPlayer||this.createAudioPlayer(),this.audioPlayer.src=a,document.getElementById("media-audio-title").textContent=e||"Audio",this.audioContainer.classList.remove("hidden"),this.audioPlayer.play().catch(t=>console.warn("Autoplay bloqueado",t))},closeAudio(){this.audioPlayer&&(this.audioPlayer.pause(),this.audioContainer.classList.add("hidden"))},showImage(a,e){this.init();const t=document.getElementById("image-view-modal"),r=document.getElementById("media-modal-img"),n=document.getElementById("media-img-caption");r.src=a,n.textContent=e||"",t.classList.remove("hidden")},closeImage(){const a=document.getElementById("image-view-modal");a&&a.classList.add("hidden")}},window.addEventListener("DOMContentLoaded",()=>window.MediaViewer.init()));class Qe extends V{constructor(){super("url","🔗","Enlace"),window.MediaViewer&&window.MediaViewer.init&&window.MediaViewer.init()}isAudio(e){return/\.(mp3|ogg|wav|m4a|aac)(\?.*)?$/i.test(e)}isImage(e){return/\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i.test(e)}parseValue(e){if(typeof e=="object"&&e!==null)return{url:e.url||"",text:e.text||""};if(typeof e=="string"&&e.trim().startsWith("{"))try{return JSON.parse(e)}catch{return{url:e,text:""}}return{url:e||"",text:""}}renderEditor(e,t="",r="form"){const n=this.parseValue(t);return r==="table"?`
            <div class="url-group min-w-[200px] flex flex-col gap-1">
                <input type="text" data-role="text" class="w-full p-1 border rounded text-xs focus:ring-1 focus:ring-blue-500 outline-none" 
                    value="${n.text}" placeholder="Texto">
                <input type="url" data-role="url" class="w-full p-1 border rounded text-xs text-blue-600 focus:ring-1 focus:ring-blue-500 outline-none" 
                    value="${n.url}" placeholder="URL">
            </div>
        `:this.renderInContext(e,`
        <div class="url-group grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="relative">
                <span class="absolute left-2 top-2 text-[10px] font-bold text-gray-400 uppercase">Texto del Enlace</span>
                <input type="text" data-role="text" class="w-full pt-5 pb-2 px-2 border rounded focus:ring-2 focus:ring-blue-100 outline-none border-gray-300 text-sm" 
                    value="${n.text}" placeholder="Ej: Web Oficial">
            </div>
            <div class="relative">
                <span class="absolute left-2 top-2 text-[10px] font-bold text-gray-400 uppercase">Dirección (URL)</span>
                <input type="url" data-role="url" class="w-full pt-5 pb-2 px-2 border rounded focus:ring-2 focus:ring-blue-100 outline-none border-gray-300 text-sm font-mono text-blue-600" 
                    value="${n.url}" placeholder="https://...">
            </div>
        </div>
    `,r)}attachListeners(e,t){const r=e.querySelector('[data-role="text"]'),n=e.querySelector('[data-role="url"]');if(!r||!n)return;const s=()=>{const o={text:r.value,url:n.value};typeof t=="function"&&t(o),e.value=o};r.addEventListener("input",s),n.addEventListener("input",s)}extractValue(e){if(e.value)return e.value;const t=e.querySelector('[data-role="text"]')?.value||"",r=e.querySelector('[data-role="url"]')?.value||"";return{text:t,url:r}}renderPrint(e,t,r){const n=this.parseValue(t);if(!n.url)return r==="table"?"-":"";const s=n.text||"Enlace",o=n.url.replace(/["'<>;]/g,""),l=s.replace(/["'<>;]/g,""),i=`
        <div class="media-print-only">
             <span class="text-gray-900">${s}</span>
             <div class="text-[9px] text-gray-400 mt-0.5 break-all leading-tight">${o}</div>
        </div>
    `;let u="";this.isAudio(o)?u=`
            <button type="button" 
                class="media-screen-only inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 text-pink-700 hover:bg-pink-100 hover:text-pink-900 border border-pink-200 rounded-full transition group"
                onclick="window.MediaViewer.playAudio('${o}', '${l}')">
                <span class="text-sm group-hover:scale-110 transition-transform">🎵</span>
                <span class="text-xs font-bold">Reproducir ${s}</span>
            </button>
        `:this.isImage(o)?u=`
            <button type="button" 
                class="media-screen-only inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-900 border border-purple-200 rounded-full transition group"
                onclick="window.MediaViewer.showImage('${o}', '${l}')">
                <span class="text-sm group-hover:scale-110 transition-transform">🖼️</span>
                <span class="text-xs font-bold">Ver ${s}</span>
            </button>
        `:u=`
            <a href="${o}" target="_blank" rel="noopener noreferrer" 
               class="media-screen-only text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 break-all">
               ${s} <span class="text-[10px]">↗</span>
            </a>
        `;const p=`<div class="inline-block align-top">${u}${i}</div>`;return r==="table"?p:`<div><strong>${e.label}:</strong> ${p}</div>`}}window.TableDesignerUtils={getColsFromDOM:a=>{const t=document.getElementById(`cols-list-${a}`).querySelectorAll(".table-col-block");return Array.from(t).map(r=>{const n=r.dataset.type,s=T.get(n),o=r.querySelector(".element-config-area"),l=s.extractConfig(o);return{type:n,config:l}})},getColsHtml:(a,e)=>!e||e.length===0?'<div class="text-xs text-gray-400 italic text-center py-8 border-2 border-dashed border-gray-300 rounded-lg bg-white/50">Sin columnas definidas.<br>Añade una abajo.</div>':e.map((t,r)=>{const n=T.get(t.type),s=`${a}-col-${r}`,o=n.renderTemplate(s,t.config,"table");return`
            <div class="table-col-block group relative bg-white border border-gray-200 rounded-xl p-3 mb-3 hover:border-blue-400 hover:shadow-md transition animate-fade-in" data-type="${t.type}">
                <div class="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">${n.icon}</span>
                        <span class="text-xs font-bold uppercase text-blue-600">${n.label}</span>
                    </div>
                    <div class="flex gap-1 items-center bg-gray-50 rounded-lg p-0.5 border border-gray-100">
                         <button type="button" title="Subir" onclick="window.TableDesignerUtils.moveCol('${a}', ${r}, -1)" class="w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-gray-400 hover:text-blue-600 transition disabled:opacity-30 disabled:cursor-not-allowed" ${r===0?"disabled":""}>↑</button>
                        <button type="button" title="Bajar" onclick="window.TableDesignerUtils.moveCol('${a}', ${r}, 1)" class="w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-gray-400 hover:text-blue-600 transition disabled:opacity-30 disabled:cursor-not-allowed" ${r===e.length-1?"disabled":""}>↓</button>
                        <div class="w-px h-4 bg-gray-200 mx-1"></div>
                        <button type="button" title="Eliminar" onclick="window.TableDesignerUtils.removeCol('${a}', ${r})" class="w-6 h-6 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-gray-400 hover:text-red-500 transition">🗑️</button>
                    </div>
                </div>
                <div class="element-config-area">
                    ${o}
                </div>
            </div>
        `}).join(""),renderCols:(a,e)=>{const t=document.getElementById(`cols-list-${a}`),r=document.getElementById(`columns-input-${a}`);r.value=JSON.stringify(e),t.innerHTML=window.TableDesignerUtils.getColsHtml(a,e)},addCol:a=>{let e=window.TableDesignerUtils.getColsFromDOM(a);const r=document.getElementById(`add-col-type-${a}`).value;e.push({type:r,config:{}}),window.TableDesignerUtils.renderCols(a,e)},removeCol:(a,e)=>{let t=window.TableDesignerUtils.getColsFromDOM(a);confirm("¿Eliminar esta columna?")&&(t.splice(e,1),window.TableDesignerUtils.renderCols(a,t))},moveCol:(a,e,t)=>{let r=window.TableDesignerUtils.getColsFromDOM(a);const n=e+t;[r[e],r[n]]=[r[n],r[e]],window.TableDesignerUtils.renderCols(a,r)}};window.TableEditorUtils={currentOnSave:null,openModal:(a,e,t,r="Editar Item")=>{window.TableEditorUtils.currentOnSave=t;const n=document.createElement("div");n.id="table-editor-modal",n.className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in",n.innerHTML=`
            <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
                <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
                    <h3 class="font-bold text-gray-800 text-lg">${r}</h3>
                    <button id="modal-close-x" class="text-gray-400 hover:text-red-500 font-bold text-xl px-2">×</button>
                </div>
                <div id="table-modal-form" class="p-6 overflow-y-auto space-y-5"></div>
                <div class="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-2">
                    <button id="modal-cancel-btn" class="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-200 rounded-xl">Cancelar</button>
                    <button id="modal-save-btn" class="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200">Guardar</button>
                </div>
            </div>
        `,document.body.appendChild(n);const s=n.querySelector("#table-modal-form"),o={...e};a.forEach((i,u)=>{const p=T.get(i.type),x=i.config?i.config.label:i.header,C=i.config||{label:x},A=e[x]!==void 0?e[x]:"",I=document.createElement("div");I.className="table-modal-field",I.innerHTML=p.renderEditor(C,A,"form"),s.appendChild(I),p.attachListeners?p.attachListeners(I,N=>{o[x]=N}):I.addEventListener("input",N=>{N.target.matches("input, select, textarea")&&(o[x]=N.target.value)})});const l=()=>{document.getElementById("table-editor-modal").remove(),window.TableEditorUtils.currentOnSave=null};n.querySelector("#modal-close-x").onclick=l,n.querySelector("#modal-cancel-btn").onclick=l,n.querySelector("#modal-save-btn").onclick=()=>{t(o),l()}}};class Xe extends M{constructor(){super("table","▦","Tabla Dinámica","complex")}renderTemplate(e,t={}){const r=t.columns||[],n=JSON.stringify(r).replace(/"/g,"&quot;"),s=T.getGrouped().input.items,o=window.TableDesignerUtils.getColsHtml(e,r);return`
            <div class="space-y-4 table-designer" data-id="${e}">
                <div>
                    <label class="text-[10px] font-bold uppercase text-gray-500">Título de la Tabla</label>
                    <input type="text" name="label" value="${t.label||""}" class="w-full p-2 border rounded text-sm font-bold text-gray-700 placeholder-gray-300">
                </div>
                <div class="border rounded-lg p-3 bg-white border-gray-200">
                     <label class="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Configuración de Columnas</label>
                     <div class="columns-list mb-4 min-h-[50px] bg-slate-100 p-3 rounded-xl border border-slate-200 shadow-inner" id="cols-list-${e}">
                        ${o}
                     </div>
                     <div class="flex gap-2 items-center bg-white p-2 rounded border border-gray-200 shadow-sm">
                        <div class="flex-1">
                             <select id="add-col-type-${e}" class="w-full p-2 border rounded text-xs bg-gray-50 outline-none cursor-pointer">
                                ${s.map(l=>`<option value="${l.type}">${l.icon} ${l.label}</option>`).join("")}
                             </select>
                        </div>
                        <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-blue-700 transition" onclick="window.TableDesignerUtils.addCol('${e}')">
                            + Añadir
                        </button>
                     </div>
                     <input type="hidden" name="columns" id="columns-input-${e}" value="${n}">
                </div>
            </div>
            ${M.renderLayoutConfig(t,4,8)} 
        `}extractConfig(e){const t=super.extractConfig(e),n=e.querySelector(".table-designer").dataset.id,s=window.TableDesignerUtils.getColsFromDOM(n);return{...t,label:e.querySelector('[name="label"]').value,columns:s}}renderEditor(e,t=[]){const r=Array.isArray(t)?t:[],n=e.columns,s=JSON.stringify(n).replace(/"/g,"&quot;"),o=JSON.stringify(r).replace(/"/g,"&quot;"),l=n.map((u,p)=>{const x=u.config?u.config.label:u.header;return`<th class="px-3 py-2 border-b font-bold tracking-wider min-w-[120px] whitespace-nowrap ${u.type==="number"||u.type==="currency"?"text-right":"text-left"}">${x}</th>`}).join("");let i="";return n.some(u=>u.type==="number"||u.type==="currency")&&(i=`<tfoot><tr>${n.map((p,x)=>x===0&&p.type!=="number"&&p.type!=="currency"?'<th class="px-3 py-2 border-t-2 border-gray-300 bg-gray-50 text-left font-bold text-gray-600 uppercase text-[10px]">Totales</th>':p.type==="number"||p.type==="currency"?`<th class="px-3 py-2 border-t-2 border-gray-300 bg-gray-50 text-right font-bold text-blue-800 text-sm js-total-col" data-col-index="${x}" data-type="${p.type}" data-symbol="${p.config?p.config.symbol:""}">-</th>`:'<th class="px-3 py-2 border-t-2 border-gray-300 bg-gray-50"></th>').join("")}<th class="border-t-2 border-gray-300 bg-gray-50"></th></tr></tfoot>`),`
        <div class="mb-8 table-container" 
             data-cols="${s}" 
             data-label="${e.label||"Tabla"}" 
             data-initial-value="${o}">
            
            <div class="flex flex-wrap justify-between items-end mb-3 gap-2">
                <label class="block text-sm font-bold text-blue-800 uppercase tracking-wide">${e.label}</label>
                
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="table-search-box hidden opacity-0 transition-all duration-300 relative">
                         <input type="text" placeholder="Buscar..." class="pl-7 pr-2 py-1 border rounded-lg text-xs w-48 focus:w-64 outline-none bg-white focus:ring-2 focus:ring-blue-200">
                         <span class="absolute left-2 top-1.5 text-gray-400 text-xs">🔍</span>
                    </div>
                    
                    <span class="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full js-row-counter">0 items</span>
                    
                    <div class="h-4 w-px bg-gray-300 mx-1"></div>
                    
                    <label class="cursor-pointer text-gray-500 hover:text-green-600 transition" title="Importar CSV">
                        <span class="text-lg">📥</span>
                        <input type="file" accept=".csv" class="hidden js-import-csv">
                    </label>
                    <button type="button" class="text-gray-500 hover:text-blue-600 transition js-export-csv" title="Exportar CSV">
                        <span class="text-lg">📤</span>
                    </button>
                </div>
            </div>

            <div class="overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white relative">
                <table class="w-full text-sm text-left">
                    <thead class="bg-gray-50 text-gray-500 uppercase text-[10px] sticky top-0 z-10">
                        <tr>
                            ${l}
                            <th class="w-24 border-b text-center font-bold text-gray-400 bg-gray-50">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 js-table-body"></tbody>
                    ${i}
                </table>
                <div class="js-empty-state p-8 text-center text-gray-400 italic bg-gray-50/50">Cargando datos...</div>
            </div>
            
            <button type="button" class="mt-2 text-blue-600 text-xs font-bold hover:text-blue-800 hover:underline flex items-center gap-1 transition js-add-row-btn">
                <span class="bg-blue-100 text-blue-600 rounded-full w-4 h-4 flex items-center justify-center">+</span> Agregar Fila
            </button>
        </div>`}attachListeners(e,t){const r=e.querySelector(".table-container");if(!r)return;const n=JSON.parse(r.dataset.cols),s=JSON.parse(r.dataset.initialValue),o=r.querySelector(".js-table-body"),l=r.querySelector(".js-empty-state"),i=r.querySelector(".js-row-counter"),u=r.querySelectorAll(".js-total-col"),p=r.querySelector(".table-search-box"),x=r.querySelector(".table-search-box input"),C=()=>{o.innerHTML="",s.length>10?p.classList.remove("hidden","opacity-0"):x.value||p.classList.add("hidden","opacity-0"),s.length===0?(l.classList.remove("hidden"),l.textContent="No hay registros.",N([])):(l.classList.add("hidden"),x&&x.value?I(x.value):(s.forEach((d,c)=>A(d,c)),N(s))),i.textContent=`${s.length} items`},A=(d,c)=>{const b=document.createElement("tr");b.className="group hover:bg-blue-50/50 transition animate-fade-in";const $=n.map(L=>{const D=T.get(L.type),h=L.config?L.config.label:L.header,y=d[h],g=L.config||{label:h};return`<td class="p-2 border-b align-middle bg-white text-sm text-gray-700">${D.renderPrint(g,y,"table")}</td>`}).join(""),q=`
            <td class="p-1 border-b text-center align-middle whitespace-nowrap">
                <div class="flex items-center justify-center gap-1">
                     <button type="button" class="text-gray-400 hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition js-btn-up" title="Subir">↑</button>
                    <button type="button" class="text-gray-400 hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition js-btn-down" title="Bajar">↓</button>
                    <div class="w-px h-4 bg-gray-200 mx-1"></div>
                    <button type="button" class="text-gray-400 hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition js-btn-edit" title="Editar">✏️</button>
                    <button type="button" class="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition js-btn-del" title="Eliminar">🗑️</button>
                </div>
            </td>
        `;b.innerHTML=$+q,o.appendChild(b),b.querySelector(".js-btn-del").onclick=()=>m.deleteRow(c),b.querySelector(".js-btn-edit").onclick=()=>m.editRow(c),b.querySelector(".js-btn-up").onclick=()=>m.moveRow(c,-1),b.querySelector(".js-btn-down").onclick=()=>m.moveRow(c,1)},I=d=>{const c=d.toLowerCase().split(/\s+/).filter(Boolean),b=[];o.innerHTML="",s.forEach(($,q)=>{const L=Object.values($).join(" ").toLowerCase();(c.length===0||c.every(h=>L.includes(h)))&&(A($,q),b.push($))}),b.length===0&&s.length>0?(l.textContent="Sin coincidencias.",l.classList.remove("hidden")):l.classList.add("hidden"),N(b)},N=d=>{u.forEach(c=>{const b=parseInt(c.dataset.colIndex),$=n[b],q=c.dataset.type,L=c.dataset.symbol||"",D=$.config?$.config.label:$.header,h=d.reduce((y,g)=>{const v=parseFloat(g[D]);return y+(isNaN(v)?0:v)},0);q==="currency"?c.textContent=`${L} ${h.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2})}`:c.textContent=parseFloat(h.toFixed(4))*1})},f=()=>{t(s)},m={addRow:()=>{window.TableEditorUtils.openModal(n,{},d=>{s.push(d),C(),f()},"Nuevo Item")},editRow:d=>{const c=s[d];window.TableEditorUtils.openModal(n,c,b=>{s[d]=b,C(),f()},"Editar Item")},deleteRow:d=>{confirm("¿Eliminar esta fila?")&&(s.splice(d,1),C(),f())},moveRow:(d,c)=>{const b=d+c;b>=0&&b<s.length&&([s[d],s[b]]=[s[b],s[d]],C(),f())},importCSV:d=>{const c=new FileReader;c.onload=b=>{const q=b.target.result.split(`
`).filter(g=>g.trim()!=="");if(q.length<2)return alert("El archivo CSV no tiene datos o encabezados válidos.");const L=g=>{const v=[];let w="",E=!1;for(let k=0;k<g.length;k++){const H=g[k];H==='"'?E&&g[k+1]==='"'?(w+='"',k++):E=!E:H===","&&!E?(v.push(w.trim()),w=""):w+=H}return v.push(w.trim()),v},D=L(q[0]),h=new Map;D.forEach((g,v)=>h.set(g,v));let y=0;for(let g=1;g<q.length;g++){const v=L(q[g]);if(v.length>0&&v.some(w=>w)){const w={};n.forEach(E=>{const k=E.config?E.config.label:E.header;if(h.has(k)){const H=h.get(k);let B=v[H]||"";B=B.replace(/^"|"$/g,""),w[k]=B}else{const H={};let B=!1;D.forEach((te,Se)=>{if(te.startsWith(`${k} (`)){const Ce=te.substring(k.length+2,te.length-1);let re=v[Se]||"";re=re.replace(/^"|"$/g,""),H[Ce]=re,B=!0}}),B&&(w[k]=H)}}),Object.keys(w).length>0&&(s.push(w),y++)}}alert(`Importación completada: ${y} items añadidos.`),C(),f()},c.readAsText(d)},exportCSV:()=>{if(s.length===0)return alert("Nada que exportar.");const d=y=>{let g=String(y??"");return g=g.replace(/"/g,'""'),g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g}"`:g},c=new Map;s.forEach(y=>{n.forEach((g,v)=>{const w=g.config?g.config.label:g.header,E=y[w];typeof E=="object"&&E!==null&&!Array.isArray(E)&&(c.has(v)||c.set(v,new Set),Object.keys(E).forEach(k=>c.get(v).add(k)))})});let b=[];const $=new Map;n.forEach((y,g)=>{const v=y.config?y.config.label:y.header;if(c.has(g)){const w=Array.from(c.get(g));w.forEach(E=>{b.push(d(`${v} (${E})`))}),$.set(g,{baseHeader:v,keys:w})}else b.push(d(v))});const q=[b.join(",")];s.forEach(y=>{let g=[];n.forEach((v,w)=>{if(c.has(w)){const{baseHeader:E,keys:k}=$.get(w),H=y[E]||{};k.forEach(B=>{g.push(d(H[B]))})}else{const E=v.config?v.config.label:v.header;g.push(d(y[E]))}}),q.push(g.join(","))});const L=new Blob([q.join(`
`)],{type:"text/csv;charset=utf-8;"}),D=URL.createObjectURL(L),h=document.createElement("a");h.href=D,h.download=`${r.dataset.label||"export"}.csv`,document.body.appendChild(h),h.click(),document.body.removeChild(h)}};C(),r.querySelector(".js-add-row-btn")&&(r.querySelector(".js-add-row-btn").onclick=m.addRow),r.querySelector(".js-import-csv")&&(r.querySelector(".js-import-csv").onchange=d=>{d.target.files[0]&&(m.importCSV(d.target.files[0]),d.target.value="")}),r.querySelector(".js-export-csv")&&(r.querySelector(".js-export-csv").onclick=m.exportCSV),x&&x.addEventListener("input",d=>{I(d.target.value)})}extractValue(e){return[]}renderPrint(e,t){if(!t||t.length===0)return"";const r=e.columns;let n={};r.forEach(o=>{(o.type==="number"||o.type==="currency")&&(n[o.config?o.config.label:o.header]=0)});const s=t.map(o=>`<tr>${r.map(i=>{const u=T.get(i.type),p=i.config?i.config.label:i.header,x=i.config||{label:p};if(i.type==="number"||i.type==="currency"){const A=parseFloat(o[p]);isNaN(A)||(n[p]+=A)}return`<td class="border border-gray-300 p-2 align-top">${u.renderPrint(x,o[p],"table")}</td>`}).join("")}</tr>`).join("");return`
            <div class="mb-6 break-inside-avoid">
                <h4 class="font-bold text-sm mb-2 uppercase border-l-4 border-blue-500 pl-2 text-gray-700">${e.label}</h4>
                <table class="w-full text-xs border-collapse border border-gray-300">
                    <thead>
                        <tr class="bg-gray-100 text-gray-600">
                            ${r.map(o=>{const l=o.config?o.config.label:o.header;return`<th class="border border-gray-300 p-2 font-bold ${o.type==="number"||o.type==="currency"?"text-right":"text-left"}">${l}</th>`}).join("")}
                        </tr>
                    </thead>
                    <tbody>${s}</tbody>
                </table>
            </div>`}}class et{constructor(){this.elements={},this.categories={structure:{label:"Estructura",items:[]},input:{label:"Campos de Datos",items:[]},complex:{label:"Avanzado",items:[]}}}register(e){const t=new e;this.elements[t.type]=t,this.categories[t.category]&&this.categories[t.category].items.push(t)}get(e){return this.elements[e]}getGrouped(){return this.categories}}const T=new et,tt=[Fe,Oe,He,Ve,he,Re,Be,Ue,ze,Ke,Ge,Je,_e,We,Ye,Ze,Qe,Xe];tt.forEach(a=>T.register(a));class rt{constructor(e,t,r,n,s=null){this.categories=e||[],this.onSave=t,this.onCancel=r,this.onActivity=n||(()=>{}),this.initialData=s,this.elements=[],this.selectedColor=s?s.color:"blue",this.editingElementId=null}render(){const e=document.createElement("div");e.className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in";const t=document.createElement("div");t.className="bg-white w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl flex overflow-hidden relative";const r=this.initialData?this.initialData.name:"",n=this.initialData?this.initialData.icon:"📄",s=this.initialData?this.initialData.category:"";return t.innerHTML=`
            <div id="config-modal-overlay" class="absolute inset-0 z-50 bg-black/50 backdrop-blur-[2px] hidden flex items-center justify-center">
                <div class="bg-white w-full max-w-2xl rounded-xl shadow-2xl transform scale-95 transition-all flex flex-col max-h-[85vh]">
                    <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl">
                        <h3 class="font-bold text-gray-800 flex items-center gap-2">
                            <span id="modal-icon" class="text-xl"></span>
                            <span class="text-sm uppercase tracking-wider text-blue-600">Configurar Elemento</span>
                        </h3>
                        <button type="button" id="modal-close-x" class="text-gray-400 hover:text-red-500 font-bold text-xl px-2">×</button>
                    </div>
                    
                    <div id="modal-body" class="p-6 overflow-y-auto">
                        </div>

                    <div class="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end gap-2">
                        <button type="button" id="modal-cancel-btn" class="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-200 rounded-lg">Cancelar</button>
                        <button type="button" id="modal-save-btn" class="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200">Guardar Cambios</button>
                    </div>
                </div>
            </div>

            <div class="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
                <div class="p-4 border-b border-gray-200">
                    <h3 class="font-bold text-gray-700">Herramientas</h3>
                    <p class="text-xs text-gray-400">Clic para añadir</p>
                </div>
                <div class="flex-1 overflow-y-auto p-4 space-y-6">
                    ${this.renderTools()}
                </div>
            </div>

            <div class="flex-1 flex flex-col bg-gray-100">
                <div class="bg-white p-4 border-b border-gray-200 flex gap-4 items-center shadow-sm z-10">
                    <input type="text" id="tmpl-icon" value="${n}" class="w-10 h-10 text-center text-xl border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" title="Icono">
                    <div class="flex-1">
                        <input type="text" id="tmpl-name" value="${r}" placeholder="Nombre de la Plantilla" class="w-full font-bold text-lg outline-none placeholder-gray-300">
                        <div class="flex gap-2 mt-1">
                            <select id="tmpl-cat" class="text-xs border rounded bg-gray-50 p-1 bg-white cursor-pointer hover:border-blue-400">
                                ${this.categories.map(o=>`<option value="${o.id}" ${o.id===s?"selected":""}>${o.label}</option>`).join("")}
                            </select>
                            <div id="color-selector" class="flex gap-1 items-center ml-2"></div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button type="button" id="cancel-btn" class="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg">Salir</button>
                        <button type="button" id="save-btn" class="px-4 py-2 text-sm font-bold bg-black text-white rounded-lg hover:bg-gray-800 shadow-lg transition transform active:scale-95">
                            Guardar Plantilla
                        </button>
                    </div>
                </div>

                <div id="canvas-area" class="flex-1 overflow-y-auto p-8 relative">
                    <div id="elements-container" class="max-w-3xl mx-auto bg-white min-h-[500px] shadow-sm rounded-xl border border-gray-200 p-8 space-y-3 pb-20 relative">
                        <div id="empty-msg" class="text-center py-20 text-gray-300 border-2 border-dashed border-gray-100 rounded-xl select-none" style="display: block;">
                            Selecciona elementos del panel izquierdo
                        </div>
                    </div>
                </div>
            </div>
        `,e.appendChild(t),this.setupLogic(t,e),e}renderTools(){const e=T.getGrouped();return Object.values(e).map(t=>`
            <div>
                <h4 class="text-xs font-bold text-gray-400 uppercase mb-3 tracking-wider">${t.label}</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${t.items.map(r=>`
                        <button type="button" class="tool-btn flex flex-col items-center justify-center p-2 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition active:scale-95" data-type="${r.type}">
                            <span class="text-xl mb-1">${r.icon}</span>
                            <span class="text-[10px] font-bold text-gray-600 text-center leading-tight">${r.label}</span>
                        </button>
                    `).join("")}
                </div>
            </div>
        `).join("")}setupLogic(e,t){const r=e.querySelector("#elements-container"),n=e.querySelector("#empty-msg"),s=e.querySelector("#config-modal-overlay"),o=e.querySelector("#modal-body"),l=()=>{if(Array.from(r.children).forEach(m=>{m.id!=="empty-msg"&&m.remove()}),this.elements.length===0){n.style.display="block";return}else n.style.display="none";this.elements.forEach((m,d)=>{const c=T.get(m.type),b=m.config.label||m.config.text||c.label,$=[m.config.required?'<span class="text-[10px] bg-red-50 text-red-600 px-1.5 rounded font-bold">* Req</span>':"",m.config.colSpanEditor?`<span class="text-[10px] bg-gray-100 text-gray-500 px-1.5 rounded font-mono">W:${m.config.colSpanEditor}</span>`:""].join(""),q=d===0,L=d===this.elements.length-1,D="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition disabled:opacity-20 disabled:cursor-not-allowed",h=document.createElement("div");h.className="group relative p-3 border border-gray-200 bg-white rounded-lg hover:border-blue-400 hover:shadow-md transition animate-fade-in flex items-center justify-between gap-4 cursor-pointer",h.innerHTML=`
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
                        ${c.icon}
                    </div>
                    <div class="flex flex-col min-w-0">
                        <span class="text-sm font-bold text-gray-700 truncate select-none">${b}</span>
                        <div class="flex gap-1">${$}</div>
                    </div>
                </div>

                <div class="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity bg-white pl-2">
                    <div class="flex mr-2 bg-gray-50 rounded-lg p-0.5">
                        <button type="button" class="move-up-btn ${D}" title="Subir" ${q?"disabled":""}>↑</button>
                        <button type="button" class="move-down-btn ${D}" title="Bajar" ${L?"disabled":""}>↓</button>
                    </div>

                    <button type="button" class="config-btn p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Configurar">⚙️</button>
                    <div class="w-px h-4 bg-gray-200 mx-1"></div>
                    <button type="button" class="delete-btn p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Eliminar">🗑️</button>
                </div>
            `,h.onclick=()=>p(m.id),h.querySelector(".config-btn").onclick=y=>{y.stopPropagation(),p(m.id)},h.querySelector(".delete-btn").onclick=y=>{y.stopPropagation(),confirm("¿Eliminar elemento?")&&(this.elements.splice(d,1),l())},h.querySelector(".move-up-btn").onclick=y=>{y.stopPropagation(),u(d,-1)},h.querySelector(".move-down-btn").onclick=y=>{y.stopPropagation(),u(d,1)},r.appendChild(h)})},i=(f,m=null,d={})=>{const c=m||Date.now().toString();this.elements.find(b=>b.id===c)||(this.elements.push({id:c,type:f,config:d}),m||setTimeout(()=>{const b=e.querySelector("#canvas-area");b.scrollTop=b.scrollHeight,p(c)},50)),l()},u=(f,m)=>{const d=f+m;d<0||d>=this.elements.length||([this.elements[f],this.elements[d]]=[this.elements[d],this.elements[f]],l())},p=f=>{this.editingElementId=f;const m=this.elements.find(c=>c.id===f);if(!m)return;const d=T.get(m.type);e.querySelector("#modal-icon").innerText=d.icon,o.innerHTML=d.renderTemplate(f,m.config),s.classList.remove("hidden"),s.classList.add("flex")},x=()=>{s.classList.add("hidden"),s.classList.remove("flex"),o.innerHTML="",this.editingElementId=null},C=()=>{if(!this.editingElementId)return;const f=this.elements.findIndex(c=>c.id===this.editingElementId);if(f===-1)return;const m=this.elements[f],d=T.get(m.type);try{const c=d.extractConfig(o);this.elements[f].config=c,l(),x()}catch(c){alert("Error: "+c.message)}};this.initialData&&this.initialData.elements&&this.initialData.elements.forEach(f=>i(f.type,f.id,f)),e.querySelectorAll(".tool-btn").forEach(f=>{f.onclick=()=>{this.onActivity(),i(f.dataset.type)}}),e.querySelector("#modal-close-x").onclick=x,e.querySelector("#modal-cancel-btn").onclick=x,e.querySelector("#modal-save-btn").onclick=C;const A=["blue","green","red","purple","yellow","gray"],I=e.querySelector("#color-selector"),N=()=>{I.innerHTML="",A.forEach(f=>{const m=this.selectedColor===f,d=document.createElement("div");d.className=`w-4 h-4 rounded-full bg-${f}-500 cursor-pointer ${m?"ring-2 ring-offset-1 ring-gray-400 scale-110":"opacity-70 hover:opacity-100"}`,d.onclick=()=>{this.selectedColor=f,N()},I.appendChild(d)})};N(),e.querySelector("#save-btn").onclick=f=>{f.preventDefault();const m=e.querySelector("#tmpl-name").value.trim()||"Plantilla Sin Nombre",d=e.querySelector("#tmpl-icon").value.trim()||"📄",c=e.querySelector("#tmpl-cat").value;if(this.elements.length===0){alert("⚠️ Añade al menos un elemento.");return}const b=this.elements.map($=>({id:$.id,type:$.type,...$.config}));this.onSave({name:m,category:c,icon:d,color:this.selectedColor,elements:b,lastUpdate:new Date().toISOString()})},e.querySelector("#cancel-btn").onclick=()=>{t.remove(),this.onCancel()}}}class ge{constructor(e={}){this.state=structuredClone(e),this.listeners=[]}get(){return this.state}getValue(e){return e.split(".").reduce((t,r)=>t&&t[r]!=="undefined"?t[r]:void 0,this.state)}update(e,t){const r=e.split(".");let n=this.state;for(let s=0;s<r.length-1;s++){const o=r[s];n[o]||(n[o]={}),n=n[o]}n[r[r.length-1]]=t,this.notify(e,t)}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(e,t){this.listeners.forEach(r=>r(this.state,e,t))}}class nt{constructor(e,t,r,n,s,o){this.user=e,this.userKey=t,this.vaultKey=r,this.onActivity=n||(()=>{}),this.onSaveSuccess=s,this.onCancel=o,this.existingSecret=null,this.currentTemplate=null,this.stateManager=null}render(){const e=document.createElement("div");e.className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[80vh] flex flex-col animate-fade-in relative",e.innerHTML=`
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 relative z-0">
             <div class="flex items-center gap-4 w-full">
                <button type="button" id="cancel-btn-top" class="p-2 hover:bg-gray-100 rounded-full transition text-gray-500">✕</button>
                <div class="flex-1">
                    <input type="text" id="doc-title" placeholder="Título del Documento" 
                        class="text-2xl font-bold text-gray-800 placeholder-gray-300 border-none outline-none w-full bg-transparent focus:ring-0 p-0">
                </div>
                <div class="flex items-center gap-3">
                     <span id="status-indicator" class="text-xs font-bold text-gray-300 hidden sm:block">Sin cambios</span>
                     <button type="button" id="save-btn" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-100 flex items-center gap-2">
                        <span>💾</span> Guardar
                    </button>
                </div>
            </div>
        </div>
        <div id="dynamic-form-container" class="grid grid-cols-4 gap-6 pb-10 z-0"></div>
        <div class="mt-6 pt-4 border-t border-gray-100 bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl flex items-center justify-between z-20 relative">
             <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 cursor-pointer group select-none">
                    <input type="radio" name="security-level" value="1" class="hidden peer" checked>
                    <div class="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 peer-checked:bg-green-100 peer-checked:text-green-700 peer-checked:border-green-200 transition flex items-center gap-2">
                        <span>🛡️</span> <span class="text-sm font-bold">Estándar</span>
                    </div>
                </label>
                 <label class="flex items-center gap-2 cursor-pointer group relative select-none">
                    <input type="radio" name="security-level" value="2" class="hidden peer" ${this.vaultKey?"":"disabled"}>
                    <div class="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-500 peer-checked:bg-blue-100 peer-checked:text-blue-700 peer-checked:border-blue-200 transition flex items-center gap-2">
                        <span>🔒</span> <span class="text-sm font-bold">Bóveda</span>
                    </div>
                </label>
             </div>
        </div>
    `;const t=e.querySelector("#dynamic-form-container"),r=e.querySelector("#doc-title"),n=e.querySelectorAll('input[name="security-level"]');return this.existingSecret?(r.value=this.existingSecret.title,n.forEach(s=>{s.value===this.existingSecret.level&&(s.checked=!0)}),this.decryptAndRender(t)):(this.stateManager=new ge({}),this.renderFormFields(t,{})),e.querySelector("#cancel-btn-top").onclick=this.onCancel,e.querySelector("#save-btn").onclick=s=>{s.preventDefault(),this.handleSave(e)},e}async decryptAndRender(e){try{const t=this.existingSecret.level==="2"?this.vaultKey:this.userKey;if(!t)throw new Error("Llave no disponible.");const r=await K.decrypt(this.existingSecret.content,t);let n={};try{n=JSON.parse(r)}catch{n={_legacy:r}}this.stateManager=new ge(n),this.renderFormFields(e,n)}catch(t){e.innerHTML=`<span class="text-red-500 font-bold col-span-4">Error: ${t.message}</span>`}}renderFormFields(e,t){if(!this.currentTemplate?.elements)return;this.stateManager.subscribe(()=>{const n=document.querySelector("#status-indicator");n&&(n.innerText="Cambios sin guardar...",n.className="text-xs font-bold text-yellow-500 hidden sm:block"),this.onActivity()});const r={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4"};this.currentTemplate.elements.forEach(n=>{const s=T.get(n.type);if(!s)return;const o=document.createElement("div"),l=n.colSpanEditor||4;o.className=`field-wrapper animate-fade-in ${r[l]||"col-span-4"}`,o.dataset.id=n.id;const i=t[n.id]!==void 0?t[n.id]:"";o.innerHTML=s.renderEditor(n,i,"form"),e.appendChild(o),typeof s.attachListeners=="function"&&s.attachListeners(o,u=>{this.stateManager.update(n.id,u)})})}async handleSave(e){const t=e.querySelector("#doc-title").value.trim();if(!t)return alert("El documento necesita un título.");const r=e.querySelector('input[name="security-level"]:checked').value,n=r==="2"?this.vaultKey:this.userKey;if(r==="2"&&!this.vaultKey)return alert("Falta llave de Bóveda.");if(!this.userKey)return alert("Falta llave personal.");const s=this.stateManager.get();try{this.onActivity();const o=JSON.stringify(s),l=await K.encrypt(o,n),i={uid:this.user.uid,title:t,content:l,level:r,templateId:this.currentTemplate.id,updatedAt:O()};this.existingSecret?await _(z(j,"secrets",this.existingSecret.id),i):(i.createdAt=O(),await oe(Y(j,"secrets"),i)),this.onSaveSuccess()}catch(o){console.error(o),alert("Error al guardar: "+o.message)}}}class st{static print(e,t,r,n){const s=new Date().toLocaleDateString();let o='<div class="print-grid">';t&&t.elements&&t.elements.forEach(p=>{const x=T.get(p.type),C=r[p.id],A=p.colSpanPrint||8;if(x){const I=x.renderPrint(p,C,n);o+=`<div class="print-col-span-${A} field-container">${I}</div>`}}),o+="</div>";const l=this.getPrintStyles(n),i=document.createElement("iframe");i.style.position="absolute",i.style.width="0px",i.style.height="0px",i.style.border="none",i.style.visibility="hidden",document.body.appendChild(i);const u=i.contentWindow.document;u.open(),u.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Imprimir: ${e}</title>
                <style>
                    /* Reset básico */
                    * { box-sizing: border-box; }
                    body { font-family: sans-serif; color: #1a202c; background: white; }
                    h1 { margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #333; }
                    .meta { color: #666; font-size: 0.8em; margin-bottom: 20px; border-bottom: 1px solid #eee; pb: 5px; }
                    table { border-collapse: collapse; width: 100%; }
                    
                    /* Clases de Grid */
                    .print-grid { display: grid; grid-template-columns: repeat(8, 1fr); }
                    .print-col-span-1 { grid-column: span 1; }
                    .print-col-span-2 { grid-column: span 2; }
                    .print-col-span-3 { grid-column: span 3; }
                    .print-col-span-4 { grid-column: span 4; }
                    .print-col-span-5 { grid-column: span 5; }
                    .print-col-span-6 { grid-column: span 6; }
                    .print-col-span-7 { grid-column: span 7; }
                    .print-col-span-8 { grid-column: span 8; }

                    /* --- CORRECCIÓN: Clases de Utilidad Multimedia (UrlElement) --- */
                    /* En el iframe de impresión, SIEMPRE es modo impresión */
                    .media-screen-only { display: none !important; }
                    .media-print-only { display: block !important; }

                    /* Estilos Específicos del Modo */
                    ${l}
                    
                    /* Utilidades visuales */
                    .text-right { text-align: right; }
                    .text-center { text-align: center; }
                    .font-bold { font-weight: bold; }
                    .uppercase { text-transform: uppercase; }
                    .border { border: 1px solid #ccc; }
                    .p-2 { padding: 0.5rem; }
                    .font-mono { font-family: monospace; }
                    
                    /* Utilidades de texto para UrlElement impreso */
                    .text-gray-900 { color: #1a202c; }
                    .text-gray-400 { color: #cbd5e0; }
                    .text-\\[9px\\] { font-size: 9px; }
                    .mt-0\\.5 { margin-top: 0.125rem; }
                    .break-all { word-break: break-all; }
                    .leading-tight { line-height: 1.25; }
                </style>
            </head>
            <body>
                <h1>${e}</h1>
                <div class="meta">
                    Plantilla: ${t.name} • Impreso: ${s} • Modo: ${n.toUpperCase()}
                </div>
                <div class="content">
                    ${o}
                </div>
            </body>
            </html>
        `),u.close(),setTimeout(()=>{try{i.contentWindow.focus(),i.contentWindow.print()}catch(p){console.error("Error al imprimir:",p)}finally{setTimeout(()=>{document.body.removeChild(i)},2e3)}},500)}static getPrintStyles(e){return e==="compact"?`
            body { margin: 10px; padding: 0; font-size: 12px; }
            .print-grid { gap: 4px; }
            .field-container { 
                padding: 4px; 
                border: 1px solid #eee; 
                background-color: #fafafa;
            }
            h1 { font-size: 16px; }
            p, div { margin-bottom: 2px; }
            table th, table td { padding: 2px 4px; font-size: 11px; border: 1px solid #ddd; }
      `:e==="easy"?`
            body { margin: 10px; padding: 0; font-size: 18px; line-height: 1.4; }
            .print-grid { gap: 8px; }
            .field-container { 
                padding: 8px; 
                border-bottom: 1px solid #ccc;
            }
            h1 { font-size: 28px; }
            strong { color: #000; }
            table th, table td { padding: 8px; font-size: 16px; border: 1px solid #666; }
      `:`
            body { margin: 20px; padding: 20px; font-size: 14px; max-width: 1000px; margin-left: auto; margin-right: auto; }
            .print-grid { gap: 20px; }
            .field-container { 
                padding: 15px; 
                border: 1px solid #e2e8f0; 
                border-radius: 8px;
            }
            h1 { font-size: 24px; color: #2b6cb0; }
            table th { background-color: #f7fafc; padding: 8px; font-weight: bold; border: 1px solid #e2e8f0; }
            table td { padding: 8px; border: 1px solid #e2e8f0; }
      `}}class ot{constructor(e,t,r,n,s,o){this.documentData=e,this.template=t,this.userKey=r,this.vaultKey=n,this.onEdit=s,this.onClose=o,this.decryptedValues={}}render(){const e=document.createElement("div");e.className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[80vh] flex flex-col animate-fade-in relative";const t=this.documentData.title||"Sin título",r=this.documentData.level,n=r==="2"?"bg-blue-100 text-blue-700":"bg-green-100 text-green-700";e.innerHTML=`
        <div id="print-backdrop" class="fixed inset-0 z-20 hidden cursor-default"></div>

        <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 relative z-30">
            <div class="flex items-center gap-4">
                <button type="button" id="back-btn" class="p-2 hover:bg-gray-100 rounded-full transition text-gray-500">←</button>
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-2xl">${this.template.icon}</span>
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded uppercase ${n}">Nivel ${r}</span>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-800">${t}</h1>
                </div>
            </div>
            
            <div class="flex items-center gap-2 relative">
                <button type="button" id="edit-btn" class="px-4 py-2 bg-gray-100 hover:bg-blue-50 text-blue-600 font-bold rounded-lg transition flex items-center gap-2">
                    <span>✏️</span> Editar
                </button>

                <div class="relative">
                    <button type="button" id="print-toggle" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg transition flex items-center gap-2 relative z-30">
                        <span>🖨️</span> Imprimir
                    </button>
                    
                    <div id="print-menu" class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 hidden z-40 animate-slide-up">
                         <div class="p-2 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase text-center">Formato</div>
                         <button class="print-opt w-full text-left px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-700" data-mode="normal">📄 Normal</button>
                         <button class="print-opt w-full text-left px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-700" data-mode="compact">📊 Compacta</button>
                         <button class="print-opt w-full text-left px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-700" data-mode="easy">👓 Lectura Fácil</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="view-content" class="flex-1 space-y-6 pb-10 z-0">
            <div id="loading-spinner" class="text-center py-20 text-gray-400">
                <span class="animate-pulse">🔓 Descifrando documento seguro...</span>
            </div>
        </div>
    `;const s=e.querySelector("#print-toggle"),o=e.querySelector("#print-menu"),l=e.querySelector("#print-backdrop");return s.onclick=i=>{i.stopPropagation(),o.classList.contains("hidden")?(o.classList.remove("hidden"),l.classList.remove("hidden")):(o.classList.add("hidden"),l.classList.add("hidden"))},l.onclick=()=>{o.classList.add("hidden"),l.classList.add("hidden")},e.querySelectorAll(".print-opt").forEach(i=>{i.onclick=()=>{o.classList.add("hidden"),l.classList.add("hidden"),st.print(t,this.template,this.decryptedValues,i.dataset.mode)}}),e.querySelector("#back-btn").onclick=this.onClose,e.querySelector("#edit-btn").onclick=()=>this.onEdit(),this.decryptAndShow(e.querySelector("#view-content"),e.querySelector("#loading-spinner")),e}async decryptAndShow(e,t){try{const r=this.documentData.level==="2"?this.vaultKey:this.userKey;if(!r)throw new Error("Llave no disponible");const n=await K.decrypt(this.documentData.content,r);this.decryptedValues=JSON.parse(n),t.classList.add("hidden");let s='<div class="grid grid-cols-4 gap-6">';const o={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4"};this.template.elements.forEach(i=>{const u=T.get(i.type),p=this.decryptedValues[i.id];if(u){const x=i.colSpanEditor||4,C=o[x]||"col-span-4";s+=`
                    <div class="${C} p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition">
                        ${u.renderPrint(i,p,"normal")}
                    </div>
                `}}),s+="</div>";const l=document.createElement("div");l.innerHTML=s,e.appendChild(l)}catch(r){console.error(r),t.innerHTML=`<p class="text-red-500 font-bold">Error al descifrar: ${r.message}</p>`}}}let S=null,Z=null,R=null,ne=[],W=[],J="documents",G="",U="all";const P=document.getElementById("app"),le=[{id:"all",label:"Todo",icon:"📂"},{id:"personal",label:"Personal",icon:"👤"},{id:"finance",label:"Finanzas",icon:"💰"},{id:"health",label:"Salud",icon:"🏥"},{id:"legal",label:"Legal",icon:"⚖️"},{id:"work",label:"Trabajo",icon:"💼"}];async function ie(a="Interacción",e=""){if(!S)return!1;const t=z(j,"user_metadata",S.uid),r=await xe(t),n=Date.now();if(r.exists()){const s=r.data().lastActivity?.toMillis()||n,o=(n-s)/1e3/60;if(o>=300)return await se("Sesión Expirada","> 300min"),ee.logout(),!1;if(o>=100&&R)return R=null,await se("Bóveda Bloqueada","> 100min"),F(),!0}return await _(t,{lastActivity:O()}),!0}async function se(a,e){if(S)try{await oe(Y(j,"user_metadata",S.uid,"activity_logs"),{action:a,details:e,timestamp:O()})}catch(t){console.error(t)}}async function Q(){if(S){console.log("📡 [Firebase] Cargando documentos y plantillas para:",S.email);try{const a=de(Y(j,"secrets"),ce("uid","==",S.uid),ue("createdAt","desc"));ne=(await pe(a)).docs.map(n=>({id:n.id,...n.data()}));const t=de(Y(j,"templates"),ce("uid","==",S.uid),ue("createdAt","desc"));W=(await pe(t)).docs.map(n=>({id:n.id,...n.data()})),console.log(`✅ [Data] Carga completa: ${ne.length} documentos, ${W.length} plantillas.`),F()}catch(a){console.error("Error cargando datos:",a),a.code==="failed-precondition"&&alert("Falta crear un índice en Firebase. Revisa la consola (F12) para el enlace.")}}}async function at(a,e){confirm("¿Borrar elemento permanentemente?")&&await ie("Eliminar",`${a}/${e}`)&&(await Ae(z(j,a,e)),Q())}function F(){P.innerHTML="";const a=J==="documents",e=a?"Mis Documentos":"Galería de Plantillas",t=new Ne(S.email,e,!!R,()=>ee.logout(),()=>Ee(),o=>{G=o,F()},()=>{J="documents",U="all",F()});P.appendChild(t.render());const r=document.createElement("main");r.className="max-w-7xl mx-auto p-6";const n=document.createElement("div");n.className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide",n.innerHTML=le.map(o=>`
        <button class="px-4 py-2 rounded-full text-sm font-bold transition whitespace-nowrap flex items-center gap-2
            ${U===o.id?"bg-blue-600 text-white shadow-md":"bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"}"
            onclick="window.setCategory('${o.id}')">
            <span>${o.icon}</span> ${o.label}
        </button>
    `).join(""),r.appendChild(n),window.setCategory=o=>{U=o,F()};const s=document.createElement("div");s.className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",a?(s.appendChild(me("+","Nuevo Documento","blue",()=>{J="templates",U="all",G="",F()})),ne.filter(l=>{if(U!=="all"){const i=W.find(p=>p.id===l.templateId);if((i?i.category:"personal")!==U)return!1}return!(G&&l.title&&!l.title.toLowerCase().includes(G.toLowerCase()))}).forEach(l=>lt(l,s))):(s.appendChild(me("✨","Diseñar Plantilla","indigo",()=>$e())),W.filter(l=>!(U!=="all"&&(l.category||"personal")!==U||G&&!l.name.toLowerCase().includes(G.toLowerCase()))).forEach(l=>it(l,s))),r.appendChild(s),P.appendChild(r)}function me(a,e,t,r){const n=document.createElement("div");return n.className=`h-56 border-2 border-dashed border-${t}-300 bg-${t}-50/30 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-${t}-50 transition group`,n.innerHTML=`
        <div class="w-14 h-14 bg-${t}-100 rounded-full flex items-center justify-center group-hover:scale-110 transition text-${t}-600 text-3xl mb-3 font-bold">${a}</div>
        <span class="font-bold text-${t}-600">${e}</span>
    `,n.onclick=r,n}function lt(a,e){const t=W.find(o=>o.id===a.templateId)||{icon:"📄",category:"personal",name:"Desconocida"},r=a.level==="2"&&!R;let n=a.title||"Sin título";r&&(n="🔒 Protegido");const s=document.createElement("div");s.className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between h-56 border border-gray-100 relative group",s.innerHTML=`
        <div class="flex justify-between items-start">
            <span class="text-3xl">${t.icon}</span>
            <div class="flex gap-2">
                <span class="px-2 py-0.5 text-[10px] font-bold rounded ${a.level==="2"?"bg-blue-100 text-blue-700":"bg-green-100 text-green-700"}">
                    ${a.level==="2"?"Nivel 2":"Nivel 1"}
                </span>
                <button onclick="event.stopPropagation(); window.delItem('secrets', '${a.id}')" class="text-gray-300 hover:text-red-500">🗑️</button>
            </div>
        </div>
        <div class="mt-4 flex-1">
            <h3 class="font-bold text-gray-800 text-lg leading-tight line-clamp-3 ${r?"blur-sm select-none":""}">${n}</h3>
            <p class="text-xs text-gray-400 mt-2">${new Date(a.createdAt?.toMillis()).toLocaleDateString()}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-gray-50">
             <button class="w-full text-sm font-medium ${r?"text-gray-400":"text-blue-600 hover:text-blue-700"} flex items-center justify-center gap-2">
                ${r?"🔐 Abrir Bóveda":"👁️ Ver Documento"}
            </button>
        </div>
    `,s.onclick=()=>{r?Ee():ve(a,t)},e.appendChild(s)}function it(a,e){const t=document.createElement("div");t.className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col h-56 hover:shadow-md transition relative group cursor-pointer hover:border-blue-300",t.innerHTML=`
        <div class="flex justify-between items-start">
            <span class="text-4xl mb-3">${a.icon||"📄"}</span>
            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <button onclick="event.stopPropagation(); window.editTmpl('${a.id}')" 
                    class="p-1.5 bg-gray-100 hover:bg-blue-100 text-blue-600 rounded" title="Editar Plantilla">
                    ⚙️
                </button>
                <button onclick="event.stopPropagation(); window.delItem('templates', '${a.id}')" 
                    class="p-1.5 bg-gray-100 hover:bg-red-100 text-red-600 rounded" title="Borrar Plantilla">
                    🗑️
                </button>
            </div>
        </div>
        <h3 class="font-bold text-gray-800 text-lg mb-1 line-clamp-1">${a.name}</h3>
        <span class="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wide">
            ${le.find(r=>r.id===a.category)?.label||"General"}
        </span>
        
        <button class="mt-auto w-full py-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 font-bold rounded-lg transition text-sm">
            Usar esta plantilla
        </button>
    `,t.onclick=()=>we(null,a),e.appendChild(t)}window.editTmpl=a=>{const e=W.find(t=>t.id===a);e&&$e(e)};window.delItem=(a,e)=>at(a,e);function ve(a,e){P.innerHTML="";const t=()=>{we(a,e)},r=new ot(a,e,Z,R,t,()=>{J="documents",F()});P.appendChild(r.render())}function we(a,e){const t=()=>{if(S){const n=z(j,"user_metadata",S.uid);_(n,{lastActivity:O()}).catch(console.error)}};P.innerHTML="";const r=new nt(S,Z,R,t,()=>{J="documents",Q()},()=>{a?ve(a,e):(J="documents",F())});r.currentTemplate=e,r.existingSecret=a,P.appendChild(r.render())}function $e(a=null){const e=()=>{if(S){const r=z(j,"user_metadata",S.uid);_(r,{lastActivity:O()}).catch(console.error)}},t=new rt(le,async r=>{try{if(await ie(a?"Editar Plantilla":"Crear Plantilla",r.name)){const s={uid:S.uid,name:r.name,category:r.category,icon:r.icon,color:r.color,elements:r.elements,updatedAt:O()};a?(await _(z(j,"templates",a.id),s),alert("Plantilla actualizada correctamente")):(s.createdAt=O(),await oe(Y(j,"templates"),s),alert("Plantilla creada correctamente")),Q()}}catch(n){console.error(n),alert("Error al guardar: "+n.message)}},()=>{},e,a);P.appendChild(t.render())}async function Ee(){if(R)R=null,await se("Cierre Manual","Usuario cerró bóveda"),F();else{const a=prompt(`🔐 INGRESO A BÓVEDA
Introduce tu frase maestra:`);a&&await dt(a)}}async function dt(a){console.log("🔓 [Vault] Intentando abrir la bóveda con frase maestra...");try{const e=await K.deriveKey(a,"vault-salt-unique-v1"),t=z(j,"user_metadata",S.uid),r=(await xe(t)).data();if(!r||!r.vaultTest){const n=await K.encrypt("VAULT_VERIFIED",e);await _(t,{vaultTest:n,lastActivity:O()}),R=e,alert("¡Bóveda configurada!")}else await K.decrypt(r.vaultTest,e)==="VAULT_VERIFIED"&&(R=e,await ie("Bóveda Abierta","Acceso concedido"));console.log("✅ [Vault] Bóveda abierta."),F()}catch{console.error("❌ [Vault] Frase incorrecta."),alert("⛔ Frase incorrecta.")}}async function fe(a,e,t){console.log(`🚀 [Auth] Intento de ${t?"Login":"Registro"} para:`,a);try{const r=t?await ee.login(a,e):await ee.register(a,e);console.log("✅ [Auth] Autenticación de Firebase exitosa."),Z=await K.deriveKey(e,a),await De(z(j,"user_metadata",r.user.uid),{lastActivity:O()},{merge:!0}),Q()}catch(r){console.error("❌ [Auth] Error:",r.message),alert(r.message)}}je(X,a=>{if(S=a,a&&Z){Q();return}if(a&&!Z){console.warn("🔒 [Security] Sesión sin llave de cifrado. Requerida autenticación."),P.innerHTML="",P.appendChild(new be(fe).render());return}P.innerHTML="",P.appendChild(new be(fe).render())});
