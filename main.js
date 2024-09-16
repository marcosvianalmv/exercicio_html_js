const form = document.getElementById('form_calcular');

function calculaMaior(campoA, campoB){
    if(campoA < campoB){
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();


const valorCampoA = document.getElementById('campo-a');
const valorCampoB = document.getElementById('campo-b');

let comparaCampos = calculaMaior(parseFloat(valorCampoA.value), parseFloat(valorCampoB.value));

if(comparaCampos){
    alert("O formulario e valido.");
}else{
    alert("O formulario nao e valido.");
}

});