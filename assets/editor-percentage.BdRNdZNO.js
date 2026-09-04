import{EditorNumber as l}from"./editor-number.DTIbcSId.js";import"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class o extends l{render(){const t=this.getAttribute("title")||"Porcentaje",e=this.getAttribute("edit-value")||"",i=this.getCommonStyles(),s=this.hasAttribute("is-calculated"),r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${this.uiColor}"></i> ${t}
                ${s?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${s?"bg-light text-muted":""}" 
                   id="input-${this.id}" value="${e}" style="${i}" 
                   placeholder="0.00"
                   ${s?"readonly":""}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(t),t.addEventListener("focus",e=>{setTimeout(()=>e.target.select(),10)}),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(t)}}customElements.define("editor-percentage",o);export{o as EditorPercentage};
