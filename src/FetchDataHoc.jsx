import React, { useEffect, useState } from 'react';

const FetchDataHoc = (WrapperComponenet, url = '') => {
  return (props) => {
    const [data, setData] = useState(null);
    const fetchDataFromApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    useEffect(() => {
      fetchDataFromApi();
    }, [url]);
    return <WrapperComponenet data={data} {...props} />;
  };
};

export default FetchDataHoc;
