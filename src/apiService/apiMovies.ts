import { MovieDetailT } from "@/types/types";

export async function getMovieDetail(movieId: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWViNzM5MTRjOWM4NTBiZWEyZTFiMzE3MWYxNTkzZSIsIm5iZiI6MTczMTk0MTg2OC42ODM1NDUsInN1YiI6IjY1YjE2YTE5MmZlMmZhMDE5MzNkMmU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DqXIJix1YP0DYzEU-N6Fp8jxyEg2qOFEs1AVPbdYc0g",
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  const movie: MovieDetailT = await data.json();
  return movie;
}
