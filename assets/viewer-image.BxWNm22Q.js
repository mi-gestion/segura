import{B as a}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class l extends a{render(){let i={url:"",imgTitle:"",caption:""};try{const t=this.getAttribute("edit-value");t&&(i=JSON.parse(t))}catch{i.url=this.getAttribute("edit-value")||""}const r=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!i.url){this.innerHTML="";return}this.className=`col-md-${r} mb-3 d-block`;const s=i.url.startsWith("github://");this.innerHTML=`
      <div class="viewer-container text-center bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center position-relative">
        ${s?`<div id="v-spinner-${this.id}" class="spinner-border text-primary mx-auto my-4"></div><img id="v-img-${this.id}" src="" class="img-fluid rounded mx-auto mb-2 d-none" style="max-height: 400px; object-fit: contain;">`:`<img src="${i.url}" class="img-fluid rounded mx-auto d-block mb-2" style="max-height: 400px; object-fit: contain;">`}
        ${i.imgTitle||i.caption?`
          <div class="mt-2 text-center small text-muted">
            ${i.imgTitle?`<span class="fw-bold text-dark">${i.imgTitle}</span>`:""}
            ${i.imgTitle&&i.caption?": ":""}
            ${i.caption?`<span class="fst-italic">${i.caption}</span>`:""}
          </div>
        `:""}
      </div>
    `,s&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:i.url,onSuccess:t=>{const n=this.querySelector(`#v-spinner-${this.id}`),e=this.querySelector(`#v-img-${this.id}`);n&&n.classList.add("d-none"),e&&(e.src=t,e.classList.remove("d-none"),e.classList.add("d-block"))},onError:()=>{const t=this.querySelector(`#v-spinner-${this.id}`);t&&(t.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Imagen protegida no disponible</div>')}}}))}}customElements.define("viewer-image",l);export{l as ViewerImage};
