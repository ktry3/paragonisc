// src/utils/fetchWeather.ts
"use server";

import { WeatherData } from '@/models/weatherModel';

export const fetchWeather = async (): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=11.57916&lon=104.89449&appid=${process.env.API_WEATHER_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: WeatherData = await response.json();
    return data;

  } catch (error) {
    return null;
  }
};

export type { WeatherData };
