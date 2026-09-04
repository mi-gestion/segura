import{B as l}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends l{render(){const t=this.getAttribute("title")||"",i=t.trim()===""?"is-invalid":"";this.innerHTML=`
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
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${i}" 
                       value="${t}" data-prop="title" placeholder="Ej: ¿Acepta términos?">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=e=>{this._isInternalUpdate=!0;const s=e.target.value;this.setAttribute("title",s),this._isInternalUpdate=!1,e.target.classList.toggle("is-invalid",s.trim()==="")}}}customElements.define("setting-boolean",a);export{a as SettingBoolean};
