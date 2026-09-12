import{B as n}from"./BaseElement.pPTaffjx.js";import{n as r}from"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class o extends n{static get observedAttributes(){return[...super.observedAttributes,"input-type"]}setData(t){super.setData(t);let e="text";t.tag==="setting-email"?e="email":t.tag==="setting-password"?e="password":t.tag==="setting-text"?e=t.richText===!1||t.richText==="false"?"textarea":"richtext":t.tag==="setting-string"&&(e=t.inputType==="tel"?t.inputType:"text"),this.setAttribute("input-type",e)}getData(){const t=super.getData(),e=this.getAttribute("input-type")||"text";return e==="email"?t.tag="setting-email":e==="password"?t.tag="setting-password":e==="textarea"?(t.tag="setting-text",t.richText="false"):e==="richtext"?(t.tag="setting-text",t.richText="true"):t.tag="setting-string",t}render(){const t=this.getAttribute("title")||"",e=t.trim()===""?"is-invalid":"",s=this.getAttribute("input-type")||"text";let i="string";s==="email"?i="email":s==="password"?i="password":(s==="textarea"||s==="richtext")&&(i="text");const a=r[i]||r.input;this.innerHTML=`
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
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=l=>{this._isInternalUpdate=!0,this.setAttribute("title",l.target.value),this._isInternalUpdate=!1,l.target.classList.toggle("is-invalid",l.target.value.trim()==="")}}}customElements.define("setting-input",o);export{o as SettingInput};
