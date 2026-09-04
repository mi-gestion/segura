import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class s extends r{render(){const t=this.getAttribute("title")||"Reporte",e=this.getAttribute("edit-value")||"<div class='text-muted small text-center p-3 border rounded border-dashed'>Esperando datos del reporte...</div>",i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-3">
            <i class="fa-solid fa-table me-1 text-${this.uiColor}"></i> ${t}
          </label>
          <div id="html-container-${this.id}" class="report-container">
            ${e}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i)}setCalculatedValue(t){if(this.getAttribute("edit-value")!==t){this.setAttribute("edit-value",t);const e=this.querySelector(`#html-container-${this.id}`);e&&(e.innerHTML=t),this.dispatchEvent(new Event("input",{bubbles:!0}))}}}customElements.define("editor-html",s);export{s as EditorHtml};
