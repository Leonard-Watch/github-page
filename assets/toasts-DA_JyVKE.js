let o=null;function d(n,t,a=5e3){const s={exito:{bg:"bg-success",icono:"✔",titulo:"Éxito"},error:{bg:"bg-danger",icono:"⚠",titulo:"Error"},info:{bg:"bg-info",icono:"ℹ",titulo:"Info"},advertencia:{bg:"bg-warning",icono:"⚠",titulo:"Advertencia"}};let e=document.getElementById("toast-container");e||(e=document.createElement("div"),e.id="toast-container",e.className="position-fixed bottom-0 end-0 p-3",e.style.zIndex="11",document.body.appendChild(e));const i=document.createElement("div");i.innerHTML=`
      <div class="toast show align-items-center text-white ${s[n].bg}" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            <strong>${s[n].icono} ${s[n].titulo}:</strong> ${t}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    `,e.appendChild(i),setTimeout(()=>{i.remove()},a)}function r(n="Cargando..."){if(o)return;let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="position-fixed bottom-0 end-0 p-3",t.style.zIndex="11",document.body.appendChild(t)),o=document.createElement("div"),o.innerHTML=`
    <div class="toast show align-items-center text-white bg-primary" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <div class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></div>
          ${n}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" onclick="this.closest('.toast').remove();"></button>
      </div>
    </div>
  `,t.appendChild(o)}function l(){o&&(o.remove(),o=null)}export{r as a,d as m,l as o};
