import{B as n}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class c extends n{_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),l=`form-control form-control-sm shadow-none ${i?"bg-light text-muted":""}`,r=i?"readonly":"",a=i?"Calculado...":"0.00",o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="number" class="${l}" 
                 id="input-${this.id}" value="${t}" style="${s}" 
                 placeholder="${a}"
                 ${r}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),e.addEventListener("focus",t=>{setTimeout(()=>t.target.select(),10)}),this.hasAttribute("is-calculated")||this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let s=e.value.trim();if(s!=="")try{const i=s.replace(/,/g,"."),l=new Function(`"use strict"; return (${i})`)();!isNaN(l)&&isFinite(l)&&(e.value=l,this.setAttribute("edit-value",l),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text",setTimeout(()=>e.select(),10)},e.onkeydown=s=>{s.key==="Enter"&&(s.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",c);export{c as EditorNumber};
