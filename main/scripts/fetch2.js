const apiKey = "25e3fbd9558235f6de8d7256c9c56d60";
const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const citySearch = cityInput.value;

    if(citySearch){
        try {
            const weatherData = await fetchWeather(citySearch);
            console.log("Weather data:", weatherData);
    } 

        catch(error) {
            console.error("Error submitting form:", error);
        }
    }


})

async function fetchWeather(city){

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("Failed to fetch weather data");
        }
        
        return await response.json();

}

function displayError(message){
    cons
 }
