var carrito = JSON.parse(sessionStorage.getItem('car'));
if (carrito == null) {
    carrito = [];
}

function showCarrito() {
    $("#onload").fadeIn();
    var current = JSON.parse(sessionStorage.getItem('car'));
    if (current == null) {
        current = [];
    }
    $("#ModalTable").empty();
    var table = '';
    contenido = '';
    var guarnicion = '';
    var ingrediente = '';
    var termino = '';
    var instruciones = '';
    var subtotal = 0;
    var total = 0;
    var ley = 0.00;
    var itbs = 0;
    var ofertas = 0;
    var descuento = 0;
    var price = 0;
    var descon = 0;
    for (let datos of current) {
        guarnicion = '';
        ingrediente = '';
        termino = '';
        instruciones = '';
        ofertas = '';
        price = 0;
        if (datos.oferta != '') {

            if (datos.tipo == 'PV') {
                ofertas = '<small class="badge badge-danger badge-pill">%' + datos.oferta + '</small> <br>';
                price = (datos.precio) * (datos.oferta / 100);
                descuento += parseFloat(price);

                price = datos.precio - price;
            } else if (datos.tipo == 'OF') {

                price = Offerta(datos.cantidad) * datos.precio;
                ofertas = '<small class="badge badge-danger badge-pill">' + datos.oferta + '</small> <br>';
            } else if (datos.tipo = "CXP") {
                var SEPARADOR = datos.oferta.indexOf('X');
                var cand = parseInt(datos.oferta.substr(0, SEPARADOR));
                var pres = parseInt(datos.oferta.substr(SEPARADOR + 1, datos.oferta.length));

                price = Offerta(datos.cantidad, cand, pres) * datos.precio;
                ofertas = '<small class="badge badge-danger badge-pill">' + datos.oferta + '</small> <br>';
            }
        } else {
            price = datos.cantidad * datos.precio
        }

        if (datos.guarnicion) {
            guarnicion = '<small>' + datos.guarnicion + '</small><br>';
        }
        if (datos.ingrediente) {
            ingrediente = '<small>SIN ' + datos.ingrediente + '</small><br>';
        }
        if (datos.termino) {
            termino = '<small>' + datos.termino + '</small><br>';
        }
        if (datos.instruccion) {
            instruciones = '<small>' + datos.instruccion + '</small>';
        }


        subtotal += price;
        price = currency(price, {
            pattern: `# `
        }).format();
        descon = currency(descuento, {
            pattern: `# `
        }).format();
        total = subtotal + (subtotal * 0.18);
        total = currency(total, {
            pattern: `# `
        }).format();
        itbs = currency((subtotal * 0.18), {
            pattern: `# `
        }).format();
        subtotalc = currency(subtotal, {
            pattern: `# `
        }).format();
        table += `
        <div class="d-flex justify-content-between" style="margin:5px">
        <div>
        <strong><span style="margin-right:10px">${datos.cantidad}</span>
        <span  style="font-size:13px;">${datos.nombre}</span></strong> 
        <br>
        <div style="margin-left:24px;">
        ${ofertas}
        ${guarnicion}
        ${ingrediente}
        ${termino}
        ${instruciones}
        </div>
        </div>
        <div>
        <strong>RD$${price}</strong>
        <i class="fas fa-times-circle fa-1x" onclick="rojo(${datos.codigo});"></i>
        </div>
       </div>    
       </div>                 
        `

    }



    contenido += ` 
       
                <div class="modal-header">
                <nav class="navbar fixed-top" style="box-shadow:0px 0px 13px #000">
                    <div style="border-right: 1px solid black; height: 100%; width: 20%; margin: 0px;">
                        <i class="btn fas fa-arrow-left fa-2x" onclick="Fact();"></i>
                    </div>
                    <h5 id="nombre">MI PEDIDO</h5>
                    <div></div>
                    <div></div>
                    <div></div>

                </nav>
            </div>
            <div class="modal-body">
                <div style="margin-top:9%">
                ${table}
                </div>
                <div style="border: 1px solid black; margin:15px;"></div>

                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                    <small>Subtotal</small>
                    <small>RD$${subtotalc}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small>Ley:</small>
                <small>RD$${ley}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small>ITBS</small>
                <small>RD$${itbs}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small class="text-danger">Descuento</small>
                <small>RD$${descon}</small>
                </div>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 15px 15px;">
                <strong><h7>Total</h7></strong>
                <strong><h7>RD$${total}</h7></strong>
                </div>
                <div style="padding-bottom:100%;">
                </div>      
            </div>
            <div class="modal-footer" style="width: 100%;" >
            <button onclick="addcart();" class="btn-primary" style="height: 10%; width:100%; position: fixed; left: 0; bottom: 0;">
            <div class="d-flex justify-content-between">
            <div>
            RD$ 
            <span id="precio">${total}</span>
            </div>
            <div>Confirmar pedido</div>
            </div>
            </button>
            </div>

   `;




    modal.innerHTML = contenido;


}

function rojo(codes) {
    var current = JSON.parse(sessionStorage.getItem('car'));
    for (var i = 0; i < current.length; i++) {
        if (current[i].codigo == codes) {
            if (current[i].cantidad > 1) {
                current[i].cantidad -= 1;
                $("#ModalTable").empty();
                sessionStorage.setItem('car', JSON.stringify(current));
            } else {
                current.splice(i, 1);

                $("#ModalTable").empty();
                sessionStorage.setItem('car', JSON.stringify(current));
            }
        }
    }
    showCarrito();
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