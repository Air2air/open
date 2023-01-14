import { useState, useEffect } from "react";



export const FetchData = ({ file }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file, { headers });
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [file]);

  return { data, loading, error };
};
