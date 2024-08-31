import { ImageBaseUrl } from "../../../utils/constants";
import { ExtendedMovie } from "../../../utils/types";
import classes from "./MovieContent.module.scss";

interface MovieContentProps {
  movie: ExtendedMovie;
}

const MovieContent: React.FC<MovieContentProps> = ({ movie }) => {
  return (
    <div className={classes.movieContent}>
      <div className={classes.posters}>
        <div className={classes.moviePoster}>
          <img src={ImageBaseUrl + movie.poster_path} alt={movie.title} />
        </div>
        <div className={classes.movieBackdrop}>
          <img src={ImageBaseUrl + movie.backdrop_path} alt={movie.title} />
        </div>
        <div className={classes.collectionPoster}>
          <img
            src={
              ImageBaseUrl +
              (movie.belongs_to_collection?.poster_path || movie.poster_path)
            }
            alt={movie.belongs_to_collection?.name || movie.title}
          />
        </div>
      </div>
      <div className={classes.genres}>
        {movie.genres.map((genre) => (
          <div key={genre.id} className={classes.genre}>
            {genre.name}
          </div>
        ))}
      </div>
      <div className={classes.overview}>{movie.overview}</div>
    </div>
  );
};

export default MovieContent;
