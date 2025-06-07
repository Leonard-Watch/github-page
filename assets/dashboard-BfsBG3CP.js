import{m as d}from"./index-CJQ0crVK.js";import{e as l}from"./db-BGoRXoSP.js";import{m as b}from"./toasts-DA_JyVKE.js";import{b as m}from"./btnEvents-C3qwuUU2.js";async function u(){try{const t=await l(),e=document.querySelector(".tbody");if(!e){console.error("No se encontró el tbody en la tabla");return}if(e.innerHTML="",t.length===0){e.innerHTML=`
                <tr>
                    <td colspan="5" class="text-center py-4">
                        - No hay galerías registradas. -
                    </td>
                </tr>
            `;return}const o=t.map((a,s)=>{const{id:r,nombre:n,fecha:c}=a;return`
            <tr class="table__tr">
                <td data-label="#">${s+1}</td> 
                <td data-label="Nombre">${n}</td>
                <td data-label="Fecha">${c}</td> <!-- Fecha generada SOLO TESTEO -->
                <td data-label="Código" class="table__tdCode">
                    <span class="table__btnCopy copy-code" data-code="${r}">
                        ${r}
                    </span>
                </td>
                <td data-label="Acciones" class="text-nowrap">
                    <button class="table__tdVer btn btn-sm btn-outline-danger">             
                        <span class="d-sm-inline">Ver Galeria</span>
                    </button>
                </td>
            </tr>
            `}).join("");e.innerHTML=o}catch(t){console.error("Error al generar la tabla:",t)}}function p(){document.querySelector(".main__Eventos").addEventListener("click",t=>{const e=t.target.closest(".copy-code");e&&h(e)})}async function h(t){const e=t.dataset.code;try{await navigator.clipboard.writeText(e),i(t),b("exito","¡Código Copiado!")}catch(o){console.error("Error al copiar:",o);const a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),i(t)}}function i(t){const e=t.innerHTML;t.innerHTML='<i class="fas fa-check"></i> Copiado!',t.classList.add("text-success"),setTimeout(()=>{t.innerHTML=e,t.classList.remove("text-success")},2e3)}function y(){document.querySelector(".table__body").addEventListener("click",e=>{var r,n,c;const o=e.target.closest(".table__tdVer");if(!o)return;const a=o.closest(".table__tr");if(!a||!((c=(n=(r=a.children[3])==null?void 0:r.children[0])==null?void 0:n.dataset)!=null&&c.code))return;const s=a.children[3].children[0].dataset.code;m(s)})}function C(){return`
      <main class="main">
        
        <div class="grid-stack"></div>
         
        <h1 class="main__titulo main__titulo--evento-titulo">- Eventos Recientes -</h1>
        <section class="main__Eventos"> 
          <div class="container mt-3">
            <div class="table-responsive">
              <table class="table table-hover table-bordered caption-top">
                <caption class="table__caption table-dark">
                  <a href="/admin/galeria" class="link-primary text-decoration-none">Ver Galerias
                    <i class="bi bi-arrow-right"></i>
                  </a> 
                </caption>

                <thead class="table__head d-sm-table-header-group table-dark">
                  <tr class="table__tr">
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Código</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                
                <tbody class="table__body tbody">
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        
      </main>      
  `}function L(){d(),_(),p(),y()}function _(){console.log("Obteniendo datos del servidor..."),u()}export{L as init,C as render};
