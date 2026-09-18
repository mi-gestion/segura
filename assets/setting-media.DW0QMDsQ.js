import{B as r}from"./BaseElement.D4tveIlI.js";import{T as i,e as l}from"./Elements.BsmmG6jM.js";import"./FormulaEngine.CYGke5JL.js";class d extends r{static get observedAttributes(){return[...super.observedAttributes,"media-type"]}setData(t){super.setData(t);let e="image";t.tag===i.audio?e="audio":t.tag===i.video&&(e="video"),this.setAttribute("media-type",e)}getData(){const t=super.getData(),e=this.getAttribute("media-type")||"image";return e==="audio"?t.tag=i.audio:e==="video"?t.tag=i.video:t.tag=i.image,t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",o=this.getAttribute("media-type")||"image",s=l[o]||l.media;this.innerHTML=`
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
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-paperclip text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Fotografía del Daño / Evidencia en Video">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=a=>{this._isInternalUpdate=!0,this.setAttribute("title",a.target.value),this._isInternalUpdate=!1,a.target.classList.toggle("is-invalid",a.target.value.trim()==="")}}}customElements.define("setting-media",d);export{d as SettingMedia};
