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

    for (let datos of current) {
        guarnicion = '';
        ingrediente = '';
        termino = '';
        instruciones = '';
        ofertas = '';
        if (datos.oferta != '') {
            ofertas = '<small class="badge badge-danger badge-pill">' + datos.oferta + '</small> <br>';
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

        subtotal += datos.precio * datos.cantidad;
        total = subtotal + (subtotal * 0.18);
        total = currency(total, {
            pattern: `# `
        }).format();
        itbs = subtotal + (subtotal * 0.18);
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
        <strong>RD$${datos.precio * datos.cantidad}</strong>
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
                    <small>RD$${subtotal}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small>Ley:</small>
                <small>${ley}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small>ITBS</small>
                <small>${itbs}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 0px 15px;">
                <small class="text-danger">Descuento</small>
                <small>RD$${descuento}</small>
                </div>
                <div class="d-flex justify-content-between" style="margin:0px 15px 15px 15px;">
                <small class="text-danger">Oferta</small>
                <small>RD$${ofertas}</small>
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