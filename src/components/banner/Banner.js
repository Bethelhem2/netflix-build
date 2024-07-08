import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../../utils/axios"
import requests from "../../utils/requests"

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflexOriginals);
    //   console.log(request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    //   console.log(request);
    } 
   
    fetchData();
  }, []);
console.log(movie);








  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }
  return (
    <header className='banner' style={{
        backgroundSize : "cover",
        backgroundImage :  `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition : "center center",
    }}>

        <div className='banner__contents'>
<div className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</div>
<div className='banner__buttons'>
    <button className='banner__button'>Play</button>
    <button className='banner__button'>My List</button>
     </div>
     <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner__fadeBottom '></div>
     
    </header>
  )
}

export default Banner




// import React, { useEffect, useState } from 'react';
// import './Banner.css';
// import axios from './axios';
// import requests from './requests';

// function Banner() {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchNetflexOriginals);
//       const randomIndex = Math.floor(Math.random() * request.data.results.length - 1);
//       setMovie(request.data.results[randomIndex]);
//     }

//     fetchData();
//   }, []);

//   function truncate(string, n) {
//     return string?.length > n ? string.substr(0, n - 1) + '...' : string;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: 'cover',
//         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//         backgroundPosition: 'center center',
//       }}
//     >
//       {movie && (
//         <div className="banner__contents">
//           <div className="banner__title">{movie?.name || movie?.title}</div>
//           <div className="banner__buttons">
//             <button className="banner__button">Play</button>
//             <button className="banner__button">My List</button>
//           </div>
//           <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
//         </div>
//       )}
//       <div className="banner__fadeBottom"></div>
//     </header>
//   );
// }

// export default Banner;










// import React, { useEffect, useState } from 'react'
// import axios from "./axios";
// import requests from './requests';
// import "./Banner.css"

// const Banner = () => {
//     const [movie, setMovie] = useState({});
//     useEffect(() => {
//         (async () => {
//             try {
//                 const request = await axios.get(requests.fetchNetflixOriginals)
//                 // console.log(request)
//                 setMovie(request.data.results[
//                     Math.floor(Math.random() * request.data.results.length -1 )
//                 ]);
//             }
//              catch (error) {
//                 console.log("error", error);
//             }
//         })()
//     }, []);


//     function truncate(str, n) {
//         return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//     }
//   return (
//       <div
//           className="banner"
//           style={{
//               backgroundSize: "cover",
//               backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat"
//           }}
//       >
//           <div className="banner__contents">
//               <h1 className="banner__title">
//                   {movie?.title || movie?.name || movie?.original_name}
//               </h1>
//               <div className="banner__buttons">
//                   <button className="banner__button play">Play</button>
//                   <button className="banner__button">My List</button>
//               </div>
//               <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
//           </div>
//           <div className="banner__fadeBottom" />
//       </div>
//   )
// }

// export default Banner