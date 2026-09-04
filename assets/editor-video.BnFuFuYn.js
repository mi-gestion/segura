import{B as d}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class c extends d{render(){const s=this.getAttribute("title")||"Video";let i={url:"",title:"",caption:""};try{const l=this.getAttribute("edit-value");l&&(i=JSON.parse(l))}catch{i.url=this.getAttribute("edit-value")||""}const t=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-solid fa-video me-1"></i> ${s}
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
                  <input type="url" class="form-control val-url" placeholder="https://... o github://..." value="${i.url}">
                  
                  <input type="file" id="file-upload-${this.id}" class="d-none" accept="video/*">
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
                    <label class="form-label small text-muted mb-1">Título</label>
                    <input type="text" class="form-control form-control-sm val-title" placeholder="Ej: Grabación de inspección" value="${i.title}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda</label>
                    <input type="text" class="form-control form-control-sm val-caption" placeholder="Detalles adicionales..." value="${i.caption}">
                </div>
            </div>

            <div id="media-preview-container-${this.id}">
                ${this._getPreviewHTML(i)}
            </div>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._attachEvents()}_getPreviewHTML(s){if(!s.url)return'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-film fs-1 mb-2 d-block opacity-25"></i> Sin video seleccionado</div>';const i=s.url.startsWith("github://"),t=i?"":s.url;return`
       <div class="text-center bg-white border rounded p-2 position-relative">
           ${i?`<div id="spinner-${this.id}" class="spinner-border text-primary my-4"></div><video id="media-node-${this.id}" src="" controls class="w-100 rounded mb-2 d-none" style="max-height: 300px;"></video>`:`<video id="media-node-${this.id}" src="${t}" controls class="w-100 rounded mb-2" style="max-height: 300px;"></video>`}
       </div>
     `}_attachEvents(){const s=()=>{const e={url:this.querySelector(".val-url").value,title:this.querySelector(".val-title").value,caption:this.querySelector(".val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(e)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(e=>{e.oninput=s,e.onchange=()=>this.render()});const t=this.querySelector(".btn-upload"),l=this.querySelector(`#file-upload-${this.id}`);t&&l&&(t.onclick=()=>l.click(),l.onchange=e=>{const a=e.target.files[0];if(!a)return;const n=t.innerHTML;t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',t.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:a,onSuccess:r=>{this.querySelector(".val-url").value=r,s(),this.render()},onError:r=>{t.innerHTML=n,t.disabled=!1,r==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir: "+r)}}}))});const o=this.querySelector(".val-url").value;o&&o.startsWith("github://")&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:o,onSuccess:e=>{const a=this.querySelector(`#spinner-${this.id}`),n=this.querySelector(`#media-node-${this.id}`);a&&a.classList.add("d-none"),n&&(n.src=e,n.classList.remove("d-none"))},onError:()=>{const e=this.querySelector(`#spinner-${this.id}`);e&&(e.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Video protegido no disponible</div>')}}}))}}customElements.define("editor-video",c);export{c as EditorVideo};
