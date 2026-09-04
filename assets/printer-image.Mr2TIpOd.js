import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends o{render(){let i={url:"",imgTitle:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(i=JSON.parse(t))}catch{i.url=this.getAttribute("edit-value")||""}if(!i.url){this.innerHTML="";return}const r=i.url.startsWith("github://");this.innerHTML=`
      <div style="margin-bottom: 15px; padding: 10px; text-align: center; page-break-inside: avoid; border: 1px solid #dee2e6; border-radius: 4px; background-color: #f8f9fa;">
        ${r?`<div id="p-loading-${this.id}" style="color:#6c757d; font-size:0.8rem; margin: 20px 0;">Cargando imagen protegida...</div><img id="p-img-${this.id}" src="" style="max-width: 100%; max-height: 450px; margin: 0 auto; border-radius: 4px; object-fit: contain; display: none;">`:`<img src="${i.url}" style="max-width: 100%; max-height: 450px; display: block; margin: 0 auto; border-radius: 4px; object-fit: contain;">`}
        ${i.imgTitle||i.caption?`
          <div style="margin-top: 10px; font-size: 0.8rem; color: #6c757d; text-align: center;">
            ${i.imgTitle?`<strong style="color: #343a40;">${i.imgTitle}</strong>`:""}
            ${i.imgTitle&&i.caption?": ":""}
            ${i.caption?`<span style="font-style: italic;">${i.caption}</span>`:""}
          </div>
        `:""}
      </div>
    `,r&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:i.url,onSuccess:t=>{const n=this.querySelector(`#p-loading-${this.id}`),e=this.querySelector(`#p-img-${this.id}`);n&&(n.style.display="none"),e&&(e.src=t,e.style.display="block")},onError:()=>{const t=this.querySelector(`#p-loading-${this.id}`);t&&(t.innerHTML="Imagen protegida no disponible")}}}))}}customElements.define("printer-image",a);export{a as PrinterImage};
