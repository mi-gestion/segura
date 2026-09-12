import{B as u}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class b extends u{static get observedAttributes(){return[...super.observedAttributes,"options","display-mode"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}render(){const e=this.getAttribute("edit-value"),f=this.getAttribute("title")||"Enlace Externo",d=()=>queueMicrotask(()=>this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0}))),l=this.getAttribute("display-mode")||"link";if(l==="hidden"){this.innerHTML="",d();return}let s={url:"",text:""};try{e&&(s=JSON.parse(e))}catch{}let n={showTextUrl:!0,showQR:!0};try{const o=this.getAttribute("options");o&&(n={...n,...JSON.parse(o)})}catch{}let t=s.url||"";try{t&&(t=decodeURI(t))}catch{}if(!t){this.innerHTML="",d();return}const r=t.startsWith("github://"),c=!(l==="text")&&n.showQR,x=c&&!r,h=c?r?`
      <div style="width: 80px; height: 80px; min-width: 80px; min-height: 80px; flex-shrink: 0; flex-grow: 0; box-sizing: border-box; border-radius: 4px; border: 1px solid #ffc107; background: #fff8e1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2px;">
          <i class="fa-solid fa-lock" style="color: #856404; font-size: 1rem;"></i>
          <span style="font-size: 0.5rem; color: #856404; font-weight: 700; letter-spacing: 0.3px; margin-top: 2px;">PRIVADO</span>
      </div>`:`
      <div id="qr-container-${this.id}" style="width: 80px; height: 80px; min-width: 80px; min-height: 80px; flex-shrink: 0; flex-grow: 0; box-sizing: border-box; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center;">
          <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i>
      </div>`:"",m=`
        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🔗 ${r?"🔒 ":""}${f}${r?' <span style="font-size:0.7em; text-transform: none; color:#856404;">(Privado)</span>':""}
            </div>
            ${s.text?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${s.text}</div>`:""}
            ${r?'<div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">Privado</div>':n.showTextUrl?`<div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${t}
            </div>`:""}
        </div>
    `;if(this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">
        ${h}
        ${m}
      </div>
    `,!x){d();return}const g=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(t)}`,a=this.querySelector(`#qr-container-${this.id}`),i=new Image;i.alt="Código QR",i.style.cssText="width: 100%; height: 100%; object-fit: contain; padding: 2px;";const p=()=>{a&&(a.innerHTML="",a.appendChild(i)),this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0}))};i.onload=p,i.onerror=p,i.src=g}}customElements.define("printer-url",b);export{b as PrinterUrl};
