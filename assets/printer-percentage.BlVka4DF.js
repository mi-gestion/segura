import{B as n}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class i extends n{render(){const t=this.getAttribute("edit-value")||"0",e=this.getAttribute("type")||"Visual",s=`
      <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
          ${t}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(s,e)}}customElements.define("printer-percentage",i);export{i as PrinterPercentage};
