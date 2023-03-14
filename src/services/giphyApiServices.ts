import axios from "axios";
import { GiphyApiResponse } from "../models/Gif";

const apiKey: string = process.env.REACT_APP_GIPHY_API_KEY || "";

export const getTrendingGifs = async (
  searchTerm: string
): Promise<GiphyApiResponse> => {
  console.log(searchTerm);
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: apiKey,
      limit: 10,
    },
  });
  return res.data;
};
