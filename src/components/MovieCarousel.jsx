// MovieCarousel.js
import React, { useRef } from "react";
import useMovieApi from '../hooks/useMovieApi';
import { Bounce } from "react-awesome-reveal";

const MovieCarousel = () => {
  const { movies, fetchMovies } = useMovieApi();
  const slider = useRef();

  const handleScroll = () => {
    // Puedes agregar lógica adicional al desplazarte por las películas
    // Por ejemplo, si el slider ha llegado al final, podrías llamar a fetchMovies para obtener más películas
  };

  return (
    <div
      ref={slider}
      onScroll={handleScroll}
      className="mx-1 flex-grow bg-white overflow-scroll snap-x scroll-smooth flex items-center justify-start max-h-100"
    >
      {movies.map((movie) => (
        <div key={movie.id} className="snap-start flex flex-col items-center w-40 mx-4 my-4 flex-shrink-0">
          <div className="max-h-60 overflow-hidden">
            <Bounce>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.id}
              className='object-cover object-center w-40 max-w-40 h-60 rounded'
            />
            </Bounce>
          </div>
          <p className="text-cyan-700 text-bold text-xl text-center mx-1 overflow-hidden" style={{ maxHeight: "3rem" }}>
            {movie.original_title.substring(0, 10)} 
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel;
