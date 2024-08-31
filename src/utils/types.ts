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
  release_date: string;
  genre_ids?: number[];
  vote_average: number;
  vote_count: number;
  video: boolean;
  adult: boolean;
  popularity: number;
  original_language: string;
  original_title: string;
}

export interface ExtendedMovie extends Movie {
  belongs_to_collection?: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  origin_country: string[];
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface SpokenLanguage {
  iso_639_1: string;
  name: string;
  english_name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Collection {
  name: string;
  id: number;
  poster_path: string;
  backdrop_path: string;
}
