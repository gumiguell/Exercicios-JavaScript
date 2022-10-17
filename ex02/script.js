function salario() {
    let nome = document.getElementById('txtNome')
    let salario = document.getElementById('txtSalario')
    let res = document.getElementById('res')

    let aumento = (Number(salario.value)) * 0.10
    let novo_salario = (Number(salario.value)) + aumento

    res.innerHTML = `Seu novo salário é: ${novo_salario}`
}