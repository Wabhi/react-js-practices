// import React from 'react';
// import useFetchData from './useFetchData';

// const Posts = () => {
//   const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts');
//   console.log('posts data......', data);
//   return (
//     <>
//       <h4>My Albums List</h4>
//       {data?.slice(0, 15).map((item) => {
//         return <li key={item.id}>{item.title}</li>;
//       })}
//     </>
//   );
// };

// export default Posts;

import React from 'react';
import useFetchData from './useFetchData';
import FetchDataHoc from './FetchDataHoc';

const Posts = ({ data }) => {
  //const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts');
  console.log('posts data......', data);
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
  Posts,
  'https://jsonplaceholder.typicode.com/posts'
);
