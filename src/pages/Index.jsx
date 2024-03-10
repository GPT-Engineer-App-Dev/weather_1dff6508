import React, { useState } from "react";
import { Box, Flex, Text, Input, IconButton, VStack, HStack, useColorModeValue, Image, Spacer } from "@chakra-ui/react";
import { FaSearch, FaCloudSun, FaWind, FaTint, FaRegCompass } from "react-icons/fa";

const Index = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    city: "New York",
    temperature: "19",
    description: "Partly Cloudy",
    wind: "5 km/h",
    humidity: "65%",
    pressure: "1015 hPa",
  });

  // Dummy function to simulate search
  const handleSearch = () => {
    // In a real app, you would make an API call to a weather service here
    // For this example, we're just setting static data
    setWeather({
      city: city,
      temperature: "23",
      description: "Sunny",
      wind: "7 km/h",
      humidity: "58%",
      pressure: "1013 hPa",
    });
  };

  return (
    <VStack p={4} spacing={4} align="stretch" bg={useColorModeValue("gray.100", "gray.800")} minH="100vh">
      <HStack px={4} py={2}>
        <Input placeholder="Search for a city..." value={city} onChange={(e) => setCity(e.target.value)} />
        <IconButton icon={<FaSearch />} onClick={handleSearch} aria-label="Search city" />
      </HStack>
      <Flex direction="column" align="center" justify="center" flexGrow={1}>
        <Text fontSize="4xl" fontWeight="bold">
          {weather.city}
        </Text>
        <Text fontSize="6xl" fontWeight="bold">
          {weather.temperature}°C
        </Text>
        <HStack>
          <FaCloudSun size="2em" />
          <Text fontSize="2xl">{weather.description}</Text>
        </HStack>
        <HStack spacing={8} mt={4}>
          <VStack>
            <FaWind size="1.5em" />
            <Text>{weather.wind}</Text>
          </VStack>
          <VStack>
            <FaTint size="1.5em" />
            <Text>{weather.humidity}</Text>
          </VStack>
          <VStack>
            <FaRegCompass size="1.5em" />
            <Text>{weather.pressure}</Text>
          </VStack>
        </HStack>
      </Flex>
      <Spacer />
      <Box textAlign="center" fontSize="xs">
        <Text>Weather data provided by GPT-ENG Weather Service</Text>
      </Box>
    </VStack>
  );
};

export default Index;
