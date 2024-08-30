import { Movie } from "../../../utils/types";
import classes from "./Banner.module.scss";

interface BannerProps {
  blur: number;
  movie: Movie;
  fade: boolean;
}

const Banner: React.FC<BannerProps> = ({ blur, movie, fade }) => {
  return (
    <div
      className={classes.banner}
      style={
        {
          "--blur-value": `${blur}px`,
          "--img-value": `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
          "--opacity-value": fade ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className={classes.darken}>
        <div className={classes.details}>
          <div className={classes.title}>{movie.title}</div>
          <div className={classes.description}>{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
