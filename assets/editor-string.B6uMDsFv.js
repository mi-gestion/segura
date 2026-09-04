import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class o extends r{render(){const t=this.getAttribute("title")||"Campo",e=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-font text-${this.uiColor}"></i> ${t}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${e}" style="${s}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(t)}}customElements.define("editor-string",o);export{o as EditorString};
