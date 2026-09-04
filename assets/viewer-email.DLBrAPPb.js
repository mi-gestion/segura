import{B as i}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class r extends i{render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),s=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-email",r);export{r as ViewerEmail};
