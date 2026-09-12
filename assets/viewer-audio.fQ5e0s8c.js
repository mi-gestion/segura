import{B as r}from"./BaseElement.pPTaffjx.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";class a extends r{render(){let t={url:"",title:"",caption:""};try{const e=this.getAttribute("edit-value");e&&(t=JSON.parse(e))}catch{t.url=this.getAttribute("edit-value")||""}const n=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!t.url){this.innerHTML="";return}this.className=`col-md-${n} mb-3 d-block`;const s=t.url.startsWith("github://");this.innerHTML=`
      <div class="viewer-container bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center">
        <div class="d-flex align-items-center gap-2">

            <button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
            </button>

            ${s?'<span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width: 32px; height: 32px; background:#fff3cd; color:#856404;" title="Enlace privado (protegido)"><i class="fa-solid fa-lock"></i></span>':`<button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0" title="Mostrar Código QR" id="btn-qr-${this.id}" style="width: 32px; height: 32px; padding: 0;">
                <i class="fa-solid fa-qrcode"></i>
            </button>`}

            <div class="d-flex flex-column overflow-hidden text-start ms-1">
                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${t.title||"Pista de Audio"}${s?' <span class="fw-semibold" style="font-size:0.75em; color:#856404;">(Privado)</span>':""}</div>
                ${t.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${t.caption}</div>`:""}
            </div>

        </div>
      </div>
    `;const i=this.querySelector(".btn-play-audio");i&&(i.onclick=()=>{if(t.url.startsWith("github://")){const e=i.innerHTML;i.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',i.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t.url,onSuccess:o=>{i.innerHTML=e,i.disabled=!1,this._playAudio(o,t.title||"Audio")},onError:()=>{i.innerHTML='<i class="fa-solid fa-xmark"></i>',setTimeout(()=>{i.innerHTML=e,i.disabled=!1},2e3),alert("Error: Audio protegido no disponible.")}}}))}else this._playAudio(t.url,t.title||"Audio")});const l=this.querySelector(`#btn-qr-${this.id}`);l&&(l.onclick=()=>{this._showQRModal(t.url,t.title||"Audio")})}}customElements.define("viewer-audio",a);export{a as ViewerAudio};
