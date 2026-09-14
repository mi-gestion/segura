import{B as o}from"./BaseElement.VF2wA_rP.js";import{T as s,e as n}from"./Elements.B8W_hxTW.js";import"./FormulaEngine.CYGke5JL.js";class p extends o{static get observedAttributes(){return[...super.observedAttributes,"input-type"]}setData(t){super.setData(t);let e="text";t.tag===s.email?e="email":t.tag===s.password?e="password":t.tag===s.text?e=t.richText===!1||t.richText==="false"?"textarea":"richtext":t.tag===s.string&&(e=t.inputType==="tel"?t.inputType:"text"),this.setAttribute("input-type",e)}getData(){const t=super.getData(),e=this.getAttribute("input-type")||"text";return e==="email"?t.tag=s.email:e==="password"?t.tag=s.password:e==="textarea"?(t.tag=s.text,t.richText="false"):e==="richtext"?(t.tag=s.text,t.richText="true"):t.tag=s.string,t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",i=this.getAttribute("input-type")||"text";let a="string";i==="email"?a="email":i==="password"?a="password":(i==="textarea"||i==="richtext")&&(a="text");const l=n[a]||n.input;this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${l.color} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${l.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${l.longLabel}</h6>
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=r=>{this._isInternalUpdate=!0,this.setAttribute("title",r.target.value),this._isInternalUpdate=!1,r.target.classList.toggle("is-invalid",r.target.value.trim()==="")}}}customElements.define("setting-input",p);export{p as SettingInput};
