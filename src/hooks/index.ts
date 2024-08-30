import { useEffect, useState } from "react";
import { Movie } from "../utils/types";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${1}`
    );
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    if (!movies) fetchMovies();
  }, [movies]);

  return { movies, loading };
};
