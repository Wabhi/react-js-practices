// import React from 'react';
// import useFetchData from './useFetchData';

// const Albums = () => {
//   const { data } = useFetchData('https://jsonplaceholder.typicode.com/albums');
//   console.log('albums data.......', data);
//   return (
//     <>
//       <h4>My Albums List</h4>
//       {data?.slice(0, 15).map((item) => {
//         return <li key={item.id}>{item.title}</li>;
//       })}
//     </>
//   );
// };

// export default Albums;

import React from 'react';
import useFetchData from './useFetchData';
import FetchDataHoc from './FetchDataHoc';

const Albums = ({ data }) => {
  //const { data } = useFetchData('https://jsonplaceholder.typicode.com/albums');
  console.log('albums data.......', data);
  return (
    <>
      <h4>My Albums Lists</h4>
      {data?.slice(0, 15).map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </>
  );
};

export default FetchDataHoc(
  Albums,
  'https://jsonplaceholder.typicode.com/albums'
);
