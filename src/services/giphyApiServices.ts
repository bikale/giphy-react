import axios from "axios";
import { GIFApiResponse, GiphyApiResponse } from "../models/Gif";

const apiKey: string = process.env.REACT_APP_GIPHY_API_KEY || "";

export const getTrendingGifs = async (
  searchTerm: string
): Promise<GiphyApiResponse> => {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: apiKey,
      limit: 10,
    },
  });
  return res.data;
};
export const getGifById = async (gifId: string): Promise<GIFApiResponse> => {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/${gifId}`, {
    params: {
      api_key: apiKey,
      limit: 10,
    },
  });
  return res.data;
};
