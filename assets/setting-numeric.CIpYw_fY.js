import{B as c}from"./BaseElement.BIf2Qi2B.js";import{e as n}from"./Utils.2v3ifB9J.js";class l extends c{static get observedAttributes(){return[...super.observedAttributes,"numeric-type","currency"]}setData(e){super.setData(e);let t="number";e.tag==="setting-currency"?t="currency":e.tag==="setting-percentage"&&(t="percentage"),this.setAttribute("numeric-type",t),e.currency&&this.setAttribute("currency",e.currency)}getData(){const e=super.getData(),t=this.getAttribute("numeric-type")||"number";return t==="currency"?(e.tag="setting-currency",e.currency=this.getAttribute("currency")||"$"):t==="percentage"?e.tag="setting-percentage":e.tag="setting-number",e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",s=this.getAttribute("numeric-type")||"number",r=n[s]||n.numeric;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${r.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${r.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${r.longLabel}</h6>
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0,this.setAttribute("title",i.target.value),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}}getCustomSettingsHTML(){const e=this.getAttribute("numeric-type")||"number",t=this.getAttribute("currency")||"$";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-calculator me-2"></i>Formato de Número</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Tipo de Valor</label>
        <select class="form-select form-select-sm" id="modal-numeric-type-${this.id}" 
                onchange="document.getElementById('curr-container-${this.id}').style.display = this.value === 'currency' ? 'block' : 'none';">
            <option value="number" ${e==="number"?"selected":""}>Número Estándar (Decimal / Entero)</option>
            <option value="currency" ${e==="currency"?"selected":""}>Moneda / Importe Financiero</option>
            <option value="percentage" ${e==="percentage"?"selected":""}>Porcentaje (%)</option>
        </select>
        
        <div id="curr-container-${this.id}" style="display: ${e==="currency"?"block":"none"}; mt-3 border-top pt-2">
            <label class="form-label small fw-bold text-dark mt-2 mb-1">Símbolo Monetario</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control text-center fw-bold w-50" 
                   id="modal-currency-sym-${this.id}" value="${t}" placeholder="Ej: $, Bs, €">
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-numeric-type-${this.id}`);if(e){const t=e.value,s=this.getAttribute("numeric-type");this.setAttribute("numeric-type",t);const r=document.getElementById(`modal-currency-sym-${this.id}`);r&&t==="currency"&&this.setAttribute("currency",r.value.trim()),t!==s&&(this.setAttribute("data-original-type",t),this.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:t}})))}}}customElements.define("setting-numeric",l);export{l as SettingNumeric};
