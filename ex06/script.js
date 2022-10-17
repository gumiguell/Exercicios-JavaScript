function calcular() {
    let numero1 = document.getElementById('txtNumero1')
    let numero2 = document.getElementById('txtNumero2')
    let codigo = document.getElementById('txtCodigo')
    let res = document.getElementById('res')

    if (codigo.value == 1)
    {
        let soma = 
        res.innerHTML = `${Number(numero1.value) + Number(numero2.value)}`
    }
    else if (codigo.value == 2)
    {
        res.innerHTML = `${Number(numero1.value) * Number(numero2.value)}`
    }
    else if (codigo.value == 3)
    {
        res.innerHTML = `${Number(numero1.value) / Number(numero2.value)}`
    }
}