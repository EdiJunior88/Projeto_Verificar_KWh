
function confirmar() {
  var nomeEletro = document.getElementById('eletro')
  var potenciaTotal = document.getElementById('potencia')
  var consumoDia = document.getElementById('horasDia')
  var consumoMes = document.getElementById('diasMes')
  var tarifaTotal = document.getElementById('tarifa')
  var resultadoTotal = document.getElementById('resultado')

  
  if(potenciaTotal.value.length == '' || consumoDia.value.length == '' || consumoMes.value.length == '' || tarifaTotal.value.length == ''){
    window.alert('Digite um número')
  }
  else if(nomeEletro.value == '') {
    window.alert('Digite o nome do eletrodoméstico')
  }
  else {
    //CONSUMO TOTAL (kWh) = potência (W) x horas de uso por dia (h) x dias de uso no mês / 1000.
    var consumoTotal = (potenciaTotal.value * consumoDia.value * consumoMes.value / 1000) * tarifaTotal.value

    resultadoTotal.innerText = `Gasto Total: ${nomeEletro.value} = ${consumoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
  }
}

function limpar() {
  var nomeEletro = document.getElementById('eletro')
  var potenciaTotal = document.getElementById('potencia')
  var consumoDia = document.getElementById('horasDia')
  var consumoMes = document.getElementById('diasMes')
  var tarifaTotal = document.getElementById('tarifa')
  var resultadoTotal = document.getElementById('resultado')

  nomeEletro.value = ''
  potenciaTotal.value = ''
  consumoDia.value = ''
  consumoMes.value = ''
  tarifaTotal.value = ''
  resultadoTotal.innerHTML = ''
}

//Botão Confirmar
var botaoConf = document.getElementById('botaoConfirmar')
botaoConf.addEventListener("click", confirmar)

//Botão Limpar
var botaoLimp = document.getElementById('botaoLimpar')
botaoLimp.addEventListener("click", limpar)