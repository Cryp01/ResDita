var modal = document.getElementById("ModalTable");
var contenido = '';
var tipo_entrega = '';
var extras = '';
var extras2 = '';
var extras3 = '';
var price = 0;
var code;
var id = 0;
var des = 0;
var Tip = '';
var can = 1;

function articulo(codigo, precio, nombre, detalle, ofer, tipo) {
    $("#onload").fadeIn();
    Tip = tipo;
    price = precio;
    des = ofer
    if (Tip == 'PV') {
        ofer = `%${ofer}`
    }


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

            // tipo_entrega += `
            
           
            
            
            
            // `

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
            <span class="badge badge-danger badge-pill" style="font-size:20px;">${ofer}</span>
    
        </nav>
    </div>
    <div class="modal-body">
      
        <img src="IMG/${codigo}.jpg" style="width: 100%; height: 250px;" style="margin: 5px;"><br>
        <p style="margin: 15px; font-size:15px;">${detalle}</p>
        <h6 style="margin: 15px; font-size:15px;">Instrucciones especiales: </h6>
        <div class="form-group" style="margin: 15px;">
            <textarea style="font: 400 13.3333px Arial;" id="instrucion" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Inserte aqui las Instrucciones especiales del producto "></textarea>
        </div>
        <div id="guarnicion">
        ${extras}          
        </div>

            <div id="tipo_entrega">
                
            <form>
            <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
            <h5 id="bulgy-radios-label">Tipo De Entrega</h5>
             
            <label>
            <input type="radio"  name="tipo" value="pick up"/>
            <span class="radio"></span>
            <span class="label">Recoger</span>
            </label>
                    
             
            <label>
            <input type="radio"  checked name="tipo" value="Delivery"/>
            <span class="radio"></span>
            <span class="label">Delivery</span>
            </label>
  
  
            <label>
            <input type="radio"  name="tipo" value="Consumir"/>
            <span class="radio"></span>
            <span class="label">Consumir</span>
            </label>
  
  
  
  
            </form>
            </div>

          
            </div>

        <h4 style="margin: 15px;">Cantidad: </h4>
        <div class="d-flex justify-content-between" style="border: 2px solid black; border-radius: 5px; margin:15px; align-items:center; !important">
            <input type="number" value="1" id="cantidad" style="border: 0px; font-size:15px; color:black; margin-left:10px; display:none;" disabled>
            <strong><span style="font-size:15px; margin-left:15px; color:black;" id="can">1</span></strong>
            <div style="margin-left:15px">
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
    can = document.getElementById('can');
    cantidad.value = parseFloat(cantidad.value) + 1;
    can.textContent = cantidad.value;
    if (Tip == 'OF') {
        precio.innerHTML = Offerta(cantidad.value) * current;
    } else if (Tip == 'CXP') {
        var SEPARADOR = des.indexOf('X');
        var cand = parseInt(des.substr(0, SEPARADOR));
        var pres = parseInt(des.substr(SEPARADOR + 1, des.length));

        precio.innerHTML = currency(Offerta(cantidad.value, cand, pres) * current, {
            pattern: `# `
        }).format();
    } else {
        precio.innerHTML = currency((current * cantidad.value), {
            pattern: `# `
        }).format();
    }
}

function menos(current) {
    cantidad = document.getElementById('cantidad');
    precio = document.getElementById('precio');
    if (cantidad.value > 1) {
        cantidad.value -= 1;
        can.textContent = cantidad.value;
        if (Tip == 'OF') {
            precio.innerHTML = Offerta(cantidad.value) * current;
        } else if (Tip == 'CXP') {
            var SEPARADOR = des.indexOf('X');
            var cand = parseInt(des.substr(0, SEPARADOR));
            var pres = parseInt(des.substr(SEPARADOR + 1, des.length));
            precio.innerHTML = currency(Offerta(cantidad.value, cand, pres) * current, {
                pattern: `# `
            }).format();
        } else {
            precio.innerHTML = currency((current * cantidad.value), {
                pattern: `# `
            }).format();
        }
    }
}

function addcart() {
    var TipoEn = $("input:radio[name=tipo]:checked").val();
    var guarnicion = $("input:radio[name=guarnicion]:checked").val();
    var ingrediente = $("input:radio[name=Ingredientes]:checked").val();
    var termino = $("input:radio[name=termino]:checked").val();
    var cantidad = $("#cantidad").val();
    var precio = parseFloat(document.getElementById('precio').textContent);
    var name = $("#nombre").text();
    var instruccion = $('#instrucion').val();
    var carrito = JSON.parse(sessionStorage.getItem('car'));
    if (carrito == null) {
        carrito = [];
    }
    id = carrito.length;
    for (dat of carrito) {
        if (dat.codigo == id) {
            id += 1;
        }
        if (dat.nombre == name && dat.guarnicion == guarnicion && dat.ingrediente == ingrediente && dat.termino == termino && dat.instruccion == instruccion && dat.Tipodentrega == TipoEn ) {
            dat.cantidad = parseInt(dat.cantidad) + parseInt(cantidad);
            sessionStorage.setItem('car', JSON.stringify(carrito));
            return Fact();
        }
    }

    carrito.push({
        nombre: name,
        codigo: id,
        guarnicion: guarnicion,
        ingrediente: ingrediente,
        cantidad: cantidad,
        precio: price,
        termino: termino,
        instruccion: instruccion,
        oferta: des,
        tipo: Tip,
        Tipodentrega:TipoEn
        

    });

    sessionStorage.setItem('car', JSON.stringify(carrito));

    Fact();
}

function Offerta(Count, Value = 2, Price = 1) {
    if (Count < Value) {
        Oferta = Count;
    } else {
        if (Count % Value === 0) {
            Value = Count / Value;
            Oferta = Value * Price;
        } else {
            Residue = Count % Value;
            Value = Math.floor(Count / Value) + Residue;
            Oferta = Value * Price;
        }

    }
    return Oferta
}