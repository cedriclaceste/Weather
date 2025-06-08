const apiKey = '15871b2f0f05d9944029a97f9fdcb6a2'; // Replace with your OpenWeather API key

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
      document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      alert(error.message);
    });
}
