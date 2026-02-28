# Weather App

A lightweight, responsive weather application built with vanilla JavaScript and HTML. Enter any city name to get current weather conditions pulled in real time from the OpenWeatherMap API.

## Features

- Search current weather by city name
- Displays current date
- Shows current temperature in Fahrenheit
- Describes current weather conditions
- Shows daily high and low temperatures
- Clean, card-based UI

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

### Prerequisites

You will need a free API key from OpenWeatherMap.

1. Go to [https://openweathermap.org/](https://openweathermap.org/) and create a free account
2. Navigate to **API Keys** in your account dashboard
3. Copy your API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mscatipilr/weatherApp.git
   cd weatherApp
   ```

2. Open `script.js` and replace the placeholder with your API key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

3. Open `index.html` in your browser — no build step or server required.

## Usage

1. Type a city name into the search field
2. Press Enter or click the search button
3. Current weather conditions for that city will display instantly

## Project Structure

```
weatherApp/
├── index.html      # App layout and structure
├── script.js       # API calls, search logic, and DOM rendering
└── README.md
```

## Author

Joann Ellis — [github.com/Mscatipilr](https://github.com/Mscatipilr)

## License

This project is open source and available under the [MIT License](LICENSE).
