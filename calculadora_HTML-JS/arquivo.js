const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const op = document.getElementById("op")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function() {
    if (!op.value.trim() || !num1.value.trim() || !num2.value.trim()) {
        resultado.textContent = "Preencha todos os campos";
        return;
    }


    const opvalidas = ['+','-','*','/']
    if (!opvalidas.includes(op.value.trim())) {
        resultado.textContent = "Escolha uma operação válida"
        return;
    }


    const a = Number(num1.value)
    const b = Number(num2.value)

    if (op.value.trim() === '+') {
        resultado.textContent = `O resultado de ${a} + ${b} é: ${a + b}`
    }
    else if (op.value.trim() === '-') {
        resultado.textContent = `O resultado de ${a} - ${b} é: ${a - b}`
    }
    else if (op.value.trim() === '*') {
        resultado.textContent = `O resultado de ${a} * ${b} é: ${a * b}`
    }
    else if (op.value.trim() === '/') {
        if (b !== 0) {
            resultado.textContent = `O resultado de ${a} / ${b} é: ${a / b}`
        }
        else {
            resultado.textContent = "Divisão por zero não existe: Erro"
        }
    }
})
