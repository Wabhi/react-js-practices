import React, { useEffect, useState } from 'react';

const useFetchData = (url = '') => {
  const [data, setData] = useState(null);

  async function fetchDataFromApi() {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    fetchDataFromApi();
  }, [url]);

  return { data };
};

export default useFetchData;
