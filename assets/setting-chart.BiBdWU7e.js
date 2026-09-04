import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends o{static get observedAttributes(){return[...super.observedAttributes,"is-automatic","options"]}getData(){const t=super.getData();return t.isAutomatic=this.hasAttribute("is-automatic"),t.options=this.getAttribute("options")||"",t}setData(t){super.setData(t),t.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"),t.options&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"",s=t.trim()===""?"is-invalid":"";this.innerHTML=`
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
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${s}" 
                     value="${t}" data-prop="title" placeholder="Ej: Ventas Mensuales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=e=>{this._isInternalUpdate=!0,this.setAttribute("title",e.target.value),this._isInternalUpdate=!1,e.target.classList.toggle("is-invalid",e.target.value.trim()==="")}}getCustomSettingsHTML(){const t=this.hasAttribute("is-automatic");let s={aspectPercentage:75,bgColor:"#ffffff"};try{const a=this.getAttribute("options");a&&(s={...s,...JSON.parse(a)})}catch{}const e=Number(s.aspectPercentage)||75,i=[100,75,56.25,50].includes(e);return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-bolt me-2"></i>Comportamiento</h6>
      <div class="bg-white p-3 border rounded shadow-sm mb-3">
        <div class="form-check form-switch mb-1">
          <input class="form-check-input fs-5" type="checkbox" id="modal-chk-auto-${this.id}" ${t?"checked":""}>
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
                <option value="100" ${e===100?"selected":""}>1:1 (Cuadrado)</option>
                <option value="75" ${e===75?"selected":""}>4:3 (Estándar)</option>
                <option value="56.25" ${e===56.25?"selected":""}>16:9 (Panorámico)</option>
                <option value="50" ${e===50?"selected":""}>2:1 (Horizontal)</option>
                <option value="custom" ${i?"":"selected"}>Personalizado</option>
            </select>
        </div>

        <div class="col-md-4">
            <label class="form-label small fw-bold text-dark mb-1">Alto relativo al Ancho</label>
            <div class="input-group input-group-sm">
                <input type="number" class="form-control" id="modal-chart-aspect-${this.id}" value="${e}" min="5" max="500" step="0.01" 
                       oninput="document.getElementById('modal-chart-ratio-preset-${this.id}').value = 'custom';">
                <span class="input-group-text">%</span>
            </div>
        </div>

        <div class="col-md-4">
            <label class="form-label small fw-bold text-dark mb-1">Color de Fondo</label>
            <input type="color" class="form-control form-control-sm form-control-color w-100" id="modal-chart-bg-${this.id}" value="${s.bgColor}" title="Seleccione un color">
        </div>

      </div>
    `}saveCustomSettings(){const t=document.getElementById(`modal-chk-auto-${this.id}`);t&&(t.checked?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"));const s=document.getElementById(`modal-chart-aspect-${this.id}`),e=document.getElementById(`modal-chart-bg-${this.id}`);if(s&&e){const i={aspectPercentage:parseFloat(s.value)||75,bgColor:e.value};this.setAttribute("options",JSON.stringify(i))}}}customElements.define("setting-chart",l);export{l as SettingChart};
