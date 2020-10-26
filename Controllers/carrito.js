var carrito = [];
var current = JSON.parse(localStorage.getItem('car'));

function showCarrito(){    
    $("#ModalTable").empty();
    var table='';


    for(let datos of current)
    {

        table += `
        <tr>    
        <td>${datos.nombre}</td>
        <td>${datos.precio * datos.cantidad}</td>
        <td>${datos.cantidad}</td>
        </tr>
             
                        
        `
        
    }
    


    contenido +=` 
       
                <div class="modal-header">
                <nav class="navbar fixed-top">
                    <div style="border-right: 1px solid black; height: 100%; width: 20%; margin: 0px;">
                        <i class="btn fas fa-arrow-left fa-2x" onclick="Fact();"></i>
                    </div>
                    <h5 id="nombre"></h5>
                    <div></div>
                    <div></div>
                    <div></div>

                </nav>
            </div>
            <div class="modal-body">
        
            <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                
                </tr>
            </thead>
            <tbody>
                ${table}
            </tbody>
            </table>

            </div>
            <div class="modal-footer" style="width: 100%;" >
            <button onclick="addcart();" class="btn-primary btn btn-lg" style="height: 10%; width:100%; position: fixed; left: 0; bottom: 0;">
            <div class="d-flex justify-content-between">
            <div>
            RD$ 
            <span id="precio"></span>
            </div>
            <div>Confirmar pedido</div>
            </div>
            </button>
            </div>

   `;




    modal.innerHTML += contenido;
   




}