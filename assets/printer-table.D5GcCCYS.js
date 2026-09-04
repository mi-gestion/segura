import{B as x}from"./BaseElement.BIf2Qi2B.js";import{T as u}from"./TableUtils.BbNPy2Ui.js";import"./Utils.2v3ifB9J.js";class T extends x{render(){const e=this.getAttribute("edit-value"),r=this.getAttribute("columns"),o=this.getAttribute("title")||"",a=this.getAttribute("type")||"Visual";let t=[],s=[];try{e&&(t=JSON.parse(e)),r&&(s=JSON.parse(r))}catch(i){console.warn("Error parseando tabla",i)}const n=s.filter(i=>!i.hidePrint),d=a==="Compacto",p=a==="Facil Lectura",b=d?"0.75rem":p?"1.2rem":"0.95rem",f=d?"0.65rem":p?"1rem":"0.75rem",g=`width: 100%; border-collapse: collapse; font-size: ${b}; page-break-inside: auto;`,l=d?"2px 4px":p?"8px":"6px 8px",m=`
      <table style="${g}">
        <caption style="text-align: left; font-weight: bold; margin-bottom: 8px;">${o}</caption>
        
        <!-- 🚀 MEJORA 2: Repite los encabezados en la siguiente hoja si la tabla se divide -->
        <thead style="display: table-header-group;">
          <tr style="background-color: #f8f9fa;">
            ${n.map(i=>`
              <th style="padding: ${l}; border: 1px solid #dee2e6; text-align: ${i.alignment||"left"}; text-transform: uppercase; font-size: ${f};">
                ${i.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${t.length>0?t.map((i,h)=>`
            <!-- 🚀 MEJORA 3: Protege la fila para que el texto no quede picado por la mitad -->
            <tr style="background-color: ${h%2===0?"#fff":"#fcfcfc"}; page-break-inside: avoid; page-break-after: auto;">
               ${n.map(c=>{const y=i.find($=>$.fieldId===c.id)||{};return`
                  <td style="padding: ${l}; border: 1px solid #dee2e6; text-align: ${c.alignment||"left"};">
                    ${this._generateCellHTML(c,y,a)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${n.length}" style="text-align:center; padding: ${l};">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(t,n,l)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(m,a)}_renderTotalRow(e,r,o){return r.some(t=>t.total)?`<tr style="font-weight: bold; background: #eee;">
      ${r.map(t=>{let s="";if(t.total){const n=u.calculateTotal(e,t.id);s=u.formatTotalHtml(n,t)}return`<td style="padding: ${o}; border: 1px solid #dee2e6; text-align: ${t.alignment||"left"};">${s}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,r,o){const a=e.tag.replace("setting-","printer-"),t=document.createElement(a);return t.setAttribute("table",""),t.setAttribute("type",o),t.setAttribute("edit-value",r.value||""),r.bold&&t.setAttribute("bold",""),r.italic&&t.setAttribute("italic",""),r.color&&t.setAttribute("color",r.color),e.currency&&t.setAttribute("currency",e.currency),e.richText!==void 0&&t.setAttribute("rich-text",e.richText),e.inputType!==void 0&&t.setAttribute("input-type",e.inputType),t.outerHTML}}customElements.define("printer-table",T);export{T as PrinterTable};
