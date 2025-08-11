import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherApi() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const city = "Dhaka";  // আপনার ইচ্ছামত সিটি বসান

  useEffect(() => {
    const apiKey = "e3f74f6078350228cefef30570aeeff7"; // এখানে OpenWeatherMap API Key বসান
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch(() => {
        setError("Weather data fetch করতে সমস্যা হয়েছে");
      });
  }, [city]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!weather) return <p>Loading weather data...</p>;

  return (
    <div className=" flex items-center gap-1 justify-start">
      <h3 className="text-lg font-semibold ">{weather.name}</h3>
      <p className="capitalize">{weather.weather[0].description}</p>|
      <p> {weather.main.temp} °C</p>
      {/* <p>আর্দ্রতা: {weather.main.humidity} %</p> */}
    </div>
  );
}
