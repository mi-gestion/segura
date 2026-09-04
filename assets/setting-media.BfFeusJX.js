import{B as l}from"./BaseElement.BIf2Qi2B.js";import{e as o}from"./Utils.2v3ifB9J.js";class d extends l{static get observedAttributes(){return[...super.observedAttributes,"media-type"]}setData(e){super.setData(e);let t="image";e.tag==="setting-audio"?t="audio":e.tag==="setting-video"&&(t="video"),this.setAttribute("media-type",t)}getData(){const e=super.getData(),t=this.getAttribute("media-type")||"image";return t==="audio"?e.tag="setting-audio":t==="video"?e.tag="setting-video":e.tag="setting-image",e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",i=this.getAttribute("media-type")||"image",a=o[i]||o.media;this.innerHTML=`
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
              <span class="input-group-text border-end-0"><i class="fa-solid fa-paperclip text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Fotografía del Daño / Evidencia en Video">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}getCustomSettingsHTML(){const e=this.getAttribute("media-type")||"image";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-file-arrow-up me-2"></i>Tipo de Contenido</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Formato de Archivo Aceptado</label>
        <select class="form-select form-select-sm" id="modal-media-type-${this.id}">
            <option value="image" ${e==="image"?"selected":""}>Fotografía / Imagen (JPG, PNG)</option>
            <option value="audio" ${e==="audio"?"selected":""}>Pista de Audio / Nota de Voz (MP3, WAV)</option>
            <option value="video" ${e==="video"?"selected":""}>Clip de Video (MP4, WebM)</option>
        </select>
        <div class="form-text small text-muted mt-2">
          Determina la interfaz de carga y reproducción que verá el usuario en el documento.
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-media-type-${this.id}`);if(e){const t=e.value,i=this.getAttribute("media-type");this.setAttribute("media-type",t),t!==i&&(this.setAttribute("data-original-type",t),this.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:t}})))}}}customElements.define("setting-media",d);export{d as SettingMedia};
