import{B as c}from"./BaseElement.BA7nnqi4.js";import{T as r,e as n}from"./Elements.B8W_hxTW.js";import"./FormulaEngine.CYGke5JL.js";class l extends c{static get observedAttributes(){return[...super.observedAttributes,"numeric-type","currency"]}setData(e){super.setData(e);let t="number";e.tag===r.currency?t="currency":e.tag===r.percentage&&(t="percentage"),this.setAttribute("numeric-type",t),e.currency&&this.setAttribute("currency",e.currency)}getData(){const e=super.getData(),t=this.getAttribute("numeric-type")||"number";return t==="currency"?(e.tag=r.currency,e.currency=this.getAttribute("currency")||"$"):t==="percentage"?e.tag=r.percentage:e.tag=r.number,e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",a=this.getAttribute("numeric-type")||"number",s=n[a]||n.numeric;this.innerHTML=`
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
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Precio, Edad, Porcentaje">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0,this.setAttribute("title",i.target.value),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}}}customElements.define("setting-numeric",l);export{l as SettingNumeric};
