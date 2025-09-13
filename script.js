function getWeather(){
    const apiKey = 'your-api-key';
    const city = d0cument.getElementById('city').value;
    
    if(!city){
        alert("please enter a city");
        return;
    }

    const currentWeatherUrl =`link?q=${city}&appid=${apiKey}`;
    const forecastUrl = `link?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(Response =>Response.json())
        .then(data =>{
            displayWeather(data);
        })
        .catch(error =>{
            console.error(`Error fetching the current data:`, error);
            alert(`Error fetchind catching the data. Try again.`);
        });
    
    fetch(forecastrUrl)
        .then(Response =>Response.json())
        .then(data =>{
            displayHourlyForcast(data);
        })
        .catch(error =>{
            console.error(`Error fetching hourly forcast data:`, error);
            alert(`Error fetchind catching hourly forecat data. Try again.`);
        });    
        
}