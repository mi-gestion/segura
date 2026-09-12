import{B as a}from"./BaseElement.pPTaffjx.js";import{n as i}from"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class c extends a{static get observedAttributes(){return[...super.observedAttributes,"numeric-type","currency"]}setData(t){super.setData(t);let e="number";t.tag==="setting-currency"?e="currency":t.tag==="setting-percentage"&&(e="percentage"),this.setAttribute("numeric-type",e),t.currency&&this.setAttribute("currency",t.currency)}getData(){const t=super.getData(),e=this.getAttribute("numeric-type")||"number";return e==="currency"?(t.tag="setting-currency",t.currency=this.getAttribute("currency")||"$"):e==="percentage"?t.tag="setting-percentage":t.tag="setting-number",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",n=this.getAttribute("numeric-type")||"number",s=i[n]||i.numeric;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${s.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${s.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${s.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-hashtag text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Precio, Edad, Porcentaje">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0,this.setAttribute("title",r.target.value),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",r.target.value.trim()==="")}}}customElements.define("setting-numeric",c);export{c as SettingNumeric};
