import{B as x}from"./BaseElement.pPTaffjx.js";import{n as h}from"./preload-helper.BUfFKGiv.js";import{f as w,a as $,b as C,D as k}from"./main.BncWvLrk.js";import"./FormulaEngine.DHpTffcI.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./crypto-service.zPOJcvZe.js";const A=["dark","secondary","primary","success","danger","warning","info"];function y(t){return A.includes(t)?"text-white":"text-dark"}const E={show(t,e={}){const a=e.excludedTypes||[],s=e.modalTitle||"Configurar Columnas",l=e.modalIcon||"fa-table-columns",c=`modal-tbl-${t.id}`,p=document.getElementById(c);p&&p.remove();const o=`
      
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
    
      <div class="modal fade" id="${c}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content border-0 shadow">

            <div class="modal-header bg-light py-2 border-bottom">
              <h6 class="modal-title fw-bold text-body-secondary"><i class="fa-solid ${l} me-2"></i>${s}</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body bg-light p-3">
                <div id="col-container-${t.id}" class="d-flex flex-column gap-2" style="min-height: 150px;">
                </div>
            </div>

            <!-- Recuadro de herramientas encapsulado -->
            <div class="text-bg-primary p-3 w-100 shadow-sm z-1">
                <div class="small text-white-50 mb-1 fw-bold text-uppercase" style="font-size: 0.65rem;">
                  <i class="fa-solid fa-shapes me-1"></i> Agregar Elemento a la Columna
                </div>
                <div class="d-flex flex-row flex-nowrap overflow-auto gap-2 pb-1 w-100" id="toolbox-${t.id}" style="scrollbar-width: thin;">
                </div>
            </div>

            <!-- Boton de guardar -->
            <div class="modal-footer bg-body-tertiary p-3">
                <button type="button" class="btn btn-primary shadow-sm fw-bold px-4" id="btn-finish-${t.id}" data-bs-dismiss="modal">
                    <i class="fa-solid fa-check me-2"></i> Guardar Columnas
                </button>
            </div>

          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const v=document.getElementById(`toolbox-${t.id}`);Object.entries(h).forEach(([i,d])=>{if(a.includes(i)||d.hideInToolbox)return;const f=d.color||"secondary",g=y(f),u=document.createElement("button");u.className="btn btn-light border shadow-sm d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-start flex-shrink-0",u.style.width="160px",u.title=d.longLabel,u.type="button",u.innerHTML=`
        <span class="badge bg-${f} ${g} p-2 rounded-2 fs-6 d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;">
          ${d.icon}
        </span>
        <div class="overflow-hidden" style="line-height: 1.2;">
          <span class="d-block small fw-bold text-truncate text-dark">${d.longLabel}</span>
          <span class="d-block text-muted" style="font-size: 0.65rem;">Agregar</span>
        </div>
      `,u.addEventListener("click",()=>{this._addChildComponent(t,i)}),v.appendChild(u)});const b=document.getElementById(`col-container-${t.id}`);t._tempColumnsData&&t._tempColumnsData.length>0?t._tempColumnsData.forEach(i=>{const d=i.tag.replace("setting-",""),f=this._createWrapper(t,d,i);b.appendChild(f)}):b.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla esta vacia.<br>Seleccione elementos abajo para comenzar.</i></div>`;const n=document.getElementById(c),r=new bootstrap.Modal(n);r.show(),n.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(t,b),typeof t._updateCounter=="function"&&t._updateCounter(),r.dispose(),n.remove()})},_addChildComponent(t,e){const a=document.getElementById(`col-container-${t.id}`),s=a.querySelector("#empty-msg");s&&s.remove();const l=this._createWrapper(t,e);a.appendChild(l),l.scrollIntoView({behavior:"smooth",block:"center"})},_createWrapper(t,e,a=null){var b;const s=document.createElement("div"),l=h[e]||{icon:"🔹",color:"secondary",longLabel:e};s.className="designer-item-wrapper d-flex align-items-center mb-2 bg-white border rounded shadow-sm py-1 px-2 gap-2",s.setAttribute("data-component-type",e);const c=l.color||"secondary",p=y(c);s.innerHTML=`
      <!-- 1. Asa para arrastrar -->
      <div class="drag-handle text-muted cursor-grab px-1 flex-shrink-0" title="Mover columna">
        <i class="fa-solid fa-grip-vertical"></i>
      </div>

      <!-- 2. Indicador (Insignia) -->
      <span class="badge bg-${c} ${p} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1" style="width: 140px;" title="${l.longLabel}">
        <span class="fs-6">${l.icon}</span>
        <span class="small text-truncate fw-semibold">${l.longLabel}</span>
      </span>

      <!-- 3. Campo de Titulo en linea -->
      <div class="flex-grow-1">
        <input type="text" class="form-control form-control-sm border-0 bg-light tpl-item-title-input"
               value="" placeholder="Titulo de la columna..." autocomplete="off">
      </div>

      <!-- 4. Contenedor interno oculto -->
      <div class="d-none" id="child-container-${t.id}"></div>

      <!-- 5. Acciones a la derecha -->
      <div class="d-flex align-items-center gap-1 flex-shrink-0 border-start ps-1">
        <button class="btn btn-sm btn-outline-secondary btn-settings-modal py-0 px-2" title="Configuracion Avanzada">
          <i class="fa-solid fa-ellipsis-vertical fs-7"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger btn-del-col py-0 px-2" title="Eliminar Columna">
          <i class="fa-solid fa-trash-can fs-7"></i>
        </button>
      </div>
    `;const m=((b=h[e])==null?void 0:b.columnFacade)||e,o=document.createElement(`setting-${m}`);o.setAttribute("data-original-type",e),o.setAttribute("table",""),o.setAttribute("data-table-id",t.id),s.querySelector(`#child-container-${t.id}`).appendChild(o),a&&typeof o.setData=="function"&&o.setData(a);const v=s.querySelector(".tpl-item-title-input");return setTimeout(()=>{v.value=o.getAttribute("title")||""},0),v.oninput=n=>{const r=n.target.value;o.setAttribute("title",r);const i=o.querySelector('input[data-prop="title"]');i&&(i.value=r,i.dispatchEvent(new Event("input",{bubbles:!0})))},s.querySelector(".btn-settings-modal").onclick=()=>{const n=o.querySelector('button[data-bs-toggle="modal"], .settings-trigger, .card-header button, button');if(n)n.click();else if(typeof o.openModal=="function")o.openModal();else{const r=o.querySelector(".modal")||document.querySelector(`#modal-${o.id}`);r&&window.bootstrap&&(window.bootstrap.Modal.getOrCreateInstance(r)||new window.bootstrap.Modal(r)).show()}},s.querySelector(".btn-del-col").onclick=async()=>{const n=o.id?w(o.id):[];n.length>0&&!await $.confirm("Eliminar esta columna?",C(n))||s.remove()},k.init(s,".drag-handle"),o.addEventListener("visual-mutation",n=>{const r=n.detail.logicalKey,i=h[r];if(!i)return;s.setAttribute("data-component-type",r);const d=i.color||"secondary",f=y(d),g=s.querySelector(".badge");g&&(g.className=`badge bg-${d} ${f} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1`,g.innerHTML=`<span class="fs-6">${i.icon}</span><span class="small text-truncate fw-semibold">${i.longLabel}</span>`)}),s},_saveColumnsFromDOM(t,e){const a=[];e.querySelectorAll("*").forEach(l=>{l.tagName.toLowerCase().startsWith("setting-")&&typeof l.getData=="function"&&a.push(l.getData())}),t._tempColumnsData=a}},T={open(t,e={}){E.show(t,e)}};class S extends x{constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",a=e.trim()===""?"is-invalid":"",s=this._tempColumnsData?this._tempColumnsData.length:0,l=this.hasAttribute("prepend-rows");this.innerHTML=`
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
                    <input class="form-check-input cursor-pointer" type="checkbox" id="check-prepend-${this.id}" data-prop="prepend-rows" ${l?"checked":""}>
                    <label class="form-check-label small fw-bold text-muted cursor-pointer" for="check-prepend-${this.id}" style="font-size: 0.75rem;">
                        Insertar filas al inicio
                    </label>
                </div>
            </div>

            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${a}" 
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
    `,this.bindSettingsEvents();const c=this.querySelector('input[data-prop="title"]');c.oninput=m=>{this._isInternalUpdate=!0;const o=m.target.value;this.setAttribute("title",o),this._isInternalUpdate=!1,m.target.classList.toggle("is-invalid",o.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>T.open(this,h.table.columnBuilder);const p=this.querySelector('input[data-prop="prepend-rows"]');p&&(p.onchange=m=>{m.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",a=this.getAttribute("span-print")||"12",s=this.hasAttribute("prepend-rows");return`
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
                     value="${a}" data-prop="span-print" min="2" max="12">
            </div>
          </div>
        </div>
      </div>
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",a=>{const s=a.target.value;this._isInternalUpdate=!0,this.setAttribute("title",s),this._isInternalUpdate=!1,a.target.classList.toggle("is-invalid",s.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const a=this._tempColumnsData.length;e.innerText=`${a} columna${a!==1?"s":""} definida${a!==1?"s":""}`}}}customElements.define("setting-table",S);export{S as SettingTable};
