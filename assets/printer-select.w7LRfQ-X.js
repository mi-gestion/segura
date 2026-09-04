import{B as i}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class r extends i{static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(t){super.setData(t),t.options!==void 0&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("edit-value")||"---",e=this.getAttribute("type")||"Visual",s=`
        <div style="${this.getCommonStyles()} font-size: inherit; padding: 2px 0;">
            ${t}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(s,e)}}customElements.define("printer-select",r);export{r as PrinterSelect};
