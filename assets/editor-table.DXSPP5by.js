import{B as E}from"./BaseElement.pPTaffjx.js";import{D as _}from"./main.BncWvLrk.js";import{T as w}from"./TableUtils.BbNPy2Ui.js";import"./preload-helper.BUfFKGiv.js";import"./FormulaEngine.DHpTffcI.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./crypto-service.zPOJcvZe.js";const v={exportCSV(p,e,s=","){let i=[];e.forEach(a=>{a.tag==="setting-url"?(i.push(`"${a.title} (Texto)"`),i.push(`"${a.title} (URL)"`)):i.push(`"${a.title}"`)});const o=p.map(a=>e.map(t=>{const r=a.find(n=>n.fieldId===t.id);let l=r?r.value:"";if(t.tag==="setting-url"){let n="",m="";try{const d=typeof l=="string"&&l.startsWith("{")?JSON.parse(l):l;n=d.text||"",m=d.url||""}catch{}return`"${String(n).replace(/"/g,'""')}","${String(m).replace(/"/g,'""')}"`}return l=String(l).replace(/"/g,'""'),`"${l}"`}).join(s));return i.join(s)+`
`+o.join(`
`)},parseCSV(p,e,s=","){const i=p.split(/\r?\n/).filter(n=>n.trim()!=="");if(i.length<2)throw new Error("El archivo CSV no tiene cabeceras o datos válidos.");const o=n=>{const m=[];let d=0,h=!1;for(let u=0;u<n.length;u++)if(n[u]==='"')h=!h;else if(n[u]===s&&!h){let b=n.substring(d,u);b.startsWith('"')&&b.endsWith('"')&&(b=b.slice(1,-1)),m.push(b.replace(/""/g,'"')),d=u+1}let c=n.substring(d);return c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),m.push(c.replace(/""/g,'"')),m},a=[],t=[];e.forEach(n=>{n.tag==="setting-url"?(a.push({colDef:n,type:"url-text"}),a.push({colDef:n,type:"url-url"}),t.push(`${n.title} (Texto)`),t.push(`${n.title} (URL)`)):(a.push({colDef:n,type:"normal"}),t.push(n.title))});const r=o(i[0]);if(r.length!==t.length)throw new Error(`Estructura inválida. El archivo tiene ${r.length} columnas, pero la tabla requiere ${t.length}. Descargue la plantilla de ejemplo.`);for(let n=0;n<t.length;n++){const m=t[n].trim().toLowerCase(),d=(r[n]||"").trim().toLowerCase();if(m!==d)throw new Error(`Cabecera incorrecta: Se esperaba '${t[n]}' pero se encontró '${r[n]}'. Por favor, utilice la plantilla de ejemplo.`)}const l=[];for(let n=1;n<i.length;n++){const m=o(i[n]);if(m.length!==a.length)continue;const d={};for(let c=0;c<m.length;c++){const u=m[c],b=a[c];if(!b)continue;const g=b.colDef.id,y=b.colDef.tag;if(d[g]||(d[g]={fieldId:g,tag:y}),["setting-number","setting-currency","setting-percentage"].includes(y))if(u.trim()!==""){const f=parseFloat(u.replace(/[^0-9.-]/g,""));if(isNaN(f))throw new Error(`Error en la fila de datos #${n}: El valor '${u}' no es un número válido para la columna '${b.colDef.title}'.`);d[g].value=f}else d[g].value=0;else b.type==="normal"?d[g].value=u:b.type==="url-text"?d[g].tempText=u:b.type==="url-url"&&(d[g].tempUrl=u)}const h=Object.values(d).map(c=>c.tag==="setting-url"?{fieldId:c.fieldId,value:JSON.stringify({text:c.tempText||"",url:c.tempUrl||""})}:{fieldId:c.fieldId,value:String(c.value||"")});l.push(h)}return l},exportJSON(p,e){const s=p.map(i=>{const o={};return e.forEach(a=>{const t=i.find(l=>l.fieldId===a.id);let r=t?t.value:"";if(a.tag==="setting-url")try{r=typeof r=="string"?JSON.parse(r):r}catch{r={text:"",url:""}}else["setting-number","setting-currency","setting-percentage"].includes(a.tag)?r=parseFloat(r)||0:a.tag==="setting-boolean"&&(r=r==="true"||r===!0);o[a.title]=r}),o});return JSON.stringify(s,null,2)},parseJSON(p,e){let s;try{s=JSON.parse(p)}catch{throw new Error("El archivo no es un JSON válido.")}if(!Array.isArray(s))throw new Error("El JSON debe contener un arreglo de registros.");return s.map((i,o)=>e.map(a=>{let t=i[a.title];if(t===void 0)throw new Error(`Error estructural: Falta la columna '${a.title}' en el registro #${o+1}.`);if(["setting-number","setting-currency","setting-percentage"].includes(a.tag))if(t!==""&&t!==null){const r=parseFloat(String(t).replace(/[^0-9.-]/g,""));if(isNaN(r))throw new Error(`Error en el registro #${o+1}: El valor '${t}' no es numérico para la columna '${a.title}'.`);t=r}else t=0;if(a.tag==="setting-url"){let r={text:"",url:""};typeof t=="object"&&t!==null?r={text:t.text||"",url:t.url||""}:typeof t=="string"&&(r={text:t,url:t}),t=JSON.stringify(r)}else typeof t=="object"?t=JSON.stringify(t):t=String(t);return{fieldId:a.id,value:t}}))},generateMockRow(p){return p.map(e=>{let s="Ejemplo";if(["setting-number","setting-currency"].includes(e.tag))s="1500.50";else if(e.tag==="setting-percentage")s="16";else if(e.tag==="setting-boolean")s="true";else if(e.tag==="setting-date")s=new Date().toISOString().split("T")[0];else if(e.tag==="setting-time")s="14:30";else if(e.tag==="setting-email")s="correo@ejemplo.com";else if(e.tag==="setting-url")s=JSON.stringify({text:"Visitar sitio",url:"https://ejemplo.com"});else if(e.tag==="setting-select"&&e.options){const i=e.options.split(",");s=i.length>0?i[0].trim():"Opción"}return{fieldId:e.id,value:s}})}},$={show(p,e,s){if(!s||s.length===0){alert("No hay datos en la tabla para exportar.");return}const i=`modal-export-${Date.now()}`,o=`
      <div class="modal fade" id="${i}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-success py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-download me-2"></i>Exportar Datos</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
              <p class="small text-muted mb-3">Selecciona el formato en el que deseas descargar los <strong>${s.length} registros</strong> de la tabla.</p>

              <div class="mb-3">
                <label class="form-label small fw-bold">Formato de Exportacion</label>
                <select class="form-select form-select-sm shadow-none" id="export-format-${i}">
                  <option value="csv_comma">CSV (Separado por comas - Estandar)</option>
                  <option value="csv_semicolon">CSV (Separado por punto y coma - Excel ES)</option>
                  <option value="json">JSON (Estructura de Objetos)</option>
                </select>
              </div>
            </div>
            <div class="modal-footer p-2 bg-light">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success btn-sm px-4 fw-bold" id="btn-execute-export-${i}">
                Descargar Archivo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const a=document.getElementById(i),t=new window.bootstrap.Modal(a);t.show(),document.getElementById(`btn-execute-export-${i}`).onclick=()=>{const r=document.getElementById(`export-format-${i}`).value,l=(p||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();let n,m,d;try{r==="csv_comma"?(n=v.exportCSV(s,e,","),m=`${l}_export.csv`,d="text/csv;charset=utf-8;"):r==="csv_semicolon"?(n=v.exportCSV(s,e,";"),m=`${l}_excel_export.csv`,d="text/csv;charset=utf-8;"):r==="json"&&(n=v.exportJSON(s,e),m=`${l}_export.json`,d="application/json;charset=utf-8;"),this._downloadFile(n,m,d),t.hide()}catch(h){alert("Error al exportar: "+h.message)}},a.addEventListener("hidden.bs.modal",()=>a.remove())},_downloadFile(p,e,s){const i=new Blob([p],{type:s}),o=URL.createObjectURL(i),a=document.createElement("a");a.setAttribute("href",o),a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)}},C={show(p,e){return new Promise(s=>{const i=`modal-import-${Date.now()}`,o=e.map(h=>h.tag==="setting-url"?`<span class="badge bg-primary mb-1 me-1 text-wrap text-start">${h.title} (Texto)</span>
                  <span class="badge bg-info mb-1 me-1 text-wrap text-start">${h.title} (URL)</span>`:`<span class="badge bg-secondary mb-1 me-1 text-wrap text-start">${h.title}</span>`).join(""),a=`
        <div class="modal fade" id="${i}" tabindex="-1" data-bs-backdrop="static">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 shadow-lg">
              <div class="modal-header text-bg-primary py-2">
                <h6 class="modal-title fw-bold"><i class="fa-solid fa-upload me-2"></i>Asistente de Importacion</h6>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body p-4 bg-light">
                <div class="row g-4">
                  <!-- Columna Izquierda: Instrucciones y Plantilla -->
                  <div class="col-md-6 border-end">
                    <h6 class="fw-bold text-dark mb-3"><i class="fa-solid fa-circle-info me-2 text-primary"></i>Instrucciones</h6>
                    <p class="small text-muted mb-2">Para garantizar que los datos se importen correctamente, el archivo debe contener <strong>exactamente</strong> las siguientes cabeceras:</p>
                    <div class="p-2 bg-white border rounded mb-3" style="max-height: 120px; overflow-y: auto;">
                      ${o}
                    </div>

                    <div class="alert alert-warning small py-2 px-3 mb-3">
                      <i class="fa-solid fa-triangle-exclamation me-1"></i> Se soportan archivos <strong>.CSV</strong> o <strong>.JSON</strong>.
                    </div>

                    <button class="btn btn-outline-primary btn-sm w-100 fw-bold" id="btn-download-tpl-${i}">
                      <i class="fa-solid fa-file-csv me-2"></i>Descargar Plantilla de Ejemplo
                    </button>
                  </div>

                  <!-- Columna Derecha: Carga de Archivo -->
                  <div class="col-md-6 d-flex flex-column justify-content-center">
                    <label class="form-label fw-bold text-dark">Seleccionar Archivo:</label>
                    <input type="file" id="file-upload-${i}" class="form-control mb-3" accept=".csv, .json">

                    <div class="mb-3">
                      <label class="form-label small fw-bold text-muted">Si es CSV, que separador usa?</label>
                      <select class="form-select form-select-sm shadow-none" id="import-separator-${i}">
                        <option value="auto">Detectar Automaticamente</option>
                        <option value=",">Coma ( , )</option>
                        <option value=";">Punto y coma ( ; )</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer p-2 bg-light">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary btn-sm px-4 fw-bold" id="btn-execute-import-${i}" disabled>
                  Procesar e Importar
                </button>
              </div>
            </div>
          </div>
        </div>
      `;document.body.insertAdjacentHTML("beforeend",a);const t=document.getElementById(i),r=new window.bootstrap.Modal(t);r.show();const l=document.getElementById(`file-upload-${i}`),n=document.getElementById(`btn-execute-import-${i}`),m=document.getElementById(`btn-download-tpl-${i}`),d=document.getElementById(`import-separator-${i}`);l.addEventListener("change",()=>{n.disabled=!l.files.length}),m.onclick=()=>{try{const h=v.generateMockRow(e),c=v.exportCSV([h],e,","),u=(p||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();this._downloadFile(c,`plantilla_${u}.csv`,"text/csv;charset=utf-8;")}catch(h){alert("Error generando la plantilla: "+h.message)}},n.onclick=()=>{const h=l.files[0];if(!h)return;const c=new FileReader;c.onload=u=>{try{const b=u.target.result;let g=[];if(h.name.toLowerCase().endsWith(".json"))g=v.parseJSON(b,e);else{let y=d.value;if(y==="auto"){const f=b.split(`
`)[0]||"";y=f.split(";").length>f.split(",").length?";":","}g=v.parseCSV(b,e,y)}g.length>0?(r.hide(),s(g)):alert("El archivo fue procesado pero no se encontraron registros validos. Verifique la estructura.")}catch(b){alert("Error de importacion: "+b.message)}},c.readAsText(h)},t.addEventListener("hidden.bs.modal",()=>{t.remove(),s([])})})},_downloadFile(p,e,s){const i=new Blob([p],{type:s}),o=URL.createObjectURL(i),a=document.createElement("a");a.setAttribute("href",o),a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)}},x={openExportModal(p,e,s){$.show(p,e,s)},async openImportModal(p,e,s){const i=await C.show(p,e);i&&i.length>0&&s(i)}};class S extends E{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0,this._editingColumnId=null}setData(e){if(e.columns&&(this.columns=e.columns,this.setAttribute("columns",JSON.stringify(e.columns))),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch(s){console.error("[EditorTable] Error al parsear JSON:",s.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_mapExternalDataToRows(e){return e.map(s=>this.columns.map(i=>{let o=s[i.title];if(o===void 0){const a=Object.keys(s).find(t=>t.toLowerCase()===i.title.toLowerCase());a&&(o=s[a])}return o===void 0&&(o=s[i.id]),o==null&&(o=""),typeof o=="object"&&(o=JSON.stringify(o)),{fieldId:i.id,value:o}}))}setCalculatedValue(e){if(!Array.isArray(e))return;const s=this._mapExternalDataToRows(e);JSON.stringify(this.rows)!==JSON.stringify(s)&&(this.rows=s,this._renderRows(),this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())))}_getFriendlyData(){return this.rows.map(e=>{const s={};return e.forEach(i=>{s[i.fieldId]=i.value}),s})}_getGridColumns(){return(this.columns||[]).filter(e=>e.tag==="setting-script"?!1:!(e.hideView===!0||e.hideView==="true"||e.hideView===""||e["hide-view"]===!0||e["hide-view"]==="true"||e["hide-view"]===""))}render(){const e=this.getAttribute("title")||"Tabla de Datos",s=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-${this.uiColor} border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${e}</h6>
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
    `;this.innerHTML=this.renderViewerStructure(s),this._renderHeader(),this._renderRows(),this._attachEvents()}_toggleToolbar(e){if(this.querySelectorAll(".toolbar-btn, .toolbar-input").forEach(s=>{s.disabled=e}),this.hasAttribute("readonly")){const s=this.querySelector(`#btn-add-${this.id}`),i=this.querySelector(`#btn-import-trigger-${this.id}`),o=this.querySelector(`#btn-empty-${this.id}`);s&&(s.disabled=!0),i&&(i.disabled=!0),o&&(o.disabled=!0)}}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>{this.hasAttribute("readonly")||this._openFormModal()};const e=this.querySelector(`#search-${this.id}`);e.oninput=i=>{this._searchTerm=i.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>{const i=this.getAttribute("title")||"Tabla";x.openExportModal(i,this._getGridColumns(),this.rows)},this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>{if(this.hasAttribute("readonly"))return;const i=this.getAttribute("title")||"Tabla";x.openImportModal(i,this._getGridColumns(),o=>{this.hasAttribute("prepend-rows")?this.rows=[...o.reverse(),...this.rows]:this.rows=[...this.rows,...o],this._renderRows(),this._dispatchChange(),alert(`¡Completado! Se importaron ${o.length} registros a la tabla.`)})};const s=this.querySelector(`#btn-empty-${this.id}`);s&&(s.onclick=()=>{if(!this.hasAttribute("readonly")&&this.rows.length>0&&confirm("⚠️ ¿Está seguro que desea eliminar TODOS los registros de la tabla?")){this.rows=[],this.setAttribute("edit-value","[]");const i=this.querySelector(`#table-body-${this.id}`);i&&(i.innerHTML="");const o=this.querySelector(`#table-footer-${this.id}`);o&&(o.innerHTML="")}}),this.addEventListener("schema-updated",i=>{const{colId:o,options:a}=i.detail,t=document.getElementById(`form-container-${this.id}`);if(t){const r=t.querySelector(`[field-id="${o}"]`);if(r&&typeof r.setData=="function"){const l=r.getData?r.getData():{};r.setData({...l,options:a})}}})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let s='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';const i=this._getGridColumns(),o=["string","number","currency","percentage","boolean","date"],a=this.hasAttribute("readonly");if(i.forEach(t=>{const r=t.alignment||"left",l=(t.tag||"").replace("setting-",""),n=o.includes(l),m=this._editingColumnId===t.id,d=t.readonly===!0||t.readonly==="true"||t.readonly==="";if(m)s+=`
        <th class="fw-bold px-3 py-2 border-bottom bg-warning bg-opacity-10" 
            style="text-align: ${r}; user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span class="text-dark">${t.title}</span>
              <div class="btn-group btn-group-sm ms-2 shadow-sm">
                <button class="btn btn-success btn-save-col-inline" title="Guardar cambios"><i class="fa-solid fa-check"></i></button>
                <button class="btn btn-danger btn-cancel-col-inline" title="Cancelar edición"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
        </th>`;else{const h=this._sortFieldId===t.id;let c='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';h&&(c=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>');let u="";n&&!this._editingColumnId&&!a&&!d&&(u=`<button class="btn btn-sm btn-link text-primary p-0 ms-2 btn-edit-col-inline" data-col-id="${t.id}" title="Editar esta columna"><i class="fa-solid fa-pen"></i></button>`),s+=`
        <th class="fw-bold px-3 py-2 border-bottom ${this._editingColumnId?"":"col-sortable"}"
            data-col-id="${t.id}"
            style="text-align: ${r}; ${this._editingColumnId?"opacity: 0.5;":"cursor: pointer;"} user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span>${t.title} ${c}</span>
              ${u}
            </div>
        </th>`}}),s+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=s,this._renderHeaderTotals(i),this._toggleToolbar(!!this._editingColumnId),this._editingColumnId){const t=e.querySelector(".btn-save-col-inline"),r=e.querySelector(".btn-cancel-col-inline");t&&(t.onclick=l=>{l.stopPropagation(),this._saveInlineColumn()}),r&&(r.onclick=l=>{l.stopPropagation(),this._editingColumnId=null,this._renderHeader(),this._renderRows()})}else e.querySelectorAll(".col-sortable").forEach(t=>{t.onclick=r=>{if(r.target.closest(".btn-edit-col-inline"))return;const l=t.dataset.colId;this._sortFieldId===l?this._sortAsc=!this._sortAsc:(this._sortFieldId=l,this._sortAsc=!0),this._renderHeader(),this._renderRows()}}),e.querySelectorAll(".btn-edit-col-inline").forEach(t=>{t.onclick=r=>{r.stopPropagation(),this._editingColumnId=t.getAttribute("data-col-id"),this._renderHeader(),this._renderRows()}})}_renderHeaderTotals(e){const s=this.querySelector(`#table-header-totals-${this.id}`);if(!s)return;if(!(!this._editingColumnId&&e.some(a=>a.total&&(a.totalPosition||"tfoot")==="thead"))){s.innerHTML="",s.classList.add("d-none");return}s.classList.remove("d-none");let o='<th class="border-top"></th>';e.forEach(a=>{o+=`<th class="px-3 py-1 border-top fw-bold text-primary small" style="text-align: ${a.alignment||"left"};" id="th-total-${this.id}-${a.id}"></th>`}),o+='<th class="border-top"></th>',s.innerHTML=o}_saveInlineColumn(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;e.querySelectorAll("tr[data-original-index]").forEach(i=>{const o=parseInt(i.getAttribute("data-original-index")),a=i.querySelector(`[field-id="${this._editingColumnId}"]`);if(a&&typeof a.getData=="function"){const t=a.getData(),r=t.value!==void 0?t.value:"",l=this.rows[o].findIndex(n=>n.fieldId===this._editingColumnId);l!==-1?(this.rows[o][l].value=r,t.bold!==void 0&&(this.rows[o][l].bold=t.bold),t.italic!==void 0&&(this.rows[o][l].italic=t.italic),t.color!==void 0&&(this.rows[o][l].color=t.color)):this.rows[o].push({fieldId:this._editingColumnId,value:r,bold:t.bold||!1,italic:t.italic||!1,color:t.color||"black"})}}),this._editingColumnId=null,this._renderHeader(),this._renderRows(),this._dispatchChange()}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;e.innerHTML="";const s=this.hasAttribute("readonly");this._sortFieldId&&!this._editingColumnId&&(this.rows=w.sortRows(this.rows,this._sortFieldId,this._sortAsc,this.columns),this._dispatchChange());let i=this.rows.map((o,a)=>({data:o,originalIndex:a}));if(this._searchTerm.trim()&&!this._editingColumnId){const o=w.filterRows(this.rows,this._searchTerm);i=i.filter(a=>o.includes(a.data))}i.forEach(o=>{const{data:a,originalIndex:t}=o,r=document.createElement("tr");r.setAttribute("data-original-index",t);const l=document.createElement("td"),n=!this._searchTerm&&!this._sortFieldId&&!this._editingColumnId&&!s;n?(l.className="drag-handle text-center text-muted align-middle cursor-grab py-2",l.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(l.className="text-center text-muted align-middle py-2 small opacity-50",l.innerHTML=this._editingColumnId||s?'<i class="fa-solid fa-lock"></i>':this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',l.title=s?"Tabla en modo solo lectura":this._editingColumnId?"Orden bloqueado durante edición":"Orden automático activo"),r.appendChild(l),this._getGridColumns().forEach(c=>{const u=document.createElement("td");u.className="px-3 py-2",u.style.textAlign=c.alignment||"left";const b=a.find(y=>y.fieldId===c.id);if(this._editingColumnId===c.id){u.className="px-2 py-1 bg-warning bg-opacity-10";const y=c.tag.replace("setting-","editor-"),f=document.createElement(y);f.setAttribute("table",""),f.setAttribute("compact",""),f.setAttribute("field-id",c.id),f.setData&&f.setData({...c,...b,title:"",spanEV:12}),u.appendChild(f)}else{this._editingColumnId&&(u.style.opacity="0.6");const y=c.tag.replace("setting-","viewer-"),f=document.createElement(y);f.setAttribute("table",""),f.setData&&f.setData({...c,...b,title:"",spanEV:12}),u.appendChild(f)}r.appendChild(u)});const d=document.createElement("td");d.className="text-end px-3 py-2";const h=this._editingColumnId||s;d.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar fila" ${h?"disabled":""}><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar fila" ${h?"disabled":""}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,h||(d.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(t),d.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(t,1),this._renderRows(),this._dispatchChange())}),r.appendChild(d),e.appendChild(r),n&&_.init(r,".drag-handle",()=>this._handleReorder())}),this._renderFooter(i.map(o=>o.data))}_renderFooter(e){const s=this._getGridColumns();s.forEach(t=>{if(!t.total||(t.totalPosition||"tfoot")!=="thead")return;const r=this.querySelector(`#th-total-${this.id}-${t.id}`);r&&(r.innerHTML=e&&e.length>0?w.formatTotalHtml(w.calculateTotal(e,t.id),t):"")});const i=this.querySelector(`#table-footer-${this.id}`);if(!i||(i.innerHTML="",!s.some(t=>t.total&&(t.totalPosition||"tfoot")!=="thead")||!e||e.length===0))return;let a="<tr><td></td>";s.forEach(t=>{let r="";if(t.total&&(t.totalPosition||"tfoot")!=="thead"){const l=w.calculateTotal(e,t.id),n=`id="TOTAL_${this.id}_${t.id}" data-raw-value="${l}"`;r=w.formatTotalHtml(l,t,n)}a+=`<td class="px-3 py-2" style="text-align: ${t.alignment||"left"}; ${this._editingColumnId&&this._editingColumnId!==t.id?"opacity: 0.6;":""}">${r}</td>`}),a+="<td></td></tr>",i.innerHTML=a}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),s=[];Array.from(e.querySelectorAll("tr")).forEach(o=>{const a=parseInt(o.getAttribute("data-original-index"));!isNaN(a)&&this.rows[a]&&s.push(this.rows[a])}),s.length===this.rows.length&&(this.rows=s)}_dispatchChange(){this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())),setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_openFormModal(e=null){var l;if(this.hasAttribute("readonly"))return;const s=e!==null,i=`modal-form-${this.id}`;(l=document.getElementById(i))==null||l.remove();const o=`
      <div class="modal fade" id="${i}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold">
                <i class="fa-solid ${s?"fa-pen-to-square":"fa-plus-circle"} me-2"></i>
                ${s?"Editar Registro":"Nuevo Registro"}
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
    `;document.body.insertAdjacentHTML("beforeend",o);const a=document.getElementById(`form-container-${this.id}`);this.columns.forEach(n=>{const m=n.tag.replace("setting-","editor-"),d=document.createElement(m);d.setAttribute("table",""),d.setAttribute("field-id",n.id),(n.hideEdit===!0||n.hideEdit==="true"||n.hideEdit===""||n["hide-edit"]===!0||n["hide-edit"]==="true"||n["hide-edit"]==="")&&d.classList.add("d-none");let c={...n,title:n.title,spanEV:12};if(s){const u=this.rows[e].find(b=>b.fieldId===n.id);u&&(c={...c,...u})}d.setData&&d.setData(c),a.appendChild(d)});const t=document.getElementById(i),r=new bootstrap.Modal(t);r.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const m=Array.from(a.children).map(d=>{const h=d.getData();return h.fieldId=d.getAttribute("field-id"),h});s?this.rows[e]=m:this.hasAttribute("prepend-rows")?this.rows.unshift(m):this.rows.push(m),this._renderRows(),this._dispatchChange(),r.hide(),t.addEventListener("hidden.bs.modal",()=>t.remove())}}}customElements.define("editor-table",S);export{S as EditorTable};
