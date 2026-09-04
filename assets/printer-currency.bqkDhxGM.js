import{B as c}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class u extends c{static get observedAttributes(){return[...super.observedAttributes,"currency"]}setData(t){super.setData(t),t.currency&&this.setAttribute("currency",t.currency)}render(){const t=parseFloat(this.getAttribute("edit-value"))||0,e=this.getAttribute("currency")||"$",r=this.getAttribute("type")||"Visual",i=this.getCommonStyles(),s=t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n=`
        <div style="${i} font-size: inherit; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${e}</span>${s}
        </div>`;this.innerHTML=this.renderPrinterStructure(n,r)}}customElements.define("printer-currency",u);export{u as PrinterCurrency};
