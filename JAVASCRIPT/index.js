
function confirmar() {
  var tarifaTotal = document.getElementById('tarifa')
  var consumoTotal = document.getElementById('consumo')
  var resultadoTotal = document.getElementById('resultado')

  
  if(tarifaTotal.value.length == ''){
    window.alert('Digite um número')
  }
  else {
    resultadoTotal.innerHTML = `Resultado: ${tarifaTotal.value}`
  }
  
}

function limpar() {
  var resultadoTotal = document.getElementById('resultado')
  resultadoTotal.innerHTML = 'Resultado: '
}

//Botão Confirmar
var botao = document.getElementById('botaoConfirmar')
botao.addEventListener("click", confirmar)

//Botão Limpar
var botao2 = document.getElementById('botaoLimpar')
botao2.addEventListener("click", limpar)