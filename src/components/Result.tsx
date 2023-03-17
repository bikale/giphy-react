import { Link } from "react-router-dom";
import { GIF } from "../models/Gif";
import "./Result.css";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

interface Props {
  gif: GIF;
}

const Result = ({ gif }: Props) => {
  const { addToFavorites, isGifFavorites, removeFavorite } =
    useContext(FavoritesContext);
  return (
    <li className="Result">
      <Link to={`gif/${gif.id}`}>
        <h3>{gif.title}</h3>
        <img src={gif.images.original.url} alt="the GIF" />
      </Link>
      <p className="link">
        <a href={gif.images.original.url} target="_blank" rel="noreferrer">
          Link to Giphy
        </a>
      </p>
      {!isGifFavorites(gif.id) ? (
        <button onClick={() => addToFavorites(gif)}>Add to favorites</button>
      ) : (
        <button onClick={() => removeFavorite(gif.id)}>
          Remove from Favorites
        </button>
      )}
    </li>
  );
};

export default Result;
