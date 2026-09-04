import{B as s}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class i extends s{render(){const t=this.getAttribute("edit-value")||"",e=`<div class="d-flex align-items-center gap-2 py-1">
          <input autocomplete="off" spellcheck="false" type="password" class="form-control form-control-sm border-0 bg-transparent p-0 shadow-none fw-bold" 
                 id="val-${this.id}" value="${t}" readonly style="width: auto; min-width: 100px;">
          <div class="btn-group">
            <button class="btn btn-sm text-primary p-1 toggle-password" data-target="val-${this.id}" title="Ver/Ocultar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm text-body-secondary p-1" id="btn-copy-${this.id}" title="Copiar">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(e),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(t),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",i);export{i as ViewerPassword};
