import { useEffect, useState } from "react";
import axios from "axios";
import { Series, SeriesDataPoint } from "./interfaces/energy"; // Import the interfaces

const EnergyData = () => {
  const [seriesData, setSeriesData] = useState<Series[]>([]);
  const [error, setError] = useState<string | null>(null);

  const seriesId = "ELEC.SALES.CO-RES.A";
  const apiKey = "TwCWMts22mj84TVzX8tqFdFeprNbVbHlWk9IoMmY";
  const request = `https://api.eia.gov/v2/seriesid/${seriesId}?api_key=${apiKey}`;

  console.log(request);

  useEffect(() => {
    let isMounted = true; // Add this line
  
    const fetchData = async () => {
        try {
          const response = await axios.get(request);
          console.log(response.data);
          if (isMounted) { // Check if the component is still mounted
            const series = response.data.series.map((series: any) => ({
              ...series,
              data: series.data.map((dataPoint: any) => ({
                date: dataPoint[0],
                value: dataPoint[1],
              })),
            }));
            setSeriesData(series);
          }
        } catch (error) {
          if (isMounted) { // Check if the component is still mounted
            if (axios.isAxiosError(error) && error.response) {
              setError(error.response.data as string);
            } else {
              setError("An unknown error occurred");
            }
          }
        }
      };
  
    fetchData();
  
    return () => { // Add a cleanup function
      isMounted = false; // Set isMounted to false when the component unmounts
    };
  }, []);

  if (error) {
    let errorMessage;
    if (typeof error === "string") {
      errorMessage = error;
    } else if (typeof error === "object" && error !== null) {
      errorMessage = `Error: ${error.error}, Code: ${error.code}`;
    } else {
      errorMessage = "An unknown error occurred";
    }
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      {Array.isArray(seriesData) && seriesData.map((series) => (
        <div key={series.series_id}>
          <h2>{series.name}</h2>
          <p>{series.description}</p>
          <ul>
            {series.data.map((dataPoint, index) => (
              <li key={index}>
                Date: {dataPoint.date}, Value: {dataPoint.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );


  
};

export default EnergyData;
