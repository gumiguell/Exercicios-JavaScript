function calcular() {
    let nome = document.getElementById('txtNome')
    let nota1 = document.getElementById('txtNota1')
    let nota2 = document.getElementById('txtNota2')
    let nota3 = document.getElementById('txtNota3')
    let res = document.getElementById('res')

    let media = ((Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3)

    if (media < 5)
    {
        res.innerHTML = `${nome.value} sua média foi: ${media}, você foi REPROVADO!`
    }
    else
    {
        res.innerHTML = `${nome.value} sua média foi: ${media}, você foi APROVADO!`
    }
}