import { useNavigate } from "react-router-dom";
import { ImageBaseUrl } from "../../../utils/constants";
import { Movie } from "../../../utils/types";
import classes from "./Banner.module.scss";

interface BannerProps {
  blur: number;
  movie: Movie;
  fade: boolean;
}

const Banner: React.FC<BannerProps> = ({ blur, movie, fade }) => {
  const navigate = useNavigate();
  const bannerClickHandler = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div
      className={classes.banner}
      style={
        {
          "--blur-value": `${blur}px`,
          "--img-value": `url("${ImageBaseUrl}${movie.backdrop_path}")`,
          "--opacity-value": fade ? 1 : 0,
        } as React.CSSProperties
      }
      onClick={bannerClickHandler}
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
