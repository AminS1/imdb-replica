import React from "react";
import MovieCard from "./MovieCard";
import classes from "./MovieCards.module.scss";
import { Movie } from "../../../utils/types";

interface MovieCardsProps {
  movies: Movie[];
}

const MovieCards: React.FC<MovieCardsProps> = ({ movies }) => {
  return (
    <div className={classes.movieCards}>
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCards;
