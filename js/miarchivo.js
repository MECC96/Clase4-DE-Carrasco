// let artículo = prompt(`¡Bienvenidos a la tienda virtual de la banda TOOL!
// Seleccione la opción que del artículo que desee comprar:
// 1) Remera Negra.
// 2) Sweater Negro.
// 3) Remera Blanca.
// 4) Sweater Blanco.
// 5) Remera Gris.`);

// if(artículo == 1){

// }else if(artículo == 2) {
    
// }else if(artículo == 3) {
    
// }else if(artículo == 4) {
    
// }else if(artículo == 5) {
    
// }else{

// }

let artículo = prompt(`¡Bienvenidos a la tienda virtual de la banda TOOL!
Seleccione la opción que del artículo que desee comprar:
1) Remera Negra $29.99.
2) Sweater Negro $39.99.
3) Remera Blanca $34.99.
4) Sweater Gris $44.99.
5) Remera Gris $24.99.`);
let cantidad = 0;

function pedirCantidadArticulo(){
    cantidad = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${artículo}:`));
    return cantidad;
}
function pedirArtículo() {
    let total;
    if(artículo == 1){
        pedirCantidadArticulo();
        total = cantidad* 29.99;
        alert(`El total a pagar es: $${total}`);
    }else if(artículo == 2) {
        pedirCantidadArticulo();
        total = cantidad* 39.99;
        alert(`El total a pagar es: $${total}`);
    }else if(artículo == 3) {
        pedirCantidadArticulo();
        total = cantidad* 34.99;
        alert(`El total a pagar es: $${total}`);
    }else if(artículo == 4) {
        pedirCantidadArticulo();
        total = cantidad* 44.99;
        alert(`El total a pagar es: $${total}`);
    }else if(artículo == 5) {
        pedirCantidadArticulo();
        total = cantidad* 24.99;
        alert(`El total a pagar es: $${total}`);
    }else{
        artículo = prompt(`Dato ingresado inválido. Por favor, intente nuevamente.
        1) Remera Negra $29.99.
        2) Sweater Negro $39.99.
        3) Remera Blanca $34.99.
        4) Sweater Gris $44.99.
        5) Remera Gris $24.99.`);
        pedirArtículo();
    }
}



pedirArtículo();