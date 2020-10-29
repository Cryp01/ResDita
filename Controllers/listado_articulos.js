var ofer1 = document.getElementById("ofer1");
var Entradas = document.getElementById("Entradas");
var Ensaladas = document.getElementById("Ensaladas");
var Aves = document.getElementById("Aves");
var Carnes = document.getElementById("Carnes");
var Mariscos = document.getElementById("Mariscos");
var Pastas = document.getElementById("Pastas");

function oferta(datos) {
    var muestra = '';
    var des = '';
    var tipo = 'N';
    if (datos.AR_OFERTA == 'S') {
        if (datos.PV_2X1 == 1) {
            muestra = `<span class="badge badge-danger badge-pill">2X1</span>`;
            des = '2x1';
            tipo = 'OF'

        } else if (datos.OF_CANTID != 0 && datos.PV_PRECIO != 0) {
            muestra = `<span class="badge badge-danger badge-pill"> ${currency(datos.OF_CANTID,{pattern: `# `}).format()} X ${currency(datos.PV_PRECIO,{pattern: `# `}).format()}</span>`;
            des = parseInt(datos.OF_CANTID)+'X'+parseInt(datos.PV_PRECIO);
            tipo='CXP'
        }
        else if(datos.PV_DESC != 0)
        {
            muestra = `<span class="badge badge-danger badge-pill">%${currency(datos.PV_DESC,{pattern: `# `}).format()}</span>`;
            des = currency(datos.PV_DESC,{pattern: `# `}).format();
            tipo ='PV'
        }
    }
    return {"Muestra": muestra, "des":des, "tipo": tipo};
}




 $(document).ready(function() {

    $.ajax({

        url: "models/listado_articulos.php",
        success: function(e) {


            
                var nuestro = JSON.parse(e);
                var general = Object.keys(nuestro);
                    
                for (let dat of general) {
                    for(let datos of nuestro[dat]){
                        var muestra = oferta(datos).Muestra;

                        if(datos.AR_OFERTA == 'S'){
                      ofer1.innerHTML += `

                        <li>
                        <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">

                        <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                        <div class="media-body">
                        <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                        <span class="badge badge-success badge-pill">RD$  ${ currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
                        ${muestra}
                        </div>
                        </div>
                        <small> ${datos.AR_DETALLE}</small>
                        </li><br>     
                        `;
                    }
                        }
                        }

                    }
                        }); //ajax carne





            $.ajax({

                        url: "models/listado_articulos.php",
                        success: function(e) {


                            
                                var nuestro = JSON.parse(e);
                               

                              
                                for (let datos of nuestro.entradas) {
                                      var muestra = oferta(datos).Muestra;
                                 
                                    Entradas.innerHTML += `

        <li>
        <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">

        <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
        <div class="media-body">
          <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
          <span class="badge badge-success badge-pill">RD$  ${ currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
          ${muestra}
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
  var muestra = oferta(datos).Muestra;
                
                Ensaladas.innerHTML += `
    
            <li>
            <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">
    
        <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">RD$  ${currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
              ${muestra}
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
                  var muestra = oferta(datos).Muestra;
                Aves.innerHTML += `
    
            <li>
            <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">
    
            <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
            <div class="media-body">
              <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
              <span class="badge badge-success badge-pill">RD$  ${currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
              ${muestra}
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
                  var muestra = oferta(datos).Muestra;
                Carnes.innerHTML += `
        
                <li>
                <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">
        
                <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">RD$  ${currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
                  ${muestra}
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
                  var muestra = oferta(datos).Muestra;
                Mariscos.innerHTML += `
        
                <li>
                <div class="media" onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">
        
                <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                <div class="media-body">
                  <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                  <span class="badge badge-success badge-pill">RD$  ${currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
                  ${muestra}
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
                  var muestra = oferta(datos).Muestra;
                Pastas.innerHTML += `
            
                    <li>
                    <div class="media"  onclick="articulo('${datos.codigo}','${datos.AR_PREDET}','${datos.AR_DESCRI}','${datos.AR_DETALLE}','${oferta(datos).des}','${oferta(datos).tipo}')">
                    <img class="mr-3" src="IMG/${datos.codigo}.jpg" alt="Generic placeholder image" width="150px" height="100px">
                    <div class="media-body">
                      <h8 class="mt-0 mb-1 text-primary">${datos.AR_DESCRI}</h8><BR>
                      <span class="badge badge-success badge-pill">RD$  ${currency(datos.AR_PREDET,{pattern: `# `}).format()}</span><br>
                      ${muestra}
                      </div>
                      </div>
                     <small> ${datos.AR_DETALLE}</small>
                  </li><br>     
                    `;
            }
        }
    }); //ajax combos

});