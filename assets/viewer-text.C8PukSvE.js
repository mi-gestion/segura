import{B as r}from"./BaseElement.BIf2Qi2B.js";import"./Utils.2v3ifB9J.js";class n extends r{render(){const i=this.getAttribute("edit-value")||"<span class='text-muted'>---</span>",t=this.getAttribute("rich-text")!=="false",s=this.getCommonStyles();let e;t?e=`
        <div class="ql-editor py-1" style="padding: 0;">
          ${i}
        </div>`:e=`
        <div class="py-1" style="${s}">
          ${this.getAttribute("edit-value")||"---"}
        </div>`,this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const i=this.getAttribute("title");let t=this.getAttribute("edit-value")||"";if(this.getAttribute("rich-text")!=="false"){/<\/?[a-z][\s\S]*>/i.test(t)||(t=t.replace(/\n/g,"<br>"));let e=t.replace(/<\/p>|<br\s*\/?>/gi,`
`);return e=e.replace(/<[^>]*>?/gm,""),`
*${i}*
> ${e.trim().replace(/\n/g,`
> `)}
`}else return`
*${i}*
> ${t.trim().replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",n);export{n as ViewerText};
