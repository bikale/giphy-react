import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

import "./Main.css";
import { useEffect, useState } from "react";
import { getTrendingGifs } from "../services/giphyApiServices";
import { GIF } from "../models/Gif";

const Main = () => {
  const [gifs, setGifs] = useState<GIF[]>([]);
  const [searchTerm, setSearchTerm] = useState("pizza");

  useEffect(() => {
    getTrendingGifs(searchTerm).then((res) => setGifs(res.data));
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm
        onSearch={(query: string) => {
          console.log("called");
          console.log(query);
          setSearchTerm(query);
        }}
      />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
