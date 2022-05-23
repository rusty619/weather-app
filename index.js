let token = config.APIKEY
let cityName, req, res
let btn = document.getElementById('btn')
let formCity = document.getElementById('form-city')
let tempName = document.getElementById('temp-name')
let tempImg = document.getElementById('temp-img')
let tempIs = document.getElementById('temp-is')
let tempFeels = document.getElementById('temp-feels')
let moreDetails = document.getElementById('more-details')
let tempDes = document.getElementById('temp-des')
let t = document.getElementById('t')
let tFeelsLike = document.getElementById('t-feels-like')
let tTempMin = document.getElementById('t-temp-min')
let tTempMax = document.getElementById('t-temp-max')
let windSpeed = document.getElementById('wind-speed')
let windGust = document.getElementById('wind-gust')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let weatherDetails = document.getElementById('details')
let showCard = document.getElementById('show-card')
let likeBtn = document.getElementById('like-btn')
let numLikes = document.getElementById('num-likes')
let unlikeBtn = document.getElementById('unlike-btn')
let countLikes = 0;

formCity.addEventListener("submit", async(event)=> {
    event.preventDefault()
    weatherDetails.style.visibility = "hidden";
    weatherDetails.setAttribute('value', 'hidden')
    cityName = event.target[0].value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}&units=imperial`
    req = await fetch(url)
    res = await req.json()
    console.log(res)
    showCard.style.visibility = "visible"
    moreDetails.style.visibility = "visible"
    tempName.innerText = res.name
    tempDes.innerText = res.weather[0].description
    tempIs.innerText = Math.floor(res.main.temp) + "℉"
    const icon = res.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    tempImg.setAttribute('src',imageURL)
    tempFeels.innerText = "Feels like " + Math.floor(res.main.feels_like) + "°"

})

moreDetails.addEventListener('click', () => {
    if (weatherDetails.getAttribute('value') === 'hidden') {
        weatherDetails.style.visibility = "visible"
        weatherDetails.setAttribute('value', 'visible')
        t.innerText = "Temp: " + Math.floor(res.main.temp) + "℉"
        tFeelsLike.innerText = "Feels like " + Math.floor(res.main.feels_like) + "℉"
        tTempMax.innerText = "Temp Max: " + Math.floor(res.main.temp_max) + "℉"
        tTempMin.innerText = "Temp Min: " + Math.floor(res.main.temp_min) + "℉"
        windSpeed.innerText = "Wind Speed: " + Math.floor(res.wind.speed) + " mph"
        windGust.innerText = "Wind Gust: " + Math.floor(res.wind.gust) + " mph"
        if (windGust.innerText === "Wind Gust: NaN mph") {
            windGust.innerText = ""
        }
        latitude.innerText = "latitude: " + Math.floor(res.coord.lat * 1000) / 1000
        longitude.innerText = "longitude: " + Math.floor(res.coord.lon * 1000) / 1000
    } else if (weatherDetails.getAttribute('value') === 'visible') {
        weatherDetails.style.visibility = "hidden"
        weatherDetails.setAttribute('value', 'hidden')
    }
})

likeBtn.addEventListener('click', ()=>{
    countLikes += 1
    numLikes.innerText = `likes: ${countLikes}`
})

unlikeBtn.addEventListener('click', ()=>{
    if(countLikes <= 0) return null;
    countLikes -= 1
    numLikes.innerText = `likes: ${countLikes}`
})
