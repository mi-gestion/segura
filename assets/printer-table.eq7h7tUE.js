import{B as T}from"./BaseElement.pPTaffjx.js";import{T as p}from"./TableUtils.BbNPy2Ui.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class x extends T{render(){const e=this.getAttribute("edit-value"),o=this.getAttribute("columns"),l=this.getAttribute("title")||"",i=this.getAttribute("type")||"Visual";let t=[],a=[];try{e&&(t=JSON.parse(e)),o&&(a=JSON.parse(o))}catch(n){console.warn("Error parseando tabla",n)}const r=a.filter(n=>!n.hidePrint),s=i==="Compacto",u=i==="Facil Lectura",b=s?"0.75rem":u?"1.2rem":"0.95rem",f=s?"0.65rem":u?"1rem":"0.75rem",m=`width: 100%; border-collapse: collapse; font-size: ${b}; page-break-inside: auto;`,d=s?"2px 4px":u?"8px":"6px 8px",g=`
      <table style="${m}">
        <caption style="text-align: left; font-weight: bold; margin-bottom: 8px;">${l}</caption>
        
        <!-- 🚀 MEJORA 2: Repite los encabezados en la siguiente hoja si la tabla se divide -->
        <thead style="display: table-header-group;">
          <tr style="background-color: #f8f9fa;">
            ${r.map(n=>`
              <th style="padding: ${d}; border: 1px solid #dee2e6; text-align: ${n.alignment||"left"}; text-transform: uppercase; font-size: ${f};">
                ${n.title}
              </th>`).join("")}
          </tr>
          <!-- 🩹 FIX (pedido de Francisco): total "debajo del título", como
          fila propia del encabezado — misma idea que la fila del <tfoot>,
          pero pegada arriba. Impresión no tiene filtro ni orden
          interactivo, así que se calcula acá mismo sobre TODAS las filas. -->
          ${this._renderHeadTotalRow(t,r,d,f)}
        </thead>
        <tbody>
          ${t.length>0?t.map((n,h)=>`
            <!-- 🚀 MEJORA 3: Protege la fila para que el texto no quede picado por la mitad -->
            <tr style="background-color: ${h%2===0?"#fff":"#fcfcfc"}; page-break-inside: avoid; page-break-after: auto;">
               ${r.map(c=>{const $=n.find(y=>y.fieldId===c.id)||{};return`
                  <td style="padding: ${d}; border: 1px solid #dee2e6; text-align: ${c.alignment||"left"};">
                    ${this._generateCellHTML(c,$,i)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${r.length}" style="text-align:center; padding: ${d};">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(t,r,d)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(g,i)}_renderHeadTotalRow(e,o,l,i){return o.some(a=>a.total&&(a.totalPosition||"tfoot")==="thead")?`<tr style="background-color: #f8f9fa;">
      ${o.map(a=>{let r="";if(a.total&&(a.totalPosition||"tfoot")==="thead"){const s=p.calculateTotal(e,a.id);r=p.formatTotalHtml(s,a)}return`<th style="padding: ${l}; border: 1px solid #dee2e6; border-top: none; text-align: ${a.alignment||"left"}; font-size: ${i}; font-weight: 700;">${r}</th>`}).join("")}
    </tr>`:""}_renderTotalRow(e,o,l){return o.some(t=>t.total&&(t.totalPosition||"tfoot")!=="thead")?`<tr style="font-weight: bold; background: #eee;">
      ${o.map(t=>{let a="";if(t.total&&(t.totalPosition||"tfoot")!=="thead"){const r=p.calculateTotal(e,t.id);a=p.formatTotalHtml(r,t)}return`<td style="padding: ${l}; border: 1px solid #dee2e6; text-align: ${t.alignment||"left"};">${a}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,o,l){const i=e.tag.replace("setting-","printer-"),t=document.createElement(i);return t.setAttribute("table",""),t.setAttribute("type",l),t.setAttribute("edit-value",o.value||""),o.bold&&t.setAttribute("bold",""),o.italic&&t.setAttribute("italic",""),o.color&&t.setAttribute("color",o.color),e.currency&&t.setAttribute("currency",e.currency),e.richText!==void 0&&t.setAttribute("rich-text",e.richText),e.inputType!==void 0&&t.setAttribute("input-type",e.inputType),t.outerHTML}}customElements.define("printer-table",x);export{x as PrinterTable};
