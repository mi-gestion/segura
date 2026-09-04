import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends r{static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(t){super.setData(t),t.options!==void 0&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"Seleccione...",s=this.getAttribute("edit-value")||"",i=(this.getAttribute("options")||"").split(",").map(e=>e.trim()).filter(e=>e!==""),o=this.getCommonStyles(),n=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-caret-down me-1 text-${this.uiColor}"></i> ${t}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${o}">
            <option value="" ${s===""?"selected":""}>Seleccione una opción...</option>
            ${i.map(e=>`<option value="${e}" ${s===e?"selected":""}>${e}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(n),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(t),t.onchange=()=>this.setAttribute("edit-value",t.value)}}customElements.define("editor-select",l);export{l as EditorSelect};
