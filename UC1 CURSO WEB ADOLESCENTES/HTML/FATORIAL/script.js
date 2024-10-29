function fatorial(n1) {
    let vFatorial = 1;
    
    for (let i = 1; i <= n1; i++) {
        vFatorial *= i;
    }
    
    return vFatorial;
}
function calculaFatorial() {
const n1 = parseInt(document.getElementById("nota1").value);

const resultado = fatorial(n1)
document.getElementById("resultadoFatorial").textContent = `A fatorial de ${n1} e ${resultado}
`}