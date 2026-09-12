import{B as c}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class d extends c{static get observedAttributes(){return[...super.observedAttributes,"object-fit","alt-text"]}render(){let e={url:"",title:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(e=JSON.parse(t))}catch{e.url=this.getAttribute("edit-value")||""}const r=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!e.url){this.innerHTML="";return}this.className=`col-md-${r} mb-3 d-block`;const i=e.url.startsWith("github://"),a=this.getAttribute("object-fit")||"contain",n=(this.getAttribute("alt-text")||e.title||"").replace(/"/g,"&quot;");this.innerHTML=`
      <div class="viewer-container text-center bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center position-relative">
        ${i?`<div id="v-spinner-${this.id}" class="spinner-border text-primary mx-auto my-4"></div><img id="v-img-${this.id}" src="" alt="${n}" class="img-fluid rounded mx-auto mb-2 d-none" style="max-height: 400px; object-fit: ${a};">`:`<img src="${e.url}" alt="${n}" class="img-fluid rounded mx-auto d-block mb-2" style="max-height: 400px; object-fit: ${a};">`}
        <!-- 🩹 FEATURE (8 sep 2026): a pedido de Francisco — audio/url ya
             tenían este botón (QR + "Copiar Enlace", via BaseElement
             _showQRModal); acá no había ninguna razón técnica, solo
             faltaba conectarlo. Va a la IZQUIERDA del título/leyenda, en
             su propia fila debajo de la imagen — no encima ni al lado,
             para no quitarle ancho a la imagen. 🩹 (8 sep 2026, cont.):
             el botón solo aparece si el enlace es público — un enlace
             "github://" es la única forma real que tenemos de saber que
             es privado (no hay forma de saberlo para un http/https
             cualquiera), y un QR de un enlace privado no le serviría a
             nadie que lo escanee sin autenticarse. Si es privado, se
             muestra un candado en su lugar en vez del botón. -->
        <div class="d-flex align-items-center justify-content-center gap-2 mt-2">
          ${i?'<span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width: 32px; height: 32px; background:#fff3cd; color:#856404;" title="Enlace privado (protegido)"><i class="fa-solid fa-lock"></i></span>':'<button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-show-qr" style="width: 32px; height: 32px; padding: 0;" title="Mostrar Código QR"><i class="fa-solid fa-qrcode"></i></button>'}
          ${e.title||e.caption||i?`
            <div class="small text-muted text-start">
              ${e.title?`<span class="fw-bold text-dark">${e.title}</span>`:""}
              ${e.title&&e.caption?": ":""}
              ${e.caption?`<span class="fst-italic">${e.caption}</span>`:""}
              ${i?' <span class="fw-semibold" style="color:#856404;">(Privado)</span>':""}
            </div>
          `:""}
        </div>
      </div>
    `;const l=this.querySelector(".btn-show-qr");l&&(l.onclick=()=>this._showQRModal(e.url,e.title||"Imagen")),i&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:e.url,onSuccess:t=>{const o=this.querySelector(`#v-spinner-${this.id}`),s=this.querySelector(`#v-img-${this.id}`);o&&o.classList.add("d-none"),s&&(s.src=t,s.classList.remove("d-none"),s.classList.add("d-block"))},onError:()=>{const t=this.querySelector(`#v-spinner-${this.id}`);t&&(t.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Imagen protegida no disponible</div>')}}}))}}customElements.define("viewer-image",d);export{d as ViewerImage};
