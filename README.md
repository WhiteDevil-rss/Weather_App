# Weather App

This is a React-based Weather App that allows users to check the current weather in various cities. The app fetches data from a weather API and displays the temperature, humidity, and general weather conditions for the selected location.

## Features

- Search for current weather by city.
- Displays temperature, humidity, and weather conditions.
- Responsive design for use on all devices.
- Error handling for incorrect city inputs.

## Installation

Follow these steps to get the app running on your local machine:
- git clone
- npm run dev

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/WhiteDevil-rss/Weather_App.git
   ```

2. Navigate to the project directory.

   ```bash
   cd Weather_App
   ```

3. Install the necessary dependencies.

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your port number.

   ```
   PORT= PORT NUMBER 
   ```

5. Go to WeatherApp.jsx and Change API Key.

6. Start the development server.

   ```bash
   npm run dev 
   ```

7. Open your browser and navigate to:

   ```
   http://localhost:3000
    ```

## Usage

- Enter the name of the city in the search box.
- The app will fetch and display the current weather conditions for the city.
- You can check multiple cities by repeating the search process.

## Built With

- [React](https://reactjs.org/) - Frontend library
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data provider
- [Axios](https://axios-http.com/) - HTTP client for API calls

## Project Structure

```
weather-app/
│
├── public/                     # Public folder
│   ├── vite.svg                # SVG logo
├── src/                        # Source folder
│   ├── App.css                 # Main app CSS
│   ├── App.jsx                 # Main app component
│   ├── index.css               # App entry CSS
│   ├── InfoBox.jsx             # Information components
│   ├── SearchBox.jsx           # Search components
│   ├── SearchBox.css           # Search components CSS
│   ├── WeatherApp.jsx          # Main components
│   └── main.jsx                # App entry point
│
├── .eslintrc.cjs               # Vite dependencies
├── index.html                  # App entry point 
├── package.json                # Project dependencies
├── package-lock.json           # Project dependencies
├── vite.config.js              # Vite configuration file
└── README.md                   # Project documentation
```

## API Key

This app uses the OpenWeatherMap API to fetch weather data. You can sign up for a free API key [here](https://openweathermap.org/appid).

Once you have the API key, add it to your `.env` file as shown in the Installation section.

## Contributing

If you'd like to contribute, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This file provides a complete guide for users and developers who want to use or contribute to your project.
