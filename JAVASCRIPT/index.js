
function confirmar() {
  var nomeEletro = document.getElementById('eletro')
  var potenciaTotal = document.getElementById('potencia')
  var consumoDia = document.getElementById('horasDia')
  var consumoMes = document.getElementById('diasMes')
  var resultadoTotal = document.getElementById('resultado')

  
  if(potenciaTotal.value.length == '' || consumoDia.value.length == '' || consumoMes.value.length == ''){
    window.alert('Digite um número')
  }
  else if(nomeEletro.value == '') {
    window.alert('Digite o nome do eletrodoméstico')
  }
  else {
    /* resultadoTotal.innerHTML = `Resultado: ${potenciaTotal.value}` */

    var calculoKW = potenciaTotal.value * consumoDia.value * consumoMes.value / 1000

    resultadoTotal.innerText = `${nomeEletro.value} = ${calculoKW} kWh`
  }
}




/* CONSUMO (kWh) = potência (W) x horas de uso por dia (h) x dias de uso no mês / 1000. */

function limpar() {
  var nomeEletro = document.getElementById('eletro')
  var potenciaTotal = document.getElementById('potencia')
  var consumoDia = document.getElementById('horasDia')
  var consumoMes = document.getElementById('diasMes')
  var resultadoTotal = document.getElementById('resultado')

  nomeEletro.value = ''
  potenciaTotal.value = ''
  consumoDia.value = ''
  consumoMes.value = ''
  resultadoTotal.innerHTML = ''
}

//Botão Confirmar
var botaoConf = document.getElementById('botaoConfirmar')
botaoConf.addEventListener("click", confirmar)

//Botão Limpar
var botaoLimp = document.getElementById('botaoLimpar')
botaoLimp.addEventListener("click", limpar)