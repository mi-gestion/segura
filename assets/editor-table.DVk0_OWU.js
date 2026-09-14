import{B as k,G as D}from"./BaseElement.VF2wA_rP.js";import{D as M}from"./main.C7hCpS2n.js";import{T as I}from"./TableUtils.DBlGEiXS.js";import{T as x,j as N,k as _,N as L,i as F}from"./Elements.B8W_hxTW.js";import{D as S,i as q,a as j,C as B}from"./FormulaEngine.CYGke5JL.js";import"./preload-helper.bdfVo_kr.js";const T={exportCSV(m,t,e=","){let a=[];t.forEach(r=>{_(r)?(a.push(`"${r.title} (Texto)"`),a.push(`"${r.title} (URL)"`)):a.push(`"${r.title}"`)});const i=m.map(r=>t.map(s=>{const l=r.find(o=>o.fieldId===s.id);let n=l?l.value:"";if(_(s)){let o="",h="";try{const d=typeof n=="string"&&n.startsWith("{")?JSON.parse(n):n;o=d.text||"",h=d.url||""}catch{}return`"${String(o).replace(/"/g,'""')}","${String(h).replace(/"/g,'""')}"`}return n=String(n).replace(/"/g,'""'),`"${n}"`}).join(e));return a.join(e)+`
`+i.join(`
`)},parseCSV(m,t,e=","){const a=m.split(/\r?\n/).filter(o=>o.trim()!=="");if(a.length<2)throw new Error("El archivo CSV no tiene cabeceras o datos válidos.");const i=o=>{const h=[];let d=0,b=!1;for(let u=0;u<o.length;u++)if(o[u]==='"')b=!b;else if(o[u]===e&&!b){let p=o.substring(d,u);p.startsWith('"')&&p.endsWith('"')&&(p=p.slice(1,-1)),h.push(p.replace(/""/g,'"')),d=u+1}let c=o.substring(d);return c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),h.push(c.replace(/""/g,'"')),h},r=[],s=[];t.forEach(o=>{_(o)?(r.push({colDef:o,type:"url-text"}),r.push({colDef:o,type:"url-url"}),s.push(`${o.title} (Texto)`),s.push(`${o.title} (URL)`)):(r.push({colDef:o,type:"normal"}),s.push(o.title))});const l=i(a[0]);if(l.length!==s.length)throw new Error(`Estructura inválida. El archivo tiene ${l.length} columnas, pero la tabla requiere ${s.length}. Descargue la plantilla de ejemplo.`);for(let o=0;o<s.length;o++){const h=s[o].trim().toLowerCase(),d=(l[o]||"").trim().toLowerCase();if(h!==d)throw new Error(`Cabecera incorrecta: Se esperaba '${s[o]}' pero se encontró '${l[o]}'. Por favor, utilice la plantilla de ejemplo.`)}const n=[];for(let o=1;o<a.length;o++){const h=i(a[o]);if(h.length!==r.length)continue;const d={};for(let c=0;c<h.length;c++){const u=h[c],p=r[c];if(!p)continue;const g=p.colDef.id,v=p.colDef.tag;if(d[g]||(d[g]={fieldId:g,tag:v}),L.includes(v))if(u.trim()!==""){const f=parseFloat(u.replace(/[^0-9.-]/g,""));if(isNaN(f))throw new Error(`Error en la fila de datos #${o}: El valor '${u}' no es un número válido para la columna '${p.colDef.title}'.`);d[g].value=f}else d[g].value=0;else p.type==="normal"?d[g].value=u:p.type==="url-text"?d[g].tempText=u:p.type==="url-url"&&(d[g].tempUrl=u)}const b=Object.values(d).map(c=>_(c)?{fieldId:c.fieldId,value:JSON.stringify({text:c.tempText||"",url:c.tempUrl||""})}:{fieldId:c.fieldId,value:String(c.value||"")});n.push(b)}return n},exportJSON(m,t){const e=m.map(a=>{const i={};return t.forEach(r=>{const s=a.find(n=>n.fieldId===r.id);let l=s?s.value:"";if(_(r))try{l=typeof l=="string"?JSON.parse(l):l}catch{l={text:"",url:""}}else L.includes(r.tag)?l=parseFloat(l)||0:N(r)&&(l=l==="true"||l===!0);i[r.title]=l}),i});return JSON.stringify(e,null,2)},parseJSON(m,t){let e;try{e=JSON.parse(m)}catch{throw new Error("El archivo no es un JSON válido.")}if(!Array.isArray(e))throw new Error("El JSON debe contener un arreglo de registros.");return e.map((a,i)=>t.map(r=>{let s=a[r.title];if(s===void 0)throw new Error(`Error estructural: Falta la columna '${r.title}' en el registro #${i+1}.`);if(L.includes(r.tag))if(s!==""&&s!==null){const l=parseFloat(String(s).replace(/[^0-9.-]/g,""));if(isNaN(l))throw new Error(`Error en el registro #${i+1}: El valor '${s}' no es numérico para la columna '${r.title}'.`);s=l}else s=0;if(_(r)){let l={text:"",url:""};typeof s=="object"&&s!==null?l={text:s.text||"",url:s.url||""}:typeof s=="string"&&(l={text:s,url:s}),s=JSON.stringify(l)}else typeof s=="object"?s=JSON.stringify(s):s=String(s);return{fieldId:r.id,value:s}}))},generateMockRow(m){return m.map(t=>{let e="Ejemplo";if([x.number,x.currency].includes(t.tag))e="1500.50";else if(t.tag===x.percentage)e="16";else if(N(t))e="true";else if(t.tag===x.date)e=new Date().toISOString().split("T")[0];else if(t.tag===x.time)e="14:30";else if(t.tag===x.email)e="correo@ejemplo.com";else if(_(t))e=JSON.stringify({text:"Visitar sitio",url:"https://ejemplo.com"});else if(t.tag===x.select&&t.options){const a=t.options.split(",");e=a.length>0?a[0].trim():"Opción"}return{fieldId:t.id,value:e}})}};class ${constructor(t,e={}){this.id=t,this.title=e.title||"",this.size=e.size||"",this.scrollable=e.scrollable||!1,this.centered=e.centered!==void 0?e.centered:!0,this.headerClass=e.headerClass||"",this.bodyClass=e.bodyClass||"",this.footerClass=e.footerClass||"",this.staticBackdrop=e.staticBackdrop||!1,this.noKeyboard=e.noKeyboard||!1,this._body="",this._footer="",this._buttonHandlers=[]}addBody(t){return this._body+=$.escapeHtml(t),this}addRawBody(t){return this._body+=t,this}addButton(t,{cssClass:e="btn-secondary",id:a="",onClick:i=null,dismiss:r=!1,icon:s=""}={}){const l=a?` id="${a}"`:"",n=r?' data-bs-dismiss="modal"':"",o=s?`<i class="${s} me-2"></i>`:"",h=$.escapeHtml(t);return this._footer+=`<button type="button" class="btn ${e}"${l}${n}>${o}${h}</button>`,i&&a&&this._buttonHandlers.push({id:a,onClick:i}),this}build(){const t=this.size?` ${this.size}`:"",e=this.scrollable?" modal-dialog-scrollable":"",a=this.centered?" modal-dialog-centered":"",i=this.staticBackdrop?' data-bs-backdrop="static"':"",r=this.noKeyboard?' data-bs-keyboard="false"':"",s=$.escapeHtml(this.title),l=this._footer?`
            <div class="modal-footer ${this.footerClass}">
              ${this._footer}
            </div>`:"";return`<div class="modal fade" id="${this.id}" tabindex="-1" aria-hidden="true"${i}${r}>
        <div class="modal-dialog${t}${e}${a}">
          <div class="modal-content">
            <div class="modal-header ${this.headerClass}">
              <h5 class="modal-title fw-bold">${s}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ${this.bodyClass}">
              ${this._body}
            </div>${l}
          </div>
        </div>
      </div>`}mount(){const t=document.getElementById(this.id);t&&t.remove(),document.body.insertAdjacentHTML("beforeend",this.build());const e=document.getElementById(this.id);for(const{id:i,onClick:r}of this._buttonHandlers){const s=document.getElementById(i);s&&s.addEventListener("click",r)}const a=new window.bootstrap.Modal(e);return{el:e,bsModal:a}}static escapeHtml(t){if(t==null)return"";const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return String(t).replace(/[&<>"']/g,a=>e[a])}}const V={show(m,t,e){if(!e||e.length===0){S.toast("No hay datos en la tabla para exportar.","warning");return}const a=`modal-export-${Date.now()}`,i=`btn-execute-export-${a}`,r=`export-format-${a}`;$.escapeHtml(m||"tabla");const{el:s,bsModal:l}=new $(a,{title:"Exportar Datos",size:"",centered:!0,staticBackdrop:!0,headerClass:"text-bg-success py-2",bodyClass:"p-4 bg-light",footerClass:"p-2 bg-light"}).addRawBody(`
        <p class="small text-muted mb-3">Selecciona el formato en el que deseas descargar los <strong>${e.length}</strong> registros de la tabla.</p>
        <div class="mb-3">
          <label class="form-label small fw-bold">Formato de Exportacion</label>
          <select class="form-select form-select-sm shadow-none" id="${r}">
            <option value="csv_comma">CSV (Separado por comas - Estandar)</option>
            <option value="csv_semicolon">CSV (Separado por punto y coma - Excel ES)</option>
            <option value="json">JSON (Estructura de Objetos)</option>
          </select>
        </div>`).addButton("Cancelar",{cssClass:"btn-secondary btn-sm",dismiss:!0}).addButton("Descargar Archivo",{cssClass:"btn-success btn-sm px-4 fw-bold",id:i}).mount();l.show();const n=s.querySelector(".modal-title");n&&(n.innerHTML=`<i class="fa-solid fa-download me-2"></i>${n.textContent}`),document.getElementById(i).onclick=()=>{const o=document.getElementById(r).value,h=(m||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();let d,b,c;try{o==="csv_comma"?(d=T.exportCSV(e,t,","),b=`${h}_export.csv`,c="text/csv;charset=utf-8;"):o==="csv_semicolon"?(d=T.exportCSV(e,t,";"),b=`${h}_excel_export.csv`,c="text/csv;charset=utf-8;"):o==="json"&&(d=T.exportJSON(e,t),b=`${h}_export.json`,c="application/json;charset=utf-8;"),this._downloadFile(d,b,c),l.hide()}catch(u){console.error("[ExportModal] Error al exportar:",u),S.toast("Error al exportar: "+u.message,"danger")}},s.addEventListener("hidden.bs.modal",()=>s.remove())},_downloadFile(m,t,e){const a=new Blob([m],{type:e}),i=URL.createObjectURL(a),r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}},J={show(m,t,e,a=null){const i=`modal-import-${Date.now()}`,r=`btn-execute-import-${i}`,s=`import-format-${i}`,l=`import-file-${i}`,n=`import-data-${i}`,o=`import-preview-${i}`,h=`source-tab-file-${i}`,d=`source-tab-text-${i}`,b=`pane-file-${i}`,c=`pane-text-${i}`,{el:u,bsModal:p}=new $(i,{title:"Importar Datos",size:"modal-lg",centered:!0,scrollable:!0,staticBackdrop:!0,headerClass:"text-bg-warning py-2",bodyClass:"p-4 bg-light",footerClass:"p-2 bg-light"}).addRawBody(`
        <div class="alert alert-info small mb-3">
            <i class="fa-solid fa-circle-info me-2"></i>
            Selecciona el formato de origen y elige cómo quieres ingresar los datos. Los datos se importarán como nuevas filas.
        </div>

        <div class="mb-3">
          <label class="form-label small fw-bold">Formato de Origen</label>
          <select class="form-select form-select-sm shadow-none" id="${s}">
            <option value="auto">Detectar automáticamente</option>
            <option value="csv_comma">CSV (Separado por comas)</option>
            <option value="csv_semicolon">CSV (Separado por punto y coma)</option>
            <option value="json">JSON (Array de Objetos)</option>
          </select>
        </div>

        <ul class="nav nav-tabs nav-sm mb-3" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active small" id="${h}" data-bs-toggle="tab" data-bs-target="#${b}" type="button" role="tab" aria-controls="${b}" aria-selected="true">
              <i class="fa-solid fa-file-arrow-up me-1"></i>Desde un Archivo
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link small" id="${d}" data-bs-toggle="tab" data-bs-target="#${c}" type="button" role="tab" aria-controls="${c}" aria-selected="false">
              <i class="fa-solid fa-paste me-1"></i>Copiar al Texto
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <!-- Panel 1: Desde Archivo (default) -->
          <div class="tab-pane fade show active" id="${b}" role="tabpanel" aria-labelledby="${h}">
            <div class="mb-3">
              <label for="${l}" class="form-label small fw-bold">Seleccionar Archivo</label>
              <input class="form-control form-control-sm shadow-none" type="file" id="${l}" accept=".csv,.json,.txt">
              <div class="form-text small mt-1">Acepta archivos .csv, .json o .txt con datos tabulares.</div>
            </div>
          </div>

          <!-- Panel 2: Pegar Texto -->
          <div class="tab-pane fade" id="${c}" role="tabpanel" aria-labelledby="${d}">
            <div class="mb-3">
              <label class="form-label small fw-bold">Datos a Importar</label>
              <textarea class="form-control form-control-sm shadow-none font-monospace" id="${n}" rows="6" placeholder="Pega aquí los datos..."></textarea>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <button type="button" class="btn btn-outline-info btn-sm" id="btn-preview-import-${i}">
            <i class="fa-solid fa-eye me-2"></i>Vista Previa
          </button>
        </div>
        <div id="${o}" class="d-none mb-3">
          <label class="form-label small fw-bold">Vista Previa (primeras 5 filas)</label>
          <div class="table-responsive small">
            <table class="table table-bordered table-sm mb-0" id="preview-table-${i}"></table>
          </div>
        </div>`).addButton("Cancelar",{cssClass:"btn-secondary btn-sm",dismiss:!0}).addButton("Importar Filas",{cssClass:"btn-warning btn-sm px-4 fw-bold text-dark",id:r}).mount();p.show();const g=u.querySelector(".modal-title");g&&(g.innerHTML=`<i class="fa-solid fa-upload me-2"></i>${g.textContent}`);const v=()=>{const y=u.querySelector(`#${h}`);return y&&y.classList.contains("active")?"file":"text"},f=()=>{if(v()==="file"){const y=document.getElementById(l),E=y&&y.files&&y.files[0];return E?new Promise((w,C)=>{const A=new FileReader;A.onload=O=>w(O.target.result),A.onerror=()=>C(new Error("Error al leer el archivo.")),A.readAsText(E)}):null}else return document.getElementById(n).value.trim()||null},H=u.querySelector(`#btn-preview-import-${i}`);H&&(H.onclick=async()=>{const y=document.getElementById(s).value,E=f();if(!E){this._showPreviewError(o,v()==="file"?"Selecciona un archivo primero.":"Pega datos en el area de texto primero.");return}try{const w=await E,C=this._parsePreview(w,y,t);this._renderPreview(o,`preview-table-${i}`,C,t)}catch(w){console.error("[ImportModal] Error en preview:",w),this._showPreviewError(o,"Error al interpretar los datos: "+w.message)}}),document.getElementById(r).onclick=async()=>{const y=document.getElementById(s).value,E=f();if(!E){S.toast(v()==="file"?"Selecciona un archivo antes de importar.":"Pega datos en el area de texto antes de importar.","warning");return}try{const w=await E,C=this._parseImport(w,y,t);if(C.length===0){S.toast("No se encontraron filas válidas para importar.","warning");return}e(C),p.hide()}catch(w){console.error("[ImportModal] Error al importar:",w),S.toast("Error de importación: "+w.message,"danger")}},a?u.addEventListener("hidden.bs.modal",()=>{a(),u.remove()}):u.addEventListener("hidden.bs.modal",()=>u.remove())},_parsePreview(m,t,e){return this._parseImport(m,t,e).slice(0,5)},_parseImport(m,t,e){const a=t==="auto"?this._detectFormat(m):t;if(a==="json")return T.parseJSON(m,e);if(a==="csv_comma")return T.parseCSV(m,e,",");if(a==="csv_semicolon")return T.parseCSV(m,e,";");throw new Error("Formato no soportado: "+a)},_detectFormat(m){const t=m.trim();return t.startsWith("[")||t.startsWith("{")?"json":t.includes(";")&&!t.includes(",")?"csv_semicolon":"csv_comma"},_renderPreview(m,t,e,a){const i=document.getElementById(m),r=document.getElementById(t);i.classList.remove("d-none");const s=a.map(n=>`<th>${$.escapeHtml(n.title||n.id)}</th>`).join("");r.innerHTML=`<thead class="table-light"><tr>${s}</tr></thead>`;const l=e.map(n=>`<tr>${a.map(h=>{const d=n.find(c=>c.fieldId===h.id),b=d?d.value:"";return`<td>${$.escapeHtml(String(b))}</td>`}).join("")}</tr>`).join("");r.innerHTML+=`<tbody>${l}</tbody>`},_showPreviewError(m,t){const e=document.getElementById(m);e.classList.remove("d-none"),e.innerHTML=`<div class="alert alert-danger small mb-0"><i class="fa-solid fa-triangle-exclamation me-2"></i>${$.escapeHtml(t)}</div>`}},R={openExportModal(m,t,e){V.show(m,t,e)},openImportModal(m,t,e){J.show(m,t,e)}};class P extends k{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0,this._editingColumnId=null}setData(t){if(t.columns&&(this.columns=t.columns,this.setAttribute("columns",JSON.stringify(t.columns))),t.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),t.value)if(Array.isArray(t.value))this.rows=t.value;else if(typeof t.value=="string")try{this.rows=JSON.parse(t.value)}catch(e){console.error("[EditorTable] Error al parsear JSON:",e.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(t)}getData(){const t=super.getData();return t.value=this.rows,t.prependRows=this.hasAttribute("prepend-rows"),t}_mapExternalDataToRows(t){return t.map(e=>this.columns.map(a=>{let i=e[a.title];if(i===void 0){const r=Object.keys(e).find(s=>s.toLowerCase()===a.title.toLowerCase());r&&(i=e[r])}return i===void 0&&(i=e[a.id]),i==null&&(i=""),typeof i=="object"&&(i=JSON.stringify(i)),{fieldId:a.id,value:i}}))}setCalculatedValue(t){if(!Array.isArray(t))return;const e=this._mapExternalDataToRows(t);JSON.stringify(this.rows)!==JSON.stringify(e)&&(this.rows=e,this._renderRows(),this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())))}_getFriendlyData(){return this.rows.map(t=>{const e={};return t.forEach(a=>{e[a.fieldId]=a.value}),e})}_getGridColumns(){return(this.columns||[]).filter(t=>F(t)?!1:!(t.hideView===!0||t.hideView==="true"||t.hideView===""||t["hide-view"]===!0||t["hide-view"]==="true"||t["hide-view"]===""))}render(){const t=this.getAttribute("title")||"Tabla de Datos",e=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-${this.uiColor} border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${t}</h6>
              <div class="d-flex gap-2 align-items-center">
                ${this.renderStyleControls(["bold","italic","color"])}
                
                <div class="btn-group shadow-sm">
                    <button class="btn btn-sm btn-outline-success toolbar-btn" id="btn-export-${this.id}" title="Exportar CSV/JSON">
                        <i class="fa-solid fa-download"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary toolbar-btn" id="btn-import-trigger-${this.id}" title="Importar desde CSV/JSON">
                        <i class="fa-solid fa-upload"></i>
                    </button>
                    <button class="btn btn-sm btn-primary fw-bold toolbar-btn" id="btn-add-${this.id}">
                        <i class="fa-solid fa-plus me-1"></i> Agregar
                    </button>
                    <button class="btn btn-sm btn-danger fw-bold btn-empty-table toolbar-btn" id="btn-empty-${this.id}">
                        <i class="fa-solid fa-trash-can me-2"></i>Vaciar
                    </button>
                </div>
              </div>
            </div>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-search text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none toolbar-input" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
            </div>
        </div>

        <div class="card-body p-0">
            <div class="table-responsive" style="overflow-y: visible;">
                <table class="table table-hover table-striped align-middle mb-0">
                    <thead class="table-light text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                        <tr id="table-header-totals-${this.id}" class="d-none"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-primary small"></tfoot>
                </table>
            </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(e),this._renderHeader(),this._renderRows(),this._attachEvents()}_toggleToolbar(t){if(this.querySelectorAll(".toolbar-btn, .toolbar-input").forEach(e=>{e.disabled=t}),this.hasAttribute("readonly")){const e=this.querySelector(`#btn-add-${this.id}`),a=this.querySelector(`#btn-import-trigger-${this.id}`),i=this.querySelector(`#btn-empty-${this.id}`);e&&(e.disabled=!0),a&&(a.disabled=!0),i&&(i.disabled=!0)}}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>{this.hasAttribute("readonly")||this._openFormModal()};const t=this.querySelector(`#search-${this.id}`);t.oninput=a=>{this._searchTerm=a.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>{const a=this.getAttribute("title")||"Tabla";R.openExportModal(a,this._getGridColumns(),this.rows)},this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>{if(this.hasAttribute("readonly"))return;const a=this.getAttribute("title")||"Tabla";R.openImportModal(a,this._getGridColumns(),i=>{this.hasAttribute("prepend-rows")?this.rows=[...i.reverse(),...this.rows]:this.rows=[...this.rows,...i],this._renderRows(),this._dispatchChange(),S.toast(`¡Completado! Se importaron ${i.length} registros a la tabla.`,"success")})};const e=this.querySelector(`#btn-empty-${this.id}`);e&&(e.onclick=()=>{if(!this.hasAttribute("readonly")&&this.rows.length>0&&confirm("⚠️ ¿Está seguro que desea eliminar TODOS los registros de la tabla?")){this.rows=[],this.setAttribute("edit-value","[]");const a=this.querySelector(`#table-body-${this.id}`);a&&(a.innerHTML="");const i=this.querySelector(`#table-footer-${this.id}`);i&&(i.innerHTML="")}}),this.addEventListener("schema-updated",a=>{const{colId:i,options:r}=a.detail,s=document.getElementById(`form-container-${this.id}`);if(s){const l=s.querySelector(`[field-id="${i}"]`);if(l&&typeof l.setData=="function"){const n=l.getData?l.getData():{};l.setData({...n,options:r})}}})}_renderHeader(){const t=this.querySelector(`#table-header-${this.id}`);if(!t)return;let e='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';const a=this._getGridColumns(),i=["string","number","currency","percentage","boolean","date"],r=this.hasAttribute("readonly");if(a.forEach(s=>{const l=s.alignment||"left",n=(s.tag||"").replace("setting-",""),o=i.includes(n),h=this._editingColumnId===s.id,d=s.readonly===!0||s.readonly==="true"||s.readonly==="";if(h)e+=`
        <th class="fw-bold px-3 py-2 border-bottom bg-warning bg-opacity-10" 
            style="text-align: ${l}; user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span class="text-dark">${s.title}</span>
              <div class="btn-group btn-group-sm ms-2 shadow-sm">
                <button class="btn btn-success btn-save-col-inline" title="Guardar cambios"><i class="fa-solid fa-check"></i></button>
                <button class="btn btn-danger btn-cancel-col-inline" title="Cancelar edición"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
        </th>`;else{const b=this._sortFieldId===s.id;let c='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';b&&(c=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>');let u="";o&&!this._editingColumnId&&!r&&!d&&(u=`<button class="btn btn-sm btn-link text-primary p-0 ms-2 btn-edit-col-inline" data-col-id="${s.id}" title="Editar esta columna"><i class="fa-solid fa-pen"></i></button>`),e+=`
        <th class="fw-bold px-3 py-2 border-bottom ${this._editingColumnId?"":"col-sortable"}"
            data-col-id="${s.id}"
            style="text-align: ${l}; ${this._editingColumnId?"opacity: 0.5;":"cursor: pointer;"} user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span>${s.title} ${c}</span>
              ${u}
            </div>
        </th>`}}),e+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',t.innerHTML=e,this._renderHeaderTotals(a),this._toggleToolbar(!!this._editingColumnId),this._editingColumnId){const s=t.querySelector(".btn-save-col-inline"),l=t.querySelector(".btn-cancel-col-inline");s&&(s.onclick=n=>{n.stopPropagation(),this._saveInlineColumn()}),l&&(l.onclick=n=>{n.stopPropagation(),this._editingColumnId=null,this._renderHeader(),this._renderRows()})}else t.querySelectorAll(".col-sortable").forEach(s=>{s.onclick=l=>{if(l.target.closest(".btn-edit-col-inline"))return;const n=s.dataset.colId;this._sortFieldId===n?this._sortAsc=!this._sortAsc:(this._sortFieldId=n,this._sortAsc=!0),this._renderHeader(),this._renderRows()}}),t.querySelectorAll(".btn-edit-col-inline").forEach(s=>{s.onclick=l=>{l.stopPropagation(),this._editingColumnId=s.getAttribute("data-col-id"),this._renderHeader(),this._renderRows()}})}_renderHeaderTotals(t){const e=this.querySelector(`#table-header-totals-${this.id}`);if(!e)return;if(!(!this._editingColumnId&&t.some(r=>r.total&&(r.totalPosition||"tfoot")==="thead"))){e.innerHTML="",e.classList.add("d-none");return}e.classList.remove("d-none");let i='<th class="border-top"></th>';t.forEach(r=>{i+=`<th class="px-3 py-1 border-top fw-bold text-primary small" style="text-align: ${r.alignment||"left"};" id="th-total-${this.id}-${r.id}"></th>`}),i+='<th class="border-top"></th>',e.innerHTML=i}_saveInlineColumn(){const t=this.querySelector(`#table-body-${this.id}`);if(!t)return;const e=t.querySelectorAll("tr[data-original-index]");e.forEach(a=>{const i=parseInt(a.getAttribute("data-original-index")),r=a.querySelector(`[field-id="${this._editingColumnId}"]`);if(r&&typeof r.getData=="function"){const s=r.getData(),l=s.value!==void 0?s.value:"",n=this.rows[i].findIndex(o=>o.fieldId===this._editingColumnId);n!==-1?(this.rows[i][n].value=l,s.bold!==void 0&&(this.rows[i][n].bold=s.bold),s.italic!==void 0&&(this.rows[i][n].italic=s.italic),s.color!==void 0&&(this.rows[i][n].color=s.color)):this.rows[i].push({fieldId:this._editingColumnId,value:l,bold:s.bold||!1,italic:s.italic||!1,color:s.color||"black"})}}),e.forEach(a=>{const i=parseInt(a.getAttribute("data-original-index"));this._recalcRowFormulas(i)}),this._editingColumnId=null,this._renderHeader(),this._renderRows(),this._dispatchChange()}_renderRows(){const t=this.querySelector(`#table-body-${this.id}`);if(!t)return;t.innerHTML="";const e=this.hasAttribute("readonly");this._sortFieldId&&!this._editingColumnId&&(this.rows=I.sortRows(this.rows,this._sortFieldId,this._sortAsc,this.columns),this._dispatchChange());let a=this.rows.map((i,r)=>({data:i,originalIndex:r}));if(this._searchTerm.trim()&&!this._editingColumnId){const i=I.filterRows(this.rows,this._searchTerm);a=a.filter(r=>i.includes(r.data))}a.forEach(i=>{const{data:r,originalIndex:s}=i,l=document.createElement("tr");l.setAttribute("data-original-index",s);const n=document.createElement("td"),o=!this._searchTerm&&!this._sortFieldId&&!this._editingColumnId&&!e;o?(n.className="drag-handle text-center text-muted align-middle cursor-grab py-2",n.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(n.className="text-center text-muted align-middle py-2 small opacity-50",n.innerHTML=this._editingColumnId||e?'<i class="fa-solid fa-lock"></i>':this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',n.title=e?"Tabla en modo solo lectura":this._editingColumnId?"Orden bloqueado durante edición":"Orden automático activo"),l.appendChild(n),this._getGridColumns().forEach(c=>{const u=document.createElement("td");u.className="px-3 py-2",u.style.textAlign=c.alignment||"left";const p=r.find(v=>v.fieldId===c.id);if(this._editingColumnId===c.id){u.className="px-2 py-1 bg-warning bg-opacity-10";const v=c.tag.replace("setting-","editor-"),f=document.createElement(v);f.setAttribute("table",""),f.setAttribute("compact",""),f.setAttribute("field-id",c.id),f.setData&&f.setData({...c,...p,title:"",spanEV:12}),u.appendChild(f)}else{this._editingColumnId&&(u.style.opacity="0.6");const v=c.tag.replace("setting-","viewer-"),f=document.createElement(v);f.setAttribute("table",""),f.setData&&f.setData({...c,...p,title:"",spanEV:12}),u.appendChild(f)}l.appendChild(u)});const d=document.createElement("td");d.className="text-end px-3 py-2";const b=this._editingColumnId||e;d.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar fila" ${b?"disabled":""}><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar fila" ${b?"disabled":""}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,b||(d.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(s),d.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(s,1),this._renderRows(),this._dispatchChange())}),l.appendChild(d),t.appendChild(l),o&&M.init(l,".drag-handle",()=>this._handleReorder())}),this._renderFooter(a.map(i=>i.data))}_renderFooter(t){const e=this._getGridColumns();e.forEach(s=>{if(!s.total||(s.totalPosition||"tfoot")!=="thead")return;const l=this.querySelector(`#th-total-${this.id}-${s.id}`);l&&(l.innerHTML=t&&t.length>0?I.formatTotalHtml(I.calculateTotal(t,s.id),s):"")});const a=this.querySelector(`#table-footer-${this.id}`);if(!a||(a.innerHTML="",!e.some(s=>s.total&&(s.totalPosition||"tfoot")!=="thead")||!t||t.length===0))return;let r="<tr><td></td>";e.forEach(s=>{let l="";if(s.total&&(s.totalPosition||"tfoot")!=="thead"){const n=I.calculateTotal(t,s.id),o=`id="TOTAL_${this.id}_${s.id}" data-raw-value="${n}"`;l=I.formatTotalHtml(n,s,o)}r+=`<td class="px-3 py-2" style="text-align: ${s.alignment||"left"}; ${this._editingColumnId&&this._editingColumnId!==s.id?"opacity: 0.6;":""}">${l}</td>`}),r+="<td></td></tr>",a.innerHTML=r}_handleReorder(){const t=this.querySelector(`#table-body-${this.id}`),e=[];Array.from(t.querySelectorAll("tr")).forEach(i=>{const r=parseInt(i.getAttribute("data-original-index"));!isNaN(r)&&this.rows[r]&&e.push(this.rows[r])}),e.length===this.rows.length&&(this.rows=e)}_dispatchChange(){this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())),setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_recalcRowFormulas(t){const e=this.rows[t];if(!e)return;const a={};e.forEach(i=>{a[i.fieldId]=i.value??""}),e.forEach((i,r)=>{const s=this.columns.find(o=>o.id===i.fieldId),l=(s==null?void 0:s.formula)||i.formula||"";if(!q(l))return;const n=o=>{if(a[o]!==void 0){const h=Number(a[o]);return isNaN(h)?a[o]:h}return""};try{const o=j(l,n);e[r].value=o}catch(o){o instanceof B?e[r].value="#CIRCULAR":e[r].value="#ERROR"}})}_openFormModal(t=null){var n;if(this.hasAttribute("readonly"))return;const e=t!==null,a=`modal-form-${this.id}`;(n=document.getElementById(a))==null||n.remove();const i=`
      <div class="modal fade" id="${a}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold">
                <i class="fa-solid ${e?"fa-pen-to-square":"fa-plus-circle"} me-2"></i>
                ${e?"Editar Registro":"Nuevo Registro"}
              </h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
                <div id="form-container-${this.id}" class="row g-3"></div>
            </div>
            <div class="modal-footer p-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary btn-sm px-4" id="btn-save-row-${this.id}">
                    <i class="fa-solid fa-save me-1"></i> Guardar
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`form-container-${this.id}`);this.columns.forEach(o=>{const h=o.tag.replace("setting-","editor-"),d=document.createElement(h);d.setAttribute("table",""),d.setAttribute("field-id",o.id),(o.hideEdit===!0||o.hideEdit==="true"||o.hideEdit===""||o["hide-edit"]===!0||o["hide-edit"]==="true"||o["hide-edit"]==="")&&d.classList.add("d-none");let c={...o,title:o.title,spanEV:12};if(e){const u=this.rows[t].find(p=>p.fieldId===o.id);u&&(c={...c,...u})}d.setData&&d.setData(c),r.appendChild(d)});const s=document.getElementById(a),l=new bootstrap.Modal(s);l.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const o=Array.from(r.children);o.forEach(d=>{d.hasAttribute&&d.hasAttribute("formula")&&D.evaluateFormulaField(d)});const h=o.map(d=>{const b=d.getData();return b.fieldId=d.getAttribute("field-id"),b});e?this.rows[t]=h:this.hasAttribute("prepend-rows")?this.rows.unshift(h):this.rows.push(h),this._renderRows(),this._dispatchChange(),l.hide(),s.addEventListener("hidden.bs.modal",()=>s.remove())}}}customElements.define("editor-table",P);export{P as EditorTable};
