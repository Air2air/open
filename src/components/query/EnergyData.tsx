import { useEffect, useState } from "react";
import axios from "axios";

// Import the updated interfaces
import { Route, EIADataPoint } from "./interfaces/api";

const EnergyData = ({ seriesId, length, route }) => {
  const [error, setError] = useState<string | null>(null);
  // Update the state to hold either route data or series data
  const [data, setData] = useState<Array<Route | EIADataPoint>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const endPoint = "https://api.eia.gov/v2";
  const apiRoute = route.toLowerCase();
  const apiKey = "TwCWMts22mj84TVzX8tqFdFeprNbVbHlWk9IoMmY";
  // Ensure the request URL is correctly formatted
  const request = `${endPoint}/${apiRoute}?api_key=${apiKey}&num=${length}`;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(request);
        if (!isMounted) {
          return;
        }
        // Check if the response matches the updated interface structure
        if (response.data?.response?.routes) {
          setData(response.data.response.routes);
        } else if (response.data?.response?.series) {
          setData(response.data.response.series.flatMap(series => series.data));
        } else {
          setError("Unexpected API response structure");
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }
        if (axios.isAxiosError(error) && error.response) {
          setError(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else {
          setError("An error occurred while fetching data");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [seriesId, length, route]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Update the return statement to handle both routes and series data
  return (
    <div>
      {data.map((item, index) => {
        if ('period' in item && 'data' in item) {
          // Render series data
          return (
            <div key={index} className="flex flex-row justify-between items-center">
              <h4>Date: {item.period}</h4>
              <p>Value: {item.data}</p>
            </div>
          );
        } else if ('id' in item && 'name' in item && 'description' in item) {
          // Render route data
          return (
            <div key={index} className="flex flex-row justify-between items-center">
              <div>ID:<br /> {item.id}</div>
              <div>Name:<br /> {item.name}</div>
              <div>Description:<br /> {item.description}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default EnergyData;