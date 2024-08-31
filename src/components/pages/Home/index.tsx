import { useEffect, useState } from "react";
import Banner from "./Banner";
import MovieCards from "./MovieCards";
import { useMovies } from "../../../hooks";

const Home = () => {
  const { movies } = useMovies();
  const [currentMovie, setCurrentMovie] = useState(
    Math.round(Math.random() * 10)
  );
  const [fade, setFade] = useState(true);
  const [blur, setBlur] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const blurValue = Math.min(scrollTop / 10, 10);
    setBlur(blurValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    let timer2: NodeJS.Timeout;
    const timer = setInterval(() => {
      setFade(false);

      timer2 = setTimeout(() => {
        movies && setCurrentMovie(Math.round(Math.random() * movies.length));
        setFade(true);
      }, 500);
    }, 5000);
    return () => {
      clearInterval(timer);
      clearTimeout(timer2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [movies]);

  return (
    <div>
      {movies && movies[currentMovie] && (
        <Banner blur={blur} movie={movies[currentMovie]} fade={fade} />
      )}
      {movies && <MovieCards movies={movies} />}
    </div>
  );
};

export default Home;
