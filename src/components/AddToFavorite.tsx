"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { FavoriteMovieT } from "@/types/types";
import Link from "next/link";

export default function AddToFavorite({
  favoriteMovie,
}: {
  favoriteMovie: FavoriteMovieT;
}) {
  const { favorite, setFavorite } = useLocalStorage();

  const alreadyAddedToFavorite = favorite.find(
    (movie) => movie.id === favoriteMovie.id
  )?.id;

  function handleAddToFavorite() {
    const updatedItem = [...favorite, favoriteMovie];
    localStorage.setItem("favoriteMovie", JSON.stringify(updatedItem));
    setFavorite(updatedItem);
  }

  function handleRemoveFavorite(id: number) {
    const updatedItem = favorite.filter((movie) => movie.id !== id);
    localStorage.setItem("favoriteMovie", JSON.stringify(updatedItem));
    setFavorite(updatedItem);
  }

  if (alreadyAddedToFavorite)
    return (
      <>
        <button
          className="self-end text-main-primary-900 py-2 px-4 bg-main-primary-200/60 rounded-xl"
          onClick={() => handleRemoveFavorite(favoriteMovie.id)}
        >
          <span className="flex items-center gap-x-2  hover:text-red-950 transition-colors duration-300 font-bold">
            <span className="text-red-600">x</span> Remove from favorite
          </span>
        </button>

        <Link
          className="block max-w-fit p-2 rounded-xl hover:text-main-primary-200 ring-1 ring-main-primary-200"
          href="/favorites"
        >
          View favorites &#8594;
        </Link>
      </>
    );

  return (
    <button
      className="self-end text-green-100 py-2 px-4 bg-main-primary-200/60 rounded-xl"
      onClick={() => handleAddToFavorite()}
    >
      <span className="flex items-center gap-x-2  hover:text-green-400 transition-colors duration-300">
        <span className="text-green-400">+</span> Add to favorite
      </span>
    </button>
  );
}
