import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends r{render(){let t=this.getAttribute("edit-value")||"";const i=this.getAttribute("type")||"Visual",s=this.getAttribute("rich-text")!=="false",n=this.getCommonStyles();let e;s?(/<\/?[a-z][\s\S]*>/i.test(t)||(t=t.replace(/\n/g,"<br>")),e=`
        <div class="ql-editor" style="padding: 0; line-height: 1.2; text-align: left; font-size: inherit;">
            ${t}
        </div>`):e=`
        <div style="${n} font-size: inherit; padding: 2px 0; line-height: 1.3;">
            ${t||"---"}
        </div>`,this.innerHTML=this.renderPrinterStructure(e,i)}}customElements.define("printer-text",l);export{l as PrinterText};
