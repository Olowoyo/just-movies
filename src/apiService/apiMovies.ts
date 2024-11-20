import { MovieDetailT } from "@/types/types";

export async function getMovieDetail(movieId: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_KEY}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  const movie: MovieDetailT = await data.json();
  return movie;
}
