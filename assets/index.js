var Fp=Object.defineProperty;var jp=(n,e,t)=>e in n?Fp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pl=(n,e,t)=>jp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const qp="modulepreload",Hp=function(n,e){return new URL(n,e).href},Ll={},V=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(t.map(h=>{if(h=Hp(h,s),h in Ll)return;Ll[h]=!0;const p=h.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(!!s)for(let x=l.length-1;x>=0;x--){const C=l[x];if(C.href===h&&(!p||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const I=document.createElement("link");if(I.rel=p?"stylesheet":qp,p||(I.as="script"),I.crossOrigin="",I.href=h,d&&I.setAttribute("nonce",d),document.head.appendChild(I),p)return new Promise((x,C)=>{I.addEventListener("load",x),I.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},li=(n,e,t)=>{const s=n[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Le={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,style:!0}},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12,color:"primary",settings:{width:!0,visibility:!0}},select:{icon:"❓",shortLabel:"select",longLabel:"Opciones",spanEV:6,spanP:6,color:"primary",settings:{custom:!0,width:!0,visibility:!0,style:!0}},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,style:!0}},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4,color:"success",settings:{custom:!0,width:!0,visibility:!0,style:!0}},percentage:{icon:"%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,style:!0}},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0}},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4,color:"warning",settings:{width:!0,visibility:!0,style:!0}},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6,color:"warning",settings:{width:!0,visibility:!0}},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6,color:"secondary",settings:{width:!0,visibility:!0,style:!0,custom:!0}},image:{icon:"🖼️",shortLabel:"Img",longLabel:"Imagen",spanEV:12,spanP:12,color:"secondary",settings:{width:!0,visibility:!0}},audio:{icon:"🎵",shortLabel:"Aud",longLabel:"Audio",spanEV:12,spanP:12,color:"secondary",settings:{width:!0,visibility:!0}},video:{icon:"🎬",shortLabel:"Vid",longLabel:"Video",spanEV:12,spanP:12,color:"secondary",settings:{width:!0,visibility:!0,custom:!0}},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},chart:{icon:"📊",shortLabel:"Gráfico",longLabel:"Gráfico Visual",spanEV:12,spanP:12,color:"light",settings:{custom:!0,width:!0,visibility:!0}},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12,color:"dark",settings:{custom:!0,width:!0,visibility:!0,style:!0}}};let $e=[],It=null;const gs={clearData(){$e.length=0,It=null},setData(n){$e.length=0,n&&$e.push(...n)},getData(){return[...$e]},getHTML(){return`
      <div class="tab-pane fade" id="fuentes-pane" role="tabpanel" tabindex="0">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="mb-0 fw-bold text-secondary"><i class="fa-solid fa-server me-2"></i>Orígenes de Datos Configurados</h6>
          <button class="btn btn-sm btn-primary fw-bold shadow-sm" id="btn-show-source-form">
            <i class="fa-solid fa-plus me-1"></i> Nueva Fuente
          </button>
        </div>

        <!-- Formulario de Fuente -->
        <div class="bg-white p-4 border rounded shadow-sm mb-4 d-none" id="form-source-container">
            <h6 class="fw-bold text-primary mb-3 border-bottom pb-2" id="form-source-title">
              <i class="fa-solid fa-cloud-arrow-down me-2"></i>Nueva Fuente
            </h6>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-bold text-muted mb-1">ID de la Fuente (Nombre único)</label>
                <input autocomplete="off" spellcheck="false" type="text" id="etl-src-id" class="form-control text-primary font-monospace" placeholder="Ej: api_tasas_bcv">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold text-muted mb-1">Tipo de Fuente</label>
                <select id="etl-src-type" class="form-select">
                  <option value="api">API REST (JSON)</option>
                  <option value="csv">Archivo Externo (CSV)</option>
                </select>
              </div>
              <div class="col-md-9 mt-3">
                <label class="form-label small fw-bold text-muted mb-1">Endpoint / URL de Origen</label>
                <input autocomplete="off" spellcheck="false" type="url" id="etl-src-url" class="form-control" placeholder="https://api.ejemplo.com/datos">
              </div>
              <div class="col-md-3 mt-3">
                <label class="form-label small fw-bold text-muted mb-1">Método HTTP</label>
                <select id="etl-src-method" class="form-select">
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                </select>
              </div>
              <div class="col-12 mt-3">
                <label class="form-label small fw-bold text-muted mb-1">Cabeceras / Headers (JSON opcional)</label>
                <textarea autocomplete="off" spellcheck="false" id="etl-src-headers" class="form-control font-monospace" rows="2" placeholder='{"Authorization": "Bearer token..."}'></textarea>
              </div>
              
              <div class="col-12 d-flex justify-content-between align-items-center mt-4 pt-2 border-top">
                <button class="btn btn-info text-white fw-bold px-4 shadow-sm" id="btn-test-source-form">
                  <i class="fa-solid fa-bolt me-1"></i> Probar Conexión
                </button>
                <div>
                  <button class="btn btn-light border me-2 px-4" id="btn-cancel-source">Cancelar</button>
                  <button class="btn btn-primary fw-bold px-4 shadow-sm" id="btn-save-source"><i class="fa-solid fa-check me-2"></i>Guardar Fuente</button>
                </div>
              </div>

            </div>
        </div>

        <!-- Lista de Fuentes -->
        <div class="list-group list-group-flush border rounded shadow-sm" id="etl-sources-list">
          <div class="p-3 text-center small text-muted bg-white" id="etl-sources-empty">
            Aún no has configurado ninguna fuente de extracción.
          </div>
        </div>
      </div>
    `},initLogic(){const n=document.getElementById("btn-show-source-form"),e=document.getElementById("form-source-container"),t=document.getElementById("form-source-title"),s=document.getElementById("btn-cancel-source"),i=document.getElementById("btn-save-source"),r=document.getElementById("btn-test-source-form"),o=document.getElementById("etl-sources-list"),l=document.getElementById("etl-sources-empty");n.addEventListener("click",()=>{It=null,this.clearForm(),t.innerHTML='<i class="fa-solid fa-cloud-arrow-down me-2"></i>Nueva Fuente',i.innerText="Guardar Fuente",e.classList.remove("d-none"),n.classList.add("d-none")}),s.addEventListener("click",()=>{It=null,this.clearForm(),e.classList.add("d-none"),n.classList.remove("d-none")}),r.addEventListener("click",async()=>{const c=document.getElementById("etl-src-type").value,d=document.getElementById("etl-src-url").value.trim(),h=document.getElementById("etl-src-method").value,p=document.getElementById("etl-src-headers").value.trim();if(!d){alert("⚠️ Por favor, ingresa una URL o ruta válida para probar.");return}r.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i> Probando...',r.disabled=!0,await this.testApiConnection(d,h,p,c),r.innerHTML='<i class="fa-solid fa-bolt me-1"></i> Probar Conexión',r.disabled=!1}),i.addEventListener("click",()=>{const c=document.getElementById("etl-src-id").value.trim(),d=document.getElementById("etl-src-type").value,h=document.getElementById("etl-src-url").value.trim(),p=document.getElementById("etl-src-method").value,f=document.getElementById("etl-src-headers").value.trim();if(!c||!h){alert("El ID de la fuente y la URL de origen son obligatorios.");return}if(It===null&&$e.some(I=>I.id===c)){alert("Ya existe una fuente con este ID. Usa un nombre único.");return}const b={id:c,type:d,url:h,method:p,headers:f};It!==null?$e[It]=b:$e.push(b),It=null,this.clearForm(),e.classList.add("d-none"),n.classList.remove("d-none"),this.renderList(o,l)})},async testApiConnection(n,e,t,s){try{let i={method:e};if(t)try{i.headers=JSON.parse(t)}catch(o){console.error("Error al parsear las cabeceras JSON:",o),alert("❌ Error: Las cabeceras (Headers) no tienen un formato JSON válido.");return}const r=await fetch(n,i);if(!r.ok)throw new Error(`Error HTTP: ${r.status} ${r.statusText}`);if(s==="csv"){const l=(await r.text()).split(`
`).filter(d=>d.trim()!=="");if(l.length===0){alert("✅ Conexión Exitosa, pero el archivo CSV parece estar vacío.");return}const c=l[0].split(",");alert(`✅ Conexión Exitosa (Archivo CSV)!

Se obtuvieron ${l.length} filas y ${c.length} columnas.

Cabeceras detectadas:
${c.slice(0,5).join(", ")}${c.length>5?"...":""}`)}else{const o=await r.json();if(Array.isArray(o))alert(`✅ Conexión Exitosa!

Se obtuvo un Arreglo (Array) con ${o.length} elementos.

Ejemplo del primero:
${JSON.stringify(o[0]).substring(0,100)}...`);else if(typeof o=="object"&&o!==null){const l=Object.keys(o);alert(`✅ Conexión Exitosa!

Se obtuvo un Objeto con ${l.length} propiedades.

Propiedades encontradas: ${l.slice(0,5).join(", ")}${l.length>5?", ...":""}`)}else alert(`✅ Conexión Exitosa!

Se obtuvo un valor simple de tipo: ${typeof o}
Valor: ${o}`)}}catch(i){alert(`❌ Falló la conexión.

Motivo: ${i.message}

Verifica si la ruta es correcta o si hay bloqueos de CORS.`)}},clearForm(){document.getElementById("etl-src-id").value="",document.getElementById("etl-src-id").disabled=!1,document.getElementById("etl-src-type").value="api",document.getElementById("etl-src-url").value="",document.getElementById("etl-src-method").value="GET",document.getElementById("etl-src-headers").value=""},renderList(n){if($e.length===0){n.innerHTML=`
        <div class="p-3 text-center small text-muted bg-white" id="etl-sources-empty">
          Aún no has configurado ninguna fuente de extracción.
        </div>
      `;return}n.innerHTML="",$e.forEach((e,t)=>{const s=document.createElement("div");s.className="list-group-item d-flex justify-content-between align-items-center bg-white",s.innerHTML=`
        <div>
          <h6 class="mb-0 fw-bold text-dark">
            <i class="fa-solid ${e.type==="csv"?"fa-file-csv text-success":"fa-link text-primary"} me-2"></i>${e.id}
          </h6>
          <small class="text-muted">${e.method} - ${e.url}</small>
        </div>
        <div class="d-flex gap-1">
          <!-- NUEVO BOTÓN: Copiar Variable -->
          <button class="btn btn-sm btn-light text-secondary btn-copy-src-id border" data-id="${e.id}" title="Copiar ID de Fuente como Variable">
            <i class="fa-solid fa-copy"></i>
          </button>
          <button class="btn btn-sm btn-light text-info btn-test-src-list border" data-index="${t}" title="Probar Conexión">
            <i class="fa-solid fa-bolt"></i>
          </button>
          <button class="btn btn-sm btn-light text-primary btn-edit-src border" data-index="${t}" title="Editar">
            <i class="fa-solid fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-light text-danger btn-delete-src border" data-index="${t}" title="Eliminar">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `,n.appendChild(s)}),n.querySelectorAll(".btn-delete-src").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.getAttribute("data-index");confirm(`¿Estás seguro de eliminar la fuente '${$e[s].id}'?`)&&($e.splice(s,1),this.renderList(n,emptyMsg))})}),n.querySelectorAll(".btn-edit-src").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.getAttribute("data-index");It=s;const i=$e[s];document.getElementById("etl-src-id").value=i.id,document.getElementById("etl-src-id").disabled=!0,document.getElementById("etl-src-type").value=i.type,document.getElementById("etl-src-url").value=i.url,document.getElementById("etl-src-method").value=i.method,document.getElementById("etl-src-headers").value=i.headers,document.getElementById("form-source-title").innerHTML='<i class="fa-solid fa-pen-to-square me-2"></i>Editar Fuente',document.getElementById("btn-save-source").innerText="Actualizar Fuente",document.getElementById("form-source-container").classList.remove("d-none"),document.getElementById("btn-show-source-form").classList.add("d-none")})}),n.querySelectorAll(".btn-test-src-list").forEach(e=>{e.addEventListener("click",async t=>{const s=t.currentTarget.getAttribute("data-index"),i=$e[s],r=t.currentTarget.innerHTML;t.currentTarget.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',await this.testApiConnection(i.url,i.method,i.headers,i.type),t.currentTarget.innerHTML=r})}),n.querySelectorAll(".btn-copy-src-id").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget,r=`@{${s.getAttribute("data-id")}}`;navigator.clipboard.writeText(r).then(()=>{const o=s.querySelector("i");s.classList.replace("text-secondary","text-success"),o.classList.replace("fa-copy","fa-check"),setTimeout(()=>{s.classList.replace("text-success","text-secondary"),o.classList.replace("fa-check","fa-copy")},1500)}).catch(o=>{console.error("Error al copiar al portapapeles: ",o)})})})}},bs={getHTML(){return`
      <style>
        #etl-rule-script::placeholder { color: rgba(255, 255, 255, 0.4) !important; opacity: 1 !important; }
      </style>
      <div class="tab-pane fade" id="reglas-pane" role="tabpanel" tabindex="0">
        
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="mb-0 fw-bold text-secondary"><i class="fa-solid fa-code me-2"></i>Rutinas y Macros de Datos (Scripts)</h6>
          <button class="btn btn-sm btn-success fw-bold shadow-sm" id="btn-show-rule-form">
            <i class="fa-solid fa-plus me-1"></i> Nueva Rutina
          </button>
        </div>

        <!-- Formulario de Nueva Rutina -->
        <div class="bg-white p-4 border rounded shadow-sm mb-4 d-none" id="form-rule-container">
            <h6 class="fw-bold text-success mb-3 border-bottom pb-2" id="form-rule-title">
              <i class="fa-solid fa-pen-to-square me-2"></i>Definir Rutina de Datos
            </h6>
            <div class="row g-3">
              <div class="col-md-8">
                <label class="form-label small fw-bold text-muted mb-1">Nombre de la Rutina</label>
                <input autocomplete="off" spellcheck="false" type="text" id="etl-rule-name" class="form-control text-dark fw-bold" placeholder="Ej: Actualizar Tasas BCV y Precios">
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold text-muted mb-1">Momento de Ejecución</label>
                <select id="etl-rule-trigger" class="form-select">
                  <option value="manual" selected>Manual (Botón en el documento)</option>
                  <option value="auto">Automática (Al abrir el documento)</option>
                  <!-- NUEVA OPCIÓN -->
                  <option value="reactive">Reactiva (Cálculo en Tiempo Real)</option>
                </select>
              </div>
              
              <div class="col-12 mt-4">
                <label class="form-label small fw-bold text-muted d-flex justify-content-between mb-1">
                  <span><i class="fa-solid fa-terminal me-1"></i> Script de Transformación (JavaScript)</span>
                  <span class="fw-normal"><i class="fa-solid fa-info-circle"></i> Usa la API interna <code>doc</code></span>
                </label>
                <!-- Editor IDE Estilizado -->
                <div class="bg-dark p-2 rounded-top border-0 text-white opacity-75" style="font-family: monospace; font-size: 0.85rem;">
                  <span style="color: #cc7832;">async function</span> <span class="text-info">rutina</span>(doc) {
                </div>
                <textarea autocomplete="off" spellcheck="false" id="etl-rule-script" class="form-control rounded-0 border-0 shadow-inner text-light bg-dark px-3 py-2" rows="12" placeholder="${`// === GUÍA RÁPIDA DE RUTINAS ===
// 1. OBTENER DATOS: const bcv = @{api_dolar};
// 2. LEER DOCUMENTO: const cantidad = doc.getValue('setting_cantidad');
// 3. ASIGNAR VALOR: doc.setValue('setting_total_ves', cantidad * bcv.promedio);
// 4. TABLAS: doc.setValue('tabla', [{col_item: 'A'}, {col_item: 'B'}]);`.replace(/\n/g,"&#10;")}" style="font-family: monospace; font-size: 0.85rem; resize: vertical;"></textarea>
                <div class="bg-dark p-2 rounded-bottom border-0 text-white opacity-75" style="font-family: monospace; font-size: 0.85rem;">
                  }
                </div>
              </div>
              
              <div class="col-12 text-end mt-4 pt-2 border-top">
                <button class="btn btn-light border me-2 px-4" id="btn-cancel-rule">Cancelar</button>
                <button class="btn btn-success fw-bold px-4" id="btn-save-rule"><i class="fa-solid fa-check me-2"></i>Guardar Rutina</button>
              </div>
            </div>
        </div>

        <!-- Lista de Rutinas -->
        <div class="list-group list-group-flush border rounded shadow-sm" id="etl-rules-list">
          <div class="p-3 text-center small text-muted bg-white" id="etl-rules-empty">
            Aún no has configurado ninguna rutina de datos.
          </div>
        </div>
      </div>
    `},_rules:[],_editingIndex:null,clearData(){this._rules.length=0,this._editingIndex=null},setData(n){this._rules.length=0,n&&this._rules.push(...n)},getData(){return[...this._rules]},initLogic(){const n=document.getElementById("btn-show-rule-form"),e=document.getElementById("form-rule-container"),t=document.getElementById("form-rule-title"),s=document.getElementById("btn-cancel-rule"),i=document.getElementById("btn-save-rule"),r=document.getElementById("etl-rules-list");n.addEventListener("click",()=>{this._editingIndex=null,this.clearForm(),confirm("💡 ¿Deseas que el asistente declare automáticamente las variables de los componentes en tu script?")&&(document.getElementById("etl-rule-script").value=this._generateAutoInitCode()),t.innerHTML='<i class="fa-solid fa-code me-2"></i>Definir Rutina de Datos',i.innerText="Guardar Rutina",e.classList.remove("d-none"),n.classList.add("d-none")}),s.addEventListener("click",()=>{this._editingIndex=null,this.clearForm(),e.classList.add("d-none"),n.classList.remove("d-none")}),i.addEventListener("click",()=>{const o=document.getElementById("etl-rule-name").value.trim(),l=document.getElementById("etl-rule-trigger").value,c=document.getElementById("etl-rule-script").value.trim();if(!o){alert("Debes asignarle un nombre a la rutina.");return}if(!c){alert("El script de transformación no puede estar vacío.");return}const d={name:o,trigger:l,scriptCode:c};this._editingIndex!==null?this._rules[this._editingIndex]=d:this._rules.push(d),this._editingIndex=null,this.clearForm(),e.classList.add("d-none"),n.classList.remove("d-none"),this.renderList(r)})},clearForm(){document.getElementById("etl-rule-name").value="",document.getElementById("etl-rule-trigger").value="manual",document.getElementById("etl-rule-script").value=""},renderList(n){if(this._rules.length===0){n.innerHTML=`
        <div class="p-3 text-center small text-muted bg-white" id="etl-rules-empty">
          Aún no has configurado ninguna rutina de datos.
        </div>
      `;return}n.innerHTML="",this._rules.forEach((e,t)=>{const s=e.name||(e.targetId?`Regla Migrada: ${e.targetId}`:"Rutina sin nombre"),i=e.trigger==="auto",r=e.trigger==="reactive";let o;r?o='<span class="badge text-bg-success fw-normal"><i class="fa-solid fa-bolt me-1"></i> Reactiva en Tiempo Real</span>':i?o='<span class="badge text-bg-warning fw-normal"><i class="fa-solid fa-clock me-1"></i> Automática al cargar</span>':o='<span class="badge text-bg-primary fw-normal"><i class="fa-solid fa-hand-pointer me-1"></i> Botón Manual</span>';const l=document.createElement("div");l.className="list-group-item bg-white p-3",l.innerHTML=`
        <div class="d-flex justify-content-between align-items-start mb-2">
          
          <!-- Título y Badge Dinámico -->
          <div>
            <h6 class="mb-1 fw-bold text-dark">
              <i class="fa-solid fa-code text-secondary me-2"></i>${this.escapeHTML(s)}
            </h6>
            <div class="small">
              ${o}
            </div>
          </div>
          
          <!-- Botones de Acción -->
          <div class="d-flex gap-1">
            <button class="btn btn-sm btn-light text-primary btn-edit-rule border" data-index="${t}" title="Editar">
              <i class="fa-solid fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-light text-danger btn-delete-rule border" data-index="${t}" title="Eliminar">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>

        </div>
        ${e.scriptCode?`
        <div class="bg-dark rounded p-2 mt-2" style="max-height: 120px; overflow-y: auto;">
          <pre class="m-0 text-light" style="font-size: 0.75rem; font-family: monospace;">${this.escapeHTML(e.scriptCode)}</pre>
        </div>
        `:'<div class="small text-muted fst-italic mt-1"><i class="fa-solid fa-triangle-exclamation text-warning me-1"></i>Sin script definido.</div>'}
      `,n.appendChild(l)}),n.querySelectorAll(".btn-delete-rule").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.closest("button").getAttribute("data-index"),i=this._rules[s],r=i.name||(i.targetId?`Regla Migrada: ${i.targetId}`:"Rutina sin nombre");confirm(`¿Estás seguro de eliminar la rutina '${r}'?`)&&(this._rules.splice(s,1),this.renderList(n))})}),n.querySelectorAll(".btn-edit-rule").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.closest("button").getAttribute("data-index");this._editingIndex=s;const i=this._rules[s];document.getElementById("etl-rule-name").value=i.name||"",document.getElementById("etl-rule-trigger").value=i.trigger||"manual",document.getElementById("etl-rule-script").value=i.scriptCode||"",document.getElementById("form-rule-title").innerHTML='<i class="fa-solid fa-pen-to-square me-2"></i>Editar Rutina',document.getElementById("btn-save-rule").innerText="Actualizar Rutina",document.getElementById("form-rule-container").classList.remove("d-none"),document.getElementById("btn-show-rule-form").classList.add("d-none")})})},escapeHTML(n){return n==null?"":String(n).replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e)},_generateAutoInitCode(){const n=document.getElementById("designer-canvas");if(!n)return"";const e=Array.from(n.querySelectorAll(".designer-item-wrapper")),t=[];return e.forEach(s=>{const i=s.querySelector("#comp-content"),r=i?i.firstElementChild:null;if(r&&typeof r.getData=="function"){const o=r.getData(),l=o.tag?o.tag.toLowerCase():r.tagName.toLowerCase();if(!l.includes("section")&&!l.includes("table")&&!l.includes("chart")){const c=o.id.replace(/[^a-zA-Z0-9_]/g,"_");t.push(c)}}}),t.length===0?`// No se encontraron componentes simples en el documento.

`:`// ==========================================
// LECTURA DE VARIABLES DEL DOCUMENTO
// ==========================================
${t.map(s=>`const ${s} = doc.getValue('${s}');`).join(`
`)}


// --- Tu lógica aquí ---


// ==========================================
// ASIGNACIÓN DE VALORES AL DOCUMENTO
// ==========================================
${t.map(s=>`doc.setValue('${s}', ${s});`).join(`
`)}
`}},hd={getHTML(){return`
      <div class="tab-pane fade" id="diccionario-pane" role="tabpanel" tabindex="0">
        
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="alert alert-info small mb-0 py-2 border-info border-opacity-50 text-dark flex-grow-1 me-3">
            <i class="fa-solid fa-circle-info me-1"></i> Haz clic en las tablas para desplegar sus columnas o componentes internos.
          </div>
          <button class="btn btn-sm btn-outline-info text-nowrap" id="btn-refresh-dictionary">
            <i class="fa-solid fa-rotate-right me-1"></i> Actualizar Lista
          </button>
        </div>

        <div class="table-responsive border rounded shadow-sm">
          <table class="table table-sm table-hover align-middle mb-0 bg-white" style="table-layout: fixed;">
            <thead class="table-light text-secondary small">
              <tr>
                <th style="width: 50%;">Elemento (Tipo y Nombre)</th>
                <th style="width: 35%;">ID del Componente</th>
                <th style="width: 15%;" class="text-center">Acción</th>
              </tr>
            </thead>
            <tbody id="etl-component-dictionary-list">
              <tr>
                <td colspan="3" class="text-center small text-muted py-4">
                  <i class="fa-solid fa-magnifying-glass me-2"></i> Cargando componentes...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `},initLogic(){const n=document.getElementById("btn-refresh-dictionary"),e=document.getElementById("etl-component-dictionary-list");n&&n.addEventListener("click",()=>{this.renderDictionary(e);const s=n.querySelector("i");s.classList.add("fa-spin"),setTimeout(()=>s.classList.remove("fa-spin"),500)});const t=document.querySelector('button[data-bs-target="#diccionario-pane"]');t&&t.addEventListener("shown.bs.tab",()=>{this.renderDictionary(e)})},getComponentsHierarchy(){const n=[],e=document.getElementById("designer-canvas");if(!e)return n;try{Array.from(e.querySelectorAll(".designer-item-wrapper")).forEach(s=>{const i=s.querySelector("#comp-content"),r=i?i.firstElementChild:null;if(r&&typeof r.getData=="function"){const o=r.getData();if(!o.id||o.tag==="setting-section"||r.tagName.toLowerCase()==="setting-section")return;const l=o.tag?o.tag.split("-")[1]:r.tagName.toLowerCase().split("-")[1],c=Le[l]||{icon:"🏷️",longLabel:"Componente",color:"secondary"},d={id:o.id,title:o.title||o.text||"Sin título",icon:c.icon,typeLabel:c.longLabel,color:c.color,children:[]};l==="table"&&Array.isArray(o.columns)&&o.columns.forEach(h=>{if(h.id){const p=h.tag?h.tag.split("-")[1]:"string",f=Le[p]||{icon:"🏷️",longLabel:"Columna",color:"secondary"};d.children.push({id:h.id,title:h.title||"Sin título",icon:f.icon,typeLabel:f.longLabel,color:f.color})}}),n.push(d)}})}catch(t){console.warn("Error al construir la jerarquía de componentes desde getData().",t)}return n},getTextColorClass(n){return n==="light"||n==="warning"||n==="white"?"text-dark":`text-${n}`},renderDictionary(n){const e=this.getComponentsHierarchy();if(e.length===0){n.innerHTML=`
        <tr>
          <td colspan="3" class="text-center small text-muted py-4">
            <i class="fa-solid fa-box-open mb-2 d-block fs-4 opacity-50"></i>
            El lienzo no contiene variables de datos.
          </td>
        </tr>
      `;return}n.innerHTML="",e.forEach(t=>{const s=t.children.length>0,i=document.createElement("tr");s&&(i.style.cursor="pointer",i.title="Haz clic para ver columnas");const r=this.getTextColorClass(t.color);if(i.innerHTML=`
        <td>
          <div class="d-flex align-items-center">
            ${s?'<i class="fa-solid fa-chevron-down text-muted me-2 chevron-icon" style="font-size: 0.7em; transition: transform 0.2s;"></i>':'<span style="width: 18px;"></span>'}
            <span class="badge text-bg-${t.color} bg-opacity-10 border border-${t.color}-subtle ${r} w-100 text-start py-2 text-truncate" title="${t.title}">
              <span class="me-1 fs-6">${t.icon}</span> 
              <span class="fw-bold me-1">${t.typeLabel}</span>
              <span class="opacity-75">| ${t.title}</span>
            </span>
          </div>
        </td>
        <td><code class="text-primary fw-bold fs-6">@{${t.id}}</code></td>
        <td class="text-center">
          <button class="btn btn-sm btn-light text-secondary border btn-copy-id" data-id="${t.id}" title="Copiar Variable" onclick="event.stopPropagation()">
            <i class="fa-solid fa-copy"></i>
          </button>
        </td>
      `,n.appendChild(i),s){const o=document.createElement("tr");o.className="p-0 m-0 border-0 d-none sub-items-row",o.innerHTML=`
          <td colspan="3" class="p-0 m-0 border-0 bg-light">
            <div class="p-2 border-bottom shadow-inner">
              <table class="table table-sm table-borderless m-0 w-100">
                <tbody>
                  ${t.children.map(l=>{const c=this.getTextColorClass(l.color);return`
                    <tr>
                      <td style="width: 50%; padding-left: 2.5rem;">
                        <span class="badge text-bg-${l.color} bg-opacity-10 border border-${l.color}-subtle ${c} w-100 text-start py-1 text-truncate" title="${l.title}">
                          <i class="fa-solid fa-turn-up fa-rotate-90 me-2 opacity-50"></i>
                          <span class="me-1 fs-6">${l.icon}</span> 
                          <span class="fw-bold me-1">${l.typeLabel}</span> 
                          <span class="opacity-75">| ${l.title}</span>
                        </span>
                      </td>
                      <td style="width: 35%;"><code class="text-primary fw-bold">@{${l.id}}</code></td>
                      <td style="width: 15%;" class="text-center">
                        <button class="btn btn-sm btn-link text-secondary p-0 btn-copy-id" data-id="${l.id}" title="Copiar Variable">
                          <i class="fa-solid fa-copy"></i>
                        </button>
                      </td>
                    </tr>
                  `}).join("")}
                </tbody>
              </table>
            </div>
          </td>
        `,n.appendChild(o),i.addEventListener("click",()=>{const l=o.classList.contains("d-none"),c=i.querySelector(".chevron-icon");l?(o.classList.remove("d-none"),c&&(c.style.transform="rotate(180deg)")):(o.classList.add("d-none"),c&&(c.style.transform="rotate(0deg)"))})}}),this.bindCopyEvents(n)},bindCopyEvents(n){n.querySelectorAll(".btn-copy-id").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget,r=s.getAttribute("data-id");navigator.clipboard.writeText(r).then(()=>{const o=s.querySelector("i");s.classList.remove("text-secondary"),s.classList.add("text-success"),o.classList.replace("fa-copy","fa-check"),setTimeout(()=>{s.classList.remove("text-success"),s.classList.add("text-secondary"),o.classList.replace("fa-check","fa-copy")},1500)}).catch(o=>{console.error("Error al copiar al portapapeles: ",o)})})})}},zp=()=>`
<div class="modal fade" id="modal-template-config" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content shadow-lg border-0 overflow-hidden">
      
      <!-- CABECERA -->
      <div class="modal-header text-bg-dark py-3 d-flex flex-column align-items-start gap-2">
        <div class="d-flex w-100 justify-content-between align-items-center">
            <h5 class="modal-title fs-5 fw-bold text-truncate">
                <i class="fa-solid fa-sliders me-2"></i>Configuración Avanzada de la Plantilla
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      </div>

      <!-- CUERPO Y PESTAÑAS -->
      <div class="modal-body p-0 bg-light d-flex flex-column" style="min-height: 550px;">
         
         <ul class="nav nav-tabs bg-white border-bottom shadow-sm px-3 pt-2" id="tplConfigTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#tab-general" type="button"><i class="fa-solid fa-file-lines me-2"></i> General</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link fw-bold text-primary px-4 py-3" data-bs-toggle="tab" data-bs-target="#fuentes-pane" type="button"><i class="fa-solid fa-cloud-arrow-down me-2"></i> Fuentes (APIs/CSV)</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link fw-bold text-success px-4 py-3" data-bs-toggle="tab" data-bs-target="#reglas-pane" type="button"><i class="fa-solid fa-code me-2"></i> Rutinas (ETL)</button>
            </li>
            <li class="nav-item ms-auto" role="presentation">
                <button class="nav-link fw-bold text-info px-4 py-3" data-bs-toggle="tab" data-bs-target="#diccionario-pane" type="button"><i class="fa-solid fa-book me-2"></i> Diccionario</button>
            </li>
         </ul>
         
         <div class="tab-content flex-grow-1 bg-light p-4 overflow-auto" id="tplTabsContent">
            
            <!-- 1. PESTAÑA GENERAL -->
            <div class="tab-pane fade show active" id="tab-general">
                <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-folder-open me-2"></i>Metadata de la Plantilla</h6>
                <div class="row g-4 bg-white p-4 border rounded shadow-sm mb-4">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold text-muted mb-1">Categoría</label>
                        <select id="tpl-category" class="form-select">
                          <option value="Personal" data-icon="👤" selected>👤 Personal (Default)</option>
                          <option value="Salud" data-icon="🩺">🩺 Salud</option>
                          <option value="Financiero" data-icon="💰">💰 Financiero</option>
                          <option value="Trabajo" data-icon="💼">💼 Trabajo</option>
                          <option value="Hogar" data-icon="🏠">🏠 Hogar</option>
                          <option value="Alimentación" data-icon="🥗">🥗 Alimentación</option>
                          <option value="Formación" data-icon="🎓">🎓 Formación</option>
                          <option value="Personalizada" data-icon="⚙️">⚙️ Personalizada</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold text-muted mb-1">Icono (Emoji)</label>
                        <input autocomplete="off" spellcheck="false" type="text" id="tpl-icon" class="form-control" value="👤" />
                    </div>
                    <div class="col-12">
                        <label class="form-label small fw-bold text-muted mb-1">Descripción</label>
                        <textarea id="tpl-description" class="form-control" rows="2" placeholder="Propósito de la plantilla..."></textarea>
                    </div>
                </div>

                <h6 class="text-danger fw-bold mb-3"><i class="fa-solid fa-shield-halved me-2"></i>Seguridad y Relaciones</h6>
                <div class="row g-4 bg-white p-4 border rounded shadow-sm">
                    <div class="col-md-6 border-end">
                        <label class="form-label small fw-bold text-muted d-block mb-2">Cifrado de Extremo a Extremo</label>
                        <div class="form-check form-switch mt-2">
                          <input class="form-check-input fs-5" type="checkbox" id="tpl-encrypted" style="cursor: pointer;" />
                          <label class="form-check-label text-danger fw-bold mt-1 ms-2" for="tpl-encrypted">
                            <i class="fa-solid fa-lock me-1"></i> Habilitar
                          </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold text-muted mb-2">IDs de Documentos Relacionados</label>
                        <div class="input-group mt-1">
                          <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-link text-muted"></i></span>
                          <input type="text" id="tpl-related-docs" class="form-control border-start-0" placeholder="Ej: doc_1715..., doc_1716..." />
                        </div>
                    </div>
                </div>
            </div>

            <!-- INYECCIÓN DE LAS OTRAS PESTAÑAS -->
            ${gs.getHTML()}
            ${bs.getHTML()}
            ${hd.getHTML()}
         </div>
      </div>
      
      <!-- FOOTER -->
      <div class="modal-footer py-3 bg-white border-top">
        <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary px-5 fw-bold shadow-sm" id="btn-save-template-config"><i class="fa-solid fa-check me-2"></i> Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>
  `,Gp={init(){document.getElementById("modal-template-config")||document.body.insertAdjacentHTML("beforeend",zp()),gs.initLogic(),bs.initLogic(),hd.initLogic();const n=document.getElementById("btn-open-template-config");n&&n.addEventListener("click",()=>{this.loadModalData();const t=document.getElementById("modal-template-config");new window.bootstrap.Modal(t).show()});const e=document.getElementById("btn-save-template-config");e&&e.addEventListener("click",()=>{this.saveModalData();const t=document.getElementById("modal-template-config"),s=window.bootstrap.Modal.getInstance(t);s&&s.hide()})},loadModalData(){const n=document.getElementById("designer-canvas");if(!n)return;gs.clearData(),bs.clearData();try{const s=n.getAttribute("data-etl-config");if(s){const i=JSON.parse(s);i.sources&&gs.setData(i.sources),i.rules&&bs.setData(i.rules)}}catch(s){console.warn("No se pudo cargar la configuración ETL previa.",s)}const e=document.getElementById("etl-sources-list");e&&gs.renderList(e);const t=document.getElementById("etl-rules-list");t&&bs.renderList(t)},saveModalData(){const n=document.getElementById("designer-canvas");if(!n)return;const e={sources:gs.getData(),rules:bs.getData()};e.sources.length===0&&e.rules.length===0?n.removeAttribute("data-etl-config"):n.setAttribute("data-etl-config",JSON.stringify(e))}},Wp=()=>{};var kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Kp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let f=(l&15)<<2|d>>6,b=d&63;c||(b=64,o||(f=64)),s.push(t[h],t[p],t[f],t[b])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Kp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||d==null||p==null)throw new Jp;const f=r<<2|l>>4;if(s.push(f),d!==64){const b=l<<4&240|d>>2;if(s.push(b),p!==64){const I=d<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qp=function(n){const e=md(n);return pd.encodeByteArray(e,!0)},Pi=function(n){return Qp(n).replace(/\./g,"")},fd=function(n){try{return pd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xp=()=>Yp().__FIREBASE_DEFAULTS__,Zp=()=>{if(typeof process>"u"||typeof kl>"u")return;const n=kl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ef=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fd(n[1]);return e&&JSON.parse(e)},tr=()=>{try{return Wp()||Xp()||Zp()||ef()}catch(n){`${n}`;return}},gd=n=>{var e,t;return(t=(e=tr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},tf=n=>{const e=gd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bd=()=>{var n;return(n=tr())==null?void 0:n.config},yd=n=>{var e;return(e=tr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function nf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pi(JSON.stringify(t)),Pi(JSON.stringify(o)),""].join(".")}const yn={};function rf(){const n={prod:[],emulator:[]};for(const e of Object.keys(yn))yn[e]?n.emulator.push(e):n.prod.push(e);return n}function of(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Dl=!1;function _d(n,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||yn[n]===e||yn[n]||Dl)return;yn[n]=e;function t(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=rf().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,b){f.setAttribute("width","24"),f.setAttribute("id",b),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function d(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Dl=!0,o()},f}function h(f,b){f.setAttribute("id",b),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=of(s),b=t("text"),I=document.getElementById(b)||document.createElement("span"),x=t("learnmore"),C=document.getElementById(x)||document.createElement("a"),k=t("preprendIcon"),N=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const G=f.element;l(G),h(C,x);const se=d();c(N,k),G.append(N,I,C,se),document.body.appendChild(G)}r?(I.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function lf(){var e;const n=(e=tr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mf(){return!lf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pf(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="FirebaseError";class gt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=gf,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bf(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gt(i,l,s)}}function bf(n,e){return n.replace(yf,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yf=/\{\$([^}]+)}/g;function vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ns(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ml(r)&&Ml(o)){if(!ns(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ml(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function mn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function _f(n,e){const t=new wf(n,e);return t.subscribe.bind(t)}class wf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Kr),i.error===void 0&&(i.error=Kr),i.complete===void 0&&(i.complete=Kr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kr(){}/**
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
 */function de(n){return n&&n._delegate?n._delegate:n}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Tf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new sf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Af(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:If(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function If(n){return n===Zt?void 0:n}function Af(n){return n.instantiationMode==="EAGER"}/**
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
 */class xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Sf={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Cf=K.INFO,Rf={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Pf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Rf[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=Cf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Lf=(n,e)=>e.some(t=>n instanceof t);let Vl,Ol;function kf(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Df(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wd=new WeakMap,ao=new WeakMap,Ed=new WeakMap,Jr=new WeakMap,$o=new WeakMap;function Mf(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(kt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&wd.set(t,n)}).catch(()=>{}),$o.set(e,n),e}function Vf(n){if(ao.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ao.set(n,e)}let lo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ed.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Of(n){lo=n(lo)}function $f(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Qr(this),e,...t);return Ed.set(s,e.sort?e.sort():[e]),kt(s)}:Df().includes(n)?function(...e){return n.apply(Qr(this),e),kt(wd.get(this))}:function(...e){return kt(n.apply(Qr(this),e))}}function Nf(n){return typeof n=="function"?$f(n):(n instanceof IDBTransaction&&Vf(n),Lf(n,kf())?new Proxy(n,lo):n)}function kt(n){if(n instanceof IDBRequest)return Mf(n);if(Jr.has(n))return Jr.get(n);const e=Nf(n);return e!==n&&(Jr.set(n,e),$o.set(e,n)),e}const Qr=n=>$o.get(n);function Bf(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Uf=["get","getKey","getAll","getAllKeys","count"],Ff=["put","add","delete","clear"],Yr=new Map;function $l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ff.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Uf.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return Yr.set(e,r),r}Of(n=>({...n,get:(e,t,s)=>$l(e,t)||n.get(e,t,s),has:(e,t)=>!!$l(e,t)||n.has(e,t)}));/**
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
 */class jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function qf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const co="@firebase/app",Nl="0.14.6";/**
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
 */const ht=new Oo("@firebase/app"),Hf="@firebase/app-compat",zf="@firebase/analytics-compat",Gf="@firebase/analytics",Wf="@firebase/app-check-compat",Kf="@firebase/app-check",Jf="@firebase/auth",Qf="@firebase/auth-compat",Yf="@firebase/database",Xf="@firebase/data-connect",Zf="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",sg="@firebase/installations",ng="@firebase/installations-compat",ig="@firebase/messaging",rg="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",lg="@firebase/remote-config",cg="@firebase/remote-config-compat",dg="@firebase/storage",ug="@firebase/storage-compat",hg="@firebase/firestore",mg="@firebase/ai",pg="@firebase/firestore-compat",fg="firebase",gg="12.6.0";/**
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
 */const uo="[DEFAULT]",bg={[co]:"fire-core",[Hf]:"fire-core-compat",[Gf]:"fire-analytics",[zf]:"fire-analytics-compat",[Kf]:"fire-app-check",[Wf]:"fire-app-check-compat",[Jf]:"fire-auth",[Qf]:"fire-auth-compat",[Yf]:"fire-rtdb",[Xf]:"fire-data-connect",[Zf]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[sg]:"fire-iid",[ng]:"fire-iid-compat",[ig]:"fire-fcm",[rg]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[lg]:"fire-rc",[cg]:"fire-rc-compat",[dg]:"fire-gcs",[ug]:"fire-gcs-compat",[hg]:"fire-fst",[pg]:"fire-fst-compat",[mg]:"fire-vertex","fire-js":"fire-js",[fg]:"fire-js-all"};/**
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
 */const Li=new Map,yg=new Map,ho=new Map;function Bl(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ls(n){const e=n.name;if(ho.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,n);for(const t of Li.values())Bl(t,n);for(const t of yg.values())Bl(t,n);return!0}function No(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new Mn("app","Firebase",vg);/**
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
 */class _g{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=gg;function Td(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:uo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(t||(t=bd()),!t)throw Dt.create("no-options");const r=Li.get(i);if(r){if(ns(t,r.options)&&ns(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new xf(i);for(const c of ho.values())o.addComponent(c);const l=new _g(t,s,o);return Li.set(i,l),l}function Id(n=uo){const e=Li.get(n);if(!e&&n===uo&&bd())return Td();if(!e)throw Dt.create("no-app",{appName:n});return e}function Mt(n,e,t){let s=bg[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(o.join(" "));return}Ls(new is(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wg="firebase-heartbeat-database",Eg=1,xn="firebase-heartbeat-store";let Xr=null;function Ad(){return Xr||(Xr=Bf(wg,Eg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Xr}async function Tg(n){try{const t=(await Ad()).transaction(xn),s=await t.objectStore(xn).get(xd(n));return await t.done,s}catch(e){if(e instanceof gt)ht.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function Ul(n,e){try{const s=(await Ad()).transaction(xn,"readwrite");await s.objectStore(xn).put(e,xd(n)),await s.done}catch(t){if(t instanceof gt)ht.warn(t.message);else{const s=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(s.message)}}}function xd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ig=1024,Ag=30;class xg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ag){const o=Rg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fl(),{heartbeatsToSend:s,unsentEntries:i}=Sg(this._heartbeatsCache.heartbeats),r=Pi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ht.warn(t),""}}}function Fl(){return new Date().toISOString().substring(0,10)}function Sg(n,e=Ig){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pf()?ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jl(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}function Rg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Pg(n){Ls(new is("platform-logger",e=>new jf(e),"PRIVATE")),Ls(new is("heartbeat",e=>new xg(e),"PRIVATE")),Mt(co,Nl,n),Mt(co,Nl,"esm2020"),Mt("fire-js","")}Pg("");var Lg="firebase",kg="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Lg,kg,"app");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,Sd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.F=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(T,E,S){for(var v=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)v[ke-2]=arguments[ke];return y.prototype[E].apply(T,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);const T=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)T[E]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],E=w.g[2];let S=w.g[3],v;v=y+(S^_&(E^S))+T[0]+3614090360&4294967295,y=_+(v<<7&4294967295|v>>>25),v=S+(E^y&(_^E))+T[1]+3905402710&4294967295,S=y+(v<<12&4294967295|v>>>20),v=E+(_^S&(y^_))+T[2]+606105819&4294967295,E=S+(v<<17&4294967295|v>>>15),v=_+(y^E&(S^y))+T[3]+3250441966&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(S^_&(E^S))+T[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=S+(E^y&(_^E))+T[5]+1200080426&4294967295,S=y+(v<<12&4294967295|v>>>20),v=E+(_^S&(y^_))+T[6]+2821735955&4294967295,E=S+(v<<17&4294967295|v>>>15),v=_+(y^E&(S^y))+T[7]+4249261313&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(S^_&(E^S))+T[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=S+(E^y&(_^E))+T[9]+2336552879&4294967295,S=y+(v<<12&4294967295|v>>>20),v=E+(_^S&(y^_))+T[10]+4294925233&4294967295,E=S+(v<<17&4294967295|v>>>15),v=_+(y^E&(S^y))+T[11]+2304563134&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(S^_&(E^S))+T[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=S+(E^y&(_^E))+T[13]+4254626195&4294967295,S=y+(v<<12&4294967295|v>>>20),v=E+(_^S&(y^_))+T[14]+2792965006&4294967295,E=S+(v<<17&4294967295|v>>>15),v=_+(y^E&(S^y))+T[15]+1236535329&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(E^S&(_^E))+T[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=S+(_^E&(y^_))+T[6]+3225465664&4294967295,S=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(S^y))+T[11]+643717713&4294967295,E=S+(v<<14&4294967295|v>>>18),v=_+(S^y&(E^S))+T[0]+3921069994&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^S&(_^E))+T[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=S+(_^E&(y^_))+T[10]+38016083&4294967295,S=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(S^y))+T[15]+3634488961&4294967295,E=S+(v<<14&4294967295|v>>>18),v=_+(S^y&(E^S))+T[4]+3889429448&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^S&(_^E))+T[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=S+(_^E&(y^_))+T[14]+3275163606&4294967295,S=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(S^y))+T[3]+4107603335&4294967295,E=S+(v<<14&4294967295|v>>>18),v=_+(S^y&(E^S))+T[8]+1163531501&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^S&(_^E))+T[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=S+(_^E&(y^_))+T[2]+4243563512&4294967295,S=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(S^y))+T[7]+1735328473&4294967295,E=S+(v<<14&4294967295|v>>>18),v=_+(S^y&(E^S))+T[12]+2368359562&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(_^E^S)+T[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=S+(y^_^E)+T[8]+2272392833&4294967295,S=y+(v<<11&4294967295|v>>>21),v=E+(S^y^_)+T[11]+1839030562&4294967295,E=S+(v<<16&4294967295|v>>>16),v=_+(E^S^y)+T[14]+4259657740&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^S)+T[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=S+(y^_^E)+T[4]+1272893353&4294967295,S=y+(v<<11&4294967295|v>>>21),v=E+(S^y^_)+T[7]+4139469664&4294967295,E=S+(v<<16&4294967295|v>>>16),v=_+(E^S^y)+T[10]+3200236656&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^S)+T[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=S+(y^_^E)+T[0]+3936430074&4294967295,S=y+(v<<11&4294967295|v>>>21),v=E+(S^y^_)+T[3]+3572445317&4294967295,E=S+(v<<16&4294967295|v>>>16),v=_+(E^S^y)+T[6]+76029189&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^S)+T[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=S+(y^_^E)+T[12]+3873151461&4294967295,S=y+(v<<11&4294967295|v>>>21),v=E+(S^y^_)+T[15]+530742520&4294967295,E=S+(v<<16&4294967295|v>>>16),v=_+(E^S^y)+T[2]+3299628645&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(E^(_|~S))+T[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=S+(_^(y|~E))+T[7]+1126891415&4294967295,S=y+(v<<10&4294967295|v>>>22),v=E+(y^(S|~_))+T[14]+2878612391&4294967295,E=S+(v<<15&4294967295|v>>>17),v=_+(S^(E|~y))+T[5]+4237533241&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~S))+T[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=S+(_^(y|~E))+T[3]+2399980690&4294967295,S=y+(v<<10&4294967295|v>>>22),v=E+(y^(S|~_))+T[10]+4293915773&4294967295,E=S+(v<<15&4294967295|v>>>17),v=_+(S^(E|~y))+T[1]+2240044497&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~S))+T[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=S+(_^(y|~E))+T[15]+4264355552&4294967295,S=y+(v<<10&4294967295|v>>>22),v=E+(y^(S|~_))+T[6]+2734768916&4294967295,E=S+(v<<15&4294967295|v>>>17),v=_+(S^(E|~y))+T[13]+1309151649&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~S))+T[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=S+(_^(y|~E))+T[11]+3174756917&4294967295,S=y+(v<<10&4294967295|v>>>22),v=E+(y^(S|~_))+T[2]+718787259&4294967295,E=S+(v<<15&4294967295|v>>>17),v=_+(S^(E|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+S&4294967295}s.prototype.v=function(w,y){y===void 0&&(y=w.length);const _=y-this.blockSize,T=this.C;let E=this.h,S=0;for(;S<y;){if(E==0)for(;S<=_;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(T[E++]=w.charCodeAt(S++),E==this.blockSize){i(this,T),E=0;break}}else for(;S<y;)if(T[E++]=w[S++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=y},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)w[y++]=this.g[_]>>>T&255;return w};function r(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;const _=[];let T=!0;for(let E=w.length-1;E>=0;E--){const S=w[E]|0;T&&S==y||(_[E]=S,T=!1)}this.g=_}var l={};function c(w){return-128<=w&&w<128?r(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return C(d(-w));const y=[];let _=1;for(let T=0;w>=_;T++)y[T]=w/_|0,_*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return C(h(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(y,8));let T=p;for(let S=0;S<w.length;S+=8){var E=Math.min(8,w.length-S);const v=parseInt(w.substring(S,S+E),y);E<8?(E=d(Math.pow(y,E)),T=T.j(E).add(d(v))):(T=T.j(_),T=T.add(d(v)))}return T}var p=c(0),f=c(1),b=c(16777216);n=o.prototype,n.m=function(){if(x(this))return-C(this).m();let w=0,y=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);w+=(T>=0?T:4294967296+T)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(x(this))return"-"+C(this).toString(w);const y=d(Math.pow(w,6));var _=this;let T="";for(;;){const E=se(_,y).g;_=k(_,E.j(y));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=E,I(_))return S+T;for(;S.length<6;)S="0"+S;T=S+T}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=k(this,w),x(w)?-1:I(w)?0:1};function C(w){const y=w.g.length,_=[];for(let T=0;T<y;T++)_[T]=~w.g[T];return new o(_,~w.h).add(f)}n.abs=function(){return x(this)?C(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),_=[];let T=0;for(let E=0;E<=y;E++){let S=T+(this.i(E)&65535)+(w.i(E)&65535),v=(S>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);T=v>>>16,S&=65535,v&=65535,_[E]=v<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function k(w,y){return w.add(C(y))}n.j=function(w){if(I(this)||I(w))return p;if(x(this))return x(w)?C(this).j(C(w)):C(C(this).j(w));if(x(w))return C(this.j(C(w)));if(this.l(b)<0&&w.l(b)<0)return d(this.m()*w.m());const y=this.g.length+w.g.length,_=[];for(var T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<w.g.length;E++){const S=this.i(T)>>>16,v=this.i(T)&65535,ke=w.i(E)>>>16,Gt=w.i(E)&65535;_[2*T+2*E]+=v*Gt,N(_,2*T+2*E),_[2*T+2*E+1]+=S*Gt,N(_,2*T+2*E+1),_[2*T+2*E+1]+=v*ke,N(_,2*T+2*E+1),_[2*T+2*E+2]+=S*ke,N(_,2*T+2*E+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function N(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function G(w,y){this.g=w,this.h=y}function se(w,y){if(I(y))throw Error("division by zero");if(I(w))return new G(p,p);if(x(w))return y=se(C(w),y),new G(C(y.g),C(y.h));if(x(y))return y=se(w,C(y)),new G(C(y.g),y.h);if(w.g.length>30){if(x(w)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=f,T=y;T.l(w)<=0;)_=oe(_),T=oe(T);var E=X(_,1),S=X(T,1);for(T=X(T,2),_=X(_,2);!I(T);){var v=S.add(T);v.l(w)<=0&&(E=E.add(_),S=v),T=X(T,1),_=X(_,1)}return y=k(w,E.j(y)),new G(E,y)}for(E=p;w.l(y)>=0;){for(_=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),S=d(_),v=S.j(y);x(v)||v.l(w)>0;)_-=T,S=d(_),v=S.j(y);I(S)&&(S=f),E=E.add(S),w=k(w,v)}return new G(E,w)}n.B=function(w){return se(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)&w.i(T);return new o(_,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)|w.i(T);return new o(_,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)^w.i(T);return new o(_,this.h^w.h)};function oe(w){const y=w.g.length+1,_=[];for(let T=0;T<y;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(_,w.h)}function X(w,y){const _=y>>5;y%=32;const T=w.g.length-_,E=[];for(let S=0;S<T;S++)E[S]=y>0?w.i(S+_)>>>y|w.i(S+_+1)<<32-y:w.i(S+_);return new o(E,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Sd=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,Vt=o}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cd,pn,Rd,gi,mo,Pd,Ld,kd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var u=0;u<a.length;++u){var m=a[u];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=t(this);function i(a,u){if(u)e:{var m=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in m))break e;m=m[A]}a=a[a.length-1],g=m[a],u=u(g),u!=g&&u!=null&&e(m,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var m=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&m.push([g,u[g]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,m){return a.call.apply(a.bind,arguments)}function d(a,u,m){return d=c,d.apply(null,arguments)}function h(a,u){var m=Array.prototype.slice.call(arguments,1);return function(){var g=m.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function m(){}m.prototype=u.prototype,a.Z=u.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(g,A,R){for(var D=Array(arguments.length-2),W=2;W<arguments.length;W++)D[W-2]=arguments[W];return u.prototype[A].apply(g,D)}}var f=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function b(a){const u=a.length;if(u>0){const m=Array(u);for(let g=0;g<u;g++)m[g]=a[g];return m}return[]}function I(a,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var m=typeof A;if(m=m!="object"?m:A?Array.isArray(A)?"array":m:"null",m=="array"||m=="object"&&typeof A.length=="number"){m=a.length||0;const R=A.length||0;a.length=m+R;for(let D=0;D<R;D++)a[m+D]=A[D]}else a.push(A)}}class x{constructor(u,m){this.i=u,this.j=m,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(a){o.setTimeout(()=>{throw a},0)}function k(){var a=w;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,m){const g=G.get();g.set(u,m),this.h?this.h.next=g:this.g=g,this.h=g}}var G=new x(()=>new se,a=>a.reset());class se{constructor(){this.next=this.g=this.h=null}set(u,m){this.h=u,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,X=!1,w=new N,y=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(_)}};function _(){for(var a;a=k();){try{a.h.call(a.g)}catch(m){C(m)}var u=G;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}X=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,u),o.removeEventListener("test",m,u)}catch{}return a})();function v(a){return/^[\s\xa0]*$/.test(a)}function ke(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(ke,E),ke.prototype.init=function(a,u){const m=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(m=="mouseover"?u=a.fromElement:m=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gt="closure_listenable_"+(Math.random()*1e6|0),cp=0;function dp(a,u,m,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=m,this.capture=!!g,this.ha=A,this.key=++cp,this.da=this.fa=!1}function Wn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Kn(a,u,m){for(const g in a)u.call(m,a[g],g,a)}function up(a,u){for(const m in a)u.call(void 0,a[m],m,a)}function Ra(a){const u={};for(const m in a)u[m]=a[m];return u}const Pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,u){let m,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(m in g)a[m]=g[m];for(let R=0;R<Pa.length;R++)m=Pa[R],Object.prototype.hasOwnProperty.call(g,m)&&(a[m]=g[m])}}function Jn(a){this.src=a,this.g={},this.h=0}Jn.prototype.add=function(a,u,m,g,A){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const D=Ar(a,u,g,A);return D>-1?(u=a[D],m||(u.fa=!1)):(u=new dp(u,this.src,R,!!g,A),u.fa=m,a.push(u)),u};function Ir(a,u){const m=u.type;if(m in a.g){var g=a.g[m],A=Array.prototype.indexOf.call(g,u,void 0),R;(R=A>=0)&&Array.prototype.splice.call(g,A,1),R&&(Wn(u),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Ar(a,u,m,g){for(let A=0;A<a.length;++A){const R=a[A];if(!R.da&&R.listener==u&&R.capture==!!m&&R.ha==g)return A}return-1}var xr="closure_lm_"+(Math.random()*1e6|0),Sr={};function ka(a,u,m,g,A){if(Array.isArray(u)){for(let R=0;R<u.length;R++)ka(a,u[R],m,g,A);return null}return m=Va(m),a&&a[Gt]?a.J(u,m,l(g)?!!g.capture:!1,A):hp(a,u,m,!1,g,A)}function hp(a,u,m,g,A,R){if(!u)throw Error("Invalid event type");const D=l(A)?!!A.capture:!!A;let W=Rr(a);if(W||(a[xr]=W=new Jn(a)),m=W.add(u,m,g,D,R),m.proxy)return m;if(g=mp(),m.proxy=g,g.src=a,g.listener=m,a.addEventListener)S||(A=D),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(Ma(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return m}function mp(){function a(m){return u.call(a.src,a.listener,m)}const u=pp;return a}function Da(a,u,m,g,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)Da(a,u[R],m,g,A);else g=l(g)?!!g.capture:!!g,m=Va(m),a&&a[Gt]?(a=a.i,R=String(u).toString(),R in a.g&&(u=a.g[R],m=Ar(u,m,g,A),m>-1&&(Wn(u[m]),Array.prototype.splice.call(u,m,1),u.length==0&&(delete a.g[R],a.h--)))):a&&(a=Rr(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ar(u,m,g,A)),(m=a>-1?u[a]:null)&&Cr(m))}function Cr(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Gt])Ir(u.i,a);else{var m=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(m,g,a.capture):u.detachEvent?u.detachEvent(Ma(m),g):u.addListener&&u.removeListener&&u.removeListener(g),(m=Rr(u))?(Ir(m,a),m.h==0&&(m.src=null,u[xr]=null)):Wn(a)}}}function Ma(a){return a in Sr?Sr[a]:Sr[a]="on"+a}function pp(a,u){if(a.da)a=!0;else{u=new ke(u,this);const m=a.listener,g=a.ha||a.src;a.fa&&Cr(a),a=m.call(g,u)}return a}function Rr(a){return a=a[xr],a instanceof Jn?a:null}var Pr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Va(a){return typeof a=="function"?a:(a[Pr]||(a[Pr]=function(u){return a.handleEvent(u)}),a[Pr])}function Te(){T.call(this),this.i=new Jn(this),this.M=this,this.G=null}p(Te,T),Te.prototype[Gt]=!0,Te.prototype.removeEventListener=function(a,u,m,g){Da(this,a,u,m,g)};function Ce(a,u){var m,g=a.G;if(g)for(m=[];g;g=g.G)m.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var A=u;u=new E(g,a),La(u,A)}A=!0;let R,D;if(m)for(D=m.length-1;D>=0;D--)R=u.g=m[D],A=Qn(R,g,!0,u)&&A;if(R=u.g=a,A=Qn(R,g,!0,u)&&A,A=Qn(R,g,!1,u)&&A,m)for(D=0;D<m.length;D++)R=u.g=m[D],A=Qn(R,g,!1,u)&&A}Te.prototype.N=function(){if(Te.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const m=a.g[u];for(let g=0;g<m.length;g++)Wn(m[g]);delete a.g[u],a.h--}}this.G=null},Te.prototype.J=function(a,u,m,g){return this.i.add(String(a),u,!1,m,g)},Te.prototype.K=function(a,u,m,g){return this.i.add(String(a),u,!0,m,g)};function Qn(a,u,m,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let R=0;R<u.length;++R){const D=u[R];if(D&&!D.da&&D.capture==m){const W=D.listener,pe=D.ha||D.src;D.fa&&Ir(a.i,D),A=W.call(pe,g)!==!1&&A}}return A&&!g.defaultPrevented}function fp(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Oa(a){a.g=fp(()=>{a.g=null,a.i&&(a.i=!1,Oa(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class gp extends T{constructor(u,m){super(),this.m=u,this.l=m,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Oa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(a){T.call(this),this.h=a,this.g={}}p(Gs,T);var $a=[];function Na(a){Kn(a.g,function(u,m){this.g.hasOwnProperty(m)&&Cr(u)},a),a.g={}}Gs.prototype.N=function(){Gs.Z.N.call(this),Na(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=o.JSON.stringify,bp=o.JSON.parse,yp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ba(){}function Ua(){}var Ws={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function kr(){E.call(this,"d")}p(kr,E);function Dr(){E.call(this,"c")}p(Dr,E);var Wt={},Fa=null;function Yn(){return Fa=Fa||new Te}Wt.Ia="serverreachability";function ja(a){E.call(this,Wt.Ia,a)}p(ja,E);function Ks(a){const u=Yn();Ce(u,new ja(u))}Wt.STAT_EVENT="statevent";function qa(a,u){E.call(this,Wt.STAT_EVENT,a),this.stat=u}p(qa,E);function Re(a){const u=Yn();Ce(u,new qa(u,a))}Wt.Ja="timingevent";function Ha(a,u){E.call(this,Wt.Ja,a),this.size=u}p(Ha,E);function Js(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Qs(){this.g=!0}Qs.prototype.ua=function(){this.g=!1};function vp(a,u,m,g,A,R){a.info(function(){if(a.g)if(R){var D="",W=R.split("&");for(let ee=0;ee<W.length;ee++){var pe=W[ee].split("=");if(pe.length>1){const ge=pe[0];pe=pe[1];const Qe=ge.split("_");D=Qe.length>=2&&Qe[1]=="type"?D+(ge+"="+pe+"&"):D+(ge+"=redacted&")}}}else D=null;else D=R;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+m+`
`+D})}function _p(a,u,m,g,A,R,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+m+`
`+R+" "+D})}function ms(a,u,m,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ep(a,m)+(g?" "+g:"")})}function wp(a,u){a.info(function(){return"TIMEOUT: "+u})}Qs.prototype.info=function(){};function Ep(a,u){if(!a.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var m=R[a];if(!(m.length<2)){var g=m[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return Lr(R)}catch{return u}}var Xn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},za={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ga;function Mr(){}p(Mr,Ba),Mr.prototype.g=function(){return new XMLHttpRequest},Ga=new Mr;function Ys(a){return encodeURIComponent(String(a))}function Tp(a){var u=1;a=a.split(":");const m=[];for(;u>0&&a.length;)m.push(a.shift()),u--;return a.length&&m.push(a.join(":")),m}function yt(a,u,m,g){this.j=a,this.i=u,this.l=m,this.S=g||1,this.V=new Gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var Ka={},Vr={};function Or(a,u,m){a.M=1,a.A=ei(Je(u)),a.u=m,a.R=!0,Ja(a,null)}function Ja(a,u){a.F=Date.now(),Zn(a),a.B=Je(a.A);var m=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),ll(m.i,"t",g),a.C=0,m=a.j.L,a.h=new Wa,a.g=xl(a.j,m?u:null,!a.u),a.P>0&&(a.O=new gp(d(a.Y,a,a.g),a.P)),u=a.V,m=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&($a[0]=A.toString()),A=$a);for(let R=0;R<A.length;R++){const D=ka(m,A[R],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=a.J?Ra(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ks(),vp(a.i,a.v,a.B,a.l,a.S,a.u)}yt.prototype.ba=function(a){a=a.target;const u=this.O;u&&wt(a)==3?u.j():this.Y(a)},yt.prototype.Y=function(a){try{if(a==this.g)e:{const W=wt(this.g),pe=this.g.ya(),ee=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||fl(this.g)))){this.K||W!=4||pe==7||(pe==8||ee<=0?Ks(3):Ks(2)),$r(this);var u=this.g.ca();this.X=u;var m=Ip(this);if(this.o=u==200,_p(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var R=g;break t}}R=null}if(a=R)ms(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nr(this,a);else{this.o=!1,this.m=3,Re(12),Kt(this),Xs(this);break e}}if(this.R){a=!0;let ge;for(;!this.K&&this.C<m.length;)if(ge=Ap(this,m),ge==Vr){W==4&&(this.m=4,Re(14),a=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Ka){this.m=4,Re(15),ms(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else ms(this.i,this.l,ge,null),Nr(this,ge);if(Qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||m.length!=0||this.h.h||(this.m=1,Re(16),a=!1),this.o=this.o&&a,!a)ms(this.i,this.l,m,"[Invalid Chunked Response]"),Kt(this),Xs(this);else if(m.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Gr(D),D.P=!0,Re(11))}}else ms(this.i,this.l,m,null),Nr(this,m);W==4&&Kt(this),this.o&&!this.K&&(W==4?El(this.j,this):(this.o=!1,Zn(this)))}else Bp(this.g),u==400&&m.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),Kt(this),Xs(this)}}}catch{}finally{}};function Ip(a){if(!Qa(a))return a.g.la();const u=fl(a.g);if(u==="")return"";let m="";const g=u.length,A=wt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kt(a),Xs(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<g;R++)a.h.h=!0,m+=a.h.i.decode(u[R],{stream:!(A&&R==g-1)});return u.length=0,a.h.g+=m,a.C=0,a.h.g}function Qa(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ap(a,u){var m=a.C,g=u.indexOf(`
`,m);return g==-1?Vr:(m=Number(u.substring(m,g)),isNaN(m)?Ka:(g+=1,g+m>u.length?Vr:(u=u.slice(g,g+m),a.C=g+m,u)))}yt.prototype.cancel=function(){this.K=!0,Kt(this)};function Zn(a){a.T=Date.now()+a.H,Ya(a,a.H)}function Ya(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Js(d(a.aa,a),u)}function $r(a){a.D&&(o.clearTimeout(a.D),a.D=null)}yt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(wp(this.i,this.B),this.M!=2&&(Ks(),Re(17)),Kt(this),this.m=2,Xs(this)):Ya(this,this.T-a)};function Xs(a){a.j.I==0||a.K||El(a.j,a)}function Kt(a){$r(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Na(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Nr(a,u){try{var m=a.j;if(m.I!=0&&(m.g==a||Br(m.h,a))){if(!a.L&&Br(m.h,a)&&m.I==3){try{var g=m.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)ri(m),ni(m);else break e;zr(m),Re(18)}}else m.xa=A[1],0<m.xa-m.K&&A[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Js(d(m.Va,m),6e3));el(m.h)<=1&&m.ta&&(m.ta=void 0)}else Qt(m,11)}else if((a.L||m.g==a)&&ri(m),!v(u))for(A=m.Ba.g.parse(u),u=0;u<A.length;u++){let ee=A[u];const ge=ee[0];if(!(ge<=m.K))if(m.K=ge,ee=ee[1],m.I==2)if(ee[0]=="c"){m.M=ee[1],m.ba=ee[2];const Qe=ee[3];Qe!=null&&(m.ka=Qe,m.j.info("VER="+m.ka));const Yt=ee[4];Yt!=null&&(m.za=Yt,m.j.info("SVER="+m.za));const Et=ee[5];Et!=null&&typeof Et=="number"&&Et>0&&(g=1.5*Et,m.O=g,m.j.info("backChannelRequestTimeoutMs_="+g)),g=m;const Tt=a.g;if(Tt){const ai=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var R=g.h;R.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ur(R,R.h),R.h=null))}if(g.G){const Wr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(g.wa=Wr,ne(g.J,g.G,Wr))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),g=m;var D=a;if(g.na=Al(g,g.L?g.ba:null,g.W),D.L){tl(g.h,D);var W=D,pe=g.O;pe&&(W.H=pe),W.D&&($r(W),Zn(W)),g.g=D}else _l(g);m.i.length>0&&ii(m)}else ee[0]!="stop"&&ee[0]!="close"||Qt(m,7);else m.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Qt(m,7):Hr(m):ee[0]!="noop"&&m.l&&m.l.qa(ee),m.A=0)}}Ks(4)}catch{}}var xp=class{constructor(a,u){this.g=a,this.map=u}};function Xa(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Za(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function el(a){return a.h?1:a.g?a.g.size:0}function Br(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ur(a,u){a.g?a.g.add(u):a.h=u}function tl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xa.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const m of a.g.values())u=u.concat(m.G);return u}return b(a.i)}var nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sp(a,u){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const g=a[m].indexOf("=");let A,R=null;g>=0?(A=a[m].substring(0,g),R=a[m].substring(g+1)):A=a[m],u(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function vt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof vt?(this.l=a.l,Zs(this,a.j),this.o=a.o,this.g=a.g,en(this,a.u),this.h=a.h,Fr(this,cl(a.i)),this.m=a.m):a&&(u=String(a).match(nl))?(this.l=!1,Zs(this,u[1]||"",!0),this.o=tn(u[2]||""),this.g=tn(u[3]||"",!0),en(this,u[4]),this.h=tn(u[5]||"",!0),Fr(this,u[6]||"",!0),this.m=tn(u[7]||"")):(this.l=!1,this.i=new nn(null,this.l))}vt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(sn(u,il,!0),":");var m=this.g;return(m||u=="file")&&(a.push("//"),(u=this.o)&&a.push(sn(u,il,!0),"@"),a.push(Ys(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(sn(m,m.charAt(0)=="/"?Pp:Rp,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",sn(m,kp)),a.join("")},vt.prototype.resolve=function(a){const u=Je(this);let m=!!a.j;m?Zs(u,a.j):m=!!a.o,m?u.o=a.o:m=!!a.g,m?u.g=a.g:m=a.u!=null;var g=a.h;if(m)en(u,a.u);else if(m=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let D=0;D<A.length;){const W=A[D++];W=="."?g&&D==A.length&&R.push(""):W==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&D==A.length&&R.push("")):(R.push(W),g=!0)}g=R.join("/")}else g=A}return m?u.h=g:m=a.i.toString()!=="",m?Fr(u,cl(a.i)):m=!!a.m,m&&(u.m=a.m),u};function Je(a){return new vt(a)}function Zs(a,u,m){a.j=m?tn(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function en(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Fr(a,u,m){u instanceof nn?(a.i=u,Dp(a.i,a.l)):(m||(u=sn(u,Lp)),a.i=new nn(u,a.l))}function ne(a,u,m){a.i.set(u,m)}function ei(a){return ne(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function tn(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function sn(a,u,m){return typeof a=="string"?(a=encodeURI(a).replace(u,Cp),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Cp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var il=/[#\/\?@]/g,Rp=/[#\?:]/g,Pp=/[#\?]/g,Lp=/[#\?@]/g,kp=/#/g;function nn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Jt(a){a.g||(a.g=new Map,a.h=0,a.i&&Sp(a.i,function(u,m){a.add(decodeURIComponent(u.replace(/\+/g," ")),m)}))}n=nn.prototype,n.add=function(a,u){Jt(this),this.i=null,a=ps(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(u),this.h+=1,this};function rl(a,u){Jt(a),u=ps(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ol(a,u){return Jt(a),u=ps(a,u),a.g.has(u)}n.forEach=function(a,u){Jt(this),this.g.forEach(function(m,g){m.forEach(function(A){a.call(u,A,g,this)},this)},this)};function al(a,u){Jt(a);let m=[];if(typeof u=="string")ol(a,u)&&(m=m.concat(a.g.get(ps(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)m=m.concat(a[u]);return m}n.set=function(a,u){return Jt(this),this.i=null,a=ps(this,a),ol(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=al(this,a),a.length>0?String(a[0]):u):u};function ll(a,u,m){rl(a,u),m.length>0&&(a.i=null,a.g.set(ps(a,u),b(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var m=u[g];const A=Ys(m);m=al(this,m);for(let R=0;R<m.length;R++){let D=A;m[R]!==""&&(D+="="+Ys(m[R])),a.push(D)}}return this.i=a.join("&")};function cl(a){const u=new nn;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ps(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Dp(a,u){u&&!a.j&&(Jt(a),a.i=null,a.g.forEach(function(m,g){const A=g.toLowerCase();g!=A&&(rl(this,g),ll(this,A,m))},a)),a.j=u}function Mp(a,u){const m=new Qs;if(o.Image){const g=new Image;g.onload=h(_t,m,"TestLoadImage: loaded",!0,u,g),g.onerror=h(_t,m,"TestLoadImage: error",!1,u,g),g.onabort=h(_t,m,"TestLoadImage: abort",!1,u,g),g.ontimeout=h(_t,m,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Vp(a,u){const m=new Qs,g=new AbortController,A=setTimeout(()=>{g.abort(),_t(m,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(A),R.ok?_t(m,"TestPingServer: ok",!0,u):_t(m,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),_t(m,"TestPingServer: error",!1,u)})}function _t(a,u,m,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(m)}catch{}}function Op(){this.g=new yp}function jr(a){this.i=a.Sb||null,this.h=a.ab||!1}p(jr,Ba),jr.prototype.g=function(){return new ti(this.i,this.h)};function ti(a,u){Te.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ti,Te),n=ti.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,on(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?rn(this):on(this),this.readyState==3&&dl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,rn(this))},n.Na=function(a){this.g&&(this.response=a,rn(this))},n.ga=function(){this.g&&rn(this)};function rn(a){a.readyState=4,a.l=null,a.j=null,a.B=null,on(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var m=u.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=u.next();return a.join(`\r
`)};function on(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ul(a){let u="";return Kn(a,function(m,g){u+=g,u+=":",u+=m,u+=`\r
`}),u}function qr(a,u,m){e:{for(g in m){var g=!1;break e}g=!0}g||(m=ul(m),typeof a=="string"?m!=null&&Ys(m):ne(a,u,m))}function ae(a){Te.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ae,Te);var $p=/^https?$/i,Np=["POST","PUT"];n=ae.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,m,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ga.g(),this.g.onreadystatechange=f(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){hl(this,R);return}if(a=m||"",m=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)m.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())m.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(m.keys()).find(R=>R.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Np,u,void 0)>=0)||g||A||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of m)this.g.setRequestHeader(R,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){hl(this,R)}};function hl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ml(a),si(a)}function ml(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ce(this,"complete"),Ce(this,"abort"),si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pl(this):this.Xa())},n.Xa=function(){pl(this)};function pl(a){if(a.h&&typeof r<"u"){if(a.v&&wt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ce(a,"readystatechange"),wt(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var m;if(!(m=u)){var g;if(g=R===0){let D=String(a.D).match(nl)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!$p.test(D?D.toLowerCase():"")}m=g}if(m)Ce(a,"complete"),Ce(a,"success");else{a.o=6;try{var A=wt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",ml(a)}}finally{si(a)}}}}function si(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,u||Ce(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function wt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return wt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),bp(u)}};function fl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Bp(a){const u={};a=(a.g&&wt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var m=Tp(a[g]);const A=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const R=u[A]||[];u[A]=R,R.push(m)}up(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(a,u,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||u}function gl(a){this.za=0,this.i=[],this.j=new Qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=an("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=an("baseRetryDelayMs",5e3,a),this.Za=an("retryDelaySeedMs",1e4,a),this.Ta=an("forwardChannelMaxRetries",2,a),this.va=an("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Xa(a&&a.concurrentRequestLimit),this.Ba=new Op,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=gl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,m,g){Re(0),this.W=a,this.H=u||{},m&&g!==void 0&&(this.H.OSID=m,this.H.OAID=g),this.F=this.X,this.J=Al(this,null,this.W),ii(this)};function Hr(a){if(bl(a),a.I==3){var u=a.V++,m=Je(a.J);if(ne(m,"SID",a.M),ne(m,"RID",u),ne(m,"TYPE","terminate"),ln(a,m),u=new yt(a,a.j,u),u.M=2,u.A=ei(Je(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=u.A,m=!0),m||(u.g=xl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Zn(u)}Il(a)}function ni(a){a.g&&(Gr(a),a.g.cancel(),a.g=null)}function bl(a){ni(a),a.v&&(o.clearTimeout(a.v),a.v=null),ri(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ii(a){if(!Za(a.h)&&!a.m){a.m=!0;var u=a.Ea;oe||y(),X||(oe(),X=!0),w.add(u,a),a.D=0}}function Up(a,u){return el(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Js(d(a.Ea,a,u),Tl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new yt(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Ra(R),La(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var u=0,m=0;m<this.i.length;m++){t:{var g=this.i[m];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=m;break e}if(u===4096||m===this.i.length-1){u=m+1;break e}}u=1e3}else u=1e3;u=vl(this,A,u),m=Je(this.J),ne(m,"RID",a),ne(m,"CVER",22),this.G&&ne(m,"X-HTTP-Session-Id",this.G),ln(this,m),R&&(this.R?u="headers="+Ys(ul(R))+"&"+u:this.u&&qr(m,this.u,R)),Ur(this.h,A),this.Ra&&ne(m,"TYPE","init"),this.S?(ne(m,"$req",u),ne(m,"SID","null"),A.U=!0,Or(A,m,null)):Or(A,m,u),this.I=2}}else this.I==3&&(a?yl(this,a):this.i.length==0||Za(this.h)||yl(this))};function yl(a,u){var m;u?m=u.l:m=a.V++;const g=Je(a.J);ne(g,"SID",a.M),ne(g,"RID",m),ne(g,"AID",a.K),ln(a,g),a.u&&a.o&&qr(g,a.u,a.o),m=new yt(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),u&&(a.i=u.G.concat(a.i)),u=vl(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ur(a.h,m),Or(m,g,u)}function ln(a,u){a.H&&Kn(a.H,function(m,g){ne(u,g,m)}),a.l&&Kn({},function(m,g){ne(u,g,m)})}function vl(a,u,m){m=Math.min(a.i.length,m);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var A=a.i;let W=-1;for(;;){const pe=["count="+m];W==-1?m>0?(W=A[0].g,pe.push("ofs="+W)):W=0:pe.push("ofs="+W);let ee=!0;for(let ge=0;ge<m;ge++){var R=A[ge].g;const Qe=A[ge].map;if(R-=W,R<0)W=Math.max(0,A[ge].g-100),ee=!1;else try{R="req"+R+"_"||"";try{var D=Qe instanceof Map?Qe:Object.entries(Qe);for(const[Yt,Et]of D){let Tt=Et;l(Et)&&(Tt=Lr(Et)),pe.push(R+Yt+"="+encodeURIComponent(Tt))}}catch(Yt){throw pe.push(R+"type="+encodeURIComponent("_badmap")),Yt}}catch{g&&g(Qe)}}if(ee){D=pe.join("&");break e}}D=void 0}return a=a.i.splice(0,m),u.G=a,D}function _l(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;oe||y(),X||(oe(),X=!0),w.add(u,a),a.A=0}}function zr(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Js(d(a.Da,a),Tl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,wl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Js(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),ni(this),wl(this))};function Gr(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function wl(a){a.g=new yt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Je(a.na);ne(u,"RID","rpc"),ne(u,"SID",a.M),ne(u,"AID",a.K),ne(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ne(u,"TO",a.ia),ne(u,"TYPE","xmlhttp"),ln(a,u),a.u&&a.o&&qr(u,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=ei(Je(u)),m.u=null,m.R=!0,Ja(m,a)}n.Va=function(){this.C!=null&&(this.C=null,ni(this),zr(this),Re(19))};function ri(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function El(a,u){var m=null;if(a.g==u){ri(a),Gr(a),a.g=null;var g=2}else if(Br(a.h,u))m=u.G,tl(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){m=u.u?u.u.length:0,u=Date.now()-u.F;var A=a.D;g=Yn(),Ce(g,new Ha(g,m)),ii(a)}else _l(a);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&Up(a,u)||g==2&&zr(a)))switch(m&&m.length>0&&(u=a.h,u.i=u.i.concat(m)),A){case 1:Qt(a,5);break;case 4:Qt(a,10);break;case 3:Qt(a,6);break;default:Qt(a,2)}}}function Tl(a,u){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*u}function Qt(a,u){if(a.j.info("Error code "+u),u==2){var m=d(a.bb,a),g=a.Ua;const A=!g;g=new vt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zs(g,"https"),ei(g),A?Mp(g.toString(),m):Vp(g.toString(),m)}else Re(2);a.I=0,a.l&&a.l.pa(u),Il(a),bl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Il(a){if(a.I=0,a.ja=[],a.l){const u=sl(a.h);(u.length!=0||a.i.length!=0)&&(I(a.ja,u),I(a.ja,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.oa()}}function Al(a,u,m){var g=m instanceof vt?Je(m):new vt(m);if(g.g!="")u&&(g.g=u+"."+g.g),en(g,g.u);else{var A=o.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const R=new vt(null);g&&Zs(R,g),u&&(R.g=u),A&&en(R,A),m&&(R.h=m),g=R}return m=a.G,u=a.wa,m&&u&&ne(g,m,u),ne(g,"VER",a.ka),ln(a,g),g}function xl(a,u,m){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ae(new jr({ab:m})):new ae(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}n=Sl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function oi(){}oi.prototype.g=function(a,u){return new Oe(a,u)};function Oe(a,u){Te.call(this),this.g=new gl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!v(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new fs(this)}p(Oe,Te),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Hr(this.g)},Oe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=Lr(a),a=m);u.i.push(new xp(u.Ya++,a)),u.I==3&&ii(u)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Hr(this.g),delete this.g,Oe.Z.N.call(this)};function Cl(a){kr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const m in u){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Cl,kr);function Rl(){Dr.call(this),this.status=1}p(Rl,Dr);function fs(a){this.g=a}p(fs,Sl),fs.prototype.ra=function(){Ce(this.g,"a")},fs.prototype.qa=function(a){Ce(this.g,new Cl(a))},fs.prototype.pa=function(a){Ce(this.g,new Rl)},fs.prototype.oa=function(){Ce(this.g,"b")},oi.prototype.createWebChannel=oi.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,kd=function(){return new oi},Ld=function(){return Yn()},Pd=Wt,mo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,gi=Xn,za.COMPLETE="complete",Rd=za,Ua.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",Te.prototype.listen=Te.prototype.J,pn=Ua,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,Cd=ae}).apply(typeof ci<"u"?ci:typeof self<"u"?self:typeof window<"u"?window:{});const Hl="@firebase/firestore",zl="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Fs="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Oo("@firebase/firestore");function ys(){return rs.logLevel}function O(n,...e){if(rs.logLevel<=K.DEBUG){const t=e.map(Bo);rs.debug(`Firestore (${Fs}): ${n}`,...t)}}function mt(n,...e){if(rs.logLevel<=K.ERROR){const t=e.map(Bo);rs.error(`Firestore (${Fs}): ${n}`,...t)}}function ks(n,...e){if(rs.logLevel<=K.WARN){const t=e.map(Bo);rs.warn(`Firestore (${Fs}): ${n}`,...t)}}function Bo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function j(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Dd(n,s,t)}function Dd(n,e,t){let s=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw mt(s),new Error(s)}function Z(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Dd(e,i,s)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Vg{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new dt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new dt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string",31837,{l:s}),new Md(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class Og{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $g{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Og(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ng{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Bg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function po(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Zr(i)===Zr(r)?J(i,r):Zr(i)?1:-1}return J(n.length,e.length)}const Ug=55296,Fg=57343;function Zr(n){const e=n.charCodeAt(0);return e>=Ug&&e<=Fg}function Ds(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="__name__";class Xe{constructor(e,t,s){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&j(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=Xe.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return J(e.length,t.length)}static compareSegments(e,t){const s=Xe.isNumericId(e),i=Xe.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):po(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class te extends Xe{construct(e,t,s){return new te(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new te(t)}static emptyPath(){return new te([])}}const jg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Xe{construct(e,t,s){return new we(e,t,s)}static isValidIdentifier(e){return jg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wl}static keyField(){return new we([Wl])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(te.fromString(e))}static fromName(e){return new B(te.fromString(e).popFirst(5))}static empty(){return new B(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n,e,t){if(!t)throw new M(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qg(n,e,t,s){if(e===!0&&s===!0)throw new M(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kl(n){if(!B.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jl(n){if(B.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Od(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function Ge(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sr(n);throw new M(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function On(n,e){if(!Od(n))throw new M(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new M(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=-62135596800,Yl=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Yl);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ql)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yl}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(On(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ql;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:me("string",ie._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new ie(0,0))}static max(){return new q(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Sn=-1;function Hg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new $t(i,B.empty(),e)}function zg(n){return new $t(n.readTime,n.key,Sn)}class $t{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new $t(q.min(),B.empty(),Sn)}static max(){return new $t(q.max(),B.empty(),Sn)}}function Gg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Wg)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,s)=>{t(e)}))}static reject(e){return new L(((t,s)=>{s(e)}))}static waitFor(e){return new L(((t,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&t()}),(c=>s(c)))})),o=!0,r===i&&t()}))}static or(e){let t=L.resolve(!1);for(const s of e)t=t.next((i=>i?L.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new L(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const d=c;t(e[d]).next((h=>{o[d]=h,++l,l===r&&s(o)}),(h=>i(h)))}}))}static doWhile(e,t){return new L(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function Jg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class nr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-1;function ir(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function Qg(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="";function Yg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xl(e)),e=Xg(n.get(t),e);return Xl(e)}function Xg(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case $d:t+="";break;default:t+=r}}return t}function Xl(n){return n+$d+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new di(this.root,e,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new di(this.root,e,this.comparator,!0)}}class di{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_e.RED,this.left=i??_e.EMPTY,this.right=r??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new _e(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(e){return new ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new fe(we.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Bd("Invalid base64 string: "+r):r}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Zg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Zg.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="server_timestamp",Fd="__type__",jd="__previous_value__",qd="__local_write_time__";function jo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fd])==null?void 0:s.stringValue)===Ud}function rr(n){const e=n.mapValue.fields[jd];return jo(e)?rr(e):e}function Cn(n){const e=Nt(n.mapValue.fields[qd].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,s,i,r,o,l,c,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=h}}const Di="(default)";class Rn{constructor(e,t){this.projectId=e,this.database=t||Di}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database===Di}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="__type__",tb="__max__",ui={mapValue:{}},zd="__vector__",Mi="value";function Ut(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jo(n)?4:nb(n)?9007199254740991:sb(n)?10:11:j(28295,{value:n})}function ot(n,e){if(n===e)return!0;const t=Ut(n);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cn(n).isEqual(Cn(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Nt(i.timestampValue),l=Nt(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Bt(i.bytesValue).isEqual(Bt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return le(i.geoPointValue.latitude)===le(r.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return le(i.integerValue)===le(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=le(i.doubleValue),l=le(r.doubleValue);return o===l?ki(o)===ki(l):isNaN(o)&&isNaN(l)}return!1})(n,e);case 9:return Ds(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Zl(o)!==Zl(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!ot(o[c],l[c])))return!1;return!0})(n,e);default:return j(52216,{left:n})}}function Pn(n,e){return(n.values||[]).find((t=>ot(t,e)))!==void 0}function Ms(n,e){if(n===e)return 0;const t=Ut(n),s=Ut(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=le(r.integerValue||r.doubleValue),c=le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return tc(n.timestampValue,e.timestampValue);case 4:return tc(Cn(n),Cn(e));case 5:return po(n.stringValue,e.stringValue);case 6:return(function(r,o){const l=Bt(r),c=Bt(o);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const h=J(l[d],c[d]);if(h!==0)return h}return J(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=J(le(r.latitude),le(o.latitude));return l!==0?l:J(le(r.longitude),le(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return sc(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var f,b,I,x;const l=r.fields||{},c=o.fields||{},d=(f=l[Mi])==null?void 0:f.arrayValue,h=(b=c[Mi])==null?void 0:b.arrayValue,p=J(((I=d==null?void 0:d.values)==null?void 0:I.length)||0,((x=h==null?void 0:h.values)==null?void 0:x.length)||0);return p!==0?p:sc(d,h)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===ui.mapValue&&o===ui.mapValue)return 0;if(r===ui.mapValue)return 1;if(o===ui.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),d=o.fields||{},h=Object.keys(d);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const f=po(c[p],h[p]);if(f!==0)return f;const b=Ms(l[c[p]],d[h[p]]);if(b!==0)return b}return J(c.length,h.length)})(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function tc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Nt(n),s=Nt(e),i=J(t.seconds,s.seconds);return i!==0?i:J(t.nanos,s.nanos)}function sc(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Ms(t[i],s[i]);if(r)return r}return J(t.length,s.length)}function Vs(n){return fo(n)}function fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Nt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=fo(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${fo(t.fields[o])}`;return i+"}"})(n.mapValue):j(61005,{value:n})}function bi(n){switch(Ut(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rr(n);return e?16+bi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+bi(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return qt(s.fields,((r,o)=>{i+=r.length+bi(o)})),i})(n.mapValue);default:throw j(13486,{value:n})}}function nc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function go(n){return!!n&&"integerValue"in n}function qo(n){return!!n&&"arrayValue"in n}function ic(n){return!!n&&"nullValue"in n}function rc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yi(n){return!!n&&"mapValue"in n}function sb(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hd])==null?void 0:s.stringValue)===zd}function vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return qt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=vn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vn(n.arrayValue.values[t]);return e}return{...n}}function nb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vn(t)}setAll(e){let t=we.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=l.popLast()}o?s[l.lastSegment()]=vn(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];yi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){qt(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Ve(vn(this.value))}}function Gd(n){const e=[];return qt(n.fields,((t,s)=>{const i=new we([t]);if(yi(s)){const r=Gd(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,s,i,r,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,q.min(),q.min(),q.min(),Ve.empty(),0)}static newFoundDocument(e,t,s,i){return new xe(e,1,t,q.min(),s,i,0)}static newNoDocument(e,t){return new xe(e,2,t,q.min(),q.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,q.min(),q.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vi{constructor(e,t){this.position=e,this.inclusive=t}}function oc(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),t.key):s=Ms(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ac(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Oi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ib(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wd{}class he extends Wd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ob(e,t,s):t==="array-contains"?new cb(e,s):t==="in"?new db(e,s):t==="not-in"?new ub(e,s):t==="array-contains-any"?new hb(e,s):new he(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ab(e,s):new lb(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ms(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(Ms(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Wd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new We(e,t)}matches(e){return Kd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Kd(n){return n.op==="and"}function Jd(n){return rb(n)&&Kd(n)}function rb(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function bo(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Vs(n.value);if(Jd(n))return n.filters.map((e=>bo(e))).join(",");{const e=n.filters.map((t=>bo(t))).join(",");return`${n.op}(${e})`}}function Qd(n,e){return n instanceof he?(function(s,i){return i instanceof he&&s.op===i.op&&s.field.isEqual(i.field)&&ot(s.value,i.value)})(n,e):n instanceof We?(function(s,i){return i instanceof We&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&Qd(o,i.filters[l])),!0):!1})(n,e):void j(19439)}function Yd(n){return n instanceof he?(function(t){return`${t.field.canonicalString()} ${t.op} ${Vs(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"})(n):"Filter"}class ob extends he{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class ab extends he{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lb extends he{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class cb extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qo(t)&&Pn(t.arrayValue,this.value)}}class db extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pn(this.value.arrayValue,t)}}class ub extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pn(this.value.arrayValue,t)}}class hb extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Pn(this.value.arrayValue,s)))}}/**
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
 */class mb{constructor(e,t=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function lc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new mb(n,e,t,s,i,r,o)}function Ho(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>bo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),ir(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Vs(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Vs(s))).join(",")),e.Te=t}return e.Te}function zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ib(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ac(n.startAt,e.startAt)&&ac(n.endAt,e.endAt)}function yo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pb(n,e,t,s,i,r,o,l){return new $n(n,e,t,s,i,r,o,l)}function Go(n){return new $n(n)}function cc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zd(n){return n.collectionGroup!==null}function _n(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new fe(we.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Oi(r,s))})),t.has(we.keyField().canonicalString())||e.Ie.push(new Oi(we.keyField(),s))}return e.Ie}function et(n){const e=z(n);return e.Ee||(e.Ee=fb(e,_n(n))),e.Ee}function fb(n,e){if(n.limitType==="F")return lc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Oi(i.field,r)}));const t=n.endAt?new Vi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Vi(n.startAt.position,n.startAt.inclusive):null;return lc(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function vo(n,e){const t=n.filters.concat([e]);return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _o(n,e,t){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function or(n,e){return zo(et(n),et(e))&&n.limitType===e.limitType}function eu(n){return`${Ho(et(n))}|lt:${n.limitType}`}function vs(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>Yd(i))).join(", ")}]`),ir(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Vs(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Vs(i))).join(",")),`Target(${s})`})(et(n))}; limitType=${n.limitType})`}function ar(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):B.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of _n(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const d=oc(o,l,c);return o.inclusive?d<=0:d<0})(s.startAt,_n(s),i)||s.endAt&&!(function(o,l,c){const d=oc(o,l,c);return o.inclusive?d>=0:d>0})(s.endAt,_n(s),i))})(n,e)}function gb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tu(n){return(e,t)=>{let s=!1;for(const i of _n(n)){const r=bb(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function bb(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(r,o,l){const c=o.data.field(r),d=l.data.field(r);return c!==null&&d!==null?Ms(c,d):j(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qt(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Nd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new re(B.comparator);function pt(){return yb}const su=new re(B.comparator);function fn(...n){let e=su;for(const t of n)e=e.insert(t.key,t);return e}function nu(n){let e=su;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function es(){return wn()}function iu(){return wn()}function wn(){return new cs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vb=new re(B.comparator),_b=new fe(B.comparator);function Q(...n){let e=_b;for(const t of n)e=e.add(t);return e}const wb=new fe(J);function Eb(){return wb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function ru(n){return{integerValue:""+n}}function Tb(n,e){return Qg(e)?ru(e):Wo(n,e)}/**
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
 */class lr{constructor(){this._=void 0}}function Ib(n,e,t){return n instanceof $i?(function(i,r){const o={fields:{[Fd]:{stringValue:Ud},[qd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&jo(r)&&(r=rr(r)),r&&(o.fields[jd]=r),{mapValue:o}})(t,e):n instanceof Ln?au(n,e):n instanceof kn?lu(n,e):(function(i,r){const o=ou(i,r),l=dc(o)+dc(i.Ae);return go(o)&&go(i.Ae)?ru(l):Wo(i.serializer,l)})(n,e)}function Ab(n,e,t){return n instanceof Ln?au(n,e):n instanceof kn?lu(n,e):t}function ou(n,e){return n instanceof Ni?(function(s){return go(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class $i extends lr{}class Ln extends lr{constructor(e){super(),this.elements=e}}function au(n,e){const t=cu(e);for(const s of n.elements)t.some((i=>ot(i,s)))||t.push(s);return{arrayValue:{values:t}}}class kn extends lr{constructor(e){super(),this.elements=e}}function lu(n,e){let t=cu(e);for(const s of n.elements)t=t.filter((i=>!ot(i,s)));return{arrayValue:{values:t}}}class Ni extends lr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function dc(n){return le(n.integerValue||n.doubleValue)}function cu(n){return qo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xb(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof Ln&&i instanceof Ln||s instanceof kn&&i instanceof kn?Ds(s.elements,i.elements,ot):s instanceof Ni&&i instanceof Ni?ot(s.Ae,i.Ae):s instanceof $i&&i instanceof $i})(n.transform,e.transform)}class Sb{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class cr{}function du(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ko(n.key,qe.none()):new Nn(n.key,n.data,qe.none());{const t=n.data,s=Ve.empty();let i=new fe(we.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ht(n.key,s,new Ue(i.toArray()),qe.none())}}function Cb(n,e,t){n instanceof Nn?(function(i,r,o){const l=i.value.clone(),c=hc(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Ht?(function(i,r,o){if(!vi(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=hc(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(uu(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function En(n,e,t,s){return n instanceof Nn?(function(r,o,l,c){if(!vi(r.precondition,o))return l;const d=r.value.clone(),h=mc(r.fieldTransforms,c,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ht?(function(r,o,l,c){if(!vi(r.precondition,o))return l;const d=mc(r.fieldTransforms,c,o),h=o.data;return h.setAll(uu(r)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(r,o,l){return vi(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(n,e,t)}function Rb(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=ou(s.transform,i||null);r!=null&&(t===null&&(t=Ve.empty()),t.set(s.field,r))}return t||null}function uc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ds(s,i,((r,o)=>xb(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nn extends cr{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends cr{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uu(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function hc(n,e,t){const s=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,Ab(o,l,t[i]))}return s}function mc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Ib(r,o,e))}return s}class Ko extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pb extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Cb(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=En(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=En(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=iu();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(i.key)?null:l;const c=du(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Q())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,((t,s)=>uc(t,s)))&&Ds(this.baseMutations,e.baseMutations,((t,s)=>uc(t,s)))}}class Jo{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Z(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return vb})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Jo(e,t,s,i)}}/**
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
 */class kb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Db{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function Mb(n){switch(n){case P.OK:return j(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function hu(n){if(n===void 0)return mt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ue.OK:return P.OK;case ue.CANCELLED:return P.CANCELLED;case ue.UNKNOWN:return P.UNKNOWN;case ue.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ue.INTERNAL:return P.INTERNAL;case ue.UNAVAILABLE:return P.UNAVAILABLE;case ue.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ue.NOT_FOUND:return P.NOT_FOUND;case ue.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ue.ABORTED:return P.ABORTED;case ue.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ue.DATA_LOSS:return P.DATA_LOSS;default:return j(39323,{code:n})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Vb(){return new TextEncoder}/**
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
 */const Ob=new Vt([4294967295,4294967295],0);function pc(n){const e=Vb().encode(n),t=new Sd;return t.update(e),new Uint8Array(t.digest())}function fc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Vt([t,s],0),new Vt([i,r],0)]}class Qo{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new gn(`Invalid padding: ${t}`);if(s<0)throw new gn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new gn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Vt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Vt.fromNumber(s)));return i.compare(Ob)===1&&(i=new Vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=pc(e),[s,i]=fc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Qo(r,i,t);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=pc(e),[s,i]=fc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Bn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new dr(q.min(),i,new re(J),pt(),Q())}}class Bn{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Bn(s,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,s,i){this.be=e,this.removedTargetIds=t,this.key=s,this.De=i}}class mu{constructor(e,t){this.targetId=e,this.Ce=t}}class pu{constructor(e,t,s=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class gc{constructor(){this.ve=0,this.Fe=bc(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),s=Q();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:j(38017,{changeType:r})}})),new Bn(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=bc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $b{constructor(e){this.Ge=e,this.ze=new Map,this.je=pt(),this.Je=hi(),this.He=hi(),this.Ye=new re(J)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:j(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(yo(r))if(s===0){const o=new B(r.path);this.et(t,o,xe.newNoDocument(o,q.min()))}else Z(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,l;try{o=Bt(s).toUint8Array()}catch(c){if(c instanceof Bd)return ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Qo(o,i,r)}catch(c){return ks(c instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&yo(l.target)){const c=new B(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,xe.newNoDocument(c,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let s=Q();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new dr(e,t,this.Ye,this.je,s);return this.je=pt(),this.Je=hi(),this.He=hi(),this.Ye=new re(J),i}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new gc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(J),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new gc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function hi(){return new re(B.comparator)}function bc(){return new re(B.comparator)}const Nb={asc:"ASCENDING",desc:"DESCENDING"},Bb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ub={and:"AND",or:"OR"};class Fb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wo(n,e){return n.useProto3Json||ir(e)?e:{value:e}}function Bi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jb(n,e){return Bi(n,e.toTimestamp())}function tt(n){return Z(!!n,49232),q.fromTimestamp((function(t){const s=Nt(t);return new ie(s.seconds,s.nanos)})(n))}function Yo(n,e){return Eo(n,e).canonicalString()}function Eo(n,e){const t=(function(i){return new te(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function gu(n){const e=te.fromString(n);return Z(wu(e),10190,{key:e.toString()}),e}function To(n,e){return Yo(n.databaseId,e.path)}function eo(n,e){const t=gu(e);if(t.get(1)!==n.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(yu(t))}function bu(n,e){return Yo(n.databaseId,e)}function qb(n){const e=gu(n);return e.length===4?te.emptyPath():yu(e)}function Io(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yu(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yc(n,e,t){return{name:To(n,e),fields:t.value.mapValue.fields}}function Hb(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,h){return d.useProto3Json?(Z(h===void 0||typeof h=="string",58123),Ee.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ee.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(d){const h=d.code===void 0?P.UNKNOWN:hu(d.code);return new M(h,d.message||"")})(o);t=new pu(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=eo(n,s.document.name),r=tt(s.document.updateTime),o=s.document.createTime?tt(s.document.createTime):q.min(),l=new Ve({mapValue:{fields:s.document.fields}}),c=xe.newFoundDocument(i,r,o,l),d=s.targetIds||[],h=s.removedTargetIds||[];t=new _i(d,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=eo(n,s.document),r=s.readTime?tt(s.readTime):q.min(),o=xe.newNoDocument(i,r),l=s.removedTargetIds||[];t=new _i([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=eo(n,s.document),r=s.removedTargetIds||[];t=new _i([],r,i,null)}else{if(!("filter"in e))return j(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Db(i,r),l=s.targetId;t=new mu(l,o)}}return t}function zb(n,e){let t;if(e instanceof Nn)t={update:yc(n,e.key,e.value)};else if(e instanceof Ko)t={delete:To(n,e.key)};else if(e instanceof Ht)t={update:yc(n,e.key,e.data),updateMask:ey(e.fieldMask)};else{if(!(e instanceof Pb))return j(16599,{Vt:e.type});t={verify:To(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof $i)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ln)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof kn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw j(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:jb(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j(27497)})(n,e.precondition)),t}function Gb(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map((t=>(function(i,r){let o=i.updateTime?tt(i.updateTime):tt(r);return o.isEqual(q.min())&&(o=tt(r)),new Sb(o,i.transformResults||[])})(t,e)))):[]}function Wb(n,e){return{documents:[bu(n,e.path)]}}function Kb(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=bu(n,i);const r=(function(d){if(d.length!==0)return _u(We.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((h=>(function(f){return{field:_s(f.field),direction:Yb(f.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=wo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function Jb(n){let e=qb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Z(s===1,65062);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=(function(p){const f=vu(p);return f instanceof We&&Jd(f)?f.getFilters():[f]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((f=>(function(I){return new Oi(ws(I.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(f)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let f;return f=typeof p=="object"?p.value:p,ir(f)?null:f})(t.limit));let c=null;t.startAt&&(c=(function(p){const f=!!p.before,b=p.values||[];return new Vi(b,f)})(t.startAt));let d=null;return t.endAt&&(d=(function(p){const f=!p.before,b=p.values||[];return new Vi(b,f)})(t.endAt)),pb(e,i,o,r,l,"F",c,d)}function Qb(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vu(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ws(t.unaryFilter.field);return he.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ws(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ws(t.unaryFilter.field);return he.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(t.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(n):n.fieldFilter!==void 0?(function(t){return he.create(ws(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((s=>vu(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(t.compositeFilter.op))})(n):j(30097,{filter:n})}function Yb(n){return Nb[n]}function Xb(n){return Bb[n]}function Zb(n){return Ub[n]}function _s(n){return{fieldPath:n.canonicalString()}}function ws(n){return we.fromServerFormat(n.fieldPath)}function _u(n){return n instanceof he?(function(t){if(t.op==="=="){if(rc(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NAN"}};if(ic(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rc(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NOT_NAN"}};if(ic(t.value))return{unaryFilter:{field:_s(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(t.field),op:Xb(t.op),value:t.value}}})(n):n instanceof We?(function(t){const s=t.getFilters().map((i=>_u(i)));return s.length===1?s[0]:{compositeFilter:{op:Zb(t.op),filters:s}}})(n):j(54877,{filter:n})}function ey(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,s,i,r=q.min(),o=q.min(),l=Ee.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.yt=e}}function sy(n){const e=Jb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_o(e,e.limit,"L"):e}/**
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
 */class ny{constructor(){this.Cn=new iy}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve($t.min())}updateCollectionGroup(e,t,s){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new fe(te.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new fe(te.comparator)).toArray()}}/**
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
 */const vc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Eu=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Eu,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Os(0)}static cr(){return new Os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="LruGarbageCollector",ry=1048576;function wc([n,e],[t,s]){const i=J(n,t);return i===0?J(e,s):i}class oy{constructor(e){this.Ir=e,this.buffer=new fe(wc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wc(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ay{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(_c,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qs(t)?O(_c,"Ignoring IndexedDB error during garbage collection: ",t):await js(t)}await this.Vr(3e5)}))}}class ly{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(nr.ce);const s=new oy(t);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(vc)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,i,r,o,l,c,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,t)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(d=Date.now(),ys()<=K.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function cy(n,e){return new ly(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.changes=new cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?L.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&En(s.mutation,i,Ue.empty(),ie.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Q()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Q()){const i=es();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=fn();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Q())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,s,i){let r=pt();const o=wn(),l=(function(){return wn()})();return t.forEach(((c,d)=>{const h=s.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Ht)?r=r.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),En(h.mutation,d,h.mutation.getFieldMask(),ie.now())):o.set(d.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((d,h)=>o.set(d,h))),t.forEach(((d,h)=>l.set(d,new uy(h,o.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=wn();let i=new re(((o,l)=>o-l)),r=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const d=t.get(c);if(d===null)return;let h=s.get(c)||Ue.empty();h=l.applyToLocalView(d,h),s.set(c,h);const p=(i.get(l.batchId)||Q()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,h=c.value,p=iu();h.forEach((f=>{if(!r.has(f)){const b=du(t.get(f),s.get(f));b!==null&&p.set(f,b),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return L.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return(function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):L.resolve(es());let l=Sn,c=r;return o.next((d=>L.forEach(d,((h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next((f=>{c=c.insert(h,f)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,c,d,Q()))).next((h=>({batchId:l,changes:nu(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let i=fn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=fn();return this.indexManager.getCollectionParents(e,r).next((l=>L.forEach(l,(c=>{const d=(function(p,f){return new $n(f,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((h=>{h.forEach(((p,f)=>{o=o.insert(p,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((c,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,xe.newInvalidDocument(h)))}));let l=fn();return o.forEach(((c,d)=>{const h=r.get(c);h!==void 0&&En(h.mutation,d,Ue.empty(),ie.now()),ar(t,d)&&(l=l.insert(c,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:tt(i.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:sy(i.bundledQuery),readTime:tt(i.readTime)}})(t)),L.resolve()}}/**
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
 */class py{constructor(){this.overlays=new re(B.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return L.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.St(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),L.resolve()}getOverlaysForCollection(e,t,s){const i=es(),r=t.length+1,o=new B(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new re(((d,h)=>d-h));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let h=r.get(d.largestBatchId);h===null&&(h=es(),r=r.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const l=es(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,h)=>l.set(d,h))),!(l.size()>=i)););return L.resolve(l)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new kb(t,s));let r=this.qr.get(t);r===void 0&&(r=Q(),this.qr.set(t,r)),this.qr.set(t,r.add(s.key))}}/**
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
 */class fy{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.Qr=new fe(ye.$r),this.Ur=new fe(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new ye(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new B(new te([])),s=new ye(t,e),i=new ye(t,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new te([])),s=new ye(t,e),i=new ye(t,e+1);let r=Q();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new ye(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||J(e.Yr,t.Yr)}static Kr(e,t){return J(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ye.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Lb(r,t,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ye(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ei(s),r=i<0?0:i;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Fo:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fe(J);return t.forEach((i=>{const r=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),L.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;B.isDocumentKey(r)||(r=r.child(""));const o=new ye(new B(r),0);let l=new fe(J);return this.Zr.forEachWhile((c=>{const d=c.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Yr)),!0)}),o),L.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return L.forEach(t.mutations,(i=>{const r=new ye(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new ye(t,0),i=this.Zr.firstAfterOrEqual(s);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.ri=e,this.docs=(function(){return new re(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return L.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let s=pt();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():xe.newInvalidDocument(i))})),L.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=pt();const o=t.path,l=new B(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:h}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Gg(zg(h),s)<=0||(i.has(h.key)||ar(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,s,i){j(9500)}ii(e,t){return L.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yy(this)}getSize(e){return L.resolve(this.size)}}class yy extends dy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.persistence=e,this.si=new cs((t=>Ho(t)),zo),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new Xo,this.targetCount=0,this.ai=Os.ur()}forEachTarget(e,t){return this.si.forEach(((s,i)=>t(i))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Os(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),L.waitFor(r).next((()=>i))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return L.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),L.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return L.resolve(s)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.ui={},this.overlays={},this.ci=new nr(0),this.li=!1,this.li=!0,this.hi=new fy,this.referenceDelegate=e(this),this.Pi=new vy(this),this.indexManager=new ny,this.remoteDocumentCache=(function(i){return new by(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new ty(t),this.Ii=new my(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new py,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new gy(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const i=new _y(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return L.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class _y extends Kg{constructor(e){super(),this.currentSequenceNumber=e}}class Zo{constructor(e){this.persistence=e,this.Ri=new Xo,this.Vi=null}static mi(e){return new Zo(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),L.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(s=>{const i=B.fromPath(s);return this.gi(e,i).next((r=>{r||t.removeEntry(i,q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ui{constructor(e,t){this.persistence=e,this.pi=new cs((s=>Yg(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=cy(this,t)}static mi(e,t){return new Ui(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return L.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?L.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((l=>{l||(s++,r.removeEntry(o,q.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),L.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bi(e.data.value)),t}br(e,t,s){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return L.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=i}static As(e,t){let s=Q(),i=Q();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ea(e,t.fromCache,s,i)}}/**
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
 */class wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ey{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return mf()?8:Jg(Se())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new wy;return this.Ss(e,t,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,t,o,l.size)}))})).next((()=>r.result))}bs(e,t,s,i){return s.documentReadCount<this.fs?(ys()<=K.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",vs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(ys()<=K.DEBUG&&O("QueryEngine","Query:",vs(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(ys()<=K.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",vs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):L.resolve())}ys(e,t){if(cc(t))return L.resolve(null);let s=et(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=_o(t,null,"F"),s=et(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Q(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const d=this.Ds(t,l);return this.Cs(t,d,o,c.readTime)?this.ys(e,_o(t,null,"F")):this.vs(e,d,t,c)}))))})))))}ws(e,t,s,i){return cc(t)||i.isEqual(q.min())?L.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,s,i)?L.resolve(null):(ys()<=K.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(t)),this.vs(e,o,t,Hg(i,Sn)).next((l=>l)))}))}Ds(e,t){let s=new fe(tu(e));return t.forEach(((i,r)=>{ar(e,r)&&(s=s.add(r))})),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return ys()<=K.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",vs(t)),this.ps.getDocumentsMatchingQuery(e,t,$t.min(),s)}vs(e,t,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="LocalStore",Ty=3e8;class Iy{constructor(e,t,s,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new re(J),this.xs=new cs((r=>Ho(r)),zo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hy(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Ay(n,e,t,s){return new Iy(n,e,t,s)}async function Iu(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Q();for(const d of i){o.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}for(const d of r){l.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next((d=>({Ls:d,removedBatchIds:o,addedBatchIds:l})))}))}))}function xy(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,d,h){const p=d.batch,f=p.keys();let b=L.resolve();return f.forEach((I=>{b=b.next((()=>h.getEntry(c,I))).next((x=>{const C=d.docVersions.get(I);Z(C!==null,48541),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),h.addEntry(x)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(t,s,e,r).next((()=>r.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,i)))}))}function Au(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Sy(n,e){const t=z(n),s=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach(((h,p)=>{const f=i.get(p);if(!f)return;l.push(t.Pi.removeMatchingKeys(r,h.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(r,h.addedDocuments,p))));let b=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Ee.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,s)),i=i.insert(p,b),(function(x,C,k){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Ty?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(f,b,h)&&l.push(t.Pi.updateTargetData(r,b))}));let c=pt(),d=Q();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))})),l.push(Cy(r,o,e.documentUpdates).next((h=>{c=h.ks,d=h.qs}))),!s.isEqual(q.min())){const h=t.Pi.getLastRemoteSnapshotVersion(r).next((p=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(h)}return L.waitFor(l).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,c,d))).next((()=>c))})).then((r=>(t.Ms=i,r)))}function Cy(n,e,t){let s=Q(),i=Q();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=pt();return t.forEach(((l,c)=>{const d=r.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):O(ta,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function Ry(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Fo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Py(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.Pi.getTargetData(s,e).next((r=>r?(i=r,L.resolve(i)):t.Pi.allocateTargetId(s).next((o=>(i=new Lt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Ao(n,e,t){const s=z(n),i=s.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!qs(o))throw o;O(ta,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function Ec(n,e,t){const s=z(n);let i=q.min(),r=Q();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,d,h){const p=z(c),f=p.xs.get(h);return f!==void 0?L.resolve(p.Ms.get(f)):p.Pi.getTargetData(d,h)})(s,o,et(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?r:Q()))).next((l=>(Ly(s,gb(e),l),{documents:l,Qs:r})))))}function Ly(n,e,t){let s=n.Os.get(e)||q.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Os.set(e,s)}class Tc{constructor(){this.activeTargetIds=Eb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ky{constructor(){this.Mo=new Tc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Tc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dy{Oo(e){}shutdown(){}}/**
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
 */const Ic="ConnectivityMonitor";class Ac{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Ic,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Ic,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mi=null;function xo(){return mi===null?mi=(function(){return 268435456+Math.round(2147483648*Math.random())})():mi++,"0x"+mi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="RestConnection",My={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Di?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,t,s,i,r){const o=xo(),l=this.zo(e,t.toUriEncodedString());O(to,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:d}=new URL(l),h=Bs(d);return this.Jo(e,l,c,s,h).then((p=>(O(to,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ks(to,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,t,s,i,r,o){return this.Go(e,t,s,i,r)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const s=My[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class $y extends Vy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const o=xo();return new Promise(((l,c)=>{const d=new Cd;d.setWithCredentials(!0),d.listenOnce(Rd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case gi.NO_ERROR:const p=d.getResponseJson();O(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case gi.TIMEOUT:O(Ie,`RPC '${e}' ${o} timed out`),c(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case gi.HTTP_ERROR:const f=d.getStatus();if(O(Ie,`RPC '${e}' ${o} failed with status:`,f,"response text:",d.getResponseText()),f>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const I=b==null?void 0:b.error;if(I&&I.status&&I.message){const x=(function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(N)>=0?N:P.UNKNOWN})(I.status);c(new M(x,I.message))}else c(new M(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new M(P.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(Ie,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(i);O(Ie,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",h,s,15)}))}T_(e,t,s){const i=xo(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kd(),l=Ld(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=r.join("");O(Ie,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=o.createWebChannel(h,c);this.I_(p);let f=!1,b=!1;const I=new Oy({Yo:C=>{b?O(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(f||(O(Ie,`Opening RPC '${e}' stream ${i} transport.`),p.open(),f=!0),O(Ie,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Zo:()=>p.close()}),x=(C,k,N)=>{C.listen(k,(G=>{try{N(G)}catch(se){setTimeout((()=>{throw se}),0)}}))};return x(p,pn.EventType.OPEN,(()=>{b||(O(Ie,`RPC '${e}' stream ${i} transport opened.`),I.o_())})),x(p,pn.EventType.CLOSE,(()=>{b||(b=!0,O(Ie,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(p))})),x(p,pn.EventType.ERROR,(C=>{b||(b=!0,ks(Ie,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),I.a_(new M(P.UNAVAILABLE,"The operation could not be completed")))})),x(p,pn.EventType.MESSAGE,(C=>{var k;if(!b){const N=C.data[0];Z(!!N,16349);const G=N,se=(G==null?void 0:G.error)||((k=G[0])==null?void 0:k.error);if(se){O(Ie,`RPC '${e}' stream ${i} received error:`,se);const oe=se.status;let X=(function(_){const T=ue[_];if(T!==void 0)return hu(T)})(oe),w=se.message;X===void 0&&(X=P.INTERNAL,w="Unknown error status: "+oe+" with message "+se.message),b=!0,I.a_(new M(X,w)),p.close()}else O(Ie,`RPC '${e}' stream ${i} received:`,N),I.u_(N)}})),x(l,Pd.STAT_EVENT,(C=>{C.stat===mo.PROXY?O(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===mo.NOPROXY&&O(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{I.__()}),0),I}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n){return new Fb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="PersistentStream";class Su{constructor(e,t,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new M(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(xc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(O(xc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ny extends Su{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Hb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?tt(o.readTime):q.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Io(this.serializer),t.addTarget=(function(r,o){let l;const c=o.target;if(l=yo(c)?{documents:Wb(r,c)}:{query:Kb(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fu(r,o.resumeToken);const d=wo(r,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(q.min())>0){l.readTime=Bi(r,o.snapshotVersion.toTimestamp());const d=wo(r,o.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const s=Qb(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Io(this.serializer),t.removeTarget=e,this.q_(t)}}class By extends Su{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gb(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Io(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>zb(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{}class Fy extends Uy{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Eo(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(P.UNKNOWN,r.toString())}))}Ho(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Eo(t,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class jy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mt(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="RemoteStore";class qy{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{ds(this)&&(O(os,"Restarting streams for network reachability change."),await(async function(c){const d=z(c);d.Ea.add(4),await Un(d),d.Ra.set("Unknown"),d.Ea.delete(4),await hr(d)})(this))}))})),this.Ra=new jy(s,i)}}async function hr(n){if(ds(n))for(const e of n.da)await e(!0)}async function Un(n){for(const e of n.da)await e(!1)}function Cu(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ra(t)?ia(t):Hs(t).O_()&&na(t,e))}function sa(n,e){const t=z(n),s=Hs(t);t.Ia.delete(e),s.O_()&&Ru(t,e),t.Ia.size===0&&(s.O_()?s.L_():ds(t)&&t.Ra.set("Unknown"))}function na(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hs(n).Y_(e)}function Ru(n,e){n.Va.Ue(e),Hs(n).Z_(e)}function ia(n){n.Va=new $b({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Hs(n).start(),n.Ra.ua()}function ra(n){return ds(n)&&!Hs(n).x_()&&n.Ia.size>0}function ds(n){return z(n).Ea.size===0}function Pu(n){n.Va=void 0}async function Hy(n){n.Ra.set("Online")}async function zy(n){n.Ia.forEach(((e,t)=>{na(n,e)}))}async function Gy(n,e){Pu(n),ra(n)?(n.Ra.ha(e),ia(n)):n.Ra.set("Unknown")}async function Wy(n,e,t){if(n.Ra.set("Online"),e instanceof pu&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(n,e)}catch(s){O(os,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fi(n,s)}else if(e instanceof _i?n.Va.Ze(e):e instanceof mu?n.Va.st(e):n.Va.tt(e),!t.isEqual(q.min()))try{const s=await Au(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.Ia.get(d);h&&r.Ia.set(d,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,d)=>{const h=r.Ia.get(c);if(!h)return;r.Ia.set(c,h.withResumeToken(Ee.EMPTY_BYTE_STRING,h.snapshotVersion)),Ru(r,c);const p=new Lt(h.target,c,d,h.sequenceNumber);na(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){O(os,"Failed to raise snapshot:",s),await Fi(n,s)}}async function Fi(n,e,t){if(!qs(e))throw e;n.Ea.add(1),await Un(n),n.Ra.set("Offline"),t||(t=()=>Au(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(os,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await hr(n)}))}function Lu(n,e){return e().catch((t=>Fi(n,t,e)))}async function mr(n){const e=z(n),t=Ft(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fo;for(;Ky(e);)try{const i=await Ry(e.localStore,s);if(i===null){e.Ta.length===0&&t.L_();break}s=i.batchId,Jy(e,i)}catch(i){await Fi(e,i)}ku(e)&&Du(e)}function Ky(n){return ds(n)&&n.Ta.length<10}function Jy(n,e){n.Ta.push(e);const t=Ft(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ku(n){return ds(n)&&!Ft(n).x_()&&n.Ta.length>0}function Du(n){Ft(n).start()}async function Qy(n){Ft(n).ra()}async function Yy(n){const e=Ft(n);for(const t of n.Ta)e.ea(t.mutations)}async function Xy(n,e,t){const s=n.Ta.shift(),i=Jo.from(s,e,t);await Lu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await mr(n)}async function Zy(n,e){e&&Ft(n).X_&&await(async function(s,i){if((function(o){return Mb(o)&&o!==P.ABORTED})(i.code)){const r=s.Ta.shift();Ft(s).B_(),await Lu(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await mr(s)}})(n,e),ku(n)&&Du(n)}async function Sc(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(os,"RemoteStore received new credentials");const s=ds(t);t.Ea.add(3),await Un(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await hr(t)}async function ev(n,e){const t=z(n);e?(t.Ea.delete(2),await hr(t)):e||(t.Ea.add(2),await Un(t),t.Ra.set("Unknown"))}function Hs(n){return n.ma||(n.ma=(function(t,s,i){const r=z(t);return r.sa(),new Ny(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Hy.bind(null,n),t_:zy.bind(null,n),r_:Gy.bind(null,n),H_:Wy.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ra(n)?ia(n):n.Ra.set("Unknown")):(await n.ma.stop(),Pu(n))}))),n.ma}function Ft(n){return n.fa||(n.fa=(function(t,s,i){const r=z(t);return r.sa(),new By(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Qy.bind(null,n),r_:Zy.bind(null,n),ta:Yy.bind(null,n),na:Xy.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await mr(n)):(await n.fa.stop(),n.Ta.length>0&&(O(os,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,l=new oa(e,t,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(n,e){if(mt("AsyncQueue",`${e}: ${n}`),qs(n))return new M(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static emptySet(e){return new Ts(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=fn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ts;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.ga=new re(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class $s{constructor(e,t,s,i,r,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new $s(e,t,Ts.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&or(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class sv{constructor(){this.queries=Rc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=z(t),r=i.queries;i.queries=Rc(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new M(P.ABORTED,"Firestore shutting down"))}}function Rc(){return new cs((n=>eu(n)),or)}async function Mu(n,e){const t=z(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new tv,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=aa(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&la(t)}async function Vu(n,e){const t=z(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function nv(n,e){const t=z(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&la(t)}function iv(n,e,t){const s=z(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function la(n){n.Ca.forEach((e=>{e.next()}))}var So,Pc;(Pc=So||(So={})).Ma="default",Pc.Cache="cache";class Ou{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==So.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.key=e}}class Nu{constructor(e){this.key=e}}class rv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=tu(e),this.tu=new Ts(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Cc,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((h,p)=>{const f=i.get(h),b=ar(this.query,p)?p:null,I=!!f&&this.mutatedKeys.has(f.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;f&&b?f.data.isEqual(b.data)?I!==x&&(s.track({type:3,doc:b}),C=!0):this.su(f,b)||(s.track({type:2,doc:b}),C=!0,(c&&this.eu(b,c)>0||d&&this.eu(b,d)<0)&&(l=!0)):!f&&b?(s.track({type:0,doc:b}),C=!0):f&&!b&&(s.track({type:1,doc:f}),C=!0,(c||d)&&(l=!0)),C&&(b?(o=o.add(b),r=x?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,p)=>(function(b,I){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:C})}};return x(b)-x(I)})(h.type,p.type)||this.eu(h.doc,p.doc))),this.ou(s),i=i??!1;const l=t&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,d=c!==this.Za;return this.Za=c,o.length!==0||d?{snapshot:new $s(this.query,e.tu,r,o,e.mutatedKeys,c===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Q(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Nu(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new $u(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $s.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ca="SyncEngine";class ov{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class av{constructor(e){this.key=e,this.hu=!1}}class lv{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new cs((l=>eu(l)),or),this.Iu=new Map,this.Eu=new Set,this.du=new re(B.comparator),this.Au=new Map,this.Ru=new Xo,this.Vu={},this.mu=new Map,this.fu=Os.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cv(n,e,t=!0){const s=Hu(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Bu(s,e,t,!0),i}async function dv(n,e){const t=Hu(n);await Bu(t,e,!0,!1)}async function Bu(n,e,t,s){const i=await Py(n.localStore,et(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let l;return s&&(l=await uv(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Cu(n.remoteStore,i),l}async function uv(n,e,t,s,i){n.pu=(p,f,b)=>(async function(x,C,k,N){let G=C.view.ru(k);G.Cs&&(G=await Ec(x.localStore,C.query,!1).then((({documents:w})=>C.view.ru(w,G))));const se=N&&N.targetChanges.get(C.targetId),oe=N&&N.targetMismatches.get(C.targetId)!=null,X=C.view.applyChanges(G,x.isPrimaryClient,se,oe);return kc(x,C.targetId,X.au),X.snapshot})(n,p,f,b);const r=await Ec(n.localStore,e,!0),o=new rv(e,r.Qs),l=o.ru(r.documents),c=Bn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(l,n.isPrimaryClient,c);kc(n,t,d.au);const h=new ov(e,t,o);return n.Tu.set(e,h),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function hv(n,e,t){const s=z(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!or(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Ao(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&sa(s.remoteStore,i.targetId),Co(s,i.targetId)})).catch(js)):(Co(s,i.targetId),await Ao(s.localStore,i.targetId,!0))}async function mv(n,e){const t=z(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sa(t.remoteStore,s.targetId))}async function pv(n,e,t){const s=wv(n);try{const i=await(function(o,l){const c=z(o),d=ie.now(),h=l.reduce(((b,I)=>b.add(I.key)),Q());let p,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let I=pt(),x=Q();return c.Ns.getEntries(b,h).next((C=>{I=C,I.forEach(((k,N)=>{N.isValidDocument()||(x=x.add(k))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,I))).next((C=>{p=C;const k=[];for(const N of l){const G=Rb(N,p.get(N.key).overlayedDocument);G!=null&&k.push(new Ht(N.key,G,Gd(G.value.mapValue),qe.exists(!0)))}return c.mutationQueue.addMutationBatch(b,d,k,l)})).next((C=>{f=C;const k=C.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(b,C.batchId,k)}))})).then((()=>({batchId:f.batchId,changes:nu(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let d=o.Vu[o.currentUser.toKey()];d||(d=new re(J)),d=d.insert(l,c),o.Vu[o.currentUser.toKey()]=d})(s,i.batchId,t),await Fn(s,i.changes),await mr(s.remoteStore)}catch(i){const r=aa(i,"Failed to persist write");t.reject(r)}}async function Uu(n,e){const t=z(n);try{const s=await Sy(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Z(o.hu,14607):i.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))})),await Fn(t,s,e)}catch(s){await js(s)}}function Lc(n,e,t){const s=z(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=z(o);c.onlineState=l;let d=!1;c.queries.forEach(((h,p)=>{for(const f of p.Sa)f.va(l)&&(d=!0)})),d&&la(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fv(n,e,t){const s=z(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new re(B.comparator);o=o.insert(r,xe.newNoDocument(r,q.min()));const l=Q().add(r),c=new dr(q.min(),new Map,new re(J),o,l);await Uu(s,c),s.du=s.du.remove(r),s.Au.delete(e),da(s)}else await Ao(s.localStore,e,!1).then((()=>Co(s,e,t))).catch(js)}async function gv(n,e){const t=z(n),s=e.batch.batchId;try{const i=await xy(t.localStore,e);ju(t,s,null),Fu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fn(t,i)}catch(i){await js(i)}}async function bv(n,e,t){const s=z(n);try{const i=await(function(o,l){const c=z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let h;return c.mutationQueue.lookupMutationBatch(d,l).next((p=>(Z(p!==null,37113),h=p.keys(),c.mutationQueue.removeMutationBatch(d,p)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h))).next((()=>c.localDocuments.getDocuments(d,h)))}))})(s.localStore,e);ju(s,e,t),Fu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fn(s,i)}catch(i){await js(i)}}function Fu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function ju(n,e,t){const s=z(n);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||qu(n,s)}))}function qu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(sa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),da(n))}function kc(n,e,t){for(const s of t)s instanceof $u?(n.Ru.addReference(s.key,e),yv(n,s)):s instanceof Nu?(O(ca,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||qu(n,s.key)):j(19791,{wu:s})}function yv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(O(ca,"New document in limbo: "+t),n.Eu.add(s),da(n))}function da(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(te.fromString(e)),s=n.fu.next();n.Au.set(s,new av(t)),n.du=n.du.insert(t,s),Cu(n.remoteStore,new Lt(et(Go(t.path)),s,"TargetPurposeLimboResolution",nr.ce))}}async function Fn(n,e,t){const s=z(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,t).then((d=>{var h;if((d||t)&&s.isPrimaryClient){const p=d?!d.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){i.push(d);const p=ea.As(c.targetId,d);r.push(p)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,d){const h=z(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(d,(f=>L.forEach(f.Es,(b=>h.persistence.referenceDelegate.addReference(p,f.targetId,b))).next((()=>L.forEach(f.ds,(b=>h.persistence.referenceDelegate.removeReference(p,f.targetId,b)))))))))}catch(p){if(!qs(p))throw p;O(ta,"Failed to update sequence numbers: "+p)}for(const p of d){const f=p.targetId;if(!p.fromCache){const b=h.Ms.get(f),I=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(I);h.Ms=h.Ms.insert(f,x)}}})(s.localStore,r))}async function vv(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){O(ca,"User change. New user:",e.toKey());const s=await Iu(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new M(P.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fn(t,s.Ls)}}function _v(n,e){const t=z(n),s=t.Au.get(e);if(s&&s.hu)return Q().add(s.key);{let i=Q();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Hu(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_v.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fv.bind(null,e),e.Pu.H_=nv.bind(null,e.eventManager),e.Pu.yu=iv.bind(null,e.eventManager),e}function wv(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,e),e}class ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ur(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ay(this.persistence,new Ey,e.initialUser,this.serializer)}Cu(e){return new Tu(Zo.mi,this.serializer)}Du(e){return new ky}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ji.provider={build:()=>new ji};class Ev extends ji{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Ui,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ay(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Tu((s=>Ui.mi(s,t)),this.serializer)}}class Ro{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vv.bind(null,this.syncEngine),await ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sv})()}createDatastore(e){const t=ur(e.databaseInfo.databaseId),s=(function(r){return new $y(r)})(e.databaseInfo);return(function(r,o,l,c){return new Fy(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,l){return new qy(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Lc(this.syncEngine,t,0)),(function(){return Ac.v()?new Ac:new Dy})())}createSyncEngine(e,t){return(function(i,r,o,l,c,d,h){const p=new lv(i,r,o,l,c,d);return h&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=z(i);O(os,"RemoteStore shutting down."),r.Ea.add(5),await Un(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ro.provider={build:()=>new Ro};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="FirestoreClient";class Tv{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=Uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{O(jt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(O(jt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=aa(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function no(n,e){n.asyncQueue.verifyOperationInProgress(),O(jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Iu(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Dc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iv(n);O(jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Sc(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>Sc(e.remoteStore,i))),n._onlineComponents=e}async function Iv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(jt,"Using user provided OfflineComponentProvider");try{await no(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ks("Error using user provided cache. Falling back to memory cache: "+t),await no(n,new ji)}}else O(jt,"Using default OfflineComponentProvider"),await no(n,new Ev(void 0));return n._offlineComponents}async function Gu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(jt,"Using user provided OnlineComponentProvider"),await Dc(n,n._uninitializedComponentsProvider._online)):(O(jt,"Using default OnlineComponentProvider"),await Dc(n,new Ro))),n._onlineComponents}function Av(n){return Gu(n).then((e=>e.syncEngine))}async function Wu(n){const e=await Gu(n),t=e.eventManager;return t.onListen=cv.bind(null,e.syncEngine),t.onUnlisten=hv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mv.bind(null,e.syncEngine),t}function xv(n,e,t={}){const s=new dt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new zu({next:f=>{h.Nu(),o.enqueueAndForget((()=>Vu(r,p)));const b=f.docs.has(l);!b&&f.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&f.fromCache&&c&&c.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(f)},error:f=>d.reject(f)}),p=new Ou(Go(l.path),h,{includeMetadataChanges:!0,qa:!0});return Mu(r,p)})(await Wu(n),n.asyncQueue,e,t,s))),s.promise}function Sv(n,e,t={}){const s=new dt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new zu({next:f=>{h.Nu(),o.enqueueAndForget((()=>Vu(r,p))),f.fromCache&&c.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(f)},error:f=>d.reject(f)}),p=new Ou(l,h,{includeMetadataChanges:!0,qa:!0});return Mu(r,p)})(await Wu(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Ku(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firestore.googleapis.com",Vc=!0;class Oc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ju,this.ssl=Vc}else this.host=e.host,this.ssl=e.ssl??Vc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Eu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ry)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ku(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Dg;switch(s.type){case"firstParty":return new $g(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Mc.get(t);s&&(O("ComponentProvider","Removing Datastore"),Mc.delete(t),s.terminate())})(this),Promise.resolve()}}function Cv(n,e,t,s={}){var d;n=Ge(n,pr);const i=Bs(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(vd(`https://${l}`),_d("Firestore",!0)),r.host!==Ju&&r.host!==l&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!ns(c,o)&&(n._setSettings(c),s.mockUserToken)){let h,p;if(typeof s.mockUserToken=="string")h=s.mockUserToken,p=Ae.MOCK_USER;else{h=nf(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ae(f)}n._authCredentials=new Mg(new Md(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class ce{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(On(t,ce._jsonSchema))return new ce(e,s||null,new B(te.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:me("string",ce._jsonSchemaVersion),referencePath:me("string")};class Ot extends zs{constructor(e,t,s){super(e,t,Go(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new B(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function qi(n,e,...t){if(n=de(n),Vd("collection","path",e),n instanceof pr){const s=te.fromString(e,...t);return Jl(s),new Ot(n,null,s)}{if(!(n instanceof ce||n instanceof Ot))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(te.fromString(e,...t));return Jl(s),new Ot(n.firestore,null,s)}}function Me(n,e,...t){if(n=de(n),arguments.length===1&&(e=Uo.newId()),Vd("doc","path",e),n instanceof pr){const s=te.fromString(e,...t);return Kl(s),new ce(n,null,new B(s))}{if(!(n instanceof ce||n instanceof Ot))throw new M(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(te.fromString(e,...t));return Kl(s),new ce(n.firestore,n instanceof Ot?n.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="AsyncQueue";class Nc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xu(this,"async_queue_retry"),this._c=()=>{const s=so();s&&O($c,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=so();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=so();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new dt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;O($c,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,mt("INTERNAL UNHANDLED ERROR: ",Bc(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=oa.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:Bc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class us extends pr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Nc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nc(e),this._firestoreClient=void 0,await e}}}function Rv(n,e){const t=typeof n=="object"?n:Id(),s=typeof n=="string"?n:Di,i=No(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=tf("firestore");r&&Cv(i,...r)}return i}function ua(n){if(n._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pv(n),n._firestoreClient}function Pv(n){var s,i,r;const e=n._freezeSettings(),t=(function(l,c,d,h){return new eb(l,c,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ku(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Tv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Ee.fromBase64String(e))}catch(t){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(On(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:me("string",je._jsonSchemaVersion),bytes:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:st._jsonSchemaVersion}}static fromJSON(e){if(On(e,st._jsonSchema))return new st(e.latitude,e.longitude)}}st._jsonSchemaVersion="firestore/geoPoint/1.0",st._jsonSchema={type:me("string",st._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class nt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(On(e,nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nt(e.vectorValues);throw new M(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:me("string",nt._jsonSchemaVersion),vectorValues:me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/^__.*__$/;class kv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nn(e,this.data,t,this.fieldTransforms)}}class Qu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class ma{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ma({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Hi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Yu(this.Ac)&&Lv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Dv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ur(e)}Cc(e,t,s,i=!1){return new ma({Ac:e,methodName:t,Dc:s,path:we.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gr(n){const e=n._freezeSettings(),t=ur(n._databaseId);return new Dv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xu(n,e,t,s,i,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,i);pa("Data must be an object, but it was:",o,s);const l=Zu(s,o);let c,d;if(r.merge)c=new Ue(o.fieldMask),d=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const p of r.mergeFields){const f=Po(e,p,t);if(!o.contains(f))throw new M(P.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);th(h,f)||h.push(f)}c=new Ue(h),d=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,d=o.fieldTransforms;return new kv(new Ve(l),c,d)}class br extends ha{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof br}}function Mv(n,e,t,s){const i=n.Cc(1,e,t);pa("Data must be an object, but it was:",i,s);const r=[],o=Ve.empty();qt(s,((c,d)=>{const h=fa(e,c,t);d=de(d);const p=i.yc(h);if(d instanceof br)r.push(h);else{const f=jn(d,p);f!=null&&(r.push(h),o.set(h,f))}}));const l=new Ue(r);return new Qu(o,l,i.fieldTransforms)}function Vv(n,e,t,s,i,r){const o=n.Cc(1,e,t),l=[Po(e,s,t)],c=[i];if(r.length%2!=0)throw new M(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)l.push(Po(e,r[f])),c.push(r[f+1]);const d=[],h=Ve.empty();for(let f=l.length-1;f>=0;--f)if(!th(d,l[f])){const b=l[f];let I=c[f];I=de(I);const x=o.yc(b);if(I instanceof br)d.push(b);else{const C=jn(I,x);C!=null&&(d.push(b),h.set(b,C))}}const p=new Ue(d);return new Qu(h,p,o.fieldTransforms)}function Ov(n,e,t,s=!1){return jn(t,n.Cc(s?4:3,e))}function jn(n,e){if(eh(n=de(n)))return pa("Unsupported field value:",e,n),Zu(n,e);if(n instanceof ha)return(function(s,i){if(!Yu(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=jn(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,e)}return(function(s,i){if((s=de(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Tb(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ie.fromDate(s);return{timestampValue:Bi(i.serializer,r)}}if(s instanceof ie){const r=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bi(i.serializer,r)}}if(s instanceof st)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof je)return{bytesValue:fu(i.serializer,s._byteString)};if(s instanceof ce){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yo(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof nt)return(function(o,l){return{mapValue:{fields:{[Hd]:{stringValue:zd},[Mi]:{arrayValue:{values:o.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Wo(l.serializer,d)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${sr(s)}`)})(n,e)}function Zu(n,e){const t={};return Nd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qt(n,((s,i)=>{const r=jn(i,e.mc(s));r!=null&&(t[s]=r)})),{mapValue:{fields:t}}}function eh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof st||n instanceof je||n instanceof ce||n instanceof ha||n instanceof nt)}function pa(n,e,t){if(!eh(t)||!Od(t)){const s=sr(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Po(n,e,t){if((e=de(e))instanceof fr)return e._internalPath;if(typeof e=="string")return fa(n,e);throw Hi("Field path arguments must be of type string or ",n,!1,void 0,t)}const $v=new RegExp("[~\\*/\\[\\]]");function fa(n,e,t){if(e.search($v)>=0)throw Hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fr(...e.split("."))._internalPath}catch{throw Hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hi(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new M(P.INVALID_ARGUMENT,l+n+c)}function th(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nv extends sh{data(){return super.data()}}function ga(n,e){return typeof e=="string"?fa(n,e):e instanceof fr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ba{}class Uv extends ba{}function Lo(n,e,...t){let s=[];e instanceof ba&&s.push(e),s=s.concat(t),(function(r){const o=r.filter((c=>c instanceof ya)).length,l=r.filter((c=>c instanceof yr)).length;if(o>1||o>0&&l>0)throw new M(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const i of s)n=i._apply(n);return n}class yr extends Uv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new yr(e,t,s)}_apply(e){const t=this._parse(e);return nh(e._query,t),new zs(e.firestore,e.converter,vo(e._query,t))}_parse(e){const t=gr(e.firestore);return(function(r,o,l,c,d,h,p){let f;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new M(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Fc(p,h);const I=[];for(const x of p)I.push(Uc(c,r,x));f={arrayValue:{values:I}}}else f=Uc(c,r,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Fc(p,h),f=Ov(l,o,p,h==="in"||h==="not-in");return he.create(d,h,f)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wi(n,e,t){const s=e,i=ga("where",n);return yr._create(i,s,t)}class ya extends ba{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ya(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let o=i;const l=r.getFlattenedFilters();for(const c of l)nh(o,c),o=vo(o,c)})(e._query,t),new zs(e.firestore,e.converter,vo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uc(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new M(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zd(e)&&t.indexOf("/")!==-1)throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(te.fromString(t));if(!B.isDocumentKey(s))throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return nc(n,new B(s))}if(t instanceof ce)return nc(n,t._key);throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sr(t)}.`)}function Fc(n,e){if(!Array.isArray(n)||n.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nh(n,e){const t=(function(i,r){for(const o of i)for(const l of o.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fv{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return qt(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[Mi].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>le(o.doubleValue)));return new nt(t)}convertGeoPoint(e){return new st(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=rr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Cn(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=te.fromString(e);Z(wu(s),9688,{name:e});const i=new Rn(s.get(1),s.get(3)),r=new B(s.popFirst(5));return i.isEqual(t)||mt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends sh{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ga("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:me("string",ts._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Ei extends ts{data(e={}){return super.data(e)}}class Is{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new bn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ei(this._firestore,this._userDataWriter,s.key,s,new bn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new Ei(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new Ei(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:jv(l.type),doc:c,oldIndex:d,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){n=Ge(n,ce);const e=Ge(n.firestore,us);return xv(ua(e),n._key).then((t=>Hv(e,n,t)))}Is._jsonSchemaVersion="firestore/querySnapshot/1.0",Is._jsonSchema={type:me("string",Is._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};class rh extends Fv{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function ko(n){n=Ge(n,zs);const e=Ge(n.firestore,us),t=ua(e),s=new rh(e);return Bv(n._query),Sv(t,n._query).then((i=>new Is(e,s,n,i)))}function zi(n,e,t){n=Ge(n,ce);const s=Ge(n.firestore,us),i=ih(n.converter,e);return vr(s,[Xu(gr(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,qe.none())])}function jc(n,e,t,...s){n=Ge(n,ce);const i=Ge(n.firestore,us),r=gr(i);let o;return o=typeof(e=de(e))=="string"||e instanceof fr?Vv(r,"updateDoc",n._key,e,t,s):Mv(r,"updateDoc",n._key,e),vr(i,[o.toMutation(n._key,qe.exists(!0))])}function Ii(n){return vr(Ge(n.firestore,us),[new Ko(n._key,qe.none())])}function qv(n,e){const t=Ge(n.firestore,us),s=Me(n),i=ih(n.converter,e);return vr(t,[Xu(gr(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,qe.exists(!1))]).then((()=>s))}function vr(n,e){return(function(s,i){const r=new dt;return s.asyncQueue.enqueueAndForget((async()=>pv(await Av(s),i,r))),r.promise})(ua(n),e)}function Hv(n,e,t){const s=t.docs.get(e._key),i=new rh(n);return new ts(n,i,e._key,s,new bn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Fs=i})(Us),Ls(new is("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new us(new Vg(s.getProvider("auth-internal")),new Ng(o,s.getProvider("app-check-internal")),(function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(d.options.projectId,h)})(o,i),o);return r={useFetchStreams:t,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Mt(Hl,zl,e),Mt(Hl,zl,"esm2020")})();function oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zv=oh,ah=new Mn("auth","Firebase",oh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Oo("@firebase/auth");function Gv(n,...e){Gi.logLevel<=K.WARN&&Gi.warn(`Auth (${Us}): ${n}`,...e)}function Ai(n,...e){Gi.logLevel<=K.ERROR&&Gi.error(`Auth (${Us}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...e){throw va(n,...e)}function it(n,...e){return va(n,...e)}function lh(n,e,t){const s={...zv(),[e]:t};return new Mn("auth","Firebase",s).create(e,{appName:n.name})}function ut(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function va(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ah.create(n,...e)}function F(n,e,...t){if(!n)throw va(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ai(e),new Error(e)}function ft(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Wv(){return qc()==="http:"||qc()==="https:"}function qc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wv()||df()||"connection"in navigator)?navigator.onLine:!0}function Jv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=af()||uf()}get(){return Kv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xv=new qn(3e4,6e4);function bt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function at(n,e,t,s,i={}){return dh(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Vn({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:c,...r};return cf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(d.credentials="include"),ch.fetch()(await uh(n,n.config.apiHost,t,l),d)})}async function dh(n,e,t){n._canInitEmulator=!1;const s={...Qv,...e};try{const i=new e_(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pi(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw pi(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lh(n,h,d);Ke(n,h)}}catch(i){if(i instanceof gt)throw i;Ke(n,"network-request-failed",{message:String(i)})}}async function Hn(n,e,t,s,i={}){const r=await at(n,e,t,s,i);return"mfaPendingCredential"in r&&Ke(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function uh(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?_a(n.config,i):`${n.config.apiScheme}://${i}`;return Yv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Zv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(it(this.auth,"network-request-failed")),Xv.get())})}}function pi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=it(n,e,s);return i.customData._tokenResponse=t,i}function Hc(n){return n!==void 0&&n.enterprise!==void 0}class t_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function s_(n,e){return at(n,"GET","/v2/recaptchaConfig",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function Wi(n,e){return at(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i_(n,e=!1){const t=de(n),s=await t.getIdToken(e),i=wa(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Tn(io(i.auth_time)),issuedAtTime:Tn(io(i.iat)),expirationTime:Tn(io(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function io(n){return Number(n)*1e3}function wa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=fd(t);return i?JSON.parse(i):(Ai("Failed to decode base64 JWT payload"),null)}catch(i){return Ai("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zc(n){const e=wa(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof gt&&r_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function r_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ki(n){var p;const e=n.auth,t=await n.getIdToken(),s=await Ns(n,Wi(e,{idToken:t}));F(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?hh(i.providerUserInfo):[],o=l_(n.providerData,r),l=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Mo(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function a_(n){const e=de(n);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l_(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function hh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){const t=await dh(n,{},async()=>{const s=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await uh(n,i,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&Bs(n.emulatorConfig.host)&&(c.credentials="include"),ch.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function d_(n,e){return at(n,"POST","/v2/accounts:revokeToken",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await c_(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new As;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new o_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return i_(this,e)}reload(){return a_(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ki(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await Ns(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:b,providerData:I,stsTokenManager:x}=t;F(p&&x,e,"internal-error");const C=As.fromJSON(this.name,x);F(typeof p=="string",e,"internal-error"),At(s,e.name),At(i,e.name),F(typeof f=="boolean",e,"internal-error"),F(typeof b=="boolean",e,"internal-error"),At(r,e.name),At(o,e.name),At(l,e.name),At(c,e.name),At(d,e.name),At(h,e.name);const k=new He({uid:p,auth:e,email:i,emailVerified:f,displayName:s,isAnonymous:b,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:h});return I&&Array.isArray(I)&&(k.providerData=I.map(N=>({...N}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,t,s=!1){const i=new As;i.updateFromServerResponse(t);const r=new He({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ki(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?hh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new As;l.updateFromIdToken(s);const c=new He({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Mo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map;function ct(n){ft(n instanceof Function,"Expected a class definition");let e=Gc.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gc.set(n,e),e)}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mh.type="NONE";const Wc=mh;/**
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
 */function xi(n,e,t){return`firebase:${n}:${e}:${t}`}class xs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xi(this.userKey,i.apiKey,r),this.fullPersistenceKey=xi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wi(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new xs(ct(Wc),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||ct(Wc);const o=xi(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const h=await d._get(o);if(h){let p;if(typeof h=="string"){const f=await Wi(e,{idToken:h}).catch(()=>{});if(!f)break;p=await He._fromGetAccountInfoResponse(e,f,h)}else p=He._fromJSON(e,h);d!==r&&(l=p),r=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new xs(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new xs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vh(e))return"Blackberry";if(_h(e))return"Webos";if(fh(e))return"Safari";if((e.includes("chrome/")||gh(e))&&!e.includes("edge/"))return"Chrome";if(yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ph(n=Se()){return/firefox\//i.test(n)}function fh(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gh(n=Se()){return/crios\//i.test(n)}function bh(n=Se()){return/iemobile/i.test(n)}function yh(n=Se()){return/android/i.test(n)}function vh(n=Se()){return/blackberry/i.test(n)}function _h(n=Se()){return/webos/i.test(n)}function Ea(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function u_(n=Se()){var e;return Ea(n)&&!!((e=window.navigator)!=null&&e.standalone)}function h_(){return hf()&&document.documentMode===10}function wh(n=Se()){return Ea(n)||yh(n)||_h(n)||vh(n)||/windows phone/i.test(n)||bh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,e=[]){let t;switch(n){case"Browser":t=Kc(Se());break;case"Worker":t=`${Kc(Se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Us}/${s}`}/**
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
 */class m_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function p_(n,e={}){return at(n,"GET","/v2/passwordPolicy",bt(n,e))}/**
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
 */const f_=6;class g_{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??f_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jc(this),this.idTokenSubscription=new Jc(this),this.beforeStateQueue=new m_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wi(this,{idToken:e}),s=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(ut(this));const t=e?de(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p_(this),t=new g_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await d_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Gv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(n){return de(n)}class Jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=_f(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y_(n){_r=n}function Th(n){return _r.loadJS(n)}function v_(){return _r.recaptchaEnterpriseScript}function __(){return _r.gapiScript}function w_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class E_{constructor(){this.enterprise=new T_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class T_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const I_="recaptcha-enterprise",Ih="NO_RECAPTCHA";class A_{constructor(e){this.type=I_,this.auth=zt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{s_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new t_(c);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(r,o,l){const c=window.grecaptcha;Hc(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(Ih)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new E_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(l=>{if(!t&&Hc(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=v_();c.length!==0&&(c+=l),Th(c).then(()=>{i(l,r,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Qc(n,e,t,s=!1,i=!1){const r=new A_(n);let o;if(i)o=Ih;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ji(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qc(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){`${t}`;const l=await Qc(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){const t=No(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ns(r,e??{}))return i;Ke(i,"already-initialized")}return t.initialize({options:e})}function S_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function C_(n,e,t){const s=zt(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ah(e),{host:o,port:l}=R_(e),c=l===null?"":`:${l}`,d={url:`${r}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(ns(d,s.config.emulator)&&ns(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Bs(o)?(vd(`${r}//${o}${c}`),_d("Auth",!0)):P_()}function Ah(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function R_(n){const e=Ah(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Yc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Yc(o)}}}function Yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function P_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function L_(n,e){return at(n,"POST","/v1/accounts:update",e)}async function k_(n,e){return at(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e){return Hn(n,"POST","/v1/accounts:signInWithPassword",bt(n,e))}async function xh(n,e){return at(n,"POST","/v1/accounts:sendOobCode",bt(n,e))}async function M_(n,e){return xh(n,e)}async function V_(n,e){return xh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}async function $_(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ta{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Dn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Dn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,t,"signInWithPassword",D_);case"emailLink":return O_(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,s,"signUpPassword",k_);case"emailLink":return $_(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(n,e){return Hn(n,"POST","/v1/accounts:signInWithIdp",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="http://localhost";class as extends Ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new as(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ss(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ss(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ss(e,t)}buildRequest(){const e={requestUri:N_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(n){const e=hn(mn(n)).link,t=e?hn(mn(e)).deep_link_id:null,s=hn(mn(n)).deep_link_id;return(s?hn(mn(s)).link:null)||s||t||e||n}class Ia{constructor(e){const t=hn(mn(e)),s=t.apiKey??null,i=t.oobCode??null,r=B_(t.mode??null);F(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=U_(e);try{return new Ia(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,t){return Dn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ia.parseLink(t);return F(s,"argument-error"),Dn._fromEmailAndCode(e,s.code,s.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends zn{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ct.credential(t,s)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends zn{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends zn{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Pt.credential(t,s)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(n,e){return Hn(n,"POST","/v1/accounts:signUp",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await He._fromIdTokenResponse(e,s,i),o=Xc(s);return new ls({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Xc(s);return new ls({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Xc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends gt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Qi(e,t,s,i)}}function Ch(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(n,r,e,s):r})}async function j_(n,e,t=!1){const s=await Ns(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ls._forOperation(n,"link",s)}/**
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
 */async function Rh(n,e,t=!1){const{auth:s}=n;if(Fe(s.app))return Promise.reject(ut(s));const i="reauthenticate";try{const r=await Ns(n,Ch(s,i,e,n),t);F(r.idToken,s,"internal-error");const o=wa(r.idToken);F(o,s,"internal-error");const{sub:l}=o;return F(n.uid===l,s,"user-mismatch"),ls._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ke(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(n,e,t=!1){if(Fe(n.app))return Promise.reject(ut(n));const s="signIn",i=await Ch(n,s,e),r=await ls._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function q_(n,e){return Ph(zt(n),e)}async function H_(n,e){return Rh(de(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(n){const e=zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function z_(n,e,t){const s=zt(n);await Ji(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",V_)}async function kh(n,e,t){if(Fe(n.app))return Promise.reject(ut(n));const s=zt(n),o=await Ji(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Lh(n),c}),l=await ls._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function Dh(n,e,t){return Fe(n.app)?Promise.reject(ut(n)):q_(de(n),hs.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Lh(n),s})}async function Mh(n,e){const t=de(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await M_(t.auth,i);r!==n.email&&await n.reload()}function G_(n,e){return W_(de(n),null,e)}async function W_(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.password=t);const o=await Ns(n,L_(s,r));await n._updateTokensIfNecessary(o,!0)}function K_(n,e,t,s){return de(n).onIdTokenChanged(e,t,s)}function J_(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function Vh(n,e,t,s){return de(n).onAuthStateChanged(e,t,s)}function In(n){return de(n).signOut()}const Yi="__sak";/**
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
 */class Oh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1e3,Y_=10;class $h extends Oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);h_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Y_):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$h.type="LOCAL";const X_=$h;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nh.type="SESSION";const Bh=Nh;/**
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
 */function Z_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new wr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,r)),c=await Z_(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ew{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const d=Aa("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===d)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function tw(n){rt().location.href=n}/**
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
 */function Uh(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function iw(){return Uh()?self:null}/**
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
 */const Fh="firebaseLocalStorageDb",rw=1,Xi="firebaseLocalStorage",jh="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Er(n,e){return n.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function ow(){const n=indexedDB.deleteDatabase(Fh);return new Gn(n).toPromise()}function Vo(){const n=indexedDB.open(Fh,rw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Xi,{keyPath:jh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Xi)?e(s):(s.close(),await ow(),e(await Vo()))})})}async function Zc(n,e,t){const s=Er(n,!0).put({[jh]:e,value:t});return new Gn(s).toPromise()}async function aw(n,e){const t=Er(n,!1).get(e),s=await new Gn(t).toPromise();return s===void 0?null:s.value}function ed(n,e){const t=Er(n,!0).delete(e);return new Gn(t).toPromise()}const lw=800,cw=3;class qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>cw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wr._getInstance(iw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await sw(),!this.activeServiceWorker)return;this.sender=new ew(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await Zc(e,Yi,"1"),await ed(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>aw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ed(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Er(i,!1).getAll();return new Gn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qh.type="LOCAL";const dw=qh;new qn(3e4,6e4);/**
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
 */function uw(n,e){return e?ct(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xa extends Ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ss(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hw(n){return Ph(n.auth,new xa(n),n.bypassAuthState)}function mw(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Rh(t,new xa(n),n.bypassAuthState)}async function pw(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),j_(t,new xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hw;case"linkViaPopup":case"linkViaRedirect":return pw;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:Ke(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new qn(2e3,1e4);class Es extends Hh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fw.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",Si=new Map;class bw extends Hh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Si.get(this.auth._key());if(!e){try{const s=await yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yw(n,e){const t=ww(e),s=_w(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function vw(n,e){Si.set(n._key(),e)}function _w(n){return ct(n._redirectPersistence)}function ww(n){return xi(gw,n.config.apiKey,n.name)}async function Ew(n,e,t=!1){if(Fe(n.app))return Promise.reject(ut(n));const s=zt(n),i=uw(s,e),o=await new bw(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=600*1e3;class Iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Aw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!zh(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(it(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(td(e))}saveEventToCache(e){this.cachedEventUids.add(td(e)),this.lastProcessedEventTime=Date.now()}}function td(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Aw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n,e={}){return at(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cw=/^https?/;async function Rw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xw(n);for(const t of e)try{if(Pw(t))return}catch{}Ke(n,"unauthorized-domain")}function Pw(n){const e=Do(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Cw.test(t))return!1;if(Sw.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Lw=new qn(3e4,6e4);function sd(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kw(n){return new Promise((e,t)=>{var i,r,o;function s(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),t(it(n,"network-request-failed"))},timeout:Lw.get()})}if((r=(i=rt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=rt().gapi)!=null&&o.load)s();else{const l=w_("iframefcb");return rt()[l]=()=>{gapi.load?s():t(it(n,"network-request-failed"))},Th(`${__()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function Dw(n){return Ci=Ci||kw(n),Ci}/**
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
 */const Mw=new qn(5e3,15e3),Vw="__/auth/iframe",Ow="emulator/auth/iframe",$w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bw(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_a(e,Ow):`https://${n.config.authDomain}/${Vw}`,s={apiKey:e.apiKey,appName:n.name,v:Us},i=Nw.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Vn(s).slice(1)}`}async function Uw(n){const e=await Dw(n),t=rt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Bw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$w,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=it(n,"network-request-failed"),l=rt().setTimeout(()=>{r(o)},Mw.get());function c(){rt().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jw=500,qw=600,Hw="_blank",zw="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gw(n,e,t,s=jw,i=qw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...Fw,width:s.toString(),height:i.toString(),top:r,left:o},d=Se().toLowerCase();t&&(l=gh(d)?Hw:t),ph(d)&&(e=e||zw,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[b,I])=>`${f}${b}=${I},`,"");if(u_(d)&&l!=="_self")return Ww(e||"",l),new nd(null);const p=window.open(e||"",l,h);F(p,n,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function Ww(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Kw="__/auth/handler",Jw="emulator/auth/handler",Qw=encodeURIComponent("fac");async function id(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Us,eventId:i};if(e instanceof Sh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof zn){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await n._getAppCheckToken(),d=c?`#${Qw}=${encodeURIComponent(c)}`:"";return`${Yw(n)}?${Vn(l).slice(1)}${d}`}function Yw({config:n}){return n.emulator?_a(n,Jw):`https://${n.authDomain}/${Kw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="webStorageSupport";class Xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bh,this._completeRedirectFn=Ew,this._overrideRedirectResult=vw}async _openPopup(e,t,s,i){var o;ft((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await id(e,t,s,Do(),i);return Gw(e,r,Aa())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await id(e,t,s,Do(),i);return tw(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ft(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Uw(e),s=new Iw(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ro,{type:ro},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[ro];r!==void 0&&t(!!r),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wh()||fh()||Ea()}}const Zw=Xw;var rd="@firebase/auth",od="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sE(n){Ls(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(n)},d=new b_(s,i,r,c);return S_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ls(new is("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(s=>new eE(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(rd,od,tE(n)),Mt(rd,od,"esm2020")}/**
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
 */const nE=300,iE=yd("authIdTokenMaxAge")||nE;let ad=null;const rE=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>iE)return;const i=t==null?void 0:t.token;ad!==i&&(ad=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oE(n=Id()){const e=No(n,"auth");if(e.isInitialized())return e.getImmediate();const t=x_(n,{popupRedirectResolver:Zw,persistence:[dw,X_,Bh]}),s=yd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=rE(r.toString());J_(t,o,()=>o(t.currentUser)),K_(t,l=>o(l))}}const i=gd("auth");return i&&C_(t,`http://${i}`),t}function aE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}y_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=it("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",aE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sE("Browser");const lE={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},Gh=Td(lE),ve=Rv(Gh),Pe=oE(Gh),Ne={validatePassword(n){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(n)},getCurrentUser(){return Pe.currentUser},onAuthStateChanged(n){return Vh(Pe,n)},async login(n,e){try{const s=(await Dh(Pe,n,e)).user;if(!s.emailVerified)throw await In(Pe),new Error("Debes verificar tu correo electrónico antes de entrar.");return s}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(n,e){if(!this.validatePassword(e))throw new Error("La contraseña no cumple los requisitos mínimos.");try{const s=(await kh(Pe,n,e)).user;return await Mh(s),await zi(Me(ve,"users",s.uid),{email:n,createdAt:new Date().toISOString(),emailVerified:!1}),await In(Pe),{requiresVerification:!0}}catch(t){throw console.error("Error en registro:",t),t.code==="auth/email-already-in-use"?new Error("Este correo ya está registrado."):new Error("Error en registro: "+t.message)}},async recoverPassword(n){if(!n)throw new Error("Por favor ingresa tu correo electrónico.");try{return await z_(Pe,n),!0}catch(e){let t="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(t="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(t="El correo no es válido."),new Error(t)}},async logout(){return In(Pe)}},Wh={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const n=document.getElementById("user-none"),e=document.getElementById("pass-none");n&&(n.style.display="none"),e&&(e.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const t=document.getElementById("theme-link").getAttribute("href"),s=`./manual.html?theme=${encodeURIComponent(t)}`;this.container.innerHTML=`
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
                  <a href="${s}" target="_blank" class="btn btn-outline-secondary btn-sm">
                    <i class="fa-solid fa-book me-2"></i>Ver Manual Completo
                  </a>
                  <button type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal">¡Entendido, todo claro!</button>
                </div>
            </div>
        </div>
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const n=document.getElementById("btn-login");n&&(n.onclick=async()=>{const s=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value;if(!s||!i)return this._showError("Ingrese correo y contraseña.");try{await Ne.login(s,i),location.reload()}catch(r){this._showError(r.message)}});const e=document.getElementById("btn-signup");e&&(e.onclick=async()=>{const s=document.getElementById("email-s").value.trim(),i=document.getElementById("pass-s").value;if(!Ne.validatePassword(i))return this._showError("La contraseña no cumple los requisitos.");const r=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',e.disabled=!0;try{await Ne.signup(s,i),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${s}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
            `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(o){this._showError(o.message)}finally{e.innerHTML=r,e.disabled=!1}});const t=document.getElementById("btn-forgot");t&&(t.onclick=async s=>{s.preventDefault();const i=document.getElementById("email-l"),r=i.value.trim();if(!r)return i.classList.add("is-invalid"),i.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");i.classList.remove("is-invalid");const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',t.style.pointerEvents="none";try{await Ne.recoverPassword(r),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${r} para restablecer la clave.`)}catch(l){this._showError(l.message)}finally{t.innerHTML=o,t.style.pointerEvents="auto"}})},initLogout(){const n=document.getElementById("btn-logout-link");n&&(n.onclick=async e=>{e.preventDefault();try{await Ne.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},_showError(n){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");e&&(e.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${n}`,e.style.display="block"),t&&(t.style.display="none")},_showSuccess(n){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");t&&(t.innerHTML=n,t.style.display="block"),e&&(e.style.display="none")}},be={masterKey:null,async generateKey(n){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(n),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async setMasterKey(n){this.masterKey=await this.generateKey(n)},async encryptData(n,e=null){const t=e||this.masterKey;if(!t)throw new Error("Frase maestra no inicializada.");const s=new TextEncoder,i=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:i},t,s.encode(JSON.stringify(n)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(r))),iv:btoa(String.fromCharCode(...i))}},async decryptData(n){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");try{if(!n||!n.iv||!n.ciphertext)throw new Error("El objeto cifrado está incompleto o corrupto.");const e=l=>{if(typeof l!="string")return"";let c=l.replace(/[\s\n\r]/g,"");for(c=c.replace(/-/g,"+").replace(/_/g,"/");c.length%4;)c+="=";return c},t=e(n.iv),s=e(n.ciphertext),i=new Uint8Array(atob(t).split("").map(l=>l.charCodeAt(0))),r=new Uint8Array(atob(s).split("").map(l=>l.charCodeAt(0))),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:i},this.masterKey,r);return JSON.parse(new TextDecoder().decode(o))}catch(e){if(e.name==="InvalidCharacterError")console.error("[CRYPTO] Error de formato Base64. IV Recibido:",n.iv);else if(e.name==="OperationError")throw e;throw console.error("[CRYPTO] Fallo técnico al decodificar:",e),e}}},U={_toastContainer:null,init(){this._injectToastContainer(),this._injectModals()},toast(n,e="success"){this._toastContainer||this.init();const t=`toast-${Date.now()}`,i=`
      <div id="${t}" class="toast align-items-center text-bg-light border-0 shadow-sm mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2 fw-medium">
            <i class="fa-solid ${e==="success"?"fa-check-circle text-success":e==="danger"?"fa-circle-exclamation text-danger":"fa-info-circle text-info"} fs-5"></i>
            ${n}
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;this._toastContainer.insertAdjacentHTML("beforeend",i);const r=document.getElementById(t),o=new bootstrap.Toast(r,{delay:3500});r.addEventListener("hidden.bs.toast",()=>r.remove()),o.show()},confirm(n,e){return document.getElementById("ds-modal-confirm")||this.init(),new Promise(t=>{document.getElementById("ds-confirm-title").innerText=n,document.getElementById("ds-confirm-msg").innerHTML=e;const s=document.getElementById("ds-modal-confirm"),i=new bootstrap.Modal(s),r=document.getElementById("ds-btn-confirm-ok"),o=document.getElementById("ds-btn-confirm-cancel"),l=()=>{r.onclick=null,o.onclick=null,s.removeEventListener("hidden.bs.modal",c)},c=()=>{l(),t(!1)};r.onclick=()=>{i.hide(),l(),t(!0)},o.onclick=()=>{i.hide(),l(),t(!1)},s.addEventListener("hidden.bs.modal",c),i.show()})},promptPassword(n,e){return document.getElementById("ds-modal-password")||this.init(),new Promise(t=>{document.getElementById("ds-pwd-title").innerText=n,document.getElementById("ds-pwd-msg").innerText=e;const s=document.getElementById("ds-pwd-input");s.value="";const i=document.getElementById("ds-modal-password"),r=new bootstrap.Modal(i);document.getElementById("ds-btn-pwd-ok");const o=document.getElementById("ds-btn-pwd-cancel"),l=document.getElementById("ds-pwd-form"),c=()=>{l.onsubmit=null,o.onclick=null,i.removeEventListener("hidden.bs.modal",d)},d=()=>{c(),t(null)};l.onsubmit=h=>{h.preventDefault();const p=s.value.trim();r.hide(),c(),t(p===""?null:p)},o.onclick=()=>{r.hide(),c(),t(null)},i.addEventListener("hidden.bs.modal",d),r.show(),i.addEventListener("shown.bs.modal",()=>s.focus(),{once:!0})})},_injectToastContainer(){document.getElementById("ds-toast-container")||(this._toastContainer=document.createElement("div"),this._toastContainer.id="ds-toast-container",this._toastContainer.className="toast-container position-fixed bottom-0 end-0 p-3",this._toastContainer.style.zIndex="1090",document.body.appendChild(this._toastContainer))},_injectModals(){if(document.getElementById("ds-modal-confirm"))return;document.body.insertAdjacentHTML("beforeend",`
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
    `)}},H={get _masterKey(){return be.masterKey},async initDB(){return!0},async save(n,e){const t=Ne.getCurrentUser();if(!t&&n!=="users")throw new Error("Usuario no autenticado.");const s=JSON.parse(JSON.stringify(e));if(s.userId=t?t.uid:n==="users"?s.id:null,s.isEncrypted&&s.content){if(!be.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");s.content=await be.encryptData(s.content)}!s.isEncrypted&&s.content&&Array.isArray(s.content)&&s.content.forEach(i=>{if(Array.isArray(i.value)&&i.value.length>0&&Array.isArray(i.value[0])){const r={};i.value.forEach((o,l)=>{r[l]=o}),i.value=r,i.storageMode="nested_map"}});try{return await zi(Me(ve,n,s.id),s),!0}catch(i){throw console.error("Error Firestore:",i),new Error("Error al guardar en la nube: "+i.message)}},async getOne(n,e){if(!e)return null;const t=n==="doc";try{const s=Me(ve,n,e),i=await Ti(s);if(!i.exists())return null;let r={id:i.id,...i.data()};if(r.isEncrypted&&r.content){if(!be.masterKey)return t&&console.warn("[STORAGE] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...r,content:null,decryptionError:!0};try{const o=await be.decryptData(r.content);let l={...r,content:o,decryptionError:!1};return this._hydrateDocument(l)}catch(o){return t&&console.error("[STORAGE] ⛔ Error al descifrar:",o),{...r,content:null,decryptionError:!0}}}return this._hydrateDocument(r)}catch(s){throw console.error(`[STORAGE] Error obteniendo ${n}/${e}:`,s),s}},async getAll(n){const e=Ne.getCurrentUser();if(!e)return[];try{const t=Lo(qi(ve,n),wi("userId","==",e.uid)),s=await ko(t),i=[];for(const r of s.docs){let o=r.data();if(o.isEncrypted&&be.masterKey)try{o.content=await be.decryptData(o.content)}catch{o.decryptionError=!0}o=this._hydrateDocument(o),i.push(o)}return i.sort((r,o)=>o.id.localeCompare(r.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(n,e){try{await Ii(Me(ve,n,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(n){return n&&Array.isArray(n.content)&&n.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,s)=>Number(t)-Number(s)).map(t=>e.value[t]),delete e.storageMode)}),n},async hasSecurityConfigured(){const n=Ne.getCurrentUser();return n?(await Ti(Me(ve,"security",n.uid))).exists():!1},async saveSecurityVerifier(n){const e=Ne.getCurrentUser();if(!e)throw new Error("No hay una sesión de usuario activa.");try{return await zi(Me(ve,"security",e.uid),{userId:e.uid,verifier:n,updatedAt:new Date().toISOString()}),!0}catch(t){throw console.error("[STORAGE] Error guardando verificado:",t),t}},async changeMasterPhrase(n,e){try{if(!await this.verifyMasterPhrase(n))throw new Error("La frase maestra anterior es incorrecta.");await be.setMasterKey(e);const s=await be.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(s),!0}catch(t){throw console.error("[STORAGE] ❌ Error en changeMasterPhrase:",t),t}},async hardResetSecurity(){const n=Ne.getCurrentUser();if(!n)throw new Error("No hay sesión activa.");try{const e=Lo(qi(ve,"doc"),wi("userId","==",n.uid),wi("isEncrypted","==",!0)),t=await ko(e),s=[];t.forEach(r=>s.push(Ii(r.ref))),await Promise.all(s);const i=Me(ve,"security",n.uid);return await Ii(i),be.masterKey=null,!0}catch(e){throw console.error("[STORAGE] Error en Hard Reset:",e),new Error("No se pudo completar el borrado masivo: "+e.message)}},async verifyMasterPhrase(n){const e=Ne.getCurrentUser();if(!e)return!1;try{const t=Me(ve,"security",e.uid),s=await Ti(t);if(!s.exists())return!1;const i=s.data();if(!i||!i.verifier)return!1;const{verifier:r}=i,o=be.masterKey;try{await be.setMasterKey(n);const l=await be.decryptData(r);return!!(l&&l.check==="VERIFIED")}catch{return be.masterKey=o,!1}}catch(t){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRÍTICO:",t),U.toast("Error de conexión o sistema: "+t.message,"danger"),!1}}},Ri={async saveTemplate(n){if(!n.title.trim())throw new Error("Título obligatorio");if(n.elements.length===0)throw new Error("Diseño vacío");n.updatedAt=new Date().toISOString(),await H.save("tpl",n)},async deleteTemplate(n){await H.delete("tpl",n)},async loadTemplates(){return await H.getAll("tpl")}};class Sa{constructor(e){this.tableBody=e.tableBody,this.tableHeaders=e.tableHeaders,this.paginationContainer=e.paginationContainer,this.renderRowHTML=e.renderRowHTML,this.extractSearchString=e.extractSearchString,this.onRenderComplete=e.onRenderComplete,this.customSort=e.customSort,this.dummyRowHTML=e.dummyRowHTML,this.marginBot=e.marginBot!==void 0?e.marginBot:40,this.data=[],this.state={currentPage:1,itemsPerPage:10,totalPages:1,searchTerm:"",filters:{},sortColumn:"updatedAt",sortAsc:!1},this._resizeTimer=null,this._bindWindowResize(),this._bindHeaders(),this._bindPaginationEvents()}setData(e){this.data=e||[],this.state.currentPage=1,this.render()}setSearchTerm(e){this.state.searchTerm=this._normalizeText(e),this.state.currentPage=1,this.render()}setFilter(e,t){this.state.filters[e]=t,this.state.currentPage=1,this.render()}setSort(e){this.state.sortColumn===e?this.state.sortAsc=!this.state.sortAsc:(this.state.sortColumn=e,this.state.sortAsc=!0),this.state.currentPage=1,this._updateHeaderIcons(),this.render()}_bindHeaders(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const s=t.dataset.column;s&&this.setSort(s)})}),this._updateHeaderIcons()}_updateHeaderIcons(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{let s=t.querySelector("i");s||(s=document.createElement("i"),t.appendChild(s));const i=t.dataset.column;s.className="fa-solid fa-sort text-muted ms-1 opacity-50",this.state.sortColumn===i&&(s.className=this.state.sortAsc?"fa-solid fa-sort-up text-primary ms-1":"fa-solid fa-sort-down text-primary ms-1")})}_processData(){let e=[...this.data];if(Object.entries(this.state.filters).forEach(([t,s])=>{s&&s!=="all"&&(e=e.filter(i=>i[t]===s))}),this.state.searchTerm){const t=this.state.searchTerm.split(/\s+/).filter(s=>s.length>0);e=e.filter(s=>{const i=this._normalizeText(this.extractSearchString(s));return t.every(r=>i.includes(r))})}return this.state.sortColumn&&e.sort((t,s)=>{if(this.customSort)return this.customSort(t,s,this.state);let i=t[this.state.sortColumn],r=s[this.state.sortColumn];return this.state.sortColumn.toLowerCase().includes("date")||this.state.sortColumn.includes("At")?(i=new Date(i||0).getTime(),r=new Date(r||0).getTime()):(i=this._normalizeText(i),r=this._normalizeText(r)),i<r?this.state.sortAsc?-1:1:i>r?this.state.sortAsc?1:-1:0}),e}render(){if(!this.tableBody)return;const e=this._processData();this.state.totalPages=Math.max(1,Math.ceil(e.length/this.state.itemsPerPage)),this.state.currentPage>this.state.totalPages&&(this.state.currentPage=1);const t=(this.state.currentPage-1)*this.state.itemsPerPage,s=e.slice(t,t+this.state.itemsPerPage);if(this._renderPaginationControls(e.length),s.length===0){this.tableBody.innerHTML='<tr><td colspan="100%" class="text-center p-4 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=s.map(i=>this.renderRowHTML(i)).join(""),this.onRenderComplete&&this.onRenderComplete(this.tableBody,s)}_renderPaginationControls(e){this.paginationContainer&&(this.paginationContainer.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.state.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left pointer-events-none"></i></button>
      <span class="small fw-bold px-1">Pág ${this.state.currentPage} de ${this.state.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.state.currentPage===this.state.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right pointer-events-none"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${e} en total</span>
    `)}_bindPaginationEvents(){this.paginationContainer&&this.paginationContainer.addEventListener("click",e=>{const t=e.target.closest("button");t&&(t.classList.contains("btn-prev-page")&&this.state.currentPage>1?(this.state.currentPage--,this.render()):t.classList.contains("btn-next-page")&&this.state.currentPage<this.state.totalPages&&(this.state.currentPage++,this.render()))})}calculatePaginationSpace(){if(!this.tableBody)return;let e=55;if(this.dummyRowHTML){const r=document.createElement("tr");r.style.visibility="hidden",r.innerHTML=this.dummyRowHTML,this.tableBody.appendChild(r),e=r.getBoundingClientRect().height||55,this.tableBody.removeChild(r)}const t=this.tableBody.getBoundingClientRect().top,s=t>0?t:250,i=window.innerHeight-s-this.marginBot;this.state.itemsPerPage=Math.max(5,Math.floor(i/e))}_bindWindowResize(){window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.tableBody&&this.tableBody.offsetParent!==null&&(this.calculatePaginationSpace(),this.render())},300)})}_normalizeText(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}const ld={handlers:{},currentTemplates:[],init(n){this.handlers=n;const e=document.getElementById("designer-list-view");e&&(e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents())},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-pen-ruler text-danger"></i> Gestor de Plantillas</h2>
            <div class="d-flex gap-2">
                <!-- 🚀 NUEVO BOTÓN: Asistente de IA -->
                <button class="btn btn-dark shadow-sm fw-bold" id="btn-ai-assistant">
                    <i class="fa-solid fa-wand-magic-sparkles text-warning me-2"></i> Generar con IA
                </button>
                
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
    `},cacheDOM(){this.tableBody=document.getElementById("tpl-table-body"),this.tableHead=document.getElementById("tpl-table-head"),this.pagination=document.getElementById("tpl-pagination-controls"),this.searchInput=document.getElementById("tpl-search-input"),this.btnCreate=document.getElementById("btn-go-create-tpl"),this.btnImport=document.getElementById("btn-import-tpl"),this.inputFile=document.getElementById("input-import-tpl"),this.categoryContainer=document.getElementById("tpl-category-filter-container"),this.btnAiAssistant=document.getElementById("btn-ai-assistant")},initTableEngine(){this.tableEngine=new Sa({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td class="text-center fs-4">📄</td>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">General</span></td>
        <td>
          <div class="fw-bold text-nowrap">Test</div>
          <div class="text-muted small text-truncate" style="max-width: 250px;">Desc</div>
        </td>
        <td class="text-muted small text-nowrap">01/01/2026</td>
        <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-success"><i class="fa-solid fa-file-circle-plus"></i></button></td>
      `,marginBot:90,extractSearchString:n=>`${n.title} ${n.category} ${n.description||""}`,renderRowHTML:n=>this._renderRow(n),onRenderComplete:(n,e)=>this._bindListActions(n,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.btnImport&&this.inputFile&&(this.btnImport.onclick=()=>this.inputFile.click(),this.inputFile.onchange=n=>this._handleImport(n)),this.btnAiAssistant&&(this.btnAiAssistant.onclick=()=>this._showAIModal()),this.searchInput.addEventListener("input",n=>{this.tableEngine.setSearchTerm(n.target.value)})},_showAIModal(){var r;const n="modal-ai-generator";(r=document.getElementById(n))==null||r.remove();const e=`
      <div class="modal fade" id="${n}" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg overflow-hidden">
            <div class="modal-header text-bg-dark py-3">
              <h5 class="modal-title fw-bold">
                <i class="fa-solid fa-wand-magic-sparkles text-warning me-2"></i> Asistente de IA (Prompt-to-Document)
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            
            <div class="modal-body bg-light p-4">
              <!-- PASO 1: Armar el Prompt -->
              <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-1 me-1"></i> Paso 1: Generar Instrucción (Prompt)</h6>
              <div class="card card-body border-0 shadow-sm mb-4">
                
                <!-- 🚀 NUEVO: Campo para el Nombre -->
                <div class="mb-3">
                    <label class="small text-muted mb-1 fw-semibold">Nombre de la Plantilla *</label>
                    <input type="text" id="ai-template-name" class="form-control fw-bold" placeholder="Ej: Evaluación de Daños Estructurales">
                </div>

                <!-- 🚀 MODIFICADO: Campo para la Descripción -->
                <label class="small text-muted mb-1 fw-semibold">¿Qué componentes o campos debe contener? *</label>
                <div class="input-group">
                  <textarea id="ai-user-idea" class="form-control" rows="2" placeholder="Ej: Necesito datos del inspector, una fecha, un selector con el nivel de daño y una tabla de escombros..."></textarea>
                  <button class="btn btn-dark fw-bold px-4" id="btn-generate-prompt">
                    <i class="fa-regular fa-copy d-block mb-1 fs-5"></i> Copiar<br>Prompt
                  </button>
                </div>
                <div class="form-text small mt-2 text-secondary">
                  Copiaremos una instrucción técnica a tu portapapeles. Ve a ChatGPT o Gemini, pégala y espera su respuesta.
                </div>
              </div>

              <!-- PASO 2: Pegar Resultado -->
              <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-2 me-1"></i> Paso 2: Importar Respuesta (JSON)</h6>
              <div class="card card-body border-0 shadow-sm">
                <label class="small text-muted mb-2 fw-semibold">Pega aquí el código que te devolvió la IA:</label>
                <textarea id="ai-json-response" class="form-control font-monospace small bg-dark text-light border-0 shadow-inner p-3" rows="6" placeholder="[ { &quot;tag&quot;: &quot;setting-string&quot;... } ]"></textarea>
              </div>
            </div>
            
            <div class="modal-footer bg-white py-3">
              <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success fw-bold px-5 shadow-sm" id="btn-build-from-ai">
                <i class="fa-solid fa-hammer me-2"></i> Construir Lienzo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",e);const t=document.getElementById(n),s=new bootstrap.Modal(t),i=t.querySelector("#btn-generate-prompt");i.onclick=async()=>{const o=t.querySelector("#ai-template-name").value.trim(),l=t.querySelector("#ai-user-idea").value.trim();if(!o||!l){alert("Por favor, completa el nombre de la plantilla y la descripción de los campos.");return}const c=`Actúa como un Arquitecto de Datos y Software.
Tu tarea es diseñar la estructura de un formulario dinámico y devolver ÚNICAMENTE un arreglo JSON válido. NO incluyas explicaciones, saludos ni formato Markdown (\`\`\`json).

REGLAS DEL ESQUEMA JSON:
- Devuelve un Array de objetos. Cada objeto es un campo del formulario.
- Atributos obligatorios por objeto: 
  1. "tag": Tipo de campo. Usa SOLO estos: setting-string, setting-text, setting-number, setting-currency, setting-percentage, setting-date, setting-select, setting-boolean, setting-section, setting-image, setting-video, setting-url.
  2. "id": Identificador único, en minúsculas y sin espacios (ej: strin_nombre).
  3. "title": Etiqueta visible para el usuario.
  4. "spanEV": Número del 1 al 12 (12 es fila completa, 6 es media fila).

REGLAS ESPECIALES:
- Si usas setting-select, debes incluir el atributo "options" con las opciones separadas por coma (Ej: "Opcion 1, Opcion 2").
- Si usas setting-table, debes incluir un atributo "columns" que será un sub-arreglo con los campos internos de la tabla (usando la misma estructura, limitando los tags a string, number, date o select).

EL REQUERIMIENTO DEL USUARIO ES: 
"${l}"`;try{await navigator.clipboard.writeText(c);const d=i.innerHTML;i.innerHTML='<i class="fa-solid fa-check d-block mb-1 fs-5"></i> ¡Copiado!',i.classList.replace("btn-dark","btn-success"),setTimeout(()=>{document.body.contains(i)&&(i.innerHTML=d,i.classList.replace("btn-success","btn-dark"))},3e3)}catch(d){console.error("Error copiando el prompt",d),alert("Tu navegador bloqueó el portapapeles. Por favor, revisa los permisos.")}},t.querySelector("#btn-build-from-ai").onclick=async()=>{const o=t.querySelector("#ai-json-response").value.trim(),l=t.querySelector("#ai-template-name").value.trim(),c=t.querySelector("#ai-user-idea").value.trim();if(!o){alert("Pega el JSON que te devolvió la IA.");return}if(!l){alert("Por favor, ponle un nombre a la plantilla en el Paso 1.");return}try{const d=o.replace(/```json/g,"").replace(/```/g,"").trim(),h=JSON.parse(d);if(!Array.isArray(h))throw new Error("El resultado no es un Array (Arreglo) válido.");const p={id:`tpl_${Date.now()}`,title:l,description:c,category:"Generado por IA",icon:"✨",encrypted:!1,relatedDocIds:"",etl:{sources:[],rules:[]},elements:h,updatedAt:new Date().toISOString()};await Ri.saveTemplate(p),U.toast("¡Plantilla construida con éxito!","success"),s.hide(),this.render()}catch(d){alert(`❌ Error de lectura JSON: Asegúrate de pegar ÚNICAMENTE el código JSON.

Detalle técnico: `+d.message)}},t.addEventListener("hidden.bs.modal",()=>t.remove()),s.show()},async render(){try{const n=await H.getAll("tpl")||[];this.currentTemplates=n.map(e=>({...e,category:e.category||"General"})),this.renderCategoryFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentTemplates)}catch(n){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${n.message}</td></tr>`)}},renderCategoryFilter(){if(!this.categoryContainer)return;const n=[...new Set(this.currentTemplates.map(e=>e.category))];if(n.length>1){const e=document.getElementById("tpl-category-select"),t=e?e.value:"all",s=`<option value="all" ${t==="all"?"selected":""}>Todas las categorías</option>`+n.sort().map(i=>`<option value="${i}" ${t===i?"selected":""}>${i}</option>`).join("");this.categoryContainer.innerHTML=`<select id="tpl-category-select" class="form-select">${s}</select>`,document.getElementById("tpl-category-select").addEventListener("change",i=>{this.tableEngine.setFilter("category",i.target.value)})}else this.categoryContainer.innerHTML="",this.tableEngine.setFilter("category","all")},_renderRow(n){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">${n.category}</span></td>
        <td>
          <div class="d-flex align-items-center">
            <div class="fs-4 me-3 text-center" style="width: 32px;">${n.icon||"📄"}</div>
            <div style="min-width: 0;">
              <div class="fw-bold text-nowrap text-truncate">
                 ${n.title} 
                ${n.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
              </div>
              <div class="text-muted small text-truncate" style="max-width: 250px;">${n.description||"Sin descripción"}</div>
            </div>
          </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-success btn-create-doc me-1" data-id="${n.id}" title="Crear Documento">
               <i class="fa-solid fa-file-circle-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-id="${n.id}" title="Editar Plantilla">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-export me-1" data-id="${n.id}" title="Descargar JSON">
                <i class="fa-solid fa-download"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del" data-id="${n.id}" title="Eliminar Plantilla">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(n,e){n.querySelectorAll(".btn-create-doc").forEach(t=>{t.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:t.dataset.id}}))}}),n.querySelectorAll(".btn-edit").forEach(t=>{t.onclick=()=>this.handlers.onEditTemplate(t.dataset.id)}),n.querySelectorAll(".btn-del").forEach(t=>{t.onclick=async()=>{await U.confirm("Eliminar Plantilla","¿Estás seguro de eliminar esta plantilla? Se borrarán sus documentos vinculados.")&&(await Ri.deleteTemplate(t.dataset.id),U.toast("Plantilla eliminada exitosamente","success"),this.render())}}),n.querySelectorAll(".btn-export").forEach(t=>{t.onclick=()=>{const s=e.find(i=>i.id===t.dataset.id);s&&this._downloadJSON(s)}})},_downloadJSON(n){const e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t;const i=n.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();s.download=`tpl_${i}_${n.id}.json`,s.click(),URL.revokeObjectURL(t)},_handleImport(n){const e=n.target.files[0];if(!e)return;const t=new FileReader;t.onload=async s=>{try{const i=JSON.parse(s.target.result);if(!i.title||!Array.isArray(i.elements))throw new Error("Plantilla inválida");i.id=`tpl_${Date.now()}`,i.title=`${i.title} (Importada)`,i.updatedAt=new Date().toISOString(),await Ri.saveTemplate(i),U.toast("Plantilla importada correctamente.","success"),this.render()}catch(i){U.toast("Error al importar: "+i.message,"danger")}n.target.value=""},t.readAsText(e)}},Ca={dragSrcEl:null,init(n,e=null,t=null){n.setAttribute("draggable","false"),n.addEventListener("mousedown",s=>{if(e){const i=s.target.closest(e);n.setAttribute("draggable",i?"true":"false")}else n.setAttribute("draggable","true")}),n.addEventListener("mouseup",()=>{n.setAttribute("draggable","false")}),n.addEventListener("dragstart",s=>this._handleDragStart(s,n)),n.addEventListener("dragend",s=>this._handleDragEnd(s,n)),n.addEventListener("dragover",s=>this._handleDragOver(s,n)),n.addEventListener("dragenter",s=>this._handleDragEnter(s,n)),n.addEventListener("dragleave",s=>this._handleDragLeave(s,n)),n.addEventListener("drop",s=>this._handleDrop(s,n,t))},_handleDragStart(n,e){if(e.getAttribute("draggable")==="false"){n.preventDefault();return}this.dragSrcEl=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(n,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(n){return n.preventDefault&&n.preventDefault(),n.dataTransfer.dropEffect="move",!1},_handleDragEnter(n,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(n,e){e.classList.remove("border-top-primary-3")},_handleDrop(n,e,t){if(n.stopPropagation&&n.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const s=e.parentNode,i=e.getBoundingClientRect(),r=n.clientY-i.top,o=e.clientHeight/2;r>o?s.insertBefore(this.dragSrcEl,e.nextSibling):s.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(n){n&&Array.from(n.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},cn={handlers:{},currentId:null,init(n){this.handlers=n,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.catInput&&(this.catInput.onchange=n=>{const e=n.target.options[n.target.selectedIndex].dataset.icon;this.iconInput.value=e})},renderSidebar(){const n=document.getElementById("tpl-elements");n.innerHTML=Object.entries(Le).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-fill px-4 py-2" id="add-${e}">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
         </button>`).join(""),Object.keys(Le).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._addToCanvas(t)}})},_addToCanvas(n){const e=document.createElement("div");e.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",e.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab px-3 flex-shrink-0">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2 w-100" id="comp-content" style="min-width: 0;"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp flex-shrink-0"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(n),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),Ca.init(e,".drag-handle"),this.canvas.appendChild(e)},async load(n){const e=await H.getOne("tpl",n);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.relatedDocsInput.value=e.relatedDocIds||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,e.etl&&(e.etl.sources.length>0||e.etl.rules.length>0)?this.canvas.setAttribute("data-etl-config",JSON.stringify(e.etl)):this.canvas.removeAttribute("data-etl-config"),this.canvas.innerHTML="",e.elements.forEach(t=>{const s=document.createElement(t.tag);s.setData&&s.setData(t),this._addToCanvas(s)}))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.encInput.checked=!1,this.canvas.removeAttribute("data-etl-config")},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(i=>{const r=i.querySelector("#comp-content");return r?r.firstElementChild:null}).filter(i=>i&&typeof i.getData=="function");let t={sources:[],rules:[]};try{const i=this.canvas.getAttribute("data-etl-config");i&&(t=JSON.parse(i))}catch(i){console.warn("No se pudo leer la configuración ETL al guardar.",i)}const s={id:this.currentId||`tpl_${Date.now()}`,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(i=>i.getData()),etl:t};try{await Ri.saveTemplate(s),U.toast("Plantilla guardada correctamente","success"),this.handlers.onSaveSuccess()}catch(i){U.toast("Error al guardar: "+i.message,"danger")}},getAvailableVariables(n,e=null){const t=[];if(this.canvas.querySelectorAll("setting-string, setting-text, setting-number, setting-currency, setting-percentage, setting-select, setting-email, setting-url, setting-boolean, setting-date").forEach(i=>{if(!i.closest("setting-table")&&typeof i.getData=="function"){const r=i.getData();t.push({id:r.id,title:r.title||"(Sin Título)",type:"general"})}}),n==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const r=i.getData();r.columns&&r.columns.forEach(o=>{t.push({id:o.id,title:`[Col] ${o.title}`,type:"column"})})}}return n==="general"&&this.canvas.querySelectorAll("setting-table").forEach(r=>{const o=r.getData();o.columns&&o.columns.forEach(l=>{l.total&&t.push({id:`TOTAL_${r.id}_${l.id}`,title:`SUM: ${o.title} > ${l.title}`,type:"total"})})}),t},getApiVariables(n,e=null){const t=[];if(this.canvas.querySelectorAll("setting-string, setting-text, setting-number, setting-currency, setting-percentage, setting-select, setting-email, setting-url, setting-boolean, setting-date").forEach(i=>{if(!i.closest("setting-table")&&typeof i.getData=="function"){const r=i.getData();t.push({id:r.id,title:r.title||"(Sin Título)",type:"general"})}}),n==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const r=i.getData();r.columns&&r.columns.forEach(o=>{t.push({id:o.id,title:`[Columna] ${o.title}`,type:"column"})})}}return t}},Kh={init(){ld.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:n=>{this.showEditor(),cn.load(n)}}),cn.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){ld.render()},showEditor(){const n=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");n&&(n.style.display="none"),e&&(e.style.display="block"),cn.reset()},showList(){const n=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");n&&(n.style.display="block"),e&&(e.style.display="none")},getAvailableVariables(n,e){return cn.getAvailableVariables(n,e)},getApiVariables(n,e){return cn.getApiVariables(n,e)}},dn={handlers:{},currentDocs:[],currentTemplates:[],init(n){this.handlers=n;const e=document.getElementById("doc-list-view");if(!e){console.error("❌ [DocumentList] Error crítico: No se encontró #doc-list-view en el DOM.");return}e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents()},getBaseHTML(){return`
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
    `},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.tableHead=document.getElementById("doc-table-head"),this.pagination=document.getElementById("doc-pagination-controls"),this.searchInput=document.getElementById("doc-search-input"),this.templateFilter=document.getElementById("doc-template-filter"),this.btnCreate=document.getElementById("btn-go-create-doc")},initTableEngine(){this.tableEngine=new Sa({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td><span class="badge bg-secondary px-2 py-1">Plantilla</span></td>
        <td><div class="fw-bold">Test</div></td>
        <td class="text-end"><button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-eye"></i></button></td>
      `,marginBot:40,extractSearchString:n=>`${n.title} ${n.templateTitle||""}`,renderRowHTML:n=>this._renderRow(n),onRenderComplete:(n,e)=>this._bindListActions(n,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput.addEventListener("input",n=>{this.tableEngine.setSearchTerm(n.target.value)}),this.templateFilter&&this.templateFilter.addEventListener("change",n=>{this.tableEngine.setFilter("templateId",n.target.value)})},async render(){try{this.currentDocs=await H.getAll("doc")||[],this.currentTemplates=await H.getAll("tpl")||[],this.populateTemplateFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentDocs)}catch(n){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando documentos: ${n.message}</td></tr>`)}},populateTemplateFilter(){if(!this.templateFilter)return;const n=this.templateFilter.value,e=new Set(this.currentDocs.map(i=>i.templateId)),t=this.currentTemplates.filter(i=>e.has(i.id)).sort((i,r)=>i.title.localeCompare(r.title,void 0,{sensitivity:"base"}));let s='<option value="">Todas las plantillas</option>';t.forEach(i=>{const r=i.icon||"📄";s+=`<option value="${i.id}">${r} ${i.title}</option>`}),this.templateFilter.innerHTML=s,t.some(i=>i.id===n)?this.templateFilter.value=n:this.templateFilter.value=""},_renderRow(n){let e="";n.isEncrypted&&(e=H._masterKey&&!n.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Desbloqueado"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado"><i class="fa-solid fa-lock"></i></span>');const t=this.currentTemplates.find(i=>i.id===n.templateId);return`
      <tr>
        <td>
          <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
            <span class="me-1 fs-6">${t&&t.icon?t.icon:"📄"}</span>${n.templateTitle||"General"}
          </span>
        </td>
        <td>
           <div class="fw-bold text-nowrap d-flex align-items-center">
               ${n.title} ${e}
           </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-primary btn-view-doc me-1" data-id="${n.id}" title="Visualizar">
               <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-copy-id me-1" data-id="${n.id}" title="Copiar ID">
               <i class="fa-regular fa-copy"></i>
            </button>
            <button class="btn btn-sm btn-outline-info btn-dev-json me-1" data-id="${n.id}" title="Extraer JSON (Dev)">
               <i class="fa-solid fa-code"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del-doc" data-id="${n.id}" title="Eliminar Documento">
               <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(n){n.querySelectorAll(".btn-view-doc").forEach(e=>{e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)}),n.querySelectorAll(".btn-del-doc").forEach(e=>{e.onclick=async()=>{await U.confirm("Eliminar Documento","¿Estás seguro de eliminar este documento definitivamente? Esta acción no se puede deshacer.")&&(await H.delete("doc",e.dataset.id),U.toast("Documento eliminado correctamente","success"),this.render())}}),n.querySelectorAll(".btn-copy-id").forEach(e=>{e.onclick=async t=>{t.stopPropagation();const s=e.dataset.id,i=e.querySelector("i");try{await navigator.clipboard.writeText(s);const r=i.className;i.className="fa-solid fa-check text-success",setTimeout(()=>{i.className=r},1500)}catch(r){console.error("Error al copiar ID:",r),alert("No se pudo copiar el ID al portapapeles.")}}}),n.querySelectorAll(".btn-dev-json").forEach(e=>{e.onclick=async t=>{t.stopPropagation();const s=e.dataset.id,i=e.querySelector("i"),r=i.className;try{i.className="fa-solid fa-spinner fa-spin text-info";let o=await H.getOne("doc",s);if(!o)throw new Error("Documento no encontrado");if(o.isEncrypted&&o.decryptionError){const h=await U.promptPassword("Desbloqueo Requerido","Este documento está cifrado. Ingrese su Frase Maestra para extraer los datos reales:");if(!h){i.className=r;return}if(await be.setMasterKey(h),o=await H.getOne("doc",s),o.decryptionError){alert("⛔ Frase incorrecta. No se puede extraer el documento."),i.className=r;return}}const l=await H.getOne("tpl",o.templateId),d=JSON.stringify({_INFO:"Extracto generado para depuración con IA",document:o,template:l},null,2);await navigator.clipboard.writeText(d),i.className="fa-solid fa-check text-success",U&&U.toast?U.toast("JSON copiado al portapapeles","success"):alert("JSON copiado al portapapeles."),setTimeout(()=>{i.className=r},1500)}catch(o){console.error("Error al extraer JSON:",o),i.className="fa-solid fa-xmark text-danger",alert("Error al extraer el JSON de desarrollo."),setTimeout(()=>{i.className=r},1500)}}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},fi={async print(n,e){let t=await H.getOne("doc",n);if(!t)return alert("Documento no encontrado.");if(t.isEncrypted&&t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const s=await H.getOne("tpl",t.templateId);if(!s)return alert("La plantilla base no se encuentra.");let i=document.getElementById("print-iframe");i||(i=document.createElement("iframe"),i.id="print-iframe",i.style.position="fixed",i.style.left="-10000px",i.style.top="0",i.style.width="100%",i.style.height="100%",document.body.appendChild(i));const r=i.contentWindow.document,o=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let l="";for(let c=1;c<=12;c++){const d=c/12*100;l+=`.col-${c} { width: ${d}%; } `}r.open(),r.write(`
        <html>
          <head>
            <title>${t.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/@sgratzl/chartjs-chart-boxplot@4.4.2/build/index.umd.min.js"><\/script>
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
              <div><h1>${t.title}</h1><p>${s.title}</p></div>
              <div style="text-align:right"><div>${o}</div><div style="font-weight:bold; font-size: 0.8rem; text-transform: uppercase;">${e}</div></div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),r.close(),i.onload=()=>{const c=r.getElementById("print-content");s.elements.forEach(d=>{if(d.hidePrint)return;const h=t.content.find(C=>C.fieldId===d.id);if(d.tag==="setting-section"){const C=r.createElement("div");C.className="col-12 mt-3 mb-2";const k=d.pageBreak?"page-break-before: always; margin-top: 0 !important;":"";C.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; ${k}">${d.title}</h4>`,c.appendChild(C);return}if(!h)return;const p=h.value,f=d.tag.replace("setting-","printer-"),b=document.createElement(f);b.setAttribute("title",d.title),d.currency&&b.setAttribute("currency",d.currency),d.options&&b.setAttribute("options",d.options),d.isAutomatic&&b.setAttribute("is-automatic",""),d.columns&&b.setAttribute("columns",JSON.stringify(d.columns)),b.setAttribute("edit-value",Array.isArray(p)?JSON.stringify(p):p),b.setAttribute("type",e);const I=d.spanP||12;b.setAttribute("span-print",I),h.bold&&b.setAttribute("bold",""),h.italic&&b.setAttribute("italic",""),b.setAttribute("color",h.color||"black");const x=r.createElement("div");x.className=`col-${I}`,x.appendChild(b),c.appendChild(x)}),setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print()},500)}},async copyToWhatsApp(n){let e=await H.getOne("doc",n);if(!e)return alert("Error recuperando documento.");if(e.isEncrypted&&e.decryptionError)return alert("El documento está cifrado. Debe abrirlo primero en el visor.");const t=await H.getOne("tpl",e.templateId);let s=`*${e.title.toUpperCase()}*
_${t.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`;t.elements.forEach(i=>{if(i.hideWhatsapp)return;if(i.tag==="setting-section"){s+=`
*--- ${i.title.toUpperCase()} ---*
`;return}const r=e.content.find(d=>d.fieldId===i.id);if(!r)return;const o=r.value,l=i.tag.replace("setting-","viewer-"),c=document.createElement(l);if(i.currency&&c.setAttribute("currency",i.currency),i.options&&c.setAttribute("options",i.options),i.isAutomatic&&c.setAttribute("is-automatic",""),i.columns&&(c.columns=i.columns),c.setAttribute("title",i.title),c.setAttribute("edit-value",typeof o=="object"?JSON.stringify(o):o),l==="viewer-table"&&i.columns&&(c.columns=i.columns,c.rows=Array.isArray(o)?o:[]),typeof c.getWhatsapp=="function"){const d=c.getWhatsapp();d&&d.trim()!==""&&(s+=d+`
`)}}),s+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(s).then(()=>alert(`📋 ¡Contenido copiado al portapapeles!
Listo para pegar en WhatsApp.`)).catch(()=>alert("Error al acceder al portapapeles."))}},An={handlers:{},currentDocId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(n){if(!n)return;`${n}`;let e=await H.getOne("doc",n);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&(e.isEncrypted,e.decryptionError,e.content),e.isEncrypted&&e.decryptionError){const s=await U.promptPassword("Acceso Seguro Requerido","Este documento está cifrado. Ingrese su Frase Maestra para visualizarlo:");if(!s)return this.handlers.onBack();try{if(`${s.length}`,await be.setMasterKey(s),e=await H.getOne("doc",n),e.decryptionError,e.content,e.decryptionError)return console.error("[VIEWER-DEBUG] ⛔ FALLO: El Storage devolvió error de descifrado nuevamente."),U.toast("Frase incorrecta. Acceso denegado.","danger"),this.handlers.onBack();U.toast("Documento descifrado con éxito","success")}catch(i){return console.error("[VIEWER-DEBUG] ❌ ERROR CRÍTICO durante el desbloqueo:",i),U.toast("Error del sistema al intentar desbloquear.","danger"),this.handlers.onBack()}}const t=await H.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this._renderContent(e,t,this.canvas)},async renderReadOnly(n,e){e.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let t=await H.getOne("doc",n);if(!t){e.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(t.isEncrypted&&t.decryptionError){e.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const s=await H.getOne("tpl",t.templateId);if(!s){e.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}e.innerHTML="";const i=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(t,s,e,i)},_renderContent(n,e,t,s=""){n.content&&typeof n.content=="object"&&!Array.isArray(n.content)&&(console.warn("[VIEWER] Normalizando 'doc.content' de Objeto a Arreglo."),n.content=Object.values(n.content)),e.elements.some(r=>r.tag==="setting-section")?(t.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(n,e,t,s)):(t.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(n,e,t))},_renderFlatView(n,e,t){n.content&&n.content.forEach(s=>{const i=e.elements.find(o=>o.id===s.fieldId);if(!i)return;const r=this._createViewerComponent(i,s);t.appendChild(r)})},_renderStructuredView(n,e,t,s=""){const i=[];let r={title:"Principal",elements:[]};e.elements.forEach(d=>{if(d.tag==="setting-section")(r.elements.length>0||r.title!=="Principal")&&i.push(r),r={title:d.title||"Sección",elements:[]};else{const h=n.content.find(p=>p.fieldId===d.id);h&&r.elements.push({def:d,data:h})}}),i.push(r);const o=`nav-viewer-${n.id}${s}`;let l=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${o}" role="tablist">`,c=`<div class="tab-content tab-content-custom" id="${o}Content">`;i.forEach((d,h)=>{const p=`view-sec-${h}-${n.id}${s}`,f=h===0;l+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${f?"active":""}" data-bs-toggle="tab" data-bs-target="#v-tab-${p}" type="button">
            ${d.title}
          </button>
        </li>`,c+=`
        <div class="tab-pane fade ${f?"show active":""}" id="v-tab-${p}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#v-coll-${p}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${d.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${p}" class="collapse d-md-block ${f?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),t.innerHTML=l+"</ul>"+c+"</div>",i.forEach((d,h)=>{const p=`view-sec-${h}-${n.id}${s}`,f=t.querySelector(`#v-coll-${p} .row`);d.elements.forEach(b=>{const I=this._createViewerComponent(b.def,b.data);f.appendChild(I)})})},_createViewerComponent(n,e){const t=n.tag.replace("setting-","viewer-"),s=document.createElement(t);return n.currency&&s.setAttribute("currency",n.currency),n.options&&s.setAttribute("options",n.options),n.isAutomatic&&s.setAttribute("is-automatic",""),s.setData&&s.setData({...e,value:e.value,title:n.title,spanEV:n.spanEV,columns:n.columns||[],currency:n.currency,options:n.options,isAutomatic:n.isAutomatic}),s},_renderHeaderActions(n){this.headerActions&&(this.headerActions.innerHTML=`
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
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(n.id),document.getElementById("btn-whatsapp").onclick=()=>fi.copyToWhatsApp(n.id),document.getElementById("print-v").onclick=e=>{e.preventDefault(),fi.print(n.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),fi.print(n.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),fi.print(n.id,"Facil Lectura")})}},un={etlConfig:{sources:[],rules:[]},fetchedData:{},templateSchema:{},_ruleTriggers:{},_reactiveQueue:new Set,_reactiveTimeout:null,_isExecutingReactive:!1,_eventsBound:!1,init(n,e=[]){n&&(this.etlConfig=n,this.fetchedData={},this.templateSchema={},Array.isArray(e)&&e.forEach(t=>{this.templateSchema[t.id]=t.tag,t.columns&&Array.isArray(t.columns)&&t.columns.forEach(s=>{this.templateSchema[s.id]=s.tag})}),this._buildReactiveDependencyTree(),this._bindReactiveEvents())},_buildReactiveDependencyTree(){this._ruleTriggers={};const n={};this.etlConfig.sources.forEach(t=>{n[t.id]=[];const s=/@\{([^}]+)\}/g;let i;const r=(t.url||"")+" "+(t.headers||"");for(;(i=s.exec(r))!==null;)n[t.id].push(i[1])}),this.etlConfig.rules.forEach((t,s)=>{if(t.trigger==="reactive"&&t.scriptCode){const i=c=>{this._ruleTriggers[c]||(this._ruleTriggers[c]=new Set),this._ruleTriggers[c].add(s)},r=/doc\.getValue\(\s*['"]([^'"]+)['"]\s*\)/g;let o;for(;(o=r.exec(t.scriptCode))!==null;)i(o[1]);this._extractRequiredSources(t.scriptCode).forEach(c=>{n[c]&&n[c].forEach(d=>i(d))})}}),console.groupCollapsed("⚡ [ETL] Árbol de Dependencias Reactivas Generado");const e=Object.keys(this._ruleTriggers).length;if(e!==0){`${e}`;for(const[t,s]of Object.entries(this._ruleTriggers)){const i=Array.from(s).map(r=>this.etlConfig.rules[r].name||`Rutina #${r}`);`${t}`}}console.groupEnd()},_bindReactiveEvents(){if(this._eventsBound)return;this._eventsBound=!0;const n=e=>{if(this._isExecutingReactive||e.target&&e.target.closest&&e.target.closest(".modal"))return;let t=e.target.closest("[field-id]");if(t||(t=e.target.closest("[id]")),!t)return;let s=t.getAttribute("field-id")||t.id;s=s.replace(/^(editor-|viewer-|setting-)/,"");const i=this._ruleTriggers[s];!i||i.size===0||(i.forEach(r=>this._reactiveQueue.add(r)),clearTimeout(this._reactiveTimeout),this._reactiveTimeout=setTimeout(async()=>{const r=Array.from(this._reactiveQueue);this._reactiveQueue.clear(),this._isExecutingReactive=!0,this.fetchedData={};for(const o of r)await this.runRule(o,!1,!0);this._isExecutingReactive=!1},800))};document.addEventListener("input",n),document.addEventListener("table-change",n)},_showNotification(n,e="primary",t=!1){let s=document.getElementById("etl-toast-container");s||(s=document.createElement("div"),s.id="etl-toast-container",s.className="toast-container position-fixed bottom-0 end-0 p-3",s.style.zIndex="1100",document.body.appendChild(s));const i=e==="success"?"text-bg-success":e==="error"?"text-bg-danger":`text-bg-${e}`,r=t?'<i class="fa-solid fa-circle-notch fa-spin me-2"></i>':e==="success"?'<i class="fa-solid fa-check-circle me-2"></i>':'<i class="fa-solid fa-triangle-exclamation me-2"></i>',o=document.createElement("div");return o.className=`toast align-items-center border-0 ${i} show mb-2 shadow`,o.setAttribute("role","alert"),o.innerHTML=`
      <div class="d-flex">
        <div class="toast-body fw-bold small d-flex align-items-center">${r} ${n}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.closest('.toast').remove()"></button>
      </div>
    `,s.appendChild(o),t||setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>o.remove(),300)},3e3),o},_buildDocAPI(){return{getValue:n=>{let e=document.querySelector(`[field-id="${n}"]`);if(e||(e=document.getElementById(n)),!e)return null;const t=this.templateSchema[n]||e.tagName.toLowerCase().replace(/^(editor|viewer)-/,"setting-"),s=(r,o)=>{if(o==="setting-currency"||o==="setting-number"||o==="setting-percentage"){const l=String(r??"0").replace(/[^0-9.-]/g,""),c=parseFloat(l);return isNaN(c)?0:c}if(o==="setting-date"){if(!r)return"";const l=new Date(r);return isNaN(l.getTime())?String(r).split("T")[0]:`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`}return r||""};if(t==="setting-table")try{let r=[],o=[];if(typeof e.getData=="function"){const c=e.getData();c&&c.value&&(r=c.value),c&&c.columns&&(o=c.columns)}else{const c=e.getAttribute("edit-value");c&&!c.startsWith("[object")&&(r=JSON.parse(c))}if(!Array.isArray(r))return[];const l={};return o.forEach(c=>{const d=c.title?c.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"_"):"";l[c.id]={titleKey:d}}),r.map(c=>{const d={};return Array.isArray(c)&&c.forEach(h=>{if(h&&h.fieldId){const p=l[h.fieldId]||{titleKey:""};let f=h.value;const b=this.templateSchema[h.fieldId];f=s(f,b),d[h.fieldId]=f,p.titleKey&&(d[p.titleKey]=f)}}),d})}catch(r){return console.error("Error al parsear tabla:",r),[]}const i=e.getAttribute("edit-value");return s(i,t)},setValue:(n,e)=>{let t=document.querySelector(`[field-id="${n}"]`);if(t||(t=document.getElementById(n)),!t)return;const s=e??"",i=this.templateSchema[n]||t.tagName.toLowerCase().replace(/^(editor|viewer)-/,"setting-");if(i==="setting-table"){let r=s;if(Array.isArray(s)&&s.length>0&&!Array.isArray(s[0])?r=s.map(o=>Object.entries(o).map(([l,c])=>({id:`editor_${Math.random().toString(36).substr(2,9)}`,fieldId:l,value:c!=null?typeof c=="object"?JSON.stringify(c):String(c):"",bold:!1,italic:!1,color:"black"}))):Array.isArray(s)||(r=[]),typeof t.setData=="function"&&typeof t.getData=="function"){const o=t.getData();o.value=r,t.setData(o)}else t.setAttribute("edit-value",JSON.stringify(r));t.dispatchEvent(new Event("input",{bubbles:!0}));return}if(i==="setting-url"){let r;if(typeof s=="object"&&s!==null)r={text:s.text||s.texto||s.titulo||s.nombre||"",url:s.url||s.enlace||s.link||""};else if(typeof s=="string")try{const l=JSON.parse(s);r={text:l.text||"",url:l.url||""}}catch(l){console.error("Error al parsear URL:",l),r={text:"Enlace",url:s}}else r={text:"",url:""};const o=JSON.stringify(r);if(typeof t.setData=="function"&&typeof t.getData=="function"){const l=t.getData();l.value=o,t.setData(l)}else t.setAttribute("edit-value",o);setTimeout(()=>{const l=t.querySelectorAll("input");if(l.length>0){let c=l[0],d=l.length>1?l[1]:null;l.forEach(h=>{h.getAttribute("type")==="url"&&(d=h)}),c&&(c.value=r.text,c.dispatchEvent(new Event("input",{bubbles:!0}))),d&&(d.value=r.url,d.dispatchEvent(new Event("input",{bubbles:!0})))}},50),t.dispatchEvent(new Event("input",{bubbles:!0}));return}if(typeof t.setCalculatedValue=="function")t.setCalculatedValue(s);else{const r=typeof s=="object"?JSON.stringify(s):String(s);t.setAttribute("edit-value",r);const o=t.querySelector("input, textarea, select");o&&(o.value=s),t.dispatchEvent(new Event("input",{bubbles:!0}))}}}},async runRule(n,e=!0,t=!1){e&&(this.fetchedData={});const s=this.etlConfig.rules[n];if(!s||!s.scriptCode)return;let i=null;t||(i=this._showNotification(`Ejecutando: ${s.name||"Sin nombre"}...`,"primary",!0));try{const r=this._extractRequiredSources(s.scriptCode),o=await this._fetchSources(r),l=this._buildDocAPI();let c=s.scriptCode;!c.includes("return ")&&!c.includes("doc.setValue")&&(c=`return (${c});`);const d=this._compileScript(c),h=Object.getPrototypeOf(async function(){}).constructor;await new h("doc","sourcesData",d)(l,o),t||(i.remove(),this._showNotification(`¡${s.name} finalizada!`,"success"))}catch(r){!t&&i&&i.remove(),t||this._showNotification(`Error en rutina: ${r.message}`,"error"),console.error("❌ [ETL EXECUTOR] Error al ejecutar rutina:",r)}},async runAutoRules(){this.fetchedData={};for(let n=0;n<this.etlConfig.rules.length;n++)this.etlConfig.rules[n].trigger==="auto"&&await this.runRule(n,!1,!1)},_extractRequiredSources(n){const e=/@\{([^}]+)\}/g,t=new Set;let s;for(;(s=e.exec(n))!==null;)t.add(s[1]);return Array.from(t)},_compileScript(n){return n.replace(/@\{([^}]+)\}/g,'sourcesData["$1"]')},async _fetchSources(n){const e={},t=(s,i=!1)=>s?s.replace(/@\{([^}]+)\}/g,(r,o)=>{let l=document.querySelector(`[field-id="${o}"]`);l||(l=document.getElementById(o));let c="";if(l){c=l.getAttribute("edit-value")||"";const d=l.querySelector("input, select, textarea");d&&d.value&&(c=d.value)}return i?encodeURIComponent(c):c}):"";for(const s of n){if(this.fetchedData[s]){e[s]=this.fetchedData[s];continue}const i=this.etlConfig.sources.find(c=>c.id===s);if(!i)throw new Error(`La fuente '${s}' no está configurada.`);const r=t(i.url,!0);let o={method:i.method||"GET"};if(i.headers)try{o.headers=JSON.parse(t(i.headers,!1))}catch(c){console.error(`Error al parsear headers de la fuente '${s}':`,c),o.headers={}}const l=await fetch(r,o);if(!l.ok)throw new Error(`HTTP ${l.status} al llamar a ${s}`);if(i.type==="csv"){const c=await l.text();e[s]=this._parseCSV(c)}else e[s]=await l.json();this.fetchedData[s]=e[s]}return e}},oo={handlers:{},currentDocId:null,currentTplId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(n){var s,i;const e=await H.getOne("tpl",n);if(!e)return alert("Error: La plantilla seleccionada no existe."),this.handlers.onBack();if(e.encrypted&&!H._masterKey){const r=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!r)return this.handlers.onBack();if(!await H.verifyMasterPhrase(r))return alert("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla."),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=n,this.titleInput.value="",this.titleInput.readOnly=!1;const t=document.getElementById("doc-template-selector");t&&(t.style.display="none"),await this.renderCanvas(n,[]),this.setupSaveButton("Guardar Documento"),e.etl&&(((s=e.etl.sources)==null?void 0:s.length)>0||((i=e.etl.rules)==null?void 0:i.length)>0)&&(un.init(e.etl,e.elements),await un.runAutoRules(),this.setupEtlButtons(e.etl))},async loadForEditing(n){var s,i;const e=await H.getOne("doc",n);if(!e)return;const t=await H.getOne("tpl",e.templateId);this.currentDocId=n,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"),t&&t.etl&&(((s=t.etl.sources)==null?void 0:s.length)>0||((i=t.etl.rules)==null?void 0:i.length)>0)&&(un.init(t.etl,t.elements),await un.runAutoRules(),this.setupEtlButtons(t.etl))},setupEtlButtons(n){if(!n||!n.rules||n.rules.length===0)return;const e=n.rules.map((s,i)=>({...s,originalIndex:i})).filter(s=>s.trigger==="manual");if(e.length===0)return;const t=document.createElement("div");t.className="dropdown d-inline-block me-2",t.innerHTML=`
        <button class="btn btn-success dropdown-toggle shadow-sm fw-bold" type="button" data-bs-toggle="dropdown">
            <i class="fa-solid fa-cloud-arrow-down me-1"></i> Obtener Datos
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow">
            ${e.map(s=>`
              <li>
                <a class="dropdown-item btn-run-rule py-2" href="#" data-index="${s.originalIndex}">
                  <i class="fa-solid fa-bolt text-warning me-2"></i>${s.name||"Rutina"}
                </a>
              </li>
            `).join("")}
        </ul>
    `,this.headerActions.prepend(t),t.querySelectorAll(".btn-run-rule").forEach(s=>{s.onclick=async i=>{i.preventDefault();const r=s.getAttribute("data-index"),o=s.querySelector("i"),l=o.className;o.className="fa-solid fa-spinner fa-spin text-success me-2",await un.runRule(r),o.className=l}})},async renderCanvas(n,e){const t=await H.getOne("tpl",n);if(!t)return;this.canvas.innerHTML="",t.elements.filter(r=>r.tag==="setting-section").length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(t.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),t.elements.forEach(r=>{const o=this._createComponent(r,e);this.canvas.appendChild(o)}))},_renderStructuredUI(n,e){const t=[];let s={title:"Principal",elements:[]};n.forEach(l=>{l.tag==="setting-section"?((s.elements.length>0||s.title!=="Principal")&&t.push(s),s={title:l.title||"Sección",elements:[]}):s.elements.push(l)}),t.push(s);const i=`nav-tabs-${this.currentTplId}`;let r=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${i}" role="tablist">`,o=`<div class="tab-content tab-content-custom" id="${i}Content">`;t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=c===0;r+=`
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
        </div>`}),this.canvas.innerHTML=r+"</ul>"+o+"</div>",t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=this.canvas.querySelector(`#collapse-${d} .row`);l.elements.forEach(p=>{const f=this._createComponent(p,e);h.appendChild(f)})})},_createComponent(n,e){const t=n.tag.replace("setting-","editor-"),s=document.createElement(t);s.setAttribute("field-id",n.id),n.isAutomatic&&s.setAttribute("is-automatic",""),(n.hideEdit===!0||n.hideEdit==="true"||n.hideEdit===""||n["hide-edit"]===!0||n["hide-edit"]==="true"||n["hide-edit"]==="")&&s.classList.add("d-none");const r=e.find(c=>c.fieldId===n.id),o=r?r.value:"",l={id:n.id,title:n.title,spanEV:n.spanEV||12,options:n.options,value:o,bold:r?r.bold:!1,italic:r?r.italic:!1,color:r?r.color:"black",columns:n.columns,currency:n.currency,formula:n.formula,prependRows:n.prependRows,apiUrl:n.apiUrl,apiPath:n.apiPath,apiConfig:n.apiConfig,isAutomatic:n.isAutomatic};return s.setData&&s.setData(l),s},setupSaveButton(n){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary shadow-sm"><i class="fa-solid fa-save"></i> ${n}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const n=document.getElementById("btn-save-document"),e=this.titleInput.value.trim();if(!e){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert("⚠️ Imposible Guardar: El documento requiere un Título.");return}const t=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{const s=this.currentDocId||`doc_${Date.now()}`,i=await H.getOne("tpl",this.currentTplId),o=Array.from(this.canvas.querySelectorAll("[field-id]")).filter(h=>!h.parentElement.closest("editor-table")),l=[];let c=!0;if(o.forEach(h=>{typeof h.validate=="function"&&!h.validate()&&(c=!1),typeof h.getData=="function"&&l.push(h.getData())}),!c)throw new Error("Revise los campos marcados en rojo.");const d={id:s,title:e,templateId:this.currentTplId,templateTitle:i?i.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:l,isEncrypted:i&&i.encrypted||!1};await H.save("doc",d),this.handlers.onSave()}catch(s){alert("Error al guardar: "+s.message),n&&(n.disabled=!1,n.innerHTML=t)}}},Cs={init(){dn.init({onViewDocument:async n=>{dn.hide(),this.showEditorView(),await An.render(n)},onNavigateToDesigner:()=>{const n=document.getElementById("nav-designer");n?n.click():alert("Navegue al diseñador para crear una plantilla.")}}),An.init({onEdit:async n=>{await oo.loadForEditing(n),await this._checkAndRenderRelatedDocs(n,!1)},onBack:()=>{this.showListView()}}),oo.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),dn.render()},async createFromTemplate(n){dn.hide(),this.showEditorView(),await oo.loadForCreation(n),await this._checkAndRenderRelatedDocs(n,!0)},async _checkAndRenderRelatedDocs(n,e){let t;if(e)t=await H.getOne("tpl",n);else{const s=await H.getOne("doc",n);s&&(t=await H.getOne("tpl",s.templateId))}if(t&&t.relatedDocIds){const s=t.relatedDocIds.split(",").map(i=>i.trim()).filter(i=>i);s.length>0&&this._renderRelatedBar(s)}},async _renderRelatedBar(n){this._clearRelatedBar();const e=document.createElement("div");e.id="related-docs-wrapper",e.className="no-print",e.style.position="fixed",e.style.bottom="20px",e.style.left="20px",e.style.zIndex="1050",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";const t=document.createElement("button");t.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",t.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${n.length}</span>
    `,t.title="Ver documentos relacionados";const s=document.createElement("div");s.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",s.style.position="absolute",s.style.minWidth="250px",s.style.maxWidth="300px",s.style.maxHeight="300px",s.style.overflowY="auto",s.style.transition="all 0.2s ease";const i=document.createElement("div");i.className="d-flex flex-column gap-1";let r=0;for(const o of n){const l=await H.getOne("doc",o);if(l){r++;const c=document.createElement("button");c.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",c.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,c.title=l.title,c.onclick=()=>{this._toggleDrawer(s,t,!1);const d=document.getElementById("modal-related-doc"),h=document.getElementById("modal-related-body");new bootstrap.Modal(d).show(),An.renderReadOnly(l.id,h)},i.appendChild(c)}}s.appendChild(i),r!==0&&(t.onclick=o=>{o.stopPropagation(),s.classList.contains("d-none")?(this._positionDrawer(e,s),s.classList.remove("d-none"),t.classList.remove("rounded-pill"),t.classList.add("rounded-start")):this._toggleDrawer(s,t,!1)},e.appendChild(s),e.appendChild(t),document.body.appendChild(e))},_toggleDrawer(n,e,t){t?n.classList.remove("d-none"):(n.classList.add("d-none"),e.classList.add("rounded-pill"),e.classList.remove("rounded-start"))},_positionDrawer(n,e){const t=n.getBoundingClientRect(),s=260,r=window.innerWidth-t.right;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",r>s?(e.style.left="100%",e.style.bottom="0",e.style.marginLeft="10px"):(e.style.bottom="100%",e.style.left="0",e.style.marginBottom="10px")},_clearRelatedBar(){const n=document.getElementById("related-docs-wrapper");n&&n.remove();const e=document.getElementById("related-docs-bar");e&&e.remove()},showListView(){this._clearRelatedBar();const n=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");n&&(n.style.display="block"),e&&(e.style.display="none"),dn.render()},showEditorView(){this._clearRelatedBar();const n=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");n&&(n.style.display="none"),e&&(e.style.display="block")}},cd={async exportData(){try{const n=await H.getAll("tpl"),e=await H.getAll("doc"),t={templates:n,documents:e,exportDate:new Date().toISOString(),version:"2.0 (Firebase)"},s=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(s),r=document.createElement("a");r.href=i,r.download=`respaldo_mg_cloud_${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(i),U.toast("Respaldo exportado correctamente","success")}catch(n){console.error("Error exportando:",n),U.toast("Error al generar el respaldo: "+n.message,"danger")}},async importData(n){const e=new FileReader;e.onload=async t=>{try{const s=JSON.parse(t.target.result);if(!s.templates&&!s.documents&&!s.tpl&&!s.doc)throw new Error("Formato de archivo no reconocido.");const i=s.templates||[],r=s.documents||[];let o=0;for(const c of i)c.updatedAt||(c.updatedAt=new Date().toISOString()),await H.save("tpl",c),o++;let l=0;for(const c of r)await H.save("doc",c),l++;U.toast(`Proceso finalizado. Plantillas: ${o} | Documentos: ${l}. Recargando...`,"success"),setTimeout(()=>{location.reload()},2500)}catch(s){console.error(s),U.toast("Error crítico al importar: "+s.message,"danger")}},e.readAsText(n)}},Rs={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
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
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const s=document.getElementById("setup-master-phrase").value.trim(),i=document.getElementById("setup-error");if(s.length<15){i.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",i.style.display="block";return}try{await be.setMasterKey(s);const r=await be.encryptData({check:"VERIFIED"});await H.saveSecurityVerifier(r),t.hide(),e.remove(),U.toast("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.","success")}catch(r){console.error("Error al inicializar seguridad:",r),i.textContent="Error al inicializar el motor de seguridad.",i.style.display="block"}}},renderChangePhraseUI(n){const e=`
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
    `;n.innerHTML=e,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const n=document.getElementById("btn-reencrypt");n&&(n.onclick=async()=>{const e=document.getElementById("old-phrase").value.trim(),t=document.getElementById("new-phrase").value.trim();if(!e||t.length<15)return U.toast("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.","warning");if(await U.confirm("Confirmar Cambio","¿Estás seguro de que deseas cambiar tu Frase Maestra? Este proceso actualizará tus datos de seguridad."))try{n.disabled=!0,n.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await H.changeMasterPhrase(e,t),U.toast("¡Éxito! Frase actualizada. Recargando...","success"),setTimeout(()=>location.reload(),2e3)}catch(i){console.error(i),U.toast("Error: "+i.message,"danger"),n.disabled=!1,n.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const n=document.getElementById("reset-confirm-input"),e=document.getElementById("btn-execute-reset");!n||!e||(n.addEventListener("input",t=>{t.target.value==="ELIMINAR"?e.disabled=!1:e.disabled=!0}),e.onclick=async()=>{if(await U.confirm("ÚLTIMA ADVERTENCIA","Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await H.hardResetSecurity(),U.toast("Sistema de seguridad reiniciado. La página se recargará...","success"),setTimeout(()=>window.location.reload(),3e3)}catch(s){console.error(s),U.toast("Error al reiniciar seguridad: "+s.message,"danger"),e.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},Jh={getCurrentUser(){return Pe.currentUser},onAuthStateChanged(n){return Vh(Pe,n)},async login(n,e){try{const s=(await Dh(Pe,n,e)).user;if(!s.emailVerified)throw await In(Pe),new Error("Debes verificar tu correo electrónico antes de entrar.");return s}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(n,e){try{const s=(await kh(Pe,n,e)).user;return await Mh(s),await zi(Me(ve,"users",s.uid),{email:n,createdAt:new Date().toISOString(),emailVerified:!1}),s}catch(t){throw new Error("Error en registro: "+t.message)}},async logout(){return In(Pe)}},ze={async saveUserConfig(n,e){const t=Me(ve,"users",n);await jc(t,{githubConfig:e}).catch(async s=>{throw console.error("Error guardando config github",s),s})},async getUserConfig(n){const e=Me(ve,"users",n),t=await Ti(e);return t.exists()&&t.data().githubConfig||null},async addFileRecord(n){const e=qi(ve,"github_files");return(await qv(e,n)).id},async listFiles(n){const e=qi(ve,"github_files"),t=Lo(e,wi("userId","==",n)),s=await ko(t),i=[];return s.forEach(r=>i.push({id:r.id,...r.data()})),i},async deleteFileRecord(n){await Ii(Me(ve,"github_files",n))},async updateLastUsedSettings(n,e,t){const s=Me(ve,"users",n);await jc(s,{"githubConfig.lastUsedRepo":e,"githubConfig.lastUsedFolder":t}).catch(i=>console.error("Error actualizando última config",i))}},Be={async validateCredentials(n,e){if(!(await fetch("https://api.github.com/user",{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales inválidas o token sin permisos.");return!0},async getUserRepos(n){const t=await fetch("https://api.github.com/user/repos?per_page=100&sort=updated",{headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github.v3+json"}});if(!t.ok)throw new Error("No se pudieron cargar los repositorios de GitHub.");const i=(await t.json()).map(o=>({name:o.name,isPrivate:o.private,hasPages:o.has_pages,owner:o.owner.login})),r=i.map(async o=>{if(o.hasPages&&!o.isPrivate)try{const l=await fetch(`https://api.github.com/repos/${o.owner}/${o.name}/pages`,{headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github.v3+json"}});if(l.ok){const c=await l.json();o.pagesUrl=c.html_url}}catch{console.warn(`No se pudo obtener el site de ${o.name}`)}});return await Promise.all(r),i},async uploadFile(n,e,t,s,i){const r=await this._toBase64(e),o=t.replace(/^\//,"").replace(/\/$/,""),l=o?`${o}/${s}`:s,c=`https://api.github.com/repos/${n.githubUser}/${i}/contents/${l}`,d={message:`Subido desde DocEngine: ${s}`,content:r},h=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${n.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(d)});if(!h.ok){const p=await h.json();throw new Error(p.message||"Error al subir archivo a GitHub")}return await h.json()},async deleteFile(n,e,t,s){const i=`https://api.github.com/repos/${n.githubUser}/${s}/contents/${e}`,r={message:"Eliminado desde DocEngine",sha:t};if(!(await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${n.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(n){return new Promise((e,t)=>{const s=new FileReader;s.readAsDataURL(n),s.onload=()=>e(s.result.split(",")[1]),s.onerror=i=>t(i)})},async fetchSecureFile(n,e,t){const s=`https://api.github.com/repos/${n.githubUser}/${t}/contents/${e}`,i=await fetch(s,{headers:{Authorization:`Bearer ${n.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!i.ok)throw new Error(`Error descargando archivo (${i.status})`);return await i.blob()}},Qh={init(){this.container=document.getElementById("view-settings"),this.render()},render(){const n=document.getElementById("theme-link").getAttribute("href"),e=`./manual.html?theme=${encodeURIComponent(n)}`;this.container.innerHTML=`
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
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader();const t=document.getElementById("security-config-wrapper");Rs&&Rs.renderChangePhraseUI&&Rs.renderChangePhraseUI(t),this.renderGithubSettings("github-settings-wrapper")},_initThemeLoader(){const n=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(t=>t.json()).then(t=>{const s=t.themes;n.innerHTML="";const i=document.createElement("option");i.value="default",i.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(i.selected=!0),n.append(i),s.forEach((r,o)=>{const l=document.createElement("option");l.value=o,l.textContent=r.name+(r.description?` (${r.description})`:"");const c=r.cssCdn||r.css;e===c&&(l.selected=!0),n.append(l)}),n.addEventListener("change",r=>{let o="";if(r.target.value==="default")o="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=s[r.target.value];o=l.cssCdn||l.css}this._applyThemeWithPreload(o,n)})}).catch(t=>{console.error("Error cargando temas:",t),n.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(n,e){e.options[e.selectedIndex].text,e.disabled=!0;const t=document.createElement("div");t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,t.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"});const s=document.createElement("link");s.rel="stylesheet",s.href=n,s.onload=()=>{document.getElementById("theme-link").setAttribute("href",n),localStorage.setItem("doc_engine_theme_url",n),setTimeout(()=>{e.disabled=!1,t.style.opacity="0",setTimeout(()=>{t.remove(),s.remove()},300)},200)},s.onerror=()=>{U.toast("Error al descargar el tema seleccionado.","danger"),e.disabled=!1,t.remove(),s.remove()},document.head.appendChild(s)},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),U.toast("Preferencias guardadas.","success")},document.getElementById("btn-export").onclick=()=>cd.exportData(),document.getElementById("import-file").onchange=e=>{e.target.files.length>0&&cd.importData(e.target.files[0])};const n=document.getElementById("btn-change-pass");n.onclick=async()=>{const e=document.getElementById("current-pass").value,t=document.getElementById("new-pass").value;if(!e||!t)return U.toast("Complete ambos campos.","warning");if(!Ne.validatePassword(t))return U.toast("La contraseña no cumple requisitos (8+ chars, Mayús, Num).","warning");const s=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const i=Pe.currentUser;if(!i)throw new Error("Sin sesión.");const r=hs.credential(i.email,e);await H_(i,r),await G_(i,t),U.toast("Contraseña actualizada correctamente.","success"),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(i){console.error(i),U.toast(i.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+i.message,"danger")}finally{n.disabled=!1,n.innerHTML=s}}},_loadCurrentPrefs(){const n=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=n||"35"},renderGithubSettings(n){const e=document.getElementById(n);if(!e)return;const t=`
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
    `,s=document.createElement("div");s.innerHTML=t,e.appendChild(s);let i=null;const r=Jh.getCurrentUser();r&&ze.getUserConfig(r.uid).then(o=>{o&&(document.getElementById("set-gh-user").value=o.githubUser||"",document.getElementById("set-gh-token").value=o.githubToken||"",i=o.lastUsedRepo||null,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))}),document.getElementById("github-config-form").addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("gh-config-msg"),c=o.target.querySelector('button[type="submit"]'),d=document.getElementById("set-gh-user").value.trim(),h=document.getElementById("set-gh-token").value.trim();try{c.disabled=!0,l.innerHTML='<span class="text-info">Verificando cuenta...</span>',await Be.validateCredentials(d,h),await ze.saveUserConfig(r.uid,{githubUser:d,githubToken:h,lastUsedRepo:i}),l.innerHTML='<span class="text-success fw-bold">¡Conexión Exitosa! Recarga la página para ver el menú.</span>',window.location.reload()}catch(p){l.innerHTML=`<span class="text-danger">Error: ${p.message}</span>`}finally{c.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{await U.confirm("Desvincular Cuenta","¿Estás seguro de que deseas desvincular tu cuenta de GitHub?")&&(await ze.saveUserConfig(r.uid,null),U.toast("Cuenta desvinculada exitosamente. Recargando...","info"),setTimeout(()=>window.location.reload(),1500))})}},xt={setupListeners(){var n,e,t;(n=document.getElementById("ghPdfModal"))==null||n.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-pdf");s.src&&(URL.revokeObjectURL(s.src.split("#")[0]),s.src="")}),(e=document.getElementById("ghVideoModal"))==null||e.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-video");s.pause(),s.src&&(URL.revokeObjectURL(s.src),s.src="")}),(t=document.getElementById("gh-close-audio"))==null||t.addEventListener("click",()=>{const s=document.getElementById("gh-audio-player");s.pause(),s.src="",document.getElementById("gh-audio-container").classList.add("d-none")})},async viewImage(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghImageModal"),o=document.getElementById("gh-preview-img"),l=document.getElementById("gh-loading-img");document.getElementById("ghImageModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Be.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(d),o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){U.toast("Error cargando imagen: "+d.message,"danger"),c.hide()}},async viewVideo(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghVideoModal"),o=document.getElementById("gh-preview-video"),l=document.getElementById("gh-loading-video");document.getElementById("ghVideoModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Be.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(d),l.classList.add("d-none"),o.classList.remove("d-none"),o.play().catch(h=>console.log("Autoplay bloqueado",h))}catch(d){U.toast("Error cargando video: "+d.message,"danger"),c.hide()}},async viewPdf(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghPdfModal"),o=document.getElementById("gh-preview-pdf"),l=document.getElementById("gh-loading-pdf");document.getElementById("ghPdfModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Be.fetchSecureFile(n,t,i),h=new Blob([d],{type:"application/pdf"});o.src=URL.createObjectURL(h)+"#toolbar=0&navpanes=0",o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){U.toast("Error cargando PDF: "+d.message,"danger"),c.hide()}},async playAudio(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("gh-audio-container"),o=document.getElementById("gh-audio-player"),l=document.getElementById("gh-loading-audio");r.classList.remove("d-none"),document.getElementById("gh-audio-title").textContent="Cargando "+s+"...",l.classList.remove("d-none"),o.classList.add("d-none"),o.pause();try{const c=await Be.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(c),o.classList.remove("d-none"),l.classList.add("d-none"),document.getElementById("gh-audio-title").textContent=s,o.play().catch(d=>console.log("Autoplay bloqueado",d))}catch(c){U.toast("Error cargando audio: "+c.message,"danger"),r.classList.add("d-none")}},async downloadFile(n,e,t){const{path:s,name:i,repo:r}=e,o=t.innerHTML;t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await Be.fetchSecureFile(n,s,r),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=i,document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(l){U.toast("Error en la descarga: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=o}},async openPdfMobile(n,e,t){const{path:s,repo:i}=e,r=t.innerHTML,o=window.open("","_blank");o&&o.document.write("<h3 style='text-align: center; margin-top: 20%;'>Cargando...</h3>"),t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await Be.fetchSecureFile(n,s,i),c=new Blob([l],{type:"application/pdf"}),d=URL.createObjectURL(c);o?o.location.href=d:window.location.href=d,setTimeout(()=>URL.revokeObjectURL(d),6e4)}catch(l){o&&o.close(),U.toast("Error abriendo el documento: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=r}},copyLink(n){navigator.clipboard.writeText(n).then(()=>U.toast("Enlace público copiado al portapapeles.","success")).catch(()=>U.toast("No se pudo copiar el enlace.","danger"))}},Ye={getBaseHTML(){return`
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
    `},injectStyles(){const n=document.createElement("style");n.innerHTML=".cursor-pointer { cursor: pointer; user-select: none; }",document.head.appendChild(n)},setupFilterListeners(n){var e,t;(e=document.getElementById("gh-filter-repo"))==null||e.addEventListener("change",s=>n.tableEngine.setFilter("repoName",s.target.value)),(t=document.getElementById("gh-filter-folder"))==null||t.addEventListener("change",s=>n.tableEngine.setFilter("folder",s.target.value))},buildFilters(n){const e=document.getElementById("gh-filter-repo"),t=document.getElementById("gh-filter-folder");if(!e||!t)return;const s=[...new Set(n.currentFiles.map(l=>l.repoName))].filter(Boolean),i=[...new Set(n.currentFiles.map(l=>l.folder))].filter(Boolean),r=e.value,o=t.value;s.length>1?(e.innerHTML='<option value="">📁 Todos los Repos</option>'+s.map(l=>`<option value="${l}">${l}</option>`).join(""),e.value=s.includes(r)?r:"",e.classList.remove("d-none")):(e.classList.add("d-none"),e.value=""),i.length>1?(t.innerHTML='<option value="">📂 Todas las Carpetas</option>'+i.map(l=>`<option value="${l}">${l}</option>`).join(""),t.value=i.includes(o)?o:"",t.classList.remove("d-none")):(t.classList.add("d-none"),t.value="")},getDummyRowHTML(){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border px-2 py-1">Repo / Folder</span></td>
        <td class="fw-bold text-nowrap"><i class="fa-regular fa-image me-2"></i> Test File</td>
        <td class="text-end"><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `},renderRowHTML(n,e){const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=n.fileName.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","webp","svg"].includes(s),r=["mp3","wav","ogg","m4a"].includes(s),o=s==="pdf",l=["mp4","webm","ogg","mov"].includes(s);let c=i?'<i class="fa-regular fa-image text-primary me-2"></i>':r?'<i class="fa-solid fa-music text-info me-2"></i>':o?'<i class="fa-solid fa-file-pdf text-danger me-2"></i>':l?'<i class="fa-solid fa-video text-success me-2"></i>':`<span class="text-muted small fw-normal me-2">(${s})</span>`;const d=n.isPrivate?"fa-lock text-danger":"fa-globe text-success",h=n.expiresAt?'<span class="badge bg-warning text-dark ms-2"><i class="fa-regular fa-clock"></i> Temporal</span>':"",p=`data-id="${n.id}" data-sha="${n.sha}" data-path="${n.path}" data-title="${n.title}" data-repo="${n.repoName}" data-folder="${n.folder}" data-filename="${n.fileName}"`;let f="";if(i?f+=`<button class="btn btn-sm btn-outline-primary btn-view-img me-1" ${p}><i class="fa-regular fa-eye"></i></button>`:r?f+=`<button class="btn btn-sm btn-outline-info btn-play-audio me-1" ${p}><i class="fa-solid fa-play"></i></button>`:o?f+=`<button class="btn btn-sm btn-outline-danger ${t?"btn-open-pdf-mobile":"btn-view-pdf"} me-1" ${p}><i class="fa-solid ${t?"fa-arrow-up-right-from-square":"fa-file-pdf"}"></i></button>`:l&&(f+=`<button class="btn btn-sm btn-outline-success btn-play-video me-1" ${p}><i class="fa-solid fa-video"></i></button>`),f+=`<button class="btn btn-sm btn-outline-warning btn-copy-trigger me-1" ${p} title="Copiar Archivo"><i class="fa-solid fa-copy"></i></button>`,f+=`<button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" ${p} data-name="${n.originalName||n.fileName}"><i class="fa-solid fa-download"></i></button>`,!n.isPrivate){const b=e.repoPages[n.repoName],I=b?(b.endsWith("/")?b:b+"/")+(n.path.startsWith("/")?n.path.substring(1):n.path):n.htmlUrl;f+=`<button class="btn btn-sm ${b?"btn-outline-success":"btn-outline-secondary"} btn-copy-link me-1" data-url="${I}"><i class="fa-solid ${b?"fa-link":"fa-github"}"></i></button>`}return f+=`<button class="btn btn-sm btn-danger btn-delete-gh" ${p}><i class="fa-solid fa-trash"></i></button>`,`
      <tr>
        <td>
           <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
             <i class="fa-solid ${d} me-1"></i> ${n.repoName} <i class="fa-solid fa-chevron-right mx-1" style="font-size:0.7em;"></i> ${n.folder}
           </span>
        </td>
        <td class="fw-bold text-nowrap">
          ${c}${n.title} ${h}
        </td>
        <td class="text-end text-nowrap">
          ${f}
        </td>
      </tr>
    `},attachTableListeners(n,e,t){n.querySelectorAll(".btn-copy-trigger").forEach(s=>{s.addEventListener("click",()=>{document.getElementById("gh-copy-orig-path").value=s.dataset.path,document.getElementById("gh-copy-orig-repo").value=s.dataset.repo,document.getElementById("gh-copy-orig-filename").value=s.dataset.filename,document.getElementById("gh-copy-folder").value=s.dataset.folder,document.getElementById("gh-copy-new-title").value=s.dataset.title+" (Copia)",document.getElementById("gh-copy-repo").value=s.dataset.repo,new bootstrap.Modal(document.getElementById("ghCopyModal")).show()})}),n.querySelectorAll(".btn-view-img").forEach(s=>s.addEventListener("click",()=>xt.viewImage(e.config,s.dataset))),n.querySelectorAll(".btn-view-pdf").forEach(s=>s.addEventListener("click",()=>xt.viewPdf(e.config,s.dataset))),n.querySelectorAll(".btn-play-audio").forEach(s=>s.addEventListener("click",()=>xt.playAudio(e.config,s.dataset))),n.querySelectorAll(".btn-download-gh").forEach(s=>s.addEventListener("click",()=>xt.downloadFile(e.config,s.dataset,s))),n.querySelectorAll(".btn-open-pdf-mobile").forEach(s=>s.addEventListener("click",()=>xt.openPdfMobile(e.config,s.dataset,s))),n.querySelectorAll(".btn-copy-link").forEach(s=>s.addEventListener("click",()=>xt.copyLink(s.dataset.url))),n.querySelectorAll(".btn-delete-gh").forEach(s=>s.addEventListener("click",()=>Ye.handleDelete(t,s.dataset,e))),n.querySelectorAll(".btn-play-video").forEach(s=>s.addEventListener("click",()=>xt.viewVideo(e.config,s.dataset)))},async handleCopy(n,e,t){var x;n.preventDefault();const s=document.getElementById("gh-btn-copy"),i=document.getElementById("gh-copy-orig-path").value,r=document.getElementById("gh-copy-orig-repo").value,o=document.getElementById("gh-copy-orig-filename").value,l=document.getElementById("gh-copy-repo"),c=l.value,d=l.options[l.selectedIndex].dataset.isPrivate==="true",h=document.getElementById("gh-copy-folder").value.trim()||"root",p=document.getElementById("gh-copy-new-title").value.trim(),f=parseInt(document.getElementById("gh-copy-timer").value),b=o.split(".").pop(),I=p.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+b;try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Copiando...';const C=await Be.fetchSecureFile(t.config,i,r),k=await Be.uploadFile(t.config,C,h,I,c),N=f>0?Date.now()+f*60*1e3:null;await ze.addFileRecord({userId:e.uid,title:p,folder:h,fileName:I,originalName:o,path:k.content.path,sha:k.content.sha,htmlUrl:k.content.html_url,downloadUrl:k.content.download_url,createdAt:new Date().toISOString(),repoName:c,isPrivate:d,expiresAt:N}),(x=bootstrap.Modal.getInstance(document.getElementById("ghCopyModal")))==null||x.hide(),U.toast(`Archivo copiado correctamente${N?" (Con autodestrucción)":""}.`,"success"),t.loadFilesList(e.uid)}catch(C){U.toast("Error en la copia: "+C.message,"danger")}finally{s.disabled=!1,s.innerHTML="Confirmar Copia"}},async handleDelete(n,e,t){if(await U.confirm("Eliminar Archivo","¿Estás seguro de eliminar este archivo permanentemente?"))try{await Be.deleteFile(t.config,e.path,e.sha,e.repo),await ze.deleteFileRecord(e.id),t.loadFilesList(n),U.toast("Archivo eliminado.","success")}catch(i){U.toast("Error eliminando: "+i.message,"danger")}},async handleSilentDelete(n,e){try{await Be.deleteFile(e.config,n.path,n.sha,n.repoName),await ze.deleteFileRecord(n.id)}catch(t){console.error(`Error al eliminar archivo expirado: ${n.fileName}`,t)}}},dd={handleFileSelection(n){const e=n.target.files,t=document.getElementById("gh-batch-preview-container"),s=document.getElementById("gh-batch-preview-list");if(s.innerHTML="",e.length===0){t.classList.add("d-none");return}t.classList.remove("d-none"),Array.from(e).forEach((i,r)=>{const o=i.name.substring(0,i.name.lastIndexOf("."))||i.name,l=document.createElement("div");l.className="list-group-item bg-light p-2",l.innerHTML=`
        <div class="d-flex align-items-center mb-1">
          <i class="fa-regular fa-file me-2 text-secondary"></i>
          <span class="small fw-bold text-truncate" style="max-width: 70%;">${i.name}</span>
          <span class="badge bg-secondary ms-auto">${(i.size/(1024*1024)).toFixed(2)} MB</span>
        </div>
        <input type="text" class="form-control form-control-sm gh-batch-title" data-index="${r}" value="${o}" required placeholder="Título para este archivo">
      `,s.appendChild(l)})},async processSingleFileUpload(n,e,t,s,i,r,o){const l=e.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+n.name.split(".").pop(),c=await Be.uploadFile(o.config,n,t,l,s);await ze.addFileRecord({userId:r.uid,title:e,folder:t,fileName:l,originalName:n.name,path:c.content.path,sha:c.content.sha,htmlUrl:c.content.html_url,downloadUrl:c.content.download_url,createdAt:new Date().toISOString(),repoName:s,isPrivate:i})},async handleUpload(n,e,t){var I;n.preventDefault();const s=document.getElementById("gh-btn-upload"),i=document.getElementById("gh-repo"),r=i.value,o=i.options[i.selectedIndex].dataset.isPrivate==="true",l=document.getElementById("gh-folder").value.trim()||"root",c=document.getElementById("gh-file"),d=c.files;if(d.length===0||!r)return;const h=15;for(let x of d)if(x.size>h*1024*1024){U.toast(`El archivo ${x.name} supera el límite de ${h} MB.`,"warning");return}const p=document.querySelectorAll(".gh-batch-title"),f=document.getElementById("gh-upload-progress-container"),b=document.getElementById("gh-upload-progress-bar");try{s.disabled=!0,f.classList.remove("d-none"),b.style.width="0%",b.textContent="0%",b.classList.remove("bg-danger"),b.classList.add("bg-success");let x=0;const C=d.length;for(let k=0;k<C;k++){const N=d[k],G=p[k].value.trim()||N.name;s.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Subiendo (${k+1}/${C})...`,await this.processSingleFileUpload(N,G,l,r,o,e,t),x++;const se=Math.round(x/C*100);b.style.width=`${se}%`,b.textContent=`${se}%`}await ze.updateLastUsedSettings(e.uid,r,l),t.config.lastUsedRepo=r,t.config.lastUsedFolder=l,c.value="",document.getElementById("gh-batch-preview-container").classList.add("d-none"),f.classList.add("d-none"),(I=bootstrap.Modal.getInstance(document.getElementById("ghUploadModal")))==null||I.hide(),U.toast(`Se subieron ${C} archivo(s) correctamente.`,"success"),t.loadFilesList(e.uid)}catch(x){U.toast("Error en la subida por lotes: "+x.message,"danger"),b.classList.replace("bg-success","bg-danger")}finally{s.disabled=!1,s.innerHTML="Subir Todos"}}},cE={config:null,repoPages:{},currentFiles:[],tableEngine:null,async init(n){const e=document.getElementById(n);if(!e)return;const t=Jh.getCurrentUser();if(t){if(this.config=await ze.getUserConfig(t.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=Ye.getBaseHTML(),Ye.injectStyles(),xt.setupListeners(),this.config.lastUsedFolder&&(document.getElementById("gh-folder").value=this.config.lastUsedFolder),document.getElementById("gh-upload-form").addEventListener("submit",s=>dd.handleUpload(s,t,this)),document.getElementById("gh-copy-form").addEventListener("submit",s=>Ye.handleCopy(s,t,this)),document.getElementById("gh-file").addEventListener("change",s=>dd.handleFileSelection(s)),this.initTableEngine(t),Ye.setupFilterListeners(this),this.populateRepos(),this.loadFilesList(t.uid)}},initTableEngine(n){this.tableEngine=new Sa({tableBody:document.getElementById("gh-files-list"),tableHeaders:document.getElementById("gh-table-head"),paginationContainer:document.getElementById("gh-pagination-controls"),dummyRowHTML:Ye.getDummyRowHTML(),marginBot:40,extractSearchString:e=>`${e.title} ${e.folder} ${e.fileName} ${e.repoName}`,renderRowHTML:e=>Ye.renderRowHTML(e,this),onRenderComplete:e=>Ye.attachTableListeners(e,this,n.uid)}),document.getElementById("gh-search-input").addEventListener("input",e=>{this.tableEngine.setSearchTerm(e.target.value)})},async loadFilesList(n){const e=document.getElementById("gh-files-list");try{const t=await ze.listFiles(n),s=Date.now(),i=[];for(const r of t)r.expiresAt&&s>r.expiresAt?Ye.handleSilentDelete(r,this):i.push(r);this.currentFiles=i,Ye.buildFilters(this),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentFiles)}catch(t){e&&(e.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${t.message}</td></tr>`)}},async populateRepos(){const n=document.getElementById("gh-repo"),e=document.getElementById("gh-copy-repo");try{const t=await Be.getUserRepos(this.config.githubToken);n.innerHTML="",e.innerHTML="",this.repoPages={},t.forEach(s=>{const i=document.createElement("option");i.value=s.name,i.textContent=`${s.isPrivate?"🔒":"🌐"} ${s.name}`,i.dataset.isPrivate=s.isPrivate,s.pagesUrl&&(this.repoPages[s.name]=s.pagesUrl);const r=i.cloneNode(!0);this.config.lastUsedRepo===s.name&&(i.selected=!0),n.appendChild(i),e.appendChild(r)}),!n.value&&n.options.length>0&&(n.selectedIndex=0),!e.value&&e.options.length>0&&(e.selectedIndex=0)}catch(t){n.innerHTML=e.innerHTML="<option disabled>Error cargando repositorios</option>",console.error(t)}}};async function dE(){const e=Object.keys(Le).flatMap(t=>[li(Object.assign({"./components/audio/setting-audio.js":()=>V(()=>Promise.resolve().then(()=>bE),void 0,import.meta.url),"./components/boolean/setting-boolean.js":()=>V(()=>Promise.resolve().then(()=>yE),void 0,import.meta.url),"./components/chart/setting-chart.js":()=>V(()=>Promise.resolve().then(()=>vE),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>V(()=>Promise.resolve().then(()=>_E),void 0,import.meta.url),"./components/date/setting-date.js":()=>V(()=>Promise.resolve().then(()=>wE),void 0,import.meta.url),"./components/email/setting-email.js":()=>V(()=>Promise.resolve().then(()=>EE),void 0,import.meta.url),"./components/image/setting-image.js":()=>V(()=>Promise.resolve().then(()=>TE),void 0,import.meta.url),"./components/number/setting-number.js":()=>V(()=>Promise.resolve().then(()=>IE),void 0,import.meta.url),"./components/password/setting-password.js":()=>V(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>V(()=>Promise.resolve().then(()=>xE),void 0,import.meta.url),"./components/section/setting-section.js":()=>V(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url),"./components/select/setting-select.js":()=>V(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),"./components/string/setting-string.js":()=>V(()=>Promise.resolve().then(()=>RE),void 0,import.meta.url),"./components/table/setting-table.js":()=>V(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url),"./components/text/setting-text.js":()=>V(()=>Promise.resolve().then(()=>LE),void 0,import.meta.url),"./components/url/setting-url.js":()=>V(()=>Promise.resolve().then(()=>kE),void 0,import.meta.url),"./components/video/setting-video.js":()=>V(()=>Promise.resolve().then(()=>DE),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),li(Object.assign({"./components/audio/editor-audio.js":()=>V(()=>Promise.resolve().then(()=>ME),void 0,import.meta.url),"./components/boolean/editor-boolean.js":()=>V(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url),"./components/chart/editor-chart.js":()=>V(()=>Promise.resolve().then(()=>OE),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>V(()=>Promise.resolve().then(()=>NE),void 0,import.meta.url),"./components/date/editor-date.js":()=>V(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url),"./components/email/editor-email.js":()=>V(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url),"./components/image/editor-image.js":()=>V(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url),"./components/number/editor-number.js":()=>V(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url),"./components/password/editor-password.js":()=>V(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>V(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),"./components/section/editor-section.js":()=>V(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url),"./components/select/editor-select.js":()=>V(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url),"./components/string/editor-string.js":()=>V(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/table/editor-table.js":()=>V(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url),"./components/text/editor-text.js":()=>V(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),"./components/url/editor-url.js":()=>V(()=>Promise.resolve().then(()=>JE),void 0,import.meta.url),"./components/video/editor-video.js":()=>V(()=>Promise.resolve().then(()=>QE),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),li(Object.assign({"./components/audio/viewer-audio.js":()=>V(()=>Promise.resolve().then(()=>YE),void 0,import.meta.url),"./components/boolean/viewer-boolean.js":()=>V(()=>Promise.resolve().then(()=>XE),void 0,import.meta.url),"./components/chart/viewer-chart.js":()=>V(()=>Promise.resolve().then(()=>ZE),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>V(()=>Promise.resolve().then(()=>eT),void 0,import.meta.url),"./components/date/viewer-date.js":()=>V(()=>Promise.resolve().then(()=>tT),void 0,import.meta.url),"./components/email/viewer-email.js":()=>V(()=>Promise.resolve().then(()=>sT),void 0,import.meta.url),"./components/image/viewer-image.js":()=>V(()=>Promise.resolve().then(()=>nT),void 0,import.meta.url),"./components/number/viewer-number.js":()=>V(()=>Promise.resolve().then(()=>iT),void 0,import.meta.url),"./components/password/viewer-password.js":()=>V(()=>Promise.resolve().then(()=>rT),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>V(()=>Promise.resolve().then(()=>oT),void 0,import.meta.url),"./components/section/viewer-section.js":()=>V(()=>Promise.resolve().then(()=>aT),void 0,import.meta.url),"./components/select/viewer-select.js":()=>V(()=>Promise.resolve().then(()=>lT),void 0,import.meta.url),"./components/string/viewer-string.js":()=>V(()=>Promise.resolve().then(()=>cT),void 0,import.meta.url),"./components/table/viewer-table.js":()=>V(()=>Promise.resolve().then(()=>dT),void 0,import.meta.url),"./components/text/viewer-text.js":()=>V(()=>Promise.resolve().then(()=>uT),void 0,import.meta.url),"./components/url/viewer-url.js":()=>V(()=>Promise.resolve().then(()=>hT),void 0,import.meta.url),"./components/video/viewer-video.js":()=>V(()=>Promise.resolve().then(()=>mT),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),li(Object.assign({"./components/audio/printer-audio.js":()=>V(()=>Promise.resolve().then(()=>pT),void 0,import.meta.url),"./components/boolean/printer-boolean.js":()=>V(()=>Promise.resolve().then(()=>fT),void 0,import.meta.url),"./components/chart/printer-chart.js":()=>V(()=>Promise.resolve().then(()=>gT),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>V(()=>Promise.resolve().then(()=>bT),void 0,import.meta.url),"./components/date/printer-date.js":()=>V(()=>Promise.resolve().then(()=>yT),void 0,import.meta.url),"./components/email/printer-email.js":()=>V(()=>Promise.resolve().then(()=>vT),void 0,import.meta.url),"./components/image/printer-image.js":()=>V(()=>Promise.resolve().then(()=>_T),void 0,import.meta.url),"./components/number/printer-number.js":()=>V(()=>Promise.resolve().then(()=>wT),void 0,import.meta.url),"./components/password/printer-password.js":()=>V(()=>Promise.resolve().then(()=>ET),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>V(()=>Promise.resolve().then(()=>TT),void 0,import.meta.url),"./components/section/printer-section.js":()=>V(()=>Promise.resolve().then(()=>IT),void 0,import.meta.url),"./components/select/printer-select.js":()=>V(()=>Promise.resolve().then(()=>AT),void 0,import.meta.url),"./components/string/printer-string.js":()=>V(()=>Promise.resolve().then(()=>xT),void 0,import.meta.url),"./components/table/printer-table.js":()=>V(()=>Promise.resolve().then(()=>ST),void 0,import.meta.url),"./components/text/printer-text.js":()=>V(()=>Promise.resolve().then(()=>CT),void 0,import.meta.url),"./components/url/printer-url.js":()=>V(()=>Promise.resolve().then(()=>RT),void 0,import.meta.url),"./components/video/printer-video.js":()=>V(()=>Promise.resolve().then(()=>PT),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e)}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),t="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";n&&(n.onerror=()=>{console.error("[THEME] ❌ Error. Revertiendo a Default."),n.href=t,localStorage.setItem("doc_engine_theme_url",t)},n.href=e&&e.includes("http")?e:t);try{await H.initDB()}catch(s){console.error("[ERROR] APP: Error de inicialización:",s);return}await dE(),pE(),Ne.onAuthStateChanged(async s=>{s&&s.emailVerified?(s.email,await uE(s)):(document.getElementById("app-content").style.display="none",Wh.renderLogin())}),Gp.init()});async function uE(n){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${n.email}`),Wh.initLogout(),Kh.init(),Cs.init(),Qh.init(),!await H.hasSecurityConfigured()&&Rs&&Rs.renderSetupModal&&Rs.renderSetupModal(),await ze.getUserConfig(n.uid)&&hE(),mE(),Ps("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",i=>{Ps("documents"),Cs.createFromTemplate(i.detail.tplId)}),window._eventCreateDocRegistered=!0)}function hE(){const n=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,n.appendChild(e),document.getElementById("nav-github").addEventListener("click",t=>{t.preventDefault(),Ps("github"),cE.init("view-github")})}function mE(){document.getElementById("nav-designer").onclick=n=>{n.preventDefault(),Ps("designer")},document.getElementById("nav-documents").onclick=n=>{n.preventDefault(),Ps("documents")},document.getElementById("nav-settings").onclick=n=>{n.preventDefault(),Ps("settings")}}function Ps(n){const e={designer:document.getElementById("view-designer"),documents:document.getElementById("view-documents"),settings:document.getElementById("view-settings"),github:document.getElementById("view-github")},t={designer:document.getElementById("nav-designer"),documents:document.getElementById("nav-documents"),settings:document.getElementById("nav-settings"),github:document.getElementById("nav-github")};Object.values(e).forEach(s=>{s&&(s.style.display="none")}),Object.values(t).forEach(s=>{s&&s.classList.remove("active"),s&&(s.style.fontWeight="normal")}),e[n]&&(e[n].style.display="block"),t[n]&&(t[n].classList.add("active"),t[n].style.fontWeight="bold"),n==="designer"&&Kh.renderList(),n==="documents"&&Cs.renderList(),n==="settings"&&Qh.render()}function pE(){document.addEventListener("click",t=>{const s=t.target.closest(".toggle-password");if(s){t.preventDefault();const i=document.getElementById(s.dataset.target),r=s.querySelector("i");if(i&&r){const o=i.type==="password";i.type=o?"text":"password",r.classList.toggle("fa-eye",!o),r.classList.toggle("fa-eye-slash",o)}}});const n=document.querySelector(".navbar"),e=document.querySelector(".app-container");n&&e&&new ResizeObserver(s=>{for(let i of s){i.contentRect.height;const r=n.offsetHeight;e.style.marginTop=`${r+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{Cs&&Cs.renderList&&Cs.renderList()},250)}}).observe(n)}const fE=n=>class extends n{getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),s=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${t?"italic":"normal"};
        color: ${s};`}renderStyleControls(e=[]){const t=this.hasAttribute("bold"),s=this.hasAttribute("italic"),i=this.getAttribute("color")||"black",r=!e.includes("bold"),o=!e.includes("italic"),l=!e.includes("color");let c="";(r||o)&&(c=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${r?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${o?`<button class="btn btn-sm btn-outline-secondary ${s?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
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
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const t=this.querySelector(`#btn-opts-${this.id}`);t&&(t.addEventListener("show.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="visible")}),t.addEventListener("hidden.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="hidden")}));const s=(r,o)=>{const l=this.querySelector(`#${r}-${this.id}`);l&&(l.onclick=c=>{c.preventDefault(),o(c)})};s("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),s("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const i=this.querySelector(`#color-grid-${this.id}`);i&&i.querySelectorAll("button").forEach(r=>{r.onclick=o=>{o.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",r.dataset.color),this._isInternalUpdate=!1,this.render()}}),s("btn-copy",()=>{const r=this.querySelector(`#btn-copy-${this.id}`),o=r.innerHTML;let l="";if(typeof this.getData=="function"){const c=this.getData();l=typeof c.value=="object"?JSON.stringify(c.value):c.value||""}else l=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",l),r.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{r.innerHTML=o},1200)}),s("btn-paste",()=>{const r=this.querySelector(`#btn-paste-${this.id}`),o=sessionStorage.getItem("doc_clipboard_value");if(o!==null){typeof this.setData=="function"?this.setData({value:o}):this.setAttribute("edit-value",o);const l=r.innerHTML;r.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{r.innerHTML=l},1200)}})}},gE=n=>class extends n{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${Le[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=t=>{t.preventDefault(),t.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var k;const e=this.tagName.toLowerCase().split("-")[1],t=this.hasAttribute("table"),s=((k=Le[e])==null?void 0:k.settings)||{width:!0,visibility:!0},i={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view"),align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let r="";s.custom&&typeof this.getCustomSettingsHTML=="function"&&(r=this.getCustomSettingsHTML());let o="";s.visibility&&(o=`
            <h6 class="text-secondary fw-bold mb-3"><i class="fa-solid fa-eye me-2"></i>Visibilidad y Permisos</h6>
            <div class="row g-3 mb-3">
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-edit" ${i.hideEdit?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en Editor</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Solo para cálculos de fondo.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-view" ${i.hideView?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en Visor</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">No visible al leer el documento.</div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-print" ${i.hidePrint?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar al Imprimir</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Se omitirá en la exportación a PDF.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-whatsapp" ${i.hideWhatsapp?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en WhatsApp</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Se excluirá del mensaje de texto enviado.</div>
                    </div>
                </div>
            </div>`);const c=["setting-number","setting-currency","setting-percentage"].includes(this.tagName.toLowerCase());let d="";t&&c&&(d=`
            <div class="col-md-6 mt-3 border-top pt-3 d-flex align-items-center">
                <div class="form-check form-switch">
                    <input autocomplete="off" spellcheck="false" class="form-check-input fs-5" type="checkbox" id="modal-total" ${i.total?"checked":""}>
                    <label class="form-check-label fw-bold mt-1 ms-2 text-primary">Sumar en Totales</label>
                </div>
            </div>
          `);let h="";(s.width||s.style)&&(h=`
            <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-pen-ruler me-2"></i>Configuración de Diseño</h6>
            <div class="row g-4 bg-white p-3 border rounded shadow-sm">
                ${s.width?`
                <div class="col-md-6">
                    <label class="small text-muted fw-bold mb-1">Ancho Pantalla (Grid 1-12)</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="modal-span-ev" value="${i.spanEV}" min="1" max="12">
                </div>
                <div class="col-md-6">
                    <label class="small text-muted fw-bold mb-1">Ancho Impresión (Grid 1-12)</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="modal-span-p" value="${i.spanP}" min="1" max="12">
                </div>`:""}
                
                ${t?`
                <div class="col-md-6 mt-3 border-top pt-3">
                    <label class="small text-muted fw-bold mb-1">Alineación del Texto</label>
                    <select class="form-select" id="modal-align">
                        <option value="left" ${i.align==="left"?"selected":""}>Izquierda</option>
                        <option value="center" ${i.align==="center"?"selected":""}>Centro</option>
                        <option value="right" ${i.align==="right"?"selected":""}>Derecha</option>
                    </select>
                </div>
                <!-- 🚀 AQUI INYECTAMOS LA VARIABLE DEL SWITCH DE TOTALES -->
                ${d}
                `:""}
            </div>`);const p=`tab-custom-${this.id}`,f=`tab-vis-${this.id}`,b=`tab-design-${this.id}`;let I="",x="",C=!0;s.custom&&r&&(I+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${C?"active":""} fw-bold text-primary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${p}" type="button" role="tab"><i class="fa-solid fa-sliders me-2"></i> General</button>
            </li>`,x+=`<div class="tab-pane fade ${C?"show active":""} p-4" id="${p}" role="tabpanel">${r}</div>`,C=!1),s.visibility&&(I+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${C?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${f}" type="button" role="tab"><i class="fa-solid fa-eye me-2"></i> Visibilidad</button>
            </li>`,x+=`<div class="tab-pane fade ${C?"show active":""} p-4" id="${f}" role="tabpanel">${o}</div>`,C=!1),(s.width||s.style||t)&&(I+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${C?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${b}" type="button" role="tab"><i class="fa-solid fa-pen-ruler me-2"></i> Diseño</button>
            </li>`,x+=`<div class="tab-pane fade ${C?"show active":""} p-4" id="${b}" role="tabpanel">${h}</div>`),this._renderAndShowModal(I,x)}_renderAndShowModal(e,t){const s=document.getElementById("advanced-settings-modal");s&&s.remove();const r=`
        <div class="modal fade" id="advanced-settings-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content shadow-lg border-0 overflow-hidden">
              
              <!-- Cabecera y Editor de ID integrado -->
              <div class="modal-header text-bg-dark py-3 d-flex flex-column align-items-start gap-2">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <h5 class="modal-title fs-5 fw-bold text-truncate"><i class="fa-solid fa-cube me-2"></i>${this.getAttribute("title")||"Configuración de Campo"}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                
                <div class="input-group input-group-sm w-50 shadow-sm mt-1">
                    <span class="input-group-text bg-secondary text-white border-0 fw-bold"><i class="fa-solid fa-tag me-1"></i> ID:</span>
                    <input type="text" autocomplete="off" spellcheck="false" class="form-control font-monospace border-0" id="modal-field-id" value="${this.id}">
                </div>
              </div>

              <!-- Pestañas -->
              <div class="modal-body p-0 bg-light d-flex flex-column">
                 <ul class="nav nav-tabs bg-white border-bottom shadow-sm px-3 pt-2" id="settingsTabs-${this.id}" role="tablist">
                    ${e}
                 </ul>
                 <div class="tab-content flex-grow-1 bg-light" id="tabContent-${this.id}">
                    ${t}
                 </div>
              </div>
              
              <div class="modal-footer py-3 bg-white border-top">
                <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary px-5 fw-bold shadow-sm" id="btn-save-settings"><i class="fa-solid fa-check me-2"></i> Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById("advanced-settings-modal"),l=new bootstrap.Modal(o);l.show(),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&l.hide()}}_saveSettingsFromModal(){const e=r=>{var o;return(o=document.getElementById(r))==null?void 0:o.value},t=r=>{var o;return(o=document.getElementById(r))==null?void 0:o.checked},s=e("modal-field-id");if(s!==void 0){const r=s.trim().replace(/[^a-zA-Z0-9_]/g,"");if(r==="")return alert("⛔ El ID no puede estar vacío ni contener solo caracteres especiales."),!1;if(r!==this.id){const o=document.getElementById(r)||document.querySelector(`[field-id="${r}"]`);if(o&&o!==this){alert(`⚠️ El ID "${r}" ya está siendo utilizado por otro campo.`);const c=document.getElementById("modal-field-id");return c.classList.add("is-invalid","border-danger"),c.focus(),!1}const l=this.id;this.id=r,this.setAttribute("id",r),this.setAttribute("field-id",r),this._updateETLScripts(l,r)}}this.setInternalUpdate(!0),typeof this.saveCustomSettings=="function"&&this.saveCustomSettings(),t("modal-hide-edit")?this.setAttribute("hide-edit",""):this.removeAttribute("hide-edit"),t("modal-hide-view")?this.setAttribute("hide-view",""):this.removeAttribute("hide-view"),t("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),t("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align")));const i=document.getElementById("modal-total");return i&&(i.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}_updateETLScripts(e,t){const s=document.getElementById("designer-canvas");if(!s)return;const i=s.getAttribute("data-etl-config");if(i)try{const r=JSON.parse(i);let o=!1;const l=new RegExp(`\\b${e}\\b`,"g");r.rules&&Array.isArray(r.rules)&&r.rules.forEach(c=>{c.scriptCode&&l.test(c.scriptCode)&&(c.scriptCode=c.scriptCode.replace(l,t),o=!0)}),o&&(s.setAttribute("data-etl-config",JSON.stringify(r)),this._showToast(`Scripts ETL actualizados: <b>${e}</b> ➔ <b>${t}</b>`))}catch(r){console.warn("[SettingsMixin] No se pudo actualizar el ID en los scripts ETL.",r)}}_showToast(e){let t=document.getElementById("etl-toast-container");t||(t=document.createElement("div"),t.id="etl-toast-container",t.className="toast-container position-fixed bottom-0 end-0 p-3",t.style.zIndex="1100",document.body.appendChild(t));const s=document.createElement("div");s.className="toast align-items-center text-bg-success border-0 show mb-2 shadow-lg",s.innerHTML=`<div class="d-flex"><div class="toast-body small"><i class="fa-solid fa-code-branch me-2"></i>${e}</div></div>`,t.appendChild(s),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},4e3)}};class $ extends gE(fE(HTMLElement)){constructor(){super(),this._isInternalUpdate=!1,this._isNewComponent=!0,`${this.tagName}${this.id}${this._isNewComponent}`}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this.addEventListener("dblclick",e=>{this.tagName.startsWith("EDITOR-")||(e.preventDefault(),e.stopPropagation(),this._handleDoubleClickCopy(e))})}static get observedAttributes(){return["title","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","hide-edit","hide-view","hide-print","hide-whatsapp","api-url","api-path","api-config"]}attributeChangedCallback(e,t,s){e==="title"&&this._isNewComponent&&s&&t!==s&&this._updateSemanticId(s),!this._isInternalUpdate&&t!==s&&this.render()}getData(){const e=this.tagName.toLowerCase();if(e.startsWith("setting-")){let t=null;try{const s=this.getAttribute("api-config");s&&(t=JSON.parse(s))}catch(s){console.warn(`[BaseElement] Config API malformada en ${this.id}`),console.error(s)}return{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view"),apiConfig:t,apiUrl:t?t.url:this.getAttribute("api-url")||"",apiPath:t?t.dataPath:this.getAttribute("api-path")||""}}return{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id,this._isNewComponent=!1),e.fieldId&&this.setAttribute("field-id",e.fieldId),e.apiUrl&&!e.apiConfig&&(e.apiConfig={enabled:!0,method:"GET",url:e.apiUrl,headers:[],body:"",dataPath:e.apiPath||""}),e.apiConfig?(this.setAttribute("api-config",JSON.stringify(e.apiConfig)),e.apiConfig.enabled&&e.apiConfig.url?this.setAttribute("api-url",e.apiConfig.url):this.removeAttribute("api-url")):(this.removeAttribute("api-config"),this.removeAttribute("api-url")),["title","alignment","color"].forEach(i=>{const r=e[i]||e[this._toCamel(i)];r&&this.setAttribute(i,r)}),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.value!==void 0&&this.setAttribute("edit-value",e.value);const s={total:e.total,bold:e.bold,italic:e.italic,"hide-print":e.hidePrint,"hide-whatsapp":e.hideWhatsapp,"hide-edit":e.hideEdit,"hide-view":e.hideView};Object.entries(s).forEach(([i,r])=>{r?this.setAttribute(i,r===!0?"":r):this.removeAttribute(i)}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",s=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${s} mb-3 d-block`,`<div class="viewer-container"><label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">${t}</label>${e}</div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const s=this.getAttribute("title")||"",i=this.tagName.toLowerCase()==="printer-table",r=parseInt(this.getAttribute("span-print"))||12,o={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",titleSize:"0.65rem",contentSize:"0.75rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",titleSize:"0.75rem",contentSize:"0.95rem"},"Facil Lectura":{m:"4px",p:"4px",b:"1px solid #000",titleSize:"1.1rem",contentSize:"1.3rem"}},l=o[t]||o.Visual;let c=l.titleSize;i&&(t==="Compacto"?c="0.85rem":t==="Facil Lectura"?c="1.3rem":c="0.95rem");const d=i&&r===12?"page-break-inside: auto;":"page-break-inside: avoid;";return`<div style="margin-bottom: ${l.m}; border-bottom: ${l.b}; padding-bottom: ${l.p}; ${d} font-size: ${l.contentSize};">
              <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${c}; line-height: 1.1; margin-bottom: 4px;">${s}</div>
              ${e}
            </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];Le[e]&&(this.icon=Le[e].icon,this.shortLabel=Le[e].shortLabel,this.longLabel=Le[e].longLabel,this.spanEV=Le[e].spanEV,this.spanP=Le[e].spanP,this.uiColor=Le[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,t=>t[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async t=>{t.preventDefault(),t.stopPropagation();const s=e.querySelector("i");if(s){const i=s.className;s.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{s.className=i,e.disabled=!1}}})}render(){this.innerHTML=""}async _handleDoubleClickCopy(e){try{let s=this.getData().value;if(typeof s=="object"&&s!==null&&(s=JSON.stringify(s)),!s&&s!==0&&s!=="0")return;sessionStorage.setItem("doc_clipboard_value",s);try{await navigator.clipboard.writeText(s)}catch(i){console.warn("Clipboard API no disponible, usando fallback.",i)}this._showFloatingFeedback(e.pageX,e.pageY)}catch(t){console.error("Error al copiar valor del elemento:",t)}}_showFloatingFeedback(e,t){const s=document.createElement("div");s.textContent="¡Copiado!",s.style.cssText=`position: absolute; left: ${e}px; top: ${t-20}px; background: #198754; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; pointer-events: none; z-index: 9999; box-shadow: 0 2px 5px rgba(0,0,0,0.2); opacity: 1; transition: all 0.8s ease-out; transform: translate(-50%, 0);`,document.body.appendChild(s),requestAnimationFrame(()=>{s.style.top=`${t-40}px`,s.style.opacity="0"}),setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},800)}setCalculatedValue(e){let t=e;typeof t=="number"&&!Number.isInteger(t)&&(t=Math.round(t*100)/100);const s=typeof t=="object"?JSON.stringify(t):String(t);if(this.getAttribute("edit-value")!==s){this.setAttribute("edit-value",s);const r=this.querySelector("input, textarea");r&&this.tagName.toLowerCase()!=="editor-url"&&this.tagName.toLowerCase()!=="editor-table"&&(r.value=t),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_updateSemanticId(e){const r=this.tagName.toLowerCase().replace(/^(setting-|editor-|viewer-)/,"").substring(0,5);let o=e.normalize("NFD").replace(/[\u0300-\u036f]/g,"");o=o.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase();let l=o.split(/\s+/).filter(b=>b.length>0);if(l.length===0)return;for(;l.join("").length>15;){let b=-1,I=-1;for(let x=0;x<l.length;x++)l[x].length>b&&(b=l[x].length,I=x);if(I!==-1)l[I]=l[I].slice(0,-1);else break}const c=l.join(""),d=`${r}_${c}`;let h=d,p=2;for(;document.getElementById(h)&&document.getElementById(h)!==this;)h=`${d}${p}`,p++;const f=this.id;f!==h&&(this.id=h,this._updateETLReferences(f,h))}_updateETLReferences(e,t){const s=document.getElementById("designer-canvas");if(!s)return;const i=s.getAttribute("data-etl-config");if(i)try{const r=new RegExp("\\b"+e+"\\b","g"),o=i.replace(r,t);s.setAttribute("data-etl-config",o),`${e}${t}`}catch(r){console.warn("[Auto-Update] Error al actualizar referencias ETL del componente",r)}}_playAudio(e,t){let s=document.getElementById("global-audio-player");if(!s){if(s=document.createElement("div"),s.id="global-audio-player",s.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const o=document.createElement("style");o.id="audio-anim-style",o.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(o)}document.body.appendChild(s)}s.innerHTML=`
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
    `;const i=s.querySelector("audio"),r=s.querySelector("#audio-loading");i.onloadstart=()=>{r.style.display="block"},i.oncanplay=()=>{r.style.display="none"},i.load(),i.play().catch(o=>console.log("Autoplay bloqueado:",o)),s.querySelector("#close-audio").onclick=()=>s.remove()}_showQRModal(e,t){var d;const s=`modal-qr-${this.id}`;(d=document.getElementById(s))==null||d.remove();const i=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(e)}`,r=`
      <div class="modal fade" id="${s}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-center pb-4">
                <h6 class="fw-bold mb-3">${t||"Escanear Enlace"}</h6>
                <img src="${i}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
                <div class="d-grid gap-2 px-4">
                    <button class="btn btn-outline-primary btn-sm" id="btn-copy-qr-${this.id}">
                        <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById(s),l=new bootstrap.Modal(o),c=o.querySelector(`#btn-copy-qr-${this.id}`);c&&(c.onclick=async()=>{try{await navigator.clipboard.writeText(e);const h=c.innerHTML;c.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',c.classList.replace("btn-outline-primary","btn-success"),c.classList.add("text-white"),setTimeout(()=>{document.body.contains(c)&&(c.innerHTML=h,c.classList.replace("btn-success","btn-outline-primary"),c.classList.remove("text-white"))},2e3)}catch(h){console.error("Error al copiar al portapapeles",h)}}),o.addEventListener("hidden.bs.modal",()=>o.remove()),l.show()}_showVideoModal(e,t,s){const i=document.getElementById("media-preview-modal");i&&i.remove();let r;s.type==="youtube"?r=`<div class="ratio ratio-16x9 shadow rounded overflow-hidden"><iframe src="${`https://www.youtube.com/embed/${s.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:r=`<video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;"><source src="${e}">Tu navegador no soporta video.</video>`;const o=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" style="filter: invert(1);"></button>
              ${r}
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const l=document.getElementById("media-preview-modal");new bootstrap.Modal(l).show(),l.addEventListener("hidden.bs.modal",()=>l.remove())}_showImageModal(e,t){const s=document.getElementById("media-preview-modal");s&&s.remove();const i=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-white p-2 rounded-circle opacity-100" data-bs-dismiss="modal"></button>
              <img src="${e}" class="img-fluid rounded shadow" style="max-height: 85vh;">
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById("media-preview-modal");new bootstrap.Modal(r).show(),r.addEventListener("hidden.bs.modal",()=>r.remove())}}class Yh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"secondary"} d-flex justify-content-between align-items-center py-2 px-3">
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
              <span class="input-group-text border-end-0"><i class="fa-solid fa-music text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Pista de Danza">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}}customElements.define("setting-audio",Yh);const bE=Object.freeze(Object.defineProperty({__proto__:null,SettingAudio:Yh},Symbol.toStringTag,{value:"Module"}));class Xh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-boolean",Xh);const yE=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:Xh},Symbol.toStringTag,{value:"Module"}));class Zh extends ${static get observedAttributes(){return[...super.observedAttributes,"is-automatic","options"]}getData(){const e=super.getData();return e.isAutomatic=this.hasAttribute("is-automatic"),e.options=this.getAttribute("options")||"",e}setData(e){super.setData(e),e.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"info"} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Gráfico *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-chart-simple text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Ventas Mensuales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}getCustomSettingsHTML(){const e=this.hasAttribute("is-automatic");let t={aspectPercentage:75,bgColor:"#ffffff"};try{const r=this.getAttribute("options");r&&(t={...t,...JSON.parse(r)})}catch{}const s=Number(t.aspectPercentage)||75,i=[100,75,56.25,50].includes(s);return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-bolt me-2"></i>Comportamiento</h6>
      <div class="bg-white p-3 border rounded shadow-sm mb-3">
        <div class="form-check form-switch mb-1">
          <input class="form-check-input fs-5" type="checkbox" id="modal-chk-auto-${this.id}" ${e?"checked":""}>
          <label class="form-check-label small fw-bold text-dark ms-2 mt-1" for="modal-chk-auto-${this.id}">Generación Automática (ETL)</label>
        </div>
        <div class="form-text small text-muted">
          Si se activa, el gráfico se alimentará exclusivamente mediante scripts en segundo plano.
        </div>
      </div>

      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-palette me-2"></i>Apariencia Visual</h6>
      <div class="row g-3 bg-white p-3 border rounded shadow-sm">
        
        <div class="col-md-4">
            <label class="form-label small fw-bold text-dark mb-1">Proporción Rápida</label>
            <select class="form-select form-select-sm" id="modal-chart-ratio-preset-${this.id}" 
                    onchange="if(this.value !== 'custom') document.getElementById('modal-chart-aspect-${this.id}').value = this.value;">
                <option value="100" ${s===100?"selected":""}>1:1 (Cuadrado)</option>
                <option value="75" ${s===75?"selected":""}>4:3 (Estándar)</option>
                <option value="56.25" ${s===56.25?"selected":""}>16:9 (Panorámico)</option>
                <option value="50" ${s===50?"selected":""}>2:1 (Horizontal)</option>
                <option value="custom" ${i?"":"selected"}>Personalizado</option>
            </select>
        </div>

        <div class="col-md-4">
            <label class="form-label small fw-bold text-dark mb-1">Alto relativo al Ancho</label>
            <div class="input-group input-group-sm">
                <input type="number" class="form-control" id="modal-chart-aspect-${this.id}" value="${s}" min="5" max="500" step="0.01" 
                       oninput="document.getElementById('modal-chart-ratio-preset-${this.id}').value = 'custom';">
                <span class="input-group-text">%</span>
            </div>
        </div>

        <div class="col-md-4">
            <label class="form-label small fw-bold text-dark mb-1">Color de Fondo</label>
            <input type="color" class="form-control form-control-sm form-control-color w-100" id="modal-chart-bg-${this.id}" value="${t.bgColor}" title="Seleccione un color">
        </div>

      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-chk-auto-${this.id}`);e&&(e.checked?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"));const t=document.getElementById(`modal-chart-aspect-${this.id}`),s=document.getElementById(`modal-chart-bg-${this.id}`);if(t&&s){const i={aspectPercentage:parseFloat(t.value)||75,bgColor:s.value};this.setAttribute("options",JSON.stringify(i))}}}customElements.define("setting-chart",Zh);const vE=Object.freeze(Object.defineProperty({__proto__:null,SettingChart:Zh},Symbol.toStringTag,{value:"Module"}));class em extends ${static get observedAttributes(){return[...super.observedAttributes,"currency"]}getData(){const e=super.getData();return e.currency=this.getAttribute("currency")||"$",e}setData(e){super.setData(e),e.currency&&this.setAttribute("currency",e.currency)}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Precio Unitario">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}getCustomSettingsHTML(){const e=this.getAttribute("currency")||"$";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-coins me-2"></i>Formato de Moneda</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Símbolo Monetario</label>
        <input autocomplete="off" spellcheck="false" type="text" class="form-control text-center fw-bold w-50" 
               id="modal-currency-${this.id}" value="${e}" placeholder="$">
        <div class="form-text small text-muted mt-2">
          Símbolo que se mostrará junto al importe (Ej: $, Bs, €, MXN).
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-currency-${this.id}`);e&&this.setAttribute("currency",e.value.trim())}}customElements.define("setting-currency",em);const _E=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:em},Symbol.toStringTag,{value:"Module"}));class tm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-date",tm);const wE=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:tm},Symbol.toStringTag,{value:"Module"}));class sm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-email",sm);const EE=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:sm},Symbol.toStringTag,{value:"Module"}));class nm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"secondary"} d-flex justify-content-between align-items-center py-2 px-3">
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
              <span class="input-group-text border-end-0"><i class="fa-regular fa-image text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Fotografía Principal">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}}customElements.define("setting-image",nm);const TE=Object.freeze(Object.defineProperty({__proto__:null,SettingImage:nm},Symbol.toStringTag,{value:"Module"}));class im extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-number",im);const IE=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:im},Symbol.toStringTag,{value:"Module"}));class rm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-password",rm);const AE=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:rm},Symbol.toStringTag,{value:"Module"}));class om extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-percentage",om);const xE=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:om},Symbol.toStringTag,{value:"Module"}));class am extends ${static get observedAttributes(){return[...super.observedAttributes,"page-break"]}getData(){const e=super.getData();return e.pageBreak=this.hasAttribute("page-break"),e}setData(e){super.setData(e),e.pageBreak?this.setAttribute("page-break",""):this.removeAttribute("page-break")}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título de la Sección *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Datos Personales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}getCustomSettingsHTML(){const e=this.hasAttribute("page-break");return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-file-pdf me-2"></i>Control de Impresión</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <div class="form-check form-switch mb-0">
          <input class="form-check-input fs-5" type="checkbox" id="modal-chk-pbreak-${this.id}" ${e?"checked":""}>
          <label class="form-check-label small fw-bold text-dark ms-2 mt-1" for="modal-chk-pbreak-${this.id}">
             Forzar Salto de Página
          </label>
        </div>
        <div class="form-text small text-muted mt-2">
          Si se activa, el documento obligará a la impresora a saltar a una página nueva justo antes de imprimir esta sección.
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-chk-pbreak-${this.id}`);e&&(e.checked?this.setAttribute("page-break",""):this.removeAttribute("page-break"))}}customElements.define("setting-section",am);const SE=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:am},Symbol.toStringTag,{value:"Module"}));class lm extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}getData(){const e=super.getData();return e.options=this.getAttribute("options")||"",e}setData(e){super.setData(e),e.options!==void 0&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Estado Civil">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}getCustomSettingsHTML(){const e=this.getAttribute("options")||"";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-list-ul me-2"></i>Opciones Disponibles</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Lista de elementos (separados por coma) *</label>
        <textarea class="form-control" id="modal-options-${this.id}" rows="3" 
                  placeholder="Soltero, Casado, Divorciado">${e}</textarea>
        <div class="form-text small text-muted mt-2">
          <i class="fa-solid fa-info-circle me-1"></i> Escribe las opciones que el usuario podrá elegir, separadas por una coma (,).
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-options-${this.id}`);e&&this.setAttribute("options",e.value)}}customElements.define("setting-select",lm);const CE=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:lm},Symbol.toStringTag,{value:"Module"}));class cm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-string",cm);const RE=Object.freeze(Object.defineProperty({__proto__:null,SettingString:cm},Symbol.toStringTag,{value:"Module"}));class dm extends ${constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",s=this._tempColumnsData?this._tempColumnsData.length:0,i=this.hasAttribute("prepend-rows");this.innerHTML=`
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
                <span id="col-counter-${this.id}">${s} columna${s!==1?"s":""} definida${s!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar Columnas
            </button>
          </div>
          
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=o=>{this._isInternalUpdate=!0;const l=o.target.value;this.setAttribute("title",l),this._isInternalUpdate=!1,o.target.classList.toggle("is-invalid",l.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal();const r=this.querySelector('input[data-prop="prepend-rows"]');r&&(r.onchange=o=>{o.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",s=this.hasAttribute("prepend-rows");return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-sliders me-1"></i> MÁS CONFIGURACIÓN
        </a>
        <div class="collapse" id="extra-${this.id}">
          
          <div class="p-2 bg-light border rounded mb-2 mt-2">
            <div class="form-check form-switch mb-0">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" 
                       id="check-prepend-${this.id}" data-prop="prepend-rows" ${s?"checked":""}>
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
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const s=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",s),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",s.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const i=`
      
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
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`toolbox-${this.id}`);Object.entries(Le).forEach(([d,h])=>{if(d==="table")return;const p=document.createElement("button");p.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",p.style.minWidth="60px",p.title=h.longLabel,p.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${h.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${h.shortLabel}</span>
        `,p.onclick=()=>this._addChildComponent(d),r.appendChild(p)});const o=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(d=>{const h=this._createWrapper(d.tag.replace("setting-","")),p=h.querySelector(d.tag);p&&p.setData&&(p.setAttribute("table",""),p.setData(d)),o.appendChild(h)}):o.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const l=document.getElementById(e),c=new bootstrap.Modal(l);c.show(),l.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(o),this._updateCounter(),c.dispose(),l.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),s=t.querySelector("#empty-msg");s&&s.remove();const i=this._createWrapper(e);t.appendChild(i),i.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const s=document.createElement(`setting-${e}`);return s.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(s),t.querySelector(".btn-del-col").onclick=()=>t.remove(),Ca.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(i=>{i.tagName.toLowerCase().startsWith("setting-")&&typeof i.getData=="function"&&t.push(i.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",dm);const PE=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:dm},Symbol.toStringTag,{value:"Module"}));class um extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-text",um);const LE=Object.freeze(Object.defineProperty({__proto__:null,SettingText:um},Symbol.toStringTag,{value:"Module"}));class hm extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}getData(){const e=super.getData();return e.options=this.getAttribute("options")||"",e}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}getCustomSettingsHTML(){let e={showTextUrl:!0,showQR:!0};try{const t=this.getAttribute("options");t&&(e={...e,...JSON.parse(t)})}catch{}return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-eye me-2"></i>Opciones de Visualización</h6>
      <div class="bg-white p-3 border rounded shadow-sm mb-3">
        
        <div class="form-check form-switch mb-2">
          <input class="form-check-input" type="checkbox" id="modal-chk-text-${this.id}" ${e.showTextUrl?"checked":""}>
          <label class="form-check-label small fw-bold text-dark" for="modal-chk-text-${this.id}">Mostrar Texto Literal de la URL</label>
        </div>
        <div class="form-text small text-muted mb-3 border-bottom pb-3">Si se desactiva, solo se mostrará el texto amigable (Ej: "Ver Documento"), ocultando la dirección "https://...".</div>

        <div class="form-check form-switch mb-1">
          <input class="form-check-input" type="checkbox" id="modal-chk-qr-${this.id}" ${e.showQR?"checked":""}>
          <label class="form-check-label small fw-bold text-dark" for="modal-chk-qr-${this.id}">Habilitar Código QR</label>
        </div>
        <div class="form-text small text-muted">Añade un botón para ver el QR en pantalla y lo dibuja en las exportaciones a PDF.</div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-chk-text-${this.id}`),t=document.getElementById(`modal-chk-qr-${this.id}`);if(e&&t){const s={showTextUrl:e.checked,showQR:t.checked};this.setAttribute("options",JSON.stringify(s))}}}customElements.define("setting-url",hm);const kE=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:hm},Symbol.toStringTag,{value:"Module"}));class mm extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"danger"} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-film"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Video de la Evaluación">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}}customElements.define("setting-video",mm);const DE=Object.freeze(Object.defineProperty({__proto__:null,SettingVideo:mm},Symbol.toStringTag,{value:"Module"}));class pm extends ${render(){const e=this.getAttribute("title")||"Audio";let t={url:"",mediaTitle:"",caption:""};try{const c=this.getAttribute("edit-value");c&&(t=JSON.parse(c))}catch{t.url=this.getAttribute("edit-value")||""}const s=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-solid fa-music me-1"></i> ${e}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL del Audio</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control media-val-url" placeholder="https://... o buscar en GitHub" value="${t.url}">
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub">
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>
            
            <div class="row g-2 mb-3">
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Título de la Pista</label>
                    <input type="text" class="form-control form-control-sm media-val-title" placeholder="Ej: Danza del Fuego" value="${t.mediaTitle}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda (Caption)</label>
                    <input type="text" class="form-control form-control-sm media-val-caption" placeholder="Ej: Autor o álbum..." value="${t.caption}">
                </div>
            </div>

            ${t.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           <button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" type="button" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                               <i class="fa-solid fa-play"></i>
                           </button>
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${t.mediaTitle||"Pista de Audio"}</div>
                                ${t.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${t.caption}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-music fs-1 mb-2 d-block opacity-25"></i> Sin audio seleccionado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s);const i=()=>{const c={url:this.querySelector(".media-val-url").value,mediaTitle:this.querySelector(".media-val-title").value,caption:this.querySelector(".media-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(c)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(c=>{c.oninput=i,c.onchange=()=>this.render()});const o=this.querySelector(".btn-play-audio");o&&(o.onclick=()=>this._playAudio(t.url,t.mediaTitle||"Audio"));const l=this.querySelector(".btn-qr");l&&(l.onclick=()=>{var I;const c=`modal-qr-edit-${this.id}`;(I=document.getElementById(c))==null||I.remove();const d=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(t.url)}`,h=`
              <div class="modal fade" id="${c}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm">
                  <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body text-center pb-4">
                        <h6 class="fw-bold mb-3">${t.mediaTitle||"Escanear Audio"}</h6>
                        <img src="${d}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
                        
                        <!-- Botón de copiar al portapapeles -->
                        <div class="d-grid gap-2 px-4">
                            <button class="btn btn-outline-primary btn-sm" id="btn-copy-edit-qr-${this.id}">
                                <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            `;document.body.insertAdjacentHTML("beforeend",h);const p=document.getElementById(c),f=new bootstrap.Modal(p),b=p.querySelector(`#btn-copy-edit-qr-${this.id}`);b&&(b.onclick=async()=>{try{await navigator.clipboard.writeText(t.url);const x=b.innerHTML;b.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',b.classList.replace("btn-outline-primary","btn-success"),b.classList.add("text-white"),setTimeout(()=>{document.body.contains(b)&&(b.innerHTML=x,b.classList.replace("btn-success","btn-outline-primary"),b.classList.remove("text-white"))},2e3)}catch(x){console.error("Error al copiar",x)}}),p.addEventListener("hidden.bs.modal",()=>p.remove()),f.show()}),this.querySelector(".btn-github").onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"audio",onSelect:c=>{this.querySelector(".media-val-url").value=c,i(),this.render()}}}))}}}customElements.define("editor-audio",pm);const ME=Object.freeze(Object.defineProperty({__proto__:null,EditorAudio:pm},Symbol.toStringTag,{value:"Module"}));class fm extends ${render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const s=`
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
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",fm);const VE=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:fm},Symbol.toStringTag,{value:"Module"})),ss={themeColors:["primary","success","warning","danger","info","secondary"],getColor(n,e=1){let t;if(typeof n=="string"&&n!=="")t=n;else{const r=typeof n=="number"?n:0;t=this.themeColors[r%this.themeColors.length]}let i=getComputedStyle(document.documentElement).getPropertyValue(`--bs-${t}-rgb`).trim();return i||(i={primary:"13, 110, 253",success:"25, 135, 84",warning:"255, 193, 7",danger:"220, 53, 69",info:"13, 202, 240",secondary:"108, 117, 125",dark:"33, 37, 41",light:"248, 249, 250"}[t]||"108, 117, 125"),`rgba(${i}, ${e})`},_buildDataset(n,e,t,s){const i=["pie","doughnut","polarArea"].includes(n),r=n==="area"||e.type==="area"||n==="radar",o=e.color||s,l=i&&t.length>0?t.map((d,h)=>this.getColor(h,.7)):this.getColor(o,.7),c=i&&t.length>0?t.map((d,h)=>this.getColor(h,1)):this.getColor(o,1);return{label:e.name||`Serie ${s+1}`,data:t,type:e.type==="area"?"line":e.type||void 0,fill:r,yAxisID:e.yAxisID||"y",backgroundColor:l,borderColor:c,borderWidth:1,unit:e.unit||"",format:e.format||"number"}},processData(n,e=null){let t=[],s=[];return n.source==="table"&&e&&e.columns&&e.rows&&e.rows.length>0?(n.labelColumnId?t=e.rows.map(i=>{const r=i.find(o=>o.fieldId===n.labelColumnId);return r?String(r.value):""}):t=e.rows.map((i,r)=>`${r+1}`),Array.isArray(n.series)&&(s=n.series.map((i,r)=>{const o=e.columns.find(p=>p.id===i.columnId);let l="",c="number";o&&(o.tag==="setting-currency"?(l=o.currency||"$",c="currency"):o.tag==="setting-percentage"&&(l="%",c="percentage"));const d=e.rows.map(p=>{const f=p.find(I=>I.fieldId===i.columnId),b=String(f&&f.value!==void 0?f.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(b)||0}),h={...i,unit:i.unit||l,format:i.format||c};return this._buildDataset(n.type,h,d,r)}))):(t=(n.manualLabels||"").split(",").map(i=>i.trim()).filter(i=>i),Array.isArray(n.series)&&(s=n.series.map((i,r)=>{const o=(i.data||"").split(",").map(l=>parseFloat(l)||0);return this._buildDataset(n.type,i,o,r)}).filter(i=>i.data.length>0))),s.length===0&&e&&(t=["Sin Datos"],s=[{label:"Esperando datos...",data:[0],backgroundColor:"#e9ecef",borderColor:"#ced4da",borderWidth:1}]),{labels:t,datasets:s}},buildOptions(n,e,t,s="viewer",i=12){const r=s==="printer",o=s==="editor",l=n.type||"bar",c=i<=7;let d=10;r?d=c?6:i<=9?8:9:o&&(d=9);const h=p=>p!==void 0&&p!==""&&p!==null?Number(p):void 0;return{indexAxis:t,responsive:!0,maintainAspectRatio:!1,animation:!r,layout:{padding:{top:r||o?35:10,left:5,right:5,bottom:5}},plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:d+1},boxWidth:c?10:40,padding:c?5:10}},tooltip:{callbacks:{label:function(p){let f=p.dataset.label||"";if(f&&(f+=": "),p.parsed.y!==null||p.parsed.x!==null){const b=p.raw!==void 0?p.raw:t==="y"?p.parsed.x:p.parsed.y,I=p.dataset.unit||"",x=p.dataset.format||"number";let C=b;x==="currency"?C=`${I} ${Number(b).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:x==="percentage"?C=`${Number(b).toLocaleString()} ${I}`:C=Number(b).toLocaleString(),f+=C}return f}}},datalabels:{clip:!1,display:r?"auto":o?!["pie","doughnut","polarArea"].includes(l):p=>p.dataset.data[p.dataIndex]!==0,color:r?["pie","doughnut","polarArea"].includes(l)?"#777":"#000":()=>["pie","doughnut","polarArea"].includes(l)?"#666":"#000",font:{weight:"bold",size:["pie","doughnut","polarArea"].includes(l)?d+8:d},...r?{}:{formatter:(p,f)=>{const b=f.dataset.unit||"",I=f.dataset.format||"number",x=Math.round(p*100)/100;return I==="currency"?`${b} ${x.toLocaleString()}`:I==="percentage"?`${x}${b}`:x}},anchor:"end",align:r?t==="y"?"end":"top":p=>{if(t==="y")return"end";const f=p.dataset.type||l;return f==="line"||f==="radar"?"top":"end"},offset:r?1:o?0:4}},scales:["pie","doughnut","polarArea","radar"].includes(l)?{}:{x:{beginAtZero:!0,ticks:{font:{size:d},maxRotation:c?60:0,minRotation:c?45:0,autoSkip:!0,maxTicksLimit:c?8:void 0},grid:{display:!1}},y:{beginAtZero:l!=="line",position:"left",grid:{drawOnChartArea:!0,color:"rgba(0,0,0,0.05)"},ticks:{font:{size:d}},min:h(n.yLeftMin),max:h(n.yLeftMax),grace:"15%"},y1:{beginAtZero:l!=="line",position:"right",display:e.some(p=>p.yAxisID==="y1"),grid:{drawOnChartArea:!1},ticks:{font:{size:d}},min:h(n.yRightMin),max:h(n.yRightMax),grace:"15%"}}}}};class gm extends ${constructor(){super(),this._tempConfig={},this.chartInstance=null}static get observedAttributes(){return[...super.observedAttributes,"is-automatic","options"]}setData(e){super.setData(e),e.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("title")||"Gráfico",t=this.getAttribute("edit-value"),s=this.hasAttribute("is-automatic");let i={type:"column",source:"manual",series:[]};try{t&&(i=JSON.parse(t))}catch(I){console.error("Error parsing chart config:",I)}let r={aspectPercentage:75,bgColor:"#ffffff"};try{const I=this.getAttribute("options");I&&(r={...r,...JSON.parse(I)})}catch(I){console.error("Error parsing chart options:",I)}const l={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",area:"fa-chart-area",pie:"fa-chart-pie",doughnut:"fa-circle-dot",radar:"fa-spider",polarArea:"fa-bullseye"}[i.type]||"fa-chart-simple",c=`chart-editor-${this.id}`,d=s?`<button class="btn btn-light btn-sm w-100 mt-3 text-muted" disabled id="btn-cfg-${this.id}"><i class="fa-solid fa-robot me-1 text-success"></i> Controlado de Forma Automática (ETL)</button>`:`<button class="btn btn-outline-primary btn-sm w-100 mt-3" id="btn-cfg-${this.id}"><i class="fa-solid fa-gear me-1"></i> Configurar Gráfico</button>`,h=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid ${l} me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls(["bold","italic","color"])} 
          </div>
          <div style="position: relative; width: 100%; aspect-ratio: 100 / ${r.aspectPercentage}; display: flex; justify-content: center; align-items: center; background-color: ${r.bgColor}; border-radius: 4px; overflow: hidden;">
            <canvas id="${c}"></canvas>
          </div>
          ${d}
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(h);const p={addEventListener:()=>{},value:""};this._attachStyleEventListeners(p),s||(this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(i));const f=!s&&i.series&&i.series.length>0,b=s&&Object.keys(i).length>0;if(t&&(f||b))setTimeout(()=>this._renderChart(c,i),200);else{const I=this.querySelector(`#${c}`);if(I){const x=I.getContext("2d");x.fillStyle="#f8f9fa",x.fillRect(0,0,I.width,I.height),x.fillStyle="#6c757d",x.font="14px Arial",x.textAlign="center",x.fillText(s?"Esperando disparador automático...":'Haga clic en "Configurar Gráfico"',I.width/2,I.height/2)}}}_renderChart(e,t){const s=document.getElementById(e);if(!s||(this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null),!window.Chart))return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const i=this.hasAttribute("is-automatic");if(s.parentElement,i){try{this.chartInstance=new Chart(s,t)}catch(p){console.error("Error render automático en editor:",p)}return}let r=null;t.source==="table"&&t.tableId&&(r=document.querySelector(`editor-table[field-id="${t.tableId}"]`));const{labels:o,datasets:l}=ss.processData(t,r);if(!l.length)return;const c=["pie","doughnut","radar","polarArea"].includes(t.type)?t.type:t.type==="line"||t.type==="area"?"line":"bar",d=t.type==="bar"?"y":"x",h=ss.buildOptions(t,l,d,"editor");try{this.chartInstance=new Chart(s,{type:c,data:{labels:o,datasets:l},options:h})}catch(p){console.error("Error render editor:",p)}}_getColorPickerHTML(e,t){const s=["primary","success","warning","danger","info","secondary","dark"],i=e||s[t%6];let r='<div class="d-flex flex-wrap gap-1" style="width: 110px;">';return r+=`<button type="button" class="btn btn-sm w-100 mb-1 bg-light color-swatch ${e?"border text-muted":"border-primary text-primary fw-bold"}" data-val="" style="font-size: 0.75rem;">Rotación Auto</button>`,s.forEach(l=>{r+=`
            <button type="button" class="btn p-0 color-swatch ${e===l?"border-dark shadow-sm":"border-0"}" data-val="${l}" 
                    style="width: 24px; height: 24px; background-color: var(--bs-${l}); border-radius: 4px;" 
                    title="${l}">
            </button>`}),r+="</div>",`
        <button class="btn border dropdown-toggle px-2 bg-white d-flex align-items-center" type="button" data-bs-toggle="dropdown" title="Color de la serie" style="min-width: 45px; justify-content: center;">
            <span class="d-inline-block rounded-circle shadow-sm" style="width: 14px; height: 14px; background-color: var(--bs-${i});"></span>
        </button>
        <div class="dropdown-menu p-2 shadow-sm">
            ${r}
        </div>
    `}_openConfigModal(e){var c;this._tempConfig=JSON.parse(JSON.stringify(e)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const t=`modal-chart-${this.id}`;(c=document.getElementById(t))==null||c.remove();const s=`
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
                          <option value="area">Área</option>
                          <option value="pie">Circular (Pie)</option>
                          <option value="doughnut">Dona (Doughnut)</option>
                          <option value="radar">Radar</option> <!-- 🚀 Nuevo -->
                          <option value="polarArea">Área Polar</option> <!-- 🚀 Nuevo -->
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
                <div id="cfg-area-${this.id}"></div>
                <hr>
                <div class="row g-2 mb-3 bg-white p-2 border rounded shadow-sm">
                    <div class="col-12"><label class="form-label small fw-bold text-primary mb-0"><i class="fa-solid fa-arrows-up-down"></i> Ajuste Manual de Ejes (Opcional)</label></div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text bg-light" style="font-size:0.75rem;">Eje Izq. Min/Max</span>
                            <input type="number" class="form-control" id="cfg-yl-min-${this.id}" placeholder="Auto" value="${this._tempConfig.yLeftMin||""}">
                            <input type="number" class="form-control" id="cfg-yl-max-${this.id}" placeholder="Auto" value="${this._tempConfig.yLeftMax||""}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text bg-light" style="font-size:0.75rem;">Eje Der. Min/Max</span>
                            <input type="number" class="form-control" id="cfg-yr-min-${this.id}" placeholder="Auto" value="${this._tempConfig.yRightMin||""}">
                            <input type="number" class="form-control" id="cfg-yr-max-${this.id}" placeholder="Auto" value="${this._tempConfig.yRightMax||""}">
                        </div>
                    </div>
                </div>


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
    `;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById(t),r=new bootstrap.Modal(i),o=document.getElementById(`cfg-type-${this.id}`);o.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),o.onchange=d=>{this._tempConfig.type=d.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(d=>d.onchange=h=>{this._tempConfig.source=h.target.value,this._tempConfig.series=[],this._renderDynamicArea(h.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._tempConfig.yLeftMin=document.getElementById(`cfg-yl-min-${this.id}`).value,this._tempConfig.yLeftMax=document.getElementById(`cfg-yl-max-${this.id}`).value,this._tempConfig.yRightMin=document.getElementById(`cfg-yr-min-${this.id}`).value,this._tempConfig.yRightMax=document.getElementById(`cfg-yr-max-${this.id}`).value,this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),r.hide()},i.addEventListener("hidden.bs.modal",()=>i.remove()),r.show()}_renderDynamicArea(e){const t=document.getElementById(`cfg-area-${this.id}`);t.innerHTML="",e==="manual"?this._renderManualConfig(t):this._renderTableConfig(t)}_renderManualConfig(e){const t=this._tempConfig.type==="pie"||this._tempConfig.type==="doughnut";e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Etiquetas (Eje X) / Categorías</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" 
                   id="input-labels-${this.id}" value="${this._tempConfig.manualLabels||""}" placeholder="Ej: Enero, Febrero, Marzo">
            <div class="form-text small">Separadas por coma.</div>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label small fw-bold mb-0">Series de Datos</label>
            ${!t||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar Serie</button>`:""}
        </div>
        <div id="series-list-${this.id}" class="d-flex flex-column gap-2"></div>
    `;const s=e.querySelector(`#series-list-${this.id}`);(()=>{s.innerHTML="",this._tempConfig.series.forEach((o,l)=>{const c=`
          <option value="" ${o.type?"":"selected"}>Heredar</option>
          <option value="bar" ${o.type==="bar"?"selected":""}>Barra</option>
          <option value="line" ${o.type==="line"?"selected":""}>Línea</option>
          <option value="area" ${o.type==="area"?"selected":""}>Área</option> <!-- 🚀 Nueva opción mixta -->
        `,d=`
            <option value="y" ${!o.yAxisID||o.yAxisID==="y"?"selected":""}>Eje: Izq</option>
            <option value="y1" ${o.yAxisID==="y1"?"selected":""}>Eje: Der</option>
        `,h=document.createElement("div");h.className="input-group input-group-sm mb-1",h.innerHTML=`
                <input autocomplete="off" spellcheck="false" type="text" class="form-control sel-name" placeholder="Nombre Serie" value="${o.name||""}">
                <input autocomplete="off" spellcheck="false" type="text" class="form-control sel-data w-25" placeholder="Valores..." value="${o.data||""}">
                
                <!-- 👇 INYECCIÓN DEL COLOR PICKER 👇 -->
                ${this._getColorPickerHTML(o.color,l)}
                
                <select class="form-select text-secondary sel-type" style="max-width: 85px;" title="Tipo de gráfico">${c}</select>
                <select class="form-select text-secondary sel-axis" style="max-width: 85px;" title="Eje secundario">${d}</select>
                <button class="btn btn-outline-danger btn-del-serie" title="Eliminar serie"><i class="fa-solid fa-trash"></i></button>
            `,h.querySelector(".sel-name").oninput=p=>this._tempConfig.series[l].name=p.target.value,h.querySelector(".sel-data").oninput=p=>this._tempConfig.series[l].data=p.target.value,h.querySelector(".sel-type").onchange=p=>this._tempConfig.series[l].type=p.target.value,h.querySelector(".sel-axis").onchange=p=>this._tempConfig.series[l].yAxisID=p.target.value,h.querySelectorAll(".color-swatch").forEach(p=>{p.onclick=f=>{f.preventDefault(),this._tempConfig.series[l].color=p.getAttribute("data-val"),this._renderDynamicArea("manual")}}),h.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(l,1),this._renderDynamicArea("manual")},s.appendChild(h)})})();const r=e.querySelector(`#btn-add-serie-${this.id}`);r&&(r.onclick=()=>{this._tempConfig.series.push({name:t?"Datos":"",data:""}),this._renderDynamicArea("manual")}),e.querySelector(`#input-labels-${this.id}`).oninput=o=>{this._tempConfig.manualLabels=o.target.value}}_renderTableConfig(e){const t=document.getElementById("document-canvas"),s=Array.from(t.querySelectorAll("editor-table"));if(s.length===0){e.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let i='<option value="">-- Seleccionar Tabla --</option>';s.forEach(l=>{let c=l.getAttribute("title")||`Tabla ${l.getAttribute("field-id")}`;if(l.getData){const h=l.getData();h.title&&(c=h.title)}const d=this._tempConfig.tableId===l.getAttribute("field-id")?"selected":"";i+=`<option value="${l.getAttribute("field-id")}" ${d}>${c}</option>`}),e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">${i}</select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const r=e.querySelector(`#select-table-${this.id}`),o=()=>{const l=this._tempConfig.tableId,c=e.querySelector(`#table-cols-area-${this.id}`);if(c.innerHTML="",!l)return;const d=s.find(C=>C.getAttribute("field-id")===l);if(!d||!d.columns)return;const h=d.columns,p=h.filter(C=>["setting-number","setting-currency","setting-percentage"].includes(C.tag));let f='<option value="">-- (Fila #) --</option>';h.forEach(C=>{const k=this._tempConfig.labelColumnId===C.id?"selected":"";f+=`<option value="${C.id}" ${k}>${C.title}</option>`}),c.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">${f}</select>
            </div>
        `;const b=this._tempConfig.type==="pie";c.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!b||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const I=c.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((C,k)=>{let N='<option value="">-- Columna --</option>';p.forEach(X=>{const w=C.columnId===X.id?"selected":"";N+=`<option value="${X.id}" ${w}>${X.title}</option>`});const G=`
            <option value="" ${C.type?"":"selected"}>Heredar</option>
            <option value="bar" ${C.type==="bar"?"selected":""}>Barra</option>
            <option value="line" ${C.type==="line"?"selected":""}>Línea</option>
            <option value="area" ${C.type==="area"?"selected":""}>Área</option>
        `,se=`
            <option value="y" ${!C.yAxisID||C.yAxisID==="y"?"selected":""}>Eje: Izq</option>
            <option value="y1" ${C.yAxisID==="y1"?"selected":""}>Eje: Der</option>
        `,oe=document.createElement("div");oe.className="input-group input-group-sm mb-1",oe.innerHTML=`
                <span class="input-group-text bg-white px-2"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select sel-col" title="Columna de la tabla">${N}</select>
                
                <!-- 👇 INYECCIÓN DEL COLOR PICKER 👇 -->
                ${this._getColorPickerHTML(C.color,k)}

                <select class="form-select text-secondary sel-type" style="max-width: 85px;" title="Tipo de gráfico mixto">${G}</select>
                <select class="form-select text-secondary sel-axis" style="max-width: 85px;" title="Eje secundario">${se}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `,oe.querySelector(".sel-col").onchange=X=>{const w=X.target.value,y=p.find(_=>_.id===w);this._tempConfig.series[k].columnId=w,this._tempConfig.series[k].name=y?y.title:"Serie "+(k+1)},oe.querySelector(".sel-type").onchange=X=>this._tempConfig.series[k].type=X.target.value,oe.querySelector(".sel-axis").onchange=X=>this._tempConfig.series[k].yAxisID=X.target.value,oe.querySelectorAll(".color-swatch").forEach(X=>{X.onclick=w=>{w.preventDefault(),this._tempConfig.series[k].color=X.getAttribute("data-val"),this._renderDynamicArea("table")}}),oe.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(k,1),o()},I.appendChild(oe)});const x=c.querySelector(`#btn-add-tbl-serie-${this.id}`);x&&(x.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),o()}),c.querySelector(`#select-label-col-${this.id}`).onchange=C=>{this._tempConfig.labelColumnId=C.target.value}};this._tempConfig.tableId&&o(),r.onchange=l=>{this._tempConfig.tableId=l.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",o()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const e=document.getElementById(`input-labels-${this.id}`);e&&(this._tempConfig.manualLabels=e.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const e=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(e&&e.rows){if(this._tempConfig.labelColumnId){const t=e.rows.map(s=>{const i=s.find(r=>r.fieldId===this._tempConfig.labelColumnId);return i?String(i.value).replace(/,/g," "):""});this._tempConfig.manualLabels=t.join(", ")}else this._tempConfig.manualLabels=e.rows.map((t,s)=>s+1).join(", ");this._tempConfig.series.forEach(t=>{const s=e.rows.map(i=>{const r=i.find(l=>l.fieldId===t.columnId),o=String(r?r.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(o)||0});t.data=s.join(", ")})}}}}customElements.define("editor-chart",gm);const OE=Object.freeze(Object.defineProperty({__proto__:null,EditorChart:gm},Symbol.toStringTag,{value:"Module"}));class Tr extends ${_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=`form-control form-control-sm shadow-none ${i?"bg-light text-muted":""}`,o=i?"readonly":"",l=i?"Calculado...":"0.00",c=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="number" class="${r}" 
                 id="input-${this.id}" value="${t}" style="${s}" 
                 placeholder="${l}"
                 ${o}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(c),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let s=e.value.trim();if(s!=="")try{const i=s.replace(/,/g,"."),r=new Function(`"use strict"; return (${i})`)();!isNaN(r)&&isFinite(r)&&(e.value=r,this.setAttribute("edit-value",r),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=s=>{s.key==="Enter"&&(s.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",Tr);const $E=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:Tr},Symbol.toStringTag,{value:"Module"}));class bm extends Tr{static get observedAttributes(){return[...super.observedAttributes,"currency"]}setData(e){super.setData(e),e.currency&&this.setAttribute("currency",e.currency)}render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",s=this.getAttribute("currency")||"$",i=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),o=`form-control shadow-none border-1 ${r?"bg-light text-muted":""}`,l=r?"readonly":"",c=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${this.uiColor}"></i> ${e}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${s}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                   id="input-${this.id}" value="${t}" style="${i}" 
                   placeholder="0.00"
                   ${l}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(c),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e))}}customElements.define("editor-currency",bm);const NE=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:bm},Symbol.toStringTag,{value:"Module"})),er=class er extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||er.getToday(),s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-calendar-days me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()}
          </div>
          <input autocomplete="off" spellcheck="false" type="date" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};Pl(er,"getToday",()=>new Date().toISOString().split("T")[0]);let Zi=er;customElements.define("editor-date",Zi);const BE=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:Zi},Symbol.toStringTag,{value:"Module"}));class ym extends ${render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-at me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="email" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}" placeholder="usuario@ejemplo.com">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",ym);const UE=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:ym},Symbol.toStringTag,{value:"Module"}));class vm extends ${render(){const e=this.getAttribute("title")||"Imagen";let t={url:"",imgTitle:"",caption:""};try{const o=this.getAttribute("edit-value");o&&(t=JSON.parse(o))}catch{t.url=this.getAttribute("edit-value")||""}const s=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-regular fa-image me-1"></i> ${e}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL de la Imagen</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control img-val-url" placeholder="https://... o buscar en GitHub" value="${t.url}">
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub">
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>
            
            <div class="row g-2 mb-3">
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Título de la foto</label>
                    <input type="text" class="form-control form-control-sm img-val-title" placeholder="Ej: Atardecer en la costa" value="${t.imgTitle}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda (Caption)</label>
                    <input type="text" class="form-control form-control-sm img-val-caption" placeholder="Ej: Tomada durante el evento..." value="${t.caption}">
                </div>
            </div>

            ${t.url?`<div class="text-center bg-white border rounded p-2">
                   <img src="${t.url}" class="img-fluid rounded mb-2" style="max-height: 300px; object-fit: contain;">
                   ${t.imgTitle||t.caption?`
                     <div class="mt-2 text-center small text-muted">
                       ${t.imgTitle?`<span class="fw-bold text-dark">${t.imgTitle}</span>`:""}
                       ${t.imgTitle&&t.caption?": ":""}
                       ${t.caption?`<span class="fst-italic">${t.caption}</span>`:""}
                     </div>
                   `:""}
                 </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-regular fa-image fs-1 mb-2 d-block opacity-25"></i> Sin imagen seleccionada</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s);const i=()=>{const o={url:this.querySelector(".img-val-url").value,imgTitle:this.querySelector(".img-val-title").value,caption:this.querySelector(".img-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(o)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(o=>{o.oninput=i,o.onchange=()=>this.render()}),this.querySelector(".btn-github").onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"image",onSelect:o=>{this.querySelector(".img-val-url").value=o,i(),this.render()}}}))}}}customElements.define("editor-image",vm);const FE=Object.freeze(Object.defineProperty({__proto__:null,EditorImage:vm},Symbol.toStringTag,{value:"Module"}));class _m extends ${render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",s=`
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
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",_m);const jE=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:_m},Symbol.toStringTag,{value:"Module"}));class wm extends Tr{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${i?"bg-light text-muted":""}" 
                   id="input-${this.id}" value="${t}" style="${s}" 
                   placeholder="0.00"
                   ${i?"readonly":""}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",wm);const qE=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:wm},Symbol.toStringTag,{value:"Module"}));class Em extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",Em);const HE=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:Em},Symbol.toStringTag,{value:"Module"}));class Tm extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options!==void 0&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",i=(this.getAttribute("options")||"").split(",").map(l=>l.trim()).filter(l=>l!==""),r=this.getCommonStyles(),o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-caret-down me-1 text-${this.uiColor}"></i> ${e}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${r}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${i.map(l=>`<option value="${l}" ${t===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",Tm);const zE=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:Tm},Symbol.toStringTag,{value:"Module"}));class Im extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-font text-${this.uiColor}"></i> ${e}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",Im);const GE=Object.freeze(Object.defineProperty({__proto__:null,EditorString:Im},Symbol.toStringTag,{value:"Module"})),Ze={filterRows(n,e){if(!e||!e.trim())return n;const t=e.toLowerCase().split(/\s+/).filter(s=>s);return n.filter(s=>{const i=s.map(r=>{let o=r.value;if(typeof o=="string"&&o.startsWith("{")&&o.includes('"url"'))try{o=JSON.parse(o).text}catch{}return String(o||"").toLowerCase()}).join(" ");return t.every(r=>i.includes(r))})},sortRows(n,e,t,s){if(!e)return n;const i=s.find(o=>o.id===e);if(!i)return n;const r=["setting-number","setting-currency","setting-percentage"].includes(i.tag);return[...n].sort((o,l)=>{const c=o.find(b=>b.fieldId===e),d=l.find(b=>b.fieldId===e);let h=c?c.value:"",p=d?d.value:"",f;if(r)f=(parseFloat(h)||0)-(parseFloat(p)||0);else{if(i.tag==="setting-url"){try{h=JSON.parse(h).text||""}catch{}try{p=JSON.parse(p).text||""}catch{}}f=String(h).localeCompare(String(p))}return t?f:f*-1})},calculateTotal(n,e){return n.reduce((t,s)=>{const i=s.find(o=>o.fieldId===e),r=parseFloat(i?i.value:0);return t+(isNaN(r)?0:r)},0)},formatTotalHtml(n,e,t=""){let s;if(e.tag==="setting-currency"){const i=e.currency||"$",r=n.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2});s=`<span ${t}>${i} ${r}</span>`}else e.tag==="setting-percentage"?s=`<span ${t}>${n}%</span>`:s=`<span ${t}>${n}</span>`;return s}},Xt={exportCSV(n,e,t=","){let s=[];e.forEach(r=>{r.tag==="setting-url"?(s.push(`"${r.title} (Texto)"`),s.push(`"${r.title} (URL)"`)):s.push(`"${r.title}"`)});const i=n.map(r=>e.map(o=>{const l=r.find(d=>d.fieldId===o.id);let c=l?l.value:"";if(o.tag==="setting-url"){let d="",h="";try{const p=typeof c=="string"&&c.startsWith("{")?JSON.parse(c):c;d=p.text||"",h=p.url||""}catch{}return`"${String(d).replace(/"/g,'""')}","${String(h).replace(/"/g,'""')}"`}return c=String(c).replace(/"/g,'""'),`"${c}"`}).join(t));return s.join(t)+`
`+i.join(`
`)},parseCSV(n,e,t=","){const s=n.split(/\r?\n/).filter(d=>d.trim()!=="");if(s.length<2)throw new Error("El archivo CSV no tiene cabeceras o datos válidos.");const i=d=>{const h=[];let p=0,f=!1;for(let I=0;I<d.length;I++)if(d[I]==='"')f=!f;else if(d[I]===t&&!f){let x=d.substring(p,I);x.startsWith('"')&&x.endsWith('"')&&(x=x.slice(1,-1)),h.push(x.replace(/""/g,'"')),p=I+1}let b=d.substring(p);return b.startsWith('"')&&b.endsWith('"')&&(b=b.slice(1,-1)),h.push(b.replace(/""/g,'"')),h},r=[],o=[];e.forEach(d=>{d.tag==="setting-url"?(r.push({colDef:d,type:"url-text"}),r.push({colDef:d,type:"url-url"}),o.push(`${d.title} (Texto)`),o.push(`${d.title} (URL)`)):(r.push({colDef:d,type:"normal"}),o.push(d.title))});const l=i(s[0]);if(l.length!==o.length)throw new Error(`Estructura inválida. El archivo tiene ${l.length} columnas, pero la tabla requiere ${o.length}. Descargue la plantilla de ejemplo.`);for(let d=0;d<o.length;d++){const h=o[d].trim().toLowerCase(),p=(l[d]||"").trim().toLowerCase();if(h!==p)throw new Error(`Cabecera incorrecta: Se esperaba '${o[d]}' pero se encontró '${l[d]}'. Por favor, utilice la plantilla de ejemplo.`)}const c=[];for(let d=1;d<s.length;d++){const h=i(s[d]);if(h.length!==r.length)continue;const p={};for(let b=0;b<h.length;b++){const I=h[b],x=r[b];if(!x)continue;const C=x.colDef.id,k=x.colDef.tag;if(p[C]||(p[C]={fieldId:C,tag:k}),["setting-number","setting-currency","setting-percentage"].includes(k))if(I.trim()!==""){const N=parseFloat(I.replace(/[^0-9.-]/g,""));if(isNaN(N))throw new Error(`Error en la fila de datos #${d}: El valor '${I}' no es un número válido para la columna '${x.colDef.title}'.`);p[C].value=N}else p[C].value=0;else x.type==="normal"?p[C].value=I:x.type==="url-text"?p[C].tempText=I:x.type==="url-url"&&(p[C].tempUrl=I)}const f=Object.values(p).map(b=>b.tag==="setting-url"?{fieldId:b.fieldId,value:JSON.stringify({text:b.tempText||"",url:b.tempUrl||""})}:{fieldId:b.fieldId,value:String(b.value||"")});c.push(f)}return c},exportJSON(n,e){const t=n.map(s=>{const i={};return e.forEach(r=>{const o=s.find(c=>c.fieldId===r.id);let l=o?o.value:"";if(r.tag==="setting-url")try{l=typeof l=="string"?JSON.parse(l):l}catch{l={text:"",url:""}}else["setting-number","setting-currency","setting-percentage"].includes(r.tag)?l=parseFloat(l)||0:r.tag==="setting-boolean"&&(l=l==="true"||l===!0);i[r.title]=l}),i});return JSON.stringify(t,null,2)},parseJSON(n,e){let t;try{t=JSON.parse(n)}catch{throw new Error("El archivo no es un JSON válido.")}if(!Array.isArray(t))throw new Error("El JSON debe contener un arreglo de registros.");return t.map((s,i)=>e.map(r=>{let o=s[r.title];if(o===void 0)throw new Error(`Error estructural: Falta la columna '${r.title}' en el registro #${i+1}.`);if(["setting-number","setting-currency","setting-percentage"].includes(r.tag))if(o!==""&&o!==null){const l=parseFloat(String(o).replace(/[^0-9.-]/g,""));if(isNaN(l))throw new Error(`Error en el registro #${i+1}: El valor '${o}' no es numérico para la columna '${r.title}'.`);o=l}else o=0;if(r.tag==="setting-url"){let l={text:"",url:""};typeof o=="object"&&o!==null?l={text:o.text||"",url:o.url||""}:typeof o=="string"&&(l={text:o,url:o}),o=JSON.stringify(l)}else typeof o=="object"?o=JSON.stringify(o):o=String(o);return{fieldId:r.id,value:o}}))},generateMockRow(n){return n.map(e=>{let t="Ejemplo";if(["setting-number","setting-currency"].includes(e.tag))t="1500.50";else if(e.tag==="setting-percentage")t="16";else if(e.tag==="setting-boolean")t="true";else if(e.tag==="setting-date")t=new Date().toISOString().split("T")[0];else if(e.tag==="setting-email")t="correo@ejemplo.com";else if(e.tag==="setting-url")t=JSON.stringify({text:"Visitar sitio",url:"https://ejemplo.com"});else if(e.tag==="setting-select"&&e.options){const s=e.options.split(",");t=s.length>0?s[0].trim():"Opción"}return{fieldId:e.id,value:t}})}},ud={openExportModal(n,e,t){if(!t||t.length===0){alert("No hay datos en la tabla para exportar.");return}const s=`modal-export-${Date.now()}`,i=`
      <div class="modal fade" id="${s}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-success py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-download me-2"></i>Exportar Datos</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
              <p class="small text-muted mb-3">Selecciona el formato en el que deseas descargar los <strong>${t.length} registros</strong> de la tabla.</p>
              
              <div class="mb-3">
                <label class="form-label small fw-bold">Formato de Exportación</label>
                <select class="form-select form-select-sm shadow-none" id="export-format-${s}">
                  <option value="csv_comma">CSV (Separado por comas - Estándar)</option>
                  <option value="csv_semicolon">CSV (Separado por punto y coma - Excel ES)</option>
                  <option value="json">JSON (Estructura de Objetos)</option>
                </select>
              </div>
            </div>
            <div class="modal-footer p-2 bg-light">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success btn-sm px-4 fw-bold" id="btn-execute-export-${s}">
                Descargar Archivo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(s),o=new window.bootstrap.Modal(r);o.show(),document.getElementById(`btn-execute-export-${s}`).onclick=()=>{const l=document.getElementById(`export-format-${s}`).value,c=(n||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();let d,h,p;try{l==="csv_comma"?(d=Xt.exportCSV(t,e,","),h=`${c}_export.csv`,p="text/csv;charset=utf-8;"):l==="csv_semicolon"?(d=Xt.exportCSV(t,e,";"),h=`${c}_excel_export.csv`,p="text/csv;charset=utf-8;"):l==="json"&&(d=Xt.exportJSON(t,e),h=`${c}_export.json`,p="application/json;charset=utf-8;"),this._downloadFile(d,h,p),o.hide()}catch(f){alert("Error al exportar: "+f.message)}},r.addEventListener("hidden.bs.modal",()=>r.remove())},openImportModal(n,e,t){const s=`modal-import-${Date.now()}`,i=e.map(f=>f.tag==="setting-url"?`<span class="badge bg-primary mb-1 me-1 text-wrap text-start">${f.title} (Texto)</span>
                <span class="badge bg-info mb-1 me-1 text-wrap text-start">${f.title} (URL)</span>`:`<span class="badge bg-secondary mb-1 me-1 text-wrap text-start">${f.title}</span>`).join(""),r=`
      <div class="modal fade" id="${s}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-upload me-2"></i>Asistente de Importación</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            
            <div class="modal-body p-4 bg-light">
              <div class="row g-4">
                <!-- Columna Izquierda: Instrucciones y Plantilla -->
                <div class="col-md-6 border-end">
                  <h6 class="fw-bold text-dark mb-3"><i class="fa-solid fa-circle-info me-2 text-primary"></i>Instrucciones</h6>
                  <p class="small text-muted mb-2">Para garantizar que los datos se importen correctamente, el archivo debe contener <strong>exactamente</strong> las siguientes cabeceras:</p>
                  <div class="p-2 bg-white border rounded mb-3" style="max-height: 120px; overflow-y: auto;">
                    ${i}
                  </div>
                  
                  <div class="alert alert-warning small py-2 px-3 mb-3">
                    <i class="fa-solid fa-triangle-exclamation me-1"></i> Se soportan archivos <strong>.CSV</strong> o <strong>.JSON</strong>.
                  </div>

                  <button class="btn btn-outline-primary btn-sm w-100 fw-bold" id="btn-download-tpl-${s}">
                    <i class="fa-solid fa-file-csv me-2"></i>Descargar Plantilla de Ejemplo
                  </button>
                </div>

                <!-- Columna Derecha: Carga de Archivo -->
                <div class="col-md-6 d-flex flex-column justify-content-center">
                  <label class="form-label fw-bold text-dark">Seleccionar Archivo:</label>
                  <input type="file" id="file-upload-${s}" class="form-control mb-3" accept=".csv, .json">
                  
                  <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Si es CSV, ¿qué separador usa?</label>
                    <select class="form-select form-select-sm shadow-none" id="import-separator-${s}">
                      <option value="auto">Detectar Automáticamente</option>
                      <option value=",">Coma ( , )</option>
                      <option value=";">Punto y coma ( ; )</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer p-2 bg-light">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary btn-sm px-4 fw-bold" id="btn-execute-import-${s}" disabled>
                Procesar e Importar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById(s),l=new window.bootstrap.Modal(o);l.show();const c=document.getElementById(`file-upload-${s}`),d=document.getElementById(`btn-execute-import-${s}`),h=document.getElementById(`btn-download-tpl-${s}`),p=document.getElementById(`import-separator-${s}`);c.addEventListener("change",()=>{d.disabled=!c.files.length}),h.onclick=()=>{try{const f=Xt.generateMockRow(e),b=Xt.exportCSV([f],e,","),I=(n||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();this._downloadFile(b,`plantilla_${I}.csv`,"text/csv;charset=utf-8;")}catch(f){alert("Error generando la plantilla: "+f.message)}},d.onclick=()=>{const f=c.files[0];if(!f)return;const b=new FileReader;b.onload=I=>{try{const x=I.target.result;let C=[];if(f.name.toLowerCase().endsWith(".json"))C=Xt.parseJSON(x,e);else{let k=p.value;if(k==="auto"){const N=x.split(`
`)[0]||"";k=N.split(";").length>N.split(",").length?";":","}C=Xt.parseCSV(x,e,k)}C.length>0?(t(C),l.hide()):alert("El archivo fue procesado pero no se encontraron registros válidos. Verifique la estructura.")}catch(x){alert("Error de importación: "+x.message)}},b.readAsText(f)},o.addEventListener("hidden.bs.modal",()=>o.remove())},_downloadFile(n,e,t){const s=new Blob([n],{type:t}),i=URL.createObjectURL(s),r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}};class Am extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch(t){console.error("[EditorTable] Error al parsear JSON:",t.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_mapExternalDataToRows(e){return e.map(t=>this.columns.map(s=>{let i=t[s.title];if(i===void 0){const r=Object.keys(t).find(o=>o.toLowerCase()===s.title.toLowerCase());r&&(i=t[r])}return i===void 0&&(i=t[s.id]),i==null&&(i=""),typeof i=="object"&&(i=JSON.stringify(i)),{fieldId:s.id,value:i}}))}setCalculatedValue(e){if(!Array.isArray(e))return;const t=this._mapExternalDataToRows(e);JSON.stringify(this.rows)!==JSON.stringify(t)&&(this.rows=t,this._renderRows(),this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())))}_getFriendlyData(){return this.rows.map(e=>{const t={};return e.forEach(s=>{t[s.fieldId]=s.value}),t})}_getGridColumns(){return(this.columns||[]).filter(e=>!(e.hideView===!0||e.hideView==="true"||e.hideView===""||e["hide-view"]===!0||e["hide-view"]==="true"||e["hide-view"]===""))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-${this.uiColor} border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${e}</h6>
              <div class="d-flex gap-2 align-items-center">
                ${this.renderStyleControls(["bold","italic","color"])}
                
                <!-- GRUPO DE BOTONES REORGANIZADO -->
                <div class="btn-group shadow-sm">
                    <button class="btn btn-sm btn-outline-success" id="btn-export-${this.id}" title="Exportar CSV/JSON">
                        <i class="fa-solid fa-download"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary" id="btn-import-trigger-${this.id}" title="Importar desde CSV/JSON">
                        <i class="fa-solid fa-upload"></i>
                    </button>
                    <button class="btn btn-sm btn-primary fw-bold" id="btn-add-${this.id}">
                        <i class="fa-solid fa-plus me-1"></i> Agregar
                    </button>
                    <button class="btn btn-sm btn-danger fw-bold btn-empty-table" id="btn-empty-${this.id}">
                        <i class="fa-solid fa-trash-can me-2"></i>Vaciar
                    </button>
                    
                    <!-- Botón de utilidades a la derecha
                    <button type="button" class="btn btn-sm btn-light border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Utilidades de la tabla">
                      <i class="fa-solid fa-ellipsis-vertical px-1"></i>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-end shadow">
                        <li><h6 class="dropdown-header">Utilidades</h6></li>
                        <li><button class="dropdown-item small btn-copy-table" data-action="copy"><i class="fa-regular fa-copy me-2 text-muted"></i>Copiar valor</button></li>
                        <li><button class="dropdown-item small btn-paste-table" data-action="paste"><i class="fa-solid fa-paste me-2 text-muted"></i>Pegar valor</button></li>
                        <li><hr class="dropdown-divider"></li>
                        <li></li>
                    </ul> -->
                </div>

              </div>
            </div>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-search text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
            </div>
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
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=r=>{this._searchTerm=r.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>{const r=this.getAttribute("title")||"Tabla";ud.openExportModal(r,this._getGridColumns(),this.rows)},this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>{const r=this.getAttribute("title")||"Tabla";ud.openImportModal(r,this._getGridColumns(),o=>{this.hasAttribute("prepend-rows")?this.rows=[...o.reverse(),...this.rows]:this.rows=[...this.rows,...o],this._renderRows(),this._dispatchChange(),alert(`¡Completado! Se importaron ${o.length} registros a la tabla.`)})};const t=this.querySelector(`#btn-empty-${this.id}`);t&&(t.onclick=()=>{if(this.rows.length>0&&confirm("⚠️ ¿Está seguro que desea eliminar TODOS los registros de la tabla?")){this.rows=[],this.setAttribute("edit-value","[]");const r=this.querySelector(`#table-body-${this.id}`);r&&(r.innerHTML="");const o=this.querySelector(`#table-footer-${this.id}`);o&&(o.innerHTML="")}});const s=this.querySelector(".btn-copy-table");s&&(s.onclick=()=>{navigator.clipboard.writeText(JSON.stringify(this.rows)).then(()=>alert("Datos copiados al portapapeles."))});const i=this.querySelector(".btn-paste-table");i&&(i.onclick=async()=>{try{const r=await navigator.clipboard.readText(),o=JSON.parse(r);Array.isArray(o)?(this.rows=o,this._renderRows(),this._dispatchChange(),alert("Datos pegados exitosamente.")):alert("El formato de los datos en el portapapeles no es válido para esta tabla.")}catch(r){console.error("[EditorTable] Error al parsear el portapapeles:",r.message),alert("No se pudo leer el portapapeles o el formato no es válido.")}})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this._getGridColumns().forEach(i=>{const r=i.alignment||"left",o=this._sortFieldId===i.id;let l='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';o&&(l=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),t+=`
      <th class="fw-bold px-3 py-2 border-bottom col-sortable" 
          data-col-id="${i.id}" 
          style="text-align: ${r}; cursor: pointer; user-select: none;">
          ${i.title} ${l}
      </th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t,e.querySelectorAll(".col-sortable").forEach(i=>{i.onclick=()=>{const r=i.dataset.colId;this._sortFieldId===r?this._sortAsc=!this._sortAsc:(this._sortFieldId=r,this._sortAsc=!0),this._renderHeader(),this._renderRows()}})}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;e.innerHTML="",this._sortFieldId&&(this.rows=Ze.sortRows(this.rows,this._sortFieldId,this._sortAsc,this.columns),this._dispatchChange());let t=this.rows.map((s,i)=>({data:s,originalIndex:i}));if(this._searchTerm.trim()){const s=Ze.filterRows(this.rows,this._searchTerm);t=t.filter(i=>s.includes(i.data))}t.forEach(s=>{const{data:i,originalIndex:r}=s,o=document.createElement("tr");o.setAttribute("data-original-index",r);const l=document.createElement("td"),c=!this._searchTerm&&!this._sortFieldId;c?(l.className="drag-handle text-center text-muted align-middle cursor-grab py-2",l.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(l.className="text-center text-muted align-middle py-2 small opacity-50",l.innerHTML=this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',l.title="Orden automático activo"),o.appendChild(l),this._getGridColumns().forEach(p=>{const f=document.createElement("td");f.className="px-3 py-2",f.style.textAlign=p.alignment||"left";const b=i.find(C=>C.fieldId===p.id),I=p.tag.replace("setting-","viewer-"),x=document.createElement(I);x.setAttribute("table",""),x.setData&&x.setData({...b,title:"",spanEV:12,options:p.options,currency:p.currency}),f.appendChild(x),o.appendChild(f)});const h=document.createElement("td");h.className="text-end px-3 py-2",h.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,h.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(r),h.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(r,1),this._renderRows(),this._dispatchChange())},o.appendChild(h),e.appendChild(o),c&&Ca.init(o,".drag-handle",()=>this._handleReorder())}),this._renderFooter(t.map(s=>s.data))}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t)return;t.innerHTML="";const s=this._getGridColumns();if(!s.some(o=>o.total)||!e||e.length===0)return;let r="<tr><td></td>";s.forEach(o=>{let l="";if(o.total){const c=Ze.calculateTotal(e,o.id),d=`id="TOTAL_${this.id}_${o.id}" data-raw-value="${c}"`;l=Ze.formatTotalHtml(c,o,d)}r+=`<td class="px-3 py-2" style="text-align: ${o.alignment||"left"};">${l}</td>`}),r+="<td></td></tr>",t.innerHTML=r}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(i=>{const r=parseInt(i.getAttribute("data-original-index"));!isNaN(r)&&this.rows[r]&&t.push(this.rows[r])}),t.length===this.rows.length&&(this.rows=t)}_dispatchChange(){this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())),setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_openFormModal(e=null){var c;const t=e!==null,s=`modal-form-${this.id}`;(c=document.getElementById(s))==null||c.remove();const i=`
      <div class="modal fade" id="${s}" tabindex="-1" data-bs-backdrop="static">
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
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`form-container-${this.id}`);this.columns.forEach(d=>{const h=d.tag.replace("setting-","editor-"),p=document.createElement(h);p.setAttribute("table",""),p.setAttribute("field-id",d.id),(d.hideEdit===!0||d.hideEdit==="true"||d.hideEdit===""||d["hide-edit"]===!0||d["hide-edit"]==="true"||d["hide-edit"]==="")&&p.classList.add("d-none");let b={title:d.title,spanEV:12,options:d.options,currency:d.currency,apiConfig:d.apiConfig,apiUrl:d.apiUrl,apiPath:d.apiPath};if(t){const I=this.rows[e].find(x=>x.fieldId===d.id);I&&(b={...b,...I})}p.setData&&p.setData(b),r.appendChild(p)});const o=document.getElementById(s),l=new bootstrap.Modal(o);l.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const h=Array.from(r.children).map(p=>{const f=p.getData();return f.fieldId=p.getAttribute("field-id"),f});t?this.rows[e]=h:this.hasAttribute("prepend-rows")?this.rows.unshift(h):this.rows.push(h),this._renderRows(),this._dispatchChange(),l.hide(),o.addEventListener("hidden.bs.modal",()=>o.remove())}}}customElements.define("editor-table",Am);const WE=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:Am},Symbol.toStringTag,{value:"Module"}));class xm extends ${constructor(){super(),this.quill=null,this._quillTimeout=null}render(){const e=this.getAttribute("title")||"Campo";let t=this.getAttribute("edit-value")||"";if(t&&!/<\/?[a-z][\s\S]*>/i.test(t)&&(t=t.replace(/\n/g,"<br>")),this.quill){const i=this.querySelector(".form-label");i&&(i.innerHTML=`<i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}`),this._isInternalUpdate||this.quill.root.innerHTML!==t&&t!==""&&this.quill.clipboard.dangerouslyPasteHTML(t);return}const s=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}
              </label>
            </div>
          </div>
          <!-- Contenedor donde Quill montará el editor -->
          <div id="quill-editor-${this.id}" style="min-height: 120px; font-size: 0.9rem;" class="border-1 rounded-bottom border-top-0">
            ${t}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._quillTimeout&&clearTimeout(this._quillTimeout),this._quillTimeout=setTimeout(()=>this._initQuill(),50)}_initQuill(){if(!window.Quill){console.warn("Quill.js no está cargado.");return}const e=this.querySelector(`#quill-editor-${this.id}`);if(!e)return;const t=[["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["clean"]];this.quill=new Quill(e,{theme:"snow",modules:{toolbar:t},placeholder:`Escriba el contenido de ${this.getAttribute("title")}...`}),this.quill.on("text-change",()=>{this._isInternalUpdate=!0;const s=this.quill.root.innerHTML;this.setAttribute("edit-value",s==="<p><br></p>"?"":s),this._isInternalUpdate=!1})}}customElements.define("editor-text",xm);const KE=Object.freeze(Object.defineProperty({__proto__:null,EditorText:xm},Symbol.toStringTag,{value:"Module"}));class Sm extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let s={url:"",text:""};try{t&&(s=JSON.parse(t))}catch{}let i={showTextUrl:!0,showQR:!0};try{const f=this.getAttribute("options");f&&(i={...i,...JSON.parse(f)})}catch{}let r=s.url||"";r&&!r.startsWith("http")&&(r="https://"+r);const o=this._checkExtension(r,["mp3","wav","ogg","m4a"]),l=this._checkExtension(r,["jpg","jpeg","png","gif","webp","svg"])||r.includes("quickchart.io/chart"),c=this._checkVideo(r),d=this._checkInternalDoc(r),h=s.text||(i.showTextUrl?s.url:"Enlace"),p=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary d-flex justify-content-between align-items-center w-100">
          <span><i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${e}</span>
          ${this.renderStyleControls(["bold","italic","color"])}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            
            <div class="mb-2">
                <label class="form-label small text-muted mb-1">Dirección Web (URL)</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-globe text-muted"></i></span>
                  <input type="url" class="form-control url-val-input font-monospace text-primary" placeholder="https://..." value="${s.url}">
                </div>
            </div>
            
            <div class="mb-3">
                <label class="form-label small text-muted mb-1">Texto a mostrar</label>
                <input type="text" class="form-control form-control-sm text-val-input" placeholder="Ej: Visitar Google" value="${s.text}">
            </div>

            ${s.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           ${this._renderActionButton(o,l,c,d)}
                           
                           ${i.showQR?`
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>`:""}
                           
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                <a href="${r}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate" style="font-size: 0.85rem;">
                                  <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${h}
                                </a>
                                ${i.showTextUrl&&s.text?`<div class="small text-muted font-monospace text-truncate" style="font-size: 0.75rem;">${r}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-link fs-1 mb-2 d-block opacity-25"></i> Sin enlace configurado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(p),this._attachEventListeners(r,s.text,o,l,c,d)}_attachEventListeners(e,t,s,i,r,o){const l=this.querySelector(".text-val-input"),c=this.querySelector(".url-val-input");l&&this._attachStyleEventListeners(l);const d=()=>{this._isInternalUpdate=!0;const p=JSON.stringify({text:l.value,url:c.value});this.setAttribute("edit-value",p),this._isInternalUpdate=!1};if(l&&(l.oninput=d,l.onchange=()=>this.render()),c&&(c.oninput=d,c.onchange=()=>this.render()),o&&o.isInternal){const p=this.querySelector(".btn-view-doc");p&&(p.onclick=()=>this._showDocModal(o.docId,t))}if(s){const p=this.querySelector(".btn-play-audio");p&&(p.onclick=()=>this._playAudio(e,t))}if(i){const p=this.querySelector(".btn-view-image");p&&(p.onclick=()=>this._showImageModal(e,t))}if(r&&r.isVideo){const p=this.querySelector(".btn-view-video");p&&(p.onclick=()=>this._showVideoModal(e,t,r))}const h=this.querySelector(".btn-qr");h&&(h.onclick=()=>{var N;const p=c.value;if(!p)return;const f=`modal-qr-edit-${this.id}`;(N=document.getElementById(f))==null||N.remove();const b=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(p)}`,I=`
          <div class="modal fade" id="${f}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm">
              <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body text-center pb-4">
                    <h6 class="fw-bold mb-3">${l.value||"Código QR del Enlace"}</h6>
                    <img src="${b}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
                    <div class="d-grid gap-2 px-4">
                        <button class="btn btn-outline-primary btn-sm" id="btn-copy-edit-qr-${this.id}">
                            <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        `;document.body.insertAdjacentHTML("beforeend",I);const x=document.getElementById(f),C=new bootstrap.Modal(x),k=x.querySelector(`#btn-copy-edit-qr-${this.id}`);k&&(k.onclick=async()=>{try{await navigator.clipboard.writeText(p);const G=k.innerHTML;k.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',k.classList.replace("btn-outline-primary","btn-success"),k.classList.add("text-white"),setTimeout(()=>{document.body.contains(k)&&(k.innerHTML=G,k.classList.replace("btn-success","btn-outline-primary"),k.classList.remove("text-white"))},2e3)}catch(G){console.error("Error al copiar al portapapeles",G)}}),x.addEventListener("hidden.bs.modal",()=>x.remove()),C.show()})}setCalculatedValue(e){let t="";const s=this.getAttribute("edit-value");try{const r=JSON.parse(s||"{}");r&&r.text&&(t=r.text)}catch{}const i=JSON.stringify({text:t,url:e});i!==s&&(this._isInternalUpdate=!0,this.setAttribute("edit-value",i),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0})),this.render())}_checkExtension(e,t){if(!e||e==="#")return!1;const s=e.split("?")[0].toLowerCase();return t.some(i=>s.endsWith("."+i))}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],s=e.split("?")[0].toLowerCase();if(t.some(l=>s.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}_checkInternalDoc(e){if(!e||e==="#")return null;const t=/\/document\/(doc_\d+)/,s=e.match(t);return s&&s[1]?{isInternal:!0,docId:s[1]}:null}_renderActionButton(e,t,s,i){if(i&&i.isInternal)return'<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm flex-shrink-0 btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento"><i class="fa-solid fa-file-contract"></i></button>';if(e)return'<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio"><i class="fa-solid fa-play"></i></button>';if(t)return'<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm flex-shrink-0 btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen"><i class="fa-regular fa-image"></i></button>';if(s&&s.isVideo){const r=s.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${s.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm flex-shrink-0 btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video"><i class="${r}"></i></button>`}return""}async _showDocModal(e,t){const s=document.getElementById("internal-doc-modal");s&&s.remove();const i="internal-doc-title-lbl",r=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${i}" style="max-width: 90%;">
                    <i class="fa-solid fa-file-contract me-2"></i>Cargando...
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light" id="internal-doc-body" style="min-height: 300px;"></div>
             ${t?`<div class="modal-footer py-1 bg-white small text-muted justify-content-start">${t}</div>`:""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById("internal-doc-modal"),l=document.getElementById("internal-doc-body");new bootstrap.Modal(o).show();const d=An.renderReadOnly(e,l);try{const h=await H.getOne("doc",e);if(h&&h.title){const p=document.getElementById(i);p&&(p.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${h.title}`)}}catch{}await d,o.addEventListener("hidden.bs.modal",()=>o.remove())}}customElements.define("editor-url",Sm);const JE=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:Sm},Symbol.toStringTag,{value:"Module"}));class Cm extends ${render(){const e=this.getAttribute("title")||"Video";let t={url:"",mediaTitle:"",caption:""};try{const d=this.getAttribute("edit-value");d&&(t=JSON.parse(d))}catch{t.url=this.getAttribute("edit-value")||""}const s=this._checkVideo(t.url),i=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-solid fa-film me-1"></i> ${e}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL del Video (YouTube o Archivo)</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control media-val-url" placeholder="Ej: https://youtube.com/..." value="${t.url}">
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub">
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>
            
            <div class="row g-2 mb-3">
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Título del Video</label>
                    <input type="text" class="form-control form-control-sm media-val-title" placeholder="Ej: Demostración Práctica" value="${t.mediaTitle}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda (Caption)</label>
                    <input type="text" class="form-control form-control-sm media-val-caption" placeholder="Ej: Grabado el mes pasado..." value="${t.caption}">
                </div>
            </div>

            ${t.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           
                           ${s.isVideo?`
                           <button class="btn btn-sm ${s.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm flex-shrink-0 btn-play-video" type="button" style="width: 32px; height: 32px; padding: 0;" title="Reproducir Video">
                               <i class="${s.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-play"}"></i>
                           </button>`:'<div class="text-danger small ms-2"><i class="fa-solid fa-triangle-exclamation"></i> Formato no reconocido</div>'}
                           
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>
                           
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${t.mediaTitle||"Clip de Video"}</div>
                                ${t.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${t.caption}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-film fs-1 mb-2 d-block opacity-25"></i> Sin video seleccionado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i);const r=()=>{const d={url:this.querySelector(".media-val-url").value,mediaTitle:this.querySelector(".media-val-title").value,caption:this.querySelector(".media-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(d)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(d=>{d.oninput=r,d.onchange=()=>this.render()});const l=this.querySelector(".btn-play-video");l&&(l.onclick=()=>this._showVideoModal(t.url,t.mediaTitle,s));const c=this.querySelector(".btn-qr");c&&(c.onclick=()=>{this._showQRModal(t.url,t.mediaTitle||"Video")}),this.querySelector(".btn-github").onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"video",onSelect:d=>{this.querySelector(".media-val-url").value=d,r(),this.render()}}}))}}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],s=e.split("?")[0].toLowerCase();if(t.some(l=>s.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}}customElements.define("editor-video",Cm);const QE=Object.freeze(Object.defineProperty({__proto__:null,EditorVideo:Cm},Symbol.toStringTag,{value:"Module"}));class Rm extends ${render(){let e={url:"",mediaTitle:"",caption:""};try{const r=this.getAttribute("edit-value");r&&(e=JSON.parse(r))}catch{e.url=this.getAttribute("edit-value")||""}const t=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!e.url){this.innerHTML="";return}this.className=`col-md-${t} mb-3 d-block`,this.innerHTML=`
      <div class="viewer-container bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center">
        <div class="d-flex align-items-center gap-2">
            
            <button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
            </button>
            
            <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0" title="Mostrar Código QR" id="btn-qr-${this.id}" style="width: 32px; height: 32px; padding: 0;">
                <i class="fa-solid fa-qrcode"></i>
            </button>
            
            <div class="d-flex flex-column overflow-hidden text-start ms-1">
                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${e.mediaTitle||"Pista de Audio"}</div>
                ${e.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${e.caption}</div>`:""}
            </div>
            
        </div>
      </div>
    `;const s=this.querySelector(".btn-play-audio");s&&(s.onclick=()=>this._playAudio(e.url,e.mediaTitle||"Audio"));const i=this.querySelector(`#btn-qr-${this.id}`);i&&(i.onclick=()=>{this._showQRModal(e.url,e.mediaTitle||"Audio")})}}customElements.define("viewer-audio",Rm);const YE=Object.freeze(Object.defineProperty({__proto__:null,ViewerAudio:Rm},Symbol.toStringTag,{value:"Module"}));class Pm extends ${render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",Pm);const XE=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:Pm},Symbol.toStringTag,{value:"Module"}));class Lm extends ${constructor(){super(),this.chartInstance=null}static get observedAttributes(){return[...super.observedAttributes,"options","is-automatic"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options),e.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic")}render(){const e=this.getAttribute("edit-value");if(!e){this.innerHTML="";return}let t={};try{t=JSON.parse(e)}catch{return}let s={aspectPercentage:75,bgColor:"#ffffff"};try{const o=this.getAttribute("options");o&&(s={...s,...JSON.parse(o)})}catch{}const i=`chart-canvas-${this.id}`,r=`
      <div style="position: relative; width: 100%; aspect-ratio: 100 / ${s.aspectPercentage}; display: flex; justify-content: center; align-items: center; background-color: ${s.bgColor}; border-radius: 4px; overflow: hidden;">
        <canvas id="${i}"></canvas>
      </div>`;this.innerHTML=this.renderViewerStructure(r),setTimeout(()=>{this._buildChart(i,t)},100)}async _buildChart(e,t){const s=document.getElementById(e);if(!s)return;if(this.chartInstance&&this.chartInstance.destroy(),this.hasAttribute("is-automatic")){window.ChartDataLabels&&Chart.register(ChartDataLabels);try{this.chartInstance=new Chart(s,t)}catch(h){console.error("Error render automático en visor:",h)}return}const{labels:r,datasets:o}=ss.processData(t);if(!o.length)return;const l=["pie","doughnut","radar","polarArea"].includes(t.type)?t.type:t.type==="line"||t.type==="area"?"line":"bar",c=t.type==="bar"?"y":"x";Chart.register(ChartDataLabels);const d=ss.buildOptions(t,o,c,"viewer");try{this.chartInstance=new Chart(s,{type:l,data:{labels:r,datasets:o},options:d})}catch(h){console.error("Error render visor:",h)}}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value");if(!t)return"";if(this.hasAttribute("is-automatic"))return`*📊 ${e}*
_(Gráfico Automático)_`;let s=JSON.parse(t);const{labels:i,datasets:r}=ss.processData(s);let o=`*📊 ${e}*
`;return r.length?(r.forEach(l=>{o+=`
*${l.label}*:
`,l.data.forEach((c,d)=>{o+=`- ${i[d]||"Item"}: ${c}
`})}),o):o+"_(Sin datos)_"}}customElements.define("viewer-chart",Lm);const ZE=Object.freeze(Object.defineProperty({__proto__:null,ViewerChart:Lm},Symbol.toStringTag,{value:"Module"}));class km extends ${static get observedAttributes(){return[...super.observedAttributes,"currency"]}setData(e){super.setData(e),e.currency&&this.setAttribute("currency",e.currency)}render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",s=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),r=`<div class="py-1" style="${s}"> 
          <span class="opacity-75 me-1">${t}</span>${i}
        </div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),s=this.getAttribute("currency")||"$",i=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${s} ${i}`}}customElements.define("viewer-currency",km);const eT=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:km},Symbol.toStringTag,{value:"Module"}));class Dm extends ${render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let s="---";e&&(s=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`<div class="py-1" style="${t}">${s}</div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),s=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${s}`}}customElements.define("viewer-date",Dm);const tT=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:Dm},Symbol.toStringTag,{value:"Module"}));class Mm extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),s=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-email",Mm);const sT=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:Mm},Symbol.toStringTag,{value:"Module"}));class Vm extends ${render(){let e={url:"",imgTitle:"",caption:""};try{const s=this.getAttribute("edit-value");s&&(e=JSON.parse(s))}catch{e.url=this.getAttribute("edit-value")||""}const t=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!e.url){this.innerHTML="";return}this.className=`col-md-${t} mb-3 d-block`,this.innerHTML=`
      <div class="viewer-container text-center bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center">
        <img src="${e.url}" class="img-fluid rounded mx-auto d-block mb-2" style="max-height: 400px; object-fit: contain;">
        ${e.imgTitle||e.caption?`
          <div class="mt-2 text-center small text-muted">
            ${e.imgTitle?`<span class="fw-bold text-dark">${e.imgTitle}</span>`:""}
            ${e.imgTitle&&e.caption?": ":""}
            ${e.caption?`<span class="fst-italic">${e.caption}</span>`:""}
          </div>
        `:""}
      </div>
    `}}customElements.define("viewer-image",Vm);const nT=Object.freeze(Object.defineProperty({__proto__:null,ViewerImage:Vm},Symbol.toStringTag,{value:"Module"}));class Om extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-number",Om);const iT=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:Om},Symbol.toStringTag,{value:"Module"}));class $m extends ${render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
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
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",$m);const rT=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:$m},Symbol.toStringTag,{value:"Module"}));class Nm extends ${render(){const e=this.getAttribute("edit-value")||"0",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",Nm);const oT=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:Nm},Symbol.toStringTag,{value:"Module"}));class Bm extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong class="mt-3">${e}</strong><hr>`}}customElements.define("viewer-section",Bm);const aT=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:Bm},Symbol.toStringTag,{value:"Module"}));class Um extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options!==void 0&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-select",Um);const lT=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:Um},Symbol.toStringTag,{value:"Module"}));class Fm extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}customElements.define("viewer-string",Fm);const cT=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:Fm},Symbol.toStringTag,{value:"Module"}));class jm extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch(t){console.error("[ViewerTable] Error al parsear los datos de la tabla:",t.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}_getGridColumns(){return this.columns.filter(e=>!(e.hideView===!0||e.hideView==="true"||e.hideView===""||e["hide-view"]===!0||e["hide-view"]==="true"||e["hide-view"]===""))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
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
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],s=this._getGridColumns().filter(d=>!d.hideWhatsapp);if(s.length===0)return`*${e}:* (Sin columnas visibles)`;if(t.length===0)return`*${e}:* (Sin datos)`;const i=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),r=(d,h)=>{const p=d.find(b=>b.fieldId===h.id);let f=p?String(p.value):"";if((f==="null"||f==="undefined")&&(f=""),h.tag==="setting-currency")f=`$ ${parseFloat(f||0).toFixed(2)}`;else if(h.tag==="setting-percentage")f=`${f}%`;else if(h.tag==="setting-boolean")f=f==="true"?"SI":"NO";else if(h.tag==="setting-url")try{const b=JSON.parse(f);let I=b.url||"";if(I){I.startsWith("http")||(I="https://"+I);try{I=encodeURI(decodeURI(I))}catch{}I=encodeURI(I)}f=b.text?`${b.text} (${I})`:I}catch(b){console.error("[ViewerTable] Error al procesar la URL:",b.message)}return f},o=s.map(d=>{let h=d.title.length;return t.forEach(p=>{const f=r(p,d);f.length>h&&(h=f.length)}),h}),l=o.reduce((d,h)=>d+h,0)+s.length*3;let c=`
*${e}*:
`;return l>i?t.forEach((d,h)=>{c+=`_Item ${h+1}_
`,s.forEach(p=>{const f=r(d,p);c+=`${p.title}: ${f}
`}),c+=`
`}):(c+="```\n",c+=s.map((d,h)=>d.title.padEnd(o[h])).join(" | ")+`
`,c+=s.map((d,h)=>"-".repeat(o[h])).join("-|-")+`
`,t.forEach(d=>{c+=s.map((h,p)=>r(d,h).padEnd(o[p])).join(" | ")+`
`}),c+="```\n"),c}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=s=>{this._searchTerm=s.target.value,this._renderRows();const i=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!i){this.render();const r=this.querySelector(`#search-${this.id}`);r.focus(),r.setSelectionRange(r.value.length,r.value.length)}else!this._searchTerm&&i&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;const t=this._getGridColumns();if(t.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",t.forEach(s=>{const i=document.createElement("th"),r=s.alignment||(this._isNumeric(s.tag)?"right":"left");i.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",i.style.textAlign=r==="right"?"right":r==="center"?"center":"left",i.style.cursor="pointer",i.title="Click para ordenar";let o='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===s.id&&(this._sortAsc?o='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':o='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),i.innerHTML=`<span>${s.title}</span>${o}`,i.onclick=()=>{this._sortFieldId===s.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=s.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(i)})}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let s=Ze.filterRows([...this.rows],this._searchTerm);if(s=Ze.sortRows(s,this._sortFieldId,this._sortAsc,this.columns),s.length===0){t&&(t.style.display="block"),this._renderFooter(s);return}t&&(t.style.display="none");const i=this._getGridColumns();s.forEach(r=>{const o=document.createElement("tr");i.forEach(l=>{const c=document.createElement("td"),d=l.alignment||(this._isNumeric(l.tag)?"right":"left");c.style.textAlign=d==="right"?"right":d==="center"?"center":"left",c.className="px-3 py-2";const h=r.find(b=>b.fieldId===l.id),p=l.tag.replace("setting-","viewer-"),f=document.createElement(p);f.setAttribute("table",""),f.setData&&f.setData({...h,title:"",spanEV:12,options:l.options,currency:l.currency}),c.appendChild(f),o.appendChild(c)}),e.appendChild(o)}),this._renderFooter(s)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t)return;t.innerHTML="";const s=this._getGridColumns();if(!s.some(o=>o.total)||!e||e.length===0)return;let r="<tr>";s.forEach(o=>{const l=o.alignment||(this._isNumeric(o.tag)?"right":"left"),c=l==="right"?"right":l==="center"?"center":"left";let d="";if(o.total){const h=Ze.calculateTotal(e,o.id);d=Ze.formatTotalHtml(h,o)}r+=`<td class="px-3 py-2" style="text-align: ${c};">${d}</td>`}),r+="</tr>",t.innerHTML=r}}customElements.define("viewer-table",jm);const dT=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:jm},Symbol.toStringTag,{value:"Module"}));class qm extends ${render(){const t=`
      <div class="ql-editor py-1" style="padding: 0;">
        ${this.getAttribute("edit-value")||"<span class='text-muted'>---</span>"}
      </div>`;this.innerHTML=this.renderViewerStructure(t)}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value")||"";/<\/?[a-z][\s\S]*>/i.test(t)||(t=t.replace(/\n/g,"<br>"));let s=t.replace(/<\/p>|<br\s*\/?>/gi,`
`);return s=s.replace(/<[^>]*>?/gm,""),`
*${e}*
> ${s.trim().replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",qm);const uT=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:qm},Symbol.toStringTag,{value:"Module"}));class Hm extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("edit-value");let t={url:"#",text:""};try{e&&(t=JSON.parse(e))}catch(b){console.error("Error parsing edit-value:",b)}let s={showTextUrl:!0,showQR:!0};try{const b=this.getAttribute("options");b&&(s={...s,...JSON.parse(b)})}catch(b){console.error("Error parsing options:",b)}let i=t.url||"#";i&&i!=="#"&&(i=i.trim(),i.startsWith("http")||(i="https://"+i));const r=this._checkExtension(i,["mp3","wav","ogg","m4a"]),o=this._checkExtension(i,["jpg","jpeg","png","gif","webp","svg"])||i.includes("quickchart.io/chart"),l=this._checkVideo(i),c=this._checkInternalDoc(i),d=s.showQR&&i!=="#"?'<button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm btn-show-qr" style="width: 32px; height: 32px; padding: 0;" title="Mostrar Código QR"><i class="fa-solid fa-qrcode"></i></button>':"",h=t.text||(s.showTextUrl?t.url:"Enlace"),p=`
        <div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(r,o,l,c)}
          ${d}
          <div class="d-flex flex-column overflow-hidden">
              <a href="${i}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
                <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${h}
              </a>
              ${s.showTextUrl&&t.text&&i!=="#"?`<div class="small text-muted font-monospace text-truncate" style="font-size: 0.75rem;">${i}</div>`:""}
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(p),this._attachEvents(i,t.text,r,o,l,c);const f=this.querySelector(".btn-show-qr");f&&(f.onclick=()=>this._showQRModal(i,t.text))}_checkExtension(e,t){if(!e||e==="#")return!1;const s=e.split("?")[0].toLowerCase();return t.some(i=>s.endsWith("."+i))}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],s=e.split("?")[0].toLowerCase();if(t.some(l=>s.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}_checkInternalDoc(e){if(!e||e==="#")return null;const t=/\/document\/(doc_\d+)/,s=e.match(t);return s&&s[1]?{isInternal:!0,docId:s[1]}:null}_renderActionButton(e,t,s,i){if(i&&i.isInternal)return'<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento"><i class="fa-solid fa-file-contract"></i></button>';if(e)return'<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio"><i class="fa-solid fa-play"></i></button>';if(t)return'<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen"><i class="fa-regular fa-image"></i></button>';if(s&&s.isVideo){const r=s.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${s.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video"><i class="${r}"></i></button>`}return""}_attachEvents(e,t,s,i,r,o){if(o&&o.isInternal){const l=this.querySelector(".btn-view-doc");l&&(l.onclick=()=>this._showDocModal(o.docId,t))}if(s){const l=this.querySelector(".btn-play-audio");l&&(l.onclick=()=>this._playAudio(e,t))}if(i){const l=this.querySelector(".btn-view-image");l&&(l.onclick=()=>this._showImageModal(e,t))}if(r&&r.isVideo){const l=this.querySelector(".btn-view-video");l&&(l.onclick=()=>this._showVideoModal(e,t,r))}}async _showDocModal(e,t){const s=document.getElementById("internal-doc-modal");s&&s.remove();const i="internal-doc-title-lbl",r=`
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
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById("internal-doc-modal"),l=document.getElementById("internal-doc-body");new bootstrap.Modal(o).show();const d=An.renderReadOnly(e,l);try{const h=await H.getOne("doc",e);if(h&&h.title){const p=document.getElementById(i);p&&(p.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${h.title}`)}}catch(h){console.error("Error recuperando título:",h)}await d,o.addEventListener("hidden.bs.modal",()=>o.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const s=JSON.parse(t);let i=s.url||"";if(i){i.startsWith("http")||(i="https://"+i);try{i=encodeURI(decodeURI(i))}catch(r){console.warn("Error encoding URL:",r),i=encodeURI(i)}}t=s.text?`${s.text} (${i})`:i}catch(s){console.warn("Error parsing URL data:",s)}return`*${e}:* ${t}`}}customElements.define("viewer-url",Hm);const hT=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:Hm},Symbol.toStringTag,{value:"Module"}));class zm extends ${render(){let e={url:"",mediaTitle:"",caption:""};try{const o=this.getAttribute("edit-value");o&&(e=JSON.parse(o))}catch{e.url=this.getAttribute("edit-value")||""}const t=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!e.url){this.innerHTML="";return}const s=this._checkVideo(e.url);this.className=`col-md-${t} mb-3 d-block`,this.innerHTML=`
      <div class="viewer-container bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center">
        <div class="d-flex align-items-center gap-2">
            
            ${s.isVideo?`
            <button class="btn btn-sm ${s.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm flex-shrink-0 btn-play-video" type="button" style="width: 32px; height: 32px; padding: 0;" title="Reproducir Video">
                <i class="${s.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-play"}"></i>
            </button>`:'<div class="text-danger small"><i class="fa-solid fa-triangle-exclamation"></i> Error</div>'}
            
            <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" title="Mostrar Código QR" id="btn-qr-${this.id}" style="width: 32px; height: 32px; padding: 0;">
                <i class="fa-solid fa-qrcode"></i>
            </button>
            
            <div class="d-flex flex-column overflow-hidden text-start ms-1">
                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${e.mediaTitle||"Clip de Video"}</div>
                ${e.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${e.caption}</div>`:""}
            </div>
            
        </div>
      </div>
    `;const i=this.querySelector(".btn-play-video");i&&(i.onclick=()=>this._showVideoModal(e.url,e.mediaTitle,s));const r=this.querySelector(`#btn-qr-${this.id}`);r&&(r.onclick=()=>{this._showQRModal(e.url,e.mediaTitle||"Video")})}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],s=e.split("?")[0].toLowerCase();if(t.some(l=>s.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}}customElements.define("viewer-video",zm);const mT=Object.freeze(Object.defineProperty({__proto__:null,ViewerVideo:zm},Symbol.toStringTag,{value:"Module"}));class Gm extends ${render(){let e={url:"",mediaTitle:"",caption:""};try{const s=this.getAttribute("edit-value");s&&(e=JSON.parse(s))}catch{e.url=this.getAttribute("edit-value")||""}if(!e.url){this.innerHTML="";return}this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">
        
        <div id="qr-container-${this.id}" style="width: 80px; height: 80px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center;">
            <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i>
        </div>
        
        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🎧 Audio: ${e.mediaTitle||"Archivo de Audio"}
            </div>
            
            ${e.caption?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${e.caption}</div>`:""}
            
            <div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${e.url}
            </div>
        </div>

      </div>
    `;const t=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(e.url)}`;fetch(t).then(s=>s.blob()).then(s=>{const i=new FileReader;i.onloadend=()=>{const r=this.querySelector(`#qr-container-${this.id}`);r&&(r.innerHTML=`<img src="${i.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},i.readAsDataURL(s)}).catch(()=>{const s=this.querySelector(`#qr-container-${this.id}`);s&&(s.innerHTML=`<img src="${t}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}customElements.define("printer-audio",Gm);const pT=Object.freeze(Object.defineProperty({__proto__:null,PrinterAudio:Gm},Symbol.toStringTag,{value:"Module"}));class Wm extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",s=e==="true",o=`
        <div style="color: ${s?"#198754":"#dc3545"}; font-size: inherit; padding: 2px 0; font-weight: bold;">
            ${s?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(o,t)}}customElements.define("printer-boolean",Wm);const fT=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:Wm},Symbol.toStringTag,{value:"Module"}));class Km extends ${static get observedAttributes(){return[...super.observedAttributes,"options","is-automatic"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options),e.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic")}render(){const e=this.getAttribute("type")||"Visual",t=this.getAttribute("edit-value"),s=this.hasAttribute("is-automatic");let i='<div class="text-muted small py-3">Sin datos</div>';if(t)try{const o=JSON.parse(t);let l={aspectPercentage:75,bgColor:"#ffffff"};try{const c=this.getAttribute("options");c&&(l={...l,...JSON.parse(c)})}catch(c){console.error("Error parsing chart options:",c)}if(s&&window.Chart)i=`<div id="auto-img-placeholder-${this.id}" class="text-muted small py-3"><i class="fa-solid fa-spinner fa-spin"></i> Generando gráfico automático...</div>`,setTimeout(()=>this._captureAutomaticImageAsync(o,l),50);else{const{labels:c,datasets:d}=ss.processData(o);if(d.length>0&&window.Chart){const h=["pie","doughnut","radar","polarArea"].includes(o.type)?o.type:o.type==="line"||o.type==="area"?"line":"bar",p=o.type==="bar"?"y":"x",f=Number(this.getAttribute("span-print"))||12,b=ss.buildOptions(o,d,p,"printer",f);b.responsive=!1,b.animation=!1;const x=f<=7?600:1e3,C=x*(l.aspectPercentage/100),k=document.createElement("canvas");k.width=x,k.height=C;const N=k.getContext("2d");N.fillStyle=l.bgColor,N.fillRect(0,0,x,C);const G=new Chart(k,{type:h,data:{labels:c,datasets:d},options:b}),se=G.toBase64Image();G.destroy(),i=`<img src="${se}" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;">`}else window.Chart||(i=`<div id="async-img-${this.id}" class="text-muted small py-3"><i class="fa-solid fa-spinner fa-spin"></i> Cargando motor gráfico...</div>`,setTimeout(()=>this.render(),50))}}catch(o){i=`<div style="color:red; font-size:10px;">Error: ${o.message}</div>`}const r=`
      <div style="width: 100%; text-align: center; page-break-inside: avoid;">
        ${i}
      </div>`;this.innerHTML=this.renderPrinterStructure(r,e)}_captureAutomaticImageAsync(e,t){try{const r=(Number(this.getAttribute("span-print"))||12)<=7?600:1e3;let o=r*(t.aspectPercentage/100);const l=document.createElement("canvas");l.width=r,l.height=o;const c=l.getContext("2d");c.fillStyle=t.bgColor||"#ffffff",c.fillRect(0,0,r,o);const d=e.options||{};e.options={...d,animation:!1,responsive:!1,maintainAspectRatio:!1};const h=new Chart(l,e),p=h.toBase64Image();h.destroy();const f=this.querySelector(`#auto-img-placeholder-${this.id}`);f&&(f.outerHTML=`<img src="${p}" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;">`)}catch(s){console.error("Error capturando foto automática para impresión:",s)}}}customElements.define("printer-chart",Km);const gT=Object.freeze(Object.defineProperty({__proto__:null,PrinterChart:Km},Symbol.toStringTag,{value:"Module"}));class Jm extends ${static get observedAttributes(){return[...super.observedAttributes,"currency"]}setData(e){super.setData(e),e.currency&&this.setAttribute("currency",e.currency)}render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",s=this.getAttribute("type")||"Visual",i=this.getCommonStyles(),r=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),o=`
        <div style="${i} font-size: inherit; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${r}
        </div>`;this.innerHTML=this.renderPrinterStructure(o,s)}}customElements.define("printer-currency",Jm);const bT=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:Jm},Symbol.toStringTag,{value:"Module"}));class Qm extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",s=this.getCommonStyles();let i="---";e&&(i=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`
        <div style="${s} font-size: inherit; padding: 2px 0;">
            ${i}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-date",Qm);const yT=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:Qm},Symbol.toStringTag,{value:"Module"}));class Ym extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-email",Ym);const vT=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:Ym},Symbol.toStringTag,{value:"Module"}));class Xm extends ${render(){let e={url:"",imgTitle:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(e=JSON.parse(t))}catch{e.url=this.getAttribute("edit-value")||""}if(!e.url){this.innerHTML="";return}this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 10px; text-align: center; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa;">
        <img src="${e.url}" style="max-width: 100%; max-height: 450px; display: block; margin: 0 auto; border-radius: 4px; object-fit: contain;">
        ${e.imgTitle||e.caption?`
          <div style="margin-top: 10px; font-size: 0.8rem; color: #6c757d; text-align: center;">
            ${e.imgTitle?`<strong style="color: #343a40;">${e.imgTitle}</strong>`:""}
            ${e.imgTitle&&e.caption?": ":""}
            ${e.caption?`<span style="font-style: italic;">${e.caption}</span>`:""}
          </div>
        `:""}
      </div>
    `}}customElements.define("printer-image",Xm);const _T=Object.freeze(Object.defineProperty({__proto__:null,PrinterImage:Xm},Symbol.toStringTag,{value:"Module"}));class Zm extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-number",Zm);const wT=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:Zm},Symbol.toStringTag,{value:"Module"}));class ep extends ${render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",ep);const ET=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:ep},Symbol.toStringTag,{value:"Module"}));class tp extends ${render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",i=`
      <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-percentage",tp);const TT=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:tp},Symbol.toStringTag,{value:"Module"}));class sp extends ${render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",sp);const IT=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:sp},Symbol.toStringTag,{value:"Module"}));class np extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options!==void 0&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-select",np);const AT=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:np},Symbol.toStringTag,{value:"Module"}));class ip extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-string",ip);const xT=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:ip},Symbol.toStringTag,{value:"Module"}));class rp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns"),s=this.getAttribute("title")||"",i=this.getAttribute("type")||"Visual";let r=[],o=[];try{e&&(r=JSON.parse(e)),t&&(o=JSON.parse(t))}catch(x){console.warn("Error parseando tabla",x)}const l=o.filter(x=>!x.hidePrint),c=i==="Compacto",d=i==="Facil Lectura",h=c?"0.75rem":d?"1.2rem":"0.95rem",p=c?"0.65rem":d?"1rem":"0.75rem",f=`width: 100%; border-collapse: collapse; font-size: ${h}; page-break-inside: auto;`,b=c?"2px 4px":d?"8px":"6px 8px",I=`
      <table style="${f}">
        <caption style="text-align: left; font-weight: bold; margin-bottom: 8px;">${s}</caption>
        
        <!-- 🚀 MEJORA 2: Repite los encabezados en la siguiente hoja si la tabla se divide -->
        <thead style="display: table-header-group;">
          <tr style="background-color: #f8f9fa;">
            ${l.map(x=>`
              <th style="padding: ${b}; border: 1px solid #dee2e6; text-align: ${x.alignment||"left"}; text-transform: uppercase; font-size: ${p};">
                ${x.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${r.length>0?r.map((x,C)=>`
            <!-- 🚀 MEJORA 3: Protege la fila para que el texto no quede picado por la mitad -->
            <tr style="background-color: ${C%2===0?"#fff":"#fcfcfc"}; page-break-inside: avoid; page-break-after: auto;">
               ${l.map(k=>{const N=x.find(G=>G.fieldId===k.id)||{};return`
                  <td style="padding: ${b}; border: 1px solid #dee2e6; text-align: ${k.alignment||"left"};">
                    ${this._generateCellHTML(k,N,i)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${l.length}" style="text-align:center; padding: ${b};">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(r,l,b)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(I,i)}_renderTotalRow(e,t,s){return t.some(r=>r.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(r=>{let o="";if(r.total){const l=Ze.calculateTotal(e,r.id);o=Ze.formatTotalHtml(l,r)}return`<td style="padding: ${s}; border: 1px solid #dee2e6; text-align: ${r.alignment||"left"};">${o}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,s){const i=e.tag.replace("setting-","printer-"),r=document.createElement(i);return r.setAttribute("table",""),r.setAttribute("type",s),r.setAttribute("edit-value",t.value||""),t.bold&&r.setAttribute("bold",""),t.italic&&r.setAttribute("italic",""),t.color&&r.setAttribute("color",t.color),e.currency&&r.setAttribute("currency",e.currency),r.outerHTML}}customElements.define("printer-table",rp);const ST=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:rp},Symbol.toStringTag,{value:"Module"}));class op extends ${render(){let e=this.getAttribute("edit-value")||"";/<\/?[a-z][\s\S]*>/i.test(e)||(e=e.replace(/\n/g,"<br>"));const t=this.getAttribute("type")||"Visual",s=`
        <div class="ql-editor" style="padding: 0; line-height: 1.2; text-align: left; font-size: inherit;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(s,t)}}customElements.define("printer-text",op);const CT=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:op},Symbol.toStringTag,{value:"Module"}));class ap extends ${static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let s={url:"",text:""};try{e&&(s=JSON.parse(e))}catch{}let i={showTextUrl:!0,showQR:!0};try{const h=this.getAttribute("options");h&&(i={...i,...JSON.parse(h)})}catch{}let r=s.url||"";try{r&&(r=decodeURI(r))}catch{}const o=s.text||(i.showTextUrl?r:"Enlace externo"),l=i.showQR&&r?`
      <div id="qr-container-${this.id}" style="width: 60px; height: 60px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd; font-size: 12px;"></i>
      </div>`:"",c=`
      <div style="flex-grow: 1;">
          <div style="font-size: 1rem; color: #212529; font-weight: bold;">
              ${o}
          </div>
          ${i.showTextUrl&&s.text&&r?`
          <div style="font-size: 0.8em; color: #6c757d; font-family: monospace; margin-top: 4px; word-break: break-all;">
              ${r}
          </div>`:""}
      </div>
    `,d=`
      <div style="display: flex; align-items: center; gap: 12px; page-break-inside: avoid; margin-bottom: 5px; padding: 8px 0;">
          ${l}
          ${c}
      </div>
    `;if(this.innerHTML=this.renderPrinterStructure(d,t),i.showQR&&r){const h=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(r)}`;fetch(h).then(p=>p.blob()).then(p=>{const f=new FileReader;f.onloadend=()=>{const b=this.querySelector(`#qr-container-${this.id}`);b&&(b.innerHTML=`<img src="${f.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},f.readAsDataURL(p)}).catch(()=>{const p=this.querySelector(`#qr-container-${this.id}`);p&&(p.innerHTML=`<img src="${h}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}}customElements.define("printer-url",ap);const RT=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:ap},Symbol.toStringTag,{value:"Module"}));class lp extends ${render(){let e={url:"",mediaTitle:"",caption:""};try{const i=this.getAttribute("edit-value");i&&(e=JSON.parse(i))}catch{e.url=this.getAttribute("edit-value")||""}if(!e.url){this.innerHTML="";return}const t=e.url?`
      <div id="qr-container-${this.id}" style="width: 80px; height: 80px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i>
      </div>`:"",s=`
        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🎬 Video: ${e.mediaTitle||"Clip de Video"}
            </div>
            ${e.caption?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${e.caption}</div>`:""}
            
            <div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${e.url}
            </div>
        </div>
    `;if(this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">
        ${t}
        ${s}
      </div>
    `,e.url){const i=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(e.url)}`;fetch(i).then(r=>r.blob()).then(r=>{const o=new FileReader;o.onloadend=()=>{const l=this.querySelector(`#qr-container-${this.id}`);l&&(l.innerHTML=`<img src="${o.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},o.readAsDataURL(r)}).catch(()=>{const r=this.querySelector(`#qr-container-${this.id}`);r&&(r.innerHTML=`<img src="${i}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}}customElements.define("printer-video",lp);const PT=Object.freeze(Object.defineProperty({__proto__:null,PrinterVideo:lp},Symbol.toStringTag,{value:"Module"}));
