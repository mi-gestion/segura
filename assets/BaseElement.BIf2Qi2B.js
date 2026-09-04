import{e as c,U as y}from"./Utils.2v3ifB9J.js";const w=m=>class extends m{getCommonStyles(){const e=this.hasAttribute("bold"),s=this.hasAttribute("italic"),t=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${s?"italic":"normal"};
        color: ${t};`}renderStyleControls(e=[]){const s=this.hasAttribute("bold"),t=this.hasAttribute("italic"),o=this.getAttribute("color")||"black",i=!e.includes("bold"),a=!e.includes("italic"),d=!e.includes("color");let l="";(i||a)&&(l=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${i?`<button class="btn btn-sm btn-outline-secondary ${s?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${a?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let n="";return d&&(n=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(r=>`<button class="btn btn-sm rounded-circle p-0 border ${o===r?"border-dark":"border-light"}" data-color="${r}" style="background-color: ${r}; width: 22px; height: 22px;" title="${r}"></button>`).join("")}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `),`
          <div class="dropdown">
            <button class="btn btn-sm btn-light text-body-secondary border-0 shadow-none" type="button" id="btn-opts-${this.id}" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" style="min-width: 180px; font-size: 0.85rem;">
                ${l}
                ${n}
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
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const s=this.querySelector(`#btn-opts-${this.id}`);s&&(s.addEventListener("show.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="visible")}),s.addEventListener("hidden.bs.dropdown",()=>{const i=this.closest(".card");i&&(i.style.overflow="hidden")}));const t=(i,a)=>{const d=this.querySelector(`#${i}-${this.id}`);d&&(d.onclick=l=>{l.preventDefault(),a(l)})};t("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),t("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const o=this.querySelector(`#color-grid-${this.id}`);o&&o.querySelectorAll("button").forEach(i=>{i.onclick=a=>{a.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",i.dataset.color),this._isInternalUpdate=!1,this.render()}}),t("btn-copy",()=>{const i=this.querySelector(`#btn-copy-${this.id}`),a=i.innerHTML;let d="";if(typeof this.getData=="function"){const l=this.getData();d=typeof l.value=="object"?JSON.stringify(l.value):l.value||""}else d=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",d),i.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{i.innerHTML=a},1200)}),t("btn-paste",()=>{const i=this.querySelector(`#btn-paste-${this.id}`),a=sessionStorage.getItem("doc_clipboard_value");if(a!==null){typeof this.setData=="function"?this.setData({value:a}):this.setAttribute("edit-value",a);const d=i.innerHTML;i.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{i.innerHTML=d},1200)}})}},x=m=>class extends m{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${c[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=s=>{s.preventDefault(),s.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var v;const e=this.tagName.toLowerCase().split("-")[1],s=this.hasAttribute("table"),t=((v=c[e])==null?void 0:v.settings)||{width:!0,visibility:!0},o={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view"),align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let i="";t.custom&&typeof this.getCustomSettingsHTML=="function"&&(i=this.getCustomSettingsHTML());let a="";t.visibility&&(a=`
            <h6 class="text-secondary fw-bold mb-3"><i class="fa-solid fa-eye me-2"></i>Visibilidad y Permisos</h6>
            <div class="row g-3 mb-3">
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-edit" ${o.hideEdit?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en Editor</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Solo para cálculos de fondo.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-view" ${o.hideView?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en Visor</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">No visible al leer el documento.</div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-print" ${o.hidePrint?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar al Imprimir</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Se omitirá en la exportación a PDF.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-switch border rounded p-3 bg-white shadow-sm h-100">
                        <input autocomplete="off" spellcheck="false" class="form-check-input ms-0 me-2 mt-1" type="checkbox" id="modal-hide-whatsapp" ${o.hideWhatsapp?"checked":""}>
                        <label class="form-check-label small fw-bold text-dark">Ocultar en WhatsApp</label>
                        <div class="text-muted mt-1" style="font-size: 0.75rem;">Se excluirá del mensaje de texto enviado.</div>
                    </div>
                </div>
            </div>`);const l=["setting-number","setting-currency","setting-percentage"].includes(this.tagName.toLowerCase());let n="";s&&l&&(n=`
            <div class="col-md-6 mt-3 border-top pt-3 d-flex align-items-center">
                <div class="form-check form-switch">
                    <input autocomplete="off" spellcheck="false" class="form-check-input fs-5" type="checkbox" id="modal-total" ${o.total?"checked":""}>
                    <label class="form-check-label fw-bold mt-1 ms-2 text-primary">Sumar en Totales</label>
                </div>
            </div>
          `);let r="";(t.width||t.style)&&(r=`
            <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-pen-ruler me-2"></i>Configuración de Diseño</h6>
            <div class="row g-4 bg-white p-3 border rounded shadow-sm">
                ${t.width?`
                <div class="col-md-6">
                    <label class="small text-muted fw-bold mb-1">Ancho Pantalla (Grid 1-12)</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="modal-span-ev" value="${o.spanEV}" min="1" max="12">
                </div>
                <div class="col-md-6">
                    <label class="small text-muted fw-bold mb-1">Ancho Impresión (Grid 1-12)</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="modal-span-p" value="${o.spanP}" min="1" max="12">
                </div>`:""}
                
                ${s?`
                <div class="col-md-6 mt-3 border-top pt-3">
                    <label class="small text-muted fw-bold mb-1">Alineación del Texto</label>
                    <select class="form-select" id="modal-align">
                        <option value="left" ${o.align==="left"?"selected":""}>Izquierda</option>
                        <option value="center" ${o.align==="center"?"selected":""}>Centro</option>
                        <option value="right" ${o.align==="right"?"selected":""}>Derecha</option>
                    </select>
                </div>
                <!-- 🚀 AQUI INYECTAMOS LA VARIABLE DEL SWITCH DE TOTALES -->
                ${n}
                `:""}
            </div>`);const h=`tab-custom-${this.id}`,f=`tab-vis-${this.id}`,g=`tab-design-${this.id}`;let b="",u="",p=!0;t.custom&&i&&(b+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${p?"active":""} fw-bold text-primary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${h}" type="button" role="tab"><i class="fa-solid fa-sliders me-2"></i> General</button>
            </li>`,u+=`<div class="tab-pane fade ${p?"show active":""} p-4" id="${h}" role="tabpanel">${i}</div>`,p=!1),t.visibility&&(b+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${p?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${f}" type="button" role="tab"><i class="fa-solid fa-eye me-2"></i> Visibilidad</button>
            </li>`,u+=`<div class="tab-pane fade ${p?"show active":""} p-4" id="${f}" role="tabpanel">${a}</div>`,p=!1),(t.width||t.style||s)&&(b+=`
            <li class="nav-item" role="presentation">
                <button class="nav-link ${p?"active":""} fw-bold text-secondary px-4 py-3" data-bs-toggle="tab" data-bs-target="#${g}" type="button" role="tab"><i class="fa-solid fa-pen-ruler me-2"></i> Diseño</button>
            </li>`,u+=`<div class="tab-pane fade ${p?"show active":""} p-4" id="${g}" role="tabpanel">${r}</div>`),this._renderAndShowModal(b,u)}_renderAndShowModal(e,s){const t=document.getElementById("advanced-settings-modal");t&&t.remove();const i=`
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
                    ${s}
                 </div>
              </div>
              
              <div class="modal-footer py-3 bg-white border-top">
                <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary px-5 fw-bold shadow-sm" id="btn-save-settings"><i class="fa-solid fa-check me-2"></i> Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>`;document.body.insertAdjacentHTML("beforeend",i);const a=document.getElementById("advanced-settings-modal"),d=new bootstrap.Modal(a);d.show(),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&d.hide()}}_saveSettingsFromModal(){const e=i=>{var a;return(a=document.getElementById(i))==null?void 0:a.value},s=i=>{var a;return(a=document.getElementById(i))==null?void 0:a.checked},t=e("modal-field-id");if(t!==void 0){const i=t.trim().replace(/[^a-zA-Z0-9_]/g,"");if(i==="")return alert("⛔ El ID no puede estar vacío ni contener solo caracteres especiales."),!1;if(i!==this.id){let a;const d=this.closest("setting-table");if(d?a=d.querySelector(`[field-id="${i}"]`)||d.querySelector(`#${i}`):a=document.getElementById(i)||document.querySelector(`[field-id="${i}"]`),a&&a!==this){alert(`⚠️ El ID "${i}" ya está siendo utilizado por otro campo.`);const n=document.getElementById("modal-field-id");return n.classList.add("is-invalid","border-danger"),n.focus(),!1}const l=this.id;this.id=i,this.setAttribute("id",i),this.setAttribute("field-id",i),this._updateETLScripts(l,i)}}this.setInternalUpdate(!0),typeof this.saveCustomSettings=="function"&&this.saveCustomSettings(),s("modal-hide-edit")?this.setAttribute("hide-edit",""):this.removeAttribute("hide-edit"),s("modal-hide-view")?this.setAttribute("hide-view",""):this.removeAttribute("hide-view"),s("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),s("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align")));const o=document.getElementById("modal-total");return o&&(o.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}_updateETLScripts(e,s){const t=document.getElementById("designer-canvas");if(!t)return;const o=t.getAttribute("data-etl-config");if(o)try{const i=JSON.parse(o);let a=!1;const d=new RegExp(`\\b${e}\\b`,"g");i.rules&&Array.isArray(i.rules)&&i.rules.forEach(l=>{l.scriptCode&&d.test(l.scriptCode)&&(l.scriptCode=l.scriptCode.replace(d,s),a=!0)}),a&&(t.setAttribute("data-etl-config",JSON.stringify(i)),this._showToast(`Scripts ETL actualizados: <b>${e}</b> ➔ <b>${s}</b>`))}catch(i){console.warn("[SettingsMixin] No se pudo actualizar el ID en los scripts ETL.",i)}}_showToast(e){let s=document.getElementById("etl-toast-container");s||(s=document.createElement("div"),s.id="etl-toast-container",s.className="toast-container position-fixed bottom-0 end-0 p-3",s.style.zIndex="1100",document.body.appendChild(s));const t=document.createElement("div");t.className="toast align-items-center text-bg-success border-0 show mb-2 shadow-lg",t.innerHTML=`<div class="d-flex"><div class="toast-body small"><i class="fa-solid fa-code-branch me-2"></i>${e}</div></div>`,s.appendChild(t),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},4e3)}};class A extends x(w(HTMLElement)){constructor(){super(),this._isInternalUpdate=!1,this._isNewComponent=!0}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this.addEventListener("dblclick",e=>{this.tagName.startsWith("EDITOR-")||(e.preventDefault(),e.stopPropagation(),this._handleDoubleClickCopy(e))})}static get observedAttributes(){return["title","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","hide-edit","hide-view","hide-print","hide-whatsapp","api-url","api-path","api-config","rich-text","input-type"]}attributeChangedCallback(e,s,t){e==="title"&&this._isNewComponent&&t&&s!==t&&this._updateSemanticId(t),!this._isInternalUpdate&&s!==t&&this.render()}getData(){const e=this.tagName.toLowerCase();return e.startsWith("setting-")?{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),hideEdit:this.hasAttribute("hide-edit"),hideView:this.hasAttribute("hide-view")}:{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id,this._isNewComponent=!1),e.fieldId&&this.setAttribute("field-id",e.fieldId);const s={spanEV:"span-edit-viewer",spanP:"span-print",value:"edit-value"};Object.entries(e).forEach(([t,o])=>{if(t==="id"||t==="fieldId"||t==="tag"||t.startsWith("_"))return;let i=s[t];i||(i=t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()),typeof o=="boolean"?o?this.setAttribute(i,""):this.removeAttribute(i):typeof o=="object"&&o!==null?this.setAttribute(i,JSON.stringify(o)):o!=null&&this.setAttribute(i,String(o))}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const s=this.getAttribute("title")||"Sin Título",t=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${t} mb-3 d-block`,`<div class="viewer-container"><label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">${s}</label>${e}</div>`}renderPrinterStructure(e,s){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"",o=this.tagName.toLowerCase()==="printer-table",i=parseInt(this.getAttribute("span-print"))||12,a={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",titleSize:"0.65rem",contentSize:"0.75rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",titleSize:"0.75rem",contentSize:"0.95rem"},"Facil Lectura":{m:"4px",p:"4px",b:"1px solid #000",titleSize:"1.1rem",contentSize:"1.3rem"}},d=a[s]||a.Visual;let l=d.titleSize;o&&(s==="Compacto"?l="0.85rem":s==="Facil Lectura"?l="1.3rem":l="0.95rem");const n=o&&i===12?"page-break-inside: auto;":"page-break-inside: avoid;";return`<div style="margin-bottom: ${d.m}; border-bottom: ${d.b}; padding-bottom: ${d.p}; ${n} font-size: ${d.contentSize};">
              <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${l}; line-height: 1.1; margin-bottom: 4px;">${t}</div>
              ${e}
            </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],s=Math.random().toString(36).substr(2,9);this.id=`${e}_${s}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];c[e]&&(this.icon=c[e].icon,this.shortLabel=c[e].shortLabel,this.longLabel=c[e].longLabel,this.spanEV=c[e].spanEV,this.spanP=c[e].spanP,this.uiColor=c[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,s=>s[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async s=>{s.preventDefault(),s.stopPropagation();const t=e.querySelector("i");if(t){const o=t.className;t.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{t.className=o,e.disabled=!1}}})}render(){this.innerHTML=""}async _handleDoubleClickCopy(e){try{let t=this.getData().value;if(typeof t=="object"&&t!==null&&(t=JSON.stringify(t)),!t&&t!==0&&t!=="0")return;sessionStorage.setItem("doc_clipboard_value",t);try{await navigator.clipboard.writeText(t)}catch(o){console.warn("Clipboard API no disponible, usando fallback.",o)}this._showFloatingFeedback(e.pageX,e.pageY)}catch(s){console.error("Error al copiar valor del elemento:",s)}}_showFloatingFeedback(e,s){const t=document.createElement("div");t.textContent="¡Copiado!",t.style.cssText=`position: absolute; left: ${e}px; top: ${s-20}px; background: #198754; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; pointer-events: none; z-index: 9999; box-shadow: 0 2px 5px rgba(0,0,0,0.2); opacity: 1; transition: all 0.8s ease-out; transform: translate(-50%, 0);`,document.body.appendChild(t),requestAnimationFrame(()=>{t.style.top=`${s-40}px`,t.style.opacity="0"}),setTimeout(()=>{document.body.contains(t)&&document.body.removeChild(t)},800)}setCalculatedValue(e){let s=e;typeof s=="number"&&!Number.isInteger(s)&&(s=Math.round(s*100)/100);const t=typeof s=="object"?JSON.stringify(s):String(s);if(this.getAttribute("edit-value")!==t){this.setAttribute("edit-value",t);const i=this.querySelector("input, textarea");i&&this.tagName.toLowerCase()!=="editor-url"&&this.tagName.toLowerCase()!=="editor-table"&&(i.value=s),this.dispatchEvent(new Event("input",{bubbles:!0}))}}_updateSemanticId(e){const o=this.tagName.toLowerCase().replace(/^(setting-|editor-|viewer-)/,"").substring(0,5),i=y.generateSemanticBaseId(o,e,15);let a=i,d=2;for(;document.getElementById(a)&&document.getElementById(a)!==this;)a=`${i}${d}`,d++;const l=this.id;l!==a&&(this.id=a,this._updateETLReferences(l,a))}_updateETLReferences(e,s){const t=document.getElementById("designer-canvas");if(!t)return;const o=t.getAttribute("data-etl-config");if(o)try{const i=new RegExp("\\b"+e+"\\b","g"),a=o.replace(i,s);t.setAttribute("data-etl-config",a),`${e}${s}`}catch(i){console.warn("[Auto-Update] Error al actualizar referencias ETL del componente",i)}}_playAudio(e,s){let t=document.getElementById("global-audio-player");if(!t){if(t=document.createElement("div"),t.id="global-audio-player",t.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const a=document.createElement("style");a.id="audio-anim-style",a.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(a)}document.body.appendChild(t)}t.innerHTML=`
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div class="small fw-bold text-body text-truncate me-2" style="max-width: 280px;" title="${s}">
            <i class="fa-solid fa-music text-success me-2"></i>${s||"Audio Sin Título"}
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
    `;const o=t.querySelector("audio"),i=t.querySelector("#audio-loading");o.onloadstart=()=>{i.style.display="block"},o.oncanplay=()=>{i.style.display="none"},o.load(),o.play().catch(a=>console.log("Autoplay bloqueado:",a)),t.querySelector("#close-audio").onclick=()=>t.remove()}_showQRModal(e,s){var n;const t=`modal-qr-${this.id}`;(n=document.getElementById(t))==null||n.remove();const o=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(e)}`,i=`
      <div class="modal fade" id="${t}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-center pb-4">
                <h6 class="fw-bold mb-3">${s||"Escanear Enlace"}</h6>
                <img src="${o}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
                <div class="d-grid gap-2 px-4">
                    <button class="btn btn-outline-primary btn-sm" id="btn-copy-qr-${this.id}">
                        <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const a=document.getElementById(t),d=new bootstrap.Modal(a),l=a.querySelector(`#btn-copy-qr-${this.id}`);l&&(l.onclick=async()=>{try{await navigator.clipboard.writeText(e);const r=l.innerHTML;l.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',l.classList.replace("btn-outline-primary","btn-success"),l.classList.add("text-white"),setTimeout(()=>{document.body.contains(l)&&(l.innerHTML=r,l.classList.replace("btn-success","btn-outline-primary"),l.classList.remove("text-white"))},2e3)}catch(r){console.error("Error al copiar al portapapeles",r)}}),a.addEventListener("hidden.bs.modal",()=>a.remove()),d.show()}_showVideoModal(e,s,t){const o=document.getElementById("media-preview-modal");o&&o.remove();let i;t.type==="youtube"?i=`<div class="ratio ratio-16x9 shadow rounded overflow-hidden"><iframe src="${`https://www.youtube.com/embed/${t.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:i=`<video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;"><source src="${e}">Tu navegador no soporta video.</video>`;const a=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" style="filter: invert(1);"></button>
              ${i}
              ${s?`<div class="mt-2 text-white fw-bold text-shadow">${s}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",a);const d=document.getElementById("media-preview-modal");new bootstrap.Modal(d).show(),d.addEventListener("hidden.bs.modal",()=>d.remove())}_showImageModal(e,s){const t=document.getElementById("media-preview-modal");t&&t.remove();const o=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-white p-2 rounded-circle opacity-100" data-bs-dismiss="modal"></button>
              <img src="${e}" class="img-fluid rounded shadow" style="max-height: 85vh;">
              ${s?`<div class="mt-2 text-white fw-bold text-shadow">${s}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const i=document.getElementById("media-preview-modal");new bootstrap.Modal(i).show(),i.addEventListener("hidden.bs.modal",()=>i.remove())}}export{A as B};
