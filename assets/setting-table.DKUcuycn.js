import{B as g}from"./BaseElement.BIf2Qi2B.js";import{e as f}from"./Utils.2v3ifB9J.js";import{D as v}from"./main.UAgaLVqA.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./firebase-init.D5QOG0FW.js";class y extends g{constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",i=this._tempColumnsData?this._tempColumnsData.length:0,r=this.hasAttribute("prepend-rows");this.innerHTML=`
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
                <span id="col-counter-${this.id}">${i} columna${i!==1?"s":""} definida${i!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar Columnas
            </button>
          </div>
          
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=d=>{this._isInternalUpdate=!0;const l=d.target.value;this.setAttribute("title",l),this._isInternalUpdate=!1,d.target.classList.toggle("is-invalid",l.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal();const u=this.querySelector('input[data-prop="prepend-rows"]');u&&(u.onchange=d=>{d.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",i=this.hasAttribute("prepend-rows");return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-sliders me-1"></i> MÁS CONFIGURACIÓN
        </a>
        <div class="collapse" id="extra-${this.id}">
          
          <div class="p-2 bg-light border rounded mb-2 mt-2">
            <div class="form-check form-switch mb-0">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" 
                       id="check-prepend-${this.id}" data-prop="prepend-rows" ${i?"checked":""}>
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
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const i=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",i),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",i.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const r=`
      
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

            <!-- Recuadro de herramientas encapsulado -->
            <div class="text-bg-primary p-3 w-100 shadow-sm z-1">
                <div class="small text-white-50 mb-1 fw-bold text-uppercase" style="font-size: 0.65rem;">
                  <i class="fa-solid fa-shapes me-1"></i> Agregar Elemento a la Columna
                </div>
                <div class="d-flex flex-row flex-nowrap overflow-auto gap-2 pb-1 w-100" id="toolbox-${this.id}" style="scrollbar-width: thin;">
                </div>
            </div>

            <!-- Botón de guardar afuera y a la derecha (Botón azul) -->
            <div class="modal-footer bg-body-tertiary p-3">
                <button type="button" class="btn btn-primary shadow-sm fw-bold px-4" id="btn-finish-${this.id}" data-bs-dismiss="modal">
                    <i class="fa-solid fa-check me-2"></i> Guardar Columnas
                </button>
            </div>

          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const u=document.getElementById(`toolbox-${this.id}`);Object.entries(f).forEach(([p,s])=>{if(p==="table"||s.hideInToolbox)return;const n=["dark","secondary","primary","success","danger","warning","info"],a=s.color||"secondary",m=n.includes(a)?"text-white":"text-dark",c=document.createElement("button");c.className="btn btn-light border shadow-sm d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-start flex-shrink-0",c.style.width="160px",c.title=s.longLabel,c.type="button",c.innerHTML=`
        <span class="badge bg-${a} ${m} p-2 rounded-2 fs-6 d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;">
          ${s.icon}
        </span>
        <div class="overflow-hidden" style="line-height: 1.2;">
          <span class="d-block small fw-bold text-truncate text-dark">${s.longLabel}</span>
          <span class="d-block text-muted" style="font-size: 0.65rem;">Agregar</span>
        </div>
      `,c.addEventListener("click",()=>{this._addChildComponent(p)}),u.appendChild(c)});const d=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(p=>{const s=p.tag.replace("setting-",""),n=this._createWrapper(s);let a=s;["string","email","password","text"].includes(s)?a="input":["section","subsection"].includes(s)?a="divider":["number","currency","percentage"].includes(s)?a="numeric":["date","time"].includes(s)?a="datetime":["image","audio","video"].includes(s)&&(a="media");const m=n.querySelector(`setting-${a}`);m&&m.setData&&(m.setAttribute("table",""),m.setData(p)),d.appendChild(n)}):d.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const l=document.getElementById(e),o=new bootstrap.Modal(l);o.show(),l.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(d),this._updateCounter(),o.dispose(),l.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),i=t.querySelector("#empty-msg");i&&i.remove();const r=this._createWrapper(e);t.appendChild(r),r.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div"),i=f[e]||{icon:"🔹",color:"secondary",longLabel:e};t.className="designer-item-wrapper d-flex align-items-center mb-2 bg-white border rounded shadow-sm py-1 px-2 gap-2",t.setAttribute("data-component-type",e);const r=["dark","secondary","primary","success","danger","warning","info"],u=i.color||"secondary",d=r.includes(u)?"text-white":"text-dark";t.innerHTML=`
      <!-- 1. Asa para arrastrar -->
      <div class="drag-handle text-muted cursor-grab px-1 flex-shrink-0" title="Mover columna">
        <i class="fa-solid fa-grip-vertical"></i>
      </div>

      <!-- 2. Indicador (Insignia) -->
      <span class="badge bg-${u} ${d} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1" style="width: 140px;" title="${i.longLabel}">
        <span class="fs-6">${i.icon}</span>
        <span class="small text-truncate fw-semibold">${i.longLabel}</span>
      </span>

      <!-- 3. Campo de Título en línea -->
      <div class="flex-grow-1">
        <input type="text" class="form-control form-control-sm border-0 bg-light tpl-item-title-input" 
               value="" placeholder="Título de la columna..." autocomplete="off">
      </div>

      <!-- 4. Contenedor interno oculto -->
      <div class="d-none" id="child-container-${this.id}"></div>

      <!-- 5. Acciones a la derecha -->
      <div class="d-flex align-items-center gap-1 flex-shrink-0 border-start ps-1">
        <button class="btn btn-sm btn-outline-secondary btn-settings-modal py-0 px-2" title="Configuración Avanzada">
          <i class="fa-solid fa-ellipsis-vertical fs-7"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger btn-del-col py-0 px-2" title="Eliminar Columna">
          <i class="fa-solid fa-trash-can fs-7"></i>
        </button>
      </div>
    `;let l=e;["string","email","password","text"].includes(e)?l="input":["section","subsection"].includes(e)?l="divider":["number","currency","percentage"].includes(e)?l="numeric":["date","time"].includes(e)?l="datetime":["image","audio","video"].includes(e)&&(l="media");const o=document.createElement(`setting-${l}`);o.setAttribute("data-original-type",e),o.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(o);const p=t.querySelector(".tpl-item-title-input");return setTimeout(()=>{p.value=o.getAttribute("title")||""},0),p.oninput=s=>{const n=s.target.value;o.setAttribute("title",n);const a=o.querySelector('input[data-prop="title"]');a&&(a.value=n,a.dispatchEvent(new Event("input",{bubbles:!0})))},t.querySelector(".btn-settings-modal").onclick=()=>{const s=o.querySelector('button[data-bs-toggle="modal"], .settings-trigger, .card-header button, button');if(s)s.click();else if(typeof o.openModal=="function")o.openModal();else{const n=o.querySelector(".modal")||document.querySelector(`#modal-${o.id}`);n&&window.bootstrap&&(window.bootstrap.Modal.getOrCreateInstance(n)||new window.bootstrap.Modal(n)).show()}},t.querySelector(".btn-del-col").onclick=()=>t.remove(),v.init(t,".drag-handle"),o.addEventListener("visual-mutation",s=>{const n=s.detail.logicalKey,a=f[n];if(!a)return;t.setAttribute("data-component-type",n);const m=["dark","secondary","primary","success","danger","warning","info"],c=a.color||"secondary",h=m.includes(c)?"text-white":"text-dark",b=t.querySelector(".badge");b&&(b.className=`badge bg-${c} ${h} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1`,b.innerHTML=`<span class="fs-6">${a.icon}</span><span class="small text-truncate fw-semibold">${a.longLabel}</span>`)}),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(r=>{r.tagName.toLowerCase().startsWith("setting-")&&typeof r.getData=="function"&&t.push(r.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",y);export{y as SettingTable};
