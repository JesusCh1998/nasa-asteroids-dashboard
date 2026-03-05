import axios from "axios";

const BASE_URL = "https://api.nasa.gov";

const apiKey = import.meta.env.VITE_NASA_API_KEY;

export const fetchAsteroids = async (startDate, endDate) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/neo/rest/v1/feed`,
      {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: apiKey
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching asteroids:", error);
    throw error;
  }
};