import { ReactNode, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { GIF } from "../models/Gif";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvide = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<GIF[]>([]);
  const addToFavorites = (gif: GIF) => {
    setFavorites((prev) => [...prev, gif]);
  };
  const removeFavorite = (gifId: string) => {
    setFavorites((prev) => prev.filter((gif) => gif.id !== gifId));
  };
  const isGifFavorites = (id: string): boolean => {
    return favorites.some((fav) => fav.id === id);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, isGifFavorites, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvide;
