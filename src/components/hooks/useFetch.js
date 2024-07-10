import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useFetch применился");
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        setFetchData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data: fetchData,
    loading: isLoading,
    error,
    setData: (data) => setFetchData(data),
  };
};

export default useFetch;
