const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editor-api.CT8nhRhD.js","./BaseElement.9fGzvbuo.js","./Elements.B8W_hxTW.js","./FormulaEngine.CYGke5JL.js","./printer-api.DzqTqQm3.js","./setting-api.CADe44ey.js","./viewer-api.D1bkXmCt.js","./editor-audio.hBmgYbnp.js","./printer-audio.DustxG-n.js","./setting-audio.Dv1vs1ah.js","./setting-media.-1a2KFcg.js","./viewer-audio.Cp3d3tRG.js","./editor-boolean.BNtWNQPa.js","./printer-boolean.CZoh1P5q.js","./setting-boolean.WpOjdN8K.js","./viewer-boolean.CMlcS2Wr.js","./editor-chart.YgZvtZLZ.js","./ChartCore.DVpqK6sM.js","./printer-chart.CRKIQU65.js","./setting-chart.DmqHwnOZ.js","./viewer-chart.DNHs4hSu.js","./editor-currency.BXtJNizT.js","./printer-currency.D5g9CpmV.js","./setting-currency.CYF1FxR0.js","./setting-numeric.CWz6hzqh.js","./viewer-currency.Bjri0ShF.js","./editor-date.xGOlWe8R.js","./printer-date.DiMTSQ_T.js","./setting-date.DOhAYvHZ.js","./setting-datetime.DDACWWgZ.js","./viewer-date.C-7CqaiL.js","./editor-datetime.BwKxKYlI.js","./printer-datetime.UZ1qGWxe.js","./viewer-datetime.BguKBm41.js","./editor-divider.aZHK66sV.js","./printer-divider.CBEHA73T.js","./setting-divider.x27Hjzto.js","./viewer-divider.BXqWZ3wE.js","./editor-email.zDM_VfLi.js","./printer-email.Bwr4UY_H.js","./setting-email.LsXgEFZo.js","./setting-input.RQSuEEn5.js","./viewer-email.CQeslAbe.js","./editor-html.BUXGnPdh.js","./printer-html.DcevQF7K.js","./setting-html.BnNWWEe8.js","./viewer-html.IVfn-PRk.js","./editor-image.BEnKkCKV.js","./printer-image.Dn9VSQP4.js","./setting-image.VfLF-mct.js","./viewer-image.DHBp2TFV.js","./editor-input.GMCQagvY.js","./printer-input.CaS5jUOd.js","./viewer-input.BsGLRvJb.js","./editor-media.4y98F8R-.js","./printer-media.CXsSIJ2V.js","./viewer-media.Dqdpmxnv.js","./editor-number.BS7tgwcj.js","./printer-number.q7jp7mqX.js","./setting-number.dPLKILdx.js","./viewer-number.KS9NfcKE.js","./editor-numeric.B4mgUyu7.js","./printer-numeric.CSjjKKkO.js","./viewer-numeric.Bisn39T0.js","./editor-password.CXyR3ZCZ.js","./printer-password.wxgW7nYC.js","./setting-password.C3GmVFsp.js","./viewer-password.Cb1aSRH0.js","./editor-percentage.CWXhkKrH.js","./printer-percentage.CE6HNSpq.js","./setting-percentage.CrFJBNJ-.js","./viewer-percentage.XsOz3vEF.js","./editor-script.DUwAe6Ez.js","./preload-helper.fScCmrJf.js","./printer-script.8qqB2zCc.js","./setting-script.BMfP4IE9.js","./viewer-script.DFRyIjcz.js","./editor-section.CRQxuXyO.js","./printer-section.Da7e4niM.js","./setting-section.ChDVD0QV.js","./viewer-section.BKcRJXxV.js","./editor-select.D5LZ1s_c.js","./printer-select.SmYQmEnA.js","./setting-select.mqSr8bMG.js","./viewer-select.BQca4KLe.js","./editor-string.SOKzlvhx.js","./printer-string.XtvJriEC.js","./setting-string.DE_qjFTV.js","./viewer-string.CNMIjBPX.js","./editor-subsection.DVfS6e3V.js","./printer-subsection.Z6oiJFgi.js","./setting-subsection.DsCM6nNa.js","./viewer-subsection.CYL123M2.js","./editor-table.BvJWrztT.js","./TableUtils.DBlGEiXS.js","./printer-table.DSRZqilc.js","./setting-table.CdW92Dzd.js","./viewer-table.DF2DW7mt.js","./editor-text.BNtWpBb0.js","./printer-text.PWt1cEi0.js","./setting-text.BGzamiyb.js","./viewer-text.Ba9unfb0.js","./editor-time.CMMz_dJC.js","./printer-time.DItLZwyl.js","./setting-time.D2Vlxxni.js","./viewer-time.M7FC6cj_.js","./editor-url.Lh5E3UEp.js","./printer-url.DHb3qfeM.js","./setting-url.DHBMLo5h.js","./viewer-url.ue5mvyGt.js","./editor-video.qRrehFKm.js","./printer-video.DIIaVUUs.js","./setting-video.Cgmw-px_.js","./viewer-video.CdbPN1eV.js"])))=>i.map(i=>d[i]);
import{C as _,T as k,i as Re,a as Pe,e as H,F as le,U,b as N}from"./Elements.B8W_hxTW.js";import{s as F,a as Oe,b as T,c as se,d as oe,e as _e,F as L,o as we,f as Ce,g as De,h as Be,_ as r,i as de,E as ke,r as je,u as Me}from"./preload-helper.fScCmrJf.js";import{D as u,i as ce,e as ie}from"./FormulaEngine.CYGke5JL.js";const A={validatePassword(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e)},getCurrentUser(){return T.currentUser},onAuthStateChanged(e){return we(T,e)},async login(e,t){try{const s=(await se(T,e,t)).user;if(!s.emailVerified)throw await F(T),new Error("Debes verificar tu correo electronico antes de entrar.");return s}catch(a){throw console.error("[AUTH] Error:",a.code),a.message.includes("verificar tu correo")?a:new Error("Credenciales invalidas o error de conexion.")}},async signup(e,t){if(!this.validatePassword(t))throw new Error("La contrasenna no cumple los requisitos minimos.");try{const s=(await _e(T,e,t)).user;return await oe(s),await L.set("users",s.uid,{email:e,createdAt:new Date().toISOString(),emailVerified:!1}),await F(T),{requiresVerification:!0}}catch(a){throw console.error("Error en registro:",a),a.code==="auth/email-already-in-use"?new Error("Este correo ya esta registrado."):new Error("Error en registro: "+a.message)}},async resendVerification(e,t){if(!e||!t)throw new Error("Ingresá tu correo y contraseña para reenviar el correo.");let a=null;try{if(a=(await se(T,e,t)).user,a.emailVerified)throw new Error("Este correo ya está verificado — probá iniciar sesión normalmente.");return await oe(a),!0}catch(s){throw console.error("[AUTH] Error al reenviar verificación:",s.code||s.message),s.message.includes("ya está verificado")?s:new Error("No se pudo reenviar el correo. Revisá que el correo y la contraseña sean correctos.")}finally{a&&await F(T)}},async recoverPassword(e){if(!e)throw new Error("Por favor ingresa tu correo electronico.");try{return await Oe(T,e),!0}catch(t){let a="Error al enviar correo.";throw t.code==="auth/user-not-found"&&(a="No existe cuenta con este correo."),t.code==="auth/invalid-email"&&(a="El correo no es valido."),new Error(a)}},async logout(){return F(T)}},f={get _masterKey(){return _.masterKey},async initDB(){return!0},async save(e,t){const a=A.getCurrentUser();if(!a&&e!=="users")throw new Error("Usuario no autenticado.");const s=JSON.parse(JSON.stringify(t));if(s.userId=a?a.uid:e==="users"?s.id:null,s.isEncrypted&&s.content){if(!_.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");s.content=await _.encryptData(s.content)}!s.isEncrypted&&s.content&&Array.isArray(s.content)&&s.content.forEach(o=>{if(Array.isArray(o.value)&&o.value.length>0&&Array.isArray(o.value[0])){const i={};o.value.forEach((n,l)=>{i[l]=n}),o.value=i,o.storageMode="nested_map"}});try{return await L.set(e,s.id,s),!0}catch(o){throw console.error("[STORAGE] Error Firestore (save):",o),u.toast("Error al guardar en la nube: "+o.message,"danger"),o}},async getOne(e,t){if(!t)return null;const a=e==="doc";try{const s=await L.getRaw(e,t);if(!s)return null;if(s.isEncrypted&&s.content){if(!_.masterKey)return a&&console.warn("[STORAGE] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...s,content:null,decryptionError:!0};try{const o=await _.decryptData(s.content);let i={...s,content:o,decryptionError:!1};return this._hydrateDocument(i)}catch(o){return a&&console.error("[STORAGE] ⛔ Error al descifrar:",o),{...s,content:null,decryptionError:!0}}}return this._hydrateDocument(s)}catch(s){throw console.error(`[STORAGE] Error obteniendo ${e}/${t}:`,s),u.toast("Error al leer documento: "+s.message,"danger"),s}},async getAll(e){const t=A.getCurrentUser();if(!t)return[];try{const a=await L.queryWhere(e,"userId",t.uid);for(let s=0;s<a.length;s++){let o=a[s];if(o.isEncrypted&&_.masterKey)try{o.content=await _.decryptData(o.content)}catch(i){console.error("[STORAGE] Error descifrando documento en getAll:",i),o.decryptionError=!0}a[s]=this._hydrateDocument(o)}return a.sort((s,o)=>o.id.localeCompare(s.id))}catch(a){return console.error("[STORAGE] Error getAll:",a),u.toast("Error al cargar documentos: "+a.message,"danger"),[]}},async getAllRaw(e){const t=A.getCurrentUser();if(!t)return[];try{return(await L.queryWhere(e,"userId",t.uid)).sort((s,o)=>o.id.localeCompare(s.id))}catch(a){return console.error("[STORAGE] Error getAllRaw:",a),u.toast("Error al leer datos crudos: "+a.message,"danger"),[]}},async saveRaw(e,t){const a=A.getCurrentUser();if(!a)throw new Error("Usuario no autenticado.");if(!t.id)throw new Error("El registro a restaurar no tiene ID.");const s=JSON.parse(JSON.stringify(t));s.userId=a.uid;try{return await L.set(e,s.id,s),!0}catch(o){throw console.error("[STORAGE] Error Firestore (saveRaw):",o),u.toast("Error al restaurar en la nube: "+o.message,"danger"),o}},async updateFields(e,t,a){try{return await L.update(e,t,a),!0}catch(s){throw console.error(`[STORAGE] Error actualizando campos de ${e}/${t}:`,s),u.toast("Error al actualizar: "+s.message,"danger"),s}},async delete(e,t){try{await L.delete(e,t)}catch(a){throw console.error("[STORAGE] Error Firestore (delete):",a),u.toast("No se pudo eliminar el documento: "+a.message,"danger"),new Error("No se pudo eliminar el documento.")}},_hydrateDocument(e){return e&&Array.isArray(e.content)&&e.content.forEach(t=>{t.storageMode==="nested_map"&&t.value&&typeof t.value=="object"&&(t.value=Object.keys(t.value).sort((a,s)=>Number(a)-Number(s)).map(a=>t.value[a]),delete t.storageMode)}),e},async hasSecurityConfigured(){const e=A.getCurrentUser();return e?L.exists("security",e.uid):!1},async saveSecurityVerifier(e){const t=A.getCurrentUser();if(!t)throw new Error("No hay una sesion de usuario activa.");try{return await L.set("security",t.uid,{userId:t.uid,verifier:e,updatedAt:new Date().toISOString()}),!0}catch(a){throw console.error("[STORAGE] Error guardando verificador:",a),a}},async changeMasterPhrase(e,t){try{if(!await this.verifyMasterPhrase(e))throw new Error("La frase maestra anterior es incorrecta.");await _.setMasterKey(t);const s=await _.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(s),!0}catch(a){throw console.error("[STORAGE] ❌ Error en changeMasterPhrase:",a),a}},async hardResetSecurity(){const e=A.getCurrentUser();if(!e)throw new Error("No hay sesion activa.");try{const a=(await L.queryCompound("doc",[{field:"userId",op:"==",value:e.uid},{field:"isEncrypted",op:"==",value:!0}])).map(s=>L.delete("doc",s.id));return await Promise.all(a),await L.delete("security",e.uid),_.masterKey=null,!0}catch(t){throw console.error("[STORAGE] Error en Hard Reset:",t),new Error("No se pudo completar el borrado masivo: "+t.message)}},async verifyMasterPhrase(e){const t=A.getCurrentUser();if(!t)return!1;try{const a=await L.getRaw("security",t.uid);if(!a||!a.verifier)return!1;const{verifier:s}=a,o=_.masterKey;try{await _.setMasterKey(e);const i=await _.decryptData(s);return!!(i&&i.check==="VERIFIED")}catch{return _.masterKey=o,!1}}catch(a){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRITICO:",a),!1}}},Y=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Z={_allDocs:[],_selectedIds:new Set,_docsLoaded:!1,_currentGrupo:void 0,_forceShowAllDocs:!1,init(){this._bindRelatedDocsPicker();const e=document.getElementById("related-docs-toggle");e&&e.addEventListener("show.bs.dropdown",()=>this._openRelatedDocsPicker())},refresh(e){e!==void 0&&(this._currentGrupo=e),this._forceShowAllDocs=!1,this._openRelatedDocsPicker()},setCurrentGrupo(e){this._currentGrupo=e||"",this._forceShowAllDocs=!1;const t=document.getElementById("related-docs-search");(!t||!t.value.trim())&&this._renderRelatedDocsList("")},async _openRelatedDocsPicker(){const e=document.getElementById("tpl-related-docs");this._selectedIds=new Set(((e==null?void 0:e.value)||"").split(",").map(a=>a.trim()).filter(Boolean));const t=document.getElementById("related-docs-list");t&&(t.innerHTML='<div class="text-center text-muted small py-3"><i class="fa-solid fa-spinner fa-spin me-1"></i>Cargando documentos...</div>'),this._renderRelatedDocsPills();try{const[a,s]=await Promise.all([f.getAll("doc"),f.getAll("tpl")]),o={};(s||[]).forEach(i=>{o[i.id]=i.grupo||""}),this._allDocs=a.map(i=>({id:i.id,title:i.title||"(Sin título)",templateTitle:i.templateTitle||"General",templateId:i.templateId||null,grupo:i.templateId&&o[i.templateId]||""})).sort((i,n)=>i.title.localeCompare(n.title))}catch(a){console.error("[AdvancedConfigPanel] Error cargando documentos relacionados:",a),this._allDocs=[]}this._docsLoaded=!0,this._renderRelatedDocsList(""),this._renderRelatedDocsPills()},_bindRelatedDocsPicker(){const e=document.getElementById("related-docs-search");e&&e.addEventListener("input",()=>{this._renderRelatedDocsList(e.value.trim().toLowerCase())});const t=document.getElementById("related-docs-list");t&&t.addEventListener("change",s=>{const o=s.target.closest("input[type=checkbox][data-doc-id]");o&&this._toggleRelatedDoc(o.dataset.docId,o.checked)});const a=document.getElementById("related-docs-pills");a&&a.addEventListener("click",s=>{const o=s.target.closest("[data-remove-doc-id]");o&&this._toggleRelatedDoc(o.dataset.removeDocId,!1)})},_toggleRelatedDoc(e,t){t?this._selectedIds.add(e):this._selectedIds.delete(e);const a=document.getElementById("tpl-related-docs");a&&(a.value=Array.from(this._selectedIds).join(","));const s=document.getElementById("related-docs-search");this._renderRelatedDocsList(s?s.value.trim().toLowerCase():""),this._renderRelatedDocsPills()},_renderRelatedDocsList(e){const t=document.getElementById("related-docs-list");if(!t||!this._docsLoaded)return;let a,s="";if(e)a=this._allDocs.filter(o=>o.title.toLowerCase().includes(e)||o.templateTitle.toLowerCase().includes(e));else if(this._currentGrupo!==void 0&&!this._forceShowAllDocs){const o=this._allDocs.filter(i=>i.grupo===this._currentGrupo);o.length>0&&o.length<this._allDocs.length?(a=o,s=`<div class="text-muted px-2 pb-2 mb-1 border-bottom" style="font-size: 0.72rem;"><i class="fa-solid fa-filter me-1"></i>Mostrando documentos ${this._currentGrupo?`del grupo "${Y(this._currentGrupo)}"`:"de plantillas independientes"}. <a href="#" class="link-secondary" id="related-docs-show-all">Ver todos los documentos</a></div>`):a=this._allDocs}else a=this._allDocs;if(a.length===0){t.innerHTML=`<div class="text-center text-muted small py-3">${this._allDocs.length===0?"No tenés documentos todavía.":"Sin resultados."}</div>`;return}if(t.innerHTML=s+a.map(o=>{const i=this._selectedIds.has(o.id)?"checked":"",n=`related-doc-chk-${o.id}`;return`
          <label class="form-check d-flex align-items-start gap-2 px-2 py-1 rounded related-doc-option mb-0" for="${n}">
            <input class="form-check-input mt-1" type="checkbox" id="${n}" data-doc-id="${o.id}" ${i} />
            <span class="d-flex flex-column">
              <span class="small fw-medium text-body">${Y(o.title)}</span>
              <span class="text-muted" style="font-size: 0.72rem;">${Y(o.templateTitle)}</span>
            </span>
          </label>`}).join(""),s){const o=document.getElementById("related-docs-show-all");o&&(o.onclick=i=>{i.preventDefault(),this._forceShowAllDocs=!0,this._renderRelatedDocsList("")})}},_renderRelatedDocsPills(){const e=document.getElementById("related-docs-pills");if(e){if(this._selectedIds.size===0){e.innerHTML="";return}e.innerHTML=Array.from(this._selectedIds).map(t=>{const a=this._allDocs.find(o=>o.id===t),s=a?a.title:t;return`
          <span class="badge bg-light text-body border d-inline-flex align-items-center gap-1 fw-normal py-2">
            <i class="fa-solid fa-file-lines text-muted"></i>
            ${Y(s)}
            <button type="button" class="btn-close ms-1" style="font-size: 0.55rem;" data-remove-doc-id="${t}" aria-label="Quitar"></button>
          </span>`}).join("")}}},Ie={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const e=document.getElementById("user-none"),t=document.getElementById("pass-none");e&&(e.style.display="none"),t&&(t.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const a=document.getElementById("theme-link").getAttribute("href"),s=`./manual.html?theme=${encodeURIComponent(a)}`;this.container.innerHTML=`
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
                        <ul class="list-unstyled mb-3" id="signup-pass-checklist" style="font-size: 0.75rem;">
                          <li data-check="length" class="text-muted mb-1"><i class="fa-solid fa-lock text-danger me-1"></i>Mínimo 8 caracteres</li>
                          <li data-check="upper" class="text-muted mb-1"><i class="fa-solid fa-lock text-danger me-1"></i>Una mayúscula (A-Z)</li>
                          <li data-check="lower" class="text-muted mb-1"><i class="fa-solid fa-lock text-danger me-1"></i>Una minúscula (a-z)</li>
                          <li data-check="number" class="text-muted mb-1"><i class="fa-solid fa-lock text-danger me-1"></i>Un número (0-9)</li>
                          <li data-check="symbol" class="text-muted mb-0"><i class="fa-solid fa-lock text-danger me-1"></i>Un símbolo (@, $, !, %, *, ?, &)</li>
                        </ul>
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
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const e=document.getElementById("btn-login");e&&(e.onclick=async()=>{const o=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value;if(!o||!i)return this._showError("Ingrese correo y contraseña.");try{await A.login(o,i),location.reload()}catch(n){n.message.includes("verificar tu correo")?this._showUnverifiedError():this._showError(n.message)}});const t=document.getElementById("pass-s");t&&(t.addEventListener("input",o=>{this._updatePasswordChecklist(o.target.value)}),this._updatePasswordChecklist(t.value));const a=document.getElementById("btn-signup");a&&(a.onclick=async()=>{const o=document.getElementById("email-s").value.trim(),i=document.getElementById("pass-s").value;if(!A.validatePassword(i))return this._showError("La contraseña no cumple los requisitos.");const n=a.innerHTML;a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',a.disabled=!0;try{await A.signup(o,i),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${o}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
              <div class="mt-2">
                <button type="button" id="btn-resend-verification-signup" class="btn btn-sm btn-outline-success">
                  <i class="fa-solid fa-paper-plane me-1"></i> ¿No te llegó? Reenviar correo
                </button>
                <div id="resend-status-signup" class="small mt-1"></div>
              </div>
            `);const l=document.getElementById("btn-resend-verification-signup"),d=document.getElementById("resend-status-signup");l&&(l.onclick=async()=>{const g=l.innerHTML;l.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i> Enviando...',l.disabled=!0,d&&(d.textContent="",d.className="small mt-1");try{await A.resendVerification(o,i),d&&(d.textContent=`¡Enviado de nuevo! Revisá ${o} (y la carpeta de spam).`,d.className="small mt-1 text-success fw-bold")}catch(m){d&&(d.textContent=m.message,d.className="small mt-1 text-danger")}finally{l.innerHTML=g,l.disabled=!1}}),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(l){this._showError(l.message)}finally{a.innerHTML=n,a.disabled=!1}});const s=document.getElementById("btn-forgot");s&&(s.onclick=async o=>{o.preventDefault();const i=document.getElementById("email-l"),n=i.value.trim();if(!n)return i.classList.add("is-invalid"),i.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");i.classList.remove("is-invalid");const l=s.innerHTML;s.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',s.style.pointerEvents="none";try{await A.recoverPassword(n),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${n} para restablecer la clave.`)}catch(d){this._showError(d.message)}finally{s.innerHTML=l,s.style.pointerEvents="auto"}})},initLogout(){const e=document.getElementById("btn-logout-link");e&&(e.onclick=async t=>{t.preventDefault();try{await A.logout(),window.location.href=window.location.pathname}catch(a){console.error("Error al cerrar sesión:",a)}})},_updatePasswordChecklist(e){const t={length:e.length>=8,upper:/[A-Z]/.test(e),lower:/[a-z]/.test(e),number:/\d/.test(e),symbol:/[@$!%*?&]/.test(e)};Object.entries(t).forEach(([a,s])=>{const o=document.querySelector(`#signup-pass-checklist li[data-check="${a}"]`);if(!o)return;const i=o.querySelector("i");i&&(s?(i.className="fa-solid fa-lock-open text-success me-1",o.classList.remove("text-muted"),o.classList.add("text-success")):(i.className="fa-solid fa-lock text-danger me-1",o.classList.remove("text-success"),o.classList.add("text-muted")))})},_showError(e){const t=document.getElementById("auth-err"),a=document.getElementById("auth-success");t&&(t.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${e}`,t.style.display="block"),a&&(a.style.display="none")},_showUnverifiedError(){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");if(t&&(t.style.display="none"),!e)return;e.innerHTML=`
      <i class="fa-solid fa-triangle-exclamation me-1"></i> Debes verificar tu correo electrónico antes de entrar.
      <div class="mt-2">
        <button type="button" id="btn-resend-verification" class="btn btn-sm btn-outline-danger">
          <i class="fa-solid fa-paper-plane me-1"></i> Reenviar correo de verificación
        </button>
        <div id="resend-status" class="small mt-1"></div>
      </div>
    `,e.style.display="block";const a=document.getElementById("btn-resend-verification"),s=document.getElementById("resend-status");a&&(a.onclick=async()=>{const o=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value,n=a.innerHTML;a.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i> Enviando...',a.disabled=!0,s&&(s.textContent="",s.className="small mt-1");try{await A.resendVerification(o,i),s&&(s.textContent=`¡Enviado! Revisá ${o} (y la carpeta de spam).`,s.className="small mt-1 text-success fw-bold")}catch(l){s&&(s.textContent=l.message,s.className="small mt-1 text-danger")}finally{a.innerHTML=n,a.disabled=!1}})},_showSuccess(e){const t=document.getElementById("auth-err"),a=document.getElementById("auth-success");a&&(a.innerHTML=e,a.style.display="block"),t&&(t.style.display="none")}},z={async saveTemplate(e){if(!e.title.trim())throw new Error("Título obligatorio");if(e.elements.length===0)throw new Error("Diseño vacío");e.updatedAt=new Date().toISOString(),await f.save("tpl",e)},async deleteTemplate(e){await f.delete("tpl",e)},async loadTemplates(){return await f.getAll("tpl")}};class re{constructor(t){this.tableBody=t.tableBody,this.tableHeaders=t.tableHeaders,this.paginationContainer=t.paginationContainer,this.renderRowHTML=t.renderRowHTML,this.extractSearchString=t.extractSearchString,this.onRenderComplete=t.onRenderComplete,this.customSort=t.customSort,this.dummyRowHTML=t.dummyRowHTML,this.marginBot=t.marginBot!==void 0?t.marginBot:40,this.data=[],this.state={currentPage:1,itemsPerPage:10,totalPages:1,searchTerm:"",filters:{},sortColumn:"updatedAt",sortAsc:!1},this._resizeTimer=null,this._bindWindowResize(),this._bindHeaders(),this._bindPaginationEvents()}setData(t){this.data=t||[],this.state.currentPage=1,this.render()}setSearchTerm(t){this.state.searchTerm=this._normalizeText(t),this.state.currentPage=1,this.render()}setFilter(t,a){this.state.filters[t]=a,this.state.currentPage=1,this.render()}setSort(t){this.state.sortColumn===t?this.state.sortAsc=!this.state.sortAsc:(this.state.sortColumn=t,this.state.sortAsc=!0),this.state.currentPage=1,this._updateHeaderIcons(),this.render()}_bindHeaders(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{const s=a.dataset.column;s&&this.setSort(s)})}),this._updateHeaderIcons()}_updateHeaderIcons(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(a=>{let s=a.querySelector("i");s||(s=document.createElement("i"),a.appendChild(s));const o=a.dataset.column;s.className="fa-solid fa-sort text-muted ms-1 opacity-50",this.state.sortColumn===o&&(s.className=this.state.sortAsc?"fa-solid fa-sort-up text-primary ms-1":"fa-solid fa-sort-down text-primary ms-1")})}_processData(){let t=[...this.data];if(Object.entries(this.state.filters).forEach(([a,s])=>{s&&s!=="all"&&(t=t.filter(o=>o[a]===s))}),this.state.searchTerm){const a=this.state.searchTerm.split(/\s+/).filter(s=>s.length>0);t=t.filter(s=>{const o=this._normalizeText(this.extractSearchString(s));return a.every(i=>o.includes(i))})}return this.state.sortColumn&&t.sort((a,s)=>{if(this.customSort)return this.customSort(a,s,this.state);let o=a[this.state.sortColumn],i=s[this.state.sortColumn];return this.state.sortColumn.toLowerCase().includes("date")||this.state.sortColumn.includes("At")?(o=new Date(o||0).getTime(),i=new Date(i||0).getTime()):(o=this._normalizeText(o),i=this._normalizeText(i)),o<i?this.state.sortAsc?-1:1:o>i?this.state.sortAsc?1:-1:0}),t}render(){if(!this.tableBody)return;const t=this._processData();this.state.totalPages=Math.max(1,Math.ceil(t.length/this.state.itemsPerPage)),this.state.currentPage>this.state.totalPages&&(this.state.currentPage=1);const a=(this.state.currentPage-1)*this.state.itemsPerPage,s=t.slice(a,a+this.state.itemsPerPage);if(this._renderPaginationControls(t.length),s.length===0){this.tableBody.innerHTML='<tr><td colspan="100%" class="text-center p-4 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=s.map(o=>this.renderRowHTML(o)).join(""),this.onRenderComplete&&this.onRenderComplete(this.tableBody,s)}_renderPaginationControls(t){this.paginationContainer&&(this.paginationContainer.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.state.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left pointer-events-none"></i></button>
      <span class="small fw-bold px-1">Pág ${this.state.currentPage} de ${this.state.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.state.currentPage===this.state.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right pointer-events-none"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${t} en total</span>
    `)}_bindPaginationEvents(){this.paginationContainer&&this.paginationContainer.addEventListener("click",t=>{const a=t.target.closest("button");a&&(a.classList.contains("btn-prev-page")&&this.state.currentPage>1?(this.state.currentPage--,this.render()):a.classList.contains("btn-next-page")&&this.state.currentPage<this.state.totalPages&&(this.state.currentPage++,this.render()))})}calculatePaginationSpace(){if(!this.tableBody)return;let t=55;if(this.dummyRowHTML){const i=document.createElement("tr");i.style.visibility="hidden",i.innerHTML=this.dummyRowHTML,this.tableBody.appendChild(i),t=i.getBoundingClientRect().height||55,this.tableBody.removeChild(i)}const a=this.tableBody.getBoundingClientRect().top,s=a>0?a:250,o=window.innerHeight-s-this.marginBot;this.state.itemsPerPage=Math.max(5,Math.floor(o/t))}_bindWindowResize(){window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.tableBody&&this.tableBody.offsetParent!==null&&(this.calculatePaginationSpace(),this.render())},300)})}_normalizeText(t){return(t||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}const ue={handlers:{},currentTemplates:[],init(e){this.handlers=e;const t=document.getElementById("designer-list-view");t&&(t.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents())},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-pen-ruler text-danger"></i> Gestor de Plantillas</h2>
            <div class="d-flex gap-2">
                <input type="file" id="input-import-tpl" accept=".json" class="d-none">
                <button class="btn btn-outline-dark shadow-sm" id="btn-import-tpl">
                    <i class="fa-solid fa-file-import me-2"></i> Importar
                </button>
                <button class="btn btn-outline-primary shadow-sm" id="btn-go-create-tpl-ai" title="Crear una plantilla, o un grupo de plantillas asociadas, con ayuda de la IA">
                    <i class="fa-solid fa-wand-magic-sparkles me-2"></i> Crear con IA
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
              <div class="col-auto">
                <button type="button" class="btn btn-sm" id="tpl-toggle-favorites-only"></button>
              </div>
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
    `},cacheDOM(){this.tableBody=document.getElementById("tpl-table-body"),this.tableHead=document.getElementById("tpl-table-head"),this.pagination=document.getElementById("tpl-pagination-controls"),this.searchInput=document.getElementById("tpl-search-input"),this.btnCreate=document.getElementById("btn-go-create-tpl"),this.btnCreateAi=document.getElementById("btn-go-create-tpl-ai"),this.btnImport=document.getElementById("btn-import-tpl"),this.inputFile=document.getElementById("input-import-tpl"),this.categoryContainer=document.getElementById("tpl-category-filter-container"),this.btnFavoritesOnly=document.getElementById("tpl-toggle-favorites-only")},initTableEngine(){this.tableEngine=new re({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td class="text-center fs-4">📄</td>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">General</span></td>
        <td>
          <div class="fw-bold text-nowrap">Test</div>
          <div class="text-muted small text-truncate" style="max-width: 250px;">Desc</div>
        </td>
        <td class="text-muted small text-nowrap">01/01/2026</td>
        <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-success"><i class="fa-solid fa-file-circle-plus"></i></button></td>
      `,marginBot:90,extractSearchString:e=>`${e.grupo||""} ${e.title} ${e.category} ${e.description||""}`,renderRowHTML:e=>this._renderRow(e),onRenderComplete:(e,t)=>this._bindListActions(e,t),customSort:(e,t,a)=>{const s=l=>(l||"").toString().normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),o=a.sortColumn;let i,n;return o==="title"?(i=s(`${e.grupo||""} ${e.title}`),n=s(`${t.grupo||""} ${t.title}`)):o.toLowerCase().includes("date")||o.includes("At")?(i=new Date(e[o]||0).getTime(),n=new Date(t[o]||0).getTime()):(i=s(e[o]),n=s(t[o])),i<n?a.sortAsc?-1:1:i>n?a.sortAsc?1:-1:0}})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.btnCreateAi&&(this.btnCreateAi.onclick=()=>this.handlers.onNavigateToGroupAssistant()),this.btnImport&&this.inputFile&&(this.btnImport.onclick=()=>this.inputFile.click(),this.inputFile.onchange=e=>this._handleImport(e)),this.searchInput.addEventListener("input",e=>{this.tableEngine.setSearchTerm(e.target.value)}),this.btnFavoritesOnly&&(this.favoritesOnly=localStorage.getItem("doc_engine_favorites_only")!=="false",this._updateFavoritesToggleUI(),this.btnFavoritesOnly.onclick=()=>{this.favoritesOnly=!this.favoritesOnly,localStorage.setItem("doc_engine_favorites_only",this.favoritesOnly),this._updateFavoritesToggleUI(),this._applyVisibility()})},_updateFavoritesToggleUI(){this.btnFavoritesOnly&&(this.favoritesOnly?(this.btnFavoritesOnly.className="btn btn-sm btn-warning text-white",this.btnFavoritesOnly.innerHTML='<i class="fa-solid fa-star"></i>',this.btnFavoritesOnly.title="Mostrando solo favoritas — clic para ver todas"):(this.btnFavoritesOnly.className="btn btn-sm btn-outline-secondary",this.btnFavoritesOnly.innerHTML='<i class="fa-regular fa-star"></i>',this.btnFavoritesOnly.title="Mostrando todas — clic para ver solo favoritas"))},_applyVisibility(){const e=this.favoritesOnly?this.currentTemplates.filter(t=>!t.pocoUsado):this.currentTemplates;this.tableEngine.setData(e)},async render(){try{const e=await f.getAll("tpl")||[];this.currentTemplates=e.map(t=>({...t,category:t.category||"General",pocoUsado:!!t.pocoUsado})),this.renderCategoryFilter(),this.tableEngine.calculatePaginationSpace(),this._applyVisibility()}catch(e){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${e.message}</td></tr>`)}},renderCategoryFilter(){if(!this.categoryContainer)return;const e=[...new Set(this.currentTemplates.map(t=>t.category))];if(e.length>1){const t=document.getElementById("tpl-category-select"),a=t?t.value:"all",s=`<option value="all" ${a==="all"?"selected":""}>Todas las categorías</option>`+e.sort().map(o=>`<option value="${o}" ${a===o?"selected":""}>${o}</option>`).join("");this.categoryContainer.innerHTML=`<select id="tpl-category-select" class="form-select">${s}</select>`,document.getElementById("tpl-category-select").addEventListener("change",o=>{this.tableEngine.setFilter("category",o.target.value)})}else this.categoryContainer.innerHTML="",this.tableEngine.setFilter("category","all")},_patchRowUsageUI(e,t){if(!e)return;const a=e.querySelector(".btn-toggle-usage");if(a){a.className=`btn btn-sm ${t.pocoUsado?"btn-outline-secondary":"btn-outline-warning"} btn-toggle-usage me-1`,a.title=t.pocoUsado?"Marcar como favorita":"Marcar como poco usada";const o=a.querySelector("i");o&&(o.className=`fa-${t.pocoUsado?"regular":"solid"} fa-star`)}let s=e.querySelector(".usage-badge");if(t.pocoUsado){if(!s){s=document.createElement("span"),s.className="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 ms-1 usage-badge",s.title="Marcada como poco usada",s.textContent="Poco usada";const o=e.querySelector(".fw-bold.text-nowrap.text-truncate");o&&o.appendChild(s)}}else s&&s.remove()},_renderRow(e){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">${e.category}</span></td>
        <td>
          <div class="d-flex align-items-center">
            <div class="fs-4 me-3 text-center" style="width: 32px;">${e.icon||"📄"}</div>
            <div style="min-width: 0;">
              <div class="fw-bold text-nowrap text-truncate">
                 ${e.grupo?`<span class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 me-1" title="Grupo: ${e.grupo}">${e.grupo}</span>`:""}${e.title}
                ${e.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
                ${e.pocoUsado?'<span class="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 ms-1 usage-badge" title="Marcada como poco usada">Poco usada</span>':""}
              </div>
              <div class="text-muted small text-truncate" style="max-width: 250px;">${e.description||"Sin descripción"}</div>
            </div>
          </div>
        </td>
        <td class="text-end text-nowrap">
            ${this.favoritesOnly?"":`<button class="btn btn-sm ${e.pocoUsado?"btn-outline-secondary":"btn-outline-warning"} btn-toggle-usage me-1" data-id="${e.id}" title="${e.pocoUsado?"Marcar como favorita":"Marcar como poco usada"}">
               <i class="fa-${e.pocoUsado?"regular":"solid"} fa-star"></i>
            </button>`}
            <button class="btn btn-sm btn-outline-success btn-create-doc me-1" data-id="${e.id}" title="Crear Documento">
               <i class="fa-solid fa-file-circle-plus"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-id="${e.id}" title="Editar Plantilla">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-export me-1" data-id="${e.id}" title="Descargar JSON">
                <i class="fa-solid fa-download"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del" data-id="${e.id}" title="Eliminar Plantilla">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(e,t){e.querySelectorAll(".btn-toggle-usage").forEach(a=>{a.onclick=async s=>{s.stopPropagation();const o=a.dataset.id,i=this.currentTemplates.find(l=>l.id===o);if(!i)return;const n=!i.pocoUsado;try{await f.updateFields("tpl",o,{pocoUsado:n}),i.pocoUsado=n,u.toast(n?"Plantilla marcada como poco usada.":"Plantilla marcada como favorita.","success"),this._patchRowUsageUI(a.closest("tr"),i)}catch(l){console.error("Error al marcar la plantilla:",l)}}}),e.querySelectorAll(".btn-create-doc").forEach(a=>{a.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:a.dataset.id}}))}}),e.querySelectorAll(".btn-edit").forEach(a=>{a.onclick=()=>this.handlers.onEditTemplate(a.dataset.id)}),e.querySelectorAll(".btn-del").forEach(a=>{a.onclick=async()=>{await u.confirm("Eliminar Plantilla","¿Estás seguro de eliminar esta plantilla? Se borrarán sus documentos vinculados.")&&(await z.deleteTemplate(a.dataset.id),u.toast("Plantilla eliminada exitosamente","success"),this.render())}}),e.querySelectorAll(".btn-export").forEach(a=>{a.onclick=()=>{const s=t.find(o=>o.id===a.dataset.id);s&&this._downloadJSON(s)}})},_downloadJSON(e){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),s=document.createElement("a");s.href=a;const o=e.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();s.download=`tpl_${o}_${e.id}.json`,s.click(),URL.revokeObjectURL(a)},_handleImport(e){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=async s=>{try{const o=JSON.parse(s.target.result);if(!o.title||!Array.isArray(o.elements))throw new Error("Plantilla inválida");o.id=`tpl_${Date.now()}`,o.title=`${o.title} (Importada)`,o.updatedAt=new Date().toISOString(),await z.saveTemplate(o),u.toast("Plantilla importada correctamente.","success"),this.render()}catch(o){u.toast("Error al importar: "+o.message,"danger")}e.target.value=""},a.readAsText(t)}},$e={dragSrcEl:null,init(e,t=null,a=null){e.setAttribute("draggable","false"),e.addEventListener("mousedown",s=>{if(t){const o=s.target.closest(t);e.setAttribute("draggable",o?"true":"false")}else e.setAttribute("draggable","true")}),e.addEventListener("mouseup",()=>{e.setAttribute("draggable","false")}),e.addEventListener("dragstart",s=>this._handleDragStart(s,e)),e.addEventListener("dragend",s=>this._handleDragEnd(s,e)),e.addEventListener("dragover",s=>this._handleDragOver(s,e)),e.addEventListener("dragenter",s=>this._handleDragEnter(s,e)),e.addEventListener("dragleave",s=>this._handleDragLeave(s,e)),e.addEventListener("drop",s=>this._handleDrop(s,e,a))},_handleDragStart(e,t){if(t.getAttribute("draggable")==="false"){e.preventDefault();return}this.dragSrcEl=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",""),t.classList.add("opacity-50","border-primary")},_handleDragEnd(e,t){t.classList.remove("opacity-50","border-primary"),t.setAttribute("draggable","false"),this._cleanStyles(t.parentElement)},_handleDragOver(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1},_handleDragEnter(e,t){this.dragSrcEl!==t&&t.classList.add("border-top-primary-3")},_handleDragLeave(e,t){t.classList.remove("border-top-primary-3")},_handleDrop(e,t,a){if(e.stopPropagation&&e.stopPropagation(),t.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==t&&this.dragSrcEl.parentNode===t.parentNode){const s=t.parentNode,o=t.getBoundingClientRect(),i=e.clientY-o.top,n=t.clientHeight/2;i>n?s.insertBefore(this.dragSrcEl,t.nextSibling):s.insertBefore(this.dragSrcEl,t),a&&a()}return!1},_cleanStyles(e){e&&Array.from(e.children).forEach(t=>{t.classList.remove("bg-light","border-top-primary-3")})}},me=/\b(?:doc|row)\.(?:getValue|setValue|setStyle|setOptions|api)\(\s*['"]([^'"]+)['"]/g;function pe(e,t){if(!e)return!1;me.lastIndex=0;let a;for(;(a=me.exec(e))!==null;)if(a[1]===t)return!0;return!1}function ge(e,t,a,s){const o=`${e||""} ${t||""} ${a||""}`;return ie(o).includes(s)}function Ve(e){return(e||"").toLowerCase().replace("setting-","")||"otro"}function he(e){const t=[],a=new Set;return e&&(document.querySelectorAll("[id]").forEach(s=>{if(s.id===e||a.has(s.id)||!s.tagName||!s.tagName.startsWith("SETTING-")||typeof s.getAttribute!="function")return;const o=s.getAttribute("title")||s.id,i=s.getAttribute("data-original-type")||s.tagName.toLowerCase().replace("setting-","");if(s.tagName==="SETTING-SCRIPT"){a.add(s.id),pe(s.getAttribute("script-code"),e)&&t.push({id:s.id,title:o,typeKey:i,via:"script"});return}if(s.tagName==="SETTING-API"){a.add(s.id),ge(s.getAttribute("endpoint"),s.getAttribute("headers"),s.getAttribute("request-body"),e)&&t.push({id:s.id,title:o,typeKey:i,via:"api"});return}if(s.hasAttribute("formula")){a.add(s.id);const n=s.getAttribute("formula")||"";ce(n)&&ie(n).includes(e)&&t.push({id:s.id,title:o,typeKey:i,via:"formula"})}}),document.querySelectorAll(k.table).forEach(s=>{if(typeof s.getData!="function")return;(s.getData().columns||[]).forEach(i=>{if(!i.id||i.id===e||a.has(i.id))return;a.add(i.id);const n=i.title||i.id,l=Ve(i.tag);if(Re(i)){pe(i.scriptCode,e)&&t.push({id:i.id,title:n,typeKey:l,via:"script"});return}if(Pe(i)){ge(i.endpoint,i.headers,i.requestBody,e)&&t.push({id:i.id,title:n,typeKey:l,via:"api"});return}ce(i.formula)&&ie(i.formula).includes(e)&&t.push({id:i.id,title:n,typeKey:l,via:"formula"})})})),t}const Ne={formula:"en su Fórmula",script:"en su Script",api:"en su configuración de API"};function be(e){const t=e.map(a=>`<li>${(H[a.typeKey]||{}).icon||"🔹"} <strong>${a.title}</strong> <code>${a.id}</code> — ${Ne[a.via]||a.via}</li>`).join("");return`<p class="mb-2">Este campo está siendo usado por ${e.length===1?"otro componente":"otros componentes"}:</p><ul class="mb-2">${t}</ul><p class="mb-0 small text-muted">Si lo eliminas, esas referencias quedan rotas — no se actualizan ni se avisan de nuevo más adelante.</p>`}function Le(){return`═══════════════════════════════════════════════════════════════════════
  HERRAMIENTAS QUE TENÉS DISPONIBLES
═══════════════════════════════════════════════════════════════════════

Contás con cuatro categorías de herramientas para construir la plantilla:

── 1. COMPONENTES VISUALES Y LÓGICOS ────────────────────────────────────────────
Cada componente se define como un objeto en el arreglo JSON con
"tag", "id", "title" y atributos específicos. Reglas de I/O
(qué getValue devuelve, qué setValue espera) según su tipo:

⚠️ EL "tag" SIEMPRE LLEVA EL PREFIJO "setting-" (ej. "setting-string",
"setting-table", "setting-script" — nunca "string", "table", "script"
sueltos). Es una regla sin excepción, para TODOS los tipos y también
para el "tag" de cada columna dentro de un setting-table. Un tag sin
el prefijo hace que el campo quede mudo (sin datos, sin lógica, sin
verse) porque el motor no lo reconoce como el componente real.

  setting-string     → Texto Corto / Teléfono. I/O: String (texto plano).
  setting-text       → Texto Largo. I/O: String (plano con '
' o HTML si
                       richText). Si richText:true, admite HTML enriquecido.
  setting-email      → Correo Electrónico. I/O: String (correo válido).
  setting-password   → Contraseña. I/O: String. NUNCA exponer en otro campo.
  setting-number     → Número Decimal. I/O: Number puro, NO string.
  setting-currency   → Moneda. I/O: Number puro, sin símbolo.
  setting-percentage → Porcentaje. I/O: Number puro (15.5 = 15.5%).
  setting-date       → Fecha. I/O: String formato 'YYYY-MM-DD'.
  setting-time       → Hora. I/O: String formato 24h 'HH:mm'.
  setting-select     → Lista Desplegable. I/O: String (valor exacto de la
                       lista configurada; en modo Pares, valor interno).
                       NUNCA inventar valores fuera de la lista.
  setting-boolean    → Casilla / Switch. I/O: Boolean (true/false).
  setting-url        → Enlace URL. I/O: JSON String. JSON.stringify({text,url}).
  setting-image      → Imagen. I/O: JSON String. JSON.stringify({text,url}).
  setting-audio      → Audio. I/O: JSON String. JSON.stringify({text,url}).
  setting-video      → Video. I/O: JSON String. JSON.stringify({text,url}).
  setting-table      → Tabla Dinámica. I/O: Array of Objects. Cada clave
                       es el ID de columna. Ej: [{cantidad:2, precio:10}].
                       Cada columna también lleva su "tag" con el
                       prefijo "setting-" (ej. "setting-currency").
  setting-chart      → Gráfico. I/O: JSON String. JSON.stringify({labels,
                       data, type?}). type: bar|line|area|pie|doughnut|
                       radar|polarArea. Default: 'bar'.
  setting-html       → Contenido HTML Dinámico. I/O: String HTML. Un script
                       puede inyectar marcado visual. NO para cálculos.
  setting-script     → Script Lógico (JavaScript). I/O: Código JS puro.
                       NO usar etiquetas \`\`\`javascript.
  setting-api        → Conector API (headless). Stateless. Expone
                       doc.api('id') → { execute(payload) }.
  setting-section    → Sección (separador visual). NO almacena datos.
  setting-subsection → Subsección (separador visual). NO almacena datos.

── 2. SISTEMA DE DOCUMENTOS (doc.system) ────────────────────────────────────────────────
Disponible dentro de scripts. Da acceso directo al ecosistema de
documentos del usuario — sin código del otro lado:

  await doc.system.templates()                   → [{id, title, grupo, encrypted, updatedAt}]
  await doc.system.templates({grupo: "FMC"})    → solo las del grupo "FMC"
  await doc.system.templates({grupo: ""})       → solo las independientes (sin grupo)
  await doc.system.template(tplId)              → plantilla completa | null
  await doc.system.documents({tplId, search})   → [{id, title, templateId, ...}]
  await doc.system.document(docId)              → documento completo | null
  await doc.system.documentExists(docId)        → true | false
  await doc.system.getValue(docId, fieldId)    → valor | filas[] | undefined
  await doc.system.setValue(docId, fieldId, v)  → void (guarda de inmediato)
  await doc.system.createDocument(tplId, meta)  → doc creado ({id, title, ...})
  await doc.system.deleteDocument(docId)        → void

Configuración (acceso a otros documentos): cuando una plantilla necesite doc.system contra documentos externos, agregá al final una sección "Configuración" con "hideView": true, "hidePrint": true y "hideWhatsapp": true (en la sección y en TODOS sus campos) para que solo se vea al editar. Ahí el usuario elige en vivo la(s) plantilla(s)/documento(s) a usar; el script los lee de ese valor, NUNCA de un título/id hardcodeado en el JSON (se rompe apenas el usuario cambie o duplique el documento). Si un script corre sin esos campos completos, avisale al usuario que debe completarlos antes de seguir. Solo los documentos así seleccionados son accesibles desde los scripts.

Diccionario de Datos vivo: al confirmar el inventario final (Paso 3B) de cada plantilla, agregá/actualizá un bloque "📋 Diccionario de Datos" con los ids reales de plantilla/tabla/columnas que otras plantillas puedan necesitar (no el inventario completo, solo lo reutilizable). Repetilo al INICIO de cada respuesta siguiente mientras trabajes plantillas relacionadas en esta conversación, y consultalo ahí — nunca de memoria — antes de escribir código que use doc.system.

Protección: NO permite setValue en el documento que ejecuta el
script (usar doc.setValue para eso). Seguridad: Firestore scopea
por userId; cifrado/descifrado transparente.

── 3. API DE CONTEXTO (doc / row) ────────────────────────────────────────────────
Dentro de un script (setting-script), el código corre como cuerpo
de una función async con doc y row inyectados:

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
  Operadores: + - * / & = <> < > <= >=
  Funciones:
    Lógica:  SI(condicion,si_verdadero,si_falso) · SI.ERROR · Y · O · NO
    Matem:   SUMA · PROMEDIO · CONTAR · MAX · MIN · REDONDEAR(num,dec)
    Texto:   CONCATENAR · MAYUSCULAS · MINUSCULAS · LARGO ·
             IZQUIERDA(t,n) · DERECHA(t,n) · EXTRAE(t,inicio,n)
    Fecha:   HOY() · AÑO(f) · MES(f) · DIA(f) · DIAS(fin,inicio)
  Disponible en: setting-string, setting-email, setting-password,
    setting-number, setting-currency, setting-percentage,
    setting-date, setting-time (y columnas de esos tipos en tablas).
  NO disponible en: setting-text, setting-select, setting-boolean,
    setting-table, setting-chart, setting-script, setting-url,
    setting-html.
  Un campo con formula queda de solo lectura automáticamente.
  NUNCA combinar formula + script que escriba el MISMO campo.

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
     → marcado como alimentado por script.
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
${Object.entries(H).filter(([,t])=>t.aiPrompt).map(([t,a])=>`- setting-${t}: ${a.aiPrompt}`).join(`
`)}`}function xe(){const e=["REFERENCIA COMPLETA DE COMPONENTES — DocEngine","Generada automáticamente desde el registro vivo de componentes (nunca a mano),","para que la IA use siempre los nombres, tipos y valores EXACTOS de cada","atributo — sobre todo los que tienen una lista fija de opciones (ej. el",'"trigger" de setting-script: reactive/manual/auto/library). Ante cualquier',"duda de qué valor poner en un atributo, esta referencia manda por sobre","cualquier suposición o convención de otras plataformas.",""];return Object.entries(H).forEach(([t,a])=>{var o;e.push(`### setting-${t} — ${a.longLabel||t}`),a.aiPrompt&&e.push(`Resumen I/O: ${a.aiPrompt}`),a.aiPromptLong&&(e.push(""),e.push(a.aiPromptLong));const s=(((o=a.settings)==null?void 0:o.custom)||[]).filter(i=>i.type!=="raw");s.length>0&&(e.push(""),e.push("Atributos configurables (settings.custom):"),s.forEach(i=>{let n=`  - "${i.id}" (${i.type})`;if(i.caption&&(n+=`: ${i.caption}`),i.default!==void 0&&i.default!==""&&(n+=` [default: ${JSON.stringify(i.default)}]`),Array.isArray(i.options)&&i.options.length>0){const l=i.options.map(d=>d&&typeof d=="object"?d.value??d.label:d).join(", ");n+=` — opciones: ${l}`}e.push(n),i.help&&e.push(`    ${i.help}`)})),e.push("")}),e.join(`
`)}const K={handlers:{},currentId:null,init(e){this.handlers=e,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.grupoInput=document.getElementById("tpl-grupo"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list"),this.aiIdeaInput=document.getElementById("ai-user-idea"),this.aiIdeaLabel=document.getElementById("ai-idea-label"),this.aiModeChoice=document.getElementById("ai-mode-choice"),this.aiModeExistingRadio=document.getElementById("ai-mode-existing"),this.aiJsonInput=document.getElementById("ai-json-response"),this.btnGeneratePrompt=document.getElementById("btn-generate-prompt"),this.btnBuildFromAi=document.getElementById("btn-build-from-ai"),this.btnDownloadReference=document.getElementById("btn-download-full-reference"),this.aiStep1=document.getElementById("ai-step-1"),this.aiStep3=document.getElementById("ai-step-3"),this.aiStep1Instructions=document.getElementById("ai-step-1-instructions")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.titleInput.oninput=()=>this.titleInput.classList.remove("is-invalid"),this.catInput&&(this.catInput.onchange=t=>{const a=t.target.options[t.target.selectedIndex].dataset.icon;this.iconInput.value=a}),this.grupoInput&&(this.grupoInput.oninput=()=>Z.setCurrentGrupo(this.grupoInput.value.trim().slice(0,15))),this.btnGeneratePrompt&&(this.btnGeneratePrompt.onclick=()=>this._copyAiPrompt()),this.btnBuildFromAi&&(this.btnBuildFromAi.onclick=()=>this._buildFromAi()),this.btnDownloadReference&&(this.btnDownloadReference.onclick=()=>this._downloadComponentReference());const e=document.getElementById("tab-btn-ai");e&&e.addEventListener("shown.bs.tab",()=>this._updateAiStepLabels())},_updateAiStepLabels(){const e=this.canvas.querySelectorAll(".designer-item-wrapper").length>0;this.aiIdeaLabel&&(this.aiIdeaLabel.textContent=e?"¿Qué querés cambiar? (opcional — podés dejarlo vacío y pedírselo directo a la IA)":"¿Qué necesita que contenga la plantilla? *"),this.aiIdeaInput&&(this.aiIdeaInput.placeholder=e?"Ej: Agregale un campo de teléfono a la sección de datos del cliente...":"Ej: Necesito una plantilla de presupuesto de carpintería con datos del cliente, ítems con cantidad y precio, subtotal, IVA y total..."),this.aiModeChoice&&(this.aiModeChoice.style.display=e?"":"none"),this.aiStep1Instructions&&(this.aiStep1Instructions.innerHTML=`<i class="fa-solid fa-circle-info me-1 text-primary"></i>
           <strong>Prompt copiado.</strong> Pegalo en tu IA de confianza
           (ChatGPT, Gemini, Claude…) junto con el archivo de "Descargar
           Referencia" (adjuntalo, o pegá su contenido a continuación del
           prompt) — así la IA usa siempre el valor exacto de cada
           atributo en vez de adivinarlo. Cuando te devuelva el
           ${e?"<strong>JSON actualizado</strong>":"<strong>JSON completo de la plantilla</strong>"}, copialo y pegalo en el campo de abajo.`)},renderSidebar(){const e=document.getElementById("tpl-elements");if(!e)return;e.innerHTML=`
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
          ${Object.entries(H).filter(([,a])=>!a.hideInToolbox).map(([a,s])=>{const o=["dark","secondary","primary","success","danger","warning","info"],i=s.color||"secondary",n=o.includes(i)?"text-white":"text-dark";return`
              <button class="btn btn-light border shadow-sm d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-start element-add-btn flex-shrink-0" 
                      style="width: 180px;" 
                      data-key="${a}" 
                      data-label="${s.longLabel.toLowerCase()}">
                <span class="badge bg-${i} ${n} p-2 rounded-2 fs-6 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
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
    `,e.querySelectorAll(".element-add-btn").forEach(a=>{const s=a.dataset.key;a.onclick=()=>{const o=document.createElement(`setting-${s}`);this._addToCanvas(o)}});const t=document.querySelector("#sidebar-search-element");t&&(t.oninput=a=>{const s=a.target.value.toLowerCase().trim();e.querySelectorAll(".element-add-btn").forEach(o=>{(o.dataset.label||"").includes(s)?(o.classList.remove("d-none"),o.style.display="flex"):(o.classList.add("d-none"),o.style.display="none")})})},_addToCanvas(e){const t=document.createElement("div"),a=e.tagName.toLowerCase(),s=e.getAttribute("data-original-type")||a.replace("setting-",""),o=H[s]||{icon:"🔹",color:"secondary",longLabel:s},i=s==="table";t.className="designer-item-wrapper d-flex align-items-center mb-2 bg-white border rounded shadow-sm py-1 px-2 gap-2",t.setAttribute("data-component-type",s);const n=e.getAttribute("title")||"",l=["dark","secondary","primary","success","danger","warning","info"],d=o.color||"secondary",g=l.includes(d)?"text-white":"text-dark";t.innerHTML=`
 <!-- 1. Asa para arrastrar -->
      <div class="drag-handle text-muted cursor-grab px-1 flex-shrink-0" title="Mover componente">
        <i class="fa-solid fa-grip-vertical"></i>
      </div>

 <!-- 2. Indicador minimalista con contraste corregido (Bootstrap puro) -->
      <span class="badge bg-${d} ${g} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1" style="width: 140px;" title="${o.longLabel}">
        <span class="fs-6">${o.icon}</span>
        <span class="small text-truncate fw-semibold">${o.longLabel}</span>
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
        ${i?`
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
    `,t.querySelector("#comp-content").appendChild(e);const p=t.querySelector(".tpl-item-title-input");p.oninput=c=>{const h=c.target.value;e.setAttribute("title",h);const v=e.querySelector('input[data-prop="title"]');v&&(v.value=h,v.dispatchEvent(new Event("input",{bubbles:!0})))},t.querySelector(".btn-del-comp").onclick=async()=>{const c=e.id?he(e.id):[];c.length>0&&!await u.confirm("¿Eliminar este campo?",be(c))||(t.remove(),this._updateIndentation())},t.querySelector(".btn-settings-modal").onclick=()=>{const c=e.querySelector('button[data-bs-toggle="modal"], .settings-trigger, .card-header button, button');if(c)c.click();else if(typeof e.openModal=="function")e.openModal();else{const h=e.querySelector(".modal")||document.querySelector(`#modal-${e.id}`);h&&window.bootstrap&&(window.bootstrap.Modal.getOrCreateInstance(h)||new window.bootstrap.Modal(h)).show()}},i&&(t.querySelector(".btn-config-cols").onclick=()=>{const c=e.querySelector('#btn-config-columns, button[id*="column"], button[class*="column"], .btn-outline-primary');if(c)c.click();else{const h=e.querySelector(".card-header")||e.firstElementChild;h&&h.click()}}),e.addEventListener("visual-mutation",c=>{const h=c.detail.logicalKey,v=H[h];if(!v)return;t.setAttribute("data-component-type",h);const E=["dark","secondary","primary","success","danger","warning","info"],b=v.color||"secondary",x=E.includes(b)?"text-white":"text-dark",y=t.querySelector(".badge");y&&(y.className=`badge bg-${b} ${x} px-2 py-1 flex-shrink-0 d-flex align-items-center gap-1`,y.innerHTML=`<span class="fs-6">${v.icon}</span><span class="small text-truncate fw-semibold">${v.longLabel}</span>`)}),$e.init(t,".drag-handle"),this.canvas.appendChild(t),this._updateIndentation()},_updateIndentation(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper"));let t=!1;e.forEach(a=>{a.getAttribute("data-component-type")==="section"?(t=!0,a.classList.remove("ms-4","border-start","border-primary","border-3")):t?a.classList.add("ms-4","border-start","border-primary","border-3"):a.classList.remove("ms-4","border-start","border-primary","border-3")})},_hydrateElement(e){let t=e.tag.replace("setting-",""),a=e.tag;["string","email","password","text"].includes(t)?a=k.input:["section","subsection"].includes(t)?a=k.divider:["number","currency","percentage"].includes(t)?a=k.numeric:["date","time"].includes(t)?a=k.datetime:["image","audio","video"].includes(t)&&(a=k.media);const s=document.createElement(a);return s.setAttribute("data-original-type",t),s.setData&&s.setData(e),s},_appendElementsToCanvas(e){e.forEach(t=>{const a=this._hydrateElement(t);this._addToCanvas(a)})},async load(e){var a;let t=await f.getOne("tpl",e);t&&(this.currentId=t.id,this.titleInput.value=t.title,this.descInput.value=t.description||"",this.relatedDocsInput.value=t.relatedDocIds||"",this.catInput.value=t.category,this.grupoInput&&(this.grupoInput.value=t.grupo||""),this.iconInput.value=t.icon,this.encInput.checked=!!t.encrypted,Z.refresh(((a=this.grupoInput)==null?void 0:a.value)||""),this.canvas.innerHTML="",this._appendElementsToCanvas(t.elements),this.canvas.removeAttribute("data-template-has-docs"),f.getAll("doc").then(s=>{const o=s.some(i=>i.templateId===t.id);this.canvas.setAttribute("data-template-has-docs",o?"true":"false")}).catch(s=>console.warn("No se pudo verificar si la plantilla ya tiene documentos generados.",s)))},reset(){var e;this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.grupoInput&&(this.grupoInput.value=""),this.encInput.checked=!1,this.aiIdeaInput&&(this.aiIdeaInput.value=""),this.aiJsonInput&&(this.aiJsonInput.value=""),this._aiPromptCopied=!1,this._resetAiSteps(),Z.refresh(((e=this.grupoInput)==null?void 0:e.value)||""),this.canvas.setAttribute("data-template-has-docs","false")},_getCanvasElementsData(){return Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(e=>{var t;return(t=e.querySelector("#comp-content"))==null?void 0:t.firstElementChild}).filter(e=>e&&typeof e.getData=="function").map(e=>e.getData())},async save(){var o;const e=this.titleInput.value.trim();if(this.titleInput.classList.remove("is-invalid"),!e){this.titleInput.classList.add("is-invalid"),this.titleInput.removeAttribute("readonly"),this.titleInput.focus(),u.toast("Ponle un nombre a la plantilla antes de guardar.","danger");return}let t=this.currentId;if(!t){const i=U.generateSemanticBaseId("tpl",e,15);t=i;let n=2;const l=await z.loadTemplates();for(;l.some(d=>d.id===t);)t=`${i}${n}`,n++}const a={id:t,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,grupo:(((o=this.grupoInput)==null?void 0:o.value)||"").trim().slice(0,15),icon:this.iconInput.value,encrypted:this.encInput.checked,elements:this._getCanvasElementsData()};this.btnSave.disabled=!0;const s=this.btnSave.innerHTML;this.btnSave.innerHTML='<span class="spinner-border spinner-border-sm me-2" role="status"></span> Guardando...';try{await z.saveTemplate(a),u.toast("Plantilla guardada correctamente","success"),this.handlers.onSaveSuccess()}catch(i){u.toast("Error al guardar: "+i.message,"danger")}finally{this.btnSave.disabled=!1,this.btnSave.innerHTML=s}},_resetAiSteps(){this.aiStep3&&(this.aiStep3.style.display="none"),this.aiStep1Instructions&&(this.aiStep1Instructions.style.display="none")},async _copyAiPrompt(){var l;const e=this.titleInput.value.trim(),t=this.aiIdeaInput.value.trim(),a=this.canvas.querySelectorAll(".designer-item-wrapper").length>0;if(!e){this.titleInput.classList.add("is-invalid"),this.titleInput.removeAttribute("readonly"),this.titleInput.focus(),u.toast("Ponle un nombre a la plantilla (arriba) antes de generar el prompt.","danger");return}if(!a&&!t){u.toast("Describí qué componentes o campos debe contener la plantilla.","danger");return}const s=a&&((l=this.aiModeExistingRadio)==null?void 0:l.checked),o=a?s?this._buildAiCorrectionShortPromptText(e,t):this._buildAiCorrectionPromptText(e,t):this._buildAiSuperPromptText(e,t);if(await U.copyTextSmart(o,"Prompt de la Plantilla")==="modal")return;this._aiPromptCopied=!0,this.aiStep3&&(this.aiStep3.style.display=""),this.aiStep1Instructions&&(this.aiStep1Instructions.style.display="");const n=this.btnGeneratePrompt.innerHTML;this.btnGeneratePrompt.innerHTML='<i class="fa-solid fa-check d-block mb-1 fs-5"></i> ¡Copiado!',this.btnGeneratePrompt.classList.replace("btn-dark","btn-success"),setTimeout(()=>{document.body.contains(this.btnGeneratePrompt)&&(this.btnGeneratePrompt.innerHTML=n,this.btnGeneratePrompt.classList.replace("btn-success","btn-dark"))},3e3)},_buildHerramientasYReglasBlock(){return Le()},_buildAiSuperPromptText(e,t){return`Actúa como un Arquitecto de Datos y Software experto en creación de formularios dinámicos.

═══════════════════════════════════════════════════════════════════════
  OBJETO DE ESTA INTERACCIÓN
═══════════════════════════════════════════════════════════════════════
Vamos a diseñar en conjunto la estructura completa de una plantilla
de documentos llamada "${e}". El resultado final de esta
interacción será un ARREGLO JSON que represente la estructura del
documento: cada objeto del arreglo es un componente visual o lógico
(campo, sección, tabla, script, etc.) con sus atributos de
configuración. Ese JSON se importa directamente en el Diseñador de
Plantillas de DocEngine para generar la plantilla lista para usar.

📎 REFERENCIA TÉCNICA ADJUNTA (leela ANTES de escribir cualquier JSON):
junto con este mensaje te adjunto (o pegan a continuación) un archivo
"doc-engine-referencia-componentes.txt" con la ficha técnica EXACTA de
cada tipo de componente disponible — generada directo del código, nunca
escrita a mano — incluyendo, para cada atributo tipo lista (como el
"trigger" de setting-script), TODAS sus opciones válidas reales. Es la
única fuente confiable para esos valores: no los inventes ni los
adivines por analogía con otras plataformas o frameworks que conozcas,
aunque el nombre del atributo te resulte familiar. Ante cualquier duda
de qué valor exacto poner en un atributo, priorizá siempre esta
referencia por sobre el resumen corto que aparece más abajo en este
mismo prompt.

Estilo de comunicación: la mayoría de quienes usan este Asistente no conoce la arquitectura interna de DocEngine — no lo asumas. En Fases 1-2, hablale en términos FUNCIONALES y de negocio (qué pasa y por qué le conviene), nunca en jerga técnica (métodos, ids, mecanismos internos). Ej.: en vez de "agregá un select porque doc.system no puede descubrir el documento", decí "como esta plantilla necesita tu Catálogo, elegís cuál usar y el sistema ya sabe dónde buscar". El detalle técnico va DENTRO del JSON — el usuario solo lo copia y pega.

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

FASE 3 — GENERACIÓN DEL JSON
  SOLO cuando el usuario apruebe la arquitectura de la Fase 2 (ej: "Sí,
  generalo", "Perfecto", "Adelante"):
  • Entregá el arreglo JSON completo y válido, preferiblemente en un
    bloque de código.
  • Para CADA atributo que configures (especialmente los de lista
    fija, como "trigger" en setting-script, "type" en setting-chart, o
    cualquier otro "select" dentro de settings.custom), verificá el
    valor exacto en la referencia técnica adjunta antes de escribirlo.
    Un valor inventado no tira error — el componente simplemente
    queda mudo (sin lógica, sin datos) sin que nadie lo note hasta
    probarlo.
  • No agregues explicaciones después del bloque JSON — la Fase 2 ya
    cumplió ese propósito.

${this._buildHerramientasYReglasBlock()}

EL REQUERIMIENTO DEL USUARIO ES:
"${t}"`},_buildAiCorrectionPromptText(e,t){const a=JSON.stringify(this._getCanvasElementsData(),null,2),s=t?`El usuario ya te dijo qué quiere cambiar: "${t}"`:"Esperá a que el usuario te diga qué quiere cambiar.";return`Actuá como un Arquitecto de Datos y Software experto en creación de formularios dinámicos.

═════════════════════════════════════════════════════════════
  OBJETO DE ESTA INTERACCIÓN — MODO CORRECCIÓN
═════════════════════════════════════════════════════════════
La plantilla "${e}" ya fue diseñada. Este es su estado actual, tal
cual está guardado (arreglo JSON de componentes):

\`\`\`json
${a}
\`\`\`

Fase 1 y 2 (entender el requerimiento, proponer arquitectura) ya están
resueltas — esto es una corrección puntual, no un diseño desde cero.
${s} Si el pedido es ambiguo o afecta una fórmula/script
existente, preguntá antes de escribir código.

📎 Si el cambio agrega un componente nuevo (o toca un atributo de lista
fija, como "trigger" en setting-script), junto con este mensaje te
adjunto (o pegan a continuación) "doc-engine-referencia-componentes.txt"
con la ficha técnica exacta de cada tipo — verificá ahí el valor real
antes de inventarlo o de adivinarlo por analogía con otro framework.

Cuando el cambio esté claro, devolvé el arreglo JSON COMPLETO
actualizado (todos los componentes, no solo los que cambiaron).
Conservá los ids de los campos que no tocaste, para que la plantilla
actualizada reemplace correctamente a la anterior en el Diseñador.

Estilo de comunicación: la mayoría de quienes usan este Asistente no
conoce la arquitectura interna de DocEngine — no lo asumas. Hablale en
términos FUNCIONALES y de negocio, nunca en jerga técnica. El detalle
técnico va dentro del JSON — el usuario solo lo copia y pega.

${this._buildHerramientasYReglasBlock()}`},_buildAiCorrectionShortPromptText(e,t){const a=t?`Quiero hacer este cambio: "${t}"`:"Quiero hacer un cambio puntual — te cuento cuál a continuación.";return`Seguimos trabajando sobre la plantilla "${e}". ${a}

Si algo no está claro, preguntame antes de escribir nada. Si agregás un componente nuevo o tocás un atributo de lista fija (como "trigger"), verificá el valor exacto en el archivo de referencia de componentes que te compartí antes, no lo inventes. Cuando el cambio esté claro, respondé con el arreglo JSON COMPLETO y actualizado de la plantilla (todos los componentes, no solo los que cambiaste), conservando los ids de los campos que no tocaste.`},_downloadComponentReference(){U.downloadTextFile("doc-engine-referencia-componentes.txt",xe()),u.toast("Referencia de componentes descargada.","success")},async _buildFromAi(){const e=this.aiJsonInput.value.trim();if(!e){u.toast("Pega el JSON que te devolvió la IA.","danger");return}let t;try{const i=e.replace(/```json/gi,"").replace(/```/g,"").trim(),n=i.indexOf("["),l=i.lastIndexOf("]"),d=n!==-1&&l!==-1&&l>n?i.slice(n,l+1):i;if(t=JSON.parse(d),!Array.isArray(t))throw new Error("El resultado no es un Array (Arreglo) válido.")}catch(i){u.toast("Error de lectura JSON: asegurate de pegar la respuesta completa de la IA (incluida la lista en lenguaje natural, si la trae). "+i.message,"danger");return}const a=this.canvas.querySelectorAll(".designer-item-wrapper").length>0;let s="append";if(a&&(s=await u.chooseAction("¿Cómo importamos este JSON?","El lienzo ya tiene componentes. Podés reemplazar toda la plantilla por este JSON, o agregar estos componentes al final.",[{key:"replace",label:"Reemplazar todo",class:"btn-danger"},{key:"append",label:"Agregar al final",class:"btn-secondary"}]),!s))return;if(s==="replace"){const i=this._getCanvasElementsData().map(d=>d.id).filter(Boolean),n=new Set(t.map(d=>d.id).filter(Boolean)),l=i.filter(d=>!n.has(d)).map(d=>({id:d,refs:he(d)})).filter(d=>d.refs.length>0);if(l.length>0){const d=l.map(m=>`<p class="mb-1">El campo <code>${m.id}</code> desaparece y está siendo usado:</p>`+be(m.refs)).join("");if(!await u.confirm("¿Reemplazar la plantilla?",d))return}this.canvas.innerHTML=""}if(this._appendElementsToCanvas(t),this.aiJsonInput.value="",this.descInput&&!this.descInput.value.trim()&&this.aiIdeaInput){const i=this.aiIdeaInput.value.trim();i&&(this.descInput.value=i)}u.toast(s==="replace"?`Plantilla reemplazada: ${t.length} elemento(s).`:`${t.length} elemento(s) agregado(s) a la Estructura del Documento`,"success");const o=document.getElementById("tab-btn-structure");o&&window.bootstrap&&window.bootstrap.Tab.getOrCreateInstance(o).show()},getAvailableVariables(e,t=null){const a=[];if(this.canvas.querySelectorAll(le).forEach(o=>{if(!o.closest(k.table)&&typeof o.getData=="function"){const i=o.getData();a.push({id:i.id,title:i.title||"(Sin Título)",type:"general"})}}),e==="table"&&t){const o=document.getElementById(t);if(o&&typeof o.getData=="function"){const i=o.getData();i.columns&&i.columns.forEach(n=>{a.push({id:n.id,title:`[Col] ${n.title}`,type:"column"})})}}return e==="general"&&this.canvas.querySelectorAll(k.table).forEach(i=>{const n=i.getData();n.columns&&n.columns.forEach(l=>{l.total&&a.push({id:`TOTAL_${i.id}_${l.id}`,title:`SUM: ${n.title} > ${l.title}`,type:"total"})})}),a},getApiVariables(e,t=null){const a=[];if(this.canvas.querySelectorAll(le).forEach(o=>{if(!o.closest(k.table)&&typeof o.getData=="function"){const i=o.getData();a.push({id:i.id,title:i.title||"(Sin Título)",type:"general"})}}),e==="table"&&t){const o=document.getElementById(t);if(o&&typeof o.getData=="function"){const i=o.getData();i.columns&&i.columns.forEach(n=>{a.push({id:n.id,title:`[Columna] ${n.title}`,type:"column"})})}}return a}};function Ue(e){return`Actuá como un Arquitecto de Datos y Software experto en creación de formularios dinámicos.

═════════════════════════════════════════════════════════════
  OBJETO DE ESTA INTERACCIÓN — MODO CREACIÓN DE GRUPO
═════════════════════════════════════════════════════════════
No estamos parados dentro de una plantilla existente: vamos a diseñar
desde cero UNA plantilla, o un CONJUNTO de varias plantillas asociadas
que se relacionan entre sí (por ejemplo, una que alimenta datos que
otra usa). El resultado final van a ser uno o más arreglos JSON — uno
por plantilla — que se importan al Diseñador de Plantillas de
DocEngine, cada uno para crear una plantilla nueva.

📎 REFERENCIA TÉCNICA ADJUNTA (leela ANTES de escribir cualquier JSON):
junto con este mensaje te adjunto (o pegan a continuación) un archivo
"doc-engine-referencia-componentes.txt" con la ficha técnica EXACTA de
cada tipo de componente disponible — generada directo del código, nunca
escrita a mano — incluyendo, para cada atributo tipo lista (como el
"trigger" de setting-script), TODAS sus opciones válidas reales. Es la
única fuente confiable para esos valores: no los inventes ni los
adivines por analogía con otras plataformas o frameworks que conozcas,
aunque el nombre del atributo te resulte familiar (ej. "trigger" acá NO
son los mismos valores que en un framework de eventos genérico). Ante
cualquier duda de qué valor exacto poner en un atributo, priorizá
siempre esta referencia por sobre el resumen corto que aparece más
abajo en este mismo prompt.

Estilo de comunicación: la mayoría de quienes usan este Asistente no
conoce la arquitectura interna de DocEngine — no lo asumas. Hablale en
términos FUNCIONALES y de negocio (qué pasa y por qué le conviene),
nunca en jerga técnica (métodos, ids, mecanismos internos). El detalle
técnico va DENTRO del JSON — el usuario solo lo copia y pega.

═════════════════════════════════════════════════════════════
  CÓMO VAMOS A TRABAJAR — LAS FASES
═════════════════════════════════════════════════════════════

FASE 1 — ENTENDER EL REQUERIMIENTO
  • Analizá la descripción del usuario.
  • Determiná si el pedido implica UNA sola plantilla o VARIAS
    plantillas asociadas entre sí.
  • Hacé preguntas de aclaración si algo es ambiguo — en particular,
    si no queda claro qué dato de una plantilla necesita otra.
  • NO generés JSON todavía.

FASE 2 — PROPONER LA ARQUITECTURA DEL CONJUNTO
  • Listá, en lenguaje natural, cada plantilla que vas a crear: su
    nombre, su propósito, y qué datos comparte con las demás (si
    aplica).
  • Definí el ORDEN de entrega: empezá siempre por la plantilla más
    independiente (la que las demás van a necesitar) y terminá por la
    que más depende de las otras — así cada una puede referenciar, por
    ID, a una que ya fue entregada antes.
  • Si el conjunto tiene dos o más plantillas genuinamente
    relacionadas entre sí, proponé un GRUPO: un acrónimo corto (máximo
    15 caracteres, ej. "FMC") que las va a identificar como conjunto
    en el Gestor de Plantillas. Si es una sola plantilla, o varias sin
    relación real entre sí, dejá el grupo vacío — no lo inventes.
  • Esperá la aprobación del usuario. Ajustá las veces que sea
    necesario.
  • NO generés JSON todavía.

FASE 3 — ENTREGA ITERATIVA (una plantilla por respuesta)
  SOLO cuando el usuario apruebe la arquitectura de la Fase 2:
  • Entregá UNA plantilla por respuesta, en el orden que definiste en
    la Fase 2, hasta la última del conjunto.
  • Cada respuesta es UN objeto JSON (no un arreglo suelto) con esta
    forma exacta:

    {
      "indice": 1,
      "totalPlantillas": 3,
      "titulo": "Nombre de esta plantilla",
      "grupo": "FMC",
      "componentes": [ ...arreglo de componentes de ESTA plantilla,
                       mismas reglas de esquema de siempre... ]
    }

    - "indice": número de esta plantilla dentro del conjunto (1, 2,
      3...), según el orden acordado en Fase 2.
    - "totalPlantillas": cuántas plantillas tiene el conjunto en
      total — así el usuario (y el sistema) saben cuándo terminaste.
      Si el pedido es de una sola plantilla, "indice":1 y
      "totalPlantillas":1.
    - "titulo": el nombre de ESTA plantilla únicamente.
    - "grupo": el acrónimo acordado en Fase 2, idéntico en las N
      plantillas del conjunto. Si no hay grupo, dejalo como "" (string
      vacío) — nunca omitas la clave.
    - "componentes": el arreglo de componentes de ESTA plantilla,
      con las mismas reglas de esquema de siempre (ver más abajo).
  • Para CADA atributo que configures (especialmente los de lista fija,
    como "trigger" en setting-script, "type" en setting-chart, o
    cualquier otro "select" dentro de settings.custom), verificá el
    valor exacto en la referencia técnica adjunta antes de escribirlo.
    Un valor inventado no tira error — el componente simplemente queda
    mudo (sin lógica, sin datos) sin que nadie lo note hasta probarlo.
  • Antes de entregar la plantilla número 2 en adelante, repetí al
    inicio de tu respuesta el bloque "📋 Diccionario de Datos" con los
    ids reales (de plantilla/tabla/columna) que ya entregaste y que
    esta plantilla o las siguientes puedan necesitar — tomalos
    siempre de lo que ya generaste en esta conversación, nunca de
    memoria ni parafraseados.
  • Las referencias entre plantillas del conjunto (doc.system, sección
    "Configuración") van SIEMPRE por ID, nunca por título — el título
    lo puede cambiar el usuario después (es, de hecho, cómo reordena
    el grupo en el listado), el ID no.
  • Acceso a documentos que NO son parte de este conjunto: solo si el
    usuario lo pidió explícitamente en su requerimiento (ej. "usá mi
    plantilla de datos personales"). No agregues accesos a documentos
    externos que el usuario no mencionó.
  • Esperá confirmación del usuario ("dale", "seguí", "siguiente")
    antes de entregar la próxima plantilla del conjunto.
  • No agregues explicaciones después de cada bloque JSON — ya se
    explicó todo en la Fase 2.

${Le()}

EL REQUERIMIENTO DEL USUARIO ES:
"${e}"`}const fe={handlers:{},_created:[],_totalPlantillas:null,init(e){this.handlers=e;const t=document.getElementById("designer-group-view");t&&(t.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.bindEvents())},getBaseHTML(){return`
      <div class="d-flex justify-content-between align-items-center mb-4">
        <button id="dga-btn-back" class="btn btn-outline-secondary">
          <i class="fa-solid fa-arrow-left"></i> Volver al Gestor
        </button>
      </div>

      <div class="card shadow-sm mb-4 border-primary border-opacity-25">
        <div class="card-header text-bg-primary fw-bold">
          <i class="fa-solid fa-wand-magic-sparkles me-2"></i>
          Asistente IA — Crear Plantilla o Grupo de Plantillas
        </div>
        <div class="card-body">
          <p class="text-muted small mb-0">
            A diferencia del Asistente IA de "Configuración Avanzada" (que
            corrige la plantilla que ya tenés abierta), esta pantalla crea
            plantillas nuevas desde cero — una suelta, o varias asociadas
            entre sí que comparten datos.
          </p>
        </div>
      </div>

      <!-- ═══ PASO 1: Requerimiento ═══ -->
      <div id="dga-step-1" class="card shadow-sm mb-4">
        <div class="card-header bg-body-secondary fw-bold text-body">
          <i class="fa-solid fa-1 me-1"></i> ¿Qué necesitás?
        </div>
        <div class="card-body">
          <textarea
            id="dga-idea"
            class="form-control mb-3"
            rows="4"
            placeholder="Ej: Necesito dos plantillas para mi negocio de carpintería: un Catálogo de Productos, y un Presupuesto que use ese catálogo para armar cotizaciones..."
          ></textarea>
          <button id="dga-btn-copy-prompt" class="btn btn-dark">
            <i class="fa-solid fa-copy me-2"></i> Copiar Prompt
          </button>
          <button id="dga-btn-download-reference" class="btn btn-outline-dark ms-2" title="Ficha técnica exacta de todos los componentes — evita que la IA invente valores de atributos">
            <i class="fa-solid fa-file-arrow-down me-2"></i> Descargar Referencia
          </button>
          <div id="dga-step-1-instructions" class="small text-muted mt-2" style="display: none;">
            <i class="fa-solid fa-circle-info me-1 text-primary"></i>
            <strong>Prompt copiado.</strong> Pegalo en tu IA de confianza
            (ChatGPT, Gemini, Claude…) junto con el archivo de
            "Descargar Referencia" (adjuntalo, o pegá su contenido a
            continuación del prompt) — así la IA usa siempre el valor
            exacto de cada atributo en vez de adivinarlo. Conversá con
            ella hasta que apruebes la arquitectura que proponga. Cuando
            empiece a entregarte plantillas, copiá cada una (una por
            vez) y pegala abajo.
          </div>
        </div>
      </div>

      <!-- ═══ PASO 2: Entrega iterativa ═══ -->
      <div id="dga-step-2" class="card shadow-sm mb-4" style="display: none;">
        <div class="card-header bg-body-secondary fw-bold text-body">
          <i class="fa-solid fa-2 me-1"></i> Pegá cada plantilla que te devuelva la IA
        </div>
        <div class="card-body">
          <textarea
            id="dga-json-response"
            class="form-control font-monospace small bg-dark text-light border-0 p-3 mb-3"
            rows="6"
            placeholder='{ "indice": 1, "totalPlantillas": 2, "titulo": "...", "grupo": "...", "componentes": [...] }'
          ></textarea>
          <button id="dga-btn-create-tpl" class="btn btn-success fw-bold">
            <i class="fa-solid fa-hammer me-2"></i> Crear esta Plantilla
          </button>
          <div class="small text-muted mt-2">
            Repetí esto por cada plantilla que la IA te vaya entregando —
            el progreso queda abajo.
          </div>
        </div>
      </div>

      <!-- Progreso -->
      <div id="dga-progress-wrap" class="card shadow-sm mb-4" style="display: none;">
        <div class="card-header bg-body-secondary fw-bold text-body">
          Plantillas creadas en este conjunto
        </div>
        <ul id="dga-progress-list" class="list-group list-group-flush"></ul>
      </div>

      <!-- ═══ Conjunto completo ═══ -->
      <!-- OJO: el toggle show/hide de este bloque es vía style.display en
           el DIV EXTERNO (sin clases de layout de Bootstrap), porque las
           utilidades "d-flex"/"d-none" de Bootstrap usan !important y
           pisarían un style="display:none" puesto directamente sobre un
           elemento que también tenga "d-flex". El "alert" interno se
           queda siempre flex/visible; lo que se oculta es el wrapper. -->
      <div id="dga-step-done" style="display: none;">
        <div class="alert alert-success d-flex justify-content-between align-items-center mb-0">
          <span><i class="fa-solid fa-circle-check me-2"></i> Conjunto completo.</span>
          <button id="dga-btn-finish" class="btn btn-success">
            Ir al Gestor de Plantillas
          </button>
        </div>
      </div>
    `},cacheDOM(){this.ideaInput=document.getElementById("dga-idea"),this.btnCopyPrompt=document.getElementById("dga-btn-copy-prompt"),this.btnDownloadReference=document.getElementById("dga-btn-download-reference"),this.step1Instructions=document.getElementById("dga-step-1-instructions"),this.step2=document.getElementById("dga-step-2"),this.jsonInput=document.getElementById("dga-json-response"),this.btnCreateTemplate=document.getElementById("dga-btn-create-tpl"),this.progressWrap=document.getElementById("dga-progress-wrap"),this.progressList=document.getElementById("dga-progress-list"),this.stepDone=document.getElementById("dga-step-done"),this.btnFinish=document.getElementById("dga-btn-finish"),this.btnBack=document.getElementById("dga-btn-back")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnCopyPrompt.onclick=()=>this._copyPrompt(),this.btnDownloadReference.onclick=()=>this._downloadComponentReference(),this.btnCreateTemplate.onclick=()=>this._createFromPastedJson(),this.btnFinish.onclick=()=>this.handlers.onFinish()},_downloadComponentReference(){U.downloadTextFile("doc-engine-referencia-componentes.txt",xe()),u.toast("Referencia de componentes descargada.","success")},reset(){this._created=[],this._totalPlantillas=null,this.ideaInput&&(this.ideaInput.value=""),this.jsonInput&&(this.jsonInput.value=""),this.step2.style.display="none",this.step1Instructions.style.display="none",this.progressWrap.style.display="none",this.stepDone.style.display="none",this._renderProgress()},async _copyPrompt(){const e=this.ideaInput.value.trim();if(!e){u.toast("Describí qué plantilla (o plantillas asociadas) necesitás.","danger");return}const t=Ue(e);if(await U.copyTextSmart(t,"Prompt del Asistente IA — Crear Plantillas")==="modal")return;this.step2.style.display="",this.step1Instructions.style.display="";const s=this.btnCopyPrompt.innerHTML;this.btnCopyPrompt.innerHTML='<i class="fa-solid fa-check me-2"></i> ¡Copiado!',this.btnCopyPrompt.classList.replace("btn-dark","btn-success"),setTimeout(()=>{document.body.contains(this.btnCopyPrompt)&&(this.btnCopyPrompt.innerHTML=s,this.btnCopyPrompt.classList.replace("btn-success","btn-dark"))},3e3)},_parseAiBlock(e){const t=e.replace(/```json/gi,"").replace(/```/g,"").trim(),a=t.indexOf("{"),s=t.lastIndexOf("}"),o=a!==-1&&s!==-1&&s>a?t.slice(a,s+1):t,i=JSON.parse(o);if(!i||typeof i!="object"||Array.isArray(i))throw new Error('El resultado no es un objeto JSON válido (se esperaba "{ ... }").');if(!i.titulo||typeof i.titulo!="string")throw new Error('Falta "titulo" en el JSON.');if(!Array.isArray(i.componentes))throw new Error('Falta "componentes" (arreglo) en el JSON.');return i},async _createFromPastedJson(){const e=this.jsonInput.value.trim();if(!e){u.toast("Pegá el JSON de la plantilla que te devolvió la IA.","danger");return}let t;try{t=this._parseAiBlock(e)}catch(p){u.toast("Error de lectura JSON: "+p.message,"danger");return}if(this._totalPlantillas===null)this._totalPlantillas=Number(t.totalPlantillas)||1;else if(t.totalPlantillas&&Number(t.totalPlantillas)!==this._totalPlantillas&&!await u.confirm("¿Seguro que es del mismo conjunto?",`Esta plantilla dice pertenecer a un conjunto de ${t.totalPlantillas}, pero veníamos de ${this._totalPlantillas}. ¿Creamos igual?`))return;const a=t.titulo.trim(),s=U.generateSemanticBaseId("tpl",a,15);let o=s,i=2;const n=await z.loadTemplates();for(;n.some(p=>p.id===o)||this._created.some(p=>p.id===o);)o=`${s}${i}`,i++;const l=String(t.grupo||"").trim().slice(0,15),d={id:o,title:a,description:"",relatedDocIds:"",category:"Asistido por la IA",icon:"✨",grupo:l,encrypted:!1,elements:t.componentes};try{await z.saveTemplate(d)}catch(p){u.toast(`Error al crear "${a}": `+p.message,"danger");return}const g=Number(t.indice)||this._created.length+1;this._created.push({id:o,titulo:a,grupo:l,indice:g}),this.jsonInput.value="",this._renderProgress(),this._created.length>=this._totalPlantillas?(this.step2.style.display="none",this.stepDone.style.display=""):u.toast(`"${a}" creada (${this._created.length} de ${this._totalPlantillas}). Pedile la siguiente a la IA.`,"success")},_renderProgress(){if(this.progressList){if(this._created.length===0){this.progressWrap.style.display="none",this.progressList.innerHTML="";return}this.progressWrap.style.display="",this.progressList.innerHTML=this._created.slice().sort((e,t)=>e.indice-t.indice).map(e=>`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <i class="fa-solid fa-circle-check text-success me-2"></i>
            ${e.titulo}
          </span>
          ${e.grupo?`<span class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">${e.grupo}</span>`:'<span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25">Independiente</span>'}
        </li>`).join("")}}},Ae={init(){ue.init({onNavigateToEditor:()=>this.showEditor(),onNavigateToGroupAssistant:()=>this.showGroupAssistant(),onEditTemplate:e=>{this.showEditor(),K.load(e)}}),K.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),fe.init({onBack:()=>this.showList(),onFinish:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){ue.render()},showEditor(){const e=document.getElementById("designer-list-view"),t=document.getElementById("designer-editor-view"),a=document.getElementById("designer-group-view");e&&(e.style.display="none"),t&&(t.style.display="block"),a&&(a.style.display="none"),K.reset()},showGroupAssistant(){const e=document.getElementById("designer-list-view"),t=document.getElementById("designer-editor-view"),a=document.getElementById("designer-group-view");e&&(e.style.display="none"),t&&(t.style.display="none"),a&&(a.style.display="block"),fe.reset()},showList(){const e=document.getElementById("designer-list-view"),t=document.getElementById("designer-editor-view"),a=document.getElementById("designer-group-view");e&&(e.style.display="block"),t&&(t.style.display="none"),a&&(a.style.display="none")},getAvailableVariables(e,t){return K.getAvailableVariables(e,t)},getApiVariables(e,t){return K.getApiVariables(e,t)}},Q={handlers:{},currentDocs:[],currentTemplates:[],init(e){this.handlers=e;const t=document.getElementById("doc-list-view");if(!t){console.error("❌ [DocumentList] Error crítico: No se encontró #doc-list-view en el DOM.");return}t.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents()},getBaseHTML(){return`
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
            
            <div class="d-flex gap-2 align-items-center flex-grow-1 justify-content-end" style="max-width: 650px;">
              <button type="button" class="btn btn-sm" id="doc-toggle-favorites-only"></button>
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
    `},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.tableHead=document.getElementById("doc-table-head"),this.pagination=document.getElementById("doc-pagination-controls"),this.searchInput=document.getElementById("doc-search-input"),this.templateFilter=document.getElementById("doc-template-filter"),this.btnCreate=document.getElementById("btn-go-create-doc"),this.btnFavoritesOnly=document.getElementById("doc-toggle-favorites-only")},initTableEngine(){this.tableEngine=new re({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td><span class="badge bg-secondary px-2 py-1">Plantilla</span></td>
        <td><div class="fw-bold">Test</div></td>
        <td class="text-end"><button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-eye"></i></button></td>
      `,marginBot:40,extractSearchString:e=>`${e.title} ${e.templateTitle||""}`,renderRowHTML:e=>this._renderRow(e),onRenderComplete:(e,t)=>this._bindListActions(e,t)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput.addEventListener("input",e=>{this.tableEngine.setSearchTerm(e.target.value)}),this.templateFilter&&this.templateFilter.addEventListener("change",e=>{this.tableEngine.setFilter("templateId",e.target.value)}),this.btnFavoritesOnly&&(this.favoritesOnly=localStorage.getItem("doc_engine_favorites_only")!=="false",this._updateFavoritesToggleUI(),this.btnFavoritesOnly.onclick=()=>{this.favoritesOnly=!this.favoritesOnly,localStorage.setItem("doc_engine_favorites_only",this.favoritesOnly),this._updateFavoritesToggleUI(),this._applyVisibility()})},_updateFavoritesToggleUI(){this.btnFavoritesOnly&&(this.favoritesOnly?(this.btnFavoritesOnly.className="btn btn-sm btn-warning text-white",this.btnFavoritesOnly.innerHTML='<i class="fa-solid fa-star"></i>',this.btnFavoritesOnly.title="Mostrando solo favoritos — clic para ver todos"):(this.btnFavoritesOnly.className="btn btn-sm btn-outline-secondary",this.btnFavoritesOnly.innerHTML='<i class="fa-regular fa-star"></i>',this.btnFavoritesOnly.title="Mostrando todos — clic para ver solo favoritos"))},_applyVisibility(){const e=this.favoritesOnly?this.currentDocs.filter(t=>!t.pocoUsado):this.currentDocs;this.tableEngine.setData(e)},async render(){try{const e=await f.getAll("doc")||[];this.currentDocs=e.map(t=>({...t,pocoUsado:!!t.pocoUsado})),this.currentTemplates=await f.getAll("tpl")||[],this.populateTemplateFilter(),this.tableEngine.calculatePaginationSpace(),this._applyVisibility()}catch(e){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando documentos: ${e.message}</td></tr>`)}},populateTemplateFilter(){if(!this.templateFilter)return;const e=this.templateFilter.value,t=new Set(this.currentDocs.map(o=>o.templateId)),a=this.currentTemplates.filter(o=>t.has(o.id)).sort((o,i)=>o.title.localeCompare(i.title,void 0,{sensitivity:"base"}));let s='<option value="">Todas las plantillas</option>';a.forEach(o=>{const i=o.icon||"📄";s+=`<option value="${o.id}">${i} ${o.title}</option>`}),this.templateFilter.innerHTML=s,a.some(o=>o.id===e)?this.templateFilter.value=e:this.templateFilter.value=""},_renderRow(e){let t="";e.isEncrypted&&(t=f._masterKey&&!e.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Desbloqueado"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado"><i class="fa-solid fa-lock"></i></span>');const a=this.currentTemplates.find(o=>o.id===e.templateId);return`
      <tr>
        <td>
          <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
            <span class="me-1 fs-6">${a&&a.icon?a.icon:"📄"}</span>${e.templateTitle||"General"}
          </span>
        </td>
        <td>
           <div class="fw-bold text-nowrap d-flex align-items-center">
               ${e.title} ${t}
               ${e.pocoUsado?'<span class="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 ms-2 usage-badge" title="Marcado como poco usado">Poco usado</span>':""}
           </div>
        </td>
        <td class="text-end text-nowrap">
            ${this.favoritesOnly?"":`<button class="btn btn-sm ${e.pocoUsado?"btn-outline-secondary":"btn-outline-warning"} btn-toggle-usage me-1" data-id="${e.id}" title="${e.pocoUsado?"Marcar como favorito":"Marcar como poco usado"}">
               <i class="fa-${e.pocoUsado?"regular":"solid"} fa-star"></i>
            </button>`}
            <button class="btn btn-sm btn-outline-primary btn-view-doc me-1" data-id="${e.id}" title="Visualizar">
               <i class="fa-solid fa-eye"></i>
            </button>
            ${this._isDevMode()?`<button class="btn btn-sm btn-outline-info btn-dev-json me-1" data-id="${e.id}" title="Extraer JSON (Dev)">
               <i class="fa-solid fa-code"></i>
            </button>`:""}
            <button class="btn btn-sm btn-danger btn-del-doc" data-id="${e.id}" title="Eliminar Documento">
               <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_isDevMode(){return localStorage.getItem("doc_engine_dev_mode")==="true"},_patchRowUsageUI(e,t){if(!e)return;const a=e.querySelector(".btn-toggle-usage");if(a){a.className=`btn btn-sm ${t.pocoUsado?"btn-outline-secondary":"btn-outline-warning"} btn-toggle-usage me-1`,a.title=t.pocoUsado?"Marcar como favorito":"Marcar como poco usado";const o=a.querySelector("i");o&&(o.className=`fa-${t.pocoUsado?"regular":"solid"} fa-star`)}let s=e.querySelector(".usage-badge");if(t.pocoUsado){if(!s){s=document.createElement("span"),s.className="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 ms-2 usage-badge",s.title="Marcado como poco usado",s.textContent="Poco usado";const o=e.querySelector(".fw-bold.text-nowrap");o&&o.appendChild(s)}}else s&&s.remove()},_bindListActions(e){e.querySelectorAll(".btn-view-doc").forEach(t=>{t.onclick=()=>this.handlers.onViewDocument(t.dataset.id)}),e.querySelectorAll(".btn-toggle-usage").forEach(t=>{t.onclick=async a=>{a.stopPropagation();const s=t.dataset.id,o=this.currentDocs.find(n=>n.id===s);if(!o)return;const i=!o.pocoUsado;try{await f.updateFields("doc",s,{pocoUsado:i}),o.pocoUsado=i,u.toast(i?"Documento marcado como poco usado.":"Documento marcado como favorito.","success"),this._patchRowUsageUI(t.closest("tr"),o)}catch(n){console.error("Error al marcar el documento:",n)}}}),e.querySelectorAll(".btn-del-doc").forEach(t=>{t.onclick=async()=>{await u.confirm("Eliminar Documento","¿Estás seguro de eliminar este documento definitivamente? Esta acción no se puede deshacer.")&&(await f.delete("doc",t.dataset.id),u.toast("Documento eliminado correctamente","success"),this.render())}}),e.querySelectorAll(".btn-dev-json").forEach(t=>{t.onclick=async a=>{a.stopPropagation();const s=t.dataset.id,o=t.querySelector("i"),i=o.className;try{o.className="fa-solid fa-spinner fa-spin text-info";let n=await f.getOne("doc",s);if(!n)throw new Error("Documento no encontrado");if(n.isEncrypted&&n.decryptionError){const m=await u.promptPassword("Desbloqueo Requerido","Este documento está cifrado. Ingrese su Frase Maestra para extraer los datos reales:");if(!m){o.className=i;return}if(await _.setMasterKey(m),n=await f.getOne("doc",s),n.decryptionError){u.toast("⛔ Frase incorrecta. No se puede extraer el documento.","danger"),o.className=i;return}}const l=await f.getOne("tpl",n.templateId),g=JSON.stringify({_INFO:"Extracto generado para depuración con IA",document:n,template:l},null,2);await navigator.clipboard.writeText(g),o.className="fa-solid fa-check text-success",u.toast("JSON copiado al portapapeles","success"),setTimeout(()=>{o.className=i},1500)}catch(n){console.error("Error al extraer JSON:",n),o.className="fa-solid fa-xmark text-danger",u.toast("Error al extraer el JSON de desarrollo.","danger"),setTimeout(()=>{o.className=i},1500)}}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},j={getCurrentUser(){return T.currentUser},onAuthStateChanged(e){return we(T,e)},async login(e,t){try{const s=(await se(T,e,t)).user;if(!s.emailVerified)throw await F(T),new Error("Debes verificar tu correo electrónico antes de entrar.");return s}catch(a){throw console.error("[AUTH] Error:",a.code),a.message.includes("verificar tu correo")?a:new Error("Credenciales inválidas o error de conexión.")}},async signup(e,t){try{const s=(await _e(T,e,t)).user;return await oe(s),await Ce(De(Be,"users",s.uid),{email:e,createdAt:new Date().toISOString(),emailVerified:!1}),s}catch(a){throw new Error("Error en registro: "+a.message)}},async logout(){return _.clearSession(),F(T)}},ee={async getProfile(e){if(!e)return null;try{return await L.getRaw("user_profiles",e)}catch(t){return console.error("Error obteniendo el perfil:",t),null}},async saveProfile(e,t){if(!e)throw new Error("Usuario no autenticado");try{await L.set("user_profiles",e,{...t,updatedAt:new Date().toISOString()},{merge:!0})}catch(a){throw console.error("Error guardando el perfil:",a),a}}},ve=(e,t,a)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((o,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})},J={_loadedRoles:new Set,_loadedSingles:new Set,_viewRoles:{designer:["setting","editor"],documents:["editor","viewer"],print:["printer"],visor:["printer"]},async loadRole(e){if(this._loadedRoles.has(e))return;const t=Object.keys(H),a=t.map(s=>{const o=`${e}-${s}`;if(!customElements.get(o))return ve(Object.assign({"../components/api/editor-api.js":()=>r(()=>import("./editor-api.CT8nhRhD.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../components/api/printer-api.js":()=>r(()=>import("./printer-api.DzqTqQm3.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../components/api/setting-api.js":()=>r(()=>import("./setting-api.CADe44ey.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../components/api/viewer-api.js":()=>r(()=>import("./viewer-api.D1bkXmCt.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../components/audio/editor-audio.js":()=>r(()=>import("./editor-audio.hBmgYbnp.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../components/audio/printer-audio.js":()=>r(()=>import("./printer-audio.DustxG-n.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"../components/audio/setting-audio.js":()=>r(()=>import("./setting-audio.Dv1vs1ah.js"),__vite__mapDeps([9,10,1,2,3]),import.meta.url),"../components/audio/viewer-audio.js":()=>r(()=>import("./viewer-audio.Cp3d3tRG.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"../components/boolean/editor-boolean.js":()=>r(()=>import("./editor-boolean.BNtWNQPa.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"../components/boolean/printer-boolean.js":()=>r(()=>import("./printer-boolean.CZoh1P5q.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"../components/boolean/setting-boolean.js":()=>r(()=>import("./setting-boolean.WpOjdN8K.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"../components/boolean/viewer-boolean.js":()=>r(()=>import("./viewer-boolean.CMlcS2Wr.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"../components/chart/editor-chart.js":()=>r(()=>import("./editor-chart.YgZvtZLZ.js"),__vite__mapDeps([16,1,2,3,17]),import.meta.url),"../components/chart/printer-chart.js":()=>r(()=>import("./printer-chart.CRKIQU65.js"),__vite__mapDeps([18,1,2,3,17]),import.meta.url),"../components/chart/setting-chart.js":()=>r(()=>import("./setting-chart.DmqHwnOZ.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"../components/chart/viewer-chart.js":()=>r(()=>import("./viewer-chart.DNHs4hSu.js"),__vite__mapDeps([20,1,2,3,17]),import.meta.url),"../components/currency/editor-currency.js":()=>r(()=>import("./editor-currency.BXtJNizT.js"),__vite__mapDeps([21,1,2,3]),import.meta.url),"../components/currency/printer-currency.js":()=>r(()=>import("./printer-currency.D5g9CpmV.js"),__vite__mapDeps([22,1,2,3]),import.meta.url),"../components/currency/setting-currency.js":()=>r(()=>import("./setting-currency.CYF1FxR0.js"),__vite__mapDeps([23,24,1,2,3]),import.meta.url),"../components/currency/viewer-currency.js":()=>r(()=>import("./viewer-currency.Bjri0ShF.js"),__vite__mapDeps([25,1,2,3]),import.meta.url),"../components/date/editor-date.js":()=>r(()=>import("./editor-date.xGOlWe8R.js"),__vite__mapDeps([26,1,2,3]),import.meta.url),"../components/date/printer-date.js":()=>r(()=>import("./printer-date.DiMTSQ_T.js"),__vite__mapDeps([27,1,2,3]),import.meta.url),"../components/date/setting-date.js":()=>r(()=>import("./setting-date.DOhAYvHZ.js"),__vite__mapDeps([28,29,1,2,3]),import.meta.url),"../components/date/viewer-date.js":()=>r(()=>import("./viewer-date.C-7CqaiL.js"),__vite__mapDeps([30,1,2,3]),import.meta.url),"../components/datetime/editor-datetime.js":()=>r(()=>import("./editor-datetime.BwKxKYlI.js"),__vite__mapDeps([31,1,2,3]),import.meta.url),"../components/datetime/printer-datetime.js":()=>r(()=>import("./printer-datetime.UZ1qGWxe.js"),__vite__mapDeps([32,1,2,3]),import.meta.url),"../components/datetime/setting-datetime.js":()=>r(()=>import("./setting-datetime.DDACWWgZ.js"),__vite__mapDeps([29,1,2,3]),import.meta.url),"../components/datetime/viewer-datetime.js":()=>r(()=>import("./viewer-datetime.BguKBm41.js"),__vite__mapDeps([33,1,2,3]),import.meta.url),"../components/divider/editor-divider.js":()=>r(()=>import("./editor-divider.aZHK66sV.js"),__vite__mapDeps([34,1,2,3]),import.meta.url),"../components/divider/printer-divider.js":()=>r(()=>import("./printer-divider.CBEHA73T.js"),__vite__mapDeps([35,1,2,3]),import.meta.url),"../components/divider/setting-divider.js":()=>r(()=>import("./setting-divider.x27Hjzto.js"),__vite__mapDeps([36,1,2,3]),import.meta.url),"../components/divider/viewer-divider.js":()=>r(()=>import("./viewer-divider.BXqWZ3wE.js"),__vite__mapDeps([37,1,2,3]),import.meta.url),"../components/email/editor-email.js":()=>r(()=>import("./editor-email.zDM_VfLi.js"),__vite__mapDeps([38,1,2,3]),import.meta.url),"../components/email/printer-email.js":()=>r(()=>import("./printer-email.Bwr4UY_H.js"),__vite__mapDeps([39,1,2,3]),import.meta.url),"../components/email/setting-email.js":()=>r(()=>import("./setting-email.LsXgEFZo.js"),__vite__mapDeps([40,41,1,2,3]),import.meta.url),"../components/email/viewer-email.js":()=>r(()=>import("./viewer-email.CQeslAbe.js"),__vite__mapDeps([42,1,2,3]),import.meta.url),"../components/html/editor-html.js":()=>r(()=>import("./editor-html.BUXGnPdh.js"),__vite__mapDeps([43,1,2,3]),import.meta.url),"../components/html/printer-html.js":()=>r(()=>import("./printer-html.DcevQF7K.js"),__vite__mapDeps([44,1,2,3]),import.meta.url),"../components/html/setting-html.js":()=>r(()=>import("./setting-html.BnNWWEe8.js"),__vite__mapDeps([45,1,2,3]),import.meta.url),"../components/html/viewer-html.js":()=>r(()=>import("./viewer-html.IVfn-PRk.js"),__vite__mapDeps([46,1,2,3]),import.meta.url),"../components/image/editor-image.js":()=>r(()=>import("./editor-image.BEnKkCKV.js"),__vite__mapDeps([47,1,2,3]),import.meta.url),"../components/image/printer-image.js":()=>r(()=>import("./printer-image.Dn9VSQP4.js"),__vite__mapDeps([48,1,2,3]),import.meta.url),"../components/image/setting-image.js":()=>r(()=>import("./setting-image.VfLF-mct.js"),__vite__mapDeps([49,10,1,2,3]),import.meta.url),"../components/image/viewer-image.js":()=>r(()=>import("./viewer-image.DHBp2TFV.js"),__vite__mapDeps([50,1,2,3]),import.meta.url),"../components/input/editor-input.js":()=>r(()=>import("./editor-input.GMCQagvY.js"),__vite__mapDeps([51,1,2,3]),import.meta.url),"../components/input/printer-input.js":()=>r(()=>import("./printer-input.CaS5jUOd.js"),__vite__mapDeps([52,1,2,3]),import.meta.url),"../components/input/setting-input.js":()=>r(()=>import("./setting-input.RQSuEEn5.js"),__vite__mapDeps([41,1,2,3]),import.meta.url),"../components/input/viewer-input.js":()=>r(()=>import("./viewer-input.BsGLRvJb.js"),__vite__mapDeps([53,1,2,3]),import.meta.url),"../components/media/editor-media.js":()=>r(()=>import("./editor-media.4y98F8R-.js"),__vite__mapDeps([54,1,2,3]),import.meta.url),"../components/media/printer-media.js":()=>r(()=>import("./printer-media.CXsSIJ2V.js"),__vite__mapDeps([55,1,2,3]),import.meta.url),"../components/media/setting-media.js":()=>r(()=>import("./setting-media.-1a2KFcg.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"../components/media/viewer-media.js":()=>r(()=>import("./viewer-media.Dqdpmxnv.js"),__vite__mapDeps([56,1,2,3]),import.meta.url),"../components/number/editor-number.js":()=>r(()=>import("./editor-number.BS7tgwcj.js"),__vite__mapDeps([57,1,2,3]),import.meta.url),"../components/number/printer-number.js":()=>r(()=>import("./printer-number.q7jp7mqX.js"),__vite__mapDeps([58,1,2,3]),import.meta.url),"../components/number/setting-number.js":()=>r(()=>import("./setting-number.dPLKILdx.js"),__vite__mapDeps([59,24,1,2,3]),import.meta.url),"../components/number/viewer-number.js":()=>r(()=>import("./viewer-number.KS9NfcKE.js"),__vite__mapDeps([60,1,2,3]),import.meta.url),"../components/numeric/editor-numeric.js":()=>r(()=>import("./editor-numeric.B4mgUyu7.js"),__vite__mapDeps([61,1,2,3]),import.meta.url),"../components/numeric/printer-numeric.js":()=>r(()=>import("./printer-numeric.CSjjKKkO.js"),__vite__mapDeps([62,1,2,3]),import.meta.url),"../components/numeric/setting-numeric.js":()=>r(()=>import("./setting-numeric.CWz6hzqh.js"),__vite__mapDeps([24,1,2,3]),import.meta.url),"../components/numeric/viewer-numeric.js":()=>r(()=>import("./viewer-numeric.Bisn39T0.js"),__vite__mapDeps([63,1,2,3]),import.meta.url),"../components/password/editor-password.js":()=>r(()=>import("./editor-password.CXyR3ZCZ.js"),__vite__mapDeps([64,1,2,3]),import.meta.url),"../components/password/printer-password.js":()=>r(()=>import("./printer-password.wxgW7nYC.js"),__vite__mapDeps([65,1,2,3]),import.meta.url),"../components/password/setting-password.js":()=>r(()=>import("./setting-password.C3GmVFsp.js"),__vite__mapDeps([66,41,1,2,3]),import.meta.url),"../components/password/viewer-password.js":()=>r(()=>import("./viewer-password.Cb1aSRH0.js"),__vite__mapDeps([67,1,2,3]),import.meta.url),"../components/percentage/editor-percentage.js":()=>r(()=>import("./editor-percentage.CWXhkKrH.js"),__vite__mapDeps([68,1,2,3]),import.meta.url),"../components/percentage/printer-percentage.js":()=>r(()=>import("./printer-percentage.CE6HNSpq.js"),__vite__mapDeps([69,1,2,3]),import.meta.url),"../components/percentage/setting-percentage.js":()=>r(()=>import("./setting-percentage.CrFJBNJ-.js"),__vite__mapDeps([70,24,1,2,3]),import.meta.url),"../components/percentage/viewer-percentage.js":()=>r(()=>import("./viewer-percentage.XsOz3vEF.js"),__vite__mapDeps([71,1,2,3]),import.meta.url),"../components/script/editor-script.js":()=>r(()=>import("./editor-script.DUwAe6Ez.js"),__vite__mapDeps([72,1,2,3,73]),import.meta.url),"../components/script/printer-script.js":()=>r(()=>import("./printer-script.8qqB2zCc.js"),__vite__mapDeps([74,1,2,3]),import.meta.url),"../components/script/setting-script.js":()=>r(()=>import("./setting-script.BMfP4IE9.js"),__vite__mapDeps([75,1,2,3,73]),import.meta.url),"../components/script/viewer-script.js":()=>r(()=>import("./viewer-script.DFRyIjcz.js"),__vite__mapDeps([76,1,2,3]),import.meta.url),"../components/section/editor-section.js":()=>r(()=>import("./editor-section.CRQxuXyO.js"),__vite__mapDeps([77,1,2,3]),import.meta.url),"../components/section/printer-section.js":()=>r(()=>import("./printer-section.Da7e4niM.js"),__vite__mapDeps([78,1,2,3]),import.meta.url),"../components/section/setting-section.js":()=>r(()=>import("./setting-section.ChDVD0QV.js"),__vite__mapDeps([79,36,1,2,3]),import.meta.url),"../components/section/viewer-section.js":()=>r(()=>import("./viewer-section.BKcRJXxV.js"),__vite__mapDeps([80,1,2,3]),import.meta.url),"../components/select/editor-select.js":()=>r(()=>import("./editor-select.D5LZ1s_c.js"),__vite__mapDeps([81,1,2,3]),import.meta.url),"../components/select/printer-select.js":()=>r(()=>import("./printer-select.SmYQmEnA.js"),__vite__mapDeps([82,1,2,3]),import.meta.url),"../components/select/setting-select.js":()=>r(()=>import("./setting-select.mqSr8bMG.js"),__vite__mapDeps([83,1,2,3]),import.meta.url),"../components/select/viewer-select.js":()=>r(()=>import("./viewer-select.BQca4KLe.js"),__vite__mapDeps([84,1,2,3]),import.meta.url),"../components/string/editor-string.js":()=>r(()=>import("./editor-string.SOKzlvhx.js"),__vite__mapDeps([85,1,2,3]),import.meta.url),"../components/string/printer-string.js":()=>r(()=>import("./printer-string.XtvJriEC.js"),__vite__mapDeps([86,1,2,3]),import.meta.url),"../components/string/setting-string.js":()=>r(()=>import("./setting-string.DE_qjFTV.js"),__vite__mapDeps([87,41,1,2,3]),import.meta.url),"../components/string/viewer-string.js":()=>r(()=>import("./viewer-string.CNMIjBPX.js"),__vite__mapDeps([88,1,2,3]),import.meta.url),"../components/subsection/editor-subsection.js":()=>r(()=>import("./editor-subsection.DVfS6e3V.js"),__vite__mapDeps([89,1,2,3]),import.meta.url),"../components/subsection/printer-subsection.js":()=>r(()=>import("./printer-subsection.Z6oiJFgi.js"),__vite__mapDeps([90,1,2,3]),import.meta.url),"../components/subsection/setting-subsection.js":()=>r(()=>import("./setting-subsection.DsCM6nNa.js"),__vite__mapDeps([91,36,1,2,3]),import.meta.url),"../components/subsection/viewer-subsection.js":()=>r(()=>import("./viewer-subsection.CYL123M2.js"),__vite__mapDeps([92,1,2,3]),import.meta.url),"../components/table/editor-table.js":()=>r(()=>import("./editor-table.BvJWrztT.js"),__vite__mapDeps([93,1,2,3,94,73]),import.meta.url),"../components/table/printer-table.js":()=>r(()=>import("./printer-table.DSRZqilc.js"),__vite__mapDeps([95,1,2,3,94]),import.meta.url),"../components/table/setting-table.js":()=>r(()=>import("./setting-table.CdW92Dzd.js"),__vite__mapDeps([96,1,2,3,73]),import.meta.url),"../components/table/viewer-table.js":()=>r(()=>import("./viewer-table.DF2DW7mt.js"),__vite__mapDeps([97,1,2,3,94]),import.meta.url),"../components/text/editor-text.js":()=>r(()=>import("./editor-text.BNtWpBb0.js"),__vite__mapDeps([98,1,2,3]),import.meta.url),"../components/text/printer-text.js":()=>r(()=>import("./printer-text.PWt1cEi0.js"),__vite__mapDeps([99,1,2,3]),import.meta.url),"../components/text/setting-text.js":()=>r(()=>import("./setting-text.BGzamiyb.js"),__vite__mapDeps([100,41,1,2,3]),import.meta.url),"../components/text/viewer-text.js":()=>r(()=>import("./viewer-text.Ba9unfb0.js"),__vite__mapDeps([101,1,2,3]),import.meta.url),"../components/time/editor-time.js":()=>r(()=>import("./editor-time.CMMz_dJC.js"),__vite__mapDeps([102,1,2,3]),import.meta.url),"../components/time/printer-time.js":()=>r(()=>import("./printer-time.DItLZwyl.js"),__vite__mapDeps([103,1,2,3]),import.meta.url),"../components/time/setting-time.js":()=>r(()=>import("./setting-time.D2Vlxxni.js"),__vite__mapDeps([104,29,1,2,3]),import.meta.url),"../components/time/viewer-time.js":()=>r(()=>import("./viewer-time.M7FC6cj_.js"),__vite__mapDeps([105,1,2,3]),import.meta.url),"../components/url/editor-url.js":()=>r(()=>import("./editor-url.Lh5E3UEp.js"),__vite__mapDeps([106,1,2,3,73]),import.meta.url),"../components/url/printer-url.js":()=>r(()=>import("./printer-url.DHb3qfeM.js"),__vite__mapDeps([107,1,2,3]),import.meta.url),"../components/url/setting-url.js":()=>r(()=>import("./setting-url.DHBMLo5h.js"),__vite__mapDeps([108,1,2,3]),import.meta.url),"../components/url/viewer-url.js":()=>r(()=>import("./viewer-url.ue5mvyGt.js"),__vite__mapDeps([109,1,2,3,73]),import.meta.url),"../components/video/editor-video.js":()=>r(()=>import("./editor-video.qRrehFKm.js"),__vite__mapDeps([110,1,2,3]),import.meta.url),"../components/video/printer-video.js":()=>r(()=>import("./printer-video.DIIaVUUs.js"),__vite__mapDeps([111,1,2,3]),import.meta.url),"../components/video/setting-video.js":()=>r(()=>import("./setting-video.Cgmw-px_.js"),__vite__mapDeps([112,10,1,2,3]),import.meta.url),"../components/video/viewer-video.js":()=>r(()=>import("./viewer-video.CdbPN1eV.js"),__vite__mapDeps([113,1,2,3]),import.meta.url)}),`../components/${s}/${e}-${s}.js`,4).catch(i=>{console.warn(`[ComponentLoader] No se pudo cargar ${e}-${s}:`,i.message)})});await Promise.all(a),this._loadedRoles.add(e),`${e}${t.length}`},async loadForView(e){const t=this._viewRoles[e]||[];t.length!==0&&(await Promise.all(t.map(a=>this.loadRole(a))),`${e}${t.join(", ")}`)},async loadInitial(e="documents"){`${e}`,await this.loadForView(e)},async loadSingle(e,t){const a=`${e}-${t}`;if(!this._loadedSingles.has(a)){if(customElements.get(a)){this._loadedSingles.add(a);return}try{await ve(Object.assign({"../components/api/editor-api.js":()=>r(()=>import("./editor-api.CT8nhRhD.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../components/api/printer-api.js":()=>r(()=>import("./printer-api.DzqTqQm3.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../components/api/setting-api.js":()=>r(()=>import("./setting-api.CADe44ey.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../components/api/viewer-api.js":()=>r(()=>import("./viewer-api.D1bkXmCt.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../components/audio/editor-audio.js":()=>r(()=>import("./editor-audio.hBmgYbnp.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../components/audio/printer-audio.js":()=>r(()=>import("./printer-audio.DustxG-n.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"../components/audio/setting-audio.js":()=>r(()=>import("./setting-audio.Dv1vs1ah.js"),__vite__mapDeps([9,10,1,2,3]),import.meta.url),"../components/audio/viewer-audio.js":()=>r(()=>import("./viewer-audio.Cp3d3tRG.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"../components/boolean/editor-boolean.js":()=>r(()=>import("./editor-boolean.BNtWNQPa.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"../components/boolean/printer-boolean.js":()=>r(()=>import("./printer-boolean.CZoh1P5q.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"../components/boolean/setting-boolean.js":()=>r(()=>import("./setting-boolean.WpOjdN8K.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"../components/boolean/viewer-boolean.js":()=>r(()=>import("./viewer-boolean.CMlcS2Wr.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"../components/chart/editor-chart.js":()=>r(()=>import("./editor-chart.YgZvtZLZ.js"),__vite__mapDeps([16,1,2,3,17]),import.meta.url),"../components/chart/printer-chart.js":()=>r(()=>import("./printer-chart.CRKIQU65.js"),__vite__mapDeps([18,1,2,3,17]),import.meta.url),"../components/chart/setting-chart.js":()=>r(()=>import("./setting-chart.DmqHwnOZ.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"../components/chart/viewer-chart.js":()=>r(()=>import("./viewer-chart.DNHs4hSu.js"),__vite__mapDeps([20,1,2,3,17]),import.meta.url),"../components/currency/editor-currency.js":()=>r(()=>import("./editor-currency.BXtJNizT.js"),__vite__mapDeps([21,1,2,3]),import.meta.url),"../components/currency/printer-currency.js":()=>r(()=>import("./printer-currency.D5g9CpmV.js"),__vite__mapDeps([22,1,2,3]),import.meta.url),"../components/currency/setting-currency.js":()=>r(()=>import("./setting-currency.CYF1FxR0.js"),__vite__mapDeps([23,24,1,2,3]),import.meta.url),"../components/currency/viewer-currency.js":()=>r(()=>import("./viewer-currency.Bjri0ShF.js"),__vite__mapDeps([25,1,2,3]),import.meta.url),"../components/date/editor-date.js":()=>r(()=>import("./editor-date.xGOlWe8R.js"),__vite__mapDeps([26,1,2,3]),import.meta.url),"../components/date/printer-date.js":()=>r(()=>import("./printer-date.DiMTSQ_T.js"),__vite__mapDeps([27,1,2,3]),import.meta.url),"../components/date/setting-date.js":()=>r(()=>import("./setting-date.DOhAYvHZ.js"),__vite__mapDeps([28,29,1,2,3]),import.meta.url),"../components/date/viewer-date.js":()=>r(()=>import("./viewer-date.C-7CqaiL.js"),__vite__mapDeps([30,1,2,3]),import.meta.url),"../components/datetime/editor-datetime.js":()=>r(()=>import("./editor-datetime.BwKxKYlI.js"),__vite__mapDeps([31,1,2,3]),import.meta.url),"../components/datetime/printer-datetime.js":()=>r(()=>import("./printer-datetime.UZ1qGWxe.js"),__vite__mapDeps([32,1,2,3]),import.meta.url),"../components/datetime/setting-datetime.js":()=>r(()=>import("./setting-datetime.DDACWWgZ.js"),__vite__mapDeps([29,1,2,3]),import.meta.url),"../components/datetime/viewer-datetime.js":()=>r(()=>import("./viewer-datetime.BguKBm41.js"),__vite__mapDeps([33,1,2,3]),import.meta.url),"../components/divider/editor-divider.js":()=>r(()=>import("./editor-divider.aZHK66sV.js"),__vite__mapDeps([34,1,2,3]),import.meta.url),"../components/divider/printer-divider.js":()=>r(()=>import("./printer-divider.CBEHA73T.js"),__vite__mapDeps([35,1,2,3]),import.meta.url),"../components/divider/setting-divider.js":()=>r(()=>import("./setting-divider.x27Hjzto.js"),__vite__mapDeps([36,1,2,3]),import.meta.url),"../components/divider/viewer-divider.js":()=>r(()=>import("./viewer-divider.BXqWZ3wE.js"),__vite__mapDeps([37,1,2,3]),import.meta.url),"../components/email/editor-email.js":()=>r(()=>import("./editor-email.zDM_VfLi.js"),__vite__mapDeps([38,1,2,3]),import.meta.url),"../components/email/printer-email.js":()=>r(()=>import("./printer-email.Bwr4UY_H.js"),__vite__mapDeps([39,1,2,3]),import.meta.url),"../components/email/setting-email.js":()=>r(()=>import("./setting-email.LsXgEFZo.js"),__vite__mapDeps([40,41,1,2,3]),import.meta.url),"../components/email/viewer-email.js":()=>r(()=>import("./viewer-email.CQeslAbe.js"),__vite__mapDeps([42,1,2,3]),import.meta.url),"../components/html/editor-html.js":()=>r(()=>import("./editor-html.BUXGnPdh.js"),__vite__mapDeps([43,1,2,3]),import.meta.url),"../components/html/printer-html.js":()=>r(()=>import("./printer-html.DcevQF7K.js"),__vite__mapDeps([44,1,2,3]),import.meta.url),"../components/html/setting-html.js":()=>r(()=>import("./setting-html.BnNWWEe8.js"),__vite__mapDeps([45,1,2,3]),import.meta.url),"../components/html/viewer-html.js":()=>r(()=>import("./viewer-html.IVfn-PRk.js"),__vite__mapDeps([46,1,2,3]),import.meta.url),"../components/image/editor-image.js":()=>r(()=>import("./editor-image.BEnKkCKV.js"),__vite__mapDeps([47,1,2,3]),import.meta.url),"../components/image/printer-image.js":()=>r(()=>import("./printer-image.Dn9VSQP4.js"),__vite__mapDeps([48,1,2,3]),import.meta.url),"../components/image/setting-image.js":()=>r(()=>import("./setting-image.VfLF-mct.js"),__vite__mapDeps([49,10,1,2,3]),import.meta.url),"../components/image/viewer-image.js":()=>r(()=>import("./viewer-image.DHBp2TFV.js"),__vite__mapDeps([50,1,2,3]),import.meta.url),"../components/input/editor-input.js":()=>r(()=>import("./editor-input.GMCQagvY.js"),__vite__mapDeps([51,1,2,3]),import.meta.url),"../components/input/printer-input.js":()=>r(()=>import("./printer-input.CaS5jUOd.js"),__vite__mapDeps([52,1,2,3]),import.meta.url),"../components/input/setting-input.js":()=>r(()=>import("./setting-input.RQSuEEn5.js"),__vite__mapDeps([41,1,2,3]),import.meta.url),"../components/input/viewer-input.js":()=>r(()=>import("./viewer-input.BsGLRvJb.js"),__vite__mapDeps([53,1,2,3]),import.meta.url),"../components/media/editor-media.js":()=>r(()=>import("./editor-media.4y98F8R-.js"),__vite__mapDeps([54,1,2,3]),import.meta.url),"../components/media/printer-media.js":()=>r(()=>import("./printer-media.CXsSIJ2V.js"),__vite__mapDeps([55,1,2,3]),import.meta.url),"../components/media/setting-media.js":()=>r(()=>import("./setting-media.-1a2KFcg.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"../components/media/viewer-media.js":()=>r(()=>import("./viewer-media.Dqdpmxnv.js"),__vite__mapDeps([56,1,2,3]),import.meta.url),"../components/number/editor-number.js":()=>r(()=>import("./editor-number.BS7tgwcj.js"),__vite__mapDeps([57,1,2,3]),import.meta.url),"../components/number/printer-number.js":()=>r(()=>import("./printer-number.q7jp7mqX.js"),__vite__mapDeps([58,1,2,3]),import.meta.url),"../components/number/setting-number.js":()=>r(()=>import("./setting-number.dPLKILdx.js"),__vite__mapDeps([59,24,1,2,3]),import.meta.url),"../components/number/viewer-number.js":()=>r(()=>import("./viewer-number.KS9NfcKE.js"),__vite__mapDeps([60,1,2,3]),import.meta.url),"../components/numeric/editor-numeric.js":()=>r(()=>import("./editor-numeric.B4mgUyu7.js"),__vite__mapDeps([61,1,2,3]),import.meta.url),"../components/numeric/printer-numeric.js":()=>r(()=>import("./printer-numeric.CSjjKKkO.js"),__vite__mapDeps([62,1,2,3]),import.meta.url),"../components/numeric/setting-numeric.js":()=>r(()=>import("./setting-numeric.CWz6hzqh.js"),__vite__mapDeps([24,1,2,3]),import.meta.url),"../components/numeric/viewer-numeric.js":()=>r(()=>import("./viewer-numeric.Bisn39T0.js"),__vite__mapDeps([63,1,2,3]),import.meta.url),"../components/password/editor-password.js":()=>r(()=>import("./editor-password.CXyR3ZCZ.js"),__vite__mapDeps([64,1,2,3]),import.meta.url),"../components/password/printer-password.js":()=>r(()=>import("./printer-password.wxgW7nYC.js"),__vite__mapDeps([65,1,2,3]),import.meta.url),"../components/password/setting-password.js":()=>r(()=>import("./setting-password.C3GmVFsp.js"),__vite__mapDeps([66,41,1,2,3]),import.meta.url),"../components/password/viewer-password.js":()=>r(()=>import("./viewer-password.Cb1aSRH0.js"),__vite__mapDeps([67,1,2,3]),import.meta.url),"../components/percentage/editor-percentage.js":()=>r(()=>import("./editor-percentage.CWXhkKrH.js"),__vite__mapDeps([68,1,2,3]),import.meta.url),"../components/percentage/printer-percentage.js":()=>r(()=>import("./printer-percentage.CE6HNSpq.js"),__vite__mapDeps([69,1,2,3]),import.meta.url),"../components/percentage/setting-percentage.js":()=>r(()=>import("./setting-percentage.CrFJBNJ-.js"),__vite__mapDeps([70,24,1,2,3]),import.meta.url),"../components/percentage/viewer-percentage.js":()=>r(()=>import("./viewer-percentage.XsOz3vEF.js"),__vite__mapDeps([71,1,2,3]),import.meta.url),"../components/script/editor-script.js":()=>r(()=>import("./editor-script.DUwAe6Ez.js"),__vite__mapDeps([72,1,2,3,73]),import.meta.url),"../components/script/printer-script.js":()=>r(()=>import("./printer-script.8qqB2zCc.js"),__vite__mapDeps([74,1,2,3]),import.meta.url),"../components/script/setting-script.js":()=>r(()=>import("./setting-script.BMfP4IE9.js"),__vite__mapDeps([75,1,2,3,73]),import.meta.url),"../components/script/viewer-script.js":()=>r(()=>import("./viewer-script.DFRyIjcz.js"),__vite__mapDeps([76,1,2,3]),import.meta.url),"../components/section/editor-section.js":()=>r(()=>import("./editor-section.CRQxuXyO.js"),__vite__mapDeps([77,1,2,3]),import.meta.url),"../components/section/printer-section.js":()=>r(()=>import("./printer-section.Da7e4niM.js"),__vite__mapDeps([78,1,2,3]),import.meta.url),"../components/section/setting-section.js":()=>r(()=>import("./setting-section.ChDVD0QV.js"),__vite__mapDeps([79,36,1,2,3]),import.meta.url),"../components/section/viewer-section.js":()=>r(()=>import("./viewer-section.BKcRJXxV.js"),__vite__mapDeps([80,1,2,3]),import.meta.url),"../components/select/editor-select.js":()=>r(()=>import("./editor-select.D5LZ1s_c.js"),__vite__mapDeps([81,1,2,3]),import.meta.url),"../components/select/printer-select.js":()=>r(()=>import("./printer-select.SmYQmEnA.js"),__vite__mapDeps([82,1,2,3]),import.meta.url),"../components/select/setting-select.js":()=>r(()=>import("./setting-select.mqSr8bMG.js"),__vite__mapDeps([83,1,2,3]),import.meta.url),"../components/select/viewer-select.js":()=>r(()=>import("./viewer-select.BQca4KLe.js"),__vite__mapDeps([84,1,2,3]),import.meta.url),"../components/string/editor-string.js":()=>r(()=>import("./editor-string.SOKzlvhx.js"),__vite__mapDeps([85,1,2,3]),import.meta.url),"../components/string/printer-string.js":()=>r(()=>import("./printer-string.XtvJriEC.js"),__vite__mapDeps([86,1,2,3]),import.meta.url),"../components/string/setting-string.js":()=>r(()=>import("./setting-string.DE_qjFTV.js"),__vite__mapDeps([87,41,1,2,3]),import.meta.url),"../components/string/viewer-string.js":()=>r(()=>import("./viewer-string.CNMIjBPX.js"),__vite__mapDeps([88,1,2,3]),import.meta.url),"../components/subsection/editor-subsection.js":()=>r(()=>import("./editor-subsection.DVfS6e3V.js"),__vite__mapDeps([89,1,2,3]),import.meta.url),"../components/subsection/printer-subsection.js":()=>r(()=>import("./printer-subsection.Z6oiJFgi.js"),__vite__mapDeps([90,1,2,3]),import.meta.url),"../components/subsection/setting-subsection.js":()=>r(()=>import("./setting-subsection.DsCM6nNa.js"),__vite__mapDeps([91,36,1,2,3]),import.meta.url),"../components/subsection/viewer-subsection.js":()=>r(()=>import("./viewer-subsection.CYL123M2.js"),__vite__mapDeps([92,1,2,3]),import.meta.url),"../components/table/editor-table.js":()=>r(()=>import("./editor-table.BvJWrztT.js"),__vite__mapDeps([93,1,2,3,94,73]),import.meta.url),"../components/table/printer-table.js":()=>r(()=>import("./printer-table.DSRZqilc.js"),__vite__mapDeps([95,1,2,3,94]),import.meta.url),"../components/table/setting-table.js":()=>r(()=>import("./setting-table.CdW92Dzd.js"),__vite__mapDeps([96,1,2,3,73]),import.meta.url),"../components/table/viewer-table.js":()=>r(()=>import("./viewer-table.DF2DW7mt.js"),__vite__mapDeps([97,1,2,3,94]),import.meta.url),"../components/text/editor-text.js":()=>r(()=>import("./editor-text.BNtWpBb0.js"),__vite__mapDeps([98,1,2,3]),import.meta.url),"../components/text/printer-text.js":()=>r(()=>import("./printer-text.PWt1cEi0.js"),__vite__mapDeps([99,1,2,3]),import.meta.url),"../components/text/setting-text.js":()=>r(()=>import("./setting-text.BGzamiyb.js"),__vite__mapDeps([100,41,1,2,3]),import.meta.url),"../components/text/viewer-text.js":()=>r(()=>import("./viewer-text.Ba9unfb0.js"),__vite__mapDeps([101,1,2,3]),import.meta.url),"../components/time/editor-time.js":()=>r(()=>import("./editor-time.CMMz_dJC.js"),__vite__mapDeps([102,1,2,3]),import.meta.url),"../components/time/printer-time.js":()=>r(()=>import("./printer-time.DItLZwyl.js"),__vite__mapDeps([103,1,2,3]),import.meta.url),"../components/time/setting-time.js":()=>r(()=>import("./setting-time.D2Vlxxni.js"),__vite__mapDeps([104,29,1,2,3]),import.meta.url),"../components/time/viewer-time.js":()=>r(()=>import("./viewer-time.M7FC6cj_.js"),__vite__mapDeps([105,1,2,3]),import.meta.url),"../components/url/editor-url.js":()=>r(()=>import("./editor-url.Lh5E3UEp.js"),__vite__mapDeps([106,1,2,3,73]),import.meta.url),"../components/url/printer-url.js":()=>r(()=>import("./printer-url.DHb3qfeM.js"),__vite__mapDeps([107,1,2,3]),import.meta.url),"../components/url/setting-url.js":()=>r(()=>import("./setting-url.DHBMLo5h.js"),__vite__mapDeps([108,1,2,3]),import.meta.url),"../components/url/viewer-url.js":()=>r(()=>import("./viewer-url.ue5mvyGt.js"),__vite__mapDeps([109,1,2,3,73]),import.meta.url),"../components/video/editor-video.js":()=>r(()=>import("./editor-video.qRrehFKm.js"),__vite__mapDeps([110,1,2,3]),import.meta.url),"../components/video/printer-video.js":()=>r(()=>import("./printer-video.DIIaVUUs.js"),__vite__mapDeps([111,1,2,3]),import.meta.url),"../components/video/setting-video.js":()=>r(()=>import("./setting-video.Cgmw-px_.js"),__vite__mapDeps([112,10,1,2,3]),import.meta.url),"../components/video/viewer-video.js":()=>r(()=>import("./viewer-video.CdbPN1eV.js"),__vite__mapDeps([113,1,2,3]),import.meta.url)}),`../components/${t}/${e}-${t}.js`,4),this._loadedSingles.add(a)}catch(s){console.warn(`[ComponentLoader] No se pudo cargar ${e}-${t}:`,s.message)}}},async loadBatch(e,t){const a=t.map(s=>this.loadSingle(e,s));await Promise.all(a)},get loadedRoles(){return[...this._loadedRoles]},get loadedSingles(){return[...this._loadedSingles]}},X={async print(e,t){await J.loadRole("printer");let a=await f.getOne("doc",e);if(!a){u.toast("Documento no encontrado.","danger");return}if(a.isEncrypted&&a.decryptionError){u.toast("El documento está bloqueado. Desbloquéelo en el visor primero.","danger");return}const s=await f.getOne("tpl",a.templateId);if(!s){u.toast("La plantilla base no se encuentra.","danger");return}const o=j.getCurrentUser(),i=o?await ee.getProfile(o.uid):null;let n=document.getElementById("print-iframe");n||(n=document.createElement("iframe"),n.id="print-iframe",n.style.position="fixed",n.style.left="-10000px",n.style.top="0",n.style.width="100%",n.style.height="100%",document.body.appendChild(n));const l=n.contentWindow.document,d=new Date(a.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let g="";for(let p=1;p<=12;p++)g+=`.col-${p} { width: ${p/12*100}%; } `;let m="";if(i&&i.name&&i.name.trim()!==""){const p=i.logoBase64?`<img src="${i.logoBase64}" style="max-height: 60px; display: block; margin-bottom: 5px;">`:"",c=`<strong style="font-size: 0.9rem; color: #212529; text-transform: uppercase;">${i.name}</strong>`;m=`<div style="display: flex; flex-direction: column; align-items: flex-start; padding-right: 20px; margin-right: 20px; border-right: 2px solid #dee2e6;">${p}${c}</div>`}l.open(),l.write(`
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
              ${g}
              h1 { margin: 0 0 4px 0; font-size: 1.5rem; color: #212529; }
              p { margin: 0; color: #6c757d; font-size: 0.95rem; }
              .badge-pro { background-color: #0d6efd !important; color: white !important; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; display: inline-block; margin-bottom: 8px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .badge-pro .fw-light { font-weight: 300; opacity: 0.8; }
            </style>
          </head>
          <body>
            <div class="print-header">
              <div class="header-left">
                ${m}
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
                <div style="font-weight: bold; font-size: 0.75rem; text-transform: uppercase; color: #495057;">${t}</div>
              </div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),l.close(),n.onload=()=>{const p=l.getElementById("print-content");let c=!1;const h=[];s.elements.forEach(b=>{if(N(b)){if(c=b.hidePrint===!0||b.hidePrint==="true"||b.hidePrint===""||b["hide-print"]===!0||b["hide-print"]==="true"||b["hide-print"]==="",c)return;const W=l.createElement("div");W.className="col-12 mt-3 mb-2";const Se=b.pageBreak?"page-break-before: always; margin-top: 0 !important;":"";W.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; color: #212529; font-size: 1.1rem; ${Se}">${b.title}</h4>`,p.appendChild(W);return}if(c||b.hidePrint===!0||b.hidePrint==="true"||b.hidePrint===""||b["hide-print"]===!0||b["hide-print"]==="true"||b["hide-print"]==="")return;const y=a.content.find($=>$.fieldId===b.id);if(!y)return;const I=y.value,P=b.tag.replace("setting-","printer-"),w=document.createElement(P);w.setAttribute("title",b.title),b.currency&&w.setAttribute("currency",b.currency),b.options&&w.setAttribute("options",b.options),b.isAutomatic&&w.setAttribute("is-automatic",""),b.columns&&w.setAttribute("columns",JSON.stringify(b.columns)),b.richText!==void 0&&w.setAttribute("rich-text",b.richText),b.inputType!==void 0&&w.setAttribute("input-type",b.inputType),de(w,b),w.setAttribute("edit-value",Array.isArray(I)?JSON.stringify(I):I),w.setAttribute("type",t),w.setAttribute("span-print",b.spanP||12),y.bold&&w.setAttribute("bold",""),y.italic&&w.setAttribute("italic",""),w.setAttribute("color",y.color||"black"),P==="printer-image"&&typeof I=="string"&&I.includes("github://")&&h.push(new Promise($=>{w.addEventListener("dg-media-ready",()=>$(),{once:!0})})),["printer-audio","printer-video","printer-url"].includes(P)&&I&&h.push(new Promise($=>{w.addEventListener("dg-media-ready",()=>$(),{once:!0})}));const M=l.createElement("div");M.className=`col-${b.spanP||12}`,M.appendChild(w),p.appendChild(M)});const v=new Promise(b=>setTimeout(b,5e3));(h.length?Promise.race([Promise.all(h),v]):Promise.resolve()).then(()=>{setTimeout(()=>{n.contentWindow.focus(),n.contentWindow.print()},300)})}},async copyToWhatsApp(e){let t=await f.getOne("doc",e);if(!t){u.toast("Error recuperando documento.","danger");return}if(t.isEncrypted&&t.decryptionError){u.toast("El documento está cifrado. Debe abrirlo primero en el visor.","danger");return}const a=await f.getOne("tpl",t.templateId),s=j.getCurrentUser(),o=s?await ee.getProfile(s.uid):null;let n=`${o&&o.name&&o.name.trim()!==""?`🏢 *${o.name.toUpperCase()}*

`:""}*${t.title.toUpperCase()}*
_${a.title}_
📅 ${new Date(t.date).toLocaleDateString()}
------------------------------
`,l=!1;a.elements.forEach(d=>{if(N(d)){if(l=d.hideWhatsapp===!0||d.hideWhatsapp==="true"||d.hideWhatsapp===""||d["hide-whatsapp"]===!0||d["hide-whatsapp"]==="true"||d["hide-whatsapp"]==="",l)return;n+=`
*--- ${d.title.toUpperCase()} ---*
`;return}if(l||d.hideWhatsapp===!0||d.hideWhatsapp==="true"||d.hideWhatsapp===""||d["hide-whatsapp"]===!0||d["hide-whatsapp"]==="true"||d["hide-whatsapp"]==="")return;const m=t.content.find(h=>h.fieldId===d.id);if(!m)return;const p=d.tag.replace("setting-","viewer-"),c=document.createElement(p);if(d.currency&&c.setAttribute("currency",d.currency),d.options&&c.setAttribute("options",d.options),d.isAutomatic&&c.setAttribute("is-automatic",""),d.columns&&(c.columns=d.columns),d.richText!==void 0&&c.setAttribute("rich-text",d.richText),d.inputType!==void 0&&c.setAttribute("input-type",d.inputType),de(c,d),c.setAttribute("title",d.title),c.setAttribute("edit-value",typeof m.value=="object"?JSON.stringify(m.value):m.value),p==="viewer-table"&&d.columns&&(c.columns=d.columns,c.rows=Array.isArray(m.value)?m.value:[]),typeof c.getWhatsapp=="function"){const h=c.getWhatsapp();h&&h.trim()!==""&&(n+=h+`
`)}}),n+=`
_Generado con DocEngine Pro_`,navigator.clipboard.writeText(n).then(()=>u.toast("📋 ¡Contenido copiado al portapapeles! Listo para pegar en WhatsApp.","success")).catch(()=>u.toast("Error al acceder al portapapeles.","danger"))}},R={async saveUserConfig(e,t){await L.update("users",e,{githubConfig:t}).catch(async a=>{throw console.error("Error guardando config github",a),a})},async getUserConfig(e){const t=await L.getRaw("users",e);return t&&t.githubConfig||null},async addFileRecord(e){return L.add("github_files",e)},async listFiles(e){return L.queryWhere("github_files","userId",e)},async deleteFileRecord(e){await L.delete("github_files",e)},async updateLastUsedSettings(e,t,a){await L.update("users",e,{"githubConfig.lastUsedRepo":t,"githubConfig.lastUsedFolder":a}).catch(s=>console.error("Error actualizando ultima config",s))}},S={async validateCredentials(e,t){if(!(await fetch("https://api.github.com/user",{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales invalidas o token sin permisos.");return!0},async getUserRepos(e){const a=await fetch("https://api.github.com/user/repos?per_page=100&sort=updated",{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}});if(!a.ok)throw new Error("No se pudieron cargar los repositorios de GitHub.");const o=(await a.json()).map(n=>({name:n.name,isPrivate:n.private,hasPages:n.has_pages,owner:n.owner.login})),i=o.map(async n=>{if(n.hasPages&&!n.isPrivate)try{const l=await fetch(`https://api.github.com/repos/${n.owner}/${n.name}/pages`,{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}});if(l.ok){const d=await l.json();n.pagesUrl=d.html_url}}catch{console.warn(`No se pudo obtener el site de ${n.name}`)}});return await Promise.all(i),o},async uploadFile(e,t,a,s,o){const i=await this._toBase64(t),n=a.replace(/^\//,"").replace(/\/$/,""),l=n?`${n}/${s}`:s,d=`https://api.github.com/repos/${e.githubUser}/${o}/contents/${l}`,g={message:`Subido desde DocEngine: ${s}`,content:i},m=await fetch(d,{method:"PUT",headers:{Authorization:`Bearer ${e.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(g)});if(!m.ok){const p=await m.json();throw new Error(p.message||"Error al subir archivo a GitHub")}return await m.json()},async deleteFile(e,t,a,s){const o=`https://api.github.com/repos/${e.githubUser}/${s}/contents/${t}`,i={message:"Eliminado desde DocEngine",sha:a};if(!(await fetch(o,{method:"DELETE",headers:{Authorization:`Bearer ${e.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(e){return new Promise((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result.split(",")[1]),s.onerror=o=>a(o)})},async fetchSecureFile(e,t,a){const s=`https://api.github.com/repos/${e.githubUser}/${a}/contents/${t}`,o=await fetch(s,{headers:{Authorization:`Bearer ${e.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!o.ok)throw new Error(`Error descargando archivo (${o.status})`);return await o.blob()}};function He(e=12){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";const s=new Uint32Array(e);crypto.getRandomValues(s);for(let o=0;o<e;o++)a+=t[s[o]%t.length];return a}const Fe={show({onGenerate:e}={}){return new Promise(t=>{const a=document.getElementById("shareServiceModal");a&&a.remove();const s=`
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
      `,o=document.createElement("div");o.innerHTML=s,document.body.appendChild(o.firstElementChild);const i=document.getElementById("shareServiceModal"),n=new window.bootstrap.Modal(i),l=document.getElementById("shareGenerateBtn"),d=document.getElementById("shareFinalLink"),g=document.getElementById("shareApiLink"),m=document.getElementById("shareStateConfig"),p=document.getElementById("shareStateLoading"),c=document.getElementById("shareStateSuccess"),h=document.getElementById("shareModalFooter"),v=document.getElementById("shareModalCloseTop");let E=!1,b={};i.addEventListener("hide.bs.modal",()=>{document.activeElement&&i.contains(document.activeElement)&&document.activeElement.blur()}),i.addEventListener("hidden.bs.modal",()=>{i.remove(),t(E?{succeeded:!0,...b}:{succeeded:!1})}),l.addEventListener("click",async()=>{m.classList.add("d-none"),h.classList.add("d-none"),v.classList.add("d-none"),p.classList.remove("d-none");try{if(e){const y=He(),I=await e(y);d.value=I.visorUrl||"",g.value=I.apiUrl||"",b={visorUrl:I.visorUrl,apiUrl:I.apiUrl,fileUrlPath:I.fileUrlPath}}p.classList.add("d-none"),c.classList.remove("d-none"),v.classList.remove("d-none"),E=!0}catch(y){n.hide(),t({succeeded:!1,error:new Error("Error al subir a GitHub: "+y.message)})}}),i.querySelectorAll(".btn-copy-link").forEach(y=>{y.addEventListener("click",async()=>{const I=y.getAttribute("data-target"),P=document.getElementById(I);try{await navigator.clipboard.writeText(P.value);const w=y.innerHTML,M=y.className;y.innerHTML='<i class="fa-solid fa-check"></i>',y.className="btn btn-success text-white btn-copy-link",setTimeout(()=>{y.innerHTML=w,y.className=M},2e3)}catch(w){console.error(w),u.toast("No se pudo copiar automaticamente. Selecciona el enlace y presiona Ctrl+C","warning")}})}),n.show()})}},O=new Map,qe={on(e,t){return O.has(e)||O.set(e,new Set),O.get(e).add(t),()=>this.off(e,t)},once(e,t){const a=s=>{this.off(e,a),t(s)};return this.on(e,a)},off(e,t){const a=O.get(e);a&&(a.delete(t),a.size===0&&O.delete(e))},emit(e,t){const a=O.get(e);if(a)for(const s of a)try{s(t)}catch(o){console.error(`[EventBus] Error en handler de "${e}":`,o)}},activeEvents(){return Array.from(O.keys())},listenerCount(e){const t=O.get(e);return t?t.size:0},clear(e){e?O.delete(e):O.clear()}},Ge={generateRandomKey(e=12){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";const s=new Uint32Array(e);crypto.getRandomValues(s);for(let o=0;o<e;o++)a+=t[s[o]%t.length];return a},async createSharedPortal(e,t,a){const s=A.getCurrentUser();if(!s)throw new Error("Debes estar autenticado para compartir.");const o=await R.getUserConfig(s.uid);if(!o||!o.githubToken)throw new Error("Configura tu Token de GitHub en tu perfil.");const i=o.githubUser||o.username;if(!i)throw new Error("Falta el Usuario de GitHub en tu configuracion.");const n="mi-gestion",l="compartido",d=window.location.href.split("?")[0].split("#")[0],g=d.substring(0,d.lastIndexOf("/")),m=g+"/visor.html",p=g+"/api.html",c=await Fe.show({onGenerate:async(h,{includeKey:v}={includeKey:!0})=>{const E={version:"1.0",layout:e,data:t,authorId:s.uid,timestamp:new Date().toISOString()},b=await _.encryptShared(E,h),x=JSON.stringify(b,null,2),y=new Blob([x],{type:"application/json"}),I=new File([y],`${a}.json`,{type:"application/json"});await S.uploadFile(o,I,l,I.name,n);const P=`${i}/${n}/${l}/${I.name}`,w=`${m}?file=${encodeURIComponent(P)}`,M=`${p}?file=${encodeURIComponent(P)}`,$=v?`${w}#key=${h}`:w,W=v?`${M}#key=${h}`:M;return{visorUrl:$,apiUrl:W,fileUrlPath:P}}});if(c.succeeded)return qe.emit("share:completed",{visorUrl:c.visorUrl,apiUrl:c.apiUrl,fileUrlPath:c.fileUrlPath}),{fileUrlPath:c.fileUrlPath,visorUrl:c.visorUrl,apiUrl:c.apiUrl};{const h=new Error("Operacion cancelada por el usuario.");throw h.userCancelled=!0,h}}};function ze(){const e=Date.now(),t=new Date(e),a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),i=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),l=String(t.getMilliseconds()).padStart(3,"0");return`${a}-${s}/${o}/${i} ${n} ${l}`}const te={handlers:{},currentDocId:null,currentDocContent:[],currentDocTitle:"",init(e){this.handlers=e,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(e){if(!e)return;let t=await f.getOne("doc",e);if(!t){u.toast("El documento no existe.","danger");return}if(t.isEncrypted&&t.decryptionError){const s=await u.promptPassword("Acceso Seguro Requerido","Este documento está cifrado. Ingrese su Frase Maestra para visualizarlo:");if(!s)return this.handlers.onBack();try{if(await _.setMasterKey(s),t=await f.getOne("doc",e),t.decryptionError)return u.toast("Frase incorrecta. Acceso denegado.","danger"),this.handlers.onBack();u.toast("Documento descifrado con éxito","success")}catch{return u.toast("Error del sistema al intentar desbloquear.","danger"),this.handlers.onBack()}}const a=await f.getOne("tpl",t.templateId);if(!a){u.toast("La plantilla base no se encuentra.","danger");return}this.currentDocId=t.id,this.currentDocTitle=t.title,this.titleInput.value=t.title,this.titleInput.readOnly=!0,this._renderHeaderActions(t),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this.currentDocContent=this._buildFlatDocArray(t,a),this._renderContent(t,a,this.canvas)},_buildFlatDocArray(e,t){const a=[];return t.elements.forEach(s=>{const o=e.content.find(i=>i.fieldId===s.id);a.push({def:s,data:o||null})}),a},async renderReadOnly(e,t){t.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let a=await f.getOne("doc",e);if(!a){t.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(a.isEncrypted&&a.decryptionError){t.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const s=await f.getOne("tpl",a.templateId);if(!s){t.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}t.innerHTML="";const o=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(a,s,t,o)},_renderContent(e,t,a,s=""){e.content&&typeof e.content=="object"&&!Array.isArray(e.content)&&(e.content=Object.values(e.content)),t.elements.some(i=>N(i))?(a.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(e,t,a,s)):(a.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(e,t,a))},_renderFlatView(e,t,a){e.content&&e.content.forEach(s=>{const o=t.elements.find(n=>n.id===s.fieldId);if(!o)return;const i=this._createViewerComponent(o,s);a.appendChild(i)})},_renderStructuredView(e,t,a,s=""){const o=[];let i={title:"Principal",def:null,elements:[]};t.elements.forEach(m=>{if(N(m))(i.elements.length>0||i.title!=="Principal")&&o.push(i),i={title:m.title||"Sección",def:m,elements:[]};else{const p=e.content.find(c=>c.fieldId===m.id);p&&i.elements.push({def:m,data:p})}}),o.push(i);const n=o.filter(m=>m.def?!(m.def.hideView===!0||m.def.hideView==="true"||m.def.hideView===""||m.def["hide-view"]===!0||m.def["hide-view"]==="true"||m.def["hide-view"]===""):!0),l=`nav-viewer-${e.id}${s}`;let d=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${l}" role="tablist">`,g=`<div class="tab-content tab-content-custom" id="${l}Content">`;n.forEach((m,p)=>{const c=`view-sec-${p}-${e.id}${s}`,h=p===0,v=m.def?m.def.id:"SECTION_PRINCIPAL",E=s===""?`<span class="text-secondary opacity-25 btn-share-section d-inline-flex align-items-center justify-content-center p-1 rounded" 
                data-secid="${v}" 
                data-sectitle="${m.title}" 
                title="Compartir Sección" 
                style="transition: all 0.2s; cursor: pointer; z-index: 2;" 
                onmouseover="this.classList.replace('opacity-25', 'opacity-100'); this.classList.replace('text-secondary', 'text-primary'); this.classList.add('bg-light');" 
                onmouseout="this.classList.replace('opacity-100', 'opacity-25'); this.classList.replace('text-primary', 'text-secondary'); this.classList.remove('bg-light');">
             <i class="fa-solid fa-share-nodes"></i>
          </span>`:"",b=s===""?`<span class="text-secondary opacity-25 btn-share-section d-inline-flex align-items-center justify-content-center p-2 rounded" 
                data-secid="${v}" 
                data-sectitle="${m.title}" 
                title="Compartir Sección" 
                style="transition: all 0.2s; cursor: pointer;" 
                onmouseover="this.classList.replace('opacity-25', 'opacity-100'); this.classList.replace('text-secondary', 'text-primary'); this.classList.add('bg-light');" 
                onmouseout="this.classList.replace('opacity-100', 'opacity-25'); this.classList.replace('text-primary', 'text-secondary'); this.classList.remove('bg-light');">
             <i class="fa-solid fa-share-nodes"></i>
          </span>`:"";d+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${h?"active":""} d-flex align-items-center gap-2" data-bs-toggle="tab" data-bs-target="#v-tab-${c}" type="button">
            <span>${m.title}</span> 
            ${E}
          </button>
        </li>`,g+=`
        <div class="tab-pane fade ${h?"show active":""}" id="v-tab-${c}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm" data-bs-toggle="collapse" data-bs-target="#v-coll-${c}" style="cursor:pointer;">
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold text-primary text-uppercase small">${m.title}</span>
                    ${b}
                </div>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${c}" class="collapse d-md-block ${h?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),a.innerHTML=d+"</ul>"+g+"</div>",s===""&&a.querySelectorAll(".btn-share-section").forEach(m=>{m.onclick=p=>{p.stopPropagation(),this._generatePortal(m.dataset.secid,m.dataset.sectitle)}}),n.forEach((m,p)=>{const c=`view-sec-${p}-${e.id}${s}`,h=a.querySelector(`#v-coll-${c} .row`);m.elements.forEach(v=>{const E=this._createViewerComponent(v.def,v.data);h.appendChild(E)})})},_createViewerComponent(e,t){const a=e.tag.replace("setting-","viewer-"),s=document.createElement(a);return e.currency&&s.setAttribute("currency",e.currency),e.options&&s.setAttribute("options",e.options),e.isAutomatic&&s.setAttribute("is-automatic",""),e.richText!==void 0&&s.setAttribute("rich-text",e.richText),e.inputType!==void 0&&s.setAttribute("input-type",e.inputType),s.setData&&s.setData({...e,...t||{},value:t?t.value:""}),s},_renderHeaderActions(e){this.headerActions&&(this.headerActions.innerHTML=`
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
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(e.id),document.getElementById("btn-whatsapp").onclick=()=>X.copyToWhatsApp(e.id),document.getElementById("btn-share-doc").onclick=()=>this._generatePortal("ALL"),document.getElementById("print-v").onclick=t=>{t.preventDefault(),X.print(e.id,"Visual")},document.getElementById("print-c").onclick=t=>{t.preventDefault(),X.print(e.id,"Compacto")},document.getElementById("print-f").onclick=t=>{t.preventDefault(),X.print(e.id,"Facil Lectura")})},async _generatePortal(e="ALL",t=""){try{u.toast("Generando Portal Seguro...","info");let a=[];if(e==="ALL")a=this.currentDocContent,t="Completo";else if(e==="SECTION_PRINCIPAL"){let n=this.currentDocContent.length;for(let l=0;l<this.currentDocContent.length;l++)if(N(this.currentDocContent[l].def)){n=l;break}a=this.currentDocContent.slice(0,n)}else{const n=this.currentDocContent.findIndex(d=>d.def.id===e);if(n===-1)throw new Error("Sección no encontrada.");let l=this.currentDocContent.length;for(let d=n+1;d<this.currentDocContent.length;d++)if(N(this.currentDocContent[d].def)){l=d;break}a=this.currentDocContent.slice(n,l)}let s=`${this.currentDocTitle}_${t}`.replace(/[^a-z0-9]/gi,"_").toLowerCase();s=s+"/"+ze();const o=document.querySelector('link[href*="bootstrap"]')||document.querySelector('link[rel="stylesheet"]'),i=o?o.href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";await Ge.createSharedPortal({type:"docengine_array",theme:i},a,s)}catch(a){if(a.userCancelled)return;console.error("Error generando portal:",a),u.toast("Error al crear el enlace: "+a.message,"danger")}}},ae={handlers:{},currentDocId:null,currentTplId:null,_exposeToWindow(){typeof window<"u"&&(window.DocumentEditor=this)},init(e){this.handlers=e,this.cacheDOM(),this._exposeToWindow()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(e){const t=await f.getOne("tpl",e);if(!t)return u.toast("Error: La plantilla seleccionada no existe.","danger"),this.handlers.onBack();if(t.encrypted&&!f._masterKey){const s=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!s)return this.handlers.onBack();if(!await f.verifyMasterPhrase(s))return u.toast("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla.","danger"),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=e,this.titleInput.value="",this.titleInput.readOnly=!1;const a=document.getElementById("doc-template-selector");a&&(a.style.display="none"),await this.renderCanvas(e,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(e){const t=await f.getOne("doc",e);t&&(this.currentDocId=e,this.currentTplId=t.templateId,this.titleInput.value=t.title,this.titleInput.readOnly=!1,await this.renderCanvas(t.templateId,t.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(e,t){const a=await f.getOne("tpl",e);if(!a)return;this.canvas.innerHTML="",a.elements.filter(i=>N(i)).length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(a.elements,t)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),a.elements.forEach(i=>{const n=this._createComponent(i,t);this.canvas.appendChild(n)}))},_renderStructuredUI(e,t){const a=[];let s={title:"Principal",def:null,elements:[]};e.forEach(d=>{N(d)?((s.elements.length>0||s.title!=="Principal")&&a.push(s),s={title:d.title||"Sección",def:d,elements:[]}):s.elements.push(d)}),a.push(s);const o=`nav-tabs-${this.currentTplId}`;let i=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${o}" role="tablist">`,n=`<div class="tab-content tab-content-custom" id="${o}Content">`,l=-1;a.forEach((d,g)=>{const m=d.def;!(m&&(m.hideEdit===!0||m.hideEdit==="true"||m.hideEdit===""||m["hide-edit"]===!0||m["hide-edit"]==="true"||m["hide-edit"]===""))&&l===-1&&(l=g)}),l===-1&&(l=0),a.forEach((d,g)=>{const m=`sec-${g}-${this.currentTplId}`,p=g===l,c=d.def,v=c&&(c.hideEdit===!0||c.hideEdit==="true"||c.hideEdit===""||c["hide-edit"]===!0||c["hide-edit"]==="true"||c["hide-edit"]==="")?" d-none":"";i+=`
        <li class="nav-item${v}" role="presentation">
          <button class="nav-link ${p?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${m}" type="button">
            ${d.title}
          </button>
        </li>`,n+=`
        <div class="tab-pane fade ${p?"show active":""} group-pane${v}" id="tab-pane-${m}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${m}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${d.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${m}" class="collapse d-md-block ${p?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=i+"</ul>"+n+"</div>",a.forEach((d,g)=>{const m=`sec-${g}-${this.currentTplId}`,p=this.canvas.querySelector(`#collapse-${m} .row`);d.elements.forEach(c=>{const h=this._createComponent(c,t);p.appendChild(h)})})},_createComponent(e,t){const a=e.tag.replace("setting-","editor-"),s=document.createElement(a);s.setAttribute("field-id",e.id),e.isAutomatic&&s.setAttribute("is-automatic",""),(e.hideEdit===!0||e.hideEdit==="true"||e.hideEdit===""||e["hide-edit"]===!0||e["hide-edit"]==="true"||e["hide-edit"]==="")&&s.classList.add("d-none");const i=t.find(d=>d.fieldId===e.id),n=i?i.value:"",l={...e,...i||{},value:n};return s.setData&&s.setData(l),s},setupSaveButton(e){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary shadow-sm"><i class="fa-solid fa-save"></i> ${e}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const e=document.getElementById("btn-save-document"),t=this.titleInput.value.trim();if(!t){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),u.toast("⚠️ Imposible Guardar: El documento requiere un Título.","warning");return}const a=e.innerHTML;e.disabled=!0,e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{let s=this.currentDocId;if(!s){const m=U.generateSemanticBaseId("doc",t,15),p=await f.getAll("doc")||[];s=m;let c=2;for(;p.some(h=>h.id===s);)s=`${m}${c}`,c++}const o=await f.getOne("tpl",this.currentTplId),n=Array.from(this.canvas.querySelectorAll("[field-id]")).filter(m=>!m.parentElement.closest("editor-table")),l=[];let d=!0;if(n.forEach(m=>{typeof m.validate=="function"&&!m.validate()&&(d=!1),typeof m.getData=="function"&&l.push(m.getData())}),!d)throw new Error("Revise los campos marcados en rojo.");const g={id:s,title:t,templateId:this.currentTplId,templateTitle:o?o.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:l,isEncrypted:o&&o.encrypted||!1};await f.save("doc",g),this.handlers.onSave()}catch(s){console.error("[DocumentEditor] Error al guardar:",s),u.toast("Error al guardar: "+s.message,"danger"),e&&(e.disabled=!1,e.innerHTML=a)}}},q={init(){this._setupGithubBridge(),Q.init({onViewDocument:async e=>{Q.hide(),this.showEditorView(),await te.render(e)},onNavigateToDesigner:()=>{const e=document.getElementById("nav-designer");e?e.click():u.toast("Navegue al diseñador para crear una plantilla.","info")}}),te.init({onEdit:async e=>{await ae.loadForEditing(e),await this._checkAndRenderRelatedDocs(e,!1)},onBack:()=>{this.showListView()}}),ae.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),Q.render()},async createFromTemplate(e){Q.hide(),this.showEditorView(),await ae.loadForCreation(e),await this._checkAndRenderRelatedDocs(e,!0)},async _checkAndRenderRelatedDocs(e,t){let a;if(t)a=await f.getOne("tpl",e);else{const s=await f.getOne("doc",e);s&&(a=await f.getOne("tpl",s.templateId))}if(a&&a.relatedDocIds){const s=a.relatedDocIds.split(",").map(o=>o.trim()).filter(o=>o);s.length>0&&this._renderRelatedBar(s)}},async _renderRelatedBar(e){this._clearRelatedBar();const t=document.createElement("div");t.id="related-docs-wrapper",t.className="no-print",t.style.position="fixed",t.style.bottom="20px",t.style.left="20px",t.style.zIndex="1050",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="flex-start";const a=document.createElement("button");a.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",a.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${e.length}</span>
    `,a.title="Ver documentos relacionados";const s=document.createElement("div");s.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",s.style.position="absolute",s.style.minWidth="250px",s.style.maxWidth="300px",s.style.maxHeight="300px",s.style.overflowY="auto",s.style.transition="all 0.2s ease";const o=document.createElement("div");o.className="d-flex flex-column gap-1";let i=0;for(const n of e){const l=await f.getOne("doc",n);if(l){i++;const d=document.createElement("button");d.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",d.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,d.title=l.title,d.onclick=()=>{this._toggleDrawer(s,a,!1);const g=document.getElementById("modal-related-doc"),m=document.getElementById("modal-related-body");new bootstrap.Modal(g).show(),te.renderReadOnly(l.id,m)},o.appendChild(d)}}s.appendChild(o),i!==0&&(a.onclick=n=>{n.stopPropagation(),s.classList.contains("d-none")?(this._positionDrawer(t,s),s.classList.remove("d-none"),a.classList.remove("rounded-pill"),a.classList.add("rounded-start")):this._toggleDrawer(s,a,!1)},t.appendChild(s),t.appendChild(a),document.body.appendChild(t))},_toggleDrawer(e,t,a){a?e.classList.remove("d-none"):(e.classList.add("d-none"),t.classList.add("rounded-pill"),t.classList.remove("rounded-start"))},_positionDrawer(e,t){const a=e.getBoundingClientRect(),s=260,i=window.innerWidth-a.right;t.style.top="",t.style.bottom="",t.style.left="",t.style.right="",i>s?(t.style.left="100%",t.style.bottom="0",t.style.marginLeft="10px"):(t.style.bottom="100%",t.style.left="0",t.style.marginBottom="10px")},_clearRelatedBar(){const e=document.getElementById("related-docs-wrapper");e&&e.remove();const t=document.getElementById("related-docs-bar");t&&t.remove()},showListView(){this._clearRelatedBar();const e=document.getElementById("doc-list-view"),t=document.getElementById("doc-editor-view");e&&(e.style.display="block"),t&&(t.style.display="none"),Q.render()},showEditorView(){this._clearRelatedBar();const e=document.getElementById("doc-list-view"),t=document.getElementById("doc-editor-view");e&&(e.style.display="none"),t&&(t.style.display="block")},_setupGithubBridge(){window.addEventListener("request-github-upload",async e=>{const{file:t,onSuccess:a,onError:s}=e.detail;try{const o=j.getCurrentUser();if(!o)throw new Error("NO_USER");const i=await R.getUserConfig(o.uid);if(!i||!i.githubToken)return s("NO_GITHUB");const n=i.lastUsedRepo;if(!n)return u.toast("Por favor, sube al menos un archivo en la Bóveda de GitHub para establecer tu repositorio predeterminado.","warning"),s("NO_REPO");const l=Date.now()+"_"+t.name.replace(/[^a-z0-9.]/gi,"_").toLowerCase(),d="doc-engine-media";await S.uploadFile(i,t,d,l,n);const g=`github://${n}/${d}/${l}`;a(g)}catch(o){console.error("[Puente GitHub] Error al subir:",o),s(o.message)}}),window.addEventListener("request-github-file",async e=>{const{url:t,onSuccess:a,onError:s}=e.detail;try{const o=j.getCurrentUser();if(!o)throw new Error("NO_USER");const i=await R.getUserConfig(o.uid);if(!i||!i.githubToken)throw new Error("NO_GITHUB");const n=t.replace("github://",""),l=n.indexOf("/"),d=n.substring(0,l),g=n.substring(l+1),m=await S.fetchSecureFile(i,g,d),p=URL.createObjectURL(m);a(p)}catch(o){console.error("[Puente GitHub] Error al obtener archivo seguro:",o),s()}})}},Je={currentLogoBase64:null,render(e){const t=document.getElementById(e);t&&(t.innerHTML=`
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
    `,this._bindEvents(),this._loadData())},async _loadData(){const e=j.getCurrentUser();if(e)try{const t=await ee.getProfile(e.uid);if(t&&(document.getElementById("profile-name-input").value=t.name||"",t.logoBase64)){this.currentLogoBase64=t.logoBase64;const a=document.getElementById("profile-logo-preview");a.src=t.logoBase64,a.classList.remove("d-none"),document.getElementById("profile-logo-placeholder").classList.add("d-none")}}catch(t){console.error("Error al cargar los datos del perfil:",t)}},_bindEvents(){const e=document.getElementById("profile-logo-input"),t=document.getElementById("profile-name-input"),a=document.getElementById("btn-save-profile"),s=document.getElementById("profile-logo-preview"),o=document.getElementById("profile-logo-placeholder");e.addEventListener("change",i=>{const n=i.target.files[0];if(!n)return;const l=200*1024;if(n.size>l){u.toast("La imagen es demasiado pesada. El límite es 200KB.","warning"),i.target.value="";return}const d=new FileReader;d.onload=g=>{this.currentLogoBase64=g.target.result,s.src=this.currentLogoBase64,s.classList.remove("d-none"),o.classList.add("d-none")},d.readAsDataURL(n)}),a.onclick=async()=>{const i=t.value.trim(),n=j.getCurrentUser();if(!n)return u.toast("Error: No se detectó una sesión activa.","danger");if(i.length>40)return u.toast("El nombre no puede exceder los 40 caracteres.","warning");const l=a.innerHTML;a.innerHTML='<i class="fa-solid fa-spinner fa-spin me-1"></i> Guardando en la nube...',a.disabled=!0;try{await ee.saveProfile(n.uid,{name:i,logoBase64:this.currentLogoBase64}),u.toast("¡Perfil guardado correctamente!","success")}catch(d){console.error(d),u.toast("Ocurrió un error al intentar guardar el perfil.","danger")}finally{a.innerHTML=l,a.disabled=!1}}}},We={render(e){const t=document.getElementById(e);t&&(t.innerHTML=`
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

              <div class="form-check form-switch mb-3">
                  <input class="form-check-input" type="checkbox" id="cfg-dev-mode">
                  <label class="form-check-label small fw-bold" for="cfg-dev-mode">Modo Desarrollador</label>
                  <div class="form-text small">Muestra acciones de depuración (ej. "Extraer JSON") en el Gestor de Documentos.</div>
              </div>

              <button id="btn-save-prefs" class="btn btn-dark w-100 btn-sm">Guardar Preferencias (MCW)</button>
          </div>
      </div>
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader())},_loadCurrentPrefs(){const e=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=e||"35",document.getElementById("cfg-dev-mode").checked=localStorage.getItem("doc_engine_dev_mode")==="true"},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),u.toast("Preferencias guardadas.","success")},document.getElementById("cfg-dev-mode").addEventListener("change",e=>{localStorage.setItem("doc_engine_dev_mode",e.target.checked),u.toast(e.target.checked?"Modo Desarrollador activado.":"Modo Desarrollador desactivado.","info")})},_initThemeLoader(){const e=document.getElementById("cfg-theme-api"),t=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(a=>a.json()).then(a=>{const s=a.themes;e.innerHTML="";const o=document.createElement("option");o.value="default",o.textContent="Default (Bootstrap Standard)",(!t||t.includes("bootstrap.min.css")&&!t.includes("bootswatch"))&&(o.selected=!0),e.append(o),s.forEach((i,n)=>{const l=document.createElement("option");l.value=n,l.textContent=i.name+(i.description?` (${i.description})`:"");const d=i.cssCdn||i.css;t===d&&(l.selected=!0),e.append(l)}),e.addEventListener("change",i=>{let n="";if(i.target.value==="default")n="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=s[i.target.value];n=l.cssCdn||l.css}this._applyThemeWithPreload(n,e)})}).catch(a=>{console.error("Error cargando temas:",a),e.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(e,t){t.disabled=!0;const a=document.createElement("div");a.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,a.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="1"});const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=()=>{document.getElementById("theme-link").setAttribute("href",e),localStorage.setItem("doc_engine_theme_url",e),setTimeout(()=>{t.disabled=!1,a.style.opacity="0",setTimeout(()=>{a.remove(),s.remove()},300)},200)},s.onerror=()=>{u.toast("Error al descargar el tema seleccionado.","danger"),t.disabled=!1,a.remove(),s.remove()},document.head.appendChild(s)}},Ke={render(e){const t=document.getElementById(e);t&&(t.innerHTML=`
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
    `,this._bindEvents())},_bindEvents(){const e=document.getElementById("btn-change-pass");e.onclick=async()=>{const t=document.getElementById("current-pass").value,a=document.getElementById("new-pass").value;if(!t||!a)return u.toast("Complete ambos campos.","warning");if(!A.validatePassword(a))return u.toast("La contraseña no cumple requisitos (8+ chars, Mayús, Num).","warning");const s=e.innerHTML;e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const o=T.currentUser;if(!o)throw new Error("Sin sesión.");const i=ke.credential(o.email,t);await je(o,i),await Me(o,a),u.toast("Contraseña actualizada correctamente.","success"),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(o){console.error(o),u.toast(o.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+o.message,"danger")}finally{e.disabled=!1,e.innerHTML=s}}}},Qe={render(e){const t=document.getElementById(e);t&&(t.innerHTML=`
      <div class="card mb-4 shadow-sm border-0">
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
    `,this._loadData(),this._bindEvents())},async _loadData(){const e=j.getCurrentUser();if(!e)return;const t=await R.getUserConfig(e.uid);t&&(document.getElementById("set-gh-user").value=t.githubUser||"",document.getElementById("set-gh-token").value=t.githubToken||"",this.lastUsedRepoTemp=t.lastUsedRepo||null,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))},_bindEvents(){const e=j.getCurrentUser();e&&(document.getElementById("github-config-form").addEventListener("submit",async t=>{t.preventDefault();const a=document.getElementById("gh-config-msg"),s=t.target.querySelector('button[type="submit"]'),o=document.getElementById("set-gh-user").value.trim(),i=document.getElementById("set-gh-token").value.trim();try{s.disabled=!0,a.innerHTML='<span class="text-info"><i class="fa-solid fa-spinner fa-spin me-1"></i>Verificando cuenta...</span>',await S.validateCredentials(o,i),await R.saveUserConfig(e.uid,{githubUser:o,githubToken:i,lastUsedRepo:this.lastUsedRepoTemp||null}),a.innerHTML='<span class="text-success fw-bold"><i class="fa-solid fa-circle-check me-1"></i>¡Conexión Exitosa! Recarga la página.</span>',setTimeout(()=>window.location.reload(),1e3)}catch(n){a.innerHTML=`<span class="text-danger fw-bold"><i class="fa-solid fa-triangle-exclamation me-1"></i>Error: ${n.message}</span>`}finally{s.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{await u.confirm("Desvincular Cuenta","¿Estás seguro de que deseas desvincular tu cuenta de GitHub?")&&(await R.saveUserConfig(e.uid,null),u.toast("Cuenta desvinculada exitosamente. Recargando...","info"),setTimeout(()=>window.location.reload(),1500))}))}},B={async listDocumentsForBackup(){const[e,t]=await Promise.all([f.getAllRaw("doc"),f.getAllRaw("tpl")]),a=new Map(t.map(s=>[s.id,s]));return e.map(s=>({...s,_template:a.get(s.templateId)||null}))},async verifyPhraseForBackup(e){const t=e.filter(a=>a.isEncrypted);if(t.length===0)return{ok:!0};if(!_.masterKey){const a=await u.promptPassword("Frase Maestra requerida","Vas a respaldar documentos cifrados. Ingresa tu Frase Maestra para confirmar que este respaldo se podrá recuperar más adelante.");if(!a)return{ok:!1,cancelled:!0};await _.setMasterKey(a)}try{return await _.decryptData(t[0].content),{ok:!0}}catch{return{ok:!1,error:"La Frase Maestra activa no coincide con estos documentos cifrados."}}},async exportSelected(e){const t=e.map(n=>{const{_template:l,...d}=n;return{document:d,template:l||null}}),a={version:"3.0-doc-centric",exportDate:new Date().toISOString(),documents:t},s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),o=URL.createObjectURL(s),i=document.createElement("a");i.href=o,i.download=`respaldo_docengine_${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(o)},async analyzeBackupFile(e){const t=await e.text();let a;try{a=JSON.parse(t)}catch{throw new Error("El archivo no es un JSON válido.")}let s=[],o="3";if(Array.isArray(a.documents)&&a.documents.length>0&&a.documents[0]&&typeof a.documents[0]=="object"&&"document"in a.documents[0])s=a.documents.map(d=>({document:d.document,template:d.template||null}));else if(Array.isArray(a.documents)||Array.isArray(a.templates)){o="2";const d=new Map((a.templates||[]).map(g=>[g.id,g]));s=(a.documents||[]).map(g=>({document:g,template:d.get(g.templateId)||null}))}else throw new Error("Formato de archivo de respaldo no reconocido.");if(s.length===0)throw new Error("El respaldo no contiene documentos para restaurar.");const i=await f.getAllRaw("doc"),n=new Set(i.map(d=>d.id)),l=i.map(d=>d.title);return s.map(d=>({...d,_format:o,_exists:n.has(d.document.id),_existingTitles:l}))},async verifyPhraseForRestore(e){const t=e.filter(o=>o.document.isEncrypted);if(t.length===0)return{ok:!0};t.filter(o=>o._format==="2");const a=t.filter(o=>o._format!=="2"),s=await u.promptPassword("Frase Maestra requerida","Este respaldo contiene documentos cifrados. Ingresa la Frase Maestra que usabas cuando se generó el respaldo.");return s?a.length>0&&!await _.verifyPhrase(s,a[0].document.content)?{ok:!1,error:"Esa Frase Maestra no coincide con el contenido cifrado de este respaldo (¿la cambiaste después de generarlo?)."}:(await _.setMasterKey(s),{ok:!0}):{ok:!1,cancelled:!0}},suggestNewTitle(e,t){let a=`${e} (restaurado)`,s=2;for(;t.includes(a);)a=`${e} (restaurado ${s})`,s++;return a},async restoreEntry(e,t={}){const a=e._format!=="2";if(e.template){const o={...e.template};o.updatedAt||(o.updatedAt=new Date().toISOString()),a?await f.saveRaw("tpl",o):await f.save("tpl",o)}const s={...e.document};t.asNew&&(s.title=t.newTitle,s.id=U.generateSemanticBaseId("doc",t.newTitle,15)),a?await f.saveRaw("doc",s):await f.save("doc",s)}},ye={async openBackupSelector(){var m;let e;try{e=await B.listDocumentsForBackup()}catch(p){u.toast("No se pudieron leer tus documentos: "+p.message,"danger");return}if(e.length===0){u.toast("No tienes documentos para respaldar todavía.","info");return}const t="backup-select-modal";(m=document.getElementById(t))==null||m.remove();const a=e.map((p,c)=>{var b,x;const h=((b=p._template)==null?void 0:b.icon)||"📄",v=((x=p._template)==null?void 0:x.title)||p.templateTitle||"Plantilla desconocida",E=p.isEncrypted?'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i> Cifrado</span>':"";return`
          <div class="form-check border-bottom py-2 d-flex align-items-center">
            <input class="form-check-input me-3 bkp-doc-check" type="checkbox" value="${c}" id="bkp-doc-${c}" checked>
            <label class="form-check-label flex-grow-1" for="bkp-doc-${c}">
              <span class="me-1">${h}</span>
              <span class="fw-semibold">${p.title}</span>
              <span class="text-muted small ms-2">(${v})</span>
              ${E}
            </label>
          </div>`}).join(""),s=`
      <div class="modal fade" id="${t}" tabindex="-1" aria-hidden="true">
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
                <i class="fa-solid fa-download me-2"></i>Respaldar seleccionados (${e.length})
              </button>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",s);const o=document.getElementById(t),i=new bootstrap.Modal(o),n=()=>Array.from(o.querySelectorAll(".bkp-doc-check")),l=document.getElementById("bkp-confirm-btn"),d=document.getElementById("bkp-toggle-all"),g=()=>{const p=n().filter(c=>c.checked).length;l.innerHTML=`<i class="fa-solid fa-download me-2"></i>Respaldar seleccionados (${p})`,l.disabled=p===0};n().forEach(p=>p.onchange=g),d.onclick=()=>{const p=n().every(c=>c.checked);n().forEach(c=>c.checked=!p),d.textContent=p?"Seleccionar todos":"Deseleccionar todos",g()},l.onclick=async()=>{const p=n().filter(h=>h.checked).map(h=>e[Number(h.value)]);if(p.length===0)return;l.disabled=!0,l.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Verificando...';const c=await B.verifyPhraseForBackup(p);if(!c.ok){c.cancelled||u.toast(c.error,"danger"),l.disabled=!1,g();return}l.innerHTML='<span class="spinner-border spinner-border-sm me-2"></span>Generando archivo...';try{await B.exportSelected(p),u.toast("Respaldo generado correctamente.","success"),i.hide()}catch(h){u.toast("Error al generar el respaldo: "+h.message,"danger"),l.disabled=!1,g()}},o.addEventListener("hidden.bs.modal",()=>o.remove()),i.show()},async openRestoreSelector(e){var p;let t;try{t=await B.analyzeBackupFile(e)}catch(c){u.toast(c.message,"danger");return}const a="restore-select-modal";(p=document.getElementById(a))==null||p.remove();const s=t.map((c,h)=>{var y,I;const v=((y=c.template)==null?void 0:y.icon)||"📄",E=((I=c.template)==null?void 0:I.title)||c.document.templateTitle||"Plantilla desconocida",b=c.document.isEncrypted?'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2"><i class="fa-solid fa-lock"></i> Cifrado</span>':"",x=c._exists?'<span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 ms-2"><i class="fa-solid fa-triangle-exclamation"></i> Ya existe</span>':"";return`
          <div class="form-check border-bottom py-2 d-flex align-items-center">
            <input class="form-check-input me-3 rst-doc-check" type="checkbox" value="${h}" id="rst-doc-${h}" checked>
            <label class="form-check-label flex-grow-1" for="rst-doc-${h}">
              <span class="me-1">${v}</span>
              <span class="fw-semibold">${c.document.title}</span>
              <span class="text-muted small ms-2">(${E})</span>
              ${b}${x}
            </label>
          </div>`}).join(""),o=`
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
                <i class="fa-solid fa-check me-2"></i>Restaurar seleccionados (${t.length})
              </button>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",o);const i=document.getElementById(a),n=new bootstrap.Modal(i),l=()=>Array.from(i.querySelectorAll(".rst-doc-check")),d=document.getElementById("rst-confirm-btn"),g=document.getElementById("rst-toggle-all"),m=()=>{const c=l().filter(h=>h.checked).length;d.innerHTML=`<i class="fa-solid fa-check me-2"></i>Restaurar seleccionados (${c})`,d.disabled=c===0};l().forEach(c=>c.onchange=m),g.onclick=()=>{const c=l().every(h=>h.checked);l().forEach(h=>h.checked=!c),g.textContent=c?"Seleccionar todos":"Deseleccionar todos",m()},d.onclick=async()=>{const c=l().filter(v=>v.checked).map(v=>t[Number(v.value)]);if(c.length===0)return;const h=await B.verifyPhraseForRestore(c);if(!h.ok){h.cancelled||u.toast(h.error,"danger");return}n.hide(),await this._runRestoreLoop(c)},i.addEventListener("hidden.bs.modal",()=>i.remove()),n.show()},async _runRestoreLoop(e){const t={replaced:0,added:0,renamed:0,skipped:0,failed:[]};for(const a of e)try{if(a._exists){const s=B.suggestNewTitle(a.document.title,a._existingTitles),o=await u.chooseAction("El documento ya existe",`"<b>${a.document.title}</b>" ya existe en tu cuenta. ¿Qué quieres hacer?`,[{key:"replace",label:"Reemplazar el existente",class:"btn-danger"},{key:"new",label:`Guardar como nuevo: "${s}"`,class:"btn-primary"},{key:"skip",label:"Omitir este documento",class:"btn-light border"}]);o==="replace"?(await B.restoreEntry(a),t.replaced++):o==="new"?(await B.restoreEntry(a,{asNew:!0,newTitle:s}),t.renamed++):t.skipped++}else await B.restoreEntry(a),t.added++}catch(s){t.failed.push({title:a.document.title,error:s.message})}this._showRestoreSummary(t)},_showRestoreSummary(e){var n;const t="restore-summary-modal";(n=document.getElementById(t))==null||n.remove();const a=[];e.added&&a.push(`✅ ${e.added} documento(s) nuevos agregados`),e.replaced&&a.push(`♻️ ${e.replaced} documento(s) reemplazados`),e.renamed&&a.push(`🆕 ${e.renamed} documento(s) guardados con nombre nuevo`),e.skipped&&a.push(`⏭️ ${e.skipped} documento(s) omitidos`),e.failed.length&&(a.push(`⛔ ${e.failed.length} documento(s) fallaron:`),e.failed.forEach(l=>a.push(`&nbsp;&nbsp;• ${l.title}: ${l.error}`)));const s=`
      <div class="modal fade" id="${t}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content shadow-lg">
            <div class="modal-header text-bg-${e.failed.length?"warning":"success"}">
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
      </div>`;document.body.insertAdjacentHTML("beforeend",s);const o=document.getElementById(t),i=new bootstrap.Modal(o,{backdrop:"static",keyboard:!1});document.getElementById("rst-summary-close").onclick=()=>{location.reload()},i.show()}},Ye={render(e){const t=document.getElementById(e);t&&(t.innerHTML=`
      <div class="card shadow-sm border-0">
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
    `,this._bindEvents())},_bindEvents(){const e=document.getElementById("btn-export");e&&(e.onclick=()=>ye.openBackupSelector());const t=document.getElementById("import-file");t&&(t.onchange=a=>{a.target.files.length>0&&(ye.openRestoreSelector(a.target.files[0]),a.target.value="")})}},G={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
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

              <div class="mb-3">
                <label class="small fw-bold">Repita su Frase (para confirmar):</label>
                <textarea id="setup-master-phrase-confirm"
                          class="form-control font-monospace border-primary shadow-none"
                          rows="2"
                          autocomplete="off"
                          autocorrect="off"
                          autocapitalize="none"
                          spellcheck="false"
                          placeholder="Volvé a escribir la misma frase..."></textarea>
                <div class="form-text text-muted" style="font-size: 0.7rem;">
                    <i class="fa-solid fa-triangle-exclamation text-warning"></i> Si las dos frases no coinciden exactamente, no se activa el cifrado — es la única forma de evitar un error de tipeo que después nadie puede corregir.
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
    `);const t=document.getElementById("modal-setup-security"),a=new bootstrap.Modal(t);a.show(),document.getElementById("btn-save-security").onclick=async()=>{const s=document.getElementById("setup-master-phrase"),o=document.getElementById("setup-master-phrase-confirm"),i=s.value.trim(),n=o.value.trim(),l=document.getElementById("setup-error");if(i.length<15){l.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",l.style.display="block";return}if(i!==n){l.textContent="Las dos frases no coinciden. Volvé a escribirlas con cuidado.",l.style.display="block",o.value="",o.focus();return}try{await _.setMasterKey(i);const d=await _.encryptData({check:"VERIFIED"});await f.saveSecurityVerifier(d),a.hide(),t.remove(),u.toast("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.","success")}catch(d){console.error("Error al inicializar seguridad:",d),l.textContent="Error al inicializar el motor de seguridad.",l.style.display="block"}}},renderChangePhraseUI(e){const t=`
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
    `;e.innerHTML=t,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const e=document.getElementById("btn-reencrypt");e&&(e.onclick=async()=>{const t=document.getElementById("old-phrase").value.trim(),a=document.getElementById("new-phrase").value.trim();if(!t||a.length<15)return u.toast("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.","warning");if(await u.confirm("Confirmar Cambio","¿Estás seguro de que deseas cambiar tu Frase Maestra? Este proceso actualizará tus datos de seguridad."))try{e.disabled=!0,e.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await f.changeMasterPhrase(t,a),u.toast("¡Éxito! Frase actualizada. Recargando...","success"),setTimeout(()=>location.reload(),2e3)}catch(o){console.error(o),u.toast("Error: "+o.message,"danger"),e.disabled=!1,e.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const e=document.getElementById("reset-confirm-input"),t=document.getElementById("btn-execute-reset");!e||!t||(e.addEventListener("input",a=>{a.target.value==="ELIMINAR"?t.disabled=!1:t.disabled=!0}),t.onclick=async()=>{if(await u.confirm("ÚLTIMA ADVERTENCIA","Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await f.hardResetSecurity(),u.toast("Sistema de seguridad reiniciado. La página se recargará...","success"),setTimeout(()=>window.location.reload(),3e3)}catch(s){console.error(s),u.toast("Error al reiniciar seguridad: "+s.message,"danger"),t.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},Te={init(){this.container=document.getElementById("view-settings"),this.render()},render(){document.getElementById("theme-link").getAttribute("href"),this.container.innerHTML=`
      <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold text-body-secondary"><i class="fa-solid fa-gears me-2"></i>Configuración</h3>
 <!-- ... Botón de Manual ... -->
        </div>

        <ul class="nav nav-tabs nav-tabs-custom mb-0" id="settings-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="settings-tab-btn-profile" data-bs-toggle="tab" data-bs-target="#settings-tab-profile" type="button" role="tab">
              <i class="fa-solid fa-id-badge me-1"></i> Perfil y Apariencia
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="settings-tab-btn-security" data-bs-toggle="tab" data-bs-target="#settings-tab-security" type="button" role="tab">
              <i class="fa-solid fa-user-shield me-1"></i> Cuenta y Seguridad
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="settings-tab-btn-integrations" data-bs-toggle="tab" data-bs-target="#settings-tab-integrations" type="button" role="tab">
              <i class="fa-brands fa-github me-1"></i> Integraciones
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="settings-tab-btn-backup" data-bs-toggle="tab" data-bs-target="#settings-tab-backup" type="button" role="tab">
              <i class="fa-solid fa-database me-1"></i> Datos y Respaldos
            </button>
          </li>
        </ul>

        <div class="tab-content tab-content-custom mb-5" id="settings-tabs-content">
          <div class="tab-pane fade show active p-4" id="settings-tab-profile" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-6">
                <div id="profile-settings-wrapper"></div>
              </div>
              <div class="col-md-6">
                <div id="theme-settings-wrapper"></div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade p-4" id="settings-tab-security" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-6">
                <div id="account-settings-wrapper"></div>
              </div>
              <div class="col-md-6">
                <div id="security-config-wrapper"></div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade p-4" id="settings-tab-integrations" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-6">
                <div id="github-settings-wrapper"></div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade p-4" id="settings-tab-backup" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-6">
                <div id="backup-settings-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,Je.render("profile-settings-wrapper"),We.render("theme-settings-wrapper"),Ke.render("account-settings-wrapper"),Ye.render("backup-settings-wrapper"),Qe.render("github-settings-wrapper"),G&&G.renderChangePhraseUI&&G.renderChangePhraseUI(document.getElementById("security-config-wrapper"))}},V={setupListeners(){var e,t,a;(e=document.getElementById("ghPdfModal"))==null||e.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-pdf");s.src&&(URL.revokeObjectURL(s.src.split("#")[0]),s.src="")}),(t=document.getElementById("ghVideoModal"))==null||t.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-video");s.pause(),s.src&&(URL.revokeObjectURL(s.src),s.src="")}),(a=document.getElementById("gh-close-audio"))==null||a.addEventListener("click",()=>{const s=document.getElementById("gh-audio-player");s.pause(),s.src="",document.getElementById("gh-audio-container").classList.add("d-none")})},async viewImage(e,t){const{path:a,title:s,repo:o}=t,i=document.getElementById("ghImageModal"),n=document.getElementById("gh-preview-img"),l=document.getElementById("gh-loading-img");document.getElementById("ghImageModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(i);d.show();try{const g=await S.fetchSecureFile(e,a,o);n.src=URL.createObjectURL(g),n.onload=()=>{l.classList.add("d-none"),n.classList.remove("d-none")}}catch(g){u.toast("Error cargando imagen: "+g.message,"danger"),d.hide()}},async viewVideo(e,t){const{path:a,title:s,repo:o}=t,i=document.getElementById("ghVideoModal"),n=document.getElementById("gh-preview-video"),l=document.getElementById("gh-loading-video");document.getElementById("ghVideoModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(i);d.show();try{const g=await S.fetchSecureFile(e,a,o);n.src=URL.createObjectURL(g),l.classList.add("d-none"),n.classList.remove("d-none"),n.play().catch(m=>console.log("Autoplay bloqueado",m))}catch(g){u.toast("Error cargando video: "+g.message,"danger"),d.hide()}},async viewPdf(e,t){const{path:a,title:s,repo:o}=t,i=document.getElementById("ghPdfModal"),n=document.getElementById("gh-preview-pdf"),l=document.getElementById("gh-loading-pdf");document.getElementById("ghPdfModalLabel").textContent=s,n.classList.add("d-none"),l.classList.remove("d-none");const d=new bootstrap.Modal(i);d.show();try{const g=await S.fetchSecureFile(e,a,o),m=new Blob([g],{type:"application/pdf"});n.src=URL.createObjectURL(m)+"#toolbar=0&navpanes=0",n.onload=()=>{l.classList.add("d-none"),n.classList.remove("d-none")}}catch(g){u.toast("Error cargando PDF: "+g.message,"danger"),d.hide()}},async playAudio(e,t){const{path:a,title:s,repo:o}=t,i=document.getElementById("gh-audio-container"),n=document.getElementById("gh-audio-player"),l=document.getElementById("gh-loading-audio");i.classList.remove("d-none"),document.getElementById("gh-audio-title").textContent="Cargando "+s+"...",l.classList.remove("d-none"),n.classList.add("d-none"),n.pause();try{const d=await S.fetchSecureFile(e,a,o);n.src=URL.createObjectURL(d),n.classList.remove("d-none"),l.classList.add("d-none"),document.getElementById("gh-audio-title").textContent=s,n.play().catch(g=>console.log("Autoplay bloqueado",g))}catch(d){u.toast("Error cargando audio: "+d.message,"danger"),i.classList.add("d-none")}},async downloadFile(e,t,a){const{path:s,name:o,repo:i}=t,n=a.innerHTML;a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await S.fetchSecureFile(e,s,i),d=URL.createObjectURL(l),g=document.createElement("a");g.href=d,g.download=o,document.body.appendChild(g),g.click(),document.body.removeChild(g),setTimeout(()=>URL.revokeObjectURL(d),1e3)}catch(l){u.toast("Error en la descarga: "+l.message,"danger")}finally{a.disabled=!1,a.innerHTML=n}},async openPdfMobile(e,t,a){const{path:s,repo:o}=t,i=a.innerHTML,n=window.open("","_blank");n&&n.document.write("<h3 style='text-align: center; margin-top: 20%;'>Cargando...</h3>"),a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await S.fetchSecureFile(e,s,o),d=new Blob([l],{type:"application/pdf"}),g=URL.createObjectURL(d);n?n.location.href=g:window.location.href=g,setTimeout(()=>URL.revokeObjectURL(g),6e4)}catch(l){n&&n.close(),u.toast("Error abriendo el documento: "+l.message,"danger")}finally{a.disabled=!1,a.innerHTML=i}},copyLink(e){navigator.clipboard.writeText(e).then(()=>u.toast("Enlace público copiado al portapapeles.","success")).catch(()=>u.toast("No se pudo copiar el enlace.","danger"))}},C={getBaseHTML(){return`
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
    `},injectStyles(){const e=document.createElement("style");e.innerHTML=".cursor-pointer { cursor: pointer; user-select: none; }",document.head.appendChild(e)},setupFilterListeners(e){var t,a;(t=document.getElementById("gh-filter-repo"))==null||t.addEventListener("change",s=>e.tableEngine.setFilter("repoName",s.target.value)),(a=document.getElementById("gh-filter-folder"))==null||a.addEventListener("change",s=>e.tableEngine.setFilter("folder",s.target.value))},buildFilters(e){const t=document.getElementById("gh-filter-repo"),a=document.getElementById("gh-filter-folder");if(!t||!a)return;const s=[...new Set(e.currentFiles.map(l=>l.repoName))].filter(Boolean),o=[...new Set(e.currentFiles.map(l=>l.folder))].filter(Boolean),i=t.value,n=a.value;s.length>1?(t.innerHTML='<option value="">📁 Todos los Repos</option>'+s.map(l=>`<option value="${l}">${l}</option>`).join(""),t.value=s.includes(i)?i:"",t.classList.remove("d-none")):(t.classList.add("d-none"),t.value=""),o.length>1?(a.innerHTML='<option value="">📂 Todas las Carpetas</option>'+o.map(l=>`<option value="${l}">${l}</option>`).join(""),a.value=o.includes(n)?n:"",a.classList.remove("d-none")):(a.classList.add("d-none"),a.value="")},getDummyRowHTML(){return`
      <tr>
        <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border px-2 py-1">Repo / Folder</span></td>
        <td class="fw-bold text-nowrap"><i class="fa-regular fa-image me-2"></i> Test File</td>
        <td class="text-end"><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `},renderRowHTML(e,t){const a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=e.fileName.split(".").pop().toLowerCase(),o=["jpg","jpeg","png","gif","webp","svg"].includes(s),i=["mp3","wav","ogg","m4a"].includes(s),n=s==="pdf",l=["mp4","webm","ogg","mov"].includes(s);let d=o?'<i class="fa-regular fa-image text-primary me-2"></i>':i?'<i class="fa-solid fa-music text-info me-2"></i>':n?'<i class="fa-solid fa-file-pdf text-danger me-2"></i>':l?'<i class="fa-solid fa-video text-success me-2"></i>':`<span class="text-muted small fw-normal me-2">(${s})</span>`;const g=e.isPrivate?"fa-lock text-danger":"fa-globe text-success",m=e.expiresAt?'<span class="badge bg-warning text-dark ms-2"><i class="fa-regular fa-clock"></i> Temporal</span>':"",p=`data-id="${e.id}" data-sha="${e.sha}" data-path="${e.path}" data-title="${e.title}" data-repo="${e.repoName}" data-folder="${e.folder}" data-filename="${e.fileName}"`;let c="";if(o?c+=`<button class="btn btn-sm btn-outline-primary btn-view-img me-1" ${p}><i class="fa-regular fa-eye"></i></button>`:i?c+=`<button class="btn btn-sm btn-outline-info btn-play-audio me-1" ${p}><i class="fa-solid fa-play"></i></button>`:n?c+=`<button class="btn btn-sm btn-outline-danger ${a?"btn-open-pdf-mobile":"btn-view-pdf"} me-1" ${p}><i class="fa-solid ${a?"fa-arrow-up-right-from-square":"fa-file-pdf"}"></i></button>`:l&&(c+=`<button class="btn btn-sm btn-outline-success btn-play-video me-1" ${p}><i class="fa-solid fa-video"></i></button>`),c+=`<button class="btn btn-sm btn-outline-warning btn-copy-trigger me-1" ${p} title="Copiar Archivo"><i class="fa-solid fa-copy"></i></button>`,c+=`<button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" ${p} data-name="${e.originalName||e.fileName}"><i class="fa-solid fa-download"></i></button>`,!e.isPrivate){const h=t.repoPages[e.repoName],v=h?(h.endsWith("/")?h:h+"/")+(e.path.startsWith("/")?e.path.substring(1):e.path):e.htmlUrl;c+=`<button class="btn btn-sm ${h?"btn-outline-success":"btn-outline-secondary"} btn-copy-link me-1" data-url="${v}"><i class="fa-solid ${h?"fa-link":"fa-github"}"></i></button>`}return c+=`<button class="btn btn-sm btn-danger btn-delete-gh" ${p}><i class="fa-solid fa-trash"></i></button>`,`
      <tr>
        <td>
           <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
             <i class="fa-solid ${g} me-1"></i> ${e.repoName} <i class="fa-solid fa-chevron-right mx-1" style="font-size:0.7em;"></i> ${e.folder}
           </span>
        </td>
        <td class="fw-bold text-nowrap">
          ${d}${e.title} ${m}
        </td>
        <td class="text-end text-nowrap">
          ${c}
        </td>
      </tr>
    `},attachTableListeners(e,t,a){e.querySelectorAll(".btn-copy-trigger").forEach(s=>{s.addEventListener("click",()=>{document.getElementById("gh-copy-orig-path").value=s.dataset.path,document.getElementById("gh-copy-orig-repo").value=s.dataset.repo,document.getElementById("gh-copy-orig-filename").value=s.dataset.filename,document.getElementById("gh-copy-folder").value=s.dataset.folder,document.getElementById("gh-copy-new-title").value=s.dataset.title+" (Copia)",document.getElementById("gh-copy-repo").value=s.dataset.repo,new bootstrap.Modal(document.getElementById("ghCopyModal")).show()})}),e.querySelectorAll(".btn-view-img").forEach(s=>s.addEventListener("click",()=>V.viewImage(t.config,s.dataset))),e.querySelectorAll(".btn-view-pdf").forEach(s=>s.addEventListener("click",()=>V.viewPdf(t.config,s.dataset))),e.querySelectorAll(".btn-play-audio").forEach(s=>s.addEventListener("click",()=>V.playAudio(t.config,s.dataset))),e.querySelectorAll(".btn-download-gh").forEach(s=>s.addEventListener("click",()=>V.downloadFile(t.config,s.dataset,s))),e.querySelectorAll(".btn-open-pdf-mobile").forEach(s=>s.addEventListener("click",()=>V.openPdfMobile(t.config,s.dataset,s))),e.querySelectorAll(".btn-copy-link").forEach(s=>s.addEventListener("click",()=>V.copyLink(s.dataset.url))),e.querySelectorAll(".btn-delete-gh").forEach(s=>s.addEventListener("click",()=>C.handleDelete(a,s.dataset,t))),e.querySelectorAll(".btn-play-video").forEach(s=>s.addEventListener("click",()=>V.viewVideo(t.config,s.dataset)))},async handleCopy(e,t,a){var E;e.preventDefault();const s=document.getElementById("gh-btn-copy"),o=document.getElementById("gh-copy-orig-path").value,i=document.getElementById("gh-copy-orig-repo").value,n=document.getElementById("gh-copy-orig-filename").value,l=document.getElementById("gh-copy-repo"),d=l.value,g=l.options[l.selectedIndex].dataset.isPrivate==="true",m=document.getElementById("gh-copy-folder").value.trim()||"root",p=document.getElementById("gh-copy-new-title").value.trim(),c=parseInt(document.getElementById("gh-copy-timer").value),h=n.split(".").pop(),v=p.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+h;try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Copiando...';const b=await S.fetchSecureFile(a.config,o,i),x=await S.uploadFile(a.config,b,m,v,d),y=c>0?Date.now()+c*60*1e3:null;await R.addFileRecord({userId:t.uid,title:p,folder:m,fileName:v,originalName:n,path:x.content.path,sha:x.content.sha,htmlUrl:x.content.html_url,downloadUrl:x.content.download_url,createdAt:new Date().toISOString(),repoName:d,isPrivate:g,expiresAt:y}),(E=bootstrap.Modal.getInstance(document.getElementById("ghCopyModal")))==null||E.hide(),u.toast(`Archivo copiado correctamente${y?" (Con autodestrucción)":""}.`,"success"),a.loadFilesList(t.uid)}catch(b){u.toast("Error en la copia: "+b.message,"danger")}finally{s.disabled=!1,s.innerHTML="Confirmar Copia"}},async handleDelete(e,t,a){if(await u.confirm("Eliminar Archivo","¿Estás seguro de eliminar este archivo permanentemente?"))try{await S.deleteFile(a.config,t.path,t.sha,t.repo),await R.deleteFileRecord(t.id),a.loadFilesList(e),u.toast("Archivo eliminado.","success")}catch(o){u.toast("Error eliminando: "+o.message,"danger")}},async handleSilentDelete(e,t){try{await S.deleteFile(t.config,e.path,e.sha,e.repoName),await R.deleteFileRecord(e.id)}catch(a){console.error(`Error al eliminar archivo expirado: ${e.fileName}`,a)}}},Ee={handleFileSelection(e){const t=e.target.files,a=document.getElementById("gh-batch-preview-container"),s=document.getElementById("gh-batch-preview-list");if(s.innerHTML="",t.length===0){a.classList.add("d-none");return}a.classList.remove("d-none"),Array.from(t).forEach((o,i)=>{const n=o.name.substring(0,o.name.lastIndexOf("."))||o.name,l=document.createElement("div");l.className="list-group-item bg-light p-2",l.innerHTML=`
        <div class="d-flex align-items-center mb-1">
          <i class="fa-regular fa-file me-2 text-secondary"></i>
          <span class="small fw-bold text-truncate" style="max-width: 70%;">${o.name}</span>
          <span class="badge bg-secondary ms-auto">${(o.size/(1024*1024)).toFixed(2)} MB</span>
        </div>
        <input type="text" class="form-control form-control-sm gh-batch-title" data-index="${i}" value="${n}" required placeholder="Título para este archivo">
      `,s.appendChild(l)})},async processSingleFileUpload(e,t,a,s,o,i,n){const l=t.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+e.name.split(".").pop(),d=await S.uploadFile(n.config,e,a,l,s);await R.addFileRecord({userId:i.uid,title:t,folder:a,fileName:l,originalName:e.name,path:d.content.path,sha:d.content.sha,htmlUrl:d.content.html_url,downloadUrl:d.content.download_url,createdAt:new Date().toISOString(),repoName:s,isPrivate:o})},async handleUpload(e,t,a){var v;e.preventDefault();const s=document.getElementById("gh-btn-upload"),o=document.getElementById("gh-repo"),i=o.value,n=o.options[o.selectedIndex].dataset.isPrivate==="true",l=document.getElementById("gh-folder").value.trim()||"root",d=document.getElementById("gh-file"),g=d.files;if(g.length===0||!i)return;const m=15;for(let E of g)if(E.size>m*1024*1024){u.toast(`El archivo ${E.name} supera el límite de ${m} MB.`,"warning");return}const p=document.querySelectorAll(".gh-batch-title"),c=document.getElementById("gh-upload-progress-container"),h=document.getElementById("gh-upload-progress-bar");try{s.disabled=!0,c.classList.remove("d-none"),h.style.width="0%",h.textContent="0%",h.classList.remove("bg-danger"),h.classList.add("bg-success");let E=0;const b=g.length;for(let x=0;x<b;x++){const y=g[x],I=p[x].value.trim()||y.name;s.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Subiendo (${x+1}/${b})...`,await this.processSingleFileUpload(y,I,l,i,n,t,a),E++;const P=Math.round(E/b*100);h.style.width=`${P}%`,h.textContent=`${P}%`}await R.updateLastUsedSettings(t.uid,i,l),a.config.lastUsedRepo=i,a.config.lastUsedFolder=l,d.value="",document.getElementById("gh-batch-preview-container").classList.add("d-none"),c.classList.add("d-none"),(v=bootstrap.Modal.getInstance(document.getElementById("ghUploadModal")))==null||v.hide(),u.toast(`Se subieron ${b} archivo(s) correctamente.`,"success"),a.loadFilesList(t.uid)}catch(E){u.toast("Error en la subida por lotes: "+E.message,"danger"),h.classList.replace("bg-success","bg-danger")}finally{s.disabled=!1,s.innerHTML="Subir Todos"}}},Xe={config:null,repoPages:{},currentFiles:[],tableEngine:null,async init(e){const t=document.getElementById(e);if(!t)return;const a=j.getCurrentUser();if(a){if(this.config=await R.getUserConfig(a.uid),!this.config){t.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}t.innerHTML=C.getBaseHTML(),C.injectStyles(),V.setupListeners(),this.config.lastUsedFolder&&(document.getElementById("gh-folder").value=this.config.lastUsedFolder),document.getElementById("gh-upload-form").addEventListener("submit",s=>Ee.handleUpload(s,a,this)),document.getElementById("gh-copy-form").addEventListener("submit",s=>C.handleCopy(s,a,this)),document.getElementById("gh-file").addEventListener("change",s=>Ee.handleFileSelection(s)),this.initTableEngine(a),C.setupFilterListeners(this),this.populateRepos(),this.loadFilesList(a.uid)}},initTableEngine(e){this.tableEngine=new re({tableBody:document.getElementById("gh-files-list"),tableHeaders:document.getElementById("gh-table-head"),paginationContainer:document.getElementById("gh-pagination-controls"),dummyRowHTML:C.getDummyRowHTML(),marginBot:40,extractSearchString:t=>`${t.title} ${t.folder} ${t.fileName} ${t.repoName}`,renderRowHTML:t=>C.renderRowHTML(t,this),onRenderComplete:t=>C.attachTableListeners(t,this,e.uid)}),document.getElementById("gh-search-input").addEventListener("input",t=>{this.tableEngine.setSearchTerm(t.target.value)})},async loadFilesList(e){const t=document.getElementById("gh-files-list");try{const a=await R.listFiles(e),s=Date.now(),o=[];for(const i of a)i.expiresAt&&s>i.expiresAt?C.handleSilentDelete(i,this):o.push(i);this.currentFiles=o,C.buildFilters(this),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentFiles)}catch(a){t&&(t.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${a.message}</td></tr>`)}},async populateRepos(){const e=document.getElementById("gh-repo"),t=document.getElementById("gh-copy-repo");try{const a=await S.getUserRepos(this.config.githubToken);e.innerHTML="",t.innerHTML="",this.repoPages={},a.forEach(s=>{const o=document.createElement("option");o.value=s.name,o.textContent=`${s.isPrivate?"🔒":"🌐"} ${s.name}`,o.dataset.isPrivate=s.isPrivate,s.pagesUrl&&(this.repoPages[s.name]=s.pagesUrl);const i=o.cloneNode(!0);this.config.lastUsedRepo===s.name&&(o.selected=!0),e.appendChild(o),t.appendChild(i)}),!e.value&&e.options.length>0&&(e.selectedIndex=0),!t.value&&t.options.length>0&&(t.selectedIndex=0)}catch(a){e.innerHTML=t.innerHTML="<option disabled>Error cargando repositorios</option>",console.error(a)}}};class Ze{constructor(){this._routes=new Map,this._current=null,this._started=!1,this._transitioning=!1}register(t,a={}){this._routes.has(t)&&console.warn(`[Router] Ruta "${t}" ya registrada, se sobreescribe.`),this._routes.set(t,{enter:a.enter||null,leave:a.leave||null})}unregister(t){this._routes.delete(t),this._current===t&&(this._current=null)}navigate(t,a=!1){if(!this._routes.has(t)){console.warn(`[Router] Ruta "${t}" no registrada.`);return}const s=`#${t}`,o=window.location.hash;if(a)window.history.replaceState(null,"",s),this._transition(t);else{if(o===s&&this._current===t)return;o===s?this._transition(t):window.location.hash=s}}start(){if(this._started)return;this._started=!0,window.addEventListener("hashchange",()=>this._onHashChange());const t=window.location.hash.slice(1);if(t&&this._routes.has(t))this._transition(t);else{const a=this._routes.keys().next().value;a&&this.navigate(a,!0)}}_onHashChange(){const t=window.location.hash.slice(1);t&&this._routes.has(t)&&this._transition(t)}_transition(t){if(this._transitioning&&this._current===t||this._current===t)return;this._transitioning=!0;const a=this._current;if(a&&a!==t){const o=this._routes.get(a);o!=null&&o.leave&&o.leave()}for(const o of this._routes.keys()){const i=document.getElementById(`view-${o}`);i&&(i.style.display=o===t?"block":"none")}for(const o of this._routes.keys()){const i=document.getElementById(`nav-${o}`);i&&(i.classList.toggle("active",o===t),i.style.fontWeight=o===t?"bold":"normal")}const s=this._routes.get(t);s!=null&&s.enter&&s.enter(),this._current=t,this._transitioning=!1,`${t}`}get current(){return this._current}get routes(){return[...this._routes.keys()]}}const D=new Ze;let ne=!1;D.register("designer",{enter:async()=>{await J.loadForView("designer"),Ae.renderList()}});D.register("documents",{enter:async()=>{if(await J.loadForView("documents"),ne){ne=!1;return}q.renderList()}});D.register("settings",{enter:async()=>{await J.loadForView("settings"),Te.render()}});document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("theme-link"),t=localStorage.getItem("doc_engine_theme_url"),a="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";e&&(e.onerror=()=>{console.error("[THEME] Error. Revertiendo a Default."),e.href=a,localStorage.setItem("doc_engine_theme_url",a)},e.href=t&&t.includes("http")?t:a);try{await f.initDB()}catch(s){console.error("[ERROR] APP: Error de inicializacion:",s);return}await J.loadInitial(),st(),A.onAuthStateChanged(async s=>{s&&s.emailVerified?(s.email,await et(s)):(document.getElementById("app-content").style.display="none",Ie.renderLogin())}),Z.init()});async function et(e){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const t=document.getElementById("user-display-name");t&&(t.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${e.email}`),Ie.initLogout(),Ae.init(),q.init(),Te.init(),!await f.hasSecurityConfigured()&&G&&G.renderSetupModal&&G.renderSetupModal(),await R.getUserConfig(e.uid)&&at(),tt(),D.start(),D.current||D.navigate("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",o=>{ne=!0,D.navigate("documents"),requestAnimationFrame(()=>{q.createFromTemplate(o.detail.tplId)})}),window._eventCreateDocRegistered=!0)}function tt(){[{id:"nav-designer",route:"designer"},{id:"nav-documents",route:"documents"},{id:"nav-settings",route:"settings"}].forEach(({id:t,route:a})=>{const s=document.getElementById(t);s&&(s.onclick=o=>{o.preventDefault(),D.navigate(a)})})}function at(){const e=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;D.register("github",{enter:async()=>{await J.loadForView("github"),Xe.init("view-github")}});const t=document.createElement("li");t.className="nav-item",t.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#github" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,e.appendChild(t),document.getElementById("nav-github").addEventListener("click",a=>{a.preventDefault(),D.navigate("github")})}function st(){document.addEventListener("click",a=>{const s=a.target.closest(".toggle-password");if(s){a.preventDefault();const o=document.getElementById(s.dataset.target),i=s.querySelector("i");if(o&&i){const n=o.type==="password";o.type=n?"text":"password",i.classList.toggle("fa-eye",!n),i.classList.toggle("fa-eye-slash",n)}}});const e=document.querySelector(".navbar"),t=document.querySelector(".app-container");e&&t&&new ResizeObserver(s=>{for(const o of s){const i=e.offsetHeight;t.style.marginTop=`${i+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{q&&q.renderList&&q.renderList()},250)}}).observe(e)}export{$e as D,f as S,te as a,be as b,he as f};
