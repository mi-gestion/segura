class n extends HTMLElement{connectedCallback(){const o=this.getAttribute("title")||"Hora",t=this.getAttribute("edit-value")||"",r=this.getAttribute("type")==="Visual"&&this.hasAttribute("table"),e=this.hasAttribute("bold")?"fw-bold":"",i=this.hasAttribute("italic")?"fst-italic":"",s=`color: ${this.getAttribute("color")||"black"};`,l=t||"—";r?this.innerHTML=`<div class="${e} ${i}" style="${s}">${l}</div>`:this.innerHTML=`
        <div class="mb-2 print-field">
          <div class="print-label text-uppercase text-muted" style="font-size: 0.65rem; font-weight: bold; border-bottom: 1px solid #dee2e6; margin-bottom: 2px;">
            ${o}
          </div>
          <div class="print-value ${e} ${i}" style="font-size: 0.85rem; ${s}">
            ${l}
          </div>
        </div>
      `}}customElements.define("printer-time",n);export{n as PrinterTime};
