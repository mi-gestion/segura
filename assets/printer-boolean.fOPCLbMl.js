import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class i extends o{render(){const e=this.getAttribute("edit-value"),r=this.getAttribute("type")||"Visual",t=e==="true",n=`
        <div style="color: ${t?"#198754":"#dc3545"}; font-size: inherit; padding: 2px 0; font-weight: bold;">
            ${t?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(n,r)}}customElements.define("printer-boolean",i);export{i as PrinterBoolean};
