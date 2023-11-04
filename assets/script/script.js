let city = "rouen"
const myAPIKey = "1ed69be7f97ce4c145cec77bf1e9bb23"

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myAPIKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let count = 1
        for (let day of data.list) {
            if (count == 6) {
                return

            }
            document.querySelector('.weatherData').innerHTML += `
    
        <div class="jourActuel">
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            <div class="info">
                <p> ${day.dt_txt} </p>
                <p> ${day.main.temp} C°</p>
                <p> ${day.weather[0].description} </p>
            </div>

        </div>

                `
            count++
        }



    })