import { PopularMovieCardT } from "@/types/types";
import MovieCard from "./MovieCard";
import { getSearchMovie } from "@/apiService/apiMovies";
import Link from "next/link";

export default async function PopularMovies({ search }: { search: string }) {
  let availableMovie;

  if (search !== "all") {
    availableMovie = await getSearchMovie(search);
  }

  if (search === "all") {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.MOVIEDB_KEY}`,
      },
    };

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    availableMovie = await data.json();
  }

  return (
    <>
      {availableMovie.results.length < 1 ? (
        <p className="text-xl">
          No movies found &#8594;{" "}
          <Link href="/" className="text-main-primary-300 text-xl underline">
            Home
          </Link>
        </p>
      ) : (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-5">
          {availableMovie.results.map((popularMovie: PopularMovieCardT) => (
            <MovieCard key={popularMovie.id} popularMovie={popularMovie} />
          ))}
        </div>
      )}
    </>
  );
}
