import{b as u,n as g}from"./normaliceGR-CNBH9OvG.js";import{g as i,b as m}from"./db-BGoRXoSP.js";function f(){let t=!1,e=null;return{startFetching:()=>t?!1:(t=!0,e=new AbortController,!0),getAbortSignal:()=>{if(!e)throw new Error("Fetching not started");return e.signal},endFetching:()=>{t=!1,e=null}}}const l=f();async function p(t){if(!l.startFetching()){console.log("Ya hay una petición en curso");return}try{const e=await i(t);if(e){console.log("Existe en Indexed"),s(e);return}const o=await u(),{galerias:a}=o,n=a.find(r=>r.idGaleria===t);if(n){console.log("Existe en la API → Guardando en IndexedDB");const r=await g(n);await m([r]);const c=await i(r.id);s(c);return}d()}catch(e){e.name!=="AbortError"&&console.error("Error:",e)}finally{l.endFetching()}}function s(t){const{id:e}=t,o=`/user/galeria?id=${e}`;window.history.pushState({},"",o),window.dispatchEvent(new PopStateEvent("popstate"))}function b(t){return/^AT-[a-zA-Z0-9]+$/.test(t)}function x(){return`
  <div class="modal fade unlock-modal show" id="unlockModal" tabindex="-1" aria-modal="true" role="dialog" 
  style="display: block; padding: 0;" data-bs-backdrop="static" data-bs-keyboard="false">
<div class="modal-dialog modal-dialog-centered m-0 " style="width: 100vw; height: 100vh; max-width: none; position: relative;");>

 <div class="modal-content fondosolomodal" style="border-radius: 0; border: none; box-shadow: none; background-color: tranparent; height: 100%;">
   <div class="modal-body text-center d-flex flex-column justify-content-center p-3" style="color: #fff; height: 100%;">
     <!-- Logo/Título -->
     <div class="mb-4">
     <img src="/logoanimatuc.svg" alt="ANIMATUC Logo" 
     style="height: auto; max-height: 90px; width: auto; max-width: 100%; 
            position: absolute; 
            top: 100px;
            left: 50%; 
            transform: translateX(-50%);">
     </div>

     <!-- Formulario -->
     <form id="codeForm" class="w-100 locuravista" style="margin: 0 auto;">
       <div class="mb-3 position-relative">
        <small class="textgrande d-block mb-3 mt-3"> 
          Codigo de Evento
        </small>
         <input type="password" id="accessCode" class="form-control code-input"
               maxlength="12" placeholder="______" autocomplete="off"
               style="font-size: 25px; height: 50px; text-align: center; background-color: #fff; color: #000; border-color: #333; border-radius: 30px; border: 0.5px solid #000">
       </div>

       <!-- Mensaje de error -->
       <div id="errorMessage" class="alert alert-danger py-2" style="display: none; background-color: #222; border-color: #ff4444; color: #fff;">
         <i class="bi bi-exclamation-circle-fill me-2"></i> <span class="errorSpan">Código incorrecto</span>
       </div>

       <!-- Botón de verificación -->
       <button type="submit" id="verifyBtn" class="btn btn-primary w-100 py-2 mt-3"
               style="font-size: clamp(0.9rem, 4vw, 1.1rem); font-weight: 500; 
                     background-color: #dc3545; border-color: #c82333; color: white; 
                     border-radius: 30px; height: 45px; width: 100px;">
         Verificar Código
       </button>
     </form>
   </div>
 </div>
</div>
</div>
  `}function w(){document.getElementById("verifyBtn").addEventListener("click",async t=>{t.preventDefault();const e=t.target;e.innerHTML=`
      <span class="errorSpan spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Cargando...
    `;const o=document.getElementById("accessCode").value;if(!b(o.trim())){d();return}e.disabled=!0,h(o)})}async function h(t){p(t)}function d(){const t=document.getElementById("verifyBtn");t.disabled=!1,t.innerHTML="Verificar Código";const e=document.querySelector(".errorSpan");e.textContent="Código incorrecto",e.parentElement.style.display="block",setTimeout(()=>{e.parentElement.style.display="none"},2e3)}export{d as errorMensaje,w as init,x as render};
