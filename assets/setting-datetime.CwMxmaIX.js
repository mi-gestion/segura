import{B as o}from"./BaseElement.BIf2Qi2B.js";import{e as l}from"./Utils.2v3ifB9J.js";class r extends o{static get observedAttributes(){return[...super.observedAttributes,"time-type"]}setData(t){super.setData(t);let e="date";t.tag==="setting-time"&&(e="time"),this.setAttribute("time-type",e)}getData(){const t=super.getData();return(this.getAttribute("time-type")||"date")==="time"?t.tag="setting-time":t.tag="setting-date",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",i=this.getAttribute("time-type")||"date",s=l[i]||l.datetime;this.innerHTML=`
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
              <span class="input-group-text border-end-0"><i class="fa-regular fa-clock text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Fecha de Nacimiento / Hora de Entrada">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=a=>{this._isInternalUpdate=!0,this.setAttribute("title",a.target.value),this._isInternalUpdate=!1,a.target.classList.toggle("is-invalid",a.target.value.trim()==="")}}getCustomSettingsHTML(){const t=this.getAttribute("time-type")||"date";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-calendar-day me-2"></i>Formato de Captura</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        <label class="form-label small fw-bold text-dark mb-1">Tipo de Registro Temporal</label>
        <select class="form-select form-select-sm" id="modal-time-type-${this.id}">
            <option value="date" ${t==="date"?"selected":""}>Día / Fecha (Calendario)</option>
            <option value="time" ${t==="time"?"selected":""}>Hora Exacta (Reloj 24h)</option>
        </select>
        <div class="form-text small text-muted mt-2">
          Define si el usuario seleccionará una fecha en el calendario o una hora específica.
        </div>
      </div>
    `}saveCustomSettings(){const t=document.getElementById(`modal-time-type-${this.id}`);if(t){const e=t.value,i=this.getAttribute("time-type");this.setAttribute("time-type",e),e!==i&&(this.setAttribute("data-original-type",e),this.dispatchEvent(new CustomEvent("visual-mutation",{bubbles:!0,detail:{logicalKey:e}})))}}}customElements.define("setting-datetime",r);export{r as SettingDatetime};
