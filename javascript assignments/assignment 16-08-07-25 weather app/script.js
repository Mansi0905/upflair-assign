const apiKey = "3c05a465b5c95926ffc474f7bfe565a2"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherContainer = document.getElementById("weatherContainer");
const errorText = document.getElementById("error");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        errorText.textContent = "Please enter a city name.";
        weatherContainer.classList.add("hidden");
        return;
    }
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        errorText.textContent = "";
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        errorText.textContent = error.message;
        weatherContainer.classList.add("hidden");
    }
}

function displayWeather(data) {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp} °C`;
    document.getElementById("condition").textContent = `🌤️ Condition: ${data.weather[0].main}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `💨 Wind: ${data.wind.speed} m/s`;
    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherContainer.classList.remove("hidden");
}
