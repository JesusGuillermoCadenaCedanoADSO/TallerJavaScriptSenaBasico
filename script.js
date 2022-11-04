let text = "";
var resultado;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(myFunction);
function myFunction(item) {
    resultado = item + 1;
    text += "numero :" + item + "<br>";
}
document.querySelector("#demo").innerHTML = text + "<br>" +
 "El resultado es :" + resultado;