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

        <li>
        <div class="media">

        <img class="mr-3" src="../IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
        <div class="media-body">
          <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
          <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
          </div>
          </div>
         <small> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</small>
      </li><br>
       
    
           
      
        `;
    }


}

});

});