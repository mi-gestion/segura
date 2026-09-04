import{B as i}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class s extends i{render(){var e;const t=this.getAttribute("edit-value")||"";if(!t||t.includes("Esperando datos")){this.innerHTML="";return}const n=`
      <div class="html-print-container" style="width: 100%; margin-top: 5px;">
        ${t}
      </div>
    `,r=((e=document.getElementById("document-canvas"))==null?void 0:e.getAttribute("data-print-style"))||"Visual";this.innerHTML=this.renderPrinterStructure(n,r)}}customElements.define("printer-html",s);export{s as PrinterHtml};
