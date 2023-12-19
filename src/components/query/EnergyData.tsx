import { useEffect, useState } from "react";
import axios from "axios";
import { DataPoint } from "./interfaces/energy"; // Import the interfaces




const EnergyData = () => {
  const [error, setError] = useState<string | null>(null);
  const [seriesData, setSeriesData] = useState<DataPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const seriesId = "ELEC.SALES.CO-RES.A";
  const apiKey = "TwCWMts22mj84TVzX8tqFdFeprNbVbHlWk9IoMmY";
  const request = `https://api.eia.gov/v2/seriesid/${seriesId}?api_key=${apiKey}`;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(request);
        if (isMounted) {
          if (
            response.data &&
            response.data.response &&
            Array.isArray(response.data.response.data)
          ) {
            const series = response.data.response.data.map(
              (dataPoint: any) => ({
                date: dataPoint.period.toString(),
                value: dataPoint.sales,
                stateId: dataPoint.stateid,
                stateDescription: dataPoint.stateDescription,
                sectorId: dataPoint.sectorid,
                sectorName: dataPoint.sectorName,
                salesUnits: dataPoint["sales-units"],
              })
            );
            setSeriesData(series);
          } else {
            setError("Unexpected API response structure");
          }
        }
      } catch (error) {
        if (isMounted) {
          if (axios.isAxiosError(error) && error.response) {
            setError(error.response.data as string);
          } else {
            setError("An unknown error occurred");
          }
        }
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    let errorMessage;
    if (typeof error === "string") {
      errorMessage = error;
    } else if (typeof error === "object" && error !== null) {
      errorMessage = `Error:  Code: `;
    } else {
      errorMessage = "An unknown error occurred";
    }
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      {seriesData.map((dataPoint, index) => (
        <div key={index}>
          <h2>
            {dataPoint.stateDescription} ({dataPoint.date})
          </h2>
          <p>{dataPoint.sectorName}</p>
          <p>
            Sales: {dataPoint.value} {dataPoint.salesUnits}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EnergyData;