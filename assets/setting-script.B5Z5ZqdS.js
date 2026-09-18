import{B as C,d as D}from"./BaseElement.D4tveIlI.js";import{b as A,T as I,j as T,k as L,e as h,U as y,i as N}from"./Elements.BsmmG6jM.js";import{S as w}from"./main.BDcaNCsR.js";import"./FormulaEngine.CYGke5JL.js";import"./preload-helper.B26yNZZz.js";const R={getComponentsHierarchy(){const f=[],e=document.getElementById("designer-canvas");if(!e)return f;try{Array.from(e.querySelectorAll(".designer-item-wrapper")).forEach(s=>{const n=s.querySelector("#comp-content"),r=n?n.firstElementChild:null;if(r&&typeof r.getData=="function"){const o=r.getData();if(!o.id||A(o)||r.tagName.toLowerCase()===I.section||A(o)||r.tagName.toLowerCase()===I.subsection)return;const b=T(o.tag||r),u=L(o.tag||r,{icon:"🏷️",longLabel:"Componente",color:"secondary"}),g={id:o.id,title:o.title||o.text||"Sin título",icon:u.icon,typeKey:b,typeLabel:u.longLabel,color:u.color,children:[]};b==="table"&&Array.isArray(o.columns)&&o.columns.forEach(l=>{if(l.id){const p=l.tag?T(l.tag):"string",m=h[p]||{icon:"🏷️",longLabel:"Columna",color:"secondary"};g.children.push({id:l.id,title:l.title||"Sin título",icon:m.icon,typeKey:p,typeLabel:m.longLabel,color:m.color})}}),f.push(g)}})}catch(t){console.warn("Error al construir la jerarquía de componentes desde getData().",t)}return f}},E=D("script","scriptCode"),O=f=>{var e;return((e=h[f])==null?void 0:e.aiPrompt)||"No hay reglas específicas."};function x(){return`=== API DISPONIBLE DENTRO DE TU CÓDIGO (doc / row) ===
Tu código corre como el CUERPO de una función async con "doc" y "row" ya inyectados como parámetros — no los declares (nada de "function(doc,row){"), usa directamente sus métodos. Puedes usar "await" libremente (doc.lib/doc.api/doc.servicio son asíncronos).

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
`}class $ extends C{static get observedAttributes(){return[...super.observedAttributes,"trigger","script-code","dependencies"]}getData(){const e=super.getData();e.trigger=this.getAttribute("trigger")||"reactive",e.scriptCode=this.getAttribute("script-code")||"";try{e.dependencies=JSON.parse(this.getAttribute("dependencies")||"[]")}catch{e.dependencies=[]}return e}setData(e){super.setData(e),e.trigger&&this.setAttribute("trigger",e.trigger),e.scriptCode&&this.setAttribute("script-code",e.scriptCode),e.dependencies&&this.setAttribute("dependencies",JSON.stringify(e.dependencies))}render(){const e=this.getAttribute("title")||"Nuevo Script",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents();const s=this.querySelector('input[data-prop="title"]');s&&(s.oninput=n=>{this._isInternalUpdate=!0,this.setAttribute("title",n.target.value),this._isInternalUpdate=!1,n.target.classList.toggle("is-invalid",n.target.value.trim()==="")})}_extractDependencies(e){const t=/(?:doc|row)\.getValue\(\s*['"]([^'"]+)['"]\s*\)/g,s=new Set;let n;for(;(n=t.exec(e))!==null;)s.add(n[1]);const r=Array.from(s);this.setAttribute("dependencies",JSON.stringify(r))}async _copyAIPrompt(){const e=document.getElementById(`ai-idea-${this.id}`),t=document.getElementById(`btn-copy-ai-${this.id}`),s=e?e.value.trim():"";if(!s){alert("Por favor, describe qué deseas hacer en el campo de texto."),e.focus();return}const n=this._buildAiSuperPromptText(s);if(await y.copyTextSmart(n,"Prompt del Script")==="modal")return;this._aiPromptCopied=!0,this._lastAiIdea=s;const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-check me-1"></i> ¡Copiado!',t.classList.replace("btn-info","btn-success"),window.DialogService&&window.DialogService.toast&&window.DialogService.toast("Prompt copiado. Pégalo en tu IA para iniciar el análisis.","success"),setTimeout(()=>{document.body.contains(t)&&(t.innerHTML=o,t.classList.replace("btn-success","btn-info"))},3e3),e.value=""}_buildAiSuperPromptText(e){var i,d;const t=R.getComponentsHierarchy();let s="";t.forEach(a=>{const c=O(a.typeKey);s+=`- ID: '${a.id}' (Tipo: ${a.typeLabel})
  Reglas Técnicas: ${c}
`,a.children&&a.children.length>0&&a.children.forEach(v=>{const S=O(v.typeKey);s+=`  - Sub-campo/Fila: '${v.id}' (Tipo: ${v.typeLabel})
    Reglas Técnicas: ${S}
`})});const n=((i=document.getElementById(E))==null?void 0:i.value.trim())||"",r=n?`
CÓDIGO ACTUAL (Modifícalo según el requerimiento, no lo rompas):
${n}
`:`
CREA UN SCRIPT NUEVO.
`,o=h.script.aiPrompt,b=`
ALTERNATIVA MÁS SIMPLE — EVALÚALA ANTES DE ESCRIBIR CÓDIGO: si lo que este campo necesita es solo el resultado de una operación simple (matemática, de texto o condicional) sobre OTROS campos del mismo documento o de la misma fila — ej. "total = cantidad × precio", "estado según un umbral", "nombre completo = nombre + apellido" — probablemente NO hace falta un script. Este mismo campo tiene su propia pestaña "Fórmula" (motor tipo Excel): referencias @{id_de_otro_campo}, operadores + - * / & = <> < > <= >=, y las funciones SI/SI.ERROR/Y/O/NO/SUMA/PROMEDIO/CONTAR/MAX/MIN/REDONDEAR/CONCATENAR/MAYUSCULAS/MINUSCULAS/LARGO/IZQUIERDA/DERECHA/EXTRAE/HOY/AÑO/MES/DIA/DIAS — sin escribir ni una línea de JavaScript. Solo está disponible en campos de tipo Texto Corto/Teléfono/Correo/Contraseña, Número/Moneda/Porcentaje y Fecha/Hora (NO en Texto Largo, Lista Desplegable, Casilla, Tabla, Gráfico ni en otro Script), y no puede recorrer/filtrar una tabla completa (nada de BUSCAR ni SUMAR.SI/PROMEDIO.SI/CONTAR.SI). Si el requerimiento encaja y el tipo del campo lo permite, dilo en la FASE 1 y sugiere usar "Fórmula" en vez de un script; sigue con el código SOLO si el usuario confirma que de verdad necesita el script (porque además debe recorrer una tabla completa, sincronizar las opciones de una lista, automatizar un gráfico, llamar un servicio externo, o afectar varios campos a la vez).
`,u=x(),l=!!((d=document.getElementById(`ai-attach-detail-${this.id}`))!=null&&d.checked)?`

NOTA: Se adjunta un archivo de texto con esta misma referencia de la API, por si tu plan de IA admite adjuntos y prefieres consultarla ahí en vez de aquí en el prompt.`:"",p=this.hasAttribute("es-servicio")?`
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
Tu respuesta en esta fase debe contener ÚNICAMENTE el bloque de código JavaScript puro. NO uses markdown (ni \`\`\`javascript), no expliques el código, no incluyas etiquetas HTML. Solo el texto plano listo para copiar y pegar.${l}

${r}
${b}
REGLAS GLOBALES DEL MOTOR DE SCRIPTING:
${o}
${u}${p}
DICCIONARIO DE DATOS EN LA PLANTILLA Y REGLAS ESPECÍFICAS DE CADA CAMPO:
${s||"(No hay variables de datos disponibles)"}
REQUERIMIENTO DEL USUARIO:
"${e}"`}async _resyncAiClipboard(){if(!this._aiPromptCopied||!this._lastAiIdea)return;const e=this._buildAiSuperPromptText(this._lastAiIdea);await y.copyTextSmart(e,"Prompt del Script")!=="modal"&&window.DialogService&&window.DialogService.toast&&window.DialogService.toast("🔄 Prompt actualizado en el portapapeles (cambió la opción de archivo adjunto).","info")}_downloadAiReference(){y.downloadTextFile("doc-engine-referencia-scripting-api.txt",x()),window.DialogService&&window.DialogService.toast&&window.DialogService.toast("Referencia descargada.","success")}async _openServiceSelector(){var n;const e=`modal-selector-${this.id}`;(n=document.getElementById(e))==null||n.remove(),document.body.insertAdjacentHTML("beforeend",`
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
    `);const t=document.getElementById(e),s=new bootstrap.Modal(t);s.show(),t.addEventListener("hidden.bs.modal",()=>t.remove());try{const[r,o]=await Promise.all([w.getAll("doc"),w.getAll("tpl")]),b={};o.forEach(i=>b[i.id]=i);const u=[];r.forEach(i=>{const d=b[i.templateId];if(!d||!d.elements)return;const a=d.elements.filter(c=>N(c)&&c.esServicio);a.length>0&&u.push({doc:i,tplTitle:d.title,servicios:a})});const g=document.getElementById(`${e}-body`);if(u.length===0){g.innerHTML='<div class="alert alert-warning small mb-0">No se encontraron documentos que contengan scripts marcados como Servicio.</div>';return}g.innerHTML=`
        <div class="mb-3">
          <label class="form-label small fw-bold text-muted">1. Documento Destino</label>
          <select class="form-select form-select-sm" id="${e}-doc">
            <option value="">Seleccione un documento...</option>
            ${u.map((i,d)=>`<option value="${d}">${i.doc.title||"Sin Título"} (Plantilla: ${i.tplTitle})</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label small fw-bold text-muted">2. Servicio a Invocar</label>
          <select class="form-select form-select-sm" id="${e}-script" disabled>
            <option value="">Primero seleccione un documento...</option>
          </select>
        </div>
        <button class="btn btn-primary btn-sm w-100 fw-bold" id="${e}-btn-insert" disabled>Insertar Código</button>
      `;const l=document.getElementById(`${e}-doc`),p=document.getElementById(`${e}-script`),m=document.getElementById(`${e}-btn-insert`);l.onchange=()=>{const i=l.value;if(i===""){p.innerHTML='<option value="">Primero seleccione un documento...</option>',p.disabled=!0,m.disabled=!0;return}const d=u[parseInt(i)];p.innerHTML=d.servicios.map(a=>`<option value="${a.id}">${a.title||a.id} (${a.servicioDescripcion||"Sin descripción"})</option>`).join(""),p.disabled=!1,m.disabled=!1},m.onclick=()=>{const i=u[parseInt(l.value)].doc.id,d=p.value,a=`
const resp = await doc.servicio('${i}.${d}').get({ /* cuerpo */ });
`,c=document.getElementById(E);if(c.selectionStart||c.selectionStart===0){const v=c.selectionStart,S=c.selectionEnd;c.value=c.value.substring(0,v)+a+c.value.substring(S,c.value.length),c.selectionStart=v+a.length,c.selectionEnd=v+a.length}else c.value+=a;c.dispatchEvent(new Event("input",{bubbles:!0})),s.hide()}}catch(r){document.getElementById(`${e}-body`).innerHTML=`<div class="alert alert-danger small mb-0">Error al cargar: ${r.message}</div>`}}_openServiceTester(){var r;const e=`modal-tester-${this.id}`;(r=document.getElementById(e))==null||r.remove(),document.body.insertAdjacentHTML("beforeend",`
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
    `);const t=document.getElementById(e);new bootstrap.Modal(t).show(),t.addEventListener("hidden.bs.modal",()=>t.remove());const n=document.getElementById(`${e}-btn-run`);n.onclick=async()=>{const o=document.getElementById(`${e}-result`),b=document.getElementById(`${e}-verbo`).value,u=document.getElementById(`${e}-cuerpo`).value||"{}";let g;try{g=JSON.parse(u)}catch(l){o.className="bg-dark text-danger p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=`Error de JSON en el cuerpo:
${l.message}`;return}o.className="bg-dark text-warning p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent="Ejecutando...";try{const l=document.getElementById(E).value,p=document.createElement("editor-script"),m=document.getElementById("designer-canvas")||document,{docContext:i}=p._buildContexts(m);i.verbo=b,i.cuerpo=g;const d=p._prepareFinalScript(l),a=Object.getPrototypeOf(async function(){}).constructor,c=await new a("doc","row",d)(i,null);o.className="bg-dark text-success p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=JSON.stringify(c,null,2)}catch(l){o.className="bg-dark text-danger p-2 rounded small overflow-auto font-monospace shadow-inner",o.textContent=`Excepción en el código:
${l.stack||l.message}`}}}}customElements.define("setting-script",$);export{$ as SettingScript};
