import { Link } from "react-router-dom";
import { GIF } from "../models/Gif";
import "./Result.css";

interface Props {
  gif: GIF;
}

const Result = ({ gif }: Props) => {
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
    </li>
  );
};

export default Result;
