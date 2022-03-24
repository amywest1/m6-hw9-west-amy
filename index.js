var currentWeather = document.getElementById('weather')
var form = document.querySelector('form')
var cityInput = document.querySelector('input[type=text]')

form.onsubmit = function(e) {
    e.preventDefault()
    var formData = new FormData(e.target)
    console.log(cityInput.value)
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=b0b254017f8d7a11c203615608c092a8&units=imperial&q=' + cityInput.value)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
    console.log(data)
    })
    .catch(function(err) {
    console.log(err)
    })
}


