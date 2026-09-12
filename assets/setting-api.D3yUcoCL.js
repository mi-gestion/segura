import{B as a}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class l extends a{render(){const e=this.getAttribute("title")||"Nueva Conexión API",s=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-dark shadow-sm overflow-hidden">
        <div class="card-header text-bg-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-plug"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">Conector API</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Nombre de la Conexión *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${s}"
                     value="${e}" data-prop="title" placeholder="Ej: API de Tasa de Cambio">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents();const i=this.querySelector('input[data-prop="title"]');i&&(i.oninput=t=>{this._isInternalUpdate=!0,this.setAttribute("title",t.target.value),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",t.target.value.trim()==="")})}}customElements.define("setting-api",l);export{l as SettingApi};
