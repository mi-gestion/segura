import{B as u}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class b extends u{static get observedAttributes(){return[...super.observedAttributes,"controls","autoplay"]}render(){const a=this.getAttribute("title")||"Video";let s={url:"",title:"",caption:""};try{const i=this.getAttribute("edit-value");i&&(s=JSON.parse(i))}catch{s.url=this.getAttribute("edit-value")||""}const e=this.hasAttribute("readonly"),l=e?" readonly":"",r=e?" disabled":"",t=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-solid fa-video me-1"></i> ${a}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            
            <div id="gh-invite-alert-${this.id}" class="alert alert-warning border-warning shadow-sm d-none mb-3 py-2 px-3 small">
                <div class="d-flex align-items-center">
                    <i class="fa-brands fa-github fs-4 me-2"></i>
                    <div>
                        <strong>¡Sube tus videos directamente!</strong><br>
                        Conecta tu cuenta de GitHub en Configuración para habilitar tu bóveda multimedia.
                    </div>
                    <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.classList.add('d-none')"></button>
                </div>
            </div>

            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL del Video</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control media-val-url${e?" bg-light":""}" placeholder="https://... o github://..." value="${s.url}"${l}>

                  <input type="file" id="file-upload-${this.id}" class="d-none" accept="video/*">
                  <button class="btn btn-outline-primary btn-upload" type="button" title="Subir desde mi PC"${r}>
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                  </button>
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub"${r}>
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>

            <div class="row g-2 mb-3">
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Título</label>
                    <input type="text" class="form-control form-control-sm media-val-title" placeholder="Ej: Grabación de inspección" value="${s.title}"${l}>
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda</label>
                    <input type="text" class="form-control form-control-sm media-val-caption" placeholder="Detalles adicionales..." value="${s.caption}"${l}>
                </div>
            </div>

            <div id="media-preview-container-${this.id}">
                ${this._getPreviewHTML(s)}
            </div>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._attachEvents()}_getPreviewHTML(a){if(!a.url)return'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-film fs-1 mb-2 d-block opacity-25"></i> Sin video seleccionado</div>';const s=a.url.startsWith("github://"),e=s?"":a.url,l=this.getAttribute("controls"),r=l===null?!0:l==="true",t=this.hasAttribute("autoplay"),i=r?" controls":"",o=t?" autoplay muted playsinline":"",n=s?null:this._checkVideo(a.url),d=n&&n.type==="youtube",c=d?`https://www.youtube.com/embed/${n.id}?rel=0${t?"&autoplay=1&mute=1":""}`:"";return`
       <div class="text-center bg-white border rounded p-2 position-relative">
           ${s?`<div id="spinner-${this.id}" class="spinner-border text-primary my-4"></div><video id="media-node-${this.id}" src=""${i}${o} class="w-100 rounded mb-2 d-none" style="max-height: 300px;"></video>`:d?`<div class="ratio ratio-16x9 rounded mb-2" style="max-height: 300px;"><iframe src="${c}" title="Video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="border:0;"></iframe></div>`:`<video id="media-node-${this.id}" src="${e}"${i}${o} class="w-100 rounded mb-2" style="max-height: 300px;"></video>`}
       </div>
     `}_attachEvents(){const a=()=>{const t={url:this.querySelector(".media-val-url").value,title:this.querySelector(".media-val-title").value,caption:this.querySelector(".media-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(t)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(t=>{t.oninput=a,t.onchange=()=>this.render()});const e=this.querySelector(".btn-upload"),l=this.querySelector(`#file-upload-${this.id}`);e&&l&&(e.onclick=()=>l.click(),l.onchange=t=>{const i=t.target.files[0];if(!i)return;const o=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',e.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:i,onSuccess:n=>{this.querySelector(".media-val-url").value=n,a(),this.render()},onError:n=>{e.innerHTML=o,e.disabled=!1,n==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir: "+n)}}}))});const r=this.querySelector(".media-val-url").value;r&&r.startsWith("github://")&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:r,onSuccess:t=>{const i=this.querySelector(`#spinner-${this.id}`),o=this.querySelector(`#media-node-${this.id}`);i&&i.classList.add("d-none"),o&&(o.src=t,o.classList.remove("d-none"))},onError:()=>{const t=this.querySelector(`#spinner-${this.id}`);t&&(t.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Video protegido no disponible</div>')}}}))}}customElements.define("editor-video",b);export{b as EditorVideo};
