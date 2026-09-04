import{B as i}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class n extends i{render(){const t=this.getAttribute("edit-value")||"---",e=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${t}
        </div>`;this.innerHTML=this.renderPrinterStructure(s,e)}}customElements.define("printer-number",n);export{n as PrinterNumber};
