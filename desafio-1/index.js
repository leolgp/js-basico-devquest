
function bemVindo(nome){
    alert('Seja bem vindo(a), ' + nome + '!')
}

let nome = prompt("Qual seu nome?")

while (nome == null || nome == false){
    alert("Por favor, digite seu nome.")
    nome = prompt("Qual seu nome?")
} 

bemVindo(nome)



