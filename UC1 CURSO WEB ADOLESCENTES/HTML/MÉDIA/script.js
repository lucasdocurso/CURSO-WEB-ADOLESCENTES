function media(n1, n2, n3) {
    let resultado = (n1 + n2 + n3) / 3

    return resultado
}

function calculaMedia() {
const n1 = parseInt(document.getElementById("nota1").value);
const n2 = parseInt(document.getElementById("nota2").value);
const n3 = parseInt(document.getElementById("nota3").value);
const resultado = media (n1, n2, n3)
document.getElementById("resultadoMedia").textContent = `A média é igual a ${resultado}
`}