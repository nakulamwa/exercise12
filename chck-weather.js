let city; 

async function getWeather(){
    city = document.getElementById('mycity').value;
    let Key = '93f26e3c57081a6210de53b8dcfdfea4';
    let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric;`
   try{
    let response = await fetch(wurl)
    let data =  await  response.json();
    displayData(data);
   }
   catch(error){
        console.log(" an error occurred while fetching data, please check city name again");
        document.getElementById('mydiv').innerHTML = "<span class='text-danger'> An error occurred while fetching data, please check city name again </span>"
   }        


}

function displayData(data) {
            console.log(data);
                let weatherActual = data.weather[0].main;
                console.log(data.weather[0].main);
                let currentTemp = data.main['temp']
                console.log(data.main['temp']);
                let feels_like = data.main['feels_like'];
                console.log(data.main['feels_like']);
                let humidity = data.main['humidity'];
                console.log(data.main['humidity']);
                let windSpeed = data.wind.speed;
                console.log(data.wind.speed);
                let imgicon = data.weather[0].icon;
 
            document.getElementById('mydiv').innerHTML = ` <h4> Weather in city --${city} is ${weatherActual} </h4> <br>
                    Current temp is ${currentTemp}. Feels like is ${feels_like}. Humidity is ${humidity} . <br>
                    WindSpeed is ${windSpeed}
                    <img src='http://openweathermap.org/img/w/${imgicon}.png' alt='icon here' />
                `;               
     
    }
