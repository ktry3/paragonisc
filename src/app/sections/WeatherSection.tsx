"use client";
import { Flex, Box, Text, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchWeather, WeatherData } from "../api/fetchWeather";
import InfoBlock from "@/components/infoBlock";

export default function WeatherSection() {
  const [weatherData, setWeather] = useState<WeatherData | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
    };

    getWeather();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const getImageSrc = () => {
        const weatherDescription = weatherData.weather[0].main.toLowerCase();
        const isDaytime = weatherData.weather[0].icon.endsWith('d');

        switch (weatherDescription) {
          case 'rain':
            return isDaytime ? './assets/rainny.png' : './assets/rainnyn.png';
          case 'clouds':
            return isDaytime ? './assets/cloudy.png' : './assets/cloudyn.png';
          default:
            return isDaytime ? './assets/sunny.png' : './assets/cloudyn.png';
        }
      };

      setImageSrc(getImageSrc());
    }
  }, [weatherData]);

  if (!weatherData)
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="lg" />
      </Flex>
    );

  const kelvinToCelsius = (k: number) => (k - 273.15).toFixed(1);
  const isDaytime = weatherData.weather[0].icon.endsWith('d');
  const timeOfDay = isDaytime ? 'Day' : 'Night';

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={10}
      mb="10px"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="1200px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box width="100%">
        <Box mb={4} bg="rgba(0, 0, 0, 0.1)" borderRadius="md" padding="8px">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
            Weather Now
          </Text>
        </Box>

        <Box
          bg="blue.200"
          backgroundImage={`url(${imageSrc})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="lg"
          minHeight="700px"
          width="100%"
          padding="16px"
          textAlign="center"
          boxShadow="md"
          fontFamily="Arial, sans-serif"
        >
          <Box mb={4} bg="rgba(255, 255, 255, 0.1)" borderRadius="md" padding="8px" pt="20px">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              {weatherData.name}, {weatherData.sys.country}
            </Text>
            <Text fontSize="sm" color="white">
              Latitude: {weatherData.coord.lat}, Longitude: {weatherData.coord.lon}
            </Text>
            <Text fontSize="lg" color="white" mt={2}>
              Time of Day: {timeOfDay}
            </Text>
          </Box>

          <Box mb={4} bg="rgba(255, 255, 255, 0.1)" borderRadius="md" padding="8px" py="20px">
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              mx="auto"
            />
            <Text color="white">{weatherData.weather[0].description}</Text>
          </Box>

          <Box mb={6} bg="rgba(0, 0, 0, 0.3)" borderRadius="md" padding="8px" py="20px">
            <Text fontSize="3xl" fontWeight="bold" color="white">
              {kelvinToCelsius(weatherData.main.temp)}°C
            </Text>
            <Text color="white">Feels like: {kelvinToCelsius(weatherData.main.feels_like)}°C</Text>
          </Box>

          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3} mb={4} py="20px">
            <InfoBlock title="Min Temp" value={`${kelvinToCelsius(weatherData.main.temp_min)}°C`} />
            <InfoBlock title="Max Temp" value={`${kelvinToCelsius(weatherData.main.temp_max)}°C`} />
            <InfoBlock title="Humidity" value={`${weatherData.main.humidity}%`} />
            <InfoBlock title="Pressure" value={`${weatherData.main.pressure} hPa`} />
            <InfoBlock title="Wind Speed" value={`${weatherData.wind.speed} m/s`} />
            <InfoBlock title="Cloudiness" value={`${weatherData.clouds.all}%`} />
          </SimpleGrid>
        </Box>
      </Box>

      <Box width="100%">
        <Box mb={4} bg="rgba(0, 0, 0, 0.1)" borderRadius="md" padding="8px" justifyContent="center">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
            Location Map
          </Text>
        </Box>
        <Box
          bg="gray.200"
          borderRadius="lg"
          minHeight="700px"
          height={{ base: "300px", md: "700px" }}
          textAlign="center"
          padding="20px"
          boxShadow="md"
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://maps.google.com/maps?q=11.579164926509709,104.8944976995995&z=12&output=embed`}
          ></iframe>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
