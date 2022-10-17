function calcular() {
    let valorA = document.getElementById('txtValorA')
    let valorB = document.getElementById('txtValorB')
    let valorC = document.getElementById('valorC')

    if (valorA.value == valorB.value)
    {
        let soma = (Number(valorA.value)) + (Number(valorB.value))
        valorC.innerHTML = `${soma}`
    }
    else
    {
        let multiplicacao = Number(valorA.value) * Number(valorB.value)
        valorC.innerHTML = `${multiplicacao}`
    }
}