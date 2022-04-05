var numeroValores = 0;
var valor = [];
var media = 0;

function adicionaValor(){
    var coletaValor = document.getElementById("valor");
    console.log("Adicionou o valor: " + coletaValor.value);
    valor.push(coletaValor.value);
    numeroValores++;
    printarResultados();
    document.getElementById("valor").value='';          //Limpando campo do input
}

function calcularMedia(){
    console.log("Calculando média: ");
    var somatorio = 0;;
    var i = 0;
    while(i<valor.length){
        somatorio = somatorio + parseFloat(valor[i]);
        i++;
    }
    media = somatorio/numeroValores;
    console.log("Média calculada");
    console.log(media)
    document.getElementById("mediaEncontrada").innerHTML = media.toFixed(4);
}

function printarResultados(){
    document.getElementById("quantidadeDeValoresInseridos").innerHTML = numeroValores;
    document.getElementById("valoresInseridos").innerHTML = valor;
}

function resetarCalculos(){
    valor=[];
    numeroValores=0;
    document.getElementById("quantidadeDeValoresInseridos").innerHTML = '';
    document.getElementById("valoresInseridos").innerHTML = '';
    document.getElementById("mediaEncontrada").innerHTML = '';
}