document.querySelector(".hamburguer").addEventListener("click", ( ) =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#modelo").addEventListener("change", atualizarPreco)
document.querySelector("#biquini-sim").addEventListener("change", atualizarPreco)
document.querySelector("#biquini-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]"),innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temMODELO = document.querySelector("#modelo").checked
    const incluiBiquini = document.querySelector("#biquini-sim").checked
    const prazo = document.querySelector("#prazo").value
    
    let preco = qtde * 50;
    if (temMODELO) preco *= 1.1
    if (incluiBiquini) preco += 100
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
    

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
    
}