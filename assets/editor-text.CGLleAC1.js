import{B as n}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class a extends n{constructor(){super(),this.quill=null,this._quillTimeout=null}render(){const e=this.getAttribute("title")||"Campo";let t=this.getAttribute("edit-value")||"";const i=this.getAttribute("rich-text")!=="false",r=this.getCommonStyles();if(!i){const l=`
        <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-justify me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${this.renderStyleControls()} 
            </div>
            <textarea autocomplete="off" spellcheck="false" class="form-control form-control-sm shadow-none border-1" 
                      id="input-${this.id}" style="${r} resize: vertical;" rows="3" placeholder="Ingrese texto...">${t}</textarea>
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(l);const s=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(s);return}if(t&&!/<\/?[a-z][\s\S]*>/i.test(t)&&(t=t.replace(/\n/g,"<br>")),this.quill){const l=this.querySelector(".form-label");l&&(l.innerHTML=`<i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}`),this._isInternalUpdate||this.quill.root.innerHTML!==t&&t!==""&&this.quill.clipboard.dangerouslyPasteHTML(t);return}const o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}
              </label>
            </div>
          </div>
          <!-- Contenedor donde Quill montará el editor -->
          <div id="quill-editor-${this.id}" style="min-height: 120px; font-size: 0.9rem;" class="border-1 rounded-bottom border-top-0">
            ${t}
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),this._quillTimeout&&clearTimeout(this._quillTimeout),this._quillTimeout=setTimeout(()=>this._initQuill(),50)}_initQuill(){if(!window.Quill){console.warn("Quill.js no está cargado.");return}const e=this.querySelector(`#quill-editor-${this.id}`);if(!e)return;const t=[["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["clean"]];this.quill=new Quill(e,{theme:"snow",modules:{toolbar:t},placeholder:`Escriba el contenido de ${this.getAttribute("title")}...`}),this.quill.on("text-change",()=>{this._isInternalUpdate=!0;const i=this.quill.root.innerHTML;this.setAttribute("edit-value",i==="<p><br></p>"?"":i),this._isInternalUpdate=!1})}}customElements.define("editor-text",a);export{a as EditorText};
