var W=Object.defineProperty;var V=t=>{throw TypeError(t)};var K=(t,e,a)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var k=(t,e,a)=>K(t,typeof e!="symbol"?e+"":e,a),Q=(t,e,a)=>e.has(t)||V("Cannot "+a);var A=(t,e,a)=>e.has(t)?V("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a);var C=(t,e,a)=>(Q(t,e,"access private method"),a);import{p as X,n as M,d as Y,b as Z}from"./normaliceGR-CNBH9OvG.js";import{e as $,b as R,f as ee}from"./db-BGoRXoSP.js";import{o as ae}from"./orderLastUpdate-CTQh4gx0.js";import{a as te,m as b,o as ie}from"./toasts-DA_JyVKE.js";import{M as re}from"./ModalEliminarEvento-Cf6BW6LN.js";import{a as oe}from"./btnEvents-C3qwuUU2.js";import{m as se}from"./index-CJQ0crVK.js";function ne(t){for(;t.firstChild;)t.removeChild(t.firstChild)}const F=new URL("https://Leonard-Watch.github.io/github-page.git/perfilDefault.svg",import.meta.url).href;function j(t){const e=document.querySelector("#gallery-container"),a=ae(t);ne(e),a.forEach(i=>{const{id:s,nombre:r,imagenPerfil:o,fecha:l}=i;if(!s){mostrarToast("info","Reinicie la pagina para actualizar");return}const n=document.createElement("DIV");n.classList.add("Tarjeta"),n.id=s;const c=document.createElement("DIV");c.classList.add("Tarjeta__header");const m=document.createElement("DIV");m.classList.add("Tarjeta__cuerpo"),n.appendChild(c),n.appendChild(m);const d=document.createElement("IMG");if(d.classList.add("Tarjeta__img"),d.alt="Imagen de portada",(o==null?void 0:o.src)==null)d.src=F;else if((o==null?void 0:o.blob)instanceof Blob){const J=URL.createObjectURL(o.blob);d.src=J}else o.src?d.src=o.src:d.src=F;c.appendChild(d);const p=document.createElement("DIV");p.classList.add("Tarjeta__Ordenado");const E=document.createElement("P");E.classList.add("Tarjeta__fotos");const g=document.createElement("DIV");g.classList.add("Tarjeta__flex"),m.appendChild(p),m.appendChild(E),m.appendChild(g);const h=document.createElement("H2");h.classList.add("Tarjeta__title"),h.textContent=r;const G=document.createElement("I");G.classList.add("bi","bi-three-dots","Tarjeta__icons","dropdown-trigger"),p.appendChild(h),p.appendChild(G);const _=document.createElement("DIV");_.classList.add("Tarjeta__configuracion");const P=document.createElement("DIV");P.classList.add("Tarjeta__confie2","Tarjeta__editar");const S=document.createElement("i");S.classList.add("bi","bi-pencil-fill"),P.appendChild(S);const T=document.createElement("DIV");T.classList.add("Tarjeta__confie2","Tarjeta__eliminar");const B=document.createElement("i");B.classList.add("bi","bi-x-circle-fill"),T.appendChild(B),_.appendChild(P),_.appendChild(T),G.appendChild(_);const I=document.createElement("SPAN");I.classList.add("Tarjeta__fecha"),I.textContent=l,E.appendChild(I);const y=document.createElement("BUTTON");y.classList.add("button","button--negro","button--galeria-largo","button--flex"),y.id="btnCopyCode";const L=document.createElement("BUTTON");L.classList.add("button","button--red","button--galeria-chico"),L.id="btnVer",g.appendChild(y),g.appendChild(L);const D=document.createElement("I");D.classList.add("bi","bi-copy","button__icons");const w=document.createElement("SPAN");w.classList.add("button__text"),w.textContent="Codigo",y.appendChild(D),y.appendChild(w);const q=document.createElement("SPAN");q.textContent="Ver",L.appendChild(q),e.appendChild(n)})}let O=[];async function N(){O=await $(),document.getElementById("buscador-galerias").addEventListener("input",e=>{const a=e.target.value.trim().toLowerCase();le(a)})}function le(t){const e=document.querySelectorAll(".Tarjeta");let a=!1;e.forEach(s=>{const r=s.id,o=O.find(l=>l.id==r);if(o){const n=o.nombre.toLowerCase().includes(t)||t==="";s.style.display=n?"block":"none",n&&(a=!0)}else s.style.display="none"});const i=document.querySelector("#noGaleria");!a&&t!==""?(i.style.display="",i.textContent="- No hay galerías disponibles. -"):v.actualizarVista()}function de(t,e=1e3*60*1){const a=Date.now();if(!t)return!1;const i=a-t>e;return console.log(`⏱️ Cache ${i?"❌ vencido":"✅ válido"} (${Math.round((a-t)/1e3)}s transcurridos)`),!i}let u=[];var f,x;class v{constructor(){this.listenerGaleriasRegistrado=!1}static async mostrarGaleria(){var e;if(u.length>0){j(u),this.actualizarVista();return}te("Cargando galerías...");try{const a=await $();a.length>0?de((e=a[0])==null?void 0:e.lastCacheUpdate,6e4)?(console.debug("🟢 Galerías desde cache"),u=a,j(u),this.actualizarVista(),b("exito","Galerías cargadas correctamente (caché)"),this.temporizadorActivo||(this.temporizadorActivo=!0,setTimeout(async()=>{console.debug("⏰ TTL vencido: actualizando datos y recargando la página"),b("info","🔁 Actualizando datos automáticamente..."),await C(this,f,x).call(this),setTimeout(()=>{location.reload()},1500)},1e3*60))):(console.debug("🟡 Cache vencido. Recargando desde API..."),await C(this,f,x).call(this),b("exito","Galerías cargadas desde API")):(console.debug("🔴 Sin cache. Descargando..."),await C(this,f,x).call(this),b("exito","Galerías cargadas desde API"))}catch(a){console.error("Error al cargar galerías:",a),b("error","Error al cargar las galerías")}finally{ie()}}static async agregarGaleria(e,a){try{const i=await X(e,a),s=await M(i);await R([s]),u.push(s),this.mostrarGaleria(),N()}catch(i){throw console.error("Error al agregar galería:",i),b("error","Error al crear la galería"),i}}static eliminarGaleria(){if(this.listenerGaleriasRegistrado)return;this.listenerGaleriasRegistrado=!0;const e=new re("confirmarEliminarModal","confirmarEliminarBtn");document.addEventListener("click",a=>{if(!a.target.closest(".Tarjeta__eliminar"))return;const s=a.target.closest("[id]");if(!s)return;const r=s.id;e.abrir(async()=>{try{const o=s.querySelector(".Tarjeta__img");o!=null&&o.src.startsWith("blob:")&&URL.revokeObjectURL(o.src),await Y(r),await ee(r),u=u.filter(l=>l.id!==r),this.mostrarGaleria(),this.actualizarVista(),b("exito","Galería eliminada con éxito")}catch(o){console.error("Error eliminando galería:",o),this.mostrarGaleria(),b("error","Error al eliminar la galería")}},"¿Seguro que quieres eliminar esta galería?")})}static actualizarVista(){const e=document.querySelector("#noGaleria"),a=u.length>0,i="- No hay galerías disponibles. -";e.style.display=a?"none":"block",!a&&e.textContent!==i&&(e.textContent=i)}}f=new WeakSet,x=async function(){const e=await Z(),{galerias:a}=e;u=await Promise.all(a.map(M)),j(u),this.actualizarVista(),await R(u),N()},A(v,f),k(v,"temporizadorActivo",!1);function ce(){document.removeEventListener("click",z),document.addEventListener("click",z)}function z(t){const e=t.target.closest(".dropdown-trigger");if(document.querySelectorAll(".dropdown-trigger.mostrar-menu").forEach(i=>{if(i!==e){i.classList.remove("mostrar-menu");const s=i.querySelector(".Tarjeta__configuracion");s==null||s.classList.remove("Tarjeta__configuracion--visible")}}),e){t.stopPropagation(),e.classList.toggle("mostrar-menu");const i=e.querySelector(".Tarjeta__configuracion");i==null||i.classList.toggle("Tarjeta__configuracion--visible")}}function U(t){const e=t.value.trim();let a=!0,i="";const s=/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?¿]/;if(e?e.length<5?(a=!1,i="Mínimo 5 caracteres"):e.length>25?(a=!1,i="Máximo 25 caracteres"):s.test(e)?(a=!1,i="Caracteres no permitidos (!@#$%^&* etc)"):/\d/.test(e)&&(a=!1,i="No se permiten números"):(a=!1,i="El nombre es obligatorio"),a)t.classList.remove("is-invalid"),t.nextElementSibling&&t.nextElementSibling.classList.contains("invalid-feedback")&&(t.nextElementSibling.textContent="");else{t.classList.add("is-invalid");let r=t.nextElementSibling;(!r||!r.classList.contains("invalid-feedback"))&&(r=document.createElement("div"),r.className="invalid-feedback",t.parentNode.appendChild(r)),r.textContent=i}return a}function H(t,e,a,i){const s=document.getElementById(t),r=document.getElementById(e),o=document.getElementById(a),l=r==null?void 0:r.querySelector("button"),n=r==null?void 0:r.querySelector("img"),c=document.getElementById(i);!s||!r||!o||!l||!n||!c||(s.addEventListener("change",function(m){var p;const d=(p=this.files)==null?void 0:p[0];if(c.style.display="none",d){if(!["image/jpeg","image/png","image/heif","image/heic"].includes(d.type)){c.style.display="block",this.value="",r.classList.add("d-none"),o.classList.remove("d-none");return}const g=new FileReader;g.onload=h=>{n.src=h.target.result,r.classList.remove("d-none"),o.classList.add("d-none")},g.readAsDataURL(d)}}),l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),s.value="",r.classList.add("d-none"),o.classList.remove("d-none")}))}function me(){const t=document.getElementById("formNuevaGaleria"),e=document.getElementById("btnGuardarGaleria"),a=document.getElementById("modalNuevaGaleria"),i=document.getElementById("galeriaNombre"),s=bootstrap.Modal.getInstance(a)||new bootstrap.Modal(a,{backdrop:"static",keyboard:!1}),r=()=>{i==null||i.addEventListener("input",()=>U(i)),e==null||e.addEventListener("click",()=>{U(i)&&(e.disabled=!0,e.innerHTML=`
                    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Cargando...
                `,t.requestSubmit())}),t==null||t.addEventListener("submit",async l=>{l.preventDefault();try{const n=document.getElementById("galeriaPerfil").files[0],c=document.getElementById("galeriaPortada").files[0],m=new FormData;m.append("nombre",i.value.trim());const d=new FormData;d.append("imagen-perfil",n||null),d.append("imagen-banner",c||null),await v.agregarGaleria(m,d),b("exito","Datos guardados correctamente!"),t.reset(),o(),s.hide()}catch{b("error","No se pudo conectar al servidor.")}finally{e&&(e.disabled=!1,e.innerHTML="Guardar Galería")}}),[".btn-close",".btn-secondary"].forEach(l=>{var n;(n=document.querySelector(l))==null||n.addEventListener("click",o),s.hide()}),a==null||a.addEventListener("hidden.bs.modal",()=>{a.getAttribute("aria-hidden")})},o=()=>{t.reset(),["Perfil","Portada"].forEach(l=>{var n,c;(n=document.getElementById(`preview${l}Container`))==null||n.classList.add("d-none"),(c=document.getElementById(`${l.toLowerCase()}Placeholder`))==null||c.classList.remove("d-none"),document.getElementById(`preview${l}`).src="#"})};H("galeriaPerfil","previewPerfilContainer","perfilPlaceholder","errorPerfil"),H("galeriaPortada","previewPortadaContainer","portadaPlaceholder","errorPortada"),r()}function Ce(){return`   
        <main class="main"> 
      <div class="sectionSquare sectionSquare--viewAdmin-galeria">
        <div class="sectionSquare__texto sectionSquare__texto--tamaño">Galeria</div>
      </div>

      <section class="main__seccion-busca-estado">
        <div class="input-buscador">
          <i class="bi bi-search input-buscador__icono"></i>
          <input type="text" 
             id="buscador-galerias" 
             class="input-buscador__campo" 
             placeholder="Buscar"
             autocomplete="off" />
        </div>
            
        <button class="button button--largo-galeria" id="btn-nueva-galeria" data-bs-toggle="modal" data-bs-target="#modalNuevaGaleria">
          <span class="button__text--galeria button__text--nombre-texto-desktop">Nuevo Evento</span>
          <span class="button__text--galeria button__text--nombre-texto-mobile">Nuevo</span>
          <span class="button__galeria-icon"><i class="bi bi-plus-circle"></i></span>
        </button>
      </section>

      <p class="main__titulo main__titulo--evento-titulo" id="noGaleria"> - No hay galerias disponibles - </p>
      
      <section class="GridTarjetas" id="gallery-container">
      
      </section>
    </main>

    ${be()}
    ${pe()}
`}function xe(){se(),me(),ue(),oe(),ce(),N(),v.eliminarGaleria()}async function ue(){await v.mostrarGaleria()}function be(){return`
    <div class="modal fade" id="modalNuevaGaleria" tabindex="-1" aria-labelledby="modalNuevaGaleriaLabel">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          
          <div class="modal-header">
            <h5 class="modal-title" id="modalNuevaGaleriaLabel">Nuevo Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div class="modal-body">
            <form id="formNuevaGaleria">
              
              <!-- Campo Nombre -->
              <div class="mb-5">
                <label for="galeriaNombre" class="form-label">Nombre del evento<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="galeriaNombre" name="galeriaNombre" placeholder="Ej: 'Fiesta de Cumpleaños'" required">
                <div class="invalid-feedback">
                  <!-- Mensajes de error aparecerán aquí automáticamente -->
                </div>
              </div>
              
              <!-- Imagen de Perfil -->
              <div class="mb-5">
                <label for="galeriaPerfil" class="form-label">Imagen de Perfil</label>
                <div class="file-upload-area border rounded p-3 text-center position-relative">
                  <input type="file" id="galeriaPerfil" name="galeriaPerfil" class="d-none" accept="image/*">
                  <div class="invalid-feedback" id="errorPerfil" style="display: none;">
                    Formato no válido. Use JPG, PNG o HEIF/HEIC
                  </div>
                  <label for="galeriaPerfil" class="cursor-pointer d-block py-4">
                    <!-- Previsualización (oculta inicialmente) -->
                    <div id="previewPerfilContainer" class="d-none">
                      <img id="previewPerfil" src="#" alt="Vista previa" class="img-fluid rounded mb-2" style="max-height: 150px;">
                      <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2">
                        <i class="bi bi-x"></i>
                      </button>
                    </div>
                    <!-- Placeholder (visible inicialmente) -->
                    <div id="perfilPlaceholder">
                      <i class="bi bi-person-square fs-1 text-muted"></i>
                      <p class="mb-1">Arrastra tu imagen o Presiona aquí</p>
                      <small class="text-muted">Recomendado: 500x500 px</small>
                    </div>
                  </label>
                </div>
              </div>
              
              <!-- Imagen de Banner -->
              <div class="mb-5">
                <label for="galeriaPortada" class="form-label">Imagen de Banner</label>
                <div class="file-upload-area border rounded p-3 text-center position-relative">
                  <input type="file" id="galeriaPortada" name="galeriaPortada" class="d-none" accept="image/*">
                  <div class="invalid-feedback" id="errorPortada" style="display: none;">
                    Formato no válido. Use JPG, PNG o HEIF/HEIC
                  </div>
                  <label for="galeriaPortada" class="cursor-pointer d-block py-4">
                    <div id="previewPortadaContainer" class="d-none">
                      <img id="previewPortada" src="#" alt="Vista previa" class="img-fluid rounded mb-2" style="max-height: 200px;">
                      <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2">
                        <i class="bi bi-x"></i>
                      </button>
                    </div>
                    <div id="portadaPlaceholder">
                      <i class="bi bi-cloud-arrow-up fs-1 text-muted"></i>
                      <p class="mb-1">Arrastra tu imagen o Presiona aquí</p>
                      <small class="text-muted">Recomendado: 1500x500 px</small>
                    </div>
                  </label>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" id="btnGuardarGaleria">Guardar Galería</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `}function pe(){return`
    <div class="modal fade" id="confirmarEliminarModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
          
          <div class="modal-header border-secondary">
            <h5 class="modal-title fs-5">Confirmar eliminación</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body text-center py-4">
            <i class="bi bi-exclamation-triangle-fill text-warning fs-1 mb-3 d-block"></i> 
            <p id="modalEliminarTexto" class="fs-6">¿Seguro que quieres eliminar?</p>
          </div>
          
          <div class="modal-footer border-secondary d-flex justify-content-center"> 
            <button type="button" class="btn btn-outline-light mx-2" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger mx-2" id="confirmarEliminarBtn">Eliminar</button>
          </div>
        
        </div>
      </div>
    </div>
  `}export{xe as init,Ce as render};
