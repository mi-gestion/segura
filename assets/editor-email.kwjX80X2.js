import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends o{render(){const t=this.getAttribute("title")||"Email",e=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-at me-1 text-${this.uiColor}"></i> ${t}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="email" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${e}" style="${s}" placeholder="usuario@ejemplo.com">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(t)}}customElements.define("editor-email",l);export{l as EditorEmail};
