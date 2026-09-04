import{B as a}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class s extends a{render(){let e={url:"",mediaTitle:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(e=JSON.parse(t))}catch{e.url=this.getAttribute("edit-value")||""}if(!e.url){this.innerHTML="";return}const o=e.url?`
      <div id="qr-container-${this.id}" style="width: 80px; height: 80px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i>
      </div>`:"",d=`
        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🎬 Video: ${e.mediaTitle||"Clip de Video"}
            </div>
            ${e.caption?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${e.caption}</div>`:""}
            
            <div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${e.url}
            </div>
        </div>
    `;if(this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">
        ${o}
        ${d}
      </div>
    `,e.url){const t=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(e.url)}`;fetch(t).then(i=>i.blob()).then(i=>{const r=new FileReader;r.onloadend=()=>{const n=this.querySelector(`#qr-container-${this.id}`);n&&(n.innerHTML=`<img src="${r.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},r.readAsDataURL(i)}).catch(()=>{const i=this.querySelector(`#qr-container-${this.id}`);i&&(i.innerHTML=`<img src="${t}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}}customElements.define("printer-video",s);export{s as PrinterVideo};
