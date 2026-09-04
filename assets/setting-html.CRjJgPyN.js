import{B as l}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends l{render(){const e=this.getAttribute("title")||"",s=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"dark"} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-code me-2"></i>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel||"Bloque HTML"}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML?this.getSettingsMenuButtonHTML():""}
        </div>
        
        <div class="card-body p-3 bg-light">
          <div class="row">
            <div class="col-12">
              <!-- 🚀 ETIQUETA AGREGADA PARA PODER LEER EL CAMPO -->
              <label class="form-label small fw-bold text-muted mb-1">Título del Reporte *</label>
              
              <div class="input-group input-group-sm shadow-sm">
                <span class="input-group-text bg-white border-end-0">
                  <i class="fa-solid fa-heading text-muted"></i>
                </span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${s}" 
                       value="${e}" data-prop="title" placeholder="Ej: Resumen de Distribución">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents&&this.bindSettingsEvents();const i=this.querySelector('input[data-prop="title"]');i&&(i.oninput=t=>{this._isInternalUpdate=!0,this.setAttribute("title",t.target.value),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",t.target.value.trim()==="")})}}customElements.define("setting-html",a);export{a as SettingHtml};
