var modal = document.getElementById("ModalTable");
var contenido = '';
var extras = '';
var extras2 = '';
var extras3 = '';
var price = 0;
var code;
var id = 0;

function articulo(codigo, precio, nombre, detalle) {
    $("#onload").fadeIn();
    price = precio;

    $("#ModalTable").empty();

    $.ajax({

        type: "post",
        url: "models/guarniciones.php",
        DataType: "json",
        data: "arcodigo=" + codigo,
        success: function(e) {

            var valor = JSON.parse(e);

            if (valor.ingredientes == 0 && valor.guarniciones == 0 && valor.termino == 0) {
                extras = '';
            } else if (valor.guarniciones != 0 && valor.termino != 0 && valor.ingredientes != 0) {


                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Guarniciones</h5>`;
                $.each(valor.guarniciones, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="guarnicion" value="${item.ac_descri}" />
          <span class="radio"></span>
          <span class="label">${item.ac_descri}</span>
          </label>
           `;
                });

                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Ingredientes</h5></div>`;
                $.each(valor.ingredientes, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="Ingredientes" value="${item.IN_DESCRI}" />
          <span class="radio"></span>
          <span class="label">Sin ${item.IN_DESCRI}</span>
          </label>
          `;
                });


                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Terminos</h5></div>`;
                $.each(valor.termino, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="termino" value="${item.TE_DESCRI}"  />
          <span class="radio"></span>
          <span class="label">${item.TE_DESCRI}</span>
          </label>
          `;
                });

                extras += `</div>`;


            } else if (valor.ingredientes == 0 && valor.termino == 0 && valor.guarniciones != 0) {
                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Guarniciones</h5>`;
                $.each(valor.guarniciones, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="guarnicion" value="${item.ac_descri}" />
          <span class="radio"></span>
          <span class="label">${item.ac_descri}</span>
          </label>
          `;
                });

                extras += `</div>`;
            } else if (valor.guarniciones == 0 && valor.termino == 0 && valor.ingredientes != 0) {
                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Ingredientes</h5>`;
                $.each(valor.ingredientes, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="Ingredientes" ${item.IN_DESCRI}  />
          <span class="radio"></span>
          <span class="label">Sin  ${item.IN_DESCRI}</span>
          </label>
          `;
                });
                extras += `</div>`;
            } else if (valor.guarniciones == 0 && valor.ingredientes == 0 && valor.termino != 0) {
                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Terminos</h5>`;
                $.each(valor.termino, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="termino" value="${item.IN_DESCRI}"  />
          <span class="radio"></span>
          <span class="label">Sin  ${item.IN_DESCRI}</span>
          </label>
         `;
                });
                extras += `</div>`;
            } else if (valor.termino == 0 && valor.ingredientes != 0 && valor.guarniciones != 0) {

                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">guarniciones</h5>`;
                $.each(valor.guarniciones, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="guarnicion" value="${item.ac_descri}"   />
          <span class="radio"></span>
          <span class="label">${item.ac_descri}</span>
          </label>
          `;
                });

                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Ingredientes</h5></div>`;
                $.each(valor.ingredientes, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="Ingredientes" value="${item.IN_DESCRI}"  />
          <span class="radio"></span>
          <span class="label">SIN  ${item.IN_DESCRI}</span>
          </label>`;
                });

                extras += `</div>`;
            } else if (valor.ingredientes == 0 && valor.termino != 0 && valor.guarniciones != 0) {
                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">guarniciones</h5>`;
                $.each(valor.guarniciones, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="guarnicion" value="${item.ac_descri}"   />
          <span class="radio"></span>
          <span class="label">${item.ac_descri}</span>
          </label>
          `;
                });

                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Terminos</h5></div>`;
                $.each(valor.termino, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="termino" value="${item.TE_DESCRI}"  />
          <span class="radio"></span>
          <span class="label">${item.TE_DESCRI}</span>
          </label>
         `;
                });


                extras += `</div>`;

            } else if (valor.guarniciones == 0 && valor.termino != 0 && valor.ingredientes != 0) {


                extras = '';
                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Ingredientes</h5>`;
                $.each(valor.ingredientes, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="Ingredientes" value="${item.IN_DESCRI}"   />
          <span class="radio"></span>
          <span class="label">SIN  ${item.IN_DESCRI}</span>
          </label>
          `;
                });

                extras += `<div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
          <h5 id="bulgy-radios-label">Terminos</h5></div>`;
                $.each(valor.termino, function(i, item) {
                    extras += `
          <label>
          <input type="radio" name="termino" value="${item.TE_DESCRI}"  />
          <span class="radio"></span>
          <span class="label">${item.TE_DESCRI}</span>
          </label>
          `;
                });
                extras += `</div>`;
            }


            contenido = ` 
        <link rel="stylesheet" href="Styles/radio.css">
      
        
        <div class="modal-header">
        <nav class="navbar fixed-top">
            <div style="border-right: 1px solid black; height: 100%; width: 20%; margin: 0px;">
                <i class="btn fas fa-arrow-left fa-2x" onclick="Fact();"></i>
            </div>
            <h5 id="nombre">${nombre}</h5>
            <div></div>
            <div></div>
            <div></div>
    
        </nav>
    </div>
    <div class="modal-body">
      
        <img src="IMG/${codigo}.jpg" style="width: 100%; height: 250px;" style="margin: 5px;"><br>
        <p style="margin: 15px;">${detalle}</p>
        <h6 style="margin: 15px;">Instrucciones especiales: </h6>
        <div class="form-group" style="margin: 15px;">
            <textarea style="font: 400 13.3333px Arial;" id="instrucion" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Inserte aqui las Instrucciones especiales del producto "></textarea>
        </div>
        <div id="guarnicion">

       

        ${extras}
           
        </div>
        <h4 style="margin: 15px;">Cantidad: </h4>
        <div class="d-flex justify-content-between" style="border: 2px solid black; border-radius: 5px; margin:15px; !important">
            <input type="number" value="1" id="cantidad" style="border: 0px; font-size:20px; color:black;"  size="20%"  disabled>
            <div>
                <span class="btn btn-lg btn-danger" id="menos"  style="margin: 5px; width: 50px;font-size:25px;" onclick="menos(${precio})">-</span>
                <span class="btn btn-lg btn-success" id="mas" style="margin: 5px; width: 50px;font-size:25px;" onclick="mas(${precio})">+</span>
            </div>
        </div>
  <br>
  <br>
  <br>
        </div>
        <div class="modal-footer" style="width: 100%;" >
        <button onclick="addcart();" class="btn-primary btn btn-lg" style="height: 10%; width:100%; position: fixed; left: 0; bottom: 0;">
        <div class="d-flex justify-content-between">
        <div>
        RD$ 
        <span id="precio">${precio}</span>
        </div>
        <div>Agregar al Pedido</div>
        </div>
    </button>
        </div>

        `;

        },
        complete: function() {
            modal.innerHTML += contenido;
        }

    });


}

function mas(current) {
    precio = document.getElementById('precio');
    cantidad = document.getElementById('cantidad');
    cantidad.value = parseFloat(cantidad.value) + 1;

    precio.innerHTML = currency(current * cantidad.value, { pattern: `# ` }).format();
}

function menos(current) {
    cantidad = document.getElementById('cantidad');
    precio = document.getElementById('precio');
    if (cantidad.value > 1) {
        cantidad.value -= 1;
        precio.innerHTML = currency((current * cantidad.value), { pattern: `# ` }).format();
    }
}

function addcart() {
    var guarnicion = $("input:radio[name=guarnicion]:checked").val();
    var ingrediente = $("input:radio[name=Ingredientes]:checked").val();
    var termino = $("input:radio[name=termino]:checked").val();
    var cantidad = $("#cantidad").val();
    var precio = price;
    var name = $("#nombre").text();
    var instruccion = $('#instrucion').val();
    var carrito = JSON.parse(localStorage.getItem('car'));
    if (carrito == null) {
        carrito = [];
    }
    id = carrito.length;
    for (dat of carrito) {
        if (dat.codigo == id) {
            id += 1;
        }
        if (dat.nombre == name && dat.guarnicion == guarnicion && dat.ingrediente == ingrediente && dat.termino == termino && dat.instruccion == instruccion) {
            dat.cantidad = parseInt(dat.cantidad) + parseInt(cantidad);
            localStorage.setItem('car', JSON.stringify(carrito));
            return Fact();
        }
    }

    carrito.push({
        nombre: name,
        codigo: id,
        guarnicion: guarnicion,
        ingrediente: ingrediente,
        cantidad: cantidad,
        precio: precio,
        termino: termino,
        instruccion: instruccion
    });

    localStorage.setItem('car', JSON.stringify(carrito));
    Fact();
}