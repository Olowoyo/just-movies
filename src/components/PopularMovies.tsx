import { PopularMovieT } from "@/types/types";
import MovieCard from "./MovieCard";

export default async function PopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_KEY}`,
    },
  };

  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const movies: PopularMovieT = await data.json();

  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-5">
      {movies.results.map((popularMovie) => (
        <MovieCard key={popularMovie.id} popularMovie={popularMovie} />
      ))}
    </div>
  );
}
