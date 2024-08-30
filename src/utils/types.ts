export interface Tab {
  title: string;
  component: JSX.Element;
  path: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  releaseDate: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  video: boolean;
  adult: boolean;
  popularity: number;
  original_language: string;
  original_title: string;
}
