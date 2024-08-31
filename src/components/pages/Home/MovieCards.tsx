import React from "react";
import MovieCard from "./MovieCard";
import classes from "./MovieCards.module.scss";
import { Movie } from "../../../utils/types";
import { useNavigate } from "react-router-dom";

interface MovieCardsProps {
  movies: Movie[];
}

const MovieCards: React.FC<MovieCardsProps> = ({ movies }) => {
  const navigate = useNavigate();

  const movieClickHandler = (id: number) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className={classes.movieCards}>
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          movieClickHandler={() => movieClickHandler(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieCards;
