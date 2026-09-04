import{B as f}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class x extends f{static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(i){super.setData(i),i.options&&this.setAttribute("options",i.options)}render(){const i=this.getAttribute("edit-value"),d=this.getAttribute("type")||"Visual";let o={url:"",text:""};try{i&&(o=JSON.parse(i))}catch{}let r={showTextUrl:!0,showQR:!0};try{const e=this.getAttribute("options");e&&(r={...r,...JSON.parse(e)})}catch{}let t=o.url||"";try{t&&(t=decodeURI(t))}catch{}const n=t.startsWith("github://"),l=o.text||(r.showTextUrl?t:"Enlace externo"),p=r.showQR&&t&&!n?`
      <div id="qr-container-${this.id}" style="width: 60px; height: 60px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd; font-size: 12px;"></i>
      </div>`:"",h=`
      <div style="flex-grow: 1;">
          <div style="font-size: 1rem; color: #212529; font-weight: bold;">
              ${n?"🔒 ":""}${l} ${n?'<span style="font-size:0.7em; color:#856404;">(Protegido)</span>':""}
          </div>
          ${r.showTextUrl&&o.text&&t?`
          <div style="font-size: 0.8em; color: #6c757d; font-family: monospace; margin-top: 4px; word-break: break-all;">
              ${t}
          </div>`:""}
      </div>
    `,u=`
      <div style="display: flex; align-items: center; gap: 12px; page-break-inside: avoid; margin-bottom: 5px; padding: 8px 0;">
          ${p}
          ${h}
      </div>
    `;if(this.innerHTML=this.renderPrinterStructure(u,d),r.showQR&&t&&!n){const e=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(t)}`;fetch(e).then(s=>s.blob()).then(s=>{const a=new FileReader;a.onloadend=()=>{const c=this.querySelector(`#qr-container-${this.id}`);c&&(c.innerHTML=`<img src="${a.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},a.readAsDataURL(s)}).catch(()=>{const s=this.querySelector(`#qr-container-${this.id}`);s&&(s.innerHTML=`<img src="${e}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}}customElements.define("printer-url",x);export{x as PrinterUrl};
