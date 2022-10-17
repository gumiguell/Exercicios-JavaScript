function médiaAritmética() {
    let nota1 = document.getElementById('txtNota1')
    let nota2 = document.getElementById('txtNota2')
    let nota3 = document.getElementById('txtNota3')
    let res = document.getElementById('res')

        let resultado = ((Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3)
        res.innerHTML = `O resultado é ${resultado}`
}