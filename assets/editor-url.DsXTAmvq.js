import{B as y}from"./BaseElement.pPTaffjx.js";import{c as w,S as x}from"./main.BncWvLrk.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./crypto-service.zPOJcvZe.js";class E extends y{static get observedAttributes(){return[...super.observedAttributes,"options"]}setData(e){super.setData(e),e.options&&this.setAttribute("options",e.options)}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",s=this.getAttribute("edit-value"),n=this.hasAttribute("readonly"),c=n?" readonly":"",r=n?" disabled":"";let l={url:"",text:""};try{s&&(l=JSON.parse(s))}catch{}let a={showTextUrl:!0,showQR:!0};try{const o=this.getAttribute("options");o&&(a={...a,...JSON.parse(o)})}catch{}let i=l.url||"";i&&!i.startsWith("http")&&!i.startsWith("github://")&&(i="https://"+i);const b=i.startsWith("github://"),d=this._checkExtension(i,["mp3","wav","ogg","m4a"]),m=this._checkExtension(i,["jpg","jpeg","png","gif","webp","svg"])||i.includes("quickchart.io/chart"),f=this._checkVideo(i),h=this._checkInternalDoc(i),g=l.text||(a.showTextUrl?l.url:"Enlace"),v=b?`<a href="#" class="text-warning text-decoration-underline fw-bold text-truncate btn-test-github" style="font-size: 0.85rem;"><i class="fa-solid fa-lock me-1 small"></i>${g} (Descargar)</a>`:`<a href="${i}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate" style="font-size: 0.85rem;"><i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${g}</a>`,t=`
      <div class="mb-3">
        <label class="form-label fw-bold small text-secondary d-flex justify-content-between align-items-center w-100">
          <span><i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${e}</span>
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
                  <input type="url" class="form-control url-val-input font-monospace text-primary${n?" bg-light":""}" placeholder="https://... o github://..." value="${l.url}"${c}>

                  <!-- 🚀 NUEVO: Botón de subida local sin restricción de formato -->
                  <input type="file" id="file-upload-${this.id}" class="d-none">
                  <button class="btn btn-outline-primary btn-upload" type="button" title="Subir archivo desde mi PC"${r}>
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                  </button>
                  <button class="btn btn-outline-dark btn-github" type="button" title="Explorar GitHub"${r}>
                    <i class="fa-brands fa-github"></i>
                  </button>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label small text-muted mb-1">Texto a mostrar</label>
                <input type="text" class="form-control form-control-sm text-val-input" placeholder="Ej: Visitar Google" value="${l.text}"${c}>
            </div>

            ${l.url?`<div class="bg-white border rounded p-2 mt-2 shadow-sm">
                       <div class="d-flex align-items-center gap-2">
                           ${this._renderActionButton(d,m,f,h)}
                           
                           ${a.showQR?`
                           <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0 btn-qr" type="button" title="Mostrar Código QR" style="width: 32px; height: 32px; padding: 0;">
                               <i class="fa-solid fa-qrcode"></i>
                           </button>`:""}
                           
                           <div class="d-flex flex-column overflow-hidden text-start ms-1">
                                ${v}
                                ${a.showTextUrl&&l.text?`<div class="small text-muted font-monospace text-truncate" style="font-size: 0.75rem;">${i}</div>`:""}
                            </div>
                       </div>
                     </div>`:'<div class="text-center bg-white border rounded p-4 text-muted small"><i class="fa-solid fa-link fs-1 mb-2 d-block opacity-25"></i> Sin enlace configurado</div>'}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._attachEventListeners(i,l.text,d,m,f,h)}_attachEventListeners(e,s,n,c,r,l){const a=this.querySelector(".text-val-input"),i=this.querySelector(".url-val-input");a&&this._attachStyleEventListeners(a);const b=()=>{this._isInternalUpdate=!0;const t=JSON.stringify({text:(a==null?void 0:a.value)||"",url:(i==null?void 0:i.value)||""});this.setAttribute("edit-value",t),this._isInternalUpdate=!1};a&&(a.oninput=b,a.onchange=()=>this.render()),i&&(i.oninput=b,i.onchange=()=>this.render());const d=this.querySelector(".btn-upload"),m=this.querySelector(`#file-upload-${this.id}`);d&&m&&(d.onclick=()=>m.click(),m.onchange=t=>{const o=t.target.files[0];if(!o)return;const p=d.innerHTML;d.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',d.disabled=!0,a&&!a.value&&(a.value=o.name,b()),window.dispatchEvent(new CustomEvent("request-github-upload",{detail:{file:o,onSuccess:u=>{i&&(i.value=u),b(),this.render()},onError:u=>{d.innerHTML=p,d.disabled=!1,u==="NO_GITHUB"?this.querySelector(`#gh-invite-alert-${this.id}`).classList.remove("d-none"):alert("Error al subir archivo: "+u)}}}))});const f=(t,o)=>{if(!e.startsWith("github://"))return o(e);const p=t.innerHTML;t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',t.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:e,onSuccess:u=>{t.innerHTML=p,t.disabled=!1,o(u)},onError:()=>{t.innerHTML='<i class="fa-solid fa-xmark text-danger"></i>',setTimeout(()=>{t.innerHTML=p,t.disabled=!1},2e3),alert("Error al cargar archivo protegido.")}}}))};if(l&&l.isInternal){const t=this.querySelector(".btn-view-doc");t&&(t.onclick=()=>this._showDocModal(l.docId,s))}if(n){const t=this.querySelector(".btn-play-audio");t&&(t.onclick=()=>f(t,o=>this._playAudio(o,s)))}if(c){const t=this.querySelector(".btn-view-image");t&&(t.onclick=()=>f(t,o=>this._showImageModal(o,s)))}if(r&&r.isVideo){const t=this.querySelector(".btn-view-video");t&&(t.onclick=()=>f(t,o=>this._showVideoModal(o,s,r)))}const h=this.querySelector(".btn-test-github");h&&(h.onclick=t=>{t.preventDefault();const o=h.innerHTML;h.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i>Descargando...',window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:e,onSuccess:p=>{h.innerHTML=o;const u=document.createElement("a");u.href=p,u.download=s||e.split("/").pop()||"documento",document.body.appendChild(u),u.click(),document.body.removeChild(u)},onError:()=>{h.innerHTML='<i class="fa-solid fa-xmark text-danger me-1"></i>Error',setTimeout(()=>{h.innerHTML=o},2e3)}}}))});const g=this.querySelector(".btn-qr");g&&(g.onclick=()=>this._showQRModal(e,s));const v=this.querySelector(".btn-github");v&&(v.onclick=()=>{window.dispatchEvent(new CustomEvent("open-github-explorer",{detail:{type:"all",onSelect:t=>{i&&(i.value=t),b(),this.render()}}}))})}setCalculatedValue(e){let s="";const n=this.getAttribute("edit-value");try{const r=JSON.parse(n||"{}");r&&r.text&&(s=r.text)}catch(r){console.error("Error parsing edit-value:",r)}const c=JSON.stringify({text:s,url:e});c!==n&&(this._isInternalUpdate=!0,this.setAttribute("edit-value",c),this._isInternalUpdate=!1,this.dispatchEvent(new Event("input",{bubbles:!0})),this.render())}_checkExtension(e,s){if(!e||e==="#")return!1;const n=e.split("?")[0].toLowerCase();return s.some(c=>n.endsWith("."+c))}_checkInternalDoc(e){if(!e||e==="#")return null;const s=/\/document\/(doc_\d+)/,n=e.match(s);return n&&n[1]?{isInternal:!0,docId:n[1]}:null}_renderActionButton(e,s,n,c){if(c&&c.isInternal)return'<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm flex-shrink-0 btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento"><i class="fa-solid fa-file-contract"></i></button>';if(e)return'<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio"><i class="fa-solid fa-play"></i></button>';if(s)return'<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm flex-shrink-0 btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen"><i class="fa-regular fa-image"></i></button>';if(n&&n.isVideo){const r=n.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${n.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm flex-shrink-0 btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video"><i class="${r}"></i></button>`}return""}async _showDocModal(e,s){const n=document.getElementById("internal-doc-modal");n&&n.remove();const c="internal-doc-title-lbl",r=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${c}" style="max-width: 90%;">
                    <i class="fa-solid fa-file-contract me-2"></i>Cargando...
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light" id="internal-doc-body" style="min-height: 300px;"></div>
             ${s?`<div class="modal-footer py-1 bg-white small text-muted justify-content-start">${s}</div>`:""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const l=document.getElementById("internal-doc-modal"),a=document.getElementById("internal-doc-body");new bootstrap.Modal(l).show();const b=w.renderReadOnly(e,a);try{const d=await x.getOne("doc",e);if(d&&d.title){const m=document.getElementById(c);m&&(m.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${d.title}`)}}catch(d){console.error("Error fetching document title:",d)}await b,l.addEventListener("hidden.bs.modal",()=>l.remove())}}customElements.define("editor-url",E);export{E as EditorUrl};
