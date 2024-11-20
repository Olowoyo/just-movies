"use client";

import MovieCard from "@/components/MovieCard";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Page() {
  const { favorite, setFavorite } = useLocalStorage();

  function handleRemoveFavorite(id: number) {
    const updatedItem = favorite.filter((movie) => movie.id !== id);
    localStorage.setItem("favoriteMovie", JSON.stringify(updatedItem));
    setFavorite(updatedItem);
  }

  return (
    <section className="my-20">
      <h1 className="text-3xl font-semibold mb-4">Your favorite movies</h1>

      {favorite.length > 0 ? (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-5">
          {favorite.map((favoriteMovie) => (
            <MovieCard
              key={favoriteMovie.id}
              popularMovie={favoriteMovie}
              isFavorite={true}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          ))}
        </div>
      ) : (
        <p>No favorite movies</p>
      )}
    </section>
  );
}
