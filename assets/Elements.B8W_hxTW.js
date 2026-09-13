(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const te={masterKey:null,_masterPhrase:null,_keyCache:new Map,clearSession(){this.masterKey=null,this._masterPhrase=null,this._keyCache.clear()},_generateSalt(){return crypto.getRandomValues(new Uint8Array(16))},_cleanBase64(e){if(typeof e!="string")return"";let t=e.replace(/[\s\n\r]/g,"");for(t=t.replace(/-/g,"+").replace(/_/g,"/");t.length%4;)t+="=";return t},_bufferToBase64(e){let t="";const a=new Uint8Array(e);for(let o=0;o<a.byteLength;o++)t+=String.fromCharCode(a[o]);return btoa(t)},_base64ToUint8Array(e){const t=this._cleanBase64(e),a=atob(t),o=new Uint8Array(a.length);for(let r=0;r<a.length;r++)o[r]=a.charCodeAt(r);return o},async _deriveKey(e,t,a){const o=new TextEncoder,r=await crypto.subtle.importKey("raw",o.encode(e),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},r,{name:"AES-GCM",length:256},!1,a)},async generateKey(e,t=null){const a=t||this._generateSalt();return{key:await this._deriveKey(e,a,["encrypt","decrypt"]),salt:a}},async setMasterKey(e){this._masterPhrase=e;const{key:t,salt:a}=await this.generateKey(e);this.masterKey=t;const o=this._bufferToBase64(a);this._keyCache.set(o,t)},async encryptData(e){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");const t=new TextEncoder,a=crypto.getRandomValues(new Uint8Array(12)),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:a},this.masterKey,t.encode(JSON.stringify(e)));let r=null;for(const[i,l]of this._keyCache.entries())if(l===this.masterKey){r=i;break}return{ciphertext:this._bufferToBase64(o),iv:this._bufferToBase64(a),salt:r}},async decryptData(e){if(!e||!e.iv||!e.ciphertext)throw new Error("El objeto cifrado está incompleto o corrupto.");if(!e.salt)throw new Error("Este documento fue cifrado con una versión anterior de DocEngine y ya no es compatible. Guárdalo de nuevo para actualizar el formato de cifrado.");const t=this._cleanBase64(e.salt);let a=this._keyCache.get(t);if(!a){if(!this._masterPhrase)throw new Error("Frase maestra no inicializada.");const o=this._base64ToUint8Array(e.salt);a=await this._deriveKey(this._masterPhrase,o,["encrypt","decrypt"]),this._keyCache.set(t,a)}try{const o=this._base64ToUint8Array(e.iv),r=this._base64ToUint8Array(e.ciphertext),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:o},a,r);return JSON.parse(new TextDecoder().decode(i))}catch(o){throw o.name==="OperationError"||console.error("[CRYPTO] Fallo técnico al decodificar:",o),o}},async verifyPhrase(e,t){try{if(!t||!t.salt)return!1;const a=this._base64ToUint8Array(t.salt),o=await this._deriveKey(e,a,["decrypt"]),r=this._base64ToUint8Array(t.iv),i=this._base64ToUint8Array(t.ciphertext);return await crypto.subtle.decrypt({name:"AES-GCM",iv:r},o,i),!0}catch{return!1}},async encryptShared(e,t){const a=this._generateSalt(),o=await this._deriveKey(t,a,["encrypt"]),r=new TextEncoder,i=crypto.getRandomValues(new Uint8Array(12)),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:i},o,r.encode(JSON.stringify(e)));return{iv:this._bufferToBase64(i),content:this._bufferToBase64(l),salt:this._bufferToBase64(a)}},async decryptShared(e,t){if(!e||!e.iv||!e.content)throw new Error("El objeto cifrado está incompleto o corrupto.");if(!e.salt)throw new Error("Este documento fue cifrado con una versión anterior de DocEngine y ya no es compatible. Solicita al propietario que lo vuelva a compartir.");try{const a=this._base64ToUint8Array(e.salt),o=await this._deriveKey(t,a,["decrypt"]),r=this._base64ToUint8Array(e.iv),i=this._base64ToUint8Array(e.content),l=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},o,i);return JSON.parse(new TextDecoder().decode(l))}catch(a){throw a.name==="OperationError"?new Error("La llave de acceso es incorrecta o el enlace es inválido."):(console.error("[CRYPTO-SHARED] Fallo técnico al decodificar:",a),a)}}},A={icon:"📝",shortLabel:"Entrada",longLabel:"Entrada de Texto",spanEV:12,spanP:12,color:"secondary",settings:{customTitle:"Formato de Entrada",customIcon:"fa-keyboard",custom:[{id:"inputType",attr:"input-type",caption:"Tipo de Captura",type:"select",default:"text",mutatesLogicalKey:!0,options:[{label:"Texto Corto (Una línea)",value:"text",logicalKey:"string"},{label:"Teléfono",value:"tel",logicalKey:"string"},{label:"Texto Largo (Plano sin formato)",value:"textarea",logicalKey:"text"},{label:"Texto Largo (Enriquecido / HTML)",value:"richtext",logicalKey:"text"},{label:"Correo Electrónico",value:"email",logicalKey:"email"},{label:"Contraseña (Oculta)",value:"password",logicalKey:"password"}],onChange:{textarea:{maxLength:{configurable:!1},placeholderText:{configurable:!1}},richtext:{maxLength:{configurable:!1},placeholderText:{configurable:!1}},_default:{maxLength:{configurable:!0},placeholderText:{configurable:!0}}}},{id:"maxLength",attr:"max-length",caption:"Longitud Máxima",type:"number",default:"",help:"Vacío = sin límite. No aplica a Texto Largo."},{id:"placeholderText",attr:"placeholder-text",caption:"Texto Guía (Placeholder)",type:"text",default:"",placeholder:"Ej: Ingrese su nombre completo",help:"Vacío = el texto guía de siempre según el tipo elegido. No aplica a Texto Largo."}],width:!0,visibility:!0,style:!0,formula:e=>{const t=e.getAttribute("input-type")||"text";return t!=="textarea"&&t!=="richtext"}},aiPrompt:""},w={icon:"🗂️",shortLabel:"Divisor",longLabel:"Sección / Título",spanEV:12,spanP:12,color:"dark",settings:{custom:[{id:"level",attr:"section-level",caption:"Nivel Visual",type:"select",default:"1",mutatesLogicalKey:!0,options:[{label:"Nivel 1 (Sección Principal)",value:"1",logicalKey:"section"},{label:"Nivel 2 (Subsección / Subtítulo)",value:"2",logicalKey:"subsection"}],onChange:{1:{pageBreak:{configurable:!0}},_default:{pageBreak:{configurable:!1}}}},{id:"pageBreak",attr:"page-break",boolStyle:"presence",caption:"Forzar Salto de Página",type:"boolean",default:!1},{id:"lineStyle",attr:"line-style",caption:"Estilo de la Línea",type:"select",default:"",options:[{label:"Predeterminado",value:""},{label:"Sólida",value:"solid"},{label:"Punteada",value:"dashed"},{label:"Doble",value:"double"}]},{id:"thickness",attr:"thickness",caption:"Grosor de la Línea (px)",type:"number",default:"",help:"Vacío = grosor predeterminado."}],width:!1,visibility:["hideEdit","hideView","hidePrint","hideWhatsapp"],style:!1},aiPrompt:""},d={generateSemanticBaseId(e,t,a=15){let o=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"");o=o.replace(/\bimportada\b/gi,""),o=o.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase();let r=o.split(/\s+/).filter(l=>l.length>0);if(r.length===0&&(r=[e]),r.join("").length>20){const l=["la","las","lo","los","el","de","del"];r=r.filter(s=>!l.includes(s)),r.length===0&&(r=[e])}for(;r.join("").length>a;){let l=-1,s=-1;for(let n=0;n<r.length;n++)r[n].length>l&&(l=r[n].length,s=n);if(s!==-1)r[s]=r[s].slice(0,-1);else break}const i=r.map((l,s)=>s===0?l:l.charAt(0).toUpperCase()+l.slice(1)).join("");return`${e}_${i}`},formatNumericValue(e,t={}){const{decimals:a="",separators:o="auto",unit:r="",unitPosition:i="suffix"}=t;if(e==null||e==="")return null;const l=parseFloat(e);if(isNaN(l))return null;const s=a!==""&&a!==null&&a!==void 0,n=s?Number(a):void 0;let c;if(!s&&(!o||o==="auto"))c=String(e);else{const u=n!==void 0?{minimumFractionDigits:n,maximumFractionDigits:n}:{};switch(o){case",.":c=l.toLocaleString("es-ES",u);break;case".,":c=l.toLocaleString("en-US",u);break;case",":c=l.toFixed(n??2).replace(".",",");break;case".":c=l.toFixed(n??2);break;default:c=l.toLocaleString(void 0,u)}}return r?i==="prefix"?`${r} ${c}`:`${c} ${r}`:c},formatDateWithMask(e,t){if(!e)return null;const a=new Date(e+"T12:00:00");if(isNaN(a.getTime()))return e;if(!t||t==="default")return a.toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"});const o=String(a.getDate()).padStart(2,"0"),r=String(a.getMonth()+1).padStart(2,"0"),i=a.getFullYear(),l=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],s=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];switch(t){case"DD/MM/YYYY":return`${o}/${r}/${i}`;case"MM/DD/YYYY":return`${r}/${o}/${i}`;case"YYYY-MM-DD":return`${i}-${r}-${o}`;case"DD MMM YYYY":return`${o} ${l[a.getMonth()]} ${i}`;case"DD [de] MMMM [de] YYYY":return`${o} de ${s[a.getMonth()]} de ${i}`;default:return a.toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"})}},numericInputAttrs(e){const t=e.getAttribute("min"),a=e.getAttribute("max"),o=e.getAttribute("decimals"),r=e.getAttribute("show-steppers");let i="";return t!==null&&t!==""&&(i+=` min="${t}"`),a!==null&&a!==""&&(i+=` max="${a}"`),o!==null&&o!==""&&(i+=` step="${Math.pow(10,-Number(o))}"`),{attrs:i,spinnerClass:r==="false"?"no-spinner":""}},setupArithmeticInput(e,t){const a=()=>{let o=e.value.trim();if(o!=="")try{const r=o.replace(/,/g,"."),i=new Function(`"use strict"; return (${r})`)();!isNaN(i)&&isFinite(i)&&(e.value=i,t.setAttribute("edit-value",i),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text",setTimeout(()=>e.select(),10)},e.onkeydown=o=>{o.key==="Enter"&&(o.preventDefault(),a())},e.onblur=()=>{a(),isNaN(parseFloat(e.value))||(e.type="number")}},parsePairedOptions(e){return e?e.split(`
`).map(t=>{const a=t.indexOf("=");if(a===-1)return null;const o=t.slice(0,a).trim(),r=t.slice(a+1).trim();return!o||!r?null:{label:o,value:r}}).filter(t=>t!==null):[]},async copyTextSmart(e,t="Copiar Texto"){var i;try{return await navigator.clipboard.writeText(e),"clipboard"}catch(l){console.warn("Clipboard API falló, probando execCommand...",l)}try{const l=document.createElement("textarea");l.value=e,l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.focus(),l.select();const s=document.execCommand("copy");if(document.body.removeChild(l),s)return"execCommand"}catch(l){console.warn("execCommand('copy') también falló.",l)}const a="modal-copy-fallback";(i=document.getElementById(a))==null||i.remove(),document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="${a}" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header text-bg-dark py-2">
              <h6 class="modal-title"><i class="fa-solid fa-clipboard me-2"></i>${t}</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-3">
              <div class="alert alert-warning small mb-2">
                <i class="fa-solid fa-triangle-exclamation me-1"></i> Tu navegador bloqueó el acceso automático al portapapeles. El texto ya está seleccionado abajo — usa Ctrl+C (o Cmd+C) para copiarlo manualmente.
              </div>
              <textarea id="${a}-text" class="form-control font-monospace small" rows="14" readonly></textarea>
            </div>
          </div>
        </div>
      </div>
    `);const o=document.getElementById(a),r=document.getElementById(`${a}-text`);return r.value=e,new bootstrap.Modal(o).show(),o.addEventListener("shown.bs.modal",()=>{r.focus(),r.select()}),o.addEventListener("hidden.bs.modal",()=>o.remove()),"modal"},downloadTextFile(e,t){const a=new Blob([t],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(a),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(o),1e3)}},S={icon:"🔢",shortLabel:"Valor",longLabel:"Valor Numérico",spanEV:4,spanP:4,color:"success",settings:{customTitle:"Formato de Número",customIcon:"fa-calculator",custom:[{id:"numericType",attr:"numeric-type",caption:"Tipo de Valor",type:"select",default:"number",mutatesLogicalKey:!0,options:[{label:"Número Estándar (Decimal / Entero)",value:"number",logicalKey:"number"},{label:"Moneda / Importe Financiero",value:"currency",logicalKey:"currency"},{label:"Porcentaje (%)",value:"percentage",logicalKey:"percentage"}],onChange:{currency:{currencySymbol:{configurable:!0},unit:{configurable:!1},decimals:{configurable:!1}},percentage:{currencySymbol:{configurable:!1},unit:{configurable:!1},decimals:{configurable:!0}},_default:{currencySymbol:{configurable:!1},unit:{configurable:!0},decimals:{configurable:!0}}}},{id:"currencySymbol",attr:"currency",caption:"Símbolo Monetario",type:"text",default:"$"},{id:"unit",attr:"unit",caption:"Unidad (Kg, ml, km...) — solo Número Estándar",type:"text",default:"",help:'Se agrega como sufijo en Visor e Impresión. Moneda sigue usando su propio símbolo; Porcentaje siempre usa "%".'},{id:"decimals",caption:"Decimales a mostrar",type:"number",default:"",help:"Vacío = sin redondear. En Moneda, los decimales quedan fijos en 2."}],advancedCustom:[{id:"min",caption:"Valor Mínimo",type:"number",default:"",help:"Vacío = sin límite.",row:"minMax"},{id:"max",caption:"Valor Máximo",type:"number",default:"",help:"Vacío = sin límite.",row:"minMax"},{id:"showSteppers",attr:"show-steppers",caption:"Mostrar Botones (+/-)",type:"boolean",default:!0},{id:"separators",caption:"Separadores de cifra",type:"select",default:"auto",options:[{label:"Automático (idioma del navegador)",value:"auto"},{label:"Decimal ',', Miles '.'",value:",."},{label:"Decimal '.', Miles ','",value:".,"},{label:"Decimal ','",value:","},{label:"Decimal '.'",value:"."}]}],width:!0,visibility:!0,style:!0,formula:!0},aiPrompt:""},E={icon:"📆",shortLabel:"Fecha/Hora",longLabel:"Fecha y Hora",spanEV:4,spanP:4,color:"info",settings:{customTitle:"Formato de Captura",customIcon:"fa-calendar-day",custom:[{id:"timeType",attr:"time-type",caption:"Tipo de Registro Temporal",type:"select",default:"date",mutatesLogicalKey:!0,help:"Define si el usuario seleccionará una fecha en el calendario o una hora específica.",options:[{label:"Día / Fecha (Calendario)",value:"date",logicalKey:"date"},{label:"Hora Exacta (Reloj 24h)",value:"time",logicalKey:"time"}],onChange:{date:{displayMask:{configurable:!0},minDate:{configurable:!0},maxDate:{configurable:!0},minTime:{configurable:!1},maxTime:{configurable:!1}},time:{displayMask:{configurable:!1},minDate:{configurable:!1},maxDate:{configurable:!1},minTime:{configurable:!0},maxTime:{configurable:!0}},_default:{displayMask:{configurable:!1},minDate:{configurable:!1},maxDate:{configurable:!1},minTime:{configurable:!1},maxTime:{configurable:!1}}}},{id:"displayMask",attr:"display-mask",caption:"Formato de Pantalla e Impresión",type:"select",default:"default",options:[{label:"Automático",value:"default"},{label:"Estándar (31/12/2026)",value:"DD/MM/YYYY"},{label:"Invertido (12/31/2026)",value:"MM/DD/YYYY"},{label:"Base de Datos (2026-12-31)",value:"YYYY-MM-DD"},{label:"Texto Corto (31 dic 2026)",value:"DD MMM YYYY"},{label:"Texto Largo (31 de diciembre de 2026)",value:"DD [de] MMMM [de] YYYY"}]}],advancedCustom:[{id:"minDate",attr:"min-date",caption:"Fecha Mínima",type:"text",default:"",help:"Formato AAAA-MM-DD. Vacío = sin límite.",row:"minMaxDate"},{id:"maxDate",attr:"max-date",caption:"Fecha Máxima",type:"text",default:"",help:"Formato AAAA-MM-DD. Vacío = sin límite.",row:"minMaxDate"},{id:"minTime",attr:"min-time",caption:"Hora Mínima",type:"text",default:"",help:"Formato HH:mm (24 horas). Vacío = sin límite.",row:"minMaxTime"},{id:"maxTime",attr:"max-time",caption:"Hora Máxima",type:"text",default:"",help:"Formato HH:mm (24 horas). Vacío = sin límite.",row:"minMaxTime"}],width:!0,visibility:!0,style:!0,formula:!0},aiPrompt:""},C={icon:"📎",shortLabel:"Multimedia",longLabel:"Archivo Multimedia",spanEV:12,spanP:12,color:"warning",settings:{customTitle:"Tipo de Contenido",customIcon:"fa-file-arrow-up",custom:[{id:"mediaType",attr:"media-type",caption:"Formato de Archivo Aceptado",type:"select",default:"image",mutatesLogicalKey:!0,help:"Determina la interfaz de carga y reproducción que verá el usuario en el documento.",options:[{label:"Fotografía / Imagen (JPG, PNG)",value:"image",logicalKey:"image"},{label:"Pista de Audio / Nota de Voz (MP3, WAV)",value:"audio",logicalKey:"audio"},{label:"Clip de Video (MP4, WebM)",value:"video",logicalKey:"video"}]}],width:!0,visibility:!0,style:!0},aiPrompt:""},P={hideInToolbox:!0,columnFacade:"input",icon:"A",shortLabel:"Texto",longLabel:"Texto Corto",spanEV:4,spanP:4,color:"secondary",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Retorna y espera cadenas de texto plano.",aiPromptLong:`I/O: String. doc.getValue() retorna una cadena de texto plano. doc.setValue() espera una cadena de texto plano.
    
    Atributos configurables (via editor modal):
      • No tiene settings.custom propios (los genéricos de width, visibility, style aplican igual).
      • El atributo HTML "readonly" (si está presente) bloquea la edición manual — el valor solo cambia por script.
      • input-type: el facade "input" puede cambiar este atributo a "tel" para campos de teléfono; el AI no debe modificarlo.
    
    Casos de uso: nombres, apellidos, direcciones, códigos, referencias cortas, cualquier texto de una sola línea.
    
    Restricciones:
      • NO es multilinea — para textos largos con saltos de línea, usa el componente "text".
      • NO contiene números usables — si necesitas un valor numérico, usa "number", "currency" o "percentage".
      • El valor es texto plano — no interpreta HTML ni marcado.
    
    Tips para el AI:
      • Si el usuario pide "nombre", "apellido", "código", "referencia" → usa string.
      • Para teléfono usa string dentro del facade input (input-type="tel").
      • Para datos numéricos que participan en cálculos, NUNCA uses string — usa number/currency/percentage.`,field:{kind:"text",icon:"fa-font",inputType:e=>{const t=e==null?void 0:e.getAttribute("input-type");return t==="tel"?t:"text"},placeholder:"Ingrese texto..."}},$={hideInToolbox:!0,columnFacade:"input",icon:"T",shortLabel:"Área de Texto",longLabel:"Área de Texto",spanEV:12,spanP:12,color:"secondary",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Espera texto. Si contiene saltos de línea usa '\\n'. El enriquecido admite HTML.",aiPromptLong:`I/O: String. doc.getValue() retorna una cadena de texto. doc.setValue() espera una cadena; si contiene saltos de línea usa '\\n'.
    El campo enriquecido (editor WYSIWYG) admite HTML — en ese caso, getValue() retorna HTML y setValue() espera HTML.
    
    Atributos configurables:
      • No tiene settings.custom propios.
      • readonly: bloquea edición manual.
    
    Casos de uso: descripciones, observaciones, notas, comentarios, párrafos largos, cualquier texto multilinea.
    
    Restricciones:
      • En modo texto plano: NO interpreta HTML.
      • En modo enriquecido: el HTML está limitado a lo que TinyMCE permite — no es un campo libre de HTML arbitrario (para eso usa "html").
    
    Tips para el AI:
      • Si el usuario pide "descripción", "notas", "observaciones", "comentario" → usa text.
      • Para HTML generado por scripts (reportes dinámicos, tarjetas, alertas) → usa "html", NO text.`,field:{kind:"text",icon:"fa-align-left",renderViewerContent:(e,t,a)=>e.getAttribute("rich-text")!=="false"?`
        <div class="ql-editor py-1" style="padding: 0;">
          ${t||"<span class='text-muted'>---</span>"}
        </div>`:`
        <div class="py-1" style="${a}">
          ${t||"---"}
        </div>`,renderPrinterContent:(e,t,a)=>{let o=t||"";return e.getAttribute("rich-text")!=="false"?(/<\/?[a-z][\s\S]*>/i.test(o)||(o=o.replace(/\n/g,"<br>")),`
        <div class="ql-editor" style="padding: 0; line-height: 1.2; text-align: left; font-size: inherit;">
            ${o}
        </div>`):`
        <div style="${a} font-size: inherit; padding: 2px 0; line-height: 1.3;">
            ${o||"---"}
        </div>`},getWhatsappContent:e=>{const t=e.getAttribute("title");let a=e.getAttribute("edit-value")||"";if(e.getAttribute("rich-text")!=="false"){/<\/?[a-z][\s\S]*>/i.test(a)||(a=a.replace(/\n/g,"<br>"));let r=a.replace(/<\/p>|<br\s*\/?>/gi,`
`);return r=r.replace(/<[^>]*>?/gm,""),`
*${t}*
> ${r.trim().replace(/\n/g,`
> `)}
`}return`
*${t}*
> ${a.trim().replace(/\n/g,`
> `)}
`}}},V={hideInToolbox:!0,columnFacade:"input",icon:"📧",shortLabel:"Correo",longLabel:"Correo Electrónico",spanEV:4,spanP:4,color:"secondary",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Espera una dirección de correo válida.",aiPromptLong:`I/O: String. doc.getValue() retorna una dirección de correo. doc.setValue() espera un string con formato de correo válido (ej: "usuario@dominio.com").
    
    Atributos configurables:
      • No tiene settings.custom propios.
      • readonly: bloquea edición manual.
    
    Casos de uso: campos de correo electrónico, contacto por email.
    
    Restricciones:
      • El navegador valida el formato email en el input — pero doc.setValue() NO valida del lado del script.
      • NO es un campo numérico — no participa en cálculos.
    
    Tips para el AI:
      • Si el usuario pide "email", "correo", "correo electrónico" → usa email.
      • Para listas de correos separadas por coma, usa string y no email.`,field:{kind:"text",icon:"fa-at",inputType:"email",placeholder:"usuario@ejemplo.com",defaultTitle:"Email",renderViewerContent:(e,t,a)=>{const o=t||"---";return`<div class="py-1">
          <a href="mailto:${o}" class="text-decoration-none" style="${a}">
            <i class="fa-regular fa-envelope me-1 small"></i>${o}
          </a>
        </div>`},renderPrinterContent:(e,t,a)=>`
        <div style="${a} font-size: inherit; word-break: break-all; padding: 2px 0;">
            ${t||"---"}
        </div>
    `}},I={hideInToolbox:!0,columnFacade:"input",icon:"🔑",shortLabel:"Contraseña",longLabel:"Contraseña",spanEV:4,spanP:4,color:"secondary",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Retorna y espera cadenas de texto. Por seguridad, NUNCA copies ni muestres este valor en otro campo visible del documento (texto, tabla, gráfico, etc.).",aiPromptLong:`I/O: String. doc.getValue() retorna una cadena de texto (la contraseña). doc.setValue() espera una cadena.
    Por seguridad, NUNCA copies ni muestres este valor en otro campo visible del documento (texto, tabla, gráfico, etc.).
    
    Atributos configurables (via editor modal):
      • placeholder-text (attr: placeholder-text): texto placeholder personalizado. Default: "Ingrese contraseña...".
      • max-length (attr: max-length): longitud máxima del campo.
      • readonly: bloquea edición manual.
    
    Casos de uso: contraseñas, tokens, PINs, datos sensibles que no deben mostrarse en el documento.
    
    Restricciones:
      • CRÍTICO: NUNCA usar doc.getValue('password_id') para escribir el valor en un campo visible (string, text, table, html, etc.).
      • El valor se muestra enmascarado (puntos) en el editor y oculto en visor/impresión.
      • NO participa en cálculos — no es un campo numérico.
    
    Tips para el AI:
      • Solo úsalo para almacenar datos sensibles que el usuario ingresa manualmente.
      • Si necesitas leer el valor en un script (para autenticación, API, etc.), hazlo internamente en el script sin mostrarlo.`,field:{kind:"password",icon:"fa-key",renderEditorContent:(e,t,a)=>{const o=e.getAttribute("title")||"Contraseña",r=e.hasAttribute("readonly"),i=e.getAttribute("placeholder-text")||"Ingrese contraseña...",l=e.getAttribute("max-length"),s=l?` maxlength="${l}"`:"";return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-2">
            <i class="fa-solid fa-key me-1 text-${e.uiColor}"></i> ${o}
          </label>
          <div class="input-group input-group-sm shadow-none">
            <input autocomplete="off" spellcheck="false" type="password" class="form-control border-1 shadow-none${r?" bg-light":""}"
                   id="input-${e.id}" value="${t||""}" placeholder="${i}"${s}${r?" readonly":""}>
            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="input-${e.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `},renderViewerContent:(e,t,a)=>{const o=t||"";return`<div class="d-flex align-items-center gap-2 py-1">
          <input autocomplete="off" spellcheck="false" type="password" class="form-control form-control-sm border-0 bg-transparent p-0 shadow-none fw-bold"
                 id="val-${e.id}" value="${o}" readonly style="width: auto; min-width: 100px;">
          <div class="btn-group">
            <button class="btn btn-sm text-primary p-1 toggle-password" data-target="val-${e.id}" title="Ver/Ocultar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm text-body-secondary p-1" id="btn-copy-${e.id}" title="Copiar">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>`},renderPrinterContent:()=>'<div style="height: 1.5rem;"></div>',getWhatsappContent:e=>`*${e.getAttribute("title")}:* ********`}},N={hideInToolbox:!0,columnFacade:"numeric",icon:"123",shortLabel:"Número",longLabel:"Número Decimal",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: Number. doc.getValue() retorna un Número. doc.setValue() espera un Número (ej: 1500.50). NO enviar strings.",aiPromptLong:`I/O: Number. doc.getValue() retorna un Número (ej: 1500.50). doc.setValue() espera un Número (NO string).
    
    Atributos configurables:
      • decimals (attr: decimals): cantidad de decimales a mostrar. Vacío = sin restricción.
      • is-calculated (attr: is-calculated, boolean): si está presente, el campo es de solo lectura y su valor viene de una fórmula/script.
      • readonly (attr: readonly, boolean): bloquea edición manual — el valor solo cambia por script.
      • min/max/step: atributos HTML estándar del input numérico (configurables desde el editor).
    
    Casos de uso: cantidades, edades, medidas, conteos, cualquier valor numérico entero o decimal sin moneda.
    
    Restricciones:
      • doc.setValue() SIEMPRE recibe un Number — si envías un string ("1500") puede fallar o comportarse inesperadamente.
      • NO lleva símbolo monetario — para dinero usa "currency".
      • NO es porcentaje — para porcentajes usa "percentage".
    
    Tips para el AI:
      • Si el usuario pide "cantidad", "cantidad de artículos", "edad", "medida" → usa number.
      • Para dinero con símbolo → usa currency.
      • Para porcentajes → usa percentage.
      • Para campos calculados (fórmulas), marca is-calculated y asigna el valor por script.`,field:{kind:"number",icon:"fa-hashtag",defaultTitle:"Número",formatDisplay:(e,t)=>d.formatNumericValue(e,{decimals:t.getAttribute("decimals")||"",separators:t.getAttribute("separators")||"auto",unit:t.getAttribute("unit")||""})??"---",renderEditorContent:(e,t,a)=>{const o=e.getAttribute("title")||"Número",r=e.hasAttribute("is-calculated"),i=e.hasAttribute("readonly"),l=r||i,{attrs:s,spinnerClass:n}=d.numericInputAttrs(e),c=l?"readonly":"",u=r?"Calculado...":"0.00",p=e.getAttribute("unit")||"",v=`<input autocomplete="off" spellcheck="false" type="number" class="${p?`form-control shadow-none ${n} ${l?"bg-light text-muted":""}`:`form-control form-control-sm shadow-none ${n} ${l?"bg-light text-muted":""}`}"
                 id="input-${e.id}" value="${t||""}" style="${a}"
                 placeholder="${u}"
                 ${c}${s}>`,T=p?`<div class="input-group input-group-sm">
            ${v}
            <span class="input-group-text fw-bold text-muted border-1">${p}</span>
          </div>`:v;return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${e.uiColor}"></i> ${o}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':i?'<i class="fa-solid fa-lock ms-2 text-muted" style="font-size:0.7rem" title="Solo lectura"></i>':""}
              </label>
            </div>
            ${e.renderStyleControls()}
          </div>
          ${T}
        </div>
      </div>
    `},bindEditorEvents:e=>{const t=e.querySelector(`#input-${e.id}`);t&&(e._attachStyleEventListeners(t),t.addEventListener("focus",a=>{setTimeout(()=>a.target.select(),10)}),!e.hasAttribute("is-calculated")&&!e.hasAttribute("readonly")&&d.setupArithmeticInput(t,e))}}},O={hideInToolbox:!0,columnFacade:"numeric",icon:"💲",shortLabel:"Moneda",longLabel:"Moneda / Importe",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: Number. doc.getValue() retorna el valor numérico puro, sin el símbolo monetario. doc.setValue() espera un Número (ej: 1500.50). NO enviar strings.",aiPromptLong:`I/O: Number. doc.getValue() retorna el valor numérico PURO, sin el símbolo monetario (ej: 1500.50, NO "$1,500.50"). doc.setValue() espera un Número puro.
    
    Atributos configurables:
      • decimals (attr: decimals): por defecto "2" — cantidad de decimales. Se hereda del preset de moneda.
      • is-calculated (attr: is-calculated): campo de solo lectura con valor de fórmula/script.
      • readonly (attr: readonly): bloquea edición manual.
    
    Casos de uso: precios, montos, saldos, pagos, subtotales, cualquier valor monetario.
    
    Restricciones:
      • El símbolo de moneda es SOLO visual — no viaja en getValue/setValue.
      • Si necesitas mostrar "$1,500.50" en un reporte HTML, arma el string en el script: '$' + doc.getValue('precio').toLocaleString().
      • NO enviar strings a setValue — solo Numbers.
    
    Tips para el AI:
      • Si el usuario pide "precio", "monto", "subtotal", "total", "pago", "saldo" → usa currency.
      • Para cantidades sin moneda → usa number.
      • Para porcentajes → usa percentage.`,field:{kind:"currency",icon:"fa-money-bill-wave",defaultTitle:"Importe",renderEditorContent:(e,t,a)=>{const o=e.getAttribute("title")||"Importe",r=e.getAttribute("currency")||"$",i=e.hasAttribute("is-calculated"),l=e.hasAttribute("readonly"),s=i||l,{attrs:n,spinnerClass:c}=d.numericInputAttrs(e),u=`form-control shadow-none border-1 ${c} ${s?"bg-light text-muted":""}`,p=s?"readonly":"";return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${e.uiColor}"></i> ${o}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':l?'<i class="fa-solid fa-lock ms-2 text-muted" style="font-size:0.7rem" title="Solo lectura"></i>':""}
              </label>
            </div>
            ${e.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${r}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${u}"
                   id="input-${e.id}" value="${t||""}" style="${a}"
                   placeholder="0.00"
                   ${p}${n}>
          </div>
        </div>
      </div>
    `},bindEditorEvents:e=>{const t=e.querySelector(`#input-${e.id}`);t&&(e._attachStyleEventListeners(t),t.addEventListener("focus",a=>{setTimeout(()=>a.target.select(),10)}),!e.hasAttribute("is-calculated")&&!e.hasAttribute("readonly")&&d.setupArithmeticInput(t,e))},renderViewerContent:(e,t,a)=>{const o=parseFloat(t)||0,r=e.getAttribute("currency")||"$",i=d.formatNumericValue(o,{decimals:"2",separators:e.getAttribute("separators")||"auto"});return`<div class="py-1" style="${a}">
          <span class="opacity-75 me-1">${r}</span>${i}
        </div>`},renderPrinterContent:(e,t,a)=>{const o=parseFloat(t)||0,r=e.getAttribute("currency")||"$",i=d.formatNumericValue(o,{decimals:"2",separators:e.getAttribute("separators")||"auto"});return`
        <div style="${a} font-size: inherit; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${r}</span>${i}
        </div>`},getWhatsappContent:e=>{const t=e.getAttribute("title"),a=parseFloat(e.getAttribute("edit-value")||0),o=e.getAttribute("currency")||"$",r=d.formatNumericValue(a,{decimals:"2",separators:e.getAttribute("separators")||"auto"});return`*${t}:* ${o} ${r}`}}},L={hideInToolbox:!0,columnFacade:"numeric",icon:"%",shortLabel:"Porcentaje",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: Number. doc.getValue() retorna el número puro. doc.setValue() espera un Número (ej: 15.5 para representar 15.5%). NO enviar strings.",aiPromptLong:`I/O: Number. doc.getValue() retorna el número puro (ej: 15.5 para representar 15.5%). doc.setValue() espera un Número.
    
    Atributos configurables:
      • decimals (attr: decimals): decimales a mostrar. Vacío = sin restricción.
      • is-calculated (attr: is-calculated): campo calculado por fórmula/script.
      • readonly (attr: readonly): bloquea edición manual.
    
    Casos de uso: tasas, descuentos, intereses, impuestos, participación, cobertura.
    
    Restricciones:
      • El valor 15.5 significa 15.5% — NO multipliques por 100 ni dividas por 100.
      • Si el usuario dice "15%", el valor es 15 (NO 0.15).
      • ParasetValue: doc.setValue('descuento', 15) = 15%.
      • ParagetValue: doc.getValue('descuento') → 15 (que significa 15%).
    
    Tips para el AI:
      • Si el usuario pide "descuento", "tasa", "porcentaje", "IVA", "interés" → usa percentage.
      • Para multiplicar un monto por un porcentaje: precio * (descuento / 100).`,field:{kind:"percentage",icon:"fa-percent",defaultTitle:"Porcentaje",renderEditorContent:(e,t,a)=>{const o=e.getAttribute("title")||"Porcentaje",r=e.hasAttribute("is-calculated"),i=e.hasAttribute("readonly"),l=r||i,{attrs:s,spinnerClass:n}=d.numericInputAttrs(e);return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${e.uiColor}"></i> ${o}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':i?'<i class="fa-solid fa-lock ms-2 text-muted" style="font-size:0.7rem" title="Solo lectura"></i>':""}
              </label>
            </div>
            ${e.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${n} ${l?"bg-light text-muted":""}"
                   id="input-${e.id}" value="${t||""}" style="${a}"
                   placeholder="0.00"
                   ${l?"readonly":""}${s}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `},bindEditorEvents:e=>{const t=e.querySelector(`#input-${e.id}`);t&&(e._attachStyleEventListeners(t),t.addEventListener("focus",a=>{setTimeout(()=>a.target.select(),10)}),!e.hasAttribute("is-calculated")&&!e.hasAttribute("readonly")&&d.setupArithmeticInput(t,e))},renderViewerContent:(e,t,a)=>{const o=t||"0",r=d.formatNumericValue(o,{decimals:e.getAttribute("decimals")||"",separators:e.getAttribute("separators")||"auto"});return`<div class="py-1" style="${a}">${r!==null?r:"0"}%</div>`},renderPrinterContent:(e,t,a)=>{const o=t||"0",r=d.formatNumericValue(o,{decimals:e.getAttribute("decimals")||"",separators:e.getAttribute("separators")||"auto"});return`
      <div style="${a} font-size: inherit; padding: 2px 0;">
          ${r!==null?r:"0"}%
      </div>
    `},getWhatsappContent:e=>{const t=e.getAttribute("title"),a=e.getAttribute("edit-value")||"0",o=d.formatNumericValue(a,{decimals:e.getAttribute("decimals")||"",separators:e.getAttribute("separators")||"auto"});return`*${t}:* ${o!==null?o:"0"}%`}}},M={hideInToolbox:!0,columnFacade:"datetime",icon:"📅",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Formato esperado: 'YYYY-MM-DD' (ej: '2026-08-27').",aiPromptLong:`I/O: String. doc.getValue() retorna 'YYYY-MM-DD' (ej: '2026-08-27'). doc.setValue() espera una cadena en formato 'YYYY-MM-DD'.
    
    Atributos configurables:
      • display-mask (attr: display-mask): máscara de visualización personalizada. Si no está o es "default", usa el formato por defecto del sistema.
      • min-date (attr: min-date): fecha mínima permitida (formato YYYY-MM-DD).
      • max-date (attr: max-date): fecha máxima permitida (formato YYYY-MM-DD).
      • readonly (attr: readonly): bloquea edición manual.
    
    Casos de uso: fechas de nacimiento, fechas de vencimiento, fechas de inicio/fin, cualquier fecha.
    
    Restricciones:
      • El formato de I/O siempre es YYYY-MM-DD — no envíes DD/MM/YYYY ni otros formatos.
      • Para componentes de fecha+hora, usa el facade "datetime" (que combina date + time).
      • NO es un Number — no puedes hacer aritmética directa. Para calcular diferencias entre fechas, parsea en el script.
    
    Tips para el AI:
      • Si el usuario pide "fecha de nacimiento", "fecha de inicio", "vencimiento" → usa date.
      • Para calcular edad o días entre fechas, usa new Date() en un script.
      • Para fecha y hora juntas, usa el facade datetime.`,field:{kind:"date",icon:"fa-calendar-days",inputType:"date",defaultValue:()=>new Date().toISOString().split("T")[0],formatDisplay:(e,t)=>d.formatDateWithMask(e,t==null?void 0:t.getAttribute("display-mask")),formatWhatsapp:(e,t)=>{const a=t==null?void 0:t.getAttribute("display-mask");return a&&a!=="default"?d.formatDateWithMask(e,a):new Date(e).toLocaleDateString()},renderEditorInput:(e,t,a)=>{const o=e.hasAttribute("readonly"),r=e.getAttribute("min-date"),i=e.getAttribute("max-date");let l="";return r&&(l+=` min="${r}"`),i&&(l+=` max="${i}"`),`<input autocomplete="off" spellcheck="false" type="date" class="form-control form-control-sm shadow-none border-1${o?" bg-light":""}"
                 id="input-${e.id}" value="${a||""}" style="${t}"${o?" readonly":""}${l}>`}}},k={hideInToolbox:!0,columnFacade:"datetime",icon:"🕒",shortLabel:"Hora",longLabel:"Hora",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: String. Formato esperado de 24 horas: 'HH:mm' (ej: '14:30').",aiPromptLong:`I/O: String. doc.getValue() retorna 'HH:mm' en formato 24h (ej: '14:30'). doc.setValue() espera una cadena en formato 'HH:mm'.
    
    Atributos configurables:
      • is-automatic (attr: is-automatic): si está presente, el campo se llena automáticamente con la hora actual y es readonly.
      • min-time (attr: min-time): hora mínima permitida (formato HH:mm).
      • max-time (attr: max-time): hora máxima permitida (formato HH:mm).
      • readonly (attr: readonly): bloquea edición manual.
    
    Casos de uso: hora de inicio, hora de fin, hora de cita, hora de registro.
    
    Restricciones:
      • El formato siempre es HH:mm en 24h — no envíes formatos 12h ("2:30 PM").
      • NO es un Number — no puedes hacer aritmética directa.
    
    Tips para el AI:
      • Si el usuario pide "hora de inicio", "hora de cita", "hora" → usa time.
      • Para fecha y hora juntas, usa el facade datetime.
      • is-automatic es útil para timestamps de registro.`,field:{kind:"time",defaultTitle:"Hora",renderEditorContent:(e,t,a)=>{const o=e.getAttribute("title")||"Hora",r=t||"",i=e.hasAttribute("is-automatic"),l=e.hasAttribute("compact"),s=i||e.hasAttribute("readonly"),n=e.getAttribute("min-time"),c=e.getAttribute("max-time");let u="";n&&(u+=` min="${n}"`),c&&(u+=` max="${c}"`);const p=`
      <input type="time" class="form-control ${l?"form-control-sm border-0 bg-transparent px-1":"form-control-sm shadow-none border-1"} fw-bold${s?" bg-light":""}"
             id="input-${e.id}" value="${r}" style="${a}" ${s?"readonly":""}${u}>
    `;return l?p:`
        <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <label class="form-label fw-bold text-body small mb-0">
                <i class="fa-regular fa-clock me-1 text-${e.uiColor}"></i> ${o}
              </label>
              ${e.renderStyleControls()}
            </div>
            ${p}
          </div>
        </div>
      `},renderViewerContent:(e,t,a)=>{const o=t||"",r=o||'<span class="text-muted fst-italic">---</span>';return`<div class="${e.hasAttribute("table")?"px-1":"py-1"}" style="${a}">${r}</div>`},renderPrinterContent:(e,t,a)=>{const o=t||"";return`
        <div style="${a} font-size: inherit; padding: 2px 0;">
            ${o||"—"}
        </div>
    `}}},D={hideInToolbox:!0,icon:"🗂️",shortLabel:"Sección",longLabel:"Sección",spanEV:12,spanP:12,color:"dark",columnFacade:"divider",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"Ignorar. Componente estructural y visual, NO interactuar con getValue ni setValue.",aiPromptLong:`I/O: Ninguno. Componente ESTRUCTURAL — no almacena datos ni responde a getValue/setValue.
    
    Atributos configurables:
      • No tiene settings.custom — es puramente visual/estructural.
      • Configuración visual: título, color, ícono, ancho (columnas).
    
    Casos de uso: agrupar campos en secciones lógicas ("Datos Personales", "Información Laboral", "Configuración").
    
    Restricciones:
      • NO interactuar con getValue/setValue — es decorativo/organizacional.
      • No contiene datos del formulario.
    
    Tips para el AI:
      • Úsalo para organizar visualmente el documento en secciones con título.
      • Para sub-secciones dentro de una sección, usa "subsection".
      • Siempre inclúyelo en el inventario de componentes cuando el diseño muestre agrupaciones.`},R={hideInToolbox:!0,columnFacade:"divider",icon:"➖",shortLabel:"Subsección",longLabel:"Subtítulo",spanEV:12,spanP:12,color:"dark",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"Ignorar. Componente estructural, NO almacena datos.",aiPromptLong:`I/O: Ninguno. Componente ESTRUCTURAL — no almacena datos ni responde a getValue/setValue.
    
    Atributos configurables:
      • No tiene settings.custom — es puramente visual/estructural.
      • Configuración visual: título, color, ícono, ancho (columnas).
    
    Casos de uso: sub-agrupaciones dentro de una sección ("Dirección de Envío" dentro de "Datos de Contacto").
    
    Restricciones:
      • NO interactuar con getValue/setValue — es decorativo/organizacional.
      • No contiene datos del formulario.
    
    Tips para el AI:
      • Úsalo para crear jerarquías visuales de segundo nivel dentro de una sección.
      • Siempre va dentro de una sección — no funciona como contenedor raíz.
      • Para agrupaciones de primer nivel, usa "section".`},j={hideInToolbox:!0,columnFacade:"media",icon:"🖼️",shortLabel:"Imagen",longLabel:"Imagen",spanEV:12,spanP:12,color:"warning",settings:{customTitle:"Presentación",customIcon:"fa-image",custom:[{id:"objectFit",attr:"object-fit",caption:"Ajuste de la Imagen",type:"select",default:"contain",options:[{label:"Contener (se ve completa, sin recortes)",value:"contain"},{label:"Cubrir (rellena el espacio, puede recortar bordes)",value:"cover"}]},{id:"altText",attr:"alt-text",caption:"Texto Alternativo (Accesibilidad)",type:"text",default:"",placeholder:"Ej: Fachada del local antes de la remodelación",help:"Se usa si la imagen no carga y para lectores de pantalla. Vacío = usa el Título de la foto, si tiene."}],width:!0,visibility:!0,style:!0},aiPrompt:"I/O: JSON String. Requiere obligatoriamente un JSON stringificado: doc.setValue('id', JSON.stringify({text: 'Foto', url: 'https...'})). doc.getValue() devuelve ese mismo JSON stringificado — usa JSON.parse() para leer 'text'/'url'.",aiPromptLong:`I/O: JSON String. doc.setValue() REQUIERE JSON.stringify({text: 'Descripción', url: 'https://...'}).
    doc.getValue() devuelve ese JSON stringificado — usa JSON.parse() para leer text y url.
    
    Atributos configurables:
      • objectFit (attr: object-fit): ajuste de la imagen — "contain" (por defecto, mantiene proporción), "cover" (llena el espacio), "fill" (deforma para llenar), "none" (tamaño original), "scale-down" (como none pero reduce si es más grande).
      • altText (attr: alt-text): texto alternativo para accesibilidad. Vacío = usa el Título del campo.
    
    Casos de uso: fotos de perfil, logos, imágenes de productos, diagramas, capturas de pantalla.
    
    Restricciones:
      • CRÍTICO: SIEMPRE usa JSON.stringify — NUNCA envíes una URL plana.
      • La URL debe ser accesible públicamente (no rutas locales ni base64).
      • Para imágenes generadas por scripts (gráficos, canvas), convierte a data URL o sube a servidor.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('foto', JSON.stringify({text: 'Foto de perfil', url: 'https://ejemplo.com/foto.jpg'}));
      • Para leer: const {text, url} = JSON.parse(doc.getValue('foto'));
      • El campo "text" funciona como pie de foto / texto alternativo.`},q={hideInToolbox:!0,columnFacade:"media",icon:"🎵",shortLabel:"Audio",longLabel:"Audio / Nota de Voz",spanEV:12,spanP:12,color:"warning",settings:{width:!0,visibility:!0,style:!0},aiPrompt:"I/O: JSON String. Requiere obligatoriamente un JSON stringificado: doc.setValue('id', JSON.stringify({text: 'Nota de voz', url: 'https...'})). doc.getValue() devuelve ese mismo JSON stringificado — usa JSON.parse() para leer 'text'/'url'.",aiPromptLong:`I/O: JSON String. doc.setValue() REQUIERE JSON.stringify({text: 'Descripción', url: 'https://...'}).
    doc.getValue() devuelve ese JSON stringificado — usa JSON.parse() para leer text y url.
    
    Atributos configurables:
      • No tiene settings.custom propios. Los controles de reproducción son estándar del navegador.
      • readonly: no aplica — audio es de solo reproducción.
    
    Casos de uso: notas de voz, podcasts, efectos de sonido, archivos de audio incrustados.
    
    Restricciones:
      • CRÍTICO: SIEMPRE usa JSON.stringify — NUNCA envíes una URL plana.
      • La URL debe apuntar a un archivo de audio accesible (mp3, wav, ogg).
      • No permite grabación directa — solo reproducción de URL.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('nota', JSON.stringify({text: 'Nota de voz', url: 'https://ejemplo.com/audio.mp3'}));
      • Para leer: const {text, url} = JSON.parse(doc.getValue('nota'));`},_={hideInToolbox:!0,columnFacade:"media",icon:"🎬",shortLabel:"Video",longLabel:"Video",spanEV:12,spanP:12,color:"warning",settings:{customTitle:"Reproducción",customIcon:"fa-video",custom:[{id:"controls",attr:"controls",caption:"Mostrar Controles (Play/Pausa/Volumen)",type:"boolean",default:!0},{id:"autoplay",attr:"autoplay",boolStyle:"presence",caption:"Reproducción Automática",type:"boolean",default:!1,help:"Arranca sin que el usuario haga clic. El navegador exige silenciarlo para permitirlo, así que se reproduce sin sonido hasta que el usuario le dé play."}],width:!0,visibility:!0,style:!0},aiPrompt:"I/O: JSON String. Requiere obligatoriamente un JSON stringificado: doc.setValue('id', JSON.stringify({text: 'Video', url: 'https...'})). doc.getValue() devuelve ese mismo JSON stringificado — usa JSON.parse() para leer 'text'/'url'.",aiPromptLong:`I/O: JSON String. doc.setValue() REQUIERE JSON.stringify({text: 'Descripción', url: 'https://...'}).
    doc.getValue() devuelve ese JSON stringificado — usa JSON.parse() para leer text y url.
    
    Atributos configurables:
      • controls (attr: controls, boolean): mostrar controles de Play/Pausa/Volumen. Default: true.
      • autoplay (attr: autoplay, boolean): reproducción automática al cargar. Default: false. El navegador exige silenciado para autoplay.
    
    Casos de uso: tutoriales, presentaciones en video, demos, clips incrustados.
    
    Restricciones:
      • CRÍTICO: SIEMPRE usa JSON.stringify — NUNCA envíes una URL plana.
      • La URL debe apuntar a un archivo de video accesible (mp4, webm, ogg).
      • autoplay en la mayoría de navegadores requiere que el video esté muted.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('clip', JSON.stringify({text: 'Tutorial', url: 'https://ejemplo.com/video.mp4'}));
      • Para leer: const {text, url} = JSON.parse(doc.getValue('clip'));`},z={icon:"🔽",shortLabel:"Lista",longLabel:"Lista Desplegable",spanEV:4,spanP:4,color:"secondary",settings:{customTitle:"Opciones Disponibles",customIcon:"fa-list-ul",custom:[{id:"dataSourceMode",attr:"data-source-mode",caption:"Origen de Datos",type:"select",default:"simple",options:[{label:"Lista Simple (separada por comas)",value:"simple"},{label:"Pares (Etiqueta visual / Valor interno)",value:"paired"}],onChange:{paired:{options:{configurable:!1},pairedOptions:{configurable:!0}},_default:{options:{configurable:!0},pairedOptions:{configurable:!1}}}},{id:"options",caption:"Lista de elementos (separados por coma) *",type:"textarea",rows:3,placeholder:"Soltero, Casado, Divorciado",default:"",help:'<i class="fa-solid fa-info-circle me-1"></i> Escribe las opciones que el usuario podrá elegir, separadas por una coma (,).'},{id:"pairedOptions",attr:"paired-options",caption:"Pares Etiqueta = Valor (uno por línea) *",type:"textarea",rows:3,placeholder:`Ventas = dept_001
Soporte = dept_002`,default:"",help:'<i class="fa-solid fa-info-circle me-1"></i> Una opción por línea, con el formato "Etiqueta = Valor". La persona ve la etiqueta; el documento guarda el valor.'}],width:!0,visibility:!0,style:!0},aiPrompt:'I/O: String. Retorna y espera la opción seleccionada exactamente como fue definida en la lista de opciones configurada (ver diccionario de variables). En modo "Pares", el valor de I/O es el valor interno configurado, no la etiqueta visible. NUNCA inventes ni envíes un valor que no esté en esa lista.',aiPromptLong:`I/O: String. doc.getValue() retorna la opción seleccionada. doc.setValue() espera un valor exacto de la lista configurada.
    En modo "Lista Simple" (data-source-mode="simple" o ausente): el valor I/O es la etiqueta visible misma.
    En modo "Pares" (data-source-mode="paired"): el valor I/O es el valor INTERNO (value), NO la etiqueta visible (label).
    
    Atributos configurables:
      • dataSourceMode (attr: data-source-mode): "simple" (por defecto) o "paired".
      • options (attr: options, solo modo simple): lista separada por comas de las opciones visibles (ej: "Soltero, Casado, Divorci").
      • pairedOptions (attr: paired-options, solo modo pares): lista de pares "Etiqueta = Valor", uno por línea (ej: "Ventas = dept_001\\nSoporte = dept_002").
      • readonly (attr: readonly): en select se implementa como disabled (HTML select no soporta readonly nativo).
    
    Casos de uso: estado civil, género, tipo de documento, departamento, categoría, cualquier campo con opciones predefinidas.
    
    Restricciones:
      • CRÍTICO: NUNCA inventes ni envíes un valor que no esté en la lista configurada. Si no conoces la lista, revisa el diccionario de variables o pídelo al usuario.
      • En modo Pares: doc.setValue('dept', 'dept_001') es correcto — doc.setValue('dept', 'Ventas') es INCORRECTO (esa es la etiqueta, no el valor).
      • Si necesitas la etiqueta visible en un script, usa el modo Pares y busca la etiqueta correspondiente.
    
    Tips para el AI:
      • Si el usuario pide "estado civil", "género", "tipo", "categoría", "departamento" con opciones fijas → usa select.
      • Para opciones dinámicas (desde API), usa api + script.
      • Para Sí/No, usa boolean en vez de select con dos opciones.`,field:{kind:"select",icon:"fa-caret-down",defaultTitle:"Seleccione...",renderEditorInput:(e,t,a)=>{const o=a||"",i=e.getAttribute("data-source-mode")==="paired"?d.parsePairedOptions(e.getAttribute("paired-options")||""):(e.getAttribute("options")||"").split(",").map(s=>s.trim()).filter(s=>s!=="").map(s=>({label:s,value:s})),l=e.hasAttribute("readonly");return`
          <select class="form-select form-select-sm shadow-none${l?" bg-light":""}" id="input-${e.id}" style="${t}" ${l?"disabled":""}>
            <option value="" ${o===""?"selected":""}>Seleccione una opción...</option>
            ${i.map(s=>`<option value="${s.value}" ${o===s.value?"selected":""}>${s.label}</option>`).join("")}
          </select>
        `},formatDisplay:(e,t)=>{if(t.getAttribute("data-source-mode")!=="paired")return e;const o=d.parsePairedOptions(t.getAttribute("paired-options")||"").find(r=>r.value===e);return o?o.label:e}}},U={icon:"☑️",shortLabel:"Casilla",longLabel:"Interruptor / Boolean",spanEV:4,spanP:4,color:"primary",settings:{customTitle:"Estilo del Interruptor",customIcon:"fa-toggle-on",custom:[{id:"trueText",attr:"true-text",caption:"Texto si es Verdadero",type:"text",default:"",placeholder:"Si",help:'Solo aplica a Interruptor/Botón (ver pestaña Avanzado). Vacío = el texto de siempre ("SI"/"SÍ" según la vista).'},{id:"falseText",attr:"false-text",caption:"Texto si es Falso",type:"text",default:"",placeholder:"No",help:'Solo aplica a Interruptor/Botón (ver pestaña Avanzado). Vacío = el texto de siempre ("NO").'}],advancedCustom:[{id:"displayMode",attr:"display-mode",caption:"Estilo Visual",type:"select",default:"switch",options:[{label:"Interruptor (Switch)",value:"switch"},{label:"Casilla Clásica (Checkbox)",value:"checkbox"},{label:"Botón de Alternancia",value:"toggle"}],onChange:{checkbox:{trueText:{configurable:!1},falseText:{configurable:!1},themeColor:{configurable:!1}},_default:{trueText:{configurable:!0},falseText:{configurable:!0},themeColor:{configurable:!0}}}},{id:"themeColor",attr:"theme-color",caption:"Color Activo",type:"select",default:"success",help:"Color del Botón de Alternancia, y de la etiqueta junto al Interruptor cuando hay texto configurado.",options:[{label:"Primario",value:"primary"},{label:"Éxito",value:"success"},{label:"Peligro",value:"danger"},{label:"Advertencia",value:"warning"}]},{id:"defaultState",attr:"default-state",boolStyle:"presence",caption:"Estado por Defecto",type:"boolean",default:!1,help:"Con qué valor arranca un documento NUEVO (nunca guardado). No cambia documentos ya existentes."}],width:!0,visibility:!0,style:!0},aiPrompt:"I/O: Boolean. doc.getValue() retorna true/false. doc.setValue() espera un booleano puro (true o false).",aiPromptLong:`I/O: Boolean. doc.getValue() retorna true o false. doc.setValue() espera un booleano puro (true o false).
    
    Atributos configurables (pestaña Personalizar):
      • trueText (attr: true-text): texto cuando es verdadero. Default: vacío = "SI". Solo aplica en modo Switch/Toggle.
      • falseText (attr: false-text): texto cuando es falso. Default: vacío = "NO". Solo aplica en modo Switch/Toggle.
    
    Atributos avanzados (pestaña Avanzado):
      • displayMode (attr: display-mode): estilo visual — "switch" (por defecto), "checkbox" (casilla clásica), "toggle" (botón de alternancia).
      • themeColor (attr: theme-color): color activo del switch/toggle.
      • readonly (attr: readonly): en checkbox se implementa como disabled.
    
    Casos de uso: Sí/No, activo/inactivo, aprobado/rechazado, aceptado, verificado, habilitado.
    
    Restricciones:
      • doc.setValue() espera true o false — NO envíes "true" (string) ni 1/0.
      • El displayMode NO afecta el valor I/O — siempre es booleano.
      • trueText/falseText son SOLO visuales — no cambian el valor I/O.
    
    Tips para el AI:
      • Si el usuario pide "Sí/No", "Activo/Inactivo", "Aprobado" → usa boolean.
      • Para más de 2 opciones, usa select.
      • En scripts condicionales: if (doc.getValue('aprobado')) { ... } funciona directamente.`,field:{kind:"boolean",icon:"fa-toggle-on",defaultTitle:"Seleccionar",defaultValue:e=>e!=null&&e.hasAttribute("default-state")?"true":"false",renderEditorContent:(e,t)=>{const a=e.getAttribute("title")||"Seleccionar",o=t==="true",r=e.hasAttribute("readonly"),i=e.getAttribute("display-mode")||"switch",l=e.getAttribute("theme-color")||"success",s=e.hasAttribute("true-text")||e.hasAttribute("false-text"),n=e.getAttribute("true-text")||"Sí",c=e.getAttribute("false-text")||"No";let u;if(i==="checkbox")u=`
          <div class="form-check">
            <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="check-${e.id}"
                   ${o?"checked":""} ${r?"disabled":""} style="cursor:${r?"not-allowed":"pointer"}">
          </div>`;else if(i==="toggle"){const p=o?n:c;u=`
          <button type="button" class="btn btn-${o?l:"secondary"} btn-sm fw-bold" id="check-${e.id}"
                  data-checked="${o}" ${r?"disabled":""}>${p}</button>`}else{const p=`
          <div class="form-check form-switch mb-0">
            <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="check-${e.id}"
                   ${o?"checked":""} ${r?"disabled":""} style="cursor:${r?"not-allowed":"pointer"}">
          </div>`;u=s?`<div class="d-flex align-items-center gap-2">${p}<span class="small fw-bold text-${o?l:"muted"}">${o?n:c}</span></div>`:p}return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3 d-flex align-items-center justify-content-between">
          <label class="form-check-label fw-bold text-body small mb-0">
            <i class="fa-solid fa-toggle-on me-1 text-${e.uiColor}"></i> ${a}
          </label>
          ${u}
        </div>
      </div>
    `},bindEditorEvents:e=>{const t=e.getAttribute("display-mode")||"switch",a=e.querySelector(`#check-${e.id}`);a&&(t==="toggle"?a.onclick=()=>{const o=a.dataset.checked!=="true";e.setAttribute("edit-value",o.toString()),e.render()}:a.onchange=()=>{e.setAttribute("edit-value",a.checked.toString())})},renderViewerContent:e=>{const t=e.getAttribute("edit-value")==="true",a=e.getAttribute("true-text")||"SI",o=e.getAttribute("false-text")||"NO";return`<div class="py-1" style="color:${t?"green":"red"}">${t?a:o}</div>`},renderPrinterContent:e=>{const t=e.getAttribute("edit-value")==="true",a=t?"#198754":"#dc3545",o=e.getAttribute("true-text")||"SÍ",r=e.getAttribute("false-text")||"NO";return`
        <div style="color: ${a}; font-size: inherit; padding: 2px 0; font-weight: bold;">
            ${t?o:r}
        </div>
    `},getWhatsappContent:e=>{const t=e.getAttribute("title"),a=e.getAttribute("edit-value")==="true",o=e.getAttribute("true-text")||"SI",r=e.getAttribute("false-text")||"NO";return`*${t}:* ${a?`✅ ${o}`:`❌ ${r}`}`}}},H={icon:"🔗",shortLabel:"Enlace",longLabel:"Enlace / URL",spanEV:12,spanP:12,color:"primary",settings:{customTitle:"Opciones de Visualización",customIcon:"fa-eye",custom:[{id:"displayMode",attr:"display-mode",caption:"Visualización en Lectura/Impresión",type:"select",default:"link",options:[{label:"Hipervínculo Clásico",value:"link"},{label:"Botón de Acción (Llamado a la Acción)",value:"button"},{label:"Texto Plano (No clickeable)",value:"text"},{label:"Oculto (no se muestra en Visor/Impresión)",value:"hidden"}],onChange:{button:{buttonText:{configurable:!0},themeColor:{configurable:!0}},hidden:{buttonText:{configurable:!1},themeColor:{configurable:!1},showTextUrl:{configurable:!1},showQR:{configurable:!1},openInNewTab:{configurable:!1}},_default:{buttonText:{configurable:!1},themeColor:{configurable:!1}}}},{id:"showTextUrl",jsonAttr:"options",type:"boolean",default:!0,caption:"Mostrar Texto Literal de la URL",help:'Si se desactiva, solo se mostrará el texto amigable (Ej: "Ver Documento"), ocultando la dirección "https://...".'},{id:"showQR",jsonAttr:"options",type:"boolean",default:!0,caption:"Habilitar Código QR",help:"Añade un botón para ver el QR en pantalla y lo dibuja en las exportaciones a PDF. No aplica en Texto Plano/Oculto."},{id:"openInNewTab",attr:"open-in-new-tab",caption:"Abrir en Pestaña Nueva",type:"boolean",default:!0,help:"Solo afecta al Visor (un PDF exportado no controla pestañas del navegador)."},{id:"buttonText",attr:"button-text",caption:"Texto del Botón",type:"text",default:"Abrir Enlace"},{id:"themeColor",attr:"theme-color",caption:"Color del Botón",type:"select",default:"primary",options:[{label:"Primario",value:"primary"},{label:"Secundario",value:"secondary"},{label:"Éxito",value:"success"},{label:"Información",value:"info"},{label:"Peligro",value:"danger"},{label:"Oscuro",value:"dark"}]}],width:!0,visibility:!0,style:!0},aiPrompt:"I/O: JSON String. Requiere obligatoriamente un JSON stringificado: doc.setValue('id', JSON.stringify({text: 'Título', url: 'https...'}));",aiPromptLong:`I/O: JSON String. doc.setValue() REQUIERE obligatoriamente JSON.stringify({text: 'Título visible', url: 'https://...'}).
    doc.getValue() devuelve ese mismo JSON stringificado — usa JSON.parse() para leer text y url.
    
    Atributos configurables:
      • displayMode (attr: display-mode): cómo se muestra en Visor/Impresión — "link" (por defecto, hipervínculo), "button" (botón), "plain" (texto plano), "hidden" (oculto).
      • showTextUrl (attr: show-text-url, boolean): mostrar la URL literal además del texto. Default: true.
      • showQR (attr: show-qr, boolean): habilitar código QR de la URL. Default: true.
      • openInNewTab (attr: open-in-new-tab, boolean): abrir enlace en nueva pestaña. Default: true.
      • buttonText (attr: button-text): texto del botón cuando displayMode="button". Default: "Abrir Enlace".
      • themeColor (attr: theme-color): color del botón. Default: "primary".
    
    Casos de uso: enlaces a sitios web, documentos externos, recursos online, descargas.
    
    Restricciones:
      • CRÍTICO: SIEMPRE usa JSON.stringify — NUNCA envíes un string plano ni un objeto sin stringificar.
      • La URL debe incluir el protocolo (https:// o http://).
      • "text" es el texto visible del enlace, "url" es la dirección real.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('enlace', JSON.stringify({text: 'Google', url: 'https://google.com'}));
      • Para leer: const {text, url} = JSON.parse(doc.getValue('enlace'));`},F={icon:"📊",shortLabel:"Tabla",longLabel:"Tabla Dinámica",spanEV:12,spanP:12,color:"primary",settings:{custom:[],width:!0,visibility:!0,style:!0},columnBuilder:{excludedTypes:["table","divider","chart"]},aiPromptLong:`I/O: Array of Objects. doc.getValue() retorna una matriz de objetos, uno por fila. Cada clave es el ID real de la columna configurada (ej: [{cantidad: 2, precio_unitario: 10}]).
    doc.setValue() espera el mismo formato: un Array de Objects con las mismas claves de columna.
    
    Atributos configurables:
      • No tiene settings.custom simples — la tabla se configura visualmente (agregar/quitar columnas, tipos de columna, encabezados).
      • Cada columna de la tabla tiene su propio tipo (string, number, currency, etc.) y sus atributos.
      • El ID de cada columna se establece al crearla — úsalo como clave en el I/O.
    
    Casos de uso: ítems de factura, líneas de pedido, listas de productos, detalle de cotización, cualquier dato tabular.
    
    Restricciones:
      • CRÍTICO: Las claves del I/O son los IDs reales de las columnas — NO inventes prefijos como "col_". Usa exactamente el ID configurado.
      • Para columnas numéricas dentro de la tabla, el valor es un Number (igual que number/currency).
      • Para columnas tipo select dentro de la tabla, el valor es un String de la lista.
      • Si la tabla tiene fórmulas (subtotal por fila), el valor calculado se refleja automáticamente.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('items', [{cantidad: 2, precio_unitario: 100, descripcion: 'Producto A'}]);
      • Para leer: const items = doc.getValue('items'); items.forEach(row => console.log(row.cantidad));
      • Para sumar una columna: const total = items.reduce((sum, r) => sum + (r.precio_unitario * r.cantidad), 0);
      • Para agregar filas: doc.setValue('items', [...doc.getValue('items'), nuevaFila]);`,aiPrompt:"I/O: Array of Objects. doc.getValue() retorna una matriz de objetos, uno por fila; cada clave es el ID real de la columna tal como fue configurada en la tabla (ej: [{cantidad: 2, precio_unitario: 10}] — NO uses prefijos inventados como 'col_'). doc.setValue() espera este mismo formato, usando esas mismas claves de columna."},Y={icon:"📈",shortLabel:"Gráfico",longLabel:"Gráfico",spanEV:12,spanP:12,color:"danger",settings:{customHideTitle:!0,custom:[{id:"behavior",type:"raw",render:e=>{const t=e.hasAttribute("is-automatic");return`
              <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-bolt me-2"></i>Comportamiento</h6>
              <div class="bg-white p-3 border rounded shadow-sm mb-3">
                <div class="form-check form-switch mb-1">
                  <input class="form-check-input fs-5" type="checkbox" id="modal-chk-auto-${e.id}" ${t?"checked":""}>
                  <label class="form-check-label small fw-bold text-dark ms-2 mt-1" for="modal-chk-auto-${e.id}">Generación Automática (por Script)</label>
                </div>
                <div class="form-text small text-muted">
                  Si se activa, el gráfico se alimentará exclusivamente mediante scripts en segundo plano.
                </div>
              </div>
            `},save:e=>{const t=document.getElementById(`modal-chk-auto-${e.id}`);t&&(t.checked?e.setAttribute("is-automatic",""):e.removeAttribute("is-automatic"))}},{id:"appearance",type:"raw",render:e=>{let t={aspectPercentage:75,bgColor:"#ffffff"};try{const r=e.getAttribute("options");r&&(t={...t,...JSON.parse(r)})}catch{}const a=Number(t.aspectPercentage)||75,o=[100,75,56.25,50].includes(a);return`
              <h6 class="text-primary fw-bold mb-3"><i class="fa-solid fa-palette me-2"></i>Apariencia Visual</h6>
              <div class="row g-3 bg-white p-3 border rounded shadow-sm">
                <div class="col-md-4">
                    <label class="form-label small fw-bold text-dark mb-1">Proporción Rápida</label>
                    <select class="form-select form-select-sm" id="modal-chart-ratio-preset-${e.id}"
                            onchange="if(this.value !== 'custom') document.getElementById('modal-chart-aspect-${e.id}').value = this.value;">
                        <option value="100" ${a===100?"selected":""}>1:1 (Cuadrado)</option>
                        <option value="75" ${a===75?"selected":""}>4:3 (Estándar)</option>
                        <option value="56.25" ${a===56.25?"selected":""}>16:9 (Panorámico)</option>
                        <option value="50" ${a===50?"selected":""}>2:1 (Horizontal)</option>
                        <option value="custom" ${o?"":"selected"}>Personalizado</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label small fw-bold text-dark mb-1">Alto relativo al Ancho</label>
                    <div class="input-group input-group-sm">
                        <input type="number" class="form-control" id="modal-chart-aspect-${e.id}" value="${a}" min="5" max="500" step="0.01"
                               oninput="document.getElementById('modal-chart-ratio-preset-${e.id}').value = 'custom';">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="form-label small fw-bold text-dark mb-1">Color de Fondo</label>
                    <input type="color" class="form-control form-control-sm form-control-color w-100" id="modal-chart-bg-${e.id}" value="${t.bgColor}" title="Seleccione un color">
                </div>
              </div>
            `},save:e=>{const t=document.getElementById(`modal-chart-aspect-${e.id}`),a=document.getElementById(`modal-chart-bg-${e.id}`);if(t&&a){const o={aspectPercentage:parseFloat(t.value)||75,bgColor:a.value};e.setAttribute("options",JSON.stringify(o))}}}],width:!0,visibility:!0,style:!1},aiPrompt:"Ignorar en cálculos estándar. Para actualizar datos, usa doc.setValue('id', JSON.stringify({labels: [...], data: [...], type: 'bar'})); 'type' es opcional (bar, line, area, pie, doughnut, radar, polarArea) y por defecto es 'bar'.",aiPromptLong:`I/O: JSON String (solo escritura). Para actualizar datos: doc.setValue('id', JSON.stringify({labels: [...], data: [...], type: 'bar'}));
    doc.getValue() no es útil — el gráfico no almacena datos interactivos que el AI necesite leer.
    
    Atributos configurables:
      • is-automatic (attr: is-automatic, boolean): si está presente, el gráfico se alimenta exclusivamente por scripts. No tiene entrada manual.
      • options (attr: options, JSON): opciones visuales — JSON.stringify({aspectPercentage: 75, bgColor: '#ffffff'}).
        - aspectPercentage: alto relativo al ancho en %. Presets: 100 (1:1), 75 (4:3 estándar), 56.25 (16:9), 50 (2:1).
        - bgColor: color de fondo del gráfico (hex).
    
    Tipos de gráfico disponibles (campo type):
      • bar (por defecto), line, area, pie, doughnut, radar, polarArea.
    
    Casos de uso: gráficos de barras para comparación, líneas para tendencias, pie/doughnut para distribución, radar para perfiles.
    
    Restricciones:
      • Ignorar en cálculos estándar — no es un campo numérico.
      • data debe ser un array de Numbers — no strings.
      • labels y data deben tener la misma longitud.
      • type es opcional — por defecto es 'bar'.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('grafico', JSON.stringify({labels: ['Ene','Feb','Mar'], data: [100, 200, 150], type: 'bar'}));
      • Para gráficos automáticos: marca is-automatic y alimenta desde un script que calcule los datos.
      • El valor de aspecto 75 = formato 4:3 estándar. Para 16:9 usa 56.25.`},J={icon:"🌐",shortLabel:"HTML",longLabel:"Bloque HTML",spanEV:12,spanP:12,color:"danger",settings:{customTitle:"Comportamiento del Reporte",customIcon:"fa-code",custom:[{id:"overflow",caption:"Desbordamiento",type:"select",default:"visible",row:"overflowRow",options:[{label:"Visible (expande el documento)",value:"visible"},{label:"Barra de Desplazamiento Interna",value:"scroll"}],onChange:{scroll:{maxHeight:{configurable:!0}},_default:{maxHeight:{configurable:!1}}}},{id:"maxHeight",attr:"max-height",caption:"Altura Máxima (px)",type:"number",default:300,row:"overflowRow"},{id:"defaultContent",attr:"default-content",caption:"Contenido Inicial (HTML)",type:"textarea",rows:3,default:"",placeholder:'<div class="alert alert-secondary text-center">Esperando datos...</div>',controlClass:"font-monospace small",help:'Se muestra en Editor y Visor antes de que un script/ETL escriba el primer resultado. Vacío = el mensaje de siempre ("Esperando datos del reporte...").'}],width:!0,visibility:["hideEdit","hideView","hidePrint","hideWhatsapp"],style:!1},field:{kind:"html",renderEditorContent(e,t,a){const o=e.getAttribute("title")||"Reporte",r=e.getAttribute("default-content")||"<div class='text-muted small text-center p-3 border rounded border-dashed'>Esperando datos del reporte...</div>",i=t||r,l=e.getAttribute("overflow")||"visible",s=parseInt(e.getAttribute("max-height"),10)||300,n=l==="scroll"?` style="max-height:${s}px; overflow-y:auto;"`:"";return`
      <div class="card border-0 shadow-sm border-start border-4 border-${e.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-3">
            <i class="fa-solid fa-table me-1 text-${e.uiColor}"></i> ${o}
          </label>
          <div id="html-container-${e.id}" class="report-container"${n}>
            ${i}
          </div>
        </div>
      </div>
    `},renderViewerContent(e,t,a){const o=e.getAttribute("title")||"Reporte",r=e.getAttribute("default-content")||"<div class='text-muted small text-center p-3 border rounded border-dashed'>Esperando datos del reporte...</div>",i=t||r,l=e.getAttribute("overflow")||"visible",s=parseInt(e.getAttribute("max-height"),10)||300,n=l==="scroll"?` max-height:${s}px; overflow-y:auto;`:"";return`
      <div class="mb-2 w-100">
        <label class="d-block fw-bold text-body small mb-2">
          <i class="fa-solid fa-table me-1 text-${e.uiColor}"></i> ${o}
        </label>
        <div class="report-container w-100" style="overflow-x: auto;${n}">
          ${i}
        </div>
      </div>
    `},renderPrinterContent(e,t,a){return t?`
      <div class="html-print-container" style="width: 100%; margin-top: 5px;">
        ${t}
      </div>
    `:null}},aiPrompt:"I/O: String (HTML). doc.setValue('id', '<div>...</div>') inyecta el HTML tal cual — así es como un script arma reportes, tarjetas o alertas dinámicas en este campo. doc.getValue() devuelve esa misma cadena. NO lo uses en cálculos aritméticos: no contiene números, solo marcado visual.",aiPromptLong:`I/O: String (HTML). doc.setValue('id', '<div>...</div>') inyecta HTML tal cual — así es como un script arma reportes, tarjetas o alertas dinámicas.
    doc.getValue() devuelve esa misma cadena HTML.
    
    Atributos configurables:
      • overflow (attr: overflow): comportamiento de desbordamiento — "visible" (por defecto), "scroll" (con scroll vertical), "hidden" (recorta).
      • max-height (attr: max-height): altura máxima en píxeles antes de activar scroll/recorte. Default: 300. Solo aplica si overflow="scroll".
      • defaultContent (attr: default-content): contenido HTML inicial que se muestra antes de que un script escriba el primer resultado.
    
    Casos de uso: reportes dinámicos, tarjetas resumen, alertas, paneles informativos, contenido HTML generado por scripts.
    
    Restricciones:
      • NO lo uses en cálculos aritméticos — no contiene números, solo marcado visual.
      • El HTML se inyecta tal cual — asegúrate de que sea válido y seguro (no scripts, no event handlers inline).
      • Para contenido estático que el usuario edita manualmente, usa "text" en modo enriquecido — html es para contenido generado por scripts.
    
    Tips para el AI:
      • Ejemplo: doc.setValue('resumen', '<div class="alert alert-success">Total: $1,500</div>');
      • Para tarjetas con estilos: doc.setValue('card', '<div style="border:1px solid #ddd;padding:12px;border-radius:8px;"><h4>Título</h4><p>Contenido</p></div>');
      • Para leer: const html = doc.getValue('resumen'); // retorna el string HTML completo`},B={icon:"⚙️",shortLabel:"Lógica",longLabel:"Macro Lógica",spanEV:12,spanP:12,color:"dark",settings:{customTitle:"Lógica y Ejecución",customIcon:"fa-microchip",custom:[{id:"trigger",caption:"Gatillo (Ejecución)",type:"select",default:"reactive",options:[{label:"Reactivo (Por Dependencias)",value:"reactive"},{label:"Manual (Botón en Editor)",value:"manual"},{label:"Automático (Al Iniciar)",value:"auto"},{label:"Librería (Funciones Reutilizables)",value:"library"}],onChange:{library:{libraryHelp:{configurable:!0}},_default:{libraryHelp:{configurable:!1}}}},{id:"scriptCode",attr:"script-code",caption:"Código JavaScript",type:"textarea",rows:6,default:"",placeholder:"doc.setValue('total', doc.getValue('cant') * doc.getValue('precio'));",controlClass:"font-monospace small text-bg-dark text-light border-0 shadow-inner",onSave:(e,t)=>e._extractDependencies(t)},{id:"codeTools",type:"raw",render:e=>`
          <div class="d-flex justify-content-end mb-2">
             <button type="button" class="btn btn-sm btn-outline-secondary shadow-sm" 
                     onclick="document.getElementById('${e.id}')._openServiceSelector()">
                 <i class="fa-solid fa-plug-circle-bolt text-primary me-1"></i> Invocar un Servicio...
             </button>
          </div>
        `},{id:"libraryHelp",type:"raw",render:()=>`
              <div class="p-2 bg-light border rounded mb-2 small">
                  <div class="fw-bold text-muted mb-1">
                      <i class="fa-solid fa-book me-1"></i> Scripts tipo Librería
                  </div>
                  <div class="text-muted mb-2">
                      Si el Gatillo de este campo es <strong>"Librería"</strong>, el
                      código no se ejecuta solo: debe devolver un objeto de
                      funciones para que otros scripts las usen.
                  </div>
                  <pre class="bg-dark text-light p-2 rounded mb-2" style="font-size:0.7rem; white-space:pre-wrap;">return {
  calcularTotal: (cant, precio) => cant * precio,
};</pre>
                  <div class="text-muted">
                      Desde cualquier otro script (Reactivo/Manual/Automático),
                      para usarla:
                  </div>
                  <pre class="bg-dark text-light p-2 rounded mb-0" style="font-size:0.7rem; white-space:pre-wrap;">const lib = await doc.lib('id_del_campo_libreria');
doc.setValue('total', lib.calcularTotal(doc.getValue('cant'), doc.getValue('precio')));</pre>
              </div>
            `}],advancedCustom:[{id:"esServicio",attr:"es-servicio",caption:"¿Es un Servicio?",type:"boolean",default:!1,help:"Permite que OTRO documento suyo llame este script para consultar o modificar los datos de ESTE documento — sin tener que abrirlo. Se persiste de inmediato, porque son sus propios datos.",onChange:{true:{servicioDescripcion:{configurable:!0},verboGet:{configurable:!0},verboPost:{configurable:!0},verboPut:{configurable:!0},verboDelete:{configurable:!0},servicioHelp:{configurable:!0}},_default:{servicioDescripcion:{configurable:!1},verboGet:{configurable:!1},verboPost:{configurable:!1},verboPut:{configurable:!1},verboDelete:{configurable:!1},servicioHelp:{configurable:!1}}}},{id:"servicioDescripcion",attr:"servicio-descripcion",caption:"Descripción del Servicio",type:"textarea",rows:2,default:"",placeholder:"Ej: Consulta un propietario por código de apartamento y devuelve su deuda actual.",help:"El diccionario del servicio: qué hace, qué espera recibir y qué devuelve — para no tener que leer el código después."},{id:"verboGet",attr:"verbo-get",caption:"get — Consultar",type:"boolean",default:!1,row:"verbos"},{id:"verboPost",attr:"verbo-post",caption:"post — Crear/Registrar",type:"boolean",default:!1,row:"verbos"},{id:"verboPut",attr:"verbo-put",caption:"put — Actualizar",type:"boolean",default:!1,row:"verbos"},{id:"verboDelete",attr:"verbo-delete",caption:"delete — Eliminar",type:"boolean",default:!1,row:"verbos"},{id:"servicioHelp",type:"raw",render:e=>`
              <div class="p-2 bg-light border rounded mb-2 small">
                  <div class="fw-bold text-muted mb-1">
                      <i class="fa-solid fa-plug-circle-bolt me-1"></i> Cómo lo llama otro documento
                  </div>
 <!-- ... (textos y pre existentes) ... -->
                  <div class="text-muted mt-2">
                      Desde OTRO documento suyo, para llamarlo:
                  </div>
                  <pre class="bg-dark text-light p-2 rounded mb-0" style="font-size:0.7rem; white-space:pre-wrap;">const resp = await doc.servicio('idDelDocumento.idDeEsteScript').get({ apto: '4-3' });</pre>
                  
 <!-- 👇 NUEVO: Botón de prueba local -->
                  <hr class="border-secondary my-2 opacity-25">
                  <button type="button" class="btn btn-sm btn-dark w-100 shadow-sm" 
                          onclick="document.getElementById('${e.id}')._openServiceTester()">
                      <i class="fa-solid fa-flask text-warning me-1"></i> Probar este Servicio localmente
                  </button>
              </div>
            `}],width:!0,visibility:!0,style:!1,aiCustomTitle:"Asistente de Código IA",aiCustomIcon:"fa-wand-magic-sparkles",aiCustom:[{id:"aiAssistant",type:"raw",render:e=>{let t=[];try{t=JSON.parse(e.getAttribute("dependencies")||"[]")}catch{}const a=t.length>0?t.join(", "):"Ninguna";return`
              <div class="p-3 bg-info bg-opacity-10 border border-info rounded mb-2 shadow-sm">
                  <label class="form-label small fw-bold text-info mb-2">
                      <i class="fa-solid fa-wand-magic-sparkles me-1"></i> Asistente de Código IA
                  </label>
                  <div class="small fw-bold text-info-emphasis mb-2">
                      ${!!(e.getAttribute("script-code")||"").trim()?'<i class="fa-solid fa-pen-to-square me-1"></i> Modo: modificará el código actual':'<i class="fa-solid fa-plus me-1"></i> Modo: creará código nuevo'}
                  </div>
                  <div class="input-group">
                      <textarea id="ai-idea-${e.id}" class="form-control border-info" rows="2"
                                placeholder="Describe la lógica detalladamente. Ej: Suma cantidad y precio, ponlo en rojo si pasa de 100..."
                                spellcheck="false"></textarea>
                      <button type="button" class="btn btn-info text-white fw-bold px-3 text-center" id="btn-copy-ai-${e.id}"
                              onclick="document.getElementById('${e.id}')._copyAIPrompt()">
                          <i class="fa-regular fa-copy d-block mb-1 fs-5"></i> Copiar<br>Prompt
                      </button>
                  </div>
                  <div class="form-text small text-info mt-2" style="font-size: 0.75rem;">
                      <strong>Instrucciones:</strong> Describe la lógica (para crear código nuevo, o el cambio que quieres para el código actual) y haz clic en copiar. Pega el texto en tu IA (ChatGPT, Claude, Gemini). Analiza su respuesta y, cuando genere el código final, cópialo en el recuadro negro de la pestaña "General".
                  </div>
                  <div class="form-check mt-2 pt-2 border-top border-info-subtle">
                      <input class="form-check-input" type="checkbox" id="ai-attach-detail-${e.id}"
                             onchange="document.getElementById('btn-download-ai-ref-${e.id}').classList.toggle('d-none', !this.checked); document.getElementById('${e.id}')._resyncAiClipboard();">
                      <label class="form-check-label small" for="ai-attach-detail-${e.id}">
                          Voy a adjuntar el archivo de referencia detallada (Nivel Plus)
                      </label>
                      <button type="button" class="btn btn-sm btn-outline-info ms-2 d-none" id="btn-download-ai-ref-${e.id}"
                              onclick="document.getElementById('${e.id}')._downloadAiReference()">
                          <i class="fa-solid fa-file-arrow-down me-1"></i> Descargar Referencia
                      </button>
                  </div>
              </div>

              <div class="form-text small mt-3">
                  <i class="fa-solid fa-diagram-project text-muted me-1"></i> Dependencias actuales:
                  <span class="fw-bold text-primary ms-1">${a}</span>
              </div>
              <div class="form-text small text-muted mt-1 border-top pt-2">
                  Las dependencias se escanearán y actualizarán automáticamente al Guardar.
              </div>
            `}}]},aiPrompt:"REGLA OBLIGATORIA: Escribe ÚNICAMENTE código JavaScript puro. NO USES etiquetas de bloque de código ni expliques el código.",aiPromptLong:`I/O: Ninguno (no es un campo de datos). El código JavaScript se ejecuta según el gatillo configurado.
    
    Atributos configurables:
      • trigger (attr: trigger): momento de ejecución — "reactive" (por defecto, se ejecuta cuando cambia cualquier campo referenciado), "manual" (solo al hacer clic en el botón "Ejecutar").
      • scriptCode (attr: script-code): el código JavaScript puro del script.
    
    REGLA OBLIGATORIA: Escribe ÚNICAMENTE código JavaScript puro. NO USES etiquetas de bloque de código ni expliques el código.
    
    Casos de uso: cálculos (totales, subtotales, impuestos), validaciones, formateo condicional, llamadas a API, actualización de gráficos, generación de reportes HTML.
    
    Restricciones:
      • El código es JavaScript PURO — no markdown, no comentarios fuera del código, no bloques de código.
      • Accede a otros campos vía doc.getValue('id') y doc.setValue('id', valor).
      • Para APIs: doc.api('api_id').execute(payload) retorna una Promesa.
      • NUNCA uses document.getElementById ni manipulación directa del DOM — usa la API doc.* exclusivamente.
      • Los scripts se ejecutan en el contexto del documento — no tienen acceso a variables globales del navegador.
    
    Tips para el AI:
      • Para cálculos: const total = doc.getValue('precio') * doc.getValue('cantidad'); doc.setValue('subtotal', total);
      • Para condicionales: if (doc.getValue('estado') === 'Aprobado') { doc.setValue('resultado', 'Proceder'); }
      • Para APIs: const data = await doc.api('mi_api').execute({param: 'valor'}); doc.setValue('resultado', data);
      • Para tablas: const rows = doc.getValue('items'); const total = rows.reduce((s, r) => s + r.precio * r.cantidad, 0);
      • El gatillo "reactive" ejecuta el script automáticamente cuando cambian los campos que lee — no necesitas listeners.`},K={icon:"🔌",shortLabel:"API",longLabel:"Conector API (Headless)",spanEV:12,spanP:12,color:"dark",description:"Nodo de conexión sin estado (stateless) para integraciones HTTP. Invisible en la interfaz; se ejecuta exclusivamente mediante doc.api('id')/row.api('id') desde un campo de tipo Script.",settings:{customTitle:"Conexión API",customIcon:"fa-plug",custom:[{id:"method",caption:"Método HTTP",type:"select",default:"GET",options:[{label:"GET (Obtener datos)",value:"GET"},{label:"POST (Enviar datos)",value:"POST"},{label:"PUT (Actualizar)",value:"PUT"},{label:"DELETE (Borrar)",value:"DELETE"}],onChange:{GET:{requestBody:{configurable:!1}},DELETE:{requestBody:{configurable:!1}},_default:{requestBody:{configurable:!0}}}},{id:"endpoint",caption:"URL del Endpoint",type:"text",default:"https://",placeholder:"https://api.ejemplo.com/recurso/@{campoId}",help:"Puedes usar @{id_de_campo} para insertar el valor actual de otro campo del documento (mismo mecanismo que las Fuentes ETL)."},{id:"headers",caption:"Cabeceras",type:"textarea",rows:4,default:'"Content-Type": "application/json"',controlClass:"font-monospace small text-bg-dark text-light border-0 shadow-inner",placeholder:'"Authorization": "Bearer @{token}", "X-Api-Key": "1234"',help:'Escribe solo el contenido, separado por comas — sin llaves { }, la app las agrega automáticamente. Ej: "Authorization": "Bearer @{token}", "X-Api-Key": "1234"'},{id:"requestBody",attr:"request-body",caption:"Cuerpo Base",type:"textarea",rows:4,default:"",controlClass:"font-monospace small text-bg-dark text-light border-0 shadow-inner",placeholder:'"monto": 50, "moneda": "USD"',help:"Escribe solo el contenido, separado por comas — sin llaves { }, la app las agrega automáticamente. Se combina con el 'body' que envíe el script al llamar a .execute(). No aplica para GET/DELETE."},{id:"responsePath",attr:"response-path",caption:"Ruta de Extracción (Opcional)",type:"text",default:"",placeholder:"Ej: data.resultados",help:"Si la respuesta es JSON y solo necesitas una parte, indica la ruta con puntos. Vacío = se devuelve la respuesta completa."},{id:"apiHelp",type:"raw",render:()=>`
              <div class="p-2 bg-light border rounded mb-2 small">
                  <div class="fw-bold text-muted mb-1">
                      <i class="fa-solid fa-plug me-1"></i> Cómo consumir este componente
                  </div>
                  <div class="text-muted mb-2">
                      Este campo no hace nada por sí solo: configura la conexión
                      (método, endpoint, cabeceras, cuerpo base) y se invoca desde
                      cualquier Script (Reactivo/Manual/Automático/Librería).
                  </div>
                  <pre class="bg-dark text-light p-2 rounded mb-0" style="font-size:0.7rem; white-space:pre-wrap;">const api = doc.api('id_del_campo_api');
const resp = await api.execute({
  path: '/123',            // se agrega al final del endpoint
  query: { activo: true }, // -> ?activo=true
  body: { monto: 50 },     // se combina con el Cuerpo Base (POST/PUT)
});</pre>
              </div>
            `}],width:!1,visibility:!1,style:!1},aiPrompt:"I/O: Ninguno (Stateless). No responde a getValue/setValue. Expone doc.api('id')/row.api('id') -> { execute(dynamicPayload) }, un método asíncrono que retorna una Promesa con la respuesta HTTP (o la porción indicada por 'Ruta de Extracción').",aiPromptLong:`I/O: Stateless (no responde a getValue/setValue). Expone doc.api('id') / row.api('id') → { execute(dynamicPayload) }, un método asíncrono que retorna una Promesa con la respuesta HTTP.
    
    Atributos configurables:
      • method (attr: method): método HTTP — "GET" (por defecto), "POST", "PUT", "PATCH", "DELETE".
      • endpoint (attr: endpoint): URL del endpoint. Default: "https://" (debe configurarse).
      • responsePath (attr: response-path): ruta de extracción de la respuesta JSON. Vacío = respuesta completa. Ej: "data.results" extrae solo esa porción.
    
    Casos de uso: consultar datos externos (REST APIs), enviar datos a servicios, integraciones con CRMs, ERPs, pasarelas de pago.
    
    Restricciones:
      • CRÍTICO: doc.api('id').execute(payload) es asíncrono — SIEMPRE usa await o .then().
      • No uses getValue/setValue en un componente api — no almacena datos.
      • execute() recibe un payload dinámico — el formato depende de la API destino.
      • La respuesta es la que devuelve el endpoint — maneja errores con try/catch.
    
    Tips para el AI:
      • Ejemplo GET: const data = await doc.api('api_clientes').execute(); doc.setValue('nombre', data.nombre);
      • Ejemplo POST: const result = await doc.api('api_crear').execute({nombre: 'Juan', email: 'juan@e.com'});
      • Con responsePath: si la API retorna {data: {results: [...]}}, y responsePath="data.results", execute() retorna directamente [...].
      • Para leer datos de la API en un script: const resp = await doc.api('mi_api').execute({id: doc.getValue('cliente_id')});`},b={input:A,divider:w,numeric:S,datetime:E,media:C,string:P,text:$,email:V,password:I,number:N,currency:O,percentage:L,date:M,time:k,section:D,subsection:R,image:j,audio:q,video:_,select:z,boolean:U,url:H,table:F,chart:Y,html:J,script:B,api:K};function f(e){let t="";return typeof e=="string"?t=e:e&&typeof e=="object"&&(t=e.tag||e.tagName||""),(t||"").toLowerCase().split("-")[1]||""}function ae(e,t){return b[f(e)]||t}function y(e){var a;const t=f(e);return((a=b[t])==null?void 0:a.columnFacade)||t}function oe(e){return y(e)==="numeric"}const h=Object.freeze(Object.fromEntries(Object.keys(b).map(e=>[e,`setting-${e}`]))),re=Object.freeze(Object.fromEntries(Object.keys(b).map(e=>[e,`SETTING-${e.toUpperCase()}`]))),G=()=>{const e={},t=new Set;for(const a of Object.values(b))a.columnFacade&&t.add(a.columnFacade);for(const[a,o]of Object.entries(b)){const r=h[a];if(o.columnFacade){const i=o.columnFacade;e[i]||(e[i]=[]),e[i].push(r)}else t.has(a)||(e[a]||(e[a]=[]),e[a].push(r))}return e},m=G(),ie=Object.freeze(m.numeric||[]);Object.freeze(m.input||[]);const W=Object.freeze(m.divider||[]);Object.freeze(m.datetime||[]);Object.freeze(m.media||[]);const Q=Object.freeze(m.table||[]),X=Object.freeze(m.script||[]),Z=Object.freeze(m.api||[]);Object.freeze(m.url||[]);Object.freeze(m.boolean||[]);Object.freeze(m.select||[]);Object.freeze(m.chart||[]);Object.freeze(m.html||[]);const g=e=>{const t=new Set(e);return new Proxy(t,{get(a,o){if(o==="add"||o==="delete"||o==="clear")return()=>{throw new TypeError("Cannot mutate a frozen Set")};const r=a[o];return typeof r=="function"?r.bind(a):r},set(){throw new TypeError("Cannot set properties on a frozen Set")},deleteProperty(){throw new TypeError("Cannot delete properties on a frozen Set")}})};g(Q);g(W);g(X);g(Z);function le(e){return f(e)==="table"}function se(e){return f(e)==="script"}function ne(e){return f(e)==="api"}function ce(e){return y(e)==="divider"}function de(e){return f(e)==="url"}function ue(e){return f(e)==="boolean"}const ee=()=>{var t;const e=[];for(const[a,o]of Object.entries(b)){const r=(t=o.settings)==null?void 0:t.formula;(r===!0||typeof r=="function")&&e.push(h[a])}return e.join(", ")},pe=ee();export{te as C,pe as F,ie as N,h as T,d as U,ne as a,ce as b,le as c,re as d,b as e,oe as f,f as g,ae as h,se as i,ue as j,de as k};
