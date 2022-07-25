const p1 = 29.99 , p2 = 39.99, p3 = 34.99, p4 = 44.99, p5 = 24.99;
let cantidad = 0, cantidad1 = 0,cantidad2 = 0,cantidad3 = 0,cantidad4 = 0,cantidad5 = 0, total= 0 ,total1 = 0,total2 = 0,total3 = 0,total4 = 0,total5 = 0;
let artículo , answer;
//Variables a utilizar en el algoritmo
function totalArticulo(){
    artículo = prompt(`Seleccione la opción del artículo que desee comprar:
    1) Remera Negra $29.99.
    2) Sweater Negro $39.99.
    3) Remera Blanca $34.99.
    4) Sweater Gris $44.99.
    5) Remera Gris $24.99.`);
if(artículo == 1){ 
    cantidad1 += pedirCantidadArticulo(artículo);
    total1 += cantidad1* p1;
    answer = confirm(`¿Deseas hacer otra compra?`);
    }else if(artículo == 2) {
        cantidad2 += pedirCantidadArticulo(artículo);
        total2 += cantidad2* p2;
        answer = confirm(`¿Deseas hacer otra compra?`);
    }else if(artículo == 3) {
        cantidad3 += pedirCantidadArticulo(artículo);
        total3 += cantidad3* p3;
        answer = confirm(`¿Deseas hacer otra compra?`);
    }else if(artículo == 4) {
        cantidad4 += pedirCantidadArticulo(artículo);
        total4 += cantidad4* p4;
        answer = confirm(`¿Deseas hacer otra compra?`);
    }else if(artículo == 5) {
        cantidad5 += pedirCantidadArticulo(artículo);
        total5 += cantidad5* p5;
        answer = confirm(`¿Deseas hacer otra compra?`);
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        totalArticulo();
    }
    return total = total1+total2+total3+total4+total5;
}
//Funcion que recibe el articulo que quieres comprar y retorna el total del valor
function pedirCantidadArticulo(){
    cantidad = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${artículo}:`));
    if( cantidad > 0){
        return cantidad;
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        pedirCantidadArticulo();
    }
}
//Funcion que pide la cantidad de unidades que desea comprar el usuario por articulo
alert(`¡Bienvenidos a la tienda virtual de la banda TOOL!`)
do{ 
    totalArticulo();
}while(answer)
//ciclo que ejecuta el algoritmo las veces que el usuario desee
alert(`${cantidad1} unidades del artículo 1: $${total1}
${cantidad2} unidades del artículo 2: $${total2}
${cantidad3} unidades del artículo 3: $${total3}
${cantidad4} unidades del artículo 4: $${total4}
${cantidad5} unidades del artículo 5: $${total5}
El total a pagar es de: $${total}`);
//mensaje con los totales parciales de cada articulo y el total de la compra