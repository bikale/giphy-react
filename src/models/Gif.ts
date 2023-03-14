export interface GIF {
  id: string;
  title: string;
  images: Images;
}

interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export interface GiphyApiResponse {
  data: GIF[];
}
