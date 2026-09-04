import{EditorNumber as l}from"./editor-number.DTIbcSId.js";import"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends l{static get observedAttributes(){return[...super.observedAttributes,"currency"]}setData(t){super.setData(t),t.currency&&this.setAttribute("currency",t.currency)}render(){const t=this.getAttribute("title")||"Importe",e=this.getAttribute("edit-value")||"",r=this.getAttribute("currency")||"$",i=this.getCommonStyles(),s=this.hasAttribute("is-calculated"),n=`form-control shadow-none border-1 ${s?"bg-light text-muted":""}`,c=s?"readonly":"",o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${this.uiColor}"></i> ${t}
                ${s?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${r}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${n}" 
                   id="input-${this.id}" value="${e}" style="${i}" 
                   placeholder="0.00"
                   ${c}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);t&&(this._attachStyleEventListeners(t),t.addEventListener("focus",e=>{setTimeout(()=>e.target.select(),10)}),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(t))}}customElements.define("editor-currency",a);export{a as EditorCurrency};
