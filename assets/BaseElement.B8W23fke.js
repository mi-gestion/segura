import{T as W,g as X,e as g,h as tt}from"./Elements.BsmmG6jM.js";import{i as E,D as q,e as et,a as G,C as K}from"./FormulaEngine.CYGke5JL.js";const ot=a=>class extends a{getCommonStyles(){const t=this.hasAttribute("bold"),o=this.hasAttribute("italic"),e=this.getAttribute("color")||"inherit";return`font-weight: ${t?"bold":"normal"};
        font-style: ${o?"italic":"normal"};
        color: ${e};`}renderStyleControls(t=[]){const o=this.hasAttribute("bold"),e=this.hasAttribute("italic"),s=this.getAttribute("color")||"black",l=!t.includes("bold"),i=!t.includes("italic"),r=!t.includes("color");let n="";(l||i)&&(n=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${l?`<button class="btn btn-sm btn-outline-secondary ${o?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${i?`<button class="btn btn-sm btn-outline-secondary ${e?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let d="";return r&&(d=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(c=>`<button class="btn btn-sm rounded-circle p-0 border ${s===c?"border-dark":"border-light"}" data-color="${c}" style="background-color: ${c}; width: 22px; height: 22px;" title="${c}"></button>`).join("")}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `),`
          <div class="dropdown">
            <button class="btn btn-sm btn-light text-body-secondary border-0 shadow-none" type="button" id="btn-opts-${this.id}" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" style="min-width: 180px; font-size: 0.85rem;">
                ${n}
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
        `}_attachStyleEventListeners(t){t&&t.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",t.value),this._isInternalUpdate=!1});const o=this.querySelector(`#btn-opts-${this.id}`);o&&(o.addEventListener("show.bs.dropdown",()=>{const l=this.closest(".card");l&&(l.style.overflow="visible")}),o.addEventListener("hidden.bs.dropdown",()=>{const l=this.closest(".card");l&&(l.style.overflow="hidden")}));const e=(l,i)=>{const r=this.querySelector(`#${l}-${this.id}`);r&&(r.onclick=n=>{n.preventDefault(),i(n)})};e("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),e("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const s=this.querySelector(`#color-grid-${this.id}`);s&&s.querySelectorAll("button").forEach(l=>{l.onclick=i=>{i.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",l.dataset.color),this._isInternalUpdate=!1,this.render()}}),e("btn-copy",()=>{const l=this.querySelector(`#btn-copy-${this.id}`),i=l.innerHTML;let r="";if(typeof this.getData=="function"){const n=this.getData();r=typeof n.value=="object"?JSON.stringify(n.value):n.value||""}else r=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",r),l.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{l.innerHTML=i},1200)}),e("btn-paste",()=>{const l=this.querySelector(`#btn-paste-${this.id}`),i=sessionStorage.getItem("doc_clipboard_value");if(i!==null){typeof this.setData=="function"?this.setData({value:i}):this.setAttribute("edit-value",i);const r=l.innerHTML;l.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{l.innerHTML=r},1200)}})}},H=(a,t)=>`modal-custom-${a}-${t}`;function V(a){return a.configurable!==!1}function at(a){const t=[],o={};return a.forEach(e=>{e.row?o[e.row]===void 0?(o[e.row]=t.length,t.push({type:"row",fields:[e]})):t[o[e.row]].fields.push(e):t.push({type:"single",field:e})}),t}function D(a,t){const o=t.attr||t.id;if(t.type==="boolean"){if(t.boolStyle==="presence")return a.hasAttribute(o);const s=a.getAttribute(o);return s===null?!!t.default:s==="true"}const e=a.getAttribute(o);return e??t.default}function st(a,t,o){const e=t.attr||t.id;if(t.type==="boolean"){if(t.boolStyle==="presence"){o?a.setAttribute(e,""):a.removeAttribute(e);return}a.setAttribute(e,o?"true":"false");return}a.setAttribute(e,o)}function j(a,t){const o={};return a.forEach(e=>{if(!e.onChange)return;const s=t[e.id],l=e.onChange[s]||e.onChange._default;l&&Object.entries(l).forEach(([i,r])=>{o[i]={...o[i]||{},...r}})}),o}function it(a,t,o){const e={};return o.forEach(s=>{if(s.type==="raw")return;const l=document.getElementById(H(a,s.id));l?s.type==="boolean"?e[s.id]=l.checked:e[s.id]=l.value:e[s.id]=D(t,s)}),e}const R={renderCustomSettingsHTML(a,t,o,e=[],s={},l=[],i={}){const r=Array.isArray(o)?o:[],n=Array.isArray(e)?e:[],d=Array.isArray(l)?l:[];if(r.length===0&&n.length===0&&d.length===0)return{basicHTML:"",advancedHTML:"",aiHTML:""};const c=[...r,...n,...d],u={};c.forEach(w=>{w.type!=="raw"&&(u[w.id]=D(t,w))});const p=j(c,u),b=s.title||"Configuración",h=s.icon||"fa-sliders",m=i.title||"Asistente IA",v=i.icon||"fa-wand-magic-sparkles",x=(w,C,L,S,M)=>{if(!w||w.length===0)return"";const T=this._renderFieldGroups(a,w,u,p,t),I=`generic-custom-panel${L}-${t.id}`;return S.hideTitle?`<div id="${I}">${T}</div>`:`
        <h6 class="text-primary fw-bold mb-3"><i class="fa-solid ${M} me-2"></i>${C}</h6>
        <div class="bg-white p-3 border rounded shadow-sm" id="${I}">
          ${T}
        </div>
      `};return{basicHTML:x(r,b,"",s,h),advancedHTML:x(n,`${b} — Avanzado`,"-advanced",s,h),aiHTML:x(d,m,"-ai",i,v)}},_fieldMarkup(a,t,o,e){const s=e[t.id]||{},l=s.configurable!==void 0?s.configurable:V(t),i=s.value!==void 0?s.value:o[t.id],r=H(a,t.id);let n;if(t.type==="select"){const u=(t.options||[]).map(p=>`<option value="${p.value}" ${p.value===i?"selected":""}>${p.label}</option>`).join("");n=`<select class="form-select form-select-sm" id="${r}" data-field-id="${t.id}">${u}</select>`}else t.type==="boolean"?n=`
        <div class="form-check form-switch mb-0">
          <input autocomplete="off" spellcheck="false" class="form-check-input fs-5" type="checkbox" id="${r}" data-field-id="${t.id}" ${i?"checked":""}>
        </div>`:t.type==="number"?n=`<input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="${r}" data-field-id="${t.id}" value="${i??""}">`:t.type==="textarea"?n=`<textarea class="form-control${t.controlClass?` ${t.controlClass}`:""}" id="${r}" data-field-id="${t.id}" rows="${t.rows||3}" spellcheck="false" placeholder="${t.placeholder||""}">${i??""}</textarea>`:n=`<input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm${t.controlClass?` ${t.controlClass}`:""}" id="${r}" data-field-id="${t.id}" value="${i??""}" placeholder="${t.placeholder||""}">`;const d=t.help?`<div class="form-text small text-muted mt-2">${t.help}</div>`:"",c=`
        <label class="form-label small fw-bold text-dark mb-1" for="${r}">${t.caption||t.id}</label>
        ${n}
        ${d}
    `;return{configurable:l,innerHTML:c}},_renderField(a,t,o,e){const{configurable:s,innerHTML:l}=this._fieldMarkup(a,t,o,e),i=s?"block":"none";return`
      <div class="mb-3" data-field-wrapper="${t.id}" style="display:${i};">
        ${l}
      </div>
    `},_renderSingleOrRaw(a,t,o,e,s){if(t.type==="raw"){const l=e[t.id]||{},i=l.configurable!==void 0?l.configurable:V(t),r=typeof t.render=="function"?t.render(s):"",n=i?"block":"none";return`<div data-field-wrapper="${t.id}" style="display:${n};">${r}</div>`}return this._renderField(a,t,o,e)},_renderFieldGroups(a,t,o,e,s){return at(t).map(i=>i.type==="single"?this._renderSingleOrRaw(a,i.field,o,e,s):`<div class="row g-2 mb-3">${i.fields.map(n=>{if(n.type==="raw")return typeof n.render=="function"?n.render(s):"";const{configurable:d,innerHTML:c}=this._fieldMarkup(a,n,o,e),u=d?"block":"none";return`<div class="col" data-field-wrapper="${n.id}" style="display:${u};">${c}</div>`}).join("")}</div>`).join("")},bindLiveRules(a,t,o){if(!Array.isArray(o)||o.length===0)return;const e=[document.getElementById(`generic-custom-panel-${t.id}`),document.getElementById(`generic-custom-panel-advanced-${t.id}`),document.getElementById(`generic-custom-panel-ai-${t.id}`)].filter(Boolean);if(e.length===0)return;const s=i=>{for(const r of e){const n=r.querySelector(`[data-field-wrapper="${i}"]`);if(n)return n}return null};o.filter(i=>i.onChange).forEach(i=>{const r=document.getElementById(H(a,i.id));r&&r.addEventListener("change",()=>{const n=it(a,t,o),d=j(o,n);o.forEach(c=>{const u=s(c.id);if(!u)return;const p=d[c.id]||{},b=p.configurable!==void 0?p.configurable:V(c);u.style.display=b?"block":"none"})})}),o.filter(i=>i.type==="raw"&&typeof i.bind=="function").forEach(i=>i.bind(t,e[0]))},saveCustomSettingsFromModal(a,t,o){!Array.isArray(o)||o.length===0||o.forEach(e=>{if(e.type==="raw"){typeof e.save=="function"&&e.save(t);return}const s=document.getElementById(H(a,e.id));if(!s)return;const l=D(t,e),i=e.type==="boolean"?s.checked:s.value;if(st(t,e,i),typeof e.onSave=="function"&&e.onSave(t,i),e.mutatesLogicalKey&&i!==l){const r=(e.options||[]).find(n=>n.value===i);r&&r.logicalKey&&(t.setAttribute("data-original-type",r.logicalKey),t.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:r.logicalKey}})))}})}},lt=new Set(["SETTING-DIVIDER",X.TABLE,"SETTING-CHART","SETTING-SCRIPT"]);function rt(a){return a.getAttribute("data-original-type")||a.tagName.toLowerCase().replace("setting-","")}function N(a){return g[a]||{icon:"🔹",color:"secondary",longLabel:a}}function nt(a){const t=a.hasAttribute("table"),o=t?a.getAttribute("data-table-id"):null,e=[],s=[],l=new Set([a.id]);return document.querySelectorAll("[id]").forEach(i=>{if(i===a||l.has(i.id)||!i.tagName||!i.tagName.startsWith("SETTING-")||lt.has(i.tagName)||typeof i.getAttribute!="function")return;const r=i.hasAttribute("table"),n=i.getAttribute("title")||"(Sin titulo)",d=rt(i);if(!r){s.push({id:i.id,title:n,typeKey:d}),l.add(i.id);return}const c=i.getAttribute("data-table-id");t&&c&&c===o&&(e.push({id:i.id,title:n,typeKey:d}),l.add(i.id))}),document.querySelectorAll(W.table).forEach(i=>{if(typeof i.getData!="function"||t&&i.id===o)return;const r=i.getData(),n=i.getAttribute("title")||"Tabla";(r.columns||[]).forEach(d=>{if(!d.id||l.has(d.id))return;const c=(d.tag||"").replace("setting-","")||"numeric";s.push({id:d.id,title:`[${n}] ${d.title||"(Sin titulo)"}`,typeKey:c}),l.add(d.id)})}),{rowEntries:e,docEntries:s}}function B(a,t){return a.length?`<div class="formula-dict-scroll overflow-auto pe-1" style="max-height: 240px;"><div class="d-flex flex-wrap gap-1">${a.slice().sort((s,l)=>{const i=N(s.typeKey).longLabel||s.typeKey||"",r=N(l.typeKey).longLabel||l.typeKey||"",n=i.localeCompare(r,"es");return n!==0?n:s.title.localeCompare(l.title,"es")}).map(s=>{const l=N(s.typeKey);return`<button type="button" class="btn btn-sm btn-outline-${l.color||"secondary"} formula-dict-item py-0 px-2 mb-1" data-insert-id="${s.id}" title="Clic para insertar @{${s.id}} (${l.longLabel||s.typeKey})"><span class="me-1">${l.icon}</span>${s.title} <code class="ms-1">${s.id}</code></button>`}).join("")}</div></div>`:`<p class="small text-muted fst-italic mb-0">${t}</p>`}const k=[{id:"hideEdit",attr:"hide-edit",label:"Ocultar en Editor",help:"Solo para calculos de fondo."},{id:"hideView",attr:"hide-view",label:"Ocultar en Visor",help:"No visible al leer el documento."},{id:"hidePrint",attr:"hide-print",label:"Ocultar al Imprimir",help:"Se omitira en la exportacion a PDF."},{id:"hideWhatsapp",attr:"hide-whatsapp",label:"Ocultar en WhatsApp",help:"Se excluira del mensaje de texto enviado."},{id:"readonly",attr:"readonly",label:"Solo Lectura (bloqueado en el Editor)",help:"Se ve con su valor actual, pero no se puede editar al llenar el documento."}],F=[{id:"spanEV",inputId:"modal-span-ev",attr:"span-edit-viewer",label:"Ancho Pantalla (Grid 1-12)"},{id:"spanP",inputId:"modal-span-p",attr:"span-print",label:"Ancho Impresion (Grid 1-12)"}],dt=a=>class extends a{_renderVisibilityTogglesHTML(t,o){const e=Object.fromEntries(k.map(d=>[d.id,d])),s=t.filter(d=>d!=="readonly"&&e[d]).map(d=>e[d]),l=t.includes("readonly"),i=E(o.formula),r=(d,c,u)=>{const p=u||o[d.id];return`
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm${c?"":" h-100"}">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-${d.attr}" ${p?"checked":""}${u?" disabled":""}>
                        <label class="form-check-label small fw-bold text-dark">${d.label}</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">${u?"🔒 Bloqueado: el campo tiene una Formula activa, se calcula solo.":d.help}</div>
                    </div>`};let n="";for(let d=0;d<s.length;d+=2){const c=s.slice(d,d+2);n+=`
            <div class="${d===0?"row g-3 mb-3":"row g-3"}">
                ${c.map(p=>`<div class="col-md-6">${r(p,!1,!1)}</div>`).join("")}
            </div>`}return l&&(n+=`
            <div class="row g-3 mt-0">
                <div class="col-md-12">${r(e.readonly,!0,i)}</div>
            </div>`),`
            <h6 class="text-secondary fw-bold mb-3"><i class="fa-solid fa-eye me-2"></i>Visibilidad y Permisos</h6>${n}`}_renderWidthTogglesHTML(t,o){const e=Object.fromEntries(F.map(i=>[i.id,i])),s=t.filter(i=>e[i]).map(i=>e[i]),l=s.length>1?"col-md-6":"col-md-12";return s.map(i=>`
                <div class="${l}">
                    <label class="small text-muted fw-bold mb-1">${i.label}</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="${i.inputId}" value="${o[i.id]}" min="1" max="12">
                </div>`).join("")}getSettingsMenuButtonHTML(){const t=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${g[t].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const t=this.querySelector(".btn-open-settings");t&&(t.onclick=o=>{o.preventDefault(),o.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var U;const t=this.tagName.toLowerCase().split("-")[1],o=this.hasAttribute("table"),e=((U=g[t])==null?void 0:U.settings)||{width:!0,visibility:!0},s={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view"),align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),totalPosition:this.getAttribute("total-position")||"tfoot",readonly:this.hasAttribute("readonly"),formula:this.getAttribute("formula")||""};let l="",i="",r="";if(Array.isArray(e.custom)){const f=R.renderCustomSettingsHTML(t,this,e.custom,e.advancedCustom||[],{title:e.customTitle,icon:e.customIcon,hideTitle:e.customHideTitle},e.aiCustom||[],{title:e.aiCustomTitle,icon:e.aiCustomIcon,hideTitle:e.aiCustomHideTitle});l=f.basicHTML,i=f.advancedHTML,r=f.aiHTML}else e.custom&&typeof this.getCustomSettingsHTML=="function"&&(l=this.getCustomSettingsHTML());const n=e.visibility===!0?k.map(f=>f.id):Array.isArray(e.visibility)?e.visibility:[],d=n.length>0,c=d?this._renderVisibilityTogglesHTML(n,s):"",u=tt(this.tagName);let p="";o&&u&&(p=`
            <div class="mt-3 border-top pt-3">
                <div class="form-check form-switch mb-2">
                    <input autocomplete="off" spellcheck="false" class="form-check-input fs-5" type="checkbox" id="modal-total" ${s.total?"checked":""}>
                    <label class="form-check-label fw-bold mt-1 ms-2 text-primary">Sumar en Totales</label>
                </div>
                <div>
                    <label class="small text-muted fw-bold mb-1">Ubicacion del Resultado</label>
                    <select class="form-select form-select-sm" id="modal-total-position">
                        <option value="tfoot" ${s.totalPosition==="tfoot"?"selected":""}>Pie de la tabla (abajo)</option>
                        <option value="thead" ${s.totalPosition==="thead"?"selected":""}>Debajo del titulo (encabezado)</option>
                    </select>
                </div>
            </div>
          `),l+=p;const b=typeof e.formula=="function"?e.formula(this):!!e.formula;let h="",m={rowEntries:[],docEntries:[]};if(b){const f=Z=>`formula-sub-${Z}-${this.id}`;m=nt(this);const Q=m.rowEntries.length?`
              <div class="mb-3">
                  <div class="small fw-bold text-body-secondary mb-1"><i class="fa-solid fa-table-cells me-1"></i>Esta misma fila</div>
                  ${B(m.rowEntries,"")}
              </div>
              <div>
                  <div class="small fw-bold text-body-secondary mb-1"><i class="fa-solid fa-file-lines me-1"></i>Resto del documento</div>
                  ${B(m.docEntries,"No hay mas campos disponibles todavia.")}
              </div>
            `:B(m.docEntries,"Todavia no hay otros campos en la plantilla para referenciar.");h=`
            <h6 class="text-warning fw-bold mb-3"><i class="fa-solid fa-superscript me-2"></i>Formula</h6>
            <div class="bg-white p-3 border rounded shadow-sm">
                <label class="small text-muted fw-bold mb-1" for="modal-formula">Formula (opcional)</label>
                <textarea class="form-control form-control-sm" id="modal-formula" rows="2"
                    spellcheck="false" placeholder="=@{cantidad}*@{precio}">${s.formula}</textarea>
                <div class="form-text small text-muted mt-1">
                    Empieza con "=" para calcular este campo en vez de escribirlo a mano.
                    Usa <code>@{id}</code> para referirte a otro campo — si este campo esta
                    dentro de una tabla, primero busca en la misma fila y luego en el resto
                    del documento. Vacio o sin "=" al inicio: el campo se llena a mano, como
                    siempre. Busca el campo en la sub-pestanha "Diccionario" de abajo y haz
                    clic para insertarlo donde tengas el cursor.
                </div>
                <div id="modal-formula-validation" class="mt-1"></div>

                <hr class="my-3">

                <ul class="nav nav-tabs small" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active py-2" data-bs-toggle="tab" data-bs-target="#${f("dict")}" type="button" role="tab"><i class="fa-solid fa-book me-1"></i>Diccionario</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link py-2" data-bs-toggle="tab" data-bs-target="#${f("ejemplos")}" type="button" role="tab">Ejemplos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link py-2" data-bs-toggle="tab" data-bs-target="#${f("ops")}" type="button" role="tab">Operaciones Disponibles</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link py-2" data-bs-toggle="tab" data-bs-target="#${f("fn")}" type="button" role="tab">Funciones Disponibles</button>
                    </li>
                </ul>
                <div class="tab-content border border-top-0 rounded-bottom p-3">
                    <div class="tab-pane fade show active" id="${f("dict")}" role="tabpanel">
                        ${Q}
                    </div>
                    <div class="tab-pane fade" id="${f("ejemplos")}" role="tabpanel">
                        <ul class="small text-muted mb-0 ps-3">
                            <li><code>=@{cantidad}*@{precio}</code> — el total de una linea (cantidad x precio)</li>
                            <li><code>=@{subtotal}+@{impuesto}</code> — dos campos sumados</li>
                            <li><code>=@{nombre}&amp;" "&amp;@{apellido}</code> — dos campos de texto unidos con un espacio</li>
                            <li><code>=(@{cantidad}*@{precio})*1.16</code> — el total de una linea mas 16% de impuesto</li>
                            <li><code>=SI(@{cantidad}&gt;10,"Alto","Bajo")</code> — un texto que cambia segun una condicion</li>
                            <li><code>=SUMA(@{item1},@{item2},@{item3})</code> — la suma de varios campos</li>
                            <li><code>=SI.ERROR(@{a}/@{b},0)</code> — evita el error si "b" esta vacio o es cero</li>
                            <li><code>=DIAS(HOY(),@{fecha_inicio})</code> — cuantos dias pasaron desde una fecha</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="${f("ops")}" role="tabpanel">
                        <table class="table table-sm table-borderless align-middle mb-0 small">
                            <tbody>
                                <tr>
                                    <td class="text-nowrap pe-3"><code>+</code> <code>-</code> <code>*</code> <code>/</code></td>
                                    <td class="text-muted">Suma, resta, multiplicacion y division</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap pe-3"><code>&amp;</code></td>
                                    <td class="text-muted">Unir texto (concatenar dos o mas valores como texto)</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap pe-3"><code>=</code> <code>&lt;&gt;</code> <code>&lt;</code> <code>&gt;</code> <code>&lt;=</code> <code>&gt;=</code></td>
                                    <td class="text-muted">Comparar dos valores (igual, distinto, menor, mayor, menor o igual, mayor o igual) — el resultado es VERDADERO o FALSO</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap pe-3"><code>( )</code></td>
                                    <td class="text-muted">Parentesis, para controlar el orden de las operaciones</td>
                                </tr>
                                <tr>
                                    <td class="text-nowrap pe-3"><code>@{id}</code></td>
                                    <td class="text-muted">Referencia al valor de otro campo del documento</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="${f("fn")}" role="tabpanel">
                        <div class="accordion accordion-flush">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed py-2 small fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#${f("fn-logica")}">Logica</button>
                                </h2>
                                <div id="${f("fn-logica")}" class="accordion-collapse collapse">
                                    <div class="accordion-body py-2">
                                        <table class="table table-sm table-borderless align-middle mb-0 small">
                                            <tbody>
                                                <tr><td class="text-nowrap pe-3"><code>SI(cond,si,sino)</code></td><td class="text-muted">Devuelve "si" cuando la condicion es verdadera, o "sino" cuando es falsa (el tercer argumento es opcional)</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>SI.ERROR(valor,alt)</code></td><td class="text-muted">Devuelve "valor", o "alt" si calcularlo produce un error</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>Y(a,b,...)</code></td><td class="text-muted">VERDADERO solo si todas las condiciones son verdaderas</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>O(a,b,...)</code></td><td class="text-muted">VERDADERO si al menos una condicion es verdadera</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>NO(a)</code></td><td class="text-muted">Invierte VERDADERO/FALSO</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed py-2 small fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#${f("fn-mate")}">Matematicas</button>
                                </h2>
                                <div id="${f("fn-mate")}" class="accordion-collapse collapse">
                                    <div class="accordion-body py-2">
                                        <table class="table table-sm table-borderless align-middle mb-0 small">
                                            <tbody>
                                                <tr><td class="text-nowrap pe-3"><code>SUMA(a,b,...)</code></td><td class="text-muted">Suma todos los valores</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>PROMEDIO(a,b,...)</code></td><td class="text-muted">Promedio de los valores</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>CONTAR(a,b,...)</code></td><td class="text-muted">Cuenta cuantos valores son numericos</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>MAX(a,b,...)</code></td><td class="text-muted">El mayor de los valores</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>MIN(a,b,...)</code></td><td class="text-muted">El menor de los valores</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>REDONDEAR(num,dec)</code></td><td class="text-muted">Redondea "num" a "dec" decimales</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed py-2 small fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#${f("fn-texto")}">Texto</button>
                                </h2>
                                <div id="${f("fn-texto")}" class="accordion-collapse collapse">
                                    <div class="accordion-body py-2">
                                        <table class="table table-sm table-borderless align-middle mb-0 small">
                                            <tbody>
                                                <tr><td class="text-nowrap pe-3"><code>CONCATENAR(a,b,...)</code></td><td class="text-muted">Une varios valores como texto, sin separador</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>MAYUSCULAS(texto)</code></td><td class="text-muted">Convierte el texto a MAYUSCULAS</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>MINUSCULAS(texto)</code></td><td class="text-muted">Convierte el texto a minusculas</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>LARGO(texto)</code></td><td class="text-muted">Cantidad de caracteres del texto</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>IZQUIERDA(texto,n)</code></td><td class="text-muted">Los primeros "n" caracteres</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>DERECHA(texto,n)</code></td><td class="text-muted">Los ultimos "n" caracteres</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>EXTRAE(texto,inicio,n)</code></td><td class="text-muted">"n" caracteres a partir de la posicion "inicio"</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed py-2 small fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#${f("fn-fecha")}">Fechas</button>
                                </h2>
                                <div id="${f("fn-fecha")}" class="accordion-collapse collapse">
                                    <div class="accordion-body py-2">
                                        <table class="table table-sm table-borderless align-middle mb-0 small">
                                            <tbody>
                                                <tr><td class="text-nowrap pe-3"><code>HOY()</code></td><td class="text-muted">La fecha de hoy</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>ANO(fecha)</code></td><td class="text-muted">El ano de una fecha</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>MES(fecha)</code></td><td class="text-muted">El mes de una fecha (1-12)</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>DIA(fecha)</code></td><td class="text-muted">El dia del mes de una fecha</td></tr>
                                                <tr><td class="text-nowrap pe-3"><code>DIAS(fin,inicio)</code></td><td class="text-muted">Cantidad de dias entre dos fechas</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          `}let v="";const x=e.width===!0?F.map(f=>f.id):Array.isArray(e.width)?e.width:[],w=o?[]:x,C=w.length>0;(C||e.style||o)&&(v=`
            <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-pen-ruler me-2"></i>Configuracion de Diseno</h6>
            <div class="row g-4 bg-white p-3 border rounded shadow-sm">
                ${C?this._renderWidthTogglesHTML(w,s):""}

                ${o?`
                <div class="col-md-6 mt-3 border-top pt-3">
                    <label class="small text-muted fw-bold mb-1">Alineacion del Texto</label>
                    <select class="form-select" id="modal-align">
                        <option value="left" ${s.align==="left"?"selected":""}>Izquierda</option>
                        <option value="center" ${s.align==="center"?"selected":""}>Centro</option>
                        <option value="right" ${s.align==="right"?"selected":""}>Derecha</option>
                    </select>
                </div>
                `:""}
            </div>`);const L=`tab-custom-${this.id}`,S=`tab-ai-${this.id}`,M=`tab-advanced-${this.id}`,T=`tab-formula-${this.id}`,I=`tab-vis-${this.id}`,P=`tab-design-${this.id}`;let $="",A="",y=!0;e.custom&&l&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-primary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${L}" type="button" role="tab"><i class="fa-solid fa-sliders me-2"></i> General</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${L}" role="tabpanel">${l}</div>`,y=!1),r&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-info px-4 py-3" data-bs-toggle="tab" data-bs-target="#${S}" type="button" role="tab"><i class="fa-solid fa-wand-magic-sparkles me-2"></i> Asistente IA</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${S}" role="tabpanel">${r}</div>`,y=!1),i&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-primary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${M}" type="button" role="tab"><i class="fa-solid fa-gear me-2"></i> Avanzado</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${M}" role="tabpanel">${i}</div>`,y=!1),h&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-warning px-4 py-3" data-bs-toggle="tab" data-bs-target="#${T}" type="button" role="tab"><i class="fa-solid fa-superscript me-2"></i> Formula</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${T}" role="tabpanel">${h}</div>`,y=!1),d&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${I}" type="button" role="tab"><i class="fa-solid fa-eye me-2"></i> Visibilidad</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${I}" role="tabpanel">${c}</div>`,y=!1),(C||e.style||o)&&($+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${y?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${P}" type="button" role="tab"><i class="fa-solid fa-pen-ruler me-2"></i> Diseno</button>
            </li>`,A+=`<div class="tab-pane fade ${y?"show active":""} p-4" id="${P}" role="tabpanel">${v}</div>`),this._renderAndShowModal($,A,()=>{Array.isArray(e.custom)&&R.bindLiveRules(t,this,[...e.custom,...e.advancedCustom||[],...e.aiCustom||[]]),h&&this._bindFormulaDictionaryEvents(m)})}_bindFormulaDictionaryEvents(t){const o=document.getElementById("modal-formula"),e=document.getElementById("modal-formula-validation");if(!o)return;const s=new Set([...t.rowEntries,...t.docEntries].map(r=>r.id)),l=()=>{if(!e)return;const r=o.value;if(!E(r)){e.innerHTML="";return}const n=et(r).filter(d=>!s.has(d));e.innerHTML=n.length?`<div class="small text-danger"><i class="fa-solid fa-triangle-exclamation me-1"></i>No reconozco est${n.length>1?"as referencias":"a referencia"}: ${n.map(d=>`<code>@{${d}}</code>`).join(", ")} — revisa el id en el Diccionario.</div>`:""},i=()=>{var c;const r=document.getElementById("modal-readonly");if(!r)return;const n=E(o.value);n?(r.disabled||(r.dataset.preFormulaChecked=r.checked?"1":""),r.checked=!0,r.disabled=!0):r.disabled&&(r.checked=r.dataset.preFormulaChecked==="1",r.disabled=!1);const d=(c=r.closest(".form-check"))==null?void 0:c.querySelector(".text-muted");d&&(d.textContent=n?"🔒 Bloqueado: el campo tiene una Formula activa, se calcula solo.":k.find(u=>u.id==="readonly").help)};o.oninput=()=>{l(),i()},l(),i(),document.querySelectorAll(".formula-dict-item").forEach(r=>{r.onclick=()=>{const n=`@{${r.dataset.insertId}}`,d=o.selectionStart??o.value.length,c=o.selectionEnd??o.value.length;o.value=o.value.slice(0,d)+n+o.value.slice(c);const u=d+n.length;o.focus(),o.selectionStart=u,o.selectionEnd=u,o.dispatchEvent(new Event("input",{bubbles:!0}))}})}_renderAndShowModal(t,o,e){const s=document.getElementById("advanced-settings-modal");s&&s.remove();const i=`
        <div class="modal fade" id="advanced-settings-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content shadow-lg border-0 overflow-hidden">

              <!-- Cabecera y Editor de ID integrado -->
              <div class="modal-header text-bg-dark py-3 d-flex flex-column align-items-start gap-2">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <h5 class="modal-title fs-5 fw-bold text-truncate"><i class="fa-solid fa-cube me-2"></i>${this.getAttribute("title")||"Configuracion de Campo"}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <div class="input-group input-group-sm w-50 shadow-sm mt-1">
                    <span class="input-group-text bg-secondary text-white border-0 fw-bold"><i class="fa-solid fa-tag me-1"></i> ID:</span>
                    <input type="text" autocomplete="off" spellcheck="false" readonly
                        class="form-control font-monospace border-0 bg-light text-muted" id="modal-field-id" value="${this.id}"
                        title="El ID no se puede editar: otros campos pueden estar refiriendose a el en su Formula o en un script.">
                </div>
              </div>

              <!-- Pestanas -->
              <div class="modal-body p-0 bg-light d-flex flex-column">
                 <ul class="nav nav-tabs bg-white border-bottom shadow-sm px-3 pt-2" id="settingsTabs-${this.id}" role="tablist">
                    ${t}
                 </ul>
                 <div class="tab-content flex-grow-1 bg-light settings-tabpanes-stack" id="tabContent-${this.id}">
                    ${o}
                 </div>
              </div>

              <div class="modal-footer py-3 bg-white border-top">
                <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary px-5 fw-bold shadow-sm" id="btn-save-settings"><i class="fa-solid fa-check me-2"></i> Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>`;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById("advanced-settings-modal"),n=new bootstrap.Modal(r);n.show(),e&&e(),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&n.hide()}}_saveSettingsFromModal(){var d,c,u,p,b,h;const t=m=>{var v;return(v=document.getElementById(m))==null?void 0:v.value},o=m=>{var v;return(v=document.getElementById(m))==null?void 0:v.checked},e=t("modal-field-id");if(e!==void 0){const m=e.trim().replace(/[^a-zA-Z0-9_]/g,"");if(m==="")return q.toast("⛔ El ID no puede estar vacio ni contener solo caracteres especiales.","danger"),!1;if(m!==this.id){let v;const x=this.closest(W.table);if(x?v=x.querySelector(`[field-id="${m}"]`)||x.querySelector(`#${m}`):v=document.getElementById(m)||document.querySelector(`[field-id="${m}"]`),v&&v!==this){q.toast(`⚠️ El ID "${m}" ya esta siendo utilizado por otro campo.`,"warning");const w=document.getElementById("modal-field-id");return w.classList.add("is-invalid","border-danger"),w.focus(),!1}this.id=m,this.setAttribute("id",m),this.setAttribute("field-id",m)}}this.setInternalUpdate(!0);const s=this.tagName.toLowerCase().split("-")[1],l=(c=(d=g[s])==null?void 0:d.settings)==null?void 0:c.custom,i=(p=(u=g[s])==null?void 0:u.settings)==null?void 0:p.advancedCustom,r=(h=(b=g[s])==null?void 0:b.settings)==null?void 0:h.aiCustom;Array.isArray(l)?R.saveCustomSettingsFromModal(s,this,[...l,...i||[],...r||[]]):typeof this.saveCustomSettings=="function"&&this.saveCustomSettings(),k.forEach(m=>{const v=`modal-${m.attr}`;document.getElementById(v)&&(o(v)?this.setAttribute(m.attr,""):this.removeAttribute(m.attr))}),F.forEach(m=>{document.getElementById(m.inputId)&&this.setAttribute(m.attr,t(m.inputId))}),document.getElementById("modal-align")&&this.setAttribute("alignment",t("modal-align"));const n=document.getElementById("modal-total");return n&&(n.checked?this.setAttribute("total",""):this.removeAttribute("total")),document.getElementById("modal-total-position")&&this.setAttribute("total-position",t("modal-total-position")),document.getElementById("modal-formula")&&this.setAttribute("formula",t("modal-formula")||""),document.getElementById("modal-readonly")&&E(this.getAttribute("formula"))&&this.setAttribute("readonly",""),this.setInternalUpdate(!1),this.render(),!0}};function ct(a,t){return t&&t!==document&&(t.querySelector(`[field-id="${a}"]`)||t.querySelector(`#${a}`))||document.querySelector(`[field-id="${a}"]`)||document.getElementById(a)||null}function ut(a){return a?typeof a.getData=="function"?a.getData().value??"":a.getAttribute("edit-value")||"":""}function Y(a,t,o){if(o.has(a))throw new K([...o,a]);const e=ct(a,t);if(!e)return"";const s=e.getAttribute&&e.getAttribute("formula");if(s&&E(s)){o.add(a);try{return G(s,l=>Y(l,t,o))}finally{o.delete(a)}}return ut(e)}function z(a,t){const o=a.querySelector("input, textarea");o&&(o.classList.toggle("is-invalid",!!t),o.title=t||"")}function O(a){const t=a.getAttribute("formula");if(!t||!E(t))return;const o=a.closest('[id^="form-container-"]')||a.closest("tr")||a.parentElement;try{const e=new Set([a.id]),s=G(t,l=>Y(l,o,e));a.removeAttribute("formula-error"),a.setCalculatedValue(s),z(a,"")}catch(e){const s=e&&e.message||"Error en la fórmula.";console.error(`[Fórmula] "${a.id}":`,s),a.setAttribute("formula-error",s),a.setCalculatedValue(e instanceof K?"#CIRCULAR":"#ERROR"),z(a,s)}}function pt(a){if(a._formulaReactivityBound)return;a._formulaReactivityBound=!0;const t=a.closest('[id^="form-container-"]')||a.closest(".tab-content")||a.closest("#document-canvas")||a.closest("#designer-canvas")||document.body,o=e=>{e&&e.type==="script-update"||(a._formulaTimeout&&clearTimeout(a._formulaTimeout),a._formulaTimeout=setTimeout(()=>O(a),250))};t.addEventListener("change",o,!0),t.addEventListener("input",o,!0),t.addEventListener("table-change",o,!0)}const _={evaluateFormulaField(a){O(a)},renderEditor(a,t){const o=a.getAttribute("title")||t.defaultTitle||"Campo";let e=a.getAttribute("edit-value");!e&&t.defaultValue!==void 0&&(e=typeof t.defaultValue=="function"?t.defaultValue(a):t.defaultValue,a.setAttribute("edit-value",e));const s=a.getCommonStyles(),l=E(a.getAttribute("formula"));l&&!a.hasAttribute("readonly")&&(a._isInternalUpdate=!0,a.setAttribute("readonly",""),a._isInternalUpdate=!1);let i;if(t.renderEditorContent)i=t.renderEditorContent(a,e,s);else{const r=(typeof t.inputType=="function"?t.inputType(a):t.inputType)||"text",n=t.icon||"fa-font",d=a.getAttribute("placeholder-text")||t.placeholder,c=d?` placeholder="${d}"`:"",u=a.getAttribute("max-length"),p=u?` maxlength="${u}"`:"",b=a.hasAttribute("readonly"),h=b?" readonly":"",m=b?" bg-light":"",v=t.renderEditorInput?t.renderEditorInput(a,s,e):`<input autocomplete="off" spellcheck="false" type="${r}" class="form-control form-control-sm shadow-none border-1${m}"
                 id="input-${a.id}" value="${e||""}" style="${s}"${c}${p}${h}>`;i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${a.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0">
                <i class="fa-solid ${n} me-1 text-${a.uiColor}"></i> ${o}
              </label>
            </div>
            ${a.renderStyleControls()}
          </div>
          ${v}
        </div>
      </div>
    `}if(a.innerHTML=a.renderViewerStructure(i),t.bindEditorEvents)t.bindEditorEvents(a);else{const r=a.querySelector(`#input-${a.id}`);a._attachStyleEventListeners(r)}l&&(pt(a),setTimeout(()=>O(a),50))},renderViewer(a,t){const o=a.getAttribute("edit-value"),e=a.getCommonStyles();if(t.renderViewerContent){const i=t.renderViewerContent(a,o,e);if(i===null){a.innerHTML="";return}a.innerHTML=a.renderViewerStructure(i);return}const s=o?t.formatDisplay?t.formatDisplay(o,a):o:"---",l=`<div class="py-1" style="${e}">${s}</div>`;a.innerHTML=a.renderViewerStructure(l)},renderPrinter(a,t){const o=a.getAttribute("edit-value"),e=a.getAttribute("type")||"Visual",s=a.getCommonStyles();if(t.renderPrinterContent){const r=t.renderPrinterContent(a,o,s);if(r===null){a.innerHTML="";return}a.innerHTML=a.renderPrinterStructure(r,e);return}const l=o?t.formatDisplay?t.formatDisplay(o,a):o:"---",i=`
        <div style="${s} font-size: inherit; padding: 2px 0;">
            ${l}
        </div>
    `;a.innerHTML=a.renderPrinterStructure(i,e)},getWhatsapp(a,t){if(t.getWhatsappContent)return t.getWhatsappContent(a);const o=a.getAttribute("title"),e=a.getAttribute("edit-value")||"";let s=e;return e&&(t.formatWhatsapp?s=t.formatWhatsapp(e,a):t.formatDisplay&&(s=t.formatDisplay(e,a))),`*${o}:* ${s}`}};function mt(a){if(!a.id){const t=a.tagName.toLowerCase().split("-")[0],o=Math.random().toString(36).substr(2,9);a.id=`${t}_${o}`}}function bt(a,t){const o=(t||"").trim();if(!o)return;const e=a.tagName.toLowerCase().split("-")[1]||"field",l=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9\s]/g,"").trim().split(/\s+/).filter(Boolean);if(!l.length)return;const i=20;for(;l.join("").length>i;){let p=-1,b=-1;for(let h=0;h<l.length;h++)l[h].length>p&&(p=l[h].length,b=h);if(b!==-1)l[b]=l[b].slice(0,-1);else break}const r=l.join(""),n=`${e}_${r}`;let d=n,c=2;for(;document.getElementById(d)&&document.getElementById(d)!==a;)d=`${n}${c}`,c++;const u=a.id;u!==d&&(a.id=d,J(a,u,d))}function ht(a){const t=document.getElementById("designer-canvas");return(t==null?void 0:t.getAttribute("data-template-has-docs"))==="true"}function J(a,t,o){const e=document.getElementById("designer-canvas");if(!e)return;const s=`@{${t}}`,l=`@{${o}}`;e.querySelectorAll("[formula]").forEach(i=>{const r=i.getAttribute("formula");r&&r.includes(s)&&i.setAttribute("formula",r.split(s).join(l))})}function ft(a){if(!a||a==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],o=a.split("?")[0].toLowerCase();if(t.some(i=>o.endsWith("."+i)))return{isVideo:!0,type:"file"};const s=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,l=a.match(s);return l&&l[2].length===11?{isVideo:!0,type:"youtube",id:l[2]}:{isVideo:!1}}function gt(a,t){let o=document.getElementById("global-audio-player");if(!o){if(o=document.createElement("div"),o.id="global-audio-player",o.style.cssText=`
      position: fixed; bottom: 20px; right: 20px; z-index: 1050;
      background: white; padding: 10px 15px; border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
      display: flex; flex-direction: column; gap: 5px;
      border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
      transition: all 0.3s ease; animation: slideIn 0.3s;
    `,!document.getElementById("audio-anim-style")){const l=document.createElement("style");l.id="audio-anim-style",l.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(l)}document.body.appendChild(o)}o.innerHTML=`
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
          <source src="${a}" type="audio/mpeg">
        </audio>
    </div>
  `;const e=o.querySelector("audio"),s=o.querySelector("#audio-loading");e.onloadstart=()=>{s.style.display="block"},e.oncanplay=()=>{s.style.display="none"},e.load(),e.play().catch(l=>console.log("Autoplay bloqueado:",l)),o.querySelector("#close-audio").onclick=()=>o.remove()}function vt(a,t,o){var d;const e=`modal-qr-${o}`;(d=document.getElementById(e))==null||d.remove();const s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(a)}`,l=`
    <div class="modal fade" id="${e}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body text-center pb-4">
              <h6 class="fw-bold mb-3">${t||"Escanear Enlace"}</h6>
              <img src="${s}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
              <div class="d-grid gap-2 px-4">
                  <button class="btn btn-outline-primary btn-sm" id="btn-copy-qr-${o}">
                      <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",l);const i=document.getElementById(e),r=new bootstrap.Modal(i),n=i.querySelector(`#btn-copy-qr-${o}`);n&&(n.onclick=async()=>{try{await navigator.clipboard.writeText(a);const c=n.innerHTML;n.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',n.classList.replace("btn-outline-primary","btn-success"),n.classList.add("text-white"),setTimeout(()=>{document.body.contains(n)&&(n.innerHTML=c,n.classList.replace("btn-success","btn-outline-primary"),n.classList.remove("text-white"))},2e3)}catch(c){console.error("Error al copiar al portapapeles",c)}}),i.addEventListener("hidden.bs.modal",()=>i.remove()),r.show()}function yt(a,t,o){const e=document.getElementById("media-preview-modal");e&&e.remove();let s;o.type==="youtube"?s=`<div class="ratio ratio-16x9 shadow rounded overflow-hidden"><iframe src="${`https://www.youtube.com/embed/${o.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:s=`<video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;"><source src="${a}">Tu navegador no soporta video.</video>`;const l=`
    <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg bg-transparent">
          <div class="modal-body p-0 position-relative text-center">
            <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" style="filter: invert(1);"></button>
            ${s}
            ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",l);const i=document.getElementById("media-preview-modal");new bootstrap.Modal(i).show(),i.addEventListener("hidden.bs.modal",()=>i.remove())}function wt(a,t){const o=document.getElementById("media-preview-modal");o&&o.remove();const e=`
    <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg bg-transparent">
          <div class="modal-body p-0 position-relative text-center">
            <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-white p-2 rounded-circle opacity-100" data-bs-dismiss="modal"></button>
            <img src="${a}" class="img-fluid rounded shadow" style="max-height: 85vh;">
            ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",e);const s=document.getElementById("media-preview-modal");new bootstrap.Modal(s).show(),s.addEventListener("hidden.bs.modal",()=>s.remove())}async function xt(a,t){try{await navigator.clipboard.writeText(t),$t(a)}catch(o){console.warn("[ClipboardService] Error al copiar al portapapeles:",o)}}function $t(a){const t=document.createElement("div");t.textContent="¡Copiado!",t.style.cssText=`
    position: fixed; padding: 4px 12px; border-radius: 6px;
    background: #198754; color: #fff; font-size: 0.75rem; font-weight: 600;
    z-index: 1070; pointer-events: none; opacity: 1;
    transition: opacity 0.4s ease, top 0.4s ease;
  `,document.body.appendChild(t);const o=a.getBoundingClientRect();t.style.left=`${o.right+8}px`,t.style.top=`${o.top}px`,requestAnimationFrame(()=>{t.style.opacity="0",t.style.top=`${o.top-15}px`}),setTimeout(()=>t.remove(),1500)}class Ct extends dt(ot(HTMLElement)){constructor(){super(),this._isInternalUpdate=!1,this._isNewComponent=!0,this._isHydrating=!1}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this.addEventListener("dblclick",t=>{this.tagName.startsWith("EDITOR-")||(t.preventDefault(),t.stopPropagation(),this._handleDoubleClickCopy(t))})}static get observedAttributes(){return["title","span-edit-viewer","span-print","edit-value","formula","bold","italic","color","alignment","total","hide-edit","hide-view","hide-print","hide-whatsapp","readonly","api-url","api-path","api-config","rich-text","input-type"]}attributeChangedCallback(t,o,e){t==="title"&&!this._isHydrating&&(this._isNewComponent||!this._templateHasDocuments())&&e&&o!==e&&this._updateSemanticId(e),!this._isInternalUpdate&&o!==e&&this.render()}getData(){var o,e,s,l,i,r;const t=this.tagName.toLowerCase();if(t.startsWith("setting-")){const n={tag:t,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),totalPosition:this.getAttribute("total-position")||"tfoot",hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view"),readonly:this.hasAttribute("readonly"),formula:this.getAttribute("formula")||""},d=t.split("-")[1];return[...((e=(o=g[d])==null?void 0:o.settings)==null?void 0:e.custom)||[],...((l=(s=g[d])==null?void 0:s.settings)==null?void 0:l.advancedCustom)||[],...((r=(i=g[d])==null?void 0:i.settings)==null?void 0:r.aiCustom)||[]].forEach(u=>{if(u.type==="raw"||u.jsonAttr||u.mutatesLogicalKey&&u.id!=="inputType")return;const p=u.attr||u.id;n[this._toCamel(p)]=D(this,u)}),n}return{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(t){var i,r,n,d,c,u;this._isInternalUpdate=!0,this._isHydrating=!0,t.id&&(this.id=t.id,this._isNewComponent=!1),t.fieldId&&this.setAttribute("field-id",t.fieldId);const o={spanEV:"span-edit-viewer",spanP:"span-print",value:"edit-value"},e=this.tagName.toLowerCase(),s=e.split("-")[1],l=e.startsWith("setting-")?new Set([...((r=(i=g[s])==null?void 0:i.settings)==null?void 0:r.custom)||[],...((d=(n=g[s])==null?void 0:n.settings)==null?void 0:d.advancedCustom)||[],...((u=(c=g[s])==null?void 0:c.settings)==null?void 0:u.aiCustom)||[]].filter(p=>p.type==="boolean"&&p.boolStyle!=="presence").map(p=>p.attr||p.id)):new Set;Object.entries(t).forEach(([p,b])=>{if(p==="id"||p==="fieldId"||p==="tag"||p.startsWith("_"))return;let h=o[p];h||(h=p.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()),typeof b=="boolean"?l.has(h)?this.setAttribute(h,b?"true":"false"):b?this.setAttribute(h,""):this.removeAttribute(h):typeof b=="object"&&b!==null?this.setAttribute(h,JSON.stringify(b)):b!=null&&this.setAttribute(h,String(b))}),this._isInternalUpdate=!1,this._isHydrating=!1,this.render()}applyGridClass(){if(this.hasAttribute("table"))return;const t=this.getAttribute("span-edit-viewer")||this.spanEV||"12",o=this.tagName.toLowerCase(),e=o.startsWith("editor-")&&this.hasAttribute("hide-edit")||o.startsWith("viewer-")&&this.hasAttribute("hide-view");this.className=`col-md-${t} mb-3 d-block${e?" d-none":""}`}renderViewerStructure(t){if(this.hasAttribute("table"))return t;const o=this.getAttribute("title")||"Sin Titulo";return this.applyGridClass(),`<div class="viewer-container"><label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">${o}</label>${t}</div>`}renderPrinterStructure(t,o){if(this.hasAttribute("table"))return t;const e=this.getAttribute("title")||"",s=this.tagName.toLowerCase()==="printer-table",l=parseInt(this.getAttribute("span-print"))||12,i={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",titleSize:"0.65rem",contentSize:"0.75rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",titleSize:"0.75rem",contentSize:"0.95rem"},"Facil Lectura":{m:"4px",p:"4px",b:"1px solid #000",titleSize:"1.1rem",contentSize:"1.3rem"}},r=i[o]||i.Visual;let n=r.titleSize;s&&(o==="Compacto"?n="0.85rem":o==="Facil Lectura"?n="1.3rem":n="0.95rem");const d=s&&l===12?"page-break-inside: auto;":"page-break-inside: avoid;";return`<div style="margin-bottom: ${r.m}; border-bottom: ${r.b}; padding-bottom: ${r.p}; ${d} font-size: ${r.contentSize};">
              <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${n}; line-height: 1.1; margin-bottom: 4px;">${e}</div>
              ${t}
            </div>`}renderEditorField(){const t=this.tagName.toLowerCase().split("-")[1];_.renderEditor(this,g[t].field)}renderViewerField(){const t=this.tagName.toLowerCase().split("-")[1];_.renderViewer(this,g[t].field)}renderPrinterField(){const t=this.tagName.toLowerCase().split("-")[1];_.renderPrinter(this,g[t].field)}getWhatsappField(){const t=this.tagName.toLowerCase().split("-")[1];return _.getWhatsapp(this,g[t].field)}_ensureId(){mt(this)}_updateSemanticId(t){bt(this,t)}_templateHasDocuments(){return ht()}_cascadeRenameInFormulas(t,o){J(this,t,o)}_playAudio(t,o){gt(t,o)}_showQRModal(t,o){vt(t,o,this.id)}_showVideoModal(t,o,e){yt(t,o,e)}_showImageModal(t,o){wt(t,o)}_checkVideo(t){return ft(t)}async _handleDoubleClickCopy(t){try{let e=this.getData().value;if(typeof e=="object"&&e!==null&&(e=JSON.stringify(e)),!e&&e!==0&&e!=="0")return;sessionStorage.setItem("doc_clipboard_value",e),await xt(this,e)}catch(o){console.error("Error al copiar valor del elemento:",o)}}_loadMetadata(){const t=this.tagName.toLowerCase().split("-")[1];g[t]&&(this.icon=g[t].icon,this.shortLabel=g[t].shortLabel,this.longLabel=g[t].longLabel,this.spanEV=g[t].spanEV,this.spanP=g[t].spanP,this.uiColor=g[t].color||"secondary")}_toCamel(t){return t.replace(/-./g,o=>o[1].toUpperCase())}setInternalUpdate(t){this._isInternalUpdate=t}_attachApiRefreshEvents(){const t=this.querySelector(`#refresh-api-${this.id}`);t&&this._initApiFetch&&(t.onclick=async o=>{o.preventDefault(),o.stopPropagation();const e=t.querySelector("i");if(e){const s=e.className;e.className="fa-solid fa-spinner fa-spin",t.disabled=!0;try{await this._initApiFetch(!0)}finally{e.className=s,t.disabled=!1}}})}render(){this.innerHTML=""}setCalculatedValue(t){let o=t;typeof o=="number"&&!Number.isInteger(o)&&(o=Math.round(o*100)/100);const e=typeof o=="object"?JSON.stringify(o):String(o);if(this.getAttribute("edit-value")!==e){this.setAttribute("edit-value",e);const l=this.querySelector("input, textarea");l&&this.tagName.toLowerCase()!=="editor-url"&&this.tagName.toLowerCase()!=="editor-table"&&(l.value=o),this.dispatchEvent(new Event("input",{bubbles:!0}))}}}export{Ct as B,_ as G,H as d};
