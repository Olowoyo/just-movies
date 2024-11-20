import { FavoriteMovieT } from "@/types/types";
import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [favorite, setFavorite] = useState<FavoriteMovieT[]>([]);

  useEffect(() => {
    const savedFavorite = localStorage.getItem("favoriteMovie");
    if (savedFavorite) {
      setFavorite(JSON.parse(savedFavorite));
    }
  }, []);

  return { favorite, setFavorite };
}
