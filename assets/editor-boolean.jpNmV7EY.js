import{B as s}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class o extends s{render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3 d-flex align-items-center justify-content-between">
          <label class="form-check-label fw-bold text-body small mb-0">
            <i class="fa-solid fa-toggle-on me-1 text-${this.uiColor}"></i> ${e}
          </label>
          <div class="form-check form-switch">
            <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="check-${this.id}" 
                   ${t?"checked":""} style="cursor:pointer">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",o);export{o as EditorBoolean};
