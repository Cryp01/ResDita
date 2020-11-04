function Fact() {
    $("#ModalTable").empty();
    Tabla = "Views/listado_articulo.html";
    $("#onload").fadeIn();
    $("#ModalTable").load(Tabla);
    $('body').add('hidden');
    document.getElementById("cand").innerHTML = itemes();
}

function itemes() {
    var cants = 0;
    carrito = JSON.parse(sessionStorage.getItem("car"));
    for (cant of carrito) {
        cants += parseInt(cant.cantidad);
    }
    if (cants != null || cants > 0) {
        return cants
    } else {
        return '';
    }

}

document.getElementById("cand").innerHTML = itemes();