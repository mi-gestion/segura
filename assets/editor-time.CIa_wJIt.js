import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends o{render(){const t=this.getAttribute("title")||"Hora",e=this.getAttribute("edit-value")||"",r=this.hasAttribute("is-automatic"),s=this.hasAttribute("table"),a=this.getCommonStyles(),i=`
      <input type="time" class="form-control ${s?"form-control-sm border-0 bg-transparent px-1":"form-control-sm shadow-none border-1"} fw-bold" 
             id="input-${this.id}" value="${e}" style="${a}" ${r?"readonly":""}>
    `;if(s)this.innerHTML=i;else{const n=`
        <div class="card border-0 shadow-sm border-start border-4 border-info h-100">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <label class="form-label fw-bold text-body small mb-0">
                <i class="fa-regular fa-clock me-1 text-info"></i> ${t}
              </label>
              ${this.renderStyleControls()}
            </div>
            ${i}
          </div>
        </div>
      `;this.innerHTML=this.renderViewerStructure(n)}this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);t&&(this._attachStyleEventListeners&&this._attachStyleEventListeners(t),t.addEventListener("input",e=>{this.setAttribute("edit-value",e.target.value)}))}getData(){const t=super.getData();return t.value=this.getAttribute("edit-value")||"",t}}customElements.define("editor-time",l);export{l as EditorTime};
