import{B as o}from"./BaseElement.B8W23fke.js";import{T as l,e as r}from"./Elements.BsmmG6jM.js";import"./FormulaEngine.CYGke5JL.js";class c extends o{static get observedAttributes(){return[...super.observedAttributes,"page-break","section-level"]}setData(e){super.setData(e),e.pageBreak?this.setAttribute("page-break",""):this.removeAttribute("page-break");const a=(e.tag||"").replace("setting-","")==="subsection"?"2":"1";this.setAttribute("section-level",a)}getData(){const e=super.getData();return e.pageBreak=this.hasAttribute("page-break"),(this.getAttribute("section-level")||"1")==="2"?e.tag=l.subsection:e.tag=l.section,e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",n=(this.getAttribute("section-level")||"1")==="2"?"subsection":"section",s=r[n]||r.divider;this.innerHTML=`
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
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título / Nombre *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Datos Personales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0,this.setAttribute("title",i.target.value),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",i.target.value.trim()==="")}}}customElements.define("setting-divider",c);export{c as SettingDivider};
