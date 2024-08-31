import { useParams } from "react-router-dom";
import { useMovie } from "../../../hooks";
import classes from "./Movie.module.scss";
import MovieHeader from "./MovieHeader";
import MovieContent from "./MovieContent";

const Movie = () => {
  const { movieId } = useParams();
  const { movie } = useMovie(movieId || "");
  return movie ? (
    <div className={classes.movie}>
      <MovieHeader movie={movie} />
      <MovieContent movie={movie} />
    </div>
  ) : (
    <></>
  );
};

export default Movie;
