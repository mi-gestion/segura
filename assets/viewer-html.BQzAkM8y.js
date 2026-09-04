import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends r{render(){const e=this.getAttribute("title")||"Reporte",t=this.getAttribute("edit-value")||"<div class='text-muted small text-center p-3 border rounded border-dashed'>Esperando datos del reporte...</div>",s=`
      <div class="mb-2 w-100">
        <label class="d-block fw-bold text-body small mb-2">
          <i class="fa-solid fa-table me-1 text-${this.uiColor}"></i> ${e}
        </label>
        <div class="report-container w-100" style="overflow-x: auto;">
          ${t}
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-html",l);export{l as ViewerHtml};
