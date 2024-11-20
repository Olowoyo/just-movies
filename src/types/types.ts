export type PopularMovieCardT = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: Date;
};

export type FavoriteMovieT = PopularMovieCardT;

export type PopularMovieT = {
  results: PopularMovieCardT[];
};

export type MovieDetailT = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  type: "movie";
  runTime: number;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: Date;
  overview: string;
};
