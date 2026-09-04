import{B as f}from"./BaseElement.BIf2Qi2B.js";import{T as p}from"./TableUtils.BbNPy2Ui.js";import"./Utils.2v3ifB9J.js";class g extends f{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(t){if(t.columns&&(this.columns=t.columns),t.value)if(Array.isArray(t.value))this.rows=t.value;else if(typeof t.value=="string")try{this.rows=JSON.parse(t.value)}catch(s){console.error("[ViewerTable] Error al parsear los datos de la tabla:",s.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(t)}_isNumeric(t){return["setting-number","setting-currency","setting-percentage"].includes(t)}_getGridColumns(){return this.columns.filter(t=>!(t.hideView===!0||t.hideView==="true"||t.hideView===""||t["hide-view"]===!0||t["hide-view"]==="true"||t["hide-view"]===""))}render(){const t=this.getAttribute("title")||"Tabla de Datos",s=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${s} mb-4`,this.innerHTML=`
      <div class="viewer-container">
        <div class="d-flex justify-content-between align-items-end mb-2">
            <label class="d-block small text-muted text-uppercase fw-semibold mb-0" style="font-size: 0.7rem;">
                ${t}
            </label>
            
            <div class="input-group input-group-sm" style="width: 220px;">
                <span class="input-group-text border-end-0 text-muted ps-2 pe-1"><i class="fa-solid fa-search"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none ps-1" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
                ${this._searchTerm?`<button class="btn btn-outline-secondary border-start-0 text-muted" id="btn-clear-${this.id}"><i class="fa-solid fa-times"></i></button>`:""}
            </div>
        </div>
        
        <div class="card shadow-sm border-0 overflow-hidden">
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle mb-0">
                    <thead class=" text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class=" fw-bold text-body small" style="border-top: 2px solid #dee2e6;"></tfoot>
                </table>
            </div>
            <div id="empty-state-${this.id}" class="text-center py-3 text-muted small bg-light" style="display:none;">
                Sin registros coincidentes.
            </div>
        </div>
      </div>
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const t=this.getAttribute("title"),s=this.rows||[],e=this._getGridColumns().filter(n=>!n.hideWhatsapp);if(e.length===0)return`*${t}:* (Sin columnas visibles)`;if(s.length===0)return`*${t}:* (Sin datos)`;const d=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),a=(n,i)=>{const h=n.find(m=>m.fieldId===i.id);let r=h?String(h.value):"";if((r==="null"||r==="undefined")&&(r=""),i.tag==="setting-currency")r=`$ ${parseFloat(r||0).toFixed(2)}`;else if(i.tag==="setting-percentage")r=`${r}%`;else if(i.tag==="setting-boolean")r=r==="true"?"SI":"NO";else if(i.tag==="setting-url")try{const m=JSON.parse(r);let u=m.url||"";if(u){u.startsWith("http")||(u="https://"+u);try{u=encodeURI(decodeURI(u))}catch{}u=encodeURI(u)}r=m.text?`${m.text} (${u})`:u}catch(m){console.error("[ViewerTable] Error al procesar la URL:",m.message)}return r},l=e.map(n=>{let i=n.title.length;return s.forEach(h=>{const r=a(h,n);r.length>i&&(i=r.length)}),i}),c=l.reduce((n,i)=>n+i,0)+e.length*3;let o=`
*${t}*:
`;return c>d?s.forEach((n,i)=>{o+=`_Item ${i+1}_
`,e.forEach(h=>{const r=a(n,h);o+=`${h.title}: ${r}
`}),o+=`
`}):(o+="```\n",o+=e.map((n,i)=>n.title.padEnd(l[i])).join(" | ")+`
`,o+=e.map((n,i)=>"-".repeat(l[i])).join("-|-")+`
`,s.forEach(n=>{o+=e.map((i,h)=>a(n,i).padEnd(l[h])).join(" | ")+`
`}),o+="```\n"),o}_attachEvents(){const t=this.querySelector(`#search-${this.id}`);t.oninput=e=>{this._searchTerm=e.target.value,this._renderRows();const d=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!d){this.render();const a=this.querySelector(`#search-${this.id}`);a.focus(),a.setSelectionRange(a.value.length,a.value.length)}else!this._searchTerm&&d&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const s=this.querySelector(`#btn-clear-${this.id}`);s&&(s.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const t=this.querySelector(`#table-header-${this.id}`);if(!t)return;const s=this._getGridColumns();if(s.length===0){t.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}t.innerHTML="",s.forEach(e=>{const d=document.createElement("th"),a=e.alignment||(this._isNumeric(e.tag)?"right":"left");d.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",d.style.textAlign=a==="right"?"right":a==="center"?"center":"left",d.style.cursor="pointer",d.title="Click para ordenar";let l='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===e.id&&(this._sortAsc?l='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':l='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),d.innerHTML=`<span>${e.title}</span>${l}`,d.onclick=()=>{this._sortFieldId===e.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=e.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},t.appendChild(d)})}_renderRows(){const t=this.querySelector(`#table-body-${this.id}`),s=this.querySelector(`#empty-state-${this.id}`);if(!t)return;t.innerHTML="";let e=p.filterRows([...this.rows],this._searchTerm);if(e=p.sortRows(e,this._sortFieldId,this._sortAsc,this.columns),e.length===0){s&&(s.style.display="block"),this._renderFooter(e);return}s&&(s.style.display="none");const d=this._getGridColumns();e.forEach(a=>{const l=document.createElement("tr");d.forEach(c=>{const o=document.createElement("td"),n=c.alignment||(this._isNumeric(c.tag)?"right":"left");o.style.textAlign=n==="right"?"right":n==="center"?"center":"left",o.className="px-3 py-2";const i=a.find(m=>m.fieldId===c.id),h=c.tag.replace("setting-","viewer-"),r=document.createElement(h);r.setAttribute("table",""),r.setData&&r.setData({...c,...i,title:"",spanEV:12,options:c.options,currency:c.currency}),o.appendChild(r),l.appendChild(o)}),t.appendChild(l)}),this._renderFooter(e)}_renderFooter(t){const s=this.querySelector(`#table-footer-${this.id}`);if(!s)return;s.innerHTML="";const e=this._getGridColumns();if(!e.some(l=>l.total)||!t||t.length===0)return;let a="<tr>";e.forEach(l=>{const c=l.alignment||(this._isNumeric(l.tag)?"right":"left"),o=c==="right"?"right":c==="center"?"center":"left";let n="";if(l.total){const i=p.calculateTotal(t,l.id);n=p.formatTotalHtml(i,l)}a+=`<td class="px-3 py-2" style="text-align: ${o};">${n}</td>`}),a+="</tr>",s.innerHTML=a}}customElements.define("viewer-table",g);export{g as ViewerTable};
