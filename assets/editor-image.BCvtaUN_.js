import{B as c}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class u extends c{render(){const t=this.getAttribute("title")||"Imagen";let s={url:"",imgTitle:"",caption:""};try{const i=this.getAttribute("edit-value");i&&(s=JSON.parse(i))}catch{s.url=this.getAttribute("edit-value")||""}const l=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-regular fa-image me-1"></i> ${t}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            
            <!-- 🚀 ALERTA DE INVITACIÓN GITHUB (Oculta por defecto) -->
            <div id="gh-invite-alert-${this.id}" class="alert alert-warning border-warning shadow-sm d-none mb-3 py-2 px-3 small">
                <div class="d-flex align-items-center">
                    <i class="fa-brands fa-github fs-4 me-2"></i>
                    <div>
                        <strong>¡Sube tus fotos directamente!</strong><br>
                        Conecta tu cuenta de GitHub en Configuración para habilitar tu propia bóveda multimedia en la nube.
                    </div>
                    <button type="button" class="btn-close ms-auto" aria-label="Close" onclick="this.parentElement.parentElement.classList.add('d-none')"></button>
                </div>
            </div>

            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL de la Imagen</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control img-val-url" placeholder="https://... o github://..." value="${s.url}">
                  
                  <!-- 🚀 NUEVO: Botón de subida local -->
                  <input type="file" id="file-upload-${this.id}" class="d-none" accept="image/*">
                  <button class="btn btn-outline-primary btn-upload" type="button" title="Subir desde mi PC">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                  </button>
                  
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub">
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>
            
            <div class="row g-2 mb-3">
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Título de la foto</label>
                    <input type="text" class="form-control form-control-sm img-val-title" placeholder="Ej: Atardecer en la costa" value="${s.imgTitle}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda (Caption)</label>
                    <input type="text" class="form-control form-control-sm img-val-caption" placeholder="Ej: Tomada durante el evento..." value="${s.caption}">
                </div>
            </div>

            <div id="img-preview-container-${this.id}">
                ${this._getPreviewHTML(s)}
            </div>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l),this._attachEvents()}_getPreviewHTML(t){if(!t.url)return'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-regular fa-image fs-1 mb-2 d-block opacity-25"></i> Sin imagen seleccionada</div>';const s=t.url.startsWith("github://"),l=s?"":t.url;return`
       <div class="text-center bg-white border rounded p-2 position-relative min-vh-25">
           ${s?`<div id="spinner-${this.id}" class="spinner-border text-primary my-4"></div><img id="img-node-${this.id}" src="" class="img-fluid rounded mb-2 d-none" style="max-height: 300px; object-fit: contain;">`:`<img id="img-node-${this.id}" src="${l}" class="img-fluid rounded mb-2" style="max-height: 300px; object-fit: contain;">`}
           ${t.imgTitle||t.caption?`
             <div class="mt-2 text-center small text-muted">
               ${t.imgTitle?`<span class="fw-bold text-dark">${t.imgTitle}</span>`:""}
               ${t.imgTitle&&t.caption?": ":""}
               ${t.caption?`<span class="fst-italic">${t.caption}</span>`:""}
             </div>
           `:""}
       </div>
     `}_attachEvents(){const t=()=>{const e={url:this.querySelector(".img-val-url").value,imgTitle:this.querySelector(".img-val-title").value,caption:this.querySelector(".img-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(e)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input[type='text'], input[type='url']").forEach(e=>{e.oninput=t,e.onchange=()=>this.render()});const l=this.querySelector(".btn-github");l&&(l.onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"image",onSelect:e=>{this.querySelector(".img-val-url").value=e,t(),this.render()}}}))});const i=this.querySelector(".btn-upload"),o=this.querySelector(`#file-upload-${this.id}`);i&&o&&(i.onclick=()=>o.click(),o.onchange=e=>{const a=e.target.files[0];if(!a)return;const n=i.innerHTML;i.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',i.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:a,onSuccess:r=>{this.querySelector(".img-val-url").value=r,t(),this.render()},onError:r=>{i.innerHTML=n,i.disabled=!1,r==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir imagen: "+r)}}}))});const d=this.querySelector(".img-val-url").value;d&&d.startsWith("github://")&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:d,onSuccess:e=>{const a=this.querySelector(`#spinner-${this.id}`),n=this.querySelector(`#img-node-${this.id}`);a&&a.classList.add("d-none"),n&&(n.src=e,n.classList.remove("d-none"))},onError:()=>{const e=this.querySelector(`#spinner-${this.id}`);e&&(e.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Imagen protegida no disponible</div>')}}}))}}customElements.define("editor-image",u);export{u as EditorImage};
