var Carne = document.getElementById("carne");
var Embutidos = document.getElementById("Embutidos");
var Pescados = document.getElementById("Pescados");
var Salsas = document.getElementById("Salsas");
var Tragos = document.getElementById("Tragos");
var Combos = document.getElementById("Combos");





$(document).ready(function() {

    $.ajax({

        url: "models/listado_articulos.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.entradas) {
                Carne.innerHTML += `

        <li>
        <div class="media">

        <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
        <div class="media-body">
          <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
          <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
          </div>
          </div>
         <small> ${datos.AR_DETALLE}</small>
      </li><br>     
        `;
            }
        }
    }); //ajax carne



    $.ajax({

        url: "models/listado_articulos2.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.ensaladas) {
                Embutidos.innerHTML += `
    
            <li>
            <div class="media">
    
            <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
              </div>
              </div>
             <small> ${datos.AR_DETALLE}</small>
          </li><br>     
            `;
            }
        }
    }); //ajax Embutidos



    $.ajax({

        url: "models/listado_articulos2.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.aves) {
                Pescados.innerHTML += `
    
            <li>
            <div class="media">
    
            <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
              </div>
              </div>
             <small> ${datos.AR_DETALLE}</small>
          </li><br>     
            `;
            }
        }
    }); //ajax Pescados



    $.ajax({

        url: "models/listado_articulos2.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.carnes) {
                Salsas.innerHTML += `
        
                <li>
                <div class="media">
        
                <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
                  </div>
                  </div>
                 <small> ${datos.AR_DETALLE}</small>
              </li><br>     
                `;
            }
        }
    }); //ajax salsas




    $.ajax({

        url: "models/listado_articulos2.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.mariscos) {
                Tragos.innerHTML += `
        
                <li>
                <div class="media">
        
                <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
                  </div>
                  </div>
                 <small> ${datos.AR_DETALLE}</small>
              </li><br>     
                `;
            }
        }
    }); //ajax salsas


    $.ajax({

        url: "models/listado_articulos2.php",
        success: function(e) {
            console.log(e);
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.pastas) {
                Combos.innerHTML += `
            
                    <li>
                    <div class="media">
                    <img class="mr-3" src="IMG/bg.jpg" alt="Generic placeholder image" with="80px" height="100px">
                    <div class="media-body">
                      <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                      <span class="badge badge-success badge-pill">${datos.AR_PREDET}</span>
                      </div>
                      </div>
                     <small> ${datos.AR_DETALLE}</small>
                  </li><br>     
                    `;
            }
        }
    }); //ajax combos











});