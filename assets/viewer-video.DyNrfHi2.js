import{B as b}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class v extends b{static get observedAttributes(){return[...super.observedAttributes,"controls","autoplay"]}render(){let e={url:"",title:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(e=JSON.parse(t))}catch{e.url=this.getAttribute("edit-value")||""}const p=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!e.url){this.innerHTML="";return}this.className=`col-md-${p} mb-3 d-block`;const i=e.url.startsWith("github://"),o=this.getAttribute("controls"),h=o===null?!0:o==="true",n=this.hasAttribute("autoplay"),l=h?" controls":"",r=n?" autoplay muted playsinline":"",a=i?null:this._checkVideo(e.url),d=a&&a.type==="youtube",m=d?`https://www.youtube.com/embed/${a.id}?rel=0${n?"&autoplay=1&mute=1":""}`:"";this.innerHTML=`
      <div class="viewer-container text-center bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center position-relative">
        ${i?`<div id="v-spinner-${this.id}" class="spinner-border text-primary mx-auto my-4"></div><video id="v-media-${this.id}" src=""${l}${r} class="w-100 rounded mx-auto mb-2 d-none" style="max-height: 400px;"></video>`:d?`<div class="ratio ratio-16x9 rounded mx-auto mb-2" style="max-height: 400px;"><iframe src="${m}" title="${(e.title||"Video").replace(/"/g,"&quot;")}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="border:0;"></iframe></div>`:`<video src="${e.url}"${l}${r} class="w-100 rounded mx-auto d-block mb-2" style="max-height: 400px;"></video>`}
        <!-- 🩹 FEATURE (8 sep 2026): a pedido de Francisco — audio/url ya
             tenían este botón (QR + "Copiar Enlace", via BaseElement
             _showQRModal); acá no había ninguna razón técnica, solo
             faltaba conectarlo. Va a la IZQUIERDA del título/leyenda, en
             su propia fila debajo del video — no encima ni al lado, para
             no quitarle ancho al video. 🩹 (8 sep 2026, cont.): el botón
             solo aparece si el enlace es público — un enlace "github://"
             es la única forma real que tenemos de saber que es privado
             (no hay forma de saberlo para un http/https cualquiera), y
             un QR de un enlace privado no le serviría a nadie que lo
             escanee sin autenticarse. Si es privado, se muestra un
             candado en su lugar en vez del botón. -->
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
    `;const c=this.querySelector(".btn-show-qr");c&&(c.onclick=()=>this._showQRModal(e.url,e.title||"Video")),i&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:e.url,onSuccess:t=>{const u=this.querySelector(`#v-spinner-${this.id}`),s=this.querySelector(`#v-media-${this.id}`);u&&u.classList.add("d-none"),s&&(s.src=t,s.classList.remove("d-none"),s.classList.add("d-block"))},onError:()=>{const t=this.querySelector(`#v-spinner-${this.id}`);t&&(t.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Video protegido no disponible</div>')}}}))}}customElements.define("viewer-video",v);export{v as ViewerVideo};
