function start() {
    var select = document.getElementById('selecao')
    var value = parseInt(select.options[select.selectedIndex].value);
    
    
    switch (value) {
      case 0:
        alert('Você não selecionou nenhuma opção')
        break
      case 1:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "℃ --> ℉"
        document.getElementById('converter').setAttribute('onclick', 'celsiusParaFahrenheit()')
        break
      case 2:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "℃ --> K"
        document.getElementById('converter').setAttribute('onclick', 'celsiusParaKelvin()')
        break
      case 3:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "°F --> ℃"
        document.getElementById('converter').setAttribute('onclick', 'fahrenheitParaCelsius()')
        break
      case 4:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "°F --> K"
        document.getElementById('converter').setAttribute('onclick', 'fahrenheitParaKelvin()')
        break
      case 5:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "K --> ℃"
        document.getElementById('converter').setAttribute('onclick', 'kelvinParaCelsius()')
        break
      case 6:
        window.location = "#conversor"
        document.getElementById('tituloConversor').innerHTML = "Conversor de Temperatura"
        document.getElementById('paragrafo').innerHTML = "K --> °F"
        document.getElementById('converter').setAttribute('onclick', 'kelvinParaFahrenheit()')
        break     
    }
  }

// function escolha() {
//     alert('Escolha um conversor')
// }

function celsiusParaFahrenheit() {
    var valor = document.getElementById('valor').value;
    var fahrenheit = ((parseFloat(valor) * 1.8000) + 32).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = fahrenheit + "°F"
    
}

function celsiusParaKelvin() {
    var valor = document.getElementById('valor').value;
    var kelvin = (parseFloat(valor) + 273.15).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = kelvin + "K"
    
}

function fahrenheitParaCelsius() {
    var valor = document.getElementById('valor').value;
    var celsius = ((valor - 32) / 1.8).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = celsius + "°C"
    
}

function fahrenheitParaKelvin() {
    var valor = document.getElementById('valor').value;
    var celsius = (((valor - 32) / 1.8)+273.15).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = celsius + "K"
    
}

function kelvinParaCelsius() {
    var valor = document.getElementById('valor').value;
    var celsius = (valor - 273.15).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = celsius + "°C"
    
}

function kelvinParaFahrenheit() {
    var valor = document.getElementById('valor').value;
    var celsius = ((valor - 273.15) * 1.8).toFixed(2)
    document.getElementById('resultadoNaTela').innerHTML = celsius + "°F"
    
}
