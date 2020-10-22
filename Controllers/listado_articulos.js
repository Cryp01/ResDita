var contenido = document.getElementById("carne");


$(document).ready(function(){

$.ajax({

url:"../models/listado_articulos2.php",
success:function(e)
{

console.log(e);
    var nuestro = JSON.parse(e);
         
  

    for(let datos of nuestro)
    {
        contenido.innerHTML +=  `

     <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
    <img src="../IMG/bg.jpg" width="150px" height="100px" style="margin-right:20px;">
    <div>
    <div class="d-flex w-100 justify-content-between">
      <h7 class="mb-1">${datos.AR_DESCRI}</h7>
      <small CLASS="text-success">${datos.AR_PREDET}</small>
    </div>
    <p class="mb-1 small">Un Texto plano (plain text), son aquellos archivos formados exclusivamente por texto (sólo caracteres), sin ningún formato; es decir, no requieren ser interpretados para leerse (aunque pueden ser procesados en algunos casos). También son llamados archivos de texto llano, simple o sin formato.</p>
    <small></small>
    </div>
    </div>
  </a>
       
    
           
      
        `;
    }



}

});

});