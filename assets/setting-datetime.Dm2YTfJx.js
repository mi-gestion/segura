import{B as l}from"./BaseElement.pPTaffjx.js";import{n as a}from"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class n extends l{static get observedAttributes(){return[...super.observedAttributes,"time-type"]}setData(t){super.setData(t);let e="date";t.tag==="setting-time"&&(e="time"),this.setAttribute("time-type",e)}getData(){const t=super.getData();return(this.getAttribute("time-type")||"date")==="time"?t.tag="setting-time":t.tag="setting-date",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",r=this.getAttribute("time-type")||"date",i=a[r]||a.datetime;this.innerHTML=`
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
              <span class="input-group-text border-end-0"><i class="fa-regular fa-clock text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${e}" 
                     value="${t}" data-prop="title" placeholder="Ej: Fecha de Nacimiento / Hora de Entrada">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")}}}customElements.define("setting-datetime",n);export{n as SettingDatetime};
