
var comprarButton = document.getElementById("comprarButton");
comprarButton.addEventListener("click", function () {
    var confirmacion = confirm("¿Estás seguro de realizar la compra?");
    if (confirmacion) {
        alert("La compra se ha realizado con éxito.");
    } else {
        alert("La compra ha sido cancelada.");
    }
});