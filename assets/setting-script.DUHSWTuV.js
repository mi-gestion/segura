import{B as C,d as L}from"./BaseElement.pPTaffjx.js";import{x as I,y as N,n as A,U as E}from"./preload-helper.BUfFKGiv.js";import{S as T}from"./main.BncWvLrk.js";import"./FormulaEngine.DHpTffcI.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./crypto-service.zPOJcvZe.js";const $={getComponentsHierarchy(){const f=[],e=document.getElementById("designer-canvas");if(!e)return f;try{Array.from(e.querySelectorAll(".designer-item-wrapper")).forEach(n=>{const i=n.querySelector("#comp-content"),a=i?i.firstElementChild:null;if(a&&typeof a.getData=="function"){const o=a.getData();if(!o.id||o.tag==="setting-section"||a.tagName.toLowerCase()==="setting-section"||o.tag==="setting-subsection"||a.tagName.toLowerCase()==="setting-subsection")return;const b=I(o.tag||a),p=N(o.tag||a,{icon:"🏷️",longLabel:"Componente",color:"secondary"}),g={id:o.id,title:o.title||o.text||"Sin título",icon:p.icon,typeKey:b,typeLabel:p.longLabel,color:p.color,children:[]};b==="table"&&Array.isArray(o.columns)&&o.columns.forEach(c=>{if(c.id){const d=c.tag?I(c.tag):"string",v=A[d]||{icon:"🏷️",longLabel:"Columna",color:"secondary"};g.children.push({id:c.id,title:c.title||"Sin título",icon:v.icon,typeKey:d,typeLabel:v.longLabel,color:v.color})}}),f.push(g)}})}catch(t){console.warn("Error al construir la jerarquía de componentes desde getData().",t)}return f}},h=L("script","scriptCode"),w=f=>{var e;return((e=A[f])==null?void 0:e.aiPrompt)||"No hay reglas específicas."};function O(){return`=== API DISPONIBLE DENTRO DE TU CÓDIGO (doc / row) ===
Tu código corre como el CUERPO de una función async con "doc", "row" y "sourcesData" ya inyectados como parámetros — no los declares (nada de "function(doc,row){"), usa directamente sus métodos. Puedes usar "await" libremente (doc.lib/doc.api/doc.servicio son asíncronos).

doc.getValue('id')                 -> lee el valor actual de CUALQUIER campo de la plantilla, por su ID.
doc.setValue('id', valor)          -> escribe el valor de un campo y refresca su visualización.
doc.setStyle('id', { color: 'red', ... }) -> aplica estilo dinámico a un campo (ej: resaltar en rojo si supera un límite).
doc.setOptions('id', ['A','B'])    -> reemplaza las opciones de un campo tipo Lista Desplegable (acepta arreglo o texto separado por comas).
doc.toast('mensaje', 'success')    -> notificación no bloqueante. Tipo: 'success' (default) o 'danger'; cualquier otro valor se muestra como informativo.
doc.alert('mensaje')               -> alerta BLOQUEANTE del navegador — úsala solo para errores que de verdad deban detener al usuario.
doc.lib('idOtroScript')            -> (await) ejecuta OTRO campo tipo Script cuyo Gatillo sea "Librería" y devuelve el objeto de funciones que ese script retorna (return {...}). Sirve para reutilizar lógica entre varios scripts.
doc.api('idComponenteApi')         -> (await) resuelve un campo tipo "Conector API" y devuelve { execute(payloadDinamico) } — cada .execute() dispara una petición HTTP nueva.
doc.servicio('idDocumento.idScript') -> devuelve { get(cuerpo), post(cuerpo), put(cuerpo), delete(cuerpo) }, todos asíncronos. Llama al script de OTRO documento YA GUARDADO (que tenga marcado "¿Es un Servicio?"), corriendo contra los datos guardados de ESE documento — no hace falta que esté abierto.

row.getValue/setValue/setStyle/setOptions -> MISMOS métodos que doc.*, pero limitados a la FILA ACTUAL. Solo tienen sentido cuando este script vive DENTRO de una columna de una Tabla Dinámica (para leer/escribir otra columna de la MISMA fila sin conocer su índice). Fuera de una tabla, usa doc en su lugar — row seguirá existiendo pero no apuntará a nada útil.

Ejecución: si tu código es una sola expresión simple (sin ";", sin let/const/if/for/return), se envuelve automáticamente en "return (...)". Para cualquier lógica real (asignaciones, doc.setValue, condicionales) escribe sentencias normales de JavaScript — no hace falta "return" salvo que este campo sea una Librería (ahí SÍ debe terminar en "return { funcion1, funcion2 };").
`}class R extends C{static get observedAttributes(){return[...super.observedAttributes,"trigger","script-code","dependencies"]}getData(){const e=super.getData();e.trigger=this.getAttribute("trigger")||"reactive",e.scriptCode=this.getAttribute("script-code")||"";try{e.dependencies=JSON.parse(this.getAttribute("dependencies")||"[]")}catch{e.dependencies=[]}return e}setData(e){super.setData(e),e.trigger&&this.setAttribute("trigger",e.trigger),e.scriptCode&&this.setAttribute("script-code",e.scriptCode),e.dependencies&&this.setAttribute("dependencies",JSON.stringify(e.dependencies))}render(){const e=this.getAttribute("title")||"Nuevo Script",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-dark shadow-sm overflow-hidden">
        <div class="card-header text-bg-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-code"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">Script Lógico</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Nombre del Script *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Calcular Subtotal">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents();const n=this.querySelector('input[data-prop="title"]');n&&(n.oninput=i=>{this._isInternalUpdate=!0,this.setAttribute("title",i.target.value),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",i.target.value.trim()==="")})}_extractDependencies(e){const t=/(?:doc|row)\.getValue\(\s*['"]([^'"]+)['"]\s*\)/g,n=new Set;let i;for(;(i=t.exec(e))!==null;)n.add(i[1]);const a=Array.from(n);this.setAttribute("dependencies",JSON.stringify(a))}async _copyAIPrompt(){const e=document.getElementById(`ai-idea-${this.id}`),t=document.getElementById(`btn-copy-ai-${this.id}`),n=e?e.value.trim():"";if(!n){alert("Por favor, describe qué deseas hacer en el campo de texto."),e.focus();return}const i=this._buildAiSuperPromptText(n);if(await E.copyTextSmart(i,"Prompt del Script")==="modal")return;this._aiPromptCopied=!0,this._lastAiIdea=n;const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-check me-1"></i> ¡Copiado!',t.classList.replace("btn-info","btn-success"),window.DialogService&&window.DialogService.toast&&window.DialogService.toast("Prompt copiado. Pégalo en tu IA para iniciar el análisis.","success"),setTimeout(()=>{document.body.contains(t)&&(t.innerHTML=o,t.classList.replace("btn-success","btn-info"))},3e3),e.value=""}_buildAiSuperPromptText(e){var s,S;const t=$.getComponentsHierarchy();let n="";t.forEach(m=>{const x=w(m.typeKey);n+=`- ID: '${m.id}' (Tipo: ${m.typeLabel})
  Reglas Técnicas: ${x}
`,m.children&&m.children.length>0&&m.children.forEach(y=>{const D=w(y.typeKey);n+=`  - Sub-campo/Fila: '${y.id}' (Tipo: ${y.typeLabel})
    Reglas Técnicas: ${D}
`})});const i=document.getElementById("designer-canvas");let a=[];if(i&&i.getAttribute("data-etl-config"))try{a=JSON.parse(i.getAttribute("data-etl-config")).sources||[]}catch{}const o=a.length>0?`
FUENTES EXTERNAS DISPONIBLES (ya resueltas, sin fetch/await):
${a.map(m=>`- '@{${m.id}}' (Método: ${m.method||"GET"})`).join(`
`)}
Escribe ese texto literal ("@{id}") en tu código donde necesites el dato — se reemplaza automáticamente por el resultado YA obtenido de esa fuente. NO uses fetch() ni await para estas: ya están resueltas antes de que tu código corra.
`:"",b=((s=document.getElementById(h))==null?void 0:s.value.trim())||"",p=b?`
CÓDIGO ACTUAL (Modifícalo según el requerimiento, no lo rompas):
${b}
`:`
CREA UN SCRIPT NUEVO.
`,g=A.script.aiPrompt,c=`
ALTERNATIVA MÁS SIMPLE — EVALÚALA ANTES DE ESCRIBIR CÓDIGO: si lo que este campo necesita es solo el resultado de una operación simple (matemática, de texto o condicional) sobre OTROS campos del mismo documento o de la misma fila — ej. "total = cantidad × precio", "estado según un umbral", "nombre completo = nombre + apellido" — probablemente NO hace falta un script. Este mismo campo tiene su propia pestaña "Fórmula" (motor tipo Excel): referencias @{id_de_otro_campo}, operadores + - * / & = <> < > <= >=, y las funciones SI/SI.ERROR/Y/O/NO/SUMA/PROMEDIO/CONTAR/MAX/MIN/REDONDEAR/CONCATENAR/MAYUSCULAS/MINUSCULAS/LARGO/IZQUIERDA/DERECHA/EXTRAE/HOY/AÑO/MES/DIA/DIAS — sin escribir ni una línea de JavaScript. Solo está disponible en campos de tipo Texto Corto/Teléfono/Correo/Contraseña, Número/Moneda/Porcentaje y Fecha/Hora (NO en Texto Largo, Lista Desplegable, Casilla, Tabla, Gráfico ni en otro Script), y no puede recorrer/filtrar una tabla completa (nada de BUSCAR ni SUMAR.SI/PROMEDIO.SI/CONTAR.SI). Si el requerimiento encaja y el tipo del campo lo permite, dilo en la FASE 1 y sugiere usar "Fórmula" en vez de un script; sigue con el código SOLO si el usuario confirma que de verdad necesita el script (porque además debe recorrer una tabla completa, sincronizar las opciones de una lista, automatizar un gráfico, llamar un servicio externo, o afectar varios campos a la vez).
`,d=O(),r=!!((S=document.getElementById(`ai-attach-detail-${this.id}`))!=null&&S.checked)?`

NOTA: Se adjunta un archivo de texto con esta misma referencia de la API, por si tu plan de IA admite adjuntos y prefieres consultarla ahí en vez de aquí en el prompt.`:"",u=this.hasAttribute("es-servicio")?`
=== ESTE CAMPO ESTÁ MARCADO COMO SERVICIO ===
Cuando OTRO documento lo invoque vía doc.servicio(), tu código corre en modo "headless" (sin lienzo visual), con esta diferencia respecto al modo normal:
- doc.verbo -> el verbo HTTP que usó quien llamó: 'get' | 'post' | 'put' | 'delete'. Úsalo para ramificar el comportamiento si este Servicio hace más de una cosa.
- doc.cuerpo -> el objeto JSON que envió quien llamó (ya parseado, no un string).
- doc.lib()/doc.api()/doc.servicio() NO están disponibles en este modo (aunque parezcan funcionar aquí en el lienzo de prueba del Diseñador) — no dependas de ellos si este código puede ejecutarse como Servicio real.
`:"";return`Actúa como un Desarrollador Senior de JavaScript experto en reportes dinámicos.
Vamos a trabajar en DOS FASES para crear o modificar una lógica de negocio.

=== FASE 1: ANÁLISIS Y ACLARATORIA ===
1. Analiza el requerimiento del usuario basándote en la API disponible, el diccionario de variables, los tipos de datos y las reglas técnicas de los componentes.
2. Explícale al usuario en lenguaje natural, claro y sencillo, cómo planeas hacer el cálculo, la asignación o el cambio de estilos dinámicos.
3. Si la lógica está clara, haz una pregunta de confirmación. Si notas ambigüedades, haz las preguntas necesarias para afinar los detalles.
4. NO GENERES EL CÓDIGO TODAVÍA.

=== FASE 2: GENERACIÓN DE CÓDIGO ===
SOLO cuando el usuario te confirme la lógica, entregarás el código final.
Tu respuesta en esta fase debe contener ÚNICAMENTE el bloque de código JavaScript puro. NO uses markdown (ni \`\`\`javascript), no expliques el código, no incluyas etiquetas HTML. Solo el texto plano listo para copiar y pegar.${r}

${p}
${c}
REGLAS GLOBALES DEL MOTOR DE SCRIPTING:
${g}
${d}${u}
DICCIONARIO DE DATOS EN LA PLANTILLA Y REGLAS ESPECÍFICAS DE CADA CAMPO:
${n||"(No hay variables de datos disponibles)"}
${o}
REQUERIMIENTO DEL USUARIO:
"${e}"`}async _resyncAiClipboard(){if(!this._aiPromptCopied||!this._lastAiIdea)return;const e=this._buildAiSuperPromptText(this._lastAiIdea);await E.copyTextSmart(e,"Prompt del Script")!=="modal"&&window.DialogService&&window.DialogService.toast&&window.DialogService.toast("🔄 Prompt actualizado en el portapapeles (cambió la opción de archivo adjunto).","info")}_downloadAiReference(){E.downloadTextFile("doc-engine-referencia-scripting-api.txt",O()),window.DialogService&&window.DialogService.toast&&window.DialogService.toast("Referencia descargada.","success")}async _openServiceSelector(){var i;const e=`modal-selector-${this.id}`;(i=document.getElementById(e))==null||i.remove(),document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="${e}" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-bg-dark py-2">
              <h6 class="modal-title"><i class="fa-solid fa-plug-circle-bolt text-primary me-2"></i>Seleccionar Servicio</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-3" id="${e}-body">
              <div class="text-center py-3"><div class="spinner-border text-primary spinner-border-sm"></div> Cargando documentos...</div>
            </div>
          </div>
        </div>
      </div>
    `);const t=document.getElementById(e),n=new bootstrap.Modal(t);n.show(),t.addEventListener("hidden.bs.modal",()=>t.remove());try{const[a,o]=await Promise.all([T.getAll("doc"),T.getAll("tpl")]),b={};o.forEach(r=>b[r.id]=r);const p=[];a.forEach(r=>{const u=b[r.templateId];if(!u||!u.elements)return;const l=u.elements.filter(s=>s.tag==="setting-script"&&s.esServicio);l.length>0&&p.push({doc:r,tplTitle:u.title,servicios:l})});const g=document.getElementById(`${e}-body`);if(p.length===0){g.innerHTML='<div class="alert alert-warning small mb-0">No se encontraron documentos que contengan scripts marcados como Servicio.</div>';return}g.innerHTML=`
        <div class="mb-3">
          <label class="form-label small fw-bold text-muted">1. Documento Destino</label>
          <select class="form-select form-select-sm" id="${e}-doc">
            <option value="">Seleccione un documento...</option>
            ${p.map((r,u)=>`<option value="${u}">${r.doc.title||"Sin Título"} (Plantilla: ${r.tplTitle})</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label small fw-bold text-muted">2. Servicio a Invocar</label>
          <select class="form-select form-select-sm" id="${e}-script" disabled>
            <option value="">Primero seleccione un documento...</option>
          </select>
        </div>
        <button class="btn btn-primary btn-sm w-100 fw-bold" id="${e}-btn-insert" disabled>Insertar Código</button>
      `;const c=document.getElementById(`${e}-doc`),d=document.getElementById(`${e}-script`),v=document.getElementById(`${e}-btn-insert`);c.onchange=()=>{const r=c.value;if(r===""){d.innerHTML='<option value="">Primero seleccione un documento...</option>',d.disabled=!0,v.disabled=!0;return}const u=p[parseInt(r)];d.innerHTML=u.servicios.map(l=>`<option value="${l.id}">${l.title||l.id} (${l.servicioDescripcion||"Sin descripción"})</option>`).join(""),d.disabled=!1,v.disabled=!1},v.onclick=()=>{const r=p[parseInt(c.value)].doc.id,u=d.value,l=`
const resp = await doc.servicio('${r}.${u}').get({ /* cuerpo */ });
`,s=document.getElementById(h);if(s.selectionStart||s.selectionStart===0){const S=s.selectionStart,m=s.selectionEnd;s.value=s.value.substring(0,S)+l+s.value.substring(m,s.value.length),s.selectionStart=S+l.length,s.selectionEnd=S+l.length}else s.value+=l;s.dispatchEvent(new Event("input",{bubbles:!0})),n.hide()}}catch(a){document.getElementById(`${e}-body`).innerHTML=`<div class="alert alert-danger small mb-0">Error al cargar: ${a.message}</div>`}}_openServiceTester(){var a;const e=`modal-tester-${this.id}`;(a=document.getElementById(e))==null||a.remove(),document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="${e}" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-bg-dark py-2">
              <h6 class="modal-title"><i class="fa-solid fa-flask text-warning me-2"></i>Probar Servicio Localmente</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-3">
              <div class="alert alert-info py-1 px-2 small mb-3">
                <i class="fa-solid fa-circle-info me-1"></i> <strong>doc.getValue()</strong> leerá los valores que tengas escritos en el lienzo de diseño actual detrás de esta ventana.
              </div>
              <div class="row mb-3">
                <div class="col-4">
                  <label class="form-label small fw-bold text-muted">Verbo HTTP</label>
                  <select class="form-select form-select-sm" id="${e}-verbo">
                    <option value="get">GET</option>
                    <option value="post">POST</option>
                    <option value="put">PUT</option>
                    <option value="delete">DELETE</option>
                  </select>
                </div>
                <div class="col-8">
                  <label class="form-label small fw-bold text-muted">doc.cuerpo (JSON válido)</label>
                  <textarea class="form-control form-control-sm font-monospace bg-light" id="${e}-cuerpo" rows="2">{}</textarea>
                </div>
              </div>
              <button class="btn btn-dark btn-sm w-100 fw-bold shadow-sm" id="${e}-btn-run">
                <i class="fa-solid fa-play text-warning me-2"></i>Ejecutar Código Actual
              </button>
              <hr class="my-3">
              <label class="form-label small fw-bold text-muted mb-1">Resultado (return)</label>
              <pre class="bg-dark text-success p-2 rounded small overflow-auto font-monospace shadow-inner" id="${e}-result" style="min-height: 80px;">Esperando ejecución...</pre>
            </div>
          </div>
        </div>
      </div>
    `);const t=document.getElementById(e);new bootstrap.Modal(t).show(),t.addEventListener("hidden.bs.modal",()=>t.remove());const i=document.getElementById(`${e}-btn-run`);i.onclick=async()=>{const o=document.getElementById(`${e}-result`),b=document.getElementById(`${e}-verbo`).value,p=document.getElementById(`${e}-cuerpo`).value||"{}";let g;try{g=JSON.parse(p)}catch(c){o.className="bg-dark text-danger p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=`Error de JSON en el cuerpo:
${c.message}`;return}o.className="bg-dark text-warning p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent="Ejecutando...";try{const c=document.getElementById(h).value,d=document.createElement("editor-script"),v=document.getElementById("designer-canvas")||document,{docContext:r}=d._buildContexts(v);r.verbo=b,r.cuerpo=g;const u=d._prepareFinalScript(d._compileScript(c)),l=Object.getPrototypeOf(async function(){}).constructor,s=await new l("doc","row","sourcesData",u)(r,null,{});o.className="bg-dark text-success p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=JSON.stringify(s,null,2)}catch(c){o.className="bg-dark text-danger p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=`Excepción en el código:
${c.stack||c.message}`}}}}customElements.define("setting-script",R);export{R as SettingScript};
