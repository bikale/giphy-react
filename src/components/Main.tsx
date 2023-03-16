import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

import "./Main.css";
import { useEffect, useState } from "react";
import { getTrendingGifs } from "../services/giphyApiServices";
import { GIF } from "../models/Gif";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [gifs, setGifs] = useState<GIF[]>([]);
  const [searchParams] = useSearchParams();
  const term: string | null = searchParams.get("term");

  const [searchTerm, setSearchTerm] = useState(term ? term : "");
  useEffect(() => {
    console.log(term);
    getTrendingGifs(term ? term : "happy").then((res) => setGifs(res.data));
  }, [term]);

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
