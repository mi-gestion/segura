import{B as o}from"./BaseElement.pPTaffjx.js";import{n as a}from"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class r extends o{static get observedAttributes(){return[...super.observedAttributes,"media-type"]}setData(t){super.setData(t);let e="image";t.tag==="setting-audio"?e="audio":t.tag==="setting-video"&&(e="video"),this.setAttribute("media-type",e)}getData(){const t=super.getData(),e=this.getAttribute("media-type")||"image";return e==="audio"?t.tag="setting-audio":e==="video"?t.tag="setting-video":t.tag="setting-image",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",l=this.getAttribute("media-type")||"image",i=a[l]||a.media;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${i.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${i.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${i.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-paperclip text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Fotografía del Daño / Evidencia en Video">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}}customElements.define("setting-media",r);export{r as SettingMedia};
