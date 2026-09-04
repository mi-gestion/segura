import{B as d}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends d{render(){let t={url:"",mediaTitle:"",caption:""};try{const e=this.getAttribute("edit-value");e&&(t=JSON.parse(e))}catch{t.url=this.getAttribute("edit-value")||""}const l=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!t.url){this.innerHTML="";return}this.className=`col-md-${l} mb-3 d-block`,this.innerHTML=`
      <div class="viewer-container bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center">
        <div class="d-flex align-items-center gap-2">
            
            <button class="btn btn-sm btn-outline-success rounded-circle shadow-sm flex-shrink-0 btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
            </button>
            
            <button class="btn btn-sm btn-outline-secondary rounded-circle shadow-sm flex-shrink-0" title="Mostrar Código QR" id="btn-qr-${this.id}" style="width: 32px; height: 32px; padding: 0;">
                <i class="fa-solid fa-qrcode"></i>
            </button>
            
            <div class="d-flex flex-column overflow-hidden text-start ms-1">
                <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${t.mediaTitle||"Pista de Audio"}</div>
                ${t.caption?`<div class="small text-muted fst-italic text-truncate" style="font-size: 0.75rem;">${t.caption}</div>`:""}
            </div>
            
        </div>
      </div>
    `;const i=this.querySelector(".btn-play-audio");i&&(i.onclick=()=>{if(t.url.startsWith("github://")){const e=i.innerHTML;i.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',i.disabled=!0,window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t.url,onSuccess:n=>{i.innerHTML=e,i.disabled=!1,this._playAudio(n,t.mediaTitle||"Audio")},onError:()=>{i.innerHTML='<i class="fa-solid fa-xmark"></i>',setTimeout(()=>{i.innerHTML=e,i.disabled=!1},2e3),alert("Error: Audio protegido no disponible.")}}}))}else this._playAudio(t.url,t.mediaTitle||"Audio")});const s=this.querySelector(`#btn-qr-${this.id}`);s&&(s.onclick=()=>{this._showQRModal(t.url,t.mediaTitle||"Audio")})}}customElements.define("viewer-audio",a);export{a as ViewerAudio};
