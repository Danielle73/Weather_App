# Weather App

This is simple weather application built with React, TypeScript, and Axios to fetch real-time weather data from the OpenWeather API.

## Features
- Search for current weather by city name
- Displays temperature, humidity, and weather conditions
- Handles errors for invalid city names
- Responsive design with CSS

## Technologies Used
- **React**: Component-based UI
- **TypeScript**: Strongly typed JavaScript
- **Axios**: HTTP requests to OpenWeather API
- **Vite**: Development build tool
- **CSS**: Custom styling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Enter a city name in the search box.
2. Click the "Get Weather" button.
3. View the current weather details.

## Project Structure
```
weather-app/
│-- src/
│   ├── components/
│   │   ├── Weather.tsx
│   ├── App.tsx
│   ├── main.tsx
│-- public/
│-- .env
│-- package.json
│-- vite.config.ts
```

## API Reference
- **Base URL**: `https://api.openweathermap.org/data/2.5/weather`
- **Example Request**:
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key&units=metric
  ```

## Troubleshooting
- **Module Not Found**: Run `npm install` to ensure all dependencies are installed.
- **Vite Not Starting**: Delete `node_modules` and `package-lock.json`, then reinstall dependencies:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

## Contributing
Feel free to fork this project and submit pull requests!

## License
This project is licensed under the MIT License.

