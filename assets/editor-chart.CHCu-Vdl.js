import{B as E}from"./BaseElement.BIf2Qi2B.js";import{C as _}from"./ChartCore.C2eLAi__.js";import"./Utils.2v3ifB9J.js";class I extends E{constructor(){super(),this._tempConfig={},this.chartInstance=null}static get observedAttributes(){return[...super.observedAttributes,"is-automatic","options"]}setData(t){super.setData(t),t.isAutomatic?this.setAttribute("is-automatic",""):this.removeAttribute("is-automatic"),t.options&&this.setAttribute("options",t.options)}render(){const t=this.getAttribute("title")||"Gráfico",e=this.getAttribute("edit-value"),s=this.hasAttribute("is-automatic");let o={type:"column",source:"manual",series:[]};try{e&&(o=JSON.parse(e))}catch(p){console.error("Error parsing chart config:",p)}let l={aspectPercentage:75,bgColor:"#ffffff"};try{const p=this.getAttribute("options");p&&(l={...l,...JSON.parse(p)})}catch(p){console.error("Error parsing chart options:",p)}const i={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",area:"fa-chart-area",pie:"fa-chart-pie",doughnut:"fa-circle-dot",radar:"fa-spider",polarArea:"fa-bullseye"}[o.type]||"fa-chart-simple",r=`chart-editor-${this.id}`,u=s?`<button class="btn btn-light btn-sm w-100 mt-3 text-muted" disabled id="btn-cfg-${this.id}"><i class="fa-solid fa-robot me-1 text-success"></i> Controlado de Forma Automática (ETL)</button>`:`<button class="btn btn-outline-primary btn-sm w-100 mt-3" id="btn-cfg-${this.id}"><i class="fa-solid fa-gear me-1"></i> Configurar Gráfico</button>`,n=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid ${i} me-1 text-${this.uiColor}"></i> ${t}
            </label>
            ${this.renderStyleControls(["bold","italic","color"])} 
          </div>
          <div style="position: relative; width: 100%; aspect-ratio: 100 / ${l.aspectPercentage}; display: flex; justify-content: center; align-items: center; background-color: ${l.bgColor}; border-radius: 4px; overflow: hidden;">
            <canvas id="${r}"></canvas>
          </div>
          ${u}
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(n);const c={addEventListener:()=>{},value:""};this._attachStyleEventListeners(c),s||(this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(o));const g=!s&&o.series&&o.series.length>0,v=s&&Object.keys(o).length>0;if(e&&(g||v))setTimeout(()=>this._renderChart(r,o),200);else{const p=this.querySelector(`#${r}`);if(p){const h=p.getContext("2d");h.fillStyle="#f8f9fa",h.fillRect(0,0,p.width,p.height),h.fillStyle="#6c757d",h.font="14px Arial",h.textAlign="center",h.fillText(s?"Esperando disparador automático...":'Haga clic en "Configurar Gráfico"',p.width/2,p.height/2)}}}_renderChart(t,e){const s=document.getElementById(t);if(!s||(this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null),!window.Chart))return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const o=this.hasAttribute("is-automatic");if(s.parentElement,o){try{this.chartInstance=new Chart(s,e)}catch(c){console.error("Error render automático en editor:",c)}return}let l=null;e.source==="table"&&e.tableId&&(l=document.querySelector(`editor-table[field-id="${e.tableId}"]`));const{labels:a,datasets:i}=_.processData(e,l);if(!i.length)return;const r=["pie","doughnut","radar","polarArea"].includes(e.type)?e.type:e.type==="line"||e.type==="area"?"line":"bar",u=e.type==="bar"?"y":"x",n=_.buildOptions(e,i,u,"editor");try{this.chartInstance=new Chart(s,{type:r,data:{labels:a,datasets:i},options:n})}catch(c){console.error("Error render editor:",c)}}_getColorPickerHTML(t,e){const s=["primary","success","warning","danger","info","secondary","dark"],o=t||s[e%6];let l='<div class="d-flex flex-wrap gap-1" style="width: 110px;">';return l+=`<button type="button" class="btn btn-sm w-100 mb-1 bg-light color-swatch ${t?"border text-muted":"border-primary text-primary fw-bold"}" data-val="" style="font-size: 0.75rem;">Rotación Auto</button>`,s.forEach(i=>{l+=`
            <button type="button" class="btn p-0 color-swatch ${t===i?"border-dark shadow-sm":"border-0"}" data-val="${i}" 
                    style="width: 24px; height: 24px; background-color: var(--bs-${i}); border-radius: 4px;" 
                    title="${i}">
            </button>`}),l+="</div>",`
        <button class="btn border dropdown-toggle px-2 bg-white d-flex align-items-center" type="button" data-bs-toggle="dropdown" title="Color de la serie" style="min-width: 45px; justify-content: center;">
            <span class="d-inline-block rounded-circle shadow-sm" style="width: 14px; height: 14px; background-color: var(--bs-${o});"></span>
        </button>
        <div class="dropdown-menu p-2 shadow-sm">
            ${l}
        </div>
    `}_openConfigModal(t){var r;this._tempConfig=JSON.parse(JSON.stringify(t)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const e=`modal-chart-${this.id}`;(r=document.getElementById(e))==null||r.remove();const s=`
      <div class="modal fade" id="${e}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-chart-simple me-2"></i>Configurar Gráfico</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body bg-light p-4">
                
                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Tipo de Gráfico</label>
                        <select class="form-select form-select-sm" id="cfg-type-${this.id}">
                          <option value="column">Columnas (Vertical)</option>
                          <option value="bar">Barras (Horizontal)</option>
                          <option value="line">Líneas</option>
                          <option value="area">Área</option>
                          <option value="pie">Circular (Pie)</option>
                          <option value="doughnut">Dona (Doughnut)</option>
                          <option value="radar">Radar</option> <!-- 🚀 Nuevo -->
                          <option value="polarArea">Área Polar</option> <!-- 🚀 Nuevo -->
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Fuente de Datos</label>
                        <div class="btn-group w-100" role="group">
                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-manual-${this.id}" value="manual">
                            <label class="btn btn-outline-secondary btn-sm" for="src-manual-${this.id}"><i class="fa-solid fa-keyboard me-1"></i> Manual</label>
                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-table-${this.id}" value="table">
                            <label class="btn btn-outline-secondary btn-sm" for="src-table-${this.id}"><i class="fa-solid fa-table me-1"></i> Tabla</label>
                        </div>
                    </div>
                </div>
                <div id="cfg-area-${this.id}"></div>
                <hr>
                <div class="row g-2 mb-3 bg-white p-2 border rounded shadow-sm">
                    <div class="col-12"><label class="form-label small fw-bold text-primary mb-0"><i class="fa-solid fa-arrows-up-down"></i> Ajuste Manual de Ejes (Opcional)</label></div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text bg-light" style="font-size:0.75rem;">Eje Izq. Min/Max</span>
                            <input type="number" class="form-control" id="cfg-yl-min-${this.id}" placeholder="Auto" value="${this._tempConfig.yLeftMin||""}">
                            <input type="number" class="form-control" id="cfg-yl-max-${this.id}" placeholder="Auto" value="${this._tempConfig.yLeftMax||""}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text bg-light" style="font-size:0.75rem;">Eje Der. Min/Max</span>
                            <input type="number" class="form-control" id="cfg-yr-min-${this.id}" placeholder="Auto" value="${this._tempConfig.yRightMin||""}">
                            <input type="number" class="form-control" id="cfg-yr-max-${this.id}" placeholder="Auto" value="${this._tempConfig.yRightMax||""}">
                        </div>
                    </div>
                </div>


            </div>
            <div class="modal-footer p-2 bg-light">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success btn-sm px-4" id="btn-save-${this.id}">
                    <i class="fa-solid fa-check me-1"></i> Guardar Configuración
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",s);const o=document.getElementById(e),l=new bootstrap.Modal(o),a=document.getElementById(`cfg-type-${this.id}`);a.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),a.onchange=u=>{this._tempConfig.type=u.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(u=>u.onchange=n=>{this._tempConfig.source=n.target.value,this._tempConfig.series=[],this._renderDynamicArea(n.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._tempConfig.yLeftMin=document.getElementById(`cfg-yl-min-${this.id}`).value,this._tempConfig.yLeftMax=document.getElementById(`cfg-yl-max-${this.id}`).value,this._tempConfig.yRightMin=document.getElementById(`cfg-yr-min-${this.id}`).value,this._tempConfig.yRightMax=document.getElementById(`cfg-yr-max-${this.id}`).value,this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),l.hide()},o.addEventListener("hidden.bs.modal",()=>o.remove()),l.show()}_renderDynamicArea(t){const e=document.getElementById(`cfg-area-${this.id}`);e.innerHTML="",t==="manual"?this._renderManualConfig(e):this._renderTableConfig(e)}_renderManualConfig(t){const e=this._tempConfig.type==="pie"||this._tempConfig.type==="doughnut";t.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Etiquetas (Eje X) / Categorías</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" 
                   id="input-labels-${this.id}" value="${this._tempConfig.manualLabels||""}" placeholder="Ej: Enero, Febrero, Marzo">
            <div class="form-text small">Separadas por coma.</div>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label small fw-bold mb-0">Series de Datos</label>
            ${!e||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar Serie</button>`:""}
        </div>
        <div id="series-list-${this.id}" class="d-flex flex-column gap-2"></div>
    `;const s=t.querySelector(`#series-list-${this.id}`);(()=>{s.innerHTML="",this._tempConfig.series.forEach((a,i)=>{const r=`
          <option value="" ${a.type?"":"selected"}>Heredar</option>
          <option value="bar" ${a.type==="bar"?"selected":""}>Barra</option>
          <option value="line" ${a.type==="line"?"selected":""}>Línea</option>
          <option value="area" ${a.type==="area"?"selected":""}>Área</option> <!-- 🚀 Nueva opción mixta -->
        `,u=`
            <option value="y" ${!a.yAxisID||a.yAxisID==="y"?"selected":""}>Eje: Izq</option>
            <option value="y1" ${a.yAxisID==="y1"?"selected":""}>Eje: Der</option>
        `,n=document.createElement("div");n.className="input-group input-group-sm mb-1",n.innerHTML=`
                <input autocomplete="off" spellcheck="false" type="text" class="form-control sel-name" placeholder="Nombre Serie" value="${a.name||""}">
                <input autocomplete="off" spellcheck="false" type="text" class="form-control sel-data w-25" placeholder="Valores..." value="${a.data||""}">
                
                <!-- 👇 INYECCIÓN DEL COLOR PICKER 👇 -->
                ${this._getColorPickerHTML(a.color,i)}
                
                <select class="form-select text-secondary sel-type" style="max-width: 85px;" title="Tipo de gráfico">${r}</select>
                <select class="form-select text-secondary sel-axis" style="max-width: 85px;" title="Eje secundario">${u}</select>
                <button class="btn btn-outline-danger btn-del-serie" title="Eliminar serie"><i class="fa-solid fa-trash"></i></button>
            `,n.querySelector(".sel-name").oninput=c=>this._tempConfig.series[i].name=c.target.value,n.querySelector(".sel-data").oninput=c=>this._tempConfig.series[i].data=c.target.value,n.querySelector(".sel-type").onchange=c=>this._tempConfig.series[i].type=c.target.value,n.querySelector(".sel-axis").onchange=c=>this._tempConfig.series[i].yAxisID=c.target.value,n.querySelectorAll(".color-swatch").forEach(c=>{c.onclick=g=>{g.preventDefault(),this._tempConfig.series[i].color=c.getAttribute("data-val"),this._renderDynamicArea("manual")}}),n.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(i,1),this._renderDynamicArea("manual")},s.appendChild(n)})})();const l=t.querySelector(`#btn-add-serie-${this.id}`);l&&(l.onclick=()=>{this._tempConfig.series.push({name:e?"Datos":"",data:""}),this._renderDynamicArea("manual")}),t.querySelector(`#input-labels-${this.id}`).oninput=a=>{this._tempConfig.manualLabels=a.target.value}}_renderTableConfig(t){const e=document.getElementById("document-canvas"),s=Array.from(e.querySelectorAll("editor-table"));if(s.length===0){t.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let o='<option value="">-- Seleccionar Tabla --</option>';s.forEach(i=>{let r=i.getAttribute("title")||`Tabla ${i.getAttribute("field-id")}`;if(i.getData){const n=i.getData();n.title&&(r=n.title)}const u=this._tempConfig.tableId===i.getAttribute("field-id")?"selected":"";o+=`<option value="${i.getAttribute("field-id")}" ${u}>${r}</option>`}),t.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">${o}</select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const l=t.querySelector(`#select-table-${this.id}`),a=()=>{const i=this._tempConfig.tableId,r=t.querySelector(`#table-cols-area-${this.id}`);if(r.innerHTML="",!i)return;const u=s.find(d=>d.getAttribute("field-id")===i);if(!u||!u.columns)return;const n=u.columns,c=n.filter(d=>["setting-number","setting-currency","setting-percentage"].includes(d.tag));let g='<option value="">-- (Fila #) --</option>';n.forEach(d=>{const b=this._tempConfig.labelColumnId===d.id?"selected":"";g+=`<option value="${d.id}" ${b}>${d.title}</option>`}),r.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">${g}</select>
            </div>
        `;const v=this._tempConfig.type==="pie";r.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!v||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const p=r.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((d,b)=>{let C='<option value="">-- Columna --</option>';c.forEach(m=>{const y=d.columnId===m.id?"selected":"";C+=`<option value="${m.id}" ${y}>${m.title}</option>`});const x=`
            <option value="" ${d.type?"":"selected"}>Heredar</option>
            <option value="bar" ${d.type==="bar"?"selected":""}>Barra</option>
            <option value="line" ${d.type==="line"?"selected":""}>Línea</option>
            <option value="area" ${d.type==="area"?"selected":""}>Área</option>
        `,w=`
            <option value="y" ${!d.yAxisID||d.yAxisID==="y"?"selected":""}>Eje: Izq</option>
            <option value="y1" ${d.yAxisID==="y1"?"selected":""}>Eje: Der</option>
        `,f=document.createElement("div");f.className="input-group input-group-sm mb-1",f.innerHTML=`
                <span class="input-group-text bg-white px-2"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select sel-col" title="Columna de la tabla">${C}</select>
                
                <!-- 👇 INYECCIÓN DEL COLOR PICKER 👇 -->
                ${this._getColorPickerHTML(d.color,b)}

                <select class="form-select text-secondary sel-type" style="max-width: 85px;" title="Tipo de gráfico mixto">${x}</select>
                <select class="form-select text-secondary sel-axis" style="max-width: 85px;" title="Eje secundario">${w}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `,f.querySelector(".sel-col").onchange=m=>{const y=m.target.value,$=c.find(A=>A.id===y);this._tempConfig.series[b].columnId=y,this._tempConfig.series[b].name=$?$.title:"Serie "+(b+1)},f.querySelector(".sel-type").onchange=m=>this._tempConfig.series[b].type=m.target.value,f.querySelector(".sel-axis").onchange=m=>this._tempConfig.series[b].yAxisID=m.target.value,f.querySelectorAll(".color-swatch").forEach(m=>{m.onclick=y=>{y.preventDefault(),this._tempConfig.series[b].color=m.getAttribute("data-val"),this._renderDynamicArea("table")}}),f.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(b,1),a()},p.appendChild(f)});const h=r.querySelector(`#btn-add-tbl-serie-${this.id}`);h&&(h.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),a()}),r.querySelector(`#select-label-col-${this.id}`).onchange=d=>{this._tempConfig.labelColumnId=d.target.value}};this._tempConfig.tableId&&a(),l.onchange=i=>{this._tempConfig.tableId=i.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",a()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const t=document.getElementById(`input-labels-${this.id}`);t&&(this._tempConfig.manualLabels=t.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const t=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(t&&t.rows){if(this._tempConfig.labelColumnId){const e=t.rows.map(s=>{const o=s.find(l=>l.fieldId===this._tempConfig.labelColumnId);return o?String(o.value).replace(/,/g," "):""});this._tempConfig.manualLabels=e.join(", ")}else this._tempConfig.manualLabels=t.rows.map((e,s)=>s+1).join(", ");this._tempConfig.series.forEach(e=>{const s=t.rows.map(o=>{const l=o.find(i=>i.fieldId===e.columnId),a=String(l?l.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(a)||0});e.data=s.join(", ")})}}}}customElements.define("editor-chart",I);export{I as EditorChart};
