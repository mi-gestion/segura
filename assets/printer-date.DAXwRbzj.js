import{B as s}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends s{render(){const t=this.getAttribute("edit-value"),i=this.getAttribute("type")||"Visual",n=this.getCommonStyles();let e="---";t&&(e=new Date(t+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`
        <div style="${n} font-size: inherit; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,i)}}customElements.define("printer-date",a);export{a as PrinterDate};
