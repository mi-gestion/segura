import{B as E}from"./BaseElement.BIf2Qi2B.js";import{E as S}from"./main.UAgaLVqA.js";import{e as l}from"./Utils.2v3ifB9J.js";import"./modulepreload-polyfill.B5Qt9EMX.js";import"./firebase-init.D5QOG0FW.js";class x extends E{static get observedAttributes(){return[...super.observedAttributes,"trigger","script-code","dependencies"]}getData(){const e=super.getData();e.trigger=this.getAttribute("trigger")||"reactive",e.scriptCode=this.getAttribute("script-code")||"";try{e.dependencies=JSON.parse(this.getAttribute("dependencies")||"[]")}catch{e.dependencies=[]}return e}setData(e){super.setData(e),e.trigger&&this.setAttribute("trigger",e.trigger),e.scriptCode&&this.setAttribute("script-code",e.scriptCode),e.dependencies&&this.setAttribute("dependencies",JSON.stringify(e.dependencies))}render(){const e=this.getAttribute("title")||"Nuevo Script",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
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
    `,this.bindSettingsEvents();const a=this.querySelector('input[data-prop="title"]');a&&(a.oninput=s=>{this._isInternalUpdate=!0,this.setAttribute("title",s.target.value),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",s.target.value.trim()==="")})}getCustomSettingsHTML(){const e=this.getAttribute("trigger")||"reactive",t=this.getAttribute("script-code")||"",a=this.getAttribute("dependencies")||"[]";let s=[];try{s=JSON.parse(a)}catch{}const o=s.length>0?s.join(", "):"Ninguna";return`
      <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-microchip me-2"></i>Lógica y Ejecución</h6>
      <div class="bg-white p-3 border rounded shadow-sm">
        
        <div class="mb-3">
            <label class="form-label small fw-bold text-dark mb-1">Gatillo (Ejecución)</label>
            <select class="form-select form-select-sm" id="modal-trigger-${this.id}">
                <option value="reactive" ${e==="reactive"?"selected":""}>Reactivo (Por Dependencias)</option>
                <option value="manual" ${e==="manual"?"selected":""}>Manual (Botón en Editor)</option>
                <option value="auto" ${e==="auto"?"selected":""}>Automático (Al Iniciar)</option>
                <option value="library" ${e==="library"?"selected":""}>Librería (Módulo de Funciones)</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label small fw-bold text-dark mb-1">Código JavaScript</label>
            <textarea class="form-control font-monospace small text-bg-dark text-light border-0 shadow-inner" 
                      rows="6" id="modal-script-code-${this.id}" spellcheck="false" 
                      placeholder="doc.setValue('total', doc.getValue('cant') * doc.getValue('precio'));">${t}</textarea>
        </div>
        
        <div class="p-3 bg-info bg-opacity-10 border border-info rounded mb-2 shadow-sm">
            <label class="form-label small fw-bold text-info mb-2">
                <i class="fa-solid fa-wand-magic-sparkles me-1"></i> Asistente de Código IA
            </label>
            
            <div class="input-group">
                <textarea id="ai-idea-${this.id}" class="form-control border-info" rows="2" 
                          placeholder="Describe la lógica detalladamente. Ej: Suma cantidad y precio, ponlo en rojo si pasa de 100..." 
                          spellcheck="false"></textarea>
                <button type="button" class="btn btn-info text-white fw-bold px-3 text-center" id="btn-copy-ai-${this.id}"
                        onclick="document.getElementById('${this.id}')._copyAIPrompt()">
                    <i class="fa-regular fa-copy d-block mb-1 fs-5"></i> Copiar<br>Prompt
                </button>
            </div>
            
            <div class="form-text small text-info mt-2" style="font-size: 0.75rem;">
                <strong>Instrucciones:</strong> Describe la lógica y haz clic en copiar. Pega el texto en tu IA (ChatGPT, Claude, Gemini). Analiza su respuesta y, cuando genere el código final, cópialo en el recuadro negro de arriba.
            </div>
        </div>

        <div class="form-text small mt-3">
            <i class="fa-solid fa-diagram-project text-muted me-1"></i> Dependencias actuales: 
            <span class="fw-bold text-primary ms-1">${o}</span>
        </div>
        <div class="form-text small text-muted mt-1 border-top pt-2">
            Las dependencias se escanearán y actualizarán automáticamente al Guardar.
        </div>
      </div>
    `}saveCustomSettings(){const e=document.getElementById(`modal-trigger-${this.id}`),t=document.getElementById(`modal-script-code-${this.id}`);if(e&&this.setAttribute("trigger",e.value),t){const a=t.value;this.setAttribute("script-code",a),this._extractDependencies(a)}}_extractDependencies(e){const t=/(?:doc|row)\.getValue\(\s*['"]([^'"]+)['"]\s*\)/g,a=new Set;let s;for(;(s=t.exec(e))!==null;)a.add(s[1]);const o=Array.from(a);this.setAttribute("dependencies",JSON.stringify(o))}async _copyAIPrompt(){var b;const e=document.getElementById(`ai-idea-${this.id}`),t=document.getElementById(`btn-copy-ai-${this.id}`),a=e?e.value.trim():"";if(!a){alert("Por favor, describe qué deseas hacer en el campo de texto."),e.focus();return}const s=i=>{for(const n in l)if(l[n].longLabel===i)return l[n].aiPrompt||"No hay reglas específicas.";return"No hay reglas específicas."},o=S.getComponentsHierarchy();let r="";o.forEach(i=>{const n=s(i.typeLabel);r+=`- ID: '${i.id}' (Tipo: ${i.typeLabel})
  Reglas Técnicas: ${n}
`,i.children&&i.children.length>0&&i.children.forEach(p=>{const y=s(p.typeLabel);r+=`  - Sub-campo/Fila: '${p.id}' (Tipo: ${p.typeLabel})
    Reglas Técnicas: ${y}
`})});const c=document.getElementById("designer-canvas");let d=[];if(c&&c.getAttribute("data-etl-config"))try{d=JSON.parse(c.getAttribute("data-etl-config")).sources||[]}catch{}const f=d.length>0?`
FUENTES EXTERNAS DISPONIBLES:
${d.map(i=>`- ID: '@{${i.id}}' (Método: ${i.method||"GET"})`).join(`
`)}
`:"",u=((b=document.getElementById(`modal-script-code-${this.id}`))==null?void 0:b.value.trim())||"",h=u?`
CÓDIGO ACTUAL (Modifícalo según el requerimiento, no lo rompas):
${u}
`:`
CREA UN SCRIPT NUEVO.
`,m=document.getElementById(`modal-trigger-${this.id}`),g=m?m.value:this.getAttribute("trigger")||"reactive",v=l.script.aiPrompt,A=`Actúa como un Desarrollador Senior de JavaScript experto en reportes dinámicos.
Vamos a trabajar en DOS FASES para crear o modificar una lógica de negocio.

=== FASE 1: ANÁLISIS Y ACLARATORIA ===
1. Analiza el requerimiento del usuario basándote en el diccionario de variables, los tipos de datos y las reglas técnicas de los componentes.
2. Explícale al usuario en lenguaje natural, claro y sencillo, cómo planeas hacer el cálculo, la asignación o el cambio de estilos dinámicos.
3. Si la lógica está clara, haz una pregunta de confirmación. Si notas ambigüedades, haz las preguntas necesarias para afinar los detalles.
4. NO GENERES EL CÓDIGO TODAVÍA.

=== FASE 2: GENERACIÓN DE CÓDIGO ===
SOLO cuando el usuario te confirme la lógica, entregarás el código final.
Tu respuesta en esta fase debe contener ÚNICAMENTE el bloque de código JavaScript puro. NO uses markdown (ni \`\`\`javascript), no expliques el código, no incluyas etiquetas HTML. Solo el texto plano listo para copiar y pegar.

${h}
REGLAS GLOBALES DEL MOTOR DE SCRIPTING:
${v}
- DISPARADOR ACTUAL DE ESTE SCRIPT: "${g}". 
${g==="library"?"IMPORTANTE: Como es 'library', recuerda que solo debes definir las funciones y hacer el 'return { ... };' al final.":""}

DICCIONARIO DE DATOS EN LA PLANTILLA Y REGLAS ESPECÍFICAS DE CADA CAMPO:
${r||"(No hay variables de datos disponibles)"}
${f}
REQUERIMIENTO DEL USUARIO:
"${a}"`;try{await navigator.clipboard.writeText(A);const i=t.innerHTML;t.innerHTML='<i class="fa-solid fa-check me-1"></i> ¡Copiado!',t.classList.replace("btn-info","btn-success"),window.DialogService&&window.DialogService.toast&&window.DialogService.toast("Prompt copiado. Pégalo en tu IA para iniciar el análisis.","success"),setTimeout(()=>{document.body.contains(t)&&(t.innerHTML=i,t.classList.replace("btn-success","btn-info"))},3e3),e.value=""}catch(i){console.error("Error copiando el prompt",i),alert("Tu navegador bloqueó el acceso al portapapeles. Selecciona y copia manualmente.")}}}customElements.define("setting-script",x);export{x as SettingScript};
