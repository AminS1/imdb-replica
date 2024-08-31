import classes from "./MovieHeader.module.scss";
import { ReactComponent as StarIcon } from "../../../icons/star.svg";
import { ReactComponent as HollowStarIcon } from "../../../icons/hollow-star.svg";
import { getDisplayRuntime, getYearFromDateString } from "../../../utils";
import { ExtendedMovie } from "../../../utils/types";

interface MovieHeaderProps {
  movie: ExtendedMovie;
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ movie }) => {
  return (
    <div className={classes.movieHeader}>
      <div className={classes.left}>
        <div className={classes.title}>{movie.title}</div>
        <div className={classes.releaseNRuntime}>
          {`${getYearFromDateString(movie.release_date)} • ${getDisplayRuntime(
            movie.runtime
          )}`}
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.imdbRating}>
          <div className={classes.IMDB_RATING}>IMDb RATING</div>
          <div className={classes.ratingContainer}>
            <StarIcon className={classes.starIcon} />
            <div className={classes.rating}>
              <div className={classes.ratingValue}>
                {Math.round(movie.vote_average * 10) / 10}
                <span className={classes.outOf}>/10</span>
              </div>
              <div className={classes.ratingCount}>{movie.vote_count}</div>
            </div>
          </div>
        </div>
        <div className={classes.yourRating}>
          <div className={classes.YOUR_RATING}>YOUR RATING</div>
          <div className={classes.ratingContainer}>
            <HollowStarIcon className={classes.hollowStarIcon} />
            <div className={classes.RATE}>Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
