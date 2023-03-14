import { GIF } from "../models/Gif";
import "./Result.css";

interface Props {
  gif: GIF;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <h3>{gif.title}</h3>
      <img src={gif.images.original.url} alt="the GIF" />
      <p className=".link">
        <a href={gif.images.original.url} target="_blank" rel="noreferrer"></a>
      </p>
    </li>
  );
};

export default Result;
