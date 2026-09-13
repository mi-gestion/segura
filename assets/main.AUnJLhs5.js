const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editor-api.DwAUoQlI.js","./BaseElement.d_VolxdG.js","./Elements.B8W_hxTW.js","./FormulaEngine.CYGke5JL.js","./printer-api.DYqTxsiG.js","./setting-api.CNqqAI8R.js","./viewer-api.Dvp8IGL5.js","./editor-audio.DtReFgJQ.js","./printer-audio.D3T3MxdR.js","./setting-audio.DXvfrvdH.js","./setting-media.uBnQQwJ7.js","./viewer-audio.DzsNipXj.js","./editor-boolean.DeJr9wtI.js","./printer-boolean.DYsOSZ_y.js","./setting-boolean.DvCfULpa.js","./viewer-boolean.DaLCv843.js","./editor-chart.BS69iISi.js","./ChartCore.DVpqK6sM.js","./printer-chart.n2-07nuS.js","./setting-chart.C3THylS-.js","./viewer-chart.D5Ji5xpW.js","./editor-currency.BrcoeECN.js","./printer-currency.BcJVqy76.js","./setting-currency.qpU4Lmon.js","./setting-numeric.CJaAKVsv.js","./viewer-currency.CG9xyWf8.js","./editor-date.k6rwQK5B.js","./printer-date.ByYRF78u.js","./setting-date.DTSA_SCm.js","./setting-datetime.DCz_SFIS.js","./viewer-date.BRrfr_65.js","./editor-datetime.D3lOlA6a.js","./printer-datetime.DXKOqElu.js","./viewer-datetime.4uRpKm2k.js","./editor-divider.Dw2hlfTt.js","./printer-divider.CwyDEGsv.js","./setting-divider.B3BOIlKT.js","./viewer-divider.Bjy2PcTo.js","./editor-email.Bclm6AQB.js","./printer-email.BKtJKIAH.js","./setting-email.DuDehJaF.js","./setting-input.DyA8OhJ-.js","./viewer-email.Dj3G6JAR.js","./editor-html.Dlj_AYoa.js","./printer-html.DgsEd7Rd.js","./setting-html.BP6EGrXQ.js","./viewer-html.s22pqV0E.js","./editor-image.DgUHDuK9.js","./printer-image.DLyDLKot.js","./setting-image.CZcQ0z62.js","./viewer-image.2a61M9yz.js","./editor-input.C9Cgeq6y.js","./printer-input.CyK9vCOc.js","./viewer-input.kv2GSLNz.js","./editor-media.B5iYQWha.js","./printer-media.CjDL1zFI.js","./viewer-media.DVBbelM_.js","./editor-number.BO-kFEtt.js","./printer-number.C10o-PjB.js","./setting-number.3tul-yaO.js","./viewer-number.3Xr9t_cq.js","./editor-numeric.CkSRw7vQ.js","./printer-numeric.E_W4EmUf.js","./viewer-numeric.CrauY51w.js","./editor-password.DcTVqhiX.js","./printer-password.DZEsAQLy.js","./setting-password.B79GnjPy.js","./viewer-password.CEjcChqJ.js","./editor-percentage.BBSW3wC3.js","./printer-percentage.C1NbIsoj.js","./setting-percentage.Clk-daUc.js","./viewer-percentage.C6WpHjJS.js","./editor-script.DLLUpkRI.js","./preload-helper.bdfVo_kr.js","./printer-script.BCryDrH4.js","./setting-script.CETcPGKh.js","./viewer-script.BjKq_Yh-.js","./editor-section.CAPzmqPw.js","./printer-section.WRwW7Xz2.js","./setting-section.DrHBe943.js","./viewer-section.BJHh4jjy.js","./editor-select.BBaZZWox.js","./printer-select.CgmTYbqZ.js","./setting-select.hyRu_lSA.js","./viewer-select.PnVUdFyq.js","./editor-string.CZb5rvKq.js","./printer-string.D85gSwju.js","./setting-string.OZYDoY_H.js","./viewer-string.CPdMidap.js","./editor-subsection.ByiR3p3p.js","./printer-subsection.DwC6h-8B.js","./setting-subsection.Di3J0FPE.js","./viewer-subsection.DplZy13C.js","./editor-table.BCzOX-nO.js","./TableUtils.DBlGEiXS.js","./printer-table.9H0AsOmM.js","./setting-table.CWTJt3_C.js","./viewer-table.Cv-IRsRB.js","./editor-text.hvZruTE9.js","./printer-text.DpUcYcaw.js","./setting-text.BxgBjXFd.js","./viewer-text.D4Lgb18u.js","./editor-time.mb5KFnQ-.js","./printer-time.DDsw5I0i.js","./setting-time.B23M12f2.js","./viewer-time.CKmYQLaN.js","./editor-url.DcG3Dz9V.js","./printer-url.Po4p18TA.js","./setting-url.DIYTJJUx.js","./viewer-url.Bh1inPvQ.js","./editor-video.CKA7fEFZ.js","./printer-video.D4J5xeJZ.js","./setting-video.dhVuMBkS.js","./viewer-video.BWzroOyI.js"])))=>i.map(i=>d[i]);
import{C as _,T as k,i as Le,a as xe,e as H,F as re,U as J,b as N}from"./Elements.B8W_hxTW.js";import{s as W,a as Te,b as R,c as fe,d as be,F as x,e as ve,o as ye,f as Ae,g as Re,h as Se,i as ne,E as Pe,r as Oe,u as Ce,_ as r}from"./preload-helper.bdfVo_kr.js";import{D as m,i as le,e as Q}from"./FormulaEngine.CYGke5JL.js";const T={validatePassword(t){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(t)},getCurrentUser(){return R.currentUser},onAuthStateChanged(t){return ye(R,t)},async login(t,e){try{const s=(await ve(R,t,e)).user;if(!s.emailVerified)throw await W(R),new Error("Debes verificar tu correo electronico antes de entrar.");return s}catch(a){throw console.error("[AUTH] Error:",a.code),a.message.includes("verificar tu correo")?a:new Error("Credenciales invalidas o error de conexion.")}},async signup(t,e){if(!this.validatePassword(e))throw new Error("La contrasenna no cumple los requisitos minimos.");try{const s=(await fe(R,t,e)).user;return await be(s),await x.set("users",s.uid,{email:t,createdAt:new Date().toISOString(),emailVerified:!1}),await W(R),{requiresVerification:!0}}catch(a){throw console.error("Error en registro:",a),a.code==="auth/email-already-in-use"?new Error("Este correo ya esta registrado."):new Error("Error en registro: "+a.message)}},async recoverPassword(t){if(!t)throw new Error("Por favor ingresa tu correo electronico.");try{return await Te(R,t),!0}catch(e){let a="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(a="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(a="El correo no es valido."),new Error(a)}},async logout(){return W(R)}},b={get _masterKey(){return _.masterKey},async initDB(){return!0},async save(t,e){const a=T.getCurrentUser();if(!a&&t!=="users")throw new Error("Usuario no autenticado.");const s=JSON.parse(JSON.stringify(e));if(s.userId=a?a.uid:t==="users"?s.id:null,s.isEncrypted&&s.content){if(!_.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");s.content=await _.encryptData(s.content)}!s.isEncrypted&&s.content&&Array.isArray(s.content)&&s.content.forEach(i=>{if(Array.isArray(i.value)&&i.value.length>0&&Array.isArray(i.value[0])){const o={};i.value.forEach((n,l)=>{o[l]=n}),i.value=o,i.storageMode="nested_map"}});try{return await x.set(t,s.id,s),!0}catch(i){throw console.error("[STORAGE] Error Firestore (save):",i),m.toast("Error al guardar en la nube: "+i.message,"danger"),i}},async getOne(t,e){if(!e)return null;const a=t==="doc";try{const s=await x.getRaw(t,e);if(!s)return null;if(s.isEncrypted&&s.content){if(!_.masterKey)return a&&console.warn("[STORAGE] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...s,content:null,decryptionError:!0};try{const i=await _.decryptData(s.content);let o={...s,content:i,decryptionError:!1};return this._hydrateDocument(o)}catch(i){return a&&console.error("[STORAGE] ⛔ Error al descifrar:",i),{...s,content:null,decryptionError:!0}}}return this._hydrateDocument(s)}catch(s){throw console.error(`[STORAGE] Error obteniendo ${t}/${e}:`,s),m.toast("Error al leer documento: "+s.message,"danger"),s}},async getAll(t){const e=T.getCurrentUser();if(!e)return[];try{const a=await x.queryWhere(t,"userId",e.uid);for(let s=0;s<a.length;s++){let i=a[s];if(i.isEncrypted&&_.masterKey)try{i.content=await _.decryptData(i.content)}catch(o){console.error("[STORAGE] Error descifrando documento en getAll:",o),i.decryptionError=!0}a[s]=this._hydrateDocument(i)}return a.sort((s,i)=>i.id.localeCompare(s.id))}catch(a){return console.error("[STORAGE] Error getAll:",a),m.toast("Error al cargar documentos: "+a.message,"danger"),[]}},async getAllRaw(t){const e=T.getCurrentUser();if(!e)return[];try{return(await x.queryWhere(t,"userId",e.uid)).sort((s,i)=>i.id.localeCompare(s.id))}catch(a){return console.error("[STORAGE] Error getAllRaw:",a),m.toast("Error al leer datos crudos: "+a.message,"danger"),[]}},async saveRaw(t,e){const a=T.getCurrentUser();if(!a)throw new Error("Usuario no autenticado.");if(!e.id)throw new Error("El registro a restaurar no tiene ID.");const s=JSON.parse(JSON.stringify(e));s.userId=a.uid;try{return await x.set(t,s.id,s),!0}catch(i){throw console.error("[STORAGE] Error Firestore (saveRaw):",i),m.toast("Error al restaurar en la nube: "+i.message,"danger"),i}},async delete(t,e){try{await x.delete(t,e)}catch(a){throw console.error("[STORAGE] Error Firestore (delete):",a),m.toast("No se pudo eliminar el documento: "+a.message,"danger"),new Error("No se pudo eliminar el documento.")}},_hydrateDocument(t){return t&&Array.isArray(t.content)&&t.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((a,s)=>Number(a)-Number(s)).map(a=>e.value[a]),delete e.storageMode)}),t},async hasSecurityConfigured(){const t=T.getCurrentUser();return t?x.exists("security",t.uid):!1},async saveSecurityVerifier(t){const e=T.getCurrentUser();if(!e)throw new Error("No hay una sesion de usuario activa.");try{return await x.set("security",e.uid,{userId:e.uid,verifier:t,updatedAt:new Date().toISOString()}),!0}catch(a){throw console.error("[STORAGE] Error guardando verificador:",a),a}},async changeMasterPhrase(t,e){try{if(!await this.verifyMasterPhrase(t))throw new Error("La frase maestra anterior es incorrecta.");await _.setMasterKey(e);const s=await _.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(s),!0}catch(a){throw console.error("[STORAGE] ❌ Error en changeMasterPhrase:",a),a}},async hardResetSecurity(){const t=T.getCurrentUser();if(!t)throw new Error("No hay sesion activa.");try{const a=(await x.queryCompound("doc",[{field:"userId",op:"==",value:t.uid},{field:"isEncrypted",op:"==",value:!0}])).map(s=>x.delete("doc",s.id));return await Promise.all(a),await x.delete("security",t.uid),_.masterKey=null,!0}catch(e){throw console.error("[STORAGE] Error en Hard Reset:",e),new Error("No se pudo completar el borrado masivo: "+e.message)}},async verifyMasterPhrase(t){const e=T.getCurrentUser();if(!e)return!1;try{const a=await x.getRaw("security",e.uid);if(!a||!a.verifier)return!1;const{verifier:s}=a,i=_.masterKey;try{await _.setMasterKey(t);const o=await _.decryptData(s);return!!(o&&o.check==="VERIFIED")}catch{return _.masterKey=i,!1}}catch(a){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRITICO:",a),!1}}},ee=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),se={_allDocs:[],_selectedIds:new Set,_docsLoaded:!1,init(){this._bindRelatedDocsPicker();const t=document.getElementById("related-docs-toggle");t&&t.addEventListener("show.bs.dropdown",()=>this._openRelatedDocsPicker())},refresh(){this._openRelatedDocsPicker()},async _openRelatedDocsPicker(){const t=document.getElementById("tpl-related-docs");this._selectedIds=new Set(((t==null?void 0:t.value)||"").split(",").map(a=>a.trim()).filter(Boolean));const e=document.getElementById("related-docs-list");e&&(e.innerHTML='<div class="text-center text-muted small py-3"><i class="fa-solid fa-spinner fa-spin me-1"></i>Cargando documentos...</div>'),this._renderRelatedDocsPills();try{const a=await b.getAll("doc");this._allDocs=a.map(s=>({id:s.id,title:s.title||"(Sin título)",templateTitle:s.templateTitle||"General"})).sort((s,i)=>s.title.localeCompare(i.title))}catch(a){console.error("[AdvancedConfigPanel] Error cargando documentos relacionados:",a),this._allDocs=[]}this._docsLoaded=!0,this._renderRelatedDocsList(""),this._renderRelatedDocsPills()},_bindRelatedDocsPicker(){const t=document.getElementById("related-docs-search");t&&t.addEventListener("input",()=>{this._renderRelatedDocsList(t.value.trim().toLowerCase())});const e=document.getElementById("related-docs-list");e&&e.addEventListener("change",s=>{const i=s.target.closest("input[type=checkbox][data-doc-id]");i&&this._toggleRelatedDoc(i.dataset.docId,i.checked)});const a=document.getElementById("related-docs-pills");a&&a.addEventListener("click",s=>{const i=s.target.closest("[data-remove-doc-id]");i&&this._toggleRelatedDoc(i.dataset.removeDocId,!1)})},_toggleRelatedDoc(t,e){e?this._selectedIds.add(t):this._selectedIds.delete(t);const a=document.getElementById("tpl-related-docs");a&&(a.value=Array.from(this._selectedIds).join(","));const s=document.getElementById("related-docs-search");this._renderRelatedDocsList(s?s.value.trim().toLowerCase():""),this._renderRelatedDocsPills()},_renderRelatedDocsList(t){const e=document.getElementById("related-docs-list");if(!e||!this._docsLoaded)return;const a=t?this._allDocs.filter(s=>s.title.toLowerCase().includes(t)||s.templateTitle.toLowerCase().includes(t)):this._allDocs;if(a.length===0){e.innerHTML=`<div class="text-center text-muted small py-3">${this._allDocs.length===0?"No tenés documentos todavía.":"Sin resultados."}</div>`;return}e.innerHTML=a.map(s=>{const i=this._selectedIds.has(s.id)?"checked":"",o=`related-doc-chk-${s.id}`;return`
          <label class="form-check d-flex align-items-start gap-2 px-2 py-1 rounded related-doc-option mb-0" for="${o}">
            <input class="form-check-input mt-1" type="checkbox" id="${o}" data-doc-id="${s.id}" ${i} />
            <span class="d-flex flex-column">
              <span class="small fw-medium text-body">${ee(s.title)}</span>
              <span class="text-muted" style="font-size: 0.72rem;">${ee(s.templateTitle)}</span>
            </span>
          </label>`}).join("")},_renderRelatedDocsPills(){const t=document.getElementById("related-docs-pills");if(t){if(this._selectedIds.size===0){t.innerHTML="";return}t.innerHTML=Array.from(this._selectedIds).map(e=>{const a=this._allDocs.find(i=>i.id===e),s=a?a.title:e;return`
          <span class="badge bg-light text-body border d-inline-flex align-items-center gap-1 fw-normal py-2">
            <i class="fa-solid fa-file-lines text-muted"></i>
            ${ee(s)}
            <button type="button" class="btn-close ms-1" style="font-size: 0.55rem;" data-remove-doc-id="${e}" aria-label="Quitar"></button>
          </span>`}).join("")}}},Ee={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const t=document.getElementById("user-none"),e=document.getElementById("pass-none");t&&(t.style.display="none"),e&&(e.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const a=document.getElementById("theme-link").getAttribute("href"),s=`./manual.html?theme=${encodeURIComponent(a)}`;this.container.innerHTML=`
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow-lg p-4" style="width: 400px;">
                <h3 class="text-center mb-4"><i class="fa-solid fa-shield-halved text-primary"></i> Acceso</h3>
                
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#l-pane">Login</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#s-pane">Registro</button></li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="l-pane">
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-l" class="form-control" placeholder="Correo electrónico">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-l" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-l"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        
                        <div class="text-end mb-3">
                            <a href="#" id="btn-forgot" class="small text-decoration-none text-primary fw-bold">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button id="btn-login" class="btn btn-primary w-100 fw-bold">Entrar</button>
                    </div>

                    <div class="tab-pane fade" id="s-pane">
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-s" class="form-control" placeholder="Correo">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-s" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-s"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <small class="text-muted d-block mb-3" style="font-size: 0.75rem;">
                          <i class="fa-solid fa-circle-info me-1"></i>Requisito: 8+ car., 1 Mayúscula, 1 Número y 1 Símbolo (@, #, $, %, &).
                        </small>
                        <button id="btn-signup" class="btn btn-success w-100 fw-bold">Crear Cuenta</button>
                    </div>
                </div>

                <div id="auth-err" class="alert alert-danger mt-3 small shadow-sm border-0" style="display:none;"></div>
                <div id="auth-success" class="alert alert-success mt-3 small shadow-sm border-0" style="display:none;"></div>

                <div class="text-center mt-4 pt-3 border-top">
                    <a href="#" class="text-decoration-none text-body small" data-bs-toggle="modal" data-bs-target="#modal-app-info">
                        <i class="fa-solid fa-circle-question me-1"></i>¿Qué es DocEngine?
                    </a>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modal-app-info" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title"><i class="fa-solid fa-sitemap me-2"></i>¿Cómo funciona mis datos?</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body bg-light">
                    <div class="container-fluid p-0">
                        
                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-primary fw-bold mb-0">1. Tus Documentos y Formularios</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Imagina que DocEngine es tu oficina digital. Aquí es donde creas las facturas, reportes y llenas formularios.
                                </p>
                                
                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3 rounded border text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-primary mb-2"><i class="fa-solid fa-pen-ruler"></i></div>
                                        <div class="fw-bold">Tú Diseñas</div>
                                        <div class="small text-muted">Creas la plantilla</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-success mb-2"><i class="fa-solid fa-keyboard"></i></div>
                                        <div class="fw-bold">Tú Escribes</div>
                                        <div class="small text-muted">Llenas los datos</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-warning bg-opacity-10 border-warning" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-warning mb-2"><i class="fa-solid fa-cloud"></i></div>
                                            <div class="fw-bold">La Nube de Datos</div>
                                            <div class="small text-muted">Tu archivador digital</div>
                                            <div class="badge bg-warning text-dark mt-1"><i class="fa-solid fa-lock me-1"></i>Puede ir Cifrado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-dark fw-bold mb-0">2. Tus Fotos y Archivos Pesados</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Para que la aplicación sea rápida, no guardamos las fotos pesadas junto con los papeles. Las guardamos en una "Bóveda Blindada" separada (usamos tecnología GitHub segura).
                                </p>

                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-dark text-white p-3 rounded text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-info mb-2"><i class="fa-solid fa-images"></i></div>
                                        <div class="fw-bold">Tus Archivos</div>
                                        <div class="small text-white-50">Fotos, Audios, PDFs</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-white mb-2"><i class="fa-solid fa-user-shield"></i></div>
                                        <div class="fw-bold">Verificación</div>
                                        <div class="small text-white-50">¿Eres realmente tú?</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-secondary border-light" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-white mb-2"><i class="fa-solid fa-box-archive"></i></div>
                                            <div class="fw-bold">Bóveda Privada</div>
                                            <div class="badge bg-light text-dark mt-1">Acceso Restringido</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 border-start border-5 border-success">
                            <div class="card-body">
                                <h5 class="card-title text-success fw-bold mb-3"><i class="fa-solid fa-shield-halved me-2"></i>Tu Llave Maestra: Lo más importante</h5>
                                
                                <p class="text-secondary small mb-3">
                                    Nosotros guardamos tus cajas fuertes, <strong>pero solo tú tienes la llave para abrirlas</strong>. 
                                </p>

                                <div class="d-flex align-items-center justify-content-center bg-white border p-3 rounded">
                                    <div class="text-center me-3">
                                        <i class="fa-solid fa-user-lock fs-1 text-secondary"></i>
                                        <div class="small fw-bold mt-1">TÚ</div>
                                    </div>
                                    
                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>

                                    <div class="text-center p-2 bg-warning bg-opacity-10 border border-warning rounded mx-2">
                                        <i class="fa-solid fa-key text-warning fs-3"></i>
                                        <div class="x-small fw-bold text-dark mt-1">Tu Llave Real</div>
                                        <div class="x-small text-danger fw-bold">(Nunca sale de tu PC)</div>
                                    </div>

                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-not-equal"></i>
                                    </div>

                                    <div class="text-center p-2 bg-success bg-opacity-10 border border-success rounded mx-2">
                                        <i class="fa-solid fa-fingerprint text-success fs-3"></i>
                                        <div class="x-small fw-bold text-success">Copia de Seguridad</div>
                                        <div class="x-small text-muted">(Lo que tenemos nosotros)</div>
                                    </div>
                                </div>
                                
                                <div class="alert alert-warning d-flex align-items-center mt-3 mb-0 p-2 small" role="alert">
                                    <i class="fa-solid fa-triangle-exclamation fs-4 me-3"></i>
                                    <div>
                                        <strong>¡Ojo!</strong> Como nosotros solo tenemos la "huella digital" y no la llave real, <strong>si pierdes tu Frase Maestra, no podremos recuperar tus documentos cifrados.</strong> Anótala en un lugar seguro.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="modal-footer bg-light p-2 justify-content-between">
                  <a href="${s}" target="_blank" class="btn btn-outline-secondary btn-sm">
                    <i class="fa-solid fa-book me-2"></i>Ver Manual Completo
                  </a>
                  <button type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal">¡Entendido, todo claro!</button>
                </div>
            </div>
        </div>
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const t=document.getElementById("btn-login");t&&(t.onclick=async()=>{const s=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value;if(!s||!i)return this._showError("Ingrese correo y contraseña.");try{await T.login(s,i),location.reload()}catch(o){this._showError(o.message)}});const e=document.getElementById("btn-signup");e&&(e.onclick=async()=>{const s=document.getElementById("email-s").value.trim(),i=document.getElementById("pass-s").value;if(!T.validatePassword(i))return this._showError("La contraseña no cumple los requisitos.");const o=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',e.disabled=!0;try{await T.signup(s,i),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${s}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
            `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(n){this._showError(n.message)}finally{e.innerHTML=o,e.disabled=!1}});const a=document.getElementById("btn-forgot");a&&(a.onclick=async s=>{s.preventDefault();const i=document.getElementById("email-l"),o=i.value.trim();if(!o)return i.classList.add("is-invalid"),i.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");i.classList.remove("is-invalid");const n=a.innerHTML;a.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',a.style.pointerEvents="none";try{await T.recoverPassword(o),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${o} para restablecer la clave.`)}catch(l){this._showError(l.message)}finally{a.innerHTML=n,a.style.pointerEvents="auto"}})},initLogout(){const t=document.getElementById("btn-logout-link");t&&(t.onclick=async e=>{e.preventDefault();try{await T.logout(),window.location.href=window.location.pathname}catch(a){console.error("Error al cerrar sesión:",a)}})},_showError(t){const e=document.getElementById("auth-err"),a=document.getElementById("auth-success");e&&(e.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${t}`,e.style.display="block"),a&&(a.style.display="none")},_showSuccess(t){const e=document.getElementById("auth-err"),a=document.getElementById("auth-success");a&&(a.innerHTML=t,a.style.display="block"),e&&(e.style.display="none")}},X={async saveTemplate(t){if(!t.title.trim())throw new Error("Título obligatorio");if(t.elements.length===0)throw new Error("Diseño vacío");t.updatedAt=new Date().toISOString(),await b.save("tpl",t)},async deleteTemplate(t){await b.delete("tpl",t)},async loadTemplates(){return await b.getAll("tpl")}};class oe{constructor(e){this.tableBody=e.tableBody,this.tableHeaders=e.tableHeaders,this.paginationContainer=e.paginationContainer,this.renderRowHTML=e.renderRowHTML,this.extractSearchString=e.extractSearchString,this.onRenderComplete=e.onRenderComplete,this.customSort=e.customSort,this.dummyRowHTML=e.dummyRowHTML,this.marginBot=e.marginBot!==void 0?e.marginBot:40,this.data=[],this.state={currentPage:1,itemsPerPage:10,totalPages:1,searchTerm:"",filters:{},sortColumn:"updatedAt",sortAsc:!1},this._resizeTimer=null,this._bindWindowResize(),this._bindHeaders(),this._bindPaginationEvents()}setData(e){this.data=e||[],this.state.currentPage=1,this.render()}setSearchTerm(e){this.state.searchTerm=this._normalizeText(e),this.state.currentPage=1,this.render()}setFilter(e,a){this.state.filters[e]=a,this.state.currentPage=1,this.render()}setSort(e){this.state.sortColumn===e?this.state.sortAsc=!this.state.sortAsc:(this.state.sortColumn=e,this.state.sortAsc=!0),this.state.currentPage=1,this._updateHeaderIcons(),this.render()}_bindHeaders(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{const s=a.dataset.column;s&&this.setSort(s)})}),this._updateHeaderIcons()}_updateHeaderIcons(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(a=>{let s=a.querySelector("i");s||(s=document.createElement("i"),a.appendChild(s));const i=a.dataset.column;s.className="fa-solid fa-sort text-muted ms-1 opacity-50",this.state.sortColumn===i&&(s.className=this.state.sortAsc?"fa-solid fa-sort-up text-primary ms-1":"fa-solid fa-sort-down text-primary ms-1")})}_processData(){let e=[...this.data];if(Object.entries(this.state.filters).forEach(([a,s])=>{s&&s!=="all"&&(e=e.filter(i=>i[a]===s))}),this.state.searchTerm){const a=this.state.searchTerm.split(/\s+/).filter(s=>s.length>0);e=e.filter(s=>{const i=this._normalizeText(this.extractSearchString(s));return a.every(o=>i.includes(o))})}return this.state.sortColumn&&e.sort((a,s)=>{if(this.customSort)return this.customSort(a,s,this.state);let i=a[this.state.sortColumn],o=s[this.state.sortColumn];return this.state.sortColumn.toLowerCase().includes("date")||this.state.sortColumn.includes("At")?(i=new Date(i||0).getTime(),o=new Date(o||0).getTime()):(i=this._normalizeText(i),o=this._normalizeText(o)),i<o?this.state.sortAsc?-1:1:i>o?this.state.sortAsc?1:-1:0}),e}render(){if(!this.tableBody)return;const e=this._processData();this.state.totalPages=Math.max(1,Math.ceil(e.length/this.state.itemsPerPage)),this.state.currentPage>this.state.totalPages&&(this.state.currentPage=1);const a=(this.state.currentPage-1)*this.state.itemsPerPage,s=e.slice(a,a+this.state.itemsPerPage);if(this._renderPaginationControls(e.length),s.length===0){this.tableBody.innerHTML='<tr><td colspan="100%" class="text-center p-4 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=s.map(i=>this.renderRowHTML(i)).join(""),this.onRenderComplete&&this.onRenderComplete(this.tableBody,s)}_renderPaginationControls(e){this.paginationContainer&&(this.paginationContainer.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.state.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left pointer-events-none"></i></button>
      <span class="small fw-bold px-1">Pág ${this.state.currentPage} de ${this.state.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.state.currentPage===this.state.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right pointer-events-none"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${e} en total</span>
    `)}_bindPaginationEvents(){this.paginationContainer&&this.paginationContainer.addEventListener("click",e=>{const a=e.target.closest("button");a&&(a.classList.contains("btn-prev-page")&&this.state.currentPage>1?(this.state.currentPage--,this.render()):a.classList.contains("btn-next-page")&&this.state.currentPage<this.state.totalPages&&(this.state.currentPage++,this.render()))})}calculatePaginationSpace(){if(!this.tableBody)return;let e=55;if(this.dummyRowHTML){const o=document.createElement("tr");o.style.visibility="hidden",o.innerHTML=this.dummyRowHTML,this.tableBody.appendChild(o),e=o.getBoundingClientRect().height||55,this.tableBody.removeChild(o)}const a=this.tableBody.getBoundingClientRect().top,s=a>0?a:250,i=window.innerHeight-s-this.marginBot;this.state.itemsPerPage=Math.max(5,Math.floor(i/e))}_bindWindowResize(){window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.tableBody&&this.tableBody.offsetParent!==null&&(this.calculatePaginationSpace(),this.render())},300)})}_normalizeText(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}const de={handlers:{},currentTemplates:[],init(t){this.handlers=t;const e=document.getElementById("designer-list-view");e&&(e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents())},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-pen-ruler text-danger"></i> Gestor de Plantillas</h2>
            <div class="d-flex gap-2">
                <input type="file" id="input-import-tpl" accept=".json" class="d-none">
                <button class="btn btn-outline-dark shadow-sm" id="btn-import-tpl">
                    <i class="fa-solid fa-file-import me-2"></i> Importar
                </button>
                <button class="btn btn-primary shadow-sm" id="btn-go-create-tpl">
                    <i class="fa-solid fa-plus me-2"></i> Nueva Plantilla
                </button>
            </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="tpl-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Plantillas (Cargando...)</span>
            </div>
            <div class="row g-2 align-items-center justify-content-end">
              <div class="col-auto" id="tpl-category-filter-container">
                <select id="tpl-category-select" class="form-select">
                  <option value="all">Todas las categorías</option>
                </select>
              </div>
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="tpl-search-input" class="form-control" placeholder="Buscar..." autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="tpl-table-head">
                  <tr>
                    <th class="sortable" data-column="category">Categoría</th>
                    <th class="sortable" data-column="title">Título de la Plantilla</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="tpl-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando plantillas...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.tableBody=document.getElementById("tpl-table-body"),this.tableHead=document.getElementById("tpl-table-head"),this.pagination=document.getElementById("tpl-pagination-controls"),this.searchInput=document.getElementById("tpl-search-input"),this.btnCreate=document.getElementById("btn-go-create-tpl"),this.btnImport=document.getElementById("btn-import-tpl"),this.inputFile=document.getElementById("input-import-tpl"),this.categoryContainer=document.getElementById("tpl-category-filter-container")},initTableEngine(){this.tableEngine=new oe({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td class="text-center fs-4">📄</td>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">General</span></td>
        <td>
          <div class="fw-bold text-nowrap">Test</div>
          <div class="text-muted small text-truncate" style="max-width: 250px;">Desc</div>
        </td>
        <td class="text-muted small text-nowrap">01/01/2026</td>
        <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-success"><i class="fa-solid fa-file-circle-plus"></i></button></td>
      `,marginBot:90,extractSearchString:t=>`${t.title} ${t.category} ${t.description||""}`,renderRowHTML:t=>this._renderRow(t),onRenderComplete:(t,e)=>this._bindListActions(t,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.btnImport&&this.inputFile&&(this.btnImport.onclick=()=>this.inputFile.click(),this.inputFile.onchange=t=>this._handleImport(t)),this.searchInput.addEventListener("input",t=>{this.tableEngine.setSearchTerm(t.target.value)})},async render(){try{const t=await b.getAll("tpl")||[];this.currentTemplates=t.map(e=>({...e,category:e.category||"General"})),this.renderCategoryFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentTemplates)}catch(t){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${t.message}</td></tr>`)}},renderCategoryFilter(){if(!this.categoryContainer)return;const t=[...new Set(this.currentTemplates.map(e=>e.category))];if(t.length>1){const e=document.getElementById("tpl-category-select"),a=e?e.value:"all",s=`<option value="all" ${a==="all"?"selected":""}>Todas las categorías</option>`+t.sort().map(i=>`<option value="${i}" ${a===i?"selected":""}>${i}</option>`).join("");this.categoryContainer.innerHTML=`<select id="tpl-category-select" class="form-select">${s}</select>`,document.getElementById("tpl-category-select").addEventListener("change",i=>{this.tableEngine.setFilter("category",i.target.value)})}else this.categoryContainer.innerHTML="",this.tableEngine.setFilter("category","all")},_renderRow(t){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">${t.category}</span></td>
        <td>
          <div class="d-flex align-items-center">
            <div class="fs-4 me-3 text-center" style="width: 32px;">${t.icon||"📄"}</div>
            <div style="min-width: 0;">
              <div class="fw-bold text-nowrap text-truncate">
                 ${t.title} 
                ${t.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
              </div>
              <div class="text-muted small text-truncate" style="max-width: 250px;">${t.description||"Sin descripción"}</div>
            </div>
          </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-success btn-create-doc me-1" data-id="${t.id}" title="Crear Documento">
               <i class="fa-solid fa-file-circle-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-id="${t.id}" title="Editar Plantilla">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-export me-1" data-id="${t.id}" title="Descargar JSON">
                <i class="fa-solid fa-download"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del" data-id="${t.id}" title="Eliminar Plantilla">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(t,e){t.querySelectorAll(".btn-create-doc").forEach(a=>{a.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:a.dataset.id}}))}}),t.querySelectorAll(".btn-edit").forEach(a=>{a.onclick=()=>this.handlers.onEditTemplate(a.dataset.id)}),t.querySelectorAll(".btn-del").forEach(a=>{a.onclick=async()=>{await m.confirm("Eliminar Plantilla","¿Estás seguro de eliminar esta plantilla? Se borrarán sus documentos vinculados.")&&(await X.deleteTemplate(a.dataset.id),m.toast("Plantilla eliminada exitosamente","success"),this.render())}}),t.querySelectorAll(".btn-export").forEach(a=>{a.onclick=()=>{const s=e.find(i=>i.id===a.dataset.id);s&&this._downloadJSON(s)}})},_downloadJSON(t){const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),s=document.createElement("a");s.href=a;const i=t.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();s.download=`tpl_${i}_${t.id}.json`,s.click(),URL.revokeObjectURL(a)},_handleImport(t){const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=async s=>{try{const i=JSON.parse(s.target.result);if(!i.title||!Array.isArray(i.elements))throw new Error("Plantilla inválida");i.id=`tpl_${Date.now()}`,i.title=`${i.title} (Importada)`,i.updatedAt=new Date().toISOString(),await X.saveTemplate(i),m.toast("Plantilla importada correctamente.","success"),this.render()}catch(i){m.toast("Error al importar: "+i.message,"danger")}t.target.value=""},a.readAsText(e)}},De={dragSrcEl:null,init(t,e=null,a=null){t.setAttribute("draggable","false"),t.addEventListener("mousedown",s=>{if(e){const i=s.target.closest(e);t.setAttribute("draggable",i?"true":"false")}else t.setAttribute("draggable","true")}),t.addEventListener("mouseup",()=>{t.setAttribute("draggable","false")}),t.addEventListener("dragstart",s=>this._handleDragStart(s,t)),t.addEventListener("dragend",s=>this._handleDragEnd(s,t)),t.addEventListener("dragover",s=>this._handleDragOver(s,t)),t.addEventListener("dragenter",s=>this._handleDragEnter(s,t)),t.addEventListener("dragleave",s=>this._handleDragLeave(s,t)),t.addEventListener("drop",s=>this._handleDrop(s,t,a))},_handleDragStart(t,e){if(e.getAttribute("draggable")==="false"){t.preventDefault();return}this.dragSrcEl=e,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(t,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(t){return t.preventDefault&&t.preventDefault(),t.dataTransfer.dropEffect="move",!1},_handleDragEnter(t,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(t,e){e.classList.remove("border-top-primary-3")},_handleDrop(t,e,a){if(t.stopPropagation&&t.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const s=e.parentNode,i=e.getBoundingClientRect(),o=t.clientY-i.top,n=e.clientHeight/2;o>n?s.insertBefore(this.dragSrcEl,e.nextSibling):s.insertBefore(this.dragSrcEl,e),a&&a()}return!1},_cleanStyles(t){t&&Array.from(t.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},ce=/\b(?:doc|row)\.(?:getValue|setValue|setStyle|setOptions|api)\(\s*['"]([^'"]+)['"]/g;function ue(t,e){if(!t)return!1;if(Q(t).includes(e))return!0;ce.lastIndex=0;let a;for(;(a=ce.exec(t))!==null;)if(a[1]===e)return!0;return!1}function me(t,e,a,s){const i=`${t||""} ${e||""} ${a||""}`;return Q(i).includes(s)}function Be(t){return(t||"").toLowerCase().replace("setting-","")||"otro"}function ke(t){const e=[],a=new Set;return t&&(document.querySelectorAll("[id]").forEach(s=>{if(s.id===t||a.has(s.id)||!s.tagName||!s.tagName.startsWith("SETTING-")||typeof s.getAttribute!="function")return;const i=s.getAttribute("title")||s.id,o=s.getAttribute("data-original-type")||s.tagName.toLowerCase().replace("setting-","");if(s.tagName==="SETTING-SCRIPT"){a.add(s.id),ue(s.getAttribute("script-code"),t)&&e.push({id:s.id,title:i,typeKey:o,via:"script"});return}if(s.tagName==="SETTING-API"){a.add(s.id),me(s.getAttribute("endpoint"),s.getAttribute("headers"),s.getAttribute("request-body"),t)&&e.push({id:s.id,title:i,typeKey:o,via:"api"});return}if(s.hasAttribute("formula")){a.add(s.id);const n=s.getAttribute("formula")||"";le(n)&&Q(n).includes(t)&&e.push({id:s.id,title:i,typeKey:o,via:"formula"})}}),document.querySelectorAll(k.table).forEach(s=>{if(typeof s.getData!="function")return;(s.getData().columns||[]).forEach(o=>{if(!o.id||o.id===t||a.has(o.id))return;a.add(o.id);const n=o.title||o.id,l=Be(o.tag);if(Le(o)){ue(o.scriptCode,t)&&e.push({id:o.id,title:n,typeKey:l,via:"script"});return}if(xe(o)){me(o.endpoint,o.headers,o.requestBody,t)&&e.push({id:o.id,title:n,typeKey:l,via:"api"});return}le(o.formula)&&Q(o.formula).includes(t)&&e.push({id:o.id,title:n,typeKey:l,via:"formula"})})})),e}const je={formula:"en su Fórmula",script:"en su Script",api:"en su configuración de API"};function Me(t){const e=t.map(a=>`<li>${(H[a.typeKey]||{}).icon||"🔹"} <strong>${a.title}</strong> <code>${a.id}</code> — ${je[a.via]||a.via}</li>`).join("");return`<p class="mb-2">Este campo está siendo usado por ${t.length===1?"otro componente":"otros componentes"}:</p><ul class="mb-2">${e}</ul><p class="mb-0 small text-muted">Si lo eliminas, esas referencias quedan rotas — no se actualizan ni se avisan de nuevo más adelante.</p>`}const G={handlers:{},currentId:null,init(t){this.handlers=t,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list"),this.aiIdeaInput=document.getElementById("ai-user-idea"),this.aiJsonInput=document.getElementById("ai-json-response"),this.btnGeneratePrompt=document.getElementById("btn-generate-prompt"),this.btnBuildFromAi=document.getElementById("btn-build-from-ai"),this.btnCopyFilteredRef=document.getElementById("btn-copy-filtered-ref"),this.aiFilteredComponentsInput=document.getElementById("ai-filtered-components"),this.aiStep1=document.getElementById("ai-step-1"),this.aiStep2=document.getElementById("ai-step-2"),this.aiStep3=document.getElementById("ai-step-3"),this.aiStep1Instructions=document.getElementById("ai-step-1-instructions"),this.aiStep2Instructions=document.getElementById("ai-step-2-instructions")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.titleInput.oninput=()=>this.titleInput.classList.remove("is-invalid"),this.catInput&&(this.catInput.onchange=t=>{const e=t.target.options[t.target.selectedIndex].dataset.icon;this.iconInput.value=e}),this.btnGeneratePrompt&&(this.btnGeneratePrompt.onclick=()=>this._copyAiPrompt()),this.btnBuildFromAi&&(this.btnBuildFromAi.onclick=()=>this._buildFromAi()),this.btnCopyFilteredRef&&(this.btnCopyFilteredRef.onclick=()=>this._copyFilteredComponentReference())},renderSidebar(){const t=document.getElementById("tpl-elements");if(!t)return;t.innerHTML=`
      <div class="card border-0 shadow-sm bg-white rounded-4 p-3 mb-3">
        <!-- Cabecera: Título a la izquierda y Buscador a la derecha 
        <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-dark p-2 rounded-3"><i class="fa-solid fa-toolbox text-warning"></i></span>
            <div>
              <h6 class="mb-0 fw-bold text-dark">3. Elementos Disponibles</h6>
              <small class="text-muted">Haz clic para agregar al documento</small>
            </div>
          </div>
          <div class="input-group input-group-sm" style="width: 240px;">
            <span class="input-group-text bg-light border-0"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
            <input type="text" id="sidebar-search-element" class="form-control form-control-sm bg-light border-0" placeholder="Filtrar componente..." autocomplete="off">
          </div>
        </div> -->

 <!-- Fila única con scroll horizontal -->
        <div class="d-flex flex-row flex-nowrap overflow-auto gap-2 pb-2" id="sidebar-elements-container" style="scrollbar-width: thin;">
          ${Object.entries(H).filter(([,a])=>!a.hideInToolbox).map(([a,s])=>{const i=["dark","secondary","primary","success","danger","warning","info"],o=s.color||"secondary",n=i.includes(o)?"text-white":"text-dark";return`
              <button class="btn btn-light border shadow-sm d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-start element-add-btn flex-shrink-0" 
                      style="width: 180px;" 
                      data-key="${a}" 
                      data-label="${s.longLabel.toLowerCase()}">
                <span class="badge bg-${o} ${n} p-2 rounded-2 fs-6 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                  ${s.icon}
                </span>
                <div class="overflow-hidden" style="line-height: 1.2;">
                  <span class="d-block small fw-bold text-truncate text-dark">${s.longLabel}</span>
                  <span class="d-block text-muted" style="font-size: 0.7rem;">Agregar</span>
                </div>
              </button>
            `}).join("")}
        </div>
      </div>
    `,t.querySelectorAll(".element-add-btn").forEach(a=>{const s=a.dataset.key;a.onclick=()=>{const i=document.createElement(`setting-${s}`);this._addToCanvas(i)}});const e=document.querySelector("#sidebar-search-element");e&&(e.oninput=a=>{const s=a.target.value.toLowerCase().trim();t.querySelectorAll(".element-add-btn").forEach(i=>{(i.dataset.label||"").includes(s)?(i.classList.remove("d-none"),i.style.display="flex"):(i.classList.add("d-none"),i.style.display="none")})})},_addToCanvas(t){const e=document.createElement("div"),a=t.tagName.toLowerCase(),s=t.getAttribute("data-original-type")||a.replace("setting-",""),i=H[s]||{icon:"🔹",color:"secondary",longLabel:s},o=s==="table";e.className="designer-item-wrapper d-flex align-items-center mb-2 bg-white border rounded shadow-sm py-1 px-2 gap-2",e.setAttribute("data-component-type",s);const n=t.getAttribute("title")||"",l=["dark","secondary","primary","success","danger","warning","info"],d=i.color||"secondary",p=l.includes(d)?"text-white":"text-dark";e.innerHTML=`
 <!-- 1. Asa para arrastrar -->
      <div class="drag-handle text-muted cursor-grab px-1 flex-shrink-0" title="Mover componente">
        <i class="fa-solid fa-grip-vertical"></i>
      </div>

 <!-- 2. Indicador minimalista con contraste corregido (Bootstrap puro) -->
      <span class="badge bg-${d} ${p} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1" style="width: 140px;" title="${i.longLabel}">
        <span class="fs-6">${i.icon}</span>
        <span class="small text-truncate fw-semibold">${i.longLabel}</span>
      </span>

 <!-- 3. Campo de Título en línea -->
      <div class="flex-grow-1">
        <input type="text" class="form-control form-control-sm border-0 bg-light tpl-item-title-input" 
               value="${n}" placeholder="Título del componente..." autocomplete="off">
      </div>

 <!-- 4. Contenedor interno -->
      <div class="d-none" id="comp-content"></div>

 <!-- 5. Acciones a la derecha -->
      <div class="d-flex align-items-center gap-1 flex-shrink-0">
        ${o?`
          <button class="btn btn-sm btn-outline-primary btn-config-cols py-0 px-2" title="Configurar Columnas">
            <i class="fa-solid fa-table-columns fs-7"></i>
          </button>
        `:""}
        
        <button class="btn btn-sm btn-outline-secondary btn-settings-modal py-0 px-2" title="Configuración Avanzada">
          <i class="fa-solid fa-ellipsis-vertical fs-7"></i>
        </button>

        <button class="btn btn-sm btn-outline-danger btn-del-comp py-0 px-2" title="Eliminar Componente">
          <i class="fa-solid fa-trash-can fs-7"></i>
        </button>
      </div>
    `,e.querySelector("#comp-content").appendChild(t);const h=e.querySelector(".tpl-item-title-input");h.oninput=c=>{const g=c.target.value;t.setAttribute("title",g);const v=t.querySelector('input[data-prop="title"]');v&&(v.value=g,v.dispatchEvent(new Event("input",{bubbles:!0})))},e.querySelector(".btn-del-comp").onclick=async()=>{const c=t.id?ke(t.id):[];c.length>0&&!await m.confirm("¿Eliminar este campo?",Me(c))||(e.remove(),this._updateIndentation())},e.querySelector(".btn-settings-modal").onclick=()=>{const c=t.querySelector('button[data-bs-toggle="modal"], .settings-trigger, .card-header button, button');if(c)c.click();else if(typeof t.openModal=="function")t.openModal();else{const g=t.querySelector(".modal")||document.querySelector(`#modal-${t.id}`);g&&window.bootstrap&&(window.bootstrap.Modal.getOrCreateInstance(g)||new window.bootstrap.Modal(g)).show()}},o&&(e.querySelector(".btn-config-cols").onclick=()=>{const c=t.querySelector('#btn-config-columns, button[id*="column"], button[class*="column"], .btn-outline-primary');if(c)c.click();else{const g=t.querySelector(".card-header")||t.firstElementChild;g&&g.click()}}),t.addEventListener("visual-mutation",c=>{const g=c.detail.logicalKey,v=H[g];if(!v)return;e.setAttribute("data-component-type",g);const E=["dark","secondary","primary","success","danger","warning","info"],f=v.color||"secondary",L=E.includes(f)?"text-white":"text-dark",y=e.querySelector(".badge");y&&(y.className=`badge bg-${f} ${L} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1`,y.innerHTML=`<span class="fs-6">${v.icon}</span><span class="small text-truncate fw-semibold">${v.longLabel}</span>`)}),De.init(e,".drag-handle"),this.canvas.appendChild(e),this._updateIndentation()},_updateIndentation(){const t=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper"));let e=!1;t.forEach(a=>{a.getAttribute("data-component-type")==="section"?(e=!0,a.classList.remove("ms-4","border-start","border-primary","border-3")):e?a.classList.add("ms-4","border-start","border-primary","border-3"):a.classList.remove("ms-4","border-start","border-primary","border-3")})},_hydrateElement(t){let e=t.tag.replace("setting-",""),a=t.tag;["string","email","password","text"].includes(e)?a=k.input:["section","subsection"].includes(e)?a=k.divider:["number","currency","percentage"].includes(e)?a=k.numeric:["date","time"].includes(e)?a=k.datetime:["image","audio","video"].includes(e)&&(a=k.media);const s=document.createElement(a);return s.setAttribute("data-original-type",e),s.setData&&s.setData(t),s},_appendElementsToCanvas(t){t.forEach(e=>{const a=this._hydrateElement(e);this._addToCanvas(a)})},async load(t){let e=await b.getOne("tpl",t);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.relatedDocsInput.value=e.relatedDocIds||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,se.refresh(),!e.etlMigrated&&e.etl&&(e.etl.sources.length>0||e.etl.rules.length>0)?this.canvas.setAttribute("data-etl-config",JSON.stringify(e.etl)):this.canvas.removeAttribute("data-etl-config"),this.canvas.innerHTML="",this._appendElementsToCanvas(e.elements),this.canvas.removeAttribute("data-template-has-docs"),b.getAll("doc").then(a=>{const s=a.some(i=>i.templateId===e.id);this.canvas.setAttribute("data-template-has-docs",s?"true":"false")}).catch(a=>console.warn("No se pudo verificar si la plantilla ya tiene documentos generados.",a)))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.encInput.checked=!1,this.aiIdeaInput&&(this.aiIdeaInput.value=""),this.aiJsonInput&&(this.aiJsonInput.value=""),this.aiFilteredComponentsInput&&(this.aiFilteredComponentsInput.value=""),this._aiPromptCopied=!1,this._resetAiSteps(),se.refresh(),this.canvas.removeAttribute("data-etl-config"),this.canvas.setAttribute("data-template-has-docs","false")},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(l=>{const d=l.querySelector("#comp-content");return d?d.firstElementChild:null}).filter(l=>l&&typeof l.getData=="function");let a={sources:[],rules:[]};try{const l=this.canvas.getAttribute("data-etl-config");l&&(a=JSON.parse(l))}catch(l){console.warn("No se pudo leer la configuración ETL al guardar.",l)}const s=this.titleInput.value.trim();if(this.titleInput.classList.remove("is-invalid"),!s){this.titleInput.classList.add("is-invalid"),this.titleInput.removeAttribute("readonly"),this.titleInput.focus(),m.toast("Ponle un nombre a la plantilla antes de guardar.","danger");return}let i=this.currentId;if(!i){const l=J.generateSemanticBaseId("tpl",s,15);i=l;let d=2;const p=await X.loadTemplates();for(;p.some(u=>u.id===i);)i=`${l}${d}`,d++}const o={id:i,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(l=>l.getData()),etl:a};this.btnSave.disabled=!0;const n=this.btnSave.innerHTML;this.btnSave.innerHTML='<span class="spinner-border spinner-border-sm me-2" role="status"></span> Guardando...';try{await X.saveTemplate(o),m.toast("Plantilla guardada correctamente","success"),this.handlers.onSaveSuccess()}catch(l){m.toast("Error al guardar: "+l.message,"danger")}finally{this.btnSave.disabled=!1,this.btnSave.innerHTML=n}},_resetAiSteps(){this.aiStep2&&(this.aiStep2.style.display="none"),this.aiStep3&&(this.aiStep3.style.display="none"),this.aiStep1Instructions&&(this.aiStep1Instructions.style.display="none"),this.aiStep2Instructions&&(this.aiStep2Instructions.style.display="none")},async _copyAiPrompt(){const t=this.titleInput.value.trim(),e=this.aiIdeaInput.value.trim();if(!t){this.titleInput.classList.add("is-invalid"),this.titleInput.removeAttribute("readonly"),this.titleInput.focus(),m.toast("Ponle un nombre a la plantilla (arriba) antes de generar el prompt.","danger");return}if(!e){m.toast("Describí qué componentes o campos debe contener la plantilla.","danger");return}const a=this._buildAiSuperPromptText(t,e);if(await J.copyTextSmart(a,"Prompt de la Plantilla")==="modal")return;this._aiPromptCopied=!0,this.aiStep2&&(this.aiStep2.style.display=""),this.aiStep1Instructions&&(this.aiStep1Instructions.style.display="");const i=this.btnGeneratePrompt.innerHTML;this.btnGeneratePrompt.innerHTML='<i class="fa-solid fa-check d-block mb-1 fs-5"></i> ¡Copiado!',this.btnGeneratePrompt.classList.replace("btn-dark","btn-success"),setTimeout(()=>{document.body.contains(this.btnGeneratePrompt)&&(this.btnGeneratePrompt.innerHTML=i,this.btnGeneratePrompt.classList.replace("btn-success","btn-dark"))},3e3)},_buildAiSuperPromptText(t,e){const a=Object.entries(H).filter(([,i])=>i.aiPrompt).map(([i,o])=>`- ${i}: ${o.aiPrompt}`).join(`
`);return`Actúa como un Arquitecto de Datos y Software experto en creación de formularios dinámicos.

═══════════════════════════════════════════════════════════════════════
  OBJETO DE ESTA INTERACCIÓN
═══════════════════════════════════════════════════════════════════════
Vamos a diseñar en conjunto la estructura completa de una plantilla
de documentos llamada "${t}". El resultado final de esta
interacción será un ARREGLO JSON que represente la estructura del
documento: cada objeto del arreglo es un componente visual o lógico
(campo, sección, tabla, script, etc.) con sus atributos de
configuración. Ese JSON se importa directamente en el Diseñador de
Plantillas de DocEngine para generar la plantilla lista para usar.

═══════════════════════════════════════════════════════════════════════
  CÓMO VAMOS A TRABAJAR — LAS FASES
═══════════════════════════════════════════════════════════════════════

FASE 1 — ENTENDER EL REQUERIMIENTO
  • Analizá la descripción del usuario.
  • Hacé preguntas de aclaración si algo es ambiguo
    (ej: "¿La tabla de ítems necesita columna de impuestos?",
     "¿El total se calcula o lo llena el usuario?").
  • NO generés JSON todavía.

FASE 2 — PROPONER LA ARQUITECTURA
  • Describí en lenguaje natural la estructura que proponés:
    secciones, campos principales, tablas con sus columnas,
    lógica de cálculos (fórmula vs. script), gráficos.
  • Explicá POR QUÉ elegiste cada componente y cada mecanismo
    de cálculo (fórmula para lo simple, script para lo complejo).
  • Esperá retroalimentación del usuario. Ajustá las veces
    que sea necesario.
  • NO generés JSON todavía.

FASE 3 — INVENTARIO Y DOCUMENTACIÓN TÉCNICA
  SOLO cuando el usuario apruebe la arquitectura (ej: "Sí,
  géneralo", "Perfecto", "Adelante"):

  PASO 3A — LISTA DE COMPONENTES
  • Entregá SOLO la lista de componentes que vas a usar,
    en formato arreglo: [section, string, number, date, select, table, script, ...]
  • Incluí cada componente exactamente una vez, sin repetir.
  • NO expliques nada en este paso, solo la lista.
  • Indica al usuario: "Copiá esta lista, pegala en el campo
    'Componentes Filtrados' del Diseñador y pulsá 'Generar
    Referencia Filtrada'. Luego adjuntame el archivo generado."
  • Esperá a que el usuario adjunte la referencia filtrada.

  PASO 3B — INVENTARIO DETALLADO (con referencia)
  Una vez que el usuario adjunte la referencia filtrada:
  • Listá cada componente que vas a incluir, con su ID y tipo,
    EN EL MISMO ORDEN en que aparecerán en el JSON.
  • Para CADA componente, entregá un párrafo explicativo
    detallado usando la referencia adjunta como guía exacta:
    - Qué dato almacena y en qué formato (según su tipo).
    - Atributos específicos que vas a configurar (options, currency,
      formula, scriptCode, etc.) — tomálos de la referencia.
    - Si es un script: escribí el código completo que ejecutará.
    - Si es una tabla: describí cada columna con su tipo y rol.
    - Si lleva fórmula: escribí la fórmula completa.
  • El usuario revisa este inventario y puede pedir ajustes
    antes del JSON definitivo.
  • NO generés JSON todavía — esperá confirmación.

FASE 4 — GENERACIÓN DEL JSON
  SOLO cuando el usuario confirme que el inventario de la Fase 3
  está correcto:
  • Entregá el arreglo JSON completo y válido, preferiblemente
    en un bloque de código.
  • No agregues explicaciones después del bloque JSON — la
    Fase 3 ya cumplió ese propósito.

═══════════════════════════════════════════════════════════════════════
  HERRAMIENTAS QUE TENÉS DISPONIBLES
═══════════════════════════════════════════════════════════════════════

Contás con cinco categorías de herramientas para construir la plantilla:

── 1. COMPONENTES VISUALES Y LÓGICOS ────────────────────────────────────────────
Cada componente se define como un objeto en el arreglo JSON con
"tag", "id", "title" y atributos específicos. Reglas de I/O
(qué getValue devuelve, qué setValue espera) según su tipo:

  string     → Texto Corto / Teléfono. I/O: String (texto plano).
  text       → Texto Largo. I/O: String (plano con '\\n' o HTML si
               richText). Si richText:true, admite HTML enriquecido.
  email      → Correo Electrónico. I/O: String (correo válido).
  password   → Contraseña. I/O: String. NUNCA exponer en otro campo.
  number     → Número Decimal. I/O: Number puro, NO string.
  currency   → Moneda. I/O: Number puro, sin símbolo.
  percentage → Porcentaje. I/O: Number puro (15.5 = 15.5%).
  date       → Fecha. I/O: String formato 'YYYY-MM-DD'.
  time       → Hora. I/O: String formato 24h 'HH:mm'.
  select     → Lista Desplegable. I/O: String (valor exacto de la
               lista configurada; en modo Pares, valor interno).
               NUNCA inventar valores fuera de la lista.
  boolean    → Casilla / Switch. I/O: Boolean (true/false).
  url        → Enlace URL. I/O: JSON String. JSON.stringify({text,url}).
  image      → Imagen. I/O: JSON String. JSON.stringify({text,url}).
  audio      → Audio. I/O: JSON String. JSON.stringify({text,url}).
  video      → Video. I/O: JSON String. JSON.stringify({text,url}).
  table      → Tabla Dinámica. I/O: Array of Objects. Cada clave
               es el ID de columna. Ej: [{cantidad:2, precio:10}].
  chart      → Gráfico. I/O: JSON String. JSON.stringify({labels,
               data, type?}). type: bar|line|area|pie|doughnut|
               radar|polarArea. Default: 'bar'.
  html       → Contenido HTML Dinámico. I/O: String HTML. Un script
               puede inyectar marcado visual. NO para cálculos.
  script     → Script Lógico (JavaScript). I/O: Código JS puro.
               NO usar etiquetas \\\`\\\`\\\`javascript.
  api        → Conector API (headless). Stateless. Expone
               doc.api('id') → { execute(payload) }.
  section    → Sección (separador visual). NO almacena datos.
  subsection → Subsección (separador visual). NO almacena datos.

── 2. SISTEMA DE DOCUMENTOS (doc.system) ────────────────────────────────────────────────
Disponible dentro de scripts. Da acceso directo al ecosistema de
documentos del usuario — sin código del otro lado:

  system.templates()                   → [{id, title, encrypted, updatedAt}]
  system.template(tplId)              → plantilla completa | null
  system.documents({tplId, search})   → [{id, title, templateId, ...}]
  system.document(docId)              → documento completo | null
  system.documentExists(docId)        → true | false
  system.getValue(docId, fieldId)    → valor | filas[] | undefined
  system.setValue(docId, fieldId, v)  → void (guarda de inmediato)
  system.createDocument(tplId, meta)  → doc creado ({id, title, ...})
  system.deleteDocument(docId)        → void

Protección: NO permite setValue en el documento que ejecuta el
script (usar doc.setValue para eso). Seguridad: Firestore scopea
por userId; cifrado/descifrado transparente.

── 3. API DE CONTEXTO (doc / row) ────────────────────────────────────────────────
Dentro de un script (setting-script), el código corre como cuerpo
de una función async con doc, row y sourcesData inyectados:

  doc.getValue('id')            → lee cualquier campo por ID
  doc.setValue('id', valor)     → escribe y refresca visualización
  doc.setStyle('id', {color})   → estilo dinámico
  doc.setOptions('id', ['A'])   → reemplaza opciones de select
  doc.toast('msg', 'success')   → notificación no bloqueante
  doc.alert('msg')              → alerta BLOQUEANTE
  doc.lib('idScript')           → (await) ejecuta otro script Librería
  doc.api('idApi')              → (await) { execute(payload) }
  doc.servicio('docId.scrId')   → (await) { get/post/put/del }(cuerpo)
  row.getValue/setValue/etc.    → ídem pero limitado a la fila actual

Si el código es una sola expresión se envuelve en "return (...)".
Para lógica con sentencias no hace falta "return", salvo que
"trigger" sea "library" (ahí SÍ debe terminar en "return {...}").

── 4. FÓRMULAS (motor tipo Excel) ───────────────────────────────────────────────────────────
Atributo declarativo "formula" en campos que lo soportan. Alternativa
SIMPLE a scripts cuando el cálculo es:
  "este campo = operación sobre otros campos del mismo doc/fila"
Sin recorrer tablas, sin async, sin efectos secundarios.

  Sintaxis: SIEMPRE empieza con "=". Referencia: @{id_otro_campo}.
  Operadores: + - * / \\u0026 = <> < > <= >=
  Funciones:
    Lógica:  SI(condicion,si_verdadero,si_falso) · SI.ERROR · Y · O · NO
    Matem:   SUMA · PROMEDIO · CONTAR · MAX · MIN · REDONDEAR(num,dec)
    Texto:   CONCATENAR · MAYUSCULAS · MINUSCULAS · LARGO ·
             IZQUIERDA(t,n) · DERECHA(t,n) · EXTRAE(t,inicio,n)
    Fecha:   HOY() · AÑO(f) · MES(f) · DIA(f) · DIAS(fin,inicio)
  Disponible en: setting-string, setting-email, setting-password,
    setting-number, setting-currency, setting-percentage,
    setting-date, setting-time (y columnas de esos tipos en tablas).
  NO disponible en: text, select, boolean, table, chart, script,
    url, html.
  Un campo con formula queda de solo lectura automáticamente.
  NUNCA combinar formula + script que escriba el MISMO campo.

── 5. FUENTES EXTERNAS (ETL) ────────────────────────────────────────────────────────────────────
Si la plantilla tiene fuentes configuradas, el script puede usar
@{idFuente} que se reemplaza automáticamente por el resultado
YA resuelto (sin fetch/await). Disponible solo si el Diseñador
configuró fuentes ETL en la plantilla.

═══════════════════════════════════════════════════════════════════════
  REGLAS DEL ESQUEMA JSON (FASE 4)
═══════════════════════════════════════════════════════════════════════
1. Devuelve un Array de objetos planos (cada objeto = 1 componente).
2. ARREGLO PLANO, SIN ANIDAR (¡CRÍTICO!): El lienzo es una LISTA
   LINEAL. Una section/subsection NO es un contenedor con hijos:
   es un separador visual. Los campos que deben "verse dentro"
   de una sección se logran colocándolos justo después de ella
   en el MISMO nivel del array. NUNCA anidar en
   "children"/"items"/"fields". Ejemplo correcto:
   [{"tag":"setting-section","title":"Datos"},{"tag":"setting-string","title":"Nombre"},{"tag":"setting-section","title":"Factura"},...]
3. Atributos base en CUALQUIER objeto:
   - "id": Identificador único, minúsculas, sin espacios. Oblig.
   - "title": Etiqueta visible. Obligatorio.
   - "tag": Tipo de componente (ej: setting-string). Obligatorio.
   - "spanEV": Ancho en pantalla (1-12, 12=fila completa). Oblig.
   - "spanP": Ancho en PDF (1-12). Obligatorio.
   - "readonly": true → bloqueado, solo lectura.
   - "hideEdit"/"hideView"/"hidePrint"/"hideWhatsapp": true →
     ocultar en el modo indicado.
4. Atributos específicos por tipo (mismo nivel raíz):
   - setting-select: "options" (texto separado por coma).
   - setting-currency: "currency" (símbolo, ej "$"; default "$").
   - setting-string: "inputType":"tel" → variante Teléfono.
   - setting-text: "richText":false → texto plano (textarea).
   - setting-time/setting-date/setting-chart: "isAutomatic":true
     → marcado como alimentado por script/ETL.
   - setting-script: "trigger" y "scriptCode" (ver punto 5).
5. LÓGICA Y CÁLCULOS — usa siempre la herramienta más simple:
   OPCIÓN A — formula (ver sección 4 arriba): para cálculos
   simples sin recorrer tablas ni async.
   OPCIÓN B — setting-script (ver sección 3 arriba): para todo
   lo demás (recorrer tablas, sincronizar listas, automatizar
   gráficos, llamar servicios, afectar varios campos).
6. TABLAS: setting-table DEBE tener "columns" (arreglo de objetos
   con tag/id/title/etc.). Columna numérica puede tener
   "total":true y "totalPosition":"tfoot"|"thead".

REGLAS DE COMPONENTES DISPONIBLES (ESTRICTO):
Solo puedes usar estos tags. Respeta rigurosamente sus reglas:
${a}

EL REQUERIMIENTO DEL USUARIO ES:
"${e}"`},_buildFilteredComponentReference(t){const e=["REFERENCIA FILTRADA DE COMPONENTES — DocEngine",`Componentes solicitados: ${t.join(", ")}`,"Generada automáticamente. Contiene la descripción extendida (aiPromptLong)","de cada componente listado, para que la IA pueda producir un inventario detallado.",""],a=[];return t.forEach(s=>{var n;const i=H[s];if(!i){a.push(s);return}e.push(`### ${s} — ${i.longLabel||s}`),i.aiPrompt&&e.push(`Resumen I/O: ${i.aiPrompt}`),i.aiPromptLong&&(e.push(""),e.push(i.aiPromptLong));const o=(((n=i.settings)==null?void 0:n.custom)||[]).filter(l=>l.type!=="raw");o.length>0&&(e.push(""),e.push("Atributos configurables (settings.custom):"),o.forEach(l=>{let d=`  - "${l.id}" (${l.type})`;if(l.caption&&(d+=`: ${l.caption}`),l.default!==void 0&&l.default!==""&&(d+=` [default: ${JSON.stringify(l.default)}]`),Array.isArray(l.options)&&l.options.length>0){const p=l.options.map(u=>u&&typeof u=="object"?u.value??u.label:u).join(", ");d+=` — opciones: ${p}`}e.push(d),l.help&&e.push(`    ${l.help}`)})),e.push("")}),a.length>0&&(e.push("---"),e.push(`⚠ Componentes no reconocidos: ${a.join(", ")}`),e.push("Verificá que los nombres coincidan con los tags del sistema.")),e.join(`
`)},async _copyFilteredComponentReference(){var n;const t=(((n=this.aiFilteredComponentsInput)==null?void 0:n.value)||"").trim();if(!t){m.toast("Pegá la lista de componentes que te dio la IA (separados por coma).","danger");return}const a=t.replace(/[\[\]"]/g,"").split(",").map(l=>l.trim().toLowerCase()).filter(l=>l.length>0);if(a.length===0){m.toast("No se encontraron nombres de componentes válidos.","danger");return}const s=this._buildFilteredComponentReference(a);if(await J.copyTextSmart(s,"Referencia Filtrada de Componentes")==="modal")return;this.aiStep3&&(this.aiStep3.style.display=""),this.aiStep2Instructions&&(this.aiStep2Instructions.style.display="");const o=this.btnCopyFilteredRef.innerHTML;this.btnCopyFilteredRef.innerHTML='<i class="fa-solid fa-check d-block mb-1 fs-5"></i> ¡Copiado!',this.btnCopyFilteredRef.classList.replace("btn-dark","btn-success"),setTimeout(()=>{document.body.contains(this.btnCopyFilteredRef)&&(this.btnCopyFilteredRef.innerHTML=o,this.btnCopyFilteredRef.classList.replace("btn-success","btn-dark"))},3e3)},_buildFromAi(){const t=this.aiJsonInput.value.trim();if(!t){m.toast("Pega el JSON que te devolvió la IA.","danger");return}let e;try{const s=t.replace(/```json/gi,"").replace(/```/g,"").trim(),i=s.indexOf("["),o=s.lastIndexOf("]"),n=i!==-1&&o!==-1&&o>i?s.slice(i,o+1):s;if(e=JSON.parse(n),!Array.isArray(e))throw new Error("El resultado no es un Array (Arreglo) válido.")}catch(s){m.toast("Error de lectura JSON: asegurate de pegar la respuesta completa de la IA (incluida la lista en lenguaje natural, si la trae). "+s.message,"danger");return}if(this._appendElementsToCanvas(e),this.aiJsonInput.value="",this.descInput&&!this.descInput.value.trim()&&this.aiIdeaInput){const s=this.aiIdeaInput.value.trim();s&&(this.descInput.value=s)}m.toast(`${e.length} elemento(s) agregado(s) a la Estructura del Documento`,"success");const a=document.getElementById("tab-btn-structure");a&&window.bootstrap&&window.bootstrap.Tab.getOrCreateInstance(a).show()},getAvailableVariables(t,e=null){const a=[];if(this.canvas.querySelectorAll(re).forEach(i=>{if(!i.closest(k.table)&&typeof i.getData=="function"){const o=i.getData();a.push({id:o.id,title:o.title||"(Sin Título)",type:"general"})}}),t==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const o=i.getData();o.columns&&o.columns.forEach(n=>{a.push({id:n.id,title:`[Col] ${n.title}`,type:"column"})})}}return t==="general"&&this.canvas.querySelectorAll(k.table).forEach(o=>{const n=o.getData();n.columns&&n.columns.forEach(l=>{l.total&&a.push({id:`TOTAL_${o.id}_${l.id}`,title:`SUM: ${n.title} > ${l.title}`,type:"total"})})}),a},getApiVariables(t,e=null){const a=[];if(this.canvas.querySelectorAll(re).forEach(i=>{if(!i.closest(k.table)&&typeof i.getData=="function"){const o=i.getData();a.push({id:o.id,title:o.title||"(Sin Título)",type:"general"})}}),t==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const o=i.getData();o.columns&&o.columns.forEach(n=>{a.push({id:n.id,title:`[Columna] ${n.title}`,type:"column"})})}}return a}},_e={init(){de.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:t=>{this.showEditor(),G.load(t)}}),G.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){de.render()},showEditor(){const t=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");t&&(t.style.display="none"),e&&(e.style.display="block"),G.reset()},showList(){const t=document.getElementById("designer-list-view"),e=document.getElementById("designer-editor-view");t&&(t.style.display="block"),e&&(e.style.display="none")},getAvailableVariables(t,e){return G.getAvailableVariables(t,e)},getApiVariables(t,e){return G.getApiVariables(t,e)}},z={handlers:{},currentDocs:[],currentTemplates:[],init(t){this.handlers=t;const e=document.getElementById("doc-list-view");if(!e){console.error("❌ [DocumentList] Error crítico: No se encontró #doc-list-view en el DOM.");return}e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents()},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-file-lines text-primary"></i> Gestor de Documentos</h2>
            <button class="btn btn-primary shadow-sm" id="btn-go-create-doc">
                <i class="fa-solid fa-plus me-2"></i> Nuevo Documento
            </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="doc-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Documentos (Cargando...)</span>
            </div>
            
            <div class="d-flex gap-2 align-items-center flex-grow-1 justify-content-end" style="max-width: 550px;">
              <select id="doc-template-filter" class="form-select" style="max-width: 200px;">
                <option value="">Todas las plantillas</option>
              </select>
              <div class="input-group" style="max-width: 350px;">
                <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" id="doc-search-input" class="form-control" placeholder="Buscar... (ej. reporte)" autocomplete="off">
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="doc-table-head">
                  <tr>
                    <th class="sortable" data-column="templateTitle">Plantilla Base</th>
                    <th class="sortable" data-column="title">Título del Documento</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="doc-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando documentos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.tableHead=document.getElementById("doc-table-head"),this.pagination=document.getElementById("doc-pagination-controls"),this.searchInput=document.getElementById("doc-search-input"),this.templateFilter=document.getElementById("doc-template-filter"),this.btnCreate=document.getElementById("btn-go-create-doc")},initTableEngine(){this.tableEngine=new oe({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td><span class="badge bg-secondary px-2 py-1">Plantilla</span></td>
        <td><div class="fw-bold">Test</div></td>
        <td class="text-end"><button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-eye"></i></button></td>
      `,marginBot:40,extractSearchString:t=>`${t.title} ${t.templateTitle||""}`,renderRowHTML:t=>this._renderRow(t),onRenderComplete:(t,e)=>this._bindListActions(t,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput.addEventListener("input",t=>{this.tableEngine.setSearchTerm(t.target.value)}),this.templateFilter&&this.templateFilter.addEventListener("change",t=>{this.tableEngine.setFilter("templateId",t.target.value)})},async render(){try{this.currentDocs=await b.getAll("doc")||[],this.currentTemplates=await b.getAll("tpl")||[],this.populateTemplateFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentDocs)}catch(t){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando documentos: ${t.message}</td></tr>`)}},populateTemplateFilter(){if(!this.templateFilter)return;const t=this.templateFilter.value,e=new Set(this.currentDocs.map(i=>i.templateId)),a=this.currentTemplates.filter(i=>e.has(i.id)).sort((i,o)=>i.title.localeCompare(o.title,void 0,{sensitivity:"base"}));let s='<option value="">Todas las plantillas</option>';a.forEach(i=>{const o=i.icon||"📄";s+=`<option value="${i.id}">${o} ${i.title}</option>`}),this.templateFilter.innerHTML=s,a.some(i=>i.id===t)?this.templateFilter.value=t:this.templateFilter.value=""},_renderRow(t){let e="";t.isEncrypted&&(e=b._masterKey&&!t.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Desbloqueado"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado"><i class="fa-solid fa-lock"></i></span>');const a=this.currentTemplates.find(i=>i.id===t.templateId);return`
      <tr>
        <td>
          <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
            <span class="me-1 fs-6">${a&&a.icon?a.icon:"📄"}</span>${t.templateTitle||"General"}
          </span>
        </td>
        <td>
           <div class="fw-bold text-nowrap d-flex align-items-center">
               ${t.title} ${e}
           </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-primary btn-view-doc me-1" data-id="${t.id}" title="Visualizar">
               <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-copy-id me-1" data-id="${t.id}" title="Copiar ID">
               <i class="fa-regular fa-copy"></i>
            </button>
            <button class="btn btn-sm btn-outline-info btn-dev-json me-1" data-id="${t.id}" title="Extraer JSON (Dev)">
               <i class="fa-solid fa-code"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del-doc" data-id="${t.id}" title="Eliminar Documento">
               <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(t){t.querySelectorAll(".btn-view-doc").forEach(e=>{e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)}),t.querySelectorAll(".btn-del-doc").forEach(e=>{e.onclick=async()=>{await m.confirm("Eliminar Documento","¿Estás seguro de eliminar este documento definitivamente? Esta acción no se puede deshacer.")&&(await b.delete("doc",e.dataset.id),m.toast("Documento eliminado correctamente","success"),this.render())}}),t.querySelectorAll(".btn-copy-id").forEach(e=>{e.onclick=async a=>{a.stopPropagation();const s=e.dataset.id,i=e.querySelector("i");try{await navigator.clipboard.writeText(s);const o=i.className;i.className="fa-solid fa-check text-success",setTimeout(()=>{i.className=o},1500)}catch(o){console.error("Error al copiar ID:",o),m.toast("No se pudo copiar el ID al portapapeles.","danger")}}}),t.querySelectorAll(".btn-dev-json").forEach(e=>{e.onclick=async a=>{a.stopPropagation();const s=e.dataset.id,i=e.querySelector("i"),o=i.className;try{i.className="fa-solid fa-spinner fa-spin text-info";let n=await b.getOne("doc",s);if(!n)throw new Error("Documento no encontrado");if(n.isEncrypted&&n.decryptionError){const u=await m.promptPassword("Desbloqueo Requerido","Este documento está cifrado. Ingrese su Frase Maestra para extraer los datos reales:");if(!u){i.className=o;return}if(await _.setMasterKey(u),n=await b.getOne("doc",s),n.decryptionError){m.toast("⛔ Frase incorrecta. No se puede extraer el documento.","danger"),i.className=o;return}}const l=await b.getOne("tpl",n.templateId),p=JSON.stringify({_INFO:"Extracto generado para depuración con IA",document:n,template:l},null,2);await navigator.clipboard.writeText(p),i.className="fa-solid fa-check text-success",m.toast("JSON copiado al portapapeles","success"),setTimeout(()=>{i.className=o},1500)}catch(n){console.error("Error al extraer JSON:",n),i.className="fa-solid fa-xmark text-danger",m.toast("Error al extraer el JSON de desarrollo.","danger"),setTimeout(()=>{i.className=o},1500)}}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},j={getCurrentUser(){return R.currentUser},onAuthStateChanged(t){return ye(R,t)},async login(t,e){try{const s=(await ve(R,t,e)).user;if(!s.emailVerified)throw await W(R),new Error("Debes verificar tu correo electrónico antes de entrar.");return s}catch(a){throw console.error("[AUTH] Error:",a.code),a.message.includes("verificar tu correo")?a:new Error("Credenciales inválidas o error de conexión.")}},async signup(t,e){try{const s=(await fe(R,t,e)).user;return await be(s),await Ae(Re(Se,"users",s.uid),{email:t,createdAt:new Date().toISOString(),emailVerified:!1}),s}catch(a){throw new Error("Error en registro: "+a.message)}},async logout(){return _.clearSession(),W(R)}},Z={async getProfile(t){if(!t)return null;try{return await x.getRaw("user_profiles",t)}catch(e){return console.error("Error obteniendo el perfil:",e),null}},async saveProfile(t,e){if(!t)throw new Error("Usuario no autenticado");try{await x.set("user_profiles",t,{...e,updatedAt:new Date().toISOString()},{merge:!0})}catch(a){throw console.error("Error guardando el perfil:",a),a}}},Y={async print(t,e){let a=await b.getOne("doc",t);if(!a){m.toast("Documento no encontrado.","danger");return}if(a.isEncrypted&&a.decryptionError){m.toast("El documento está bloqueado. Desbloquéelo en el visor primero.","danger");return}const s=await b.getOne("tpl",a.templateId);if(!s){m.toast("La plantilla base no se encuentra.","danger");return}const i=j.getCurrentUser(),o=i?await Z.getProfile(i.uid):null;let n=document.getElementById("print-iframe");n||(n=document.createElement("iframe"),n.id="print-iframe",n.style.position="fixed",n.style.left="-10000px",n.style.top="0",n.style.width="100%",n.style.height="100%",document.body.appendChild(n));const l=n.contentWindow.document,d=new Date(a.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let p="";for(let h=1;h<=12;h++)p+=`.col-${h} { width: ${h/12*100}%; } `;let u="";if(o&&o.name&&o.name.trim()!==""){const h=o.logoBase64?`<img src="${o.logoBase64}" style="max-height: 60px; display: block; margin-bottom: 5px;">`:"",c=`<strong style="font-size: 0.9rem; color: #212529; text-transform: uppercase;">${o.name}</strong>`;u=`<div style="display: flex; flex-direction: column; align-items: flex-start; padding-right: 20px; margin-right: 20px; border-right: 2px solid #dee2e6;">${h}${c}</div>`}l.open(),l.write(`
        <html>
          <head>
            <title>${a.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <style>
              body { background: white; font-family: sans-serif; margin: 0; padding: 20px; }
              .print-header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 15px; margin-bottom: 25px; border-bottom: 2px solid #dee2e6; }
              .header-left { display: flex; align-items: center; }
              .header-right { text-align: right; }
              .row { display: flex; flex-wrap: wrap; margin: 0 -4px; }
              [class^="col-"] { padding: 4px; box-sizing: border-box; }
              ${p}
              h1 { margin: 0 0 4px 0; font-size: 1.5rem; color: #212529; }
              p { margin: 0; color: #6c757d; font-size: 0.95rem; }
              .badge-pro { background-color: #0d6efd !important; color: white !important; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; display: inline-block; margin-bottom: 8px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .badge-pro .fw-light { font-weight: 300; opacity: 0.8; }
            </style>
          </head>
          <body>
            <div class="print-header">
              <div class="header-left">
                ${u}
                <div>
                  <h1>${a.title}</h1>
                  <p>${s.title}</p>
                </div>
              </div>
              <div class="header-right">
                <div>
                  <span class="badge-pro fw-bold text-bg-primary">
                    <i class="fa-solid fa-shield-halved me-1"></i>DocEngine
                    <span class="fw-light opacity-75">Pro</span>
                  </span>
                </div>
                <div style="color: #6c757d; font-size: 0.85rem; margin-bottom: 2px;">${d}</div>
                <div style="font-weight: bold; font-size: 0.75rem; text-transform: uppercase; color: #495057;">${e}</div>
              </div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),l.close(),n.onload=()=>{const h=l.getElementById("print-content");let c=!1;const g=[];s.elements.forEach(f=>{if(N(f)){if(c=f.hidePrint===!0||f.hidePrint==="true"||f.hidePrint===""||f["hide-print"]===!0||f["hide-print"]==="true"||f["hide-print"]==="",c)return;const q=l.createElement("div");q.className="col-12 mt-3 mb-2";const Ie=f.pageBreak?"page-break-before: always; margin-top: 0 !important;":"";q.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; color: #212529; font-size: 1.1rem; ${Ie}">${f.title}</h4>`,h.appendChild(q);return}if(c||f.hidePrint===!0||f.hidePrint==="true"||f.hidePrint===""||f["hide-print"]===!0||f["hide-print"]==="true"||f["hide-print"]==="")return;const y=a.content.find($=>$.fieldId===f.id);if(!y)return;const I=y.value,P=f.tag.replace("setting-","printer-"),w=document.createElement(P);w.setAttribute("title",f.title),f.currency&&w.setAttribute("currency",f.currency),f.options&&w.setAttribute("options",f.options),f.isAutomatic&&w.setAttribute("is-automatic",""),f.columns&&w.setAttribute("columns",JSON.stringify(f.columns)),f.richText!==void 0&&w.setAttribute("rich-text",f.richText),f.inputType!==void 0&&w.setAttribute("input-type",f.inputType),ne(w,f),w.setAttribute("edit-value",Array.isArray(I)?JSON.stringify(I):I),w.setAttribute("type",e),w.setAttribute("span-print",f.spanP||12),y.bold&&w.setAttribute("bold",""),y.italic&&w.setAttribute("italic",""),w.setAttribute("color",y.color||"black"),P==="printer-image"&&typeof I=="string"&&I.includes("github://")&&g.push(new Promise($=>{w.addEventListener("dg-media-ready",()=>$(),{once:!0})})),["printer-audio","printer-video","printer-url"].includes(P)&&I&&g.push(new Promise($=>{w.addEventListener("dg-media-ready",()=>$(),{once:!0})}));const M=l.createElement("div");M.className=`col-${f.spanP||12}`,M.appendChild(w),h.appendChild(M)});const v=new Promise(f=>setTimeout(f,5e3));(g.length?Promise.race([Promise.all(g),v]):Promise.resolve()).then(()=>{setTimeout(()=>{n.contentWindow.focus(),n.contentWindow.print()},300)})}},async copyToWhatsApp(t){let e=await b.getOne("doc",t);if(!e){m.toast("Error recuperando documento.","danger");return}if(e.isEncrypted&&e.decryptionError){m.toast("El documento está cifrado. Debe abrirlo primero en el visor.","danger");return}const a=await b.getOne("tpl",e.templateId),s=j.getCurrentUser(),i=s?await Z.getProfile(s.uid):null;let n=`${i&&i.name&&i.name.trim()!==""?`🏢 *${i.name.toUpperCase()}*

`:""}*${e.title.toUpperCase()}*
_${a.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`,l=!1;a.elements.forEach(d=>{if(N(d)){if(l=d.hideWhatsapp===!0||d.hideWhatsapp==="true"||d.hideWhatsapp===""||d["hide-whatsapp"]===!0||d["hide-whatsapp"]==="true"||d["hide-whatsapp"]==="",l)return;n+=`
*--- ${d.title.toUpperCase()} ---*
`;return}if(l||d.hideWhatsapp===!0||d.hideWhatsapp==="true"||d.hideWhatsapp===""||d["hide-whatsapp"]===!0||d["hide-whatsapp"]==="true"||d["hide-whatsapp"]==="")return;const u=e.content.find(g=>g.fieldId===d.id);if(!u)return;const h=d.tag.replace("setting-","viewer-"),c=document.createElement(h);if(d.currency&&c.setAttribute("currency",d.currency),d.options&&c.setAttribute("options",d.options),d.isAutomatic&&c.setAttribute("is-automatic",""),d.columns&&(c.columns=d.columns),d.richText!==void 0&&c.setAttribute("rich-text",d.richText),d.inputType!==void 0&&c.setAttribute("input-type",d.inputType),ne(c,d),c.setAttribute("title",d.title),c.setAttribute("edit-value",typeof u.value=="object"?JSON.stringify(u.value):u.value),h==="viewer-table"&&d.columns&&(c.columns=d.columns,c.rows=Array.isArray(u.value)?u.value:[]),typeof c.getWhatsapp=="function"){const g=c.getWhatsapp();g&&g.trim()!==""&&(n+=g+`
`)}}),n+=`
_Generado con DocEngine Pro_`,navigator.clipboard.writeText(n).then(()=>m.toast("📋 ¡Contenido copiado al portapapeles! Listo para pegar en WhatsApp.","success")).catch(()=>m.toast("Error al acceder al portapapeles.","danger"))}},S={async saveUserConfig(t,e){await x.update("users",t,{githubConfig:e}).catch(async a=>{throw console.error("Error guardando config github",a),a})},async getUserConfig(t){const e=await x.getRaw("users",t);return e&&e.githubConfig||null},async addFileRecord(t){return x.add("github_files",t)},async listFiles(t){return x.queryWhere("github_files","userId",t)},async deleteFileRecord(t){await x.delete("github_files",t)},async updateLastUsedSettings(t,e,a){await x.update("users",t,{"githubConfig.lastUsedRepo":e,"githubConfig.lastUsedFolder":a}).catch(s=>console.error("Error actualizando ultima config",s))}},A={async validateCredentials(t,e){if(!(await fetch("https://api.github.com/user",{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales invalidas o token sin permisos.");return!0},async getUserRepos(t){const a=await fetch("https://api.github.com/user/repos?per_page=100&sort=updated",{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github.v3+json"}});if(!a.ok)throw new Error("No se pudieron cargar los repositorios de GitHub.");const i=(await a.json()).map(n=>({name:n.name,isPrivate:n.private,hasPages:n.has_pages,owner:n.owner.login})),o=i.map(async n=>{if(n.hasPages&&!n.isPrivate)try{const l=await fetch(`https://api.github.com/repos/${n.owner}/${n.name}/pages`,{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github.v3+json"}});if(l.ok){const d=await l.json();n.pagesUrl=d.html_url}}catch{console.warn(`No se pudo obtener el site de ${n.name}`)}});return await Promise.all(o),i},async uploadFile(t,e,a,s,i){const o=await this._toBase64(e),n=a.replace(/^\//,"").replace(/\/$/,""),l=n?`${n}/${s}`:s,d=`https://api.github.com/repos/${t.githubUser}/${i}/contents/${l}`,p={message:`Subido desde DocEngine: ${s}`,content:o},u=await fetch(d,{method:"PUT",headers:{Authorization:`Bearer ${t.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(p)});if(!u.ok){const h=await u.json();throw new Error(h.message||"Error al subir archivo a GitHub")}return await u.json()},async deleteFile(t,e,a,s){const i=`https://api.github.com/repos/${t.githubUser}/${s}/contents/${e}`,o={message:"Eliminado desde DocEngine",sha:a};if(!(await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${t.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(t){return new Promise((e,a)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(s.result.split(",")[1]),s.onerror=i=>a(i)})},async fetchSecureFile(t,e,a){const s=`https://api.github.com/repos/${t.githubUser}/${a}/contents/${e}`,i=await fetch(s,{headers:{Authorization:`Bearer ${t.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!i.ok)throw new Error(`Error descargando archivo (${i.status})`);return await i.blob()}};function $e(t=12){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";const s=new Uint32Array(t);crypto.getRandomValues(s);for(let i=0;i<t;i++)a+=e[s[i]%e.length];return a}const Ve={show({onGenerate:t}={}){return new Promise(e=>{const a=document.getElementById("shareServiceModal");a&&a.remove();const s=`
        <div class="modal fade" id="shareServiceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow-lg">

              <div class="modal-header bg-primary text-white border-0">
                <h5 class="modal-title fw-bold"><i class="fa-solid fa-share-nodes me-2"></i>Compartir Documento</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" id="shareModalCloseTop"></button>
              </div>

              <div class="modal-body p-4">

                <div id="shareStateConfig">
                  <p class="text-muted small mb-3">
                    Tu documento sera cifrado y almacenado de forma segura en tu repositorio <strong>mi-gestion</strong> dentro de la carpeta <strong>compartido</strong>.
                  </p>
                  <div class="alert alert-info border-info small">
                    Se generara un enlace para el visor grafico y otro enlace (API) para extraer el JSON descifrado. Ambos apuntan al mismo archivo seguro.
                  </div>
                </div>

                <div id="shareStateLoading" class="text-center py-4 d-none">
                  <div class="spinner-border text-primary mb-3" role="status"></div>
                  <h6 class="fw-bold text-secondary">Cifrando y Subiendo...</h6>
                  <p class="small text-muted mb-0">Protegiendo documento con AES-256 GCM</p>
                </div>

                <div id="shareStateSuccess" class="d-none">
                  <div class="alert alert-warning border-warning p-2 mb-3" role="alert">
                    <p class="small text-dark mb-0"><i class="fa-solid fa-triangle-exclamation text-warning me-1"></i> Estos enlaces contienen tu llave de descifrado en la URL. Guardalos con seguridad.</p>
                  </div>

                  <div class="mb-3">
                    <label class="form-label fw-bold small text-uppercase text-primary"><i class="fa-solid fa-desktop me-1"></i>Enlace del Visor (Interfaz Grafica)</label>
                    <div class="input-group">
                      <input type="text" id="shareFinalLink" class="form-control bg-light text-muted small" readonly>
                      <button class="btn btn-outline-primary btn-copy-link" type="button" data-target="shareFinalLink">
                        <i class="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>

                  <div class="mb-1">
                    <label class="form-label fw-bold small text-uppercase text-success"><i class="fa-solid fa-code me-1"></i>Enlace API (JSON Descifrado)</label>
                    <div class="input-group">
                      <input type="text" id="shareApiLink" class="form-control bg-light text-muted small" readonly>
                      <button class="btn btn-outline-success btn-copy-link" type="button" data-target="shareApiLink">
                        <i class="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              <div class="modal-footer bg-light border-0" id="shareModalFooter">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="shareCancelBtn">Cancelar</button>
                <button type="button" class="btn btn-primary fw-bold" id="shareGenerateBtn">
                  <i class="fa-solid fa-lock me-2"></i>Cifrar y Generar
                </button>
              </div>

            </div>
          </div>
        </div>
      `,i=document.createElement("div");i.innerHTML=s,document.body.appendChild(i.firstElementChild);const o=document.getElementById("shareServiceModal"),n=new window.bootstrap.Modal(o),l=document.getElementById("shareGenerateBtn"),d=document.getElementById("shareFinalLink"),p=document.getElementById("shareApiLink"),u=document.getElementById("shareStateConfig"),h=document.getElementById("shareStateLoading"),c=document.getElementById("shareStateSuccess"),g=document.getElementById("shareModalFooter"),v=document.getElementById("shareModalCloseTop");let E=!1,f={};o.addEventListener("hide.bs.modal",()=>{document.activeElement&&o.contains(document.activeElement)&&document.activeElement.blur()}),o.addEventListener("hidden.bs.modal",()=>{o.remove(),e(E?{succeeded:!0,...f}:{succeeded:!1})}),l.addEventListener("click",async()=>{u.classList.add("d-none"),g.classList.add("d-none"),v.classList.add("d-none"),h.classList.remove("d-none");try{if(t){const y=$e(),I=await t(y);d.value=I.visorUrl||"",p.value=I.apiUrl||"",f={visorUrl:I.visorUrl,apiUrl:I.apiUrl,fileUrlPath:I.fileUrlPath}}h.classList.add("d-none"),c.classList.remove("d-none"),v.classList.remove("d-none"),E=!0}catch(y){n.hide(),e({succeeded:!1,error:new Error("Error al subir a GitHub: "+y.message)})}}),o.querySelectorAll(".btn-copy-link").forEach(y=>{y.addEventListener("click",async()=>{const I=y.getAttribute("data-target"),P=document.getElementById(I);try{await navigator.clipboard.writeText(P.value);const w=y.innerHTML,M=y.className;y.innerHTML='<i class="fa-solid fa-check"></i>',y.className="btn btn-success text-white btn-copy-link",setTimeout(()=>{y.innerHTML=w,y.className=M},2e3)}catch(w){console.error(w),m.toast("No se pudo copiar automaticamente. Selecciona el enlace y presiona Ctrl+C","warning")}})}),n.show()})}},O=new Map,Ne={on(t,e){return O.has(t)||O.set(t,new Set),O.get(t).add(e),()=>this.off(t,e)},once(t,e){const a=s=>{this.off(t,a),e(s)};return this.on(t,a)},off(t,e){const a=O.get(t);a&&(a.delete(e),a.size===0&&O.delete(t))},emit(t,e){const a=O.get(t);if(a)for(const s of a)try{s(e)}catch(i){console.error(`[EventBus] Error en handler de "${t}":`,i)}},activeEvents(){return Array.from(O.keys())},listenerCount(t){const e=O.get(t);return e?e.size:0},clear(t){t?O.delete(t):O.clear()}},He={generateRandomKey(t=12){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";const s=new Uint32Array(t);crypto.getRandomValues(s);for(let i=0;i<t;i++)a+=e[s[i]%e.length];return a},async createSharedPortal(t,e,a){const s=T.getCurrentUser();if(!s)throw new Error("Debes estar autenticado para compartir.");const i=await S.getUserConfig(s.uid);if(!i||!i.githubToken)throw new Error("Configura tu Token de GitHub en tu perfil.");const o=i.githubUser||i.username;if(!o)throw new Error("Falta el Usuario de GitHub en tu configuracion.");const n="mi-gestion",l="compartido",d=window.location.href.split("?")[0].split("#")[0],p=d.substring(0,d.lastIndexOf("/")),u=p+"/visor.html",h=p+"/api.html",c=await Ve.show({onGenerate:async(g,{includeKey:v}={includeKey:!0})=>{const E={version:"1.0",layout:t,data:e,authorId:s.uid,timestamp:new Date().toISOString()},f=await _.encryptShared(E,g),L=JSON.stringify(f,null,2),y=new Blob([L],{type:"application/json"}),I=new File([y],`${a}.json`,{type:"application/json"});await A.uploadFile(i,I,l,I.name,n);const P=`${o}/${n}/${l}/${I.name}`,w=`${u}?file=${encodeURIComponent(P)}`,M=`${h}?file=${encodeURIComponent(P)}`,$=v?`${w}#key=${g}`:w,q=v?`${M}#key=${g}`:M;return{visorUrl:$,apiUrl:q,fileUrlPath:P}}});if(c.succeeded)return Ne.emit("share:completed",{visorUrl:c.visorUrl,apiUrl:c.apiUrl,fileUrlPath:c.fileUrlPath}),{fileUrlPath:c.fileUrlPath,visorUrl:c.visorUrl,apiUrl:c.apiUrl};{const g=new Error("Operacion cancelada por el usuario.");throw g.userCancelled=!0,g}}};function Fe(){const t=Date.now(),e=new Date(t),a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),l=String(e.getMilliseconds()).padStart(3,"0");return`${a}-${s}/${i}/${o} ${n} ${l}`}const te={handlers:{},currentDocId:null,currentDocContent:[],currentDocTitle:"",init(t){this.handlers=t,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(t){if(!t)return;let e=await b.getOne("doc",t);if(!e){m.toast("El documento no existe.","danger");return}if(e.isEncrypted&&e.decryptionError){const s=await m.promptPassword("Acceso Seguro Requerido","Este documento está cifrado. Ingrese su Frase Maestra para visualizarlo:");if(!s)return this.handlers.onBack();try{if(await _.setMasterKey(s),e=await b.getOne("doc",t),e.decryptionError)return m.toast("Frase incorrecta. Acceso denegado.","danger"),this.handlers.onBack();m.toast("Documento descifrado con éxito","success")}catch{return m.toast("Error del sistema al intentar desbloquear.","danger"),this.handlers.onBack()}}const a=await b.getOne("tpl",e.templateId);if(!a){m.toast("La plantilla base no se encuentra.","danger");return}this.currentDocId=e.id,this.currentDocTitle=e.title,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this.currentDocContent=this._buildFlatDocArray(e,a),this._renderContent(e,a,this.canvas)},_buildFlatDocArray(t,e){const a=[];return e.elements.forEach(s=>{const i=t.content.find(o=>o.fieldId===s.id);a.push({def:s,data:i||null})}),a},async renderReadOnly(t,e){e.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let a=await b.getOne("doc",t);if(!a){e.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(a.isEncrypted&&a.decryptionError){e.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const s=await b.getOne("tpl",a.templateId);if(!s){e.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}e.innerHTML="";const i=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(a,s,e,i)},_renderContent(t,e,a,s=""){t.content&&typeof t.content=="object"&&!Array.isArray(t.content)&&(t.content=Object.values(t.content)),e.elements.some(o=>N(o))?(a.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(t,e,a,s)):(a.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(t,e,a))},_renderFlatView(t,e,a){t.content&&t.content.forEach(s=>{const i=e.elements.find(n=>n.id===s.fieldId);if(!i)return;const o=this._createViewerComponent(i,s);a.appendChild(o)})},_renderStructuredView(t,e,a,s=""){const i=[];let o={title:"Principal",def:null,elements:[]};e.elements.forEach(u=>{if(N(u))(o.elements.length>0||o.title!=="Principal")&&i.push(o),o={title:u.title||"Sección",def:u,elements:[]};else{const h=t.content.find(c=>c.fieldId===u.id);h&&o.elements.push({def:u,data:h})}}),i.push(o);const n=i.filter(u=>u.def?!(u.def.hideView===!0||u.def.hideView==="true"||u.def.hideView===""||u.def["hide-view"]===!0||u.def["hide-view"]==="true"||u.def["hide-view"]===""):!0),l=`nav-viewer-${t.id}${s}`;let d=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${l}" role="tablist">`,p=`<div class="tab-content tab-content-custom" id="${l}Content">`;n.forEach((u,h)=>{const c=`view-sec-${h}-${t.id}${s}`,g=h===0,v=u.def?u.def.id:"SECTION_PRINCIPAL",E=s===""?`<span class="text-secondary opacity-25 btn-share-section d-inline-flex align-items-center justify-content-center p-1 rounded" 
                data-secid="${v}" 
                data-sectitle="${u.title}" 
                title="Compartir Sección" 
                style="transition: all 0.2s; cursor: pointer; z-index: 2;" 
                onmouseover="this.classList.replace('opacity-25', 'opacity-100'); this.classList.replace('text-secondary', 'text-primary'); this.classList.add('bg-light');" 
                onmouseout="this.classList.replace('opacity-100', 'opacity-25'); this.classList.replace('text-primary', 'text-secondary'); this.classList.remove('bg-light');">
             <i class="fa-solid fa-share-nodes"></i>
          </span>`:"",f=s===""?`<span class="text-secondary opacity-25 btn-share-section d-inline-flex align-items-center justify-content-center p-2 rounded" 
                data-secid="${v}" 
                data-sectitle="${u.title}" 
                title="Compartir Sección" 
                style="transition: all 0.2s; cursor: pointer;" 
                onmouseover="this.classList.replace('opacity-25', 'opacity-100'); this.classList.replace('text-secondary', 'text-primary'); this.classList.add('bg-light');" 
                onmouseout="this.classList.replace('opacity-100', 'opacity-25'); this.classList.replace('text-primary', 'text-secondary'); this.classList.remove('bg-light');">
             <i class="fa-solid fa-share-nodes"></i>
          </span>`:"";d+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${g?"active":""} d-flex align-items-center gap-2" data-bs-toggle="tab" data-bs-target="#v-tab-${c}" type="button">
            <span>${u.title}</span> 
            ${E}
          </button>
        </li>`,p+=`
        <div class="tab-pane fade ${g?"show active":""}" id="v-tab-${c}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm" data-bs-toggle="collapse" data-bs-target="#v-coll-${c}" style="cursor:pointer;">
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold text-primary text-uppercase small">${u.title}</span>
                    ${f}
                </div>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${c}" class="collapse d-md-block ${g?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),a.innerHTML=d+"</ul>"+p+"</div>",s===""&&a.querySelectorAll(".btn-share-section").forEach(u=>{u.onclick=h=>{h.stopPropagation(),this._generatePortal(u.dataset.secid,u.dataset.sectitle)}}),n.forEach((u,h)=>{const c=`view-sec-${h}-${t.id}${s}`,g=a.querySelector(`#v-coll-${c} .row`);u.elements.forEach(v=>{const E=this._createViewerComponent(v.def,v.data);g.appendChild(E)})})},_createViewerComponent(t,e){const a=t.tag.replace("setting-","viewer-"),s=document.createElement(a);return t.currency&&s.setAttribute("currency",t.currency),t.options&&s.setAttribute("options",t.options),t.isAutomatic&&s.setAttribute("is-automatic",""),t.richText!==void 0&&s.setAttribute("rich-text",t.richText),t.inputType!==void 0&&s.setAttribute("input-type",t.inputType),s.setData&&s.setData({...t,...e||{},value:e?e.value:""}),s},_renderHeaderActions(t){this.headerActions&&(this.headerActions.innerHTML=`
        <button id="btn-edit-mode" class="btn btn-warning shadow-sm"><i class="fa-solid fa-pen"></i> Editar</button>
        <button id="btn-share-doc" class="btn btn-outline-primary shadow-sm bg-white"><i class="fa-solid fa-shield-halved me-1"></i> Portal</button>
        <button id="btn-whatsapp" class="btn btn-success shadow-sm text-bg-success"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
        <div class="dropdown d-inline-block">
             <button class="btn btn-secondary dropdown-toggle shadow-sm" type="button" data-bs-toggle="dropdown">
                <i class="fa-solid fa-print"></i> Imprimir
             </button>
             <ul class="dropdown-menu dropdown-menu-end shadow">
                <li><a class="dropdown-item" href="#" id="print-v"><i class="fa-solid fa-eye me-2"></i>Visual</a></li>
                <li><a class="dropdown-item" href="#" id="print-c"><i class="fa-solid fa-compress me-2"></i>Compacto</a></li>
                <li><a class="dropdown-item" href="#" id="print-f"><i class="fa-solid fa-book-open-reader me-2"></i>Fácil Lectura</a></li>
             </ul>
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(t.id),document.getElementById("btn-whatsapp").onclick=()=>Y.copyToWhatsApp(t.id),document.getElementById("btn-share-doc").onclick=()=>this._generatePortal("ALL"),document.getElementById("print-v").onclick=e=>{e.preventDefault(),Y.print(t.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),Y.print(t.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),Y.print(t.id,"Facil Lectura")})},async _generatePortal(t="ALL",e=""){try{m.toast("Generando Portal Seguro...","info");let a=[];if(t==="ALL")a=this.currentDocContent,e="Completo";else if(t==="SECTION_PRINCIPAL"){let n=this.currentDocContent.length;for(let l=0;l<this.currentDocContent.length;l++)if(N(this.currentDocContent[l].def)){n=l;break}a=this.currentDocContent.slice(0,n)}else{const n=this.currentDocContent.findIndex(d=>d.def.id===t);if(n===-1)throw new Error("Sección no encontrada.");let l=this.currentDocContent.length;for(let d=n+1;d<this.currentDocContent.length;d++)if(N(this.currentDocContent[d].def)){l=d;break}a=this.currentDocContent.slice(n,l)}let s=`${this.currentDocTitle}_${e}`.replace(/[^a-z0-9]/gi,"_").toLowerCase();s=s+"/"+Fe();const i=document.querySelector('link[href*="bootstrap"]')||document.querySelector('link[rel="stylesheet"]'),o=i?i.href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";await He.createSharedPortal({type:"docengine_array",theme:o},a,s)}catch(a){if(a.userCancelled)return;console.error("Error generando portal:",a),m.toast("Error al crear el enlace: "+a.message,"danger")}}},ae={handlers:{},currentDocId:null,currentTplId:null,_exposeToWindow(){typeof window<"u"&&(window.DocumentEditor=this)},init(t){this.handlers=t,this.cacheDOM(),this._exposeToWindow()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(t){const e=await b.getOne("tpl",t);if(!e)return m.toast("Error: La plantilla seleccionada no existe.","danger"),this.handlers.onBack();if(e.encrypted&&!b._masterKey){const s=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!s)return this.handlers.onBack();if(!await b.verifyMasterPhrase(s))return m.toast("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla.","danger"),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=t,this.titleInput.value="",this.titleInput.readOnly=!1;const a=document.getElementById("doc-template-selector");a&&(a.style.display="none"),await this.renderCanvas(t,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(t){const e=await b.getOne("doc",t);e&&(this.currentDocId=t,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(t,e){const a=await b.getOne("tpl",t);if(!a)return;this.canvas.innerHTML="",a.elements.filter(o=>N(o)).length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(a.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),a.elements.forEach(o=>{const n=this._createComponent(o,e);this.canvas.appendChild(n)}))},_renderStructuredUI(t,e){const a=[];let s={title:"Principal",def:null,elements:[]};t.forEach(d=>{N(d)?((s.elements.length>0||s.title!=="Principal")&&a.push(s),s={title:d.title||"Sección",def:d,elements:[]}):s.elements.push(d)}),a.push(s);const i=`nav-tabs-${this.currentTplId}`;let o=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${i}" role="tablist">`,n=`<div class="tab-content tab-content-custom" id="${i}Content">`,l=-1;a.forEach((d,p)=>{const u=d.def;!(u&&(u.hideEdit===!0||u.hideEdit==="true"||u.hideEdit===""||u["hide-edit"]===!0||u["hide-edit"]==="true"||u["hide-edit"]===""))&&l===-1&&(l=p)}),l===-1&&(l=0),a.forEach((d,p)=>{const u=`sec-${p}-${this.currentTplId}`,h=p===l,c=d.def,v=c&&(c.hideEdit===!0||c.hideEdit==="true"||c.hideEdit===""||c["hide-edit"]===!0||c["hide-edit"]==="true"||c["hide-edit"]==="")?" d-none":"";o+=`
        <li class="nav-item${v}" role="presentation">
          <button class="nav-link ${h?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${u}" type="button">
            ${d.title}
          </button>
        </li>`,n+=`
        <div class="tab-pane fade ${h?"show active":""} group-pane${v}" id="tab-pane-${u}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${u}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${d.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${u}" class="collapse d-md-block ${h?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=o+"</ul>"+n+"</div>",a.forEach((d,p)=>{const u=`sec-${p}-${this.currentTplId}`,h=this.canvas.querySelector(`#collapse-${u} .row`);d.elements.forEach(c=>{const g=this._createComponent(c,e);h.appendChild(g)})})},_createComponent(t,e){const a=t.tag.replace("setting-","editor-"),s=document.createElement(a);s.setAttribute("field-id",t.id),t.isAutomatic&&s.setAttribute("is-automatic",""),(t.hideEdit===!0||t.hideEdit==="true"||t.hideEdit===""||t["hide-edit"]===!0||t["hide-edit"]==="true"||t["hide-edit"]==="")&&s.classList.add("d-none");const o=e.find(d=>d.fieldId===t.id),n=o?o.value:"",l={...t,...o||{},value:n};return s.setData&&s.setData(l),s},setupSaveButton(t){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary shadow-sm"><i class="fa-solid fa-save"></i> ${t}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const t=document.getElementById("btn-save-document"),e=this.titleInput.value.trim();if(!e){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),m.toast("⚠️ Imposible Guardar: El documento requiere un Título.","warning");return}const a=t.innerHTML;t.disabled=!0,t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{let s=this.currentDocId;if(!s){const u=J.generateSemanticBaseId("doc",e,15),h=await b.getAll("doc")||[];s=u;let c=2;for(;h.some(g=>g.id===s);)s=`${u}${c}`,c++}const i=await b.getOne("tpl",this.currentTplId),n=Array.from(this.canvas.querySelectorAll("[field-id]")).filter(u=>!u.parentElement.closest("editor-table")),l=[];let d=!0;if(n.forEach(u=>{typeof u.validate=="function"&&!u.validate()&&(d=!1),typeof u.getData=="function"&&l.push(u.getData())}),!d)throw new Error("Revise los campos marcados en rojo.");const p={id:s,title:e,templateId:this.currentTplId,templateTitle:i?i.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:l,isEncrypted:i&&i.encrypted||!1};await b.save("doc",p),this.handlers.onSave()}catch(s){console.error("[DocumentEditor] Error al guardar:",s),m.toast("Error al guardar: "+s.message,"danger"),t&&(t.disabled=!1,t.innerHTML=a)}}},F={init(){this._setupGithubBridge(),z.init({onViewDocument:async t=>{z.hide(),this.showEditorView(),await te.render(t)},onNavigateToDesigner:()=>{const t=document.getElementById("nav-designer");t?t.click():m.toast("Navegue al diseñador para crear una plantilla.","info")}}),te.init({onEdit:async t=>{await ae.loadForEditing(t),await this._checkAndRenderRelatedDocs(t,!1)},onBack:()=>{this.showListView()}}),ae.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),z.render()},async createFromTemplate(t){z.hide(),this.showEditorView(),await ae.loadForCreation(t),await this._checkAndRenderRelatedDocs(t,!0)},async _checkAndRenderRelatedDocs(t,e){let a;if(e)a=await b.getOne("tpl",t);else{const s=await b.getOne("doc",t);s&&(a=await b.getOne("tpl",s.templateId))}if(a&&a.relatedDocIds){const s=a.relatedDocIds.split(",").map(i=>i.trim()).filter(i=>i);s.length>0&&this._renderRelatedBar(s)}},async _renderRelatedBar(t){this._clearRelatedBar();const e=document.createElement("div");e.id="related-docs-wrapper",e.className="no-print",e.style.position="fixed",e.style.bottom="20px",e.style.left="20px",e.style.zIndex="1050",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";const a=document.createElement("button");a.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",a.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${t.length}</span>
    `,a.title="Ver documentos relacionados";const s=document.createElement("div");s.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",s.style.position="absolute",s.style.minWidth="250px",s.style.maxWidth="300px",s.style.maxHeight="300px",s.style.overflowY="auto",s.style.transition="all 0.2s ease";const i=document.createElement("div");i.className="d-flex flex-column gap-1";let o=0;for(const n of t){const l=await b.getOne("doc",n);if(l){o++;const d=document.createElement("button");d.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",d.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,d.title=l.title,d.onclick=()=>{this._toggleDrawer(s,a,!1);const p=document.getElementById("modal-related-doc"),u=document.getElementById("modal-related-body");new bootstrap.Modal(p).show(),te.renderReadOnly(l.id,u)},i.appendChild(d)}}s.appendChild(i),o!==0&&(a.onclick=n=>{n.stopPropagation(),s.classList.contains("d-none")?(this._positionDrawer(e,s),s.classList.remove("d-none"),a.classList.remove("rounded-pill"),a.classList.add("rounded-start")):this._toggleDrawer(s,a,!1)},e.appendChild(s),e.appendChild(a),document.body.appendChild(e))},_toggleDrawer(t,e,a){a?t.classList.remove("d-none"):(t.classList.add("d-none"),e.classList.add("rounded-pill"),e.classList.remove("rounded-start"))},_positionDrawer(t,e){const a=t.getBoundingClientRect(),s=260,o=window.innerWidth-a.right;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",o>s?(e.style.left="100%",e.style.bottom="0",e.style.marginLeft="10px"):(e.style.bottom="100%",e.style.left="0",e.style.marginBottom="10px")},_clearRelatedBar(){const t=document.getElementById("related-docs-wrapper");t&&t.remove();const e=document.getElementById("related-docs-bar");e&&e.remove()},showListView(){this._clearRelatedBar();const t=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");t&&(t.style.display="block"),e&&(e.style.display="none"),z.render()},showEditorView(){this._clearRelatedBar();const t=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");t&&(t.style.display="none"),e&&(e.style.display="block")},_setupGithubBridge(){window.addEventListener("request-github-upload",async t=>{const{file:e,onSuccess:a,onError:s}=t.detail;try{const i=j.getCurrentUser();if(!i)throw new Error("NO_USER");const o=await S.getUserConfig(i.uid);if(!o||!o.githubToken)return s("NO_GITHUB");const n=o.lastUsedRepo;if(!n)return m.toast("Por favor, sube al menos un archivo en la Bóveda de GitHub para establecer tu repositorio predeterminado.","warning"),s("NO_REPO");const l=Date.now()+"_"+e.name.replace(/[^a-z0-9.]/gi,"_").toLowerCase(),d="doc-engine-media";await A.uploadFile(o,e,d,l,n);const p=`github://${n}/${d}/${l}`;a(p)}catch(i){console.error("[Puente GitHub] Error al subir:",i),s(i.message)}}),window.addEventListener("request-github-file",async t=>{const{url:e,onSuccess:a,onError:s}=t.detail;try{const i=j.getCurrentUser();if(!i)throw new Error("NO_USER");const o=await S.getUserConfig(i.uid);if(!o||!o.githubToken)throw new Error("NO_GITHUB");const n=e.replace("github://",""),l=n.indexOf("/"),d=n.substring(0,l),p=n.substring(l+1),u=await A.fetchSecureFile(o,p,d),h=URL.createObjectURL(u);a(h)}catch(i){console.error("[Puente GitHub] Error al obtener archivo seguro:",i),s()}})}},Ue={currentLogoBase64:null,render(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="card shadow-sm border-0 mb-4">
          <div class="card-header text-bg-success fw-bold py-3">
              <i class="fa-solid fa-id-badge me-2"></i>Perfil de Identidad (Reportes)
          </div>
          <div class="card-body">
              <div class="row align-items-center">
                  <div class="col-md-4 text-center mb-3 mb-md-0">
                      <img id="profile-logo-preview" src="" class="img-thumbnail rounded d-none shadow-sm" style="max-height: 90px; width: auto;" alt="Logo">
                      <div id="profile-logo-placeholder" class="bg-light border rounded d-flex align-items-center justify-content-center mx-auto text-muted shadow-sm" style="height: 90px; width: 90px;">
                          <i class="fa-solid fa-image fs-3"></i>
                      </div>
                      <input type="file" id="profile-logo-input" class="form-control form-control-sm mt-3" accept="image/png, image/jpeg, image/webp">
                      <small class="text-muted" style="font-size: 0.65rem;">Max: 200KB (PNG/JPG)</small>
                  </div>
                  <div class="col-md-8">
                      <div class="mb-3">
                          <label class="small text-muted fw-bold">Nombre o Razón Social</label>
                          <input type="text" id="profile-name-input" class="form-control" placeholder="Ej: Mi Empresa C.A." maxlength="40">
                          <small class="text-muted" style="font-size: 0.65rem;">Máximo 40 caracteres.</small>
                      </div>
                      <button id="btn-save-profile" class="btn btn-success w-100 btn-sm fw-bold">
                          <i class="fa-solid fa-floppy-disk me-1"></i> Guardar Perfil
                      </button>
                  </div>
              </div>
          </div>
      </div>
    `,this._bindEvents(),this._loadData())},async _loadData(){const t=j.getCurrentUser();if(t)try{const e=await Z.getProfile(t.uid);if(e&&(document.getElementById("profile-name-input").value=e.name||"",e.logoBase64)){this.currentLogoBase64=e.logoBase64;const a=document.getElementById("profile-logo-preview");a.src=e.logoBase64,a.classList.remove("d-none"),document.getElementById("profile-logo-placeholder").classList.add("d-none")}}catch(e){console.error("Error al cargar los datos del perfil:",e)}},_bindEvents(){const t=document.getElementById("profile-logo-input"),e=document.getElementById("profile-name-input"),a=document.getElementById("btn-save-profile"),s=document.getElementById("profile-logo-preview"),i=document.getElementById("profile-logo-placeholder");t.addEventListener("change",o=>{const n=o.target.files[0];if(!n)return;const l=200*1024;if(n.size>l){m.toast("La imagen es demasiado pesada. El límite es 200KB.","warning"),o.target.value="";return}const d=new FileReader;d.onload=p=>{this.currentLogoBase64=p.target.result,s.src=this.currentLogoBase64,s.classList.remove("d-none"),i.classList.add("d-none")},d.readAsDataURL(n)}),a.onclick=async()=>{const o=e.value.trim(),n=j.getCurrentUser();if(!n)return m.toast("Error: No se detectó una sesión activa.","danger");if(o.length>40)return m.toast("El nombre no puede exceder los 40 caracteres.","warning");const l=a.innerHTML;a.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i> Guardando en la nube...',a.disabled=!0;try{await Z.saveProfile(n.uid,{name:o,logoBase64:this.currentLogoBase64}),m.toast("¡Perfil guardado correctamente!","success")}catch(d){console.error(d),m.toast("Ocurrió un error al intentar guardar el perfil.","danger")}finally{a.innerHTML=l,a.disabled=!1}}}},qe={render(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="card shadow-sm border-0 mb-4">
          <div class="card-header text-bg-dark fw-bold py-3">
              <i class="fa-solid fa-sliders me-2 text-bg-dark"></i>Preferencias Generales
          </div>
          <div class="card-body">
              <div class="mb-3">
                  <label class="small text-muted fw-bold">Tema Visual (Bootswatch API)</label>
                  <div class="input-group">
                      <span class="input-group-text"><i class="fa-solid fa-palette"></i></span>
                      <select id="cfg-theme-api" class="form-select form-select-sm">
                          <option value="" disabled selected>Cargando temas...</option>
                      </select>
                  </div>
                  <div class="form-text small mb-3">Selecciona un estilo para cambiar la apariencia inmediatamente.</div>
              </div>
              <label class="small text-muted fw-bold">Máximo Caracteres Whatsapp (MCW)</label>
              <div class="input-group mb-2">
                  <span class="input-group-text border-end-0"><i class="fa-brands fa-whatsapp text-success"></i></span>
                  <input autocomplete="off" spellcheck="false" type="number" id="cfg-mcw" class="form-control border-start-0" placeholder="35">
              </div>
              <div class="form-text small mb-3">Si una tabla supera este ancho, se enviará como lista para facilitar la lectura en móviles.</div>
              <button id="btn-save-prefs" class="btn btn-dark w-100 btn-sm">Guardar Preferencias (MCW)</button>
          </div>
      </div>
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader())},_loadCurrentPrefs(){const t=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=t||"35"},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const t=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",t),m.toast("Preferencias guardadas.","success")}},_initThemeLoader(){const t=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(a=>a.json()).then(a=>{const s=a.themes;t.innerHTML="";const i=document.createElement("option");i.value="default",i.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(i.selected=!0),t.append(i),s.forEach((o,n)=>{const l=document.createElement("option");l.value=n,l.textContent=o.name+(o.description?` (${o.description})`:"");const d=o.cssCdn||o.css;e===d&&(l.selected=!0),t.append(l)}),t.addEventListener("change",o=>{let n="";if(o.target.value==="default")n="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=s[o.target.value];n=l.cssCdn||l.css}this._applyThemeWithPreload(n,t)})}).catch(a=>{console.error("Error cargando temas:",a),t.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(t,e){e.disabled=!0;const a=document.createElement("div");a.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,a.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="1"});const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=()=>{document.getElementById("theme-link").setAttribute("href",t),localStorage.setItem("doc_engine_theme_url",t),setTimeout(()=>{e.disabled=!1,a.style.opacity="0",setTimeout(()=>{a.remove(),s.remove()},300)},200)},s.onerror=()=>{m.toast("Error al descargar el tema seleccionado.","danger"),e.disabled=!1,a.remove(),s.remove()},document.head.appendChild(s)}},Ge={render(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="card shadow-sm border-0 mb-4">
          <div class="card-header bg-warning fw-bold py-3">
              <i class="fa-solid fa-user-shield me-2 text-bg-warning"></i>Seguridad de Acceso
          </div>
          <div class="card-body">
              <div class="mb-3">
                  <label class="small text-muted">Contraseña Actual</label>
                  <input autocomplete="off" spellcheck="false" type="password" id="current-pass" class="form-control form-control-sm">
              </div>
              <div class="mb-3">
                  <label class="small text-muted">Nueva Contraseña</label>
                  <input autocomplete="off" spellcheck="false" type="password" id="new-pass" class="form-control form-control-sm">
              </div>
              <button id="btn-change-pass" class="btn btn-warning w-100 btn-sm fw-bold">Actualizar Clave de Acceso</button>
          </div>
      </div>
    `,this._bindEvents())},_bindEvents(){const t=document.getElementById("btn-change-pass");t.onclick=async()=>{const e=document.getElementById("current-pass").value,a=document.getElementById("new-pass").value;if(!e||!a)return m.toast("Complete ambos campos.","warning");if(!T.validatePassword(a))return m.toast("La contraseña no cumple requisitos (8+ chars, Mayús, Num).","warning");const s=t.innerHTML;t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const i=R.currentUser;if(!i)throw new Error("Sin sesión.");const o=Pe.credential(i.email,e);await Oe(i,o),await Ce(i,a),m.toast("Contraseña actualizada correctamente.","success"),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(i){console.error(i),m.toast(i.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+i.message,"danger")}finally{t.disabled=!1,t.innerHTML=s}}}},ze={render(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="card mb-4 mt-4 shadow-sm border-0">
        <div class="card-header bg-dark text-white fw-bold py-3">
          <i class="fa-brands fa-github me-2"></i> Integración GitHub (Cuenta)
        </div>
        <div class="card-body">
          <p class="small text-muted">Configura tu cuenta para acceder a todos tus repositorios.</p>
          <form id="github-config-form">
            <div class="mb-3">
              <label class="form-label small fw-bold">Usuario GitHub</label>
              <input autocomplete="off" spellcheck="false" type="text" id="set-gh-user" class="form-control form-control-sm" placeholder="Ej: miusuario" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold">Personal Access Token (Classic)</label>
              <input autocomplete="off" spellcheck="false" type="password" id="set-gh-token" class="form-control form-control-sm" placeholder="ghp_xxxxxxxxxxxx" required>
              <div class="form-text small">El token debe tener permisos de <code>repo</code> completo.</div>
            </div>
            <div id="gh-config-msg" class="mb-2 small"></div>
            
            <div class="d-flex gap-2">
                <button type="submit" class="btn btn-primary btn-sm w-100 fw-bold">
                  <i class="fa-solid fa-check me-1"></i> Verificar y Guardar
                </button>
                <button type="button" id="btn-gh-disconnect" class="btn btn-outline-danger btn-sm d-none">
                  Desconectar
                </button>
            </div>
          </form>
        </div>
      </div>
    `,this._loadData(),this._bindEvents())},async _loadData(){const t=j.getCurrentUser();if(!t)return;const e=await S.getUserConfig(t.uid);e&&(document.getElementById("set-gh-user").value=e.githubUser||"",document.getElementById("set-gh-token").value=e.githubToken||"",this.lastUsedRepoTemp=e.lastUsedRepo||null,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))},_bindEvents(){const t=j.getCurrentUser();t&&(document.getElementById("github-config-form").addEventListener("submit",async e=>{e.preventDefault();const a=document.getElementById("gh-config-msg"),s=e.target.querySelector('button[type="submit"]'),i=document.getElementById("set-gh-user").value.trim(),o=document.getElementById("set-gh-token").value.trim();try{s.disabled=!0,a.innerHTML='<span class="text-info"><i class="fa-solid fa-spinner fa-spin me-1"></i>Verificando cuenta...</span>',await A.validateCredentials(i,o),await S.saveUserConfig(t.uid,{githubUser:i,githubToken:o,lastUsedRepo:this.lastUsedRepoTemp||null}),a.innerHTML='<span class="text-success fw-bold"><i class="fa-solid fa-circle-check me-1"></i>¡Conexión Exitosa! Recarga la página.</span>',setTimeout(()=>window.location.reload(),1e3)}catch(n){a.innerHTML=`<span class="text-danger fw-bold"><i class="fa-solid fa-triangle-exclamation me-1"></i>Error: ${n.message}</span>`}finally{s.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{await m.confirm("Desvincular Cuenta","¿Estás seguro de que deseas desvincular tu cuenta de GitHub?")&&(await S.saveUserConfig(t.uid,null),m.toast("Cuenta desvinculada exitosamente. Recargando...","info"),setTimeout(()=>window.location.reload(),1500))}))}},B={async listDocumentsForBackup(){const[t,e]=await Promise.all([b.getAllRaw("doc"),b.getAllRaw("tpl")]),a=new Map(e.map(s=>[s.id,s]));return t.map(s=>({...s,_template:a.get(s.templateId)||null}))},async verifyPhraseForBackup(t){const e=t.filter(a=>a.isEncrypted);if(e.length===0)return{ok:!0};if(!_.masterKey){const a=await m.promptPassword("Frase Maestra requerida","Vas a respaldar documentos cifrados. Ingresa tu Frase Maestra para confirmar que este respaldo se podrá recuperar más adelante.");if(!a)return{ok:!1,cancelled:!0};await _.setMasterKey(a)}try{return await _.decryptData(e[0].content),{ok:!0}}catch{return{ok:!1,error:"La Frase Maestra activa no coincide con estos documentos cifrados."}}},async exportSelected(t){const e=t.map(n=>{const{_template:l,...d}=n;return{document:d,template:l||null}}),a={version:"3.0-doc-centric",exportDate:new Date().toISOString(),documents:e},s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=`respaldo_docengine_${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(i)},async analyzeBackupFile(t){const e=await t.text();let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es un JSON válido.")}let s=[],i="3";if(Array.isArray(a.documents)&&a.documents.length>0&&a.documents[0]&&typeof a.documents[0]=="object"&&"document"in a.documents[0])s=a.documents.map(d=>({document:d.document,template:d.template||null}));else if(Array.isArray(a.documents)||Array.isArray(a.templates)){i="2";const d=new Map((a.templates||[]).map(p=>[p.id,p]));s=(a.documents||[]).map(p=>({document:p,template:d.get(p.templateId)||null}))}else throw new Error("Formato de archivo de respaldo no reconocido.");if(s.length===0)throw new Error("El respaldo no contiene documentos para restaurar.");const o=await b.getAllRaw("doc"),n=new Set(o.map(d=>d.id)),l=o.map(d=>d.title);return s.map(d=>({...d,_format:i,_exists:n.has(d.document.id),_existingTitles:l}))},async verifyPhraseForRestore(t){const e=t.filter(i=>i.document.isEncrypted);if(e.length===0)return{ok:!0};e.filter(i=>i._format==="2");const a=e.filter(i=>i._format!=="2"),s=await m.promptPassword("Frase Maestra requerida","Este respaldo contiene documentos cifrados. Ingresa la Frase Maestra que usabas cuando se generó el respaldo.");return s?a.length>0&&!await _.verifyPhrase(s,a[0].document.content)?{ok:!1,error:"Esa Frase Maestra no coincide con el contenido cifrado de este respaldo (¿la cambiaste después de generarlo?)."}:(await _.setMasterKey(s),{ok:!0}):{ok:!1,cancelled:!0}},suggestNewTitle(t,e){let a=`${t} (restaurado)`,s=2;for(;e.includes(a);)a=`${t} (restaurado ${s})`,s++;return a},async restoreEntry(t,e={}){const a=t._format!=="2";if(t.template){const i={...t.template};i.updatedAt||(i.updatedAt=new Date().toISOString()),a?await b.saveRaw("tpl",i):await b.save("tpl",i)}const s={...t.document};e.asNew&&(s.title=e.newTitle,s.id=J.generateSemanticBaseId("doc",e.newTitle,15)),a?await b.saveRaw("doc",s):await b.save("doc",s)}},pe={async openBackupSelector(){var u;let t;try{t=await B.listDocumentsForBackup()}catch(h){m.toast("No se pudieron leer tus documentos: "+h.message,"danger");return}if(t.length===0){m.toast("No tienes documentos para respaldar todavía.","info");return}const e="backup-select-modal";(u=document.getElementById(e))==null||u.remove();const a=t.map((h,c)=>{var f,L;const g=((f=h._template)==null?void 0:f.icon)||"📄",v=((L=h._template)==null?void 0:L.title)||h.templateTitle||"Plantilla desconocida",E=h.isEncrypted?'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i> Cifrado</span>':"";return`
          <div class="form-check border-bottom py-2 d-flex align-items-center">
            <input class="form-check-input me-3 bkp-doc-check" type="checkbox" value="${c}" id="bkp-doc-${c}" checked>
            <label class="form-check-label flex-grow-1" for="bkp-doc-${c}">
              <span class="me-1">${g}</span>
              <span class="fw-semibold">${h.title}</span>
              <span class="text-muted small ms-2">(${v})</span>
              ${E}
            </label>
          </div>`}).join(""),s=`
      <div class="modal fade" id="${e}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content shadow-lg">
            <div class="modal-header text-bg-primary">
              <h5 class="modal-title fw-bold"><i class="fa-solid fa-download me-2"></i>Respaldar Documentos</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted small">Cada documento incluye su plantilla, para poder restaurarlo por sí solo.</span>
                <button type="button" class="btn btn-sm btn-outline-secondary" id="bkp-toggle-all">Deseleccionar todos</button>
              </div>
              <div style="max-height: 50vh; overflow-y: auto;" id="bkp-doc-list">
                ${a}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light border" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary px-4 fw-bold" id="bkp-confirm-btn">
                <i class="fa-solid fa-download me-2"></i>Respaldar seleccionados (${t.length})
              </button>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById(e),o=new bootstrap.Modal(i),n=()=>Array.from(i.querySelectorAll(".bkp-doc-check")),l=document.getElementById("bkp-confirm-btn"),d=document.getElementById("bkp-toggle-all"),p=()=>{const h=n().filter(c=>c.checked).length;l.innerHTML=`<i class="fa-solid fa-download me-2"></i>Respaldar seleccionados (${h})`,l.disabled=h===0};n().forEach(h=>h.onchange=p),d.onclick=()=>{const h=n().every(c=>c.checked);n().forEach(c=>c.checked=!h),d.textContent=h?"Seleccionar todos":"Deseleccionar todos",p()},l.onclick=async()=>{const h=n().filter(g=>g.checked).map(g=>t[Number(g.value)]);if(h.length===0)return;l.disabled=!0,l.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Verificando...';const c=await B.verifyPhraseForBackup(h);if(!c.ok){c.cancelled||m.toast(c.error,"danger"),l.disabled=!1,p();return}l.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Generando archivo...';try{await B.exportSelected(h),m.toast("Respaldo generado correctamente.","success"),o.hide()}catch(g){m.toast("Error al generar el respaldo: "+g.message,"danger"),l.disabled=!1,p()}},i.addEventListener("hidden.bs.modal",()=>i.remove()),o.show()},async openRestoreSelector(t){var h;let e;try{e=await B.analyzeBackupFile(t)}catch(c){m.toast(c.message,"danger");return}const a="restore-select-modal";(h=document.getElementById(a))==null||h.remove();const s=e.map((c,g)=>{var y,I;const v=((y=c.template)==null?void 0:y.icon)||"📄",E=((I=c.template)==null?void 0:I.title)||c.document.templateTitle||"Plantilla desconocida",f=c.document.isEncrypted?'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i> Cifrado</span>':"",L=c._exists?'<span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 ms-2"><i class="fa-solid fa-triangle-exclamation"></i> Ya existe</span>':"";return`
          <div class="form-check border-bottom py-2 d-flex align-items-center">
            <input class="form-check-input me-3 rst-doc-check" type="checkbox" value="${g}" id="rst-doc-${g}" checked>
            <label class="form-check-label flex-grow-1" for="rst-doc-${g}">
              <span class="me-1">${v}</span>
              <span class="fw-semibold">${c.document.title}</span>
              <span class="text-muted small ms-2">(${E})</span>
              ${f}${L}
            </label>
          </div>`}).join(""),i=`
      <div class="modal fade" id="${a}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content shadow-lg">
            <div class="modal-header text-bg-primary">
              <h5 class="modal-title fw-bold"><i class="fa-solid fa-cloud-arrow-up me-2"></i>Restaurar Respaldo</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted small">Si un documento ya existe, te preguntaremos qué hacer con él.</span>
                <button type="button" class="btn btn-sm btn-outline-secondary" id="rst-toggle-all">Deseleccionar todos</button>
              </div>
              <div style="max-height: 50vh; overflow-y: auto;" id="rst-doc-list">
                ${s}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light border" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary px-4 fw-bold" id="rst-confirm-btn">
                <i class="fa-solid fa-check me-2"></i>Restaurar seleccionados (${e.length})
              </button>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",i);const o=document.getElementById(a),n=new bootstrap.Modal(o),l=()=>Array.from(o.querySelectorAll(".rst-doc-check")),d=document.getElementById("rst-confirm-btn"),p=document.getElementById("rst-toggle-all"),u=()=>{const c=l().filter(g=>g.checked).length;d.innerHTML=`<i class="fa-solid fa-check me-2"></i>Restaurar seleccionados (${c})`,d.disabled=c===0};l().forEach(c=>c.onchange=u),p.onclick=()=>{const c=l().every(g=>g.checked);l().forEach(g=>g.checked=!c),p.textContent=c?"Seleccionar todos":"Deseleccionar todos",u()},d.onclick=async()=>{const c=l().filter(v=>v.checked).map(v=>e[Number(v.value)]);if(c.length===0)return;const g=await B.verifyPhraseForRestore(c);if(!g.ok){g.cancelled||m.toast(g.error,"danger");return}n.hide(),await this._runRestoreLoop(c)},o.addEventListener("hidden.bs.modal",()=>o.remove()),n.show()},async _runRestoreLoop(t){const e={replaced:0,added:0,renamed:0,skipped:0,failed:[]};for(const a of t)try{if(a._exists){const s=B.suggestNewTitle(a.document.title,a._existingTitles),i=await m.chooseAction("El documento ya existe",`"<b>${a.document.title}</b>" ya existe en tu cuenta. ¿Qué quieres hacer?`,[{key:"replace",label:"Reemplazar el existente",class:"btn-danger"},{key:"new",label:`Guardar como nuevo: "${s}"`,class:"btn-primary"},{key:"skip",label:"Omitir este documento",class:"btn-light border"}]);i==="replace"?(await B.restoreEntry(a),e.replaced++):i==="new"?(await B.restoreEntry(a,{asNew:!0,newTitle:s}),e.renamed++):e.skipped++}else await B.restoreEntry(a),e.added++}catch(s){e.failed.push({title:a.document.title,error:s.message})}this._showRestoreSummary(e)},_showRestoreSummary(t){var n;const e="restore-summary-modal";(n=document.getElementById(e))==null||n.remove();const a=[];t.added&&a.push(`✅ ${t.added} documento(s) nuevos agregados`),t.replaced&&a.push(`♻️ ${t.replaced} documento(s) reemplazados`),t.renamed&&a.push(`🆕 ${t.renamed} documento(s) guardados con nombre nuevo`),t.skipped&&a.push(`⏭️ ${t.skipped} documento(s) omitidos`),t.failed.length&&(a.push(`⛔ ${t.failed.length} documento(s) fallaron:`),t.failed.forEach(l=>a.push(`&nbsp;&nbsp;• ${l.title}: ${l.error}`)));const s=`
      <div class="modal fade" id="${e}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content shadow-lg">
            <div class="modal-header text-bg-${t.failed.length?"warning":"success"}">
              <h5 class="modal-title fw-bold"><i class="fa-solid fa-clipboard-check me-2"></i>Restauración finalizada</h5>
            </div>
            <div class="modal-body">
              <div class="small">${a.join("<br>")}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary px-4 fw-bold" id="rst-summary-close">Finalizar y recargar</button>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById(e),o=new bootstrap.Modal(i,{backdrop:"static",keyboard:!1});document.getElementById("rst-summary-close").onclick=()=>{location.reload()},o.show()}},Je={render(t){const e=document.getElementById(t);e&&(e.innerHTML=`
      <div class="card shadow-sm border-0 mt-4">
          <div class="card-header text-bg-primary fw-bold py-3">
              <i class="fa-solid fa-database me-2"></i>Datos y Respaldos
          </div>
          <div class="card-body">
              <button id="btn-export" class="btn btn-outline-primary w-100 mb-3">
                  <i class="fa-solid fa-download me-2"></i>Respaldar Documentos...
              </button>

              <div class="border-top pt-3">
                  <label class="small text-muted fw-bold mb-2">Restaurar Datos</label>
                  <input autocomplete="off" spellcheck="false" type="file" id="import-file" class="form-control form-control-sm" accept=".json">
                  <div class="form-text small mt-1 text-muted">
                      <i class="fa-solid fa-circle-info me-1"></i>Podrás elegir qué documentos restaurar y decidir uno por uno si reemplazan a los existentes.
                  </div>
              </div>
          </div>
      </div>
    `,this._bindEvents())},_bindEvents(){const t=document.getElementById("btn-export");t&&(t.onclick=()=>pe.openBackupSelector());const e=document.getElementById("import-file");e&&(e.onchange=a=>{a.target.files.length>0&&(pe.openRestoreSelector(a.target.files[0]),a.target.value="")})}},U={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="modal-setup-security" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-dark">
              <h5 class="modal-title"><i class="fa-solid fa-key me-2"></i>Seguridad de Alta Privacidad</h5>
            </div>
            <div class="modal-body p-4">
              <p class="text-dark fw-bold">Configure su Frase Maestra:</p>
              <p class="text-muted small">
                Esta frase es su llave de cifrado. <strong>No se almacena en ninguna base de datos</strong>. 
                Si la pierde, los documentos cifrados serán irrecuperables.
              </p>
              
              <div class="mb-3">
                <label class="small fw-bold">Escriba su Frase (Mínimo 15 caracteres):</label>
                <textarea id="setup-master-phrase" 
                          class="form-control font-monospace border-primary shadow-none" 
                          rows="2"
                          autocomplete="off" 
                          autocorrect="off" 
                          autocapitalize="none" 
                          spellcheck="false"
                          placeholder="Ej: El sol brilla intensamente sobre la montaña azul..."></textarea>
                <div class="form-text text-primary" style="font-size: 0.7rem;">
                    <i class="fa-solid fa-info-circle"></i> Los gestores de contraseñas no detectarán este campo.
                </div>
              </div>

              <div id="setup-error" class="text-danger small mb-0" style="display:none;"></div>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button id="btn-save-security" class="btn btn-dark w-100 py-2 fw-bold">
                ACTIVAR CIFRADO LOCAL
              </button>
            </div>
          </div>
        </div>
      </div>
    `);const e=document.getElementById("modal-setup-security"),a=new bootstrap.Modal(e);a.show(),document.getElementById("btn-save-security").onclick=async()=>{const s=document.getElementById("setup-master-phrase").value.trim(),i=document.getElementById("setup-error");if(s.length<15){i.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",i.style.display="block";return}try{await _.setMasterKey(s);const o=await _.encryptData({check:"VERIFIED"});await b.saveSecurityVerifier(o),a.hide(),e.remove(),m.toast("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.","success")}catch(o){console.error("Error al inicializar seguridad:",o),i.textContent="Error al inicializar el motor de seguridad.",i.style.display="block"}}},renderChangePhraseUI(t){const e=`
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header text-bg-primary small fw-bold">
          <i class="fa-solid fa-key me-1"></i> Cambiar Frase Maestra
        </div>
        <div class="card-body">
          <p class="text-muted" style="font-size: 0.75rem;">
            Si conoces tu frase actual, úsala aquí para actualizarla sin perder datos.
          </p>
          
          <div class="mb-2">
            <label class="small fw-bold">Frase Maestra Anterior:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="old-phrase" class="form-control form-control-sm shadow-none">
            <button class="btn btn-sm btn-outline-secondary border-0 position-absolute end-0 top-0 mt-4 me-3 toggle-pass" data-target="old-phrase" style="z-index:5;"><i class="fa-solid fa-eye"></i></button>
          </div>
          
          <div class="mb-3 position-relative">
            <label class="small fw-bold">Nueva Frase Maestra:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="new-phrase" class="form-control form-control-sm shadow-none" placeholder="Mínimo 15 caracteres">
          </div>

          <div id="reencrypt-progress" class="progress mb-3" style="display:none; height: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%"></div>
          </div>

          <button id="btn-reencrypt" class="btn btn-primary btn-sm w-100 fw-bold">
            Actualizar Frase y Re-Cifrar Datos
          </button>
        </div>
      </div>

      <div class="card border-danger shadow-sm">
        <div class="card-header bg-danger text-white small fw-bold d-flex justify-content-between align-items-center">
            <span><i class="fa-solid fa-radiation me-1"></i> Zona de Peligro</span>
            <span class="badge bg-white text-danger">Irreversible</span>
        </div>
        <div class="card-body">
            <h6 class="text-danger fw-bold small">¿Olvidaste tu Frase Maestra?</h6>
            <p class="small text-muted mb-3">
                Debido a la arquitectura de "Cero Conocimiento", <strong>no podemos recuperar tu frase</strong>. 
                La única opción es reiniciar tu configuración de seguridad.
            </p>
            
            <div class="alert alert-warning d-flex align-items-start small p-2" role="alert">
                <i class="fa-solid fa-triangle-exclamation me-2 mt-1"></i>
                <div>
                    <strong>Advertencia:</strong> Al realizar esta acción, perderás acceso permanentemente a todos los documentos que estén cifrados actualmente. Se volverán ilegibles.
                </div>
            </div>

            <button id="btn-hard-reset-toggle" class="btn btn-outline-danger btn-sm w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResetParams">
                Entiendo los riesgos, quiero reiniciar
            </button>

            <div class="collapse mt-3" id="collapseResetParams">
                <div class="card card-body bg-danger-subtle border-0">
                    <label class="small fw-bold text-danger mb-1">Escribe "ELIMINAR" para confirmar:</label>
                    <input type="text" id="reset-confirm-input" class="form-control form-control-sm mb-2" placeholder="ELIMINAR" autocomplete="off">
                    <button id="btn-execute-reset" class="btn btn-danger btn-sm w-100 fw-bold" disabled>
                        <i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR
                    </button>
                </div>
            </div>
        </div>
      </div>
    `;t.innerHTML=e,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const t=document.getElementById("btn-reencrypt");t&&(t.onclick=async()=>{const e=document.getElementById("old-phrase").value.trim(),a=document.getElementById("new-phrase").value.trim();if(!e||a.length<15)return m.toast("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.","warning");if(await m.confirm("Confirmar Cambio","¿Estás seguro de que deseas cambiar tu Frase Maestra? Este proceso actualizará tus datos de seguridad."))try{t.disabled=!0,t.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await b.changeMasterPhrase(e,a),m.toast("¡Éxito! Frase actualizada. Recargando...","success"),setTimeout(()=>location.reload(),2e3)}catch(i){console.error(i),m.toast("Error: "+i.message,"danger"),t.disabled=!1,t.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const t=document.getElementById("reset-confirm-input"),e=document.getElementById("btn-execute-reset");!t||!e||(t.addEventListener("input",a=>{a.target.value==="ELIMINAR"?e.disabled=!1:e.disabled=!0}),e.onclick=async()=>{if(await m.confirm("ÚLTIMA ADVERTENCIA","Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await b.hardResetSecurity(),m.toast("Sistema de seguridad reiniciado. La página se recargará...","success"),setTimeout(()=>window.location.reload(),3e3)}catch(s){console.error(s),m.toast("Error al reiniciar seguridad: "+s.message,"danger"),e.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},we={init(){this.container=document.getElementById("view-settings"),this.render()},render(){document.getElementById("theme-link").getAttribute("href"),this.container.innerHTML=`
      <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold text-body-secondary"><i class="fa-solid fa-gears me-2"></i>Configuración</h3>
 <!-- ... Botón de Manual ... -->
        </div>

        <div class="row g-4">
            <div class="col-md-6">
                <div id="profile-settings-wrapper"></div>
                <div id="theme-settings-wrapper"></div>
                <div id="account-settings-wrapper"></div>
            </div>

            <div class="col-md-6">
                <div id="security-config-wrapper" class="mb-4"></div>
                <div id="github-settings-wrapper"></div>
                <div id="backup-settings-wrapper"></div>
            </div>
        </div>
      </div>
    `,Ue.render("profile-settings-wrapper"),qe.render("theme-settings-wrapper"),Ge.render("account-settings-wrapper"),Je.render("backup-settings-wrapper"),ze.render("github-settings-wrapper"),U&&U.renderChangePhraseUI&&U.renderChangePhraseUI(document.getElementById("security-config-wrapper"))}},V={setupListeners(){var t,e,a;(t=document.getElementById("ghPdfModal"))==null||t.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-pdf");s.src&&(URL.revokeObjectURL(s.src.split("#")[0]),s.src="")}),(e=document.getElementById("ghVideoModal"))==null||e.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-video");s.pause(),s.src&&(URL.revokeObjectURL(s.src),s.src="")}),(a=document.getElementById("gh-close-audio"))==null||a.addEventListener("click",()=>{const s=document.getElementById("gh-audio-player");s.pause(),s.src="",document.getElementById("gh-audio-container").classList.add("d-none")})},async viewImage(t,e){const{path:a,title:s,repo:i}=e,o=document.getElementById("ghImageModal"),n=document.getElementById("gh-preview-img"),l=document.getElementById("gh-loading-img");document.getElementById("ghImageModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(o);d.show();try{const p=await A.fetchSecureFile(t,a,i);n.src=URL.createObjectURL(p),n.onload=()=>{l.classList.add("d-none"),n.classList.remove("d-none")}}catch(p){m.toast("Error cargando imagen: "+p.message,"danger"),d.hide()}},async viewVideo(t,e){const{path:a,title:s,repo:i}=e,o=document.getElementById("ghVideoModal"),n=document.getElementById("gh-preview-video"),l=document.getElementById("gh-loading-video");document.getElementById("ghVideoModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(o);d.show();try{const p=await A.fetchSecureFile(t,a,i);n.src=URL.createObjectURL(p),l.classList.add("d-none"),n.classList.remove("d-none"),n.play().catch(u=>console.log("Autoplay bloqueado",u))}catch(p){m.toast("Error cargando video: "+p.message,"danger"),d.hide()}},async viewPdf(t,e){const{path:a,title:s,repo:i}=e,o=document.getElementById("ghPdfModal"),n=document.getElementById("gh-preview-pdf"),l=document.getElementById("gh-loading-pdf");document.getElementById("ghPdfModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(o);d.show();try{const p=await A.fetchSecureFile(t,a,i),u=new Blob([p],{type:"application/pdf"});n.src=URL.createObjectURL(u)+"#toolbar=0&navpanes=0",n.onload=()=>{l.classList.add("d-none"),n.classList.remove("d-none")}}catch(p){m.toast("Error cargando PDF: "+p.message,"danger"),d.hide()}},async playAudio(t,e){const{path:a,title:s,repo:i}=e,o=document.getElementById("gh-audio-container"),n=document.getElementById("gh-audio-player"),l=document.getElementById("gh-loading-audio");o.classList.remove("d-none"),document.getElementById("gh-audio-title").textContent="Cargando "+s+"...",l.classList.remove("d-none"),n.classList.add("d-none"),n.pause();try{const d=await A.fetchSecureFile(t,a,i);n.src=URL.createObjectURL(d),n.classList.remove("d-none"),l.classList.add("d-none"),document.getElementById("gh-audio-title").textContent=s,n.play().catch(p=>console.log("Autoplay bloqueado",p))}catch(d){m.toast("Error cargando audio: "+d.message,"danger"),o.classList.add("d-none")}},async downloadFile(t,e,a){const{path:s,name:i,repo:o}=e,n=a.innerHTML;a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await A.fetchSecureFile(t,s,o),d=URL.createObjectURL(l),p=document.createElement("a");p.href=d,p.download=i,document.body.appendChild(p),p.click(),document.body.removeChild(p),setTimeout(()=>URL.revokeObjectURL(d),1e3)}catch(l){m.toast("Error en la descarga: "+l.message,"danger")}finally{a.disabled=!1,a.innerHTML=n}},async openPdfMobile(t,e,a){const{path:s,repo:i}=e,o=a.innerHTML,n=window.open("","_blank");n&&n.document.write("<h3 style='text-align: center; margin-top: 20%;'>Cargando...</h3>"),a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await A.fetchSecureFile(t,s,i),d=new Blob([l],{type:"application/pdf"}),p=URL.createObjectURL(d);n?n.location.href=p:window.location.href=p,setTimeout(()=>URL.revokeObjectURL(p),6e4)}catch(l){n&&n.close(),m.toast("Error abriendo el documento: "+l.message,"danger")}finally{a.disabled=!1,a.innerHTML=o}},copyLink(t){navigator.clipboard.writeText(t).then(()=>m.toast("Enlace público copiado al portapapeles.","success")).catch(()=>m.toast("No se pudo copiar el enlace.","danger"))}},C={getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-brands fa-github"></i> Gestor de Archivos GitHub</h2>
            <button class="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#ghUploadModal">
                <i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Nuevo Archivo
            </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="gh-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Archivos (Cargando...)</span>
            </div>
            
            <div class="row g-2 align-items-center justify-content-end flex-grow-1">
              <div class="col-auto">
                <select id="gh-filter-repo" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <select id="gh-filter-folder" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="gh-search-input" class="form-control" placeholder="Buscar..." autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="gh-table-head">
                  <tr>
                    <th class="sortable" data-column="repoName">Ubicación</th>
                    <th class="sortable" data-column="title">Título del Archivo</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="gh-files-list">
                  <tr><td colspan="3" class="text-center p-3 text-muted">Cargando archivos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales (Subir y Copiar) -->
      <div class="modal fade" id="ghUploadModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title"><i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Archivo</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-upload-form" class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio</label>
                  <select id="gh-repo" class="form-select" required><option value="" disabled selected>Cargando repos...</option></select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta</label>
                  <input type="text" id="gh-folder" class="form-control" placeholder="Ej: media (opcional)" autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos</label>
                  <input type="file" id="gh-file" class="form-control" multiple required>
                </div>
                <div class="col-12 d-none" id="gh-batch-preview-container">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos a subir (Modifica el título si lo deseas)</label>
                  <div id="gh-batch-preview-list" class="list-group mb-2 border rounded" style="max-height: 45vh; overflow-y: auto;"></div>
                  <div style="min-height: 36px;">
                    <div class="progress mt-3 shadow-sm d-none" style="height: 20px;" id="gh-upload-progress-container">
                      <div id="gh-upload-progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 0%;">0%</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-success" id="gh-btn-upload">Subir Todos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghCopyModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-warning text-dark">
              <h5 class="modal-title"><i class="fa-solid fa-copy me-2"></i> Copiar Archivo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-copy-form" class="row g-3">
                <input type="hidden" id="gh-copy-orig-path"><input type="hidden" id="gh-copy-orig-repo"><input type="hidden" id="gh-copy-orig-filename">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio Destino</label>
                  <select id="gh-copy-repo" class="form-select" required></select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta Destino</label>
                  <input type="text" id="gh-copy-folder" class="form-control" placeholder="Ej: media" autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Título</label>
                  <input type="text" id="gh-copy-new-title" class="form-control" required autocomplete="off">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Tiempo de Expiración</label>
                  <select id="gh-copy-timer" class="form-select">
                    <option value="0" selected>Siempre (Sin expiración)</option>
                    <option value="15">15 Minutos</option>
                    <option value="60">1 Hora</option>
                    <option value="480">8 Horas</option>
                  </select>
                </div>
                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-warning" id="gh-btn-copy">Confirmar Copia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales Multimedia (Inyectados directamente en el base HTML) -->
      <div class="modal fade" id="ghImageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="ghImageModalLabel">Vista Previa</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
              <div id="gh-loading-img" class="spinner-border text-primary d-none"></div>
              <img id="gh-preview-img" src="" class="img-fluid rounded shadow-sm d-none" style="max-height: 70vh;">
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghPdfModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="ghPdfModalLabel">Vista Previa PDF</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center p-0" style="height: 80vh;">
              <div id="gh-loading-pdf" class="spinner-border text-danger d-none"></div>
              <iframe id="gh-preview-pdf" src="" class="w-100 h-100 border-0 d-none"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghVideoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white"><h5 class="modal-title" id="ghVideoModalLabel">Vista Previa</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center bg-black position-relative d-flex align-items-center justify-content-center p-0" style="min-height: 250px;">
              <div id="gh-loading-video" class="spinner-border text-light d-none"></div>
              <video id="gh-preview-video" controls class="w-100 d-none" style="max-height: 75vh;"></video>
            </div>
          </div>
        </div>
      </div>

      <div id="gh-audio-container" class="card shadow-lg border-0 position-fixed bottom-0 end-0 m-3 d-none" style="z-index: 1050; width: 320px;">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
          <small class="fw-bold text-truncate" id="gh-audio-title" style="max-width: 240px;">Cargando...</small>
          <button type="button" class="btn-close btn-close-white btn-sm" id="gh-close-audio"></button>
        </div>
        <div class="card-body bg-secondary p-2 text-center">
            <div id="gh-loading-audio" class="spinner-border spinner-border-sm text-light mb-2 d-none"></div>
            <audio id="gh-audio-player" controls class="w-100" style="height: 30px;"></audio>
        </div>
      </div>
    `},injectStyles(){const t=document.createElement("style");t.innerHTML=".cursor-pointer { cursor: pointer; user-select: none; }",document.head.appendChild(t)},setupFilterListeners(t){var e,a;(e=document.getElementById("gh-filter-repo"))==null||e.addEventListener("change",s=>t.tableEngine.setFilter("repoName",s.target.value)),(a=document.getElementById("gh-filter-folder"))==null||a.addEventListener("change",s=>t.tableEngine.setFilter("folder",s.target.value))},buildFilters(t){const e=document.getElementById("gh-filter-repo"),a=document.getElementById("gh-filter-folder");if(!e||!a)return;const s=[...new Set(t.currentFiles.map(l=>l.repoName))].filter(Boolean),i=[...new Set(t.currentFiles.map(l=>l.folder))].filter(Boolean),o=e.value,n=a.value;s.length>1?(e.innerHTML='<option value="">📁 Todos los Repos</option>'+s.map(l=>`<option value="${l}">${l}</option>`).join(""),e.value=s.includes(o)?o:"",e.classList.remove("d-none")):(e.classList.add("d-none"),e.value=""),i.length>1?(a.innerHTML='<option value="">📂 Todas las Carpetas</option>'+i.map(l=>`<option value="${l}">${l}</option>`).join(""),a.value=i.includes(n)?n:"",a.classList.remove("d-none")):(a.classList.add("d-none"),a.value="")},getDummyRowHTML(){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border px-2 py-1">Repo / Folder</span></td>
        <td class="fw-bold text-nowrap"><i class="fa-regular fa-image me-2"></i> Test File</td>
        <td class="text-end"><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `},renderRowHTML(t,e){const a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=t.fileName.split(".").pop().toLowerCase(),i=["jpg","jpeg","png","gif","webp","svg"].includes(s),o=["mp3","wav","ogg","m4a"].includes(s),n=s==="pdf",l=["mp4","webm","ogg","mov"].includes(s);let d=i?'<i class="fa-regular fa-image text-primary me-2"></i>':o?'<i class="fa-solid fa-music text-info me-2"></i>':n?'<i class="fa-solid fa-file-pdf text-danger me-2"></i>':l?'<i class="fa-solid fa-video text-success me-2"></i>':`<span class="text-muted small fw-normal me-2">(${s})</span>`;const p=t.isPrivate?"fa-lock text-danger":"fa-globe text-success",u=t.expiresAt?'<span class="badge bg-warning text-dark ms-2"><i class="fa-regular fa-clock"></i> Temporal</span>':"",h=`data-id="${t.id}" data-sha="${t.sha}" data-path="${t.path}" data-title="${t.title}" data-repo="${t.repoName}" data-folder="${t.folder}" data-filename="${t.fileName}"`;let c="";if(i?c+=`<button class="btn btn-sm btn-outline-primary btn-view-img me-1" ${h}><i class="fa-regular fa-eye"></i></button>`:o?c+=`<button class="btn btn-sm btn-outline-info btn-play-audio me-1" ${h}><i class="fa-solid fa-play"></i></button>`:n?c+=`<button class="btn btn-sm btn-outline-danger ${a?"btn-open-pdf-mobile":"btn-view-pdf"} me-1" ${h}><i class="fa-solid ${a?"fa-arrow-up-right-from-square":"fa-file-pdf"}"></i></button>`:l&&(c+=`<button class="btn btn-sm btn-outline-success btn-play-video me-1" ${h}><i class="fa-solid fa-video"></i></button>`),c+=`<button class="btn btn-sm btn-outline-warning btn-copy-trigger me-1" ${h} title="Copiar Archivo"><i class="fa-solid fa-copy"></i></button>`,c+=`<button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" ${h} data-name="${t.originalName||t.fileName}"><i class="fa-solid fa-download"></i></button>`,!t.isPrivate){const g=e.repoPages[t.repoName],v=g?(g.endsWith("/")?g:g+"/")+(t.path.startsWith("/")?t.path.substring(1):t.path):t.htmlUrl;c+=`<button class="btn btn-sm ${g?"btn-outline-success":"btn-outline-secondary"} btn-copy-link me-1" data-url="${v}"><i class="fa-solid ${g?"fa-link":"fa-github"}"></i></button>`}return c+=`<button class="btn btn-sm btn-danger btn-delete-gh" ${h}><i class="fa-solid fa-trash"></i></button>`,`
      <tr>
        <td>
           <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
             <i class="fa-solid ${p} me-1"></i> ${t.repoName} <i class="fa-solid fa-chevron-right mx-1" style="font-size:0.7em;"></i> ${t.folder}
           </span>
        </td>
        <td class="fw-bold text-nowrap">
          ${d}${t.title} ${u}
        </td>
        <td class="text-end text-nowrap">
          ${c}
        </td>
      </tr>
    `},attachTableListeners(t,e,a){t.querySelectorAll(".btn-copy-trigger").forEach(s=>{s.addEventListener("click",()=>{document.getElementById("gh-copy-orig-path").value=s.dataset.path,document.getElementById("gh-copy-orig-repo").value=s.dataset.repo,document.getElementById("gh-copy-orig-filename").value=s.dataset.filename,document.getElementById("gh-copy-folder").value=s.dataset.folder,document.getElementById("gh-copy-new-title").value=s.dataset.title+" (Copia)",document.getElementById("gh-copy-repo").value=s.dataset.repo,new bootstrap.Modal(document.getElementById("ghCopyModal")).show()})}),t.querySelectorAll(".btn-view-img").forEach(s=>s.addEventListener("click",()=>V.viewImage(e.config,s.dataset))),t.querySelectorAll(".btn-view-pdf").forEach(s=>s.addEventListener("click",()=>V.viewPdf(e.config,s.dataset))),t.querySelectorAll(".btn-play-audio").forEach(s=>s.addEventListener("click",()=>V.playAudio(e.config,s.dataset))),t.querySelectorAll(".btn-download-gh").forEach(s=>s.addEventListener("click",()=>V.downloadFile(e.config,s.dataset,s))),t.querySelectorAll(".btn-open-pdf-mobile").forEach(s=>s.addEventListener("click",()=>V.openPdfMobile(e.config,s.dataset,s))),t.querySelectorAll(".btn-copy-link").forEach(s=>s.addEventListener("click",()=>V.copyLink(s.dataset.url))),t.querySelectorAll(".btn-delete-gh").forEach(s=>s.addEventListener("click",()=>C.handleDelete(a,s.dataset,e))),t.querySelectorAll(".btn-play-video").forEach(s=>s.addEventListener("click",()=>V.viewVideo(e.config,s.dataset)))},async handleCopy(t,e,a){var E;t.preventDefault();const s=document.getElementById("gh-btn-copy"),i=document.getElementById("gh-copy-orig-path").value,o=document.getElementById("gh-copy-orig-repo").value,n=document.getElementById("gh-copy-orig-filename").value,l=document.getElementById("gh-copy-repo"),d=l.value,p=l.options[l.selectedIndex].dataset.isPrivate==="true",u=document.getElementById("gh-copy-folder").value.trim()||"root",h=document.getElementById("gh-copy-new-title").value.trim(),c=parseInt(document.getElementById("gh-copy-timer").value),g=n.split(".").pop(),v=h.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+g;try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Copiando...';const f=await A.fetchSecureFile(a.config,i,o),L=await A.uploadFile(a.config,f,u,v,d),y=c>0?Date.now()+c*60*1e3:null;await S.addFileRecord({userId:e.uid,title:h,folder:u,fileName:v,originalName:n,path:L.content.path,sha:L.content.sha,htmlUrl:L.content.html_url,downloadUrl:L.content.download_url,createdAt:new Date().toISOString(),repoName:d,isPrivate:p,expiresAt:y}),(E=bootstrap.Modal.getInstance(document.getElementById("ghCopyModal")))==null||E.hide(),m.toast(`Archivo copiado correctamente${y?" (Con autodestrucción)":""}.`,"success"),a.loadFilesList(e.uid)}catch(f){m.toast("Error en la copia: "+f.message,"danger")}finally{s.disabled=!1,s.innerHTML="Confirmar Copia"}},async handleDelete(t,e,a){if(await m.confirm("Eliminar Archivo","¿Estás seguro de eliminar este archivo permanentemente?"))try{await A.deleteFile(a.config,e.path,e.sha,e.repo),await S.deleteFileRecord(e.id),a.loadFilesList(t),m.toast("Archivo eliminado.","success")}catch(i){m.toast("Error eliminando: "+i.message,"danger")}},async handleSilentDelete(t,e){try{await A.deleteFile(e.config,t.path,t.sha,t.repoName),await S.deleteFileRecord(t.id)}catch(a){console.error(`Error al eliminar archivo expirado: ${t.fileName}`,a)}}},ge={handleFileSelection(t){const e=t.target.files,a=document.getElementById("gh-batch-preview-container"),s=document.getElementById("gh-batch-preview-list");if(s.innerHTML="",e.length===0){a.classList.add("d-none");return}a.classList.remove("d-none"),Array.from(e).forEach((i,o)=>{const n=i.name.substring(0,i.name.lastIndexOf("."))||i.name,l=document.createElement("div");l.className="list-group-item bg-light p-2",l.innerHTML=`
        <div class="d-flex align-items-center mb-1">
          <i class="fa-regular fa-file me-2 text-secondary"></i>
          <span class="small fw-bold text-truncate" style="max-width: 70%;">${i.name}</span>
          <span class="badge bg-secondary ms-auto">${(i.size/(1024*1024)).toFixed(2)} MB</span>
        </div>
        <input type="text" class="form-control form-control-sm gh-batch-title" data-index="${o}" value="${n}" required placeholder="Título para este archivo">
      `,s.appendChild(l)})},async processSingleFileUpload(t,e,a,s,i,o,n){const l=e.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+t.name.split(".").pop(),d=await A.uploadFile(n.config,t,a,l,s);await S.addFileRecord({userId:o.uid,title:e,folder:a,fileName:l,originalName:t.name,path:d.content.path,sha:d.content.sha,htmlUrl:d.content.html_url,downloadUrl:d.content.download_url,createdAt:new Date().toISOString(),repoName:s,isPrivate:i})},async handleUpload(t,e,a){var v;t.preventDefault();const s=document.getElementById("gh-btn-upload"),i=document.getElementById("gh-repo"),o=i.value,n=i.options[i.selectedIndex].dataset.isPrivate==="true",l=document.getElementById("gh-folder").value.trim()||"root",d=document.getElementById("gh-file"),p=d.files;if(p.length===0||!o)return;const u=15;for(let E of p)if(E.size>u*1024*1024){m.toast(`El archivo ${E.name} supera el límite de ${u} MB.`,"warning");return}const h=document.querySelectorAll(".gh-batch-title"),c=document.getElementById("gh-upload-progress-container"),g=document.getElementById("gh-upload-progress-bar");try{s.disabled=!0,c.classList.remove("d-none"),g.style.width="0%",g.textContent="0%",g.classList.remove("bg-danger"),g.classList.add("bg-success");let E=0;const f=p.length;for(let L=0;L<f;L++){const y=p[L],I=h[L].value.trim()||y.name;s.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Subiendo (${L+1}/${f})...`,await this.processSingleFileUpload(y,I,l,o,n,e,a),E++;const P=Math.round(E/f*100);g.style.width=`${P}%`,g.textContent=`${P}%`}await S.updateLastUsedSettings(e.uid,o,l),a.config.lastUsedRepo=o,a.config.lastUsedFolder=l,d.value="",document.getElementById("gh-batch-preview-container").classList.add("d-none"),c.classList.add("d-none"),(v=bootstrap.Modal.getInstance(document.getElementById("ghUploadModal")))==null||v.hide(),m.toast(`Se subieron ${f} archivo(s) correctamente.`,"success"),a.loadFilesList(e.uid)}catch(E){m.toast("Error en la subida por lotes: "+E.message,"danger"),g.classList.replace("bg-success","bg-danger")}finally{s.disabled=!1,s.innerHTML="Subir Todos"}}},We={config:null,repoPages:{},currentFiles:[],tableEngine:null,async init(t){const e=document.getElementById(t);if(!e)return;const a=j.getCurrentUser();if(a){if(this.config=await S.getUserConfig(a.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=C.getBaseHTML(),C.injectStyles(),V.setupListeners(),this.config.lastUsedFolder&&(document.getElementById("gh-folder").value=this.config.lastUsedFolder),document.getElementById("gh-upload-form").addEventListener("submit",s=>ge.handleUpload(s,a,this)),document.getElementById("gh-copy-form").addEventListener("submit",s=>C.handleCopy(s,a,this)),document.getElementById("gh-file").addEventListener("change",s=>ge.handleFileSelection(s)),this.initTableEngine(a),C.setupFilterListeners(this),this.populateRepos(),this.loadFilesList(a.uid)}},initTableEngine(t){this.tableEngine=new oe({tableBody:document.getElementById("gh-files-list"),tableHeaders:document.getElementById("gh-table-head"),paginationContainer:document.getElementById("gh-pagination-controls"),dummyRowHTML:C.getDummyRowHTML(),marginBot:40,extractSearchString:e=>`${e.title} ${e.folder} ${e.fileName} ${e.repoName}`,renderRowHTML:e=>C.renderRowHTML(e,this),onRenderComplete:e=>C.attachTableListeners(e,this,t.uid)}),document.getElementById("gh-search-input").addEventListener("input",e=>{this.tableEngine.setSearchTerm(e.target.value)})},async loadFilesList(t){const e=document.getElementById("gh-files-list");try{const a=await S.listFiles(t),s=Date.now(),i=[];for(const o of a)o.expiresAt&&s>o.expiresAt?C.handleSilentDelete(o,this):i.push(o);this.currentFiles=i,C.buildFilters(this),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentFiles)}catch(a){e&&(e.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${a.message}</td></tr>`)}},async populateRepos(){const t=document.getElementById("gh-repo"),e=document.getElementById("gh-copy-repo");try{const a=await A.getUserRepos(this.config.githubToken);t.innerHTML="",e.innerHTML="",this.repoPages={},a.forEach(s=>{const i=document.createElement("option");i.value=s.name,i.textContent=`${s.isPrivate?"🔒":"🌐"} ${s.name}`,i.dataset.isPrivate=s.isPrivate,s.pagesUrl&&(this.repoPages[s.name]=s.pagesUrl);const o=i.cloneNode(!0);this.config.lastUsedRepo===s.name&&(i.selected=!0),t.appendChild(i),e.appendChild(o)}),!t.value&&t.options.length>0&&(t.selectedIndex=0),!e.value&&e.options.length>0&&(e.selectedIndex=0)}catch(a){t.innerHTML=e.innerHTML="<option disabled>Error cargando repositorios</option>",console.error(a)}}};class Ke{constructor(){this._routes=new Map,this._current=null,this._started=!1,this._transitioning=!1}register(e,a={}){this._routes.has(e)&&console.warn(`[Router] Ruta "${e}" ya registrada, se sobreescribe.`),this._routes.set(e,{enter:a.enter||null,leave:a.leave||null})}unregister(e){this._routes.delete(e),this._current===e&&(this._current=null)}navigate(e,a=!1){if(!this._routes.has(e)){console.warn(`[Router] Ruta "${e}" no registrada.`);return}const s=`#${e}`,i=window.location.hash;if(a)window.history.replaceState(null,"",s),this._transition(e);else{if(i===s&&this._current===e)return;i===s?this._transition(e):window.location.hash=s}}start(){if(this._started)return;this._started=!0,window.addEventListener("hashchange",()=>this._onHashChange());const e=window.location.hash.slice(1);if(e&&this._routes.has(e))this._transition(e);else{const a=this._routes.keys().next().value;a&&this.navigate(a,!0)}}_onHashChange(){const e=window.location.hash.slice(1);e&&this._routes.has(e)&&this._transition(e)}_transition(e){if(this._transitioning&&this._current===e||this._current===e)return;this._transitioning=!0;const a=this._current;if(a&&a!==e){const i=this._routes.get(a);i!=null&&i.leave&&i.leave()}for(const i of this._routes.keys()){const o=document.getElementById(`view-${i}`);o&&(o.style.display=i===e?"block":"none")}for(const i of this._routes.keys()){const o=document.getElementById(`nav-${i}`);o&&(o.classList.toggle("active",i===e),o.style.fontWeight=i===e?"bold":"normal")}const s=this._routes.get(e);s!=null&&s.enter&&s.enter(),this._current=e,this._transitioning=!1,`${e}`}get current(){return this._current}get routes(){return[...this._routes.keys()]}}const he=(t,e,a)=>{const s=t[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((i,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})},K={_loadedRoles:new Set,_loadedSingles:new Set,_viewRoles:{designer:["setting","editor"],documents:["editor","viewer"],print:["printer"],visor:["printer"]},async loadRole(t){if(this._loadedRoles.has(t))return;const e=Object.keys(H),a=e.map(s=>{const i=`${t}-${s}`;if(!customElements.get(i))return he(Object.assign({"../components/api/editor-api.js":()=>r(()=>import("./editor-api.DwAUoQlI.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../components/api/printer-api.js":()=>r(()=>import("./printer-api.DYqTxsiG.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../components/api/setting-api.js":()=>r(()=>import("./setting-api.CNqqAI8R.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../components/api/viewer-api.js":()=>r(()=>import("./viewer-api.Dvp8IGL5.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../components/audio/editor-audio.js":()=>r(()=>import("./editor-audio.DtReFgJQ.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../components/audio/printer-audio.js":()=>r(()=>import("./printer-audio.D3T3MxdR.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"../components/audio/setting-audio.js":()=>r(()=>import("./setting-audio.DXvfrvdH.js"),__vite__mapDeps([9,10,1,2,3]),import.meta.url),"../components/audio/viewer-audio.js":()=>r(()=>import("./viewer-audio.DzsNipXj.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"../components/boolean/editor-boolean.js":()=>r(()=>import("./editor-boolean.DeJr9wtI.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"../components/boolean/printer-boolean.js":()=>r(()=>import("./printer-boolean.DYsOSZ_y.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"../components/boolean/setting-boolean.js":()=>r(()=>import("./setting-boolean.DvCfULpa.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"../components/boolean/viewer-boolean.js":()=>r(()=>import("./viewer-boolean.DaLCv843.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"../components/chart/editor-chart.js":()=>r(()=>import("./editor-chart.BS69iISi.js"),__vite__mapDeps([16,1,2,3,17]),import.meta.url),"../components/chart/printer-chart.js":()=>r(()=>import("./printer-chart.n2-07nuS.js"),__vite__mapDeps([18,1,2,3,17]),import.meta.url),"../components/chart/setting-chart.js":()=>r(()=>import("./setting-chart.C3THylS-.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"../components/chart/viewer-chart.js":()=>r(()=>import("./viewer-chart.D5Ji5xpW.js"),__vite__mapDeps([20,1,2,3,17]),import.meta.url),"../components/currency/editor-currency.js":()=>r(()=>import("./editor-currency.BrcoeECN.js"),__vite__mapDeps([21,1,2,3]),import.meta.url),"../components/currency/printer-currency.js":()=>r(()=>import("./printer-currency.BcJVqy76.js"),__vite__mapDeps([22,1,2,3]),import.meta.url),"../components/currency/setting-currency.js":()=>r(()=>import("./setting-currency.qpU4Lmon.js"),__vite__mapDeps([23,24,1,2,3]),import.meta.url),"../components/currency/viewer-currency.js":()=>r(()=>import("./viewer-currency.CG9xyWf8.js"),__vite__mapDeps([25,1,2,3]),import.meta.url),"../components/date/editor-date.js":()=>r(()=>import("./editor-date.k6rwQK5B.js"),__vite__mapDeps([26,1,2,3]),import.meta.url),"../components/date/printer-date.js":()=>r(()=>import("./printer-date.ByYRF78u.js"),__vite__mapDeps([27,1,2,3]),import.meta.url),"../components/date/setting-date.js":()=>r(()=>import("./setting-date.DTSA_SCm.js"),__vite__mapDeps([28,29,1,2,3]),import.meta.url),"../components/date/viewer-date.js":()=>r(()=>import("./viewer-date.BRrfr_65.js"),__vite__mapDeps([30,1,2,3]),import.meta.url),"../components/datetime/editor-datetime.js":()=>r(()=>import("./editor-datetime.D3lOlA6a.js"),__vite__mapDeps([31,1,2,3]),import.meta.url),"../components/datetime/printer-datetime.js":()=>r(()=>import("./printer-datetime.DXKOqElu.js"),__vite__mapDeps([32,1,2,3]),import.meta.url),"../components/datetime/setting-datetime.js":()=>r(()=>import("./setting-datetime.DCz_SFIS.js"),__vite__mapDeps([29,1,2,3]),import.meta.url),"../components/datetime/viewer-datetime.js":()=>r(()=>import("./viewer-datetime.4uRpKm2k.js"),__vite__mapDeps([33,1,2,3]),import.meta.url),"../components/divider/editor-divider.js":()=>r(()=>import("./editor-divider.Dw2hlfTt.js"),__vite__mapDeps([34,1,2,3]),import.meta.url),"../components/divider/printer-divider.js":()=>r(()=>import("./printer-divider.CwyDEGsv.js"),__vite__mapDeps([35,1,2,3]),import.meta.url),"../components/divider/setting-divider.js":()=>r(()=>import("./setting-divider.B3BOIlKT.js"),__vite__mapDeps([36,1,2,3]),import.meta.url),"../components/divider/viewer-divider.js":()=>r(()=>import("./viewer-divider.Bjy2PcTo.js"),__vite__mapDeps([37,1,2,3]),import.meta.url),"../components/email/editor-email.js":()=>r(()=>import("./editor-email.Bclm6AQB.js"),__vite__mapDeps([38,1,2,3]),import.meta.url),"../components/email/printer-email.js":()=>r(()=>import("./printer-email.BKtJKIAH.js"),__vite__mapDeps([39,1,2,3]),import.meta.url),"../components/email/setting-email.js":()=>r(()=>import("./setting-email.DuDehJaF.js"),__vite__mapDeps([40,41,1,2,3]),import.meta.url),"../components/email/viewer-email.js":()=>r(()=>import("./viewer-email.Dj3G6JAR.js"),__vite__mapDeps([42,1,2,3]),import.meta.url),"../components/html/editor-html.js":()=>r(()=>import("./editor-html.Dlj_AYoa.js"),__vite__mapDeps([43,1,2,3]),import.meta.url),"../components/html/printer-html.js":()=>r(()=>import("./printer-html.DgsEd7Rd.js"),__vite__mapDeps([44,1,2,3]),import.meta.url),"../components/html/setting-html.js":()=>r(()=>import("./setting-html.BP6EGrXQ.js"),__vite__mapDeps([45,1,2,3]),import.meta.url),"../components/html/viewer-html.js":()=>r(()=>import("./viewer-html.s22pqV0E.js"),__vite__mapDeps([46,1,2,3]),import.meta.url),"../components/image/editor-image.js":()=>r(()=>import("./editor-image.DgUHDuK9.js"),__vite__mapDeps([47,1,2,3]),import.meta.url),"../components/image/printer-image.js":()=>r(()=>import("./printer-image.DLyDLKot.js"),__vite__mapDeps([48,1,2,3]),import.meta.url),"../components/image/setting-image.js":()=>r(()=>import("./setting-image.CZcQ0z62.js"),__vite__mapDeps([49,10,1,2,3]),import.meta.url),"../components/image/viewer-image.js":()=>r(()=>import("./viewer-image.2a61M9yz.js"),__vite__mapDeps([50,1,2,3]),import.meta.url),"../components/input/editor-input.js":()=>r(()=>import("./editor-input.C9Cgeq6y.js"),__vite__mapDeps([51,1,2,3]),import.meta.url),"../components/input/printer-input.js":()=>r(()=>import("./printer-input.CyK9vCOc.js"),__vite__mapDeps([52,1,2,3]),import.meta.url),"../components/input/setting-input.js":()=>r(()=>import("./setting-input.DyA8OhJ-.js"),__vite__mapDeps([41,1,2,3]),import.meta.url),"../components/input/viewer-input.js":()=>r(()=>import("./viewer-input.kv2GSLNz.js"),__vite__mapDeps([53,1,2,3]),import.meta.url),"../components/media/editor-media.js":()=>r(()=>import("./editor-media.B5iYQWha.js"),__vite__mapDeps([54,1,2,3]),import.meta.url),"../components/media/printer-media.js":()=>r(()=>import("./printer-media.CjDL1zFI.js"),__vite__mapDeps([55,1,2,3]),import.meta.url),"../components/media/setting-media.js":()=>r(()=>import("./setting-media.uBnQQwJ7.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"../components/media/viewer-media.js":()=>r(()=>import("./viewer-media.DVBbelM_.js"),__vite__mapDeps([56,1,2,3]),import.meta.url),"../components/number/editor-number.js":()=>r(()=>import("./editor-number.BO-kFEtt.js"),__vite__mapDeps([57,1,2,3]),import.meta.url),"../components/number/printer-number.js":()=>r(()=>import("./printer-number.C10o-PjB.js"),__vite__mapDeps([58,1,2,3]),import.meta.url),"../components/number/setting-number.js":()=>r(()=>import("./setting-number.3tul-yaO.js"),__vite__mapDeps([59,24,1,2,3]),import.meta.url),"../components/number/viewer-number.js":()=>r(()=>import("./viewer-number.3Xr9t_cq.js"),__vite__mapDeps([60,1,2,3]),import.meta.url),"../components/numeric/editor-numeric.js":()=>r(()=>import("./editor-numeric.CkSRw7vQ.js"),__vite__mapDeps([61,1,2,3]),import.meta.url),"../components/numeric/printer-numeric.js":()=>r(()=>import("./printer-numeric.E_W4EmUf.js"),__vite__mapDeps([62,1,2,3]),import.meta.url),"../components/numeric/setting-numeric.js":()=>r(()=>import("./setting-numeric.CJaAKVsv.js"),__vite__mapDeps([24,1,2,3]),import.meta.url),"../components/numeric/viewer-numeric.js":()=>r(()=>import("./viewer-numeric.CrauY51w.js"),__vite__mapDeps([63,1,2,3]),import.meta.url),"../components/password/editor-password.js":()=>r(()=>import("./editor-password.DcTVqhiX.js"),__vite__mapDeps([64,1,2,3]),import.meta.url),"../components/password/printer-password.js":()=>r(()=>import("./printer-password.DZEsAQLy.js"),__vite__mapDeps([65,1,2,3]),import.meta.url),"../components/password/setting-password.js":()=>r(()=>import("./setting-password.B79GnjPy.js"),__vite__mapDeps([66,41,1,2,3]),import.meta.url),"../components/password/viewer-password.js":()=>r(()=>import("./viewer-password.CEjcChqJ.js"),__vite__mapDeps([67,1,2,3]),import.meta.url),"../components/percentage/editor-percentage.js":()=>r(()=>import("./editor-percentage.BBSW3wC3.js"),__vite__mapDeps([68,1,2,3]),import.meta.url),"../components/percentage/printer-percentage.js":()=>r(()=>import("./printer-percentage.C1NbIsoj.js"),__vite__mapDeps([69,1,2,3]),import.meta.url),"../components/percentage/setting-percentage.js":()=>r(()=>import("./setting-percentage.Clk-daUc.js"),__vite__mapDeps([70,24,1,2,3]),import.meta.url),"../components/percentage/viewer-percentage.js":()=>r(()=>import("./viewer-percentage.C6WpHjJS.js"),__vite__mapDeps([71,1,2,3]),import.meta.url),"../components/script/editor-script.js":()=>r(()=>import("./editor-script.DLLUpkRI.js"),__vite__mapDeps([72,1,2,3,73]),import.meta.url),"../components/script/printer-script.js":()=>r(()=>import("./printer-script.BCryDrH4.js"),__vite__mapDeps([74,1,2,3]),import.meta.url),"../components/script/setting-script.js":()=>r(()=>import("./setting-script.CETcPGKh.js"),__vite__mapDeps([75,1,2,3,73]),import.meta.url),"../components/script/viewer-script.js":()=>r(()=>import("./viewer-script.BjKq_Yh-.js"),__vite__mapDeps([76,1,2,3]),import.meta.url),"../components/section/editor-section.js":()=>r(()=>import("./editor-section.CAPzmqPw.js"),__vite__mapDeps([77,1,2,3]),import.meta.url),"../components/section/printer-section.js":()=>r(()=>import("./printer-section.WRwW7Xz2.js"),__vite__mapDeps([78,1,2,3]),import.meta.url),"../components/section/setting-section.js":()=>r(()=>import("./setting-section.DrHBe943.js"),__vite__mapDeps([79,36,1,2,3]),import.meta.url),"../components/section/viewer-section.js":()=>r(()=>import("./viewer-section.BJHh4jjy.js"),__vite__mapDeps([80,1,2,3]),import.meta.url),"../components/select/editor-select.js":()=>r(()=>import("./editor-select.BBaZZWox.js"),__vite__mapDeps([81,1,2,3]),import.meta.url),"../components/select/printer-select.js":()=>r(()=>import("./printer-select.CgmTYbqZ.js"),__vite__mapDeps([82,1,2,3]),import.meta.url),"../components/select/setting-select.js":()=>r(()=>import("./setting-select.hyRu_lSA.js"),__vite__mapDeps([83,1,2,3]),import.meta.url),"../components/select/viewer-select.js":()=>r(()=>import("./viewer-select.PnVUdFyq.js"),__vite__mapDeps([84,1,2,3]),import.meta.url),"../components/string/editor-string.js":()=>r(()=>import("./editor-string.CZb5rvKq.js"),__vite__mapDeps([85,1,2,3]),import.meta.url),"../components/string/printer-string.js":()=>r(()=>import("./printer-string.D85gSwju.js"),__vite__mapDeps([86,1,2,3]),import.meta.url),"../components/string/setting-string.js":()=>r(()=>import("./setting-string.OZYDoY_H.js"),__vite__mapDeps([87,41,1,2,3]),import.meta.url),"../components/string/viewer-string.js":()=>r(()=>import("./viewer-string.CPdMidap.js"),__vite__mapDeps([88,1,2,3]),import.meta.url),"../components/subsection/editor-subsection.js":()=>r(()=>import("./editor-subsection.ByiR3p3p.js"),__vite__mapDeps([89,1,2,3]),import.meta.url),"../components/subsection/printer-subsection.js":()=>r(()=>import("./printer-subsection.DwC6h-8B.js"),__vite__mapDeps([90,1,2,3]),import.meta.url),"../components/subsection/setting-subsection.js":()=>r(()=>import("./setting-subsection.Di3J0FPE.js"),__vite__mapDeps([91,36,1,2,3]),import.meta.url),"../components/subsection/viewer-subsection.js":()=>r(()=>import("./viewer-subsection.DplZy13C.js"),__vite__mapDeps([92,1,2,3]),import.meta.url),"../components/table/editor-table.js":()=>r(()=>import("./editor-table.BCzOX-nO.js"),__vite__mapDeps([93,1,2,3,94,73]),import.meta.url),"../components/table/printer-table.js":()=>r(()=>import("./printer-table.9H0AsOmM.js"),__vite__mapDeps([95,1,2,3,94]),import.meta.url),"../components/table/setting-table.js":()=>r(()=>import("./setting-table.CWTJt3_C.js"),__vite__mapDeps([96,1,2,3,73]),import.meta.url),"../components/table/viewer-table.js":()=>r(()=>import("./viewer-table.Cv-IRsRB.js"),__vite__mapDeps([97,1,2,3,94]),import.meta.url),"../components/text/editor-text.js":()=>r(()=>import("./editor-text.hvZruTE9.js"),__vite__mapDeps([98,1,2,3]),import.meta.url),"../components/text/printer-text.js":()=>r(()=>import("./printer-text.DpUcYcaw.js"),__vite__mapDeps([99,1,2,3]),import.meta.url),"../components/text/setting-text.js":()=>r(()=>import("./setting-text.BxgBjXFd.js"),__vite__mapDeps([100,41,1,2,3]),import.meta.url),"../components/text/viewer-text.js":()=>r(()=>import("./viewer-text.D4Lgb18u.js"),__vite__mapDeps([101,1,2,3]),import.meta.url),"../components/time/editor-time.js":()=>r(()=>import("./editor-time.mb5KFnQ-.js"),__vite__mapDeps([102,1,2,3]),import.meta.url),"../components/time/printer-time.js":()=>r(()=>import("./printer-time.DDsw5I0i.js"),__vite__mapDeps([103,1,2,3]),import.meta.url),"../components/time/setting-time.js":()=>r(()=>import("./setting-time.B23M12f2.js"),__vite__mapDeps([104,29,1,2,3]),import.meta.url),"../components/time/viewer-time.js":()=>r(()=>import("./viewer-time.CKmYQLaN.js"),__vite__mapDeps([105,1,2,3]),import.meta.url),"../components/url/editor-url.js":()=>r(()=>import("./editor-url.DcG3Dz9V.js"),__vite__mapDeps([106,1,2,3,73]),import.meta.url),"../components/url/printer-url.js":()=>r(()=>import("./printer-url.Po4p18TA.js"),__vite__mapDeps([107,1,2,3]),import.meta.url),"../components/url/setting-url.js":()=>r(()=>import("./setting-url.DIYTJJUx.js"),__vite__mapDeps([108,1,2,3]),import.meta.url),"../components/url/viewer-url.js":()=>r(()=>import("./viewer-url.Bh1inPvQ.js"),__vite__mapDeps([109,1,2,3,73]),import.meta.url),"../components/video/editor-video.js":()=>r(()=>import("./editor-video.CKA7fEFZ.js"),__vite__mapDeps([110,1,2,3]),import.meta.url),"../components/video/printer-video.js":()=>r(()=>import("./printer-video.D4J5xeJZ.js"),__vite__mapDeps([111,1,2,3]),import.meta.url),"../components/video/setting-video.js":()=>r(()=>import("./setting-video.dhVuMBkS.js"),__vite__mapDeps([112,10,1,2,3]),import.meta.url),"../components/video/viewer-video.js":()=>r(()=>import("./viewer-video.BWzroOyI.js"),__vite__mapDeps([113,1,2,3]),import.meta.url)}),`../components/${s}/${t}-${s}.js`,4).catch(o=>{console.warn(`[ComponentLoader] No se pudo cargar ${t}-${s}:`,o.message)})});await Promise.all(a),this._loadedRoles.add(t),`${t}${e.length}`},async loadForView(t){const e=this._viewRoles[t]||[];e.length!==0&&(await Promise.all(e.map(a=>this.loadRole(a))),`${t}${e.join(", ")}`)},async loadInitial(t="documents"){`${t}`,await this.loadForView(t)},async loadSingle(t,e){const a=`${t}-${e}`;if(!this._loadedSingles.has(a)){if(customElements.get(a)){this._loadedSingles.add(a);return}try{await he(Object.assign({"../components/api/editor-api.js":()=>r(()=>import("./editor-api.DwAUoQlI.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../components/api/printer-api.js":()=>r(()=>import("./printer-api.DYqTxsiG.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../components/api/setting-api.js":()=>r(()=>import("./setting-api.CNqqAI8R.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../components/api/viewer-api.js":()=>r(()=>import("./viewer-api.Dvp8IGL5.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../components/audio/editor-audio.js":()=>r(()=>import("./editor-audio.DtReFgJQ.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../components/audio/printer-audio.js":()=>r(()=>import("./printer-audio.D3T3MxdR.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"../components/audio/setting-audio.js":()=>r(()=>import("./setting-audio.DXvfrvdH.js"),__vite__mapDeps([9,10,1,2,3]),import.meta.url),"../components/audio/viewer-audio.js":()=>r(()=>import("./viewer-audio.DzsNipXj.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"../components/boolean/editor-boolean.js":()=>r(()=>import("./editor-boolean.DeJr9wtI.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"../components/boolean/printer-boolean.js":()=>r(()=>import("./printer-boolean.DYsOSZ_y.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"../components/boolean/setting-boolean.js":()=>r(()=>import("./setting-boolean.DvCfULpa.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"../components/boolean/viewer-boolean.js":()=>r(()=>import("./viewer-boolean.DaLCv843.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"../components/chart/editor-chart.js":()=>r(()=>import("./editor-chart.BS69iISi.js"),__vite__mapDeps([16,1,2,3,17]),import.meta.url),"../components/chart/printer-chart.js":()=>r(()=>import("./printer-chart.n2-07nuS.js"),__vite__mapDeps([18,1,2,3,17]),import.meta.url),"../components/chart/setting-chart.js":()=>r(()=>import("./setting-chart.C3THylS-.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"../components/chart/viewer-chart.js":()=>r(()=>import("./viewer-chart.D5Ji5xpW.js"),__vite__mapDeps([20,1,2,3,17]),import.meta.url),"../components/currency/editor-currency.js":()=>r(()=>import("./editor-currency.BrcoeECN.js"),__vite__mapDeps([21,1,2,3]),import.meta.url),"../components/currency/printer-currency.js":()=>r(()=>import("./printer-currency.BcJVqy76.js"),__vite__mapDeps([22,1,2,3]),import.meta.url),"../components/currency/setting-currency.js":()=>r(()=>import("./setting-currency.qpU4Lmon.js"),__vite__mapDeps([23,24,1,2,3]),import.meta.url),"../components/currency/viewer-currency.js":()=>r(()=>import("./viewer-currency.CG9xyWf8.js"),__vite__mapDeps([25,1,2,3]),import.meta.url),"../components/date/editor-date.js":()=>r(()=>import("./editor-date.k6rwQK5B.js"),__vite__mapDeps([26,1,2,3]),import.meta.url),"../components/date/printer-date.js":()=>r(()=>import("./printer-date.ByYRF78u.js"),__vite__mapDeps([27,1,2,3]),import.meta.url),"../components/date/setting-date.js":()=>r(()=>import("./setting-date.DTSA_SCm.js"),__vite__mapDeps([28,29,1,2,3]),import.meta.url),"../components/date/viewer-date.js":()=>r(()=>import("./viewer-date.BRrfr_65.js"),__vite__mapDeps([30,1,2,3]),import.meta.url),"../components/datetime/editor-datetime.js":()=>r(()=>import("./editor-datetime.D3lOlA6a.js"),__vite__mapDeps([31,1,2,3]),import.meta.url),"../components/datetime/printer-datetime.js":()=>r(()=>import("./printer-datetime.DXKOqElu.js"),__vite__mapDeps([32,1,2,3]),import.meta.url),"../components/datetime/setting-datetime.js":()=>r(()=>import("./setting-datetime.DCz_SFIS.js"),__vite__mapDeps([29,1,2,3]),import.meta.url),"../components/datetime/viewer-datetime.js":()=>r(()=>import("./viewer-datetime.4uRpKm2k.js"),__vite__mapDeps([33,1,2,3]),import.meta.url),"../components/divider/editor-divider.js":()=>r(()=>import("./editor-divider.Dw2hlfTt.js"),__vite__mapDeps([34,1,2,3]),import.meta.url),"../components/divider/printer-divider.js":()=>r(()=>import("./printer-divider.CwyDEGsv.js"),__vite__mapDeps([35,1,2,3]),import.meta.url),"../components/divider/setting-divider.js":()=>r(()=>import("./setting-divider.B3BOIlKT.js"),__vite__mapDeps([36,1,2,3]),import.meta.url),"../components/divider/viewer-divider.js":()=>r(()=>import("./viewer-divider.Bjy2PcTo.js"),__vite__mapDeps([37,1,2,3]),import.meta.url),"../components/email/editor-email.js":()=>r(()=>import("./editor-email.Bclm6AQB.js"),__vite__mapDeps([38,1,2,3]),import.meta.url),"../components/email/printer-email.js":()=>r(()=>import("./printer-email.BKtJKIAH.js"),__vite__mapDeps([39,1,2,3]),import.meta.url),"../components/email/setting-email.js":()=>r(()=>import("./setting-email.DuDehJaF.js"),__vite__mapDeps([40,41,1,2,3]),import.meta.url),"../components/email/viewer-email.js":()=>r(()=>import("./viewer-email.Dj3G6JAR.js"),__vite__mapDeps([42,1,2,3]),import.meta.url),"../components/html/editor-html.js":()=>r(()=>import("./editor-html.Dlj_AYoa.js"),__vite__mapDeps([43,1,2,3]),import.meta.url),"../components/html/printer-html.js":()=>r(()=>import("./printer-html.DgsEd7Rd.js"),__vite__mapDeps([44,1,2,3]),import.meta.url),"../components/html/setting-html.js":()=>r(()=>import("./setting-html.BP6EGrXQ.js"),__vite__mapDeps([45,1,2,3]),import.meta.url),"../components/html/viewer-html.js":()=>r(()=>import("./viewer-html.s22pqV0E.js"),__vite__mapDeps([46,1,2,3]),import.meta.url),"../components/image/editor-image.js":()=>r(()=>import("./editor-image.DgUHDuK9.js"),__vite__mapDeps([47,1,2,3]),import.meta.url),"../components/image/printer-image.js":()=>r(()=>import("./printer-image.DLyDLKot.js"),__vite__mapDeps([48,1,2,3]),import.meta.url),"../components/image/setting-image.js":()=>r(()=>import("./setting-image.CZcQ0z62.js"),__vite__mapDeps([49,10,1,2,3]),import.meta.url),"../components/image/viewer-image.js":()=>r(()=>import("./viewer-image.2a61M9yz.js"),__vite__mapDeps([50,1,2,3]),import.meta.url),"../components/input/editor-input.js":()=>r(()=>import("./editor-input.C9Cgeq6y.js"),__vite__mapDeps([51,1,2,3]),import.meta.url),"../components/input/printer-input.js":()=>r(()=>import("./printer-input.CyK9vCOc.js"),__vite__mapDeps([52,1,2,3]),import.meta.url),"../components/input/setting-input.js":()=>r(()=>import("./setting-input.DyA8OhJ-.js"),__vite__mapDeps([41,1,2,3]),import.meta.url),"../components/input/viewer-input.js":()=>r(()=>import("./viewer-input.kv2GSLNz.js"),__vite__mapDeps([53,1,2,3]),import.meta.url),"../components/media/editor-media.js":()=>r(()=>import("./editor-media.B5iYQWha.js"),__vite__mapDeps([54,1,2,3]),import.meta.url),"../components/media/printer-media.js":()=>r(()=>import("./printer-media.CjDL1zFI.js"),__vite__mapDeps([55,1,2,3]),import.meta.url),"../components/media/setting-media.js":()=>r(()=>import("./setting-media.uBnQQwJ7.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"../components/media/viewer-media.js":()=>r(()=>import("./viewer-media.DVBbelM_.js"),__vite__mapDeps([56,1,2,3]),import.meta.url),"../components/number/editor-number.js":()=>r(()=>import("./editor-number.BO-kFEtt.js"),__vite__mapDeps([57,1,2,3]),import.meta.url),"../components/number/printer-number.js":()=>r(()=>import("./printer-number.C10o-PjB.js"),__vite__mapDeps([58,1,2,3]),import.meta.url),"../components/number/setting-number.js":()=>r(()=>import("./setting-number.3tul-yaO.js"),__vite__mapDeps([59,24,1,2,3]),import.meta.url),"../components/number/viewer-number.js":()=>r(()=>import("./viewer-number.3Xr9t_cq.js"),__vite__mapDeps([60,1,2,3]),import.meta.url),"../components/numeric/editor-numeric.js":()=>r(()=>import("./editor-numeric.CkSRw7vQ.js"),__vite__mapDeps([61,1,2,3]),import.meta.url),"../components/numeric/printer-numeric.js":()=>r(()=>import("./printer-numeric.E_W4EmUf.js"),__vite__mapDeps([62,1,2,3]),import.meta.url),"../components/numeric/setting-numeric.js":()=>r(()=>import("./setting-numeric.CJaAKVsv.js"),__vite__mapDeps([24,1,2,3]),import.meta.url),"../components/numeric/viewer-numeric.js":()=>r(()=>import("./viewer-numeric.CrauY51w.js"),__vite__mapDeps([63,1,2,3]),import.meta.url),"../components/password/editor-password.js":()=>r(()=>import("./editor-password.DcTVqhiX.js"),__vite__mapDeps([64,1,2,3]),import.meta.url),"../components/password/printer-password.js":()=>r(()=>import("./printer-password.DZEsAQLy.js"),__vite__mapDeps([65,1,2,3]),import.meta.url),"../components/password/setting-password.js":()=>r(()=>import("./setting-password.B79GnjPy.js"),__vite__mapDeps([66,41,1,2,3]),import.meta.url),"../components/password/viewer-password.js":()=>r(()=>import("./viewer-password.CEjcChqJ.js"),__vite__mapDeps([67,1,2,3]),import.meta.url),"../components/percentage/editor-percentage.js":()=>r(()=>import("./editor-percentage.BBSW3wC3.js"),__vite__mapDeps([68,1,2,3]),import.meta.url),"../components/percentage/printer-percentage.js":()=>r(()=>import("./printer-percentage.C1NbIsoj.js"),__vite__mapDeps([69,1,2,3]),import.meta.url),"../components/percentage/setting-percentage.js":()=>r(()=>import("./setting-percentage.Clk-daUc.js"),__vite__mapDeps([70,24,1,2,3]),import.meta.url),"../components/percentage/viewer-percentage.js":()=>r(()=>import("./viewer-percentage.C6WpHjJS.js"),__vite__mapDeps([71,1,2,3]),import.meta.url),"../components/script/editor-script.js":()=>r(()=>import("./editor-script.DLLUpkRI.js"),__vite__mapDeps([72,1,2,3,73]),import.meta.url),"../components/script/printer-script.js":()=>r(()=>import("./printer-script.BCryDrH4.js"),__vite__mapDeps([74,1,2,3]),import.meta.url),"../components/script/setting-script.js":()=>r(()=>import("./setting-script.CETcPGKh.js"),__vite__mapDeps([75,1,2,3,73]),import.meta.url),"../components/script/viewer-script.js":()=>r(()=>import("./viewer-script.BjKq_Yh-.js"),__vite__mapDeps([76,1,2,3]),import.meta.url),"../components/section/editor-section.js":()=>r(()=>import("./editor-section.CAPzmqPw.js"),__vite__mapDeps([77,1,2,3]),import.meta.url),"../components/section/printer-section.js":()=>r(()=>import("./printer-section.WRwW7Xz2.js"),__vite__mapDeps([78,1,2,3]),import.meta.url),"../components/section/setting-section.js":()=>r(()=>import("./setting-section.DrHBe943.js"),__vite__mapDeps([79,36,1,2,3]),import.meta.url),"../components/section/viewer-section.js":()=>r(()=>import("./viewer-section.BJHh4jjy.js"),__vite__mapDeps([80,1,2,3]),import.meta.url),"../components/select/editor-select.js":()=>r(()=>import("./editor-select.BBaZZWox.js"),__vite__mapDeps([81,1,2,3]),import.meta.url),"../components/select/printer-select.js":()=>r(()=>import("./printer-select.CgmTYbqZ.js"),__vite__mapDeps([82,1,2,3]),import.meta.url),"../components/select/setting-select.js":()=>r(()=>import("./setting-select.hyRu_lSA.js"),__vite__mapDeps([83,1,2,3]),import.meta.url),"../components/select/viewer-select.js":()=>r(()=>import("./viewer-select.PnVUdFyq.js"),__vite__mapDeps([84,1,2,3]),import.meta.url),"../components/string/editor-string.js":()=>r(()=>import("./editor-string.CZb5rvKq.js"),__vite__mapDeps([85,1,2,3]),import.meta.url),"../components/string/printer-string.js":()=>r(()=>import("./printer-string.D85gSwju.js"),__vite__mapDeps([86,1,2,3]),import.meta.url),"../components/string/setting-string.js":()=>r(()=>import("./setting-string.OZYDoY_H.js"),__vite__mapDeps([87,41,1,2,3]),import.meta.url),"../components/string/viewer-string.js":()=>r(()=>import("./viewer-string.CPdMidap.js"),__vite__mapDeps([88,1,2,3]),import.meta.url),"../components/subsection/editor-subsection.js":()=>r(()=>import("./editor-subsection.ByiR3p3p.js"),__vite__mapDeps([89,1,2,3]),import.meta.url),"../components/subsection/printer-subsection.js":()=>r(()=>import("./printer-subsection.DwC6h-8B.js"),__vite__mapDeps([90,1,2,3]),import.meta.url),"../components/subsection/setting-subsection.js":()=>r(()=>import("./setting-subsection.Di3J0FPE.js"),__vite__mapDeps([91,36,1,2,3]),import.meta.url),"../components/subsection/viewer-subsection.js":()=>r(()=>import("./viewer-subsection.DplZy13C.js"),__vite__mapDeps([92,1,2,3]),import.meta.url),"../components/table/editor-table.js":()=>r(()=>import("./editor-table.BCzOX-nO.js"),__vite__mapDeps([93,1,2,3,94,73]),import.meta.url),"../components/table/printer-table.js":()=>r(()=>import("./printer-table.9H0AsOmM.js"),__vite__mapDeps([95,1,2,3,94]),import.meta.url),"../components/table/setting-table.js":()=>r(()=>import("./setting-table.CWTJt3_C.js"),__vite__mapDeps([96,1,2,3,73]),import.meta.url),"../components/table/viewer-table.js":()=>r(()=>import("./viewer-table.Cv-IRsRB.js"),__vite__mapDeps([97,1,2,3,94]),import.meta.url),"../components/text/editor-text.js":()=>r(()=>import("./editor-text.hvZruTE9.js"),__vite__mapDeps([98,1,2,3]),import.meta.url),"../components/text/printer-text.js":()=>r(()=>import("./printer-text.DpUcYcaw.js"),__vite__mapDeps([99,1,2,3]),import.meta.url),"../components/text/setting-text.js":()=>r(()=>import("./setting-text.BxgBjXFd.js"),__vite__mapDeps([100,41,1,2,3]),import.meta.url),"../components/text/viewer-text.js":()=>r(()=>import("./viewer-text.D4Lgb18u.js"),__vite__mapDeps([101,1,2,3]),import.meta.url),"../components/time/editor-time.js":()=>r(()=>import("./editor-time.mb5KFnQ-.js"),__vite__mapDeps([102,1,2,3]),import.meta.url),"../components/time/printer-time.js":()=>r(()=>import("./printer-time.DDsw5I0i.js"),__vite__mapDeps([103,1,2,3]),import.meta.url),"../components/time/setting-time.js":()=>r(()=>import("./setting-time.B23M12f2.js"),__vite__mapDeps([104,29,1,2,3]),import.meta.url),"../components/time/viewer-time.js":()=>r(()=>import("./viewer-time.CKmYQLaN.js"),__vite__mapDeps([105,1,2,3]),import.meta.url),"../components/url/editor-url.js":()=>r(()=>import("./editor-url.DcG3Dz9V.js"),__vite__mapDeps([106,1,2,3,73]),import.meta.url),"../components/url/printer-url.js":()=>r(()=>import("./printer-url.Po4p18TA.js"),__vite__mapDeps([107,1,2,3]),import.meta.url),"../components/url/setting-url.js":()=>r(()=>import("./setting-url.DIYTJJUx.js"),__vite__mapDeps([108,1,2,3]),import.meta.url),"../components/url/viewer-url.js":()=>r(()=>import("./viewer-url.Bh1inPvQ.js"),__vite__mapDeps([109,1,2,3,73]),import.meta.url),"../components/video/editor-video.js":()=>r(()=>import("./editor-video.CKA7fEFZ.js"),__vite__mapDeps([110,1,2,3]),import.meta.url),"../components/video/printer-video.js":()=>r(()=>import("./printer-video.D4J5xeJZ.js"),__vite__mapDeps([111,1,2,3]),import.meta.url),"../components/video/setting-video.js":()=>r(()=>import("./setting-video.dhVuMBkS.js"),__vite__mapDeps([112,10,1,2,3]),import.meta.url),"../components/video/viewer-video.js":()=>r(()=>import("./viewer-video.BWzroOyI.js"),__vite__mapDeps([113,1,2,3]),import.meta.url)}),`../components/${e}/${t}-${e}.js`,4),this._loadedSingles.add(a)}catch(s){console.warn(`[ComponentLoader] No se pudo cargar ${t}-${e}:`,s.message)}}},async loadBatch(t,e){const a=e.map(s=>this.loadSingle(t,s));await Promise.all(a)},get loadedRoles(){return[...this._loadedRoles]},get loadedSingles(){return[...this._loadedSingles]}},D=new Ke;let ie=!1;D.register("designer",{enter:async()=>{await K.loadForView("designer"),_e.renderList()}});D.register("documents",{enter:async()=>{if(await K.loadForView("documents"),ie){ie=!1;return}F.renderList()}});D.register("settings",{enter:async()=>{await K.loadForView("settings"),we.render()}});document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),a="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";t&&(t.onerror=()=>{console.error("[THEME] Error. Revertiendo a Default."),t.href=a,localStorage.setItem("doc_engine_theme_url",a)},t.href=e&&e.includes("http")?e:a);try{await b.initDB()}catch(s){console.error("[ERROR] APP: Error de inicializacion:",s);return}await K.loadInitial(),Ze(),T.onAuthStateChanged(async s=>{s&&s.emailVerified?(s.email,await Ye(s)):(document.getElementById("app-content").style.display="none",Ee.renderLogin())}),se.init()});async function Ye(t){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${t.email}`),Ee.initLogout(),_e.init(),F.init(),we.init(),!await b.hasSecurityConfigured()&&U&&U.renderSetupModal&&U.renderSetupModal(),await S.getUserConfig(t.uid)&&Xe(),Qe(),D.start(),D.current||D.navigate("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",i=>{ie=!0,D.navigate("documents"),requestAnimationFrame(()=>{F.createFromTemplate(i.detail.tplId)})}),window._eventCreateDocRegistered=!0)}function Qe(){[{id:"nav-designer",route:"designer"},{id:"nav-documents",route:"documents"},{id:"nav-settings",route:"settings"}].forEach(({id:e,route:a})=>{const s=document.getElementById(e);s&&(s.onclick=i=>{i.preventDefault(),D.navigate(a)})})}function Xe(){const t=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;D.register("github",{enter:async()=>{await K.loadForView("github"),We.init("view-github")}});const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#github" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,t.appendChild(e),document.getElementById("nav-github").addEventListener("click",a=>{a.preventDefault(),D.navigate("github")})}function Ze(){document.addEventListener("click",a=>{const s=a.target.closest(".toggle-password");if(s){a.preventDefault();const i=document.getElementById(s.dataset.target),o=s.querySelector("i");if(i&&o){const n=i.type==="password";i.type=n?"text":"password",o.classList.toggle("fa-eye",!n),o.classList.toggle("fa-eye-slash",n)}}});const t=document.querySelector(".navbar"),e=document.querySelector(".app-container");t&&e&&new ResizeObserver(s=>{for(const i of s){const o=t.offsetHeight;e.style.marginTop=`${o+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{F&&F.renderList&&F.renderList()},250)}}).observe(t)}export{De as D,b as S,te as a,Me as b,ke as f};
