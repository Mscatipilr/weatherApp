/*
You must create a website with the following items:

- A page with a heading and sections separating your content

- The page must be styled either using a CSS framework or your own custom CSS

- You must make an API call to the service and get the weather data

- You must accept input from the user asking for the zip code they would like the weather of

- You must display the following data points on the page from the API:

    Current Date, City from the zipcode, Current temperature in ferinheight, current conditions, Temp Hi/Lo

 

You must check for the following items based on the requirements below:

-  Was the item turned in on time? (10pts)

- Is the HTML set up properly with the right imports, structure, etc? (10pts)

- Is the page using CSS or a framework such as bootstrap? (5pts)

- Is there a place for the user to enter their input? (10pts)

- Does the call to the API work? (20pts)

- Does the page have the data points for the requirements? (25pts total, 5 for each data point)

- Does the site actually work and accomplish the point of the activity? (20pts, 10 pts if not hosted on Github Pages)

 

- Add one point for each medium and advanced requirement they accomplished (+1pt each)

Possible Score: 100 (plus bonus but not over 100)

use http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${apiKey} to get the latitude and longitude for a zip code then use 
https://api.openweathermap.org/data/2.5/weaher?lat=${latitude}&lon=${longitude}&appid=${apiKey} 
to get the weather data. make sure to modify the variable names to fit your code
*/
const apiKey = '3bea7a5d48964a560e31e0af70da7423';

document.getElementById('getWeather').addEventListener('click', () => {
    const zipCode = document.getElementById('zipCode').value;
    if (!zipCode) {
      alert('Please enter a zip code');
      return;
    }
  
    getCoordinatesFromZip(zipCode)
      .then(coords => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=imperial`);
      })
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function getCoordinatesFromZip(zip) {
    return fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        return { latitude: data.lat, longitude: data.lon };
      });
  }
  
  function displayWeather(data) {
    const weatherContainer = document.getElementById('weatherContainer');
    const currentDate = new Date().toLocaleDateString();
    const city = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;
    const tempHigh = data.main.temp_max;
    const tempLow = data.main.temp_min;
  
    weatherContainer.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${currentDate}</h5>
          <p class="card-text">City: ${city}</p>
          <p class="card-text">Temperature: ${temperature} °F</p>
          <p class="card-text">Conditions: ${conditions}</p>
          <p class="card-text">High: ${tempHigh} °F</p>
          <p class="card-text">Low: ${tempLow} °F</p>
        </div>
      </div>
    `;
  }