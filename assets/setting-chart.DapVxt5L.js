import{B as i}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class a extends i{static get observedAttributes(){return[...super.observedAttributes,"is-automatic","options"]}getData(){const t=super.getData();return t.isAutomatic=this.hasAttribute("is-automatic"),t.options=this.getAttribute("options")||"",t}setData(t){super.setData(t),t.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"),t.options&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"",s=t.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=e=>{this._isInternalUpdate=!0,this.setAttribute("title",e.target.value),this._isInternalUpdate=!1,e.target.classList.toggle("is-invalid",e.target.value.trim()==="")}}}customElements.define("setting-chart",a);export{a as SettingChart};
