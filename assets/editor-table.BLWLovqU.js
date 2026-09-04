import{B as E}from"./BaseElement.BIf2Qi2B.js";import{D as _}from"./main.UAgaLVqA.js";import{T as w}from"./TableUtils.BbNPy2Ui.js";import"./Utils.2v3ifB9J.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./firebase-init.D5QOG0FW.js";const g={exportCSV(f,t,s=","){let a=[];t.forEach(i=>{i.tag==="setting-url"?(a.push(`"${i.title} (Texto)"`),a.push(`"${i.title} (URL)"`)):a.push(`"${i.title}"`)});const n=f.map(i=>t.map(e=>{const o=i.find(r=>r.fieldId===e.id);let d=o?o.value:"";if(e.tag==="setting-url"){let r="",u="";try{const l=typeof d=="string"&&d.startsWith("{")?JSON.parse(d):d;r=l.text||"",u=l.url||""}catch{}return`"${String(r).replace(/"/g,'""')}","${String(u).replace(/"/g,'""')}"`}return d=String(d).replace(/"/g,'""'),`"${d}"`}).join(s));return a.join(s)+`
`+n.join(`
`)},parseCSV(f,t,s=","){const a=f.split(/\r?\n/).filter(r=>r.trim()!=="");if(a.length<2)throw new Error("El archivo CSV no tiene cabeceras o datos válidos.");const n=r=>{const u=[];let l=0,c=!1;for(let b=0;b<r.length;b++)if(r[b]==='"')c=!c;else if(r[b]===s&&!c){let m=r.substring(l,b);m.startsWith('"')&&m.endsWith('"')&&(m=m.slice(1,-1)),u.push(m.replace(/""/g,'"')),l=b+1}let h=r.substring(l);return h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),u.push(h.replace(/""/g,'"')),u},i=[],e=[];t.forEach(r=>{r.tag==="setting-url"?(i.push({colDef:r,type:"url-text"}),i.push({colDef:r,type:"url-url"}),e.push(`${r.title} (Texto)`),e.push(`${r.title} (URL)`)):(i.push({colDef:r,type:"normal"}),e.push(r.title))});const o=n(a[0]);if(o.length!==e.length)throw new Error(`Estructura inválida. El archivo tiene ${o.length} columnas, pero la tabla requiere ${e.length}. Descargue la plantilla de ejemplo.`);for(let r=0;r<e.length;r++){const u=e[r].trim().toLowerCase(),l=(o[r]||"").trim().toLowerCase();if(u!==l)throw new Error(`Cabecera incorrecta: Se esperaba '${e[r]}' pero se encontró '${o[r]}'. Por favor, utilice la plantilla de ejemplo.`)}const d=[];for(let r=1;r<a.length;r++){const u=n(a[r]);if(u.length!==i.length)continue;const l={};for(let h=0;h<u.length;h++){const b=u[h],m=i[h];if(!m)continue;const p=m.colDef.id,v=m.colDef.tag;if(l[p]||(l[p]={fieldId:p,tag:v}),["setting-number","setting-currency","setting-percentage"].includes(v))if(b.trim()!==""){const y=parseFloat(b.replace(/[^0-9.-]/g,""));if(isNaN(y))throw new Error(`Error en la fila de datos #${r}: El valor '${b}' no es un número válido para la columna '${m.colDef.title}'.`);l[p].value=y}else l[p].value=0;else m.type==="normal"?l[p].value=b:m.type==="url-text"?l[p].tempText=b:m.type==="url-url"&&(l[p].tempUrl=b)}const c=Object.values(l).map(h=>h.tag==="setting-url"?{fieldId:h.fieldId,value:JSON.stringify({text:h.tempText||"",url:h.tempUrl||""})}:{fieldId:h.fieldId,value:String(h.value||"")});d.push(c)}return d},exportJSON(f,t){const s=f.map(a=>{const n={};return t.forEach(i=>{const e=a.find(d=>d.fieldId===i.id);let o=e?e.value:"";if(i.tag==="setting-url")try{o=typeof o=="string"?JSON.parse(o):o}catch{o={text:"",url:""}}else["setting-number","setting-currency","setting-percentage"].includes(i.tag)?o=parseFloat(o)||0:i.tag==="setting-boolean"&&(o=o==="true"||o===!0);n[i.title]=o}),n});return JSON.stringify(s,null,2)},parseJSON(f,t){let s;try{s=JSON.parse(f)}catch{throw new Error("El archivo no es un JSON válido.")}if(!Array.isArray(s))throw new Error("El JSON debe contener un arreglo de registros.");return s.map((a,n)=>t.map(i=>{let e=a[i.title];if(e===void 0)throw new Error(`Error estructural: Falta la columna '${i.title}' en el registro #${n+1}.`);if(["setting-number","setting-currency","setting-percentage"].includes(i.tag))if(e!==""&&e!==null){const o=parseFloat(String(e).replace(/[^0-9.-]/g,""));if(isNaN(o))throw new Error(`Error en el registro #${n+1}: El valor '${e}' no es numérico para la columna '${i.title}'.`);e=o}else e=0;if(i.tag==="setting-url"){let o={text:"",url:""};typeof e=="object"&&e!==null?o={text:e.text||"",url:e.url||""}:typeof e=="string"&&(o={text:e,url:e}),e=JSON.stringify(o)}else typeof e=="object"?e=JSON.stringify(e):e=String(e);return{fieldId:i.id,value:e}}))},generateMockRow(f){return f.map(t=>{let s="Ejemplo";if(["setting-number","setting-currency"].includes(t.tag))s="1500.50";else if(t.tag==="setting-percentage")s="16";else if(t.tag==="setting-boolean")s="true";else if(t.tag==="setting-date")s=new Date().toISOString().split("T")[0];else if(t.tag==="setting-time")s="14:30";else if(t.tag==="setting-email")s="correo@ejemplo.com";else if(t.tag==="setting-url")s=JSON.stringify({text:"Visitar sitio",url:"https://ejemplo.com"});else if(t.tag==="setting-select"&&t.options){const a=t.options.split(",");s=a.length>0?a[0].trim():"Opción"}return{fieldId:t.id,value:s}})}},x={openExportModal(f,t,s){if(!s||s.length===0){alert("No hay datos en la tabla para exportar.");return}const a=`modal-export-${Date.now()}`,n=`
      <div class="modal fade" id="${a}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-success py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-download me-2"></i>Exportar Datos</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
              <p class="small text-muted mb-3">Selecciona el formato en el que deseas descargar los <strong>${s.length} registros</strong> de la tabla.</p>
              
              <div class="mb-3">
                <label class="form-label small fw-bold">Formato de Exportación</label>
                <select class="form-select form-select-sm shadow-none" id="export-format-${a}">
                  <option value="csv_comma">CSV (Separado por comas - Estándar)</option>
                  <option value="csv_semicolon">CSV (Separado por punto y coma - Excel ES)</option>
                  <option value="json">JSON (Estructura de Objetos)</option>
                </select>
              </div>
            </div>
            <div class="modal-footer p-2 bg-light">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success btn-sm px-4 fw-bold" id="btn-execute-export-${a}">
                Descargar Archivo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById(a),e=new window.bootstrap.Modal(i);e.show(),document.getElementById(`btn-execute-export-${a}`).onclick=()=>{const o=document.getElementById(`export-format-${a}`).value,d=(f||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();let r,u,l;try{o==="csv_comma"?(r=g.exportCSV(s,t,","),u=`${d}_export.csv`,l="text/csv;charset=utf-8;"):o==="csv_semicolon"?(r=g.exportCSV(s,t,";"),u=`${d}_excel_export.csv`,l="text/csv;charset=utf-8;"):o==="json"&&(r=g.exportJSON(s,t),u=`${d}_export.json`,l="application/json;charset=utf-8;"),this._downloadFile(r,u,l),e.hide()}catch(c){alert("Error al exportar: "+c.message)}},i.addEventListener("hidden.bs.modal",()=>i.remove())},openImportModal(f,t,s){const a=`modal-import-${Date.now()}`,n=t.map(c=>c.tag==="setting-url"?`<span class="badge bg-primary mb-1 me-1 text-wrap text-start">${c.title} (Texto)</span>
                <span class="badge bg-info mb-1 me-1 text-wrap text-start">${c.title} (URL)</span>`:`<span class="badge bg-secondary mb-1 me-1 text-wrap text-start">${c.title}</span>`).join(""),i=`
      <div class="modal fade" id="${a}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-upload me-2"></i>Asistente de Importación</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            
            <div class="modal-body p-4 bg-light">
              <div class="row g-4">
                <!-- Columna Izquierda: Instrucciones y Plantilla -->
                <div class="col-md-6 border-end">
                  <h6 class="fw-bold text-dark mb-3"><i class="fa-solid fa-circle-info me-2 text-primary"></i>Instrucciones</h6>
                  <p class="small text-muted mb-2">Para garantizar que los datos se importen correctamente, el archivo debe contener <strong>exactamente</strong> las siguientes cabeceras:</p>
                  <div class="p-2 bg-white border rounded mb-3" style="max-height: 120px; overflow-y: auto;">
                    ${n}
                  </div>
                  
                  <div class="alert alert-warning small py-2 px-3 mb-3">
                    <i class="fa-solid fa-triangle-exclamation me-1"></i> Se soportan archivos <strong>.CSV</strong> o <strong>.JSON</strong>.
                  </div>

                  <button class="btn btn-outline-primary btn-sm w-100 fw-bold" id="btn-download-tpl-${a}">
                    <i class="fa-solid fa-file-csv me-2"></i>Descargar Plantilla de Ejemplo
                  </button>
                </div>

                <!-- Columna Derecha: Carga de Archivo -->
                <div class="col-md-6 d-flex flex-column justify-content-center">
                  <label class="form-label fw-bold text-dark">Seleccionar Archivo:</label>
                  <input type="file" id="file-upload-${a}" class="form-control mb-3" accept=".csv, .json">
                  
                  <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Si es CSV, ¿qué separador usa?</label>
                    <select class="form-select form-select-sm shadow-none" id="import-separator-${a}">
                      <option value="auto">Detectar Automáticamente</option>
                      <option value=",">Coma ( , )</option>
                      <option value=";">Punto y coma ( ; )</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer p-2 bg-light">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary btn-sm px-4 fw-bold" id="btn-execute-import-${a}" disabled>
                Procesar e Importar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const e=document.getElementById(a),o=new window.bootstrap.Modal(e);o.show();const d=document.getElementById(`file-upload-${a}`),r=document.getElementById(`btn-execute-import-${a}`),u=document.getElementById(`btn-download-tpl-${a}`),l=document.getElementById(`import-separator-${a}`);d.addEventListener("change",()=>{r.disabled=!d.files.length}),u.onclick=()=>{try{const c=g.generateMockRow(t),h=g.exportCSV([c],t,","),b=(f||"tabla").replace(/[^a-z0-9]/gi,"_").toLowerCase();this._downloadFile(h,`plantilla_${b}.csv`,"text/csv;charset=utf-8;")}catch(c){alert("Error generando la plantilla: "+c.message)}},r.onclick=()=>{const c=d.files[0];if(!c)return;const h=new FileReader;h.onload=b=>{try{const m=b.target.result;let p=[];if(c.name.toLowerCase().endsWith(".json"))p=g.parseJSON(m,t);else{let v=l.value;if(v==="auto"){const y=m.split(`
`)[0]||"";v=y.split(";").length>y.split(",").length?";":","}p=g.parseCSV(m,t,v)}p.length>0?(s(p),o.hide()):alert("El archivo fue procesado pero no se encontraron registros válidos. Verifique la estructura.")}catch(m){alert("Error de importación: "+m.message)}},h.readAsText(c)},e.addEventListener("hidden.bs.modal",()=>e.remove())},_downloadFile(f,t,s){const a=new Blob([f],{type:s}),n=URL.createObjectURL(a),i=document.createElement("a");i.setAttribute("href",n),i.setAttribute("download",t),document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}};class $ extends E{constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0,this._editingColumnId=null}setData(t){if(t.columns&&(this.columns=t.columns,this.setAttribute("columns",JSON.stringify(t.columns))),t.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),t.value)if(Array.isArray(t.value))this.rows=t.value;else if(typeof t.value=="string")try{this.rows=JSON.parse(t.value)}catch(s){console.error("[EditorTable] Error al parsear JSON:",s.message),this.rows=[]}else this.rows=[];else this.rows=[];super.setData(t)}getData(){const t=super.getData();return t.value=this.rows,t.prependRows=this.hasAttribute("prepend-rows"),t}_mapExternalDataToRows(t){return t.map(s=>this.columns.map(a=>{let n=s[a.title];if(n===void 0){const i=Object.keys(s).find(e=>e.toLowerCase()===a.title.toLowerCase());i&&(n=s[i])}return n===void 0&&(n=s[a.id]),n==null&&(n=""),typeof n=="object"&&(n=JSON.stringify(n)),{fieldId:a.id,value:n}}))}setCalculatedValue(t){if(!Array.isArray(t))return;const s=this._mapExternalDataToRows(t);JSON.stringify(this.rows)!==JSON.stringify(s)&&(this.rows=s,this._renderRows(),this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())))}_getFriendlyData(){return this.rows.map(t=>{const s={};return t.forEach(a=>{s[a.fieldId]=a.value}),s})}_getGridColumns(){return(this.columns||[]).filter(t=>t.tag==="setting-script"?!1:!(t.hideView===!0||t.hideView==="true"||t.hideView===""||t["hide-view"]===!0||t["hide-view"]==="true"||t["hide-view"]===""))}render(){const t=this.getAttribute("title")||"Tabla de Datos",s=`
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
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-primary small"></tfoot>
                </table>
            </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._renderHeader(),this._renderRows(),this._attachEvents()}_toggleToolbar(t){this.querySelectorAll(".toolbar-btn, .toolbar-input").forEach(s=>{s.disabled=t})}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const t=this.querySelector(`#search-${this.id}`);t.oninput=a=>{this._searchTerm=a.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>{const a=this.getAttribute("title")||"Tabla";x.openExportModal(a,this._getGridColumns(),this.rows)},this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>{const a=this.getAttribute("title")||"Tabla";x.openImportModal(a,this._getGridColumns(),n=>{this.hasAttribute("prepend-rows")?this.rows=[...n.reverse(),...this.rows]:this.rows=[...this.rows,...n],this._renderRows(),this._dispatchChange(),alert(`¡Completado! Se importaron ${n.length} registros a la tabla.`)})};const s=this.querySelector(`#btn-empty-${this.id}`);s&&(s.onclick=()=>{if(this.rows.length>0&&confirm("⚠️ ¿Está seguro que desea eliminar TODOS los registros de la tabla?")){this.rows=[],this.setAttribute("edit-value","[]");const a=this.querySelector(`#table-body-${this.id}`);a&&(a.innerHTML="");const n=this.querySelector(`#table-footer-${this.id}`);n&&(n.innerHTML="")}}),this.addEventListener("schema-updated",a=>{const{colId:n,options:i}=a.detail,e=document.getElementById(`form-container-${this.id}`);if(e){const o=e.querySelector(`[field-id="${n}"]`);if(o&&typeof o.setData=="function"){const d=o.getData?o.getData():{};o.setData({...d,options:i})}}})}_renderHeader(){const t=this.querySelector(`#table-header-${this.id}`);if(!t)return;let s='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';const a=this._getGridColumns(),n=["string","number","currency","percentage","boolean"];if(a.forEach(i=>{const e=i.alignment||"left",o=(i.tag||"").replace("setting-",""),d=n.includes(o);if(this._editingColumnId===i.id)s+=`
        <th class="fw-bold px-3 py-2 border-bottom bg-warning bg-opacity-10" 
            style="text-align: ${e}; user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span class="text-dark">${i.title}</span>
              <div class="btn-group btn-group-sm ms-2 shadow-sm">
                <button class="btn btn-success btn-save-col-inline" title="Guardar cambios"><i class="fa-solid fa-check"></i></button>
                <button class="btn btn-danger btn-cancel-col-inline" title="Cancelar edición"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
        </th>`;else{const u=this._sortFieldId===i.id;let l='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';u&&(l=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>');let c="";d&&!this._editingColumnId&&(c=`<button class="btn btn-sm btn-link text-primary p-0 ms-2 btn-edit-col-inline" data-col-id="${i.id}" title="Editar esta columna"><i class="fa-solid fa-pen"></i></button>`),s+=`
        <th class="fw-bold px-3 py-2 border-bottom ${this._editingColumnId?"":"col-sortable"}" 
            data-col-id="${i.id}" 
            style="text-align: ${e}; ${this._editingColumnId?"opacity: 0.5;":"cursor: pointer;"} user-select: none;">
            <div class="d-flex align-items-center justify-content-between">
              <span>${i.title} ${l}</span>
              ${c}
            </div>
        </th>`}}),s+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',t.innerHTML=s,this._toggleToolbar(!!this._editingColumnId),this._editingColumnId){const i=t.querySelector(".btn-save-col-inline"),e=t.querySelector(".btn-cancel-col-inline");i&&(i.onclick=o=>{o.stopPropagation(),this._saveInlineColumn()}),e&&(e.onclick=o=>{o.stopPropagation(),this._editingColumnId=null,this._renderHeader(),this._renderRows()})}else t.querySelectorAll(".col-sortable").forEach(i=>{i.onclick=e=>{if(e.target.closest(".btn-edit-col-inline"))return;const o=i.dataset.colId;this._sortFieldId===o?this._sortAsc=!this._sortAsc:(this._sortFieldId=o,this._sortAsc=!0),this._renderHeader(),this._renderRows()}}),t.querySelectorAll(".btn-edit-col-inline").forEach(i=>{i.onclick=e=>{e.stopPropagation(),this._editingColumnId=i.getAttribute("data-col-id"),this._renderHeader(),this._renderRows()}})}_saveInlineColumn(){const t=this.querySelector(`#table-body-${this.id}`);if(!t)return;t.querySelectorAll("tr[data-original-index]").forEach(a=>{const n=parseInt(a.getAttribute("data-original-index")),i=a.querySelector(`[field-id="${this._editingColumnId}"]`);if(i&&typeof i.getData=="function"){const e=i.getData(),o=e.value!==void 0?e.value:"",d=this.rows[n].findIndex(r=>r.fieldId===this._editingColumnId);d!==-1?(this.rows[n][d].value=o,e.bold!==void 0&&(this.rows[n][d].bold=e.bold),e.italic!==void 0&&(this.rows[n][d].italic=e.italic),e.color!==void 0&&(this.rows[n][d].color=e.color)):this.rows[n].push({fieldId:this._editingColumnId,value:o,bold:e.bold||!1,italic:e.italic||!1,color:e.color||"black"})}}),this._editingColumnId=null,this._renderHeader(),this._renderRows(),this._dispatchChange()}_renderRows(){const t=this.querySelector(`#table-body-${this.id}`);if(!t)return;t.innerHTML="",this._sortFieldId&&!this._editingColumnId&&(this.rows=w.sortRows(this.rows,this._sortFieldId,this._sortAsc,this.columns),this._dispatchChange());let s=this.rows.map((a,n)=>({data:a,originalIndex:n}));if(this._searchTerm.trim()&&!this._editingColumnId){const a=w.filterRows(this.rows,this._searchTerm);s=s.filter(n=>a.includes(n.data))}s.forEach(a=>{const{data:n,originalIndex:i}=a,e=document.createElement("tr");e.setAttribute("data-original-index",i);const o=document.createElement("td"),d=!this._searchTerm&&!this._sortFieldId&&!this._editingColumnId;d?(o.className="drag-handle text-center text-muted align-middle cursor-grab py-2",o.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(o.className="text-center text-muted align-middle py-2 small opacity-50",o.innerHTML=this._editingColumnId?'<i class="fa-solid fa-lock"></i>':this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',o.title=this._editingColumnId?"Orden bloqueado durante edición":"Orden automático activo"),e.appendChild(o),this._getGridColumns().forEach(l=>{const c=document.createElement("td");c.className="px-3 py-2",c.style.textAlign=l.alignment||"left";const h=n.find(m=>m.fieldId===l.id);if(this._editingColumnId===l.id){c.className="px-2 py-1 bg-warning bg-opacity-10";const m=l.tag.replace("setting-","editor-"),p=document.createElement(m);p.setAttribute("table",""),p.setAttribute("field-id",l.id),p.setData&&p.setData({...l,...h,title:"",spanEV:12}),c.appendChild(p)}else{this._editingColumnId&&(c.style.opacity="0.6");const m=l.tag.replace("setting-","viewer-"),p=document.createElement(m);p.setAttribute("table",""),p.setData&&p.setData({...l,...h,title:"",spanEV:12}),c.appendChild(p)}e.appendChild(c)});const u=document.createElement("td");u.className="text-end px-3 py-2",u.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar fila" ${this._editingColumnId?"disabled":""}><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar fila" ${this._editingColumnId?"disabled":""}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,this._editingColumnId||(u.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(i),u.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(i,1),this._renderRows(),this._dispatchChange())}),e.appendChild(u),t.appendChild(e),d&&_.init(e,".drag-handle",()=>this._handleReorder())}),this._renderFooter(s.map(a=>a.data))}_renderFooter(t){const s=this.querySelector(`#table-footer-${this.id}`);if(!s)return;s.innerHTML="";const a=this._getGridColumns();if(!a.some(e=>e.total)||!t||t.length===0)return;let i="<tr><td></td>";a.forEach(e=>{let o="";if(e.total){const d=w.calculateTotal(t,e.id),r=`id="TOTAL_${this.id}_${e.id}" data-raw-value="${d}"`;o=w.formatTotalHtml(d,e,r)}i+=`<td class="px-3 py-2" style="text-align: ${e.alignment||"left"}; ${this._editingColumnId&&this._editingColumnId!==e.id?"opacity: 0.6;":""}">${o}</td>`}),i+="<td></td></tr>",s.innerHTML=i}_handleReorder(){const t=this.querySelector(`#table-body-${this.id}`),s=[];Array.from(t.querySelectorAll("tr")).forEach(n=>{const i=parseInt(n.getAttribute("data-original-index"));!isNaN(i)&&this.rows[i]&&s.push(this.rows[i])}),s.length===this.rows.length&&(this.rows=s)}_dispatchChange(){this.setAttribute("edit-value",JSON.stringify(this._getFriendlyData())),setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_openFormModal(t=null){var d;const s=t!==null,a=`modal-form-${this.id}`;(d=document.getElementById(a))==null||d.remove();const n=`
      <div class="modal fade" id="${a}" tabindex="-1" data-bs-backdrop="static">
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
    `;document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById(`form-container-${this.id}`);this.columns.forEach(r=>{const u=r.tag.replace("setting-","editor-"),l=document.createElement(u);l.setAttribute("table",""),l.setAttribute("field-id",r.id),(r.hideEdit===!0||r.hideEdit==="true"||r.hideEdit===""||r["hide-edit"]===!0||r["hide-edit"]==="true"||r["hide-edit"]==="")&&l.classList.add("d-none");let h={...r,title:r.title,spanEV:12};if(s){const b=this.rows[t].find(m=>m.fieldId===r.id);b&&(h={...h,...b})}l.setData&&l.setData(h),i.appendChild(l)});const e=document.getElementById(a),o=new bootstrap.Modal(e);o.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const u=Array.from(i.children).map(l=>{const c=l.getData();return c.fieldId=l.getAttribute("field-id"),c});s?this.rows[t]=u:this.hasAttribute("prepend-rows")?this.rows.unshift(u):this.rows.push(u),this._renderRows(),this._dispatchChange(),o.hide(),e.addEventListener("hidden.bs.modal",()=>e.remove())}}}customElements.define("editor-table",$);export{$ as EditorTable};
