
numero1 = parseInt(prompt("Digite o primeiro número:"))

numero2 = parseInt(prompt("Digite o segundo número:"))

function somar(numero1, numero2){
    let soma = numero1 + numero2
    return "A soma de " + numero1 + " + " + numero2 + " = " + soma + " \n";
}
soma = somar(numero1, numero2)


function subtrair(numero1, numero2){
    let subtracao = numero1 - numero2
    return "A subtração de " + numero1 + " - " + numero2 + " = " + subtracao + " \n";
}
subtracao = subtrair(numero1, numero2)

function multiplicar(numero1, numero2){
    let multiplicacao = numero1 * numero2
    return "A multiplicação de " + numero1 + " * " + numero2 + " = " + multiplicacao + " \n";
}
multiplicacao = multiplicar(numero1, numero2)

function dividir(numero1, numero2){
    let divisao = numero1 / numero2
    return "A divisão de " + numero1 + " / " + numero2 + " = " + divisao.toFixed(2).toString().replace(".", ",") + " \n";
}
divisao = dividir(numero1, numero2)


alert("Segue o resultado das 4 operações com os números escolhidos por você (" + numero1 + " e " + numero2 + "): \n\n" + soma + subtracao + multiplicacao + divisao)