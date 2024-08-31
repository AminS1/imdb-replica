import { Movie } from "../../../utils/types";
import classes from "./MovieCard.module.scss";
import { ReactComponent as StarIcon } from "../../../icons/star.svg";
import { ReactComponent as PlayIcon } from "../../../icons/play.svg";
import { ImageBaseUrl } from "../../../utils/constants";
interface MovieCardProps {
  movie: Movie;
  movieClickHandler: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, movieClickHandler }) => {
  return (
    <div className={classes.movieCard} onClick={movieClickHandler}>
      <img
        src={`${ImageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className={classes.poster}
      />
      <div className={classes.details}>
        <div className={classes.rating}>
          <StarIcon className={classes.starIcon} />{" "}
          {Math.round(movie.vote_average * 10) / 10}
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

export default MovieCard;
