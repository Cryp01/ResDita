function Fact() {
    $("#ModalTable").empty();
    Tabla = "Views/listado_articulo.html";
    $("#onload").fadeIn();
    $("#ModalTable").load(Tabla);
}