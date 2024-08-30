import { Movie } from "../../../utils/types";
import classes from "./MovieCard.module.scss";
import { ReactComponent as PlayIcon } from "../../../icons/play.svg";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={classes.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={classes.poster}
      />
      <div className={classes.details}>
        <div className={classes.rating}>
          🌟 {Math.round(movie.vote_average * 10) / 10}
        </div>
        <div className={classes.title}>{movie.title}</div>
        <div className={classes.trailer}>
          <PlayIcon className={classes.playIcon} />
          Trailer
        </div>
      </div>
    </div>
  );
};

// emoji for play symbol:

export default MovieCard;
