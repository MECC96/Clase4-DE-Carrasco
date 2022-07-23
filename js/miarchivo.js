alert(`¡Bienvenidos a la tienda virtual de la banda TOOL!`)
const p1 = 29.99 , p2 = 39.99, p3 = 34.99, p4 = 44.99, p5 = 24.99;
let cantidad = 0, total= 0 ;
let artículo , answer;
do{ 
    totalArticulo();
}while(answer !== "no" && answer !== "NO" && answer !== "No")

alert(`El total a pagar es de: $${total}`);

function pedirCantidadArticulo(){
    cantidad = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${artículo}:`));
    if( cantidad > 0){
        return cantidad;
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        pedirCantidadArticulo();
    }
}
function totalArticulo(){
    artículo = prompt(`Seleccione la opción del artículo que desee comprar:
1) Remera Negra $29.99.
2) Sweater Negro $39.99.
3) Remera Blanca $34.99.
4) Sweater Gris $44.99.
5) Remera Gris $24.99.`);
    if(artículo == 1){ 
        total += pedirCantidadArticulo(artículo)* p1;
        answer = prompt(`¿Deseas hacer otra compra? Ingrese "no" para salir`);
    }else if(artículo == 2) {
        total += pedirCantidadArticulo(artículo)* p2;
        answer = prompt(`¿Deseas hacer otra compra? Ingrese "no" para salir`);
    }else if(artículo == 3) {
        total += pedirCantidadArticulo(artículo)* p3;
        answer = prompt(`¿Deseas hacer otra compra? Ingrese "no" para salir`);
    }else if(artículo == 4) {
        total += pedirCantidadArticulo(artículo)* p4;
        answer = prompt(`¿Deseas hacer otra compra? Ingrese "no" para salir`);
    }else if(artículo == 5) {
        total += pedirCantidadArticulo(artículo)* p5;
        answer = prompt(`¿Deseas hacer otra compra? Ingrese "no" para salir`);
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        totalArticulo();
    }
    return total;
}