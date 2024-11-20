import { PopularMovieCardT } from "@/types/types";
import Image from "next/image";
import star from "../../public/star.svg";
import Link from "next/link";
import { dateFormatter } from "@/utils/helpers";

// Constructing the poster image
const baseUrl = "https://image.tmdb.org/t/p";
const size = "w300"; //

export default function MovieCard({
  popularMovie,
  isFavorite,
  handleRemoveFavorite,
}: {
  popularMovie: PopularMovieCardT;
  isFavorite?: boolean;
  handleRemoveFavorite?: (value: number) => void;
}) {
  const { id, poster_path, release_date, title, vote_average } = popularMovie;

  const posterImage = `${baseUrl}/${size}/${poster_path}`;

  //edit the release year.
  const date = new Date(release_date);

  return (
    <div className="flex flex-col bg-main-primary-800/80 backdrop-blur-sm pt-3 px-3 pb-4 rounded-xl">
      <Link
        href={`/detail/${id}`}
        className="hover:text-main-primary-300 transition-colors duration-300"
      >
        <div className="relative aspect-[0.8]">
          <Image
            className="object-fill object-top rounded-lg"
            fill
            src={posterImage}
            alt={title}
          />

          <div className="text-base text-main-primary-200 font-normal absolute flex items-center gap-x-1 left-2 top-3 bg-main-primary-900/50 py-1 px-2 rounded-lg backdrop-blur-sm">
            <Image src={star} alt="movie rating" />
            <h4>{vote_average.toFixed(1)}</h4>
          </div>
        </div>

        <h2 className="text-base font-semibold my-3">{title}</h2>
        <h4 className="mb-1">
          <em>Release date: {dateFormatter(date)}</em>
        </h4>
      </Link>

      {isFavorite && (
        <button
          className="self-end text-main-primary-50 py-2 px-4 bg-main-primary-900 rounded-xl"
          onClick={() => handleRemoveFavorite && handleRemoveFavorite(id)}
        >
          <span className="flex items-center gap-x-1  hover:text-red-400 transition-colors duration-300">
            <span className="text-red-400">X</span> Remove
          </span>
        </button>
      )}
    </div>
  );
}
