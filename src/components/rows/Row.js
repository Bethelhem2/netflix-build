import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import "./Row.css"
import movierTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

function Row({ title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")



    const base_url = "https://image.tmdb.org/t/p/original/"; 

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl])
console.log(movies)
    const halndleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl('')
      } else {
        movierTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          try {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'));
        } catch (error) {
          console.error('Error parsing URL:', error);
          // Handle the case of an invalid URL
          setTrailerUrl('');
        }
      
      })
      .catch((error) => {
        console.error('Error fetching trailer:', error);
        // Handle the case of a failed trailer fetch
        setTrailerUrl('');
      });
    }
    }
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      }
    }



  return (
    <div className="row">
      <h2>{title}</h2>

      <div className='row__posters'>
      {/* {movies.map((movie) => 
      ((isLargeRow && movie.poster_path) || 
        (!isLargeRow && movie.backdrop_path)) && (
          <img onclick={() => halndleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id}
          src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
          }`} alt={movies.name}
          />
        )
           
        )} */}
        {movies?.map((movie, index) => (
          <img onClick={() => halndleClick(movie)} key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}/>
        ))}
      </div>
       <div style={{ padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
       </div>
    </div>
  )
}

export default Row;
