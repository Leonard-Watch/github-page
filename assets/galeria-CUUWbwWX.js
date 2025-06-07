import{g as c}from"./db-BGoRXoSP.js";import{p as l,b as d}from"./renderAlbum-C9_GHx7U.js";import{m as o,a as r,o as s}from"./toasts-DA_JyVKE.js";import"./orderLastUpdate-CTQh4gx0.js";async function m(a){const e=document.getElementById("btn-enviar-foto");if(!e){console.error("Botón #btn-enviar-foto no encontrado.");return}e.addEventListener("click",()=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.capture="environment",t.style.display="none",document.body.appendChild(t),t.click(),t.addEventListener("change",()=>{const n=t.files[0];n&&(console.log("Archivo seleccionado:",n),u(a,n)),t.remove()})})}function u(a,e){r("Subiendo imagen..."),b(a,e).then(()=>o("exito","Imagen subida con éxito.")).catch(t=>{console.error("Error al subir archivo:",t),o("error","No se pudo subir la imagen.")}).finally(()=>s())}function b(a,e){const t=new FormData;return t.append("imagen",e||null),l(a,t)}function p(a){const e=document.getElementById("btn-enviar-nota");e&&e.addEventListener("click",()=>{const t=new bootstrap.Modal(document.getElementById("modalNota"),{backdrop:!1});t.show();const n=document.getElementById("btnConfirmarNota");n.onclick=async()=>{const i=document.getElementById("inputNota").value.trim();if(!i){o("advertencia","La mensaje vacío");return}if(!v(i)){o("advertencia","El mensaje contiene caracteres no permitidos.");return}r("Enviando mensaje...");try{await postMultiNotas(a,i),o("exito","Mensaje enviado correctamente")}catch{o("error","Error al enviar el mensaje")}finally{s(),t.hide(),document.getElementById("inputNota").value=""}}})}function v(a){return!/[^\p{L}\p{N}\p{P}\p{Z}\p{Emoji}\s]/gu.test(a.trim())}function _(){return`
    <main class="main main--user">
        <section class="sectionHead">
            <div class="sectionSquare sectionSquare--user">
                <img id="portada-usuario" src="" alt="Portada del usuario" class=" sectionSquare__imgPortada"></img>
            </div>
                
            <div class="circlePerfil circlePerfil--user">
                <img id="foto-perfil" src="" alt="Foto de perfil" class="perfil-img circlePerfil__imgPerfil">
            </div>
        </section>   
    
        <section class="sectionBtn-usergaleria" role="group" aria-label="Opciones de envío"> 
            <button id="btn-enviar-foto" class="sectionBtn-usergaleria--button" aria-label="Enviar foto">
                <span><i class="bi bi-camera sectionBtn-usergaleria--white"></i></span>
            </button>

            <button id="btn-enviar-nota" class="sectionBtn-usergaleria--button" aria-label="Enviar mensajes">
                <span><i class="bi bi-chat-square-text sectionBtn-usergaleria--white"></i></span>
            </button>
        </section>
       
        <section class="sectionTexto"> 
            <h1 class="sectionTexto__titulo" id="nombre-usuario">Cumple de Tommy</h1>
            <p class="sectionTexto__descripcion">Comparte tus fotos y mensajes en la gran pantalla</p>
            <p class="sectionTexto__descripcion sectionTexto__descripcion--bold sectionTexto__descripcion--margin">¡Que disfrutes!</p>
        </section>
    </main>
    <div class="sectionFooter">
      <img src="/animatucsolo.svg" alt="Animación SVG" class="sectionFooter__svg">
    </div>

    ${f()}
  `}function B(){try{const a=new URLSearchParams(window.location.search).get("id");if(!a)return;g(a)}catch(a){console.error("Error al cargar galería:",a),mostrarToast("error","No se pudo cargar la galería")}}async function g(a){const e=await c(a);d(e),m(a),p(a)}function f(){return`
    <!-- Modal para enviar nota -->
    <div class="modal fade" id="modalNota" tabindex="-1" aria-labelledby="modalNotaLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalNotaLabel">Enviar Nota</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <textarea id="inputNota" class="form-control" rows="4" placeholder="Escribí tu mensaje..."></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-light mx-2" data-bs-dismiss="modal">Cancelar</button>
                <button id="btnConfirmarNota" type="button" class="btn btn-primary btn-danger mx-2">Enviar</button>
            </div>
            </div>
        </div>
    </div>
    `}export{B as init,_ as render};
