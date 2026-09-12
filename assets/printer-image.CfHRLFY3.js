import{B as n}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class l extends n{static get observedAttributes(){return[...super.observedAttributes,"object-fit","alt-text"]}render(){let t={url:"",title:"",caption:""};try{const e=this.getAttribute("edit-value");e&&(t=JSON.parse(e))}catch{t.url=this.getAttribute("edit-value")||""}if(!t.url){this.innerHTML="";return}const i=t.url.startsWith("github://"),s=this.getAttribute("object-fit")||"contain",o=(this.getAttribute("alt-text")||t.title||"").replace(/"/g,"&quot;");this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 10px; text-align: center; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa;">
        ${i?`<div id="p-loading-${this.id}" style="color:#6c757d; font-size:0.8rem; margin: 20px 0;">Cargando imagen protegida...</div><img id="p-img-${this.id}" src="" alt="${o}" style="max-width: 100%; max-height: 450px; margin: 0 auto; border-radius: 4px; object-fit: ${s}; display: none;">`:`<img src="${t.url}" alt="${o}" style="max-width: 100%; max-height: 450px; display: block; margin: 0 auto; border-radius: 4px; object-fit: ${s};">`}
        ${t.title||t.caption||i?`
          <div style="margin-top: 10px; font-size: 0.8rem; color: #6c757d; text-align: center;">
            ${t.title?`<strong style="color: #343a40;">${t.title}</strong>`:""}
            ${t.title&&t.caption?": ":""}
            ${t.caption?`<span style="font-style: italic;">${t.caption}</span>`:""}
            ${i?' <span style="font-size:0.75em; color:#856404;"><i class="fa-solid fa-lock"></i> (Privado)</span>':""}
          </div>
        `:""}
      </div>
    `,i&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t.url,onSuccess:e=>{const a=this.querySelector(`#p-loading-${this.id}`),r=this.querySelector(`#p-img-${this.id}`);a&&(a.style.display="none"),r&&(r.src=e,r.style.display="block"),this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0}))},onError:()=>{const e=this.querySelector(`#p-loading-${this.id}`);e&&(e.innerHTML="Imagen protegida no disponible"),this.dispatchEvent(new CustomEvent("dg-media-ready",{bubbles:!0}))}}}))}}customElements.define("printer-image",l);export{l as PrinterImage};
