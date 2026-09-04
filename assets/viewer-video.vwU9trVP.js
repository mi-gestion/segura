import{B as o}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class d extends o{render(){let t={url:"",title:"",caption:""};try{const e=this.getAttribute("edit-value");e&&(t=JSON.parse(e))}catch{t.url=this.getAttribute("edit-value")||""}const r=this.getAttribute("span-edit-viewer")||this.spanEV||"12";if(!t.url){this.innerHTML="";return}this.className=`col-md-${r} mb-3 d-block`;const s=t.url.startsWith("github://");this.innerHTML=`
      <div class="viewer-container text-center bg-light border rounded p-2 shadow-sm h-100 d-flex flex-column justify-content-center position-relative">
        ${s?`<div id="v-spinner-${this.id}" class="spinner-border text-primary mx-auto my-4"></div><video id="v-media-${this.id}" src="" controls class="w-100 rounded mx-auto mb-2 d-none" style="max-height: 400px;"></video>`:`<video src="${t.url}" controls class="w-100 rounded mx-auto d-block mb-2" style="max-height: 400px;"></video>`}
        ${t.title||t.caption?`
          <div class="mt-2 text-center small text-muted">
            ${t.title?`<span class="fw-bold text-dark">${t.title}</span>`:""}
            ${t.title&&t.caption?": ":""}
            ${t.caption?`<span class="fst-italic">${t.caption}</span>`:""}
          </div>
        `:""}
      </div>
    `,s&&window.dispatchEvent(new CustomEvent("request-github-file",{detail:{url:t.url,onSuccess:e=>{const n=this.querySelector(`#v-spinner-${this.id}`),i=this.querySelector(`#v-media-${this.id}`);n&&n.classList.add("d-none"),i&&(i.src=e,i.classList.remove("d-none"),i.classList.add("d-block"))},onError:()=>{const e=this.querySelector(`#v-spinner-${this.id}`);e&&(e.outerHTML='<div class="text-danger my-3 small"><i class="fa-solid fa-link-slash"></i> Video protegido no disponible</div>')}}}))}}customElements.define("viewer-video",d);export{d as ViewerVideo};
