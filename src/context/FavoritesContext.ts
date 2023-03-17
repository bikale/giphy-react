import { createContext } from "react";
import { GIF } from "../models/Gif";

interface FavioritesContextModel {
  favorites: GIF[];
  addToFavorites: (gif: GIF) => void;
  isGifFavorites: (id: string) => boolean;
  removeFavorite: (id: string) => void;
}
const deafultValues: FavioritesContextModel = {
  favorites: [],
  addToFavorites: () => {},
  isGifFavorites: () => false,
  removeFavorite: () => {},
};

// export const FavoritesContext = createContext<FavioritesContextModel | null>(
//   null
// );
export const FavoritesContext =
  createContext<FavioritesContextModel>(deafultValues);
