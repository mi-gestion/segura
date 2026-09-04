import{B as h}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class f extends h{render(){const a=this.getAttribute("title")||"Audio";let e={url:"",mediaTitle:"",caption:""};try{const i=this.getAttribute("edit-value");i&&(e=JSON.parse(i))}catch{e.url=this.getAttribute("edit-value")||""}const u=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary">
          <i class="fa-solid fa-music me-1"></i> ${a}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            
            <!-- 🚀 ALERTA DE INVITACIÓN GITHUB -->
            <div id="gh-invite-alert-${this.id}" class="alert alert-warning border-warning shadow-sm d-none mb-3 py-2 px-3 small">
                <div class="d-flex align-items-center">
                    <i class="fa-brands fa-github fs-4 me-2"></i>
                    <div>
                        <strong>¡Sube tus audios directamente!</strong><br>
                        Conecta tu cuenta de GitHub en Configuración para habilitar tu bóveda multimedia.
                    </div>
                    <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.classList.add('d-none')"></button>
                </div>
            </div>

            <div class="mb-2">
                <label class="form-label small text-muted mb-1">URL del Audio</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-link text-muted"></i></span>
                  <input type="url" class="form-control media-val-url" placeholder="https://... o github://..." value="${e.url}">
                  
                  <!-- 🚀 NUEVO: Botón de subida local -->
                  <input type="file" id="file-upload-${this.id}" class="d-none" accept="audio/*">
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
                    <label class="form-label small text-muted mb-1">Título de la Pista</label>
                    <input type="text" class="form-control form-control-sm media-val-title" placeholder="Ej: Danza del Fuego" value="${e.mediaTitle}">
                </div>
                <div class="col-md-6">
                    <label class="form-label small text-muted mb-1">Leyenda (Caption)</label>
                    <input type="text" class="form-control form-control-sm media-val-caption" placeholder="Ej: Autor o álbum..." value="${e.caption}">
                </div>
            </div>

            ${e.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           <button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" type="button" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                               <i class="fa-solid fa-play"></i>
                           </button>
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${e.mediaTitle||"Pista de Audio"}</div>
                                ${e.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${e.caption}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-music fs-1 mb-2 d-block opacity-25"></i> Sin audio seleccionado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(u),this._attachEvents(e)}_attachEvents(a){const e=()=>{const t={url:this.querySelector(".media-val-url").value,mediaTitle:this.querySelector(".media-val-title").value,caption:this.querySelector(".media-val-caption").value};this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(t)),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0}))};this.querySelectorAll("input").forEach(t=>{t.oninput=e,t.onchange=()=>this.render()});const i=this.querySelector(".btn-upload"),d=this.querySelector(`#file-upload-${this.id}`);i&&d&&(i.onclick=()=>d.click(),d.onchange=t=>{const n=t.target.files[0];if(!n)return;const r=i.innerHTML;i.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',i.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:n,onSuccess:o=>{this.querySelector(".media-val-url").value=o,e(),this.render()},onError:o=>{i.innerHTML=r,i.disabled=!1,o==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir audio: "+o)}}}))});const s=this.querySelector(".btn-play-audio");s&&(s.onclick=()=>{if(a.url.startsWith("github://")){const t=s.innerHTML;s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',s.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:a.url,onSuccess:n=>{s.innerHTML=t,s.disabled=!1,this._playAudio(n,a.mediaTitle||"Audio")},onError:()=>{s.innerHTML='<i class="fa-solid fa-xmark"></i>',setTimeout(()=>{s.innerHTML=t,s.disabled=!1},2e3),alert("Error: Audio protegido no disponible.")}}}))}else this._playAudio(a.url,a.mediaTitle||"Audio")});const b=this.querySelector(".btn-qr");b&&(b.onclick=()=>{var m;const t=`modal-qr-edit-${this.id}`;(m=document.getElementById(t))==null||m.remove();const n=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(a.url)}`,r=`
              <div class="modal fade" id="${t}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm">
                  <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body text-center pb-4">
                        <h6 class="fw-bold mb-3">${a.mediaTitle||"Escanear Audio"}</h6>
                        <img src="${n}" class="img-fluid border p-2 rounded shadow-sm mb-3" alt="Código QR">
                        
                        <!-- Botón de copiar al portapapeles -->
                        <div class="d-grid gap-2 px-4">
                            <button class="btn btn-outline-primary btn-sm" id="btn-copy-edit-qr-${this.id}">
                                <i class="fa-regular fa-copy me-2"></i>Copiar Enlace
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById(t),p=new bootstrap.Modal(o),l=o.querySelector(`#btn-copy-edit-qr-${this.id}`);l&&(l.onclick=async()=>{try{await navigator.clipboard.writeText(a.url);const c=l.innerHTML;l.innerHTML='<i class="fa-solid fa-check me-2"></i>¡Copiado!',l.classList.replace("btn-outline-primary","btn-success"),l.classList.add("text-white"),setTimeout(()=>{document.body.contains(l)&&(l.innerHTML=c,l.classList.replace("btn-success","btn-outline-primary"),l.classList.remove("text-white"))},2e3)}catch(c){console.error("Error al copiar",c)}}),o.addEventListener("hidden.bs.modal",()=>o.remove()),p.show()}),this.querySelector(".btn-github").onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"audio",onSelect:t=>{this.querySelector(".media-val-url").value=t,e(),this.render()}}}))}}}customElements.define("editor-audio",f);export{f as EditorAudio};
