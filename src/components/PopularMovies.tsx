import { PopularMovieT } from "@/types/types";
import MovieCard from "./MovieCard";

export default async function PopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWViNzM5MTRjOWM4NTBiZWEyZTFiMzE3MWYxNTkzZSIsIm5iZiI6MTczMTk0MTg2OC42ODM1NDUsInN1YiI6IjY1YjE2YTE5MmZlMmZhMDE5MzNkMmU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DqXIJix1YP0DYzEU-N6Fp8jxyEg2qOFEs1AVPbdYc0g",
    },
  };

  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const movies: PopularMovieT = await data.json();
  // console.log(movies);

  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-5">
      {movies.results.map((popularMovie) => (
        <MovieCard key={popularMovie.id} popularMovie={popularMovie} />
      ))}
    </div>
  );
}
