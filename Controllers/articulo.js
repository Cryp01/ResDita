
var modal = document.getElementById("ModalTable");
var contenido = '';
function articulo(codigo,precio,nombre)
{
    $("#ModalTable").empty();
 /*
    Tabla = "Views/articulo.html";
  
*/
    $.ajax({

     type:"post",
     url:"models/guarniciones.php",
     data: "arcodigo=" + codigo,
     success:function(e)
     {
        
        var datos = JSON.parse(e);

        if(datos)



        contenido =` <div class="modal-header">
        <nav class="navbar fixed-top">
            <div style="border-right: 1px solid black; height: 100%; width: 20%; margin: 0px;">
                <i class="btn fas fa-arrow-left fa-2x" onclick="Fact();"></i>
            </div>
            <h5>${nombre}</h5>
            <div></div>
            <div></div>
            <div></div>
    
        </nav>
    </div>
    <div class="modal-body">
      
        <img src="IMG/${codigo}.jpg" style="width: 100%; height: 250px;" style="margin: 5px;"><br>
        <p style="margin: 15px;"> Este es un burrito mexicano con carne, quezo, arroz, frijoles en vuelta en una tortilla</p>
        <h6 style="margin: 15px;">Instrucciones especiales: </h6>
        <div class="form-group" style="margin: 15px;">
            <textarea style="font: 400 13.3333px Arial;" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Inserte aqui las Instrucciones especiales del producto "></textarea>
        </div>
        <div id="guarnicion">
        
        
        </div>
        <h4 style="margin: 15px;">Cantidad: </h4>
        <div class="d-flex justify-content-between" style="border: 2px solid black; border-radius: 5px; margin:15px;">
            <input type="number" value="1" id="cantidad" style="border: 0px;"  size="20%" disabled>
            <div>
                <button class="btn btn-lg btn-secondary" id="menos"  style="margin: 5px; width: 50px;" onclick="menos(${precio})">-</button>
                <button class="btn btn-lg btn-secondary" id="mas" style="margin: 5px; width: 50px;" onclick="mas(${precio})">+</button>
            </div>
        </div>
  
    
    </div>
        <div class="modal-footer" style="width: 100%;">
        <button class="btn-primary btn btn-lg" fixed-bottom style="height: 10%; width:100%;">
        <div class="d-flex justify-content-between">
        <div>
        RD$ 
        <span id="precio">${precio}</span>
        </div>
        <div>Agregar al Pedido</div>
        </div>
    </button>
        </div>  `;

     },
     complete: function() {
        modal.innerHTML += contenido;
      }
     
    });
   
    
}

function mas(current){
    precio = document.getElementById('precio');
    cantidad = document.getElementById('cantidad');
    cantidad.value = parseFloat(cantidad.value)+ 1;
    
    precio.innerHTML = currency(current * cantidad.value,{pattern: `# `}).format() ;
}
function menos(current){
    cantidad = document.getElementById('cantidad');
    precio = document.getElementById('precio');
    if(cantidad.value > 1){
        cantidad.value -= 1;
        precio.innerHTML = currency((current * cantidad.value),{pattern: `# `}).format();
    }
}




