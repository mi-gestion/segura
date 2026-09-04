import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends o{render(){let t={url:"",mediaTitle:"",caption:""};try{const e=this.getAttribute("edit-value");e&&(t=JSON.parse(e))}catch{t.url=this.getAttribute("edit-value")||""}if(!t.url){this.innerHTML="";return}this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 15px; text-align: left; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa; display: flex; align-items: center; gap: 15px;">
        
        <div id="qr-container-${this.id}" style="width: 80px; height: 80px; border-radius: 4px; border: 1px solid #ccc; background: white; display: flex; align-items: center; justify-content: center;">
            <i class="fa-solid fa-spinner fa-spin" style="color: #adb5bd;"></i>
        </div>
        
        <div style="flex-grow: 1;">
            <div style="color: #495057; text-transform: uppercase; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
                🎧 Audio: ${t.mediaTitle||"Archivo de Audio"}
            </div>
            
            ${t.caption?`<div style="color: #6c757d; font-size: 0.75rem; font-style: italic; margin-top: 4px; line-height: 1.3;">${t.caption}</div>`:""}
            
            <div style="font-size: 0.65rem; color: #0d6efd; margin-top: 6px; word-break: break-all; font-family: monospace;">
                ${t.url}
            </div>
        </div>

      </div>
    `;const r=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(t.url)}`;fetch(r).then(e=>e.blob()).then(e=>{const i=new FileReader;i.onloadend=()=>{const n=this.querySelector(`#qr-container-${this.id}`);n&&(n.innerHTML=`<img src="${i.result}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)},i.readAsDataURL(e)}).catch(()=>{const e=this.querySelector(`#qr-container-${this.id}`);e&&(e.innerHTML=`<img src="${r}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;">`)})}}customElements.define("printer-audio",a);export{a as PrinterAudio};
