var Entradas = document.getElementById("Entradas");
var Ensaladas = document.getElementById("Ensaladas");
var Aves = document.getElementById("Aves");
var Carnes = document.getElementById("Carnes");
var Mariscos = document.getElementById("Mariscos");
var Pastas = document.getElementById("Pastas");





$(document).ready(function() {

    $.ajax({

        url: "models/listado_articulos.php",
        success: function(e) {
           
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.entradas) {
                Entradas.innerHTML += `

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

        url: "models/listado_articulos.php",
        success: function(e) {
           
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.ensaladas) {
                Ensaladas.innerHTML += `
    
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

        url: "models/listado_articulos.php",
        success: function(e) {
           
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.aves) {
                Aves.innerHTML += `
    
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

        url: "models/listado_articulos.php",
        success: function(e) {
           
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.carnes) {
                Carnes.innerHTML += `
        
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

        url: "models/listado_articulos.php",
        success: function(e) {
          
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.mariscos) {
                Mariscos.innerHTML += `
        
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

        url: "models/listado_articulos.php",
        success: function(e) {
      
            var nuestro = JSON.parse(e);
            for (let datos of nuestro.pastas) {
                Pastas.innerHTML += `
            
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