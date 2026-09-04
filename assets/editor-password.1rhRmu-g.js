import{B as i}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class o extends i{render(){const t=this.getAttribute("title")||"Contraseña",e=this.getAttribute("edit-value")||"",s=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-2">
            <i class="fa-solid fa-key me-1 text-${this.uiColor}"></i> ${t}
          </label>
          <div class="input-group input-group-sm shadow-none">
            <input autocomplete="off" spellcheck="false" type="password" class="form-control border-1 shadow-none" 
                   id="input-${this.id}" value="${e}" placeholder="Ingrese contraseña...">
            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="input-${this.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);t.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",t.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",o);export{o as EditorPassword};
