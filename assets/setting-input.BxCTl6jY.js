import{B as r}from"./BaseElement.BIf2Qi2B.js";import{e as o}from"./Utils.2v3ifB9J.js";class n extends r{static get observedAttributes(){return[...super.observedAttributes,"input-type"]}setData(t){super.setData(t);let e="text";t.tag==="setting-email"?e="email":t.tag==="setting-password"?e="password":t.tag==="setting-text"&&(e=t.richText===!1||t.richText==="false"?"textarea":"richtext"),this.setAttribute("input-type",e)}getData(){const t=super.getData(),e=this.getAttribute("input-type")||"text";return e==="email"?t.tag="setting-email":e==="password"?t.tag="setting-password":e==="textarea"?(t.tag="setting-text",t.richText="false"):e==="richtext"?(t.tag="setting-text",t.richText="true"):t.tag="setting-string",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",i=this.getAttribute("input-type")||"text";let s="string";i==="email"?s="email":i==="password"?s="password":(i==="textarea"||i==="richtext")&&(s="text");const a=o[s]||o.input;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${a.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${a.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${a.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Nombre Completo">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=l=>{this._isInternalUpdate=!0,this.setAttribute("title",l.target.value),this._isInternalUpdate=!1,l.target.classList.toggle("is-invalid",l.target.value.trim()==="")}}getCustomSettingsHTML(){const t=this.getAttribute("input-type")||"text";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-keyboard me-2"></i>Formato de Entrada</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Tipo de Captura</label>
        <select class="form-select form-select-sm" id="modal-input-type-${this.id}">
            <option value="text" ${t==="text"?"selected":""}>Texto Corto (Una línea)</option>
            <option value="textarea" ${t==="textarea"?"selected":""}>Texto Largo (Plano sin formato)</option>
            <option value="richtext" ${t==="richtext"?"selected":""}>Texto Largo (Enriquecido / HTML)</option>
            <option value="email" ${t==="email"?"selected":""}>Correo Electrónico</option>
            <option value="password" ${t==="password"?"selected":""}>Contraseña (Oculta)</option>
        </select>
      </div>
    `}saveCustomSettings(){const t=document.getElementById(`modal-input-type-${this.id}`);if(t){const e=t.value,i=this.getAttribute("input-type");if(this.setAttribute("input-type",e),e!==i){let s="string";e==="email"?s="email":e==="password"?s="password":(e==="textarea"||e==="richtext")&&(s="text"),this.setAttribute("data-original-type",s),this.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:s}}))}}}}customElements.define("setting-input",n);export{n as SettingInput};
