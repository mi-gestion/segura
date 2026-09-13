import{B as n}from"./BaseElement.d_VolxdG.js";import{T as a,e as r}from"./Elements.B8W_hxTW.js";import"./FormulaEngine.CYGke5JL.js";class o extends n{static get observedAttributes(){return[...super.observedAttributes,"time-type"]}setData(t){super.setData(t);let e="date";t.tag===a.time&&(e="time"),this.setAttribute("time-type",e)}getData(){const t=super.getData();return(this.getAttribute("time-type")||"date")==="time"?t.tag=a.time:t.tag=a.date,t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",l=this.getAttribute("time-type")||"date",s=r[l]||r.datetime;this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0,this.setAttribute("title",i.target.value),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}}}customElements.define("setting-datetime",o);export{o as SettingDatetime};
