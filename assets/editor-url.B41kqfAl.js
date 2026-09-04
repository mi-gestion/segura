import{B as y}from"./BaseElement.BIf2Qi2B.js";import{b as w,S as x}from"./main.UAgaLVqA.js";import"./Utils.2v3ifB9J.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./firebase-init.D5QOG0FW.js";class E extends y{static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(t){super.setData(t),t.options&&this.setAttribute("options",t.options)}_hasValue(){const t=this.getAttribute("edit-value");if(!t)return!1;try{return JSON.parse(t).url!==""}catch{return!1}}render(){const t=this.getAttribute("title")||"Enlace",n=this.getAttribute("edit-value");let i={url:"",text:""};try{n&&(i=JSON.parse(n))}catch{}let o={showTextUrl:!0,showQR:!0};try{const f=this.getAttribute("options");f&&(o={...o,...JSON.parse(f)})}catch{}let s=i.url||"";s&&!s.startsWith("http")&&!s.startsWith("github://")&&(s="https://"+s);const d=s.startsWith("github://"),a=this._checkExtension(s,["mp3","wav","ogg","m4a"]),c=this._checkExtension(s,["jpg","jpeg","png","gif","webp","svg"])||s.includes("quickchart.io/chart"),h=this._checkVideo(s),l=this._checkInternalDoc(s),b=i.text||(o.showTextUrl?i.url:"Enlace"),g=d?`<a href="#" class="text-warning text-decoration-underline fw-bold text-truncate btn-test-github" style="font-size: 0.85rem;"><i class="fa-solid fa-lock me-1 small"></i>${b} (Descargar)</a>`:`<a href="${s}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate" style="font-size: 0.85rem;"><i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${b}</a>`,m=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary d-flex justify-content-between align-items-center w-100">
          <span><i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${t}</span>
          ${this.renderStyleControls(["bold","italic","color"])}
        </label>
        
        <div class="card bg-light border shadow-sm">
          <div class="card-body p-3">
            
            <!-- 🚀 ALERTA DE INVITACIÓN GITHUB -->
            <div id="gh-invite-alert-${this.id}" class="alert alert-warning border-warning shadow-sm d-none mb-3 py-2 px-3 small">
                <div class="d-flex align-items-center">
                    <i class="fa-brands fa-github fs-4 me-2"></i>
                    <div>
                        <strong>¡Adjunta documentos pesados!</strong><br>
                        Conecta GitHub en Configuración para subir PDFs, Excels o cualquier archivo a tu bóveda.
                    </div>
                    <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.classList.add('d-none')"></button>
                </div>
            </div>

            <div class="mb-2">
                <label class="form-label small text-muted mb-1">Dirección Web (URL) o Documento</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-globe text-muted"></i></span>
                  <input type="url" class="form-control url-val-input font-monospace text-primary" placeholder="https://... o github://..." value="${i.url}">
                  
                  <!-- 🚀 NUEVO: Botón de subida local sin restricción de formato -->
                  <input type="file" id="file-upload-${this.id}" class="d-none">
                  <button class="btn btn-outline-primary btn-upload" type="button" title="Subir archivo desde mi PC">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                  </button>
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub">
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>
            
            <div class="mb-3">
                <label class="form-label small text-muted mb-1">Texto a mostrar</label>
                <input type="text" class="form-control form-control-sm text-val-input" placeholder="Ej: Visitar Google" value="${i.text}">
            </div>

            ${i.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           ${this._renderActionButton(a,c,h,l)}
                           
                           ${o.showQR?`
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>`:""}
                           
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                ${g}
                                ${o.showTextUrl&&i.text?`<div class="small text-muted font-monospace text-truncate" style="font-size: 0.75rem;">${s}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-link fs-1 mb-2 d-block opacity-25"></i> Sin enlace configurado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(m),this._attachEventListeners(s,i.text,a,c,h,l)}_attachEventListeners(t,n,i,o,s,d){const a=this.querySelector(".text-val-input"),c=this.querySelector(".url-val-input");a&&this._attachStyleEventListeners(a);const h=()=>{this._isInternalUpdate=!0;const e=JSON.stringify({text:(a==null?void 0:a.value)||"",url:(c==null?void 0:c.value)||""});this.setAttribute("edit-value",e),this._isInternalUpdate=!1};a&&(a.oninput=h,a.onchange=()=>this.render()),c&&(c.oninput=h,c.onchange=()=>this.render());const l=this.querySelector(".btn-upload"),b=this.querySelector(`#file-upload-${this.id}`);l&&b&&(l.onclick=()=>b.click(),b.onchange=e=>{const r=e.target.files[0];if(!r)return;const p=l.innerHTML;l.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',l.disabled=!0,a&&!a.value&&(a.value=r.name,h()),window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:r,onSuccess:u=>{c&&(c.value=u),h(),this.render()},onError:u=>{l.innerHTML=p,l.disabled=!1,u==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir archivo: "+u)}}}))});const g=(e,r)=>{if(!t.startsWith("github://"))return r(t);const p=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',e.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t,onSuccess:u=>{e.innerHTML=p,e.disabled=!1,r(u)},onError:()=>{e.innerHTML='<i class="fa-solid fa-xmark text-danger"></i>',setTimeout(()=>{e.innerHTML=p,e.disabled=!1},2e3),alert("Error al cargar archivo protegido.")}}}))};if(d&&d.isInternal){const e=this.querySelector(".btn-view-doc");e&&(e.onclick=()=>this._showDocModal(d.docId,n))}if(i){const e=this.querySelector(".btn-play-audio");e&&(e.onclick=()=>g(e,r=>this._playAudio(r,n)))}if(o){const e=this.querySelector(".btn-view-image");e&&(e.onclick=()=>g(e,r=>this._showImageModal(r,n)))}if(s&&s.isVideo){const e=this.querySelector(".btn-view-video");e&&(e.onclick=()=>g(e,r=>this._showVideoModal(r,n,s)))}const m=this.querySelector(".btn-test-github");m&&(m.onclick=e=>{e.preventDefault();const r=m.innerHTML;m.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i>Descargando...',window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t,onSuccess:p=>{m.innerHTML=r;const u=document.createElement("a");u.href=p,u.download=n||t.split("/").pop()||"documento",document.body.appendChild(u),u.click(),document.body.removeChild(u)},onError:()=>{m.innerHTML='<i class="fa-solid fa-xmark text-danger me-1"></i>Error',setTimeout(()=>{m.innerHTML=r},2e3)}}}))});const f=this.querySelector(".btn-qr");f&&(f.onclick=()=>{});const v=this.querySelector(".btn-github");v&&(v.onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"all",onSelect:e=>{c&&(c.value=e),h(),this.render()}}}))})}setCalculatedValue(t){let n="";const i=this.getAttribute("edit-value");try{const s=JSON.parse(i||"{}");s&&s.text&&(n=s.text)}catch(s){console.error("Error parsing edit-value:",s)}const o=JSON.stringify({text:n,url:t});o!==i&&(this._isInternalUpdate=!0,this.setAttribute("edit-value",o),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0})),this.render())}_checkExtension(t,n){if(!t||t==="#")return!1;const i=t.split("?")[0].toLowerCase();return n.some(o=>i.endsWith("."+o))}_checkVideo(t){if(!t||t==="#")return{isVideo:!1};const n=["mp4","webm","ogg","mov"],i=t.split("?")[0].toLowerCase();if(n.some(a=>i.endsWith("."+a)))return{isVideo:!0,type:"file"};const s=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,d=t.match(s);return d&&d[2].length===11?{isVideo:!0,type:"youtube",id:d[2]}:{isVideo:!1}}_checkInternalDoc(t){if(!t||t==="#")return null;const n=/\/document\/(doc_\d+)/,i=t.match(n);return i&&i[1]?{isInternal:!0,docId:i[1]}:null}_renderActionButton(t,n,i,o){if(o&&o.isInternal)return'<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm flex-shrink-0 btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento"><i class="fa-solid fa-file-contract"></i></button>';if(t)return'<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio"><i class="fa-solid fa-play"></i></button>';if(n)return'<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm flex-shrink-0 btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen"><i class="fa-regular fa-image"></i></button>';if(i&&i.isVideo){const s=i.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${i.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm flex-shrink-0 btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video"><i class="${s}"></i></button>`}return""}async _showDocModal(t,n){const i=document.getElementById("internal-doc-modal");i&&i.remove();const o="internal-doc-title-lbl",s=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${o}" style="max-width: 90%;">
                    <i class="fa-solid fa-file-contract me-2"></i>Cargando...
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light" id="internal-doc-body" style="min-height: 300px;"></div>
             ${n?`<div class="modal-footer py-1 bg-white small text-muted justify-content-start">${n}</div>`:""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",s);const d=document.getElementById("internal-doc-modal"),a=document.getElementById("internal-doc-body");new bootstrap.Modal(d).show();const h=w.renderReadOnly(t,a);try{const l=await x.getOne("doc",t);if(l&&l.title){const b=document.getElementById(o);b&&(b.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${l.title}`)}}catch(l){console.error("Error fetching document title:",l)}await h,d.addEventListener("hidden.bs.modal",()=>d.remove())}}customElements.define("editor-url",E);export{E as EditorUrl};
