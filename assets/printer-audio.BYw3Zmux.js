import{B as a}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class l extends a{render(){let e={url:"",title:"",caption:""};try{const o=this.getAttribute("edit-value");o&&(e=JSON.parse(o))}catch{e.url=this.getAttribute("edit-value")||""}if(!e.url){this.innerHTML="",queueMicrotask(()=>this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0})));return}const i=e.url.startsWith("github://"),s=i?`
        <div style="width: 80px; height: 80px; min-width: 80px; min-height: 80px; flex-shrink: 0; flex-grow: 0; box-sizing: border-box; border-radius: 4px; border: 1px solid #ffc107; background: #fff8e1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2px;">
            <i class="fa-solid fa-lock" style="color: #856404; font-size: 1rem;"></i>
            <span style="font-size: 0.5rem; color: #856404; font-weight: 700; letter-spacing: 0.3px; margin-top: 2px;">PRIVADO</span>
        </div>`:`<div id="qr-container-${this.id}" style="width: 80px; height: 80px; min-width: 80px; min-height: 80px; flex-shrink: 0; flex-grow: 0; box-sizing: border-box; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i></div>`;if(this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">

        ${s}

        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🎧 ${i?"🔒 ":""}Audio: ${e.title||"Archivo de Audio"}${i?' <span style="font-size:0.7em; text-transform: none; color:#856404;">(Privado)</span>':""}
            </div>

            ${e.caption?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${e.caption}</div>`:""}

            <div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${i?"Privado":e.url}
            </div>
        </div>

      </div>
    `,i){queueMicrotask(()=>this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0})));return}const d=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(e.url)}`,r=this.querySelector(`#qr-container-${this.id}`),t=new Image;t.alt="Código QR",t.style.cssText="width: 100%; height: 100%; object-fit: contain; padding: 2px;";const n=()=>{r&&(r.innerHTML="",r.appendChild(t)),this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0}))};t.onload=n,t.onerror=n,t.src=d}}customElements.define("printer-audio",l);export{l as PrinterAudio};
