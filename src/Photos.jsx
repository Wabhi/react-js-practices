// import React from 'react';
// import useFetchData from './useFetchData';

// const Photos = () => {
//   const { data } = useFetchData('https://jsonplaceholder.typicode.com/photos');
//   console.log('photos data.......', data);
//   return (
//     <>
//       <h4>My Albums List</h4>
//       {data?.slice(0, 15).map((item) => {
//         return <li key={item.id}>{item.title}</li>;
//       })}
//     </>
//   );
// };

// export default Photos;

import React from 'react';
import useFetchData from './useFetchData';
import FetchDataHoc from './FetchDataHoc';

const Photos = ({ data }) => {
  //const { data } = useFetchData('https://jsonplaceholder.typicode.com/photos');
  console.log('photos data.......', data);
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
  Photos,
  'https://jsonplaceholder.typicode.com/photos'
);
