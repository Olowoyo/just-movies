import Image from "next/image";
import star from "../../../../public/star.svg";
import { dateFormatter } from "@/utils/helpers";
import AddToFavorite from "@/components/AddToFavorite";
import { getMovieDetail } from "@/apiService/apiMovies";

type ParamsT = {
  params: Promise<{ movieId: string }>;
};

// Constructing the poster & backdrop image
const baseUrl = "https://image.tmdb.org/t/p/";
const sizeBackdrop = "w500";
const sizePoster = "w500";

export default async function Page({ params }: ParamsT) {
  const { movieId } = await params;

  const movie = await getMovieDetail(Number(movieId));

  const {
    backdrop_path,
    genres,
    poster_path,
    id,
    release_date,
    runTime,
    title,
    type,
    vote_average,
    overview,
  } = movie;

  const backdropImage = `${baseUrl}/${sizeBackdrop}/${backdrop_path}`;
  const posterImage = `${baseUrl}/${sizePoster}/${poster_path}`;

  const breadcrumb = `JustMovie / Details`;

  const favoriteMovieDate = {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
  };

  return (
    <div className="my-10">
      <div className="relative aspect-[2.8] max-md:min-h-[300px] max-md:w-full">
        <Image
          // sizes="auto"
          fill
          className="object-cover object-top md:rounded-[40px] rounded-2xl"
          quality={100}
          src={backdropImage}
          alt={title}
        />
      </div>

      <div className="bg-main-primary-800/80 backdrop-blur-sm max-w-fit p-10 -mt-[80px] lg:ml-[80px] max-lg:mx-auto rounded-3xl">
        <p className="text-sm font-normal text-main-primary-400 mb-2">
          {breadcrumb} / {title.slice(0, 15) + "..."}
        </p>
        <h3 className="md:text-3xl text-2xl font-semibold">{title}</h3>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-x-36 sm:px-20 max-sm:px-10">
        <div className="relative aspect-[0.8] rounded-3xl w-full">
          <Image
            // sizes="auto"
            quality={100}
            fill
            className="object-cover rounded-3xl w-full "
            src={posterImage}
            alt={title}
          />
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl font-bold max-lg:mt-10">{title}</h4>
          <p className="text-main-primary-100 text-xl font-normal">
            {overview}
          </p>

          <div className="text-base text-main-primary-200 font-normal flex items-center justify-center gap-x-1  bg-black py-1 px-2 rounded-lg  max-w-fit">
            <Image src={star} alt="movie rating" />
            <h4>{vote_average.toFixed(1)}</h4>
          </div>

          <div>
            <h5 className="text-base text-main-primary-100 font-normal mb-2">
              Type
            </h5>
            <p className="text-xl font-normal capitalize">{type}</p>
          </div>
          <div>
            <h5 className="text-base text-main-primary-100 font-normal mb-2">
              Release Date:
            </h5>
            <p className="text-xl font-normal capitalize">
              {dateFormatter(release_date)}
            </p>
          </div>
          <div>
            <h5 className="text-base text-main-primary-100 font-normal mb-2">
              Run Time
            </h5>
            <p className="text-xl font-normal capitalize">{runTime} min</p>
          </div>
          <div>
            <h5 className="text-base text-main-primary-100 font-normal mb-2">
              Genres
            </h5>
            <p className="flex gap-x-2">
              {genres.map((genre) => (
                <span key={genre.id} className="text-xl font-normal capitalize">
                  {genre.name},
                </span>
              ))}
            </p>
          </div>

          <AddToFavorite favoriteMovie={favoriteMovieDate} />
        </div>
      </div>
    </div>
  );
}
