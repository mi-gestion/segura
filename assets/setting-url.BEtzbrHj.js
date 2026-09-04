import{B as a}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class o extends a{static get observedAttributes(){return[...super.observedAttributes,"options"]}getData(){const t=super.getData();return t.options=this.getAttribute("options")||"",t}setData(t){super.setData(t),t.options&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-link"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                       value="${t}" data-prop="title" placeholder="Ej: Sitio Web Oficial">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}getCustomSettingsHTML(){let t={showTextUrl:!0,showQR:!0};try{const e=this.getAttribute("options");e&&(t={...t,...JSON.parse(e)})}catch{}return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-eye me-2"></i>Opciones de Visualización</h6>
      <div class="bg-white p-3 border rounded shadow-sm mb-3">
        
        <div class="form-check form-switch mb-2">
          <input class="form-check-input" type="checkbox" id="modal-chk-text-${this.id}" ${t.showTextUrl?"checked":""}>
          <label class="form-check-label small fw-bold text-dark" for="modal-chk-text-${this.id}">Mostrar Texto Literal de la URL</label>
        </div>
        <div class="form-text small text-muted mb-3 border-bottom pb-3">Si se desactiva, solo se mostrará el texto amigable (Ej: "Ver Documento"), ocultando la dirección "https://...".</div>

        <div class="form-check form-switch mb-1">
          <input class="form-check-input" type="checkbox" id="modal-chk-qr-${this.id}" ${t.showQR?"checked":""}>
          <label class="form-check-label small fw-bold text-dark" for="modal-chk-qr-${this.id}">Habilitar Código QR</label>
        </div>
        <div class="form-text small text-muted">Añade un botón para ver el QR en pantalla y lo dibuja en las exportaciones a PDF.</div>
      </div>
    `}saveCustomSettings(){const t=document.getElementById(`modal-chk-text-${this.id}`),e=document.getElementById(`modal-chk-qr-${this.id}`);if(t&&e){const s={showTextUrl:t.checked,showQR:e.checked};this.setAttribute("options",JSON.stringify(s))}}}customElements.define("setting-url",o);export{o as SettingUrl};
