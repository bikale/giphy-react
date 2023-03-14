import { GIF } from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifs: GIF[];
}

const ResultsList = ({ gifs }: Props) => {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <ul>
        {gifs.map((gif) => (
          <Result key={gif.id} gif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
