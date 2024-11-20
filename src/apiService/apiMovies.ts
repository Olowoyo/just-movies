import { MovieDetailT } from "@/types/types";

export async function getMovieDetail(movieId: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.MOVIEDB_KEY}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  const movie: MovieDetailT = await data.json();
  return movie;
}

export async function getSearchMovie(searchQuery: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.MOVIEDB_KEY}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  );

  const movie: MovieDetailT = await data.json();
  return movie;
}
