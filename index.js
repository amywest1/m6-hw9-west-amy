var weatherEl = document.getElementById('weather')
var form = document.querySelector('form')
var cityInput = document.querySelector('input[type=text]')

form.onsubmit = function(e) {
    document.getElementById('weather').innerHTML = ""
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
    var h1 = document.createElement('h1')
    h1.textContent = data.name
    div.appendChild(h1)  

    var a = document.createElement('a')
    var link = document.createTextNode("Click to view map")
    a.appendChild(link)
    a.title = "Click to view map"
    a.target = "_blank"
    a.href = "https://openweathermap.org/city/" + data.id
    div.appendChild(a)

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
    
    var feelsLike = document.createElement('h2')
    feelsLike.textContent = "Feels like: " + data.main.feels_like + "\xB0 F"
    div.appendChild(feelsLike)
    
    var date = new Date(data.dt)
    console.log(date)
    var updated = document.createElement('h3')
    updated.textContent = "Last updated: " + date
    div.appendChild(updated)
    
    weatherEl.appendChild(div)
    form.reset()

})
.catch(function(error) {
    console.log(error)
    document.getElementById('weather').innerHTML = "Location not found."
})

}


