import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends o{static get observedAttributes(){return[...super.observedAttributes,"options"]}getData(){const t=super.getData();return t.options=this.getAttribute("options")||"",t}setData(t){super.setData(t),t.options!==void 0&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"",i=t.trim()===""?"is-invalid":"";this.innerHTML=`
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
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${i}" 
                     value="${t}" data-prop="title" placeholder="Ej: Estado Civil">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=e=>{this._isInternalUpdate=!0;const s=e.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,e.target.classList.toggle("is-invalid",s.trim()==="")}}getCustomSettingsHTML(){const t=this.getAttribute("options")||"";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-list-ul me-2"></i>Opciones Disponibles</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Lista de elementos (separados por coma) *</label>
        <textarea class="form-control" id="modal-options-${this.id}" rows="3" 
                  placeholder="Soltero, Casado, Divorciado">${t}</textarea>
        <div class="form-text small text-muted mt-2">
          <i class="fa-solid fa-info-circle me-1"></i> Escribe las opciones que el usuario podrá elegir, separadas por una coma (,).
        </div>
      </div>
    `}saveCustomSettings(){const t=document.getElementById(`modal-options-${this.id}`);t&&this.setAttribute("options",t.value)}}customElements.define("setting-select",a);export{a as SettingSelect};
