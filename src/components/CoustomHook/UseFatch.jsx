// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export default function UseFatch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Data Fatching is not seccesful");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
}
