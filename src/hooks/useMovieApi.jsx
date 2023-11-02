import { useState, useEffect } from 'react';
import axios from 'axios';
// ...

const useMovieApi = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b698a9b17ce13d3555adec91be38b278";

  const [movies, setMovies] = useState([]);

  const fetchRandomMovies = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          sort_by: "popularity.desc",
          page: 1, // Puedes ajustar la página según sea necesario
        },
      });

      // Seleccionar al azar de los primeros 1000 resultados
      const randomMovies = results.slice(0, 1000).sort(() => Math.random() - 0.5);

      setMovies(randomMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchRandomMovies();
  }, []); 

  return { movies, fetchRandomMovies };
};

// ...


export default useMovieApi;
