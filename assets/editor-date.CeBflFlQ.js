var n=Object.defineProperty;var d=(s,t,e)=>t in s?n(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>d(s,typeof t!="symbol"?t+"":t,e);import{B as c}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";const i=class i extends c{render(){const t=this.getAttribute("title")||"Campo";let e=this.getAttribute("edit-value");e||(e=i.getToday(),this.setAttribute("edit-value",e));const a=this.getCommonStyles(),o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-calendar-days me-1 text-${this.uiColor}"></i> ${t}
            </label>
            ${this.renderStyleControls()}
          </div>
          <input autocomplete="off" spellcheck="false" type="date" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${e}" style="${a}">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._attachEventListeners()}_attachEventListeners(){const t=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(t),t.addEventListener("input",e=>{this.setAttribute("edit-value",e.target.value)})}};l(i,"getToday",()=>new Date().toISOString().split("T")[0]);let r=i;customElements.define("editor-date",r);export{r as EditorDate};
