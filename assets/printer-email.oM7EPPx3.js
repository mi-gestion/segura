import{B as s}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class r extends s{render(){const t=this.getAttribute("edit-value")||"---",e=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: inherit; word-break: break-all; padding: 2px 0;">
            ${t}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,e)}}customElements.define("printer-email",r);export{r as PrinterEmail};
