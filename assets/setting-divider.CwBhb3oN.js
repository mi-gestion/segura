import{B as r}from"./BaseElement.BIf2Qi2B.js";import{e as o}from"./Utils.2v3ifB9J.js";class n extends r{static get observedAttributes(){return[...super.observedAttributes,"page-break","section-level"]}setData(e){super.setData(e),e.pageBreak?this.setAttribute("page-break",""):this.removeAttribute("page-break");let t="1";e.tag==="setting-subsection"&&(t="2"),this.setAttribute("section-level",t)}getData(){const e=super.getData();return e.pageBreak=this.hasAttribute("page-break"),(this.getAttribute("section-level")||"1")==="2"?e.tag="setting-subsection":e.tag="setting-section",e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",l=(this.getAttribute("section-level")||"1")==="2"?"subsection":"section",s=o[l]||o.divider;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${s.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${s.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${s.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título / Nombre *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Datos Personales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=a=>{this._isInternalUpdate=!0,this.setAttribute("title",a.target.value),this._isInternalUpdate=!1,a.target.classList.toggle("is-invalid",a.target.value.trim()==="")}}getCustomSettingsHTML(){const e=this.hasAttribute("page-break"),t=this.getAttribute("section-level")||"1";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-layer-group me-2"></i>Jerarquía Espacial</h6>
      <div class="bg-white p-3 border rounded shadow-sm mb-3">
        <label class="form-label small fw-bold text-dark mb-1">Nivel Visual</label>
        <select class="form-select form-select-sm" id="modal-section-level-${this.id}" 
                onchange="document.getElementById('pbreak-container-${this.id}').style.display = this.value === '1' ? 'block' : 'none';">
            <option value="1" ${t==="1"?"selected":""}>Nivel 1 (Sección Principal)</option>
            <option value="2" ${t==="2"?"selected":""}>Nivel 2 (Subsección / Subtítulo)</option>
        </select>
        <div class="form-text small text-muted mt-2">
          Controla la prominencia visual y los espaciados en la aplicación.
        </div>
      </div>

      <div id="pbreak-container-${this.id}" style="display: ${t==="1"?"block":"none"};">
          <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-file-pdf me-2"></i>Control de Impresión</h6>
          <div class="bg-white p-3 border rounded shadow-sm">
            <div class="form-check form-switch mb-0">
              <input class="form-check-input fs-5" type="checkbox" id="modal-chk-pbreak-${this.id}" ${e?"checked":""}>
              <label class="form-check-label small fw-bold text-dark ms-2 mt-1" for="modal-chk-pbreak-${this.id}">
                 Forzar Salto de Página
              </label>
            </div>
            <div class="form-text small text-muted mt-2">
              Si se activa, la impresora saltará a una página nueva justo antes de imprimir esta sección.
            </div>
          </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-section-level-${this.id}`);if(e){const i=e.value,l=this.getAttribute("section-level");if(this.setAttribute("section-level",i),i!==l){const s=i==="2"?"subsection":"section";this.setAttribute("data-original-type",s),this.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:s}}))}}const t=document.getElementById(`modal-chk-pbreak-${this.id}`);t&&(t.checked?this.setAttribute("page-break",""):this.removeAttribute("page-break"))}}customElements.define("setting-divider",n);export{n as SettingDivider};
