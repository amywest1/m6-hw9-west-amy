var weatherEl = document.getElementById('weather')
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
    
    var div = document.createElement('div')
    var h2 = document.createElement('h2')
    h2.textContent = data.name
    div.appendChild(h2)  
    
    var iconCode = data.weather[0].icon
    var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + ".png";
    var img = document.createElement('img')
    img.src = iconUrl
    div.appendChild(img)

    var conditions = document.createElement('h2')
    conditions.textContent = data.weather[0].description
    div.appendChild(conditions)

    var currentTemp = document.createElement('h2')
    currentTemp.textContent = "Current: " + data.main.temp + "\xB0 F"
    div.appendChild(currentTemp)
    
    weatherEl.appendChild(div)
    })
    // .catch(function(err) {
    // console.log(err)
    // })
}


