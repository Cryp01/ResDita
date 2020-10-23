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
            console.log(nuestro.aves.codigo);
            for (let datos of nuestro.entradas) {
                console.log(datos.codigo, datos.AR_DESCRI);

                Entradas.innerHTML += `

        <li>
        <div class="media" onclick="articulo('${datos.codigo}')">

        <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
        <div class="media-body">
          <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
          <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
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
                console.log(datos.codigo, datos.AR_DESCRI);
                Ensaladas.innerHTML += `
    
            <li>
            <div class="media" onclick="articulo('${datos.AR_CODIGO}')">
    
        <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
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
                console.log(datos.codigo, datos.AR_DESCRI);
                Aves.innerHTML += `
    
            <li>
            <div class="media" onclick="articulo('${datos.AR_CODIGO}')">
    
            <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
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
                console.log(datos.codigo, datos.AR_DESCRI);
                Carnes.innerHTML += `
        
                <li>
                <div class="media" onclick="articulo('${datos.AR_CODIGO}')">
        
                <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
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
                console.log(datos.codigo, datos.AR_DESCRI);
                Mariscos.innerHTML += `
        
                <li>
                <div class="media" onclick="articulo('${datos.AR_CODIGO}')">
        
                <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
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
                console.log(datos.codigo, datos.AR_DESCRI);
                Pastas.innerHTML += `
            
                    <li>
                    <div class="media">
                    <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                    <div class="media-body">
                      <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                      <span class="badge badge-success badge-pill">RD$  ${datos.AR_PREDET}</span>
                      </div>
                      </div>
                     <small> ${datos.AR_DETALLE}</small>
                  </li><br>     
                    `;
            }
        }
    }); //ajax combos











});